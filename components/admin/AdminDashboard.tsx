'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type OrderStatus = 'to_pack' | 'packed' | 'shipped' | 'cancelled';

type Address = {
  line1?: string | null;
  line2?: string | null;
  city?: string | null;
  state?: string | null;
  postal_code?: string | null;
};

export type AdminOrder = {
  id: string;
  stripe_session_id: string;
  customer_name: string | null;
  customer_email: string | null;
  shipping_address: Address | null;
  line_items: { name: string | null; quantity: number | null; amount_total: number | null }[];
  amount_total: number;
  status: OrderStatus;
  tracking_number: string | null;
  created_at: string;
};

const money = (cents: number) => `$${(cents / 100).toFixed(2)}`;

const STATUS_STYLE: Record<OrderStatus, { label: string; bg: string; color: string }> = {
  to_pack: { label: 'To pack', bg: '#FEE2E2', color: '#B91C1C' },
  packed: { label: 'Packed', bg: '#FEF3C7', color: '#B45309' },
  shipped: { label: 'Shipped', bg: '#DCFCE7', color: '#15803D' },
  cancelled: { label: 'Cancelled', bg: '#F3F4F6', color: '#6B7280' },
};

const SORT_RANK: Record<OrderStatus, number> = { to_pack: 0, packed: 1, shipped: 2, cancelled: 3 };

function formatAddress(a: Address | null) {
  if (!a) return 'No shipping address on file';
  return [a.line1, a.line2, `${a.city ?? ''}, ${a.state ?? ''} ${a.postal_code ?? ''}`.trim()]
    .filter(Boolean)
    .join('\n');
}

function OrderCard({ order }: { order: AdminOrder }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [tracking, setTracking] = useState('');
  const [showTracking, setShowTracking] = useState(false);
  const [copied, setCopied] = useState(false);
  const style = STATUS_STYLE[order.status];
  const address = formatAddress(order.shipping_address);

  async function update(status: OrderStatus, trackingNumber?: string) {
    setBusy(true);
    setError('');
    const res = await fetch('/api/admin/orders', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: order.id, status, trackingNumber }),
    });
    setBusy(false);
    if (res.ok) {
      setShowTracking(false);
      router.refresh();
    } else {
      setError('Something went wrong. Try again.');
    }
  }

  async function copyAddress() {
    const text = [order.customer_name, address].filter(Boolean).join('\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setError('Couldn’t copy. Select the address manually.');
    }
  }

  const buttonClass = 'btn-pill px-4 py-1.5 text-[13px] disabled:opacity-50';

  return (
    <div className="rounded-2xl border p-4 md:p-5" style={{ borderColor: '#E5E7EB', opacity: order.status === 'cancelled' ? 0.6 : 1 }}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[15px]" style={{ color: '#171717', fontWeight: 700 }}>
            {order.customer_name ?? 'Unknown'}
          </p>
          <p className="text-[12px]" style={{ color: '#9CA3AF', fontWeight: 500 }}>
            {order.customer_email ?? 'no email'} · #{order.stripe_session_id.slice(-8).toUpperCase()} ·{' '}
            {new Date(order.created_at).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}
          </p>
        </div>
        <span className="shrink-0 rounded-full px-3 py-1 text-[12px]" style={{ background: style.bg, color: style.color, fontWeight: 700 }}>
          {style.label}
        </span>
      </div>

      <ul className="mt-3 flex flex-col gap-1">
        {order.line_items.map((item, i) => (
          <li key={i} className="text-[14px]" style={{ color: '#171717', fontWeight: 600 }}>
            {item.quantity}× {item.name}
          </li>
        ))}
      </ul>

      <div className="mt-3 flex items-start justify-between gap-3">
        <p className="whitespace-pre-line text-[13px]" style={{ color: '#404040', fontWeight: 500, lineHeight: 1.5 }}>
          {address}
        </p>
        <p className="shrink-0 text-[14px]" style={{ color: '#171717', fontWeight: 700 }}>{money(order.amount_total)}</p>
      </div>

      {order.tracking_number && (
        <p className="mt-2 text-[12px]" style={{ color: '#6B7280', fontWeight: 500 }}>Tracking: {order.tracking_number}</p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button onClick={copyAddress} className={buttonClass}>{copied ? 'Copied!' : 'Copy address'}</button>
        {order.status === 'to_pack' && (
          <button disabled={busy} onClick={() => update('packed')} className="btn-pill-filled px-4 py-1.5 text-[13px] disabled:opacity-50">
            Mark packed
          </button>
        )}
        {(order.status === 'to_pack' || order.status === 'packed') && !showTracking && (
          <button disabled={busy} onClick={() => setShowTracking(true)} className={buttonClass}>Mark shipped</button>
        )}
        {order.status === 'packed' && (
          <button disabled={busy} onClick={() => update('to_pack')} className={buttonClass}>Undo</button>
        )}
        {(order.status === 'shipped' || order.status === 'cancelled') && (
          <button disabled={busy} onClick={() => update('to_pack')} className={buttonClass}>Move back to to-pack</button>
        )}
        {order.status !== 'cancelled' && order.status !== 'shipped' && (
          <button disabled={busy} onClick={() => confirm('Cancel this order (e.g. refunded)? It will stop counting in your totals.') && update('cancelled')} className="px-2 py-1.5 text-[12px] underline disabled:opacity-50" style={{ color: '#9CA3AF' }}>
            Cancel order
          </button>
        )}
      </div>

      {showTracking && (
        <form
          className="mt-3 flex flex-wrap gap-2"
          onSubmit={e => {
            e.preventDefault();
            update('shipped', tracking);
          }}
        >
          <input
            value={tracking}
            onChange={e => setTracking(e.target.value)}
            placeholder="Tracking number (optional)"
            className="min-w-0 flex-1 rounded-full border-2 px-4 py-1.5 text-[13px] outline-none"
            style={{ borderColor: '#AF94E0' }}
          />
          <button type="submit" disabled={busy} className="btn-pill-filled px-4 py-1.5 text-[13px] disabled:opacity-50">Save</button>
          <button type="button" onClick={() => setShowTracking(false)} className="px-2 text-[12px] underline" style={{ color: '#9CA3AF' }}>Never mind</button>
        </form>
      )}

      {error && <p className="mt-2 text-[12px]" style={{ color: '#DC2626' }}>{error}</p>}
    </div>
  );
}

export default function AdminDashboard({ orders }: { orders: AdminOrder[] }) {
  const [onlyToPack, setOnlyToPack] = useState(false);

  const active = orders.filter(o => o.status !== 'cancelled');
  const toPack = active.filter(o => o.status === 'to_pack').length;
  const itemsSold = active.reduce((sum, o) => sum + o.line_items.reduce((s, i) => s + (i.quantity ?? 0), 0), 0);
  const revenue = active.reduce((sum, o) => sum + o.amount_total, 0);

  const visible = orders
    .filter(o => !onlyToPack || o.status === 'to_pack')
    .sort((a, b) => SORT_RANK[a.status] - SORT_RANK[b.status] || b.created_at.localeCompare(a.created_at));

  async function signOut() {
    await fetch('/api/admin/login', { method: 'DELETE' });
    window.location.reload();
  }

  const stats = [
    { label: 'To pack', value: String(toPack), highlight: toPack > 0 },
    { label: 'Orders', value: String(active.length) },
    { label: 'Items sold', value: String(itemsSold) },
    { label: 'Collected', value: money(revenue) },
  ];

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:py-10">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between">
          <h1 className="text-[24px] md:text-[32px]" style={{ color: '#7956B9' }}>HWP Orders</h1>
          <button onClick={signOut} className="text-[12px] underline" style={{ color: '#9CA3AF' }}>Sign out</button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map(s => (
            <div key={s.label} className="rounded-2xl border px-4 py-3" style={{ borderColor: s.highlight ? '#FCA5A5' : '#E5E7EB', background: s.highlight ? '#FEF2F2' : 'white' }}>
              <p className="text-[12px]" style={{ color: '#9CA3AF', fontWeight: 500 }}>{s.label}</p>
              <p className="text-[22px]" style={{ color: s.highlight ? '#B91C1C' : '#171717', fontWeight: 700, letterSpacing: '-0.03em' }}>{s.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[11px]" style={{ color: '#9CA3AF', fontWeight: 500 }}>
          “Collected” includes tax and shipping. Cancelled orders aren’t counted.
        </p>

        <div className="mt-6 flex gap-2">
          <button onClick={() => setOnlyToPack(false)} className={onlyToPack ? 'btn-pill px-4 py-1.5 text-[13px]' : 'btn-pill-filled px-4 py-1.5 text-[13px]'}>All orders</button>
          <button onClick={() => setOnlyToPack(true)} className={onlyToPack ? 'btn-pill-filled px-4 py-1.5 text-[13px]' : 'btn-pill px-4 py-1.5 text-[13px]'}>To pack only</button>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {visible.length === 0 ? (
            <p className="py-10 text-center text-[14px]" style={{ color: '#9CA3AF', fontWeight: 500 }}>
              {onlyToPack ? 'Nothing to pack. You’re all caught up.' : 'No orders yet.'}
            </p>
          ) : (
            visible.map(o => <OrderCard key={o.id} order={o} />)
          )}
        </div>
      </div>
    </main>
  );
}
