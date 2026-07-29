'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';

export type FavoriteItem = {
  productId: number;
  color?: string;
  size?: string;
  quantity?: number;
  image?: string;
};

type FavoritesContextValue = {
  favorites: FavoriteItem[];
  isFavorite: (productId: number, color?: string, size?: string) => boolean;
  toggleFavorite: (item: FavoriteItem) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

const STORAGE_KEY = 'hwp-favorites';

function sameVariant(a: FavoriteItem, productId: number, color?: string, size?: string) {
  return a.productId === productId && a.color === color && a.size === size;
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // migrate old format (array of product ids) to the new variant-aware format
        if (Array.isArray(parsed) && (parsed.length === 0 || typeof parsed[0] === 'number')) {
          setFavorites((parsed as number[]).map(productId => ({ productId })));
        } else {
          setFavorites(parsed);
        }
      }
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites, hydrated]);

  const isFavorite = useCallback(
    (productId: number, color?: string, size?: string) =>
      favorites.some(f => sameVariant(f, productId, color, size)),
    [favorites]
  );

  const toggleFavorite = useCallback((item: FavoriteItem) => {
    setFavorites(prev =>
      prev.some(f => sameVariant(f, item.productId, item.color, item.size))
        ? prev.filter(f => !sameVariant(f, item.productId, item.color, item.size))
        : [...prev, item]
    );
  }, []);

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be used within a FavoritesProvider');
  return ctx;
}
