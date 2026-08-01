import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-10 md:mt-16 px-4 py-8 md:px-6 md:py-12">
      <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        <div className="flex flex-col gap-2 md:gap-2.5">
          <h3 className="text-[12px] md:text-[14px] mb-1" style={{ color: '#171717', fontWeight: 700 }}>Main Menu</h3>
          <Link href="/" className="text-[11px] md:text-[13px] hover:opacity-70 transition-opacity" style={{ color: '#999999', fontWeight: 500 }}>Home</Link>
          <Link href="/shop?preview=hwp2025" className="text-[11px] md:text-[13px] hover:opacity-70 transition-opacity" style={{ color: '#999999', fontWeight: 500 }}>Shop</Link>
          <Link href="/favorites" className="text-[11px] md:text-[13px] hover:opacity-70 transition-opacity" style={{ color: '#999999', fontWeight: 500 }}>Favorites</Link>
        </div>

        <div className="flex flex-col gap-2 md:gap-2.5">
          <h3 className="text-[12px] md:text-[14px] mb-1" style={{ color: '#171717', fontWeight: 700 }}>Quick Links</h3>
          <Link href="/shipping-returns" className="text-[11px] md:text-[13px] hover:opacity-70 transition-opacity" style={{ color: '#999999', fontWeight: 500 }}>Shipping &amp; Returns</Link>
        </div>

        <div className="flex flex-col gap-2 md:gap-2.5 col-span-2 md:col-span-1">
          <h3 className="text-[12px] md:text-[14px] mb-1" style={{ color: '#171717', fontWeight: 700 }}>Contact</h3>
          <a href="mailto:hoopwithprezence@gmail.com" className="text-[11px] md:text-[13px] hover:opacity-70 transition-opacity" style={{ color: '#999999', fontWeight: 500 }}>hoopwithprezence@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
