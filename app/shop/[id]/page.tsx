'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import Navbar from '@/components/Navbar';
import FavoriteButton from '@/components/FavoriteButton';
import { getProduct, products, type ProductColor } from '@/lib/products';
import { useCart } from '@/lib/cart-context';

function ShippingReturns() {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t pt-3" style={{ borderColor: '#F0F0F0' }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center justify-between w-full text-[14px] md:text-[15px]"
        style={{ color: '#171717', fontWeight: 600 }}
      >
        Shipping &amp; Returns
        <span style={{ color: '#AF94E0' }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="mt-2 text-[13px] md:text-[14px] leading-relaxed" style={{ color: '#999999', fontWeight: 500 }}>
          <p>Orders are processed and shipped after purchase. You&apos;ll receive a confirmation email with tracking once your order ships.</p>
          <p className="mt-2">Have an issue with your order? Reach out and we&apos;ll make it right.</p>
        </div>
      )}
    </div>
  );
}

function ReviewsSection() {
  return (
    <div className="mt-16 pt-8 border-t" style={{ borderColor: '#F0F0F0' }}>
      <h2 className="text-[20px] md:text-[24px] mb-3" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.03em' }}>
        Reviews
      </h2>
      <div className="flex items-center gap-2 mb-2">
        <div className="flex" style={{ color: '#E5E5E5' }}>
          {[0, 1, 2, 3, 4].map(i => (
            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <span className="text-[13px] md:text-[14px]" style={{ color: '#999999', fontWeight: 500 }}>No reviews yet</span>
      </div>
      <p className="text-[13px] md:text-[14px]" style={{ color: '#999999', fontWeight: 500 }}>
        Be the first to try this piece — reviews will show up here.
      </p>
    </div>
  );
}

function RelatedProducts({ currentId }: { currentId: number }) {
  const related = products.filter(p => p.id !== currentId).slice(0, 4);
  if (related.length === 0) return null;

  return (
    <div className="mt-16 pt-8 border-t" style={{ borderColor: '#F0F0F0' }}>
      <h2 className="text-[20px] md:text-[24px] mb-4" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.03em' }}>
        You Might Also Like
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {related.map(product => {
          const image = product.colors?.[0]?.images?.[0] ?? product.image;
          return (
            <Link
              key={product.id}
              href={`/shop/${product.id}?preview=hwp2025`}
              className="flex flex-col rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="bg-gray-100 aspect-square relative">
                {image ? (
                  <Image src={image} alt={product.name} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-[11px] text-center px-2" style={{ color: '#999999', fontWeight: 500 }}>
                      Photo coming soon
                    </span>
                  </div>
                )}
              </div>
              <div className="p-2.5 md:p-3">
                <p className="text-[12px] md:text-[14px] leading-tight" style={{ color: '#AF94E0', fontWeight: 700 }}>{product.name}</p>
                <p className="text-[12px] md:text-[13px] mt-0.5" style={{ color: '#AF94E0', fontWeight: 700 }}>{product.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function ProductDetailContent({ productId }: { productId: number }) {
  const searchParams = useSearchParams();
  const preview = searchParams.get('preview');
  const isPreview = preview === 'hwp2025';

  const product = getProduct(productId);
  const preferredColor = searchParams.get('color');
  const preferredSize = searchParams.get('size');
  const preferredQty = Number(searchParams.get('qty'));

  const [selectedColor, setSelectedColor] = useState<ProductColor | undefined>(
    () => product?.colors?.find(c => c.name === preferredColor) ?? product?.colors?.[0]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(() => {
    if (preferredSize && product?.sizes.includes(preferredSize)) return preferredSize;
    return product?.sizes[0];
  });
  const [quantity, setQuantity] = useState(() => (preferredQty > 0 ? preferredQty : 1));
  const [justAdded, setJustAdded] = useState(false);
  const { addItem, openCart } = useCart();

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

  function handleAddToBag() {
    if (!product) return;
    addItem(
      {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: images[0],
        color: selectedColor?.name,
        size: selectedSize,
      },
      quantity
    );
    openCart();
    setJustAdded(true);
    setQuantity(1);
    setTimeout(() => setJustAdded(false), 2000);
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-24 pb-16 md:pt-28 md:pb-24 px-6 md:px-4 max-w-6xl mx-auto">
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
                    style={{ boxShadow: activeIndex === i ? '0 0 0 2px #AF94E0' : '0 0 0 1px #E5E5E5' }}
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
                        style={{ color: '#AF94E0', boxShadow: '0 1px 6px rgba(0,0,0,0.15)' }}
                      >
                        ‹
                      </button>
                      <button
                        onClick={nextImage}
                        aria-label="Next photo"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[18px]"
                        style={{ color: '#AF94E0', boxShadow: '0 1px 6px rgba(0,0,0,0.15)' }}
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
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-[26px] md:text-[34px]" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}>{product.name}</h1>
                <p className="text-[15px] md:text-[18px] mt-1" style={{ color: '#999999', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{product.description}</p>
              </div>
              <FavoriteButton
                productId={product.id}
                color={selectedColor?.name}
                variantSize={selectedSize}
                quantity={quantity}
                image={images[0]}
                className="shrink-0"
              />
            </div>
            <p className="text-[22px] md:text-[26px]" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.02em' }}>{product.price}</p>

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
                        boxShadow: selectedColor?.name === color.name ? '0 0 0 2px white, 0 0 0 4px #AF94E0' : '0 0 0 1px #E5E5E5',
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
                      borderColor: selectedSize === size ? '#AF94E0' : '#E5E5E5',
                      color: selectedSize === size ? '#AF94E0' : '#171717',
                      fontWeight: 600,
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[14px] md:text-[15px] mb-2" style={{ color: '#171717', fontWeight: 600 }}>Quantity</p>
              <div className="flex items-center gap-3 rounded-lg border px-3 py-2 w-fit" style={{ borderColor: '#E5E5E5' }}>
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-7 h-7 flex items-center justify-center text-[18px]"
                  style={{ color: '#AF94E0' }}
                >
                  −
                </button>
                <span className="text-[15px] w-5 text-center" style={{ color: '#171717', fontWeight: 700 }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  aria-label="Increase quantity"
                  className="w-7 h-7 flex items-center justify-center text-[18px]"
                  style={{ color: '#AF94E0' }}
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="btn-pill mt-2 px-6 py-3.5 text-[15px] md:text-[16px] w-full"
              onClick={handleAddToBag}
            >
              Add to Bag
            </button>
            {justAdded && (
              <p className="text-[13px] md:text-[14px] text-center" style={{ color: '#AF94E0', fontWeight: 600 }}>
                Added to your bag!
              </p>
            )}

            <ShippingReturns />
          </div>
        </div>

        <ReviewsSection />
        <RelatedProducts currentId={product.id} />
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
