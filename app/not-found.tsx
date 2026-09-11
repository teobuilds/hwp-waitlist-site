import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="flex flex-col items-center text-center px-6 pt-24 pb-24 md:pt-40 md:pb-32">
        <p className="text-[48px] md:text-[80px]" style={{ color: '#AF94E0', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}>
          404
        </p>
        <h1 className="mt-2 text-[20px] md:text-[32px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          This page took a shot and missed.
        </h1>
        <p className="mt-3 max-w-[280px] md:max-w-md text-[13px] md:text-[15px]" style={{ color: '#404040', fontWeight: 500, lineHeight: 1.5 }}>
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>

        <Link href="/" className="btn-pill-filled-light inline-block mt-6 px-6 py-2 text-[13px] md:text-[14px]">
          Back to Home
        </Link>

        <p className="mt-6 text-[12px] md:text-[13px]" style={{ color: '#9CA3AF', fontWeight: 500 }}>
          Questions? Email us at{' '}
          <a href="mailto:hello@hoopwithprezence.com" className="underline" style={{ color: '#AF94E0' }}>
            hello@hoopwithprezence.com
          </a>
        </p>
      </section>

      <Footer />
    </main>
  );
}
