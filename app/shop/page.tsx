'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';
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
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 gap-4 relative">
        <h1 style={{ color: '#7956B9', fontSize: '40px', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          Coming Soon.
        </h1>
        <h2 style={{ color: '#AF94E0', fontSize: '40px', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          The HWP shop is almost here.
        </h2>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-center mb-1" style={{ color: '#7956B9', fontSize: '40px', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>Shop</h1>
      <p className="text-center mb-12" style={{ color: '#999999', fontSize: '22px', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.2 }}>Rep the brand. Train with intention.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {shirts.map(shirt => (
          <div key={shirt.id} className="flex flex-col rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-gray-100 aspect-square flex items-center justify-center">
              <span style={{ color: '#999999', fontSize: '16px', fontWeight: 500 }}>Product photo coming soon</span>
            </div>
            <div className="p-6 flex flex-col gap-2">
              <h2 style={{ color: '#7956B9', fontSize: '24px', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>{shirt.name}</h2>
              <p style={{ color: '#999999', fontSize: '18px', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{shirt.description}</p>
              <p style={{ color: '#7956B9', fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em' }}>{shirt.price}</p>
              <button className="btn-pill mt-3 px-6 py-3">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Suspense>
        <ShopContent />
      </Suspense>
    </main>
  );
}
