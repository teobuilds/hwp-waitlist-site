import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getProduct } from '@/lib/products';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const { productId, size, color } = await req.json();
  const product = getProduct(productId);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  const unitAmount = Math.round(parseFloat(product.price.replace('$', '')) * 100);
  const origin = req.headers.get('origin') ?? '';
  const variant = [color, size].filter(Boolean).join(' / ');

  const selectedColorImage = product.colors?.find(c => c.name === color)?.images?.[0];
  const imagePath = selectedColorImage ?? product.image;
  const images = imagePath ? [`${origin}${imagePath}`] : [];

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: unitAmount,
          product_data: {
            name: variant ? `${product.name} (${variant})` : product.name,
            images,
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/shop/${productId}?preview=hwp2025&checkout=success`,
    cancel_url: `${origin}/shop/${productId}?preview=hwp2025&checkout=canceled`,
  });

  return NextResponse.json({ url: session.url });
}
