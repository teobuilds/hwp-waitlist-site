'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import Navbar from '@/components/Navbar';
import { getProduct, type ProductColor } from '@/lib/products';

function ProductDetailContent({ productId }: { productId: number }) {
  const searchParams = useSearchParams();
  const preview = searchParams.get('preview');
  const isPreview = preview === 'hwp2025';

  const product = getProduct(productId);

  const [selectedColor, setSelectedColor] = useState<ProductColor | undefined>(product?.colors?.[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [showNotReady, setShowNotReady] = useState(false);

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

  if (!product) {
    notFound();
  }

  const images = product.colors ? selectedColor?.images ?? [] : product.image ? [product.image] : [];

  function selectColor(color: ProductColor) {
    setSelectedColor(color);
    setActiveIndex(0);
  }

  function prevImage() {
    setActiveIndex(i => (i === 0 ? images.length - 1 : i - 1));
  }

  function nextImage() {
    setActiveIndex(i => (i === images.length - 1 ? 0 : i + 1));
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-24 pb-16 md:pt-20 md:pb-24 px-6 md:px-4 max-w-6xl mx-auto">
        <Link
          href="/shop?preview=hwp2025"
          className="inline-block mb-6 text-[14px] md:text-[15px]"
          style={{ color: '#999999', fontWeight: 600 }}
        >
          ← Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-start">
          <div className="flex gap-3">
            {images.length > 1 && (
              <div className="hidden sm:flex flex-col gap-2 w-16 md:w-20 shrink-0">
                {images.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setActiveIndex(i)}
                    className="relative aspect-square rounded-lg overflow-hidden"
                    style={{ boxShadow: activeIndex === i ? '0 0 0 2px #7956B9' : '0 0 0 1px #E5E5E5' }}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="relative flex-1 aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              {images.length > 0 ? (
                <>
                  <Image src={images[activeIndex]} alt={product.name} fill className="object-cover" />
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        aria-label="Previous photo"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[18px]"
                        style={{ color: '#7956B9', boxShadow: '0 1px 6px rgba(0,0,0,0.15)' }}
                      >
                        ‹
                      </button>
                      <button
                        onClick={nextImage}
                        aria-label="Next photo"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[18px]"
                        style={{ color: '#7956B9', boxShadow: '0 1px 6px rgba(0,0,0,0.15)' }}
                      >
                        ›
                      </button>
                    </>
                  )}
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[14px] md:text-[16px]" style={{ color: '#999999', fontWeight: 500 }}>Product photo coming soon</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 md:sticky md:top-28">
            <div>
              <h1 className="text-[26px] md:text-[34px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}>{product.name}</h1>
              <p className="text-[15px] md:text-[18px] mt-1" style={{ color: '#999999', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{product.description}</p>
            </div>
            <p className="text-[22px] md:text-[26px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.02em' }}>{product.price}</p>

            {product.colors && (
              <div>
                <p className="text-[14px] md:text-[15px] mb-2" style={{ color: '#171717', fontWeight: 600 }}>
                  Color: <span style={{ color: '#999999', fontWeight: 500 }}>{selectedColor?.name}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => selectColor(color)}
                      aria-label={color.name}
                      title={color.name}
                      className="w-9 h-9 rounded-full transition-shadow"
                      style={{
                        backgroundColor: color.swatch,
                        boxShadow: selectedColor?.name === color.name ? '0 0 0 2px white, 0 0 0 4px #7956B9' : '0 0 0 1px #E5E5E5',
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="text-[14px] md:text-[15px] mb-2" style={{ color: '#171717', fontWeight: 600 }}>Select Size</p>
              <div className="grid grid-cols-3 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className="rounded-lg border py-3 text-[14px] md:text-[15px] transition-colors"
                    style={{
                      borderColor: selectedSize === size ? '#7956B9' : '#E5E5E5',
                      color: selectedSize === size ? '#7956B9' : '#171717',
                      fontWeight: 600,
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="btn-pill-filled mt-2 px-6 py-3.5 text-[15px] md:text-[16px] w-full"
              onClick={() => setShowNotReady(true)}
            >
              Add to Bag
            </button>
            {showNotReady && (
              <p className="text-[13px] md:text-[14px] text-center" style={{ color: '#999999', fontWeight: 500 }}>
                Checkout isn&apos;t set up yet — coming soon!
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = Number(params.id);

  return (
    <Suspense>
      <ProductDetailContent productId={productId} />
    </Suspense>
  );
}
