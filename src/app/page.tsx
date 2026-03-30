import Link from 'next/link';
import type { Metadata } from 'next';
import { getProducts, getFeaturedProducts, getBeginnerProducts, getHighThcProducts, getFastFloweringProducts } from '@/lib/products/data';
import { overlayDbImages } from '@/lib/products/db-fallback';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { EasterCouponCode } from '@/components/home/EasterSaleBanner';

export const metadata: Metadata = {
  title: {
    absolute: 'Cannabis Seeds Australia — Feminised & Autoflower Genetics | Royal King Seeds',
  },
  description: 'Australia\'s curated seed bank with 1,600+ feminised, autoflower, and high-THC cannabis strains. Discreet delivery to every state and territory. Batch-tested genetics with a 95% germination rate. Suited to Southern Hemisphere growing seasons from tropical QLD to cool TAS.',
  alternates: { canonical: 'https://royalkingseeds.au' },
  keywords: [
    'cannabis seeds Australia',
    'feminised seeds Australia',
    'autoflower seeds Australia',
    'marijuana seeds discreet shipping Australia',
    'buy weed seeds online Australia',
    'high THC seeds Australia',
    'best Australian seed bank',
    'cannabis seeds Melbourne',
    'cannabis seeds Sydney',
    'outdoor cannabis seeds Australia',
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
          1. HERO — Australia-focused, climate-driven hook
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
            From Tropical QLD to Cool TAS — Genetics That Thrive Across Australia
          </h1>

          {/* Easter coupon inline */}
          <div className="mt-6 mb-2 flex items-center justify-center gap-3 flex-wrap">
            <span className="text-white/80 text-sm sm:text-base">Use code</span>
            <EasterCouponCode />
            <span className="text-white/80 text-sm sm:text-base">for <strong className="text-[#D7B65D]">30% OFF</strong></span>
          </div>

          <p className="mt-4 text-white/85 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Royal King Seeds curates <Link href="/product-category/feminized-seeds" className="text-[#D7B65D] hover:underline">feminised strains</Link>, <Link href="/product-category/autoflowering-seeds" className="text-[#D7B65D] hover:underline">autoflowering genetics</Link>, and <Link href="/product-category/high-tch-seeds" className="text-[#D7B65D] hover:underline">high-potency cultivars</Link> specifically vetted for Southern Hemisphere conditions. Every batch is germination-tested before listing, and our catalogue of 1,600+ varieties draws from 40+ world-class breeders across three continents.
          </p>
          <p className="mt-3 text-white/65 text-sm max-w-2xl mx-auto">
            Growers across six states and two territories rely on us for <Link href="/product-category/indica-seeds" className="text-white/80 hover:text-[#D7B65D]">indica genetics</Link> that handle Melbourne winters, <Link href="/product-category/sativa-seeds" className="text-white/80 hover:text-[#D7B65D]">sativa strains</Link> built for Queensland summers, and <Link href="/product-category/cbd-strains" className="text-white/80 hover:text-[#D7B65D]">CBD cultivars</Link> for medicinal applications — all backed by tracked, discreet delivery and responsive AEST-hours support.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/product-category/shop-all-cannabis-seeds" className="btn-main !bg-[#D7B65D] !text-[#1a3d36] hover:!bg-[#c9a84e]">
              Shop the Easter Sale
            </Link>
            <Link href="/strain-finder" className="btn-second !border-white/30 !text-white hover:!bg-white/10">
              Find Your Perfect Strain
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 justify-center text-[11px] text-white/50 uppercase tracking-[1px]">
            <span>Batch-tested genetics</span>
            <span>Tracked AU-wide delivery</span>
            <span>95% germination rate</span>
            <span>Six years serving Aussie growers</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. TRUST SIGNALS — proof-driven, verifiable claims
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-[#275C53]/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { stat: '40+', label: 'Breeder partnerships across the Netherlands, Spain, the UK, and North America', mobileOnly: false, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#275C53" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
              { stat: '95%', label: 'Average germination rate from controlled batch testing of every seed lot', mobileOnly: false, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#275C53" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
              { stat: '7-14 Days', label: 'Tracked, discreet delivery to metro and regional addresses nationwide', mobileOnly: false, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#275C53" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5a2 2 0 01-2 2h-1"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
              { stat: '1,600+', label: 'Individually vetted strains organised by climate zone, yield, and difficulty', mobileOnly: false, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#275C53" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
              { stat: '38%', label: 'Of customers reorder within six months — a direct measure of seed reliability', mobileOnly: false, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#275C53" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
              { stat: '<4%', label: 'Germination guarantee claims — most seed banks will not publish this figure', mobileOnly: true, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#275C53" strokeWidth="1.5"><path d="M21 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-2"/><path d="M16 12H3"/><path d="M16 12l-4-4"/><path d="M16 12l-4 4"/></svg> },
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
              We reject seed batches that fall below a 90% viability threshold — 23 lots were sent back to suppliers last year alone. Seeds are kept in climate-controlled storage at 7°C and 30% relative humidity until they ship. Each strain page displays flowering time, realistic yield ranges, and growing difficulty sourced from breeder specifications cross-checked against actual Australian grower reports. Read our <Link href="/blog" className="text-[#275C53] font-medium hover:text-[#D7B65D]">cultivation guides</Link> for region-specific germination techniques.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. WHY GROW IN AUSTRALIA — unique Southern Hemisphere angle
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl text-[#275C53] mb-4" style={{ fontFamily: 'var(--font-patua)' }}>
            Growing Cannabis in the Southern Hemisphere
          </h2>
          <p className="text-[#192026]/65 text-sm max-w-3xl mx-auto mb-8 leading-relaxed">
            Australian outdoor growing operates on a reversed calendar compared to Northern Hemisphere guides — germination starts in September or October, vegetative growth peaks through the long days of December and January, and flowering wraps up before the shorter days and cooler temperatures of April and May. This reversed schedule matters more than most growers realise, because strain recommendations written for European or North American summers do not account for Australian light intensity, UV index, or humidity patterns.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: 'Reversed Light Cycle', desc: 'Australian photoperiod strains receive their longest daylight hours in December — not June. Outdoor growers trigger flowering naturally as days shorten from February onward, giving sativa-dominant genetics ample time to finish before May frosts in southern states.', icon: '🌏' },
            { title: 'Intense UV Exposure', desc: 'Australia receives some of the highest UV radiation on Earth, particularly during November through March. This extra light energy drives trichome production and terpene development — growers consistently report denser resin coverage on outdoor plants compared to equivalent Northern Hemisphere grows.', icon: '☀️' },
            { title: 'Multi-Season Potential', desc: 'Tropical and subtropical regions — from Cairns to the Sunshine Coast — support two outdoor autoflower harvests per year. Plant the first round in September for a December harvest, then a second round in January for an April finish. No other continent offers this dual-season advantage so broadly.', icon: '🔄' },
            { title: 'Diverse Climate Bands', desc: 'Within a single country, Australian growers navigate tropical, subtropical, Mediterranean, temperate, and arid zones. The genetics that dominate in Perth bear little resemblance to what works in Hobart. Our catalogue is tagged by climate suitability so you can filter for your specific region.', icon: '🗺️' },
            { title: 'Lower Pest Pressure Indoors', desc: 'Australia\'s strict biosecurity means fewer imported pests reach indoor growing environments. Combined with the country\'s naturally low spider mite populations compared to Europe and North America, indoor cultivators here report cleaner grows with less intervention required.', icon: '🛡️' },
            { title: 'Expanding Legal Framework', desc: 'The ACT legalised personal cultivation in 2020. South Australia and the Northern Territory operate expiation-notice systems. Medical cannabis access through the TGA continues to broaden. The trajectory is toward greater personal growing freedoms — and demand for quality genetics grows with it.', icon: '⚖️' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-6 border border-[#275C53]/5">
              <span className="text-2xl block mb-3">{item.icon}</span>
              <h3 className="text-base font-semibold text-[#275C53] mb-2">{item.title}</h3>
              <p className="text-[13px] text-[#192026]/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. BEST-SELLING SEEDS — social proof through sales data
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#275C53]" style={{ fontFamily: 'var(--font-patua)' }}>
              What Australian Growers Are Ordering Right Now
            </h2>
            <div className="w-12 h-0.5 bg-[#D7B65D] mx-auto mt-4 mb-4" />
            <p className="text-[#192026]/65">These strains lead our monthly sales — ranked by reorder frequency, grower satisfaction, and reported harvest success</p>
          </div>
          <FeaturedProducts products={featured} />
          <p className="text-center text-sm text-[#192026]/65 mt-8 max-w-2xl mx-auto leading-relaxed">
            Our best sellers reflect what actually performs in Australian conditions — not marketing hype. This collection updates monthly based on order volume, customer feedback, and germination data from growers across every state and territory.
          </p>
          <div className="text-center mt-8">
            <Link href="/product-category/shop-all-cannabis-seeds" className="inline-block px-8 py-3 bg-[#275C53] text-white text-sm font-semibold rounded-xl hover:bg-[#1e4a42] transition-colors">
              Explore All {totalProducts}+ Varieties
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. AUTHORITY GUIDE — deep-dive cultivation content
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl text-[#275C53] mb-8" style={{ fontFamily: 'var(--font-patua)' }}>
            A Grower&apos;s Handbook: Selecting and Cultivating Cannabis Seeds in Australia
          </h2>

          <div className="prose prose-sm max-w-none text-[#192026]/75 prose-headings:text-[#275C53] prose-headings:font-normal prose-a:text-[#275C53] prose-a:no-underline hover:prose-a:text-[#D7B65D] leading-relaxed">
            <p>
              After six years of fielding hundreds of strain-selection questions each week from cultivators across every Australian state and territory, one lesson stands out above all others: <strong>the genetics you choose matter more than any other variable in your grow</strong>. Lighting rigs, nutrient lines, and growing medium all play a role — but none of them can compensate for seeds that are old, untested, or poorly suited to your environment.
            </p>
            <p>
              This is the principle behind everything we do at Royal King Seeds. Our 1,600+ strain catalogue is not a bulk import from a single wholesaler. Each variety is individually assessed — germination viability verified through spot-testing, growing parameters cross-referenced with breeder data, and climate suitability evaluated against real feedback from our Australian customer base. The result is a library of <Link href="/product-category/shop-all-cannabis-seeds">cannabis genetics</Link> that actually performs when planted in Australian soil, under Australian sun, in Australian temperatures.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>Understanding Australian Cannabis Seed Regulations</h3>
            <p>
              The regulatory picture across Australia is a patchwork — and it changes frequently. The <strong>Australian Capital Territory</strong> remains the only jurisdiction that permits personal home cultivation, allowing residents aged 18 and over to grow two plants per person (maximum four per household) since January 2020. Possession of up to 50 grams of dried cannabis is also permitted within the ACT.
            </p>
            <p>
              <strong>South Australia</strong> has operated a cannabis expiation notice system since 1987 — the oldest decriminalisation scheme in the country. <strong>Western Australia</strong> and the <strong>Northern Territory</strong> similarly use infringement or diversion notices for minor personal amounts. Across all states and territories, medical cannabis remains accessible through the Therapeutic Goods Administration (TGA) Special Access Scheme, which has seen a surge in authorised prescribers since 2020. We encourage every buyer to verify their specific jurisdictional rules before germinating seeds — the legal landscape shifts frequently.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>Feminised Seeds Explained: Why 99.9% Female Matters</h3>
            <p>
              <Link href="/product-category/feminized-seeds"><strong>Feminised cannabis seeds</strong></Link> are bred using techniques that ensure virtually every plant develops as female — the sex that produces cannabinoid-rich flower. Without feminisation, roughly half your plants would be males that need identifying and removing before they pollinate your crop. For growers working with limited space or a fixed number of pots, feminised genetics eliminate that risk entirely. Our feminised collection spans over 1,000 varieties, from compact <Link href="/product-category/indica-seeds">indica cultivars</Link> suited to tight grow tents through to stretchy <Link href="/product-category/sativa-seeds">sativa-dominant hybrids</Link> that thrive outdoors in long-season climates. The one consideration: feminised <Link href="/product-category/photoperiod">photoperiod strains</Link> require a deliberate shift in lighting — from 18 hours of light during vegetative growth to 12 hours to trigger flowering — or, for outdoor growers, the natural shortening of days from late February onward.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>Autoflowers: Set-and-Forget Genetics for Faster Results</h3>
            <p>
              <Link href="/product-category/autoflowering-seeds"><strong>Autoflowering seeds</strong></Link> incorporate ruderalis genetics that cause plants to begin flowering based on age rather than light exposure. Most autoflowers transition to bloom roughly three to four weeks after germination and reach harvest in eight to twelve weeks total. They stay compact — typically 60 to 120 centimetres — and tolerate the kinds of mistakes that derail photoperiod grows: inconsistent watering, imperfect nutrient doses, and variable temperatures. Our internal customer surveys show that first-time cultivators using autoflowers achieve a harvestable plant 78% of the time, compared with 54% for those who start with photoperiod strains. That gap alone makes autoflowers the obvious entry point for anyone new to cannabis cultivation.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>Matching Genetics to Australia&apos;s Six Climate Zones</h3>
            <p>
              Australia encompasses tropical, subtropical, Mediterranean, temperate, arid, and alpine climate zones — a diversity unmatched by most cannabis-growing countries. Outdoor success depends on choosing genetics that align with your region. <strong>Tropical and subtropical zones</strong> (northern Queensland, the Top End, coastal NSW) experience high humidity during the flowering window, making mould-resistant <Link href="/product-category/hybrid">hybrid strains</Link> with open bud architecture essential. Growers on the Sunshine Coast and Gold Coast hinterland regularly report outdoor yields above 500 grams per plant with sativa-dominant genetics that can handle the moisture. <strong>Mediterranean zones</strong> (Perth, Adelaide, the Barossa) deliver hot, dry summers with negligible mould pressure — almost any genetics thrive here, and our Western Australian customers consistently push <Link href="/product-category/sativa-seeds">sativa varieties</Link> to their full potential. <strong>Temperate and cool zones</strong> (Melbourne, Hobart, Canberra, highland NSW) have shorter viable outdoor windows and risk frost from mid-April. Here, <Link href="/product-category/autoflowering-seeds">autoflowering strains</Link> and <Link href="/product-category/fast-flowering-seeds">fast-finishing photoperiods</Link> are non-negotiable — our Victorian growers aim to harvest by mid-March to stay ahead of autumn cold.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>Realistic Harvest Numbers: What Australian Growers Actually Report</h3>
            <p>
              We are transparent about yields because inflated claims do more harm than good. Based on customer-submitted data spanning thousands of documented Australian harvests — not theoretical breeder maximums — here is what we see. Indoor <Link href="/product-category/autoflowering-seeds">autoflowering plants</Link> under a 200W+ LED in a standard 90x90cm tent typically produce <strong>60 to 150 grams per plant</strong>. Indoor <Link href="/product-category/feminized-seeds">feminised photoperiod strains</Link> with four to six weeks of vegetative growth yield <strong>120 to 250 grams per plant</strong>, with SCROG-trained canopies in 120x120cm tents hitting the upper range consistently. Outdoor <Link href="/product-category/best-strains-for-outdoor-growing">photoperiod plants</Link> in optimal conditions — full sun, quality soil, warm climate — produce <strong>250 to 700 grams per plant</strong>, with Queensland and Western Australian growers reporting the strongest numbers. Setting realistic expectations from the start leads to better decisions about genetics, space, and equipment.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>How Our Discreet Shipping Operates</h3>
            <p>
              Every order leaves our facility in <strong>plain, brandless packaging</strong> — no logos, no company name on the exterior, no description of contents. The return address displays a generic business name. Seeds are sealed inside crush-resistant vials within padded mailers. Full tracking is included for every Australian shipment. Metro addresses in Sydney, Melbourne, Brisbane, Perth, and Adelaide typically receive packages within 7 to 10 business days; regional and remote addresses may take up to 14 days. Orders above $150 AUD qualify for <Link href="/shipping">complimentary tracked delivery</Link>.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>Potency, Cannabinoids, and Choosing by Desired Outcome</h3>
            <p>
              Experienced cultivators growing for maximum strength gravitate toward <Link href="/product-category/high-tch-seeds">high-THC genetics</Link> that test above 25%. Strains like <Link href="/gorilla-glue-feminized">Gorilla Glue</Link>, Bruce Banner, and <Link href="/girl-scout-cookies-feminized">Girl Scout Cookies</Link> dominate this tier for good reason — they deliver dense, trichome-laden flowers with potent effects. Growers prioritising therapeutic benefit without heavy psychoactive intensity should explore <Link href="/product-category/cbd-strains">CBD-dominant seeds</Link> that produce plants with 10 to 20% cannabidiol and minimal THC. For a middle path, <Link href="/product-category/hybrid">balanced 1:1 THC-to-CBD hybrids</Link> combine mild psychoactive warmth with genuine medicinal properties. Our <Link href="/product-category/best-strains-for-anxiety">anxiety-relief collection</Link> is curated directly from customer feedback about which genetics provide calm without overstimulation.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>Our Germination Promise — and the Data Behind It</h3>
            <p>
              Every batch from our 40+ breeder network undergoes germination spot-testing in our climate-controlled facility before it appears in the store. Lots that fall below 90% viability are returned to the supplier — we rejected 23 shipments last year, a level of quality gatekeeping that most seed retailers simply do not practise. If seeds fail to crack and produce a taproot within seven days using our <Link href="/blog">recommended paper towel method</Link>, our <Link href="/faq">germination guarantee</Link> provides free replacements. Contact us within 30 days with your order number and photographs. Since we introduced this programme, fewer than 4% of all orders have required a replacement — and that figure continues to drop as we tighten supplier standards and accelerate inventory rotation.
            </p>

            <h3 style={{ fontFamily: 'var(--font-patua)' }}>Recommended Strains for Every Experience Level</h3>
            <p>
              For cultivators attempting their first grow, three genetics stand out with the highest success rates across our customer base: Northern Lights Auto, <Link href="/gorilla-glue-feminized">Gorilla Glue Auto</Link>, and Blueberry Auto. These varieties tolerate overwatering, temperature swings, and imprecise nutrient schedules better than almost anything else in our catalogue. Apartment growers in Sydney, Melbourne, and Brisbane routinely produce successful harvests in closets and compact tents with these strains.
            </p>
            <ul>
              <li><Link href="/product-category/autoflowering-seeds"><strong>Novice cultivators</strong></Link> — Autoflowering feminised genetics. No light-schedule management, compact size, and a forgiving growth habit. 82% of first-time buyers using these strains report a harvestable plant.</li>
              <li><Link href="/product-category/feminized-seeds"><strong>Intermediate growers chasing bigger harvests</strong></Link> — Feminised photoperiod varieties like <Link href="/girl-scout-cookies-feminized">Girl Scout Cookies</Link>, OG Kush, White Widow, and Blue Dream. Expect 40 to 60% greater yields compared to autoflowers when the growing environment is dialled in.</li>
              <li><Link href="/product-category/high-tch-seeds"><strong>Advanced cultivators pushing potency</strong></Link> — High-THC strains above 25%. Our South Australian and Western Australian customers running controlled indoor rooms consistently match breeder-specified test results.</li>
              <li><Link href="/product-category/best-strains-for-outdoor-growing"><strong>Outdoor specialists</strong></Link> — Big Bud, Critical Mass, and Blue Dream lead our yield reports for outdoor growers. Queensland and WA producers regularly average 500 to 700 grams per plant in full sun with these genetics.</li>
              <li><Link href="/product-category/kush-seeds"><strong>Connoisseur-grade genetics</strong></Link> — OG Kush, Bubba Kush, <Link href="/granddaddy-purple-feminized">Granddaddy Purple</Link>, and <Link href="/product-category/exotic-cannabis-seeds">exotic crosses</Link> like Gelato and Runtz. These reward precise feeding with exceptional trichome density and complex terpene profiles.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. SEED CATEGORIES — browsable grid
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white/50 border-y border-[#275C53]/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl sm:text-3xl text-[#275C53] text-center mb-4" style={{ fontFamily: 'var(--font-patua)' }}>
            Explore Seeds by Genetic Type
          </h2>
          <p className="text-center text-[#192026]/65 text-sm max-w-3xl mx-auto mb-10 leading-relaxed">
            Understanding the distinction between seed types is the foundation of a successful grow. <Link href="/product-category/feminized-seeds" className="text-[#275C53] font-medium hover:text-[#D7B65D]">Feminised seeds</Link> deliver an all-female crop — no males to cull, no wasted pots. <Link href="/product-category/autoflowering-seeds" className="text-[#275C53] font-medium hover:text-[#D7B65D]">Autoflowers</Link> bloom on their own clock regardless of light hours, finishing seed-to-harvest in as little as eight weeks. <Link href="/product-category/photoperiod" className="text-[#275C53] font-medium hover:text-[#D7B65D]">Photoperiod genetics</Link> hand experienced growers full command over vegetative duration and canopy architecture for peak yield.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Feminised Seeds', slug: 'feminized-seeds', desc: '1,000+ varieties. 99.9% female guarantee means every pot produces harvestable flower.', icon: '♀' },
              { name: 'Autoflower Seeds', slug: 'autoflowering-seeds', desc: 'Eight to ten weeks, seed to jar. No light manipulation. Built for simplicity.', icon: '⚡' },
              { name: 'Indica Genetics', slug: 'indica-seeds', desc: 'Compact, fast-finishing plants delivering deep physical relaxation and pain relief.', icon: '🌙' },
              { name: 'Sativa Genetics', slug: 'sativa-seeds', desc: 'Tall, vigorous growers producing uplifting cerebral effects suited to daytime use.', icon: '☀️' },
              { name: 'High THC Seeds', slug: 'high-tch-seeds', desc: 'Breeder-verified 25%+ THC. Dense trichome coverage for connoisseur-grade flower.', icon: '🔥' },
              { name: 'CBD Seeds', slug: 'cbd-strains', desc: 'Therapeutic genetics with 10-20% CBD and minimal THC. Non-intoxicating relief.', icon: '💚' },
            ].map((cat) => (
              <Link key={cat.slug} href={`/product-category/${cat.slug}`}
                className="bg-white rounded-2xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all border border-[#275C53]/5 group">
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="text-sm font-semibold text-[#275C53] group-hover:text-[#D7B65D] transition-colors">{cat.name}</h3>
                <p className="text-[11px] text-[#192026]/60 mt-1.5 leading-relaxed">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. SEEDS FOR EVERY AUSTRALIAN CLIMATE ZONE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl text-[#275C53] text-center mb-4" style={{ fontFamily: 'var(--font-patua)' }}>
          Seeds for Every Australian Climate Zone
        </h2>
        <p className="text-center text-[#192026]/65 text-sm max-w-3xl mx-auto mb-10">
          Six states, two territories, five distinct climate bands. Picking genetics that suit your local conditions is the single most impactful decision you can make before putting a seed in soil. Our regional guides distil years of customer-reported performance data into actionable recommendations — filtered by temperature range, season length, humidity, and frost risk.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { region: 'New South Wales', desc: 'A subtropical east coast stretching from the humid Northern Rivers to the drier Southern Tablelands. The coastal strip offers 280+ frost-free days, supporting a broad range of hybrids and sativas outdoors. Sydney basin growers benefit from mild winters that allow early outdoor starts in September. Blue Dream, White Widow, and Gorilla Glue consistently top NSW customer reorders.', link: '/seeds/australia/new-south-wales' },
            { region: 'Queensland', desc: 'Australia\'s tropical powerhouse, with 340+ frost-free days in the southeast and year-round growing potential in the north. Southeast Queensland supports two outdoor autoflower cycles annually. Cairns and Townsville cultivators favour the dry season (May through October) for mould-free flowering. Mould-resistant sativas and tropical-adapted genetics dominate our QLD sales.', link: '/seeds/australia/queensland' },
            { region: 'Victoria', desc: 'Cool oceanic conditions with Melbourne\'s rapid weather shifts. Autoflowers and fast-finishing indicas are essential for outdoor growers aiming to harvest before April frosts. Indoor cultivation dominates the state — controlled environments eliminate the risk of Victoria\'s unpredictable autumn. Northern Lights Auto and White Widow Auto are the top performers among our VIC customer base.', link: '/seeds/australia/victoria' },
            { region: 'Western Australia', desc: 'Mediterranean conditions around Perth deliver hot, dry summers with near-zero mould pressure — arguably the best outdoor growing climate on the continent. Sativa-dominant genetics and drought-tolerant strains excel here. The extended dry flowering period from January to April produces exceptional resin development. Drip irrigation is the primary consideration for outdoor cultivators.', link: '/seeds/australia/western-australia' },
            { region: 'South Australia', desc: 'Home to Australia\'s longest-running cannabis decriminalisation framework, dating to 1987. Adelaide\'s Mediterranean climate, combined with the Barossa Valley\'s outstanding soil and microclimates, creates ideal growing territory. Heat-tolerant sativas and drought-resistant indica hybrids deliver the strongest results. Our SA customers consistently report above-average outdoor yields.', link: '/seeds/australia/south-australia' },
            { region: 'ACT & Tasmania', desc: 'The ACT permits home cultivation of up to two plants per person — the only Australian jurisdiction with legal personal growing. Canberra\'s temperate continental climate offers a clear October-to-March outdoor window. Tasmania\'s cooler conditions mirror those of southern Victoria, demanding autoflowers or fast-finishing genetics that complete flowering by late March.', link: '/seeds/australia/australian-capital-territory' },
          ].map((item) => (
            <Link key={item.region} href={item.link} className="bg-white rounded-2xl p-6 border border-[#275C53]/5 hover:shadow-md hover:-translate-y-1 transition-all group">
              <h3 className="text-base font-semibold text-[#275C53] mb-2 group-hover:text-[#D7B65D] transition-colors">{item.region}</h3>
              <p className="text-[13px] text-[#192026]/70 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/seeds/australia" className="inline-block px-8 py-3 bg-[#275C53] text-white text-sm font-semibold rounded-xl hover:bg-[#1e4a42] transition-colors">
            View All Regional Guides
          </Link>
        </div>
      </section>

      {/* ─── HIGH THC SEEDS ─── */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#275C53]" style={{ fontFamily: 'var(--font-patua)' }}>
              Maximum Potency: 25%+ THC Genetics
            </h2>
            <div className="w-12 h-0.5 bg-[#D7B65D] mx-auto mt-4 mb-4" />
            <p className="text-[#192026]/65 max-w-2xl mx-auto">
              Bred for cultivators who demand top-shelf potency from every harvest. These <Link href="/product-category/high-tch-seeds" className="text-[#275C53] font-medium hover:underline">high-THC varieties</Link> produce heavy resin output, dense trichome blankets, and powerful effects — the genetics that experienced Australian growers reach for when quality is the only metric that matters.
            </p>
          </div>
          <FeaturedProducts products={highThcSeeds} />
          <div className="text-center mt-10">
            <Link href="/product-category/high-tch-seeds" className="inline-block px-8 py-3 bg-[#275C53] text-white text-sm font-semibold rounded-xl hover:bg-[#1e4a42] transition-colors">
              Browse High THC Collection
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8. BEGINNER-FRIENDLY SEEDS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#275C53]" style={{ fontFamily: 'var(--font-patua)' }}>
              First Grow? Start With These Strains
            </h2>
            <div className="w-12 h-0.5 bg-[#D7B65D] mx-auto mt-4 mb-4" />
            <p className="text-[#192026]/65 max-w-2xl mx-auto">
              These <Link href="/product-category/autoflowering-seeds" className="text-[#275C53] font-medium hover:underline">autoflowering genetics</Link> forgive the mistakes every beginner makes — overwatering, inconsistent feeding, imperfect temperatures. They stay compact, flower on their own schedule, and deliver a harvestable plant in under ten weeks. Our <Link href="/blog" className="text-[#275C53] font-medium hover:underline">step-by-step germination guide</Link> covers everything from paper towel method through to harvest timing.
            </p>
          </div>
          <FeaturedProducts products={beginnerSeeds} />
          <div className="text-center mt-10">
            <Link href="/product-category/autoflowering-seeds" className="inline-block px-8 py-3 bg-[#275C53] text-white text-sm font-semibold rounded-xl hover:bg-[#1e4a42] transition-colors">
              Explore Beginner-Friendly Seeds
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          9. GROWING GUIDES & BLOG PREVIEW
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl text-[#275C53] text-center mb-4" style={{ fontFamily: 'var(--font-patua)' }}>
          Cultivation Knowledge — Free Guides for Every Skill Level
        </h2>
        <p className="text-center text-[#192026]/65 text-sm max-w-2xl mx-auto mb-10">
          Written by hands-on cultivators with Southern Hemisphere experience — not recycled from Northern Hemisphere websites. Thousands of Australian growers have used these resources to produce their first successful harvest and refine their technique.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Tropical Balcony Grow: 8 Mould-Resistant Autos', desc: 'Compact, humidity-tolerant autoflowers ideal for balcony and patio cultivation in warm, humid Australian climates — Queensland, the Northern Territory, and coastal NSW.', href: '/blog/tropical-balcony-grow-8-compact-mold-resistant-autos', tag: 'Outdoor' },
            { title: 'Cannabis Pruning and Topping Techniques', desc: 'When and how to top, prune, and train your plants. Covers FIM, LST, SCROG, and defoliation for maximum canopy control and harvest weight.', href: '/blog/cannabis-plant-pruning-and-topping', tag: 'Advanced' },
            { title: 'VPD and Humidity Control in Cannabis Cultivation', desc: 'Understanding vapour pressure deficit and how temperature-humidity interaction governs transpiration, nutrient uptake, and mould risk at every growth stage.', href: '/blog/vpd-and-humidity-control-in-cannabis-cultivation', tag: 'Indoor' },
            { title: 'Low-Watt Grows: 7 Seeds That Still Deliver', desc: 'Running 150 to 300 watts? These strains are bred for efficiency — compact structure, fast finish, and solid yields under modest LED setups.', href: '/blog/low-watt-grows-150-300-w-7-seeds-that-still-deliver', tag: 'Indoor' },
            { title: '5 Methods of Taking CBD for Therapeutic Use', desc: 'A practical comparison of sublingual tinctures, edibles, topicals, vaporisation, and capsules — including dosing guidance and bioavailability data.', href: '/blog/5-different-ways-to-take-cbd-for-medical-use', tag: 'CBD Guide' },
            { title: 'Cannabis Terpenes vs. Other Aromatic Plants', desc: 'How terpenes in cannabis compare to those found in lavender, citrus, pine, and pepper — and why the entourage effect matters for medicinal users.', href: '/blog/cannabis-vs-other-aromatic-plant-terpenes', tag: 'Science' },
            { title: 'CBN and Its Effects on Sleep and Wellness', desc: 'How cannabinol supports sleep quality, which strains produce it naturally, and how harvest timing influences CBN concentration in your finished flower.', href: '/blog/cbn-and-its-effects-on-sleep-and-wellness', tag: 'Wellness' },
            { title: 'Volcanic vs Regular Soil for Cannabis', desc: 'Comparing mineral content, drainage characteristics, and microbial activity between volcanic and standard soil mixes for cannabis cultivation.', href: '/blog/volcanic-compared-regular-soil-for-cannabis', tag: 'Growing Media' },
            { title: 'Origins and History of Cannabis', desc: 'Tracing the journey of cannabis from ancient Central Asian landrace genetics through prohibition to the contemporary Australian market.', href: '/blog/origins-and-history-of-cannabis', tag: 'Education' },
          ].map((guide) => (
            <Link key={guide.title} href={guide.href} className="bg-white rounded-2xl p-6 border border-[#275C53]/5 hover:shadow-md hover:-translate-y-1 transition-all group">
              <span className="text-[10px] uppercase tracking-[1.5px] text-[#D7B65D] font-semibold">{guide.tag}</span>
              <h3 className="text-base font-semibold text-[#275C53] mt-2 mb-2 group-hover:text-[#D7B65D] transition-colors leading-snug">{guide.title}</h3>
              <p className="text-[13px] text-[#192026]/70 leading-relaxed">{guide.desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="btn-second">Browse All Guides</Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          10. HOW TO DECIDE — decision-support cards
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white/50 border-y border-[#275C53]/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl sm:text-3xl text-[#275C53] text-center mb-4" style={{ fontFamily: 'var(--font-patua)' }}>
            Not Sure Where to Start? Match Your Goal to a Seed Type
          </h2>
          <p className="text-center text-[#192026]/65 text-sm max-w-3xl mx-auto mb-10">
            The ideal strain depends on what you want to achieve. Four common goals — four clear starting points, backed by what we have observed from tens of thousands of customer grows.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Attempting Your First Grow?', desc: 'Autoflowering feminised seeds are the answer. They bloom automatically, remain under one metre tall, wrap up in eight to ten weeks, and handle the errors every beginner inevitably makes. Our data shows the highest first-grow completion rate with autoflowers.', link: '/product-category/autoflowering-seeds', cta: 'Explore Autoflowers' },
              { title: 'Chasing Maximum Weight?', desc: 'Feminised photoperiod genetics with five to six weeks of vegetative growth under 18 hours of light produce the heaviest indoor harvests. Customers using SCROG training in 120x120cm tents average 180 to 250 grams per plant — roughly double what autoflowers deliver.', link: '/product-category/feminized-seeds', cta: 'Explore Feminised Seeds' },
              { title: 'Planting Outdoors This Season?', desc: 'Match genetics to your state\'s season length. Southern states need fast-flowering or autoflower varieties. Queensland and WA growers can run full-season sativas. Our outdoor collection is curated from verified regional performance data.', link: '/product-category/best-strains-for-outdoor-growing', cta: 'Explore Outdoor Strains' },
              { title: 'Growing for Medicinal Benefit?', desc: 'CBD-dominant genetics produce non-intoxicating flower rich in cannabidiol. Customers managing anxiety, chronic pain, and inflammation report the greatest benefit. Balanced 1:1 THC-to-CBD hybrids offer gentle psychoactive warmth with genuine therapeutic effect.', link: '/product-category/cbd-strains', cta: 'Explore CBD Seeds' },
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
          11. FREE GROWER TOOLS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl text-[#275C53] text-center mb-3" style={{ fontFamily: 'var(--font-patua)' }}>
          Free Planning Tools for Australian Cultivators
        </h2>
        <p className="text-center text-[#192026]/60 max-w-2xl mx-auto mb-8 text-sm">
          Dial in your strain selection, forecast your harvest, optimise your feeding schedule, and compare genetics side by side — all at no cost.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: 'Strain Finder Quiz', desc: 'Six quick questions to narrow 1,600+ strains to your top matches', href: '/strain-finder', icon: '🧬' },
            { name: 'Yield Calculator', desc: 'Forecast harvest weight based on space, lighting, and genetics', href: '/yield-calculator', icon: '📊' },
            { name: 'Nutrient Calculator', desc: 'EC and PPM targets for soil, coco, and hydroponic setups', href: '/nutrient-calculator', icon: '🧪' },
            { name: 'Strain Comparison', desc: 'Place up to four varieties side by side on every metric', href: '/compare-strains', icon: '⚖️' },
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

      {/* ─── FAST FLOWERING SEEDS ─── */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#275C53]" style={{ fontFamily: 'var(--font-patua)' }}>
              Quick-Finish Genetics for Short-Season States
            </h2>
            <div className="w-12 h-0.5 bg-[#D7B65D] mx-auto mt-4 mb-4" />
            <p className="text-[#192026]/65 max-w-2xl mx-auto">
              Outdoor cultivators in <Link href="/seeds/australia/victoria" className="text-[#275C53] font-medium hover:underline">Victoria</Link>, <Link href="/seeds/australia/tasmania" className="text-[#275C53] font-medium hover:underline">Tasmania</Link>, and the <Link href="/seeds/australia/australian-capital-territory" className="text-[#275C53] font-medium hover:underline">ACT</Link> face a tight window — frost risk climbs from mid-April onward. These fast-flowering and autoflower varieties complete their entire lifecycle in eight to ten weeks, letting southern growers harvest well before autumn cold sets in. Two to four weeks faster than standard photoperiod strains, they are the go-to genetics for short-season outdoor cannabis cultivation.
            </p>
          </div>
          <FeaturedProducts products={fastFlowering} />
          <div className="text-center mt-10">
            <Link href="/product-category/autoflowering-seeds" className="inline-block px-8 py-3 bg-[#275C53] text-white text-sm font-semibold rounded-xl hover:bg-[#1e4a42] transition-colors">
              Browse Fast-Finishing Seeds
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          12. FAQ — unique questions and phrasings
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white/50 border-t border-[#275C53]/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl sm:text-3xl text-[#275C53] text-center mb-10" style={{ fontFamily: 'var(--font-patua)' }}>
            Common Questions From Australian Seed Buyers
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Where in Australia is personal cannabis cultivation permitted?', a: 'The Australian Capital Territory is currently the sole jurisdiction that allows residents aged 18 and over to cultivate cannabis at home — up to two plants per person and a maximum of four per household, effective since January 2020. No other state or territory has enacted equivalent legislation, although South Australia, Western Australia, and the Northern Territory apply expiation or diversion notice systems for minor personal quantities. Medical cannabis access through the TGA Special Access Scheme is available nationally with an authorised prescription. Regulatory conditions evolve regularly, so we recommend verifying your local rules before germinating.' },
              { q: 'How does your packaging avoid drawing attention?', a: 'Orders ship in plain, unmarked packaging with no company branding, logos, or product descriptions on the exterior. The return address lists a generic business name. Inside, seeds sit in crush-resistant vials within padded mailers. There is nothing on or inside the package that identifies its contents. Full tracking is provided for every Australian shipment so you can monitor delivery from dispatch to arrival.' },
              { q: 'Why do autoflowering seeds suit Australian beginners better than photoperiod strains?', a: 'Autoflowering genetics flower based on plant age — typically three to four weeks after germination — rather than requiring a change in light schedule. This eliminates one of the most common beginner errors: failing to properly transition from vegetative to flowering light cycles. Autoflowers also stay compact (60 to 120 centimetres), finish in eight to twelve weeks total, and tolerate inconsistent watering and nutrient schedules. In our customer data, first-time growers using autoflowers report a 78% harvest success rate versus 54% for those starting with photoperiod varieties.' },
              { q: 'What delivery timeframes apply across different Australian regions?', a: 'Metro addresses in Sydney, Melbourne, Brisbane, Perth, and Adelaide typically receive shipments within 7 to 10 business days. Regional centres across NSW, Queensland, Victoria, and South Australia generally fall within the 10 to 12 day range. Remote and far-regional addresses in Western Australia, the Northern Territory, and Tasmania may take the full 14 business days. Every order includes tracked shipping, and orders above $150 AUD ship at no charge.' },
              { q: 'How do I know which genetics suit my state\'s climate?', a: 'Australia spans tropical, subtropical, Mediterranean, temperate, and arid climate zones — each demanding different genetics. Tropical Queensland and the Northern Territory need mould-resistant cultivars with open bud structure. Western Australia and South Australia offer dry, hot Mediterranean summers where almost any strain thrives. Victoria, Tasmania, and the ACT have shorter outdoor windows requiring autoflowers or fast-finishing photoperiods that complete before April frosts. Our state-specific growing pages and strain finder tool filter recommendations by your exact region.' },
              { q: 'What makes a seed batch fail your quality testing?', a: 'Every shipment from our breeder partners undergoes germination spot-testing under controlled conditions before it appears in the store. If a batch germinates below 90%, it is returned to the supplier. We rejected 23 batches last year alone. Beyond germination, we verify that labelling matches the actual genetic profile — strain mix-ups, while rare, do occur across the industry, and our vetting process catches them. Seeds are then stored at 7 degrees Celsius and 30% relative humidity to preserve viability until they reach the customer.' },
              { q: 'How does the germination guarantee work in practice?', a: 'If seeds fail to crack and produce a visible taproot within seven days using our recommended paper towel method, contact our support team within 30 days of delivery. Provide your order number and photographs documenting the germination attempt. We ship replacement seeds at no cost — no lengthy dispute process. Since we introduced this programme, fewer than 4% of all orders have required a replacement claim, reflecting the quality control we apply before seeds ever reach the store.' },
              { q: 'Can I complete an outdoor grow in Victoria or Tasmania?', a: 'Yes, but strain selection is critical. Southern Australian outdoor growers face frost risk from mid-April and shorter daylight hours compared to northern states. Autoflowering seeds are the safest choice — they finish in eight to ten weeks from germination regardless of light cycle, letting you harvest by mid-March. Fast-flowering photoperiod strains that complete bloom within seven to eight weeks from the flip are also viable if planted early enough. Sativa-dominant genetics that need 10 to 14 weeks of flowering are not recommended for outdoor cultivation south of the NSW-Victoria border.' },
              { q: 'Which payment options do you support?', a: 'We process Visa and Mastercard through PCI-compliant payment gateways with 256-bit SSL encryption. Full card numbers are never stored on our servers. We also accept major cryptocurrencies — Bitcoin, Ethereum, and several altcoins — for customers who prefer additional transaction privacy. Cryptocurrency payments are processed through a secure third-party gateway and confirmed within minutes.' },
              { q: 'How should seeds be stored if I am not planting immediately?', a: 'Keep seeds in a cool, dark, dry environment — an airtight container in the refrigerator at 4 to 10 degrees Celsius with low humidity is ideal. Avoid temperature fluctuations, moisture exposure, and direct light. Properly stored cannabis seeds maintain viable germination rates for two to five years, though germination performance is strongest within the first twelve months of purchase. Our seeds ship in sealed, moisture-protective packaging designed to maintain viability during transit.' },
              { q: 'Do you carry genetics specifically tested for Australian conditions?', a: 'Our Australian Premium Cannabis Seeds collection features varieties hand-selected for documented performance in Australian growing environments. Selection criteria include heat tolerance for Queensland and Western Australian summers, mould resistance for humid coastal climates, and general vigour across Australian indoor and outdoor setups. This is a curated tier — not every strain qualifies. It includes popular genetics like Girl Scout Cookies, Gorilla Glue, and Blue Dream alongside varieties specifically suited to Southern Hemisphere growing seasons.' },
              { q: 'What is the difference between indica and sativa growth characteristics?', a: 'Indica-dominant genetics produce shorter, bushier plants that typically finish flowering faster — ideal for confined indoor spaces and cooler climates with shorter outdoor seasons. Their effects tend toward physical relaxation and pain relief. Sativa-dominant genetics grow taller and more vigorously, with longer flowering periods, and produce uplifting cerebral effects suited to daytime use. Most modern cannabis strains are hybrids that lean toward one side or the other. For Australian outdoor growers, the practical distinction matters most: indicas finish faster and suit southern states, while sativas reach their full potential in the long seasons of Queensland and Western Australia.' },
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
                  { "@type": "Question", name: "Where in Australia is personal cannabis cultivation allowed?", acceptedAnswer: { "@type": "Answer", text: "The Australian Capital Territory permits residents aged 18+ to grow up to two plants per person since January 2020. South Australia, Western Australia, and the Northern Territory use expiation or diversion notice systems for small personal amounts. Medical cannabis is accessible nationally through the TGA Special Access Scheme." } },
                  { "@type": "Question", name: "How is packaging kept discreet?", acceptedAnswer: { "@type": "Answer", text: "All orders ship in plain, unmarked packaging with no branding or product descriptions. A generic business name appears on the return address. Seeds are sealed in crush-resistant vials inside padded mailers." } },
                  { "@type": "Question", name: "Why are autoflowering seeds recommended for first-time Australian growers?", acceptedAnswer: { "@type": "Answer", text: "Autoflowers flower based on age rather than light changes, eliminating the most common beginner error. They stay compact, finish in 8-12 weeks, and tolerate inconsistent conditions. First-time growers using autoflowers report a 78% harvest success rate." } },
                  { "@type": "Question", name: "What are typical delivery times across Australia?", acceptedAnswer: { "@type": "Answer", text: "Metro areas in Sydney, Melbourne, Brisbane, Perth, and Adelaide typically receive orders within 7-10 business days. Regional addresses take 10-12 days. Remote locations may require up to 14 business days. All orders include tracking." } },
                  { "@type": "Question", name: "How do I select the right genetics for my Australian climate zone?", acceptedAnswer: { "@type": "Answer", text: "Tropical QLD and NT need mould-resistant strains. Mediterranean WA and SA suit almost any genetics. Cool-climate VIC, TAS, and ACT require autoflowers or fast-flowering photoperiods. Indoor growers in any state can cultivate any variety with proper environment control." } },
                  { "@type": "Question", name: "What quality testing do seed batches undergo?", acceptedAnswer: { "@type": "Answer", text: "Every batch is germination spot-tested under controlled conditions. Lots below 90% viability are returned to suppliers. Seeds are stored at 7°C and 30% relative humidity. 23 batches were rejected last year." } },
                  { "@type": "Question", name: "How does the germination guarantee operate?", acceptedAnswer: { "@type": "Answer", text: "Seeds that fail to germinate within 7 days using the recommended method are replaced free of charge. Contact support within 30 days with your order number and photos. Fewer than 4% of orders have ever needed a replacement." } },
                  { "@type": "Question", name: "Is outdoor growing viable in southern Australian states?", acceptedAnswer: { "@type": "Answer", text: "Yes, with appropriate genetics. Autoflowering seeds finish in 8-10 weeks regardless of light cycle, enabling harvest by mid-March. Fast-flowering photoperiods are also viable if planted early. Full-season sativas are not recommended for outdoor growing south of the NSW-Victoria border." } },
                  { "@type": "Question", name: "What payment methods are accepted?", acceptedAnswer: { "@type": "Answer", text: "Visa, Mastercard, and major cryptocurrencies including Bitcoin and Ethereum. All card transactions use PCI-compliant processing with 256-bit SSL encryption. Card details are never stored on our servers." } },
                  { "@type": "Question", name: "Do you stock genetics selected specifically for Australian growing conditions?", acceptedAnswer: { "@type": "Answer", text: "Our Australian Premium Cannabis Seeds collection features varieties hand-selected for heat tolerance, mould resistance, and performance in Australian indoor and outdoor environments. This curated tier includes proven genetics like Girl Scout Cookies, Gorilla Glue, and Blue Dream." } },
                ],
              }),
            }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          13. ABOUT ROYAL KING SEEDS AUSTRALIA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F5F0EA] border-y border-[#275C53]/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl text-[#275C53] mb-6" style={{ fontFamily: 'var(--font-patua)' }}>
              The Story Behind Royal King Seeds Australia
            </h2>
            <div className="prose prose-sm max-w-none text-[#192026]/75 prose-headings:text-[#275C53] prose-a:text-[#275C53] leading-relaxed">
              <p>
                Royal King Seeds launched in 2019 with a single conviction: <strong>Australian home cultivators deserve access to rigorously tested cannabis genetics without inflated pricing, vague product descriptions, or unresponsive support</strong>. We are not an open marketplace listing everything from every breeder. We are a curated seed bank — each of the 1,600+ strains in our catalogue has been assessed for germination viability, genetic stability, and documented growing performance before it enters the store.
              </p>
              <p>
                Our breeder relationships span 40+ suppliers across the Netherlands, Spain, the United Kingdom, and North America. These partnerships are maintained on a merit basis — when a breeder&apos;s germination rates dip below our 90% threshold, we pause orders until the issue is resolved. This approach is not standard practice in the seed bank industry, but it underpins the 95% average germination rate our internal batch testing consistently delivers.
              </p>
              <p>
                Every seed in our inventory is held in climate-controlled storage at 7°C and 30% relative humidity — conditions that preserve viability from the moment stock arrives at our facility until it ships in crush-proof containers inside plain, unmarked mailers. We rotate inventory frequently. When a customer orders from us, they receive fresh, recently tested seeds — not stock that has been sitting in a warehouse for months.
              </p>
              <p>
                Beyond genetics, we have built a support infrastructure around the grower. Our team has fielded over 15,000 inquiries about strain selection, growing environments, nutrient scheduling, and harvest timing. Our <Link href="/blog">growing guides</Link> draw from direct cultivation experience, not repackaged Northern Hemisphere content. Our <Link href="/faq">germination guarantee</Link> has required replacement on fewer than 4% of all orders since launch. And 38% of our customers come back for a second order within six months — a reorder rate that only happens when the product works and the support is genuine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          14. INTERNAL LINK HUBS — experience, effect, flavour
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F5F0EA] border-y border-[#275C53]/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* By Experience */}
            <div>
              <h2 className="text-lg text-[#275C53] mb-5 font-semibold" style={{ fontFamily: 'var(--font-patua)' }}>Browse by Cultivation Experience</h2>
              <ul className="space-y-2.5">
                <li><Link href="/product-category/autoflowering-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Beginner autoflower genetics</Link></li>
                <li><Link href="/product-category/feminized-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Intermediate feminised varieties</Link></li>
                <li><Link href="/product-category/high-tch-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Advanced high-potency cultivars</Link></li>
                <li><Link href="/product-category/best-strains-for-outdoor-growing" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Outdoor specialists — high-yield picks</Link></li>
                <li><Link href="/product-category/fast-flowering-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Fast-finishing seeds (7-8 week bloom)</Link></li>
                <li><Link href="/product-category/mix-packs" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Mix packs for variety seekers</Link></li>
              </ul>
            </div>

            {/* By Desired Outcome */}
            <div>
              <h2 className="text-lg text-[#275C53] mb-5 font-semibold" style={{ fontFamily: 'var(--font-patua)' }}>Browse by Desired Outcome</h2>
              <ul className="space-y-2.5">
                <li><Link href="/product-category/indica-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Deep relaxation — indica genetics</Link></li>
                <li><Link href="/product-category/energizing-cannabis-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Daytime energy — sativa strains</Link></li>
                <li><Link href="/product-category/euphoric-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Mood elevation — euphoric genetics</Link></li>
                <li><Link href="/product-category/best-strains-for-anxiety" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Anxiety relief — calming cultivars</Link></li>
                <li><Link href="/product-category/cbd-strains" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Pain and inflammation — CBD seeds</Link></li>
                <li><Link href="/product-category/hybrid" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Balanced effects — hybrid genetics</Link></li>
              </ul>
            </div>

            {/* By Flavour & Lineage */}
            <div>
              <h2 className="text-lg text-[#275C53] mb-5 font-semibold" style={{ fontFamily: 'var(--font-patua)' }}>Browse by Flavour &amp; Lineage</h2>
              <ul className="space-y-2.5">
                <li><Link href="/product-category/fruity-cannabis-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Fruity and tropical terpene profiles</Link></li>
                <li><Link href="/product-category/kush-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Gas, diesel, and kush lineages</Link></li>
                <li><Link href="/product-category/exotic-cannabis-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Exotic cultivars — Runtz, Gelato, Zkittlez</Link></li>
                <li><Link href="/product-category/purple-genetics-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Purple and anthocyanin-rich phenotypes</Link></li>
                <li><Link href="/product-category/classic-cannabis-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Heritage classics — Skunk, Haze, Afghan</Link></li>
                <li><Link href="/product-category/australian-premium-cannabis-seeds" className="text-sm text-[#192026]/70 hover:text-[#275C53] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D7B65D]" />Australian Premium curated tier</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          15. WHAT SETS US APART — proof-based
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl text-[#275C53] text-center mb-4" style={{ fontFamily: 'var(--font-patua)' }}>
          What Sets Royal King Seeds Apart
        </h2>
        <p className="text-center text-[#192026]/65 max-w-2xl mx-auto mb-12 text-sm">
          Concrete commitments backed by operational data — not marketing slogans. Here is precisely what you receive when you order from us.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Curated, Not Bulk-Listed', desc: 'Our 1,600+ strain catalogue is built by vetting each variety individually. We add new genetics monthly and pull underperformers. Every listing includes verified growing data — flowering time, realistic yield, THC content, and difficulty.', link: '/product-category/shop-all-cannabis-seeds' },
            { title: 'Tracked AU-Wide Delivery', desc: 'Every order ships with tracking to all Australian states and territories in plain, unmarked packaging. Metro areas typically receive within 7-10 business days. Complimentary shipping on orders above $150 AUD.', link: '/shipping' },
            { title: 'Batch-Tested 95% Germination', desc: 'Germination is verified through controlled spot-testing of every seed lot before listing. Batches below 90% viability are rejected. Our guarantee replaces failed seeds at no charge — and under 4% of orders have ever needed it.', link: '/faq' },
            { title: 'Southern Hemisphere Grow Guides', desc: 'Our blog is written for Australian conditions — reversed seasons, intense UV, humid coastal climates. These are not Northern Hemisphere guides repurposed with metric conversions. They draw from direct cultivation experience in Australian environments.', link: '/blog' },
            { title: 'Secure Checkout — Cards & Crypto', desc: 'PCI-compliant payment processing with 256-bit SSL encryption. Full card numbers never stored on our infrastructure. Bitcoin, Ethereum, and altcoins accepted for customers who prioritise transaction privacy.', link: '/faq' },
            { title: 'AEST-Hours Support From Real Cultivators', desc: 'Our team responds within 24 hours with genuine growing advice — strain selection, environment troubleshooting, nutrient scheduling. No scripted responses. No chatbots. People who grow, helping people who grow.', link: '/contact' },
          ].map((item) => (
            <Link key={item.title} href={item.link} className="bg-white rounded-2xl p-6 border border-[#275C53]/5 hover:shadow-md hover:-translate-y-1 transition-all group">
              <h3 className="text-base font-semibold text-[#275C53] mb-2 group-hover:text-[#D7B65D] transition-colors">{item.title}</h3>
              <p className="text-[13px] text-[#192026]/70 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          16. Popular Categories (dark section)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#275C53] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl sm:text-3xl text-center mb-10" style={{ fontFamily: 'var(--font-patua)' }}>
            Trending Collections Among Aussie Growers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Best Sellers', slug: 'best-seller', desc: 'The strains Australian cultivators reorder most often — ranked monthly by purchase frequency, customer satisfaction scores, and documented harvest success rates.' },
              { name: 'Kush Lineage Collection', slug: 'kush-seeds', desc: 'OG Kush, Bubba Kush, Master Kush, Purple Kush, and modern crosses. Dense, resinous buds with earthy, piney terpene profiles — a perennial favourite among experienced Aussie growers.' },
              { name: 'Mix Packs — Best Value', slug: 'mix-packs', desc: 'Multi-strain bundles at reduced pricing. Experiment with indica, sativa, and hybrid genetics in a single order. Customers consistently rate mix packs as the smartest way to discover their preferred cultivar.' },
              { name: 'Australian Premium Tier', slug: 'australian-premium-cannabis-seeds', desc: 'Genetics hand-selected for verified performance in Australian growing conditions — heat tolerance, mould resistance, and vigour. Our most rigorously curated collection, favoured by experienced cultivators.' },
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
          17. FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
        <div className="bg-[#275C53] rounded-3xl p-8 sm:p-14 text-center">
          <h2 className="text-2xl sm:text-3xl text-white mb-4" style={{ fontFamily: 'var(--font-patua)' }}>
            Ready to Grow? Your Genetics Are Waiting.
          </h2>
          <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Explore 1,600+ batch-tested cannabis strains tailored for Australian growing conditions. <Link href="/product-category/feminized-seeds" className="text-[#D7B65D] hover:underline">Feminised</Link>, <Link href="/product-category/autoflowering-seeds" className="text-[#D7B65D] hover:underline">autoflower</Link>, and <Link href="/product-category/high-tch-seeds" className="text-[#D7B65D] hover:underline">high-potency varieties</Link> — all shipped discreetly to every state and territory with tracked delivery and a germination guarantee built on real testing data. Same-day dispatch on orders placed before 2 PM AEST.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href="/product-category/shop-all-cannabis-seeds" className="btn-main !bg-[#D7B65D] !text-[#1a3d36] hover:!bg-[#c9a84e]">
              Explore the Full Catalogue
            </Link>
            <Link href="/contact" className="btn-second !border-white/30 !text-white hover:!bg-white/10">
              Speak With Our Team
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-[11px] text-white/50 uppercase tracking-[1px]">
            <span>Visa &amp; Mastercard</span>
            <span>Cryptocurrency accepted</span>
            <span>256-bit SSL encryption</span>
            <span>support@royalkingseeds.au</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          18. COMPLETE INTERNAL LINK HUB
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F5F0EA] border-t border-[#275C53]/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl text-[#275C53] mb-3" style={{ fontFamily: 'var(--font-patua)' }}>
            Full Catalogue — Browse Every Collection
          </h2>
          <p className="text-sm text-[#192026]/65 mb-8 max-w-3xl leading-relaxed">
            Over 1,600 cannabis strains organised by genetic type, yield potential, THC content, growing difficulty, climate suitability, terpene profile, and desired effect. Every collection links to a curated page with verified strain specifications, growing data, and customer-reported performance. Filter by flowering time, indoor versus outdoor suitability, and price to find your ideal genetics.
          </p>

          <h3 className="text-base text-[#275C53] mb-4 font-semibold">Seed Types &amp; Genetics</h3>
          <div className="flex flex-wrap gap-2.5 mb-10">
            {[
              { name: 'Shop All Cannabis Seeds', slug: 'shop-all-cannabis-seeds' },
              { name: 'Feminised Cannabis Seeds', slug: 'feminized-seeds' },
              { name: 'Autoflower Cannabis Seeds', slug: 'autoflowering-seeds' },
              { name: 'Indica Cannabis Seeds', slug: 'indica-seeds' },
              { name: 'Sativa Cannabis Seeds', slug: 'sativa-seeds' },
              { name: 'Hybrid Cannabis Seeds', slug: 'hybrid' },
              { name: 'CBD Cannabis Seeds', slug: 'cbd-strains' },
              { name: 'High THC Cannabis Seeds', slug: 'high-tch-seeds' },
              { name: 'Kush Cannabis Seeds', slug: 'kush-seeds' },
              { name: 'Cannabis Seed Mix Packs', slug: 'mix-packs' },
              { name: 'Classic Heritage Seeds', slug: 'classic-cannabis-seeds' },
              { name: 'Exotic Rare Genetics', slug: 'exotic-cannabis-seeds' },
              { name: 'Fruity Terpene Seeds', slug: 'fruity-cannabis-seeds' },
              { name: 'Purple Genetics Seeds', slug: 'purple-genetics-seeds' },
              { name: 'Euphoric Cannabis Seeds', slug: 'euphoric-seeds' },
              { name: 'Energising Sativa Seeds', slug: 'energizing-cannabis-seeds' },
              { name: 'Best Sellers', slug: 'best-seller' },
              { name: 'Anxiety Relief Seeds', slug: 'best-strains-for-anxiety' },
              { name: 'Outdoor Growing Strains', slug: 'best-strains-for-outdoor-growing' },
              { name: 'BOGO Cannabis Seeds', slug: 'bogo-seeds' },
              { name: 'Cannabis Seeds on Sale', slug: 'cannabis-seeds-on-sale' },
              { name: 'Australian Premium Collection', slug: 'australian-premium-cannabis-seeds' },
              { name: 'Fast Flowering Seeds', slug: 'fast-flowering-seeds' },
              { name: 'Photoperiod Cannabis Seeds', slug: 'photoperiod' },
            ].map((cat) => (
              <Link key={cat.slug} href={`/product-category/${cat.slug}`}
                className="px-3 py-1.5 bg-white border border-[#275C53]/10 rounded-full text-[12px] text-[#275C53] hover:bg-[#275C53] hover:text-white transition-colors">
                {cat.name}
              </Link>
            ))}
          </div>

          <h3 className="text-base text-[#275C53] mb-4 font-semibold">Frequently Ordered Strains</h3>
          <div className="flex flex-wrap gap-2.5 mb-10">
            {products.slice(0, 16).map((p) => (
              <Link key={p.id} href={`/${p.slug}`}
                className="px-3 py-1.5 bg-white border border-[#275C53]/10 rounded-full text-[12px] text-[#192026]/70 hover:text-[#275C53] hover:border-[#275C53]/30 transition-colors">
                {p.name}
              </Link>
            ))}
          </div>

          <h3 className="text-base text-[#275C53] mb-4 font-semibold">Resources &amp; Support</h3>
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
              { name: 'Affiliate Programme', href: '/affiliate' },
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
