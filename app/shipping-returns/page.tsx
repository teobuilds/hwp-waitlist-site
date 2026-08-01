import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ShippingReturnsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-20 pb-10 md:pt-24 md:pb-16 px-4 md:px-6 max-w-2xl mx-auto">
        <h1 className="text-center mb-6 md:mb-8 text-[22px] md:text-[32px]" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          Shipping &amp; Returns
        </h1>

        <div className="flex flex-col gap-6 md:gap-8 text-[13px] md:text-[15px]" style={{ color: '#404040', fontWeight: 500, lineHeight: 1.5 }}>
          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={{ color: '#171717', fontWeight: 700, letterSpacing: '-0.02em' }}>Shipping</h2>
            <p>We currently ship within the United States only. Standard shipping is a flat $5.99, and free on orders of $65 or more. Orders are packed and shipped within 3-5 business days, with delivery typically taking 3-7 business days after that depending on your location.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={{ color: '#171717', fontWeight: 700, letterSpacing: '-0.02em' }}>Returns &amp; Exchanges</h2>
            <p>All sales are final. Our products are made in limited quantities, so we&apos;re unable to offer exchanges or refunds once an order has been placed.</p>
            <p className="mt-2">The only exceptions are:</p>
            <ul className="list-disc pl-5 mt-1 flex flex-col gap-1">
              <li>If the error is on our end (for example, you receive the wrong size or item compared to your order).</li>
              <li>If your order has not yet been fulfilled, you may be eligible for an exchange or refund.</li>
            </ul>
            <p className="mt-2">We encourage you to reach out with any questions about sizing, fit, or product details before purchasing to make sure you get exactly what you&apos;re looking for.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={{ color: '#171717', fontWeight: 700, letterSpacing: '-0.02em' }}>Questions?</h2>
            <p>Reach out to us at <a href="mailto:hoopwithprezence@gmail.com" className="underline" style={{ color: '#AF94E0' }}>hoopwithprezence@gmail.com</a> and we&apos;ll get back to you as soon as we can.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
