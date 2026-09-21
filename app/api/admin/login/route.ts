import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, checkPassword, sessionToken } from '@/lib/admin-auth';

export async function POST(req: NextRequest) {
  const { password } = await req.json().catch(() => ({ password: '' }));

  if (typeof password !== 'string' || !checkPassword(password)) {
    // Slow down guessing.
    await new Promise(resolve => setTimeout(resolve, 800));
    return NextResponse.json({ error: 'Wrong password.' }, { status: 401 });
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set(ADMIN_COOKIE, sessionToken()!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.delete(ADMIN_COOKIE);
  return res;
}
