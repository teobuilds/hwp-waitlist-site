import { cookies } from 'next/headers';
import { createClient } from '@supabase/supabase-js';
import { ADMIN_COOKIE, isAuthed } from '@/lib/admin-auth';
import AdminLogin from '@/components/admin/AdminLogin';
import AdminDashboard, { type AdminOrder } from '@/components/admin/AdminDashboard';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  if (!isAuthed(cookies().get(ADMIN_COOKIE)?.value)) {
    return <AdminLogin />;
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
  const { data, error } = await supabase
    .from('orders')
    .select('id, stripe_session_id, customer_name, customer_email, shipping_address, line_items, amount_total, status, tracking_number, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <p className="text-[14px]" style={{ color: '#404040' }}>Couldn&apos;t load orders. Refresh to try again.</p>
      </main>
    );
  }

  return <AdminDashboard orders={(data ?? []) as AdminOrder[]} />;
}
