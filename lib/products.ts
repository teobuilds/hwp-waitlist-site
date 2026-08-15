export type ProductColor = {
  name: string;
  swatch: string;
  images: string[];
  inStock?: boolean;
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
    id: 7,
    name: 'HWP Ball Tank',
    price: '$35',
    description: 'Hoop With Prezence.',
    badge: 'Best Seller',
    cardBlurb: 'Slim sleeveless layer for training and layering.',
    about:
      "A sleeveless compression base layer built to move with you. Slim through the body with a clean O-neck, it's made to layer under a jersey or hoodie without adding bulk.",
    details: [
      { label: 'Material', value: '85% Polyester / 15% Spandex' },
      { label: 'Collar', value: 'O-Neck' },
      { label: 'Fit', value: 'Slim Fit' },
      { label: 'Length', value: 'Regular' },
      { label: 'Fabric', value: 'Knitted' },
    ],
    reviews: [
      { name: 'Marcus T.', rating: 5, text: "Wear this under my jersey every game. Doesn't ride up or get see-through when I sweat. Ordered a medium and it's snug in the right way." },
      { name: 'Jordan K.', rating: 4, text: 'Good quality for the price. Fits true to size — just wish delivery was a bit quicker.' },
      { name: 'DeShawn R.', rating: 5, text: "Finally a compression shirt that doesn't dig into my armpits. Wearing it 3x a week for training." },
      { name: 'Alex P.', rating: 4, text: 'Solid layering piece. Wish it came in more colors but the fit is exactly what I wanted.' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/tank-ball-black-front.jpg',
          '/images/products/tank-ball-black-side.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/ball-sleeveless-white-model-front-v2.jpg',
          '/images/products/ball-sleeveless-white-model-side-v2.jpg',
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Breast Cancer Awareness',
    price: '$35',
    description: 'Breast Cancer Awareness Edition.',
    badge: 'Limited Edition',
    cardBlurb: 'Slim sleeveless layer for training and layering.',
    about:
      "A sleeveless compression base layer built to move with you. Slim through the body with a clean O-neck, it's made to layer under a jersey or hoodie without adding bulk.",
    details: [
      { label: 'Material', value: '85% Polyester / 15% Spandex' },
      { label: 'Collar', value: 'O-Neck' },
      { label: 'Fit', value: 'Slim Fit' },
      { label: 'Length', value: 'Regular' },
      { label: 'Fabric', value: 'Knitted' },
    ],
    reviews: [
      { name: 'Nicole B.', rating: 5, text: 'Bought this for my mom, a survivor. She loves it, and being a limited run makes it feel special.' },
      { name: 'Terrell M.', rating: 5, text: 'Great cause, great shirt. Fits true to size and the material is soft.' },
      { name: 'Casey L.', rating: 4, text: 'Love the design, hope they bring it back after it sells out.' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/limited-black-model-front-v2.jpg',
          '/images/products/limited-black-model-side-v2.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/limited-white-model-front-v2.jpg',
          '/images/products/limited-white-model-side-v2.jpg',
        ],
      },
    ],
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
          '/images/products/tee-ball-black-front.jpg',
          '/images/products/tee-ball-black-back.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/tee-ball-white-front.jpg',
          '/images/products/tee-ball-white-back.jpg',
        ],
      },
      {
        name: 'Grey',
        swatch: '#9CA3AF',
        images: [
          '/images/products/tee-ball-grey-front.jpg',
          '/images/products/tee-ball-grey-back.jpg',
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
          '/images/products/tee-wordmark-black-front.jpg',
          '/images/products/tee-wordmark-black-side.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/tee-wordmark-white-front.jpg',
          '/images/products/tee-wordmark-white-side.jpg',
        ],
      },
      {
        name: 'Grey',
        swatch: '#9CA3AF',
        images: [
          '/images/products/tee-wordmark-grey-front.jpg',
          '/images/products/tee-wordmark-grey-side.jpg',
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'HWP Ball Compression Shirt',
    price: '$35',
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
          '/images/products/ball-compression-black-model-front-v2.jpg',
          '/images/products/ball-compression-black-model-side-v2.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/ball-compression-white-model-front.jpg',
          '/images/products/ball-compression-white-model-side.jpg',
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'HWP Classic Compression Shirt',
    price: '$35',
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
          '/images/products/compression-black-model-front-v2.jpg',
          '/images/products/compression-black-model-side-v2.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/compression-white-model-front-v2.jpg',
          '/images/products/compression-white-model-side-v2.jpg',
        ],
        inStock: false,
      },
    ],
  },
  {
    id: 6,
    name: 'HWP Classic Tank',
    price: '$35',
    description: 'Hoop With Prezence.',
    cardBlurb: 'Slim sleeveless layer for training and layering.',
    about:
      "A sleeveless compression base layer built to move with you. Slim through the body with a clean O-neck, it's made to layer under a jersey or hoodie without adding bulk.",
    details: [
      { label: 'Material', value: '85% Polyester / 15% Spandex' },
      { label: 'Collar', value: 'O-Neck' },
      { label: 'Fit', value: 'Slim Fit' },
      { label: 'Length', value: 'Regular' },
      { label: 'Fabric', value: 'Knitted' },
    ],
    reviews: [
      { name: 'Trevor H.', rating: 5, text: "Wear this to every training session. Doesn't ride up and dries fast." },
      { name: 'Diego R.', rating: 4, text: 'Comfortable fit, true to size, good for training. Took a little longer to ship than I expected.' },
      { name: 'Malik S.', rating: 5, text: 'Great for layering under a hoodie in the winter.' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/tank-wordmark-black-front.jpg',
          '/images/products/tank-wordmark-black-side.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/tank-wordmark-white-front.jpg',
          '/images/products/tank-wordmark-white-side.jpg',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'HWP Logo Hoodie',
    price: '$65',
    description: 'Hoop With Prezence.',
    comingSoon: true,
    cardBlurb: 'Brushed fleece hoodie built for cold mornings.',
    showsThirdPartyApparel: true,
    about:
      'An ultra-soft cotton-blend fleece hoodie with a brushed interior for extra warmth. Finished with a front kangaroo pocket and ribbed cuffs and hem for a comfortable, locked-in fit — built for cold mornings, travel days, or just staying cozy off the court.',
    details: [
      { label: 'Material', value: '80% Cotton / 20% Polyester' },
      { label: 'Lining', value: 'Brushed Fleece' },
      { label: 'Pocket', value: 'Front Kangaroo Pocket' },
      { label: 'Cuffs/Hem', value: 'Ribbed' },
      { label: 'Care', value: 'Machine Wash Cold, Tumble Dry Low' },
    ],
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
    id: 9,
    name: 'HWP Tank',
    price: '$35',
    description: 'Hoop With Prezence.',
    badge: 'New',
    cardBlurb: 'Slim sleeveless layer for training and layering.',
    about:
      "A sleeveless compression base layer built to move with you. Slim through the body with a clean O-neck, it's made to layer under a jersey or hoodie without adding bulk.",
    details: [
      { label: 'Material', value: '85% Polyester / 15% Spandex' },
      { label: 'Collar', value: 'O-Neck' },
      { label: 'Fit', value: 'Slim Fit' },
      { label: 'Length', value: 'Regular' },
      { label: 'Fabric', value: 'Knitted' },
    ],
    reviews: [
      { name: 'Xavier B.', rating: 5, text: "Clean look, fits snug like a compression shirt should. This is my go-to for practice." },
      { name: 'Noah P.', rating: 4, text: 'Good quality material, true to size. Would like to see more colors.' },
      { name: 'Cam D.', rating: 5, text: "Lightweight and breathable, doesn't hold onto sweat." },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/tank-new-black-front.jpg',
          '/images/products/tank-new-black-side.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/sleeveless-white-wordmark-front.jpg',
          '/images/products/sleeveless-white-wordmark-side.jpg',
        ],
      },
    ],
  },
  {
    id: 10,
    name: 'HWP Compression Shirt',
    price: '$35',
    description: 'Hoop With Prezence.',
    badge: 'New',
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
      { name: 'Darius L.', rating: 5, text: 'Fits perfect, moves with you. Been wearing it for every workout.' },
      { name: 'Miguel S.', rating: 4, text: 'Solid compression fit, true to size, dries fast.' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/new-compression-black-front.jpg',
          '/images/products/new-compression-black-side.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/new-compression-white-front.jpg',
          '/images/products/new-compression-white-side.jpg',
        ],
      },
    ],
  },
  {
    id: 11,
    name: 'HWP Ball Sleeveless Compression',
    price: '$35',
    description: 'Hoop With Prezence.',
    cardBlurb: 'Slim sleeveless layer for training and layering.',
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
          '/images/products/undershirt-ball-black-front.jpg',
          '/images/products/undershirt-ball-black-side.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/undershirt-ball-white-front.jpg',
          '/images/products/undershirt-ball-white-side.jpg',
        ],
      },
    ],
  },
  {
    id: 12,
    name: 'HWP Classic Sleeveless Compression',
    price: '$35',
    description: 'Hoop With Prezence.',
    cardBlurb: 'Slim sleeveless layer for training and layering.',
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
          '/images/products/undershirt-wordmark-black-front.jpg',
          '/images/products/undershirt-wordmark-black-side.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/undershirt-wordmark-white-front.jpg',
          '/images/products/undershirt-wordmark-white-side.jpg',
        ],
      },
    ],
  },
  {
    id: 13,
    name: 'HWP Sleeveless Compression',
    price: '$35',
    description: 'Hoop With Prezence.',
    badge: 'New',
    cardBlurb: 'Slim sleeveless layer for training and layering.',
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
          '/images/products/undershirt-new-black-front.jpg',
          '/images/products/undershirt-new-black-side.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/undershirt-new-white-front.jpg',
          '/images/products/undershirt-new-white-side.jpg',
        ],
      },
    ],
  },
  {
    id: 14,
    name: 'HWP Tee',
    price: '$25',
    description: 'Hoop With Prezence.',
    badge: 'New',
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
      { name: 'Cole R.', rating: 5, text: 'Love this design, clean and simple.' },
      { name: 'Anthony V.', rating: 4, text: 'Soft material, fits true to size.' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Black',
        swatch: '#1A1A1A',
        images: [
          '/images/products/tee-new-black-front.jpg',
          '/images/products/tee-new-black-side.jpg',
        ],
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        images: [
          '/images/products/tee-new-white-front.jpg',
          '/images/products/tee-new-white-side.jpg',
        ],
      },
      {
        name: 'Grey',
        swatch: '#9CA3AF',
        images: [
          '/images/products/tee-new-grey-front.jpg',
          '/images/products/tee-new-grey-side.jpg',
        ],
      },
    ],
  },
];

export function getProduct(id: number) {
  return products.find(p => p.id === id);
}
