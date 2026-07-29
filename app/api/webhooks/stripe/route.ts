import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature!, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error } = await supabase.from('orders').insert([{
      stripe_session_id: session.id,
      customer_email: session.customer_details?.email ?? null,
      customer_name: session.customer_details?.name ?? null,
      shipping_address: session.collected_information?.shipping_details?.address ?? null,
      line_items: lineItems.data.map(item => ({
        name: item.description,
        quantity: item.quantity,
        amount_total: item.amount_total,
      })),
      amount_total: session.amount_total ?? 0,
      currency: session.currency ?? 'usd',
    }]);

    if (error && error.code !== '23505') {
      return NextResponse.json({ error: 'Failed to record order' }, { status: 500 });
    }

    if (process.env.RESEND_API_KEY && process.env.ORDER_NOTIFICATION_EMAIL) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const itemsSummary = lineItems.data
        .map(item => `${item.quantity}x ${item.description} — $${((item.amount_total ?? 0) / 100).toFixed(2)}`)
        .join('\n');
      const addr = session.collected_information?.shipping_details?.address;
      const addressSummary = addr
        ? `${addr.line1}${addr.line2 ? ', ' + addr.line2 : ''}, ${addr.city}, ${addr.state} ${addr.postal_code}`
        : 'No shipping address on file';

      await resend.emails.send({
        from: 'HWP Orders <orders@hoopwithprezence.com>',
        to: process.env.ORDER_NOTIFICATION_EMAIL,
        subject: `New order — $${((session.amount_total ?? 0) / 100).toFixed(2)}`,
        text: `New order from ${session.customer_details?.name ?? 'unknown'} (${session.customer_details?.email ?? 'no email'})\n\n${itemsSummary}\n\nShip to:\n${addressSummary}`,
      });
    }
  }

  return NextResponse.json({ received: true });
}
