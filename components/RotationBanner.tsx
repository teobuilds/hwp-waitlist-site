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
  }, [activeIndex]);

  function prevImage() {
    setActiveIndex(i => (i === 0 ? ROTATION_IMAGES.length - 1 : i - 1));
  }

  function nextImage() {
    setActiveIndex(i => (i === ROTATION_IMAGES.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="col-span-2 rounded-2xl border border-gray-200 overflow-hidden relative aspect-[4/5] bg-gray-100 group">
      {ROTATION_IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Hoop With Prezence"
          fill
          priority={i === 0}
          className="object-cover object-top transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === activeIndex ? 1 : 0 }}
        />
      ))}

      <button
        onClick={prevImage}
        aria-label="Previous photo"
        className="absolute left-1.5 md:left-3 top-1/2 -translate-y-1/2 w-7 h-7 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-[13px] md:text-[18px] opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: '#AF94E0', boxShadow: '0 1px 6px rgba(0,0,0,0.15)' }}
      >
        ‹
      </button>
      <button
        onClick={nextImage}
        aria-label="Next photo"
        className="absolute right-1.5 md:right-3 top-1/2 -translate-y-1/2 w-7 h-7 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-[13px] md:text-[18px] opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: '#AF94E0', boxShadow: '0 1px 6px rgba(0,0,0,0.15)' }}
      >
        ›
      </button>
    </div>
  );
}
