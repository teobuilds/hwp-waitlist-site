'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';

const shirts = [
  {
    id: 1,
    name: 'HWP Classic Tee',
    price: '$35',
    description: 'Train with intention.',
    image: null,
  },
  {
    id: 2,
    name: 'HWP Logo Hoodie',
    price: '$65',
    description: 'Hoop With Prezence.',
    image: null,
  },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const preview = searchParams.get('preview');
  const isPreview = preview === 'hwp2025';

  if (!isPreview) {
    return (
      <main className="h-[100dvh] overflow-hidden md:h-auto md:min-h-screen bg-white">
        <Navbar />
        <section className="h-full md:h-screen flex flex-col items-center justify-center text-center px-6 gap-3 md:gap-4 relative">
          <h1 className="text-[28px] md:text-[40px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
            Coming Soon.
          </h1>
          <h2 className="text-[24px] md:text-[40px]" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.2 }}>
            The HWP shop is almost here.
          </h2>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-24 pb-14 md:pt-32 md:pb-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-center mb-1 text-[28px] md:text-[40px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>Shop</h1>
        <p className="text-center mb-8 md:mb-12 text-[15px] md:text-[22px]" style={{ color: '#999999', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.2 }}>Rep the brand. Train with intention.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {shirts.map(shirt => (
            <div key={shirt.id} className="flex flex-col rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-gray-100 aspect-square flex items-center justify-center">
                <span className="text-[14px] md:text-[16px]" style={{ color: '#999999', fontWeight: 500 }}>Product photo coming soon</span>
              </div>
              <div className="p-4 md:p-6 flex flex-col gap-2">
                <h2 className="text-[19px] md:text-[24px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>{shirt.name}</h2>
                <p className="text-[15px] md:text-[18px]" style={{ color: '#999999', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{shirt.description}</p>
                <p className="text-[17px] md:text-[20px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.02em' }}>{shirt.price}</p>
                <button className="btn-pill mt-3 px-6 py-2.5 md:py-3 text-[13px] md:text-[15px]">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense>
      <ShopContent />
    </Suspense>
  );
}
