import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AmbassadorsPage() {
  const link = { color: '#AF94E0' };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-20 pb-10 md:pt-24 md:pb-16 px-4 md:px-6 max-w-2xl mx-auto">
        <h1 className="text-center mb-6 md:mb-8 text-[22px] md:text-[32px]" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          Ambassador Program
        </h1>

        <div className="flex flex-col gap-6 md:gap-8 text-[13px] md:text-[15px]" style={{ color: '#404040', fontWeight: 500, lineHeight: 1.5 }}>
          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={{ color: '#171717', fontWeight: 700, letterSpacing: '-0.02em' }}>Repping HWP</h2>
            <p>We&apos;re always looking to gear up players who put on for the game — standout talent, players on a strong program or team, and creators with real hoop presence. If that&apos;s you, we want to hook you up with free gear.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={{ color: '#171717', fontWeight: 700, letterSpacing: '-0.02em' }}>Who we&apos;re looking for</h2>
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li>Players on a competitive high school, college, or pro/pro-am team</li>
              <li>Standout individual talent — rankings, awards, highlight tape, you name it</li>
              <li>Creators and influencers with real hoop content and an engaged audience</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={{ color: '#171717', fontWeight: 700, letterSpacing: '-0.02em' }}>How to apply</h2>
            <p>Email us at <a href="mailto:hello@hoopwithprezence.com?subject=Ambassador%20Program%20Application" className="underline" style={link}>hello@hoopwithprezence.com</a> with:</p>
            <ul className="list-disc pl-5 mt-1 flex flex-col gap-1">
              <li>Your name, team/school, and position</li>
              <li>Links to socials, highlight film, or stats</li>
              <li>Shirt size and shipping address</li>
              <li>Why you want to rep Hoop With Prezence</li>
            </ul>
            <p className="mt-2">We review every application and reach out directly if it&apos;s a fit.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
