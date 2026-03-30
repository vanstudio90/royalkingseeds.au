import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — How We Handle Your Data Under Australian Law',
  description: 'Learn how Royal King Seeds collects, processes, and safeguards your personal information in accordance with the Australian Privacy Act 1988 and Australian Privacy Principles (APPs).',
  alternates: { canonical: 'https://royalkingseeds.au/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-3xl mx-auto prose prose-sm text-[#192026]/80 prose-headings:text-[#275C53] prose-headings:font-normal">
        <h1 style={{ fontFamily: 'var(--font-patua)' }}>Privacy Policy</h1>
        <p><em>Effective from: March 2026</em></p>
        <p>Royal King Seeds (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to handling your personal information responsibly and transparently. This policy describes our data collection, usage, and protection practices and has been prepared in line with the <strong>Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APPs)</strong>.</p>

        <h2>What Personal Information We Gather</h2>
        <p>When you interact with our website or place an order, we may collect the following categories of personal information:</p>
        <ul>
          <li><strong>Identity details:</strong> your name and email address, provided during checkout or when you contact us.</li>
          <li><strong>Delivery details:</strong> your postal address, supplied so we can dispatch your order via Australia Post.</li>
          <li><strong>Transaction details:</strong> payment card type and last four digits (full card numbers are never stored on our servers — they are handled exclusively by PCI-DSS-compliant payment processors).</li>
          <li><strong>Browsing data:</strong> IP address, browser type, pages visited, and referring URL, gathered automatically through cookies and analytics tools.</li>
        </ul>

        <h2>Purpose of Data Collection</h2>
        <p>Your information is used for the following purposes:</p>
        <ul>
          <li>Processing and fulfilling your orders, including generating shipping labels and tracking numbers.</li>
          <li>Communicating dispatch updates, delivery confirmations, and responding to support enquiries.</li>
          <li>Improving our website functionality, product range, and overall customer experience through aggregated analytics.</li>
          <li>Complying with applicable Australian legal obligations.</li>
        </ul>
        <p>We do not sell, rent, or share your personal data with third parties for their marketing purposes.</p>

        <h2>Data Security Measures</h2>
        <p>We protect your information through industry-standard security controls:</p>
        <ul>
          <li>TLS/SSL encryption on all data transmitted between your browser and our servers.</li>
          <li>Payment handling delegated to PCI-DSS-compliant processors — we never store complete card details.</li>
          <li>Access to personal data restricted to authorised personnel on a need-to-know basis.</li>
          <li>Regular security reviews and software updates to our hosting environment.</li>
        </ul>

        <h2>Cookies &amp; Tracking Technologies</h2>
        <p>Our site uses cookies to maintain essential functionality (e.g., your shopping cart) and analytics cookies that help us understand visitor behaviour. You may disable cookies via your browser preferences; however, doing so may impair certain features of the site.</p>

        <h2>Your Rights Under the APPs</h2>
        <p>As an Australian resident, the Australian Privacy Principles afford you specific rights regarding your personal information:</p>
        <ul>
          <li><strong>Access (APP 12):</strong> You may request a copy of the personal data we hold about you.</li>
          <li><strong>Correction (APP 13):</strong> You may ask us to correct inaccurate or outdated information.</li>
          <li><strong>Deletion:</strong> You may request that we erase your personal data where we are not legally required to retain it.</li>
          <li><strong>Complaints:</strong> If you believe we have breached the APPs, you may lodge a complaint with us or escalate it to the <strong>Office of the Australian Information Commissioner (OAIC)</strong>.</li>
        </ul>
        <p>To exercise any of these rights, email <a href="mailto:support@royalkingseeds.au">support@royalkingseeds.au</a>.</p>

        <h2>Data Retention</h2>
        <p>We retain order-related data for as long as reasonably necessary to fulfil our obligations and comply with Australian tax and record-keeping requirements. You may request deletion of your account data at any time, subject to legal retention obligations.</p>

        <h2>Contact Us About Privacy</h2>
        <p>For any enquiries related to this policy or your personal data, reach out to us at <a href="mailto:support@royalkingseeds.au">support@royalkingseeds.au</a>.</p>
        <div className="mt-8 flex flex-wrap gap-2 not-prose">
          <Link href="/terms" className="px-3 py-1.5 bg-[#F5F0EA] rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/contact" className="px-3 py-1.5 bg-[#F5F0EA] rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">Get in Touch</Link>
        </div>
      </div>
    </div>
  );
}
