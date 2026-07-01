import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function ConfirmedPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="h-screen flex flex-col items-center justify-center text-center px-6 gap-4">
        <h1 style={{ color: '#7956B9', fontSize: '40px', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          You&apos;re in!
        </h1>
        <p style={{ color: '#AF94E0', fontSize: '35px', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          You&apos;ll be the first to know when we drop.
        </p>

        <div>
          <Image src="/images/screen-home.png" alt="Hoop With Prezence App" width={200} height={400} className="drop-shadow-xl" />
        </div>

        <p className="max-w-md" style={{ color: '#C5BAD9', fontSize: '20px', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          While you wait — follow along on TikTok and Instagram. We&apos;re dropping early previews,
          behind the scenes, and content you won&apos;t see anywhere else.
        </p>

        <div className="flex gap-6 items-center">
          <a href="https://tiktok.com/@hoopwithprezence" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <Image src="/images/tiktok.png" alt="TikTok" width={52} height={52} className="w-[52px] h-[52px] object-contain" />
          </a>
          <a href="https://instagram.com/hoopwithprezence" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <Image src="/images/instagram.png" alt="Instagram" width={62} height={62} className="w-[62px] h-[62px] object-contain" />
          </a>
        </div>
      </section>
    </main>
  );
}
