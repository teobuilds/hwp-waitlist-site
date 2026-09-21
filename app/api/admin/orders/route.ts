import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { ADMIN_COOKIE, isAuthed } from '@/lib/admin-auth';

type Action = 'to_pack' | 'packed' | 'shipped' | 'cancelled';
const ACTIONS: Action[] = ['to_pack', 'packed', 'shipped', 'cancelled'];

export async function PATCH(req: NextRequest) {
  if (!isAuthed(req.cookies.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ error: 'Not signed in.' }, { status: 401 });
  }

  const { id, status, trackingNumber } = await req.json().catch(() => ({}));
  if (typeof id !== 'string' || !ACTIONS.includes(status)) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const now = new Date().toISOString();
  const update: Record<string, unknown> = { status };
  if (status === 'to_pack') {
    update.packed_at = null;
    update.shipped_at = null;
    update.tracking_number = null;
  }
  if (status === 'packed') {
    update.packed_at = now;
    update.shipped_at = null;
  }
  if (status === 'shipped') {
    update.shipped_at = now;
    update.packed_at = now;
    const tracking = typeof trackingNumber === 'string' ? trackingNumber.trim() : '';
    update.tracking_number = tracking || null;
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
  const { error } = await supabase.from('orders').update(update).eq('id', id);

  if (error) {
    return NextResponse.json({ error: 'Failed to update order.' }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}
