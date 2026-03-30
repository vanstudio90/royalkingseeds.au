import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Partner Programme — Earn Revenue Sharing Cannabis Seeds',
  description: 'Become a Royal King Seeds affiliate partner. Generate ongoing commissions by recommending premium cannabis seeds to Australian cultivators and enthusiasts.',
  alternates: { canonical: 'https://royalkingseeds.au/affiliate' },
};

export default function AffiliatePage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl text-[#275C53] mb-4" style={{ fontFamily: 'var(--font-patua)' }}>Partner Programme</h1>
        <p className="text-[#192026]/70 mb-8">Turn your cannabis community into a revenue stream. Our affiliate programme rewards bloggers, cultivators, social media creators, and anyone with an audience passionate about Australian growing culture.</p>

        <div className="space-y-6 mb-10">
          <div className="bg-white rounded-2xl p-6 border border-[#275C53]/5">
            <h2 className="text-lg text-[#275C53] font-semibold mb-3">How It Works</h2>
            <div className="space-y-3 text-sm text-[#192026]/70">
              <p><strong className="text-[#275C53]">Step 1:</strong> Apply by sending an email to support@royalkingseeds.au with &ldquo;Affiliate&rdquo; in the subject line.</p>
              <p><strong className="text-[#275C53]">Step 2:</strong> Once approved, you will receive a unique referral link and access to our creative assets — banners, logos, and product images.</p>
              <p><strong className="text-[#275C53]">Step 3:</strong> Share your link through your blog, social channels, YouTube, or wherever your audience lives. Every sale traced back to your link earns you a commission.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 border border-[#275C53]/5 text-center">
              <div className="text-2xl font-semibold text-[#275C53]">10%</div>
              <p className="text-sm text-[#192026]/70 mt-1">Per-Sale Commission</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#275C53]/5 text-center">
              <div className="text-2xl font-semibold text-[#275C53]">30 Days</div>
              <p className="text-sm text-[#192026]/70 mt-1">Referral Cookie Window</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#275C53]/5 text-center">
              <div className="text-2xl font-semibold text-[#275C53]">Monthly</div>
              <p className="text-sm text-[#192026]/70 mt-1">Commission Payouts</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#275C53]/5">
            <h2 className="text-lg text-[#275C53] font-semibold mb-3">Who Should Apply?</h2>
            <ul className="space-y-2 text-sm text-[#192026]/70">
              <li className="flex items-center gap-2"><span className="text-[#D7B65D]">&#10003;</span> Cannabis bloggers and content writers</li>
              <li className="flex items-center gap-2"><span className="text-[#D7B65D]">&#10003;</span> YouTube and Instagram growers</li>
              <li className="flex items-center gap-2"><span className="text-[#D7B65D]">&#10003;</span> Forum moderators and community leaders</li>
              <li className="flex items-center gap-2"><span className="text-[#D7B65D]">&#10003;</span> Gardening and horticulture influencers</li>
              <li className="flex items-center gap-2"><span className="text-[#D7B65D]">&#10003;</span> Anyone with an engaged Australian audience</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#275C53] rounded-2xl p-8 text-center">
          <h3 className="text-xl text-white mb-3" style={{ fontFamily: 'var(--font-patua)' }}>Ready to Partner With Us?</h3>
          <p className="text-white/70 text-sm mb-6">Drop us a line at support@royalkingseeds.au with &ldquo;Affiliate&rdquo; in the subject and we&apos;ll have you onboarded promptly.</p>
          <a href="mailto:support@royalkingseeds.au?subject=Affiliate Programme" className="btn-main !bg-[#D7B65D] !text-[#1a3d36]">Apply Now</a>
        </div>
      </div>
    </div>
  );
}
