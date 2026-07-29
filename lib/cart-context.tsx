'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';

export type CartItem = {
  productId: number;
  name: string;
  price: string;
  image?: string;
  color?: string;
  size?: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeItem: (productId: number, color?: string, size?: string) => void;
  updateQuantity: (productId: number, color: string | undefined, size: string | undefined, quantity: number) => void;
  itemCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = 'hwp-cart';

function sameLine(a: CartItem, productId: number, color?: string, size?: string) {
  return a.productId === productId && a.color === color && a.size === size;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((item: Omit<CartItem, 'quantity'>, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(i => sameLine(i, item.productId, item.color, item.size));
      if (existing) {
        return prev.map(i =>
          sameLine(i, item.productId, item.color, item.size) ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  }, []);

  const removeItem = useCallback((productId: number, color?: string, size?: string) => {
    setItems(prev => prev.filter(i => !sameLine(i, productId, color, size)));
  }, []);

  const updateQuantity = useCallback(
    (productId: number, color: string | undefined, size: string | undefined, quantity: number) => {
      setItems(prev => {
        if (quantity <= 0) return prev.filter(i => !sameLine(i, productId, color, size));
        return prev.map(i => (sameLine(i, productId, color, size) ? { ...i, quantity } : i));
      });
    },
    []
  );

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + parseFloat(i.price.replace('$', '')) * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, isOpen, openCart, closeCart, addItem, removeItem, updateQuantity, itemCount, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
