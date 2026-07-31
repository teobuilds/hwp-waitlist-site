import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getProduct } from '@/lib/products';
import { FREE_SHIPPING_THRESHOLD, SHIPPING_FEE } from '@/lib/shipping';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type CheckoutItem = {
  productId: number;
  size?: string;
  color?: string;
  quantity: number;
};

export async function POST(req: NextRequest) {
  const { items } = (await req.json()) as { items: CheckoutItem[] };

  if (!items || items.length === 0) {
    return NextResponse.json({ error: 'No items provided' }, { status: 400 });
  }

  const origin = req.headers.get('origin') ?? '';

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  let subtotal = 0;
  for (const item of items) {
    const product = getProduct(item.productId);
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const unitAmount = Math.round(parseFloat(product.price.replace('$', '')) * 100);
    subtotal += unitAmount * item.quantity;
    const variant = [item.color, item.size].filter(Boolean).join(' / ');
    const selectedColorImage = product.colors?.find(c => c.name === item.color)?.images?.[0];
    const imagePath = selectedColorImage ?? product.image;
    const images = imagePath ? [`${origin}${imagePath}`] : [];

    line_items.push({
      price_data: {
        currency: 'usd',
        unit_amount: unitAmount,
        tax_behavior: 'exclusive' as const,
        product_data: {
          name: variant ? `${product.name} (${variant})` : product.name,
          images,
        },
      },
      quantity: item.quantity,
    });
  }

  const qualifiesForFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD * 100;

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items,
    allow_promotion_codes: true,
    automatic_tax: { enabled: true },
    shipping_address_collection: {
      allowed_countries: ['US'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: qualifiesForFreeShipping ? 0 : Math.round(SHIPPING_FEE * 100),
            currency: 'usd',
          },
          display_name: qualifiesForFreeShipping ? 'Free shipping' : 'Standard shipping',
          tax_behavior: 'exclusive',
        },
      },
    ],
    success_url: `${origin}/shop?preview=hwp2025&checkout=success`,
    cancel_url: `${origin}/shop?preview=hwp2025&checkout=canceled`,
  });

  return NextResponse.json({ url: session.url });
}
