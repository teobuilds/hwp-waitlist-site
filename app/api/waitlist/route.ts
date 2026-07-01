import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
  const { name, email, phone } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  const { error } = await supabase.from('waitlist').insert([{ name, email, phone }]);

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'This email is already on the waitlist.' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to join waitlist.' }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
