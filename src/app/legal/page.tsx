import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Notice & Product Disclaimer — Australian Cannabis Seed Law',
  description: 'Legal disclaimer covering cannabis seed purchases from Royal King Seeds. Understand how Australian federal, state, and territory laws apply to seed acquisition and genetic preservation.',
  alternates: { canonical: 'https://royalkingseeds.au/legal' },
};

export default function LegalPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-3xl mx-auto prose prose-sm text-[#192026]/80 prose-headings:text-[#275C53] prose-headings:font-normal">
        <h1 style={{ fontFamily: 'var(--font-patua)' }}>Legal Notice &amp; Product Disclaimer</h1>
        <p>All cannabis seeds available through Royal King Seeds are supplied strictly as adult novelty collectibles and for the preservation of botanical genetics. Purchasing from our store constitutes your acknowledgment that you will use these products in full compliance with every applicable law within your jurisdiction.</p>

        <h2>Cannabis Regulation in Australia — A State-by-State Overview</h2>
        <p>Australian cannabis legislation is not uniform — it varies considerably between the Commonwealth, state, and territory levels. Under Commonwealth law, cannabis remains a controlled substance regulated by the Therapeutic Goods Administration (TGA). However, individual states and territories have enacted their own provisions:</p>
        <ul>
          <li><strong>Australian Capital Territory (ACT):</strong> Since January 2020, the ACT has permitted adults aged 18 and over to possess up to 50 grams of dried cannabis and cultivate a maximum of two plants per person (four per household) for personal use under the <em>Drugs of Dependence (Personal Cannabis Use) Amendment Act 2019</em>.</li>
          <li><strong>New South Wales, Victoria, Queensland, South Australia, Western Australia, Tasmania, and Northern Territory:</strong> These jurisdictions maintain varying degrees of prohibition on cannabis cultivation. Seed possession and germination laws differ between each state and territory.</li>
        </ul>
        <p>It is the sole obligation of every buyer to investigate and adhere to the specific rules that govern their location before germinating any seeds. Royal King Seeds bears no responsibility for any breach of local, state, territory, or federal regulations.</p>

        <h2>TGA &amp; Medicinal Cannabis</h2>
        <p>The Therapeutic Goods Administration oversees legal access to medicinal cannabis in Australia through the Special Access Scheme and the Authorised Prescriber pathway. Our products are not intended as therapeutic goods, nor are they supplied under any TGA authorisation. Nothing on this website should be construed as facilitating access to medicinal cannabis outside of approved channels.</p>

        <h2>Disclaimer of Medical Claims</h2>
        <p>Royal King Seeds does not assert any therapeutic or medicinal benefit from our products. Where effect descriptions appear — such as relaxation, mood elevation, or sleep support — these reflect commonly reported anecdotal experiences from cannabis users generally and must not be taken as medical advice. Always consult a qualified healthcare practitioner for guidance on health matters.</p>

        <h2>Purchaser Age Requirement</h2>
        <p>You must be a minimum of 18 years of age to make a purchase from Royal King Seeds. Submitting an order constitutes your declaration that you satisfy this age condition.</p>

        <h2>Limitation of Responsibility</h2>
        <p>Royal King Seeds is not liable for any consequences arising from the use or misuse of purchased products. Seeds are supplied for lawful purposes only, and all risk associated with germination or cultivation rests entirely with the purchaser.</p>

        <div className="mt-8 flex flex-wrap gap-2 not-prose">
          <Link href="/terms" className="px-3 py-1.5 bg-[#F5F0EA] rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="px-3 py-1.5 bg-[#F5F0EA] rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
