import Navbar from '@/components/Navbar';

export default function ConfirmedPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-40 pb-20 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#7B5EA7' }}>
          You&apos;re in!
        </h1>
        <p className="text-2xl md:text-3xl font-bold mt-2" style={{ color: '#A78BCC' }}>
          You&apos;ll be the first to know when we drop.
        </p>

        {/* App screenshot placeholder */}
        <div className="mt-10 w-56 md:w-64 bg-gray-50 rounded-[2.5rem] shadow-xl aspect-[9/19] flex items-center justify-center border border-gray-200">
          <span className="text-gray-400 text-sm text-center px-4">App screenshot<br/>(coming soon)</span>
        </div>

        <p className="mt-10 max-w-md text-gray-400 font-medium text-sm leading-relaxed">
          While you wait — follow along on TikTok and Instagram. We&apos;re dropping early previews,
          behind the scenes, and content you won&apos;t see anywhere else.
        </p>

        {/* Social links */}
        <div className="mt-8 flex gap-6 items-center">
          <a
            href="https://tiktok.com/@hoopwithprezence"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            {/* TikTok icon */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.52V6.76a4.85 4.85 0 01-1.02-.07z"/>
            </svg>
          </a>
          <a
            href="https://instagram.com/hoopwithprezence"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            {/* Instagram icon */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="ig-grad" cx="30%" cy="107%" r="130%">
                  <stop offset="0%" stopColor="#fdf497"/>
                  <stop offset="5%" stopColor="#fdf497"/>
                  <stop offset="45%" stopColor="#fd5949"/>
                  <stop offset="60%" stopColor="#d6249f"/>
                  <stop offset="90%" stopColor="#285AEB"/>
                </radialGradient>
              </defs>
              <rect width="24" height="24" rx="6" fill="url(#ig-grad)"/>
              <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" fill="none"/>
              <circle cx="17.5" cy="6.5" r="1" fill="white"/>
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
