import type { Metadata } from 'next';
import Link from 'next/link';
import { generateLocationPage, getAllStateSlugs } from '@/lib/au-locations';

const BASE = 'https://royalkingseeds.au';

export const metadata: Metadata = {
  title: 'Buy Cannabis Seeds in Australia — All States & Territories',
  description:
    'Buy cannabis seeds online with discreet shipping to all Australian states and territories. Feminised, autoflower, and high-THC seeds. 95% germination guarantee. Fast delivery.',
  alternates: { canonical: `${BASE}/seeds/australia` },
  openGraph: {
    title: 'Buy Cannabis Seeds in Australia — All States & Territories',
    description:
      'Premium cannabis seeds shipped discreetly across Australia. Feminised, autoflower, CBD, and high-THC genetics with germination guarantee.',
    type: 'website',
    url: `${BASE}/seeds/australia`,
    siteName: 'Royal King Seeds Australia',
    locale: 'en_AU',
  },
};

/* ── Region grouping ── */
const REGIONS: Record<string, string[]> = {
  'East Coast': [
    'New South Wales', 'Victoria', 'Queensland', 'Australian Capital Territory',
  ],
  'Southern': [
    'South Australia', 'Tasmania',
  ],
  'Western & Northern': [
    'Western Australia', 'Northern Territory',
  ],
};

const CLIMATE_BADGES: Record<string, string> = {
  'East Coast': 'Temperate / Subtropical',
  'Southern': 'Mediterranean / Cool Temperate',
  'Western & Northern': 'Arid / Tropical',
};

const TOP_STRAIN_TYPES: Record<string, string> = {
  'East Coast': 'Hybrid & Sativa',
  'Southern': 'Autoflower & Indica',
  'Western & Northern': 'Sativa & Heat-Resistant',
};

function getRegionForState(stateName: string): string {
  for (const [region, states] of Object.entries(REGIONS)) {
    if (states.includes(stateName)) return region;
  }
  return 'East Coast';
}

const CATEGORIES = [
  { name: 'Feminised Seeds', slug: 'feminized-seeds', desc: '99.9% female plants' },
  { name: 'Autoflower Seeds', slug: 'autoflowering-seeds', desc: 'Harvest in 8-10 weeks' },
  { name: 'CBD Seeds', slug: 'cbd-strains', desc: 'Therapeutic low-THC' },
  { name: 'High THC Seeds', slug: 'high-tch-seeds', desc: '25%+ THC potency' },
  { name: 'Indica Seeds', slug: 'indica-seeds', desc: 'Relaxing & sedating' },
  { name: 'Sativa Seeds', slug: 'sativa-seeds', desc: 'Energising & uplifting' },
];

export default function AustraliaHubPage() {
  const page = generateLocationPage('buy-cannabis-seeds-in-australia');
  const states = getAllStateSlugs();

  const statesByRegion: Record<string, typeof states> = {};
  for (const s of states) {
    const region = getRegionForState(s.state);
    if (!statesByRegion[region]) statesByRegion[region] = [];
    statesByRegion[region].push(s);
  }
  for (const region of Object.keys(statesByRegion)) {
    statesByRegion[region].sort((a, b) => a.state.localeCompare(b.state));
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumbs */}
      <nav className="text-[12px] text-[#192026]/50 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-[#275C53]">Home</Link>
        <span>/</span>
        <span className="text-[#275C53]">Buy Seeds in Australia</span>
      </nav>

      {/* Hero */}
      <header className="mb-12">
        <h1
          className="text-2xl sm:text-3xl lg:text-4xl text-[#275C53] mb-4"
          style={{ fontFamily: 'var(--font-patua)' }}
        >
          Buy Cannabis Seeds in Australia — All States &amp; Territories
        </h1>
        <p className="text-[#192026]/70 text-sm sm:text-base leading-relaxed max-w-4xl">
          Royal King Seeds ships premium cannabis seeds across Australia with discreet packaging and
          fast delivery. Choose from 1,200+ feminised, autoflower, CBD, and high-THC strains
          backed by our 95% germination guarantee. Find your state or territory below for local growing guides,
          climate tips, and strain recommendations tailored to Australian conditions.
        </p>
      </header>

      {/* Category Quick Links */}
      <section className="mb-14">
        <h2
          className="text-xl sm:text-2xl text-[#275C53] mb-6"
          style={{ fontFamily: 'var(--font-patua)' }}
        >
          Shop by Seed Type
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/product-category/${cat.slug}`}
              className="bg-white rounded-2xl border border-[#192026]/5 p-4 text-center hover:shadow-md hover:border-[#275C53]/20 transition-all group"
            >
              <p className="text-sm font-semibold text-[#275C53] group-hover:text-[#D7B65D] transition-colors">
                {cat.name}
              </p>
              <p className="text-[11px] text-[#192026]/50 mt-1">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Engine content */}
      {page && (
        <section className="mb-14">
          <div className="bg-white rounded-2xl border border-[#192026]/5 p-6 sm:p-8">
            <div
              className="prose prose-sm max-w-none text-[#192026]/80 prose-headings:text-[#275C53] prose-headings:font-normal prose-a:text-[#275C53] prose-a:no-underline hover:prose-a:underline prose-p:leading-relaxed prose-li:leading-relaxed prose-table:text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </div>
        </section>
      )}

      {/* State Grid by Region */}
      {Object.entries(REGIONS).map(([region]) => {
        const regionStates = statesByRegion[region] || [];
        if (regionStates.length === 0) return null;
        return (
          <section key={region} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <h2
                className="text-xl sm:text-2xl text-[#275C53]"
                style={{ fontFamily: 'var(--font-patua)' }}
              >
                {region}
              </h2>
              <span className="text-[11px] text-[#192026]/40 bg-[#275C53]/5 px-2.5 py-0.5 rounded-full">
                {CLIMATE_BADGES[region]}
              </span>
              <span className="text-[11px] text-[#275C53]/60 bg-[#275C53]/5 px-2.5 py-0.5 rounded-full">
                Top: {TOP_STRAIN_TYPES[region]}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {regionStates.map((s) => (
                <Link
                  key={s.slug}
                  href={`/seeds/australia/${s.slug}`}
                  className="bg-white rounded-2xl border border-[#192026]/5 p-4 hover:shadow-md hover:border-[#275C53]/20 transition-all group"
                >
                  <p className="text-sm font-semibold text-[#275C53] group-hover:text-[#D7B65D] transition-colors">
                    {s.state}
                  </p>
                  <p className="text-[11px] text-[#192026]/40 mt-1">
                    {CLIMATE_BADGES[getRegionForState(s.state)]}
                  </p>
                  <p className="text-[11px] text-[#275C53]/60 mt-0.5">
                    {TOP_STRAIN_TYPES[getRegionForState(s.state)]}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* Blog Links */}
      <section className="mb-12">
        <h2
          className="text-xl sm:text-2xl text-[#275C53] mb-5"
          style={{ fontFamily: 'var(--font-patua)' }}
        >
          Growing Guides for Australian Growers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { title: 'Cannabis Germination Guide', slug: 'cannabis-seed-identification-and-feminization' },
            { title: 'Grow Lights & Light Cycles', slug: 'cannabis-growing-lights-and-phases' },
            { title: 'Nutrient Deficiencies Guide', slug: 'cannabis-nutrient-deficiencies' },
            { title: 'Pest Management for Growers', slug: 'cannabis-pest-management' },
            { title: 'VPD & Humidity Control', slug: 'vpd-and-humidity-control-in-cannabis-cultivation' },
            { title: 'Harvesting & Trichome Guide', slug: 'cannabis-trichomes-and-harvesting' },
          ].map((guide) => (
            <Link
              key={guide.slug}
              href={`/blog/${guide.slug}`}
              className="bg-white rounded-2xl border border-[#192026]/5 p-4 hover:shadow-md hover:border-[#275C53]/20 transition-all group"
            >
              <p className="text-sm text-[#275C53] group-hover:text-[#D7B65D] transition-colors font-medium">
                {guide.title}
              </p>
              <p className="text-[11px] text-[#192026]/40 mt-1">Read guide</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#275C53] rounded-2xl p-8 sm:p-10 text-center mb-8">
        <h2
          className="text-xl sm:text-2xl text-white mb-3"
          style={{ fontFamily: 'var(--font-patua)' }}
        >
          Ready to Start Growing?
        </h2>
        <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
          Browse over 1,200 premium cannabis seeds with discreet shipping across Australia and our
          95% germination guarantee.
        </p>
        <Link
          href="/product-category/shop-all-cannabis-seeds"
          className="inline-block bg-[#D7B65D] text-[#1a3d36] font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#c9a94f] transition-colors"
        >
          Shop All Cannabis Seeds
        </Link>
      </section>

      {/* Structured Data — BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
              { '@type': 'ListItem', position: 2, name: 'Buy Cannabis Seeds in Australia', item: `${BASE}/seeds/australia` },
            ],
          }),
        }}
      />

      {/* Structured Data — CollectionPage with state list */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Buy Cannabis Seeds in Australia — All States & Territories',
            description:
              'Premium cannabis seeds shipped discreetly across Australia with germination guarantee.',
            url: `${BASE}/seeds/australia`,
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: states.length,
              itemListElement: states.map((s, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: `Buy Cannabis Seeds in ${s.state}`,
                url: `${BASE}/seeds/australia/${s.slug}`,
              })),
            },
          }),
        }}
      />

      {/* Structured Data — Online Store */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'OnlineStore',
            name: 'Royal King Seeds Australia',
            url: BASE,
            description: 'Australia\'s trusted online cannabis seed bank with discreet shipping to all states and territories.',
            areaServed: {
              '@type': 'Country',
              name: 'Australia',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Cannabis Seeds',
              itemListElement: CATEGORIES.map((c) => ({
                '@type': 'OfferCatalog',
                name: c.name,
                url: `${BASE}/product-category/${c.slug}`,
              })),
            },
          }),
        }}
      />
    </div>
  );
}
