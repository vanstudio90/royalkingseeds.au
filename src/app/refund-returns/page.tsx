import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Returns, Refunds & Germination Promise — Your Rights as an Aussie Buyer',
  description: 'Understand the Royal King Seeds refund process, seed replacement programme, and your consumer protections under Australian Consumer Law.',
  alternates: { canonical: 'https://royalkingseeds.au/refund-returns' },
};

export default function RefundReturnsPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-3xl mx-auto prose prose-sm text-[#192026]/80 prose-headings:text-[#275C53] prose-headings:font-normal">
        <h1 style={{ fontFamily: 'var(--font-patua)' }}>Returns, Refunds &amp; Germination Promise</h1>

        <h2>Your Protections Under Australian Consumer Law</h2>
        <p>Nothing in this policy limits or excludes guarantees, rights, or remedies you may hold under the <strong>Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010)</strong>. If goods are faulty, not as described, or fail to meet a consumer guarantee, you are entitled to a remedy regardless of our returns policy.</p>

        <h2>Our Germination Promise</h2>
        <p>We stand behind every seed we sell. If your seeds do not germinate when you follow the technique outlined in our germination guide, we will replace them free of charge. Here is how the process works:</p>
        <ol>
          <li>Email <a href="mailto:support@royalkingseeds.au">support@royalkingseeds.au</a> within 30 days of receiving your order.</li>
          <li>Include your order number along with clear photographs showing the germination attempt (paper towel method preferred).</li>
          <li>Our team will review your claim and, once approved, dispatch replacement seeds of the same strain and pack size at no cost.</li>
        </ol>

        <h2>Returning Unopened Products</h2>
        <p>Because cannabis seeds are a perishable biological product, opened packs cannot be accepted for return. However, if your pack remains sealed and in its original condition, you may return it within 14 days of delivery for a complete refund. Please contact our support team to obtain a return authorisation before posting the item back.</p>

        <h2>Parcels Arriving Damaged or Incomplete</h2>
        <p>Should your order arrive with visible damage to the packaging or with items missing, notify us within 7 days of delivery. Attach photographs of the damaged parcel or its contents. We will arrange for replacement items to be sent at no additional cost to you.</p>

        <h2>Who Covers Return Postage?</h2>
        <p>Where a return is initiated by you (change of mind on an unopened pack), return postage is your responsibility. If the return is necessary because we made an error — such as dispatching the wrong strain or inadequate packaging — we will provide a prepaid return label or arrange collection at our expense.</p>

        <h2>Refund Processing Timeframe</h2>
        <p>Once we receive and inspect your returned item, refunds are processed within 5 business days. The credit will appear on your original payment method. Cryptocurrency payments are refunded at the AUD value of the original transaction.</p>

        <div className="mt-8 flex flex-wrap gap-2 not-prose">
          <Link href="/shipping" className="px-3 py-1.5 bg-[#F5F0EA] rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">Delivery Details</Link>
          <Link href="/contact" className="px-3 py-1.5 bg-[#F5F0EA] rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">Contact Support</Link>
          <Link href="/faq" className="px-3 py-1.5 bg-[#F5F0EA] rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">FAQ</Link>
        </div>
      </div>
    </div>
  );
}
