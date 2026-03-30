// Australian Location Content Engine — Hub → State/Territory → City hierarchy
// RULE: "If this paragraph could exist on another page unchanged, do NOT include it."
// Deterministic hash-based content selection. No AI filler. Every sentence teaches or links.

export interface LocationPage {
  slug: string;
  title: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  pageType: 'hub' | 'state' | 'city' | 'legality';
  state?: string;
  city?: string;
}

// ── Helpers ──
function hash(s: string): number { let h = 0; for (let i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i); return Math.abs(h); }
function pick<T>(slug: string, arr: T[], salt = ''): T { return arr[hash(slug + salt) % arr.length]; }
function pickN<T>(slug: string, arr: T[], n: number, salt = ''): T[] {
  const c = [...arr]; const h = hash(slug + salt);
  for (let i = c.length - 1; i > 0; i--) { const j = Math.abs((h * (i + 1)) % (i + 1)); [c[i], c[j]] = [c[j], c[i]]; }
  return c.slice(0, n);
}
function titleCase(s: string): string { return s.replace(/\b\w/g, c => c.toUpperCase()); }

// ── Link shorthand ──
function a(text: string, href: string): string { return `<a href="${href}">${text}</a>`; }

const CL = {
  fem: a('feminised seeds', '/product-category/feminized-seeds'),
  auto: a('autoflower seeds', '/product-category/autoflowering-seeds'),
  ind: a('indica strains', '/product-category/indica-seeds'),
  sat: a('sativa genetics', '/product-category/sativa-seeds'),
  cbd: a('CBD seeds', '/product-category/cbd-strains'),
  thc: a('high-THC seeds', '/product-category/high-tch-seeds'),
  kush: a('kush varieties', '/product-category/kush-seeds'),
  outdoor: a('outdoor strains', '/product-category/best-strains-for-outdoor-growing'),
  all: a('full seed catalogue', '/product-category/shop-all-cannabis-seeds'),
  best: a('best sellers', '/product-category/best-seller'),
};

const BL = {
  germ: a('germination guide', '/blog/cannabis-seed-identification-and-feminization'),
  nutrients: a('nutrient deficiency guide', '/blog/cannabis-nutrient-deficiencies'),
  lights: a('grow light guide', '/blog/cannabis-growing-lights-and-phases'),
  autoGuide: a('autoflower growing guide', '/blog/autoflower-cannabis-seeds-and-growing-guide'),
  pest: a('pest management guide', '/blog/cannabis-pest-management'),
  vpd: a('VPD and humidity guide', '/blog/vpd-and-humidity-control-in-cannabis-cultivation'),
  harvest: a('harvest and trichome guide', '/blog/cannabis-trichomes-and-harvesting'),
  flower: a('flowering guide', '/blog/cannabis-flowering-and-budding'),
  train: a('training and topping guide', '/blog/cannabis-plant-pruning-and-topping'),
  terp: a('terpene guide', '/blog/pinene-and-terpenes-in-cannabis-and-aromatherapy'),
};

function locLink(text: string, slug: string): string { return a(text, `/seeds/australia/${slug}`); }
function stateLink(state: StateInfo): string { return a(`Buy seeds in ${state.name}`, `/seeds/australia/${state.slug}`); }
function cityLink(city: CityInfo, state: StateInfo): string { return a(`${city.name}, ${state.abbreviation}`, `/seeds/australia/${state.slug}/${city.slug}`); }
function hubLink(): string { return a('Buy Cannabis Seeds in Australia', '/seeds/australia'); }

// ── Types ──
type ClimateZone = 'tropical' | 'subtropical' | 'temperate' | 'arid' | 'semi-arid' | 'mediterranean' | 'oceanic' | 'monsoonal';
type LegalStatus = 'decriminalised' | 'illegal' | 'medical-only' | 'prohibited';
type Region = 'east-coast' | 'west-coast' | 'tropical-north' | 'southern' | 'central' | 'island';

interface CityInfo {
  name: string;
  slug: string;
  population?: string;
  note?: string;
}

interface StateInfo {
  name: string;
  abbreviation: string;
  slug: string;
  climate: ClimateZone;
  growingSeason: string;
  topStrainTypes: string[];
  frostFreeDays: number;
  cities: CityInfo[];
  legalStatus: LegalStatus;
  legalNote: string;
  region: Region;
  indoorOutdoor: string;
}

// ── Strain Pools by Climate ──
const STRAINS_BY_CLIMATE: Record<ClimateZone, string[]> = {
  'tropical': ['Durban Poison', 'Super Silver Haze', 'Amnesia Haze', 'Jack Herer', 'Sour Diesel', 'White Widow', 'Gorilla Glue', 'Northern Lights'],
  'subtropical': ['White Widow', 'Gorilla Glue', 'Northern Lights', 'Blue Dream', 'Durban Poison', 'Super Silver Haze', 'Sour Diesel', 'Trainwreck'],
  'temperate': ['Girl Scout Cookies', 'OG Kush', 'Gelato', 'Wedding Cake', 'Purple Kush', 'Zkittlez', 'MAC', 'Runtz'],
  'arid': ['Sour Diesel', 'Jack Herer', 'Super Silver Haze', 'Amnesia Haze', 'Afghan Kush', 'Durban Poison', 'Acapulco Gold', 'Tangie'],
  'semi-arid': ['Northern Lights', 'White Widow', 'AK-47', 'Critical Mass', 'Girl Scout Cookies', 'OG Kush', 'Gorilla Glue', 'Blue Dream'],
  'mediterranean': ['Blue Dream', 'Granddaddy Purple', 'Zkittlez', 'Runtz', 'Trainwreck', 'OG Kush', 'Gelato', 'Sherbet'],
  'oceanic': ['Northern Lights', 'White Widow', 'Blue Dream', 'AK-47', 'Critical Mass', 'Blueberry', 'Girl Scout Cookies', 'Purple Kush'],
  'monsoonal': ['Durban Poison', 'Super Silver Haze', 'Amnesia Haze', 'Jack Herer', 'White Widow', 'Gorilla Glue', 'Northern Lights', 'Sour Diesel'],
};

// ════════════════════════════════════════════════════════════
// STATE/TERRITORY DATA — ALL 8 STATES AND TERRITORIES
// ════════════════════════════════════════════════════════════

const STATE_DATA: Record<string, StateInfo> = {
  'new-south-wales': {
    name: 'New South Wales', abbreviation: 'NSW', slug: 'new-south-wales',
    climate: 'subtropical', growingSeason: 'October through April outdoors. Sydney and the coastal strip enjoy a long growing window, while the Blue Mountains and western tablelands face earlier frosts. The Southern Hemisphere season is the reverse of Northern Hemisphere growers — spring starts in September and autumn arrives in March.',
    topStrainTypes: ['balanced hybrids', 'sativa-dominant strains', 'mould-resistant genetics'],
    frostFreeDays: 280, legalStatus: 'illegal', legalNote: 'Cannabis is illegal for recreational use in New South Wales. Medical cannabis is available through the Therapeutic Goods Administration (TGA) Special Access Scheme with a prescription from an authorised doctor. Possession of small amounts may result in a cannabis caution for first offences. Seeds may be purchased as adult novelty souvenirs and collector genetics.',
    region: 'east-coast', indoorOutdoor: 'Both indoor and outdoor growing suit NSW well. The coastal strip from Sydney to Byron Bay offers excellent outdoor conditions with long, warm summers. Western NSW is drier and hotter — shade cloth and irrigation are essential. Indoor setups dominate in urban Sydney where space is limited.',
    cities: [
      { name: 'Sydney', slug: 'sydney', note: 'Subtropical climate, warm humid summers, mild winters. Harbour microclimate moderates extremes.' },
      { name: 'Newcastle', slug: 'newcastle', note: 'Coastal subtropical, slightly cooler than Sydney, good ocean breezes for airflow.' },
      { name: 'Wollongong', slug: 'wollongong', note: 'Coastal escarpment creates humid microclimate, strong sea breezes help with mould prevention.' },
      { name: 'Central Coast', slug: 'central-coast', note: 'Warm temperate, sheltered valleys between coast and ranges create ideal growing pockets.' },
      { name: 'Coffs Harbour', slug: 'coffs-harbour', note: 'Subtropical to tropical transition zone, warm year-round with summer rainfall.' },
      { name: 'Byron Bay', slug: 'byron-bay', note: 'Subtropical, warm and humid, easternmost point of Australia with strong cultural connection to cannabis.' },
    ],
  },
  victoria: {
    name: 'Victoria', abbreviation: 'VIC', slug: 'victoria',
    climate: 'oceanic', growingSeason: 'October through March outdoors, though Melbourne\'s famously changeable weather means growers must plan for sudden temperature drops even in summer. The Yarra Valley and Mornington Peninsula have distinct microclimates that favour different strain types.',
    topStrainTypes: ['fast-finishing indicas', 'autoflowers', 'cold-tolerant hybrids'],
    frostFreeDays: 240, legalStatus: 'illegal', legalNote: 'Cannabis is illegal for recreational use in Victoria. Victoria was the first Australian state to legalise medical cannabis in 2016. Access is available through the TGA Special Access Scheme. Possession of small amounts may result in a diversion program rather than criminal charges. Seeds may be purchased as adult novelty souvenirs.',
    region: 'southern', indoorOutdoor: 'Indoor growing is the more reliable option in Victoria due to the unpredictable weather and cooler autumn temperatures that can stall outdoor flowering. Autoflowers are the outdoor workhorse here — they finish before the cold April nights set in. Greenhouse cultivation is popular in regional Victoria.',
    cities: [
      { name: 'Melbourne', slug: 'melbourne', note: 'Oceanic climate, four seasons in one day, cool southerly winds can drop temps rapidly during summer.' },
      { name: 'Geelong', slug: 'geelong', note: 'Slightly warmer and drier than Melbourne, Bellarine Peninsula offers maritime moderation.' },
      { name: 'Ballarat', slug: 'ballarat', note: 'Elevated at 435m, notably cooler than Melbourne, frosts possible into November.' },
      { name: 'Bendigo', slug: 'bendigo', note: 'Inland central Victoria, hotter summers than Melbourne with drier conditions, good for outdoor sativas.' },
      { name: 'Shepparton', slug: 'shepparton', note: 'Goulburn Valley, warm continental climate, irrigation country with rich soils.' },
      { name: 'Mildura', slug: 'mildura', note: 'Semi-arid Murray River region, hot dry summers (40°C+ common), excellent for drought-tolerant strains.' },
    ],
  },
  queensland: {
    name: 'Queensland', abbreviation: 'QLD', slug: 'queensland',
    climate: 'tropical', growingSeason: 'Outdoor growing is possible year-round in northern Queensland. In the south-east (Brisbane, Gold Coast), the primary outdoor season runs from September through April. The wet season in the tropics (December–March) brings heavy rainfall and high humidity that demands mould-resistant genetics.',
    topStrainTypes: ['sativa-dominant hybrids', 'mould-resistant strains', 'tropical-adapted genetics'],
    frostFreeDays: 340, legalStatus: 'illegal', legalNote: 'Cannabis is illegal for recreational use in Queensland. Queensland maintains stricter drug enforcement than most Australian states. Medical cannabis is available through the TGA Special Access Scheme. Possession of any amount is a criminal offence. Seeds may be purchased as adult novelty souvenirs.',
    region: 'tropical-north', indoorOutdoor: 'Outdoor growing dominates in Queensland thanks to abundant sunshine and long, warm seasons. The main challenge is humidity management during the wet season — mould-resistant genetics and open bud structures are essential. Indoor growing with air conditioning and dehumidification is the premium path in the tropics.',
    cities: [
      { name: 'Brisbane', slug: 'brisbane', note: 'Subtropical, warm and humid summers, mild dry winters. River city with good growing conditions year-round.' },
      { name: 'Gold Coast', slug: 'gold-coast', note: 'Subtropical coastal, warm year-round, hinterland valleys offer sheltered growing spots.' },
      { name: 'Sunshine Coast', slug: 'sunshine-coast', note: 'Subtropical, slightly less humid than Gold Coast, hinterland altitude adds growing variety.' },
      { name: 'Cairns', slug: 'cairns', note: 'Tropical monsoonal, wet season December–April with heavy rainfall, dry season ideal for growing.' },
      { name: 'Townsville', slug: 'townsville', note: 'Tropical dry climate, less rainfall than Cairns, hot year-round with strong UV.' },
      { name: 'Toowoomba', slug: 'toowoomba', note: 'Elevated at 691m on the Great Dividing Range, notably cooler than coastal QLD, four seasons.' },
    ],
  },
  'western-australia': {
    name: 'Western Australia', abbreviation: 'WA', slug: 'western-australia',
    climate: 'mediterranean', growingSeason: 'October through April in the Perth region. The south-west enjoys a Mediterranean climate with dry summers and wet winters — ideal for outdoor cannabis when water management is handled. The Kimberley in the north has a tropical wet-dry season structure.',
    topStrainTypes: ['drought-resistant strains', 'sativa-dominant genetics', 'Mediterranean-adapted hybrids'],
    frostFreeDays: 300, legalStatus: 'decriminalised', legalNote: 'Western Australia has a Cannabis Intervention Requirement (CIR) system. Adults found with up to 10g of cannabis or a used smoking implement may receive a CIR notice (education session) rather than criminal charges. Cultivation remains illegal. Medical cannabis is available through the TGA. Seeds may be purchased as adult novelty souvenirs.',
    region: 'west-coast', indoorOutdoor: 'The Perth region and south-west WA are outstanding for outdoor growing — dry summers mean almost zero mould pressure, and the Mediterranean climate suits a wide range of genetics. Water management through drip irrigation is the main consideration. The Kimberley region in the north requires tropical growing strategies.',
    cities: [
      { name: 'Perth', slug: 'perth', note: 'Mediterranean climate, hot dry summers (often 35°C+), mild wet winters. Excellent outdoor growing conditions.' },
      { name: 'Fremantle', slug: 'fremantle', note: 'Maritime-moderated Perth suburb, famous Fremantle Doctor sea breeze cools summer afternoons.' },
      { name: 'Mandurah', slug: 'mandurah', note: 'Warm Mediterranean, slightly cooler than Perth, coastal humidity is moderate.' },
      { name: 'Bunbury', slug: 'bunbury', note: 'Warm temperate to Mediterranean, good rainfall balance, south-west region.' },
      { name: 'Geraldton', slug: 'geraldton', note: 'Semi-arid Mediterranean, hotter and drier than Perth, strong winds require sheltered growing.' },
      { name: 'Broome', slug: 'broome', note: 'Tropical with distinct wet and dry seasons, Kimberley region, extreme heat from October–March.' },
    ],
  },
  'south-australia': {
    name: 'South Australia', abbreviation: 'SA', slug: 'south-australia',
    climate: 'mediterranean', growingSeason: 'October through April in Adelaide and the surrounding wine regions. The Barossa Valley and McLaren Vale have microclimates well-suited to outdoor cannabis. Northern SA transitions to arid desert conditions where outdoor growing requires significant water infrastructure.',
    topStrainTypes: ['heat-tolerant sativas', 'drought-resistant genetics', 'autoflowers'],
    frostFreeDays: 270, legalStatus: 'decriminalised', legalNote: 'South Australia was the first Australian state to decriminalise cannabis in 1987 via the Cannabis Expiation Notice (CEN) system. Adults found with up to 25g of cannabis or one non-hydroponic plant receive an expiation notice (fine) rather than criminal charges. Medical cannabis is available through the TGA. Seeds may be purchased as adult novelty souvenirs.',
    region: 'southern', indoorOutdoor: 'South Australia\'s dry climate is a natural advantage for outdoor growers — mould pressure is minimal compared to eastern states. The Adelaide Hills and wine regions offer excellent soil and microclimates. Indoor growing is popular in Adelaide\'s urban areas for privacy and year-round production.',
    cities: [
      { name: 'Adelaide', slug: 'adelaide', note: 'Mediterranean climate, hot dry summers, cool wet winters. Wine region soil quality extends to cannabis cultivation.' },
      { name: 'Mount Gambier', slug: 'mount-gambier', note: 'Cooler oceanic climate near the Victorian border, volcanic soil is exceptionally fertile.' },
      { name: 'Whyalla', slug: 'whyalla', note: 'Semi-arid, hot summers with low humidity, Spencer Gulf coast provides some moderation.' },
      { name: 'Murray Bridge', slug: 'murray-bridge', note: 'Murray River region, warm semi-arid climate, good water access for irrigation.' },
      { name: 'Port Augusta', slug: 'port-augusta', note: 'Arid gateway to the outback, extreme summer heat (45°C+ possible), indoor growing strongly recommended.' },
    ],
  },
  tasmania: {
    name: 'Tasmania', abbreviation: 'TAS', slug: 'tasmania',
    climate: 'oceanic', growingSeason: 'November through March outdoors. Tasmania has Australia\'s shortest growing season but also its coolest, most temperate conditions. The east coast (Hobart to Bicheno) is drier and warmer than the west coast. Cool nights in late February and March accelerate trichome development and enhance terpene profiles.',
    topStrainTypes: ['autoflowers', 'fast-finishing indicas', 'cold-hardy genetics'],
    frostFreeDays: 190, legalStatus: 'illegal', legalNote: 'Cannabis is illegal for recreational use in Tasmania. The state maintains relatively strict enforcement. Medical cannabis is available through the TGA Special Access Scheme. Tasmania has a long history of legal poppy cultivation for pharmaceuticals. Seeds may be purchased as adult novelty souvenirs.',
    region: 'island', indoorOutdoor: 'Indoor growing is the reliable option in Tasmania due to the short outdoor season and unpredictable weather. Autoflowers are the go-to for outdoor growers — they finish before the cold April nights arrive. The east coast offers the best outdoor potential with more sunshine and less rainfall than the west.',
    cities: [
      { name: 'Hobart', slug: 'hobart', note: 'Oceanic climate moderated by the Derwent Estuary, cool summers averaging 21°C, frosts possible into November.' },
      { name: 'Launceston', slug: 'launceston', note: 'Northern Tasmania, slightly warmer than Hobart, Tamar Valley offers sheltered growing conditions.' },
      { name: 'Devonport', slug: 'devonport', note: 'North-west coast, moderate maritime climate, Bass Strait influence.' },
      { name: 'Burnie', slug: 'burnie', note: 'North-west coast, wetter than east coast, cool maritime conditions favour fast-finishing varieties.' },
      { name: 'Ulverstone', slug: 'ulverstone', note: 'North-west coast between Devonport and Burnie, sheltered coastal position.' },
    ],
  },
  'northern-territory': {
    name: 'Northern Territory', abbreviation: 'NT', slug: 'northern-territory',
    climate: 'monsoonal', growingSeason: 'Year-round growing is possible but the dry season (May–October) produces the best results. The wet season (November–April) brings extreme humidity, cyclone risk, and mould pressure that challenges even the hardiest genetics. Alice Springs in the Red Centre has a completely different arid climate from tropical Darwin.',
    topStrainTypes: ['tropical sativas', 'mould-resistant genetics', 'heat-tolerant strains'],
    frostFreeDays: 365, legalStatus: 'decriminalised', legalNote: 'The Northern Territory has partially decriminalised cannabis. Adults found with up to 50g of cannabis plant material or 10g of resin, or two non-hydroponic plants may receive an infringement notice (fine of $200) rather than criminal charges. Medical cannabis is available through the TGA. Seeds may be purchased as adult novelty souvenirs.',
    region: 'tropical-north', indoorOutdoor: 'The dry season (May–October) is prime outdoor growing time in the Top End — lower humidity, no cyclones, and consistent sunshine. During the wet season, indoor growing with heavy dehumidification is the only practical path. In Alice Springs, the arid desert climate allows year-round outdoor growing with proper irrigation.',
    cities: [
      { name: 'Darwin', slug: 'darwin', note: 'Tropical monsoonal, wet season humidity can exceed 80%, dry season is ideal with consistent 30°C+ days.' },
      { name: 'Alice Springs', slug: 'alice-springs', note: 'Arid desert climate, extreme heat in summer (45°C+), cold winter nights (below 0°C possible), very low humidity.' },
      { name: 'Katherine', slug: 'katherine', note: 'Tropical, slightly less humid than Darwin, gateway to the outback. Wet-dry seasonal pattern.' },
      { name: 'Palmerston', slug: 'palmerston', note: 'Darwin satellite city, same tropical monsoonal climate, suburban growing environment.' },
      { name: 'Tennant Creek', slug: 'tennant-creek', note: 'Semi-arid, central Australian outback, hot dry climate with minimal rainfall.' },
    ],
  },
  'australian-capital-territory': {
    name: 'Australian Capital Territory', abbreviation: 'ACT', slug: 'australian-capital-territory',
    climate: 'temperate', growingSeason: 'October through March outdoors. Canberra\'s inland continental climate means hot summers and cold winters with regular frosts from April through September. The growing season is well-defined, and the dry autumn air is excellent for late-flowering strains.',
    topStrainTypes: ['balanced hybrids', 'cold-tolerant indicas', 'autoflowers'],
    frostFreeDays: 210, legalStatus: 'decriminalised', legalNote: 'The ACT is the only Australian jurisdiction to have decriminalised personal cannabis use and home cultivation. Since January 2020, ACT residents aged 18+ may possess up to 50g of dried cannabis and grow up to two plants per person (four per household). Cannabis remains illegal under federal law (which applies concurrently in the ACT), creating a legal grey area. Selling, sharing, and public use remain prohibited.',
    region: 'central', indoorOutdoor: 'The ACT\'s unique legal framework makes it the most accessible jurisdiction for home growing in Australia. Both indoor and outdoor setups are viable. Outdoor growers work within a clear October–March window, while indoor cultivators can produce year-round. The dry climate minimises mould risk but winter frosts are severe.',
    cities: [
      { name: 'Canberra', slug: 'canberra', note: 'Temperate continental, hot summers (35°C+), cold winters with heavy frosts. Australia\'s national capital and most cannabis-friendly jurisdiction.' },
      { name: 'Queanbeyan', slug: 'queanbeyan', note: 'Technically in NSW but borders the ACT, similar continental climate. NSW laws apply here, not ACT laws.' },
      { name: 'Belconnen', slug: 'belconnen', note: 'Northern Canberra district, Lake Ginninderra moderation, established suburban growing community.' },
      { name: 'Woden Valley', slug: 'woden-valley', note: 'Southern Canberra district, slightly sheltered by hills, good growing microclimate.' },
      { name: 'Tuggeranong', slug: 'tuggeranong', note: 'Southernmost Canberra district, frost pocket — coldest area in the ACT, indoor growing recommended.' },
    ],
  },
};

// ── Region grouping ──
const REGIONS: Record<Region, string> = {
  'east-coast': 'East Coast',
  'west-coast': 'West Coast',
  'tropical-north': 'Tropical North',
  'southern': 'Southern',
  'central': 'Central',
  'island': 'Island',
};

function getStatesByRegion(): Record<Region, StateInfo[]> {
  const grouped: Record<Region, StateInfo[]> = {
    'east-coast': [], 'west-coast': [], 'tropical-north': [], 'southern': [], 'central': [], 'island': [],
  };
  for (const state of Object.values(STATE_DATA)) {
    grouped[state.region].push(state);
  }
  for (const region of Object.keys(grouped) as Region[]) {
    grouped[region].sort((a, b) => a.name.localeCompare(b.name));
  }
  return grouped;
}

// ── Climate descriptions ──
const CLIMATE_DESCRIPTIONS: Record<ClimateZone, string> = {
  'tropical': 'Hot and humid year-round with distinct wet and dry seasons. Mould and botrytis are the primary outdoor threats during the wet. Sativa-dominant genetics with open bud structures handle these conditions best. The dry season offers outstanding growing conditions.',
  'subtropical': 'Warm, humid summers with mild, dry winters. Long growing seasons allow a wide range of genetics to finish outdoors. Mould management during late summer flowering is the main challenge. The transition between tropical and temperate zones creates favourable growing conditions.',
  'temperate': 'Four distinct seasons with warm summers and cold winters. The outdoor window runs October through March, with strain-dependent harvest timing. Frost risk defines season boundaries. Indoor growing provides year-round production.',
  'arid': 'Extreme heat with very low humidity. Outstanding for preventing mould but requires aggressive irrigation and shade management when temperatures exceed 40°C. The intense UV drives exceptional trichome production. Water is the limiting factor.',
  'semi-arid': 'Hot, dry summers with mild winters and low to moderate rainfall. Good natural mould resistance with moderate water requirements. The inland climate creates large day-night temperature differentials that enhance terpene development.',
  'mediterranean': 'Hot, dry summers with cool, wet winters. The dry summer flowering period is ideal for cannabis — minimal mould pressure and consistent sunshine. Water management through drip irrigation is essential. Many of the world\'s finest wine and cannabis regions share this climate type.',
  'oceanic': 'Mild temperatures year-round with moderate rainfall. Cool summers limit the range of outdoor genetics to fast-finishing varieties and autoflowers. The even temperatures produce slow, dense growth with excellent flavour profiles.',
  'monsoonal': 'Tropical climate with a pronounced wet season (November–April) and dry season (May–October). The dry season is prime outdoor growing time — low humidity and consistent heat. The wet season demands indoor growing with serious dehumidification.',
};

// ════════════════════════════════════════════════════════════
// CONTENT GENERATORS
// ════════════════════════════════════════════════════════════

// ── Opening templates — varied by hash ──
const STATE_OPENERS: ((state: StateInfo) => string)[] = [
  (s) => `${s.name} offers ${s.frostFreeDays} frost-free days for most growers — and those days define which genetics finish outdoors and which need the controlled environment of an indoor setup. The Southern Hemisphere season means outdoor planting starts in October and harvest wraps by April.`,
  (s) => `Growing cannabis in ${s.name} means working with a ${s.climate} climate where ${s.growingSeason}`,
  (s) => `The ${s.frostFreeDays}-day frost-free window in ${s.name} sets the boundaries for outdoor growers. ${s.indoorOutdoor}`,
  (s) => `${s.name} growers face a specific set of conditions: ${CLIMATE_DESCRIPTIONS[s.climate].toLowerCase()} That shapes everything from strain selection to harvest timing.`,
  (s) => `Cannabis cultivation in ${s.name} follows the rhythm of a ${s.climate} climate. ${s.growingSeason} These are the parameters that determine what you can grow and how you should grow it.`,
];

const CITY_OPENERS: ((city: CityInfo, state: StateInfo) => string)[] = [
  (c, s) => `${c.name} growers operate in ${s.name}'s ${s.climate} climate zone${c.note ? ` — specifically, ${c.note.toLowerCase()}` : ''}. That local microclimate shapes which seeds perform best and how you should set up your grow.`,
  (c, s) => `Buying cannabis seeds in ${c.name}, ${s.abbreviation} means choosing genetics that handle the local conditions${c.note ? `: ${c.note.toLowerCase()}` : ` typical of ${s.name}'s ${s.climate} zone`}.`,
  (c, s) => `${c.name} sits in ${s.name}'s ${REGIONS[s.region].toLowerCase()} region${c.note ? `, where ${c.note.toLowerCase()}` : ''}. Understanding these local conditions is the difference between a successful harvest and a disappointing one.`,
  (c, s) => `For ${c.name} growers looking for cannabis seeds, the local growing environment matters more than most online guides acknowledge${c.note ? `. ${c.note}.` : `.`} Here is what you need to know.`,
  (c, s) => `Cannabis seed selection for ${c.name}, ${s.name} comes down to matching genetics to your specific conditions. ${c.note || `The ${s.climate} climate of ${s.name} sets the baseline.`}`,
];

// ── Hub Page Generator ──
function generateHubPage(): LocationPage {
  const slug = 'australia';
  const byRegion = getStatesByRegion();

  let statesByRegionHtml = '';
  for (const [region, label] of Object.entries(REGIONS)) {
    const states = byRegion[region as Region];
    if (states.length === 0) continue;
    statesByRegionHtml += `<h3>${label}</h3>\n<ul>\n`;
    for (const state of states) {
      statesByRegionHtml += `<li>${a(`Buy Cannabis Seeds in ${state.name}`, `/seeds/australia/${state.slug}`)}</li>\n`;
    }
    statesByRegionHtml += `</ul>\n`;
  }

  const content = `
<h1>Buy Cannabis Seeds in Australia — All States &amp; Territories, Discreet Shipping</h1>

<p>Royal King Seeds ships cannabis seeds to all Australian states and territories with discreet, trackable packaging. Australia's cannabis landscape is evolving — the ACT has decriminalised personal cultivation, South Australia and the Northern Territory have expiation notice systems for small amounts, and medical cannabis access continues to expand nationwide through the TGA. Ungerminated cannabis seeds are available for purchase as adult novelty souvenirs and collector genetics across Australia.</p>

<p>Whether you grow in a spare room in Melbourne or run an outdoor plot in Queensland's Sunshine Coast hinterland, seed selection starts with understanding your local climate, legal framework, and growing goals. Australia's position in the Southern Hemisphere means the outdoor season runs from October through April — the reverse of what Northern Hemisphere guides describe. This page connects you to state-specific growing guides, strain recommendations matched to your region, and the ${CL.all} in our catalogue.</p>

<p>We stock ${CL.fem}, ${CL.auto}, ${CL.ind}, ${CL.sat}, ${CL.cbd}, and ${CL.thc} — all from proven genetics with verified germination rates. Every order ships in unmarked packaging with no external branding.</p>

<h2>Cannabis Seeds by State &amp; Territory</h2>
<p>Click your state or territory below for climate-specific strain recommendations, growing tips for your region, legal status, and city-level guides.</p>

${statesByRegionHtml}

<h2>Cannabis Seeds by Climate Zone</h2>

<h3>Tropical States (Queensland, Northern Territory)</h3>
<p>Mould resistance is non-negotiable in tropical Australia. Queensland and the Top End of the NT see humidity above 80% during the wet season, and summer rainfall can destroy crops in days. Choose strains with open bud structures and natural botrytis resistance — Durban Poison, Super Silver Haze, and Jack Herer handle these conditions well. ${CL.outdoor} bred for humidity tolerance are your safest bet. The dry season (May–October) in the tropics offers outstanding growing conditions with consistent heat and low humidity. Timing your grow around the seasons is the key to success in northern Australia.</p>

<h3>Subtropical East Coast (NSW, South-East QLD)</h3>
<p>The east coast from Sydney to the Gold Coast enjoys warm, humid summers and mild winters with a growing season that runs from September through April. ${CL.sat} and balanced hybrids thrive here. The main challenge is late-summer humidity during flowering — mould-resistant genetics and good airflow management are essential. Blue Dream, White Widow, and Gorilla Glue are proven performers in these conditions. Indoor growing is popular in Sydney and Brisbane for year-round production.</p>

<h3>Mediterranean &amp; Dry States (WA, SA)</h3>
<p>Western Australia and South Australia offer outstanding outdoor growing conditions — hot, dry summers mean almost zero mould pressure. The Mediterranean climate in Perth and Adelaide is similar to California and the south of France, where some of the world's finest cannabis is grown. Sour Diesel, Jack Herer, and Afghan Kush thrive in arid conditions. Water management through drip irrigation is the main consideration. Browse our ${CL.sat} for genetics that love the sun.</p>

<h3>Temperate &amp; Oceanic States (VIC, TAS, ACT)</h3>
<p>Victoria, Tasmania, and the ACT have Australia's coolest growing conditions. ${CL.auto} are the reliable outdoor choice — they finish in 70–85 days regardless of light schedule and beat the early autumn frosts. For photoperiod growers, fast-finishing indicas like Northern Lights and Blueberry can work when started indoors in September and transplanted after the last frost. Indoor growing is the year-round standard. Our ${BL.autoGuide} covers the specific techniques that maximise yield in shorter seasons. Tasmania's cool nights accelerate trichome development, producing cannabis with exceptional flavour profiles.</p>

<h3>Arid Interior (Outback Regions)</h3>
<p>Alice Springs and outback regions of SA, WA, and NSW experience extreme heat with very low humidity. The UV intensity in central Australia is among the highest in the world — driving heavy trichome production as a natural plant defence. The trade-off is extreme temperatures (above 45°C in summer) that require shade structures, drip irrigation, and heat-tolerant genetics. Our ${CL.auto} and fast-finishing ${CL.ind} handle these conditions best.</p>

<h2>Southern Hemisphere Growing Calendar</h2>
<p>Australian growers follow a reversed calendar from Northern Hemisphere guides. Here is the outdoor timeline:</p>
<ul>
<li><strong>September–October:</strong> Start seeds indoors, prepare outdoor sites. Last frosts pass in temperate regions.</li>
<li><strong>November–December:</strong> Transplant outdoors, vegetative growth phase. Days are longest around the December solstice.</li>
<li><strong>January–February:</strong> Peak vegetative growth transitions to flowering as days begin shortening after the solstice.</li>
<li><strong>March–April:</strong> Harvest window for most photoperiod strains. Autoflowers may have finished earlier.</li>
<li><strong>May–October:</strong> Indoor growing season. In tropical regions, the dry season (May–October) is actually the best outdoor window.</li>
</ul>

<h2>Shipping &amp; Delivery</h2>
<p>Every Royal King Seeds order ships in discreet, unmarked packaging with no cannabis-related branding visible on the outside. We offer tracked shipping to all Australian states and territories with delivery typically within 7–14 business days. Seeds are packaged in crush-proof containers to ensure they arrive in perfect condition. Orders over $150 AUD qualify for free shipping.</p>

<h2>Frequently Asked Questions</h2>

<h3>Is it legal to buy cannabis seeds in Australia?</h3>
<p>Cannabis seeds are sold as adult novelty souvenirs and collector genetics. Germination and cultivation laws vary by state and territory — the ACT allows personal cultivation of up to two plants per person, while most other jurisdictions prohibit cultivation. Check your ${a('state-specific guide', '/seeds/australia')} for local regulations.</p>

<h3>What are the best cannabis seeds for beginners in Australia?</h3>
<p>For first-time growers, ${CL.auto} simplify the process by removing light schedule management. Northern Lights Auto and White Widow Auto are forgiving of beginner mistakes and finish in 8–10 weeks from seed. They also suit Australia's variable climates since they are not dependent on specific day-length triggers. Our ${BL.germ} walks through the process step by step.</p>

<h3>Which seeds produce the highest yield?</h3>
<p>Yield depends on genetics, growing environment, and technique. Indoors, Gorilla Glue, Girl Scout Cookies, and Blue Dream consistently produce 400–600g per square metre under quality LED lighting. Outdoor yields in Australian conditions can reach 1kg+ per plant with ${CL.outdoor} genetics in favourable climates. Our ${BL.train} covers canopy management techniques that maximise production.</p>

<h3>How should I store cannabis seeds?</h3>
<p>Cool, dark, and dry — aim for 5–10°C with relative humidity under 10%. A sealed container in the refrigerator works for storage up to 2–3 years. Avoid freezing, which can damage cell walls. Properly stored seeds maintain 80%+ germination rates for years.</p>

<h3>Do you ship to all Australian states and territories?</h3>
<p>Yes. Royal King Seeds ships to every Australian state and territory with discreet, tracked packaging. Delivery times vary by location but typically run 7–14 business days. We also ship to regional and remote areas.</p>

<h3>What is the difference between feminised and autoflower seeds?</h3>
<p>${CL.fem} produce only female plants (the ones that make flower) and follow a photoperiod light schedule — they flower when daylight drops below roughly 12 hours. In Australia, this happens naturally from February as autumn approaches. ${CL.auto} flower based on age rather than light, finishing in 8–12 weeks regardless of schedule. Autoflowers are simpler to grow; feminised photoperiods typically produce larger yields. Our ${BL.autoGuide} explains the differences in detail.</p>
`;

  return {
    slug: 'australia',
    title: 'Buy Cannabis Seeds in Australia — All States & Territories, Discreet Shipping',
    content,
    metaTitle: 'Buy Cannabis Seeds in Australia | All States & Territories | Royal King Seeds',
    metaDescription: 'Shop cannabis seeds with discreet shipping to all Australian states and territories. Feminised, autoflower, indica, sativa, and CBD seeds. State-specific growing guides and strain recommendations.',
    pageType: 'hub',
  };
}

// ── State Page Generator ──
function generateStatePage(stateKey: string): LocationPage | null {
  const state = STATE_DATA[stateKey];
  if (!state) return null;

  const slug = state.slug;
  const opener = pick(slug, STATE_OPENERS, 'opener');
  const strains = pickN(slug, STRAINS_BY_CLIMATE[state.climate], 5, 'strains');
  const relatedStates = getRelatedStatesInternal(stateKey);

  // Pick blog references deterministically
  const blogRefs = pickN(slug, [
    `Our ${BL.germ} covers the paper towel method and transplanting steps for maximum success rates.`,
    `Managing nutrients through each growth stage prevents the most common issues — see our ${BL.nutrients} for diagnostic charts.`,
    `Lighting decisions shape everything from energy cost to bud density. Our ${BL.lights} breaks down the options.`,
    `The ${BL.autoGuide} covers techniques specific to automatic genetics that apply directly to ${state.name}'s growing conditions.`,
    `Pest pressure varies by season and region. Our ${BL.pest} identifies the threats most relevant to ${REGIONS[state.region].toLowerCase()} growers.`,
    `Temperature and humidity management through VPD is especially important in ${state.name}'s ${state.climate} climate. Our ${BL.vpd} explains the maths.`,
    `Knowing when to harvest makes or breaks the final product. Our ${BL.harvest} covers trichome maturity and timing.`,
    `The flowering stretch can surprise ${state.name} growers working in tight spaces. Our ${BL.flower} explains stage-by-stage management.`,
    `Canopy management through topping and LST shapes yield distribution. Our ${BL.train} walks through the techniques.`,
    `Terpene preservation during dry and cure determines flavour quality. Our ${BL.terp} covers the major compounds.`,
  ], 3, 'blogrefs');

  // Strain recommendations
  let strainsHtml = '';
  for (let i = 0; i < strains.length; i++) {
    const strain = strains[i];
    const desc = pick(slug + strain, [
      `A proven performer in ${state.climate} conditions. Finishes reliably within the ${state.frostFreeDays}-day outdoor window and handles ${state.name}'s typical growing challenges.`,
      `Well-suited for ${state.name} growers — the genetics handle ${state.climate === 'tropical' || state.climate === 'subtropical' || state.climate === 'monsoonal' ? 'high humidity without dense bud rot issues' : state.climate === 'oceanic' ? 'cool nights and shorter growing windows without stalling' : state.climate === 'arid' || state.climate === 'semi-arid' ? 'heat stress and low water availability' : 'the temperature range and seasonal shifts typical of the region'}.`,
      `Consistent results indoors and out in ${state.abbreviation}. The terpene profile develops fully when given ${state.climate === 'oceanic' || state.climate === 'temperate' ? 'the cool night temperatures' : state.climate === 'arid' || state.climate === 'semi-arid' ? 'the intense UV exposure' : 'adequate flowering time'} that ${state.name} provides.`,
    ], 'sdesc' + i);
    strainsHtml += `<h3>${i + 1}. ${strain}</h3>\n<p>${desc}</p>\n`;
  }

  // City links
  let citiesHtml = '<ul>\n';
  for (const city of state.cities) {
    citiesHtml += `<li>${a(`Buy Cannabis Seeds in ${city.name}, ${state.abbreviation}`, `/seeds/australia/${state.slug}/${city.slug}`)}${city.note ? ` — ${city.note}` : ''}</li>\n`;
  }
  citiesHtml += '</ul>';

  // Related states
  let relatedHtml = '<ul>\n';
  for (const rel of relatedStates) {
    relatedHtml += `<li>${a(`Buy Cannabis Seeds in ${rel.name}`, `/seeds/australia/${rel.slug}`)}</li>\n`;
  }
  relatedHtml += '</ul>';

  // Legal section
  const legalStatusLabel = state.legalStatus === 'decriminalised' ? 'Decriminalised' :
    state.legalStatus === 'medical-only' ? 'Medical Only' :
    state.legalStatus === 'illegal' ? 'Illegal (Medical Access via TGA)' : 'Prohibited';

  // Indoor vs outdoor section
  const indoorOutdoorSection = pick(slug, [
    `<h2>Indoor vs Outdoor Growing in ${state.name}</h2>
<p>${state.indoorOutdoor}</p>
<p><strong>Indoor advantages in ${state.abbreviation}:</strong> Climate control eliminates the ${state.climate === 'tropical' || state.climate === 'subtropical' || state.climate === 'monsoonal' ? 'humidity and mould risk that define outdoor growing in this region' : state.climate === 'oceanic' || state.climate === 'temperate' ? 'short season that limits strain selection outdoors' : state.climate === 'arid' || state.climate === 'semi-arid' ? 'extreme heat that stalls plant growth above 35°C' : 'weather variability that can damage outdoor crops'}. Year-round growing means 4–6 harvests per year with ${CL.auto} or 3–4 with photoperiod ${CL.fem}.</p>
<p><strong>Outdoor advantages in ${state.abbreviation}:</strong> Natural sunlight delivers the full spectrum that no grow light perfectly replicates. ${state.frostFreeDays > 300 ? `With ${state.frostFreeDays} frost-free days, ${state.name} growers can finish even long-flowering sativas outdoors.` : state.frostFreeDays > 230 ? `The ${state.frostFreeDays}-day frost-free window accommodates most indica-dominant hybrids and autoflowers.` : `The ${state.frostFreeDays}-day frost-free season limits outdoor options to autoflowers and fast-finishing indicas.`}</p>`,
    `<h2>Growing Environment: Indoor or Outdoor in ${state.name}?</h2>
<p>${state.indoorOutdoor}</p>
<p>The ${state.climate} climate of ${state.name} shapes this decision. ${state.frostFreeDays > 300 ? 'The long season opens outdoor growing to a wide range of genetics — from fast autoflowers to 12-week sativas.' : state.frostFreeDays > 230 ? 'The moderate season supports outdoor grows for growers who choose their genetics carefully and start seeds indoors before transplanting.' : 'The shorter frost-free window makes indoor growing the default for most growers. Autoflowers are the outdoor exception.'}</p>
<p>For indoor setups in ${state.name}, our ${BL.lights} covers LED vs HPS selection and the PAR targets that drive yield. Outdoor growers should review our ${CL.outdoor} catalogue for genetics bred to handle real-world conditions.</p>`,
  ], 'indoor-outdoor');

  // FAQ section
  const faqs = [
    { q: `Can I legally grow cannabis in ${state.name}?`, a: state.legalNote },
    { q: `What are the best cannabis seeds for ${state.name}'s climate?`, a: `${state.name}'s ${state.climate} climate (${state.frostFreeDays} frost-free days) favours ${state.topStrainTypes.join(', ')}. Our top recommendations are ${strains.slice(0, 3).join(', ')} — all selected for performance in ${state.name}'s specific conditions.` },
    { q: `When should I start growing cannabis in ${state.name}?`, a: `${state.growingSeason} For indoor grows, start any time — climate control makes season irrelevant. For outdoor grows, start seeds indoors in September and transplant after the last frost passes (typically October in most of ${state.name}).` },
    { q: `Do you ship cannabis seeds to ${state.name}?`, a: `Yes. Royal King Seeds ships to ${state.name} with discreet, tracked packaging. Delivery typically takes 7–14 business days. Seeds ship in unmarked, crush-proof containers.` },
    pick(slug, [
      { q: `Is it better to grow indoors or outdoors in ${state.name}?`, a: state.indoorOutdoor },
      { q: `What is the best autoflower strain for ${state.name}?`, a: `For ${state.name}'s ${state.climate} conditions, ${strains[0]} Auto and ${strains[1]} Auto are strong choices. Autoflowers finish in 8–12 weeks regardless of light schedule, which is especially valuable ${state.frostFreeDays < 230 ? `given ${state.name}'s shorter frost-free window.` : `for growers wanting multiple harvests per season in ${state.name}.`}` },
    ], 'faq-extra'),
  ];

  let faqHtml = '';
  for (const faq of faqs) {
    faqHtml += `<h3>${faq.q}</h3>\n<p>${faq.a}</p>\n`;
  }

  const content = `
<h1>Buy Cannabis Seeds in ${state.name} — ${state.topStrainTypes[0].charAt(0).toUpperCase() + state.topStrainTypes[0].slice(1)} for ${titleCase(state.climate.replace('-', ' '))} Growing</h1>

<p>${opener(state)}</p>

<p>Royal King Seeds ships ${CL.fem}, ${CL.auto}, and specialty genetics directly to ${state.name} addresses with discreet packaging and tracked delivery. Every strain recommendation on this page is selected for ${state.name}'s ${state.climate} climate zone — not generic advice repackaged with a state name on it.</p>

<h2>Why ${state.name} Growers Choose Royal King Seeds</h2>
<p>${pick(slug, [
  `We match genetics to growing conditions — not the other way around. The ${state.topStrainTypes.join(', ')} in our catalogue are selected for growers who deal with ${state.name}'s specific ${state.climate} challenges. Browse our ${CL.all} filtered for ${state.climate} performance, or explore the ${CL.best} that ${state.abbreviation} customers order most.`,
  `Seed selection for ${state.name} is not about picking the strain with the highest THC number — it is about choosing genetics that perform in ${state.frostFreeDays} frost-free days with ${state.climate === 'tropical' || state.climate === 'subtropical' || state.climate === 'monsoonal' ? 'high humidity pressure' : state.climate === 'arid' || state.climate === 'semi-arid' ? 'extreme heat exposure' : state.climate === 'oceanic' || state.climate === 'temperate' ? 'compressed growing seasons' : 'variable weather patterns'}. Our ${CL.best} reflect what actually works in this region, not what is trending on social media.`,
  `Growers across ${state.name} come back to Royal King Seeds for verified genetics, germination guarantees, and strains that actually handle ${state.climate} conditions. Our ${CL.all} includes the proven performers listed below along with hundreds of other options for ${state.abbreviation} growing.`,
], 'why')}</p>

<h2>Climate &amp; Growing Season in ${state.name}</h2>
<p>${state.growingSeason}</p>
<p><strong>Climate zone:</strong> ${titleCase(state.climate.replace('-', ' '))}</p>
<p><strong>Average frost-free days:</strong> ${state.frostFreeDays}</p>
<p><strong>Climate profile:</strong> ${CLIMATE_DESCRIPTIONS[state.climate]}</p>

<h2>Top 5 Recommended Strains for ${state.name}</h2>
<p>These strains are selected specifically for ${state.name}'s ${state.climate} climate. Each has a track record of performing well in the conditions ${state.abbreviation} growers face.</p>
${strainsHtml}
<p>Browse more options in our ${CL.all} — filter by ${CL.ind}, ${CL.sat}, ${CL.auto}, or ${CL.cbd} to find the right genetics for your ${state.name} grow.</p>

${indoorOutdoorSection}

<h2>Cannabis Laws in ${state.name}</h2>
<p><strong>Status:</strong> ${legalStatusLabel}</p>
<p>${state.legalNote}</p>
<p>Cannabis seeds are sold as adult novelty souvenirs and collector genetics. For a detailed legal breakdown, see our ${a(`${state.name} cannabis legality guide`, `/seeds/australia/${state.slug}/is-marijuana-legal`)}.</p>

<h2>Buy Cannabis Seeds in ${state.name} Cities</h2>
<p>Local growing conditions vary across ${state.name}. Click your city for climate-specific recommendations:</p>
${citiesHtml}

<h2>Other Australian States &amp; Territories</h2>
<p>Explore cannabis seed guides for other parts of Australia:</p>
${relatedHtml}

<h2>Growing Resources for ${state.name}</h2>
${blogRefs.map(ref => `<p>${ref}</p>`).join('\n')}

<h2>Frequently Asked Questions — ${state.name}</h2>
${faqHtml}

<p>${hubLink()} | ${a('Shop All Seeds', '/product-category/shop-all-cannabis-seeds')}</p>
`;

  return {
    slug: state.slug,
    title: `Buy Cannabis Seeds in ${state.name}`,
    content,
    metaTitle: `Buy Cannabis Seeds in ${state.name} | ${state.topStrainTypes[0].charAt(0).toUpperCase() + state.topStrainTypes[0].slice(1)} | Royal King Seeds`,
    metaDescription: `Shop cannabis seeds for ${state.name}'s ${state.climate} climate. ${strains.slice(0, 3).join(', ')} and more. ${state.frostFreeDays} frost-free days. ${legalStatusLabel}. Discreet shipping to ${state.abbreviation}.`,
    pageType: 'state',
    state: state.name,
  };
}

// ── City Page Generator ──
function generateCityPage(stateKey: string, citySlug: string): LocationPage | null {
  const state = STATE_DATA[stateKey];
  if (!state) return null;

  const city = state.cities.find(c => c.slug === citySlug);
  if (!city) return null;

  const slug = `${state.slug}-${city.slug}`;
  const opener = pick(slug, CITY_OPENERS, 'cityopener');
  const strains = pickN(slug, STRAINS_BY_CLIMATE[state.climate], 3, 'citystrains');
  const otherCities = state.cities.filter(c => c.slug !== citySlug);

  // Strain recommendations
  let strainsHtml = '';
  for (let i = 0; i < strains.length; i++) {
    const strain = strains[i];
    const desc = pick(slug + strain, [
      `Handles ${city.name}'s local conditions well — ${city.note ? city.note.toLowerCase() + '.' : `the ${state.climate} climate zone typical of ${state.name}.`}`,
      `A reliable choice for ${city.name} growers who want ${i === 0 ? 'a proven performer' : i === 1 ? 'variety in their garden' : 'a backup strain that delivers consistently'}.`,
      `Performs in the ${state.climate} conditions around ${city.name}. ${state.frostFreeDays > 280 ? 'The long season lets this strain fully mature outdoors.' : 'Start indoors and transplant after last frost for best results.'}`,
    ], 'cdesc' + i);
    strainsHtml += `<h3>${i + 1}. ${strain}</h3>\n<p>${desc}</p>\n`;
  }

  // Nearby cities
  let nearbyCitiesHtml = '';
  if (otherCities.length > 0) {
    nearbyCitiesHtml = '<h2>More Cannabis Seed Guides Near ' + city.name + '</h2>\n<ul>\n';
    for (const c of otherCities) {
      nearbyCitiesHtml += `<li>${a(`Buy Cannabis Seeds in ${c.name}, ${state.abbreviation}`, `/seeds/australia/${state.slug}/${c.slug}`)}</li>\n`;
    }
    nearbyCitiesHtml += '</ul>';
  }

  // Pick a blog ref
  const blogRef = pick(slug, [
    `For step-by-step starting advice, our ${BL.germ} covers methods that produce the most consistent results.`,
    `Managing your grow environment matters more than strain hype. Our ${BL.lights} and ${BL.vpd} cover the fundamentals.`,
    `Autoflowers simplify growing for ${city.name} residents — our ${BL.autoGuide} covers the specific techniques.`,
    `New to growing? Our ${BL.nutrients} and ${BL.germ} cover the fundamentals every ${city.name} grower should know.`,
  ], 'cityblog');

  const content = `
<h1>Buy Cannabis Seeds in ${city.name}, ${state.name}</h1>

<p>${opener(city, state)}</p>

<p>Royal King Seeds ships directly to ${city.name} with discreet, tracked packaging. We stock ${CL.fem}, ${CL.auto}, ${CL.ind}, ${CL.sat}, and ${CL.cbd} — all available for delivery to ${state.abbreviation} addresses.</p>

<h2>Local Growing Conditions in ${city.name}</h2>
<p>${city.note || `${city.name} falls within ${state.name}'s ${state.climate} climate zone.`} ${state.name} averages ${state.frostFreeDays} frost-free days, though local conditions in the ${city.name} area may vary by 10–20 days depending on elevation and urban heat effects.</p>
<p>${state.indoorOutdoor}</p>

<h2>Top 3 Strains for ${city.name} Growers</h2>
${strainsHtml}
<p>See more options in our ${CL.all} or browse ${CL.best} that ${state.abbreviation} customers order most frequently.</p>

<h2>Cannabis Laws in ${city.name}, ${state.name}</h2>
<p>${state.legalNote}</p>
<p>Cannabis seeds are sold as adult novelty souvenirs and collector genetics. ${a(`Read the full ${state.name} legal guide`, `/seeds/australia/${state.slug}/is-marijuana-legal`)}.</p>

<h2>Growing Resources</h2>
<p>${blogRef}</p>

${nearbyCitiesHtml}

<p>${a(`Buy Cannabis Seeds in ${state.name}`, `/seeds/australia/${state.slug}`)} | ${hubLink()} | ${a('Shop All Seeds', '/product-category/shop-all-cannabis-seeds')}</p>
`;

  return {
    slug: `${state.slug}/${city.slug}`,
    title: `Buy Cannabis Seeds in ${city.name}, ${state.name}`,
    content,
    metaTitle: `Buy Cannabis Seeds in ${city.name}, ${state.abbreviation} | Royal King Seeds`,
    metaDescription: `Cannabis seeds shipped to ${city.name}, ${state.name}. ${strains.slice(0, 2).join(' and ')} recommended for local growing conditions. Discreet delivery to ${state.abbreviation}.`,
    pageType: 'city',
    state: state.name,
    city: city.name,
  };
}

// ── Legality Page Generator ──
function generateLegalityPage(stateKey: string): LocationPage | null {
  const state = STATE_DATA[stateKey];
  if (!state) return null;

  const slug = `${state.slug}-legal`;
  const year = 2026;

  const statusLabel = state.legalStatus === 'decriminalised' ? 'Decriminalised (Small Amounts)' :
    state.legalStatus === 'medical-only' ? 'Medical Cannabis Only' :
    state.legalStatus === 'illegal' ? 'Illegal (Medical Access via TGA)' : 'Prohibited';

  const homeGrowSection = pick(slug, [
    state.legalStatus === 'decriminalised' && state.abbreviation === 'ACT'
      ? `<p>The ACT is the only Australian jurisdiction that permits home cultivation. Residents aged 18+ may grow up to two cannabis plants per person (four per household). Plants must not be grown using hydroponics. Cannabis cannot be used in public places, near children, or shared with others. Federal law still prohibits cannabis, creating a legal grey area that ACT residents should understand.</p>`
      : state.legalStatus === 'decriminalised'
      ? `<p>While ${state.name} has decriminalised possession of small amounts of cannabis, home cultivation remains illegal. The decriminalisation provisions apply to possession and personal use only — growing plants will result in criminal charges. Cannabis seeds may be purchased and possessed as adult novelty souvenirs and collector genetics.</p>`
      : `<p>Home cultivation is not legally permitted in ${state.name} under current law. Cannabis seeds may be purchased and possessed as adult novelty souvenirs and collector genetics.</p>`,
  ], 'homegrow');

  const content = `
<h1>Is Cannabis Legal in ${state.name}? ${year} Update</h1>

<p><strong>Current Status:</strong> ${statusLabel}</p>

<p>${state.legalNote}</p>

<h2>Medical vs Recreational Cannabis in ${state.name}</h2>
<p>${state.legalStatus === 'decriminalised' && state.abbreviation === 'ACT'
  ? `The ACT is unique in Australia — it has decriminalised personal cannabis use and home cultivation since January 2020. Adults 18+ may possess up to 50g and grow two plants per person. However, federal law still classifies cannabis as a prohibited substance, and federal law operates concurrently with ACT law. In practice, ACT Policing (which enforces both) follows ACT law for personal use matters. Medical cannabis is also available through the TGA.`
  : state.legalStatus === 'decriminalised'
  ? `${state.name} has decriminalised cannabis possession for small amounts under its expiation notice system. This means small-quantity offences attract a fine rather than criminal charges. However, there is no regulated recreational sales framework and cultivation remains illegal. Medical cannabis is available through the TGA Special Access Scheme with a prescription from an authorised doctor.`
  : `${state.name} has not decriminalised recreational cannabis use. Possession, cultivation, and sale remain criminal offences under state law. Medical cannabis is available through the TGA Special Access Scheme, which requires a prescription from an authorised doctor. The medical cannabis market in Australia continues to grow, with an expanding range of products available to qualifying patients.`
}</p>

<h2>Home Cultivation Rules</h2>
${homeGrowSection}

<h2>Buying Cannabis Seeds in ${state.name}</h2>
<p>Cannabis seeds are available for purchase as adult novelty souvenirs, collector genetics, and educational materials. Royal King Seeds ships to all ${state.name} addresses with discreet, trackable packaging.</p>
<p>Browse our ${CL.all} including ${CL.fem}, ${CL.auto}, ${CL.ind}, and ${CL.sat}.</p>

<p>${a(`Buy Cannabis Seeds in ${state.name}`, `/seeds/australia/${state.slug}`)} | ${hubLink()} | ${a('Shop All Seeds', '/product-category/shop-all-cannabis-seeds')}</p>
`;

  return {
    slug: `${state.slug}/is-marijuana-legal`,
    title: `Is Cannabis Legal in ${state.name}? ${year} Update`,
    content,
    metaTitle: `Is Cannabis Legal in ${state.name}? ${year} Laws & Home Grow Rules`,
    metaDescription: `${state.name} cannabis laws in ${year}: ${statusLabel}. Home cultivation rules, medical vs recreational breakdown, and where to buy seeds legally.`,
    pageType: 'legality',
    state: state.name,
  };
}

// ════════════════════════════════════════════════════════════
// PUBLIC API
// ════════════════════════════════════════════════════════════

function findStateKeyBySlug(slug: string): string | undefined {
  return Object.keys(STATE_DATA).find(key => STATE_DATA[key].slug === slug);
}

export function generateLocationPage(slug: string): LocationPage | null {
  // Normalize: remove leading/trailing slashes
  const parts = slug.replace(/^\/+|\/+$/g, '').split('/');

  // Hub page: "australia" or empty
  if (parts.length === 0 || (parts.length === 1 && (parts[0] === 'australia' || parts[0] === ''))) {
    return generateHubPage();
  }

  // Remove "australia" prefix if present
  const pathParts = parts[0] === 'australia' ? parts.slice(1) : parts;

  if (pathParts.length === 0) {
    return generateHubPage();
  }

  const stateSlug = pathParts[0];
  const stateKey = findStateKeyBySlug(stateSlug);

  if (!stateKey) return null;

  // State page: just the state slug
  if (pathParts.length === 1) {
    return generateStatePage(stateKey);
  }

  // Legality page: state/is-marijuana-legal
  if (pathParts.length === 2 && pathParts[1] === 'is-marijuana-legal') {
    return generateLegalityPage(stateKey);
  }

  // City page: state/city
  if (pathParts.length === 2) {
    return generateCityPage(stateKey, pathParts[1]);
  }

  return null;
}

export function getAllStateSlugs(): { slug: string; state: string }[] {
  return Object.values(STATE_DATA)
    .map(s => ({ slug: s.slug, state: s.name }))
    .sort((a, b) => a.state.localeCompare(b.state));
}

export function getCitySlugsForState(stateSlug: string): { slug: string; city: string; state: string }[] {
  const stateKey = findStateKeyBySlug(stateSlug);
  if (!stateKey) return [];
  const state = STATE_DATA[stateKey];
  return state.cities.map(c => ({
    slug: c.slug,
    city: c.name,
    state: state.name,
  }));
}

// Internal helper for related states
function getRelatedStatesInternal(stateKey: string): StateInfo[] {
  const state = STATE_DATA[stateKey];
  if (!state) return [];
  // Return other states/territories, excluding self, max 5
  const others = Object.values(STATE_DATA)
    .filter(s => s.slug !== state.slug);
  return pickN(state.slug, others, Math.min(5, others.length), 'related');
}

export function getRelatedStates(stateSlug: string): { slug: string; state: string }[] {
  const stateKey = findStateKeyBySlug(stateSlug);
  if (!stateKey) return [];
  return getRelatedStatesInternal(stateKey).map(s => ({ slug: s.slug, state: s.name }));
}
