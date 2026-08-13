'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const ROTATION_IMAGES = [
  '/images/rotation/rotation-1.jpg',
  '/images/rotation/rotation-2.jpg',
  '/images/rotation/rotation-3.jpg',
  '/images/rotation/rotation-4.jpg',
  '/images/rotation/rotation-5.jpg',
  '/images/rotation/rotation-6.jpg',
  '/images/rotation/rotation-7.jpg',
  '/images/rotation/rotation-8.jpg',
  '/images/rotation/rotation-9.jpg',
  '/images/rotation/rotation-10.jpg',
];

const ROTATION_INTERVAL_MS = 3500;

export default function RotationBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(i => (i + 1) % ROTATION_IMAGES.length);
    }, ROTATION_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="col-span-2 rounded-2xl border border-gray-200 overflow-hidden relative aspect-[16/9] md:aspect-[21/9] bg-gray-100">
      {ROTATION_IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Hoop With Prezence"
          fill
          priority={i === 0}
          className="object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === activeIndex ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
