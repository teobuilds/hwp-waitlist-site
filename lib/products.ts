export type ProductColor = {
  name: string;
  swatch: string;
  images: string[];
};

export type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
  sizes: string[];
  colors?: ProductColor[];
  image?: string | null;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'HWP Classic Tee',
    price: '$35',
    description: 'Train with intention.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/classic-tee-black-front.jpg',
          '/images/products/classic-tee-black-action.jpg',
          '/images/products/classic-tee-black-back.jpg',
          '/images/products/classic-tee-black-back-detail.jpg',
        ],
      },
      {
        name: 'Grey',
        swatch: '#9CA3AF',
        images: ['/images/products/classic-tee-grey-front.jpg', '/images/products/classic-tee-grey-back.jpg'],
      },
    ],
  },
  {
    id: 2,
    name: 'HWP Logo Hoodie',
    price: '$65',
    description: 'Hoop With Prezence.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: null,
  },
];

export function getProduct(id: number) {
  return products.find(p => p.id === id);
}
