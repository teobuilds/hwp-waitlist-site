import Link from 'next/link';
import Stripe from 'stripe';
import Navbar from '@/components/Navbar';
import ClearCartOnMount from '@/components/ClearCartOnMount';

export const dynamic = 'force-dynamic';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const money = (cents: number | null | undefined) => `$${((cents ?? 0) / 100).toFixed(2)}`;

async function getSession(id: string | undefined) {
  if (!id || !id.startsWith('cs_')) return null;
  try {
    const session = await stripe.checkout.sessions.retrieve(id, { expand: ['line_items'] });
    return session.payment_status === 'paid' ? session : null;
  } catch {
    return null;
  }
}

export default async function OrderConfirmedPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const session = await getSession(searchParams.session_id);

  if (!session) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <section className="flex flex-col items-center text-center px-6 pt-24 pb-16 md:pt-40">
          <h1 className="text-[24px] md:text-[40px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
            We couldn&apos;t find that order
          </h1>
          <p className="mt-3 max-w-md text-[13px] md:text-[16px]" style={{ color: '#404040', fontWeight: 500, lineHeight: 1.5 }}>
            If you just paid, don&apos;t worry — your payment is safe. Email us at{' '}
            <a href="mailto:hello@hoopwithprezence.com" className="underline" style={{ color: '#AF94E0' }}>
              hello@hoopwithprezence.com
            </a>{' '}
            and we&apos;ll sort it out.
          </p>
          <Link href="/shop?preview=hwp2025" className="btn-pill px-6 py-2.5 mt-6 text-[14px]">
            Back to the shop
          </Link>
        </section>
      </main>
    );
  }

  const items = session.line_items?.data ?? [];
  const addr = session.collected_information?.shipping_details?.address;
  const name = session.customer_details?.name;
  const email = session.customer_details?.email;
  const orderNumber = session.id.slice(-8).toUpperCase();
  const label = { color: '#9CA3AF', fontWeight: 500 } as const;
  const text = { color: '#404040', fontWeight: 500, lineHeight: 1.5 } as const;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ClearCartOnMount />

      <section className="px-4 md:px-6 pt-24 pb-16 md:pt-32 max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-[26px] md:text-[40px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
            Thank you{name ? `, ${name.split(' ')[0]}` : ''}!
          </h1>
          <p className="mt-1 text-[17px] md:text-[28px]" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
            Your order is confirmed
          </p>
          <p className="mt-2 text-[12px] md:text-[14px]" style={label}>
            Order #{orderNumber}
          </p>
        </div>

        <div className="mt-8 rounded-2xl p-4 md:p-6" style={{ background: '#F7F4FC' }}>
          <h2 className="mb-3 text-[14px] md:text-[17px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.02em' }}>
            What you ordered
          </h2>
          <div className="flex flex-col gap-2 text-[13px] md:text-[15px]" style={text}>
            {items.map(item => (
              <div key={item.id} className="flex justify-between gap-4">
                <span>
                  {item.description}
                  {item.quantity && item.quantity > 1 ? ` × ${item.quantity}` : ''}
                </span>
                <span>{money(item.amount_subtotal)}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-3 flex flex-col gap-1 text-[13px] md:text-[15px]" style={{ ...text, borderTop: '1px solid #E5DCF3' }}>
            <div className="flex justify-between"><span>Subtotal</span><span>{money(session.amount_subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{money(session.total_details?.amount_shipping)}</span></div>
            <div className="flex justify-between"><span>Sales tax</span><span>{money(session.total_details?.amount_tax)}</span></div>
            {(session.total_details?.amount_discount ?? 0) > 0 && (
              <div className="flex justify-between"><span>Discount</span><span>−{money(session.total_details?.amount_discount)}</span></div>
            )}
            <div className="flex justify-between mt-1 text-[15px] md:text-[17px]" style={{ color: '#171717', fontWeight: 700 }}>
              <span>Total paid</span><span>{money(session.amount_total)}</span>
            </div>
          </div>
        </div>

        {addr && (
          <div className="mt-4 rounded-2xl p-4 md:p-6" style={{ background: '#F7F4FC' }}>
            <h2 className="mb-2 text-[14px] md:text-[17px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Shipping to
            </h2>
            <p className="text-[13px] md:text-[15px]" style={text}>
              {name}
              <br />
              {addr.line1}
              {addr.line2 ? `, ${addr.line2}` : ''}
              <br />
              {addr.city}, {addr.state} {addr.postal_code}
            </p>
            {email && (
              <p className="mt-2 text-[12px] md:text-[14px]" style={label}>
                Contact: {email}
              </p>
            )}
          </div>
        )}

        <div className="mt-4 rounded-2xl p-4 md:p-6" style={{ background: '#F7F4FC' }}>
          <h2 className="mb-2 text-[14px] md:text-[17px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.02em' }}>
            What happens next
          </h2>
          <p className="text-[13px] md:text-[15px]" style={text}>
            We&apos;ll pack and ship your order within 3-5 business days, and delivery typically takes 3-7 business days
            after that. Questions or concerns? Email{' '}
            <a href="mailto:hello@hoopwithprezence.com" className="underline" style={{ color: '#AF94E0' }}>
              hello@hoopwithprezence.com
            </a>
            .
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link href="/shop?preview=hwp2025" className="btn-pill-filled-light px-6 py-2.5 text-[14px]">
            Keep shopping
          </Link>
          <Link href="/" className="btn-pill px-6 py-2.5 text-[14px]">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
