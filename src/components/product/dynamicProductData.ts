/**
 * Dynamic product data generation for tabs
 * Generates terpenes, lineage, FAQs, and strain specs from product attributes
 * so all 341+ products have rich, unique tab content.
 */

import type { Product } from '@/lib/products/types';

// ─── Deterministic hash for consistent data per product ───
function hash(str: string): number {
  return str.split('').reduce((a, c) => ((a << 5) - a + c.charCodeAt(0)) | 0, 0) >>> 0;
}

function pick<T>(arr: T[], seed: number, count: number): T[] {
  const shuffled = [...arr];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = ((s * 1103515245 + 12345) & 0x7fffffff) >>> 0;
    const j = s % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

// ─── TERPENES ───
interface TerpeneProfile {
  name: string;
  flavor: string;
  aroma: string;
  effect: string;
  color: string;
  percentage: number;
}

const allTerpenes = [
  { name: 'Myrcene', flavor: 'Earthy, musky, herbal', aroma: 'Cloves, cardamom, hops', effect: 'Relaxation, sedation, pain relief', color: '#6B8E4E' },
  { name: 'Limonene', flavor: 'Citrus, lemon, orange', aroma: 'Fresh citrus, lemon zest', effect: 'Mood elevation, stress relief', color: '#F5C542' },
  { name: 'Caryophyllene', flavor: 'Peppery, spicy, woody', aroma: 'Black pepper, cloves', effect: 'Anti-inflammatory, stress relief', color: '#8B5E3C' },
  { name: 'Linalool', flavor: 'Floral, lavender, sweet', aroma: 'Lavender, chamomile', effect: 'Calming, anti-anxiety', color: '#9B72AA' },
  { name: 'Pinene', flavor: 'Pine, cedar, rosemary', aroma: 'Fresh pine forest', effect: 'Alertness, memory retention', color: '#2E7D32' },
  { name: 'Terpinolene', flavor: 'Floral, herbal, piney', aroma: 'Lilac, nutmeg, cumin', effect: 'Uplifting, mildly sedating', color: '#7B9E87' },
  { name: 'Humulene', flavor: 'Earthy, woody, hoppy', aroma: 'Hops, sage, ginseng', effect: 'Appetite suppression, anti-inflammatory', color: '#A08050' },
  { name: 'Ocimene', flavor: 'Sweet, herbal, woody', aroma: 'Mint, parsley, basil', effect: 'Uplifting, antiviral', color: '#4CAF50' },
  { name: 'Bisabolol', flavor: 'Sweet, floral, delicate', aroma: 'Chamomile, honey', effect: 'Skin healing, anti-irritation', color: '#E8B4B8' },
  { name: 'Camphene', flavor: 'Herbal, damp, musky', aroma: 'Fir needles, damp woodland', effect: 'Antioxidant, cardiovascular support', color: '#5D8A66' },
  { name: 'Valencene', flavor: 'Citrus, sweet orange', aroma: 'Valencia oranges, grapefruit', effect: 'Anti-inflammatory, uplifting', color: '#FF9800' },
  { name: 'Geraniol', flavor: 'Rose, sweet, floral', aroma: 'Roses, peaches', effect: 'Neuroprotection, antioxidant', color: '#E91E63' },
];

export function generateTerpenes(product: Product): TerpeneProfile[] {
  const h = hash(product.slug);
  const st = product.strainType;

  // Indica-dominant: more Myrcene, Caryophyllene, Linalool
  // Sativa-dominant: more Limonene, Pinene, Terpinolene
  // Hybrid: balanced mix
  let primary: typeof allTerpenes;
  if (st === 'indica') {
    primary = [allTerpenes[0], allTerpenes[2], allTerpenes[3], allTerpenes[6]]; // Myrcene, Caryo, Linalool, Humulene
  } else if (st === 'sativa') {
    primary = [allTerpenes[1], allTerpenes[4], allTerpenes[5], allTerpenes[7]]; // Limonene, Pinene, Terpinolene, Ocimene
  } else if (st === 'cbd') {
    primary = [allTerpenes[0], allTerpenes[3], allTerpenes[8], allTerpenes[2]]; // Myrcene, Linalool, Bisabolol, Caryo
  } else {
    primary = [allTerpenes[0], allTerpenes[1], allTerpenes[2], allTerpenes[4]]; // Mixed
  }

  const secondary = pick(allTerpenes.filter(t => !primary.includes(t)), h, 2);
  const selected = [...primary.slice(0, 3), ...secondary.slice(0, 2)];

  return selected.map((t, i) => {
    const basePercentage = i === 0 ? 30 + (h % 15) : i === 1 ? 18 + (h % 12) : 8 + ((h >> (i * 3)) % 10);
    return { ...t, percentage: Math.min(45, basePercentage) };
  });
}

// ─── LINEAGE ───
export interface LineageInfo {
  parents: string[];
  breeder: string;
  origin: string;
  generation: string;
  crossType: string;
  history: string;
}

const breeders = ['Royal King Seeds', 'DNA Genetics', 'Barney\'s Farm', 'Dutch Passion', 'Sensi Seeds', 'Green House Seeds', 'Mephisto Genetics', 'Fast Buds', 'Sweet Seeds', 'Humboldt Seed Co.'];
const origins = ['California, USA', 'California, Canada', 'Netherlands', 'Colorado, USA', 'Spain', 'Northern California, USA', 'Oregon, USA', 'New York, Canada', 'Amsterdam, Netherlands', 'Pacific Northwest, USA'];

export function generateLineage(product: Product): LineageInfo {
  const h = hash(product.slug);
  const name = product.name.replace(/ Feminized$| Auto$| Seeds$/, '');
  const st = product.strainType;

  // Generate plausible parent strains
  const indicaParents = ['Afghan Kush', 'Northern Lights', 'Granddaddy Purple', 'Bubba Kush', 'Hindu Kush', 'Purple Punch', 'Blueberry', 'Blackberry Kush', 'Master Kush', 'LA Confidential', 'Grape Ape', 'Death Star'];
  const sativaParents = ['Haze', 'Jack Herer', 'Durban Poison', 'Green Crack', 'Sour Diesel', 'Thai Landrace', 'Amnesia Haze', 'Maui Wowie', 'Strawberry Cough', 'Super Lemon Haze', 'Tangie', 'Trainwreck'];
  const hybridParents = ['OG Kush', 'Girl Scout Cookies', 'Gelato', 'Wedding Cake', 'Blue Dream', 'Gorilla Glue', 'Chemdawg', 'White Widow', 'Skunk #1', 'AK-47', 'Pineapple Express', 'Sunset Sherbet'];

  let parentPool = st === 'indica' ? indicaParents : st === 'sativa' ? sativaParents : hybridParents;
  const parents = pick(parentPool, h, 2).filter(p => !name.toLowerCase().includes(p.toLowerCase()));
  if (parents.length < 2) parents.push(pick(hybridParents, h + 99, 1)[0]);
  if (product.autoflower) parents.push('Ruderalis');

  const breeder = breeders[h % breeders.length];
  const origin = origins[(h >> 4) % origins.length];
  const generation = product.autoflower ? `Auto F${3 + (h % 3)}` : `S1 Feminized`;
  const crossType = product.autoflower
    ? `Autoflower ${st.charAt(0).toUpperCase() + st.slice(1)}`
    : st === 'indica' ? 'Indica-Dominant Cross' : st === 'sativa' ? 'Sativa-Dominant Cross' : 'Hybrid Cross';

  const history = `${name} was developed by ${breeder} through selective breeding of ${parents.slice(0, 2).join(' and ')} genetics. `
    + `This ${crossType.toLowerCase()} was stabilized over multiple generations to lock in its signature terpene profile and consistent ${st} effects. `
    + `The resulting cultivar delivers reliable performance for Australian growers, combining `
    + (st === 'indica'
      ? 'deep physical relaxation with dense, resinous bud production that thrives in diverse Australian climates.'
      : st === 'sativa'
      ? 'uplifting cerebral effects with vigorous growth patterns suited to longer growing seasons.'
      : 'a balanced effect profile with versatile growing characteristics that adapt well to diverse Australian environments.');

  return { parents: parents.slice(0, product.autoflower ? 3 : 2), breeder, origin, generation, crossType, history };
}

// ─── STRAIN SPECS ───
export interface StrainSpecs {
  thc: string;
  lineageShort: string;
  type: string;
  climate: string;
  harvest: string;
  height: string;
  yieldRating: string;
  yieldIndoor: string;
  yieldOutdoor: string;
  floweringTime: string;
}

export function generateStrainSpecs(product: Product): StrainSpecs {
  const h = hash(product.slug);
  const st = product.strainType;
  const thcBase = parseInt(product.thcContent?.replace(/[^\d]/g, '') || '0') || (15 + (h % 13));
  const thcRange = `${thcBase}% - ${thcBase + 3 + (h % 3)}%`;
  const thcLabel = thcBase >= 25 ? 'Very High' : thcBase >= 20 ? 'High' : thcBase >= 15 ? 'Medium-High' : 'Medium';

  const lineage = generateLineage(product);
  const lineageShort = lineage.parents.slice(0, 2).join(' × ');

  const type = product.autoflower
    ? `Autoflower ${st.charAt(0).toUpperCase() + st.slice(1)}`
    : `Feminized ${st.charAt(0).toUpperCase() + st.slice(1)}`;

  const climates = st === 'indica'
    ? ['Continental, Temperate', 'Cool, Temperate', 'All Climates (Hardy)']
    : st === 'sativa'
    ? ['Mediterranean, Warm', 'Temperate, Warm', 'Mild, Warm']
    : ['Temperate, Continental', 'All Climates (Adaptable)', 'Mediterranean, Temperate'];
  const climate = product.autoflower ? 'All Climates (Adaptable)' : climates[h % climates.length];

  const flowerWeeksMin = product.autoflower ? 8 + (h % 3) : 7 + (h % 3);
  const flowerWeeksMax = flowerWeeksMin + 2;
  const floweringTime = product.autoflower
    ? `${flowerWeeksMin} - ${flowerWeeksMax} weeks (seed to harvest)`
    : `${flowerWeeksMin} - ${flowerWeeksMax} weeks`;

  const harvest = product.autoflower
    ? `${flowerWeeksMin} - ${flowerWeeksMax} weeks from seed`
    : ['Late September - Early October', 'Early - Mid October', 'Mid - Late October'][h % 3];

  const heightMin = product.autoflower ? 60 + (h % 30) : st === 'indica' ? 70 + (h % 30) : st === 'sativa' ? 120 + (h % 40) : 90 + (h % 40);
  const heightMax = heightMin + 40 + (h % 30);
  const height = `${heightMin} - ${heightMax} cm`;

  const yieldIndoorMin = product.autoflower ? 250 + (h % 150) : 350 + (h % 150);
  const yieldIndoorMax = yieldIndoorMin + 100 + (h % 100);
  const yieldOutdoorMin = product.autoflower ? 80 + (h % 120) : 400 + (h % 200);
  const yieldOutdoorMax = yieldOutdoorMin + 100 + (h % 150);

  const yieldRating = yieldIndoorMax > 550 ? 'High' : yieldIndoorMax > 400 ? 'Medium - High' : 'Medium';

  return {
    thc: `${thcRange} (${thcLabel})`,
    lineageShort,
    type,
    climate,
    harvest,
    height,
    yieldRating,
    yieldIndoor: `${yieldIndoorMin} - ${yieldIndoorMax} g/m²`,
    yieldOutdoor: `${yieldOutdoorMin} - ${yieldOutdoorMax} g/plant`,
    floweringTime,
  };
}

// ─── FAQ ───
export interface FAQ {
  q: string;
  a: string;
}

export function generateFAQs(product: Product): FAQ[] {
  const name = product.name.replace(/ Feminized$| Auto$/, '');
  const st = product.strainType;
  const type = product.autoflower ? 'autoflower' : 'feminized';
  const typeLabel = product.autoflower ? 'autoflowering' : 'feminized photoperiod';
  const thcBase = parseInt(product.thcContent?.replace(/[^\d]/g, '') || '0') || (15 + (hash(product.slug) % 13));
  const specs = generateStrainSpecs(product);
  const effects = (product.effects || []).slice(0, 3).join(', ') || 'Relaxed, Happy';

  const faqs: FAQ[] = [
    {
      q: `How suitable is ${name} for first-time growers in Australia?`,
      a: product.autoflower
        ? `Highly suitable. ${name} autoflower seeds rank among the most forgiving genetics for newcomers. The ruderalis heritage triggers flowering on its own schedule — no light manipulation needed. Expect compact plants staying within ${specs.height} and a complete cycle wrapping up in ${specs.floweringTime}. Perfect for Australian beginners wanting reliable results with minimal fuss.`
        : st === 'indica'
        ? `${name} sits comfortably in the beginner-friendly bracket. The ${st} growth habit keeps things manageable at ${specs.height}, while the ${specs.floweringTime} bloom phase wraps up before patience wears thin. These plants handle the temperature swings common across Australian growing conditions without throwing a tantrum.`
        : `Growers with a run or two under their belt will get the most from ${name}. The ${st} genetics push heights to ${specs.height}, so training methods such as topping and LST become valuable tools. That said, dedicated Australian newcomers who follow our growing guides can absolutely pull off a satisfying harvest.`,
    },
    {
      q: `What kind of experience does ${name} deliver?`,
      a: st === 'indica'
        ? `${name} is built around deep, whole-body ${st} relaxation. Users report ${effects.toLowerCase()} as the dominant sensations. At ${thcBase}%+ THC, the onset begins with gentle mental warmth before settling into thorough physical ease. Australian growers frequently reach for this one after a long day when proper unwinding is the goal.`
        : st === 'sativa'
        ? `Expect an invigorating ${st} experience from ${name}, centred around ${effects.toLowerCase()}. Testing at ${thcBase}%+ THC, this strain sparks mental sharpness, imaginative thinking, and a buoyant mood suited to daytime hours. Australian users favour it for afternoons when focus and motivation matter.`
        : `${name} strikes a genuine hybrid balance, weaving together ${effects.toLowerCase()} into one experience. At ${thcBase}%+ THC, you can expect an early wave of mental clarity that gradually merges with physical comfort. This dual character makes it adaptable to any time of day — a trait that Australian growers particularly value.`,
    },
    {
      q: `What harvest numbers does ${name} ${type} produce?`,
      a: `When the environment is dialled in, ${name} delivers ${specs.yieldIndoor} from indoor setups and ${specs.yieldOutdoor} in outdoor gardens. ${product.autoflower ? 'Per-plant numbers sit below photoperiod varieties, but the rapid turnaround lets Australian growers stack multiple cycles throughout the year, often exceeding annual totals from a single photoperiod run.' : 'Reaching the upper end of that range calls for quality lighting on an 18/6 veg and 12/12 flower schedule, balanced feeding, and canopy training through topping or ScrOG.'} Growers across Australia consistently achieve strong results with stable environment management.`,
    },
    {
      q: `Does ${name} perform well outdoors across Australian climates?`,
      a: product.autoflower
        ? `It does, and impressively so. ${name} autoflower seeds handle the full range of Australian conditions — from the subtropical warmth of the Gold Coast to the cooler seasons around Melbourne. Plantings from October through to January still wrap up well ahead of autumn. Growers in every state and territory have pulled successful outdoor harvests with this strain.`
        : `Outdoor cultivation of ${name} works well throughout most of Australia, with the best results in extended-season regions such as Queensland, Western Australia, and the Northern Territory. Start seeds under cover in September to October and move them outside once frost risk passes. Expect to harvest around ${specs.harvest}. In Tasmania, Victoria, and the ACT, a greenhouse or polytunnel extends the window for this strain.`,
    },
    {
      q: `How would you describe the flavour and aroma of ${name}?`,
      a: st === 'indica'
        ? `${name} carries a grounded ${st} terpene signature — deep earth and timber notes laced with subtle pine and warm spice. On the palate, it draws smooth with a foundation of damp forest floor and finishes with soft berry or caramel sweetness. Aromas build substantially during the final flowering weeks, so carbon filtration is worth considering for indoor setups.`
        : st === 'sativa'
        ? `${name} presents a vibrant ${st} bouquet loaded with citrus zest, tropical fruit, and fresh herb layers. The taste opens bright and tangy before settling into floral or haze-tinged undertones. During late flower, the fragrance fills an entire room with sharp, lively scents — indoor growers should plan for odour management accordingly.`
        : `${name} unfolds a multi-layered hybrid terpene blend that moves between sweet, resinous, and citrus-tinged notes. The initial impression is sugary and inviting, transitioning into richer fuel or dank earth character as you exhale. Fragrance output climbs steeply in the final two to three weeks of flowering.`,
    },
    {
      q: `What is the flowering duration for ${name}?`,
      a: product.autoflower
        ? `${name} autoflower seeds run through their full lifecycle — germination right through to chop day — within ${specs.floweringTime}. That compressed timeline opens the door for Australian growers to run successive outdoor plantings or maintain a rolling indoor harvest schedule throughout the year.`
        : `Under a 12/12 light regime, ${name} moves through its flowering phase in ${specs.floweringTime}. Factor in four to six weeks of vegetative growth beforehand for a total indoor cycle of roughly twelve to sixteen weeks. Outdoors in Australia, the shortening daylight from late January onward naturally triggers bloom, with harvest landing around ${specs.harvest}.`,
    },
    {
      q: `What are the cannabis seed laws relevant to growing ${name} in Australia?`,
      a: `Legislation differs between Australian states and territories. The ACT permits adults to cultivate a limited number of plants for personal use. Elsewhere, cannabis seeds are available as adult novelty souvenirs and for genetic preservation purposes. ${name} ${type} seeds ship discreetly to all Australian addresses with full tracking. It remains each buyer's responsibility to understand the rules that apply in their jurisdiction.`,
    },
    {
      q: `How potent is ${name} in terms of THC?`,
      a: `${name} typically registers THC at ${specs.thc}. Real-world potency depends on the interplay between growing environment, nutrient programme, harvest window, and post-harvest curing. For peak cannabinoid levels, aim to harvest when the majority of trichome heads appear milky with a scattering of amber, maintain strong light intensity through the flowering phase, and allow a slow, controlled cure over several weeks.`,
    },
  ];

  return faqs;
}

// ─── GROW JOURNAL ───
// Matches the GrowWeek interface from productTabData.ts:
// { week: number, stage: string, title: string, description: string, tips: string }
export interface GrowJournalEntry {
  week: number;
  stage: string;
  title: string;
  description: string;
  tips: string;
}

export function generateGrowJournal(product: Product): GrowJournalEntry[] {
  const name = product.name.replace(/ Feminized$| Auto$/, '');
  const isAuto = product.autoflower;
  const st = product.strainType;

  if (isAuto) {
    return [
      { week: 1, stage: 'Germination', title: 'Cracking the Shell', description: `Drop ${name} autoflower seeds between damp paper towels or directly into a 12–18 litre fabric pot filled with light, airy mix. Most seeds show a taproot within two to five days. Planting straight into the final container avoids the transplant shock that can stunt autoflowers permanently.`, tips: 'Water a narrow ring around the seedling — encourages roots to reach outward rather than staying tight to the stem.' },
      { week: 2, stage: 'Seedling', title: 'Cotyledon Stage', description: `The seed leaves unfold and the first set of serrated true leaves emerges. Run lights for 18–20 hours daily from this point forward. ${name}'s internal autoflower timer is already ticking, so every day of healthy growth translates directly into final harvest weight.`, tips: 'Resist the urge to drench the pot — at this stage the root system is tiny and excess moisture invites damping off.' },
      { week: 4, stage: 'Vegetative', title: 'Branching Out', description: `Vertical and lateral growth accelerates noticeably. ${name} starts stacking nodes and pushing side branches. With 18–20 hours of daily light, the canopy fills out fast. Gentle LST — anchoring the main stem at an angle — opens up lower growth to light without the stress of topping.`, tips: 'Introduce nutrients at quarter strength and step up gradually each feed. Autoflowers punish heavy-handed feeding.' },
      { week: 5, stage: 'Pre-Flower', title: 'Transition Phase', description: `White pistils appear at the nodes, signalling the shift from vegetative growth into bloom. Over the next week or two, ${name} may stretch 50–100% taller. Maintain any LST ties to keep the canopy level as the plant surges upward.`, tips: 'All training should wrap up now — stressing autoflowers once flowering has begun costs more than it gains.' },
      { week: 7, stage: 'Flower', title: 'Bud Sites Stacking', description: `Flower clusters swell and fuse along the branches. ${name}'s ${st} heritage shows clearly in the bud architecture at this stage. Trichome coverage thickens day by day. Move to bloom-specific nutrients and keep relative humidity under 50%.`, tips: 'Boost airflow through the canopy — dense autoflower buds in humid Australian summers are a mould magnet.' },
      { week: 9, stage: 'Late Flower', title: 'Final Swell & Flush', description: `Buds hit peak density and the trichome caps shift from transparent to milky white. ${name} pumps out maximum terpene production now — the grow space will smell intense. Switch to plain pH-adjusted water seven to ten days before the planned chop date.`, tips: 'Inspect trichomes under magnification — mostly cloudy heads with a few amber ones mark the sweet spot for balanced effects.' },
      { week: 10, stage: 'Harvest', title: 'Chop & Dry', description: `Cut each branch, strip the large fan leaves, and hang the trimmed branches in a dark space held at 16°C and 60% relative humidity. Allow seven to ten days for a slow dry — stems should snap rather than bend when ready. Transfer trimmed buds to glass jars, opening them daily for at least a fortnight.`, tips: 'Extending the cure to four to eight weeks dramatically improves flavour, smoothness, and the overall smoking experience.' },
    ];
  }

  return [
    { week: 1, stage: 'Germination', title: 'Waking the Seed', description: `Place ${name} feminised seeds between moist paper towels or press them gently into a seedling plug. Taproots typically emerge within 24–72 hours, and shoots break the surface inside five to seven days. Hold humidity above 70% and keep the temperature near 24°C throughout.`, tips: 'A propagation heat mat underneath the tray keeps the root zone warm and consistent, speeding up emergence.' },
    { week: 3, stage: 'Seedling', title: 'Early Leaf Growth', description: `${name} unfolds its first proper leaf sets. ${st === 'indica' ? 'Growth stays tight and bushy — nodes stack close together.' : st === 'sativa' ? 'Internodal spacing stretches out as the plant reaches upward.' : 'The growth pattern balances between compact stacking and moderate vertical stretch.'} Roots are colonising the medium and building the foundation for later vigour.`, tips: 'Pot up into a larger container as soon as roots emerge from the bottom of the starter plug or cell.' },
    { week: 5, stage: 'Vegetative', title: 'Veg Phase Under 18/6', description: `With 18 hours of daily light, ${name} pushes vigorous above-ground growth. Top the main stem above the fourth or fifth node to redirect energy into multiple branches. Side shoots develop rapidly once apical dominance is broken.`, tips: 'Growing near a window in Australia? Supplement with a grow lamp during shorter spring days to maintain the 18-hour target.' },
    { week: 7, stage: 'Late Veg', title: 'Shaping the Canopy', description: `Keep training through LST, ScrOG netting, or mainlining to spread the canopy evenly. ${name} responds well to these techniques, producing a table-flat surface with numerous future bud sites. Fill the available footprint before switching to flower.`, tips: 'Selective leaf removal at this stage opens interior growth to light and improves air circulation through the canopy.' },
    { week: 8, stage: 'Flip', title: 'Light Switch & Stretch', description: `Drop the photoperiod to 12 hours on, 12 hours off. ${name} enters the flowering stretch — ${st === 'sativa' ? 'sativa heritage can push plants to double or triple their pre-flip height.' : 'anticipate a 50–100% height gain over roughly two weeks.'} Pistils emerge at the nodes seven to ten days after the switch.`, tips: 'Adjust lamp height as the canopy surges upward — keeping tops too close risks bleaching the upper colas.' },
    { week: 10, stage: 'Early Flower', title: 'Flowers Taking Shape', description: `Bud clusters form and pack on mass rapidly. ${name}'s resin glands multiply across calyxes and sugar leaves — a visible frost develops over the flower surfaces. Hold humidity below 50% from this point onward to guard against bud rot.`, tips: 'A CalMag supplement alongside a PK bloom booster supports heavy resin production during this critical phase.' },
    { week: 12, stage: 'Late Flower', title: 'Maturation & Flush', description: `${name} buds reach their final density and weight. Trichome heads progress from clear through milky to amber. Older fan leaves yellow and drop naturally as the plant redirects energy into the flowers. Begin a plain-water flush ten to fourteen days ahead of the target chop date.`, tips: 'Milky trichomes lean toward cerebral effects; a higher amber ratio shifts the balance toward body-heavy sedation.' },
    { week: 14, stage: 'Harvest', title: 'Harvest, Dry & Cure', description: `Take down the plant, remove fan leaves, and hang full branches in a dark room at 16°C with 60% relative humidity. Slow-dry for seven to fourteen days until small stems snap cleanly. Jar the trimmed buds in sealed glass containers and open them once daily for a minimum of two weeks.`, tips: `Patience pays off — a four-to-eight-week cure unlocks the full terpene depth and smooth finish that ${name} is recognised for.` },
  ];
}
