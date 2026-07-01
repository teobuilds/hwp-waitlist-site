'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white">
      <Link href="/">
        <Image src="/images/logo.png" alt="Hoop With Prezence" width={60} height={60} />
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/shop" className="text-sm font-semibold text-gray-600 hover:text-purple-600 transition-colors">
          Shop
        </Link>
        <Link href="/waitlist">
          <button className="btn-pill px-6 py-3" style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '0em', lineHeight: 1.2 }}>
            Join
          </button>
        </Link>
      </div>
    </nav>
  );
}
