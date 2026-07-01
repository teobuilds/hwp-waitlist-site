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
      <section className="pt-32 pb-16 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: '#7B5EA7' }}>
          Train With Intention.
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-1" style={{ color: '#A78BCC' }}>
          Hoop With Prezence.
        </h1>

        <div className="mt-10">
          <Image src="/images/screen-home.png" alt="Hoop With Prezence App" width={280} height={570} className="drop-shadow-2xl" />
        </div>

        <Link href="/waitlist">
          <button className="mt-10 px-8 py-3 rounded-full border-2 font-semibold text-sm hover:opacity-80 transition-opacity" style={{ borderColor: '#7B5EA7', color: '#7B5EA7' }}>
            Join the Waitlist
          </button>
        </Link>
      </section>

      {/* Feature Sections */}
      {features.map((feature, i) => (
        <section
          key={i}
          className={`py-16 px-6 md:px-20 flex flex-col ${
            feature.imageRight ? 'md:flex-row' : 'md:flex-row-reverse'
          } items-center gap-12 max-w-5xl mx-auto`}
        >
          <div className={`flex-1 text-center ${feature.imageRight ? 'md:text-left' : 'md:text-right'}`}>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#7B5EA7' }}>{feature.title}</h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-sm mx-auto md:mx-0 md:ml-auto">
              {feature.description}
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src={feature.image} alt={feature.title} width={260} height={530} className="drop-shadow-xl" />
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-24 flex flex-col items-center text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Unleash your edge.</h2>
        <p className="font-semibold mt-2 text-lg" style={{ color: '#A78BCC' }}>Start transforming your game now.</p>
        <Link href="/waitlist">
          <button className="mt-8 px-8 py-3 rounded-full border-2 font-semibold text-sm hover:opacity-80 transition-opacity" style={{ borderColor: '#7B5EA7', color: '#7B5EA7' }}>
            Get it now
          </button>
        </Link>
      </section>
    </main>
  );
}
