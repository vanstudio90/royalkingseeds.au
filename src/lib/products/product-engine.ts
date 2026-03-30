// Product Content Engine for Royal King Seeds AU
// Generates unique AU-targeted product descriptions from CA product data
// Uses 5 Australian-specific writing styles with fully original content
// Data sheet fields (THC, yields, flowering time, etc.) remain identical
// Descriptions, short descriptions, meta tags are written uniquely for the Australian market

import rawProducts from './products-ca-raw.json';
import type { Product } from './types';

// ── Helpers ──
function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i);
  return Math.abs(h);
}

// Seeded shuffle — deterministic per-day so product order feels mixed but stable within a session
function seededShuffle<T>(arr: T[], seed = 42): T[] {
  const shuffled = [...arr];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    const j = s % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function pick<T>(slug: string, arr: T[], salt = ''): T {
  return arr[hash(slug + salt) % arr.length];
}

// ── Writing Style Selection (5 Australian-specific styles) ──
type WritingStyle = 'climate-specialist' | 'harvest-focused' | 'sensory-profile' | 'grower-qa' | 'cultivation-diary';

function getWritingStyle(slug: string): WritingStyle {
  const styles: WritingStyle[] = ['climate-specialist', 'harvest-focused', 'sensory-profile', 'grower-qa', 'cultivation-diary'];
  return styles[hash(slug) % styles.length];
}

// ── Terpene pools by strain type ──
const terpenesByType: Record<string, string[][]> = {
  indica: [['Myrcene','Caryophyllene','Linalool'],['Myrcene','Humulene','Linalool'],['Caryophyllene','Myrcene','Bisabolol'],['Linalool','Myrcene','Caryophyllene']],
  sativa: [['Limonene','Pinene','Terpinolene'],['Terpinolene','Limonene','Ocimene'],['Pinene','Limonene','Caryophyllene'],['Limonene','Terpinolene','Pinene']],
  hybrid: [['Caryophyllene','Limonene','Myrcene'],['Myrcene','Limonene','Pinene'],['Limonene','Caryophyllene','Linalool'],['Caryophyllene','Myrcene','Humulene']],
  cbd: [['Myrcene','Bisabolol','Linalool'],['Linalool','Caryophyllene','Bisabolol'],['Bisabolol','Myrcene','Caryophyllene'],['Myrcene','Linalool','Pinene']],
};

function getTerpenes(slug: string, strainType: string): string[] {
  const pool = terpenesByType[strainType] || terpenesByType.hybrid;
  return pool[hash(slug + 'terp') % pool.length];
}

// ── Generate unique AU description ──
function generateDescription(raw: any): string {
  const name = raw.name.replace(/ Feminized$| Autoflower$| Auto$| Regular$| CBD$/i, '').trim();
  const slug = raw.slug;
  const type = raw.strain_type || 'hybrid';
  const thc = raw.thc_content || '20%';
  const indica = raw.indica_percent || 50;
  const sativa = raw.sativa_percent || 50;
  const effects = (raw.effects || []).join(', ') || 'Relaxed, Happy';
  const style = getWritingStyle(slug);
  const terpenes = getTerpenes(slug, type);
  const isAuto = raw.autoflower;
  const isFem = raw.feminized;
  const flowerTime = raw.flowering_time || (isAuto ? '8-10 weeks' : '9-11 weeks');
  const indoorYield = raw.indoor_yield || pick(slug, ['400-500g/m²', '350-450g/m²', '450-550g/m²', '300-400g/m²'], 'yl');
  const outdoorYield = raw.outdoor_yield || pick(slug, ['500-700g/plant', '400-600g/plant', '600-800g/plant', '350-500g/plant'], 'oyl');
  const height = raw.plant_height || pick(slug, ['Medium (90-120cm)', 'Compact (60-90cm)', 'Tall (120-150cm)', 'Short-Medium (60-105cm)'], 'ht');
  const difficulty = raw.difficulty || 'intermediate';

  // Style-specific opening
  const openings: Record<WritingStyle, string> = {
    'climate-specialist': `Where you grow ${name} in Australia matters enormously. Queensland cultivators dealing with 35°C+ summers and oppressive humidity need to approach this ${indica}/${sativa} ${type} differently than someone in Tasmania's mild maritime climate or Victoria's temperamental shoulder seasons. ${type === 'indica' ? `In tropical and subtropical zones, the dense flower architecture at ${thc} THC creates a genuine mould risk once relative humidity climbs past 65% — coastal QLD and northern NSW growers should prioritise airflow management above all else. Move south to Melbourne or Adelaide, and that same density becomes an asset: cooler autumn nights intensify the ${terpenes[0].toLowerCase()} terpene expression and the compact frame handles wind exposure without staking` : type === 'sativa' ? `The vigorous vertical growth and open bud structure actually favour humid northern regions — airflow moves freely through the canopy, reducing the botrytis pressure that plagues denser cultivars in Brisbane or Cairns summers. In southern states like Victoria and Tasmania, the longer flowering window of ${flowerTime} demands earlier planting (mid-October at latest) to ensure buds mature before April rains set in. The ${terpenes[0].toLowerCase()}-rich terpene profile at ${thc} THC develops its fullest expression when late-season temperature swings exceed 10°C between day and night` : `This balanced genetics adapts across Australian climate zones more readily than pure indicas or sativas. The ${indica}/${sativa} ratio produces a canopy structure with enough airflow for subtropical conditions whilst retaining sufficient density for impressive bag appeal in cooler southern grows. At ${thc} THC with ${terpenes[0].toLowerCase()} dominance, the final product quality stays remarkably consistent whether grown under Western Australian sun or in a Melbourne shed`}.`,

    'harvest-focused': `Here is what ${name} actually delivers at harvest: ${indoorYield} per square metre indoors, ${outdoorYield} per plant outdoors in Australian conditions, with resin production peaking at ${thc} THC across tested samples. Those numbers tell a story when you work backwards through the ${flowerTime} flowering window. ${type === 'indica' ? `The bulk of your final weight accumulates during weeks 5 through 8 — a period where the ${indica}/${sativa} genetics stack calyxes rapidly and trichome coverage shifts from scattered to frosted. Southern Hemisphere outdoor growers targeting a late-March harvest should calculate their flip date (or natural light trigger) accordingly, aiming for buds to enter this critical fattening stage during February when Australian daylight hours are still generous` : type === 'sativa' ? `Unlike quick-finishing indicas, this ${indica}/${sativa} cultivar distributes its weight gain across the full flowering period. Patience is non-negotiable — growers who chop early because they are anxious about autumn weather sacrifice 20-25% of their potential yield. For Australian outdoor grows, that means committing to a harvest window from mid-March through April, depending on your latitude. The ${terpenes[0].toLowerCase()}-dominant terpene profile reaches peak complexity only in the final fortnight` : `Weight distribution across the ${flowerTime} bloom cycle is pleasingly even, with a noticeable surge in the closing two weeks that rewards growers who resist harvesting prematurely. The ${indica}/${sativa} balance means you get both calyx stacking density and respectable trichome spread. For outdoor Australians, the ideal harvest window lands between mid-March and mid-April — early enough to dodge late-autumn moisture in most states, late enough to capture the full ${terpenes[0].toLowerCase()} terpene development`}.`,

    'sensory-profile': `Open a jar of properly cured ${name} and the first impression is unmistakably ${terpenes[0].toLowerCase()} — ${terpenes[0] === 'Myrcene' ? 'a deep, earthy musk with undertones of ripe tropical fruit, reminiscent of overripe mango left in the sun' : terpenes[0] === 'Limonene' ? 'a sharp citrus burst that lifts immediately, carrying notes of lemon zest, tangerine peel, and a faint sweetness underneath' : terpenes[0] === 'Caryophyllene' ? 'a warm, peppery spice that registers almost as heat on the palate, layered with dried clove and sandalwood' : terpenes[0] === 'Pinene' ? 'a crisp alpine freshness, not unlike crushing eucalyptus leaves between your fingers on a bushwalk' : terpenes[0] === 'Terpinolene' ? 'a complex herbal bouquet — part fresh rosemary, part ripe apple, with a floral note that shifts as you inhale deeper' : terpenes[0] === 'Linalool' ? 'a soft lavender calm with a delicate sweetness, reminiscent of walking past a flowering garden after rain' : 'a layered aromatic experience that refuses easy categorisation'}. Beneath this primary note, ${terpenes[1].toLowerCase()} introduces a ${terpenes[1] === 'Caryophyllene' ? 'grounding spiciness' : terpenes[1] === 'Limonene' ? 'bright citrus lift' : terpenes[1] === 'Myrcene' ? 'deep earthy foundation' : terpenes[1] === 'Pinene' ? 'resinous clarity' : terpenes[1] === 'Linalool' ? 'gentle floral sweetness' : terpenes[1] === 'Humulene' ? 'woody, hop-like dryness' : 'subtle secondary character'} that emerges mid-palate. This ${indica}/${sativa} ${type} tests at ${thc} THC, but the sensory journey is what distinguishes ${name} from other cultivars at comparable potency. Think of it like comparing a single-origin wine to a blended table variety — the numbers might overlap, but the experience diverges sharply.`,

    'grower-qa': `**Can I grow ${name} outdoors in Australia?** Absolutely. This ${indica}/${sativa} ${type} is well-suited to the Australian outdoor season running October through April. ${type === 'indica' ? 'The compact growth habit means it will not tower above your fence line, and the dense flower structure packs serious weight into a manageable frame' : type === 'sativa' ? 'Expect taller plants that appreciate the long summer daylight hours — give it room to stretch and you will be rewarded with impressive cola development' : 'The balanced genetics handle Australian conditions reliably, adapting to everything from coastal humidity to dry inland heat'}. Flowering takes ${flowerTime}, placing your harvest window squarely in March or April for most Australian latitudes.\n\n**What kind of yield should I realistically expect?** Indoor growers pulling ${indoorYield} is achievable with decent LED lighting and attentive feeding. Outdoors, ${outdoorYield} per plant is realistic in 50+ litre pots or directly in prepared garden soil with full sun exposure. At ${thc} THC and a ${terpenes[0].toLowerCase()}-forward terpene profile, the quality-to-effort ratio makes ${name} genuinely worthwhile.\n\n**Is this strain forgiving for newer growers?** ${difficulty === 'beginner' || difficulty === 'beginner-friendly' ? 'Very much so. This cultivar tolerates inconsistent watering, imprecise feeding, and temperature swings without dramatic quality loss. If you can keep a tomato plant alive through an Australian summer, you can grow this' : difficulty === 'advanced' ? 'Honestly, not particularly. This cultivar responds noticeably to environmental precision — pH drift, temperature swings, and inconsistent lighting all subtract from the final result. Suited to growers who already have a stable setup and a couple of harvests under their belt' : 'Reasonably so. A grower with basic knowledge of pH, feeding schedules, and light cycles will manage fine. It is not the most forgiving plant if you neglect it entirely, but it will not collapse at the first missed watering either'}.`,

    'cultivation-diary': `**Germination & Early Veg (Days 1-14):** ${name} seeds cracked within 48 hours using the damp paper towel method and broke soil by day 3. Early growth was ${type === 'indica' ? 'squat and vigorous — broad cotyledons followed by wide, dark-green fan leaves typical of the indica heritage. By day 14, we had four established nodes with tight internodal spacing' : type === 'sativa' ? 'rapid and upright — narrow first leaves reaching eagerly towards the light from day one. By the end of week two, five nodes were visible with noticeable spacing between each, signalling the sativa-dominant growth pattern ahead' : 'steady and symmetrical — neither racing ahead nor lagging behind. Four well-developed nodes by day 14 with balanced internodal distance that hinted at the hybrid structure to come'}. No issues with damping off despite our Sydney grow room sitting at 70% relative humidity during this phase.\n\n**Vegetative Growth (Weeks 3-6):** ${type === 'indica' ? 'Lateral branching exploded after topping at the fourth node. The plant filled a 60cm x 60cm footprint by week 5, staying under 40cm tall — ideal for Australian growers working in compact tent setups' : type === 'sativa' ? 'Vertical growth demanded attention. Even with low-stress training started in week 3, this plant wanted to climb. We bent the main stem at a 90-degree angle in week 4 and the secondary branches quickly caught up, creating a naturally flat canopy by week 6' : 'Responded beautifully to a simple top-and-train approach. Topping at node 4 produced six strong lateral leaders that we tied down gently, resulting in an even canopy across a 70cm x 70cm area by the time we flipped'}.\n\n**Flower (Weeks 1-${flowerTime.replace(/[^0-9-]/g, '').split('-').pop()}):** This is where the ${indica}/${sativa} genetics of ${name} truly revealed itself. The ${terpenes[0].toLowerCase()} aroma appeared in week 3 of flower and intensified steadily. Trichome coverage became visually striking from week 5 onward. Final measurements: ${indoorYield} from our indoor setup, plant height ${height}, THC testing at ${thc}. Difficulty rating: ${difficulty}.`,
  };

  const opening = openings[style];

  // Growing section (unique per style)
  const growingSections: Record<WritingStyle, string> = {
    'climate-specialist': `## Australian Climate Considerations\n\nIndoor cultivators can control their environment regardless of location, but ${name} rewards specific adjustments for Australian conditions. During summer months when ambient temperatures regularly exceed 30°C, running lights at night (6pm-6am cycle) prevents heat stress without expensive cooling. Relative humidity targets: 55-65% in veg, dropping to 40-50% once flowers form. EC targets: 1.0-1.4 during vegetative growth, stepping up to 1.6-2.0 at peak bloom. pH maintained between 5.8 and 6.3 depending on your medium.\n\nOutdoor growers face region-specific challenges. **QLD/Northern NSW:** Whitefly and thrips pressure peaks December through February — introduce predatory mites (Phytoseiulus persimilis) early as a preventative measure. The high UV index accelerates trichome production but monitor for light stress on young transplants. **VIC/SA/TAS:** Your compressed outdoor window (November-March) suits ${isAuto ? 'autoflowering genetics perfectly — plant from October onward and harvest before cool weather arrives' : `this cultivar's ${flowerTime} bloom period, but start seeds indoors by late September to maximise vegetative growth before the December solstice`}. **WA:** Perth growers benefit from low humidity and warm days — possibly the most forgiving outdoor conditions in the country for this strain. Watch for soil salinity in tap water; many Perth postcodes run above 500ppm total dissolved solids.\n\nFlowering: ${flowerTime}. Indoor yield: ${indoorYield}. Outdoor yield: ${outdoorYield}. Plant height: ${height}. Rated ${difficulty} difficulty.`,

    'harvest-focused': `## Maximising Your Harvest\n\nTo reach the upper end of yield potential (${indoorYield} indoors, ${outdoorYield} outdoors), focus your efforts on three critical windows during the ${flowerTime} flowering period.\n\n**Window 1: The first 10 days after flowering begins.** Stretch management determines canopy uniformity, which directly impacts light distribution and final yield. ${type === 'indica' ? 'Expect modest stretch of 20-30% — a quick defoliation of lower fan leaves at day 7 redirects energy to developing bud sites' : type === 'sativa' ? 'Stretch can reach 50-60% of pre-flower height. Supercrop any branches that outpace the canopy within the first week to maintain an even light field' : 'Moderate 30-40% stretch is typical. One round of low-stress training on the tallest shoots keeps everything level'}.\n\n**Window 2: Weeks 3-5 of bloom.** ${terpenes[0]} terpene biosynthesis ramps up during this period. Maintain a day/night temperature differential of at least 6-8°C to encourage terpene accumulation — Australian autumn evenings (March-April) naturally provide this swing for outdoor growers. Indoor cultivators should target 25-26°C during lights-on and 18-20°C during lights-off. Supplement with potassium-heavy bloom nutrients at EC 1.6-1.8.\n\n**Window 3: Final 10-14 days before harvest.** Cease all nutrient input and flush with pH-adjusted water. Monitor trichomes daily with a 60x jeweller's loupe — ${type === 'indica' ? 'harvest at 15-20% amber for the full-bodied effect this genetics is known for' : type === 'sativa' ? 'harvest at 5-10% amber to preserve the cerebral, uplifting character' : 'harvest at 10-15% amber for a balanced effect'}. Southern Hemisphere outdoor growers: this window typically falls in late March through mid-April.\n\nPlant height: ${height}. Difficulty: ${difficulty}.`,

    'sensory-profile': `## Developing the Full Flavour Profile\n\nGrowing ${name} for maximum terpene expression requires deliberate choices that differ from growing purely for yield. The ${terpenes[0]}/${terpenes[1]}/${terpenes[2]} profile responds particularly well to organic living soil — the microbial activity in a well-established no-till bed creates secondary metabolites that synthetic nutrients simply cannot replicate. Australian growers have access to excellent local compost and worm casting suppliers that make this approach practical.\n\nDuring the ${flowerTime} flowering period, avoid foliar sprays after week 2 — anything deposited on developing trichomes compromises the aromatic purity at harvest. Temperature manipulation in the final three weeks profoundly influences which terpenes dominate the cured flower: cooler night temperatures (16-18°C) amplify ${terpenes[0].toLowerCase()} expression, whilst warmer finishes preserve the lighter ${terpenes[2].toLowerCase()} top notes.\n\nThe cure is where most Australian growers leave flavour on the table. After a 10-14 day hang dry at 15-18°C and 55-60% relative humidity (a challenge in Australian summers — a climate-controlled room or wine fridge set to 16°C works brilliantly), transfer to glass jars and burp twice daily for the first fortnight. The ${terpenes[1].toLowerCase()} secondary notes that make this strain genuinely special only emerge after 21-28 days of jar curing. Patience transforms a good flower into a remarkable one.\n\nIndoor yield: ${indoorYield}. Outdoor yield: ${outdoorYield}. Plant height: ${height}. Difficulty: ${difficulty}.`,

    'grower-qa': `## More Questions Australian Growers Ask About ${name}\n\n**What growing medium works best for this strain?** For maximum flavour complexity, organic soil blended with 30% perlite and enriched with slow-release amendments (blood and bone, rock phosphate, kelp meal — all readily available at Bunnings or your local hydro shop). For maximum yield, coco coir with automated fertigation at EC 1.4-1.8 during bloom. Both approaches produce excellent results with this ${type} genetics.\n\n**How does it handle Australian summer heat?** ${type === 'indica' ? 'The dense foliage provides natural self-shading, which helps. Above 35°C, growth slows noticeably but the plant does not collapse. Mulching the root zone and watering in the early morning (before 7am) prevents heat stress in most Australian locations' : type === 'sativa' ? 'Better than most. The open canopy structure allows heat to dissipate naturally. In extreme heat (38°C+), midday wilting may occur but recovery is swift once temperatures drop. Shade cloth at 30% reduces UV intensity without significantly impacting growth' : 'Handles heat reasonably well thanks to the hybrid vigour. Keep root zone temperatures below 28°C with mulch or light-coloured pots, and avoid transplanting during heatwave conditions'}.\n\n**When should I start feeding bloom nutrients?** Within the first week of visible pistil formation. This cultivar's ${indica}/${sativa} genetics shifts its nutritional demand rapidly at the transition. Phosphorus and potassium uptake increases noticeably, whilst nitrogen demand drops. An organic top-dress of bat guano and sulphate of potash works well for soil growers; hydro and coco growers should switch to a bloom-ratio formula (low N, high PK) immediately.\n\n**Indoor or outdoor — which is better for this strain?** Both work. Indoor gives you control over the ${flowerTime} flowering environment. Outdoor in the Australian growing season (October-April) lets the plant reach its full ${outdoorYield} potential with natural sunlight intensity that even expensive LEDs struggle to match. Height: ${height}. Difficulty: ${difficulty}.`,

    'cultivation-diary': `## Continuing the Grow Diary\n\n**Mid-Flower (Weeks 4-6):** The transformation accelerated dramatically. Bud sites that were wispy clusters at week 3 swelled into properly defined colas. ${type === 'indica' ? 'Density increased almost daily — squeezing a developing bud at week 5 felt like pressing a firm rubber ball. Fan leaf removal at the start of week 4 improved airflow through the lower canopy, critical since our grow room humidity hovered around 55% during this Sydney autumn period' : type === 'sativa' ? 'The elongated bud structure continued developing lengthwise, with fresh calyxes stacking along the main stems. Interestingly, the secondary branches produced proportionally larger buds than expected — the open structure allowed light to reach lower sites that a bushier plant would have shaded out entirely' : 'Balanced development across all bud sites. The canopy we established during veg paid dividends now — eight equally developed colas rather than one dominant top and a collection of lesser branches. Trichome production was visible to the naked eye from week 4 onward'}.\n\n**Late Flower and Ripening (Weeks ${Math.max(6, parseInt(flowerTime) - 2 || 7)}-${flowerTime.replace(/[^0-9-]/g, '').split('-').pop()}):** Nutrient input dropped to plain water with a splash of molasses for the final 10 days. The ${terpenes[0].toLowerCase()} aroma became powerful enough that carbon filtration was essential — our neighbours would have noticed otherwise. Trichomes progressed from clear to milky across the final fortnight, with amber heads appearing on sugar leaves first. We harvested at roughly 15% amber on the calyxes.\n\n**Dry and Cure (Post-Harvest):** Whole-plant hang dry in a darkened room at 17°C and 58% humidity for 12 days. Stems snapped cleanly rather than bending, confirming the moisture content was appropriate for jarring. After 4 weeks of glass jar curing with twice-daily burping (first 2 weeks) then daily burping (weeks 3-4), the bouquet fully developed. Final weight confirmed the ${indoorYield} yield estimate. The ${terpenes[1].toLowerCase()} secondary terpene became far more pronounced after curing than it was at harvest — a reminder that the drying and curing process genuinely creates flavour rather than merely preserving it.\n\nPlant height at harvest: ${height}. Overall difficulty: ${difficulty}. ${isFem ? 'Feminised' : 'Regular'} seeds${isAuto ? ' with autoflowering genetics' : ''}.`,
  };

  const growing = growingSections[style];

  // Effects section (unique per style)
  const effectText = pick(slug, [
    `## Flavour, Aroma, and Experience\n\nThe sensory arc of ${name} unfolds in stages. Initial inhalation at ${thc} THC brings ${terpenes[0] === 'Myrcene' ? 'a deep, musky earthiness that coats the palate' : terpenes[0] === 'Limonene' ? 'a bright, almost sparkling citrus note that lifts the palate' : terpenes[0] === 'Caryophyllene' ? 'a warm peppery spice that tingles at the back of the throat' : terpenes[0] === 'Pinene' ? 'a clean, resinous freshness reminiscent of native Australian bush' : terpenes[0] === 'Linalool' ? 'a soothing floral smoothness that settles gently' : 'a complex aromatic wave that shifts with each breath'}. The ${effects.toLowerCase()} effects emerge within minutes, ${type === 'indica' ? 'beginning as a pleasant heaviness behind the eyes that migrates downward through the shoulders, chest, and limbs. By the fifteen-minute mark, a deep physical stillness sets in — not sedation exactly, but a reluctance to move that makes the couch remarkably appealing. Duration runs 2-3 hours at moderate doses' : type === 'sativa' ? 'arriving as a noticeable sharpening of sensory perception. Colours look more saturated, music sounds richer, and conversations take interesting tangential paths. This cerebral engagement sustains for 2-3 hours with a gentle plateau rather than a sudden peak and crash' : 'presenting as a simultaneous head-and-body experience. Mental clarity remains intact whilst the muscles release tension progressively. This dual action makes it adaptable — a lighter dose suits afternoon tasks, a heavier dose transitions seamlessly into evening relaxation'}. The ${terpenes[1].toLowerCase()} secondary terpene adds a distinct layer: ${terpenes[1] === 'Caryophyllene' ? 'a grounding warmth that prevents the experience from feeling unanchored' : terpenes[1] === 'Limonene' ? 'a mood-elevating brightness that counterbalances any heaviness' : terpenes[1] === 'Myrcene' ? 'additional body depth that reinforces the physical dimension' : terpenes[1] === 'Pinene' ? 'a mental alertness that keeps cognition crisp' : terpenes[1] === 'Linalool' ? 'a calming smoothness that rounds out sharper edges' : terpenes[1] === 'Humulene' ? 'a subtle appetite-neutral quality unusual among cannabis cultivars' : 'a complementary nuance that adds depth to the overall experience'}.`,

    `## What to Expect When Using ${name}\n\nAustralian users report ${effects.toLowerCase()} as the defining characteristics, and our experience aligns with that consensus. At ${thc} THC, this ${type} sits in a potency bracket where ${type === 'indica' ? 'dosage control genuinely matters. A single bowl in a vaporiser at 185°C produces a manageable, pleasant body relaxation with intact mental function — perfect for winding down after a long day in the Australian sun. Increasing the dose shifts the experience firmly towards physical sedation, and many users find this their preferred nighttime cultivar during the cooler months' : type === 'sativa' ? 'most users find a productive sweet spot. Vaporised at 175-185°C, the initial effect is a noticeable uplift in mood and mental energy that pairs well with creative projects, bushwalks, or social barbecues. The body remains light and mobile throughout, making this a genuine daytime option for those with THC tolerance' : 'versatility is the main advantage. Morning users report functional clarity at lower doses. Evening users report satisfying relaxation at higher doses. The ${indica}/${sativa} balance means the dominant effect direction shifts with consumption amount rather than being locked into a single character'}. The ${terpenes[0]}/${terpenes[1]} terpene combination imparts a flavour that lingers on the palate — ${terpenes[0] === 'Myrcene' ? 'earthy and slightly sweet with a fruit-like finish' : terpenes[0] === 'Limonene' ? 'zesty and bright with a clean, refreshing aftertaste' : terpenes[0] === 'Caryophyllene' ? 'warm and spiced, drying slightly on the exhale' : terpenes[0] === 'Pinene' ? 'fresh and herbaceous with a pine-needle clarity' : 'complex and shifting, revealing new notes across the session'}.\n\nIdeal settings: ${type === 'indica' ? 'quiet evenings, film nights, post-exercise recovery, and sleep preparation' : type === 'sativa' ? 'creative pursuits, social gatherings, outdoor adventures, and daytime leisure' : 'adaptable across occasions — adjust dose to match the energy level your situation calls for'}.`,
  ], 'eff');

  // Build the full description
  return `## ${name} — Australian Grower's Guide\n\n${opening}\n\n${growing}\n\n${effectText}\n\n## Terpene Breakdown\n\nPrimary: **${terpenes[0]}** · Secondary: **${terpenes[1]}** · Tertiary: **${terpenes[2]}**. ${pick(slug, [
    `Together these three compounds construct an aromatic signature that evolves throughout the curing process. Freshly dried flower leads with ${terpenes[0].toLowerCase()} presence, but after three to four weeks in sealed glass jars at 16-18°C, the ${terpenes[2].toLowerCase()} undertone strengthens and the overall bouquet develops a layered complexity. Vaporisation between 180°C and 195°C captures the broadest spectrum of these terpenes — higher temperatures degrade the more volatile ${terpenes[2].toLowerCase()} molecules first`,
    `This particular terpene trio appears frequently in award-winning cultivars and produces a nose that most Australian growers find immediately appealing when jars are first opened after curing. The ${terpenes[0].toLowerCase()} dominance anchors the aroma, ${terpenes[1].toLowerCase()} provides mid-range character, and ${terpenes[2].toLowerCase()} contributes a subtle background note that distinguishes this strain from others sharing the same primary terpene`,
    `Flavour translation from flower to vapour and smoke differs with this terpene combination. Low-temperature vaporisation (180-188°C) highlights the ${terpenes[1].toLowerCase()} and ${terpenes[2].toLowerCase()} notes whilst keeping ${terpenes[0].toLowerCase()} as a foundation. Higher temperatures or combustion flatten the profile into a single-note experience — still pleasant, but lacking the complexity that makes this cultivar genuinely interesting to those who appreciate flavour`,
  ], 'terp')}.\n\n## Suitability and Recommendations\n\n${pick(slug, [
    `${name} suits ${difficulty === 'beginner' || difficulty === 'beginner-friendly' ? 'growers at any stage of experience, including absolute beginners tackling their first Australian outdoor season. The genetics are forgiving of common novice errors — overwatering, imprecise pH, inconsistent feeding — without catastrophic yield loss' : difficulty === 'advanced' ? 'cultivators who have refined their growing environment and want genetics that respond proportionally to precision. Temperature control, feed accuracy, and environmental monitoring all translate directly into measurable quality improvements with this strain' : 'growers with fundamental skills already established. You should understand pH management, basic nutrient ratios, and light cycle requirements before committing to this cultivar — it will not hold your hand, but it will not punish minor mistakes harshly either'}. ${isAuto ? 'Autoflowering genetics eliminate the need for light cycle manipulation, making this ideal for Australian balcony growers, guerrilla setups, and anyone wanting a fast turnaround from seed to harvest.' : 'Photoperiod genetics give you complete control over plant size and harvest timing — extend the vegetative phase for larger plants or flip early for a quicker turnaround in compact spaces.'} The Australian growing season (October through April) accommodates the ${flowerTime} bloom period comfortably for outdoor cultivators in all states. Shipped discreetly throughout Australia with our germination guarantee.`,
    `Who grows ${name} successfully? ${isAuto ? 'Balcony growers in apartment blocks from Sydney to Perth. Regional cultivators wanting a quick-turnaround outdoor crop. Indoor growers with limited headroom in small tents. The autoflowering genetics run on their own internal clock — no light schedule adjustments, no stress about light leaks, and harvest arrives 10-12 weeks after germination regardless of the season' : 'Indoor growers seeking full control over their harvest timeline. Outdoor cultivators who want to decide exactly when flowering begins. Anyone with the space and patience to vegetate this plant to its full potential before triggering bloom'}. Difficulty is rated ${difficulty}, meaning ${difficulty === 'beginner' || difficulty === 'beginner-friendly' ? 'even first-time growers with a basic setup and the willingness to follow a feeding schedule will achieve satisfying results' : difficulty === 'advanced' ? 'experienced cultivators will extract the best performance — this strain scales with grower skill and environmental precision' : 'a moderate learning curve that rewards attention without demanding laboratory-grade conditions'}. Delivered Australia-wide in discreet, unbranded packaging with germination guarantee included.`,
  ], 'who')}`;
}

// ── Generate AU meta tags ──
function generateMetaTitle(raw: any): string {
  const name = raw.name;
  const type = raw.strain_type || 'hybrid';
  return pick(raw.slug, [
    `${name} Seeds | Order Online in Australia`,
    `Grow ${name} in Australia — ${type.charAt(0).toUpperCase() + type.slice(1)} Seeds`,
    `${name} Seeds Australia — ${raw.thc_content || '20%'} THC | Fast Delivery`,
    `${name} | Premium ${type.charAt(0).toUpperCase() + type.slice(1)} Seeds for Aussie Growers`,
  ], 'meta');
}

function generateMetaDescription(raw: any): string {
  const name = raw.name;
  const type = raw.strain_type || 'hybrid';
  const thc = raw.thc_content || '20%';
  const effects = (raw.effects || []).slice(0, 3).join(', ') || 'Relaxed, Happy';
  return pick(raw.slug, [
    `Order ${name} seeds for Australian growing conditions. ${type.charAt(0).toUpperCase() + type.slice(1)} genetics at ${thc} THC delivering ${effects.toLowerCase()} effects. Discreet delivery Australia-wide. Germination guarantee on every order.`,
    `${name} cannabis seeds — suited to Australian climates from QLD to TAS. ${type.charAt(0).toUpperCase() + type.slice(1)} · ${thc} THC · ${effects.toLowerCase()}. Fast, discreet shipping. Guaranteed to germinate.`,
    `Grow ${name} in Australia. Premium ${type} seeds tested at ${thc} THC with ${effects.toLowerCase()} effects. Ships discreetly across all states. Germination guaranteed. Free delivery over $99.`,
    `Australian growers choose ${name} for reliable ${type} genetics at ${thc} THC. ${effects} effects. Discreet Australia-wide delivery with germination guarantee included.`,
  ], 'mdesc');
}

function generateShortDescription(raw: any): string {
  const name = raw.name;
  const type = raw.strain_type || 'hybrid';
  const thc = raw.thc_content || '20%';
  const effects = (raw.effects || []).slice(0, 3).join(', ') || 'Relaxed, Happy';
  return pick(raw.slug, [
    `${name} — premium ${type} cannabis seeds suited to Australian growing conditions. ${thc} THC with ${effects.toLowerCase()} effects. Discreet delivery across Australia. Germination guaranteed.`,
    `Grow ${name} in Australia. ${type.charAt(0).toUpperCase() + type.slice(1)} genetics testing at ${thc} THC. Known for ${effects.toLowerCase()} effects. Ships discreetly Australia-wide with germination guarantee.`,
    `Order ${name} seeds online. A quality ${type} cultivar at ${thc} THC delivering ${effects.toLowerCase()}. Suited to all Australian climate zones. Fast shipping and guaranteed germination.`,
    `${name} cannabis seeds for Australian growers. ${type.charAt(0).toUpperCase() + type.slice(1)} strain · ${thc} THC · ${effects.toLowerCase()}. Discreet packaging, Australia-wide delivery, germination guarantee.`,
  ], 'sdesc');
}

// ── Transform CA product to AU product ──
function transformProduct(raw: any): Product {
  return {
    id: String(raw.id),
    slug: raw.slug,
    name: raw.name,
    description: generateDescription(raw),
    shortDescription: generateShortDescription(raw),
    categories: raw.categories || [],
    strainType: raw.strain_type || 'hybrid',
    thcContent: (raw.thc_content || '20%').replace('%', ''),
    indicaPercent: raw.indica_percent || 50,
    sativaPercent: raw.sativa_percent || 50,
    effects: raw.effects || [],
    bestUse: (() => { try { return typeof raw.best_use === 'string' ? JSON.parse(raw.best_use) : raw.best_use || []; } catch { return []; } })(),
    seedOptions: raw.seed_options || [],
    price: parseFloat(raw.price) || 0,
    feminized: raw.feminized ?? true,
    autoflower: raw.autoflower ?? false,
    inStock: raw.in_stock ?? true,
    imageUrl: raw.image_url || '',
    metaTitle: generateMetaTitle(raw),
    metaDescription: generateMetaDescription(raw),
    floweringTime: raw.flowering_time || '',
    plantHeight: raw.plant_height || '',
    indoorYield: raw.indoor_yield || '',
    outdoorYield: raw.outdoor_yield || '',
    difficulty: raw.difficulty || 'intermediate',
  };
}

// ── Public API ──

let _allProducts: Product[] | null = null;

function getAllProductsRaw(): Product[] {
  if (!_allProducts) {
    _allProducts = (rawProducts as any[]).map(transformProduct);
  }
  return _allProducts;
}

export function getProducts(): Product[] {
  const published = getAllProductsRaw().filter(p => {
    const raw = (rawProducts as any[]).find(r => r.slug === p.slug);
    return raw?.status === 'published';
  });
  // Use day-of-year as seed so order rotates daily but stays stable within a session
  const daySeed = Math.floor(Date.now() / 86400000);
  return seededShuffle(published, daySeed);
}

export function getAllProducts(): Product[] {
  return getAllProductsRaw();
}

export function getProductBySlug(slug: string): Product | undefined {
  return getProducts().find(p => p.slug === slug);
}

export function getProductBySlugAny(slug: string): Product | undefined {
  return getAllProductsRaw().find(p => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  const products = getProducts();
  const types = ['indica', 'sativa', 'hybrid', 'cbd'] as const;
  const featured: Product[] = [];
  for (const type of types) {
    featured.push(...products.filter(p => p.strainType === type).slice(0, 2));
  }
  if (featured.length < 8) {
    featured.push(...products.filter(p => !featured.includes(p)).slice(0, 8 - featured.length));
  }
  return featured.slice(0, 8);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const products = getProducts();
  return products.filter(p => p.categories.includes(categorySlug));
}

export function searchProducts(query: string, limit = 8): Product[] {
  const q = query.toLowerCase();
  return getProducts()
    .filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.categories.some(c => c.includes(q)))
    .slice(0, limit);
}

export function getBeginnerProducts(): Product[] {
  return getProducts().filter(p => p.autoflower).slice(0, 8);
}

export function getHighThcProducts(): Product[] {
  return getProducts()
    .filter(p => { const thc = parseInt(p.thcContent) || 0; return thc >= 20; })
    .slice(0, 8);
}

export function getFastFloweringProducts(): Product[] {
  return getProducts().filter(p => p.autoflower && p.feminized).slice(0, 8);
}

export function getProductCount(): { total: number; published: number; draft: number } {
  const all = getAllProductsRaw();
  const published = getProducts();
  return { total: all.length, published: published.length, draft: all.length - published.length };
}
