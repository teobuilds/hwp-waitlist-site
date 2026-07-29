'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import FavoriteButton from '@/components/FavoriteButton';
import { useFavorites } from '@/lib/favorites-context';
import { getProduct } from '@/lib/products';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const entries = favorites
    .map(fav => ({ fav, product: getProduct(fav.productId) }))
    .filter((e): e is { fav: typeof e.fav; product: NonNullable<typeof e.product> } => Boolean(e.product));

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-20 pb-10 md:pt-24 md:pb-8 px-3 md:px-6 max-w-3xl mx-auto">
        <h1 className="text-center mb-1 text-[20px] md:text-[32px]" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          Favorites
        </h1>
        <p className="text-center mb-4 md:mb-6 text-[11px] md:text-[16px]" style={{ color: '#999999', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.2 }}>
          Shirts you&apos;ve saved for later.
        </p>

        {entries.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center gap-3 py-16">
            <p className="text-[14px] md:text-[16px]" style={{ color: '#999999', fontWeight: 500 }}>
              You haven&apos;t favorited anything yet.
            </p>
            <Link href="/shop?preview=hwp2025" className="btn-pill px-5 py-2.5 text-[14px]">
              Browse the Shop
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2.5 md:gap-4">
            {entries.map(({ fav, product }) => {
              const colorImage = product.colors?.find(c => c.name === fav.color)?.images?.[0];
              const image = fav.image ?? colorImage ?? product.colors?.[0]?.images?.[0] ?? product.image;
              const params = new URLSearchParams({ preview: 'hwp2025' });
              if (fav.color) params.set('color', fav.color);
              if (fav.size) params.set('size', fav.size);
              if (fav.quantity) params.set('qty', String(fav.quantity));

              return (
                <Link
                  key={`${fav.productId}-${fav.color}-${fav.size}`}
                  href={`/shop/${product.id}?${params.toString()}`}
                  className="flex flex-col rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="bg-gray-100 aspect-square md:aspect-[4/5] relative">
                    <FavoriteButton
                      productId={product.id}
                      color={fav.color}
                      variantSize={fav.size}
                      uiSize="sm"
                      className="absolute top-1.5 right-1.5 md:top-2 md:right-2 z-10"
                    />
                    {image ? (
                      <Image src={image} alt={product.name} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-[11px] md:text-[16px] text-center px-2" style={{ color: '#999999', fontWeight: 500 }}>
                          Product photo coming soon
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-2.5 md:p-4 flex flex-col gap-1 md:gap-1.5">
                    <h2 className="text-[13px] md:text-[18px] leading-tight" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.03em' }}>
                      {product.name}
                    </h2>
                    {(fav.color || fav.size) && (
                      <p className="text-[11px] md:text-[13px]" style={{ color: '#999999', fontWeight: 500 }}>
                        {[fav.color, fav.size].filter(Boolean).join(' / ')}
                      </p>
                    )}
                    <p className="text-[12px] md:text-[16px]" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.02em' }}>
                      {product.price}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
