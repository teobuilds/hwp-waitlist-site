'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const [error, setError] = useState(false);

  async function handleCheckout() {
    setCheckingOut(true);
    setError(false);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(i => ({ productId: i.productId, size: i.size, color: i.color, quantity: i.quantity })),
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      setError(true);
    } catch {
      setError(true);
    } finally {
      setCheckingOut(false);
    }
  }

  return (
    <>
      <div
        onClick={closeCart}
        className="fixed inset-0 z-[60] bg-black/30 transition-opacity"
        style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
      />
      <aside
        className="fixed top-0 right-0 z-[70] h-full w-full max-w-[420px] bg-white shadow-2xl flex flex-col transition-transform duration-300"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: '#F0F0F0' }}>
          <h2 className="text-[18px]" style={{ color: '#171717', fontWeight: 700 }}>
            Your Bag {items.length > 0 && `(${items.reduce((s, i) => s + i.quantity, 0)})`}
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close bag"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[16px]"
            style={{ color: '#999999' }}
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-2">
              <p className="text-[15px]" style={{ color: '#999999', fontWeight: 500 }}>Your bag is empty.</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map(item => (
                <li key={`${item.productId}-${item.color}-${item.size}`} className="flex gap-3">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                    {item.image ? (
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    ) : null}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] truncate" style={{ color: '#171717', fontWeight: 700 }}>{item.name}</p>
                    <p className="text-[12px] mt-0.5" style={{ color: '#999999', fontWeight: 500 }}>
                      {[item.color, item.size].filter(Boolean).join(' / ')}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 rounded-full border px-2 py-1" style={{ borderColor: '#E5E5E5' }}>
                        <button
                          onClick={() => updateQuantity(item.productId, item.color, item.size, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-5 h-5 flex items-center justify-center text-[14px]"
                          style={{ color: '#AF94E0' }}
                        >
                          −
                        </button>
                        <span className="text-[13px] w-4 text-center" style={{ color: '#171717', fontWeight: 600 }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.color, item.size, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-5 h-5 flex items-center justify-center text-[14px]"
                          style={{ color: '#AF94E0' }}
                        >
                          +
                        </button>
                      </div>
                      <p className="text-[14px]" style={{ color: '#AF94E0', fontWeight: 700 }}>{item.price}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.productId, item.color, item.size)}
                      className="text-[12px] mt-1.5"
                      style={{ color: '#999999', fontWeight: 600 }}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-5 py-4 border-t" style={{ borderColor: '#F0F0F0' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[14px]" style={{ color: '#171717', fontWeight: 600 }}>Subtotal</span>
              <span className="text-[18px]" style={{ color: '#AF94E0', fontWeight: 700 }}>${subtotal.toFixed(2)}</span>
            </div>
            <button
              className="btn-pill w-full py-3.5 text-[15px] disabled:opacity-60"
              onClick={handleCheckout}
              disabled={checkingOut}
            >
              {checkingOut ? 'Redirecting…' : 'Checkout'}
            </button>
            {error && (
              <p className="text-[13px] text-center mt-2" style={{ color: '#999999', fontWeight: 500 }}>
                Something went wrong starting checkout — try again.
              </p>
            )}
          </div>
        )}
      </aside>
    </>
  );
}
