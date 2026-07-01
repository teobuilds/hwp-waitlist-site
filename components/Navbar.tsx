'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white">
      <Link href="/">
        <Image src="/images/logo.png" alt="Hoop With Prezence" width={44} height={44} />
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/shop" className="text-sm font-semibold text-gray-600 hover:text-purple-600 transition-colors">
          Shop
        </Link>
        <Link href="/waitlist">
          <button className="px-5 py-2 rounded-full border-2 font-semibold text-sm hover:opacity-80 transition-opacity" style={{ borderColor: '#7B5EA7', color: '#7B5EA7' }}>
            Join
          </button>
        </Link>
      </div>
    </nav>
  );
}
