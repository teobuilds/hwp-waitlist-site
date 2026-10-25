'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import { useFavorites } from '@/lib/favorites-context';
import CartDrawer from './CartDrawer';
import { APP_STORE_URL } from '@/lib/app-store';

function HeartIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  );
}

function BagIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function Badge({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span
      className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full text-white text-[10px] flex items-center justify-center"
      style={{ backgroundColor: '#AF94E0', fontWeight: 700 }}
    >
      {count}
    </span>
  );
}

export default function Navbar() {
  const { itemCount, openCart } = useCart();
  const { favorites } = useFavorites();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const grayLink = { fontWeight: 600, color: '#999999' } as const;
  const hoverIn = (e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.color = '#AF94E0');
  const hoverOut = (e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.color = '#999999');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:px-6 md:py-4 bg-white">
      <Link href="/">
        <Image src="/images/logo.png" alt="Hoop With Prezence" width={975} height={1024} className="w-[44px] h-auto md:w-[60px]" />
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <Link href="/shop" className="transition-colors text-[15px]" style={grayLink} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
          Shop
        </Link>

        <Link href="/favorites" aria-label="View favorites" className="relative w-10 h-10 flex items-center justify-center">
          <HeartIcon />
          <Badge count={favorites.length} />
        </Link>

        <button onClick={openCart} aria-label="Open bag" className="relative w-10 h-10 flex items-center justify-center">
          <BagIcon />
          <Badge count={itemCount} />
        </button>

        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          <button className="btn-pill px-6 py-3 text-[15px]" style={{ fontWeight: 600, letterSpacing: '0em', lineHeight: 1.2 }}>
            Get the App
          </button>
        </a>
      </div>

      {/* Mobile: hamburger */}
      <button
        type="button"
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        className="md:hidden relative w-11 h-11 -mr-2 flex items-center justify-center"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round">
          {menuOpen ? (
            <>
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </>
          ) : (
            <>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </>
          )}
        </svg>
        {!menuOpen && itemCount + favorites.length > 0 && (
          <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#AF94E0' }} />
        )}
      </button>

      {/* Mobile: dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-200 ease-out ${
          menuOpen ? 'max-h-[360px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="px-4 pt-2 pb-5 flex flex-col">
          <div className="flex items-center justify-between py-1">
            <Link href="/shop" className="py-3 text-[17px] transition-colors" style={grayLink} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
              Shop
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/favorites" aria-label="View favorites" className="relative w-11 h-11 flex items-center justify-center">
                <HeartIcon size={24} />
                <Badge count={favorites.length} />
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openCart();
                }}
                aria-label="Open bag"
                className="relative w-11 h-11 flex items-center justify-center"
              >
                <BagIcon size={24} />
                <Badge count={itemCount} />
              </button>
            </div>
          </div>

          <div className="border-t border-gray-100" />

          <Link href="/ambassadors" className="py-4 text-[17px] transition-colors" style={grayLink} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
            Ambassador Program
          </Link>

          <div className="border-t border-gray-100 mb-4" />

          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="block">
            <button className="btn-pill w-full py-3 text-[15px]" style={{ fontWeight: 600, letterSpacing: '0em', lineHeight: 1.2 }}>
              Get the App
            </button>
          </a>
        </div>
      </div>

      <CartDrawer />
    </nav>
  );
}
