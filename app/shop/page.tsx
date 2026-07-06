'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import Navbar from '@/components/Navbar';
import { products, type Product, type ProductColor } from '@/lib/products';

function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const images = product.colors ? selectedColor?.images ?? [] : product.image ? [product.image] : [];

  function selectColor(color: ProductColor) {
    setSelectedColor(color);
    setActiveIndex(0);
  }

  function goToProduct() {
    router.push(`/shop/${product.id}?preview=hwp2025`);
  }

  function prevImage(e: React.MouseEvent) {
    e.stopPropagation();
    setActiveIndex(i => (i === 0 ? images.length - 1 : i - 1));
  }

  function nextImage(e: React.MouseEvent) {
    e.stopPropagation();
    setActiveIndex(i => (i === images.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div
        onClick={goToProduct}
        className="bg-gray-100 aspect-square md:aspect-[4/5] flex items-center justify-center relative cursor-pointer"
      >
        {images.length > 0 ? (
          <>
            <Image src={images[activeIndex]} alt={product.name} fill className="object-cover" />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  aria-label="Previous photo"
                  className="absolute left-1.5 md:left-2 top-1/2 -translate-y-1/2 w-6 h-6 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center text-[12px] md:text-[16px]"
                  style={{ color: '#7956B9', boxShadow: '0 1px 6px rgba(0,0,0,0.15)' }}
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Next photo"
                  className="absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 w-6 h-6 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center text-[12px] md:text-[16px]"
                  style={{ color: '#7956B9', boxShadow: '0 1px 6px rgba(0,0,0,0.15)' }}
                >
                  ›
                </button>
              </>
            )}
          </>
        ) : (
          <span className="text-[11px] md:text-[16px] text-center px-2" style={{ color: '#999999', fontWeight: 500 }}>Product photo coming soon</span>
        )}
      </div>
      <div className="p-2.5 md:p-4 flex flex-col gap-1 md:gap-1.5">
        <h2 className="text-[13px] md:text-[18px] leading-tight" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.03em' }}>{product.name}</h2>
        <p className="text-[10px] md:text-[14px]" style={{ color: '#999999', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{product.description}</p>
        <p className="text-[12px] md:text-[16px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.02em' }}>{product.price}</p>

        {product.colors && (
          <div className="flex flex-wrap gap-1 md:gap-1.5 mt-1 items-center">
            {product.colors.map(color => (
              <button
                key={color.name}
                onClick={() => selectColor(color)}
                aria-label={color.name}
                title={color.name}
                className="w-5 h-5 md:w-5 md:h-5 rounded-full transition-shadow"
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
          className="btn-pill mt-1.5 md:mt-2 px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-[13px] text-center"
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
      <section className="pt-20 pb-10 md:pt-24 md:pb-8 px-3 md:px-6 max-w-3xl mx-auto">
        <h1 className="text-center mb-1 text-[20px] md:text-[32px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>Shop</h1>
        <p className="text-center mb-4 md:mb-6 text-[11px] md:text-[16px]" style={{ color: '#999999', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.2 }}>Rep the brand. Train with intention.</p>

        <div className="grid grid-cols-2 gap-2.5 md:gap-4">
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
