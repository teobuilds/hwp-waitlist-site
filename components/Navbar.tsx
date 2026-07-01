'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white">
      <Link href="/">
        {/* Replace src with actual logo image once provided */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-gray-200">
          <div className="w-full h-full bg-purple-700 flex items-center justify-center">
            <span className="text-white text-xs font-bold">HWP</span>
          </div>
        </div>
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
