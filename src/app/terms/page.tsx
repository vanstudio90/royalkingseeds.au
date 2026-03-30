import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Conditions of Purchase',
  description: 'Review the terms governing your use of the Royal King Seeds website and purchases of cannabis seeds for Australian customers.',
  alternates: { canonical: 'https://royalkingseeds.au/terms' },
};

export default function TermsPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-3xl mx-auto prose prose-sm text-[#192026]/80 prose-headings:text-[#275C53] prose-headings:font-normal">
        <h1 style={{ fontFamily: 'var(--font-patua)' }}>Terms of Service</h1>
        <p><em>Effective from: March 2026</em></p>
        <p>These terms govern your access to and use of the Royal King Seeds website and any purchases made through it. By placing an order or browsing our site, you accept the conditions set out below.</p>

        <h2>Acceptance &amp; Eligibility</h2>
        <p>You must be at least 18 years of age to transact with Royal King Seeds. Completing a purchase serves as your confirmation that you meet this minimum age threshold and that you have legal capacity to enter into a binding agreement under Australian law.</p>

        <h2>Nature of Our Products</h2>
        <p>Cannabis seeds sold through this website are provided exclusively as adult novelty collectibles and for botanical genetic preservation. The purchaser assumes full responsibility for understanding and obeying all relevant Commonwealth, state, and territory legislation regarding cannabis seeds within their jurisdiction. Royal King Seeds disclaims any liability arising from unlawful use of its products.</p>

        <h2>Currency, Pricing &amp; Payment Processing</h2>
        <p>All prices displayed are denominated in Australian Dollars (AUD) and include GST where applicable. We reserve the right to adjust pricing at any time without advance notice. Payment must be completed at the point of order. Accepted payment methods include Visa, Mastercard, and cryptocurrency (Bitcoin, Ethereum).</p>

        <h2>Delivery &amp; Dispatch</h2>
        <p>We dispatch orders to all Australian states and territories. Quoted delivery windows are estimates provided in good faith and do not constitute a guarantee. Royal King Seeds accepts no liability for delays attributable to Australia Post, weather events, or other circumstances beyond our reasonable control.</p>

        <h2>Returns &amp; Opened Products</h2>
        <p>Given the biological nature of seeds, we are unable to accept returns on opened packs. Sealed, unopened packs in their original condition may be returned within 14 days of delivery for a full refund. A return authorisation must be obtained from our support team prior to posting any return.</p>

        <h2>Seed Germination Promise</h2>
        <p>Our germination promise applies to seeds that fail to sprout when our recommended germination technique is followed. To lodge a claim, contact us within 30 days of delivery with photographic evidence and your order number. Replacement seeds will match the original strain and quantity.</p>

        <h2>Cap on Liability</h2>
        <p>Under no circumstances shall Royal King Seeds be liable for indirect, incidental, special, or consequential damages connected to the use of our products or services. Our aggregate liability is limited to the total amount you paid for the specific order in dispute.</p>

        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of Australia. Any dispute arising under these terms shall be subject to the jurisdiction of the courts of Australia.</p>

        <h2>Enquiries</h2>
        <p>For questions relating to these terms, email us at <a href="mailto:support@royalkingseeds.au">support@royalkingseeds.au</a>.</p>
        <div className="mt-8 flex flex-wrap gap-2 not-prose">
          <Link href="/privacy" className="px-3 py-1.5 bg-[#F5F0EA] rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="px-3 py-1.5 bg-[#F5F0EA] rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">Get in Touch</Link>
        </div>
      </div>
    </div>
  );
}
