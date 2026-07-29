'use client';

import { useFavorites } from '@/lib/favorites-context';

export default function FavoriteButton({
  productId,
  color,
  variantSize,
  quantity,
  image,
  uiSize = 'md',
  className = '',
}: {
  productId: number;
  color?: string;
  variantSize?: string;
  quantity?: number;
  image?: string;
  uiSize?: 'sm' | 'md';
  className?: string;
}) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(productId, color, variantSize);
  const dim = uiSize === 'sm' ? 28 : 40;
  const iconPx = uiSize === 'sm' ? 14 : 18;

  return (
    <button
      onClick={e => {
        e.stopPropagation();
        e.preventDefault();
        toggleFavorite({ productId, color, size: variantSize, quantity, image });
      }}
      aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={favorited}
      className={`flex items-center justify-center rounded-full bg-white transition-transform active:scale-90 ${className}`}
      style={{ width: dim, height: dim, boxShadow: '0 1px 6px rgba(0,0,0,0.15)' }}
    >
      <svg
        width={iconPx}
        height={iconPx}
        viewBox="0 0 24 24"
        fill={favorited ? '#AF94E0' : 'none'}
        stroke={favorited ? '#AF94E0' : '#999999'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
      </svg>
    </button>
  );
}
