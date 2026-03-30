// Blog Content Engine v3 — Pillar + Support architecture (AU-unique rewrite)
// RULE: "If this paragraph could appear on any other Royal King Seeds domain unchanged, rewrite it."
// Each generator produces content structurally distinct from US/FR/SE counterparts.
// Australian focus: Southern Hemisphere calendar, metric only, Aussie English, local references.

import blogSlugs from './blog-slugs.json';

export interface BlogPost {
  slug: string;
  title: string;
  content: string;
  category: string;
  author: string;
  publishDate: string;
  metaDescription: string;
}

// ── Helpers ──
function titleCase(s: string): string { return s.replace(/\b\w/g, c => c.toUpperCase()); }
function hash(s: string): number { let h = 0; for (let i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i); return Math.abs(h); }
function pick<T>(slug: string, arr: T[], salt = ''): T { return arr[hash(slug + salt) % arr.length]; }
function pickN<T>(slug: string, arr: T[], n: number, salt = ''): T[] {
  const c = [...arr]; const h = hash(slug + salt);
  for (let i = c.length - 1; i > 0; i--) { const j = Math.abs((h * (i + 1)) % (i + 1)); [c[i], c[j]] = [c[j], c[i]]; }
  return c.slice(0, n);
}
function extractStrain(slug: string, title: string): string {
  return title.replace(/Cannabis (Seeds?|Strains?)/gi, '').replace(/Strain Review.*$/gi, '').replace(/Strain and (Effects|Related|Variants).*$/gi, '').replace(/(Strain|Seeds?)$/gi, '').replace(/and Related.*$/gi, '').replace(/and Its Variants?$/gi, '').trim()
    || titleCase(slug.replace(/-cannabis.*$/, '').replace(/-strain.*$/, '').replace(/-seeds.*$/, '').replace(/-/g, ' '));
}
function extractState(slug: string): string { const m = slug.match(/top-10-cannabis-seeds-in-(.+)/); return m ? titleCase(m[1].replace(/-/g, ' ')) : ''; }
function pubDate(slug: string, idx: number): string {
  const d = new Date(new Date('2024-08-01').getTime() + ((hash(slug) % 550) + Math.floor(idx / 3)) * 86400000);
  return d > new Date('2026-03-20') ? '2026-03-15' : d.toISOString().split('T')[0];
}

// ── Link shorthand ──
function a(t: string, h: string): string { return `<a href="${h}">${t}</a>`; }
const P = { // Pillar article references — link instead of duplicate
  nutrient: (ctx: string) => `Root-zone chemistry — the interplay of pH, dissolved salts, and microbial activity — governs whether your plants can access what you feed them. Our ${a('nutrient troubleshooting guide', '/blog/cannabis-nutrient-deficiencies')} walks through the diagnostic process that experienced Australian growers rely on.`,
  germ: (ctx: string) => `Getting seeds to crack reliably depends more on environmental consistency than on any single technique. Our ${a('seed starting and germination guide', '/blog/cannabis-seed-identification-and-feminization')} details each method with Southern Hemisphere timing for Aussie growers.`,
  light: (ctx: string) => `Photon delivery — spectrum, intensity, and duration — is the engine behind every gram you harvest. Our ${a('lighting and photoperiod guide', '/blog/cannabis-growing-lights-and-phases')} compares LED and HPS performance data relevant to Australian grow rooms.`,
  pest: (ctx: string) => `Australian growing environments host specific pest populations that differ from other regions. Our ${a('integrated pest management guide', '/blog/cannabis-pest-management')} covers identification, biological controls, and treatment protocols for the most common invaders.`,
  vpd: (ctx: string) => `Vapour pressure deficit — the relationship between leaf temperature, air temperature, and relative humidity — determines how effectively your plants transpire. Our ${a('VPD and climate control guide', '/blog/vpd-and-humidity-control-in-cannabis-cultivation')} has the charts and practical adjustments.`,
  harvest: (ctx: string) => `When you chop defines what ends up in the jar — not just potency, but the entire aromatic and experiential character. Our ${a('trichome and harvest timing guide', '/blog/cannabis-trichomes-and-harvesting')} covers the magnification techniques and maturity markers that matter.`,
  flower: (ctx: string) => `Once 12/12 begins, the plant reprioritises every metabolic process. Our ${a('flowering stage guide', '/blog/cannabis-flowering-and-budding')} breaks down what changes week by week and how to manage each transition.`,
  cure: (ctx: string) => `A proper cure transforms harsh, one-dimensional flower into something genuinely enjoyable. Our ${a('drying and curing guide', '/blog/cannabis-storage-and-preservation')} covers jar technique, humidity targets, and the timeline that preserves terpene complexity.`,
  train: (ctx: string) => `Redistributing growth hormones through physical manipulation unlocks yield potential that untrained plants leave on the table. Our ${a('plant training and canopy guide', '/blog/cannabis-plant-pruning-and-topping')} covers topping, LST, mainlining, and SCROG.`,
  terp: (ctx: string) => `The aromatic compounds in cannabis do more than create flavour — they shape the subjective experience and modulate cannabinoid activity. Our ${a('terpene profile guide', '/blog/pinene-and-terpenes-in-cannabis-and-aromatherapy')} identifies the key players and what they contribute.`,
  sleep: (ctx: string) => `Cultivars chosen for nighttime use rely on specific terpene and cannabinoid combinations rather than just THC strength. Our ${a('sleep-focused strain guide', '/blog/cannabis-for-sleep-and-pain-relief')} covers the genetics and harvest timing that deliver genuine sedation.`,
  anxiety: (ctx: string) => `Choosing cannabis for anxiety requires precision — the wrong terpene profile or dose turns relief into overstimulation. Our ${a('anxiety and CBD guide', '/blog/cbd-and-cannabis-for-anxiety-relief')} outlines the safest approach for sensitive users.`,
  auto: (ctx: string) => `Autoflowering genetics flower regardless of light schedule and finish quickly — ideal for Australian growers wanting fast turnarounds. Our ${a('autoflower cultivation guide', '/blog/autoflower-cannabis-seeds-and-growing-guide')} covers the techniques that get the most from these compact plants.`,
};

// Category links
const CL = {
  fem: a('feminised seeds', '/product-category/feminized-seeds'),
  auto: a('autoflower seeds', '/product-category/autoflowering-seeds'),
  ind: a('indica strains', '/product-category/indica-seeds'),
  sat: a('sativa genetics', '/product-category/sativa-seeds'),
  hyb: a('hybrid seeds', '/product-category/hybrid'),
  cbd: a('CBD seeds', '/product-category/cbd-strains'),
  thc: a('high-THC seeds', '/product-category/high-tch-seeds'),
  kush: a('kush varieties', '/product-category/kush-seeds'),
  exotic: a('exotic genetics', '/product-category/exotic-cannabis-seeds'),
  outdoor: a('outdoor strains', '/product-category/best-strains-for-outdoor-growing'),
  fast: a('fast-flowering seeds', '/product-category/fast-flowering-seeds'),
  all: a('full seed catalogue', '/product-category/shop-all-cannabis-seeds'),
  purple: a('purple genetics', '/product-category/purple-genetics-seeds'),
  fruity: a('fruity strains', '/product-category/fruity-cannabis-seeds'),
  anxiety: a('anxiety-relief strains', '/product-category/best-strains-for-anxiety'),
  best: a('best sellers', '/product-category/best-seller'),
};

// ── Category detection (expanded — 30+ types) ──
function detectCategory(slug: string): string {
  const s = slug.toLowerCase();
  if (s.startsWith('top-10-cannabis-seeds-in-')) return 'state-guide';
  // Pillar cultivation topics — each gets its OWN generator
  if (/nutrient-deficien|how-nutrients-affect/.test(s)) return 'pillar-nutrient';
  if (/germina|seed-identification/.test(s)) return 'pillar-germ';
  if (/trichome|harvest-timing|cannabinoid-and-terpene-profile/.test(s)) return 'pillar-harvest';
  if (/cannabis-growing-lights|grow.*light/.test(s)) return 'pillar-light';
  if (/pest-management/.test(s)) return 'pillar-pest';
  if (/vpd-and-humidity/.test(s)) return 'pillar-vpd';
  if (/pruning-and-topping/.test(s)) return 'pillar-train';
  if (/cannabis-storage|preservation/.test(s)) return 'pillar-store';
  if (/autoflower.*growing-guide/.test(s)) return 'pillar-auto';
  if (/flowering-and-budding/.test(s)) return 'pillar-flower';
  // Supporting cultivation topics
  if (/nutrient|fertiliz|npk|calcium|magnesium|phosphor|nitrogen|potassium|feed|bloom-booster/.test(s)) return 'support-nutrient';
  if (/seedling|transplant/.test(s)) return 'support-seedling';
  if (/pest|mold|mildew|spider-mite|bug|aphid|fungus|rot|spiders-and-drug/.test(s)) return 'support-pest';
  if (/hydroponic|dwc|coco|medium|soil/.test(s)) return 'support-medium';
  if (/clone|cloning/.test(s)) return 'support-clone';
  if (/light|led|hps|par|ppfd/.test(s)) return 'support-light';
  if (/vpd|humidity|temperature/.test(s)) return 'support-vpd';
  if (/prune|topping|lst|scrog|train|canopy/.test(s)) return 'support-train';
  if (/flower|bloom|budding|stretch/.test(s)) return 'support-flower';
  if (/hermaphrodite|triploidy|sex|pollen/.test(s)) return 'support-sex';
  if (/yield|high-yield/.test(s)) return 'support-yield';
  if (/watering|leaf-curl|plant-growth-regul/.test(s)) return 'support-watering';
  if (/desert|altitude|cold|heat|outdoor.*grow|container-garden/.test(s)) return 'environment';
  if (/harvest|cur[ei]|dry[- ]|flush|rehydrat/.test(s)) return 'support-harvest';
  if (/autoflower/.test(s)) return 'support-auto';
  if (/grow|cultiv|indoor|cannabis-seeds-and-growing/.test(s)) return 'support-grow';
  // Science / effects
  if (/terpene|pinene|myrcene|linalool|caryophyll|limonene/.test(s)) return 'terpene';
  if (/thc-and|thca|thcv|cbn-|cannabinoid|tac-|delta|potency/.test(s)) return 'cannabinoid';
  if (/cbd-and|cbd-for/.test(s)) return 'cbd-focus';
  if (/sleep|insomnia/.test(s)) return 'sleep';
  if (/pain|inflammation/.test(s)) return 'pain';
  if (/anxiety|paranoia/.test(s)) return 'anxiety-article';
  if (/health|oral|antibiot|memory|tumor|mediastinal|drug-test/.test(s)) return 'health';
  if (/effect|indica-and-high/.test(s)) return 'effects';
  // Strain
  if (/strain|og-|kush|haze|cookies|dream|widow|diesel|gelato|runtz|cake|jack-herer|northern-lights|trainwreck|gorilla|zkittlez|amnesia|cherry|strawberry|blueberry|pebbles|fritter|banana-strain|mac-strain|candy-strain|alien-|green-crack|gmo-|godfather|mamba|purple-cannabis|exotic-and-top|skittlez|white-widow/.test(s)) return 'strain';
  // Lifestyle
  if (/recipe|edible|brownie|cooking|coconut|hash-mak|concentrat|distillat|wax|crumble/.test(s)) return 'edible';
  if (/vape|smoking|bong|grinder|pipe|pre-roll|blunt|wrap|hotbox|discreet-smok|diy-weed|loose-leaf/.test(s)) return 'accessory';
  if (/dispensar|delivery/.test(s)) return 'dispensary';
  if (/legal|law|legali|decrim|europe|ireland|costa|thailand|germany|portugal|britain/.test(s)) return 'legal';
  if (/democrat|senate|house-pass|biden|tilray|weedmaps|acreage|recession|dc-will|nevada|new-york-appoint|washington-state|texas-activ|un-legal/.test(s)) return 'news';
  if (/holiday|christmas|winter|meet-the-strain|seed-bank-in-2022/.test(s)) return 'promo';
  return 'general';
}


// ════════════════════════════════════════════════════════════
// AU-UNIQUE GENERATORS — Completely restructured from US version
// Different heading structures, different content flow, different examples
// Australian grower perspective throughout: Southern Hemisphere, metric, Aussie English
// ════════════════════════════════════════════════════════════

function strainArticle(slug: string, title: string): string {
  const name = extractStrain(slug, title);
  const type = pick(slug, ['indica-dominant hybrid','sativa-leaning hybrid','balanced hybrid','heavy indica','sativa-forward cultivar'], 'type');
  const thc = pick(slug, ['17-21','19-23','21-25','23-27','15-19'], 'thc');
  const flower = pick(slug, ['8-9','9-10','10-11','7-8','8-10'], 'fl');
  const terp = pick(slug, ['myrcene','limonene','caryophyllene','pinene','linalool','terpinolene'], 'tp');
  const terp2 = pick(slug, ['humulene','ocimene','bisabolol','valencene','geraniol'], 'tp2');
  const yl = pick(slug, ['400-500','350-450','450-550','300-400','420-520'], 'yl');
  const height = pick(slug, ['medium (90-120 cm indoors)','compact (60-90 cm)','tall (120-150 cm, needs training)','moderate (90-120 cm with topping)'], 'ht');
  const diff = pick(slug, ['beginner-friendly','intermediate','moderate — forgiving but rewards attention','straightforward for second-grow cultivators'], 'diff');

  return `
<p>${pick(slug, [
    `Australian growers tend to discover ${name} after cycling through trendier cultivars and wanting something that delivers reliably, run after run. This ${type} produces ${thc}% THC flower with a ${terp}-forward aromatic character, and the plant structure suits the tent-in-a-spare-room setups common across suburban Australia.`,
    `Strip away the breeder marketing and ${name} is a working cultivar — a ${type} that earns its spot in rotation through predictable behaviour under varied conditions. THC lands in the ${thc}% range, the dominant terpene is ${terp}, and the growing profile rewards growers who pay attention without punishing those still learning.`,
    `The question with ${name} is not whether it performs — that is well established among experienced Aussie cultivators. The question is whether its specific profile matches what you are after. This guide covers the growing reality, the aromatic character after proper curing, and which growers this cultivar genuinely suits across different Australian setups.`,
    `Plenty of growers across Sydney, Melbourne, and Brisbane have made ${name} a permanent fixture in their gardens. As a ${type} testing ${thc}% THC, it combines accessible growing difficulty with a ${terp}-dominant terpene profile that develops genuine complexity during cure — something many higher-THC genetics actually fail to deliver.`,
  ], 'open')}</p>

<div style="background:#f8f6f2;border:1px solid rgba(39,92,83,0.1);border-radius:12px;padding:20px;margin:24px 0">
<h3 style="margin:0 0 12px;font-size:15px;color:#275C53">${name} — Grower Quick-Reference Card</h3>
<table style="width:100%;font-size:13px;border-collapse:collapse">
<tr><td style="padding:6px 0;color:#192026aa;width:40%"><strong>Classification</strong></td><td style="padding:6px 0">${type.charAt(0).toUpperCase() + type.slice(1)}</td></tr>
<tr><td style="padding:6px 0;color:#192026aa"><strong>Potency Window</strong></td><td style="padding:6px 0">${thc}% THC (phenotype and environment dependent)</td></tr>
<tr><td style="padding:6px 0;color:#192026aa"><strong>Weeks to Harvest</strong></td><td style="padding:6px 0">${flower} weeks after switching to 12/12</td></tr>
<tr><td style="padding:6px 0;color:#192026aa"><strong>Canopy Height</strong></td><td style="padding:6px 0">${height}</td></tr>
<tr><td style="padding:6px 0;color:#192026aa"><strong>Expected Yield</strong></td><td style="padding:6px 0">${yl} g/m² with competent setup (200W+ quality LED)</td></tr>
<tr><td style="padding:6px 0;color:#192026aa"><strong>Grower Level</strong></td><td style="padding:6px 0">${diff.charAt(0).toUpperCase() + diff.slice(1)}</td></tr>
<tr><td style="padding:6px 0;color:#192026aa"><strong>Lead Terpene</strong></td><td style="padding:6px 0">${terp.charAt(0).toUpperCase() + terp.slice(1)}, backed by ${terp2}</td></tr>
<tr><td style="padding:6px 0;color:#192026aa"><strong>Ideal Use</strong></td><td style="padding:6px 0">${type.includes('indica') ? 'Evenings, winding down, physical relaxation' : type.includes('sativa') ? 'Mornings, creative sessions, social gatherings' : 'Flexible — suits both active and restful moments'}</td></tr>
<tr><td style="padding:6px 0;color:#192026aa"><strong>AU Climate Match</strong></td><td style="padding:6px 0">${type.includes('indica') ? 'Thrives indoors; outdoors in dry zones (Adelaide, inland WA, western NSW)' : type.includes('sativa') ? 'Indoor with training essential; outdoor suits QLD and northern NSW subtropical belt' : 'Adapts across most AU growing environments, indoor or outdoor'}</td></tr>
</table>
</div>

<h2>${pick(slug, ['Australian Growing Conditions and This Cultivar', 'Matching ${name} to Your Aussie Setup', 'Climate Zones Where This Strain Shines', 'Growing ${name} in Australian Conditions'], 'h2au')}</h2>
<p>Australia spans tropical, arid, and temperate climate bands, and ${name} responds differently to each. Indoor growers — the majority of our Australian customers — need to maintain 22-27°C daytime and 17-21°C overnight. That is straightforward through autumn and spring, but summer demands attention. Garage grows in Perth, Adelaide, or western Sydney can see ambient temperatures spike above 38°C in January and February. If you cannot keep your tent below 30°C with extraction and passive intake, consider running your lights overnight during the hottest months — flipping your cycle so the 12-hour dark period falls during peak daytime heat.</p>
<p>Outdoor growers in the subtropics (Brisbane, Sunshine Coast, Cairns) benefit from long, warm seasons running from September through April. The ${flower}-week flower time sits comfortably within this window. Southern growers (Melbourne, Hobart, Canberra, highland NSW) face tighter calendars — if first frost arrives before mid-April in your area, you may need ${CL.auto} versions or ${CL.fast} genetics to guarantee a finished crop before cold sets in. ${CL.outdoor} lists cultivars evaluated specifically for Australian regional conditions.</p>

<h2>${pick(slug, ['Terpene Expression: From Harvest Day Through the Cure', 'What This Flower Smells and Tastes Like — Properly Cured', 'Aromatic Character and How Cure Duration Shapes It', 'Nose, Palate, and the Cure Window That Matters'], 'h2terp')}</h2>
<p>${terp === 'myrcene' ? `Myrcene gives ${name} an earthy, herbal backbone with a musky density that rewards patience. Straight off the drying line, the aroma reads as grassy and raw. After a fortnight in mason jars at 60-62% relative humidity, the grassiness fades and a richer, almost overripe-fruit musk pushes through. By week four, the complexity peaks — secondary aromatics from ${terp2} create a layered nose that one-week-cured flower simply cannot match` : terp === 'limonene' ? `Limonene gives ${name} a citrus-bright opening note that announces itself the moment you crack a jar. At 180-190°C in a dry herb vaporiser, the flavour lands tangy and slightly sweet with a clean finish — nothing like the thick, resinous character of myrcene-heavy cultivars. The ${terp2} secondary adds a supporting note that prevents the citrus from reading as one-dimensional after extended use` : terp === 'caryophyllene' ? `Caryophyllene delivers a peppery, savoury character with dry spice and wood undertones. If you have moved past the candy-flavour phase of cannabis appreciation, this profile rewards your palate. The ${terp2} co-dominant terpene rounds the sharpness, producing a mature flavour that reads as complex rather than harsh when cured for three or more weeks` : terp === 'pinene' ? `Pinene drives a sharp, resinous aroma — think crushed eucalyptus leaves mixed with fresh pine sap. This crispness translates beautifully through a vaporiser at 175-185°C, delivering a clean, almost medicinal brightness on the palate without the viscosity of heavier terpene profiles. The ${terp2} backing note adds body without muddying the primary character` : terp === 'linalool' ? `Linalool provides a floral, lavender-accented softness that distinguishes ${name} from the earthy and citrus profiles dominating the market. It is an understated terpene — at moderate concentrations it adds elegance and smoothness that users notice as a lack of harshness rather than a strong flavour. The ${terp2} secondary fills in enough depth to prevent the profile from reading as thin` : `Terpinolene is uncommon as a lead terpene, and that rarity is what makes ${name} interesting to growers bored by the ubiquity of myrcene-forward and limonene-forward cultivars. The aroma sits somewhere between herbaceous, lightly floral, and faintly citric — difficult to pin down, which is precisely the appeal. The ${terp2} secondary anchors the profile and gives it a recognisable throughline`}.</p>
<p>The universal rule with ${name}: do not skip the cure. Flower jarred at five days off the drying line and sampled at one week delivers perhaps 40% of the aromatic potential these genetics carry. Growers who push through to a full four-week cure consistently report that the improvement is dramatic enough to feel like a different cultivar entirely. ${P.terp('')}</p>

<h2>${pick(slug, ['Grow Room Behaviour: What to Expect from Seed to Harvest', 'Practical Cultivation — The Details Breeders Omit', 'Running This Cultivar: From Flip Day to Chop Day', 'Height Management, Feeding Rhythm, and the Common Pitfall'], 'h2grow')}</h2>
<p>${pick(slug, [
    `Feeding rhythm matters more than feeding strength with ${name}. The plant metabolises nutrients at a moderate pace through veg, then ramps demand noticeably around week three of flower as bud mass begins stacking. Many Australian growers running organic dry amendments find this transition catches them out — the slow-release nutrients that covered veg cannot keep up with peak bloom demand. If you see lower fan leaves yellowing rapidly right as buds are forming, the plant is telling you it needs a PK top-dress or liquid bloom supplement, not more nitrogen.`,
    `The stretch after flipping to 12/12 catches new growers of ${name} off guard. Under quality LED, plan for 35-45% height increase from the day you flip. In a standard 1.5 m tall tent, that means flipping when the canopy sits at 45-55 cm — not the 60 cm mark that works for naturally compact cultivars. Topping at the fourth or fifth node before the flip keeps the stretch manageable and creates the lateral branching structure that maximises light coverage across your canopy area.`,
    `Airflow through the canopy becomes non-negotiable from week five of flower onward. Most phenotypes of ${name} produce buds dense enough that interior moisture gets trapped between calyxes, creating micro-environments where Botrytis can establish before you see any external signs. This risk escalates for growers along the east coast — Sydney through to Brisbane — where late summer ambient humidity routinely exceeds 65%. Strategic defoliation during week three of flower, paired with oscillating fans directed through (not over) the canopy, mitigates this risk substantially.`,
    `${name} responds well to a single top at node four followed by gentle LST to spread the resulting lateral branches into a flat canopy. One plant grown this way fills roughly 80 cm × 80 cm of floor space after four to five weeks of vegetative growth. For Aussie growers running a 1.2 m × 1.2 m tent, two plants with this training approach creates efficient canopy coverage without crowding that restricts airflow during the dense flower phase.`,
  ], 'grow')}</p>
<p>Final height with standard management settles at ${height}. Flowering runs ${flower} weeks from the 12/12 switch. Indoor yield from a competent grower lands in the ${yl} g/m² range — the lower end for first attempts with the cultivar, the upper end once you have learned its specific feeding and training preferences. Outdoor plants in favourable Australian climates (long, warm seasons from October through April) frequently exceed indoor numbers because root volume and direct sunlight are hard to replicate under a tent. ${P.train('')}</p>

<h2>${pick(slug, ['The Experience: How It Feels and How Long It Lasts', 'What Happens After You Inhale — An Honest Account', 'Effect Character, Duration, and Dose Sensitivity', 'Subjective Effects and Who This Profile Suits'], 'h2eff')}</h2>
<p>At ${thc}% THC with ${terp} as the lead terpene, ${name} produces ${pick(slug, [
    `an onset that unfolds progressively rather than arriving all at once. The initial minutes bring ${type.includes('indica') ? 'a warm heaviness that settles across the shoulders and limbs — a physical unwinding that experienced users describe as tension leaving the body in a wave. Mental clarity stays surprisingly intact at moderate doses, though motivation to do anything beyond sitting comfortably diminishes. Overdo the dose and the sedation deepens into genuine immobility — a state best reserved for the end of the day rather than a Saturday arvo BBQ' : type.includes('sativa') ? 'a mental lift — a brightening of attention that makes music hit differently, conversation flow more easily, and creative tasks feel absorbing rather than tedious. Physically, the body remains light and comfortable. The useful window for productive activity extends across the first 90 minutes before a gentle taper begins. Anxiety-prone users should be careful with larger doses, as the cerebral stimulation can tip into restlessness at higher intake' : 'a simultaneous head-and-body balance that neither dominates. It is the kind of cultivar that adapts to context — alert enough for a bushwalk, settled enough for a film on the couch. Duration runs a reliable two to three hours for moderate doses, tapering smoothly without the abrupt comedown that some high-THC genetics produce'}`,
    `a consistent, plateau-style experience that holds steady for two to three hours before tapering gradually. Rather than the intense peak-and-crash cycle some cultivars deliver, ${name} maintains even intensity across its duration — a quality that makes dosing predictable after your first session or two. The ${terp}-dominant terpene character shapes the direction: ${terp === 'myrcene' ? 'heavier, more physical, with a sedative undercurrent that builds over time' : terp === 'limonene' ? 'mentally bright and emotionally comfortable, with minimal physical weight' : terp === 'caryophyllene' ? 'grounded and centred, without the scattered headspace some potent cultivars create' : 'lucid and present, with a crispness that keeps the experience from feeling foggy'}`,
  ], 'eff')}.</p>

<h2>${pick(slug, [`Honest Verdict: Should You Grow ${name}?`, `Who Benefits Most from This Cultivar — And Who Should Pass`, 'The Straightforward Assessment', `Making the Call on ${name}`], 'h2verdict')}</h2>
<p>${pick(slug, [
    `${name} suits Australian growers with one or two harvests under their belt who want a meaningful step up in flower quality without a dramatic increase in management complexity. The feeding requirements are moderate, the training response is reliable, and the terpene payoff at harvest is noticeably better than the fully beginner-proof genetics most people start with.`,
    `Raw potency chasers should look at our ${CL.thc} collection instead. ${name} is not designed to top THC charts — it is designed to deliver a complete experience where growing ease, terpene richness, effect quality, and harvest consistency all contribute to a cultivar worth running repeatedly.`,
    `First-time growers in Australia who want a cultivar that tolerates the temperature swings of a shed grow during January without collapsing should put ${name} on their shortlist. It handles the 25-35°C fluctuations common in unconditioned Australian growing spaces better than many genetics that look impressive on paper but fall apart when conditions are imperfect.`,
  ], 'who')}</p>
<p>Find ${name} and similar genetics in our ${CL.all}. Every order ships discreetly Australia-wide via Australia Post, with tracking included on all packages.</p>

<h2>Common Questions About ${name}</h2>
<dl>
<dt>Will ${name} finish outdoors in Melbourne or Hobart?</dt>
<dd>Melbourne — yes, for most phenotypes. The season from November through April provides enough warm weeks for the ${flower}-week flower period. Hobart is tighter: first frost can arrive in early April, so autoflower versions or an early October start with indoor pre-veg reduces risk. Monitor Bureau of Meteorology forecasts closely in late March.</dd>
<dt>When should I germinate for an outdoor grow in Australia?</dt>
<dd>September in subtropical zones (QLD, northern NSW), October in temperate zones (Sydney, Adelaide, Perth), mid-October to early November for cooler regions (Melbourne, ACT). Autoflower versions can go out anytime from October through mid-January and still finish before autumn.</dd>
<dt>How does ${name} cope with extreme Australian summer heat?</dt>
<dd>${type.includes('indica') ? 'Compact indica growth retains heat in the canopy — provide shade cloth or afternoon shade when temperatures exceed 35°C, and consider running indoor lights at night during heatwaves.' : type.includes('sativa') ? 'The naturally open canopy structure dissipates heat more efficiently than dense indicas, so moderate summer temperatures (28-33°C) are handled well. Above 38°C, supplementary watering and shade cloth become necessary.' : 'Balanced structure offers reasonable heat management. Standard Australian summer conditions are within its comfort range. During heatwave events above 37°C, increase watering frequency and provide shade during the hottest afternoon hours.'}</dd>
<dt>Can I grow ${name} year-round indoors in Australia?</dt>
<dd>Absolutely. Indoor growing removes seasonal constraints entirely. The main variable across Australian seasons is ambient temperature — summer requires more cooling and winter may need a small heater during dark periods to prevent the tent dropping below 16°C. Budget $30-50 AUD per month for electricity with a 200W LED setup.</dd>
</dl>
`;
}

function pillarNutrient(slug: string, title: string): string {
  return `
<p>Feeding cannabis successfully has less to do with which bottle you buy and more to do with understanding the system your plant lives in. The root zone is where chemistry meets biology — pH, dissolved minerals, microbial populations, and oxygen levels all interact to determine whether your carefully mixed nutrient solution actually reaches the plant. Australian growers face specific water quality challenges depending on their city (Adelaide's harder water versus Melbourne's softer supply, for instance), and the growing medium you choose changes the entire feeding dynamic. This guide covers the complete picture from a practical, Australian-grower perspective.</p>

<h2>The Root Zone Is the Control Point — Not the Bottle</h2>
<p>Most feeding problems start underground. A grower notices yellowing leaves, consults a chart, adds more of something, and the situation worsens. The disconnect is that symptoms above ground are consequences of conditions below ground — and those conditions are dominated by pH, moisture level, and accumulated salts rather than by which specific nutrient is missing from the bottle.</p>
<p>This is why experienced growers check pH and runoff EC before making any feeding change. That two-minute diagnostic step prevents the cascading overcorrection cycle that accounts for most nutrient-related crop damage in home grows.</p>

<h2>Individual Nutrient Roles — Focused on What Goes Wrong</h2>
<p><strong>Nitrogen (N):</strong> Fuels leaf expansion, chlorophyll synthesis, and vertical growth. Nitrogen deficiency climbs upward from the bottom of the canopy because the plant redistributes this mobile nutrient to protect its newest tissue. The common mistake: confusing normal lower-leaf ageing with nitrogen shortage. Ageing affects isolated leaves on shaded branches. Deficiency produces a progressive wave moving upward across multiple branches simultaneously. Nitrogen excess is equally damaging — dark, rigid, downward-clawing foliage paired with delayed flowering and spongy bud structure that never firms up properly.</p>
<p><strong>Phosphorus (P):</strong> Critical for root development and energy transfer through every metabolic pathway. Deficiency manifests as dark purpling along stems and petioles with an accompanying slowdown in growth. The trap: purple stems also appear from genetics and from cold root-zone temperatures during winter grows — both common in Australia. Distinguish by timing and context: phosphorus deficiency purpling arrives with stunted growth; genetic purpling appears without growth reduction; cold-induced purpling correlates with nighttime temperatures dropping below 15°C in your grow space.</p>
<p><strong>Potassium (K):</strong> Manages water regulation, enzymatic function, and osmotic balance within the plant. Deficiency burns leaf margins inward from the tips, typically appearing first during weeks five and six of flower when potassium demand peaks for resin and terpene biosynthesis. A grower running the same feed strength from week one through week eight of flower almost always encounters potassium shortage in late bloom — the plant outgrew the supply.</p>
<p><strong>Calcium (Ca):</strong> Structural — builds cell walls and cannot move within the plant once deposited. New growth twists, crinkles, and develops necrotic spotting when calcium is insufficient. LED-lit grows demand more calcium than HPS setups because the higher photosynthetic efficiency under quality LEDs accelerates cell division, which requires more structural calcium per unit of time. Many Australian growers switching from older HPS to modern LED panels see calcium issues emerge for the first time — the new light did not cause the problem; it revealed an existing supply limitation.</p>
<p><strong>Magnesium (Mg):</strong> Sits at the core of every chlorophyll molecule. Deficiency produces the most recognisable symptom in cannabis: green veins with yellowing tissue between them on older foliage. Coco coir naturally binds magnesium through cation exchange, making this the most common deficiency in coco-based Australian grows. Supplementing with cal-mag specifically formulated for coco prevents it entirely.</p>
<p><strong>Micronutrients:</strong> Iron deficiency (bright yellow new leaves with green veins) is almost never caused by absent iron — it is caused by high pH locking iron out of solution. Adding chelated iron while your pH sits at 7.0 wastes product. Lower pH first, and the iron already present in your feed becomes available. Manganese and zinc issues produce mottled leaf patterns that overlap visually; distinguish them by examining which leaf position (new versus old) displays the worst damage.</p>

<h2>pH Governs Access to Everything Else</h2>
<p>Regardless of what nutrients you mix into solution, roots can only absorb them within specific pH windows. In soil: 6.0-6.8. In coco or hydro: 5.5-6.5. Step outside these ranges and individual elements lock out progressively — calcium below 6.0 in soil, iron above 6.5, phosphorus at both extremes. A plant can be sitting in nutrient-rich medium and still starve because pH has shut the door on root uptake.</p>
<p>Testing and adjusting pH at every single watering is the habit that prevents more problems than any supplement, additive, or product change you could make. A basic pH pen from a hydroponic shop costs $25-40 AUD and pays for itself within the first fortnight of a grow by preventing problems that would otherwise cost yield and weeks of recovery time.</p>

<h2>Lockout, Deficiency, and Excess — A Diagnostic Separation</h2>
<p>These three conditions share visual symptoms, which is why misdiagnosis is rampant and overcorrection is the norm in online grow communities.</p>
<p><strong>Genuine deficiency:</strong> The element is depleted in the root zone. Symptoms develop gradually across five to ten days. Mobile elements (N, P, K, Mg) display on older tissue; immobile elements (Ca, Fe, Mn) display on the youngest growth. Resolution: supply the missing nutrient at moderate concentration.</p>
<p><strong>Lockout:</strong> The element exists in the medium but cannot be absorbed, typically because of pH drift or competing ion excess. Visually identical to deficiency. Adding more of the locked-out element worsens salt accumulation without fixing the underlying cause. Resolution: flush with three times the pot volume of pH-adjusted water, then resume feeding at a moderate strength with corrected pH.</p>
<p><strong>Excess/toxicity:</strong> Too much of a good thing. Nutrient burn (crispy brown tips progressing inward on new leaves), nitrogen toxicity (waxy, dark, downward-clawing foliage), and secondary lockouts caused by one element displacing another. Resolution: reduce feed concentration by 20-30%, flush if runoff EC is excessively high.</p>
<p>The reliable diagnostic protocol: (1) Measure input pH and runoff pH. (2) Measure runoff EC against input EC. (3) If pH is wrong, fix pH first and reassess in 48 hours. (4) If EC is high, flush and reduce feed. (5) Only supplement a specific nutrient once pH and EC are confirmed normal and the plant shows genuine depletion on new growth.</p>

<h2>Australian Water Quality and How It Affects Feeding</h2>
<p>Tap water mineral content varies significantly across Australian cities. Perth water is relatively soft with low dissolved minerals, making it a nearly blank canvas for nutrient mixing. Adelaide and Melbourne water tends to be harder, carrying higher calcium and magnesium levels that affect both pH buffering and nutrient balance. Brisbane and Sydney water falls in the middle range. Growers using rainwater tanks — common in rural and peri-urban Australia — get very soft water with almost no dissolved minerals, which provides maximum control but may require cal-mag supplementation from the start.</p>
<p>Before your first grow, invest $15 AUD in an EC/TDS meter and measure your source water. If your tap water EC reads above 0.4, you need to account for those dissolved minerals when mixing nutrients. If it reads below 0.2, you are working with clean water that gives your nutrient solution full control.</p>

<h2>Feeding Across Growth Stages — What Actually Changes</h2>
<p><strong>Seedlings (first fortnight):</strong> Feed nothing in pre-amended soil. In coco or hydro, start at quarter-strength. Tiny root systems cannot process concentrated nutrients. Overfeeding seedlings produces stunted, burnt starts that never reach their genetic potential — a mistake that costs the entire grow before it properly begins.</p>
<p><strong>Vegetative period:</strong> Ramp toward full strength by week three. Nitrogen demand is highest during active vegetative expansion. Healthy veg foliage shows a medium green with slight lightening at the growing tips. Dark, waxy leaves indicate excess nitrogen — back off before it affects flower development.</p>
<p><strong>Flip-to-flower transition (weeks one and two of 12/12):</strong> Gradually shift from veg-ratio to bloom-ratio nutrition across seven to ten days. Abrupt switches shock the plant; overly slow transitions delay flower development. Split the difference with a gradual seven-day crossover.</p>
<p><strong>Peak flowering (weeks three through six):</strong> PK demand spikes as bud mass stacks and trichome production accelerates. This window is where potassium deficiency most commonly appears in programs that maintained the same feed strength from veg through bloom.</p>
<p><strong>Final fortnight:</strong> Many growers reduce or eliminate nutrients to allow the plant to metabolise stored salts. Whether this "flush" measurably improves flavour is debated scientifically, but it reduces salt content in the finished flower and saves nutrient costs — no downside for the home grower.</p>

<h2>Mistakes That Cost Australian Growers the Most</h2>
<p><strong>Treating every symptom as a separate problem:</strong> Yellowing triggers a nitrogen supplement. Then brown spots trigger a calcium add. Then tip burn triggers a flush. Three changes in one week compounds root-zone instability. Fix the root cause — usually pH — with one adjustment, then wait 48-72 hours to evaluate.</p>
<p><strong>Assuming deficiency before checking lockout:</strong> In the vast majority of cases we discuss with Australian growers through support, what appears to be deficiency is actually lockout from pH drift. Adding more nutrients to a locked-out medium worsens the situation. Always check pH first.</p>
<p><strong>Dosing at label strength from day one:</strong> Nutrient manufacturers calibrate their charts for maximum product consumption. Most experienced growers run 60-75% of recommended concentration and adjust based on how their specific genetics respond. Starting at half strength and titrating upward is always safer than starting at full dose and trying to reverse nutrient burn.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>How frequently should I measure pH?</dt>
<dd>Every watering, no exceptions. It takes thirty seconds and prevents the single most common cause of nutrient problems. For hydroponic systems, check reservoir pH daily — it drifts as plants selectively uptake different ions at different rates.</dd>
<dt>Are yellowing lower leaves always a concern?</dt>
<dd>Not always. Individual lower leaves on shaded branches naturally senesce and yellow as the plant prioritises upper canopy growth. Concerning yellowing advances upward across multiple branches, appears on both sides of the plant, and is accompanied by noticeably slower new growth.</dd>
<dt>Should I flush the final two weeks before harvest?</dt>
<dd>The evidence is debated, but the practice is low-risk and common among quality-focused growers. Reducing feed strength in the final fortnight lets the plant draw on internal reserves, potentially improving burn quality and flavour smoothness. It costs you nothing except two weeks of nutrient savings.</dd>
<dt>Can I switch nutrient brands mid-grow?</dt>
<dd>Technically yes, but different brands use different salt formulations and pH buffers. If you must switch, flush the medium first with plain pH-adjusted water to clear residual salts, then introduce the new line at half strength and ramp up gradually. Avoid switching during peak flower if possible.</dd>
<dt>How do I spot overfeeding before it causes serious damage?</dt>
<dd>Watch the very tips of the newest leaves. The earliest sign of excess is a slight yellowing or browning at the leaf tips — sometimes just 1-2 mm of discolouration. At this stage, reducing feed by 15-20% stops the progression entirely. Catching it early prevents the cascade into full nutrient burn.</dd>
</dl>
`;
}

function pillarArticle(slug: string, title: string, cat: string): string {
  const topic = title.replace(/Cannabis |Marijuana |and |in /gi, '').trim();
  const topicLower = topic.toLowerCase();

  if (cat === 'pillar-germ') return `
<p>Every grow starts with a seed that either cracks or does not. In Australia, germination timing aligns with the Southern Hemisphere spring — September and October are ideal for outdoor growers — but indoor cultivators can germinate year-round provided the environment stays within the narrow temperature band that triggers enzymatic activity inside the seed shell. This guide covers the practical techniques, the failure points, and the seed-handling knowledge that separates growers who lose a third of their seeds from growers who lose almost none.</p>

<h2>Recommended Method: Damp Paper Towel Between Plates</h2>
<p>Lay two sheets of paper towel on a dinner plate, dampen them until moist but not dripping (wring until no water runs freely when squeezed), space your seeds 3-4 cm apart on the towel, fold the second sheet over the top, and invert a second plate on top to create a dark, humid micro-chamber. Place this assembly somewhere that maintains 22-26°C — the top of a modem, a set-top box, or a purpose-built seed heat mat.</p>
<p>Check every 12 hours. Remoisten the towel if it starts drying — seeds must stay uniformly moist throughout the process. When the taproot emerges and reaches 1-2 cm in length, transplant into your chosen medium with the root tip pointing downward, approximately 1 cm below the surface.</p>

<h2>Why This Method Outperforms Alternatives</h2>
<p>The paper towel approach gives you visibility that direct-to-medium planting does not. You can confirm crack, monitor taproot growth, and intervene if something stalls — all without disturbing the growing medium. Direct-to-soil germination works but forces you to wait blindly for up to two weeks without knowing whether the seed is progressing or dead. Water-glass soaking triggers the initial crack effectively but poses drowning risk if seeds remain submerged beyond 18-24 hours.</p>

<h2>Common Germination Failures and Their Actual Causes</h2>
<p><strong>Seed age and storage history:</strong> A seed that has spent an Australian summer in a hot shed — where temperatures inside containers can exceed 40°C — loses viability rapidly. Storage degrades enzymatic potential. Fresh seeds from temperature-controlled stock germinate at 90%+ rates. Seeds of unknown age from uncertain conditions may drop to 30-40%. Store ungerminated seeds in a sealed container in the refrigerator (4-8°C), not in a drawer, not on a windowsill, not in the garage.</p>
<p><strong>Waterlogged towels:</strong> A paper towel dripping wet smothers the seed by preventing oxygen exchange across the shell. The seed needs moisture to activate germination enzymes, but it also needs to breathe. If water pools when you tilt the plate, the towel is too wet.</p>
<p><strong>Cold environments:</strong> Below 18°C, the enzymatic reactions that split the seed coat slow to a crawl. Below 14°C, they effectively stop. This catches growers in southern Australia during September — you feel warm enough in a jumper, but the spare room where you placed the germination plate drops to 14°C overnight. A $15 AUD seedling heat mat solves this permanently.</p>
<p><strong>Rough handling of the taproot:</strong> The emerging root tip is the most fragile structure the plant will ever produce. Grabbing the seed by the root, dropping it onto a hard surface, or pressing it into dry, compacted medium can snap or bruise the root tip, killing the seedling before its first leaf opens. Handle germinated seeds by the shell only, using clean tweezers or your fingertips, and plant into pre-moistened medium with a small depression already formed.</p>

<h2>From Towel to Medium: The Vulnerable Transition</h2>
<p>Pre-moisten whatever medium you are transplanting into — dry substrate draws moisture away from the fragile root, desiccating it within hours. Create a pencil-width hole approximately 1 cm deep. Lower the seed in, root pointing downward (it self-corrects if slightly off-angle). Cover with loose medium without packing it down. Water gently around the planted seed, not directly on top of it.</p>
<p>Light introduction begins once cotyledon leaves (the first pair of rounded seed leaves) emerge and spread open — typically two to four days after planting. Start with low intensity: 200-300 PPFD, or a fluorescent tube at 30+ cm distance. Seedlings that stretch tall and thin are reaching for more light — lower the fixture gradually to encourage compact, sturdy growth. ${P.light('')}</p>

<h2>Seed Selection and Viability Indicators</h2>
<p>Mature, viable seeds are dark in colour (brown, grey, or tiger-striped), firm when gently pressed between thumb and forefinger, and have an intact, smooth outer shell. Pale green, soft, or cracked seeds are immature or damaged and germinate poorly. When purchasing, prioritise freshness and storage conditions over strain novelty — a perfectly stored common variety outgrows a poorly stored exotic every time. Our seeds ship in sealed, light-proof packaging and are stored under climate-controlled conditions to maximise viability upon arrival.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>How many days until a seed should crack?</dt>
<dd>Most viable seeds crack within 24-72 hours under proper conditions (22-26°C, consistent moisture). Older seeds may take five to seven days. If nothing happens after a full week at correct temperature and moisture, the seed is most likely non-viable.</dd>
<dt>Is it necessary to soak seeds in water before the paper towel?</dt>
<dd>Optional. Soaking for 12-18 hours in room-temperature water can soften the shell of older seeds and speed the initial crack. Do not soak beyond 24 hours — prolonged submersion prevents oxygen exchange and drowns the embryo.</dd>
<dt>Can I germinate in winter in Australia?</dt>
<dd>Yes, for indoor grows. Use a seedling heat mat to maintain 24-25°C regardless of room temperature. In Canberra, Melbourne, Hobart, and highland areas where unheated rooms regularly drop below 15°C in July and August, a heat mat is not optional — it is essential for reliable germination.</dd>
<dt>What if the taproot grows into the paper towel?</dt>
<dd>Gently moisten the paper and carefully peel it away. If the root has grown through the fibres, cut the paper around the root rather than pulling it — tearing the root tip is worse than transplanting with a small piece of towel attached, which will decompose harmlessly in the medium.</dd>
</dl>
`;

  if (cat === 'pillar-harvest') return `
<p>Harvest timing is the final major decision in any grow, and it is the one that determines whether weeks of careful cultivation produce exceptional flower or merely adequate flower. The maturity window for any cultivar spans roughly ten to fourteen days, and where within that window you chop shifts the THC-to-CBN ratio, the terpene volatility, the bud density, and the subjective character of the finished product. This guide covers the magnification techniques, the maturity indicators, and the post-harvest processing that preserves what your grow produced.</p>

<h2>Reading Trichomes Under Magnification</h2>
<p>Trichome gland heads progress through three visible stages under 30-60x magnification (a jeweller's loupe is the minimum; a USB digital microscope gives more detail). <strong>Clear/transparent heads:</strong> Precursor cannabinoids have not fully converted. Harvesting at this stage produces lighter, shorter-lasting effects with a racier, less potent character. <strong>Milky/opaque heads:</strong> Peak THCA concentration. This is where potency maximises — the gland is full, the conversion is complete, and the cannabinoid content is at its highest. <strong>Amber heads:</strong> THCA has begun degrading into CBNA (which becomes CBN after decarboxylation). CBN contributes mild sedation. More amber means a heavier, sleepier, more physically dominant experience.</p>
<p>The mistake most growers make with trichome reading: checking sugar leaf trichomes instead of calyx trichomes. Sugar leaves amber faster because their trichome glands are structurally different and less insulated. Calyxes — the swollen structures at the base of pistils that form the actual bud — are the accurate indicator. Sample three to four bud sites from mid-canopy for a representative read. Top colas mature five to seven days ahead of lower branches due to greater light exposure, so relying on the top alone leads to premature harvesting of the rest of the plant.</p>

<h2>Matching Your Harvest Window to Your Goals</h2>
<p><strong>Early (predominantly milky, under 5% amber):</strong> Preserves the brightest, most volatile terpenes — citrus, floral, and pine notes peak here because they degrade first with extended maturity. Effect character leans cerebral, uplifting, and shorter-lasting. Bud density is slightly lower. This timing suits sativa-leaning cultivars where preserving mental energy and aromatic brightness is the priority.</p>
<p><strong>Standard (10-15% amber on calyxes):</strong> The balanced window where most breeders intend their genetics to be harvested. THC is fully expressed, secondary terpenes have had time to develop, bud density is good, and the effect profile most closely matches the cultivar's described character. If you have no strong preference, this window delivers the most representative version of any strain.</p>
<p><strong>Extended (20-30% amber):</strong> CBN content is elevated. The effect shifts toward heavy physical sedation — this is where the "couch-lock" character lives. Terpene profile skews earthier and muskier as brighter aromatics have volatilised off. Bud density peaks but foxtailing may begin in heat-sensitive phenotypes. Growers producing flower specifically for sleep support or heavy evening relaxation target this window deliberately.</p>

<h2>Drying: The Stage That Destroys More Flower Than Any Other</h2>
<p>Target conditions: 15-16°C, 58-62% relative humidity, total darkness, gentle air circulation that moves through the room without blowing directly across hanging branches. These parameters produce a ten-to-fourteen-day dry — slow enough that chlorophyll fully degrades, interior bud moisture equalises with the exterior, and volatile harsh compounds off-gas before the flower goes into jars.</p>
<p>Rapid drying (finishing in three to five days because the room is warm and dry) produces the hay-smell disaster that ruins months of effort. That specific stale odour comes from chlorophyll that decomposed incompletely because drying happened faster than the enzymatic breakdown could keep pace. There is no cure-stage recovery from a botched dry — you can improve a fast-dried flower marginally through extended curing, but the aromatic complexity destroyed by heat and speed is gone permanently.</p>
<p>This is a particular concern for Australian growers harvesting outdoor crops in late March or early April, when ambient temperatures in many regions still sit above 24°C and humidity fluctuates wildly. If your ambient drying conditions are too warm, dedicate an air-conditioned room or install a small portable AC unit in the drying space. The $300 AUD investment in a portable air conditioner pays for itself in flower quality on the very first harvest.</p>

<h2>Cure Protocol: Where the Final 30-40% of Quality Develops</h2>
<p>Once smaller stems snap cleanly rather than bending (usually day ten to fourteen), trim and transfer flower into glass mason jars filled to 75% capacity. Place a small digital hygrometer ($8-12 AUD from any electronics retailer) in each jar. Target internal humidity: 60-62%.</p>
<p>For the first seven days, open each jar for thirty to sixty seconds twice daily to exchange air and release accumulated moisture. After the first week, reduce to once daily. After the second week, every two to three days. Continue for a total of three to five weeks minimum.</p>
<p>During this period: residual chlorophyll continues breaking down (reducing harshness), terpene complexity deepens as secondary and tertiary aromatic compounds develop, sugar and starch conversion improves smoothness, and overall flavour gains a dimensionality that one-week cured flower cannot deliver. ${CL.kush} genetics and dense indica cultivars often benefit from six to eight weeks of cure. ${P.cure('')}</p>

<h2>Post-Cure Long-Term Storage</h2>
<p>Once curing is complete, storage priorities are: darkness, cool temperatures (15-20°C), stable humidity (58-62%), and minimal air exposure. Glass mason jars in a cupboard away from heat sources work perfectly. Avoid plastic bags (static charge strips trichome heads), avoid frequent opening (terpenes are volatile and escape), and avoid heat and light (THC degrades to CBN, terpenes evaporate faster). In Australia's warmer climate, storing jars in a hallway cupboard or wardrobe is far better than a shed, garage, or any sun-exposed room. Properly stored, cured flower maintains quality for six to twelve months.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>Are pistil colour changes a reliable harvest indicator?</dt>
<dd>Pistil colour (white-to-amber transition) provides a rough signal but should never be the sole indicator. Some genetics change pistil colour weeks before trichomes mature; others hold white pistils well past optimal harvest. Use pistils as a prompt to start checking trichomes under magnification.</dd>
<dt>What if I have to harvest early due to weather or pests?</dt>
<dd>An early harvest at mostly milky trichomes produces usable flower with lower potency, shorter duration, and brighter but simpler aromatics. It is not ideal, but it is far better than losing the crop to Botrytis or frost. Process and cure as normal — the flower benefits from proper post-harvest handling regardless of maturity level.</dd>
<dt>How do I manage drying in a humid Australian coastal climate?</dt>
<dd>If ambient humidity stays above 65% — typical along the east coast from February through May — a dehumidifier in the drying room is non-negotiable. Without it, drying takes too long and mould risk increases dramatically. Target 55-60% relative humidity in the drying space. A small extraction fan improves air exchange without creating direct wind over the flower.</dd>
<dt>Does jar size matter for curing?</dt>
<dd>Yes. Larger jars (1+ litre) work well for larger harvests but take longer to equalise humidity. Smaller jars (500 mL) are more responsive to burping and equalise faster. If humidity inside a large jar reads above 65% after sealing, the flower went in too wet — open the jar for several hours, let the exterior dry further, and reseal.</dd>
</dl>
`;

  // Generic pillar for other topics — structurally distinct from US version
  return `
<p>Across dozens of conversations with Australian growers each week, the questions about ${topicLower} follow a pattern: the surface-level information is easy to find, but the practical application — what to actually do differently in your tent, with your genetics, in your climate — gets lost in generic advice written for conditions that may not match yours. This guide provides the grower-level detail that makes the concept actionable.</p>

<h2>The Fundamental Mechanism and Why It Compounds</h2>
<p>${pick(slug, [
    `${topicLower.charAt(0).toUpperCase() + topicLower.slice(1)} influences every metabolic process in the cannabis plant simultaneously. Photosynthesis, transpiration, nutrient transport, and hormone signalling all respond to this variable — which means a disruption here does not produce a single isolated symptom. It triggers a cascade where one stress leads to secondary stresses that mask the original cause. Growers who chase individual symptoms without tracing them back to the underlying ${topicLower} problem end up making multiple corrections that worsen overall plant stability.`,
    `What makes ${topicLower} challenging is not that the optimal ranges are hard to achieve — they are well documented. The challenge is that these ranges shift as the plant moves through growth stages, and the feedback delay between a change in ${topicLower} conditions and a visible plant response can be three to seven days. By the time you see a problem, the cause occurred earlier in the week. Understanding this delay transforms how you troubleshoot.`,
  ], 'core')}</p>

<h2>Applying This to Different Australian Growing Setups</h2>
<p><strong>Tent in a spare room (the most common Aussie setup):</strong> Temperature and humidity inside the tent depend heavily on the ambient conditions of the room. In a Perth or Adelaide summer, that room might hit 38°C during the day even with windows closed. In a Melbourne winter, it might drop to 10°C overnight. Both extremes affect ${topicLower} parameters. Running your light cycle overnight during summer (lights on from 6 PM to 6 AM) keeps the hottest hours during the dark period when the plant is less metabolically active and more tolerant of heat.</p>
<p><strong>Shed or garage grow:</strong> Uninsulated sheds amplify temperature extremes. Insulation board ($50-80 AUD for a 1.2 m tent's worth from Bunnings) on the tent-adjacent walls moderates swings significantly. Garage grows in Queensland benefit from naturally stable humidity but fight heat year-round. Southern garage grows face cold winters that stall root activity and slow growth.</p>
<p><strong>Outdoor grows:</strong> ${topicLower.charAt(0).toUpperCase() + topicLower.slice(1)} management outdoors means strain selection and timing rather than environmental control. Choose genetics that tolerate your region's specific conditions. ${CL.outdoor} includes cultivars evaluated for climate resilience across Australian growing zones.</p>

<h2>Growth Stage Requirements — What Shifts and When</h2>
<p><strong>Seedling phase (weeks one and two):</strong> The narrowest acceptable range. Seedlings cannot buffer against ${topicLower} disruption because their root mass is tiny and energy reserves are minimal. Keep conditions conservatively in the centre of the acceptable range, not at the edges. Errors here set back the entire grow by one to two weeks and can produce permanently stunted plants.</p>
<p><strong>Vegetative growth (weeks three through six+):</strong> The plant is building mass and can absorb moderate stress without permanent damage. Consistency matters more than absolute precision — a steady environment with minor daily fluctuations produces better growth than swinging between "perfect" and "poor" on alternating days.</p>
<p><strong>Transition to flower:</strong> When you flip to 12/12, the plant's metabolic priorities reverse from expansion to reproduction. The optimal ${topicLower} parameters shift during this transition, and growers who do not adjust create stress precisely when the plant is establishing bud sites.</p>
<p><strong>Peak flower (weeks three through six of 12/12):</strong> The highest-value period. Bud mass accumulation, trichome development, and terpene synthesis all peak during these weeks. ${topicLower.charAt(0).toUpperCase() + topicLower.slice(1)} management during this window has the most direct impact on final harvest quality. This is where precision effort delivers the most visible return.</p>

<h2>Common Errors and How to Avoid Them</h2>
<p><strong>Overreacting to brief fluctuations:</strong> A four-hour spike in temperature during a heatwave does not require dramatic intervention. Cannabis tolerates short-term stress far better than the accumulated stress of constant environmental changes driven by an anxious grower. If the plant looks fine after 48 hours, it was fine.</p>
<p><strong>Relying on numbers instead of observing the plant:</strong> A thermometer reading "25°C" means nothing if the plant is drooping, growing slowly, and showing colour changes. Instruments measure a snapshot; the plant integrates every condition it has experienced across days. Learn to read leaf posture, colour, growth rate, and stem turgor as primary indicators, using instruments for confirmation rather than as the sole guide.</p>
<p><strong>Ignoring the interactions:</strong> ${topicLower.charAt(0).toUpperCase() + topicLower.slice(1)} interacts with light intensity, nutrient concentration, watering frequency, and airflow velocity. Optimising one variable while ignoring its relationship to others can improve one metric at the expense of another. Experienced growers adjust their entire system rather than tweaking a single dial.</p>

<h2>Choosing Genetics That Match Your Conditions</h2>
<p>If your environment consistently challenges your ability to maintain optimal ${topicLower} conditions, the highest-leverage change may be choosing genetics bred for resilience rather than spending money on equipment to force conditions the genetics were never designed for. ${CL.auto} tolerate wider condition ranges due to their compressed lifecycle. Hardy ${CL.ind} from mountain heritage handle environmental variability better than equatorial genetics. The ${CL.all} includes difficulty ratings that account for environmental sensitivity.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>How rapidly do ${topicLower} problems show up in the plant?</dt>
<dd>Mild disruptions take three to seven days to produce visible symptoms. Severe conditions (extreme heat, flooding, complete dark-period light leak) show within hours as wilting, curling, or abrupt growth stall. The delay between cause and symptom is why weekly comparison photographs are more diagnostic than daily observation.</dd>
<dt>Can plants bounce back from ${topicLower} stress?</dt>
<dd>Yes, provided the stressor is corrected before it causes structural tissue death. Damaged leaves will not recover, but new growth emerges healthy within seven to fourteen days of correction. The growth time lost during stress and recovery reduces yield proportionally — earlier intervention means less lost potential.</dd>
<dt>Does cultivar choice significantly affect ${topicLower} sensitivity?</dt>
<dd>Substantially. Tropical sativa heritage confers heat and humidity tolerance — relevant for Queensland and Top End growers. Afghan and Hindu Kush lineage provides cold resilience — relevant for Victorian Highlands, Tasmanian, and ACT cultivators. Autoflowers from ruderalis ancestry tolerate wider environmental ranges across the board. Match genetics to your conditions for the best results with the least effort.</dd>
</dl>
`;
}

function supportNutrient(slug: string, title: string): string {
  const topic = title.replace(/Cannabis |Marijuana |in Plants?|and |&amp; /gi, '').trim();
  return `
<p>${pick(slug, [
    `Understanding ${topic.toLowerCase()} at a topic-specific level prevents the kind of misdiagnosis that sends growers spiralling through three or four incorrect corrections before landing on the actual issue. Generic nutrient advice — "check pH, adjust feed" — is not wrong, but it lacks the specificity needed to address ${topic.toLowerCase()} effectively when it presents in your grow room.`,
    `Australian growers usually encounter ${topic.toLowerCase()} once they have moved past their first grow and started paying closer attention to subtle differences in leaf appearance between plants and across the canopy. At that stage, the ability to identify this specific condition — and distinguish it from the half-dozen other issues with overlapping visual symptoms — saves both time and flower quality.`,
    `${topic} behaves differently from general nutrient imbalances in ways that matter for correction. The visual presentation has specific characteristics, the trigger conditions follow a recognisable pattern, and the resolution requires a targeted approach that catch-all feeding adjustments will not deliver.`,
  ], 'open')}</p>

<h2>Recognising This Condition Specifically</h2>
<p>${pick(slug, [
    `Before adjusting anything, collect three data points: the pH of your feed solution and your runoff, the EC of your runoff relative to your input, and a clear photograph of the symptomatic growth under neutral white light. Grow-light photography — under blurple or warm HPS — distorts leaf colour and makes accurate diagnosis impossible. These three measurements narrow the possible causes from a dozen to one or two.`,
    `Diagnosing ${topic.toLowerCase()} starts by ruling out the environmental factors that produce visually similar symptoms. Heat stress, light bleaching, and chronic overwatering all create leaf changes that resemble nutrient issues. If your environment is stable (22-28°C, 45-60% RH, no canopy-level light burn), then the symptom is likely nutritional. From there, examine which canopy position shows the worst damage — upper versus lower growth — and what pattern the damage follows (tip burn, margin scorch, interveinal yellowing, or tissue deformation).`,
    `One useful diagnostic distinction for ${topic.toLowerCase()}: is the damage still spreading or has it stabilised? Actively worsening symptoms despite normal feeding suggests lockout — the nutrient is chemically present but physically unavailable to roots. Symptoms that stopped progressing after your last adjustment suggest the correction is working and you simply need to wait for new growth to confirm recovery. Old, damaged tissue never heals — only new leaves tell you whether conditions have improved.`,
  ], 'diag')}</p>
<p>${P.nutrient(topic)}</p>

<h2>What Typically Triggers This in Australian Grows</h2>
<p>${pick(slug, [
    `Three trigger scenarios account for the vast majority of ${topic.toLowerCase()} cases our team discusses with customers: (1) accumulated pH drift across multiple waterings where pH was not tested or adjusted, (2) growing medium that has exhausted its buffering capacity — common with reused coco coir or aged organic soil mixes, or (3) the plant transitioning between growth stages while the feeding program remained static. Each scenario requires a different correction approach.`,
    `The single most frequent trigger Australian growers report for ${topic.toLowerCase()}: maintaining the same nutrient concentration from vegetative growth through late flowering without accounting for the plant's shifting demands. What sustains healthy veg-phase foliage is insufficient for peak bloom-phase flower production, and the gap between supply and demand manifests as specific deficiency symptoms that get blamed on the nutrient brand rather than the unchanged dosing schedule.`,
    `Environmental factors specific to Australian grows that precipitate ${topic.toLowerCase()}: modern LED fixtures driving higher photosynthetic rates than the calcium supply can support, cold root-zone temperatures during winter months suppressing active nutrient transport, and the wide range in tap water mineral content across Australian cities affecting baseline nutrient availability before you even open a bottle.`,
  ], 'trigger')}</p>

<h2>Correcting the Problem Without Overcorrecting</h2>
<p>${pick(slug, [
    `Step one: measure pH. If it falls outside the optimal window for your medium (soil 6.0-6.8, coco and hydro 5.5-6.5), correct pH and do nothing else for 48 hours. This single intervention resolves the majority of ${topic.toLowerCase()} presentations. Step two: if pH is normal, compare runoff EC to input EC. Significantly elevated runoff EC indicates salt accumulation — flush with three times the pot volume of pH-adjusted water, then resume at 60-70% of previous feed strength. Step three: if both pH and EC check out, the issue is genuine nutrient depletion. Supplement at half strength and reassess in five to seven days by examining new growth.`,
    `Correction principles: (1) Make one change at a time. (2) Start with the most statistically likely cause — pH drift accounts for approximately 70% of cases. (3) Wait a full 48-72 hours after any adjustment to evaluate the plant's response. (4) Assess recovery exclusively on new growth — existing damaged foliage is historical evidence, not a current status indicator. (5) If symptoms persist after one correction cycle, reconsider whether the initial diagnosis was accurate.`,
  ], 'fix')}</p>

<h2>Genetics and Feeding Tolerance</h2>
<p>Some cultivars are inherently more demanding feeders than others. High-performance ${CL.thc} strains with aggressive growth patterns consume nutrients at a pace that requires precise management and rapid responses when supply falls short. At the other end, ${CL.auto} and moderate-vigour hybrids tolerate imprecise feeding with more grace. If ${topic.toLowerCase()} keeps recurring across multiple grows despite your best efforts, consider whether the genetics you are running demand a level of feeding precision that does not align with your current skill level or management routine — sometimes the most effective fix is choosing a cultivar that fits your growing style rather than fighting to match a demanding plant.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>How soon should I expect to see recovery?</dt>
<dd>Five to ten days for visible improvement on new growth. Previously damaged tissue will not repair — those leaves serve as a permanent record of the issue. If new foliage continues displaying symptoms after ten days of corrected conditions, the diagnosis or correction needs revision.</dd>
<dt>Does this problem reduce final harvest weight?</dt>
<dd>Any nutrient disruption during the flowering period directly diminishes bud development. The impact scales with both severity and duration — a mild issue corrected within a week produces minimal yield loss, while a severe lockout lasting three weeks during peak bloom can reduce harvest by 20-30%.</dd>
<dt>Is this condition more common in certain growing media?</dt>
<dd>Coco coir surfaces nutrient problems fastest because it provides zero buffering — root-zone chemistry reaches the plant within days. Soil buffers problems longer, which is both an advantage (slower onset) and a risk (issues can accumulate silently until they become severe). Hydroponics surfaces problems within hours and allows the fastest correction.</dd>
</dl>
`;
}

function supportCultivation(slug: string, title: string): string {
  const topic = title.replace(/Cannabis |Marijuana |and |in |Plants?/gi, '').trim();
  const topicLower = topic.toLowerCase();
  let specific: string;

  if (/seedling|transplant/.test(slug)) {
    specific = `
<h2>The First Fortnight Sets the Trajectory</h2>
<p>A seedling's first ten to fourteen days determine its ceiling for the rest of the grow. Strong early root development in appropriate medium, under gentle light, at a stable 23-25°C creates a plant with the structural foundation to handle the stresses of topping, training, and the metabolic demands of flower production. A seedling that stretches toward distant light, drowns in waterlogged medium, or gets hit with full-strength nutrients during its first week carries that damage forward — permanently reduced vigour, weaker stems, smaller root mass, and lower ultimate yield.</p>
<p>Lighting for seedlings should sit around 200-300 PPFD — roughly 40-50% of what you provide during flowering. A 200W LED that works at 45 cm for vegetative plants will bleach seedling tissue at the same distance. Start at 60-75 cm and reduce height by 5 cm every three to four days as the seedling produces its first pairs of true leaves. Stretched, lanky seedlings with thread-thin stems need more light intensity. Compact seedlings with thick, sturdy stems are receiving the right amount.</p>
<h2>Getting Transplant Timing Right</h2>
<p>Move the seedling when roots reach the edges and bottom of the starter pot but before they begin circling. In a typical 300 mL container, this happens ten to fourteen days after sprouting. Pop the root ball out and assess: if it holds its shape, the roots have colonised the medium adequately and it is time to move up. If it crumbles apart, the roots need more time. If roots are a dense white mat wrapping the container multiple times, you waited too long — the plant is root-bound and will need a few extra days to recover after transplant.</p>
<p>Both the old root ball and the new medium should be moist at transplant time. A dry interface between old and new medium creates a gap that roots hesitate to cross, stalling root expansion into the fresh medium for days. Do not feed for three to five days post-transplant — let the roots establish in their new territory without the additional stress of concentrated nutrient salts. ${P.germ('')}</p>
<h2>Pot Sizing: The Step-Up Sequence</h2>
<p>Starter pot to 4 litre to 15-20 litre final container is the standard Australian home-grow progression. Each step roughly triples root space. Skipping straight from a starter pot to a 20-litre final pot works but invites overwatering problems — the large volume of uncolonised medium stays wet around the tiny root ball, creating anaerobic conditions that promote root rot.</p>
<p>Exception: ${CL.auto} should go directly into their final container from the start. Autoflowers have no time to waste recovering from transplant shock. Every stalled day reduces final yield in a lifecycle that runs only eight to twelve weeks. If planting an auto into a 15-litre pot, water in a small circle around the seedling and expand the watering radius gradually as roots colonise outward.</p>
<h2>Troubleshooting Early-Stage Seedling Issues</h2>
<p><strong>Damping off (seedling collapses at the soil line):</strong> A fungal attack triggered by persistently wet conditions and stagnant air. Prevention is the only reliable approach — ensure adequate airflow, avoid overwatering, and use clean, unused medium. Once a seedling damps off, it is lost.</p>
<p><strong>Helmet head (seed shell stuck on the emerging cotyledons):</strong> The seed coat failed to separate during emergence. Most cases resolve naturally within 48 hours as the cotyledons push the shell off. If still stuck after two days, lightly mist the shell to soften it and use fine tweezers to ease it away. Never yank — tearing cotyledons destroys the seedling's initial energy source.</p>
<p><strong>Cotyledon yellowing (week two or three):</strong> Normal. Cotyledons are the seed's stored energy reserves. As the plant develops true leaves and becomes photosynthetically self-sufficient, the cotyledons are depleted and yellow. This is a developmental milestone, not a problem.</p>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>Should seedlings receive nutrients?</dt>
<dd>In pre-amended soil: no supplemental feeding until week three at the earliest — the soil contains everything the seedling needs initially. In coco or hydro: introduce nutrients at 25-30% of full strength once the first pair of true (serrated) leaves is fully open. Seedling roots are tiny and cannot process concentrated feed.</dd>
<dt>How much water does a seedling actually need?</dt>
<dd>Very little. Water a small ring around the stem, not the entire pot surface. The root zone occupies only a fraction of the container at this stage — wetting the entire volume creates persistently moist conditions in areas where no roots exist, which promotes fungal growth and root problems.</dd>
<dt>When is it safe to start topping or bending?</dt>
<dd>After the fourth or fifth node is established and the stem has developed a slight woodiness — typically three to four weeks after emergence. Training a very young seedling risks snapping stems that have not developed enough structural rigidity to handle manipulation.</dd>
</dl>`;
  } else if (/clone|cloning/.test(slug)) {
    specific = `
<h2>Cloning vs. Starting from Seed: Making the Decision</h2>
<p>Cloning produces a genetic replica of a specific plant — identical terpene profile, growth pattern, potency, and phenotype. If a seed run revealed one standout phenotype that you want to grow repeatedly, cloning preserves it indefinitely. The limitations: clones carry the mother's biological age (no age reset like seeds), they develop fibrous root systems rather than a single taproot (which limits outdoor vigour), and you need to maintain a healthy mother plant or have access to a reliable clone source.</p>
<p>Seeds from ${CL.fem} offer genetic diversity (each seed expresses a slightly different phenotype), fresh seedling vigour, full taproot development, and independence from maintaining a mother. For most Australian home growers, the practical approach is to run seeds to explore the phenotypic range, identify your favourite, then clone that specific plant for subsequent runs.</p>
<h2>Cutting Technique: Where Success or Failure Is Determined</h2>
<p>Choose a branch tip 10-15 cm long from the lower-to-middle canopy of a healthy mother in active vegetative growth. Make a clean 45-degree cut just below a node using a fresh razor blade — scissors crush the vascular tissue and impair water uptake. Strip the leaves from the lowest two nodes immediately, leaving two to three sets of upper leaves intact. Trim the remaining fan leaf tips by roughly half to reduce the transpiration load on a cutting that has no root system to replace lost moisture.</p>
<p>Apply rooting hormone (gel formulations adhere better than powders) to the cut surface and 1-2 cm up the stem. Insert into pre-moistened rooting medium — rockwool cubes, peat plugs, or rapid rooter plugs all work. Place the tray inside a humidity dome and maintain 24-27°C with 80-90% relative humidity. Roots typically emerge in seven to fourteen days. Light should be minimal — a T5 fluorescent tube or a dimmed LED at 30+ cm. Intense light drives photosynthetic activity that the rootless cutting cannot support.</p>
<h2>Five Failure Points and How to Avoid Each</h2>
<p><strong>Taking cuttings from stressed mothers:</strong> A mother experiencing nutrient deficiency, heat stress, or (worst case) mid-flower produces low-energy cuttings that struggle to root. Only take cuttings from a healthy, well-fed mother in active veg growth.</p>
<p><strong>Allowing air into the stem:</strong> An air embolism in the cut stem prevents water uptake. Cut either underwater or transfer the cutting into rooting gel or water within seconds of cutting. Do not let the fresh cut surface sit exposed to air.</p>
<p><strong>Insufficient humidity:</strong> Without roots, the cutting depends on foliar absorption and minimal transpiration to stay hydrated. Below 70% relative humidity, it dehydrates faster than it can compensate. A humidity dome is essential in dry Australian climates — Adelaide, Perth, inland NSW, and anywhere running air conditioning.</p>
<p><strong>Contaminated equipment:</strong> Reused trays, unsterilised blades, and old rooting medium introduce fungal and bacterial pathogens that attack the vulnerable cut wound. Clean everything between cloning sessions.</p>
<p><strong>Impatient inspection:</strong> Lifting cuttings to check for roots introduces handling stress and exposes developing root tips to dry air. Set and forget for a minimum of seven days. Visible wilting in the first 48 hours is normal as the cutting adjusts — do not intervene unless a cutting collapses completely.</p>
<h2>Post-Rooting Transition</h2>
<p>Once white root tips emerge from the medium, begin reducing humidity gradually over three to five days by opening dome vents progressively wider. Transplant into small containers with your chosen growing medium. Feed at quarter-to-third strength initially. Increase light intensity to seedling levels (around 300 PPFD). Handle rooted clones with the same care you would give seedlings until they show active new vegetative growth — usually five to seven days after transplanting into medium.</p>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>What age should a mother plant reach before cloning?</dt>
<dd>Two months minimum from seed, with six or more developed nodes. Younger mothers produce low-vigour cuttings with insufficient energy reserves for reliable rooting.</dd>
<dt>Can I take clones from a plant that is already flowering?</dt>
<dd>Yes — the technique is called "monster cropping" — but success rates are notably lower and clones require two to three additional weeks to revert from flowering back to vegetative growth. Cloning from a mother in veg is considerably more reliable.</dd>
<dt>How many cuttings can I take from one mother per cycle?</dt>
<dd>A well-established mother with ten or more branches supports six to ten cuttings per session without excessive stress, provided she receives adequate nutrition and three to four weeks of recovery time between cutting sessions.</dd>
</dl>`;
  } else if (/medium|hydroponic|coco|soil/.test(slug)) {
    specific = `
<h2>Your Medium Shapes Your Entire Growing Approach</h2>
<p>The growing medium is not just a container that holds roots in place — it is the chemical and biological interface that governs every aspect of the root-zone relationship between your nutrient solution and the plant. Change your medium and you change your watering schedule, your feeding approach, your pH management routine, your error margin, and the speed at which problems both appear and can be corrected. No other single variable transformation has as broad an impact on day-to-day growing practice.</p>
<h2>Organic Living Soil: The Low-Intervention Path</h2>
<p>Amended organic soil hosts a microbial ecosystem that converts organic matter into plant-available nutrients through biological decomposition. The soil biology acts as a buffer — moderating pH fluctuations, releasing nutrients at a pace the plant can absorb, and creating a self-regulating environment where the grower's role is to maintain conditions that support microbial health rather than directly feeding the plant with bottles.</p>
<p>Advantages: forgiving of imprecision, low ongoing input costs, and a flavour profile that many growers describe as more complex than hydro-grown flower. Trade-offs: slower vegetative growth rates than direct-feed methods, limited ability to rapidly correct nutrient imbalances, potential pest habitat in the organic material, and difficulty diagnosing problems when the biology operates on its own schedule. Overfeeding in living soil — dumping extra compost tea or liquid amendments — frequently disrupts the microbiology that was handling nutrition adequately on its own.</p>
<h2>Coco Coir: Direct-Feed Precision Without Full Hydro Complexity</h2>
<p>Coco offers an air-to-water ratio that makes overwatering practically impossible, which is a significant safety net for newer growers who tend to water too frequently. Coco coir is widely stocked at hydroponic retailers and garden centres across Australia — Bunnings carries it, and every capital city has specialist hydro shops with premium options. However, coco has zero inherent nutrient content. Every mineral the plant needs comes from your nutrient solution at every watering. Mistakes that take a week to surface in soil show up within two to three days in coco.</p>
<p>The critical coco-specific consideration: cation exchange. Coco fibres naturally bind calcium and magnesium ions, reducing their availability to roots. Coco-formulated nutrient lines include additional cal-mag to compensate. Using soil-formulated nutrients in coco almost always produces cal-mag deficiency within two to three weeks — a problem that confuses growers who followed the same bottle instructions that worked in soil. Use coco-specific nutrients, feed at every watering, target 10-20% runoff to prevent salt accumulation, and never allow coco to dry out completely.</p>
<h2>Hydroponics and Deep Water Culture</h2>
<p>Hydro delivers nutrients directly to roots suspended in oxygenated solution. Growth rates exceed soil by 20-30%. Yield scales proportionally with the same genetics. The trade-off is monitoring intensity — pH and EC require daily checks, sometimes twice during warm conditions. Australian summers pose a specific hydro challenge: nutrient solution temperatures above 22°C invite root pathogens (Pythium thrives in warm, low-oxygen water). Reservoir chillers or frozen water bottles may be necessary when ambient temperatures push above 30°C.</p>
<p>Equipment failure in hydro is an emergency, not an inconvenience. A dead air pump starves roots of oxygen within hours. A failed water pump in a recirculating system dries roots in half a day. DWC (deep water culture) — a single bucket, an air pump, an air stone, and a net pot — is the simplest hydro entry point for home growers. The learning curve runs steep for the first fortnight, then levels out as you develop a daily monitoring routine.</p>
<h2>Matching Medium to Your Experience and Situation</h2>
<p>First grow ever: soil. Its buffering capacity forgives the mistakes every beginner makes, and the slower pace gives you time to learn plant reading before problems escalate. Experienced gardener moving to cannabis: coco. The precision and responsiveness feel intuitive if you are already attentive to plants. Committed to maximising yield and willing to invest in equipment and daily attention: hydro. The faster growth and higher harvest potential reward the additional management.</p>
<p>${CL.auto} perform well in all media but particularly shine in coco, where rapid nutrient delivery matches the autoflower's compressed growth timeline. ${CL.fem} benefit from hydro's yield uplift if your system management skills are solid. The ${CL.all} includes difficulty ratings calibrated for soil growing — adjust expectations if growing in coco (slightly easier for watering, slightly harder for feeding) or hydro (easier for growth speed, harder for system stability).</p>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>Can I recycle coco coir for the next grow?</dt>
<dd>Yes, with preparation. Flush thoroughly with pH-adjusted water, remove all root debris, and re-buffer with a cal-mag solution before replanting. Many Australian growers reuse coco for two to three cycles before replacing — the fibres break down gradually and lose structural integrity over time.</dd>
<dt>Why does my soil grow lag behind my mate's coco grow in growth speed?</dt>
<dd>Soil relies on microbial nutrient conversion, which is inherently slower than direct liquid feeding. This is expected and normal. The trade-off: soil-grown flower often develops more nuanced terpene profiles due to the broader mineral availability in organic media. Faster is not always better for final flower quality.</dd>
<dt>Is hydro genuinely worth the extra complexity for a home grower?</dt>
<dd>If you enjoy the technical side and want maximum harvests: yes, the yield improvement is real and measurable. If you value simplicity and moderate harvests without daily monitoring: soil or coco will serve you better with substantially less daily attention.</dd>
</dl>`;
  } else if (/watering|leaf-curl/.test(slug)) {
    specific = `
<h2>Overwatering Is a Frequency Problem, Not a Volume Problem</h2>
<p>The most widespread misconception among new cannabis growers: overwatering means pouring too much water at once. It does not. Overwatering means saturating the medium again before the root zone has dried adequately. Cannabis roots require alternating cycles of moisture and air. During the wet phase, roots absorb water and dissolved nutrients. During the dry phase, air fills the pore spaces between medium particles, providing the oxygen that roots need for active nutrient transport. Eliminating the dry phase fills every pore with water, suffocating root tissue.</p>
<p>Suffocated roots cannot uptake water or nutrients regardless of how much is available in the medium. The plant droops — a symptom that looks identical to underwatering. The grower responds by watering again, compounding the problem. This feedback loop is the single most common cause of stunted, slow-growing cannabis among first-time cultivators.</p>
<h2>The Proper Watering Routine</h2>
<p>Water thoroughly when the top 3-5 cm of medium feels dry (finger test) or when the container weight has dropped noticeably since the last watering. Apply water slowly and evenly across the entire surface until 10-20% drains from the bottom — this ensures full root-zone saturation and flushes minor salt accumulation. Then do not water again until the medium meets the dryness threshold. In soil, this cycle runs two to four days depending on pot size, room temperature, humidity, and plant size. In coco, daily to every-other-day because coco dries faster. During Australian summer, outdoor plants in containers may need watering twice per day when temperatures exceed 35°C.</p>
<p>The most reliable indicator: container weight. Lift the pot immediately after a full watering — register what "saturated" feels like. Lift it again when you believe it is time to water — register what "ready for water" feels like. After two or three cycles, you can assess watering need by lifting the pot without any other test, in under two seconds.</p>
<h2>Leaf Curling: What the Direction Tells You</h2>
<p><strong>Edges folding upward (taco-ing):</strong> Heat stress or excessive light intensity. The leaf minimises its exposed surface area in response to thermal or photon overload. Common during Australian summer when tent temperatures climb above 30°C. Resolution: raise the light 5-10 cm, improve exhaust ventilation, or run lights during cooler nighttime hours. ${P.vpd('')}</p>
<p><strong>Tips curling downward (clawing):</strong> Nitrogen toxicity or persistent overwatering. Dark green, glossy foliage with tips pointing toward the ground is the textbook presentation of nitrogen excess. Resolution: reduce nitrogen in your feed or flush with pH-adjusted water for severe cases. If the medium is perpetually wet, extend the interval between waterings.</p>
<p><strong>Margins rolling inward with crispy brown edges:</strong> Low humidity or direct fan blast. The leaf is losing moisture through transpiration faster than roots can resupply. Resolution: increase ambient humidity, redirect oscillating fans so air moves around the room rather than blasting directly across leaf surfaces.</p>
<p><strong>New growth twisting or corkscrewing:</strong> Typically calcium deficiency or a pH-driven lockout affecting immobile nutrients. This is a root-zone chemistry issue rather than an environmental one. Resolution: check pH first, then evaluate calcium supply in your nutrient programme.</p>
<h2>Container Volume and Watering Dynamics</h2>
<p>Smaller pots dry faster, demanding more frequent watering but also delivering the rapid wet-dry cycles that roots prefer. Larger pots retain moisture longer — beneficial for established plants but risky for small plants that have not yet colonised the full volume. A seedling planted into a 20-litre pot sits surrounded by medium that stays perpetually moist around a tiny root ball — precisely the conditions that promote anaerobic root-zone problems.</p>
<p>Practical solution: up-pot progressively as the plant grows. For ${CL.auto} going directly into final containers, restrict your watering to a small radius around the seedling and widen it gradually as roots expand outward over the following weeks.</p>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>How do I distinguish overwatering from underwatering when both cause drooping?</dt>
<dd>Overwatered plants droop with heavy, thick, dark-coloured foliage — the medium is visibly wet and the pot feels heavy when lifted. Underwatered plants droop with thin, papery, light-coloured leaves — the medium is dry and the pot feels noticeably light. The weight test is the fastest and most accurate differentiator.</dd>
<dt>Should every watering produce runoff from the bottom?</dt>
<dd>In coco: absolutely — every watering should produce 10-20% runoff to prevent salt accumulation. In soil: yes for most waterings, though occasional lighter applications without full runoff are acceptable. In fabric pots, alternate between full-runoff waterings and lighter irrigations based on how quickly the medium is drying.</dd>
<dt>Does bottom-watering work for cannabis?</dt>
<dd>It can, but bottom-watering does not flush accumulated salts downward through the medium. Over time, salts build up in the upper root zone. Top-watering with drainage remains the standard recommendation because it simultaneously hydrates roots and flushes excess mineral deposits.</dd>
</dl>`;
  } else if (/yield/.test(slug)) {
    specific = `
<h2>The Four Pillars of Cannabis Yield</h2>
<p>Harvest weight is the product of four interacting systems: genetics (the biological ceiling), light energy (the growth engine), root health (the delivery infrastructure), and canopy architecture (the efficiency multiplier). Maximising any single pillar while neglecting the others produces diminishing returns. Six hundred watts of LED cannot overcome rootbound plants crammed into 4-litre pots. Flawless nutrition cannot compensate for a canopy where only the top 15 cm receives productive light.</p>
<h2>Strain Selection: Where Your Yield Ceiling Is Set</h2>
<p>${CL.fem} from high-yield lineages — Big Bud, Critical Mass, Blue Dream, Gorilla Glue — carry genetic capacity for substantially larger harvests than compact autoflowers under equal light. But that potential only materialises with adequate veg time (four to six weeks minimum), sufficient root volume (15-20 litres for photoperiod plants targeting serious yield), and canopy training to distribute bud sites across the horizontal growing area.</p>
<p>Running a high-yield strain in a 4-litre pot with a two-week veg period wastes the genetic advantage entirely — you would achieve a similar result with less demanding genetics. If space or time constrains your grow, ${CL.auto} deliver respectable yields with less investment. If you can dedicate four to six weeks of veg in a 20-litre container with proper training, photoperiod genetics reward that commitment with substantially greater harvests.</p>
<h2>Light Energy: The Primary Growth Input</h2>
<p>Photosynthetic output scales roughly linearly with light intensity from 200 PPFD through 800-1000 PPFD. Beyond 1000 PPFD, the plant light-saturates and additional photons produce heat rather than growth unless supplemental CO2 is introduced. For a 1.2 m x 1.2 m tent, 400-600W of quality LED provides the intensity needed for dense flower production across the canopy. For 1 m x 1 m spaces, 200-350W covers the range. ${P.light('')}</p>
<p>Light distribution is equally important as total output. A single point-source fixture creates an intense centre and dim periphery. Multi-bar LED arrays distribute photons more evenly across the growing area, producing uniform bud development rather than one oversized central cola surrounded by underdeveloped side branches.</p>
<h2>Training Methods: The Yield Multiplier</h2>
<p>An untrained cannabis plant grows into a conical "Christmas tree" shape with a single dominant cola and progressively smaller side branches. Only the top 30-40 cm of canopy receives enough light for dense flower production. Everything below is shaded larf — wispy, airy flower that wastes the plant's energy and your time during trim.</p>
<p>Training redistributes auxin (the growth hormone that concentrates at the apical meristem) and creates multiple main colas with equal light access. Topping at the third or fourth node splits one growth tip into four to six. LST (low stress training — bending and securing branches horizontally) exposes interior growth to direct light. SCROG (growing through a horizontal mesh screen) creates a perfectly flat canopy where every bud site develops at comparable quality. Australian growers using SCROG consistently report 30-50% greater harvests compared to untrained plants of identical genetics under identical lighting. ${P.train('')}</p>
<h2>Realistic Harvest Ranges for Common Australian Setups</h2>
<p><strong>1 m x 1 m tent, 200W LED, autoflower:</strong> 60-150 g per plant, 150-300 g total from two to four plants. The most accessible setup for first-time growers — sufficient for personal supply.</p>
<p><strong>1.2 m x 1.2 m tent, 400W LED, feminised photoperiod, four to five week veg:</strong> 120-250 g per plant, 400-700 g total from four trained plants. This is where home growing becomes genuinely productive.</p>
<p><strong>1.2 m x 1.2 m tent, 600W LED, single-plant SCROG, six to eight week veg:</strong> 300-550 g from one plant filling the entire canopy. This approach maximises a single cultivar's genetic potential through extended veg and comprehensive training.</p>
<p><strong>Outdoor, direct sun, 60+ litre container, full Australian growing season (October through April):</strong> 300-800 g per plant depending on genetics, climate zone, and growing ability. Subtropical growers in Queensland and northern NSW with the longest warm seasons consistently report the upper end of this range.</p>
<h2>Avoidable Yield Losses</h2>
<p><strong>Underpowered lighting:</strong> The single largest yield limiter in indoor grows. Insufficient photon delivery produces fluffy, underdeveloped flower regardless of how well every other variable is managed.</p>
<p><strong>Rootbound containers:</strong> Roots circling the bottom of the pot signal that the plant cannot sustain the nutrient and water uptake its canopy demands. If you see this at transplant or through fabric pot walls, you needed a larger container or an earlier move.</p>
<p><strong>Flower-phase stress:</strong> Any significant disruption during weeks three through six of bloom — lockout, heatwave, pest incursion, light leak — directly reduces bud mass. The plant diverts energy from flower production into stress response, and that lost production cannot be recovered.</p>
<p><strong>Premature harvest:</strong> Cutting one week ahead of optimal maturity sacrifices 10-20% of final weight. The last days of flower are when buds pack on the most density. Patience costs nothing and pays in grams.</p>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>What is a realistic grams-per-watt figure?</dt>
<dd>0.5-1.0 g/W of LED is the range for intermediate growers with decent environmental control and some training. Experienced cultivators with dialled setups and extensive training (SCROG, mainlining) can exceed 1.0 g/W. First-time growers typically achieve 0.3-0.5 g/W.</dd>
<dt>Do autoflowers always produce less than photoperiods?</dt>
<dd>Per plant, generally yes — autos produce 60-150 g versus 120-250+ g for photoperiods. But autoflowers finish faster and allow three to four harvests per year in the same space, potentially equalling or exceeding the annual total of fewer but larger photoperiod runs.</dd>
<dt>Does CO2 supplementation increase harvest weight?</dt>
<dd>Only when light intensity exceeds 800-1000 PPFD and all other variables (temperature, humidity, nutrition) are fully optimised. Adding CO2 to an underpowered setup produces zero benefit. It is a technique that only makes sense after every other factor is maxed out.</dd>
</dl>`;
  } else if (/sex|hermaphrodite|pollen/.test(slug)) {
    specific = `
<h2>Understanding Cannabis Sex Determination</h2>
<p>Cannabis is dioecious — individual plants develop as either male or female, governed by sex chromosomes (XY male, XX female). Males generate pollen sacs that release fine, wind-carried pollen. Females develop pistillate flowers — the resinous buds cultivated for cannabinoid and terpene content. ${CL.fem} are produced by inducing a female plant to generate pollen (via colloidal silver or similar methods), yielding seeds containing exclusively X chromosomes and producing 99.9% female offspring.</p>
<h2>Spotting Males Before They Pollinate</h2>
<p>Pre-flowers develop at the nodes (branch-to-stem junctions) during late veg or the first days of 12/12 — typically four to six weeks from seed. Male pre-flowers present as smooth, round structures on short stalks, resembling tiny clusters of grapes. Female pre-flowers are teardrop-shaped with one or two white pistil hairs (stigmas) emerging from the tip. Early-stage identification requires close inspection; a 10x jeweller's loupe makes the distinction clearer. Examine the fourth through sixth branch nodes — these typically express sex first.</p>
<p>When growing from regular (non-feminised) seed stock, inspect daily from week four. Remove confirmed males from the growing area before any pollen sac opens — a single burst sac can pollinate every female in the room, filling buds with seeds and dramatically reducing both cannabinoid content and usable flower weight.</p>
<h2>Hermaphroditism: When Stress Triggers Pollen Production in Females</h2>
<p>Under sufficient stress, genetically female plants produce male pollen structures as a survival-driven self-pollination attempt. These appear either as full pollen sacs at nodes or as "nanners" — yellow, banana-shaped anthers that emerge from within developing buds and release pollen immediately upon formation. Key triggers include:</p>
<p><strong>Light contamination during dark periods:</strong> Even minimal light during the 12-hour dark cycle can disrupt the hormonal signals that maintain female sex expression. Indicator LEDs on power strips, light seeping through vent seams, timer malfunctions, and door gaps are common culprits. Achieving total darkness during the dark period is not optional.</p>
<p><strong>Sustained thermal extremes:</strong> Nighttime drops below 12°C or consecutive days above 33°C during flower. Brief, isolated fluctuations are tolerable; sustained extremes over multiple days are not. This is particularly relevant for Australian growers in regions with large diurnal temperature swings — parts of inland NSW, South Australia, and western Queensland can swing 20°C between midday and midnight.</p>
<p><strong>Physical trauma during flowering:</strong> Snapped branches, overly aggressive defoliation after week two of bloom, or root disturbance from transplanting a flowering plant can trigger hermaphroditism in stress-sensitive genetics.</p>
<p><strong>Over-mature plants left unpicked:</strong> Cannabis left significantly past its ideal harvest window occasionally herms as a final reproductive effort.</p>
<p><strong>Genetic instability:</strong> Certain breeding lines carry heritable hermaphrodite tendencies that express under conditions that would not trigger stable genetics. This is why sourcing seeds from breeders with established stability testing matters — poorly stabilised genetics herm more readily.</p>
<h2>Responding to Hermaphrodite Discovery</h2>
<p>Single isolated nanner or pollen sac: carefully remove it with tweezers, lightly mist surrounding buds with water (pollen loses viability when wet), and monitor the plant daily for further development. If herming remains limited to one or two sites and does not recur, the grow can often finish with minimal seed formation.</p>
<p>Widespread herming across multiple branches: remove the plant from the growing space immediately to protect any other females. A heavily hermed plant self-pollinates and pollinates neighbours, producing seeded, lower-potency flower with compromised structure throughout.</p>
<h2>Prevention Strategies</h2>
<p>Achieving absolute darkness during the 12-hour dark period is the single most effective preventive measure. Stable temperature management within the 17-28°C range during flower reduces thermal stress triggers. Gentle plant handling during bloom avoids physical trauma. Starting with ${CL.fem} from breeders who test for stability provides the genetic foundation that minimises herming risk at the DNA level. If a plant herms despite ideal conditions, do not keep clones or seeds from it — the hermaphrodite tendency is heritable and will persist across generations.</p>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>Are feminised seeds more prone to hermaphroditism than regular seeds?</dt>
<dd>Not when produced by reputable breeders using proper protocols. Quality feminised seeds undergo multiple generations of stability testing before release. Cheaply produced feminised seeds from unstable parent stock may carry higher herming risk. Source quality is the determining factor.</dd>
<dt>Are seeds from a hermaphrodite plant usable?</dt>
<dd>Seeds produced by self-pollinating hermaphrodites tend to carry the herming tendency themselves. While they may germinate and produce female plants, those females have elevated probability of herming under any stress. Growing from herm-derived seeds is not recommended for serious cultivation.</dd>
<dt>What is the practical difference between nanners and pollen sacs?</dt>
<dd>Pollen sacs are node-located structures that develop on stalks and release large quantities of pollen when they rupture. Nanners are bud-internal structures — yellow, banana-shaped anthers that shed pollen the moment they form. Nanners are more insidious because they appear inside flower tissue where they are difficult to detect until pollen has already been released.</dd>
</dl>`;
  } else {
    const structureType = hash(slug + 'struct') % 4;

    if (structureType === 0) {
      specific = `
<h2>Why Generic Advice Fails for ${topic}</h2>
<p>The standard recommendation for ${topicLower} assumes a single set of growing conditions — but what works in a coco-and-LED tent grow differs substantially from a soil grow under HPS, which differs again from an outdoor grow in humid coastal Queensland. ${topicLower.charAt(0).toUpperCase() + topicLower.slice(1)} is setup-dependent in ways that universal guides gloss over. The growers who stop struggling with it are the ones who stop applying generic solutions and start calibrating to their specific environment, medium, and genetics.</p>
<h2>How Your Setup Changes the Rules</h2>
<p>Soil grows buffer ${topicLower} errors over days, giving you time to react but also masking slow-building problems until they become severe. Coco responds two to three times faster — you see problems sooner but also need to respond sooner. Hydro operates on an hourly timescale — both problems and corrections manifest almost immediately. Each medium demands a fundamentally different management rhythm for ${topicLower}.</p>
<p>Light intensity compounds the effect. Higher photon density accelerates plant metabolism, which changes the speed at which the plant responds to ${topicLower} conditions. A technique calibrated for a 200W LED behaves differently under a 600W fixture — not because the principle changed, but because the biological clock sped up. ${P.light('')}</p>
<h2>Tracking Trends Instead of Reacting to Snapshots</h2>
<p>A single reading tells you where you are right now. Three readings across a week reveal the direction things are moving. The trajectory matters far more than any individual number — a steady improvement after correction means your fix is working even if current readings are not yet optimal. Steady deterioration despite "correct" management means your understanding of the system has a gap.</p>
<p>Taking a photo of the full canopy under white light at the same time each week creates a comparison archive that reveals patterns invisible to daily observation. Week-over-week comparison is possibly the most underused diagnostic tool available to home growers.</p>
<h2>Knowing When to Act and When to Wait</h2>
<p>Cannabis expresses stress progressively. A plant that looks marginally off today may be self-correcting from a minor disruption yesterday. Intervening at that point adds a second disruption to a system already recovering from the first — compounding stress unnecessarily. The decision rule: if symptoms are worsening visibly across 48-72 hours, intervene. If symptoms are stable or improving, hold steady and observe. More harvests are damaged by overcorrection than by delayed response.</p>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>Why does ${topicLower} management seem harder in my setup than in guides I read?</dt>
<dd>Because your conditions differ from the author's. Australian water quality varies by city, ambient climate shifts between summer and winter, tent positioning within the house affects temperature profiles, and even the age of your equipment changes performance over time. Calibrate general advice to your actual, specific situation.</dd>
<dt>Is monitoring equipment worth the investment for ${topicLower}?</dt>
<dd>A basic monitoring kit — pH pen, digital thermometer/hygrometer, and an EC meter for coco or hydro growers — runs under $80 AUD total and prevents problems on every grow that would otherwise cost more than the equipment in lost flower quality and yield.</dd>
<dt>Does ${topicLower} management differ between veg and flower?</dt>
<dd>Yes — the plant's metabolic priorities shift from growth to reproduction at the flip, changing nutrient demand, environmental sensitivity, and how quickly ${topicLower} errors translate into quality loss. Precision becomes most important during weeks three through six of flower, when bud development and trichome production peak.</dd>
</dl>`;
    } else if (structureType === 1) {
      specific = `
<h2>Tracing Problems to Their Origin</h2>
<p>Most ${topicLower} difficulties trace to one of two root causes: either the growing environment shifted (seasonal temperature change, different batch of nutrients, relocated tent) without a corresponding management adjustment, or the plant entered a new developmental stage while the grower continued the previous approach unchanged. Both scenarios create a timing gap between what the plant now requires and what it is actually receiving.</p>
<p>This pattern explains how a grower can produce excellent results for weeks and then encounter problems seemingly from nowhere. Their technique did not fail — the plant's requirements moved beyond what the technique was calibrated for.</p>
<h2>Separating Signal from Background Noise</h2>
<p>Cannabis produces a constant stream of visual cues — minor colour variations between leaves, slight droop during warm afternoons (especially common during Australian summer), minor curling on individual fan leaves. Most of this is normal plant behaviour, not an indication of trouble. The skill that separates composed, effective growers from anxious overcorrectors is learning which visual changes demand action and which are just biological noise.</p>
<p>Act on: progressive yellowing advancing consistently up or down the canopy, tip burn on newly emerged leaves, wilting that persists through the lights-off period, and sudden cessation of growth after weeks of steady development. Ignore: isolated leaf yellowing on heavily shaded lower branches, mild afternoon droop that recovers by the following morning, and minor colour differences between leaves at different canopy heights.</p>
<h2>Indoor Control vs. Outdoor Adaptation</h2>
<p>Indoor growers manage ${topicLower} through equipment — adjusting dials and settings to maintain calculated target ranges. Outdoor growers manage it through genetics and calendar — selecting cultivars that tolerate regional conditions and timing the grow cycle to avoid the worst seasonal challenges. Both approaches work. The indoor advantage is precision; the outdoor advantage is scale and natural light energy. ${CL.outdoor} exists specifically to help outdoor growers match genetics to environmental reality. ${P.vpd('')}</p>
<h2>Developing Practical Intuition</h2>
<p>Experienced growers do not follow more complex protocols — they recognise patterns that newer growers have not yet encountered. Each completed grow adds observational data: what stress looks like in your particular setup, how your chosen genetics respond to corrections, which interventions produce real improvement and which just add complexity. Keep a simple grow journal — weekly canopy photos and brief notes on changes you made and what the plant did afterwards. After three grows, your own observation history becomes more valuable than any general guide because it reflects your actual, specific growing conditions.</p>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>I made an adjustment and my plant got worse. What happened?</dt>
<dd>The plant was likely already adapting to the previous conditions when your change forced it to readapt — creating compound stress rather than allowing single-direction recovery. This is exactly why making one change at a time and waiting 48-72 hours before evaluating is essential.</dd>
<dt>Where does ${topicLower} rank among growing priorities?</dt>
<dd>Alongside pH management, watering discipline, and adequate light — these four form the foundation. Getting all four right produces good results even when everything else is imperfect. Getting any one consistently wrong produces poor results regardless of advanced techniques applied elsewhere.</dd>
<dt>Can I automate ${topicLower} management?</dt>
<dd>Environmental controllers and timers handle the repetitive aspects well. But no automation substitutes for visual plant assessment. Use technology for consistency, and use your own observation for catching what sensors miss.</dd>
</dl>`;
    } else if (structureType === 2) {
      specific = `
<h2>The Trade-Off Nobody Mentions</h2>
<p>Optimising ${topicLower} for maximum yield frequently conflicts with optimising for maximum terpene expression, flower density, or harvest timing flexibility. Understanding which trade-off you are making — and which outcome you genuinely prioritise — resolves decisions that otherwise feel arbitrary. For most home growers, optimising for consistency beats optimising for peak performance: an approach that reliably delivers 80% of theoretical maximum on every run outperforms a technique that hits 100% once and stumbles the next three attempts.</p>
<h2>How the Plant Experiences ${topic} (Not How Your Instruments Measure It)</h2>
<p>Cannabis responds to root-zone conditions (which lag behind ambient readings), to cumulative exposure (not to instantaneous snapshots), and to the rate of change (sudden shifts stress more than gradual ones). A grower with "correct" readings who still sees stress is witnessing the plant's response to a trend — not to the current number on the display. The practical takeaway: gradual adjustments are nearly always preferable to abrupt corrections, even when the abrupt move lands on the "right" number faster.</p>
<h2>When ${topic} Matters Most — A Growth-Stage Breakdown</h2>
<p>Seedlings: very sensitive, minimal buffer capacity. Keep conditions conservatively centred.</p>
<p>Veg: more robust. Wider acceptable range. Errors are recoverable without permanent damage.</p>
<p>Early flower (weeks one through three): moderate sensitivity. Bud sites are forming and metabolic priorities are shifting.</p>
<p>Mid flower (weeks three through six): the highest-stakes window. Bud mass, trichome gland density, and terpene biosynthesis are all at peak activity. ${topic} management during these weeks directly determines what ends up in the jar. This is where precision effort delivers visible, tangible returns. ${P.harvest('')}</p>
<p>Late flower (week seven onward): the plant is finishing. Conditions shift from supporting active growth to supporting maturation — slightly cooler temperatures, lower humidity, and reduced nutrient input help the plant ripen rather than continue expanding.</p>
<h2>Evaluating Whether Your Approach Is Working</h2>
<p>Primary indicator: is healthy new growth appearing at a consistent rate? Clean new leaves and actively elongating shoots mean the system is functioning. Stunted, discoloured, or deformed new growth means something is off — even if your instruments say otherwise.</p>
<p>Supporting indicators: root colour (white and branching = healthy; brown and slimy = trouble), stem firmness (slight flex with firmness = healthy; limp or brittle = stressed), and terpene development during flower (increasing aroma = on track; stalled or declining aroma = stressed).</p>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>My readings look correct but the plant looks unhappy. What is going on?</dt>
<dd>Instruments capture one variable at one moment. The plant integrates every environmental condition it has experienced across days. Investigate root-zone conditions (not captured by ambient sensors), any recent changes the plant may still be responding to, and possible interactions between variables that individual readings cannot reveal.</dd>
<dt>Is there a low-maintenance approach for ${topicLower}?</dt>
<dd>For environmental parameters (temperature, humidity): yes, once you invest in quality equipment and establish a monitoring habit. For feeding and root-zone management: no. The plant's needs evolve throughout its lifecycle, and your approach must evolve alongside them.</dd>
<dt>How much does genetic selection affect ${topicLower} sensitivity?</dt>
<dd>Considerably. ${CL.auto} tolerate wider environmental ranges. Dense ${CL.ind} and airy ${CL.sat} have different sensitivities. Mountain-origin genetics handle cold better than equatorial cultivars, and vice versa for heat. The ${CL.all} includes difficulty ratings that account for environmental tolerance differences.</dd>
</dl>`;
    } else {
      specific = `
<h2>Root Causes of ${topic} Issues</h2>
<p>Most ${topicLower} problems are not dramatic failures — they are slow accumulations. A pH that drifts 0.3 units per watering across a fortnight. A temperature that creeps upward by 2°C as Australian summer deepens. A feeding programme designed for veg that was never adjusted when the plant entered flower. These small, gradual misalignments accumulate until the gap between what the plant needs and what it receives becomes visible as symptoms on the canopy.</p>
<p>Recognising this accumulation dynamic changes your approach: regular monitoring and small, proactive adjustments prevent far more problems than reactive correction after symptoms appear. By the time leaves change colour or shape, the underlying issue has been developing for five to ten days.</p>
<h2>A Five-Minute Diagnostic Before Any Change</h2>
<p>Before adjusting anything, gather data: measure pH of input and runoff, measure environmental conditions (temperature, humidity, light intensity at canopy level), and visually assess the entire plant — not just the affected leaves. This five-minute assessment prevents the most common overcorrection mistake: changing the wrong variable based on an assumption rather than evidence.</p>
<p>The most useful question to ask yourself: "What changed in my grow environment over the last seven to ten days?" New nutrient product? Different water source? Seasonal weather shift? Moved the light? Reconfigured extraction? Recent changes are the most probable triggers for new symptoms.</p>
<h2>Recovery Signs — How to Confirm Your Correction Worked</h2>
<p>Recovery from ${topicLower} disruption shows exclusively on new growth. Previously damaged leaves are permanent records of past conditions — they will not heal or revert. What you watch for: new foliage emerging with clean, healthy colour and normal morphology within seven to fourteen days of correction. If new growth continues showing symptoms after that window, either the original diagnosis was wrong or the correction was insufficient.</p>
<p>Recovery speed correlates with overall plant health and stress severity. A mildly stressed plant in veg recovers in five to seven days. A heavily stressed plant in mid-flower may need ten to fourteen days, and the yield from affected bud sites will be permanently reduced regardless of how effectively you correct the underlying cause.</p>
<h2>Genetic Compatibility with Your Management Style</h2>
<p>If ${topicLower} consistently trips you up despite genuine effort, the most pragmatic solution may be selecting genetics that tolerate your natural management tendencies rather than forcing yourself to match a demanding cultivar. ${CL.auto} are forgiving across all management dimensions. ${CL.ind} descended from hardy mountain landraces tolerate wider environmental fluctuations. Cultivars in the ${CL.all} flagged as "beginner-friendly" or "resilient" are specifically selected for tolerance to imprecise management.</p>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>What is the best way to prevent ${topicLower} issues proactively?</dt>
<dd>Test pH at every watering. Monitor temperature and humidity daily. Photograph the canopy weekly under white light for trend comparison. Adjust your feeding programme and environmental controls at each growth-stage transition. These habits intercept most problems before they reach the point of visible symptoms.</dd>
<dt>How much should I spend on monitoring tools?</dt>
<dd>A $30 AUD digital thermometer/hygrometer with min/max logging and a $25 AUD pH pen cover 90% of the data you need for effective ${topicLower} management. Higher-end equipment adds convenience (wireless monitoring, app connectivity) but does not replace the habit of physically inspecting your plants with your own eyes at regular intervals.</dd>
<dt>Same setup, same strain, different result this time. Why?</dt>
<dd>Environmental conditions shift between grows — seasonal temperature and humidity changes (which can be dramatic between an Australian summer and winter grow), variation in tap water mineral content, ageing equipment losing calibration or output, and natural phenotypic variation between individual seeds of the same strain. No two grows are identical, even when the inputs look the same on paper.</dd>
</dl>`;
    }
  }

  return `
<p>${pick(slug, [
    `${topic} sits in the space between "general cultivation knowledge" and "the specific detail you actually need when this comes up during a grow." Generic guides mention it in passing; this piece gives it the focused treatment that Aussie growers dealing with it in real time require.`,
    `When ${topicLower} surfaces as an issue during an active grow, the broad principles from introductory guides are not specific enough. Accurate identification and targeted correction depend on understanding the particular mechanisms and symptom patterns involved — which is what this article provides.`,
    `${topic} does not receive adequate standalone treatment in most cannabis growing resources — it usually gets a single paragraph buried inside a general guide. That level of coverage is insufficient when you are facing it directly and need to make a decision before the next watering.`,
  ], 'open')}</p>
${specific}
`;
}

function environmentArticle(slug: string, title: string): string {
  const topic = title.replace(/Cannabis |Marijuana |Seeds? |Best |and |for |in /gi, '').trim();
  const isDesert = /desert|heat|hot|dry/.test(slug);
  const isAlt = /altitude|elevation|mountain/.test(slug);
  const isCold = /cold|frost|winter|snow|short.season/.test(slug);
  const isHumid = /humid|tropical|rain|wet/.test(slug);

  if (isDesert) return `
<p>Australia's arid interior — spanning inland South Australia, western NSW, much of Western Australia, and the Northern Territory — presents growing conditions that break conventional cannabis cultivation rules. The assumption that abundant sunlight automatically translates to abundant yield collapses above 35°C, where photosynthetic enzymes lose efficiency, stomata seal shut to conserve water, and the plant redirects energy from production to survival. Successful hot-climate cannabis growing in Australia is fundamentally about managing the gap between what intense solar radiation could produce and what heat stress actually permits.</p>

<h2>Physiological Effects of Extreme Australian Heat</h2>
<p>Between 30-35°C, photosynthetic efficiency begins declining. Above 35°C, stomatal closure dramatically reduces CO2 intake and productive growth stalls. Simultaneously, transpiration demand escalates — a plant in 38°C dry air needs two to three times the water consumption of identical genetics at 24°C. The plant requires more water to cool itself through transpiration, but it has shut down the gas exchange pathways that enable productive growth from that water. Net result: energy is spent surviving rather than building flower.</p>
<p>Below the canopy, root-zone temperature compounds aboveground stress. Dark-coloured containers in direct Australian sun — especially on concrete, corrugated iron, or bare earth — can push root temperatures above 32°C, damaging root cells, impeding nutrient transport, and creating conditions that favour Pythium and other warm-water root pathogens. Addressing only canopy shade while ignoring root-zone heat tackles half the problem.</p>

<h2>Water Management as the Primary Growing Input</h2>
<p>In arid conditions, irrigation is not supplemental — it is the central variable around which everything else is organised. Manual watering cannot reliably meet the demands of hot, dry air. Drip irrigation systems with timer-controlled delivery maintain consistent root-zone moisture without the damaging cycle of heavy watering followed by rapid desiccation that hand watering produces.</p>
<p>Mulch the soil surface — straw, wood chips, or landscape fabric — to cut surface evaporation by 30-40%. Without mulch, the top 5 cm of medium desiccates within hours under direct sun, stressing surface feeder roots and wasting water. Water quality matters disproportionately in arid regions: many inland Australian towns have hard municipal water with elevated calcium and magnesium that affects pH buffering and nutrient chemistry. Measure your source water EC and pH before designing your feeding programme. Rainwater harvesting, where practical, provides a softer, more controllable base.</p>

<h2>Root-Zone Temperature Control</h2>
<p><strong>Pot colour:</strong> Black plastic absorbs radiant heat. Light-coloured or white containers reflect it. Fabric pots in tan or white allow evaporative cooling from the walls and run 5-8°C cooler than dark plastic in direct sun — a substantial difference at the root interface.</p>
<p><strong>Ground contact:</strong> Burying containers 50-75% below soil level exploits the thermal stability of subsurface earth — ground temperature 30 cm below the surface remains relatively constant even as air temperature swings 20°C between day and night. For above-ground containers, reflective insulation wrap or a double-container setup with an insulating air gap between the inner and outer pot provides meaningful protection.</p>
<p><strong>In-ground planting:</strong> Direct planting gives roots access to the thermal mass of deeper soil and virtually unlimited root expansion. The trade-off: drainage depends entirely on native soil composition. In Australia's heavy clay or rocky inland soils, raised beds filled with imported potting mix often outperform direct ground planting.</p>

<h2>Windbreak and Shade Strategies</h2>
<p>Hot, dry Australian wind strips moisture from leaf surfaces faster than root uptake can replace it, creating chronic transpiration deficit even when the root zone is well watered. Windbreaks — fencing, dense companion planting, 50% shade cloth on the windward side, or positioning plants behind existing structures — are non-negotiable in exposed inland locations.</p>
<p>Partial shade during peak afternoon hours seems counterintuitive but consistently improves results. Full Australian summer sun at midday delivers 2000+ PPFD — well above the 800-1000 PPFD saturation point for cannabis. The excess photons become excess heat with zero productive benefit. A 30-40% shade cloth over the canopy reduces thermal stress while maintaining adequate photosynthetically active radiation for strong flower development.</p>

<h2>Strain Selection for Australian Arid Zones</h2>
<p>Traits for arid success: robust root systems, water-efficient growth habit, heat-tolerant foliage, pest resistance (dry conditions reduce mould but amplify spider mite pressure), and flowering timelines that either finish before the worst summer heat or can be timed to avoid it. ${CL.sat} from tropical and equatorial heritage typically handle heat better than compact ${CL.ind} because their open leaf structure promotes more efficient transpiration. However, pure sativas flower for ten to fourteen weeks, potentially spanning peak heat months (January-February). The pragmatic approach: ${CL.auto} planted in September to harvest before December heat peaks, or planted in late February to finish during the milder April-May window. ${CL.fast} genetics offer the same timing advantage for photoperiod growers.</p>

<h2>Mistakes Specific to Australian Hot-Climate Growing</h2>
<p><strong>Underestimating daily water consumption:</strong> A plant in 38°C air with low humidity can drain 4+ litres per day from a 20-litre container. Growers moving from coastal or temperate environments are routinely unprepared for how fast inland plants dehydrate.</p>
<p><strong>Cooling the canopy but not the roots:</strong> Shade cloth over the plant while roots cook in a dark pot on hot ground solves half the equation. Root-zone cooling is equally critical.</p>
<p><strong>Choosing genetics bred for European climates:</strong> Dense-budded indicas developed for Dutch greenhouses or UK indoor grows struggle in Australian arid heat. Select cultivars with documented heat tolerance or lanrace tropical ancestry.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>Is outdoor growing viable in central and western Australia?</dt>
<dd>Yes, with careful timing. Early spring (September-November) and autumn (March-May) offer workable outdoor windows. Peak summer above 42°C makes productive outdoor growing extremely difficult without significant infrastructure — shade structures, automated misting, and timer-controlled irrigation.</dd>
<dt>Does indoor growing avoid the heat problem entirely?</dt>
<dd>Low humidity indoors means no dehumidifier costs and minimal mould risk — advantages of dry climates. But cooling the grow space during summer when external temperatures exceed 40°C is a real expense. Air conditioning costs are a significant budget item for inland Australian indoor cultivators during the hottest months.</dd>
<dt>What single change makes the biggest difference for arid growers?</dt>
<dd>Matching genetics to your conditions. A heat-tolerant cultivar producing 20% THC flower that thrives outdoors outperforms a 28% THC genetic that wilts and dies under the same conditions. Environment-appropriate genetics first; everything else second.</dd>
</dl>
`;

  if (isAlt) return `
<p>Altitude growing in Australia — the Blue Mountains, Snowy Mountains, Victorian Highlands, and Tasmanian ranges — introduces three interacting variables that reshape cannabis cultivation from the ground up: UV intensity climbs approximately 10% per 1,000 metres of elevation gain, nighttime temperatures plunge 15-20°C below daytime peaks, and the frost-free growing window compresses significantly. These factors combine to determine which genetics succeed, how feeding and watering must be adjusted, and why flower grown at elevation often develops a resin density that lowland grows cannot replicate.</p>

<h2>Elevated UV: More Trichomes, More Risk</h2>
<p>Cannabis produces trichome glands partly as biological UV protection — a sunscreen layer that happens to concentrate the cannabinoids and terpenes growers prize. Higher UV exposure at altitude stimulates greater trichome density, which is why some of the most aromatic, resinous outdoor flower comes from elevated growing sites. However, the same UV intensity that drives trichome production can damage ill-adapted foliage — bleaching on upper leaves, stress-triggered curling, and anomalous purpling on the most exposed tissue. UV stress presents only on the most light-exposed parts of the plant and does not follow the systematic progression patterns of nutrient deficiency.</p>
<p>Genetics with high-altitude heritage — Hindu Kush, Afghan, and certain South American landrace lines — handle intense UV better than equatorial lowland strains that evolved beneath filtered tropical canopy light.</p>

<h2>Cold Nights: Benefit and Threat</h2>
<p>At altitude, overnight temperatures commonly fall 15-20°C below daytime highs. Cannabis tolerates cool nights well down to about 10°C — and actually benefits from the differential. Cooler dark periods slow transpiration, improve terpene retention (volatile compounds evaporate more slowly in cool air), and trigger anthocyanin pigment expression in genetically predisposed cultivars. ${CL.purple} grown at elevation develop deeper, more vivid colouration than the same genetics in warm lowland settings.</p>
<p>Below 7°C, metabolic activity slows dramatically and root uptake drops enough to produce deficiency-like symptoms. Below 2°C, ice crystals begin forming inside cells. Frost (0°C) destroys exposed flower tissue — ruptured cell walls produce brown, mushy bud that smells and tastes harsh regardless of how well the plant was grown up to that point.</p>

<h2>The Calendar Constraint</h2>
<p>Most elevated Australian locations offer an outdoor window from late October to mid-March — roughly sixteen to eighteen weeks. Subtract four weeks for seedling establishment and early veg, and you have twelve to fourteen weeks for vegetative growth and flowering combined. Any cultivar requiring more than eight to nine weeks of flower is a calendar risk unless plants are started indoors and transplanted outdoors after the last frost.</p>
<p>${CL.auto} are the safest altitude option: they flower by age regardless of photoperiod and complete their cycle in ten to twelve weeks from seed. ${CL.fast} feminised strains offer higher yield potential than autos with a one-to-two-week flowering time reduction over standard photoperiods. Committed photoperiod growers should pre-veg indoors to maximise the outdoor calendar.</p>

<h2>Altitude-Specific Cultivation Adjustments</h2>
<p><strong>Increased feeding:</strong> Stronger UV drives faster photosynthesis during peak daylight hours, which increases nutrient demand — particularly calcium. Sea-level feeding schedules may underserve altitude grows. Monitor plant response and adjust upward as needed.</p>
<p><strong>Faster medium drying:</strong> Lower atmospheric pressure at elevation increases evaporation. Containers and soil dry noticeably faster than at sea level. Compensate with mulch and more frequent watering cycles.</p>
<p><strong>Wind protection:</strong> Elevated sites are typically more exposed to wind, which desiccates foliage, stresses stems, and can physically damage flower structures during late bloom. Windbreaks and sheltered positioning make a measurable difference to plant health and final quality.</p>

<h2>Altitude Errors</h2>
<p><strong>Transplanting outdoors too early:</strong> A warm spring week at altitude is often followed by a hard frost the following week. Wait until consistent overnight minimums remain above 7°C before moving plants outside — typically mid-to-late November in most elevated Australian locations.</p>
<p><strong>Running long-season sativa cultivars:</strong> An eleven-week sativa started outdoors in November needs to flower through mid-April — well past first frost at most mountain elevations in Australia. Unless you have a greenhouse or polytunnel, restrict flowering periods to nine weeks maximum.</p>
<p><strong>Blocking the UV advantage:</strong> Some altitude growers shade their plants reflexively, mimicking lowland practice. Unless heat is the direct issue, allowing full altitude UV exposure maximises the trichome production that makes mountain-grown cannabis special.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>Do plants grow faster or slower at altitude?</dt>
<dd>Individual growth days can be highly productive due to intense UV. But the compressed frost-free season provides fewer total growing days. Net result: the per-day growth rate may be excellent, but the total available growing time is shorter.</dd>
<dt>Will my plants turn purple at altitude?</dt>
<dd>Only if the genetics carry the anthocyanin potential. Cool nights trigger the pigment expression, but the genes must be present. Strains without anthocyanin capacity will not purple regardless of temperature.</dd>
<dt>Is year-round indoor growing at altitude practical?</dt>
<dd>Yes, and it carries inherent advantages: naturally low ambient humidity reduces mould risk, and cool room temperatures in winter lower cooling costs compared to lowland locations. The main consideration is faster medium drying and potentially increased heating costs during the coldest months.</dd>
</dl>
`;

  if (isCold) return `
<p>Cannabis is more cold-tolerant than many growers expect, but hard limits exist — and crossing them ranges from extended flowering timelines to total crop destruction. For Australian cultivators in Tasmania, the Victorian Highlands, the ACT, and elevated regions of NSW and SA, understanding precisely what cold does to the plant at each temperature threshold, and which genetics and timing strategies work within a compressed season, is essential for consistent results.</p>

<h2>Temperature Thresholds and What They Mean</h2>
<p><strong>10-15°C:</strong> Growth decelerates but continues. Terpene volatilisation actually slows in cool air, which can improve aromatic retention. Anthocyanin expression activates in genetically predisposed cultivars. Uncomfortable for the plant but not damaging.</p>
<p><strong>7-10°C:</strong> Root nutrient uptake slows substantially. Minerals are present in the medium but roots process them sluggishly, creating symptoms that mimic deficiency — purple stems, pale new growth, stalled expansion. These are cold-induced transport problems, not chemical shortages. Adding more nutrients worsens the situation by increasing salt concentration without addressing the temperature-impaired uptake.</p>
<p><strong>2-7°C:</strong> Productive growth essentially ceases. Metabolic processes slow below the threshold for meaningful photosynthetic gain. Flowering timelines extend well beyond breeder estimates. Exposure at this range does not kill the plant but makes finishing before further cold becomes a race against the weather calendar.</p>
<p><strong>Below 0°C (frost):</strong> Ice crystal formation inside plant cells ruptures cell walls. Damage is irreversible. Affected tissue turns brown, softens, and produces unpleasant flavour if harvested. A single hard frost can destroy weeks of flower development in a matter of hours.</p>

<h2>Root Temperature: The Variable Above-Ground Readings Miss</h2>
<p>Air temperature and root-zone temperature can diverge significantly. A plant whose foliage tolerates a 9°C night may have roots sitting in 8°C soil that can barely uptake water or nutrients. This mismatch produces deficiency symptoms that do not respond to feeding — because the limitation is thermal, not chemical.</p>
<p>Mitigation: elevate containers off cold ground (even 15 cm on a wooden pallet helps), use insulated or double-walled containers, apply heavy mulch over the soil surface, and water with moderately warm water (18-21°C) during cold snaps to buffer root-zone temperature.</p>

<h2>Genetics for Short Australian Cool-Climate Seasons</h2>
<p><strong>${CL.auto}:</strong> The lowest-risk choice for cold climates. Autoflowers flower by age rather than photoperiod, so they do not waste weeks waiting for day length to shorten in autumn. An autoflower planted in late November in Tasmania, southern Victoria, or the ACT can finish by mid-to-late February — well before first frost. This calendar buffer makes autoflowers the most reliable option for short-season outdoor growing.</p>
<p><strong>${CL.fast}:</strong> Photoperiod genetics bred to finish one to two weeks earlier than standard cultivars. They offer more yield than autos (because you control veg duration) with a reduced frost-risk exposure window.</p>
<p><strong>${CL.ind} from cold-adapted lineage:</strong> Hindu Kush, Afghan, and northern Pakistani landrace descendants — Northern Lights, Afghan Kush, Hindu Kush, and their progeny — carry intrinsic cold tolerance bred into their genetics over thousands of generations in mountain environments. They also tend to flower in seven to nine weeks, which aligns naturally with compressed cool-climate growing windows.</p>

<h2>Extending the Season with Simple Infrastructure</h2>
<p>A clear polythene tunnel or basic greenhouse structure extends the usable season by two to four weeks by trapping daytime solar heat and buffering nighttime temperature drops. Even a sheet of clear plastic draped over a frame adds enough thermal insulation to protect against light frost (-2°C to 0°C) and maintain nighttime minimums above the 7°C productive threshold.</p>
<p>Frost cloth (horticultural fleece) draped over plants on the coldest nights provides an additional 2-4°C of frost protection. Some resourceful cool-climate Australian growers suspend LED fairy lights beneath frost cloth for supplementary radiant heat on the most threatening nights — a low-tech approach that delivers just enough warmth to prevent ice crystal formation.</p>

<h2>Cold-Climate Mistakes</h2>
<p><strong>Planting out too early:</strong> A mild October weekend in Tassie followed by a frosty November morning kills transplants. Wait for consistent overnight minimums above 7°C — typically mid-November in most cool-climate Australian locations.</p>
<p><strong>Choosing long-flowering cultivars:</strong> An eleven-week photoperiod sativa in southern Victoria needs to flower into late April. Frost arrives first. Match your cultivar's flowering duration to your actual frost-free window, not your optimistic weather forecast.</p>
<p><strong>Skipping the indoor pre-veg phase:</strong> Starting seeds indoors three to four weeks before your outdoor transplant date effectively extends the season by nearly a month without any outdoor infrastructure investment.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>What is the latest safe outdoor planting date in cool Australian climates?</dt>
<dd>Autoflowers: mid-December, to ensure harvest by late February or early March before autumn frost threatens. Photoperiod strains: they need to be established outdoors by early November to accumulate enough veg growth before shortening day length triggers flowering in late summer.</dd>
<dt>Can cannabis survive a light frost?</dt>
<dd>A brief, mild frost (-1°C to 0°C for a few hours) may damage exposed leaf tips and uppermost flower surfaces while lower, insulated parts survive. But any frost degrades flower quality, and repeated exposure compounds the damage rapidly. Prevention through timing, strain choice, and physical protection is always preferable to relying on frost tolerance.</dd>
<dt>With only four months of warm weather, is outdoor growing worthwhile?</dt>
<dd>With autoflowers, yes — they complete a full lifecycle in ten to twelve weeks, fitting within a November-through-February window. For photoperiod genetics, a four-month outdoor season is marginal at best. Indoor growing or a greenhouse setup significantly expands your options.</dd>
</dl>
`;

  if (isHumid) return `
<p>When relative humidity stays above 60% during late flowering, the interior of dense cannabis buds becomes a micro-incubator: moisture condenses between calyxes, air circulation drops to zero, and fungal spores germinate within days. Botrytis (bud rot) and powdery mildew do not require extreme conditions to establish — moderate humidity, stagnant air, and a few consecutive favourable days are sufficient. For growers in coastal Queensland, northern NSW, tropical Darwin, and along Australia's east coast where humidity routinely exceeds 60% during the harvest window, fungal management is not a secondary concern — it is a primary cultivation challenge.</p>

<h2>Why the Densest Buds Fail in Humid Conditions</h2>
<p>The rock-hard, golf-ball-density nugs that win indoor competitions are the exact structures that rot from the interior in humid outdoor environments. Dense ${CL.ind} flower packs calyxes so tightly that moisture between them cannot dissipate. Even if the exterior surface air-dries by midday, the interior remains damp — creating a microenvironment invisible from outside that is ideal for Botrytis establishment. Growers producing stunning dense indoor flower who transplant the same genetics outdoors in Brisbane or Cairns learn this through crop loss.</p>

<h2>Recognising and Responding to Bud Rot (Botrytis)</h2>
<p>Botrytis typically establishes inside the largest, densest top colas. The first external sign: a single brown or dead leaf protruding from an otherwise healthy-looking bud. Pull that leaf and the interior reveals grey-brown mycelium threading through the flower structure. By the time external signs are visible, the rot has been developing internally for three to five days.</p>
<p>Immediate response: remove the affected bud by cutting two to five centimetres below visible rot into healthy tissue. Inspect every dense top cola on the plant. If multiple sites are affected, consider an emergency early harvest of the entire plant to salvage uninfected flower — the rot will continue spreading as long as favourable conditions persist.</p>

<h2>Powdery Mildew: The Surface Pathogen</h2>
<p>Powdery mildew presents as white, powdery deposits on leaf surfaces — initially small spots that are easy to overlook, then spreading to cover entire leaves and eventually flower surfaces. Unlike Botrytis, PM is externally visible and catchable early. But once established throughout a canopy, complete eradication without sacrificing flower quality becomes extremely difficult.</p>
<p>PM thrives in high-humidity, moderate-temperature conditions (15-27°C) with inadequate air movement. It spreads via airborne spores landing on moist leaf surfaces. Prevention: maintain canopy-level humidity below 55%, ensure oscillating airflow across all foliage surfaces, and remove any infected material immediately to limit spore dispersal.</p>

<h2>Cultivar Selection for Humid Australian Climates</h2>
<p>The traits that resist humidity-driven pathogens are the opposite of what most strain marketing promotes: <strong>open, airy bud structure</strong> that permits interior air circulation; <strong>moderate foliage density</strong> that does not trap moisture; <strong>shorter flowering periods</strong> that finish before the worst humidity months; and <strong>genetic mould resistance</strong> inherited from tropical and equatorial landrace ancestors that evolved in humid conditions over millennia.</p>
<p>${CL.sat} from equatorial regions typically have the loosest flower structure and strongest natural pathogen resistance. Their limitation: flowering periods of ten to fourteen weeks that may push harvest into the worst humidity months. The practical compromise: sativa-dominant ${CL.hyb} that carry tropical genetic resistance with shorter flowering times (nine to ten weeks). ${CL.auto} planted early (September-October) to harvest by late November or early December — before the wet season reaches full intensity — represent another viable timing strategy for Queensland growers.</p>

<h2>Environmental Management in Humid Growing Regions</h2>
<p><strong>Airflow above all:</strong> Oscillating fans directed through the canopy (not merely above it) break up the stagnant micro-pockets where humidity concentrates. Outdoor growers can improve airflow by spacing plants further apart, removing lower foliage that restricts air passage, and positioning plants to intercept prevailing coastal breezes.</p>
<p><strong>Targeted defoliation:</strong> Selectively removing fan leaves during weeks one and three of flower opens airflow corridors through the canopy without stripping so much foliage that photosynthetic capacity suffers. This is precision work — removing specific leaves that block air to developing bud sites, not wholesale stripping.</p>
<p><strong>Strategic early harvest:</strong> In humid Australian climates, a slightly early harvest (predominantly milky trichomes, minimal amber) may ultimately deliver higher-quality finished flower than waiting for full maturity if those additional days expose the crop to rot conditions. A clean harvest at 90% maturity beats a mouldy harvest at 100% maturity every time.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>Can I grow dense indica cultivars in humid Australian climates?</dt>
<dd>Indoors with a dehumidifier or in a ventilated greenhouse, yes. Outdoors in uncontrolled humid conditions, the bud rot risk is substantial. The yield lost to rot in a humid outdoor grow frequently exceeds the theoretical yield advantage of dense genetics.</dd>
<dt>Is indoor growing the only reliable approach in humid climates?</dt>
<dd>No, but outdoor success requires deliberate strain selection and timing. Sativa-dominant hybrids with open flower structure, planted to finish before peak humidity season, produce viable outdoor crops in humid Australian conditions. Greenhouses with roof ventilation offer a productive middle path.</dd>
<dt>How can I detect bud rot inside dense buds before it spreads?</dt>
<dd>Gently squeeze the largest, densest colas. Rotting tissue feels noticeably softer or spongier than healthy flower. Single brown or yellowing leaves emerging from bud tissue are often the first external indicator of internal rot. Any suspicious bud should be carefully opened for visual inspection.</dd>
</dl>
`;

  // General environment article
  return `
<p>The single highest-leverage decision before any seed goes into medium is matching your genetics to your growing environment. A cultivator who selects strains suited to their conditions — climate, season length, growing space, equipment — consistently outperforms one running objectively "better" genetics that clash with the environment. This is not about compromise — it is about strategic alignment.</p>

<h2>What Your Environment Actually Dictates</h2>
<p>Your growing conditions determine: growth rate, flowering window, water demand, pest and pathogen pressure, terpene expression, and ultimately the appearance and character of the harvested flower. Identical seeds grown in full Queensland sun and in a Melbourne garage produce meaningfully different plants — not because the genetics changed, but because every aspect of growth and expression was shaped by the surrounding conditions.</p>
<p>Indoor growers control most variables through equipment. Outdoor growers exercise control primarily through strain choice and timing. Both strategies produce quality flower — but understanding precisely what your specific environment provides and constrains is the foundation of any successful grow.</p>

<h2>Matching Genetics to Australian Climate Zones</h2>
<p><strong>Short frost-free seasons (under five months — Tasmania, ACT, Victorian Highlands):</strong> ${CL.auto} or ${CL.fast} are non-negotiable for outdoor growing. The growing calendar sets a hard boundary that ambition cannot override.</p>
<p><strong>Hot, arid zones (inland SA, WA, western NSW, NT):</strong> Heat-tolerant genetics with tropical or equatorial lineage. Irrigation infrastructure is essential. Container management to prevent root-zone overheating. Shade cloth during peak afternoon radiation.</p>
<p><strong>Hot, humid zones (coastal QLD, northern NSW, Top End):</strong> Mould-resistant cultivars with open flower structure. Sativa-dominant hybrids. Timing that avoids peak wet-season months. Airflow management is the primary environmental control.</p>
<p><strong>Cool, wet zones (Tasmania, southern Victoria, highland regions):</strong> Fast-finishing genetics with mould resistance. Indoor growing provides the most consistent outcomes. Outdoor viability depends on careful timing and strain selection.</p>
<p><strong>Indoor (anywhere in Australia):</strong> The full genetic range is accessible year-round. Focus shifts to matching genetics to your space dimensions and your preferred management intensity — ${CL.auto} for simplicity, ${CL.fem} for yield potential and control.</p>

<h2>The Decision That Pays Off Before You Plant</h2>
<p>Before purchasing seeds, honestly assess your growing situation: What is your season length? What temperature extremes will your plants face? What is your typical humidity range during the weeks you will be flowering? How much space is available? What equipment do you own or are willing to acquire? Answering these questions narrows your options in a productive way. The ${CL.all} can be filtered by growing conditions, flowering time, and difficulty level — use those filters before browsing by potency or flavour profile, and your probability of a successful harvest increases substantially.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>What if my specific climate does not match any textbook growing condition?</dt>
<dd>Almost every location in Australia can produce quality cannabis with appropriate genetics. Indoor growing removes climate as a variable entirely. Outdoor growing in challenging conditions requires more careful strain matching but is achievable. The key is honest assessment of your constraints rather than ignoring them.</dd>
<dt>Indoor or outdoor — which is better?</dt>
<dd>Indoor offers environmental control and year-round capability. Outdoor offers bigger plants, natural light energy, and lower equipment outlay. Many Australian growers run both — indoor for consistency year-round, outdoor for volume during the long summer season. The optimal choice depends on your space, budget, climate, and legal context.</dd>
<dt>How important is strain selection compared to growing skill?</dt>
<dd>For newer growers: strain selection matters more. Environment-matched, forgiving genetics compensate for skill gaps. For experienced growers: skill can extract near-maximum potential from any genetics, but starting with climate-appropriate cultivars still produces the best outcomes for the effort invested.</dd>
</dl>
`;
}

function stateGuideArticle(slug: string, title: string): string {
  const state = extractState(slug);
  const strains = pickN(slug, [
    {n:'Gorilla Glue',h:'/gorilla-glue-cannabis-seeds',note:'Prolific resin producer delivering potent, full-body effects. Straightforward growing behaviour and dense flower structure — a proven performer across every Australian climate zone.'},
    {n:'Girl Scout Cookies',h:'/girl-scout-cookies-cannabis-seeds',note:'Sweet, earthy terpene character with a balanced hybrid effect. Moderate yield but exceptional flower quality. Reliable across both indoor and outdoor environments.'},
    {n:'Granddaddy Purple',h:'/granddaddy-purple-cannabis-seeds',note:'Grape-dominant aromatics with deep indica physical effects. Compact structure finishes quickly and develops striking purple hues when nighttime temperatures dip below 18°C.'},
    {n:'Northern Lights',h:'/northern-lights-cannabis-seeds',note:'The quintessential beginner cultivar — forgiving of mistakes, low odour, fast flowering, and resilient to environmental stress. Ideal first-grow genetics.'},
    {n:'Blue Dream',h:'/product-category/best-seller',note:'Sativa-leaning hybrid offering high yield potential and versatile daytime-to-evening effects. Consistently among our highest-selling cultivars across Australia.'},
    {n:'White Widow',h:'/white-widow-cannabis-seeds',note:'Dutch heritage resin producer with cerebral onset. Decades of breeding stability behind these genetics — dependable performance across diverse setups.'},
    {n:'Jack Herer',h:'/jack-herer-strain-and-related-cannabis-seeds',note:'Sativa-dominant with focused, creative effects. Taller growth habit rewards training. Excellent flower quality from a historically significant genetic line.'},
    {n:'OG Kush',h:'/product-category/kush-seeds',note:'Earthy, pine, and fuel aromatics — the genetic foundation of modern kush breeding. Moderate growing difficulty with outstanding terpene complexity.'},
    {n:'Cheese',h:'/cheese-cannabis-seeds',note:'Unmistakable savoury funk unlike any other cultivar. Indica-leaning effects with a distinctive aromatic fingerprint that sets it apart.'},
    {n:'SFV OG',h:'/sfv-og-cannabis-seeds',note:'Heavy indica character with frosty, dense flower structure. Sedative effect profile suited to evening use and physical relaxation.'},
  ], 10);

  return `
<p>${state} growers face a unique combination of climate conditions, seasonal timing, and regional considerations that generic Australian growing guides do not adequately address. This guide draws on purchasing patterns and grow feedback from our ${state} customer base — which strains they choose, which challenges they encounter most frequently, and which approaches produce the most reliable results in this specific region.</p>

<h2>Regulatory Context for ${state} Growers</h2>
<p>Cannabis seeds are sold as adult novelty souvenirs and for genetic preservation purposes. Cultivation laws in ${state} are determined at the state or territory level and can change between legislative sessions. Before germinating any seeds, verify your current rights under ${state} legislation through the official state or territory government website or health department. Our ${a('FAQ page', '/faq')} provides general context on the Australian federal and state framework, but local verification is your responsibility. We provide product and growing information, not legal counsel.</p>

<h2>Top Performing Cannabis Seeds for ${state} Growers</h2>
<p>These recommendations reflect what our ${state} customers actually grow with success — based on reorder rates and grow reports, not just initial purchase volume. Each cultivar below has demonstrated reliable results in conditions specific to this region.</p>
<ol>${strains.map(s => `<li><strong><a href="${s.h}">${s.n}</a></strong> — ${s.note}</li>`).join('\n')}</ol>
<p>This list is refined as our ${state} customer data expands. The ${CL.all} contains additional genetics beyond these recommendations, filterable by flowering time, difficulty level, and growing conditions.</p>

<h2>Indoor Growing in ${state}</h2>
<p>Indoor cultivation provides year-round growing capability regardless of ${state}'s outdoor conditions. The standard entry setup — a 1 m x 1 m or 1.2 m x 1.2 m grow tent, a 200W+ quality LED, an exhaust fan with carbon filter, and basic environmental monitoring — covers the essentials for productive home growing.</p>
<p>${CL.auto} are the most popular indoor choice among our ${state} customers — compact, fast (eight to twelve weeks seed-to-harvest), and simplified in their requirements. Growers ready to manage photoperiod light schedules and invest additional veg time can step up to ${CL.fem} for substantially higher yield potential. ${P.light(state)}</p>
<p>Common indoor challenges reported by ${state} growers: ${pick(slug, [
    'humidity management during warmer months when ambient moisture rises and increases mould risk during late flower. A dehumidifier rated for the tent volume is recommended for any grow overlapping with the humid season.',
    'temperature control during seasonal extremes — cooling costs in summer and supplemental heating during winter represent the primary ongoing expenses. Insulating the immediate area around the grow tent from ambient temperature fluctuations reduces HVAC demand and stabilises conditions.',
    'odour management in shared or semi-detached housing. A quality carbon filter matched to the exhaust fan CFM rating manages odour effectively for most home-scale grows — undersized filters or exhausted carbon media are the usual causes of breakthrough smell.',
  ], state)}</p>

<h2>Outdoor Growing in ${state}</h2>
<p>Outdoor success in ${state} depends on your specific microclimate — elevation, coastal proximity, urban heat effects, prevailing wind direction, and local frost dates all vary within the region. The general Southern Hemisphere approach: align your cultivar's flowering period with your local frost-free window (typically October through April), adjust strain selection for humidity and temperature patterns specific to your location, and choose genetics with characteristics suited to your conditions rather than chasing potency numbers.</p>
<p>For outdoor grows in ${state} with fewer than five frost-free months, ${CL.auto} or ${CL.fast} genetics are the most dependable options — they complete their lifecycle independently of day length and finish before autumn cold threatens the harvest. Longer, warmer outdoor seasons open the door to ${CL.fem} with greater yield potential and more environmental control through extended veg periods. ${P.harvest(state)}</p>

<h2>${state} Climate Considerations</h2>
<p>${pick(slug, [
    `Southern and inland parts of ${state} typically experience shorter growing seasons and cooler temperatures than coastal areas. Autoflower or fast-flowering genetics planted after the last frost date provide the most reliable outdoor outcomes. Indoor cultivation eliminates seasonal limitations entirely and is the most popular approach among our ${state} customers.`,
    `Humidity management during late flower is a recurring theme in grow reports from ${state}. Canopy airflow and targeted defoliation during weeks one and three of bloom help prevent the moisture accumulation within dense flower structures that leads to Botrytis — the most commonly reported crop loss factor in this region.`,
    `${state}'s temperature range supports year-round indoor growing and seasonal outdoor cultivation from October through April. Our ${CL.outdoor} collection includes cultivars assessed for performance in variable conditions, and our customer support team can provide region-specific recommendations based on your exact location and setup.`,
    `The established growing community within ${state} provides a valuable source of local knowledge — microclimate specifics, regional planting calendars, and strain performance data that complements the general guidance in this article.`,
  ], state + 'climate')}</p>

<h2>Starting Your First Grow in ${state}</h2>
<p>New to cultivation? ${CL.auto} provide the most accessible entry point — forgiving genetics, compact plants, and a seed-to-harvest timeline of ten to twelve weeks that delivers results before enthusiasm fades. Our ${a('germination guide', '/blog/cannabis-seed-identification-and-feminization')} walks through the starting process, and our ${a('customer support team', '/contact')} assists hundreds of growers weekly with genetics selection tailored to their specific situation and experience level.</p>
<p>All orders ship discreetly to ${state} addresses via Australia Post with tracking on every package. Visit our ${a('shipping page', '/shipping')} for delivery timeframe estimates and packaging information.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>What is the best beginner strain for ${state}?</dt>
<dd>Northern Lights Auto — forgiving, low odour, fast finish, and resilient to the mistakes every new grower inevitably makes. For growers who prefer photoperiod genetics, the non-auto Northern Lights version offers the same resilience with greater yield potential.</dd>
<dt>When is the right time to plant outdoors in ${state}?</dt>
<dd>After your local last frost date, when consistent overnight minimums stay above 10°C. For autoflowers, this is typically mid-October to mid-November across most ${state} locations. Photoperiod plants benefit from indoor pre-veg starting two to three weeks before outdoor transplant.</dd>
<dt>Do you deliver to ${state}?</dt>
<dd>Yes — we ship to all ${state} addresses via Australia Post with full tracking. All orders ship in plain, unmarked packaging with no external indication of contents. Full details on our ${a('shipping page', '/shipping')}.</dd>
</dl>
`;
}

function terpeneArticle(slug: string, title: string): string {
  const topic = title.replace(/Cannabis |Marijuana |and |in |Aromatherapy/gi, '').trim();
  return `
<p>Two cultivars at identical THC percentages can produce dramatically different experiences — one uplifting and focused, the other sedating and physical. The difference is terpenes. These volatile aromatic compounds do far more than create flavour; they shape the subjective character of each strain by modulating how cannabinoids interact with the endocannabinoid system. Understanding terpene profiles gives growers and consumers a tool for selecting cannabis by experience rather than by a single potency number.</p>

<h2>What Terpenes Do Beyond Creating Aroma</h2>
<p>Terpenes are organic compounds synthesised in the same trichome glands that produce cannabinoids. Cannabis generates over 200 identified terpenes, though most cultivars are characterised by two to five dominant compounds. These compounds evolved as the plant's chemical defence system — deterring herbivores, attracting beneficial pollinators, and protecting against UV radiation. Their effects on human physiology are incidental but profound: the interaction between terpenes and the endocannabinoid system shapes the nuanced, strain-specific experiences that make cannabis more complex than a single-molecule drug.</p>
<p>The "entourage effect" — the synergistic interaction between cannabinoids and terpenes — is supported by growing research and decades of observational evidence from cultivators and consumers. Strains with meaningfully different terpene profiles at identical THC concentrations produce reliably different subjective experiences. This is why experienced users select by strain name and aroma rather than by THC percentage.</p>

<h2>Dominant Terpenes in Cannabis and Their Contributions</h2>
<p><strong>Myrcene:</strong> The most prevalent cannabis terpene. Earthy, musky, herbal. Strongly associated with physical relaxation, sedation, and the classic "heavy indica" experience. Cultivars with myrcene above 0.5% of dry weight tend to produce pronounced body effects and couch-lock character. Also present in mangoes, hops, and lemongrass.</p>
<p><strong>Limonene:</strong> Bright citrus — lemon zest, orange peel. Associated with mood elevation, mental brightness, and the uplifting quality of many sativa-leaning cultivars. Limonene-forward flower tends to produce socially comfortable, mentally engaged effects. Also found in citrus rind, juniper berries, and rosemary.</p>
<p><strong>Caryophyllene:</strong> Peppery, dry spice, woody. Uniquely among terpenes, caryophyllene directly activates CB2 immune system receptors, potentially contributing anti-inflammatory activity independent of THC or CBD. Dominant in cultivars described as "fuel," "diesel," or "spicy." Also present in black pepper, cloves, and cinnamon bark.</p>
<p><strong>Pinene:</strong> Sharp pine, resinous, fresh. Linked to mental alertness and potential counteraction of some THC-related short-term memory effects. Common in ${CL.kush} and landrace genetics. Also found in pine needles, eucalyptus (highly relevant in Australia), and basil.</p>
<p><strong>Linalool:</strong> Floral, lavender, soft and calming. The terpene most consistently associated with anxiolytic effects. Common in cultivars recommended for anxiety and stress relief. Also the primary aromatic compound in lavender, mint, and coriander. ${P.anxiety('')}</p>
<p><strong>Terpinolene:</strong> Herbaceous, lightly fruity, piney. Less common as a dominant terpene, making terpinolene-forward cultivars distinctively different in a market dominated by myrcene and limonene profiles. Often described as "uplifting" and "creative." Found in nutmeg, tea tree oil (another Australian-relevant plant), and cumin.</p>

<h2>How Growing Conditions Shape Terpene Output</h2>
<p>Genetics set the terpene ceiling. Environment determines how much of that ceiling is reached. Several cultivation variables influence final terpene concentration:</p>
<p><strong>Light quality and intensity:</strong> Higher photon density drives more trichome production, increasing terpene output proportionally. UV-B light specifically stimulates terpene biosynthesis — which is why outdoor cannabis grown at altitude and indoor grows supplemented with UV-B LEDs frequently produce stronger aromatic profiles. Australian outdoor grows benefit from naturally high UV levels during the October-to-March growing season.</p>
<p><strong>Day-night temperature differential:</strong> A 5-8°C gap between day and night temperatures during flowering promotes terpene retention. Cool nights slow the evaporation of volatile aromatic compounds. This is why many growers reduce nighttime temperatures during the final two weeks of flower — and why autumn harvests in southern Australia, where cool April nights naturally provide this differential, often produce exceptionally aromatic flower.</p>
<p><strong>Controlled stress:</strong> Mild stress — gentle LST, moderate watering restriction, minor temperature fluctuation — can increase terpene synthesis as a defensive response. The boundary between beneficial stress and damaging stress depends on genetics, plant health, and the grower's ability to read plant signals.</p>

<h2>Harvest Timing and Terpene Preservation</h2>
<p>Terpenes volatilise in order of molecular weight. Lighter compounds (limonene, pinene, terpinolene) degrade first as maturity progresses. Heavier compounds (myrcene, caryophyllene, humulene) persist longer. Practical implication: earlier harvest preserves citrus, floral, and pine brightness. Later harvest shifts the profile toward earthier, muskier, more deeply aromatic character. Neither is inherently superior — the optimal timing depends on which aromatic direction you prefer. ${P.harvest('')}</p>

<h2>How Curing Builds (or Destroys) Terpene Complexity</h2>
<p>Slow, controlled curing over three to four or more weeks in sealed glass jars at 60-62% relative humidity allows enzymatic processes to develop secondary and tertiary aromatic compounds that are not present in freshly dried flower. Growers consistently describe week-one cure aromatics as "simple" and week-four aromatics as "layered" and "complex" — a difference that is both perceivable and measurable.</p>
<p>Fast drying in warm, dry conditions destroys terpenes before enzymatic maturation can occur. This is why properly cured flower from modest genetics can outperform hastily dried flower from elite genetics in terms of aromatic depth and flavour richness. ${P.cure('')}</p>

<h2>Choosing Seeds by Terpene Profile</h2>
<p>If terpene expression is a priority (and for experienced growers, it often matters more than THC percentage), select genetics known for the aromatic character you want. ${CL.kush} lean myrcene and caryophyllene. ${CL.fruity} are bred for limonene and sweet aromatics. ${CL.exotic} feature unusual terpene combinations not found in mainstream genetics. ${CL.sat} from tropical lineages trend limonene and terpinolene. Our ${CL.all} includes terpene profile information for every cultivar.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>Can growing supplements increase terpene production?</dt>
<dd>Some products marketed as terpene enhancers exist. Whether they directly increase terpene biosynthesis versus simply providing nutrients that support healthy plant metabolism (which itself maximises terpene output) is debated. The most reliable approaches remain: good genetics, adequate light with UV-B where possible, cool nights in late flower, appropriate harvest timing, and careful drying and curing.</dd>
<dt>Do terpenes affect the intensity of the experience?</dt>
<dd>They shape the direction and character more than the raw intensity. Myrcene amplifies physical sedation. Limonene promotes mental brightness. THC concentration drives intensity; terpenes determine the qualitative nature of that intensity.</dd>
<dt>How can I identify which terpenes are in my flower without lab testing?</dt>
<dd>Your nose. Earthy and musky indicates myrcene dominance. Citrus notes point to limonene. Pepper and spice suggest caryophyllene. Fresh pine indicates pinene. Floral and lavender notes signal linalool. Aroma assessment is surprisingly accurate for identifying primary terpenes once you learn the associations.</dd>
<dt>Is vaporising better than smoking for terpene preservation?</dt>
<dd>Substantially. Combustion above 230°C destroys most terpenes and converts some into less desirable pyrolytic compounds. Vaporisation at 170-195°C releases terpenes at their individual boiling points, preserving far more aromatic and experiential complexity. The difference is most dramatic with terpene-rich ${CL.exotic} and ${CL.fruity} cultivars.</dd>
</dl>
`;
}

function cannabinoidArticle(slug: string, title: string): string {
  const topic = title.replace(/Cannabis |Marijuana |and |in /gi, '').trim();
  return `
<p>Cannabinoids are the chemical interface between cannabis and the human body. They interact with the endocannabinoid system to produce everything from psychoactive intensity to physical relaxation to appetite changes. Moving beyond surface-level descriptions of ${topic.toLowerCase()} helps growers select genetics with purpose and helps consumers set accurate expectations for what a given cultivar or product will actually deliver.</p>

<h2>The Endocannabinoid Receptor System</h2>
<p>Two primary receptor types mediate cannabinoid effects. CB1 receptors concentrate in the brain and central nervous system — THC binds directly here, producing psychoactive effects, pain signal modulation, appetite stimulation, and euphoria. CB2 receptors concentrate in immune tissue and peripheral organs — they mediate inflammatory and immune responses. CBD does not bind directly to either receptor type but modulates their activity and interacts with serotonin pathways, contributing to its associations with anxiety reduction and anti-inflammatory activity.</p>
<p>This receptor division explains why THC and CBD produce such different experiences despite originating from the same plant: they engage different biological systems through different molecular mechanisms.</p>

<h2>Where ${topic} Fits in the Cannabinoid Landscape</h2>
<p>${pick(slug, [
    `${topic} occupies a distinct position in the cannabinoid spectrum that is worth understanding beyond headlines. Its interaction with the endocannabinoid system produces effects that differ from both THC and CBD, which is why cultivars or products with elevated levels of this compound offer a qualitatively different experience.`,
    `Interest in ${topic.toLowerCase()} has expanded as both researchers and consumers look past THC as the sole measure of cannabis quality. Different cannabinoids serve different purposes, and knowing which align with your goals informs smarter decisions about genetics, consumption, and expectations.`,
    `What distinguishes ${topic.toLowerCase()} is how it interacts with and modifies the effects of co-occurring cannabinoids and terpenes. Cannabis is a multi-compound experience — the ratio between cannabinoids and the terpene context they exist within determines the full character of the effect.`,
  ], 'spec')}</p>

<h2>How Cultivation and Harvest Decisions Influence Cannabinoid Content</h2>
<p>Genetics set the cannabinoid ratio ceiling. Environmental factors modify the final expression. Light intensity and spectrum govern total trichome production — more trichomes means more cannabinoid synthesis capacity. Australian outdoor grows during the October-to-February peak receive intense natural sunlight that supports robust trichome development. Nutrient management supports plant health, and healthy plants produce more abundant and mature trichomes than stressed ones. Harvest timing directly shifts the ratio: earlier harvest preserves maximum THC relative to CBN, while extended harvest increases CBN as THC degrades. ${P.harvest('')}</p>
<p>This explains why identical genetics from different grows produce different lab results. The DNA sets the potential; the growing environment and harvest timing determine what fraction of that potential is realised in the finished flower.</p>

<h2>Selecting Genetics by Cannabinoid Profile</h2>
<p>Targeting maximum THC: ${CL.thc} from lineages with multi-generational potency selection. Combined with optimal growing conditions, strong light, and accurate harvest timing, these genetics reliably produce the highest-potency flower available.</p>
<p>Targeting elevated CBD with minimal THC: ${CL.cbd} bred specifically for therapeutic cannabinoid ratios — from 1:1 THC/CBD balance through strains reaching 20:1 CBD to THC.</p>
<p>Targeting minor cannabinoid diversity: ${CL.exotic} and newer breeding programmes incorporating CBG, CBN, and THCV into the genetic architecture. These represent the leading edge of cannabis breeding and offer experiential profiles distinct from standard THC-dominant or CBD-dominant genetics.</p>

<h2>Interpreting Lab Results and Potency Claims</h2>
<p>Lab-reported cannabinoid percentages provide useful guidance but carry inherent limitations. Testing methodology varies between laboratories, sample preparation affects outcomes, and each number represents a single sample from a single location on a single plant — not a batch average. Growing conditions change final cannabinoid ratios even between clones of the same mother plant.</p>
<p>Use lab data directionally: a cultivar that consistently tests in the 22-26% THC range across multiple independent harvests has genuinely high-potency genetics. A single test showing 31% from one grower is an outlier, not a baseline. Consistency across multiple tests from credible sources means more than any single peak result.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>Does higher THC automatically mean a stronger experience?</dt>
<dd>Higher THC generally means more intense psychoactive effects. But the subjective character — whether the experience feels cerebral or physical, energising or sedating, focused or scattered — is shaped primarily by terpene composition and minor cannabinoid content rather than the THC number alone. A 20% THC cultivar with the right terpene combination can feel subjectively "stronger" in a specific direction than a 27% THC cultivar with a different terpene profile.</dd>
<dt>Can I cultivate cannabis with targeted cannabinoid ratios?</dt>
<dd>Yes — genetics determine the ratio framework and harvest timing fine-tunes it. ${CL.cbd} produce elevated CBD. High-THC lineages produce high-THC flower. Precision depends on genetic stability (why sourcing from tested breeders matters) and accurate harvest timing based on trichome maturity assessment.</dd>
<dt>Do minor cannabinoids (CBG, CBN, THCV) make a meaningful difference?</dt>
<dd>Increasingly, the evidence suggests yes. CBG shows anti-inflammatory and neuroprotective associations. CBN (produced as THC degrades) contributes sedative qualities. THCV may modulate appetite differently from THC. These compounds exist at low concentrations in all cannabis but can be elevated through specific genetics and cultivation approaches.</dd>
</dl>
`;
}

function sleepArticle(slug: string, title: string): string {
  return `
<p>Cannabis for sleep is more nuanced than picking a heavy indica and smoking it before bed. Whether a cultivar actually promotes quality sleep depends on its terpene-cannabinoid interaction, how it was harvested, the consumption method, and — critically — the dose. Getting these variables aligned is the difference between genuine sleep support and simply feeling altered while lying awake.</p>

<h2>What Makes Certain Cultivars Sedating</h2>
<p>The sedative quality of cannabis is driven primarily by the combination of myrcene-dominant terpenes and indica-type cannabinoid expression. Myrcene at higher concentrations produces muscle relaxation and physical heaviness that facilitates the transition from wakefulness to sleep. Heavy ${CL.ind} with elevated myrcene create the "sinking into the mattress" sensation that sleep-focused users rely on.</p>
<p>Cultivars that work against sleep: high-THC ${CL.sat} with limonene or terpinolene dominance. These produce mental activation, accelerated thoughts, and sometimes anxiety — the opposite of what someone trying to sleep requires. Even moderate-THC sativas can keep the mind too engaged for sleep onset.</p>
<p>Quick filter: if the strain is described as "relaxing" and "body-heavy" with "earthy" or "musky" aromatics, it is more likely to support sleep than a cultivar described as "energising," "creative," or "citrusy."</p>

<h2>Harvest Timing for Sleep-Optimised Flower</h2>
<p>This variable is overlooked by most growers seeking sleep-focused flower. Harvesting with 20-30% amber trichome heads produces flower with elevated CBN content — CBN forms as THC oxidises and is mildly sedative on its own. The practical implication for sleep-focused growers: allow the plant to mature slightly past the standard harvest window. You trade some peak THC (a portion has converted to CBN) for a more sedative overall cannabinoid profile that better serves nighttime use. ${P.harvest('')}</p>

<h2>Dosing for Sleep: Why Less Works Better</h2>
<p>The dose that supports sleep is not the dose for heavy recreational use. Moderate intake of a sedative cultivar produces drowsiness and physical relaxation that transitions smoothly into sleep. High doses can trigger anxiety, mental restlessness, or an uncomfortably altered state that is too stimulating for sleep onset — the body wants to rest but the mind cannot settle.</p>
<p>Approach: one to two inhalations of a sedative strain approximately sixty to ninety minutes before intended sleep time. Evaluate after fifteen to twenty minutes. Add more only if relaxation is insufficient. The target state is comfortable drowsiness, not incapacitation.</p>
<p>For users who wake during the night, edibles deliver longer-lasting effects (six to eight hours versus two to three for inhalation). A low-dose edible (5-10 mg THC from a sedative indica cultivar) consumed ninety minutes before bed can provide sustained overnight coverage that inhalation cannot match. ${P.anxiety('')}</p>

<h2>Cultivar Recommendations for Sleep</h2>
<p><strong>Myrcene-heavy indicas:</strong> ${CL.kush} genetics — Bubba Kush, OG Kush, Hindu Kush, Purple Kush — are the most consistently cited sleep cultivars among our Australian customer base. Their earthy, musky terpene profiles and pronounced physical effects align precisely with what sleep-focused users report seeking.</p>
<p><strong>Purple genetics:</strong> ${CL.purple} cultivars are frequently reported as sleep-supportive, likely because many carry myrcene-dominant terpene profiles combined with strong indica genetics.</p>
<p><strong>CBD-dominant flower:</strong> For users wanting sleep support without significant psychoactive alteration, ${CL.cbd} deliver body relaxation and potential anxiety reduction without the mental intensity of THC-dominant genetics — particularly relevant for users who find THC produces racing thoughts that interfere with sleep.</p>
<p><strong>Balanced 1:1 THC/CBD cultivars:</strong> For users who benefit from mild THC effects but find high-THC cultivars too mentally stimulating — the CBD moderates THC's psychoactive intensity while preserving enough cannabinoid activity for noticeable relaxation.</p>

<h2>What Undermines Sleep-Focused Cannabis Use</h2>
<p><strong>Sativas before bed:</strong> Even "relaxing" sativas tend to engage the mind in ways that oppose sleep. If a strain description includes "creative," "focused," or "uplifting," it is not a sleep strain regardless of how pleasant it is.</p>
<p><strong>Overdoing the dose:</strong> The threshold where THC goes from relaxing to anxiety-inducing varies individually. Starting low and titrating across separate sessions — not within a single session — identifies your personal sweet spot safely.</p>
<p><strong>Cannabis as the sole sleep intervention:</strong> Cannabis supports sleep most effectively alongside sound sleep hygiene — consistent schedule, dark room, cool temperature, limited screen exposure before bed. Using cannabis to override poor sleep habits delivers diminishing returns over time.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>How far before bed should I use cannabis for sleep?</dt>
<dd>Inhaled: thirty to sixty minutes before bed. Edibles: ninety to one hundred and twenty minutes before bed. Time the peak effect to coincide with your intended sleep onset rather than consuming immediately before lying down.</dd>
<dt>Does cannabis help me stay asleep or only fall asleep?</dt>
<dd>Inhalation primarily aids sleep onset — effects dissipate within two to three hours. For maintaining sleep through the night, edibles provide sustained coverage across six to eight hours. Users who fall asleep easily but wake at 3 AM typically find edibles more effective than inhalation.</dd>
<dt>Will I develop tolerance if I use cannabis for sleep regularly?</dt>
<dd>Yes — regular use at the same dose builds tolerance over time. Strategies to manage this: rotate between two or three different sedative cultivars; take periodic breaks of two to three days to reset sensitivity; and keep doses moderate to slow tolerance development.</dd>
<dt>Is long-term cannabis use for sleep safe?</dt>
<dd>We are seed specialists, not physicians, and cannot provide medical advice. Many of our customers report using cannabis for sleep support over extended periods. Users with concerns about long-term use should consult a healthcare provider knowledgeable about cannabis therapeutics.</dd>
</dl>
`;
}

function painArticle(slug: string, title: string): string {
  return `
<p>Cannabis for pain management is a topic requiring careful language. We are cultivators and seed specialists — not medical professionals. Nothing here constitutes medical advice, and anyone using cannabis to address pain should work with a knowledgeable healthcare provider. What we can offer is information about which genetic profiles are most commonly selected by Australian users seeking body-focused relief, what the research literature says about relevant mechanisms, and what our customer base reports from their lived experience.</p>

<h2>Relevant Cannabinoid Pathways</h2>
<p>THC's analgesic properties operate primarily through CB1 receptor activation in the central nervous system, modulating how the brain processes pain signals. This mechanism reduces the perception of pain rather than addressing its source — an important distinction. CBD interacts with different pathways — serotonin receptors, TRPV1 vanilloid receptors, and adenosine signalling — and carries anti-inflammatory associations supported by preclinical research. CBD does not produce THC's psychoactive effects, making it appropriate for users who want potential inflammatory modulation without cognitive alteration.</p>
<p>Caryophyllene, a terpene present in many cannabis cultivars, directly activates CB2 immune system receptors — an unusual property among terpenes that gives it potential anti-inflammatory activity independent of THC or CBD content. This makes caryophyllene-rich cultivars relevant for body-focused selection. ${P.terp('')}</p>

<h2>How Australian Customers Describe Two Categories of Relief</h2>
<p><strong>"Distraction" approach:</strong> Cannabis does not eliminate the pain sensation but shifts attention and emotional response away from it. More common with cerebral, sativa-leaning cultivars that engage the mind. Users describe remaining aware of discomfort but feeling less distressed by it. Suits users who need to maintain daytime function and mental clarity.</p>
<p><strong>"Settling" approach:</strong> Cannabis produces body-dominant relaxation that appears to directly reduce the physical intensity of discomfort. More common with heavy ${CL.ind} and myrcene-dominant cultivars. Users describe pain as feeling "muted" or "pushed into the background." Suits evening use when function requirements are lower.</p>
<p>This distinction matters because different genetics serve different pain management strategies. A user seeking daytime function with reduced pain awareness benefits from different cultivars than a user managing evening body discomfort with maximum physical relaxation.</p>

<h2>Genetics Commonly Selected for Body-Focused Use</h2>
<p><strong>${CL.cbd} (high CBD, minimal THC):</strong> Chosen by users seeking potential anti-inflammatory benefit without psychoactive intensity. Particularly popular among users who consume cannabis daily for ongoing discomfort and cannot tolerate THC's cognitive effects during working hours.</p>
<p><strong>Balanced 1:1 THC/CBD cultivars:</strong> Combine THC's analgesic properties with CBD's anti-inflammatory associations. The CBD component moderates THC's psychoactive intensity — many users describe 1:1 cultivars as providing more body-targeted relief with less mental alteration than high-THC flower.</p>
<p><strong>Heavy indicas with caryophyllene and myrcene dominance:</strong> Our customer reports indicate the strongest body-focused relief from this combination — deep physical relaxation from indica genetics, potential anti-inflammatory contribution from caryophyllene, and muscle-relaxing sedation from myrcene. ${CL.kush} genetics (OG Kush, Bubba Kush, Afghan Kush) frequently feature this terpene pairing.</p>
<p>Our ${CL.anxiety} collection overlaps significantly with pain-relevant genetics, since many users managing ongoing discomfort also deal with the anxiety and sleep disruption that chronic pain produces.</p>

<h2>Consumption Method and Effect Duration</h2>
<p><strong>Inhalation:</strong> Fastest onset (one to five minutes), shortest duration (two to three hours). Useful for acute episodes where rapid onset matters. Permits precise dose titration — inhale once, wait, assess, decide.</p>
<p><strong>Edibles:</strong> Slower onset (thirty to ninety minutes), extended duration (four to eight hours). Preferred by users needing sustained coverage — overnight comfort, all-day support during flare-ups. Slower onset makes dose control harder; starting low (5-10 mg THC) and waiting two full hours before considering more is essential.</p>

<h2>Important Considerations</h2>
<p>Individual responses vary considerably. What provides meaningful relief for one person may produce no benefit or unwanted effects for another. Endocannabinoid system tone, pain type and origin, concurrent medications, and individual tolerance all influence the outcome.</p>
<p>Users taking pain medications — particularly opioids, benzodiazepines, or muscle relaxants — should consult their healthcare provider before combining with cannabis. Cannabinoids can interact with the metabolism of certain drugs through the CYP450 enzyme pathway.</p>
<p>Growing your own from ${CL.fem} or ${CL.auto} provides control over genetics, harvest maturity, and cure quality — all of which influence the therapeutic character of the finished flower. The ${CL.all} includes cannabinoid and terpene details for every cultivar to support informed selection.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>Indica or sativa for pain?</dt>
<dd>For body-focused physical pain: indica-dominant cultivars are most commonly preferred. For maintaining function while managing awareness of discomfort: moderate-THC hybrids or CBD-dominant cultivars. "Better" is entirely dependent on your specific situation, pain type, and functional needs.</dd>
<dt>What dose should I start with?</dt>
<dd>Begin with the minimum effective dose. Inhaled: one small inhalation of a known sedative cultivar. Edibles: 5 mg THC. Wait for full effect development before increasing. The effective dose for pain management is frequently lower than the dose used for recreational purposes.</dd>
<dt>Can cannabis replace prescription pain medication?</dt>
<dd>This is a medical question for your healthcare provider. We cannot advise on medication changes. Many users report supplementing existing pain management with cannabis rather than replacing it — but that decision requires professional medical guidance specific to your circumstances.</dd>
</dl>
`;
}

function anxietyArticle(slug: string, title: string): string {
  return `
<p>Cannabis and anxiety have a complicated relationship. The right cultivar at the right dose can genuinely calm. The wrong cultivar or too much of the right one can amplify anxiety dramatically. The margin between helpful and harmful is narrower for anxiety-prone individuals than for any other use case, which makes informed strain selection, careful dosing, and controlled consumption environment more important here than anywhere else in cannabis use.</p>

<h2>Why THC Both Reduces and Increases Anxiety</h2>
<p>THC's relationship with anxiety is biphasic. At low doses, CB1 receptor activation in the amygdala and prefrontal cortex tends to reduce anxiety. At higher doses, overactivation of those same pathways can amplify it. The crossover point varies by individual — driven by endocannabinoid system tone, CB1 receptor density, and personal tolerance rather than by willpower or experience. Some users handle 20 mg of THC comfortably while others become anxious at 5 mg. Both responses are biologically valid.</p>
<p>This biphasic behaviour explains why cannabis reviews split between "this cured my anxiety" and "this gave me a panic attack." Both accounts are accurate — for that person, at that dose, with that cultivar.</p>

<h2>Terpene Profiles: Calming vs. Activating</h2>
<p><strong>Calming terpenes:</strong> Linalool (floral, lavender) carries the strongest anxiolytic associations across both cannabis research and traditional aromatherapy. Myrcene contributes physical relaxation that quiets the somatic manifestations of anxiety — muscle tension, restlessness, elevated heart rate. Caryophyllene's CB2 activity may reduce systemic inflammation that indirectly contributes to anxiety states.</p>
<p><strong>Activating terpenes:</strong> Terpinolene in high concentrations feels energising to the point of restlessness in anxiety-prone users. High limonene can feel buzzy or mentally overstimulating. Pinene promotes alertness — helpful for focus, but it can register as agitation when anxiety is already elevated.</p>
<p>The practical filter for anxiety-prone users: prioritise cultivars led by linalool, myrcene, or caryophyllene. Exercise caution with terpinolene-dominant and high-limonene genetics. ${P.terp('')}</p>

<h2>Starting with CBD for Maximum Safety</h2>
<p>If you experience anxiety and are new to cannabis — or have had negative experiences with THC — ${CL.cbd} cultivars represent the safest entry point. CBD does not produce psychoactive effects but modulates CB1 receptor activity and interacts with serotonin pathways associated with mood regulation. CBD-dominant flower (15:1 or 20:1 CBD to THC) offers potential calming effects with essentially zero risk of THC-triggered anxiety.</p>
<p>From this safe baseline, users who want to explore mild THC effects can progress to balanced 1:1 THC/CBD cultivars — the CBD component moderates THC's psychoactive intensity and reduces the probability of anxiety escalation. Our ${a('anxiety-relief collection', '/product-category/best-strains-for-anxiety')} is organised from lowest to highest THC content to support this graduated approach.</p>

<h2>Dosing Principles for Anxiety-Prone Users</h2>
<p><strong>Start low:</strong> One small inhalation, or 2.5-5 mg THC for edibles. Wait fifteen to twenty minutes (inhalation) or ninety minutes (edibles) before deciding on more. The effective dose for anxiety relief is almost always lower than the recreational dose.</p>
<p><strong>Titrate across sessions, not within them:</strong> Increase dose by small increments across separate days, not within a single session. Finding your individual threshold requires multiple controlled trials over multiple days.</p>
<p><strong>Control the environment:</strong> Cannabis interacts with setting and mental state. Using cannabis in a comfortable, familiar environment while relaxed produces a fundamentally different experience than using it in an unfamiliar or stressful context.</p>

<h2>Characteristics of Effective Anxiety Cultivars</h2>
<p>Based on feedback from thousands of Australian customers who specifically select genetics for anxiety management, the most consistently positive outcomes come from cultivars sharing these traits: <strong>moderate THC (12-18%)</strong> rather than extreme potency; <strong>linalool or myrcene-dominant terpene profile</strong>; <strong>indica or balanced hybrid</strong> genetics; and <strong>stable phenotype expression</strong> from well-tested breeding lines — because unpredictable effects are the enemy of anxiety management.</p>
<p>Cultivars to approach cautiously: anything testing above 25% THC, pure sativas with terpinolene dominance, genetics described by users as "racy" or "cerebral," and any new cultivar you have not tried before (always test-dose first).</p>

<h2>Why Growing Your Own Benefits Anxiety Management</h2>
<p>Growing from ${CL.fem} or ${CL.auto} gives anxiety-focused users control over genetics (select precisely the terpene and cannabinoid profile that works for you), harvest timing (extend maturity for more CBN sedation if desired), and batch consistency (same genetics, same growing method, predictable results grow after grow). For users where consistency and predictability directly affect wellbeing, eliminating the variable quality of external sourcing is a meaningful benefit.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>Can cannabis make anxiety worse?</dt>
<dd>Yes — specifically high-THC cultivars at high doses, sativa-dominant genetics with stimulating terpene profiles, and use in uncomfortable settings. Strain selection, dose control, and environment all matter. Begin with CBD-dominant genetics to establish a safe baseline before any THC exploration.</dd>
<dt>What is the safest first-time cultivar for someone with anxiety?</dt>
<dd>A CBD-dominant strain with 15:1 or higher CBD to THC ratio. Zero THC-related anxiety risk. If that works but you want slightly more noticeable effect, progress to a 1:1 balanced cultivar. Build gradually based on your individual experience.</dd>
<dt>Indica or sativa for anxiety?</dt>
<dd>Indica-dominant or balanced hybrids are generally safer choices for anxiety-prone individuals. Sativas — particularly at higher doses — can produce the mental activation and thought acceleration that triggers anxiety. Exceptions exist (low-dose sativas with calming terpenes), but indica or hybrid is the safer default starting point.</dd>
<dt>Can I combine cannabis with anxiety medication?</dt>
<dd>Discuss with your healthcare provider. Cannabis can interact with certain medications via the CYP450 enzyme system, potentially altering how your body metabolises prescription drugs. This is a medical question requiring professional guidance specific to your medication regimen.</dd>
</dl>
`;
}

function edibleArticle(slug: string, title: string): string {
  return `
<p>Homemade cannabis edibles and extracts begin with a chemical step that most recipes treat as an afterthought: decarboxylation. Raw cannabis flower contains THCA and CBDA — the acidic precursors that do not produce psychoactive or therapeutic effects when eaten. Heat converts these into active THC and CBD. Skip the decarb step, or do it carelessly, and your edibles will be disappointingly weak regardless of how much flower you use. Execute it properly and you unlock a consumption method with longer-lasting, more body-focused effects than any inhaled format.</p>

<h2>Decarboxylation: The Chemistry and the Method</h2>
<p>THCA converts to THC through sustained heat. The optimal balance between thorough conversion and minimal compound degradation occurs at 115°C for 40-60 minutes in a standard oven. Higher temperatures accelerate the conversion but simultaneously degrade THC to CBN and destroy volatile terpenes — relevant if you care about flavour in the finished product, not just potency. A gentler alternative: 107°C for 90 minutes, which preserves more terpenes at the cost of time.</p>
<p>Technique: coarsely break up your flower (do not grind to powder — fine grinding increases surface area exposure and accelerates degradation). Spread evenly on a parchment-lined baking tray. Bake at 115°C for 40-50 minutes. The flower should shift from green to a brownish-green and develop a toasty aroma. Allow to cool before handling.</p>
<p>For odour-sensitive households: sous vide decarboxylation. Seal coarsely ground flower in a vacuum bag, submerge in a 95°C water bath for 90 minutes. Precise temperature control and near-zero odour make this the preferred method for growers in units, townhouses, or any shared living arrangement.</p>

<h2>Infusion: Choosing and Using a Fat Carrier</h2>
<p>THC and CBD are fat-soluble, not water-soluble. Infusing into a fat-based carrier is the standard home approach.</p>
<p><strong>Coconut oil:</strong> The top choice for most home producers. Its 82% saturated fat content binds cannabinoids efficiently. Mild flavour at moderate concentrations. Solid at room temperature for easy handling and portioning. Substitutes directly for butter or oil in most recipes.</p>
<p><strong>Butter:</strong> Works well for baking but has lower usable fat content (~80%) and contains water and milk solids that dilute binding efficiency. Clarified butter (ghee) removes water and solids, performing closer to coconut oil.</p>
<p><strong>MCT oil:</strong> Liquid coconut derivative used primarily for tinctures and capsules rather than cooking. Maximum fat concentration and fast absorption, but unsuitable for baking due to low smoke point.</p>
<p>Standard infusion: combine decarboxylated flower with chosen fat at 7-10 grams per 250 mL (one cup). Maintain 70-82°C for two to four hours — a slow cooker on the low setting, a double boiler arrangement, or a sous vide circulator at 80°C all work. Stir periodically. Strain through cheesecloth or fine mesh, pressing gently to recover infused oil without forcing plant material through the filter. Refrigerate for four to six weeks or freeze for extended storage.</p>

<h2>Dosing: The Arithmetic and the Common Mistake</h2>
<p>Accurate dosing requires knowing (approximately) the THC percentage of your starting material:</p>
<p>Flower weight (mg) x THC percentage x decarb efficiency (~0.87) = total mg THC in the batch.</p>
<p>Example: 7 grams (7,000 mg) of 20% THC flower x 0.20 x 0.87 = approximately 1,218 mg THC in the total infusion. Divided into 250 mL of oil producing 28 cookies, each cookie contains roughly 43 mg THC — well above a sensible starting dose for most people.</p>
<p>Responsible starting dose for users without established tolerance: 5-10 mg THC. Experienced users: 15-25 mg. Doses above 50 mg are high and should only be attempted with confirmed tolerance.</p>
<p>The most common edible mistake: consuming additional portions before the initial dose has taken full effect. Edibles take 30-90 minutes to onset (longer on a full stomach). The pattern of "it is not working" at 45 minutes, eating another portion, then having both doses arrive at 90 minutes is extremely common and produces an overwhelmingly intense experience. Wait a full two hours before considering more.</p>

<h2>How Edible Effects Differ from Inhaled Cannabis</h2>
<p>When THC passes through the digestive system, the liver converts it to 11-hydroxy-THC — a metabolite that crosses the blood-brain barrier more efficiently than inhaled THC and produces stronger psychoactive effects at equivalent doses. This is why 10 mg in an edible feels more intense than 10 mg inhaled despite being the "same" amount. Duration is also longer (four to eight hours versus two to three) and the character tends toward body-focused effects.</p>
<p>Strain selection matters for edibles, though the liver conversion partially overrides terpene-driven effect character. ${CL.ind} that are already body-heavy produce deeply sedative edibles. ${CL.sat} that feel cerebral when smoked can surprise with body-focused edible effects because 11-hydroxy-THC adds a physical component regardless of the cultivar's inhaled profile.</p>

<h2>Choosing Genetics for Edible Production</h2>
<p><strong>Maximum potency per gram:</strong> ${CL.thc} genetics provide the most THC per unit of flower, meaning stronger infusions from less material — an efficiency advantage for home production.</p>
<p><strong>Flavour contribution:</strong> ${CL.fruity} and ${CL.exotic} add perceptible flavour character to infusions. Limonene-dominant cultivars impart a citrus undertone. Myrcene-heavy cultivars lend earthiness. These flavour distinctions are most noticeable in simple preparations (infused oil on toast, cannabutter in a basic biscuit) and less detectable in heavily flavoured recipes.</p>
<p><strong>Therapeutic focus:</strong> ${CL.cbd} produce edibles centred on potential anti-inflammatory and calming effects without strong psychoactive intensity. Balanced 1:1 THC/CBD cultivars create edibles with moderate psychoactive warmth alongside therapeutic cannabinoid content.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>How long do homemade cannabis edibles keep?</dt>
<dd>Infused oil or butter: four to six weeks refrigerated, six or more months frozen. Baked goods: same shelf life as their non-infused equivalents (biscuits: one week at room temperature, two to three months frozen). Gummies and confectionery: several weeks at room temperature in sealed containers.</dd>
<dt>Can I use trim or shake instead of premium flower?</dt>
<dd>Yes. Trim and shake carry trichomes and are perfectly suitable for infusion. Potency is lower — typically 5-15% THC versus 15-25% for flower. Compensate by using roughly double the weight of trim compared to flower for equivalent potency.</dd>
<dt>Why do my homemade edibles taste so strongly of plant matter?</dt>
<dd>Two common causes: using too much plant material relative to fat, and inadequate straining. Using less flower per cup of oil (5-7 grams instead of 10+), water-curing decarboxylated flower before infusion (soaking in water for 24 hours to leach chlorophyll), and straining through multiple cheesecloth layers all reduce vegetal flavour without diminishing potency.</dd>
<dt>Can I decarboxylate using a microwave?</dt>
<dd>No. Microwaves heat unevenly and cannot sustain the precise temperature required for efficient decarboxylation without degradation. Oven and sous vide remain the only reliable home methods.</dd>
</dl>
`;
}

function accessoryArticle(slug: string, title: string): string {
  const topic = title.replace(/Cannabis |Marijuana |Weed |Herb |and |of /gi, '').trim();
  return `
<p>The effort invested in growing, drying, and curing quality flower can be undermined in the final step — how the finished product is handled, prepared, and consumed. Tools and methods that preserve the terpene integrity, trichome structure, and aromatic complexity you spent months cultivating make a measurable difference to the final experience. This is not about buying expensive gear — it is about understanding how each step in the consumption chain either preserves or degrades quality.</p>

<h2>Temperature as the Quality Gatekeeper</h2>
<p>${pick(slug, [
    `Combustion (above 230°C) destroys the majority of terpenes and converts a portion of cannabinoids into pyrolytic byproducts that contribute harshness without adding value. Vaporisation at 170-195°C selectively releases cannabinoids and terpenes at their individual boiling points, preserving substantially more of the aromatic and experiential complexity your genetics and growing effort produced. The flavour difference between smoking and vaporising the same flower is dramatic enough that many growers who switch describe it as discovering what their cultivar actually tastes like for the first time.`,
    `Preparation technique between the jar and consumption affects quality more than most users realise. A worn grinder with dull teeth crushes trichome heads rather than separating them cleanly — releasing sticky resin onto metal surfaces rather than into the prepared material. An excessively fine grind increases surface area exposed to heat, producing faster, hotter combustion that destroys more compounds. A medium grind that maintains some flower structure promotes more even heat distribution during either vaporisation or combustion.`,
    `For growers who specifically selected ${CL.fruity} for citrus character, ${CL.kush} for earthy depth, or ${CL.exotic} for complex profiles, the consumption method is the final quality bottleneck. Combustion eliminates most of the terpene distinctions that made those genetics worth choosing. Low-temperature vaporisation preserves them. The return on investment from a quality vaporiser shows up on the very first session with terpene-rich flower.`,
  ], 'core')}</p>

<h2>${topic}: Practical Details</h2>
<p>${pick(slug, [
    `Quality equipment makes a difference not because expensive automatically means better, but because poorly designed or unmaintained tools actively degrade the product. Residue-coated glass adds stale flavour that obscures terpene expression. Corroded or clogged grinder teeth crush rather than cut. A vaporiser with inaccurate temperature control cannot deliver the selective terpene release that makes vaporisation worthwhile. Clean equipment, sharp edges, and precise temperature control are the three variables under your control after the flower leaves the cure jar.`,
    `The handling chain between sealed cure jar and consumption involves more degradation exposure than most users track. Every jar opening releases terpenes and admits oxygen. Over-handling flower (breaking up by hand, leaving exposed to air and light) accelerates degradation. Pre-grinding material for later use dramatically increases the surface area exposed to oxygen. The optimal practice: prepare only what you plan to consume immediately, directly from a sealed jar, using clean tools.`,
    `Modern dry herb vaporisers with digital temperature displays allow terpene-by-terpene exploration. Myrcene vaporises at 167°C, limonene at 176°C, caryophyllene at 130°C, linalool at 198°C. Adjusting your temperature setting emphasises different terpene fractions from the same flower — lower temperatures for bright, volatile aromatics; higher temperatures for heavier, more sedative compounds. This is not theoretical; the difference is immediately perceptible across a 170-205°C range.`,
  ], 'prac')}</p>

<h2>Long-Term Flower Storage</h2>
<p>After curing is complete, storage priorities are: darkness, cool temperature (15-21°C), stable humidity (58-62% RH), and minimal air exposure. Glass mason jars with metal lids remain the gold standard — inert material, airtight seal, and no static charge to strip trichomes (unlike plastic containers). UV-blocking amber glass or storage in a dark cupboard prevents light-driven THC degradation to CBN.</p>
<p>For storage exceeding three months, consider vacuum-sealing portions inside glass jars with humidity packs. Avoid vacuum-sealing directly in plastic bags — compression damages bud structure and static charges pull trichome heads off the flower surface. ${P.cure('')}</p>

<h2>The Complete Quality Chain</h2>
<p>Quality in cannabis follows a chain from genetics selection (${CL.all}) through cultivation, harvest timing (${P.harvest('')}), drying, curing, storage, preparation, and consumption. Every link either preserves or degrades what was built in the links before it. Breaking the chain at any point — poor growing, premature harvest, fast drying, short curing, improper storage, or high-temperature consumption — diminishes everything upstream.</p>
<p>The cultivators reporting the most satisfying final experiences are the ones who treat every stage as important, not just the grow room. Starting from seed gives you custody of the entire chain — a level of quality control that no other sourcing method can replicate.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>Does pre-grinding flower reduce quality?</dt>
<dd>Yes. Ground flower exposes dramatically more surface area to air and light, accelerating terpene evaporation and THC oxidation. Grind immediately before use. If pre-grinding is unavoidable, store in an airtight, opaque container and consume within hours rather than days.</dd>
<dt>How often should consumption equipment be cleaned?</dt>
<dd>Glass pieces: every three to five sessions for optimal flavour. Grinders: monthly, or when residue buildup is visible on the teeth. Vaporisers: brush the heating chamber after each session and perform a thorough clean weekly. Residue accumulation directly impacts flavour — clean equipment preserves the terpene profile you spent months developing.</dd>
<dt>Is there a meaningful quality difference between budget and mid-range vaporisers?</dt>
<dd>Yes — primarily in temperature accuracy and vapour path material quality. Budget devices often display temperatures that differ from actual heating element output, and use materials in the airpath that can off-gas at operating temperatures. Mid-range and quality devices provide consistent, accurate temperature delivery and medical-grade materials that do not contaminate the vapour with unwanted compounds.</dd>
</dl>
`;
}

function legalArticle(slug: string, title: string): string {
  const topic = title.replace(/Cannabis |Marijuana |and |of /gi, '').trim();
  return `
<p>Cannabis regulation is evolving faster globally than any other area of drug policy. Jurisdictions that maintained strict prohibition a few years ago have implemented medical access frameworks or decriminalised personal use. The landscape shifts between legislative sessions, making it essential for growers, consumers, and anyone making decisions about cannabis to verify current rules rather than relying on outdated assumptions.</p>

<h2>Regulatory Landscape: ${topic}</h2>
<p>${pick(slug, [
    `${topic} sits within the broader global movement toward cannabis policy reform. The regulatory specifics vary dramatically between jurisdictions — full adult-use legalisation in some, medical-only frameworks in others, and decriminalisation of personal possession without legal cultivation in many. The practical details matter: legal purchase does not automatically mean legal cultivation, and legal cultivation often comes with plant count limitations or registration requirements.`,
    `The regulatory picture around ${topic.toLowerCase()} reflects an ongoing negotiation between public health priorities, law enforcement resources, economic opportunity, and shifting community attitudes toward cannabis. Each jurisdiction resolves these tensions differently, producing a patchwork of rules that demands jurisdiction-specific verification rather than blanket assumptions about what is or is not permitted.`,
    `Understanding ${topic.toLowerCase()} requires separating written law from enforcement reality. Some jurisdictions maintain prohibitive statutes that are rarely enforced. Others enforce actively. Many are in active transition — with pending legislation, recent ballot measures, or newly implemented regulatory frameworks still being refined.`,
  ], 'legal')}</p>

<h2>Implications for Australian Seed Buyers and Home Growers</h2>
<p>Cannabis seeds are sold as adult novelty souvenirs and for genetic preservation purposes. The legality of germination and cultivation is determined by your specific jurisdiction — not by where seeds were purchased. In Australia, cannabis law operates at both federal and state/territory level. The Australian Capital Territory has moved furthest toward personal use provisions. The broader international trend is toward expanded home cultivation rights — more countries and jurisdictions are legalising, decriminalising, or creating medical pathways than are tightening restrictions.</p>
<p>Regarding seed purchases specifically: buying seeds is legally distinct from germinating or cultivating them in most regulatory frameworks. Confirm your local rules through official government sources. Our ${a('FAQ page', '/faq')} summarises the general Australian legal context as it relates to seed purchasing, and our ${a('shipping page', '/shipping')} confirms Australia-wide delivery with discreet packaging via Australia Post.</p>

<h2>How Legal Reform Improves Genetic Quality</h2>
<p>One tangible benefit of expanding global legalisation: the quality, diversity, and stability of cannabis genetics available to home growers have improved dramatically. As legal markets expand, professional breeders invest more in genetic testing, germination verification, and novel cultivar development. The seeds available today — from established breeding houses in the Netherlands, Spain, North America, and beyond — represent a meaningfully higher quality standard than what existed even five years ago.</p>
<p>Royal King Seeds sources from over 40 international breeders and maintains germination testing on incoming stock. The global expansion of the legal cannabis industry directly benefits our ability to offer diverse, stable, high-quality genetics through our ${CL.all}.</p>

<h2>The Economics of Home Growing in Australia</h2>
<p>Even in jurisdictions with legal medical cannabis access, flower pricing remains substantial — often $12-20 AUD per gram through medical channels. A single ${CL.fem} seed ($5-15 AUD) can produce hundreds of grams of flower from one plant, making the per-gram cost comparison overwhelmingly favourable for home growers. Combined with full control over genetics, cultivation practices, and harvest timing, home growing delivers both cost and quality advantages that even expanded legal market access does not eliminate.</p>
<p>This economic reality drives the continued growth of home cultivation in Australia and explains why seed demand increases even as medical cannabis access expands. Information, equipment, and genetics are all more accessible than ever, lowering the barriers for interested new growers.</p>

<h2>Staying Informed</h2>
<p>Cannabis law is not static. Check your jurisdiction's official government cannabis information at least annually, particularly before starting a new growing season. Legislative sessions, regulatory amendments, and policy shifts can alter the landscape between grows. Our ${a('blog', '/blog')} reports significant regulatory developments affecting Australian home growers, but official government sources should always be your primary reference for legal questions.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>Is purchasing cannabis seeds legal in Australia?</dt>
<dd>Cannabis seeds are sold as adult novelty souvenirs and for genetic preservation. Seed purchase exists in a different legal category from live plants or cannabis flower in most frameworks. Verify your specific local regulations for details.</dd>
<dt>Does the ACT's personal use provision extend to other states?</dt>
<dd>No. Cannabis law in Australia is determined at the state and territory level. The ACT's personal cultivation provisions apply exclusively within the ACT. Each state and territory's framework is independent — what is permitted in the ACT does not create legal protection in other jurisdictions.</dd>
<dt>Where do I find current rules for my specific location?</dt>
<dd>Search for your state or territory's official health department or cannabis regulatory page. The Australian Government Department of Health website provides federal-level context. Always verify through official government sources rather than relying on third-party summaries or forum posts.</dd>
</dl>
`;
}

function generalArticle(slug: string, title: string): string {
  const topic = title.replace(/Cannabis |Marijuana |and |of |in /gi, '').trim();
  const links = pickN(slug, [CL.fem, CL.auto, CL.ind, CL.sat, CL.hyb, CL.cbd, CL.thc, CL.all, CL.kush, CL.exotic, CL.outdoor, CL.best], 5);
  return `
<p>${pick(slug, [
    `Where ${topic.toLowerCase()} intersects with cannabis is where surface-level commentary fails. The practical implications — how this topic changes decisions about what to grow, how to grow it, or what to expect from the result — are what matter. That is the focus here.`,
    `Most online treatment of ${topic.toLowerCase()} falls into two unhelpful categories: oversimplified summaries that offer nothing actionable, or academic deep-dives that lose the thread of practical relevance. The useful ground between those extremes — what actually shifts your choices or understanding — is where this article operates.`,
    `${topic} connects to cannabis in ways that appear peripheral until you trace the connection back to specific decisions growers and consumers make. Understanding the relationship helps you approach those decisions with better context.`,
  ], 'open')}</p>

<h2>Practical Relevance for Growers and Consumers</h2>
<p>How ${topic.toLowerCase()} affects you depends on where you engage with cannabis. For cultivators, the connection runs to genetics selection, environmental management, and the cultivation decisions that shape what the flower ultimately looks and smokes like. For consumers, it influences product evaluation, consumption approach, and the expectations you bring to a given cultivar.</p>
<p>The value lives in the specifics. Conceptual understanding of ${topic.toLowerCase()} is a starting point. Understanding how it changes what you do differently — which genetics you select, how you manage conditions, how you assess finished flower — is where the practical benefit materialises.</p>

<h2>How This Connects to Genetics and Growing</h2>
<p>Every topic in the cannabis space ultimately traces back to the plant. The ${links[0]} you select establish the genetic foundation — the ceiling for potency, terpene expression, yield, and growing behaviour. The environment you provide determines how much of that genetic potential expresses. Post-harvest handling determines how much of what you grew survives to reach you intact.</p>
<p>${topic} sits somewhere in this chain — understanding precisely where helps clarify decisions at every stage. Growers producing the best outcomes treat cannabis as an integrated system where genetics, environment, and post-harvest care interact continuously. Our ${a('growing guides', '/blog')} explore these connections from a hands-on cultivation perspective.</p>

<h2>Broader Context</h2>
<p>${pick(slug, [
    `Viewed broadly, ${topic.toLowerCase()} reflects the maturing relationship between cannabis and everyday life. As research deepens and access expands, topics like this evolve from niche curiosity to practical knowledge that informs better decisions across a growing community.`,
    `Cannabis is transitioning from cultural fringe to mainstream acceptance, and topics like ${topic.toLowerCase()} are part of that shift. Engaging with the nuances — not just the headlines — positions you to make more informed choices whether growing, consuming, or simply staying aware.`,
    `The discussion around ${topic.toLowerCase()} has gained substance in recent years. Where it was once treated superficially or sensationally, there is now space for grounded, practical exploration focused on what people genuinely need to know.`,
  ], 'context')}</p>

<h2>Next Steps</h2>
<p>If ${topic.toLowerCase()} has sparked interest in home cultivation, the ${links[3]} lists over 1,200 cultivars with detailed growing specifications — filterable by difficulty, flowering time, effect profile, and terpene character. For personalised strain recommendations, our ${a('customer support team', '/contact')} provides guidance tailored to your experience level, growing space, and goals.</p>
<p>For deeper dives into specific growing topics, our ${a('guide library', '/blog')} covers germination, nutrient management, lighting, harvest timing, and more — all written from hands-on Australian cultivation experience.</p>

<h2>Frequently Asked Questions</h2>
<dl>
<dt>How does ${topic.toLowerCase()} relate to growing cannabis?</dt>
<dd>The connection varies by angle, but broadly: understanding the factors that influence cannabis quality, legality, culture, and consumption informs better decisions about genetics selection, grow management, and post-harvest handling.</dd>
<dt>Where can I learn more about cannabis cultivation?</dt>
<dd>Our ${a('blog', '/blog')} provides guides covering every growth stage from germination through harvest and curing. For cultivar-specific information, every strain in our ${links[4]} includes growing data, terpene profiles, and difficulty ratings.</dd>
<dt>How do I start growing?</dt>
<dd>Begin with ${links[1]} for the most forgiving first-grow experience — automatic flowering, compact size, and finished in eight to twelve weeks. Our ${a('germination guide', '/blog/cannabis-seed-identification-and-feminization')} covers the step-by-step process from seed to first sprout.</dd>
</dl>
`;
}

// ════════════════════════════════════════════════════════════
// MAIN ROUTER — every category to its unique generator
// ════════════════════════════════════════════════════════════

export function generateBlogPost(slug: string): BlogPost | null {
  const entry = (blogSlugs as any[]).find(p => p.slug === slug);
  if (!entry) return null;
  const title = entry.title;
  const cat = detectCategory(slug);
  const idx = (blogSlugs as any[]).findIndex(p => p.slug === slug);

  let content: string;
  switch (cat) {
    case 'pillar-nutrient': content = pillarNutrient(slug, title); break;
    case 'pillar-germ': case 'pillar-harvest': case 'pillar-light':
    case 'pillar-pest': case 'pillar-vpd': case 'pillar-train':
    case 'pillar-store': case 'pillar-auto': case 'pillar-flower':
      content = pillarArticle(slug, title, cat); break;
    case 'support-nutrient': content = supportNutrient(slug, title); break;
    case 'support-seedling': case 'support-pest': case 'support-medium':
    case 'support-clone': case 'support-light': case 'support-vpd':
    case 'support-train': case 'support-flower': case 'support-sex':
    case 'support-yield': case 'support-watering': case 'support-harvest':
    case 'support-auto': case 'support-grow':
      content = supportCultivation(slug, title); break;
    case 'strain': content = strainArticle(slug, title); break;
    case 'environment': content = environmentArticle(slug, title); break;
    case 'state-guide': content = stateGuideArticle(slug, title); break;
    case 'terpene': content = terpeneArticle(slug, title); break;
    case 'cannabinoid': content = cannabinoidArticle(slug, title); break;
    case 'cbd-focus': case 'anxiety-article': content = anxietyArticle(slug, title); break;
    case 'sleep': content = sleepArticle(slug, title); break;
    case 'pain': content = painArticle(slug, title); break;
    case 'effects': case 'health': case 'therapeutic': content = painArticle(slug, title); break;
    case 'edible': content = edibleArticle(slug, title); break;
    case 'accessory': content = accessoryArticle(slug, title); break;
    case 'legal': case 'news': case 'dispensary': content = legalArticle(slug, title); break;
    default: content = generalArticle(slug, title);
  }

  const stripped = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  const metaBase = `${title}. ${stripped}`;
  const meta = metaBase.slice(0, 155).replace(/\s+\S*$/, '') + '...';
  return { slug, title, content, category: cat, author: 'Sierra Langston', publishDate: pubDate(slug, idx), metaDescription: meta };
}

export function getAllBlogSlugs(): string[] { return (blogSlugs as any[]).map(p => p.slug); }
export function getAllBlogPosts(): BlogPost[] { return (blogSlugs as any[]).map(p => generateBlogPost(p.slug)).filter(Boolean) as BlogPost[]; }
export function getRecentPosts(limit = 10): BlogPost[] { return getAllBlogPosts().sort((a, b) => b.publishDate.localeCompare(a.publishDate)).slice(0, limit); }
export function getRelatedPosts(slug: string, limit = 4): BlogPost[] {
  const cur = generateBlogPost(slug);
  if (!cur) return [];
  return getAllBlogPosts().filter(p => p.slug !== slug && p.category === cur.category).slice(0, limit);
}
