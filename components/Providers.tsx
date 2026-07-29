'use client';

import { ReactNode } from 'react';
import { CartProvider } from '@/lib/cart-context';
import { FavoritesProvider } from '@/lib/favorites-context';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <FavoritesProvider>
      <CartProvider>{children}</CartProvider>
    </FavoritesProvider>
  );
}
