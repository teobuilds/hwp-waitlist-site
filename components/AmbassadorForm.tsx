'use client';

import { useState } from 'react';
import Link from 'next/link';

const SIZES = ['S', 'M', 'L', 'XL', '2XL'];

const labelStyle = { color: '#171717', fontWeight: 600 } as const;
const inputClass =
  'w-full rounded-lg border border-gray-300 px-3 py-2 text-[13px] md:text-[15px] outline-none focus:border-[#AF94E0] focus:ring-1 focus:ring-[#AF94E0]';

export default function AmbassadorForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setStatus('sending');
    const f = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/ambassadors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: f.get('name'),
          email: f.get('email'),
          phone: f.get('phone'),
          handle: f.get('handle'),
          teamSchool: f.get('teamSchool'),
          shirtSize: f.get('shirtSize'),
          shippingAddress: f.get('shippingAddress'),
          about: f.get('about'),
          agreed: f.get('agreed') === 'on',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Try again or email us.');
        setStatus('idle');
        return;
      }
      setStatus('done');
    } catch {
      setError('Something went wrong. Try again or email us.');
      setStatus('idle');
    }
  }

  if (status === 'done') {
    return (
      <div className="text-center py-6">
        <h3 className="text-[18px] md:text-[24px] mb-2" style={{ color: '#171717', fontWeight: 700, letterSpacing: '-0.02em' }}>
          You&apos;re in the queue 🙌
        </h3>
        <p className="mb-5" style={{ color: '#404040', fontWeight: 500, lineHeight: 1.5 }}>
          We review every application and reach out directly if it&apos;s a fit. Keep an eye on your email.
        </p>
        <Link
          href="/shop"
          className="inline-block rounded-full px-6 py-2 text-[13px] md:text-[15px] text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#AF94E0', fontWeight: 600 }}
        >
          Shop HWP
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1">
        <span style={labelStyle}>Name</span>
        <input name="name" required maxLength={300} autoComplete="name" className={inputClass} />
      </label>
      <label className="flex flex-col gap-1">
        <span style={labelStyle}>Email</span>
        <input name="email" type="email" required maxLength={300} autoComplete="email" className={inputClass} />
      </label>
      <label className="flex flex-col gap-1">
        <span style={labelStyle}>Phone number</span>
        <input name="phone" type="tel" required maxLength={300} autoComplete="tel" className={inputClass} />
      </label>
      <label className="flex flex-col gap-1">
        <span style={labelStyle}>Instagram / TikTok handle</span>
        <input name="handle" required maxLength={300} placeholder="@yourhandle" className={inputClass} />
      </label>
      <label className="flex flex-col gap-1">
        <span style={labelStyle}>Team / school <span style={{ color: '#999999', fontWeight: 500 }}>(optional)</span></span>
        <input name="teamSchool" maxLength={300} className={inputClass} />
      </label>
      <label className="flex flex-col gap-1">
        <span style={labelStyle}>Shirt size</span>
        <select name="shirtSize" required defaultValue="" className={inputClass}>
          <option value="" disabled>Select a size</option>
          {SIZES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1">
        <span style={labelStyle}>Shipping address</span>
        <textarea name="shippingAddress" required maxLength={300} rows={2} autoComplete="street-address" className={inputClass} />
      </label>
      <label className="flex flex-col gap-1">
        <span style={labelStyle}>Tell us what makes you different and why you&apos;d be a good fit to rep HWP.</span>
        <textarea
          name="about"
          required
          maxLength={3000}
          rows={5}
          placeholder="Awards, stats, followers, content style, anything that sets you apart."
          className={inputClass}
        />
      </label>
      <label className="flex items-start gap-2">
        <input name="agreed" type="checkbox" required className="mt-1 h-4 w-4 accent-[#AF94E0]" />
        <span style={{ color: '#404040', fontWeight: 500 }}>
          I agree to make 3 HWP videos and post a story linking to HWP. I&apos;ll tag #HWPambassador.
        </span>
      </label>

      {error && (
        <p role="alert" style={{ color: '#DC2626', fontWeight: 500 }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-full px-6 py-2.5 text-[13px] md:text-[15px] text-white hover:opacity-90 transition-opacity disabled:opacity-60"
        style={{ backgroundColor: '#AF94E0', fontWeight: 600 }}
      >
        {status === 'sending' ? 'Sending…' : 'Apply'}
      </button>
      <p className="text-[11px] md:text-[12px]" style={{ color: '#999999', fontWeight: 500 }}>
        We only use your info to review your application and ship gear. Questions? Email{' '}
        <a href="mailto:hello@hoopwithprezence.com" className="underline">hello@hoopwithprezence.com</a>.
      </p>
    </form>
  );
}
