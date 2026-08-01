import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const h2 = { color: '#171717', fontWeight: 700, letterSpacing: '-0.02em' } as const;
const body = { color: '#404040', fontWeight: 500, lineHeight: 1.5 } as const;
const link = { color: '#AF94E0' } as const;

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-20 pb-10 md:pt-24 md:pb-16 px-4 md:px-6 max-w-2xl mx-auto">
        <h1 className="text-center mb-1 text-[22px] md:text-[32px]" style={{ color: '#AF94E0', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
          Terms of Service
        </h1>
        <p className="text-center mb-6 md:mb-8 text-[11px] md:text-[13px]" style={{ color: '#999999', fontWeight: 500 }}>Last updated: August 1, 2026</p>

        <div className="flex flex-col gap-6 md:gap-8 text-[13px] md:text-[15px]" style={body}>
          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>Overview</h2>
            <p>These Terms of Service (&ldquo;Terms&rdquo;) govern your use of hoopwithprezence.com (the &ldquo;Site&rdquo;) and any purchases made through it. Hoop With Prezence (&ldquo;HWP,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is based in Virginia, USA. By visiting the Site and/or making a purchase, you agree to be bound by these Terms. If you do not agree, you may not use the Site.</p>
            <p className="mt-2">We may update these Terms at any time by posting changes to this page. Continued use of the Site after changes are posted constitutes acceptance of those changes.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>1. Eligibility</h2>
            <p>You must be at least 18, or the age of majority in your jurisdiction, to make a purchase. By placing an order, you represent that you meet this requirement.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>2. General Conditions</h2>
            <p>We reserve the right to refuse service to anyone, for any reason, at any time. You agree not to reproduce, duplicate, copy, sell, resell, or otherwise exploit any portion of the Site or its content without our written permission.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>3. Products, Pricing &amp; Availability</h2>
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li>We make reasonable efforts to display product colors, sizes, and details accurately, but cannot guarantee your device&apos;s display will render colors exactly as they appear in person.</li>
              <li>Items are made in limited quantities; we reserve the right to limit, discontinue, or change any product or its pricing at any time without notice, and any offer is void where prohibited.</li>
              <li>We do not warrant that products will meet your expectations or that any errors on the Site will be corrected.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>4. Product Photography &amp; Brand Disclaimer</h2>
            <p>Hoop With Prezence is not affiliated with, sponsored by, or endorsed by Nike, Adidas, Under Armour, or any other third-party brand. Product photos on the Site may show models wearing third-party branded apparel for photographic and styling purposes only &mdash; the actual HWP product you receive will carry HWP&apos;s own branding and will not include any Nike, Adidas, Under Armour, or other third-party logos, marks, or branding. All third-party trademarks referenced or depicted are the property of their respective owners.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>5. Orders, Billing &amp; Fraud Prevention</h2>
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li>We reserve the right to refuse, limit, or cancel any order, including orders that we suspect involve fraud, reselling/distribution, or duplicate/abusive ordering patterns. If we cancel or modify an order, we&apos;ll attempt to notify you using the email or phone number provided at checkout.</li>
              <li>You agree to provide accurate, current purchase information at checkout.</li>
              <li>We may correct pricing or listing errors at any time, including after an order has been placed, and will notify you if this affects your order.</li>
              <li>All payments are processed securely through Stripe; prices are listed in USD.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>6. Shipping</h2>
            <p>We currently ship within the United States only. See our <Link href="/shipping-returns" className="underline" style={link}>Shipping &amp; Returns</Link> page for current rates and timelines, incorporated into these Terms by reference.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>7. Returns and Refunds</h2>
            <p>All sales are final, with limited exceptions. See our <Link href="/shipping-returns" className="underline" style={link}>Shipping &amp; Returns</Link> page for the full policy, incorporated into these Terms by reference.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>8. Fitness &amp; Training Content Disclaimer</h2>
            <p>Any workout plans, training content, drills, or related guidance provided through HWP (on the Site or any associated app) are for general informational and motivational purposes only. They are not medical, professional, or fitness advice, and are not a substitute for guidance from a qualified physician or trainer. Consult a doctor before beginning any exercise program, particularly if you have a pre-existing condition. You use any training content entirely at your own risk, and HWP is not liable for any injury resulting from its use.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>9. User Submissions</h2>
            <p>If you send us content &mdash; including product reviews, feedback, or messages &mdash; you agree we may use, edit, publish, or remove it at our discretion, and that it will not be false, defamatory, or infringe on anyone else&apos;s rights. We&apos;re under no obligation to keep submissions confidential or to respond to them.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>10. Third-Party Links</h2>
            <p>The Site may link to third-party sites (for example, our social media). We don&apos;t control and aren&apos;t responsible for the content, policies, or practices of those third-party sites.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>11. Intellectual Property</h2>
            <p>All content on the Site &mdash; including the HWP name, logo, product designs, graphics, and text &mdash; is owned by Hoop With Prezence or its licensors and protected by copyright and trademark law. You may not copy, reproduce, distribute, or create derivative works from it without our written permission.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>12. Prohibited Uses</h2>
            <p>You may not use the Site: for any unlawful purpose; to transmit viruses or malicious code; to harass, defame, or discriminate against others; to submit false or misleading information; to scrape, spider, or use automated tools against the Site without permission; or to interfere with or circumvent the Site&apos;s security. Violating these Terms may result in immediate termination of your access.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>13. Disclaimer of Warranties</h2>
            <p>The Site and all products are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of any kind, express or implied, to the fullest extent permitted by law. We don&apos;t warrant the Site will be uninterrupted, error-free, or secure.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>14. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, HWP is not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or products, even if advised of the possibility. Our total liability for any claim related to your order will not exceed the amount you paid for that order.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>15. Indemnification</h2>
            <p>You agree to indemnify and hold HWP harmless from any claims, damages, or expenses (including reasonable attorneys&apos; fees) arising from your violation of these Terms or misuse of the Site.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>16. Termination</h2>
            <p>We may terminate or restrict your access to the Site at any time, without notice, if we believe you&apos;ve violated these Terms. Obligations that by their nature should survive termination (e.g., Sections 11, 14, 15) will survive.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>17. Severability &amp; Entire Agreement</h2>
            <p>If any provision of these Terms is found unenforceable, the remaining provisions stay in effect. These Terms, together with any policies referenced herein, constitute the entire agreement between you and HWP regarding the Site.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>18. Governing Law</h2>
            <p>These Terms are governed by the laws of the Commonwealth of Virginia, USA. Disputes will be resolved in the state or federal courts located in Virginia.</p>
          </div>

          <div>
            <h2 className="mb-1.5 text-[14px] md:text-[17px]" style={h2}>19. Contact Us</h2>
            <p>Questions about these Terms: <a href="mailto:hoopwithprezence@gmail.com" className="underline" style={link}>hoopwithprezence@gmail.com</a></p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
