'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { useFavorites } from '@/lib/favorites-context';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const { itemCount, openCart } = useCart();
  const { favorites } = useFavorites();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:px-6 md:py-4 bg-white">
      <Link href="/">
        <Image src="/images/logo.png" alt="Hoop With Prezence" width={975} height={1024} className="w-[44px] h-auto md:w-[60px]" />
      </Link>

      <div className="flex items-center gap-3 md:gap-4">
        <Link href="/shop" className="transition-colors text-[13px] md:text-[15px]" style={{ fontWeight: 600, color: '#999999' }}
          onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#AF94E0'}
          onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#999999'}
        >
          Shop
        </Link>

        <Link
          href="/favorites"
          aria-label="View favorites"
          className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
          </svg>
          {favorites.length > 0 && (
            <span
              className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full text-white text-[10px] flex items-center justify-center"
              style={{ backgroundColor: '#AF94E0', fontWeight: 700 }}
            >
              {favorites.length}
            </span>
          )}
        </Link>

        <button
          onClick={openCart}
          aria-label="Open bag"
          className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          {itemCount > 0 && (
            <span
              className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full text-white text-[10px] flex items-center justify-center"
              style={{ backgroundColor: '#AF94E0', fontWeight: 700 }}
            >
              {itemCount}
            </span>
          )}
        </button>

        <Link href="/waitlist">
          <button className="btn-pill px-4 py-2 text-[13px] md:px-6 md:py-3 md:text-[15px]" style={{ fontWeight: 600, letterSpacing: '0em', lineHeight: 1.2 }}>
            Join
          </button>
        </Link>
      </div>

      <CartDrawer />
    </nav>
  );
}
