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
          '/images/products/classic-tee-black-model-front.jpg',
          '/images/products/classic-tee-black-print-close.jpg',
          '/images/products/classic-tee-black-back.jpg',
          '/images/products/classic-tee-black-back-close.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/classic-tee-white-model-front.jpg',
          '/images/products/classic-tee-white-back.jpg',
        ],
      },
      {
        name: 'Grey',
        swatch: '#9CA3AF',
        images: [
          '/images/products/classic-tee-grey-model-front.jpg',
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
      {
        name: 'Grey',
        swatch: '#9CA3AF',
        images: [
          '/images/products/hoodie-grey-model-front.jpg',
          '/images/products/hoodie-grey-print-close.jpg',
        ],
      },
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
        images: [
          '/images/products/classic-tee-plain-black-model-front.jpg',
          '/images/products/classic-tee-plain-black-print-close.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/classic-tee-plain-white-model-front-2.jpg',
          '/images/products/classic-tee-plain-white-print-close.jpg',
        ],
      },
      {
        name: 'Grey',
        swatch: '#9CA3AF',
        images: [
          '/images/products/classic-tee-plain-grey-model-front.jpg',
          '/images/products/classic-tee-plain-grey-print-close.jpg',
        ],
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
        images: [
          '/images/products/compression-black-action.jpg',
          '/images/products/compression-black-print-close-2.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/compression-white-model-front.jpg',
          '/images/products/compression-white-model-close.jpg',
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
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/ball-compression-black-model-front.jpg',
          '/images/products/ball-compression-black-print-close.jpg',
          '/images/products/ball-compression-black-print-close-2.jpg',
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'HWP Sleeveless Compression',
    price: '$35',
    description: 'Hoop With Prezence.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/sleeveless-black-model-front.jpg',
          '/images/products/sleeveless-black-model-front-2.jpg',
          '/images/products/sleeveless-black-print-close.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/sleeveless-white-model-front.jpg',
          '/images/products/sleeveless-white-print-close.jpg',
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'HWP Ball Sleeveless Compression',
    price: '$35',
    description: 'Hoop With Prezence.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/ball-sleeveless-black-model-front.jpg',
          '/images/products/ball-sleeveless-black-print-close.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: ['/images/products/ball-sleeveless-white-model-front.jpg'],
      },
    ],
  },
  {
    id: 8,
    name: 'Limited Edition',
    price: '$35',
    description: 'Breast Cancer Awareness Edition.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/limited-black-model-front.jpg',
          '/images/products/limited-black-print-close.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/limited-white-model-front.jpg',
          '/images/products/limited-white-print-close.jpg',
        ],
      },
    ],
  },
];

export function getProduct(id: number) {
  return products.find(p => p.id === id);
}
