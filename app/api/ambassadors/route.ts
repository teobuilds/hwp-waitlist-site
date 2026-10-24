import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const SIZES = ['S', 'M', 'L', 'XL', '2XL'];

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const clean = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const handle = clean(body.handle);
  const teamSchool = clean(body.teamSchool);
  const shirtSize = clean(body.shirtSize);
  const shippingAddress = clean(body.shippingAddress);
  const about = clean(body.about);
  const agreed = body.agreed === true;

  if (!name || !email || !phone || !handle || !shirtSize || !shippingAddress || !about) {
    return NextResponse.json({ error: 'Please fill out every required field.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
  }
  if (phone.replace(/\D/g, '').length < 10) {
    return NextResponse.json({ error: 'Enter a valid phone number.' }, { status: 400 });
  }
  if (!SIZES.includes(shirtSize)) {
    return NextResponse.json({ error: 'Pick a shirt size.' }, { status: 400 });
  }
  if (!agreed) {
    return NextResponse.json({ error: 'You need to agree to the video and story terms.' }, { status: 400 });
  }
  if ([name, email, phone, handle, teamSchool, shippingAddress].some((v) => v.length > 300) || about.length > 3000) {
    return NextResponse.json({ error: 'One of your answers is too long.' }, { status: 400 });
  }

  const { error } = await supabase.from('ambassador_applications').insert([
    {
      name,
      email,
      phone,
      handle,
      team_school: teamSchool || null,
      shirt_size: shirtSize,
      shipping_address: shippingAddress,
      about,
      agreed,
    },
  ]);

  if (error) {
    return NextResponse.json({ error: 'Something went wrong. Try again or email us.' }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
