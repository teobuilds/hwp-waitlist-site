'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:px-6 md:py-4 bg-white">
      <Link href="/">
        <Image src="/images/logo.png" alt="Hoop With Prezence" width={60} height={60} className="w-[44px] h-[44px] md:w-[60px] md:h-[60px]" />
      </Link>

      <div className="flex items-center gap-3 md:gap-4">
        <Link href="/shop" className="transition-colors text-[13px] md:text-[15px]" style={{ fontWeight: 600, color: '#999999' }}
          onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#AF94E0'}
          onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#999999'}
        >
          Shop
        </Link>
        <Link href="/waitlist">
          <button className="btn-pill px-4 py-2 text-[13px] md:px-6 md:py-3 md:text-[15px]" style={{ fontWeight: 600, letterSpacing: '0em', lineHeight: 1.2 }}>
            Join
          </button>
        </Link>
      </div>
    </nav>
  );
}
