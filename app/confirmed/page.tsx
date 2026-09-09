import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function ConfirmedPage() {
  const steps = [
    {
      n: 1,
      title: 'Follow us',
      body: (
        <>
          Follow Hoop With Prezence on Instagram and TikTok — that&apos;s where we&apos;ll post updates,
          new drills, and let you know when big features drop.
          <div className="flex gap-4 items-center mt-2">
            <a href="https://tiktok.com/@hoopwithprezence" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <Image src="/images/tiktok.png" alt="TikTok" width={32} height={32} className="w-[28px] h-[28px] object-contain" />
            </a>
            <a href="https://instagram.com/hoopwithprezence" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <Image src="/images/instagram.png" alt="Instagram" width={32} height={32} className="w-[28px] h-[28px] object-contain" />
            </a>
          </div>
        </>
      ),
    },
    {
      n: 2,
      title: 'Get TestFlight',
      body: (
        <>
          If you don&apos;t already have it, download{' '}
          <a href="https://apps.apple.com/us/app/testflight/id899247664" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#AF94E0' }}>
            TestFlight
          </a>{' '}
          from the Apple App Store. Heads up — this only works on an iPhone, no Android support yet.
        </>
      ),
    },
    {
      n: 3,
      title: 'Join the beta',
      body: (
        <>
          Tap the button below from your iPhone to install Hoop With Prezence through TestFlight.
          <div className="mt-2">
            <a
              href="https://testflight.apple.com/join/88YhmmVF"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-filled-light inline-block px-6 py-2 text-[13px] md:text-[14px]"
            >
              Join the Beta
            </a>
          </div>
        </>
      ),
    },
    {
      n: 4,
      title: 'Create your account',
      body: 'Open the app and create your account, and you’re in.',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="flex flex-col items-center text-center px-6 pt-10 pb-16 md:pt-40 md:pb-20">
        <h1 className="text-[24px] md:text-[40px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          You&apos;re in!
        </h1>
        <p className="mt-1 text-[17px] md:text-[35px]" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          Here&apos;s how to get beta access
        </p>

        <div className="mt-6 md:mt-10 w-full max-w-sm md:max-w-md flex flex-col gap-5 md:gap-6 text-left">
          {steps.map(step => (
            <div key={step.n} className="flex gap-3">
              <div
                className="shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white text-[13px] md:text-[14px]"
                style={{ background: '#AF94E0', fontWeight: 700 }}
              >
                {step.n}
              </div>
              <div>
                <h2 className="text-[15px] md:text-[17px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  {step.title}
                </h2>
                <div className="mt-0.5 text-[13px] md:text-[15px]" style={{ color: '#404040', fontWeight: 500, lineHeight: 1.5 }}>
                  {step.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-[280px] md:max-w-md text-[13px] md:text-[16px]" style={{ color: '#C5BAD9', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3 }}>
          One more thing — when you sign up you&apos;ll get Pro access unlocked, so you can try every
          Pro feature while you&apos;re testing.
        </p>

        <p className="mt-3 max-w-[280px] md:max-w-md text-[12px] md:text-[14px]" style={{ color: '#C5BAD9', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.3 }}>
          The app is on track to fully launch on the App Store in about a month and a half — this beta
          is how you get in early.
        </p>

        <p className="mt-6 text-[12px] md:text-[13px]" style={{ color: '#9CA3AF', fontWeight: 500 }}>
          Questions? Email us at{' '}
          <a href="mailto:hello@hoopwithprezence.com" className="underline" style={{ color: '#AF94E0' }}>
            hello@hoopwithprezence.com
          </a>
        </p>
      </section>
    </main>
  );
}
