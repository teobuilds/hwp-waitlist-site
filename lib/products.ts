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
    name: 'HWP Ball Classic Tee',
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
      { name: 'White', swatch: '#FFFFFF', images: [] },
      {
        name: 'Grey',
        swatch: '#9CA3AF',
        images: [
          '/images/products/classic-tee-grey-front.jpg',
          '/images/products/classic-tee-grey-action.jpg',
          '/images/products/classic-tee-grey-back.jpg',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'HWP Logo Hoodie',
    price: '$65',
    description: 'Hoop With Prezence.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', swatch: '#1A1A1A', images: [] },
      { name: 'White', swatch: '#FFFFFF', images: [] },
    ],
  },
  {
    id: 3,
    name: 'HWP Classic Tee',
    price: '$35',
    description: 'Hoop With Prezence.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: ['/images/products/classic-tee-white-front.jpg', '/images/products/classic-tee-white-action.jpg'],
      },
      {
        name: 'Grey',
        swatch: '#9CA3AF',
        images: ['/images/products/classic-tee-2-grey-front.jpg'],
      },
    ],
  },
  {
    id: 4,
    name: 'HWP Compression Shirt',
    price: '$35',
    description: 'Hoop With Prezence.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: ['/images/products/compression-black-front.jpg'],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/compression-white-front.jpg',
          '/images/products/compression-white-action.jpg',
          '/images/products/compression-white-detail.jpg',
          '/images/products/compression-white-flatlay.jpg',
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'HWP Ball Compression Shirt',
    price: '$35',
    description: 'Hoop With Prezence.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', swatch: '#1A1A1A', images: [] },
      { name: 'White', swatch: '#FFFFFF', images: [] },
    ],
  },
  {
    id: 6,
    name: 'HWP Sleeveless Compression',
    price: '$35',
    description: 'Hoop With Prezence.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', swatch: '#1A1A1A', images: [] },
      { name: 'White', swatch: '#FFFFFF', images: [] },
    ],
  },
  {
    id: 7,
    name: 'HWP Ball Sleeveless Compression',
    price: '$35',
    description: 'Hoop With Prezence.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', swatch: '#1A1A1A', images: [] },
      { name: 'White', swatch: '#FFFFFF', images: [] },
    ],
  },
  {
    id: 8,
    name: 'Limited Edition',
    price: '$35',
    description: 'Hoop With Prezence.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', swatch: '#1A1A1A', images: [] },
      { name: 'White', swatch: '#FFFFFF', images: [] },
    ],
  },
];

export function getProduct(id: number) {
  return products.find(p => p.id === id);
}
