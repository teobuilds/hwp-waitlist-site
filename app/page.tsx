import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const features = [
  {
    title: 'Create a Play',
    description: 'Create, diagram, and analyze plays with a dynamic coaching board. Map out movements by role and position, then generate personalized workouts based on your actions and reads.',
    imageRight: true,
    image: '/images/screen-create-play.png',
  },
  {
    title: 'Specific Workout',
    description: 'Get personalized workouts based on your position, movements, and reads—built directly from the plays you create.',
    imageRight: false,
    image: '/images/screen-workout.png',
  },
  {
    title: 'Workout Library',
    description: 'The Workout Library stores every workout you complete so you can revisit, repeat, or build consistency over time.',
    imageRight: true,
    image: '/images/screen-library.png',
  },
  {
    title: 'Player Profile',
    description: 'Enter the Film Room to break down actions, reactions, and outcomes. Prepare to outthink before you outplay.',
    imageRight: false,
    image: '/images/screen-profile.png',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-10 md:pt-32 md:pb-16 flex flex-col items-center text-center px-6">
        <h1 className="leading-tight text-[28px] md:text-[40px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          Train With Intention.
        </h1>
        <h1 className="mt-1 text-[28px] md:text-[40px]" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          Hoop With Prezence.
        </h1>

        <div className="mt-6 md:mt-10">
          <Image src="/images/screen-home.png" alt="Hoop With Prezence App" width={340} height={690} className="drop-shadow-xl w-[220px] md:w-[340px] h-auto" />
        </div>

        <Link href="/waitlist">
          <button className="btn-pill mt-6 md:mt-10 px-6 py-2.5 md:px-8 md:py-3 text-[13px] md:text-[15px]">
            Join the Waitlist
          </button>
        </Link>
      </section>

      {/* Feature Sections */}
      {features.map((feature, i) => (
        <section
          key={i}
          className={`py-10 md:py-16 px-6 md:px-20 flex flex-col ${
            feature.imageRight ? 'md:flex-row' : 'md:flex-row-reverse'
          } items-center gap-6 md:gap-12 max-w-5xl mx-auto`}
        >
          <div className="flex-1 text-center">
            <h2 className="mb-2 md:mb-4 text-[22px] md:text-[32px]" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>{feature.title}</h2>
            <p className="max-w-[280px] md:max-w-sm mx-auto text-[15px] md:text-[22px]" style={{ color: '#999999', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.2 }}>
              {feature.description}
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src={feature.image} alt={feature.title} width={340} height={690} className="drop-shadow-xl w-[200px] md:w-[340px] h-auto" />
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-14 md:py-24 flex flex-col items-center text-center px-6">
        <h2 className="text-[24px] md:text-[32px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>Unleash your edge.</h2>
        <p className="mt-2 text-[15px] md:text-[22px]" style={{ color: '#AF94E0', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.1 }}>Start transforming your game now.</p>
        <Link href="/waitlist">
          <button className="btn-pill mt-6 md:mt-8 px-6 py-2.5 md:px-8 md:py-3 text-[13px] md:text-[15px]">
            Get it now
          </button>
        </Link>
      </section>
    </main>
  );
}
