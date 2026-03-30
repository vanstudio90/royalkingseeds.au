import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Delivery & Shipping — Tracked, Discreet Postage Across Australia',
  description: 'Complimentary delivery on orders above $150 AUD. Unmarked packaging shipped via Australia Post to every state and territory. 3-7 business day delivery with full tracking.',
  alternates: { canonical: 'https://royalkingseeds.au/shipping' },
};

export default function ShippingPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl text-[#275C53] mb-4" style={{ fontFamily: 'var(--font-patua)' }}>Delivery &amp; Shipping</h1>
        <p className="text-[#192026]/70 mb-10">Every order is dispatched with care via Australia Post. Below you will find full details on our delivery process, from checkout to your doorstep.</p>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 border border-[#275C53]/5">
            <h2 className="text-lg text-[#275C53] font-semibold mb-3">How Tracking Works</h2>
            <p className="text-sm text-[#192026]/70 leading-relaxed">
              A tracking reference is generated for every order and sent to your email once your parcel is dispatched. You can monitor its journey through the Australia Post tracking portal — from our dispatch centre right through to delivery at your address. If anything seems amiss with your shipment, our support team is ready to help.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#275C53]/5">
            <h2 className="text-lg text-[#275C53] font-semibold mb-3">Delivery Costs &amp; Timeframes</h2>
            <div className="space-y-2 text-sm text-[#192026]/70">
              <p><strong className="text-[#275C53]">Complimentary Delivery:</strong> Automatically applied to orders of $150 AUD or more</p>
              <p><strong className="text-[#275C53]">Flat-Rate Postage:</strong> $9.99 for all orders under $150 AUD</p>
              <p><strong className="text-[#275C53]">Dispatch Window:</strong> 1-2 business days after order confirmation</p>
              <p><strong className="text-[#275C53]">Estimated Transit:</strong> 3-7 business days via Australia Post (metro areas typically faster)</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#275C53]/5">
            <h2 className="text-lg text-[#275C53] font-semibold mb-3">Our Approach to Discreet Packaging</h2>
            <p className="text-sm text-[#192026]/70 leading-relaxed">
              Protecting your privacy is fundamental to how we operate. Every parcel leaves our facility in plain, unbranded packaging — no logos, no product names, and absolutely no indication of what is inside. Internally, seeds are housed in crush-resistant containers to ensure they arrive in pristine condition regardless of how many hands the parcel passes through.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#275C53]/5">
            <h2 className="text-lg text-[#275C53] font-semibold mb-3">Seed Replacement &amp; Germination Promise</h2>
            <p className="text-sm text-[#192026]/70 leading-relaxed">
              Opened seed packs cannot be returned due to the perishable nature of seeds. That said, our germination promise means you are covered: if your seeds fail to sprout using our recommended method, contact us within 30 days of delivery with supporting photos and we will send replacements at no charge.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link href="/faq" className="px-3 py-1.5 bg-[#F5F0EA] rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">FAQ</Link>
          <Link href="/contact" className="px-3 py-1.5 bg-[#F5F0EA] rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">Get in Touch</Link>
          <Link href="/product-category/shop-all-cannabis-seeds" className="px-3 py-1.5 bg-[#F5F0EA] rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">Browse Seeds</Link>
        </div>
      </div>
    </div>
  );
}
