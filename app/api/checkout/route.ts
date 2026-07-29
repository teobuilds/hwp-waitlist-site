import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getProduct } from '@/lib/products';

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

  const line_items = [];
  for (const item of items) {
    const product = getProduct(item.productId);
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const unitAmount = Math.round(parseFloat(product.price.replace('$', '')) * 100);
    const variant = [item.color, item.size].filter(Boolean).join(' / ');
    const selectedColorImage = product.colors?.find(c => c.name === item.color)?.images?.[0];
    const imagePath = selectedColorImage ?? product.image;
    const images = imagePath ? [`${origin}${imagePath}`] : [];

    line_items.push({
      price_data: {
        currency: 'usd',
        unit_amount: unitAmount,
        product_data: {
          name: variant ? `${product.name} (${variant})` : product.name,
          images,
        },
      },
      quantity: item.quantity,
    });
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items,
    allow_promotion_codes: true,
    shipping_address_collection: {
      allowed_countries: ['US'],
    },
    success_url: `${origin}/shop?preview=hwp2025&checkout=success`,
    cancel_url: `${origin}/shop?preview=hwp2025&checkout=canceled`,
  });

  return NextResponse.json({ url: session.url });
}
