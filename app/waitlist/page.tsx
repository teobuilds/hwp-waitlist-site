'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function WaitlistPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      router.push('/confirmed');
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-28 pb-14 md:pt-40 md:pb-20 flex flex-col items-center text-center px-6">
        <h1 className="text-[28px] md:text-[40px]" style={{ color: '#7956B9', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          Hoop With Prezence
        </h1>
        <p className="mt-2 text-[20px] md:text-[35px]" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          Early access. Limited spots.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 w-full max-w-sm flex flex-col gap-4">
          <div className="flex flex-col gap-1 text-left">
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
              className="px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#AF94E0]"
            />
          </div>

          <div className="flex flex-col gap-1 text-left">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="jane@hoopwithprezence.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
              className="px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#AF94E0]"
            />
          </div>

          <div className="flex flex-col gap-1 text-left">
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              placeholder="###-###-####"
              value={form.phone}
              onChange={e => {
                const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
                let formatted = digits;
                if (digits.length > 6) formatted = `${digits.slice(0,3)}-${digits.slice(3,6)}-${digits.slice(6)}`;
                else if (digits.length > 3) formatted = `${digits.slice(0,3)}-${digits.slice(3)}`;
                setForm({ ...form, phone: formatted });
              }}
              className="px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#AF94E0]"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="btn-pill mt-2 px-8 py-3 disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </section>
    </main>
  );
}
