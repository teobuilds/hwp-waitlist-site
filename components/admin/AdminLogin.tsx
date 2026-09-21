'use client';

import { useState } from 'react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      window.location.reload();
    } else {
      setError('Wrong password.');
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-white">
      <form onSubmit={submit} className="w-full max-w-xs flex flex-col gap-3">
        <h1 className="text-[24px]" style={{ color: '#7956B9' }}>HWP Orders</h1>
        <input
          type="password"
          autoFocus
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full rounded-full border-2 px-4 py-2.5 text-[14px] outline-none"
          style={{ borderColor: '#AF94E0' }}
        />
        {error && <p className="text-[13px]" style={{ color: '#DC2626' }}>{error}</p>}
        <button type="submit" disabled={loading || !password} className="btn-pill-filled px-6 py-2.5 text-[14px] disabled:opacity-50">
          {loading ? 'Checking…' : 'Sign in'}
        </button>
      </form>
    </main>
  );
}
