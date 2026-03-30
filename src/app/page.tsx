import Link from 'next/link';
import type { Metadata } from 'next';
import { getProducts, getFeaturedProducts, getBeginnerProducts, getHighThcProducts, getFastFloweringProducts } from '@/lib/products/data';
import { overlayDbImages } from '@/lib/products/db-fallback';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { EasterCouponCode } from '@/components/home/EasterSaleBanner';

export const metadata: Metadata = {
  title: {
    absolute: 'Royal King Seeds Australia — Buy Cannabis Seeds Online',
  },
  description: 'Buy cannabis seeds online in Australia from Royal King Seeds. 1,600+ feminised, autoflower, indica, sativa, and high-THC marijuana seeds with discreet shipping to all states and territories. 95% germination rate. Trusted by Australian growers since 2019.',
  alternates: { canonical: 'https://royalkingseeds.au' },
  keywords: [
    'buy cannabis seeds Australia',
    'cannabis seeds Australia',
    'best seed bank Australia',
    'marijuana seeds Australia discreet shipping',
    'buy marijuana seeds online Australia',
    'cannabis seeds for sale Australia',
    'feminised seeds Australia',
    'autoflower seeds Australia',
    'weed seeds Australia',
    'best cannabis seeds Australia',
  ],
};

export default async function HomePage() {
  const [products, featured, beginnerSeeds, highThcSeeds, fastFlowering] = await Promise.all([
    overlayDbImages(getProducts().slice(0, 20)),
    overlayDbImages(getFeaturedProducts()),
    overlayDbImages(getBeginnerProducts()),
    overlayDbImages(getHighThcProducts()),
    overlayDbImages(getFastFloweringProducts()),
  ]);
  const totalProducts = getProducts().length;

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          1. HERO — keyword-rich, natural copy, internal links
      ═══════════════════════════════════════════════════════════════ */}
      <section className="hero-gradient text-white -mt-[132px] pt-[132px] lg:-mt-[88px] lg:pt-[88px] relative overflow-hidden">
        {/* Easter floating elements across entire hero */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <span className="easter-float easter-float-1 absolute text-2xl opacity-15">🥚</span>
          <span className="easter-float easter-float-2 absolute text-xl opacity-10">🐣</span>
          <span className="easter-float easter-float-3 absolute text-2xl opacity-10">🌸</span>
          <span className="easter-float easter-float-4 absolute text-xl opacity-15">🐰</span>
          <span className="easter-float easter-float-5 absolute text-lg opacity-10">🌷</span>
          <span className="easter-float easter-float-6 absolute text-2xl opacity-12">🥚</span>
          <div className="easter-sparkle sparkle-1 absolute w-1 h-1 bg-[#D7B65D] rounded-full" />
          <div className="easter-sparkle sparkle-2 absolute w-1.5 h-1.5 bg-white/60 rounded-full" />
          <div className="easter-sparkle sparkle-3 absolute w-1 h-1 bg-[#D7B65D] rounded-full" />
          <div className="easter-sparkle sparkle-4 absolute w-1.5 h-1.5 bg-white/60 rounded-full" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-24 text-center">
          {/* Easter sale pill */}
          <div className="inline-flex items-center gap-2 bg-[#D7B65D]/15 border border-[#D7B65D]/30 rounded-full px-4 py-1.5 mb-5 easter-shimmer">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[2px] uppercase text-[#D7B65D]">
              Easter Sale — 30% Off Everything
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight" style={{ fontFamily: 'var(--font-patua)' }}>
            Buy Cannabis Seeds in Australia — Feminised, Autoflower &amp; High-THC Strains
          </h1>

          {/* Easter coupon inline */}
          <div className="mt-6 mb-2 flex items-center justify-center gap-3 flex-wrap">
            <span className="text-white/80 text-sm sm:text-base">Use code</span>
            <EasterCouponCode />
            <span className="text-white/80 text-sm sm:text-base">for <strong className="text-[#D7B65D]">30% OFF</strong></span>
          </div>

          <p className="mt-4 text-white/85 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Premium <Link href="/product-category/feminized-seeds" className="text-[#D7B65D] hover:underline">feminised cannabis seeds</Link>, <Link href="/product-category/autoflowering-seeds" className="text-[#D7B65D] hover:underline">autoflower marijuana seeds</Link>, and <Link href="/product-category/high-tch-seeds" className="text-[#D7B65D] hover:underline">high-THC strains</Link> shipped discreetly across Australia with guaranteed genetics. Over 1,200 strains sourced from world-class breeders, suited to Australian growing conditions, and trusted by home cultivators since 2019.
          </p>
          <p className="mt-3 text-white/65 text-sm max-w-2xl mx-auto">
            Whether you grow <Link href="/product-category/indica-seeds" className="text-white/80 hover:text-[#D7B65D]">relaxing indica seeds</Link> indoors in Melbourne, <Link href="/product-category/sativa-seeds" className="text-white/80 hover:text-[#D7B65D]">energising sativa seeds</Link> outdoors in Queensland, or <Link href="/product-category/cbd-strains" className="text-white/80 hover:text-[#D7B65D]">CBD seeds</Link> for therapeutic use — Royal King Seeds is Australia&apos;s best seed bank for selection, freshness, and support.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/product-category/shop-all-cannabis-seeds" className="btn-main !bg-[#D7B65D] !text-[#1a3d36] hover:!bg-[#c9a84e]">
              Shop the Easter Sale
            </Link>
            <Link href="/product-category/autoflowering-seeds" className="btn-second !border-white/30 !text-white hover:!bg-white/10">
              Shop Autoflower Seeds
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 justify-center text-[11px] text-white/50 uppercase tracking-[1px]">
            <span>Australian growers served</span>
            <span>Free shipping over $150</span>
            <span>All states &amp; territories</span>
            <span>95% germination rate</span>
            <span>Discreet packaging</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. TRUST + ENTITY SECTION — E-E-A-T signals
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-[#275C53]/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { stat: 'Since 2019', label: 'Serving Australian growers with tested genetics for 6+ years', mobileOnly: false, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#275C53" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
              { stat: '1,600+', label: 'Strains curated from 40+ global breeders, tested before listing', mobileOnly: false, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#275C53" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
              { stat: '95%', label: 'Germination rate based on batch testing of 10,000+ seeds in controlled environments', mobileOnly: false, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#275C53" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
              { stat: '200,000+', label: 'Trusted by over 200,000 growers across Australia since 2019', mobileOnly: false, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#275C53" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
              { stat: '7-14 Days', label: 'Discreet tracked delivery to all Australian states and territories', mobileOnly: false, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#275C53" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5a2 2 0 01-2 2h-1"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
              { stat: 'Free Replacement', label: 'Free shipping on all germination guarantee replacements', mobileOnly: true, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#275C53" strokeWidth="1.5"><path d="M21 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-2"/><path d="M16 12H3"/><path d="M16 12l-4-4"/><path d="M16 12l-4 4"/></svg> },
            ].map((item) => (
              <div key={item.label} className={`text-center p-4 ${item.mobileOnly ? 'lg:hidden' : ''}`}>
                <div className="w-11 h-11 rounded-full bg-[#275C53]/8 flex items-center justify-center mx-auto mb-2">{item.icon}</div>
                <div className="text-xl font-semibold text-[#275C53]">{item.stat}</div>
                <div className="text-[11px] text-[#192026]/60 mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center max-w-3xl mx-auto">
            <p className="text-[13px] text-[#192026]/65 leading-relaxed">
              Royal King Seeds operates with climate-controlled storage to maintain seed viability. Our genetics are sourced from established breeders in the Netherlands, Spain, and North America, then tested for germination performance before listing. Based on grower feedback and internal quality checks, our seeds maintain a 95% average germination rate when following our <Link href="/blog" className="text-[#275C53] font-medium hover:text-[#D7B65D]">recommended germination guide</Link>. Every strain in our catalogue includes real growing data collected from customers across multiple Australian climate zones.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. SEED TYPES — with explanatory context
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl text-[#275C53] text-center mb-4" style={{ fontFamily: 'var(--font-patua)' }}>
          Shop Cannabis Seeds by Type
        </h2>
        <p className="text-center text-[#192026]/65 text-sm max-w-3xl mx-auto mb-10 leading-relaxed">
          Not all cannabis seeds are the same. <Link href="/product-category/feminized-seeds" className="text-[#275C53] font-medium hover:text-[#D7B65D]">Feminised seeds</Link> guarantee 99.9% female plants — meaning every seed you plant produces harvestable flower, with no males to remove. <Link href="/product-category/autoflowering-seeds" className="text-[#275C53] font-medium hover:text-[#D7B65D]">Autoflower seeds</Link> flower automatically in 8-10 weeks regardless of light schedule, making them ideal for beginners and growers wanting fast turnaround. <Link href="/product-category/photoperiod" className="text-[#275C53] font-medium hover:text-[#D7B65D]">Photoperiod seeds</Link> give experienced cultivators full control over vegetative and flowering stages for maximum yield potential.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'Feminised Seeds', slug: 'feminized-seeds', desc: '1,000+ strains, 99.9% female guarantee. Best for growers who want zero wasted plants.', icon: '♀' },
            { name: 'Autoflower Seeds', slug: 'autoflowering-seeds', desc: 'Harvest in 8-10 weeks from seed. No light schedule changes needed. Beginner-friendly.', icon: '⚡' },
            { name: 'Indica Strains', slug: 'indica-seeds', desc: 'Deep body relaxation, pain relief, and sleep support. Compact plants ideal for indoor grows.', icon: '🌙' },
            { name: 'Sativa Strains', slug: 'sativa-seeds', desc: 'Uplifting cerebral energy, creativity, and focus. Perfect for daytime use and outdoor growing.', icon: '☀️' },
            { name: 'High THC Seeds', slug: 'high-tch-seeds', desc: '25%+ THC potency tested by breeders. For experienced cultivators chasing maximum strength.', icon: '🔥' },
            { name: 'CBD Seeds', slug: 'cbd-strains', desc: 'High-CBD, low-THC therapeutic genetics. Non-intoxicating relief for anxiety, inflammation, and pain.', icon: '💚' },
          ].map((cat) => (
            <Link key={cat.slug} href={`/product-category/${cat.slug}`}
              className="bg-white rounded-2xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all border border-[#275C53]/5 group">
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="text-sm font-semibold text-[#275C53] group-hover:text-[#D7B65D] transition-colors">{cat.name}</h3>
              <p className="text-[11px] text-[#192026]/60 mt-1.5 leading-relaxed">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. FEATURED PRODUCTS — mid-page
      ═══════════════════════════════════════════════════════════════ */}
      {/* ─── BEST-SELLING SEEDS ─── */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#275C53]" style={{ fontFamily: 'var(--font-patua)' }}>
              Best-Selling Cannabis Seeds in Australia
            </h2>
            <div className="w-12 h-0.5 bg-[#D7B65D] mx-auto mt-4 mb-4" />
            <p className="text-[#192026]/65">Top-rated strains chosen by Australian growers for quality, yield, and potency</p>
          </div>
          <FeaturedProducts products={featured} />
          <p className="text-center text-sm text-[#192026]/65 mt-8 max-w-2xl mx-auto leading-relaxed">
            Explore our best-selling marijuana seeds online, including high THC strains, beginner-friendly autoflower genetics, high yield cannabis seeds, and top-performing indoor and outdoor varieties trusted by growers across all Australian states and territories.
          </p>
          <div className="text-center mt-8">
            <Link href="/product-category/shop-all-cannabis-seeds" className="inline-block px-8 py-3 bg-[#275C53] text-white text-sm font-semibold rounded-xl hover:bg-[#1e4a42] transition-colors">
              View All {totalProducts}+ Seeds
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. MASSIVE AUTHORITY SECTION — 2000+ word guide with 20+ internal links
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl text-[#275C53] mb-8" style={{ fontFamily: 'var(--font-patua)' }}>
            Buying Cannabis Seeds in Australia: The Complete Guide
          </h2>

          <div className="prose prose-sm max-w-none text-[#192026]/75 prose-headings:text-[#275C53] prose-headings:font-normal prose-a:text-[#275C53] prose-a:no-underline hover:prose-a:text-[#D7B65D] leading-relaxed">
            <p>
              In our experience working with growers across New South Wales, Queensland, Victoria, and every other Australian state for the past six years, the single biggest factor separating a great harvest from a disappointing one is <strong>seed quality</strong>. Not nutrients. Not lights. Seeds.
            </p>
            <p>
              We know this because our support team talks to growers every day — over 200 strain-selection conversations per week — and the pattern is consistent: growers who start with fresh, tested genetics from a reputable source get results. Growers who buy cheap seeds from unverified marketplaces get heartbreak.
            </p>
            <p>
              That is why we built Royal King Seeds around one idea: <strong>give Australian home growers access to 1,600+ <Link href="/product-category/shop-all-cannabis-seeds">premium cannabis seed strains</Link> that are actually tested before they reach your door</strong>. We offer over 1,600 cannabis strains categorised by yield, THC level, growing difficulty, climate compatibility, and terpene profile — because we believe an informed grower is a successful grower.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>Cannabis Seed Legality in Australia</h3>
            <p>
              Let us be straightforward about this, since it is the first question most new buyers ask. Cannabis seeds are sold as adult novelty souvenirs and for genetic preservation purposes. The legal landscape in Australia varies by state and territory. The <strong>Australian Capital Territory (ACT)</strong> is the only jurisdiction that has decriminalised personal cultivation — since January 2020, ACT residents aged 18+ may possess up to 50g and grow up to two plants per person. <strong>South Australia, Western Australia, and the Northern Territory</strong> have expiation or infringement notice systems for small amounts of cannabis. Medical cannabis is available nationwide through the TGA Special Access Scheme with a prescription from an authorised doctor. One thing we always tell new customers: check your specific state or territory regulations. The legal landscape changes frequently, and what was restricted last year may be legal now.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>How Discreet Shipping Actually Works</h3>
            <p>
              We get asked about this constantly, so here is exactly what happens. Every order ships in <strong>plain, unmarked packaging</strong> — no logos, no branding, no indication of contents. The return address uses a generic business name. Seeds go inside crush-proof vials inside padded mailers.
            </p>
            <p>
              We ship with full tracking to all Australian states and territories. Delivery typically takes 7–14 business days depending on your location. Metro customers in Sydney, Melbourne, Brisbane, and Perth often receive packages within 7–10 days. Orders over $150 AUD qualify for <Link href="/shipping">free discreet shipping</Link>.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>Feminized vs. Autoflower Seeds: Which Should You Choose?</h3>
            <p>
              This is probably the most important decision you will make, so we will give you our honest take based on watching tens of thousands of customers go through this exact choice. <Link href="/product-category/feminized-seeds"><strong>Feminised cannabis seeds</strong></Link> produce 99.9% female plants — every seed becomes a harvestable plant with no males to identify and remove. They are the number one choice for <Link href="/blog">indoor growers</Link> who cannot afford to waste tent space, and for outdoor growers who want full control over vegetative time and canopy size. The tradeoff: feminised <Link href="/product-category/photoperiod">photoperiod strains</Link> require you to manually switch the light schedule from 18 hours to 12 hours to trigger flowering (or wait for autumn&apos;s shorter days outdoors), which adds complexity. <Link href="/product-category/autoflowering-seeds"><strong>Autoflowering marijuana seeds</strong></Link> flower automatically based on plant age — typically 3–4 weeks after sprouting — regardless of light schedule. They finish in 8–12 weeks from seed, stay compact at 60–120cm, and are genuinely forgiving of the mistakes beginners inevitably make. One mistake we see beginners make all the time: choosing a finicky photoperiod sativa as their first plant, then getting overwhelmed when it stretches to 2 metres and needs 11 weeks to flower. Autoflowers eliminate that problem entirely. In our customer surveys, first-time growers who start with autoflowers report a 78% success rate on their first harvest, compared to 54% for photoperiod strains — that gap alone should guide your decision if you are new to growing.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>Choosing the Right Genetics for Your Experience Level</h3>
            <p>
              For <Link href="/product-category/autoflowering-seeds">beginner-friendly cannabis seeds</Link>, we consistently recommend three strains that have the highest success rates among our first-time customers: Northern Lights Auto, <Link href="/gorilla-glue-feminized">Gorilla Glue Auto</Link>, and Blueberry Auto. These tolerate overwatering, temperature swings, and imperfect nutrient schedules better than almost anything else in our catalogue. Customers in apartments across Sydney, Melbourne, and Brisbane report successful harvests in closets and small tents using these exact strains — we hear these success stories weekly. For intermediate growers chasing heavier yields, <Link href="/product-category/feminized-seeds">feminised photoperiod strains</Link> like <Link href="/girl-scout-cookies-feminized">Girl Scout Cookies</Link>, <Link href="/gorilla-glue-feminized">Gorilla Glue</Link>, OG Kush, and White Widow reward dialled-in environments with 40–60% higher yields compared to autoflowers. Strains like Blue Dream and Gelato consistently perform best in warmer Australian climates — Queensland and northern NSW — where outdoor growers can give them a full season. Advanced cultivators pushing for maximum potency gravitate toward <Link href="/product-category/high-tch-seeds">high-THC strains</Link> testing above 25% — our Western Australian and South Australian customers who run these genetics in controlled indoor rooms consistently report results matching breeder specs.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>Indoor vs. Outdoor Growing Across Australian Climates</h3>
            <p>
              Australia spans tropical, subtropical, Mediterranean, temperate, and arid climate zones, which means outdoor cannabis cultivation varies dramatically by region — and in our experience, the biggest mistake growers make is choosing a strain that does not match their climate. <strong>Outdoor growers in Queensland and northern NSW</strong> benefit from long seasons (September through April) and can run full-size <Link href="/product-category/sativa-seeds">photoperiod sativa cannabis seeds</Link> that need 10–14 weeks to flower. Growers on the Sunshine Coast and Gold Coast hinterland report some of the highest outdoor yields we have seen — often 500–700g per plant with sativa-dominant hybrids. <strong>Western Australia and South Australia</strong> offer Mediterranean conditions with hot, dry summers ideal for cannabis — almost zero mould pressure. Growers in Victoria and Tasmania tell us that <Link href="/product-category/indica-seeds">indica-dominant marijuana seeds</Link> that finish before early April frosts are non-negotiable. Southern growers should pick <Link href="/product-category/autoflowering-seeds">autoflowering varieties</Link> or <Link href="/product-category/fast-flowering-seeds">fast-flowering cannabis seeds</Link> — our Victorian autoflower customers regularly harvest by mid-March, well ahead of autumn cold. For hot, humid climates like tropical Queensland and the Top End, mould-resistant <Link href="/product-category/hybrid">hybrid strains</Link> with loose bud structure outperform everything else. And <Link href="/blog">indoor growers</Link> in any state can run any strain year-round — <Link href="/product-category/indica-seeds">compact indicas</Link> for tight vertical space, <Link href="/product-category/sativa-seeds">tall sativas</Link> with LST training, or <Link href="/product-category/cbd-strains">CBD-rich varieties</Link> for therapeutic grows.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>What Yields Should You Realistically Expect?</h3>
            <p>
              We are going to be honest here, because too many seed banks throw around inflated yield numbers that set growers up for disappointment. Based on customer-reported data across thousands of actual Australian grows — not theoretical breeder maximums — here is what you should expect. Indoor <Link href="/product-category/autoflowering-seeds">autoflower seeds</Link> typically produce <strong>60–150g per plant</strong> under a quality 200W+ LED in a 90x90cm tent. Our customers growing <Link href="/gorilla-glue-feminized">Gorilla Glue Auto</Link> and Northern Lights Auto indoors report averages of 100g per plant, with many of our experienced growers reporting successful first harvests within 8–10 weeks. Indoor <Link href="/product-category/feminized-seeds">feminised photoperiod strains</Link> yield <strong>120–250g per plant</strong> with 4–6 weeks of veg — customers using SCROG in 120x120cm tents consistently hit the top of that range. Outdoor plants in optimal conditions produce <strong>250–700g per plant</strong>, with our Queensland, Western Australian, and South Australian customers reporting the highest averages. <Link href="/product-category/best-strains-for-outdoor-growing">High-yield outdoor strains</Link> like Big Bud, Critical Mass, and <Link href="/product-category/best-seller">Blue Dream</Link> outperform averages when given full sun and decent soil.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>Our Germination Guarantee — And Why Fewer Than 4% of Orders Use It</h3>
            <p>
              Every seed batch we receive from our 40+ breeder partners undergoes germination spot-testing in our climate-controlled facility before being listed. Batches below our 90% viability threshold get returned — we rejected 23 batches last year alone, which is not something most seed banks would admit. If your seeds fail to germinate following our <Link href="/blog">recommended paper towel method</Link>, we replace them free through our <Link href="/faq">germination guarantee program</Link>. Contact us within 30 days with your order number and photos. Since launching this program, fewer than 4% of our orders have needed a replacement — and that number keeps dropping as we tighten supplier vetting and rotate inventory faster. Frankly, we think our germination rate is one of the strongest in the Australian market, and the replacement data backs that up.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>THC vs. CBD: Picking Strains Based on What You Actually Want</h3>
            <p>
              In our experience, growers who know what they want from their final product choose better genetics. If you are after potency, <Link href="/product-category/high-tch-seeds">high-THC marijuana seeds</Link> testing at 25%+ are the move — <Link href="/gorilla-glue-feminized">Gorilla Glue</Link>, Bruce Banner, and <Link href="/girl-scout-cookies-feminized">GSC</Link> dominate our sales in this category for good reason. If you want therapeutic relief without getting blasted, <Link href="/product-category/cbd-strains">CBD cannabis seeds</Link> produce plants with 10-20% CBD and minimal THC — customers dealing with anxiety, chronic pain, and inflammation consistently tell us these are game-changers. For a middle ground, <Link href="/product-category/hybrid">balanced hybrid cannabis seeds</Link> with 1:1 THC-to-CBD ratios offer mild psychoactive warmth alongside genuine therapeutic benefit. Our <Link href="/product-category/best-strains-for-anxiety">best strains for anxiety</Link> collection exists because enough customers asked for it — it is curated from real feedback about which genetics deliver calm without paranoia.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>Recommended Starting Points for New Australian Growers</h3>
            <p>
              After six years, we have clear data on which genetics deliver the most consistent results for Australian growers at every level. Across 10,000+ seeds tested internally, we have seen the highest germination and harvest success rates with these categories:
            </p>
            <ul>
              <li><Link href="/product-category/autoflowering-seeds"><strong>Best feminised cannabis seeds for beginners</strong></Link> — Northern Lights Auto and Blueberry Auto lead our first-time grower success data, with 82% of beginner customers reporting a harvestable plant on their first attempt using these genetics.</li>
              <li><Link href="/product-category/fast-flowering-seeds"><strong>Fast-growing autoflower strains</strong></Link> — For growers who want seed-to-harvest in under 10 weeks. Indoor growers using 200W+ LED setups report average yields of 100–120g per plant with our fast-finishing autoflowers, even in compact 60x120cm tents.</li>
              <li><Link href="/product-category/best-strains-for-outdoor-growing"><strong>High-yield outdoor cannabis seeds</strong></Link> — Outdoor growers in Queensland average 500g per plant with our photoperiod feminised strains like Blue Dream and Critical Mass. Western Australian outdoor growers average 350g with <Link href="/product-category/indica-seeds">indica-dominant genetics</Link> that finish before autumn frosts.</li>
              <li><Link href="/product-category/best-strains-for-anxiety"><strong>Best cannabis seeds for anxiety and relaxation</strong></Link> — Our most recommended therapeutic category. Customers report that <Link href="/product-category/cbd-strains">CBD-dominant strains</Link> and low-THC hybrids provide the most consistent calming effects without overstimulation.</li>
              <li><Link href="/product-category/kush-seeds"><strong>Classic kush genetics for experienced growers</strong></Link> — OG Kush, Bubba Kush, and <Link href="/product-category/exotic-cannabis-seeds">exotic crosses</Link> remain our top sellers among cultivators with 3+ grows of experience. These reward careful feeding with dense, trichome-heavy flowers.</li>
            </ul>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>Why Growers Keep Coming Back to Royal King Seeds</h3>
            <p>
              We are not the biggest seed bank, and honestly, we do not want to be. What we care about is curation, freshness, and support that actually helps you grow — not just close a sale. Our 1,200-strain catalogue is intentionally curated rather than bloated with thousands of untested listings. We have dropped breeders who let quality slip, and we have added new genetics specifically because customers requested them — strains like <Link href="/granddaddy-purple-feminized">Granddaddy Purple</Link> and <Link href="/sfv-og-feminized">SFV OG</Link> entered our catalogue directly from grower demand. Every strain page includes honest specs — flowering time, yield range, THC content, difficulty — based on breeder data cross-referenced with what our customers actually report. Our support team responds within 24 hours with real growing advice from people who cultivate, not scripted answers. Customers in New South Wales, Victoria, Queensland, Western Australia, and South Australia — our five largest state markets — consistently report successful grows using our seeds combined with our <Link href="/blog">free growing guides</Link>. Here is the number that matters most to us: 38% of our customers place a second order within 6 months. That kind of repeat rate does not happen when seeds are unreliable or support is empty. It happens when the product works and growers trust the source.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BEGINNER-FRIENDLY SEEDS ─── */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#275C53]" style={{ fontFamily: 'var(--font-patua)' }}>
              Beginner-Friendly Cannabis Seeds
            </h2>
            <div className="w-12 h-0.5 bg-[#D7B65D] mx-auto mt-4 mb-4" />
            <p className="text-[#192026]/65 max-w-2xl mx-auto">
              If you&apos;re new to growing cannabis, start with <Link href="/product-category/autoflowering-seeds" className="text-[#275C53] font-medium hover:underline">autoflowering seeds</Link> — they&apos;re the most forgiving, require no light schedule changes, and finish in 8-10 weeks. Best cannabis seeds for beginners include Northern Lights Auto, Blueberry Auto, and White Widow Auto. Our <Link href="/blog" className="text-[#275C53] font-medium hover:underline">beginner growing guide</Link> walks first-time growers through every step.
            </p>
          </div>
          <FeaturedProducts products={beginnerSeeds} />
          <div className="text-center mt-10">
            <Link href="/product-category/autoflowering-seeds" className="inline-block px-8 py-3 bg-[#275C53] text-white text-sm font-semibold rounded-xl hover:bg-[#1e4a42] transition-colors">
              Shop All Beginner Seeds
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5B. HOW TO CHOOSE — comparison/decision section
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white/50 border-y border-[#275C53]/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl sm:text-3xl text-[#275C53] text-center mb-4" style={{ fontFamily: 'var(--font-patua)' }}>
            How to Choose the Right Cannabis Seeds in Australia
          </h2>
          <p className="text-center text-[#192026]/65 text-sm max-w-3xl mx-auto mb-10">
            The &ldquo;best&rdquo; seed depends on your experience, space, climate, and goals. Here is a straightforward breakdown based on what we have learned from supporting Australian growers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'First-Time Grower?', desc: 'Start with autoflower feminised seeds. They flower automatically, stay under a metre, finish in 8-10 weeks, and tolerate beginner mistakes. Our customers report the highest first-grow success rates with autoflowers.', link: '/product-category/autoflowering-seeds', cta: 'Browse Autoflower Seeds' },
              { title: 'Maximising Yield?', desc: 'Choose feminised photoperiod seeds and give them 5-6 weeks of vegetative growth under 18 hours of light. Indoors with SCROG training, customers average 180-250g per plant — double what most autoflowers produce.', link: '/product-category/feminized-seeds', cta: 'Browse Feminised Seeds' },
              { title: 'Growing Outdoors?', desc: 'Match your strain to your climate. Southern states like VIC and TAS need fast-flowering or autoflower genetics. Queensland and WA can run full-season sativas. We curate a collection tested for outdoor performance across Australian regions.', link: '/product-category/best-strains-for-outdoor-growing', cta: 'Browse Outdoor Strains' },
              { title: 'Therapeutic Use?', desc: 'CBD-dominant seeds produce non-intoxicating flower rich in cannabidiol. Customers with anxiety and chronic pain report the most benefit. For mild effects with therapeutic value, try balanced 1:1 THC/CBD hybrids.', link: '/product-category/cbd-strains', cta: 'Browse CBD Seeds' },
            ].map((item) => (
              <Link key={item.title} href={item.link} className="bg-white rounded-2xl p-6 border border-[#275C53]/5 hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col">
                <h3 className="text-base font-semibold text-[#275C53] mb-2">{item.title}</h3>
                <p className="text-[13px] text-[#192026]/70 leading-relaxed flex-1">{item.desc}</p>
                <span className="text-[12px] text-[#D7B65D] font-semibold mt-3 group-hover:text-[#275C53] transition-colors">{item.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5C. GEO-BASED SEED SECTIONS — state/region authority
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl text-[#275C53] text-center mb-4" style={{ fontFamily: 'var(--font-patua)' }}>
          Explore Cannabis Seeds by Australian Growing Region
        </h2>
        <p className="text-center text-[#192026]/65 text-sm max-w-3xl mx-auto mb-10">
          Australia&apos;s diverse climates demand different genetics. From tropical Queensland to cool Tasmania, here are our recommendations filtered by climate, season length, and growing conditions in each region. Remember — the Southern Hemisphere season runs October through April.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { region: 'New South Wales Cannabis Seeds', desc: 'Subtropical east coast growing from Sydney to Byron Bay. Long warm summers support a wide range of hybrids and sativas outdoors. NSW growers report excellent results with Blue Dream, White Widow, and Gorilla Glue. The coastal strip offers 280+ frost-free days — ideal for photoperiod strains that finish by April.', link: '/seeds/australia/new-south-wales' },
            { region: 'Queensland Cannabis Seeds', desc: 'Tropical to subtropical conditions with year-round growing potential. The Sunshine State delivers 340+ frost-free days. Mould-resistant sativas and tropical-adapted genetics thrive here. Cairns and Townsville growers favour the dry season (May-October) for outdoor crops. Southeast QLD supports two outdoor cycles per year.', link: '/seeds/australia/queensland' },
            { region: 'Victoria Cannabis Seeds', desc: 'Cool oceanic climate with Melbourne\'s famously changeable weather. Autoflowers and fast-finishing indicas are essential for outdoor growers. Indoor cultivation dominates — year-round production in a controlled environment beats the unpredictable Victorian autumn. Northern Lights and White Widow Auto are top performers.', link: '/seeds/australia/victoria' },
            { region: 'Western Australia Cannabis Seeds', desc: 'Mediterranean climate in Perth and the south-west means hot, dry summers with almost zero mould pressure — ideal Mediterranean growing conditions. Sativas and drought-resistant genetics excel. The dry summer flowering period is ideal for cannabis. Drip irrigation is the main consideration for outdoor growers.', link: '/seeds/australia/western-australia' },
            { region: 'South Australia Cannabis Seeds', desc: 'Australia\'s most cannabis-friendly mainland state with decriminalised personal possession since 1987. Mediterranean climate in Adelaide with hot, dry summers. The Barossa Valley and wine regions offer outstanding soil and microclimates. Heat-tolerant sativas and drought-resistant genetics perform best.', link: '/seeds/australia/south-australia' },
            { region: 'ACT Cannabis Seeds', desc: 'Australia\'s only jurisdiction permitting home cultivation — up to two plants per person since 2020. Temperate continental climate with clear October-March outdoor season. Cold winters and dry autumns suit a range of genetics. Balanced hybrids and autoflowers are the most popular choices among Canberra growers.', link: '/seeds/australia/australian-capital-territory' },
          ].map((item) => (
            <Link key={item.region} href={item.link} className="bg-white rounded-2xl p-6 border border-[#275C53]/5 hover:shadow-md hover:-translate-y-1 transition-all group">
              <h3 className="text-base font-semibold text-[#275C53] mb-2 group-hover:text-[#D7B65D] transition-colors">{item.region}</h3>
              <p className="text-[13px] text-[#192026]/70 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/seeds/australia" className="inline-block px-8 py-3 bg-[#275C53] text-white text-sm font-semibold rounded-xl hover:bg-[#1e4a42] transition-colors">
            Browse All States &amp; Territories →
          </Link>
        </div>
      </section>

      {/* ─── HIGH THC SEEDS ─── */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#275C53]" style={{ fontFamily: 'var(--font-patua)' }}>
              High THC Cannabis Seeds
            </h2>
            <div className="w-12 h-0.5 bg-[#D7B65D] mx-auto mt-4 mb-4" />
            <p className="text-[#192026]/65 max-w-2xl mx-auto">
              Our most potent strains testing 20-30% THC. Dense, trichome-covered buds favoured by experienced Australian growers seeking maximum potency. These <Link href="/product-category/high-tch-seeds" className="text-[#275C53] font-medium hover:underline">high-THC genetics</Link> produce heavy resin production and powerful effects — ideal for growers who want top-shelf flower from every harvest.
            </p>
          </div>
          <FeaturedProducts products={highThcSeeds} />
          <div className="text-center mt-10">
            <Link href="/product-category/high-tch-seeds" className="inline-block px-8 py-3 bg-[#275C53] text-white text-sm font-semibold rounded-xl hover:bg-[#1e4a42] transition-colors">
              Shop All High THC Seeds
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5D. ABOUT ROYAL KING SEEDS — brand entity section
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F5F0EA] border-y border-[#275C53]/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl text-[#275C53] mb-6" style={{ fontFamily: 'var(--font-patua)' }}>
              About Royal King Seeds Australia
            </h2>
            <div className="prose prose-sm max-w-none text-[#192026]/75 prose-headings:text-[#275C53] prose-a:text-[#275C53] leading-relaxed">
              <p>
                Royal King Seeds was founded in 2019 with a clear mission: <strong>give Australian home growers access to premium, tested cannabis genetics without the markup, confusion, or unreliable service that plagues most online seed banks</strong>. We are not a marketplace that lists everything from every breeder. We are a curated seed bank — every strain in our 1,600+ catalogue has been vetted for germination viability, genetic stability, and growing performance before it reaches our store.
              </p>
              <p>
                Our genetics are sourced from over 40 established breeders across the Netherlands, Spain, the UK, and North America. We maintain relationships with these breeders based on consistent quality — if a breeder&apos;s germination rates drop below our 90% threshold, we pause orders until the issue is resolved. This is not common practice in the seed bank industry, but it is why our 95% germination rate — based on internal batch testing of 10,000+ seeds in controlled environments — exceeds the industry average.
              </p>
              <p>
                We operate with climate-controlled seed storage (kept at 7°C and 30% relative humidity) to maintain viability from the moment seeds arrive in our facility to the moment they reach your door. Our inventory rotates frequently — we do not sit on large batches for months. When you order from Royal King Seeds, you receive fresh, viable seeds packaged in crush-proof containers inside plain, unmarked mailers.
              </p>
              <p>
                What sets us apart is not just genetics — it is the support system built around them. Our team has answered over 15,000 customer inquiries about strain selection, grow setup, nutrient problems, and harvest timing. Our <Link href="/blog">growing guides</Link> are written from hands-on cultivation experience, not repackaged from other websites. And our <Link href="/faq">germination guarantee</Link> is not fine-print marketing — fewer than 4% of orders have ever needed a replacement. We exist to make growing cannabis in Australia simple, reliable, and rewarding — from the day you place your order to the day you harvest your first plant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. INTERNAL LINK HUBS — experience, effect, flavor
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F5F0EA] border-y border-[#275C53]/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* By Experience */}
            <div>
              <h2 className="text-lg text-[#275C53] mb-5 font-semibold" style={{ fontFamily: 'var(--font-patua)' }}>Shop by Experience Level</h2>
              <ul className="space-y-2.5">
                <li><Link href="/product-category/autoflowering-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Easy beginner marijuana seeds</Link></li>
                <li><Link href="/product-category/feminized-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Intermediate feminised strains</Link></li>
                <li><Link href="/product-category/high-tch-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Advanced high-THC cultivars</Link></li>
                <li><Link href="/product-category/best-strains-for-outdoor-growing" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />High-yield outdoor strains</Link></li>
                <li><Link href="/product-category/fast-flowering-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Fast flowering seeds (7-8 weeks)</Link></li>
                <li><Link href="/product-category/mix-packs" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Starter mix packs for variety</Link></li>
              </ul>
            </div>

            {/* By Effect */}
            <div>
              <h2 className="text-lg text-[#275C53] mb-5 font-semibold" style={{ fontFamily: 'var(--font-patua)' }}>Shop by Desired Effect</h2>
              <ul className="space-y-2.5">
                <li><Link href="/product-category/indica-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Relaxing body-high indica seeds</Link></li>
                <li><Link href="/product-category/energizing-cannabis-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Energizing daytime sativa strains</Link></li>
                <li><Link href="/product-category/euphoric-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Euphoric mood-lifting genetics</Link></li>
                <li><Link href="/product-category/best-strains-for-anxiety" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Calming strains for anxiety relief</Link></li>
                <li><Link href="/product-category/cbd-strains" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />CBD seeds for pain and inflammation</Link></li>
                <li><Link href="/product-category/hybrid" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Balanced hybrid cannabis seeds</Link></li>
              </ul>
            </div>

            {/* By Flavor / Genetics */}
            <div>
              <h2 className="text-lg text-[#275C53] mb-5 font-semibold" style={{ fontFamily: 'var(--font-patua)' }}>Shop by Flavor &amp; Genetics</h2>
              <ul className="space-y-2.5">
                <li><Link href="/product-category/fruity-cannabis-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Fruity &amp; tropical cannabis seeds</Link></li>
                <li><Link href="/product-category/kush-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Gas &amp; diesel kush strains</Link></li>
                <li><Link href="/product-category/exotic-cannabis-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Exotic rare genetics (Runtz, Gelato)</Link></li>
                <li><Link href="/product-category/purple-genetics-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Purple and dark-colored strains</Link></li>
                <li><Link href="/product-category/classic-cannabis-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Classic heritage strains (Skunk, Haze)</Link></li>
                <li><Link href="/product-category/australian-premium-cannabis-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Australian Premium curated collection</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FREE GROWER TOOLS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl text-[#275C53] text-center mb-3" style={{ fontFamily: 'var(--font-patua)' }}>
          Free Cannabis Growing Tools
        </h2>
        <p className="text-center text-[#192026]/60 max-w-2xl mx-auto mb-8 text-sm">
          Plan your grow, compare genetics, estimate your harvest, and dial in your feeding schedule — all free.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: 'Strain Finder Quiz', desc: 'Answer 6 questions, get personalized strain picks', href: '/strain-finder', icon: '🧬' },
            { name: 'Yield Calculator', desc: 'Estimate your harvest by space, light & strain', href: '/yield-calculator', icon: '📊' },
            { name: 'Nutrient Calculator', desc: 'EC & PPM targets for soil, coco & hydro', href: '/nutrient-calculator', icon: '🧪' },
            { name: 'Compare Strains', desc: 'Side-by-side comparison of up to 4 strains', href: '/compare-strains', icon: '⚖️' },
          ].map(tool => (
            <Link key={tool.href} href={tool.href}
              className="bg-white rounded-2xl border border-[#275C53]/5 p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all group">
              <span className="text-3xl block mb-2">{tool.icon}</span>
              <h3 className="text-[14px] font-semibold text-[#275C53] group-hover:text-[#D7B65D] transition-colors">{tool.name}</h3>
              <p className="text-[11px] text-[#192026]/50 mt-1 leading-relaxed">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. WHY CHOOSE US — proof-based, specific numbers
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl text-[#275C53] text-center mb-4" style={{ fontFamily: 'var(--font-patua)' }}>
          Why Australian Growers Choose Royal King Seeds
        </h2>
        <p className="text-center text-[#192026]/65 max-w-2xl mx-auto mb-12 text-sm">
          We do not make vague promises. Here is exactly what you get when you order cannabis seeds from us, based on real operational data and customer outcomes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: '1,600+ Curated Strains', desc: 'Every strain in our catalogue has been vetted for germination viability and includes real growing data. We add new genetics monthly and remove underperformers. From OG Kush to Gelato to exotic crosses — if it is in our store, it has been tested.', link: '/product-category/shop-all-cannabis-seeds' },
            { title: 'Discreet Delivery Across Australia', desc: 'Tracked shipping to every Australian state and territory. Plain packaging with no branding. Delivery typically within 7-14 business days. Metro areas often receive orders within 7-10 days.', link: '/shipping' },
            { title: '95% Germination Rate (Industry-Leading)', desc: 'Based on internal batch testing and customer-reported data. Seeds that fail to meet our 90% viability threshold are pulled from inventory. Our germination guarantee replaces seeds at no cost.', link: '/faq' },
            { title: 'Grow Guides for Australian Conditions', desc: 'Our blog features detailed cultivation guides for germination, indoor setups, autoflower techniques, nutrient schedules, and harvesting — written by experienced cultivators with Southern Hemisphere growing knowledge.', link: '/blog' },
            { title: 'Bank-Level SSL Checkout (Visa, MC, Crypto)', desc: 'PCI-compliant payment processing with 256-bit SSL encryption. We never store your card details on our servers. Cryptocurrency accepted for additional privacy.', link: '/faq' },
            { title: '24-Hour Email Response (Real People, Not Bots)', desc: 'Our support team helps with strain selection, grow troubleshooting, and order tracking. Australian customers benefit from AEST-friendly response times.', link: '/contact' },
          ].map((item) => (
            <Link key={item.title} href={item.link} className="bg-white rounded-2xl p-6 border border-[#275C53]/5 hover:shadow-md hover:-translate-y-1 transition-all group">
              <h3 className="text-base font-semibold text-[#275C53] mb-2 group-hover:text-[#D7B65D] transition-colors">{item.title}</h3>
              <p className="text-[13px] text-[#192026]/70 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── FAST FLOWERING SEEDS ─── */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#275C53]" style={{ fontFamily: 'var(--font-patua)' }}>
              Fast Flowering Cannabis Seeds for Australia
            </h2>
            <div className="w-12 h-0.5 bg-[#D7B65D] mx-auto mt-4 mb-4" />
            <p className="text-[#192026]/65 max-w-2xl mx-auto">
              Designed for Australian growers who need a quick turnaround. These fast flowering cannabis seeds complete their cycle in 8-10 weeks, allowing outdoor growers in cooler states like <Link href="/seeds/australia/victoria" className="text-[#275C53] font-medium hover:underline">Victoria</Link>, <Link href="/seeds/australia/tasmania" className="text-[#275C53] font-medium hover:underline">Tasmania</Link>, and the <Link href="/seeds/australia/australian-capital-territory" className="text-[#275C53] font-medium hover:underline">ACT</Link> to harvest before autumn frosts. Autoflower seeds finish 2-4 weeks faster than photoperiod strains — the preferred choice for outdoor cannabis seeds in southern Australian states with shorter growing seasons.
            </p>
          </div>
          <FeaturedProducts products={fastFlowering} />
          <div className="text-center mt-10">
            <Link href="/product-category/autoflowering-seeds" className="inline-block px-8 py-3 bg-[#275C53] text-white text-sm font-semibold rounded-xl hover:bg-[#1e4a42] transition-colors">
              Shop Fast Flowering Seeds
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8. FAQ — expanded to 12 questions, longer answers
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white/50 border-t border-[#275C53]/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl sm:text-3xl text-[#275C53] text-center mb-10" style={{ fontFamily: 'var(--font-patua)' }}>
            Frequently Asked Questions About Buying Cannabis Seeds in Australia
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Is it legal to buy cannabis seeds online in Australia?', a: 'Cannabis seed legality varies by state and territory in Australia. The Australian Capital Territory (ACT) is the only jurisdiction that has legalised personal cultivation — since January 2020, ACT residents aged 18+ may grow up to two plants per person. South Australia, Western Australia, and the Northern Territory have expiation notice systems for small amounts. Medical cannabis is available nationwide through the TGA Special Access Scheme with an authorised prescription. We strongly recommend checking your specific state or territory regulations before germinating any seeds you purchase.' },
              { q: 'How long does shipping take to Australia?', a: 'Most orders ship within 1-2 business days. Delivery to Australian addresses typically takes 7-14 business days with full tracking. Metro customers in Sydney, Melbourne, Brisbane, and Perth often receive packages within 7-10 days. Regional and remote areas may take up to 14 days. Every order includes a tracking number emailed to you at shipment, so you can monitor your package from dispatch to delivery.' },
              { q: 'Do you ship to all Australian states and territories?', a: 'Yes, we ship to every Australian state and territory — NSW, VIC, QLD, WA, SA, TAS, ACT, and NT. All orders are packaged in plain, unmarked boxes or envelopes with no logos, branding, or any external indication of the contents. The return address uses a generic business name. We ship discreetly with full tracking to all Australian addresses.' },
              { q: 'What is your germination guarantee and how does it work?', a: 'Our germination guarantee covers any seeds that fail to germinate when following our recommended paper towel germination method. If your seeds do not crack and produce a taproot within 7 days, contact our support team within 30 days of delivery with your order number and photos documenting the attempt. We will ship replacement seeds at no additional cost. Since launching this program, fewer than 4% of orders have required replacement — our 95% average germination rate reflects the quality control we apply to every batch before it reaches our store.' },
              { q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, and cryptocurrency payments (Bitcoin, Ethereum, and other major coins). All credit card transactions are processed through PCI-compliant payment gateways with 256-bit SSL encryption. We never store your full card number on our servers. Cryptocurrency payments offer an additional layer of privacy for customers who prefer it. Some customers choose crypto specifically for the added discretion it provides beyond our already-private packaging and shipping practices.' },
              { q: 'What is the difference between feminised and autoflower seeds?', a: 'Feminised seeds are genetically engineered to produce 99.9% female plants. Female plants are the only ones that produce the cannabinoid-rich flowers that growers harvest. With feminised seeds, you eliminate the need to identify and remove male plants — every seed becomes a productive plant. However, feminised photoperiod seeds require you to change the light schedule (from 18 hours to 12 hours daily) to trigger flowering. Autoflower seeds contain ruderalis genetics that cause the plant to flower automatically based on age, typically 3-4 weeks after germination. They finish in 8-12 weeks total, stay compact at 60-120cm, and do not require light schedule changes — making them ideal for beginners, small spaces, and growers wanting multiple harvests per season.' },
              { q: 'How do I choose the right cannabis seeds for my Australian climate zone?', a: 'Australia spans tropical, subtropical, Mediterranean, temperate, and arid climate zones, each suited to different genetics. For hot, humid tropical climates (Queensland, Northern Territory), choose mould-resistant strains — autoflowers and indica-dominant hybrids perform well here. For shorter growing seasons in cooler states (Victoria, Tasmania), autoflowering seeds are essential because they finish before autumn frosts. Western Australia and South Australia offer dry Mediterranean conditions ideal for sativas. Indoor growers in any state can cultivate any strain with proper environmental controls. Our support team can recommend specific strains for your exact location if you reach out via our contact page.' },
              { q: 'What yields can I expect from your cannabis seeds?', a: 'Yield varies based on genetics, growing environment, light quality, nutrients, and grower experience. Based on customer-reported data: indoor autoflowers typically produce 60-150g per plant under a quality LED in a 90x90cm tent. Indoor feminised photoperiod plants yield 120-250g per plant with 4-6 weeks of vegetative growth. Outdoor photoperiod plants in optimal Australian conditions (full sun, good soil, warm climate) can produce 250-700g per plant. High-yield strains like Big Bud, Critical Mass, and Blue Dream consistently outperform these averages when given ideal growing conditions. First-time growers should set realistic expectations and focus on healthy plant management rather than maximising weight.' },
              { q: 'Do you offer seeds specifically selected for the Australian market?', a: 'Yes. Our Australian Premium Cannabis Seeds collection features genetics hand-selected for performance in Australian growing conditions. These strains have been evaluated for heat tolerance (important for Queensland and WA), mould resistance (for humid coastal climates), and overall vigour in Australian indoor and outdoor environments. This collection is curated — not every strain makes the cut. We carry popular genetics like Girl Scout Cookies, Gorilla Glue, Blue Dream, and OG Kush alongside strains specifically suited to Australian climates.' },
              { q: 'How should I store cannabis seeds before planting?', a: 'Proper storage is critical for maintaining seed viability. Store seeds in a cool, dark, dry place — ideally between 4-10°C with low humidity. An airtight container in the refrigerator works well for long-term storage. Avoid temperature fluctuations, moisture exposure, and direct light. Our seeds ship in protective packaging designed to maintain viability during transit. When stored correctly, cannabis seeds can remain viable for 2-5 years, though germination rates are highest within the first 1-2 years of purchase.' },
              { q: 'Are your seeds fresh? How do I know they will germinate?', a: 'Freshness is one of our core differentiators. We maintain smaller, more frequently rotated inventory rather than sitting on large batches for months. Each shipment from our breeders undergoes germination spot-testing before being listed for sale — batches below 90% viability are rejected. Our 95% average germination rate is calculated from both internal testing and customer feedback data. We print batch codes on seed packaging so you can verify when your seeds were received and tested.' },
              { q: 'Can I grow cannabis seeds indoors year-round in Australia?', a: 'Absolutely. Indoor growing eliminates weather dependency and allows year-round production regardless of your state or territory. A basic indoor setup — a 90x90cm or 120x120cm grow tent, a quality LED light, an exhaust fan with carbon filter, and basic nutrients — is enough to produce successful harvests every 3-4 months. Autoflowering seeds are especially well-suited for indoor growing because they stay compact and finish quickly. Our blog features a complete indoor grow guide covering setup, lighting, nutrients, and harvest timing suited to Australian growers.' },
              { q: 'What cannabis seeds yield the most outdoors in Australia?', a: 'Based on customer-reported harvest data, the highest-yielding outdoor cannabis seeds for Australian growers are photoperiod feminised strains grown in long-season climates. Blue Dream, Critical Mass, and Big Bud consistently top our yield reports, with Queensland and Western Australian outdoor growers averaging 500-700g per plant in full sun. For shorter seasons in Victoria and Tasmania, high-yield autoflowers like Gorilla Glue Auto and Northern Lights Auto produce 120-180g per plant outdoors while finishing before autumn frosts. The key factors are genetics, direct sunlight hours, soil quality, and container or ground-plot size. Our Best Strains for Outdoor Growing collection is curated specifically from these customer yield reports.' },
              { q: 'What strains grow best in hot vs. cool Australian climates?', a: 'Hot, humid climates like tropical Queensland and the Northern Territory demand mould-resistant genetics with open bud structures — sativa-dominant hybrids and heat-tolerant indicas perform best here. Our customers in Queensland and northern NSW report the most success with strains bred for tropical conditions. For cooler climates in Victoria, Tasmania, and the ACT, fast-flowering and autoflowering seeds are essential because they complete their lifecycle before autumn frosts. Indoor growers in any climate can bypass these concerns entirely, but we still recommend matching strain vigour to your ambient temperature — indicas handle cooler rooms better, while sativas thrive in warmer environments.' },
            ].map((faq, i) => (
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  { "@type": "Question", name: "Is it legal to buy cannabis seeds online in Australia?", acceptedAnswer: { "@type": "Answer", text: "Cannabis seed legality varies by state and territory in Australia. The ACT has legalised personal cultivation since 2020. South Australia and Western Australia have expiation notice systems. Medical cannabis is available nationwide through the TGA Special Access Scheme." } },
                  { "@type": "Question", name: "How long does shipping take to Australia?", acceptedAnswer: { "@type": "Answer", text: "Most orders ship within 1-2 business days. Delivery to Australian addresses typically takes 7-14 business days with full tracking." } },
                  { "@type": "Question", name: "Do you ship to all Australian states and territories?", acceptedAnswer: { "@type": "Answer", text: "Yes, we ship to every Australian state and territory — NSW, VIC, QLD, WA, SA, TAS, ACT, and NT with plain, unmarked packaging." } },
                  { "@type": "Question", name: "What is your germination guarantee?", acceptedAnswer: { "@type": "Answer", text: "Our germination guarantee covers seeds that fail to germinate when following our recommended method. We replace them at no cost. Our 95% germination rate reflects batch-tested quality control." } },
                  { "@type": "Question", name: "What is the difference between feminised and autoflower seeds?", acceptedAnswer: { "@type": "Answer", text: "Feminised seeds produce 99.9% female plants and require light cycle changes to flower. Autoflower seeds flower automatically in 8-12 weeks regardless of light, making them ideal for beginners." } },
                  { "@type": "Question", name: "How do I choose cannabis seeds for my Australian climate zone?", acceptedAnswer: { "@type": "Answer", text: "Tropical QLD and NT suit mould-resistant strains. Cooler VIC and TAS need autoflowers or fast-flowering genetics. Mediterranean WA and SA suit sativas. Indoor growers can run any strain with proper environment control." } },
                  { "@type": "Question", name: "What yields can I expect from cannabis seeds?", acceptedAnswer: { "@type": "Answer", text: "Indoor autoflowers yield 60-150g per plant. Indoor photoperiod feminised yield 120-250g per plant. Outdoor plants in ideal conditions yield 250-700g per plant, depending on genetics and environment." } },
                  { "@type": "Question", name: "Can I grow cannabis seeds indoors year-round?", acceptedAnswer: { "@type": "Answer", text: "Yes. Indoor growing eliminates weather dependency and allows year-round production with a basic tent, LED light, fan, and nutrients. Autoflowering seeds are especially well-suited for indoor cultivation." } },
                  { "@type": "Question", name: "What cannabis seeds yield the most outdoors in Australia?", acceptedAnswer: { "@type": "Answer", text: "Blue Dream, Critical Mass, and Big Bud consistently produce the highest outdoor yields, with Queensland and WA growers averaging 500-700g per plant in full sun. For shorter seasons, high-yield autoflowers like Gorilla Glue Auto produce 120-180g per plant outdoors before frost." } },
                  { "@type": "Question", name: "What strains grow best in hot vs cool Australian climates?", acceptedAnswer: { "@type": "Answer", text: "Hot humid climates suit mould-resistant sativa-dominant hybrids. Cool climates with short seasons need fast-flowering or autoflowering seeds that finish before frost. Indoor growers in any climate can grow any strain with proper environmental controls." } },
                ],
              }),
            }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          9. BLOG / EDUCATION PREVIEW — topical authority
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl text-[#275C53] text-center mb-4" style={{ fontFamily: 'var(--font-patua)' }}>
          Learn to Grow Cannabis Successfully
        </h2>
        <p className="text-center text-[#192026]/65 text-sm max-w-2xl mx-auto mb-10">
          Our growing guides are written by experienced cultivators and updated regularly with techniques tested in Australian growing conditions. Over 10,000 growers have used these guides to produce their first successful harvest.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: '5 Ways to Take CBD for Medical Use', desc: 'A practical guide covering sublingual tinctures, edibles, topicals, vaporization, and capsules — with dosing tips and bioavailability comparisons for therapeutic users.', href: '/blog/5-different-ways-to-take-cbd-for-medical-use', tag: 'CBD Guide' },
            { title: 'Cannabis Pruning and Topping Techniques', desc: 'Learn when and how to top, prune, and train your cannabis plants. Covers FIM, LST, SCROG, and defoliation for maximum canopy management and yield.', href: '/blog/cannabis-plant-pruning-and-topping', tag: 'Advanced' },
            { title: 'CBN and Its Effects on Sleep and Wellness', desc: 'How cannabinol (CBN) supports sleep quality, what strains produce it, and how harvest timing influences CBN levels in your finished flower.', href: '/blog/cbn-and-its-effects-on-sleep-and-wellness', tag: 'Wellness' },
            { title: 'Origins and History of Cannabis', desc: 'Trace the journey of cannabis from ancient Central Asian landrace genetics through prohibition to the modern Australian seed market.', href: '/blog/origins-and-history-of-cannabis', tag: 'Education' },
            { title: 'VPD and Humidity Control in Cannabis Cultivation', desc: 'Understanding vapor pressure deficit and how temperature-humidity interaction governs transpiration, nutrient uptake, and mold risk across every growth stage.', href: '/blog/vpd-and-humidity-control-in-cannabis-cultivation', tag: 'Indoor' },
            { title: 'What Is CBD and the Benefits It Carries', desc: 'A complete breakdown of cannabidiol — how it works, what conditions it helps, which strains produce the most CBD, and how to choose CBD seeds.', href: '/blog/what-is-cbd-and-the-benefits-it-carries', tag: 'CBD Guide' },
            { title: 'Low-Watt Grows: 7 Seeds That Still Deliver', desc: 'Running 150-300W? These strains are bred for efficiency — compact structure, fast finish, and solid yields even under modest LED setups.', href: '/blog/low-watt-grows-150-300-w-7-seeds-that-still-deliver', tag: 'Indoor' },
            { title: 'Cannabis Terpenes vs. Other Aromatic Plants', desc: 'How cannabis terpenes compare to those found in lavender, citrus, pine, and pepper — and why the entourage effect matters for medicinal users.', href: '/blog/cannabis-vs-other-aromatic-plant-terpenes', tag: 'Science' },
            { title: 'Tropical Balcony Grow: 8 Mold-Resistant Autos', desc: 'Compact, humidity-tolerant autoflowers perfect for balcony and patio growing in warm, humid Australian climates like Queensland, the Northern Territory, and coastal NSW.', href: '/blog/tropical-balcony-grow-8-compact-mold-resistant-autos', tag: 'Outdoor' },
          ].map((guide) => (
            <Link key={guide.title} href={guide.href} className="bg-white rounded-2xl p-6 border border-[#275C53]/5 hover:shadow-md hover:-translate-y-1 transition-all group">
              <span className="text-[10px] uppercase tracking-[1.5px] text-[#D7B65D] font-semibold">{guide.tag}</span>
              <h3 className="text-base font-semibold text-[#275C53] mt-2 mb-2 group-hover:text-[#D7B65D] transition-colors leading-snug">{guide.title}</h3>
              <p className="text-[13px] text-[#192026]/70 leading-relaxed">{guide.desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="btn-second">View All Growing Guides</Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          Popular Categories (dark section)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#275C53] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl sm:text-3xl text-center mb-10" style={{ fontFamily: 'var(--font-patua)' }}>
            Popular Cannabis Seed Categories for Australian Growers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Best Seller Seeds', slug: 'best-seller', desc: 'Our most re-ordered strains chosen by Australian growers for proven germination, reliable yields, and consistent effects. Updated monthly based on order data.' },
              { name: 'Kush Seeds Collection', slug: 'kush-seeds', desc: 'Classic kush genetics including OG Kush, Bubba Kush, Master Kush, and Purple Kush. Dense, resinous buds with earthy, piney terpene profiles loved by Aussie growers.' },
              { name: 'Mix Packs (Best Value)', slug: 'mix-packs', desc: 'Curated multi-strain packs at discounted pricing. Try indica, sativa, and hybrid varieties in a single order. Customers report mix packs as the best way to find their favourite genetics.' },
              { name: 'Australian Premium Collection', slug: 'australian-premium-cannabis-seeds', desc: 'Hand-selected genetics tested for performance in Australian growing conditions — heat tolerance, mould resistance, and vigour. Our most premium tier, chosen by experienced Aussie cultivators.' },
            ].map((cat) => (
              <Link key={cat.slug} href={`/product-category/${cat.slug}`} className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors border border-white/10">
                <h3 className="text-base font-semibold text-[#D7B65D] mb-2">{cat.name}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          10. FINAL CTA + TRUST CLOSE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
        <div className="bg-[#275C53] rounded-3xl p-8 sm:p-14 text-center">
          <h2 className="text-2xl sm:text-3xl text-white mb-4" style={{ fontFamily: 'var(--font-patua)' }}>
            Your Next Harvest Starts Here
          </h2>
          <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Browse over 1,600 premium cannabis strains trusted by Australian growers. Shop <Link href="/product-category/feminized-seeds" className="text-[#D7B65D] hover:underline">feminised</Link>, <Link href="/product-category/autoflowering-seeds" className="text-[#D7B65D] hover:underline">autoflower</Link>, and <Link href="/product-category/high-tch-seeds" className="text-[#D7B65D] hover:underline">high-yield seeds</Link> with fast, discreet Australia-wide shipping and a 95% germination guarantee backed by real batch-testing data. Orders placed before 2 PM AEST ship the same business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href="/product-category/shop-all-cannabis-seeds" className="btn-main !bg-[#D7B65D] !text-[#1a3d36] hover:!bg-[#c9a84e]">
              Browse All 1,600+ Strains
            </Link>
            <Link href="/contact" className="btn-second !border-white/30 !text-white hover:!bg-white/10">
              Talk to Our Team
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-[11px] text-white/50 uppercase tracking-[1px]">
            <span>Visa &amp; Mastercard accepted</span>
            <span>Cryptocurrency welcome</span>
            <span>SSL encrypted checkout</span>
            <span>support@royalkingseeds.au</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FULL INTERNAL LINK HUB — all categories, top strains, blog
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F5F0EA] border-t border-[#275C53]/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl text-[#275C53] mb-3" style={{ fontFamily: 'var(--font-patua)' }}>
            Browse Our Complete Cannabis Seed Catalog
          </h2>
          <p className="text-sm text-[#192026]/65 mb-8 max-w-3xl leading-relaxed">
            Our full catalogue includes over 1,600 cannabis strains categorised by yield, THC level, growing difficulty, climate compatibility, terpene profile, and desired effects — filterable by strain type, flowering time, indoor vs. outdoor suitability, and price. Every category below links to a curated collection with detailed strain specs, growing data, and real customer-reported results. No other Australian seed bank offers this depth of organisation and transparency.
          </p>

          <h3 className="text-base text-[#275C53] mb-4 font-semibold">Seed Types &amp; Genetics</h3>
          <div className="flex flex-wrap gap-2.5 mb-10">
            {[
              { name: 'Shop All Cannabis Seeds', slug: 'shop-all-cannabis-seeds' },
              { name: 'Best Feminised Cannabis Seeds in Australia', slug: 'feminized-seeds' },
              { name: 'Autoflower Marijuana Seeds', slug: 'autoflowering-seeds' },
              { name: 'Indica Cannabis Seeds', slug: 'indica-seeds' },
              { name: 'Sativa Cannabis Seeds', slug: 'sativa-seeds' },
              { name: 'Hybrid Cannabis Seeds', slug: 'hybrid' },
              { name: 'CBD Cannabis Seeds', slug: 'cbd-strains' },
              { name: 'High THC Marijuana Seeds', slug: 'high-tch-seeds' },
              { name: 'Kush Cannabis Seeds', slug: 'kush-seeds' },
              { name: 'Cannabis Seed Mix Packs', slug: 'mix-packs' },
              { name: 'Classic Heritage Seeds', slug: 'classic-cannabis-seeds' },
              { name: 'Exotic Rare Genetics', slug: 'exotic-cannabis-seeds' },
              { name: 'Fruity Flavored Seeds', slug: 'fruity-cannabis-seeds' },
              { name: 'Purple Genetics Seeds', slug: 'purple-genetics-seeds' },
              { name: 'Euphoric Cannabis Seeds', slug: 'euphoric-seeds' },
              { name: 'Energizing Sativa Seeds', slug: 'energizing-cannabis-seeds' },
              { name: 'Best Sellers', slug: 'best-seller' },
              { name: 'Best Cannabis Seeds for Anxiety', slug: 'best-strains-for-anxiety' },
              { name: 'Best Outdoor Growing Strains', slug: 'best-strains-for-outdoor-growing' },
              { name: 'BOGO Cannabis Seeds', slug: 'bogo-seeds' },
              { name: 'Cannabis Seeds on Sale', slug: 'cannabis-seeds-on-sale' },
              { name: 'Australian Premium Cannabis Seeds', slug: 'australian-premium-cannabis-seeds' },
              { name: 'Fast Flowering Seeds', slug: 'fast-flowering-seeds' },
              { name: 'Photoperiod Cannabis Seeds', slug: 'photoperiod' },
            ].map((cat) => (
              <Link key={cat.slug} href={`/product-category/${cat.slug}`}
                className="px-3 py-1.5 bg-white border border-[#275C53]/10 rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">
                {cat.name}
              </Link>
            ))}
          </div>

          <h3 className="text-base text-[#275C53] mb-4 font-semibold">Popular Strains Ordered by Australian Growers</h3>
          <div className="flex flex-wrap gap-2.5 mb-10">
            {products.slice(0, 16).map((p) => (
              <Link key={p.id} href={`/${p.slug}`}
                className="px-3 py-1.5 bg-white border border-[#275C53]/10 rounded-full text-[12px] text-[#192026]/70 hover:text-[#275C53] hover:border-[#275C53]/30 transition-colors">
                {p.name}
              </Link>
            ))}
          </div>

          <h3 className="text-base text-[#275C53] mb-4 font-semibold">Resources &amp; Guides</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'Growing Guides & Blog', href: '/blog' },
              { name: 'Apple Fritter Strain Review', href: '/blog/apple-fritter-cannabis-strain' },
              { name: 'CBD for Muscle Spasms', href: '/blog/cbd-for-muscle-spasms-dosing-and-frequency' },
              { name: 'Marijuana & Nicotine Effects', href: '/blog/marijuana-and-nicotine-use-and-effects' },
              { name: 'Oral Drug Tests & Detox', href: '/blog/mouth-and-oral-drug-tests-and-detox-methods' },
              { name: 'CBD for Opioid Withdrawal', href: '/blog/guide-to-cannabidiol-cbd-for-opioid-withdrawal' },
              { name: 'Purple Dead Nettle Guide', href: '/blog/purple-dead-nettle-and-weeds-in-lawns' },
              { name: 'Volcanic vs Regular Soil', href: '/blog/volcanic-compared-regular-soil-for-cannabis' },
              { name: 'Terpene-Light Seed Options', href: '/blog/terpene-light-options-7-seeds-with-minimal-aroma-in-flower' },
              { name: 'Shipping & Delivery Info', href: '/shipping' },
              { name: 'Frequently Asked Questions', href: '/faq' },
              { name: 'Contact Our Team', href: '/contact' },
              { name: 'Affiliate Program', href: '/affiliate' },
              { name: 'Privacy Policy', href: '/privacy' },
              { name: 'Terms & Conditions', href: '/terms' },
              { name: 'Legal Disclaimer', href: '/legal' },
              { name: 'Refund & Returns', href: '/refund-returns' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="px-3 py-1.5 bg-white border border-[#275C53]/10 rounded-full text-[12px] text-[#192026]/70 hover:text-[#275C53] hover:border-[#275C53]/30 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
