export type ProductColor = {
  name: string;
  swatch: string;
  images: string[];
  inStock?: boolean;
  outOfStockSizes?: string[];
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductReview = {
  name: string;
  rating: number;
  text: string;
};

export type Product = {
  id: number;
  name: string;
  price: string;
  compareAtPrice?: string;
  description: string;
  badge?: string;
  comingSoon?: boolean;
  cardBlurb?: string;
  about?: string;
  details?: ProductSpec[];
  reviews?: ProductReview[];
  sizes: string[];
  colors?: ProductColor[];
  image?: string | null;
  showsThirdPartyApparel?: boolean;
};

export const products: Product[] = [
  {
    id: 11,
    name: 'HWP Ball Sleeveless Compression',
    price: '$25',
    compareAtPrice: '$35',
    description: 'Hoop With Prezence.',
    badge: 'Best Seller',
    cardBlurb: 'Slim compression layer to wear under your jersey.',
    about:
      "A sleeveless compression base layer built to move with you. Slim through the body with a clean crew neck, it's made to layer under a jersey or hoodie without adding bulk.",
    details: [
      { label: 'Material', value: '85% Polyester / 15% Spandex' },
      { label: 'Collar', value: 'Crew Neck' },
      { label: 'Fit', value: 'Slim Fit' },
      { label: 'Length', value: 'Regular' },
      { label: 'Fabric', value: 'Knitted' },
    ],
    reviews: [
      { name: 'Elijah W.', rating: 5, text: 'Great layering piece, fits snug and true to size.' },
      { name: 'Tony R.', rating: 4, text: 'Good quality, wish it came in more colors.' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/ball-sleeveless-black-photo-front.jpg',
          '/images/products/ball-sleeveless-black-photo-closeup.jpg',
        ],
        outOfStockSizes: ['S', 'XL', 'XXL'],
      },
    ],
    showsThirdPartyApparel: true,
  },
  {
    id: 8,
    name: 'Breast Cancer Awareness',
    price: '$20',
    compareAtPrice: '$35',
    description: 'Breast Cancer Awareness Edition.',
    badge: 'Limited Edition',
    cardBlurb: 'Breathable tank for the gym and getting shots up.',
    about:
      "Built for the gym, pickup runs, and getting shots up, this tank moves with you thanks to 4-way stretch fabric that fits close to the body for a second-skin feel. A moisture-wicking construction sweeps sweat away and dries fast, with flat-lock seams that stay chafe-free through every rep.",
    details: [
      { label: 'Material', value: '90% Polyester / 10% Spandex' },
      { label: 'Fit', value: 'Compression, Slim Fit, Stretch' },
      { label: 'Neck', value: 'Scoop Neck' },
      { label: 'Closure', value: 'Pull On' },
      { label: 'Care', value: 'Machine Wash' },
    ],
    reviews: [
      { name: 'Nicole B.', rating: 5, text: 'Bought this for my mom, a survivor. She loves it, and being a limited run makes it feel special.' },
      { name: 'Terrell M.', rating: 5, text: 'Great cause, great shirt. Fits true to size and the material is soft.' },
      { name: 'Casey L.', rating: 4, text: 'Love the design, hope they bring it back after it sells out.' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/limited-white-photo-front.jpg',
          '/images/products/limited-white-photo-closeup.jpg',
        ],
        outOfStockSizes: ['XL', 'XXL'],
      },
    ],
    showsThirdPartyApparel: true,
  },
  {
    id: 5,
    name: 'HWP Ball Compression Shirt',
    price: '$20',
    compareAtPrice: '$30',
    description: 'Hoop With Prezence.',
    cardBlurb: 'Compression fit that wicks moisture mid-workout.',
    about:
      "A compression tee built to move like a second skin. Lightweight, elastic fabric wicks moisture fast and keeps you cool mid-workout, with UV protection built in for outdoor sessions. Whether it's the gym, the court, or a run, this is the layer you wear to perform in.",
    details: [
      { label: 'Material', value: '85% Polyester / 15% Spandex' },
      { label: 'Fit', value: 'Regular Fit' },
      { label: 'Collar', value: 'Crew Neck' },
      { label: 'Sleeve', value: 'Short Sleeve' },
      { label: 'Closure', value: 'Pull On' },
      { label: 'Care', value: 'Machine Wash' },
    ],
    reviews: [
      { name: 'Chris B.', rating: 5, text: "Wear it under my jersey for every practice. Keeps me cool and doesn't stink after games like other brands." },
      { name: 'Isaiah G.', rating: 4, text: 'Fits snug like a compression shirt should. Sizing runs true.' },
      { name: 'Marcus D.', rating: 5, text: 'Great for training in the heat, wicks sweat fast.' },
      { name: 'Jake T.', rating: 3, text: 'Good shirt but the sleeves feel a little tight on my arms. Otherwise solid.' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/ball-compression-black-photo-front.jpg',
          '/images/products/ball-compression-black-photo-closeup.jpg',
        ],
        outOfStockSizes: ['XL', 'XXL'],
      },
    ],
    showsThirdPartyApparel: true,
  },
  {
    id: 4,
    name: 'HWP Classic Compression Shirt',
    price: '$20',
    compareAtPrice: '$30',
    description: 'Hoop With Prezence.',
    cardBlurb: 'Compression fit that wicks moisture mid-workout.',
    about:
      "A compression tee built to move like a second skin. Lightweight, elastic fabric wicks moisture fast and keeps you cool mid-workout, with UV protection built in for outdoor sessions. Whether it's the gym, the court, or a run, this is the layer you wear to perform in.",
    details: [
      { label: 'Material', value: '85% Polyester / 15% Spandex' },
      { label: 'Fit', value: 'Regular Fit' },
      { label: 'Collar', value: 'Crew Neck' },
      { label: 'Sleeve', value: 'Short Sleeve' },
      { label: 'Closure', value: 'Pull On' },
      { label: 'Care', value: 'Machine Wash' },
    ],
    reviews: [
      { name: 'Andre P.', rating: 5, text: "Perfect base layer. Doesn't bunch up under my jersey." },
      { name: 'Kevin M.', rating: 4, text: 'Good quality, fits true to size. Would buy another color if available.' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/compression-black-photo-front.jpg',
          '/images/products/compression-black-photo-closeup.jpg',
        ],
        outOfStockSizes: ['XL', 'XXL'],
      },
    ],
    showsThirdPartyApparel: true,
  },
  {
    id: 13,
    name: 'HWP Sleeveless Compression',
    price: '$25',
    compareAtPrice: '$35',
    description: 'Hoop With Prezence.',
    badge: 'New',
    cardBlurb: 'Slim compression layer to wear under your jersey.',
    about:
      "A sleeveless compression base layer built to move with you. Slim through the body with a clean crew neck, it's made to layer under a jersey or hoodie without adding bulk.",
    details: [
      { label: 'Material', value: '85% Polyester / 15% Spandex' },
      { label: 'Collar', value: 'Crew Neck' },
      { label: 'Fit', value: 'Slim Fit' },
      { label: 'Length', value: 'Regular' },
      { label: 'Fabric', value: 'Knitted' },
    ],
    reviews: [
      { name: 'Julian K.', rating: 5, text: "Love this one, it's my new go-to for training." },
      { name: 'Devin C.', rating: 4, text: 'Solid fit and material, true to size.' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/undershirt-new-black-photo-front.jpg',
          '/images/products/undershirt-new-black-photo-closeup.jpg',
        ],
        outOfStockSizes: ['S', 'XL', 'XXL'],
      },
    ],
    showsThirdPartyApparel: true,
  },
  {
    id: 12,
    name: 'HWP Classic Sleeveless Compression',
    price: '$25',
    compareAtPrice: '$35',
    description: 'Hoop With Prezence.',
    cardBlurb: 'Slim compression layer to wear under your jersey.',
    about:
      "A sleeveless compression base layer built to move with you. Slim through the body with a clean crew neck, it's made to layer under a jersey or hoodie without adding bulk.",
    details: [
      { label: 'Material', value: '85% Polyester / 15% Spandex' },
      { label: 'Collar', value: 'Crew Neck' },
      { label: 'Fit', value: 'Slim Fit' },
      { label: 'Length', value: 'Regular' },
      { label: 'Fabric', value: 'Knitted' },
    ],
    reviews: [
      { name: 'Bryce H.', rating: 5, text: 'Clean and simple, exactly what I wanted for layering.' },
      { name: 'Omar F.', rating: 4, text: 'Comfortable fit, true to size.' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/undershirt-wordmark-black-photo-front.jpg',
          '/images/products/undershirt-wordmark-black-photo-closeup.jpg',
        ],
        outOfStockSizes: ['S', 'XL', 'XXL'],
      },
    ],
    showsThirdPartyApparel: true,
  },
  {
    id: 1,
    name: 'HWP Ball Tee',
    price: '$25',
    description: 'Train with intention.',
    cardBlurb: 'Soft tri-blend tee for gym days and lounging.',
    about:
      "Built for whatever's on the agenda — workouts, errands, or a lounge-around day. This soft, lightweight tee is cut from a breathable tri-blend knit that moves with you and stays comfortable all day. Moisture-wicking and quick-drying, it keeps you cool at the gym and looks just as good with joggers on your day off.",
    details: [
      { label: 'Material', value: '50% Polyester / 25% Cotton / 25% Rayon' },
      { label: 'Collar', value: 'Crewneck' },
      { label: 'Fit', value: 'Active' },
      { label: 'Sleeve', value: 'Short Sleeve' },
      { label: 'Closure', value: 'Pullover' },
      { label: 'Care', value: 'Machine Wash' },
    ],
    reviews: [
      { name: 'Brian H.', rating: 5, text: "My go-to tee now. Doesn't shrink after washing and the print hasn't cracked after a bunch of washes." },
      { name: 'Priya S.', rating: 4, text: 'Comfortable and true to size. Black is a nice deep black, not faded.' },
      { name: 'Malik W.', rating: 5, text: 'Wear it to the gym and just around town. Holds up well.' },
      { name: 'Tyler F.', rating: 3, text: "Shirt's good overall, true to size — just wish the print was a little bolder, looks slightly faded in photos." },
      { name: 'Renee C.', rating: 5, text: 'Great everyday tee, love the ball logo on the front.' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/tee-ball-black-photo-front.jpg',
          '/images/products/tee-ball-black-photo-back.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/tee-ball-white-photo-front.jpg',
          '/images/products/tee-ball-white-photo-back.jpg',
        ],
      },
      {
        name: 'Grey',
        swatch: '#9CA3AF',
        inStock: false,
        images: [
          '/images/products/tee-ball-grey-photo-front.jpg',
          '/images/products/tee-ball-grey-photo-back.jpg',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'HWP Classic Tee',
    price: '$25',
    description: 'Hoop With Prezence.',
    cardBlurb: 'Soft tri-blend tee for gym days and lounging.',
    about:
      "Built for whatever's on the agenda — workouts, errands, or a lounge-around day. This soft, lightweight tee is cut from a breathable tri-blend knit that moves with you and stays comfortable all day. Moisture-wicking and quick-drying, it keeps you cool at the gym and looks just as good with joggers on your day off.",
    details: [
      { label: 'Material', value: '50% Polyester / 25% Cotton / 25% Rayon' },
      { label: 'Collar', value: 'Crewneck' },
      { label: 'Fit', value: 'Active' },
      { label: 'Sleeve', value: 'Short Sleeve' },
      { label: 'Closure', value: 'Pullover' },
      { label: 'Care', value: 'Machine Wash' },
    ],
    reviews: [
      { name: 'Sam O.', rating: 5, text: 'Simple, clean, comfortable. Exactly what I wanted.' },
      { name: 'Devon K.', rating: 4, text: 'Good basic tee. Fits true to size in a medium.' },
      { name: 'Ashley N.', rating: 4, text: 'Soft material, held up well after a few washes.' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/tee-wordmark-black-photo-front.jpg',
          '/images/products/tee-wordmark-black-photo-closeup.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/tee-wordmark-white-photo-front.jpg',
          '/images/products/tee-wordmark-white-photo-closeup.jpg',
        ],
      },
      {
        name: 'Grey',
        swatch: '#9CA3AF',
        inStock: false,
        images: [
          '/images/products/tee-wordmark-grey-photo-front.jpg',
          '/images/products/tee-wordmark-grey-photo-closeup.jpg',
        ],
      },
    ],
    showsThirdPartyApparel: true,
  },
  {
    id: 14,
    name: 'HWP 3/4 Pants',
    price: '$25',
    description: 'Hoop With Prezence.',
    badge: 'New',
    cardBlurb: 'Baggy brushed-fleece 3/4 pants for lounging and street style.',
    about:
      "Baggy, below-the-knee sweatpants cut from soft brushed fleece that's warm without the bulk. An elastic waistband with an adjustable drawstring keeps the fit comfortable, and the straight, roomy leg gives you space to move. Three pockets hold your phone, keys, and wallet. Wear them with a simple tee and sneakers or a hoodie for a street-style look.",
    details: [
      { label: 'Material', value: '50% Polyester / 50% Cotton' },
      { label: 'Fabric', value: 'Brushed Fleece' },
      { label: 'Fit', value: 'Baggy, Straight Leg' },
      { label: 'Length', value: '11 in, Below Knee' },
      { label: 'Closure', value: 'Drawstring' },
      { label: 'Care', value: 'Machine Wash' },
    ],
    reviews: [
      { name: 'Cole R.', rating: 5, text: 'Love this design, clean and simple.' },
      { name: 'Anthony V.', rating: 4, text: 'Soft material, fits true to size.' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Grey',
        swatch: '#9CA3AF',
        images: [
          '/images/products/jorts-grey-front.jpg',
          '/images/products/jorts-grey-side.jpg',
        ],
      },
    ],
    showsThirdPartyApparel: true,
  },
];

export function getProduct(id: number) {
  return products.find(p => p.id === id);
}
