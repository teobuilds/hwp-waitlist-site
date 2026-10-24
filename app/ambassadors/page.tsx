import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AmbassadorForm from '@/components/AmbassadorForm';

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
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={{ color: '#171717', fontWeight: 700, letterSpacing: '-0.02em' }}>What you do</h2>
            <p>You get free gear. In return:</p>
            <ul className="list-disc pl-5 mt-1 flex flex-col gap-1">
              <li>Make 3 videos repping HWP</li>
              <li>Post a story that sends your followers to HWP to buy</li>
              <li>Tag #HWPambassador so it&apos;s clear the gear was gifted</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={{ color: '#171717', fontWeight: 700, letterSpacing: '-0.02em' }}>Apply</h2>
            <p className="mb-4">We review every application and reach out directly if it&apos;s a fit. Questions? Email <a href="mailto:hello@hoopwithprezence.com" className="underline" style={link}>hello@hoopwithprezence.com</a>.</p>
            <AmbassadorForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
