import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const h2 = { color: '#171717', fontWeight: 700, letterSpacing: '-0.02em' } as const;
const body = { color: '#404040', fontWeight: 500, lineHeight: 1.5 } as const;
const link = { color: '#AF94E0' } as const;

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-20 pb-10 md:pt-24 md:pb-16 px-4 md:px-6 max-w-2xl mx-auto">
        <h1 className="text-center mb-1 text-[22px] md:text-[32px]" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          Privacy Policy
        </h1>
        <p className="text-center mb-6 md:mb-8 text-[11px] md:text-[13px]" style={{ color: '#999999', fontWeight: 500 }}>Last updated: August 1, 2026</p>

        <div className="flex flex-col gap-6 md:gap-8 text-[13px] md:text-[15px]" style={body}>
          <p>Hoop With Prezence (&ldquo;HWP,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates hoopwithprezence.com (the &ldquo;Site&rdquo;). This Privacy Policy explains what information we collect, how we use it, and your choices regarding that information.</p>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>1. Information We Collect</h2>
            <p className="mt-2" style={{ ...body, fontWeight: 700, color: '#171717' }}>Information you give us directly:</p>
            <ul className="list-disc pl-5 mt-1 flex flex-col gap-1">
              <li><strong>Waitlist signup</strong>: name, email address, and phone number when you join our waitlist.</li>
              <li><strong>Order information</strong>: when you make a purchase, our payment processor (Stripe) collects your name, email, shipping address, and payment details. We receive and store your name, email, shipping address, and order details (items purchased, amount paid) &mdash; we do not receive or store your full card number, CVV, or other raw payment credentials.</li>
              <li><strong>Communications</strong>: if you email us, we retain that correspondence to respond to you.</li>
            </ul>
            <p className="mt-3" style={{ ...body, fontWeight: 700, color: '#171717' }}>Information collected automatically:</p>
            <ul className="list-disc pl-5 mt-1 flex flex-col gap-1">
              <li><strong>Cart and Favorites</strong>: the items in your cart and your favorited products are stored locally in your browser (localStorage) and are never transmitted to or stored on our servers unless you complete a purchase.</li>
              <li><strong>Standard hosting logs</strong>: our hosting provider (Vercel) and payment processor (Stripe) may automatically log technical information such as IP address, browser type, and device information as part of normal operation and fraud prevention. We do not use this data for advertising or tracking purposes, and we do not currently use analytics tools, advertising pixels, or third-party tracking cookies on the Site.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li>To fulfill and ship your orders</li>
              <li>To send order confirmations and respond to customer service inquiries</li>
              <li>To notify you about the app/waitlist launch or related updates, if you&apos;ve joined the waitlist</li>
              <li>To detect and prevent fraud</li>
              <li>To comply with legal and tax obligations</li>
            </ul>
            <p className="mt-2">We do not sell your personal information, and we do not use it for targeted advertising.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>3. Who We Share Information With</h2>
            <p>We share information only with the service providers (&ldquo;processors&rdquo;) that help us run the Site and fulfill orders:</p>
            <ul className="list-disc pl-5 mt-1 flex flex-col gap-1">
              <li><strong>Stripe</strong> &mdash; payment processing (handles all card data directly)</li>
              <li><strong>Supabase</strong> &mdash; database hosting for our waitlist and order records</li>
              <li><strong>Resend</strong> &mdash; sends transactional/order notification emails</li>
              <li><strong>Vercel</strong> &mdash; hosts the Site</li>
            </ul>
            <p className="mt-2">We do not share your information with any other third party, and we do not sell or rent your personal information to anyone.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>4. Data Retention</h2>
            <p>We retain waitlist and order information for as long as reasonably necessary to fulfill orders, maintain business records, and comply with tax/legal obligations. You may request deletion of your information at any time (see Section 6).</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>5. Security</h2>
            <p>We take reasonable measures to protect your information, including relying on PCI-compliant payment processing through Stripe so that we never handle your raw card data. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>6. Your Rights</h2>
            <p>You may contact us at <a href="mailto:hoopwithprezence@gmail.com" className="underline" style={link}>hoopwithprezence@gmail.com</a> to:</p>
            <ul className="list-disc pl-5 mt-1 flex flex-col gap-1">
              <li>Request a copy of the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to what we&apos;re legally required to retain, e.g. for tax records)</li>
              <li>Unsubscribe from waitlist communications</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>7. Children&apos;s Privacy</h2>
            <p>The Site is not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>9. Contact Us</h2>
            <p>Questions about this policy: <a href="mailto:hoopwithprezence@gmail.com" className="underline" style={link}>hoopwithprezence@gmail.com</a></p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
