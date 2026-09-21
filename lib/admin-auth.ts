import { createHmac, timingSafeEqual } from 'crypto';

export const ADMIN_COOKIE = 'hwp_admin';

// The cookie holds an HMAC keyed by the admin password, so changing the
// password in Vercel signs everyone out and the password itself is never stored.
function tokenFor(password: string) {
  return createHmac('sha256', password).update('hwp-admin-session').digest('hex');
}

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}

export function checkPassword(attempt: string) {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  return safeEqual(tokenFor(attempt), tokenFor(password));
}

export function sessionToken() {
  const password = process.env.ADMIN_PASSWORD;
  return password ? tokenFor(password) : null;
}

export function isAuthed(cookieValue: string | undefined) {
  const expected = sessionToken();
  if (!expected || !cookieValue) return false;
  return safeEqual(cookieValue, expected);
}
