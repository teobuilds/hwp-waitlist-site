import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function ConfirmedPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="h-screen flex flex-col items-center justify-center text-center px-6 gap-3 md:gap-4">
        <h1 className="text-[26px] md:text-[40px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          You&apos;re in!
        </h1>
        <p className="text-[20px] md:text-[35px]" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          You&apos;ll be the first to know when we drop.
        </p>

        <div>
          <Image src="/images/screen-home.png" alt="Hoop With Prezence App" width={200} height={400} className="drop-shadow-xl w-[140px] md:w-[200px] h-auto" />
        </div>

        <p className="max-w-[280px] md:max-w-md text-[14px] md:text-[20px]" style={{ color: '#C5BAD9', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.2 }}>
          While you wait — follow along on TikTok and Instagram. We&apos;re dropping early previews,
          behind the scenes, and content you won&apos;t see anywhere else.
        </p>

        <div className="flex gap-6 items-center">
          <a href="https://tiktok.com/@hoopwithprezence" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <Image src="/images/tiktok.png" alt="TikTok" width={52} height={52} className="w-[40px] h-[40px] md:w-[52px] md:h-[52px] object-contain" />
          </a>
          <a href="https://instagram.com/hoopwithprezence" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <Image src="/images/instagram.png" alt="Instagram" width={56} height={56} className="w-[44px] h-[44px] md:w-[56px] md:h-[56px] object-contain" />
          </a>
        </div>
      </section>
    </main>
  );
}
