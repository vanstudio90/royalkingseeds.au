// Terpene data for all published products
export interface TerpeneInfo {
  name: string;
  percentage: number; // 0-100 visual bar
  aroma: string;
  effect: string;
  color: string;
}

export const productTerpenes: Record<string, TerpeneInfo[]> = {
  'hindu-kush-feminized': [
    { name: 'Myrcene', percentage: 85, aroma: 'Deep earth, musk, herbal undertone', effect: 'Encourages profound physical calm and muscular ease', color: '#7C3AED' },
    { name: 'Pinene', percentage: 65, aroma: 'Crisp pine, woodland air', effect: 'Aids mental sharpness and clear breathing', color: '#059669' },
    { name: 'Caryophyllene', percentage: 50, aroma: 'Warm pepper, spice', effect: 'May alleviate stress and bodily tension', color: '#D97706' },
    { name: 'Limonene', percentage: 25, aroma: 'Faint citrus, lemon rind', effect: 'Contributes to mood uplift and anxiolytic qualities', color: '#F59E0B' },
    { name: 'Linalool', percentage: 20, aroma: 'Lavender blossom, gentle sweetness', effect: 'Fosters sedation and a tranquil mindset', color: '#EC4899' },
  ],
  'og-kush-feminized': [
    { name: 'Limonene', percentage: 80, aroma: 'Vivid lemon, sharp citrus', effect: 'Boosts mood and dissipates stress', color: '#F59E0B' },
    { name: 'Myrcene', percentage: 70, aroma: 'Earthy, herbal, damp soil', effect: 'Supports physical ease and body calm', color: '#7C3AED' },
    { name: 'Caryophyllene', percentage: 65, aroma: 'Cracked black pepper, warming spice', effect: 'Potentially reduces inflammation and muscular strain', color: '#D97706' },
    { name: 'Pinene', percentage: 45, aroma: 'Piercing pine needle', effect: 'Promotes concentration and offsets drowsiness', color: '#059669' },
    { name: 'Humulene', percentage: 25, aroma: 'Woody, earthy, hop-like', effect: 'May curb appetite and ease inflammation', color: '#92400E' },
  ],
  'granddaddy-purple-feminized': [
    { name: 'Myrcene', percentage: 90, aroma: 'Ripe grape, fruity, damp earth', effect: 'Intense body relaxation tending towards sedation', color: '#7C3AED' },
    { name: 'Pinene', percentage: 45, aroma: 'Pine resin, crisp, clean', effect: 'Offsets sedation with a touch of mental clarity', color: '#059669' },
    { name: 'Linalool', percentage: 55, aroma: 'Lavender field, floral sweetness', effect: 'Soothing properties that encourage restful sleep', color: '#EC4899' },
    { name: 'Caryophyllene', percentage: 35, aroma: 'Peppercorn, mild spice', effect: 'Tension relief and anti-inflammatory potential', color: '#D97706' },
    { name: 'Ocimene', percentage: 20, aroma: 'Sweet herb, light wood', effect: 'May offer mood brightening and decongestant benefits', color: '#10B981' },
  ],
  'g13-feminized': [
    { name: 'Myrcene', percentage: 80, aroma: 'Earth, clove, musk', effect: 'Strong sedation and deep muscle relaxation', color: '#7C3AED' },
    { name: 'Pinene', percentage: 55, aroma: 'Dense pine forest, sharp resin', effect: 'Respiratory openness and focus support', color: '#059669' },
    { name: 'Caryophyllene', percentage: 60, aroma: 'Cracked pepper, warm spice', effect: 'Eases stress and supports physical comfort', color: '#D97706' },
    { name: 'Limonene', percentage: 30, aroma: 'Light citrus, mandarin peel', effect: 'Gentle mood brightening alongside body effects', color: '#F59E0B' },
    { name: 'Humulene', percentage: 35, aroma: 'Earthy, woody, hop notes', effect: 'Appetite regulation and anti-inflammatory action', color: '#92400E' },
  ],
  'forbidden-fruit-feminized': [
    { name: 'Myrcene', percentage: 75, aroma: 'Tropical fruit, ripe mango', effect: 'Complete body relaxation and serenity', color: '#7C3AED' },
    { name: 'Limonene', percentage: 70, aroma: 'Mandarin, bright citrus sparkle', effect: 'Mood elevation and imaginative energy', color: '#F59E0B' },
    { name: 'Linalool', percentage: 50, aroma: 'Cherry blossom, delicate floral', effect: 'Eases nervousness and promotes calm', color: '#EC4899' },
    { name: 'Caryophyllene', percentage: 40, aroma: 'Gentle pepper, comforting warmth', effect: 'Mild stress alleviation', color: '#D97706' },
    { name: 'Terpinolene', percentage: 25, aroma: 'Herbaceous, piney, fresh', effect: 'Gently uplifting with a balanced sedative note', color: '#6366F1' },
  ],
  'fruity-pebbles-feminized': [
    { name: 'Limonene', percentage: 80, aroma: 'Confectionery citrus, sugary', effect: 'Mood brightening and tension dissolution', color: '#F59E0B' },
    { name: 'Myrcene', percentage: 60, aroma: 'Mixed fruit, berry, damp earth', effect: 'Gentle ease without pronounced heaviness', color: '#7C3AED' },
    { name: 'Caryophyllene', percentage: 50, aroma: 'Mild spice, cracked pepper', effect: 'Anti-inflammatory and soothing', color: '#D97706' },
    { name: 'Linalool', percentage: 40, aroma: 'Vanilla cream, floral hint', effect: 'Smooth, settling calm', color: '#EC4899' },
    { name: 'Terpinolene', percentage: 30, aroma: 'Fresh pine, tangy citrus', effect: 'Invigorating creative spark', color: '#6366F1' },
  ],
  'a-10-auto': [
    { name: 'Myrcene', percentage: 75, aroma: 'Rich earth, herbal, clove', effect: 'Physical ease and body calm', color: '#7C3AED' },
    { name: 'Pinene', percentage: 55, aroma: 'Pine needle, forest breeze', effect: 'Mental clarity and wakefulness', color: '#059669' },
    { name: 'Caryophyllene', percentage: 50, aroma: 'Warm peppercorn, spice', effect: 'Stress alleviation and anti-inflammatory', color: '#D97706' },
    { name: 'Limonene', percentage: 35, aroma: 'Faint citrus, lemon', effect: 'Subtle mood enhancement', color: '#F59E0B' },
    { name: 'Humulene', percentage: 20, aroma: 'Earthy, woody notes', effect: 'Appetite regulation', color: '#92400E' },
  ],
  'acapulco-gold-auto': [
    { name: 'Terpinolene', percentage: 75, aroma: 'Herbaceous, piney, delicate floral', effect: 'Invigorating energy and creative drive', color: '#6366F1' },
    { name: 'Limonene', percentage: 65, aroma: 'Vivid citrus, orange rind', effect: 'Mood brightening and mental acuity', color: '#F59E0B' },
    { name: 'Myrcene', percentage: 40, aroma: 'Earthy, tropical hints', effect: 'Light bodily comfort without drowsiness', color: '#7C3AED' },
    { name: 'Caryophyllene', percentage: 35, aroma: 'Soft spice, warm pepper', effect: 'Gentle de-stressing', color: '#D97706' },
    { name: 'Pinene', percentage: 30, aroma: 'Pine sap, mountain air', effect: 'Bolsters focus and respiratory ease', color: '#059669' },
  ],
  'lemon-cherry-gelato-clone': [
    { name: 'Limonene', percentage: 85, aroma: 'Intense lemon, citrus explosion', effect: 'Potent mood elevation and euphoria', color: '#F59E0B' },
    { name: 'Caryophyllene', percentage: 65, aroma: 'Cherry, peppery heat', effect: 'Physical comfort and stress dissolution', color: '#D97706' },
    { name: 'Linalool', percentage: 55, aroma: 'Cream, vanilla, soft floral', effect: 'Body relaxation with a calming edge', color: '#EC4899' },
    { name: 'Myrcene', percentage: 45, aroma: 'Earthy, fruity depth', effect: 'Amplifies overall relaxation', color: '#7C3AED' },
    { name: 'Humulene', percentage: 20, aroma: 'Woody, earthy foundation', effect: 'Understated grounding quality', color: '#92400E' },
  ],
  'strawberry-fizz-prerolls': [
    { name: 'Myrcene', percentage: 70, aroma: 'Sweet berry, herbal base', effect: 'Mild body relaxation', color: '#7C3AED' },
    { name: 'Limonene', percentage: 65, aroma: 'Sparkling citrus, effervescent', effect: 'Mood lift and brightness', color: '#F59E0B' },
    { name: 'Caryophyllene', percentage: 45, aroma: 'Gentle spice, warmth', effect: 'Tension relief and comfort', color: '#D97706' },
    { name: 'Linalool', percentage: 35, aroma: 'Strawberry sweetness, floral note', effect: 'Smooth, settling sensation', color: '#EC4899' },
    { name: 'Ocimene', percentage: 20, aroma: 'Confectionery, candy-like', effect: 'Light, refreshing character', color: '#10B981' },
  ],
  'high-resin-strains-mixpack': [
    { name: 'Caryophyllene', percentage: 80, aroma: 'Diesel fuel, pepper, sharp', effect: 'Pronounced stress relief and physical comfort', color: '#D97706' },
    { name: 'Myrcene', percentage: 75, aroma: 'Deep earth, heavy musk', effect: 'Weighty body relaxation across all three cultivars', color: '#7C3AED' },
    { name: 'Limonene', percentage: 55, aroma: 'Sour citrus, tangy bite', effect: 'Mood stability and euphoric lift', color: '#F59E0B' },
    { name: 'Pinene', percentage: 50, aroma: 'Pine resin, fresh, clean', effect: 'Mental alertness and clarity', color: '#059669' },
    { name: 'Humulene', percentage: 40, aroma: 'Hoppy, woody, earthen', effect: 'Anti-inflammatory support', color: '#92400E' },
  ],
  'couch-lock-pack': [
    { name: 'Myrcene', percentage: 90, aroma: 'Grape, damp earth, heavy musk', effect: 'Peak sedation and full-body immobility', color: '#7C3AED' },
    { name: 'Linalool', percentage: 60, aroma: 'Lavender, sweet berry note', effect: 'Profound calming and sleep encouragement', color: '#EC4899' },
    { name: 'Caryophyllene', percentage: 55, aroma: 'Peppery, diesel hint', effect: 'Physical tension dissolution', color: '#D97706' },
    { name: 'Pinene', percentage: 35, aroma: 'Pine sap, forest floor', effect: 'Mild clarity counterbalance', color: '#059669' },
    { name: 'Humulene', percentage: 30, aroma: 'Woody, earthy notes', effect: 'Grounding quality, appetite moderation', color: '#92400E' },
  ],
  'goat-mixpack': [
    { name: 'Terpinolene', percentage: 65, aroma: 'Fresh pine, tangy citrus', effect: 'Energising spark from Acapulco Gold', color: '#6366F1' },
    { name: 'Myrcene', percentage: 80, aroma: 'Earthy, tropical fruit', effect: 'Deep relaxation from 9lb Hammer', color: '#7C3AED' },
    { name: 'Limonene', percentage: 60, aroma: 'Pineapple, bright citrus', effect: 'Mood elevation from Maui Pineapple Chunk', color: '#F59E0B' },
    { name: 'Caryophyllene', percentage: 50, aroma: 'Warm spice, peppery kick', effect: 'Tension relief spanning all three strains', color: '#D97706' },
    { name: 'Pinene', percentage: 35, aroma: 'Fresh pine, herbal', effect: 'Focus and breathing support', color: '#059669' },
  ],
  'american-strains-pack': [
    { name: 'Myrcene', percentage: 65, aroma: 'Blueberry, earthy, sweet', effect: 'Soothing relaxation from Blue Dream', color: '#7C3AED' },
    { name: 'Terpinolene', percentage: 70, aroma: 'Herbaceous, piney, citrus', effect: 'Vigour from Green Crack', color: '#6366F1' },
    { name: 'Limonene', percentage: 60, aroma: 'Sharp citrus, tropical tang', effect: 'Mood lift and mental clarity', color: '#F59E0B' },
    { name: 'Pinene', percentage: 55, aroma: 'Pine woodland, sharp resin', effect: 'Focus from Alaskan Thunder Fuck', color: '#059669' },
    { name: 'Caryophyllene', percentage: 40, aroma: 'Mild pepper, warming', effect: 'Balanced de-stressing', color: '#D97706' },
  ],
  'deadly-sativas-mixpack': [
    { name: 'Terpinolene', percentage: 85, aroma: 'Pine, floral, herbal blend', effect: 'Powerful cerebral activation', color: '#6366F1' },
    { name: 'Limonene', percentage: 70, aroma: 'Citrus, incense, sweet note', effect: 'Euphoric rush and creative vigour', color: '#F59E0B' },
    { name: 'Pinene', percentage: 55, aroma: 'Pine sap, sharp, pure', effect: 'Mental clarity and sustained focus', color: '#059669' },
    { name: 'Myrcene', percentage: 30, aroma: 'Earthy, tropical base note', effect: 'Mild bodily comfort without sedation', color: '#7C3AED' },
    { name: 'Ocimene', percentage: 35, aroma: 'Sweet herb, fragrant', effect: 'Uplifting and invigorating', color: '#10B981' },
  ],
};

// Growing journal data
export interface GrowWeek {
  week: number;
  stage: string;
  title: string;
  description: string;
  tips: string;
}

export const productGrowJournals: Record<string, GrowWeek[]> = {
  'hindu-kush-feminized': [
    { week: 1, stage: 'Germination', title: 'Initiating the Seed', description: 'Lay seeds between dampened paper towels at 22-26°C. Hindu Kush seeds typically split within 24-48 hours, revealing a sturdy white taproot. Move to your growing medium once the taproot extends to about 1cm.', tips: 'Hindu Kush seeds are resilient — germination success rates rank among the highest of any cultivar.' },
    { week: 2, stage: 'Seedling', title: 'Cotyledons and First Leaves', description: 'The seedling pushes through the surface and unfurls its cotyledon leaves. Within days, the initial true leaves with their characteristic serrated edges emerge. Keep lighting gentle on an 18/6 schedule.', tips: 'Hindu Kush seedlings display a compact habit from the outset — wide leaves signal robust indica heritage.' },
    { week: 3, stage: 'Early Veg', title: 'Root Establishment Phase', description: 'The root network expands as the plant produces its second and third leaf sets. Nodes sit close together, creating a stocky frame. Introduce light feeding if cultivating in an inert substrate.', tips: 'Water in a ring around the stem to coax roots outward.' },
    { week: 5, stage: 'Vegetative', title: 'Stocky Canopy Formation', description: 'Hindu Kush develops its hallmark compact, bushy silhouette with broad fan leaves and tight internodal gaps. Topping at the fifth node promotes strong lateral branching.', tips: 'This strain responds enthusiastically to topping — vigorous side shoots typically appear within days.' },
    { week: 7, stage: 'Pre-Flower', title: 'Flip to 12/12', description: 'After 4-6 weeks of vegetative growth, switch the photoperiod to 12/12 to induce flowering. Pistils (white hairs) should be visible at branch junctions within 7-10 days, confirming female sex.', tips: 'Hindu Kush reveals sex promptly — usually within the first week of 12/12 lighting.' },
    { week: 9, stage: 'Early Flower', title: 'Bud Site Development', description: 'Numerous bud sites appear across the canopy. Dense clusters of white pistils form at every node. Begin tapering nitrogen and boosting phosphorus and potassium inputs.', tips: 'Drop humidity to 50% to shield the developing dense flowers from moisture-related issues.' },
    { week: 11, stage: 'Mid Flower', title: 'Rapid Bud Expansion', description: 'Flowers pack on weight quickly. Trichome output surges, creating a frosted appearance. The earthy, pine fragrance becomes pronounced. Brace heavy branches with stakes or netting.', tips: 'The pine-sandalwood scent intensifies now — carbon filtration is essential for indoor gardens.' },
    { week: 13, stage: 'Late Flower', title: 'Trichome Maturation', description: 'Pistils shift towards amber. Trichomes progress from clear to milky. Cease nutrient feeding and begin a plain-water flush for the closing 7-10 days.', tips: 'Inspect trichomes daily with a jeweller\'s loupe. Harvest at predominantly cloudy with 10-20% amber for maximum relaxation.' },
    { week: 14, stage: 'Harvest', title: 'Chop Day', description: 'Fell the plant and suspend whole branches inverted in a dark room at 18-21°C with 55-60% relative humidity. Dry for 7-10 days until small stems snap cleanly. Trim and cure in sealed jars for 2-4 weeks.', tips: 'Hindu Kush rewards an extended cure — four weeks or more reveals the full sandalwood-spice character.' },
  ],
  'og-kush-feminized': [
    { week: 1, stage: 'Germination', title: 'Initiating the Seed', description: 'OG Kush seeds germinate within 24-72 hours via the paper towel method. Watch for a vigorous white taproot. Plant taproot-down into your medium at roughly 1-1.5cm depth.', tips: 'OG Kush germinates reliably — hold temperature steady at 24°C for optimal results.' },
    { week: 2, stage: 'Seedling', title: 'First Serrated Leaves', description: 'Cotyledons open, followed by the initial serrated true leaves. OG Kush seedlings show medium-width foliage reflecting their hybrid lineage. Maintain humidity around 65-70%.', tips: 'A humidity dome over seedlings promotes vigorous early development.' },
    { week: 4, stage: 'Vegetative', title: 'Lateral Branching Begins', description: 'OG Kush produces strong side branches ideal for training. Stem thickness increases visibly. Commence low-stress training by carefully bending the main stem to expose lower growth to light.', tips: 'OG Kush is exceptionally responsive to LST and topping — one of the best strains for canopy shaping.' },
    { week: 6, stage: 'Late Veg', title: 'Canopy Takes Shape', description: 'With training, OG Kush forms an excellent flat canopy. Multiple tops develop robust bud sites. The diesel-pine scent may already be detectable when you rub the stems.', tips: 'SCROG nets pair brilliantly with OG Kush — thread branches through the mesh during this phase.' },
    { week: 7, stage: 'Flip', title: 'Transition to 12/12', description: 'Trigger flowering by switching to 12/12 lighting. OG Kush will stretch 50-75% over the first 2-3 weeks of bloom. Pre-flowers emerge within 7-10 days.', tips: 'Plan for the stretch — initiate the flip when plants sit at roughly 60% of your desired final height.' },
    { week: 9, stage: 'Early Flower', title: 'Flower Clusters Form', description: 'Dense bud formations appear at each node. The signature OG Kush aroma — pine, lemon, diesel — saturates the growing area. Boost airflow to manage the thick canopy.', tips: 'Selectively remove fan leaves to improve light reach to lower bud sites.' },
    { week: 11, stage: 'Mid Flower', title: 'Peak Resin Output', description: 'Buds become thickly coated in trichomes. The fuel-citrus fragrance reaches full intensity. Calyxes swell and stack into the dense, golf-ball-shaped nugs for which OG Kush is renowned.', tips: 'Lower humidity to 45% and maintain vigorous air movement — OG Kush density invites mould risk.' },
    { week: 13, stage: 'Late Flower', title: 'Final Ripening Stage', description: 'Pistils retreat into plump calyxes. Trichomes transition from clear to milky-cloudy. Commence flushing 10-14 days ahead of planned harvest.', tips: 'For more cerebral effects, harvest with mostly cloudy trichomes. For heavier body sensation, allow 20-30% amber.' },
    { week: 15, stage: 'Harvest', title: 'Harvest and Cure', description: 'Cut and dry under controlled conditions for 7-10 days. Trim and store in mason jars, opening daily for the first fortnight. OG Kush amply rewards the patient grower with outstanding flavour development.', tips: 'The pine-fuel-citrus terpenes mature beautifully across a 3-4 week cure — resist the urge to rush.' },
  ],
  'granddaddy-purple-feminized': [
    { week: 1, stage: 'Germination', title: 'Seed Initiation', description: 'GDP seeds germinate in 24-72 hours. The seedling appears with slightly broader cotyledons than average, foreshadowing the indica dominance ahead.', tips: 'Maintain consistent moisture and warmth — GDP seeds germinate dependably.' },
    { week: 3, stage: 'Seedling', title: 'Early Development', description: 'Broad, dark green fan leaves form rapidly. GDP remains compact from the start with snug internodal spacing. The plant is visibly bushy even at this young stage.', tips: 'GDP stays short — consider an early transplant to the final pot to maximise root-development time.' },
    { week: 5, stage: 'Vegetative', title: 'Compact Architecture', description: 'The plant develops a squat, bushy profile rarely exceeding 60cm at this point. Sturdy side branches appear. Topping at node 4-5 encourages a superb multi-cola structure.', tips: 'GDP needs little vertical room — concentrate on spreading the canopy laterally.' },
    { week: 7, stage: 'Flip', title: 'Flowering Induced', description: 'Switch to 12/12. GDP exhibits minimal stretch versus other strains — anticipate only 25-50% height gain. Pistils appear swiftly within the opening week.', tips: 'GDP is one of the simplest strains to manage through the stretch — height seldom becomes problematic.' },
    { week: 9, stage: 'Early Flower', title: 'Grape Aromatics Emerge', description: 'Dense bud sites fill in rapidly. The sweet grape aroma begins permeating the room. Trichome development starts early, lending buds a frosty look.', tips: 'Start dropping nighttime temperatures to 15-18°C to stimulate purple colouration.' },
    { week: 11, stage: 'Mid Flower', title: 'Purple Pigments Develop', description: 'This is where the magic unfolds — rich purple tones appear throughout buds and fan leaves. Flowers become incredibly dense and weighty. The grape-berry fragrance deepens.', tips: 'Brace branches with stakes — GDP colas grow extremely heavy and risk snapping.' },
    { week: 13, stage: 'Late Flower', title: 'Peak Visual Appeal', description: 'Full purple saturation with orange pistils and thick trichome blankets. The visual contrast is breathtaking. Begin the final flush for the last 7-10 days.', tips: 'GDP is among the most photogenic cultivars at harvest — the purple buds are stunning in photographs.' },
    { week: 14, stage: 'Harvest', title: 'Harvest and Cure', description: 'Dry slowly at 18-20°C for optimum colour retention. Cure in jars for a minimum of 3 weeks — the grape-berry flavour deepens significantly with proper curing.', tips: 'Cooler drying temperatures help preserve the purple pigmentation that defines GDP\'s visual appeal.' },
  ],
  'g13-feminized': [
    { week: 1, stage: 'Germination', title: 'Initiating the Seed', description: 'G13 seeds crack within 24-48 hours, presenting a vigorous taproot. Sow at 1cm depth into your chosen medium. The legendary genetics are underway.', tips: 'G13 seeds carry strong genetics — expect excellent germination success.' },
    { week: 3, stage: 'Seedling', title: 'Indica Form Takes Shape', description: 'Broad, dark green leaves telegraph potent indica heritage. The seedling is compact and robust from the outset, with notably thick stems relative to its size.', tips: 'G13 develops stout stems naturally — an early indicator of the dense flower production ahead.' },
    { week: 5, stage: 'Vegetative', title: 'Dense Canopy Growth', description: 'G13 fills out into a compact bush with thick foliage and vigorous lateral branches. Close node spacing yields an abundance of prospective bud sites.', tips: 'Targeted removal of large fan leaves enhances light penetration through the dense canopy.' },
    { week: 7, stage: 'Flip', title: 'Bloom Commences', description: 'Switch to 12/12. G13 displays minimal stretch — gaining only 25-40% in height. Pre-flowers confirm feminised genetics within 5-7 days.', tips: 'G13 stays compact — perfectly suited to tents where headroom is at a premium.' },
    { week: 9, stage: 'Early Flower', title: 'Resin Production Surges', description: 'Bud sites develop quickly with remarkable trichome density from early in the flowering phase. The earthy, pine, and skunky aroma starts building in intensity.', tips: 'G13 outputs more resin than most strains — keep a close eye on humidity levels.' },
    { week: 11, stage: 'Mid Flower', title: 'Buds Densify Rapidly', description: 'Exceptionally dense flowers form across the canopy. Trichome coverage is extraordinary — buds appear completely encrusted in frost. The legendary potency is accumulating.', tips: 'Sustain robust airflow around bud sites — G13\'s density promotes moisture retention.' },
    { week: 13, stage: 'Late Flower', title: 'Final Maturation', description: 'Buds achieve maximum density. The hashish-like aroma reaches full strength. Trichomes transition to cloudy-amber. Begin a plain-water flush for the final 7-10 days.', tips: 'G13 reaches its full potency potential during these last two weeks — resist early harvest.' },
    { week: 14, stage: 'Harvest', title: 'Chop Day', description: 'Cut and dry at 18-21°C. G13 flowers are exceptionally dense — allow additional drying time to confirm the centre of each bud is thoroughly dry. Cure for a minimum of 3-4 weeks.', tips: 'The storied potency of G13 continues to develop throughout the curing process.' },
  ],
};

// For products without detailed journals, generate a generic one
export function getGrowJournal(slug: string, isAuto: boolean, name: string): GrowWeek[] {
  if (productGrowJournals[slug]) return productGrowJournals[slug];

  if (slug.includes('preroll')) return [
    { week: 0, stage: 'Ready', title: 'Ready to Enjoy', description: `${name} arrive pre-rolled and prepared for immediate use. No cultivation required — simply light up and savour premium cannabis flower.`, tips: 'Keep in a cool, dry location to maintain freshness and flavour.' },
  ];

  if (isAuto) return [
    { week: 1, stage: 'Germination', title: 'Seed Initiation', description: `Sow ${name} seeds directly into their final pot. Autoflowers do not cope well with transplanting. Expect the seedling to break the surface within 3-7 days.`, tips: 'Use 10-20 litre pots as the permanent home for autoflowers.' },
    { week: 2, stage: 'Seedling', title: 'First Serrated Leaves', description: 'Cotyledons open and the first serrated true leaves appear. Maintain lighting at 18-20 hours daily. The autoflower countdown has commenced.', tips: 'Water gently around the stem — overwatering is the most common seedling error at this stage.' },
    { week: 4, stage: 'Vegetative', title: 'Rapid Vegetative Phase', description: 'The plant enters a burst of vegetative growth. Multiple nodes form in quick succession. Light LST can be applied to spread the canopy.', tips: 'Autoflowers have a limited veg window — steer clear of high-stress techniques such as topping.' },
    { week: 5, stage: 'Pre-Flower', title: 'Autoflowering Kicks In', description: 'The plant transitions to flowering automatically without any light schedule adjustment. White pistils emerge at branch junctions.', tips: 'Raise phosphorus and potassium levels in your feed as bloom begins.' },
    { week: 7, stage: 'Flower', title: 'Bud Formation', description: 'Buds develop and swell at pace. Trichome output climbs. Strain-specific aromatics become evident.', tips: 'Ensure good ventilation and keep humidity below 50%.' },
    { week: 9, stage: 'Late Flower', title: 'Final Ripening', description: 'Buds reach their peak size. Trichomes shift from clear to cloudy. Begin a plain-water flush for the final week.', tips: 'Inspect trichomes with a loupe — harvest at predominantly cloudy for well-balanced effects.' },
    { week: 10, stage: 'Harvest', title: 'Chop Day', description: `Harvest ${name} once trichomes are mostly cloudy. Dry for 7-10 days, then cure in sealed jars for at least 2 weeks.`, tips: 'Autoflower buds often cure quickly, but extended curing still markedly improves flavour.' },
  ];

  // Generic photoperiod
  return [
    { week: 1, stage: 'Germination', title: 'Initiating the Seed', description: `Germinate ${name} seeds using the paper towel technique at 22-26°C. Transfer to your growing medium once the taproot reaches 1cm.`, tips: 'Maintain consistent moisture and warmth for the fastest germination.' },
    { week: 3, stage: 'Seedling', title: 'Early Development', description: 'First true leaves develop. The root system establishes itself. Hold humidity at 65-70% and provide gentle illumination.', tips: 'Avoid overwatering — allow the top layer of medium to dry slightly between waterings.' },
    { week: 5, stage: 'Vegetative', title: 'Structural Growth', description: 'Branch architecture takes shape. Apply training methods like topping and LST to build a level canopy.', tips: 'This is the ideal window for shaping your plant — recovery from training is rapid during veg.' },
    { week: 7, stage: 'Flip', title: 'Transition to 12/12', description: 'Adjust the light cycle to 12/12 to trigger bloom. Pre-flowers should appear within 7-10 days, confirming sex.', tips: 'Flip once plants reach 50-60% of your target height to account for flowering stretch.' },
    { week: 9, stage: 'Early Flower', title: 'Bud Site Formation', description: 'Bud sites develop across the canopy. Switch to bloom-specific nutrients. Strain-characteristic aromas begin surfacing.', tips: 'Reduce nitrogen and increase P-K ratios to support optimal flower development.' },
    { week: 11, stage: 'Mid Flower', title: 'Flowers Swelling', description: 'Buds gain weight rapidly and trichome output peaks. Dense flower clusters take shape. Support heavily laden branches if needed.', tips: 'Lower humidity to 45-50% to protect dense buds from mould.' },
    { week: 13, stage: 'Late Flower', title: 'Trichome Maturation', description: 'Trichomes progress from clear to cloudy. Initiate a plain-water flush 7-10 days before harvest.', tips: 'Use a jeweller\'s loupe to assess trichome colour daily for precise harvest timing.' },
    { week: 14, stage: 'Harvest', title: 'Harvest and Cure', description: `Cut and dry ${name} at 18-21°C with 55-60% humidity for 7-10 days. Cure in sealed jars for 2-4 weeks, opening daily.`, tips: 'Patience during curing is repaid with noticeably improved flavour and smoothness.' },
  ];
}
