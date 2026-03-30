import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Your Questions Answered — Cannabis Seeds FAQ for Aussie Growers',
  description: 'Get clear answers about ordering cannabis seeds online in Australia. Covers delivery timeframes, accepted payment options, germination support, Australian law, and cultivation guidance from Royal King Seeds.',
  alternates: { canonical: 'https://royalkingseeds.au/faq' },
};

const faqs = [
  { category: 'Seeds & Cultivation', questions: [
    { q: 'What distinguishes feminised seeds from autoflowering varieties?', a: 'Feminised seeds yield virtually all female plants (99.9%) and depend on photoperiod changes — switching to a 12/12 light schedule — to begin flowering. Autoflowering varieties, by contrast, transition into bloom automatically once they reach a certain maturity (typically 8-10 weeks after sprouting), irrespective of how many hours of light they receive.' },
    { q: 'How should I keep my seeds viable over time?', a: 'For optimal longevity, place your seeds inside an airtight vessel — such as a sealed glass jar — and store them in the refrigerator. A cool, dark, moisture-free environment preserves viability for multiple years. Avoid temperature fluctuations, as these can trigger premature germination.' },
    { q: 'Do you back your seeds with a germination promise?', a: 'Absolutely. Should your seeds not sprout when you follow our recommended germination technique, we will send replacements at no charge. Simply reach out within 30 days of receiving your parcel, including your order reference and photographs that document your germination attempt.' },
    { q: 'Can I get growing tips from your team?', a: 'Of course! Our blog features detailed cultivation guides suited to Australian climates and conditions. Beyond that, our support crew is always glad to assist with varietal selection, troubleshooting, and general growing questions tailored to your region.' },
    { q: 'Which strains perform best in hot Australian summers?', a: 'Heat-tolerant sativa and sativa-dominant hybrids often thrive during Australian summers. Strains with landrace genetics from equatorial regions — such as Acapulco Gold — handle high temperatures well. For southern states with milder summers, most indica and hybrid varieties perform admirably outdoors from October through April.' },
  ]},
  { category: 'Delivery & Dispatch', questions: [
    { q: 'Which regions in Australia do you deliver to?', a: 'We post to every state and territory across Australia — from Queensland to Tasmania, Western Australia to the ACT. Each order is dispatched in plain, nondescript packaging that reveals nothing about its contents.' },
    { q: 'What are your delivery timeframes?', a: 'Orders are processed and dispatched within 1-2 business days. Delivery via Australia Post typically takes between 3-7 business days, depending on your location. A tracking reference is emailed with every order so you can follow your parcel.' },
    { q: 'Do you offer complimentary shipping?', a: 'Yes — all orders totalling $150 AUD or more ship free of charge. For orders below that threshold, a flat delivery fee of $9.99 applies Australia-wide.' },
    { q: 'How private is the packaging?', a: 'Completely. We use unmarked, generic boxes or satchels with no logos, product descriptions, or any reference to cannabis, seeds, or Royal King Seeds anywhere on the exterior. Your privacy matters to us.' },
  ]},
  { category: 'Purchases & Payments', questions: [
    { q: 'What is the ordering process?', a: 'Browse our seed catalogue, select your preferred strains and pack sizes, then proceed to checkout. Enter your delivery address and payment information, and you will receive an order confirmation email shortly after.' },
    { q: 'Which payment options are available?', a: 'We accept Visa, Mastercard, and major cryptocurrencies including Bitcoin and Ethereum. Every transaction is protected by SSL encryption to safeguard your financial details.' },
    { q: 'Is it possible to amend or cancel a placed order?', a: 'Get in touch within 2 hours of ordering by emailing support@royalkingseeds.au. Once an order moves into the packing stage, changes may no longer be feasible.' },
    { q: 'Are volume discounts available for larger orders?', a: 'Yes. We provide tiered pricing on 10-seed and 20-seed packs. For wholesale or bulk enquiries beyond our standard pack sizes, please contact our team directly for a custom quote.' },
  ]},
  { category: 'Australian Law & Privacy', questions: [
    { q: 'What is the legal position on purchasing cannabis seeds in Australia?', a: 'Cannabis seeds are offered as adult novelty collectibles and for the purpose of genetic preservation. Legislation around germination differs between states and territories — for instance, the ACT permits limited personal cultivation for adults. Purchasers must familiarise themselves with the regulations that apply in their own jurisdiction.' },
    { q: 'How do you protect my personal data?', a: 'All transactions use SSL encryption, and we never disclose your personal details to outside parties. Our complete data-handling practices are outlined in our Privacy Policy, which aligns with the Australian Privacy Act 1988.' },
    { q: 'Is there an age requirement for placing an order?', a: 'Yes. You must be at least 18 years of age (or the minimum legal age in your state or territory) to purchase from our store.' },
  ]},
];

export default function FaqPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl text-[#275C53] mb-4" style={{ fontFamily: 'var(--font-patua)' }}>Common Questions from Aussie Growers</h1>
        <p className="text-[#192026]/70 mb-10">Straightforward answers for everything related to buying cannabis seeds online with Royal King Seeds. If something is not covered here, <Link href="/contact" className="text-[#275C53] font-medium hover:text-[#D7B65D]">get in touch with our team</Link>.</p>

        {faqs.map((section) => (
          <div key={section.category} className="mb-10">
            <h2 className="text-lg text-[#275C53] font-semibold mb-4" style={{ fontFamily: 'var(--font-patua)' }}>{section.category}</h2>
            <div className="space-y-3">
              {section.questions.map((faq, i) => (
                <details key={i} className="bg-white rounded-2xl border border-[#275C53]/5 group">
                  <summary className="px-6 py-4 cursor-pointer text-[#275C53] font-medium text-sm flex items-center justify-between">
                    {faq.q}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#275C53]/40 shrink-0 ml-4 group-open:rotate-180 transition-transform">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-[13px] text-[#192026]/70 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-10 bg-[#275C53] rounded-2xl p-8 text-center">
          <h3 className="text-xl text-white mb-3" style={{ fontFamily: 'var(--font-patua)' }}>Need Further Assistance?</h3>
          <p className="text-white/70 text-sm mb-6">Our Australian-based support crew can help with varietal recommendations, order queries, and growing guidance.</p>
          <Link href="/contact" className="btn-main !bg-[#D7B65D] !text-[#1a3d36]">Reach Out to Us</Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link href="/shipping" className="px-3 py-1.5 bg-[#F5F0EA] rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">Delivery Details</Link>
          <Link href="/product-category/shop-all-cannabis-seeds" className="px-3 py-1.5 bg-[#F5F0EA] rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">Browse Seeds</Link>
          <Link href="/blog" className="px-3 py-1.5 bg-[#F5F0EA] rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">Cultivation Guides</Link>
          <Link href="/privacy" className="px-3 py-1.5 bg-[#F5F0EA] rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">Data Protection</Link>
        </div>
      </div>
    </div>
  );
}
