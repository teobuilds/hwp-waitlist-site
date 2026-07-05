'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import Navbar from '@/components/Navbar';
import { products, type Product } from '@/lib/products';

function ProductCard({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const image = product.colors ? selectedColor?.images[0] : product.image;

  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gray-100 aspect-square flex items-center justify-center relative">
        {image ? (
          <Image src={image} alt={product.name} fill className="object-cover" />
        ) : (
          <span className="text-[14px] md:text-[16px]" style={{ color: '#999999', fontWeight: 500 }}>Product photo coming soon</span>
        )}
      </div>
      <div className="p-4 md:p-6 flex flex-col gap-2">
        <h2 className="text-[19px] md:text-[24px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>{product.name}</h2>
        <p className="text-[15px] md:text-[18px]" style={{ color: '#999999', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{product.description}</p>
        <p className="text-[17px] md:text-[20px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.02em' }}>{product.price}</p>

        {product.colors && (
          <div className="flex flex-wrap gap-2 mt-2 items-center">
            {product.colors.map(color => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                aria-label={color.name}
                title={color.name}
                className="w-7 h-7 rounded-full transition-shadow"
                style={{
                  backgroundColor: color.swatch,
                  boxShadow: selectedColor?.name === color.name ? '0 0 0 2px white, 0 0 0 4px #7956B9' : '0 0 0 1px #E5E5E5',
                }}
              />
            ))}
          </div>
        )}

        <Link
          href={`/shop/${product.id}?preview=hwp2025`}
          className="btn-pill mt-3 px-6 py-2.5 md:py-3 text-[13px] md:text-[15px] text-center"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}

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
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
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
