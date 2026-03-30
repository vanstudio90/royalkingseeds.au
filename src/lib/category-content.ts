export interface CategoryContent {
  h1: string;
  intro: string;
  quickFacts?: { label: string; value: string }[];
  bottomSections: { title: string; content: string }[];
  faqs: { q: string; a: string }[];
  relatedCategories?: { name: string; slug: string }[];
}

const COMMON_RELATED = [
  { name: 'Autoflower Seeds', slug: 'autoflowering-seeds' },
  { name: 'Feminised Seeds', slug: 'feminized-seeds' },
  { name: 'High THC Seeds', slug: 'high-tch-seeds' },
  { name: 'High Yield Seeds', slug: 'best-strains-for-high-yield' },
  { name: 'Indoor Seeds', slug: 'best-strains-for-indoor-growing' },
  { name: 'Outdoor Seeds', slug: 'best-strains-for-outdoor-growing' },
  { name: 'Fast Flowering', slug: 'fast-flowering-seeds' },
  { name: 'CBD Seeds', slug: 'cbd-strains' },
];

export const categoryContent: Record<string, CategoryContent> = {
  'shop-all-cannabis-seeds': {
    h1: 'Australia\'s Complete Cannabis Seed Catalogue — Over 1,600 Genetics Shipped Discreetly',
    intro: 'Royal King Seeds stocks more than 1,600 cannabis seed varieties for Australian growers — feminised, autoflowering, indica, sativa, hybrid, and CBD genetics with tracked, discreet delivery to every state and territory. Our 95% germination guarantee backs every order, and our growing support team is available seven days a week. Whether you are setting up your first grow tent in a Melbourne apartment or planning a multi-strain outdoor garden along the Queensland coast, the right genetics are the foundation of every successful harvest. Try our strain finder quiz for tailored recommendations in under a minute, or plug your setup details into the yield calculator to preview your potential harvest weight.',
    quickFacts: [
      { label: 'Genetics Available', value: '1,600+' },
      { label: 'Germination Guarantee', value: '95%' },
      { label: 'Delivery', value: 'All States & Territories' },
      { label: 'Free Shipping Threshold', value: '$150+ AUD' },
    ],
    bottomSections: [
      { title: 'What Sets Royal King Seeds Apart for Australian Buyers?', content: 'Australian growers return to Royal King Seeds because we back our genetics with action, not just claims. Every strain ships from climate-controlled storage in crush-proof packaging designed to survive the Australian postal network. Our seed sourcing prioritises breeders with multi-generational stability — no untested hype drops. With over 200,000 fulfilled orders since 2019, we have built a track record that speaks through repeat customers rather than marketing copy. Transparent strain data, responsive support, and a no-questions-asked germination replacement policy round out the experience.' },
      { title: 'Navigating Cannabis Seed Categories', content: 'Our catalogue is organised to match the way Australian growers actually shop. Feminised seeds guarantee 99.9% female plants — no males wasting space in your tent. Autoflowering genetics flower on their own schedule in eight to ten weeks, perfect for short-season regions or growers wanting multiple harvests per year. CBD-rich strains suit therapeutic cultivation with minimal psychoactive effects. High-THC options cater to experienced consumers chasing potency. Curated mix packs let you sample several genetics in one order at a bundled price. Our yield calculator estimates harvest weight for your specific environment.' },
      { title: 'Matching Seeds to the Australian Climate', content: 'Australia spans tropical, subtropical, mediterranean, temperate, arid, and oceanic climate zones — a broader range than most countries on earth. That means no single strain recommendation fits everywhere. Growers in Darwin and Cairns need mould-resistant genetics with open bud structures to survive wet-season humidity. Perth and Adelaide growers enjoy dry summers that suit almost any variety. Melbourne, Hobart, and Canberra demand fast-finishing strains or autoflowers that wrap up before autumn frosts arrive. Our state-specific growing guides match genetics to your postcode.' },
      { title: 'Autoflowering or Feminised — Picking the Right Seed Type', content: 'Autoflowers finish from seed in eight to ten weeks, stay compact, and skip the light-cycle management that photoperiod strains require. They suit beginners, balcony grows, and anyone chasing speed. Feminised photoperiod seeds hand you full control over plant size and timing — veg as long as you like, flip to flower when you are ready, and harvest heavier per plant. Experienced growers often run both types in parallel: autoflowers for quick rotations and feminised photoperiods for the main crop. Neither type is objectively better — the right choice depends on your space, schedule, and goals.' },
      { title: 'Growing Cannabis Seeds Successfully in Australian Conditions', content: 'Quality genetics are the starting point, but execution seals the deal. Germinate using the paper towel technique or direct-sow into a seedling plug. Maintain temperatures between 21°C and 30°C, keep flowering-phase humidity around 40–60%, and hold soil pH between 6.0 and 6.5. Indoor growers should invest in a reliable LED or HPS fixture — light quality drives bud density more than any other controllable factor. Low-stress training and topping redistribute growth hormones for a flatter, more productive canopy. Outdoor cultivators across Australia plant from October through to January, harvesting between March and May depending on strain and latitude. Our full grow-guide library covers every stage from seed activation to curing.' },
    ],
    faqs: [
      { q: 'What is the legal position on buying cannabis seeds in Australia?', a: 'Cannabis seeds are available as adult novelty souvenirs and for genetic preservation purposes. Germination and cultivation regulations differ across states and territories — the ACT permits limited personal growing for adults, while other jurisdictions have their own frameworks. Buyers should familiarise themselves with local rules before germinating.' },
      { q: 'How do I work out which seeds suit my situation?', a: 'Three factors narrow the field quickly: growing environment (indoor tent, outdoor plot, balcony, greenhouse), your experience level, and your local climate zone. First-time growers generally get the best results from autoflowering or feminised indica seeds. Our strain finder quiz generates personalised recommendations in under sixty seconds.' },
      { q: 'What germination success rate should I expect?', a: 'Our seeds carry a 95% germination rate when the recommended method is followed. Any seed that fails to sprout is replaced at no cost under our germination guarantee — no hoops, no small print.' },
      { q: 'How quickly will my order arrive?', a: 'Orders are dispatched within one to two business days. Delivery to most Australian addresses takes three to seven business days via Australia Post. Every parcel ships in plain, unbranded packaging with tracking. Free shipping applies to orders over $150 AUD.' },
      { q: 'What separates autoflowering seeds from feminised photoperiod seeds?', a: 'Autoflowers transition to flowering based on age — typically eight to ten weeks total — and stay compact without needing a light-cycle change. Feminised photoperiod seeds require a shift to 12 hours of darkness to trigger bloom, grow larger, and yield more per individual plant. Both types produce exclusively female plants.' },
      { q: 'Can I get seeds delivered to regional and remote areas?', a: 'Yes. We ship to every Australian postcode — metro, regional, and remote — using tracked Australia Post services. Plain, unmarked packaging ensures complete discretion regardless of destination. Free shipping kicks in at $150 AUD.' },
    ],
  },
  'feminized-seeds': {
    h1: 'Feminised Cannabis Seeds for Australia — Every Seed a Female Plant',
    intro: 'Feminised seeds remove the guesswork from cannabis cultivation by producing 99.9% female plants. No males to spot, no wasted pots, no risk of accidental pollination — just bud-producing plants from every seed you germinate. Our feminised range spans indica, sativa, and hybrid genetics from heritage cultivars through to the latest high-potency crosses. Shipped discreetly across Australia with our germination guarantee.',
    quickFacts: [
      { label: 'Female Guarantee', value: '99.9%' },
      { label: 'Bloom Duration', value: '8–11 Weeks' },
      { label: 'Harvest Potential', value: 'High to Very High' },
      { label: 'Suited To', value: 'All Skill Levels' },
    ],
    bottomSections: [
      { title: 'The Science Behind Feminised Seeds', content: 'Feminised cannabis seeds are created through a controlled breeding process that eliminates male chromosomes from the genetic equation. Techniques such as colloidal silver application or natural rodelization force a female plant to produce pollen carrying only female genetics. When this pollen fertilises another female, the resulting seeds are overwhelmingly female — 99.9% on average. The process does not alter cannabinoid content, terpene expression, or plant vigour. What it does is guarantee that every seed you plant has the genetic blueprint to produce the resinous, cannabinoid-rich flowers growers are after.' },
      { title: 'Top Feminised Picks for Australian Indoor Setups', content: 'Space matters indoors, and feminised seeds make every pot count. Compact indica-leaning genetics such as Northern Lights, Girl Scout Cookies, and Granddaddy Purple slot neatly into 1.2 m x 1.2 m tents under LED panels. Training methods like LST, ScrOG, and topping spread the canopy for maximum light interception. Most feminised indicas wrap up flowering in eight to nine weeks, while sativa-dominant options run ten to eleven weeks. Plug your tent dimensions and light wattage into our yield calculator for a harvest estimate tailored to your rig.' },
      { title: 'Selecting the Right Feminised Variety', content: 'Start by considering where the plant will live. Indoor growers should lean toward compact, quick-finishing genetics. Outdoor cultivators in warm Australian zones have room for taller sativa-dominant varieties. Factor in the effects you prefer — indica for evening relaxation, sativa for daytime clarity, hybrid for the middle ground. Pay attention to THC percentages: newcomers benefit from moderate-potency strains in the 15–20% range before progressing to the 25%+ heavyweights. Flowering duration also matters — shorter bloom windows reduce mould risk in humid coastal climates.' },
      { title: 'Feminised Seeds Compared to Autoflowers', content: 'Feminised photoperiod plants give the grower command over timing. You decide when to flip the light schedule, which lets you veg plants to whatever size your space allows. The payoff is heavier per-plant harvests — typically two to eight ounces indoors depending on training. Autoflowers are quicker and simpler but cap out at smaller individual yields. Plenty of experienced cultivators run both simultaneously — autoflowers filling gaps while feminised plants occupy the main canopy.' },
      { title: 'Cultivation Pointers for Feminised Seeds', content: 'Germinate with the paper towel method for visual confirmation of taproot emergence. Move seedlings into their first container early to minimise root disturbance later. Run an 18/6 light schedule during veg and build a robust root network before flipping to 12/12. Top or FIM at the fourth to fifth node to encourage lateral branching. Expect a 50–100% stretch once flowering starts — flip when plants reach roughly half your target finish height. Transition to bloom-phase nutrients as soon as pistils appear. Track trichome maturity with a jeweller\'s loupe for an accurately timed harvest.' },
    ],
    faqs: [
      { q: 'How do feminised seeds differ from regular seeds?', a: 'Regular seeds carry roughly equal odds of producing male or female plants. Feminised seeds are bred to yield 99.9% females, so virtually every germinated seed develops into a flower-bearing plant. This eliminates the time and resources spent identifying and discarding males.' },
      { q: 'Can a beginner handle feminised seeds?', a: 'Absolutely. Removing sex identification from the equation actually simplifies the grow. Pair feminised seeds with a straightforward nutrient schedule and a consistent light timer, and even first-time growers can produce a rewarding harvest.' },
      { q: 'Is it possible to take clones from feminised plants?', a: 'Yes — feminised plants make outstanding mother stock. Take cuttings during the vegetative phase to propagate genetically identical females. Cloning is a cost-effective strategy for scaling up your best-performing genetics without buying additional seeds.' },
      { q: 'What kind of harvest weight should I expect?', a: 'Indoor feminised plants commonly yield 30–120 grams per plant in a standard tent setup, scaling up with training. Outdoors in favourable Australian conditions, individual plants can produce 250–500+ grams depending on strain, space, and sunlight exposure. Our yield calculator provides a more precise estimate for your setup.' },
      { q: 'Which feminised strain do you recommend for a first grow?', a: 'Northern Lights Feminised is the go-to starter strain worldwide. It stays short, tolerates feeding errors, shrugs off mould, and finishes flowering in about eight weeks. White Widow and Blue Dream are strong runner-up options with equally forgiving temperaments.' },
      { q: 'Does feminisation reduce bud quality or potency?', a: 'Not at all. The feminisation process affects only the sex chromosome — it has zero impact on THC levels, terpene profiles, yield potential, or any other quality metric. A feminised seed of a given strain is genetically identical to its regular counterpart in every way that matters to the grower.' },
    ],
    relatedCategories: [
      { name: 'Feminised Indicas', slug: 'feminized-indicas' },
      { name: 'Feminised Sativas', slug: 'feminized-sativas' },
      { name: 'Feminised Hybrids', slug: 'feminized-hybrids' },
      { name: 'Autoflower Seeds', slug: 'autoflowering-seeds' },
      { name: 'High Yield Seeds', slug: 'best-strains-for-high-yield' },
      { name: 'Indoor Seeds', slug: 'best-strains-for-indoor-growing' },
    ],
  },
  'autoflowering-seeds': {
    h1: 'Autoflowering Cannabis Seeds Australia — Seed to Jar in Under 10 Weeks',
    intro: 'Autoflowering seeds take the complexity out of cannabis growing. Thanks to ruderalis genetics woven into every line, these plants shift into bloom on their own clock — no light-schedule manipulation, no sexing, no drama. Most varieties wrap up in eight to ten weeks from the moment the seed cracks, making them the fastest route to a finished harvest. Our autoflower range covers indica, sativa, and hybrid profiles at every potency level, all shipped discreetly to Australian addresses.',
    quickFacts: [
      { label: 'Full Cycle', value: '8–10 Weeks' },
      { label: 'Typical Height', value: '60–120 cm' },
      { label: 'Annual Indoor Runs', value: 'Up to 4' },
      { label: 'Ideal For', value: 'New Growers & Speed' },
    ],
    bottomSections: [
      { title: 'How Autoflowering Genetics Work', content: 'Every autoflower carries Cannabis ruderalis DNA — a subspecies that evolved under the extreme latitude of Central Russia, where summers are brief and daylight patterns are unreliable. Ruderalis adapted by flowering based on plant maturity rather than photoperiod. Modern breeders have crossed this trait into high-performance indica and sativa lines, producing compact plants that begin blooming roughly three to four weeks after germination without any change to the light schedule. Current-generation autoflowers reach THC levels that rival their photoperiod cousins while retaining the speed and compactness that define the category.' },
      { title: 'Forgiving Autoflower Strains for New Growers', content: 'Northern Lights Auto, White Widow Auto, and Blue Dream Auto sit at the top of the beginner list. They absorb overwatering, underfeeding, and temperature wobbles without collapsing. A 12–18 litre fabric pot, decent potting mix, and a basic LED panel are all you need to get started. Follow our germination guide for step-one instructions, then move through our beginner growing walkthrough for the rest of the journey from seedling to jar.' },
      { title: 'Picking an Autoflower for Your Setup', content: 'Grow space drives the decision. Compact indica autos stay under 80 cm and slot into small tents or cupboards. Taller sativa autos can stretch beyond a metre and benefit from roomier enclosures. Define your goal — high THC for potency, elevated CBD for wellness, or heavy yield for maximum weight — and match a strain accordingly. Also check listed cycle times: some fast-finishing autos are done in eight weeks, while larger varieties push ten to twelve. Outdoor growers in Australia can squeeze two to three successive auto plantings between October and March.' },
      { title: 'Autoflower Seeds vs Photoperiod Seeds — A Practical Comparison', content: 'Autoflowers bloom regardless of light hours, finish faster, and stay smaller. Photoperiod seeds need a deliberate 12/12 flip to start flowering, grow taller, and produce heavier individual harvests. On an annual basis, the gap narrows: three to four auto cycles per year indoors can match or exceed the total gram output of two photoperiod runs. Autoflowers cannot be cloned with practical results, while photoperiod plants make excellent mother stock. Pick autos when simplicity and speed matter most; pick photoperiods when per-plant yield and cloning are priorities.' },
      { title: 'Getting the Most From Autoflower Seeds', content: 'Sow directly into the final container — 12 to 18 litres is the sweet spot — to sidestep transplant shock. Airy, well-draining substrate (coco blends or light potting mixes) keeps roots happy. Start nutrients at quarter strength and ramp up slowly; autoflowers protest hard against overfeeding. Run lights for 18–20 hours daily from germination through harvest. Avoid topping unless you have auto-specific experience — low-stress training by bending and tying stems is the safer route to a level canopy. Water when the top centimetre of medium feels dry. Harvest when roughly 70–80% of trichome heads appear milky under magnification.' },
    ],
    faqs: [
      { q: 'How soon can I harvest autoflowering seeds?', a: 'The majority of autoflower varieties are harvestable eight to twelve weeks after the seed germinates. Compared to photoperiod genetics — which need a separate vegetative phase plus eight to eleven weeks of flowering — autoflowers shave weeks off the total timeline.' },
      { q: 'Do autoflowers perform well outdoors across Australia?', a: 'They thrive in every Australian climate zone. Plant them any time from early spring through late summer. The short lifecycle lets growers in warmer states such as Queensland and the Northern Territory complete two or three outdoor runs per season. Even in cooler Tasmania and Victoria, autos finish before the first autumn frosts hit.' },
      { q: 'What harvest weight do autoflowers typically produce?', a: 'Individual autoflower plants deliver roughly 30–120 grams depending on strain, pot size, and conditions. Under optimised indoor lighting, canopy-level yields reach 350–500 grams per square metre. The trade-off for smaller per-plant weight is faster turnaround and more harvests per calendar year.' },
      { q: 'Are autoflowers the smartest starting point for beginners?', a: 'For most newcomers, yes. Automatic flowering removes light-schedule management from the equation, compact plant size forgives space limitations, and the fast finish keeps motivation high. Common beginner missteps like irregular watering have less time to compound when the entire cycle wraps in ten weeks.' },
      { q: 'Is topping an autoflower plant worthwhile?', a: 'Experienced auto growers top successfully, but the fixed lifecycle means any setback from stress cannot be recovered by extending veg time. Low-stress training — gently bending and securing stems — delivers canopy-levelling benefits without the recovery gamble. It is the recommended approach for most growers.' },
      { q: 'What daily light hours work best for autoflowers?', a: 'Autoflowers perform optimally under 18–20 hours of daily light from seed to harvest. They can flower under any schedule, but more light hours translate to more photosynthesis and heavier buds. Unlike photoperiod plants, they never require a 12/12 dark period to initiate bloom.' },
    ],
    relatedCategories: [
      { name: 'Auto Indicas', slug: 'auto-flowering-indicas' },
      { name: 'Auto Sativas', slug: 'auto-flowering-sativas' },
      { name: 'Auto Hybrids', slug: 'auto-flowering-hybrids' },
      { name: 'Feminised Seeds', slug: 'feminized-seeds' },
      { name: 'Beginner Seeds', slug: 'mix-packs' },
      { name: 'Fast Flowering', slug: 'fast-flowering-seeds' },
    ],
  },
  'indica-seeds': {
    h1: 'Indica Cannabis Seeds — Deep Relaxation Genetics for Australian Growers',
    intro: 'Indica seeds descend from landrace genetics that evolved in the harsh mountain valleys of Afghanistan, Pakistan, and the Hindu Kush. They produce stocky, resin-heavy plants prized for full-body relaxation, pain management, appetite stimulation, and sleep support. Their naturally compact structure makes them a natural fit for indoor tents and limited spaces. Our indica collection covers everything from pure landrace cultivars to modern indica-dominant hybrids — all available with tracked Australian delivery and our germination guarantee.',
    quickFacts: [
      { label: 'Primary Effects', value: 'Body Relaxation' },
      { label: 'Typical Height', value: '60–150 cm' },
      { label: 'Bloom Duration', value: '7–9 Weeks' },
      { label: 'Ideal Use', value: 'Evening & Recovery' },
    ],
    bottomSections: [
      { title: 'Where Indica Genetics Come From', content: 'The indica lineage traces back to the Hindu Kush region — a corridor of high-altitude valleys spanning Afghanistan and northern Pakistan. Harsh winters, poor soil, and intense UV exposure shaped these plants into short, bushy growers with thick stems, broad leaves, and dense, trichome-encrusted flowers. The resin layer evolved as a protective mechanism against UV radiation and cold temperatures. When growers select indica seeds today, they are tapping into millions of years of natural adaptation for hardiness and concentrated cannabinoid production.' },
      { title: 'Indica Strains That Excel Indoors', content: 'The compact, bushy growth habit of indica genetics is tailor-made for enclosed growing spaces. Northern Lights remains the benchmark indoor indica — easy to manage, mould-tolerant, and generous with resin. Granddaddy Purple adds visual drama with deep purple colouring and a grape-forward terpene profile. Bubba Kush delivers a heavy, sedating stone with minimal plant management. Hindu Kush offers a window into pure landrace genetics. Under quality LED or HPS lighting with ScrOG or LST canopy management, most indica strains finish flowering within seven to nine weeks.' },
      { title: 'Finding the Right Indica for Your Goals', content: 'Define the outcome you want before browsing. For sleep support, lean toward heavy-hitters like Granddaddy Purple or Northern Lights — their myrcene-rich terpene profiles promote deep sedation. For pain management without total couch-lock, a balanced indica-hybrid such as Girl Scout Cookies offers relief with functional clarity. For flavour chasers, Purple Punch and Blueberry bring exceptional taste to the table. Keep an eye on THC figures — some modern indicas push past 25%, which can overwhelm newcomers. Starting in the 15–20% bracket and moving up is the sensible path.' },
      { title: 'Understanding the Indica vs Sativa Spectrum', content: 'Indica and sativa sit at opposite poles of the cannabis spectrum. Indicas deliver body-centric, sedating effects that quiet the mind and ease physical tension — ideal for winding down in the evening. Sativas fire up mental energy, creativity, and focus — better suited to daylight hours. Morphologically, indicas stay shorter with broad fan leaves and tightly packed flower clusters, while sativas stretch tall with narrow leaves and elongated bud structures. Nearly all contemporary genetics blend both lineages to varying degrees, but understanding the spectrum helps you zero in on the experience you want.' },
      { title: 'Cultivation Tips Specific to Indica Seeds', content: 'Height management is rarely an issue with indicas — their natural compactness is a built-in advantage. Direct your attention instead toward humidity control during late flowering. Dense indica buds trap moisture inside the flower structure, creating conditions where botrytis (bud rot) thrives. Hold relative humidity below 50% from mid-bloom onward and ensure strong airflow across the canopy. High-intensity lighting during flower rewards you with heavier trichome coverage. Strategic defoliation of inner fan leaves improves both air movement and light penetration to lower bud sites.' },
    ],
    faqs: [
      { q: 'What sensations do indica strains produce?', a: 'Indica genetics are associated with thorough physical relaxation, muscle tension relief, appetite stimulation, and drowsiness. They are the go-to choice for nighttime use. Particularly potent indicas can produce a pronounced body-heavy sensation often described as couch-lock.' },
      { q: 'Are indicas simpler to cultivate than sativas?', a: 'In most respects, yes. Indica plants stay shorter and stockier, which simplifies canopy management in confined spaces. They also tend to flower faster — seven to nine weeks versus ten or more for sativas — and tolerate cooler temperatures more readily.' },
      { q: 'Which indica is most effective for sleep?', a: 'Granddaddy Purple, Northern Lights, and Hindu Kush consistently top the list for sleep-oriented cultivation. Their elevated myrcene content and heavy body effects promote deep relaxation that transitions naturally into restful sleep.' },
      { q: 'Will indica seeds grow well outdoors in Australia?', a: 'They handle Australian outdoor conditions comfortably. Shorter flowering windows mean they finish well ahead of autumn cold snaps. Cool overnight temperatures in March and April actually benefit certain genetics — strains like Purple Kush develop vivid purple pigmentation when night temps dip.' },
      { q: 'How high does THC go in indica genetics?', a: 'Modern indica THC levels range from roughly 15% to 30%. Heritage strains like Northern Lights average 18–22%, while newer powerhouses such as Gorilla Glue push past 28%. CBD-dominant indica options are also available for those seeking lower psychoactive intensity.' },
      { q: 'What yields do indoor indica plants deliver?', a: 'Under good lighting and canopy training, indoor indica grows produce 350–500 grams per square metre. Individual plant output sits around 30–120 grams in a standard tent, or more with aggressive training. Outdoor indica plants can reach 250–500 grams per plant with adequate sun and space.' },
    ],
  },
  'sativa-seeds': {
    h1: 'Sativa Cannabis Seeds — Cerebral, Uplifting Genetics for Daytime Enjoyment',
    intro: 'Sativa genetics trace their origins to equatorial landrace regions — Thailand, Colombia, Central Africa, and Mexico — where extended growing seasons sculpted tall, vigorous plants with elongated flower structures and stimulating cerebral effects. Australian growers reach for sativa seeds when they want creativity, focus, social energy, and daytime functionality. Our sativa collection ranges from pure Haze lineages and tropical landraces to modern sativa-dominant hybrids bred for indoor manageability without diluting the signature sativa high.',
    quickFacts: [
      { label: 'Primary Effects', value: 'Cerebral & Uplifting' },
      { label: 'Typical Height', value: '120–300+ cm' },
      { label: 'Bloom Duration', value: '10–14 Weeks' },
      { label: 'Ideal Use', value: 'Daytime & Creative Work' },
    ],
    bottomSections: [
      { title: 'The Origins of Sativa Genetics', content: 'Sativa landraces evolved near the equator, where twelve-hour days persist year-round and growing seasons stretch beyond six months. Thai, Colombian, Mexican, and African landraces developed towering structures, narrow fan leaves, and wispy, resinous flower clusters adapted to high humidity and intense sunlight. The effect profile leans heavily cerebral: mental stimulation, mood elevation, creative bursts, and sustained energy. Artists, musicians, writers, and anyone who values an active, clear-headed cannabis experience gravitates toward sativa genetics for these qualities.' },
      { title: 'Sativa Varieties Suited to Australian Growing', content: 'Our sativa shelves carry Jack Herer for razor-sharp mental clarity, Sour Diesel for unrelenting energy, Amnesia Haze for creative euphoria, and Super Lemon Haze for a citrus-drenched mood lift. For indoor cultivators worried about vertical space, sativa-dominant hybrids like Blue Dream and Green Crack offer manageable heights while keeping the sativa headspace intact. Outdoor growers across tropical and subtropical Australia — Queensland, Northern Territory, and Western Australia — can run full-blooded sativa genetics to their natural conclusion under warm sun.' },
      { title: 'Narrowing Down the Right Sativa', content: 'Your grow environment is the first filter. Undiluted sativas can soar past three metres — they demand either tall indoor spaces or open outdoor gardens. Sativa-dominant hybrids (60–70% sativa) deliver a workable compromise: shorter plants, faster bloom, and genuine sativa effects. For effect-specific selection, try Jack Herer for concentration, Sour Diesel for raw energy, or Amnesia Haze for creative flow. Always check bloom duration — pure sativas can run twelve to fourteen weeks in flower, while hybridised lines finish in nine to eleven.' },
      { title: 'Sativa vs Indica — Two Ends of the Spectrum', content: 'Sativas fire up mental energy and creative thinking — perfect for active hours, social gatherings, and tasks that benefit from an alert mind. Indicas slow things down, easing the body into relaxation and quiet. Hybrids sit somewhere between the two poles. Your ideal pick depends on when and why you consume. Many cultivators grow both, reserving sativa harvests for daytime use and indica harvests for winding down after dark.' },
      { title: 'Practical Growing Advice for Sativa Seeds', content: 'Height control is the central challenge. Top or FIM plants early and repeatedly to force lateral branching. Deploy a ScrOG net to flatten the canopy into a uniform plane. Flip to 12/12 sooner than you would with indicas — sativas can double or triple in height during the flowering stretch. Keep nitrogen available through early bloom to fuel the stretch without deficiency. Sativas prefer slightly warmer temperatures (24–30°C) and manage higher humidity better than indicas during vegetative growth, though late-flower humidity should still stay below 55%.' },
    ],
    faqs: [
      { q: 'What kind of experience do sativa seeds produce?', a: 'Sativa genetics deliver cerebral, uplifting effects — heightened energy, enhanced creativity, sharper focus, mood elevation, and social ease. They are widely chosen for daytime activity, artistic projects, and any situation where mental engagement matters.' },
      { q: 'Can sativa strains be grown indoors successfully?', a: 'Yes, though height management is essential. Pure sativas can reach two to three metres. Indoor growers should choose sativa-dominant hybrids or apply aggressive canopy training techniques — topping, LST, and ScrOG — to keep plants within tent height limits. Flip to flower early to account for the stretch.' },
      { q: 'Which sativa offers the strongest energy boost?', a: 'Sour Diesel, Green Crack, and Jack Herer consistently rank as the most energising sativas. They produce clear-headed, motivating effects without paranoia or jitteriness, making them popular choices for morning and midday sessions.' },
      { q: 'How long is the flowering phase for sativa genetics?', a: 'Pure sativa lines flower for ten to fourteen weeks — noticeably longer than indicas at seven to nine weeks. Sativa-dominant hybrids typically wrap up in nine to eleven weeks. The extended wait is offset by potent cerebral effects and generous yields from larger plants.' },
      { q: 'Are sativa plants more difficult to cultivate?', a: 'They require more vertical management and patience owing to longer bloom durations, but they are not inherently harder to grow. Sativa-dominant hybrids have been specifically selected for indoor friendliness while preserving the sativa effect profile.' },
      { q: 'What THC percentages do sativa strains achieve?', a: 'Sativa THC ranges from roughly 15% to 28%. High-potency cultivars like Ghost Train Haze and Bruce Banner push past 25%. Several sativa lines also carry meaningful THCV content, a minor cannabinoid linked to their characteristically stimulating, appetite-moderating effects.' },
    ],
  },
  'hybrid': {
    h1: 'Hybrid Cannabis Seeds Australia — Tailored Indica/Sativa Blends',
    intro: 'Hybrid cannabis seeds bring together indica body effects and sativa mental stimulation in a single plant, offering flexibility that pure strains cannot match. From indica-leaning relaxation through balanced 50/50 profiles to sativa-dominant creative fuel, our hybrid catalogue covers every shade in between. Iconic genetics like Girl Scout Cookies, Gorilla Glue, and Wedding Cake all live in this category — the most popular segment of the cannabis seed market worldwide.',
    quickFacts: [
      { label: 'Effect Profile', value: 'Versatile & Tunable' },
      { label: 'Typical Height', value: '90–180 cm' },
      { label: 'Bloom Duration', value: '8–10 Weeks' },
      { label: 'Ideal Use', value: 'Any Time of Day' },
    ],
    bottomSections: [
      { title: 'How Hybrid Genetics Are Created', content: 'Hybrid seeds result from crossing indica and sativa parent plants, combining traits from both lineages. Breeders select parents for specific characteristics — body relaxation from one side, mental clarity from the other, particular terpene profiles, yield capacity, or flowering speed. After multiple generations of selective refinement, the resulting hybrid stabilises into a consistent, reproducible genetic package. The spectrum runs from 60/40 indica-dominant to 60/40 sativa-dominant, with true 50/50 balanced lines in the centre. This breadth makes hybrids the most versatile and widely grown category globally.' },
      { title: 'Standout Hybrids for Indoor and Outdoor Grows', content: 'Girl Scout Cookies pairs euphoria with deep relaxation. Gorilla Glue delivers potency and yield in equal measure. Wedding Cake wraps rich flavour around a powerful stone. Blue Dream balances ease of growing with reliable, enjoyable effects. OG Kush remains the benchmark classic. Most hybrids grow to moderate heights — 90 to 180 cm — and finish flowering in eight to ten weeks, keeping them manageable for indoor tents, outdoor plots, and greenhouse cultivation across every Australian state and territory.' },
      { title: 'Selecting a Hybrid That Matches Your Preferences', content: 'Pin down whether you lean toward body relaxation or mental uplift. Check the indica/sativa split listed for each strain — a 70/30 indica-dominant hybrid feels markedly different from a 70/30 sativa-dominant one. Evening-oriented growers should favour indica-heavy crosses. Daytime users benefit from sativa-leaning genetics. Balanced 50/50 lines offer genuine versatility across the clock. From there, refine your choice using THC content, terpene profile, and bloom duration.' },
      { title: 'Hybrids vs Pure Strains — Where Blends Shine', content: 'Pure indicas and sativas deliver predictable, category-specific outcomes. Hybrids offer something pures cannot: custom-blended effect profiles engineered by breeders over many generations. A well-designed hybrid can pair indica body relief with sativa mental clarity, or sativa energy with indica appetite stimulation — combinations that do not exist in single-lineage genetics. For most growers, hybrids deliver the most satisfying balance of desired effects, practical growing characteristics, and harvest potential.' },
      { title: 'Cultivation Notes for Hybrid Seeds', content: 'Growing requirements lean toward whichever parent genetics dominate. Indica-heavy hybrids stay shorter and appreciate slightly cooler temperatures during bloom. Sativa-heavy crosses grow taller and enjoy warmth. Most hybrids respond well to standard indoor protocols: 18/6 during veg, 12/12 for flower, moderate nutrient programmes, and basic canopy training. Their mixed genetic heritage often makes them more resilient to environmental stress than pure lines — one of the practical reasons hybrids dominate beginner and expert gardens alike.' },
    ],
    faqs: [
      { q: 'What exactly is a hybrid cannabis strain?', a: 'A hybrid results from crossing indica and sativa parents. The offspring can lean toward one side or sit evenly balanced. Hybrids offer effect combinations that range from body-dominant relaxation with a touch of mental spark through to energising cerebral highs softened by physical comfort.' },
      { q: 'Do hybrids suit first-time growers?', a: 'Many hybrids rank among the most beginner-friendly genetics available. Strains like Blue Dream and Girl Scout Cookies combine compact growth with stress tolerance. Their mixed genetics often translate to greater resilience against common growing errors.' },
      { q: 'Which hybrid strain sells the most?', a: 'Girl Scout Cookies, Gorilla Glue, Blue Dream, OG Kush, and Wedding Cake dominate our hybrid sales in Australia. Their consistent performance, balanced effects, and reliable growing behaviour keep them at the top of the charts year after year.' },
      { q: 'What harvest weight can I expect from hybrid genetics?', a: 'Hybrid indoor yields typically range from 400–600 grams per square metre. Outdoor hybrid plants produce 500–1000+ grams each when given space, sunlight, and a full growing season. Several high-yield hybrid lines have been specifically selected for maximum harvest weight.' },
      { q: 'Will hybrids grow in both indoor and outdoor environments?', a: 'Hybrids are the most adaptable category across all environments. Moderate heights, balanced genetics, and general resilience make them suitable for tents, grow rooms, outdoor plots, greenhouses, and balcony containers alike.' },
      { q: 'How do I predict the effects of a given hybrid?', a: 'Check the indica/sativa percentage. Indica-dominant crosses produce stronger body relaxation with mild mental engagement. Sativa-dominant ones deliver more cerebral energy alongside gentle physical ease. True 50/50 hybrids split both sensations roughly evenly.' },
    ],
  },
  'cbd-strains': {
    h1: 'CBD Cannabis Seeds — Therapeutic, Low-THC Genetics for Australian Growers',
    intro: 'CBD seeds produce plants rich in cannabidiol with reduced tetrahydrocannabinol content — the therapeutic side of cannabis without intense psychoactive effects. Our CBD range covers ratios from 1:1 CBD:THC for mild, functional relief through to 20:1 lines that are effectively non-intoxicating. CBD levels span 5% to 20%+, with strains suited to pain management, anxiety reduction, inflammation, and general wellness. Discreet Australian shipping on every order.',
    quickFacts: [
      { label: 'CBD Range', value: '5–20%+' },
      { label: 'THC Level', value: 'Minimal to Moderate' },
      { label: 'Effect Character', value: 'Calming & Therapeutic' },
      { label: 'Ideal For', value: 'Wellness & Medical' },
    ],
    bottomSections: [
      { title: 'What CBD Seeds Produce', content: 'CBD seeds are bred to express high levels of cannabidiol — a non-intoxicating cannabinoid that interacts with the endocannabinoid system to produce anti-inflammatory, anxiolytic, and analgesic effects without the psychoactive intensity of THC. CBD-rich genetics range from nearly zero-THC lines (20:1+ ratios) through to balanced 1:1 profiles where mild euphoria accompanies the therapeutic benefits. These seeds appeal to growers interested in natural, plant-based wellness — particularly those managing chronic pain, anxiety, inflammation, or seizure conditions.' },
      { title: 'Leading CBD Strains for Home Cultivation', content: 'ACDC leads the ultra-low-THC bracket with a 20:1 CBD:THC ratio and negligible psychoactivity. Harlequin sits at roughly 5:2 CBD:THC, providing gentle mood lift alongside therapeutic relief. Charlotte\'s Web carries deep roots in seizure management and remains one of the most recognised CBD cultivars worldwide. Cannatonic offers a balanced 1:1 ratio for growers who want a mild euphoric layer on top of their CBD effects. For those who value the entourage effect — the synergistic interplay between cannabinoids and terpenes — balanced-ratio strains typically deliver the richest therapeutic experience.' },
      { title: 'Choosing a CBD Strain by Ratio and Application', content: 'Start with the CBD:THC ratio. If you want zero noticeable high, target 20:1 or above. If mild functional effects sound appealing, a 1:1 ratio strikes the balance. Next, check total CBD percentage — higher is not universally better; the optimal level depends on your intended use and individual sensitivity. Consider how you plan to consume the harvest: some genetics suit smoking or vaping, others are better candidates for extraction into oils and tinctures. Finally, review flowering time and plant size to confirm they fit your growing space.' },
      { title: 'CBD and THC — How They Interact', content: 'CBD and THC are both cannabinoids produced by the same plant, but they engage the endocannabinoid system differently. THC binds directly to CB1 receptors, producing psychoactive effects. CBD modulates those receptors indirectly, delivering therapeutic outcomes without intoxication. When both cannabinoids are present simultaneously, CBD tempers the anxiety and paranoia that high-THC consumption can trigger — a synergy researchers call the entourage effect. This is why full-spectrum CBD strains with a small THC presence often provide more nuanced relief than pure CBD isolates.' },
      { title: 'Growing Advice for CBD Genetics', content: 'CBD strains grow much like their THC-dominant relatives, with a few nuances worth noting. Root-zone pH has a measurable influence on CBD biosynthesis — keep it consistent. Harvest timing is critical because CBD concentrations peak slightly earlier in the flowering cycle than THC does. Leaving plants to run too long can shift the ratio toward THC at the expense of CBD. Lab testing or home cannabinoid kits help verify your ratio if precision matters. Most CBD cultivars are hardy, forgiving growers suitable for all skill levels — making them an excellent entry point for therapeutic cultivation.' },
    ],
    faqs: [
      { q: 'Will CBD strains produce a high?', a: 'CBD-dominant genetics with ratios of 20:1 or higher are effectively non-intoxicating. Balanced 1:1 CBD:THC strains produce mild, manageable effects that most users describe as calming rather than impairing.' },
      { q: 'Which CBD cultivar is best for anxiety?', a: 'ACDC and Harlequin are consistently recommended for anxiety management. Their elevated CBD and low THC promote calm without psychoactive interference. Cannatonic offers a balanced alternative for those who benefit from a gentle mood lift alongside anxiety relief.' },
      { q: 'Are CBD seeds legal to purchase in Australia?', a: 'Cannabis seeds are sold as adult novelty souvenirs across Australia. CBD products have gained increasing legal recognition — low-dose CBD became available over the counter through pharmacies in 2021. Cultivation regulations still vary by state and territory. Always check your local jurisdiction before germinating.' },
      { q: 'What CBD percentages do these genetics reach?', a: 'Our CBD strains produce 5–20%+ CBD depending on the variety. ACDC can hit 19% CBD with under 1% THC. Harlequin averages 8–15% CBD. Final concentrations are influenced by growing conditions, harvest timing, and post-harvest curing.' },
      { q: 'Can CBD seeds be grown indoors?', a: 'Absolutely. CBD genetics thrive under any standard indoor setup — tents, dedicated rooms, even well-lit windowsills for smaller plants. They follow the same environmental requirements as THC-dominant cannabis and respond to all the same growing techniques.' },
      { q: 'What is the entourage effect people mention with CBD?', a: 'The entourage effect describes the synergistic interaction between cannabinoids (CBD, THC, CBG, CBN) and terpenes when consumed together. These compounds amplify and modulate each other\'s therapeutic effects. Full-spectrum CBD strains leverage this synergy more effectively than isolated CBD products.' },
    ],
  },
  'high-tch-seeds': {
    h1: 'High THC Cannabis Seeds — 25%+ Potency Genetics Shipped Across Australia',
    intro: 'High-THC genetics are engineered for maximum cannabinoid output, consistently testing above 25% tetrahydrocannabinol. These seeds cater to experienced cultivators and seasoned consumers who appreciate intense euphoria, deep sedation, and the pronounced therapeutic effects that come with elevated potency. Our high-THC catalogue features proven performers like Gorilla Glue, Bruce Banner, and Girl Scout Cookies — all available with discreet Australian delivery and germination guarantee.',
    quickFacts: [
      { label: 'THC Range', value: '25–32%+' },
      { label: 'Intensity', value: 'Very High' },
      { label: 'Suited To', value: 'Experienced Consumers' },
      { label: 'Grow Difficulty', value: 'Easy to Moderate' },
    ],
    bottomSections: [
      { title: 'What Drives THC to 25%+', content: 'THC concentration is fundamentally a genetic trait — trichome density, gland size, and cannabinoid synthesis efficiency are encoded in the DNA. Decades of selective breeding have produced lines where these traits are maximised, pushing resin production well past what nature intended. Plants in the 25–30%+ bracket develop exceptionally dense trichome coverage across calyxes, sugar leaves, and even fan leaf surfaces. The potency ceiling is set by genetics; the grower\'s job is to provide the conditions that let the plant reach that ceiling.' },
      { title: 'Top High-THC Genetics for Australian Cultivators', content: 'Gorilla Glue (28–32% THC) delivers legendary resin production alongside heavy-hitting effects. Bruce Banner (25–29% THC) earns its namesake with explosive potency. Girl Scout Cookies (25–28% THC) pairs euphoria with a rich terpene profile. Ghost Train Haze (25–28% THC) leads the sativa potency bracket. Godfather OG (28–34% THC) sits near the top of the entire THC scale. These strains have been validated across hundreds of thousands of grows worldwide.' },
      { title: 'Selecting a High-THC Strain Thoughtfully', content: 'Start with your tolerance. If you are stepping into the high-potency tier for the first time, strains in the 25–27% band offer a manageable introduction before graduating to 30%+ varieties. Consider the effect axis: high-THC indicas produce heavy physical sedation, high-THC sativas deliver intense cerebral fireworks, and high-THC hybrids split the difference. Some high-potency genetics are straightforward to cultivate, while others demand more precision to reach their ceiling — check individual strain descriptions for cultivation difficulty ratings.' },
      { title: 'Higher THC Does Not Always Mean Better', content: 'A raw THC number is only part of the picture. Terpene diversity, minor cannabinoid content (CBG, CBN, THCV), and curing quality all shape the experience profoundly. A well-grown 20% strain with a rich, layered terpene profile can deliver a more nuanced and enjoyable session than a crudely finished 30% strain with flat terps. High-THC seeds serve growers who specifically want maximum intensity — but discerning consumers increasingly value the total package over a single percentage point.' },
      { title: 'Maximising THC Output Through Growing Technique', content: 'Genetics set the ceiling; environment determines how close you get. Push light intensity — flowering plants need 600+ PPFD across the canopy for maximum trichome activation. Hold temperatures at 24–28°C during bloom. Drop humidity to 40% in the final fortnight to stress glands into overdrive resin production. A plain-water flush in the last seven to ten days clears residual nutrients from the flower tissue. Harvest when trichome heads are 70–80% milky for peak THC. Slow drying at 16°C and extended jar curing lock in potency that quick-dried flowers cannot match.' },
    ],
    faqs: [
      { q: 'Are high-THC strains more challenging to grow?', a: 'Not inherently. Several of the highest-testing genetics — Gorilla Glue, Girl Scout Cookies, Northern Lights — are actually forgiving, resilient growers. Potency is genetically programmed; with sensible environmental control, intermediate cultivators can achieve impressive THC results.' },
      { q: 'Which strain reaches the highest THC levels?', a: 'Godfather OG and Gorilla Glue routinely produce phenotypes testing above 30%, with some touching 34%. Realised THC varies with grow conditions, phenotype selection, harvest timing, and curing quality.' },
      { q: 'Should a beginner grow high-THC seeds?', a: 'For cultivation, many high-THC strains are perfectly suitable for newer growers. For consumption, newcomers should start with small amounts and wait before re-dosing. High-THC flowers can be overwhelmingly potent for those without established tolerance.' },
      { q: 'Do high-THC strains sacrifice yield for potency?', a: 'Not as a rule. Gorilla Glue and Bruce Banner are both heavy yielders and heavy hitters. Some boutique ultra-potency genetics do prioritise resin over bulk, but many mainstream high-THC strains deliver strong numbers on both fronts.' },
      { q: 'How do I push THC as high as possible?', a: 'Provide intense lighting (quality LED or HPS at 600+ PPFD), maintain 24–28°C during bloom, reduce late-flower humidity to around 40%, and harvest at peak trichome maturity — mostly milky heads with early amber. A slow dry and extended cure preserve maximum cannabinoid content.' },
      { q: 'What do high-THC strains feel like?', a: 'Effects are amplified across the board: stronger euphoria, deeper body sedation, more pronounced appetite stimulation, and more intense psychoactive experiences than moderate-THC genetics. The specific character — cerebral vs physical — depends on the indica/sativa balance of the strain.' },
    ],
  },
  'kush-seeds': {
    h1: 'Kush Cannabis Seeds — Legendary Mountain Genetics for Australian Gardens',
    intro: 'Kush genetics trace a direct line to the Hindu Kush mountain range and carry the earthy, piney, and citrus-tinged terpene signatures that shaped modern cannabis culture. OG Kush, Bubba Kush, Purple Kush, and their descendants deliver dependable relaxation, dense resin production, and a growing profile that suits Australian conditions well. Browse our full kush collection — from pure landrace to contemporary OG-lineage crosses.',
    quickFacts: [
      { label: 'Heritage', value: 'Hindu Kush Mountains' },
      { label: 'Effect Profile', value: 'Heavy Physical Ease' },
      { label: 'Terpene Notes', value: 'Earth, Pine, Lemon' },
      { label: 'Ideal Use', value: 'Evening & Pain Relief' },
    ],
    bottomSections: [
      { title: 'The Hindu Kush Heritage', content: 'Kush landrace genetics originated in the rugged valleys between Afghanistan and Pakistan, where harsh winters, arid summers, and intense UV exposure shaped extraordinarily resilient plants. Short, dense, and coated in protective resin, these mountain cultivars survived conditions that would kill most other cannabis genetics. That hardiness transfers directly to modern kush strains — compact structures, thick stems, heavy trichome layers, and the iconic earthy-piney-citrus flavour palette that remains the gold standard among connoisseurs worldwide.' },
      { title: 'Premier Kush Strains in Our Catalogue', content: 'OG Kush remains the definitive expression of the lineage — a lemon-pine-fuel terpene signature recognised globally. Bubba Kush leans deeper into sedation with a rich, coffee-tinged flavour. Purple Kush develops striking violet colouring and delivers grape-forward taste alongside heavy body effects. Master Kush won back-to-back Amsterdam Cannabis Cup awards. Hindu Kush preserves the original landrace experience. For contemporary twists, Skywalker Kush, Critical Kush, and Vanilla Kush layer modern terpene complexity over classic kush foundations.' },
      { title: 'Matching a Kush Strain to Your Preferences', content: 'Classic kush genetics sit firmly on the indica side and deliver substantial body relaxation. For the deepest sedation, look at Bubba Kush or Hindu Kush. For a slightly more balanced experience with cerebral engagement, OG Kush is the clear choice. Purple Kush adds bag appeal through dramatic colour expression. Yield-oriented growers should consider Critical Kush or Master Kush, which produce notably heavier harvests. Most kush strains are beginner-to-intermediate friendly in terms of cultivation difficulty.' },
      { title: 'Kush vs Haze — Opposite Poles of Cannabis', content: 'Kush and Haze represent the two foundational pillars of cannabis genetics. Kush lines are indica-dominant, compact, quick to flower, and physically sedating. Haze strains sit on the sativa side — tall, slow to bloom, and cerebrally electrifying. Kush appeals to indoor growers and evening consumers. Haze suits outdoor cultivators in warm climates and daytime users. A huge number of modern hybrids bridge the two by crossing kush and haze parents for effect profiles that borrow from both camps.' },
      { title: 'Growing Kush Seeds in Australia', content: 'Kush genetics are compact and dense-budding by nature — a natural fit for indoor tents and grow rooms. Supply strong light during flowering and you will be rewarded with thick trichome carpets across every bud surface. Manage humidity carefully once flowers begin packing on density; dense kush buds hold moisture and invite botrytis if airflow is insufficient. Nighttime temperature drops during late flower can trigger purple pigmentation in genetically predisposed varieties. Most kush strains complete their bloom phase in eight to nine weeks.' },
    ],
    faqs: [
      { q: 'What sets kush genetics apart from other strains?', a: 'Dense, resinous flower structures, an earthy-piney-citrus terpene palette, and potent physical relaxation define the kush family. Their mountain heritage gives them robust resilience that translates to reliable growing performance. Kush genetics form the backbone of a huge proportion of modern hybrid breeding.' },
      { q: 'How does OG Kush differ from other kush varieties?', a: 'OG Kush is a specific cultivar that emerged in California during the early 1990s. Its hallmark lemon-pine-fuel terpene profile is distinct from the drier, earthier tones of Bubba Kush, the grape notes of Purple Kush, or the incense-like character of Hindu Kush. Despite shared kush ancestry, each has a unique flavour identity.' },
      { q: 'Are kush strains suitable for newer growers?', a: 'Most kush genetics are naturally compact, forgiving, and fast-finishing — qualities that make them well-suited to growers still building their skills. Northern Lights (a kush descendant) and Master Kush are particularly accommodating for those with limited experience.' },
      { q: 'What effects should I expect from kush strains?', a: 'Expect pronounced physical relaxation, stress dissolution, appetite enhancement, and drowsiness. Kush strains are evening-oriented genetics used for winding down, managing pain, and transitioning into sleep. OG Kush adds a mild cerebral dimension to the physical base.' },
      { q: 'How productive are kush plants?', a: 'Yields vary across the family. OG Kush produces moderate harvests (350–450 g/m\u00B2 indoors). Critical Kush is a heavy producer (500–600 g/m\u00B2). Outdoor kush plants deliver 400–800 grams per plant depending on strain, climate, and growing technique.' },
      { q: 'Which terpenes dominate kush flower?', a: 'Kush terpene profiles lean heavily on myrcene (earthy, musky), caryophyllene (black pepper warmth), limonene (citrus brightness), and pinene (pine freshness). OG Kush\'s distinctive fuel-lemon-pine blend remains one of the most sought-after terpene signatures in the cannabis world.' },
    ],
  },
  'mix-packs': {
    h1: 'Cannabis Seed Mix Packs — Sample Multiple Genetics in One Order',
    intro: 'Mix packs bundle three to five curated strains into a single discounted order. They are the most cost-effective way to explore different genetics side by side — ideal for growers who want to discover their favourites or simply keep their garden diverse. Each mix pack groups compatible strains by theme: indica, sativa, autoflower, high-THC, CBD, or beginner-friendly combinations.',
    quickFacts: [
      { label: 'Seeds Per Pack', value: '3–10 Seeds' },
      { label: 'Varieties Included', value: '3–5 Strains' },
      { label: 'Pricing', value: 'Bundle Discount' },
      { label: 'Ideal For', value: 'Exploration & Beginners' },
    ],
    bottomSections: [
      { title: 'The Value Proposition of Mix Packs', content: 'Purchasing individual seed packs of three to five different strains costs significantly more than a themed mix pack containing the same number of genetics. Beyond the dollar savings, mix packs offer a structured way to compare strains in the same environment — side-by-side growing reveals differences in vigour, flowering speed, bud structure, and final flavour that reviews alone cannot convey. Beginners gain exposure to multiple genetics in a single cycle, while experienced growers use mix packs to keep their gardens varied and their palates engaged.' },
      { title: 'Mix Packs Grouped by Goal', content: 'Our themed bundles target specific growing intentions. The Indica Mix suits relaxation seekers. The Sativa Mix caters to energy and creativity. The High THC Mix is built for potency hunters. The Autoflower Mix gives beginners and speed-focused growers the fastest path to harvest diversity. The CBD Mix targets therapeutic cultivators. Every seed inside a mix pack is drawn from the same premium inventory as our single-strain listings — identical genetics, identical storage conditions, identical germination guarantee.' },
      { title: 'Growing Several Strains in One Space', content: 'Running multiple genetics under the same roof requires a small amount of planning. Group strains with similar bloom durations for synchronised harvesting. Match height profiles to avoid tall plants shading short ones — or use training to level the canopy. Autoflower mix packs are the simplest to co-grow because each plant runs on its own internal clock regardless of the light schedule. For photoperiod mixes, LST and ScrOG netting smooth out height differences across different genetics.' },
    ],
    faqs: [
      { q: 'Which strains are included in a mix pack?', a: 'Each mix pack contains a curated set of strains grouped by theme — indica, sativa, beginner, high-THC, CBD, or autoflower. Specific genetics vary by pack but always come from our premium catalogue.' },
      { q: 'Do mix packs actually save money?', a: 'Yes — typically 15–25% compared to purchasing the same strains individually. The bundle pricing makes mix packs the most economical route to building variety in your seed collection.' },
      { q: 'Are mix packs a good starting point for beginners?', a: 'Autoflower mix packs are specifically curated for newcomers. They pair forgiving genetics with the simplicity of automatic flowering, letting you grow several strains at once while learning what suits your preferences and setup.' },
      { q: 'Can all the strains in a mix pack grow together?', a: 'Our mixes are curated with growing compatibility in mind. Autoflower bundles are the easiest to co-grow — each plant follows its own timeline. Photoperiod bundles may need minor canopy management to account for height variation between strains.' },
    ],
  },
  'best-seller': {
    h1: 'Best Selling Cannabis Seeds — Australia\'s Most Ordered Strains',
    intro: 'These are the genetics Australian growers come back to again and again. Our best sellers have earned their ranking through proven germination rates, consistent harvests, excellent flavour, and overwhelmingly positive grower feedback. From heritage favourites like OG Kush and Northern Lights to contemporary hits like Gelato and Wedding Cake — this page collects the strains with the strongest track record across our 1,600+ catalogue.',
    quickFacts: [
      { label: 'Avg Customer Rating', value: '4.8/5' },
      { label: 'Germination Consistency', value: '95%+' },
      { label: 'Orders Shipped', value: '200,000+' },
      { label: 'Ranked By', value: 'Repeat Purchase Rate' },
    ],
    bottomSections: [
      { title: 'Why Best Sellers Deserve Your Attention', content: 'A strain becomes a best seller by delivering on its promises over thousands of individual grows. That volume of real-world validation creates a safety net for your investment: feeding schedules, training tips, troubleshooting guides, and harvest-timing benchmarks are readily available from the broader growing community. When you choose a top-selling strain, you are not experimenting — you are following a path that has been walked and documented by growers in climates similar to your own.' },
      { title: 'Our Consistently Top-Ordered Genetics', content: 'Gorilla Glue — extreme potency paired with heavy production. Girl Scout Cookies — the hybrid that redefined flavour-forward cannabis. Blue Dream — the most balanced, beginner-friendly strain on the market. Northern Lights — the undisputed easiest indoor grow. Wedding Cake — rich terpenes layered over high THC. OG Kush — the strain that needs no introduction. Gelato — dessert-grade terpene complexity. White Widow — a Dutch coffeeshop icon that keeps proving itself generation after generation. These genetics perform reliably across all experience levels.' },
      { title: 'Using Best-Seller Data to Make Smarter Choices', content: 'Match best sellers to your experience bracket. Newcomers thrive with Northern Lights, Blue Dream, or White Widow — forgiving genetics with deep community support. Intermediate growers can step into Girl Scout Cookies, OG Kush, or Gorilla Glue for bigger yields and richer flavour profiles. Advanced cultivators chasing peak potency and terpene expression should explore Gelato, Wedding Cake, or Bruce Banner. Every best seller is available in both autoflowering and feminised photoperiod formats.' },
    ],
    faqs: [
      { q: 'Which single strain outsells everything else?', a: 'Gorilla Glue, Girl Scout Cookies, and Blue Dream trade the top position regularly. Together they offer a potency-flavour-balance trifecta that resonates across every growing skill level and consumption preference.' },
      { q: 'Why are popular strains particularly good for beginners?', a: 'Widely grown strains accumulate an enormous pool of community knowledge — feeding charts, environmental benchmarks, grow journals, and troubleshooting threads. This resource base makes first-time growing considerably less daunting than starting with an obscure, undocumented genetic.' },
      { q: 'Do best sellers come in autoflower versions?', a: 'Yes. The vast majority of our top sellers are available as both feminised photoperiod and autoflowering seeds. Auto versions maintain the parent strain\'s signature effects and flavours while finishing in eight to ten weeks from seed.' },
    ],
  },
  'best-strains-for-anxiety': {
    h1: 'Cannabis Seeds for Anxiety Relief — Calming Genetics Shipped to Australia',
    intro: 'These strains are curated specifically for their anxiolytic properties. Whether you prefer the zero-psychoactivity of high-CBD cultivars or the gentle functional calm of balanced CBD:THC ratios, our anxiety relief collection focuses on genetics proven to help with stress, nervous tension, and restlessness. Terpene profiles rich in linalool, myrcene, and caryophyllene underpin the calming character. Available for discreet delivery across Australia.',
    quickFacts: [
      { label: 'Optimal Cannabinoid', value: 'CBD or Balanced' },
      { label: 'Key Terpenes', value: 'Linalool & Myrcene' },
      { label: 'Effect Character', value: 'Calm & Tension Relief' },
      { label: 'Recommended Type', value: 'Indica or CBD' },
    ],
    bottomSections: [
      { title: 'What Makes Certain Strains Effective for Anxiety', content: 'Anxiety-relieving cannabis relies on a specific interplay between cannabinoids and terpenes. CBD-dominant strains (ACDC, Harlequin) dampen anxiety through CB1 receptor modulation without producing psychoactive effects. Balanced 1:1 CBD:THC genetics deliver mild relaxation alongside gentle mood enhancement. Indica cultivars high in the terpenes myrcene and linalool promote physical calm that quiets an overactive mind. The critical factor for anxiety-prone individuals is avoiding high-THC sativa genetics, which can amplify racing thoughts and heighten paranoia. Starting low and building slowly is the fundamental strategy.' },
      { title: 'Recommended Strains for Anxiety Management', content: 'Granddaddy Purple — heavy indica body relaxation that anchors a restless mind. ACDC — ultra-high CBD with virtually zero psychoactive effect. Harlequin — balanced CBD:THC offering functional calm with a mild mood lift. Northern Lights — a heritage indica with deeply calming terpene chemistry. Cannatonic — a 1:1 balanced cultivar that combines therapeutic relief with gentle euphoria. Daytime anxiety management calls for CBD-dominant strains that allow full functionality. Evening relief benefits from heavier indica genetics that promote deep physical and mental settling.' },
      { title: 'Selecting Anxiety-Focused Seeds', content: 'If you want absolutely no psychoactive experience, choose high-CBD genetics with ratios of 20:1 or above. If mild, manageable effects sound beneficial, balanced 1:1 strains harness the entourage effect for deeper therapeutic synergy. For experienced consumers who manage anxiety with cannabis, moderate-THC indica genetics can be highly effective. The universal rule: avoid high-THC sativas if anxiety is your primary concern — their stimulating cerebral effects can backfire in anxiety-prone individuals.' },
    ],
    faqs: [
      { q: 'Which strains are most effective for anxiety?', a: 'CBD-dominant and balanced-ratio genetics lead the field. ACDC, Harlequin, Granddaddy Purple, Northern Lights, and Cannatonic are consistently cited for their calming properties and terpene profiles rich in linalool and myrcene.' },
      { q: 'Can cannabis actually worsen anxiety symptoms?', a: 'It can if the wrong genetics are chosen. High-THC sativa strains may amplify anxious thoughts and trigger paranoia in sensitive individuals. Stick to CBD-dominant or low-to-moderate-THC indica genetics for anxiety. Always start with small amounts.' },
      { q: 'What CBD:THC ratio works best for anxiety?', a: 'For anxiety without any psychoactive component, aim for 20:1 CBD:THC or higher. For gentle functional relief with a mild calming effect, 1:1 ratios hit the mark. Individual sensitivity varies, so start conservative and adjust.' },
      { q: 'Do indica or sativa genetics work better for anxiety?', a: 'Indica strains are generally more effective for anxiety thanks to their physically calming nature and terpene profiles dominated by myrcene. CBD strains of any lineage also perform well. High-THC sativas are the category most likely to aggravate anxiety and should be approached cautiously by anxious individuals.' },
    ],
  },
  'best-strains-for-high-yield': {
    h1: 'High Yield Cannabis Seeds — Maximum Grams Per Plant for Australian Growers',
    intro: 'These genetics are specifically selected for growers who want the heaviest harvest from every square metre. Whether your setup is a compact LED tent or a full-sun outdoor plot, high-yield strains are bred for dense flower clusters, vigorous branching, and efficient nutrient uptake. Our collection spans autoflowering and feminised photoperiod formats — all backed by our germination guarantee and shipped discreetly across Australia. Plug your setup details into our yield calculator for a personalised harvest estimate.',
    quickFacts: [
      { label: 'Indoor Benchmark', value: '400–600 g/m\u00B2' },
      { label: 'Outdoor Potential', value: '500–1000+ g/plant' },
      { label: 'Key Factor', value: 'Genetics + Training' },
      { label: 'Ideal For', value: 'Harvest Maximisation' },
    ],
    bottomSections: [
      { title: 'The Genetics Behind Heavy Harvests', content: 'Yield is not random — it is built into the DNA. High-yield cultivars like Big Bud, Critical Mass, and Northern Lights have been selectively bred across decades for prolific branching, dense flower stacking, aggressive nutrient uptake, and robust trichome production. These traits define the harvest ceiling. The grower\'s role is to create conditions that let the plant reach that ceiling: quality lighting, adequate root volume, balanced nutrition, and canopy training that distributes energy across multiple bud sites rather than concentrating it in a single cola.' },
      { title: 'Indoor Yield Champions', content: 'Big Bud Feminised — the original yield benchmark. Critical Mass — heavy, dense colas that test branch strength. Northern Lights — consistent heavy production with minimal fuss. White Widow — excellent weight-to-quality ratio. Gorilla Glue — combines top-tier potency with top-tier production. Under optimised LED or HPS lighting with ScrOG or SOG canopy management, these strains routinely push 500–600 grams per square metre. Our indoor growing guide covers the environmental targets that unlock these numbers.' },
      { title: 'Selecting High-Yield Seeds for Your Space', content: 'Match genetics to your footprint. Compact, high-yield strains like Northern Lights and Critical slot into smaller tents (60 cm x 60 cm, 60 cm x 120 cm). Bigger canopy strains — Big Bud, White Widow — perform best in 120 cm x 120 cm or larger spaces where they can spread. Outdoor growers should choose strains that complete flowering before autumn weather arrives in their region. High-yield autoflowers suit growers who want multiple fast harvests stacked across the year. Our yield calculator generates harvest estimates calibrated to your specific tent size, light wattage, and experience level.' },
      { title: 'Indoor vs Outdoor Harvest Expectations', content: 'Indoor high-yield genetics produce 400–600 grams per square metre under strong lighting. A well-run 120 cm x 120 cm tent yields 350–700 grams per cycle. Outdoor plants in open ground with full Australian sun can produce 500–1000+ grams each when given space, nutrients, and a long enough season. Warmer states — Queensland, WA, SA, NT — offer outdoor windows that comfortably accommodate even longer-flowering high-yield sativas. Autoflower high-yield strains sit between the two: smaller per-plant output, but three to four cycles per year indoors can match or surpass a single outdoor monster.' },
      { title: 'Techniques That Lift Harvest Weight', content: 'Three levers move the needle most: genetics, lighting, and canopy training. Start with seeds bred for production — no technique overcomes weak genetics. Maximise light coverage and intensity across the canopy with quality LED or HPS panels. Train your plants using LST, topping, mainlining, or ScrOG netting to convert a Christmas-tree shape into a flat table of evenly lit bud sites. Feed phosphorus and potassium generously during the bloom phase. Control VPD, temperature, and CO2 concentration if your setup allows it. Let flowers ripen fully — cutting early costs you weight and density.' },
    ],
    faqs: [
      { q: 'Which genetics deliver the heaviest harvests?', a: 'Big Bud, Critical Mass, and Super Skunk lead the pack. Indoors they push 500–600 g/m\u00B2. Outdoor individuals can exceed 800 grams. High-yield autoflowers such as Northern Lights Auto and Gorilla Glue Auto are the top options for growers chasing fast, heavy runs.' },
      { q: 'What practical steps increase harvest weight?', a: 'The three biggest levers are genetics (start with yield-bred strains), lighting (maximise intensity and uniformity), and canopy training (LST, topping, ScrOG). Sound nutrition, correct VPD, and adequate container volume each add incrementally on top.' },
      { q: 'What can I realistically pull from a 120 x 120 cm tent?', a: 'A well-optimised 120 x 120 cm tent under quality LED lighting yields 350–700 grams per harvest with high-yield strains and training. Beginners should expect the lower end of that range initially. Our yield calculator gives a more tailored estimate for your setup.' },
      { q: 'Should I pick autoflowers or feminised seeds for maximum yield?', a: 'Feminised photoperiod plants produce larger per-harvest numbers. Autoflowers allow three to four cycles per year. On an annual basis, total grams can be comparable. Choose feminised for single-harvest maximisation; choose autos for highest throughput across twelve months.' },
      { q: 'How much difference does training actually make?', a: 'Substantial. An untrained plant funnels energy into one dominant cola. Training redistributes growth hormones across the canopy, creating multiple even colas. This alone can boost yield by 20–40% over an untrained plant of the same genetics.' },
      { q: 'Which lighting type maximises grams per watt?', a: 'Modern full-spectrum LED panels and 600–1000 W HPS fixtures both deliver excellent yields. LEDs are more energy-efficient and run cooler. HPS is proven and affordable. Both achieve roughly 0.5–1.5 grams per watt depending on the grower\'s overall technique.' },
    ],
  },
  'best-strains-for-indoor-growing': {
    h1: 'Indoor Cannabis Seeds Australia — Strains Bred to Thrive Under Grow Lights',
    intro: 'This collection brings together the genetics that perform best inside four walls — compact growth habits, strong training responses, efficient light utilisation, and generous yields under LED and HPS panels. Whether you operate a micro tent in a Sydney flat or a dedicated grow room in regional Queensland, these strains are engineered for enclosed, climate-controlled environments.',
    quickFacts: [
      { label: 'Typical Height', value: '60–120 cm' },
      { label: 'Light Source', value: 'LED or HPS' },
      { label: 'Indoor Yield', value: '400–600 g/m\u00B2' },
      { label: 'Ideal For', value: 'Tents & Grow Rooms' },
    ],
    bottomSections: [
      { title: 'Traits That Define a Strong Indoor Strain', content: 'The best indoor genetics share a specific set of traits: restrained height (under 120 cm), aggressive lateral branching, dense bud formation on multiple sites, and high photosynthetic efficiency under artificial light. Indica-dominant genetics naturally tick most of these boxes, but modern hybridisation has produced sativa-leaning indoor strains as well. Response to topping and LST is critical — a strain that branches readily from training creates a flat, multi-cola canopy that makes maximum use of your light footprint. Shorter bloom durations also matter: faster turnover means more harvests per year.' },
      { title: 'Recommended Indoor Strains by Tent Footprint', content: 'For 60 x 60 cm tents: Northern Lights Auto, White Widow Auto, or any compact autoflower. For 60 x 120 cm tents: Girl Scout Cookies, OG Kush, or Critical. For 120 x 120 cm tents: Gorilla Glue, Blue Dream, or Big Bud under a ScrOG net. For 150 x 150 cm and larger: White Widow, Amnesia Haze, or any high-yield strain with aggressive canopy training. Our yield calculator maps harvest potential to your exact tent dimensions and light wattage.' },
      { title: 'Choosing Indoor Seeds With Confidence', content: 'Work from your constraints inward. Note your tent height and width first — these hard limits determine which genetics fit. Factor in your lighting wattage, which dictates how many plants can photosynthesise efficiently. Consider turnaround speed: autoflowers finish fastest (eight to ten weeks), while photoperiod sativas can take sixteen weeks or more from seed. For newcomers, autoflowering indica seeds combine every indoor-friendly trait into the simplest possible package. For maximum per-square-metre output, trained feminised indicas and hybrids lead.' },
      { title: 'Advantages of Growing Cannabis Indoors', content: 'Indoor growing delivers total environmental control — temperature, humidity, light intensity, and photoperiod are all adjustable variables. This makes year-round production possible regardless of external weather or season. Indoor setups are inherently more discreet and secure than outdoor plots. Multiple harvest cycles per year (two to four depending on genetics) compound annual output. Bud quality often peaks under controlled indoor conditions, where environmental stress can be eliminated entirely. The trade-off is upfront equipment investment and ongoing electricity cost.' },
      { title: 'Indoor Growing Fundamentals for Australian Setups', content: 'Lighting is the single most impactful equipment decision — invest here first. Maintain VPD in the optimal range for each growth phase (0.8–1.2 kPa during veg, 1.0–1.5 kPa during flower). Activate a carbon filter before flowers begin producing terpenes — odour control is non-negotiable for discreet indoor cultivation. Train plants early and consistently for even light distribution. Monitor nutrient solution pH (5.8–6.2 in coco, 6.0–6.5 in soil) and EC at every watering. Good airflow strengthens stems and prevents mould. Our indoor grow guide walks through each step with detailed environmental targets.' },
    ],
    faqs: [
      { q: 'Which genetics are best for indoor cultivation?', a: 'Northern Lights, White Widow, and Girl Scout Cookies consistently top indoor performance rankings. They stay compact, respond strongly to canopy training, and produce excellent yields under LED or HPS lighting. Autoflowering versions simplify the process further.' },
      { q: 'How many hours of light do indoor cannabis plants need?', a: 'Photoperiod plants need 18 hours during veg and 12 hours during bloom. Autoflowers perform best under 18–20 hours from seed to harvest. LED fixtures drawing 200–400 W cover a 120 x 120 cm tent effectively.' },
      { q: 'How many plants fit in a 120 x 120 cm tent?', a: 'Four to nine plants work well depending on container size and training approach. Four plants in 18-litre pots with ScrOG netting fill the canopy efficiently. Nine smaller plants in 11-litre pots suit a sea-of-green layout.' },
      { q: 'What indoor yield is realistic?', a: 'Yields range from roughly 300 to 600 grams per square metre depending on strain, lighting, and technique. A 120 x 120 cm tent typically produces 250–600 grams per harvest cycle. Our yield calculator offers a personalised estimate based on your specific setup.' },
      { q: 'Is LED or HPS lighting the better choice?', a: 'Both deliver strong results. LEDs run cooler, use less electricity, and last longer. HPS fixtures produce intense light at a lower upfront cost. Modern LED technology has largely closed the performance gap, and most new indoor growers choose LED for its efficiency and heat advantages.' },
      { q: 'Is a carbon filter necessary for indoor growing?', a: 'Practically, yes. Cannabis flowers emit strong terpene-driven odours from mid-bloom onward. A carbon filter on your exhaust fan eliminates the vast majority of smell — essential for discreet cultivation and household harmony.' },
    ],
  },
  'best-strains-for-outdoor-growing': {
    h1: 'Outdoor Cannabis Seeds — Weather-Tough Genetics for Australian Conditions',
    intro: 'These strains are handpicked for outdoor resilience across Australia\'s diverse climate zones — from the tropical monsoons of the Top End to the cool maritime conditions of Tasmania. Outdoor growing harnesses free sunlight and open space to produce the largest individual plants possible, with top genetics yielding well over a kilogram per plant in ideal conditions. Browse our outdoor-optimised collection for weather-resistant, pest-tolerant genetics that finish on schedule in your region.',
    quickFacts: [
      { label: 'Per-Plant Yield', value: '250–1000+ g' },
      { label: 'Harvest Window', value: 'Mar–May (Aus)' },
      { label: 'Light Source', value: 'Natural Sunlight' },
      { label: 'Ideal For', value: 'Large Plants & Open Space' },
    ],
    bottomSections: [
      { title: 'Qualities of a Reliable Outdoor Strain', content: 'Outdoor genetics need to handle what nature delivers: wind, rain, temperature swings, pests, and mould pressure. The best outdoor strains carry natural resistance to botrytis and powdery mildew, tolerate temperature variation without stalling, and finish flowering within your local season window. In Australia, the primary outdoor growing calendar runs from October through April — spring through autumn in the Southern Hemisphere. Tropical and subtropical sativas thrive in the warm north, while fast-finishing indicas and autoflowers are the reliable option in cooler southern states.' },
      { title: 'Outdoor Strains Matched to Australian Regions', content: 'Queensland and NT (tropical/warm): most genetics flourish — Sour Diesel, Jack Herer, and tall sativas reach their full potential. NSW and VIC (temperate): Northern Lights, White Widow, Blue Dream, and mould-resistant hybrids. SA and WA (hot, dry): nearly any strain performs with adequate irrigation — ideal conditions for sativas and landraces. Tasmania (cool, short season): autoflowers and fast-finishing indicas such as Critical Mass beat the early frosts. Across all regions, autoflowers guarantee a finished harvest before cold weather arrives.' },
      { title: 'Picking Outdoor Seeds for Your Australian Postcode', content: 'Season length is the primary filter. Count the warm weeks available between your last spring frost and first autumn chill — that is your outdoor window. Photoperiod strains must complete flowering within that window, so check listed bloom durations carefully. Autoflowers only need ten to twelve weeks regardless, making them viable almost everywhere. Factor in local humidity: wet autumn conditions demand mould-resistant genetics or early-finishing strains. Shorter, bushier plants attract less attention than towering sativas — a practical consideration for discreet outdoor cultivation.' },
      { title: 'Why Grow Outdoors', content: 'Sunlight is the most powerful and spectrally complete light source on the planet — no artificial fixture fully replicates it. Outdoor plants can grow to massive proportions and yield accordingly. There is no electricity bill, and natural air movement keeps plants healthy without fans. The trade-offs: a single annual harvest window (unless using autoflowers), exposure to weather and pests, and less environmental control than an indoor setup. Many serious growers maintain both indoor and outdoor operations to capture the strengths of each.' },
      { title: 'Outdoor Growing Tips for the Australian Climate', content: 'Start seeds indoors under a grow light in September and harden off seedlings before transplanting outdoors in October, once frost risk has passed. Position plants in a north-facing spot for maximum solar exposure (north-facing receives the most light in the Southern Hemisphere). Prepare the ground with compost, worm castings, and amendments ahead of planting. Fabric pots or raised beds improve root aeration and drainage. Protect young transplants from possums, rabbits, and slugs. Monitor for mould from late February onward as humidity tends to rise. Harvest when trichomes are cloudy — do not delay if rain is approaching. Our regional outdoor guides detail the specifics for each state.' },
    ],
    faqs: [
      { q: 'When is the right time to plant cannabis outdoors in Australia?', a: 'Start seeds indoors during September. Transplant outdoors after the last frost date, which falls in October across most of the country. Autoflowers can be planted later in the season and still finish in time. Harvest typically runs from March through May depending on strain and latitude.' },
      { q: 'Which outdoor strain performs best in Australia overall?', a: 'Blue Dream, Northern Lights, and Sour Diesel are consistently top-rated outdoor performers. Blue Dream offers balanced effects and natural mould resistance. Northern Lights finishes early for southern growers. Sour Diesel excels in warm climates with massive outdoor yields.' },
      { q: 'How much does an outdoor plant produce?', a: 'Outdoor harvest weight ranges widely: 250 grams to over a kilogram per plant depending on strain, climate, soil, and technique. In ideal conditions across Queensland, NT, or WA, experienced growers regularly surpass 800 grams per plant with yield-bred genetics.' },
      { q: 'Can I grow outdoors in cooler states like Tasmania or Victoria?', a: 'Yes — choose fast-finishing strains or autoflowers. Northern Lights, Critical Mass, and auto varieties complete their cycle before autumn cold sets in. Starting seeds indoors and transplanting after frost extends the effective growing window.' },
      { q: 'How do I prevent mould on outdoor plants?', a: 'Start with mould-resistant genetics. Space plants well for airflow. Shake water off buds after rain. In humid climates, favour strains with open bud structures over dense indica types. Harvest promptly if conditions deteriorate rather than risking the crop.' },
      { q: 'How much water do outdoor plants need in Australia?', a: 'During peak summer heat, outdoor plants in the ground need 4–12 litres per day depending on size and soil type. Container plants require even more frequent watering. Mulching the soil surface conserves moisture significantly. Water early morning or late evening to minimise evaporation losses.' },
    ],
  },
  'fast-flowering-seeds': {
    h1: 'Fast Flowering Cannabis Seeds — Accelerated Photoperiod Genetics for Australia',
    intro: 'Fast flowering seeds are photoperiod strains bred for shortened bloom cycles — finishing one to two weeks ahead of standard versions without switching to full autoflower genetics. This time advantage is critical for outdoor growers in southern Australian states who need to harvest before autumn weather deteriorates, and for indoor cultivators who want to squeeze an extra cycle into the calendar year. Potency and yield remain comparable to standard-duration versions.',
    quickFacts: [
      { label: 'Bloom Duration', value: '6–8 Weeks' },
      { label: 'Time Advantage', value: '1–2 Weeks Faster' },
      { label: 'Harvest Weight', value: 'Standard to High' },
      { label: 'Ideal For', value: 'Short Seasons & Throughput' },
    ],
    bottomSections: [
      { title: 'How Fast Flowering Seeds Differ From Standard Photoperiods', content: 'Fast flowering genetics achieve shorter bloom cycles through selective breeding with naturally early-finishing lineages or by incorporating a trace of ruderalis heritage — enough to accelerate flower development without making the plant fully autoflowering. The result is a plant that still requires a 12/12 light flip to initiate bloom but completes the flowering phase seven to fourteen days sooner than its standard counterpart. For outdoor growers in Tasmania, Victoria, and southern NSW, those extra days can be the difference between a clean harvest and mould-damaged flowers caught by late-autumn rain.' },
      { title: 'Fast Flowering Strains Worth Growing', content: 'Quick One wraps up the entire seed-to-harvest cycle in roughly eight weeks. Fast Buds Critical completes flowering in six weeks. Speed Haze finishes in eight weeks rather than the twelve its standard version demands. Fast Gorilla Glue delivers the parent strain\'s legendary potency with a seven-week bloom window. Each of these strains maintains competitive potency and yield relative to their slower siblings. Indoor growers running fast-flowering genetics can fit an additional harvest cycle per year.' },
      { title: 'Deciding Between Fast Flowering and Standard Autoflower Seeds', content: 'Both categories offer speed, but the mechanism differs. Fast flowering seeds are still photoperiod — you control vegetative duration and flip to flower when ready. This preserves the ability to veg plants to any size and to clone mothers. Autoflowers bloom on their own timeline with no grower intervention. If you want speed combined with the flexibility of photoperiod light control, fast flowering seeds are the answer. If you want maximum simplicity with zero light-schedule management, autoflowers win.' },
    ],
    faqs: [
      { q: 'How quickly do fast flowering strains finish?', a: 'Fast flowering genetics complete the bloom phase in six to eight weeks — one to two weeks faster than standard versions of the same strain. This compressed timeline is especially valuable for outdoor growers who need to harvest before autumn weather moves in.' },
      { q: 'Are fast flowering seeds the same thing as autoflowers?', a: 'No. Fast flowering seeds are photoperiod plants that require a 12/12 light switch to trigger bloom — they simply bloom faster once triggered. Autoflowers bloom automatically regardless of light schedule. Fast flowering seeds retain the vegetative flexibility and cloning potential that autoflowers lack.' },
      { q: 'Do faster bloom times reduce yield?', a: 'Current-generation fast flowering genetics yield comparably to their standard-duration counterparts. Breeding has focused on maintaining harvest weight and potency while compressing the bloom window. A minor 5–10% yield reduction is possible with some strains, but the time savings often deliver a net positive on an annual basis.' },
      { q: 'Who benefits most from fast flowering seeds?', a: 'Outdoor growers in cooler Australian regions with shorter warm seasons, indoor growers who want to maximise harvest cycles per year, and anyone who values quick turnaround without losing the vegetative control that autoflowers sacrifice.' },
    ],
  },
  'photoperiod': {
    h1: 'Photoperiod Cannabis Seeds — Full Control Growing for Australian Cultivators',
    intro: 'Photoperiod seeds flower in response to light-cycle changes, placing the grower in full command of vegetative duration, plant size, and harvest timing. This category houses the most potent, highest-yielding, and most flavourful genetics in our catalogue. If you want to clone, train extensively, or push individual plant output to its maximum, photoperiod seeds are the tool for the job.',
    quickFacts: [
      { label: 'Veg Light', value: '18/6 Hours' },
      { label: 'Flower Light', value: '12/12 Hours' },
      { label: 'Grower Control', value: 'Maximum' },
      { label: 'Ideal For', value: 'Experienced Cultivators' },
    ],
    bottomSections: [
      { title: 'How Photoperiod Genetics Work', content: 'Photoperiod cannabis transitions from vegetative growth to flowering when the daily dark period exceeds a critical threshold — roughly twelve uninterrupted hours. In nature, this happens as days shorten through autumn. Indoors, the grower controls the switch by adjusting the timer. This mechanism gives you precise control over plant size: veg for two weeks for a small plant, or eight-plus weeks for a large one. Photoperiod genetics encompass the most acclaimed cultivars in cannabis history and produce the highest per-plant yields achievable.' },
      { title: 'Photoperiod Advantages Over Autoflower Genetics', content: 'Photoperiod plants can be vegged indefinitely, allowing you to grow them to any size your space allows. They are fully clonable — take cuttings from a proven mother to replicate her genetics at zero seed cost. Light-cycle techniques such as greenhouse light deprivation become available. Photoperiod lines represent the deepest genetic pool in cannabis, including the most potent, most flavourful, and most visually striking cultivars on the market. The trade-off is a longer total grow cycle and a slightly steeper learning curve compared to autoflowers.' },
      { title: 'Photoperiod Cultivation Walkthrough', content: 'Germinate and establish seedlings under 18/6 light. Veg until the plant fills roughly 50–60% of your canopy footprint. Top, train, and shape the canopy throughout veg. When ready, switch to 12/12 to trigger bloom. Plants will stretch 50–200% during the transition — account for this when deciding when to flip. Transition to bloom nutrients once pistils form. Most photoperiod strains flower for eight to eleven weeks. Harvest when trichome maturity matches your effect preference — mostly milky for cerebral, more amber for physical.' },
    ],
    faqs: [
      { q: 'What makes photoperiod seeds different from autoflowers?', a: 'Photoperiod plants flower in response to a light-schedule change (12/12), giving you control over when flowering starts and how large the plant grows beforehand. Autoflowers bloom automatically based on age. Photoperiod genetics offer greater yield per plant and the ability to clone.' },
      { q: 'How long does a photoperiod grow take from seed to harvest?', a: 'Total cycle time is typically three to five months. Vegetative growth takes four to eight weeks at the grower\'s discretion, plus eight to eleven weeks of flowering. Shorter veg produces smaller plants faster; longer veg builds larger plants with heavier yields.' },
      { q: 'Can a beginner successfully grow photoperiod seeds?', a: 'Yes, though autoflowers offer a gentler learning curve for absolute newcomers. Photoperiod growing requires understanding light-cycle management and recognising the right moment to flip. After completing one auto grow, most growers have enough experience to handle photoperiod genetics confidently.' },
      { q: 'What is the practical advantage of photoperiod over autoflower?', a: 'Photoperiod growing delivers larger per-plant yields, full cloning capability, complete control over plant size, and access to the widest range of premium genetics. It is the preferred approach for cultivators who want maximum output and creative flexibility.' },
    ],
  },
  'exotic-cannabis-seeds': {
    h1: 'Exotic Cannabis Seeds Australia — Rare Genetics With Standout Flavour',
    intro: 'Exotic seeds push the boundaries of flavour, appearance, and potency. These are the cultivars that redefined what cannabis can taste and look like — Zkittlez, Gelato, Runtz, Mimosa, and their descendants. If terpene complexity, vivid purple colouring, and conversation-starting bag appeal matter to you, the exotic collection is where to look.',
    quickFacts: [
      { label: 'Terpene Complexity', value: 'Exceptional' },
      { label: 'THC Bracket', value: '20–30%+' },
      { label: 'Visual Appeal', value: 'Vivid Colours' },
      { label: 'Ideal For', value: 'Flavour Enthusiasts' },
    ],
    bottomSections: [
      { title: 'What Qualifies a Strain as Exotic', content: 'Exotic status comes from novelty — terpene profiles unlike anything in the heritage catalogue, striking visual traits, or genetic combinations that did not exist a decade ago. Gelato brought dessert-cream terpenes into the mainstream. Runtz layered candy sweetness over high potency. Zkittlez exploded fruit flavours beyond what traditional fruity strains could achieve. These cultivars command attention because they deliver sensory experiences that heritage classics simply do not offer. Modern breeding has pushed exotic terpene production to levels that rival actual confectionery and fruit aromatics.' },
      { title: 'Standout Exotics in Our Catalogue', content: 'Gelato — velvety cream and citrus terpenes over potent effects. Zkittlez — candy-fruit intensity that lives up to the name. Runtz — sweet, balanced, and consistently heavy-hitting. Wedding Cake — vanilla dough richness layered over high THC. Mimosa — citrus-champagne brightness with daytime energy. Biscotti — cookie and fuel complexity. Gary Payton — exclusive collaborative genetics. Ice Cream Cake — dessert-grade sweetness with deep sedation. Each delivers a sensory dimension that standard genetics cannot match.' },
      { title: 'Growing Exotic Genetics Successfully', content: 'Exotic cultivars can be more responsive to environmental fluctuations than robust heritage strains. Stable temperature, humidity, and pH management matter more here. Feed conservatively — many exotics perform best under organic regimes that prioritise terpene expression over raw vegetative speed. Temperature drops during the final two weeks of flower draw out purple and dark pigmentation in predisposed genetics. Slow, cool drying (16°C, 60% RH) followed by extended jar curing is non-negotiable — rushing post-harvest handling destroys the complex terpene profiles that make exotics worth growing.' },
    ],
    faqs: [
      { q: 'What defines an exotic cannabis strain?', a: 'Exotic strains stand apart through rare terpene profiles, unusual colouration, or novel genetic lineages. Gelato, Runtz, and Zkittlez earned exotic status by delivering candy-sweet, dessert-grade flavours and vivid aesthetics that the heritage catalogue could not offer.' },
      { q: 'Are exotics harder to grow than heritage strains?', a: 'Some require tighter environmental control — they may react more to temperature, pH, or nutrient swings. However, widely available exotics like Gelato and Wedding Cake are moderate-difficulty grows that intermediate cultivators handle comfortably.' },
      { q: 'Why do exotic seeds carry a higher price tag?', a: 'Exotic genetics represent years of selective breeding investment to create and stabilise unique terpene and cannabinoid profiles. Limited-release status, high demand, and premium parentage all contribute. The distinctive flavours and effects justify the premium for most buyers.' },
    ],
  },
  'classic-cannabis-seeds': {
    h1: 'Classic Cannabis Seeds — Heritage Genetics With Decades of Proven Results',
    intro: 'Classic seeds deliver the time-tested genetics that built cannabis culture — White Widow, Northern Lights, Skunk #1, AK-47, and their peers. Decades of community growing data, breeding refinement, and accumulated knowledge make these the most thoroughly documented and reliable genetics you can plant. If proven performance and deep community support matter to you, classics are the logical choice.',
    quickFacts: [
      { label: 'Heritage', value: 'Decades of Breeding' },
      { label: 'Reliability', value: 'Thoroughly Proven' },
      { label: 'Community Data', value: 'Extensive' },
      { label: 'Suited To', value: 'All Skill Levels' },
    ],
    bottomSections: [
      { title: 'The Case for Heritage Genetics', content: 'Classic strains have survived decades of market evolution because they consistently deliver. Millions of growers across multiple continents have refined feeding schedules, training protocols, environmental targets, and harvest-timing benchmarks for these genetics. When you grow Northern Lights, White Widow, or OG Kush, you inherit that collective knowledge base — troubleshooting a classic is as simple as searching its name online. This depth of community support makes classics the lowest-risk seed purchase for growers at any experience level.' },
      { title: 'Heritage Strains for Australian Gardens', content: 'Northern Lights — the single easiest strain to grow under any conditions. White Widow — a Dutch coffeeshop legend that delivers balanced effects and generous resin. OG Kush — the iconic Californian classic. AK-47 — one-hit potency with deceptively easy cultivation. Skunk #1 — the genetic backbone of modern cannabis breeding. Amnesia Haze — a cerebral powerhouse for experienced sativa growers. Blue Dream — the all-rounder that suits every environment. Sour Diesel — raw, focused sativa energy. Jack Herer — named after the cannabis advocate, delivering sharp mental clarity.' },
    ],
    faqs: [
      { q: 'What makes classic strains worth growing in the modern era?', a: 'Decades of breeding refinement, proven genetics, and a massive library of community growing knowledge. They deliver predictable, documented results with well-understood growing requirements — the safest seed investment for any grower.' },
      { q: 'Can heritage strains compete with modern genetics on potency?', a: 'Many classics have been updated through selective breeding to reach modern potency standards. OG Kush, Gorilla Glue, and Girl Scout Cookies test above 25% THC. Some older cultivars like Skunk #1 carry lower THC but offer unique effect profiles and flavour character not found in contemporary lines.' },
    ],
  },
  'fruity-cannabis-seeds': {
    h1: 'Fruity Cannabis Seeds — Sweet, Tropical, and Berry-Forward Australian Genetics',
    intro: 'Fruity seeds produce strains loaded with sweet, tropical, and berry terpene profiles that make every session taste like fresh fruit. If blueberry, mango, strawberry, citrus, or tropical punch flavours appeal to you, this collection is curated for your palate. The fruit-like aromas come from high concentrations of limonene, myrcene, and terpinolene — the same terpene compounds found in actual fruits — delivering genuinely delicious cannabis experiences.',
    quickFacts: [
      { label: 'Dominant Terpenes', value: 'Limonene & Myrcene' },
      { label: 'Flavour Palette', value: 'Berry, Citrus, Tropical' },
      { label: 'Effect Tendency', value: 'Uplifting & Happy' },
      { label: 'Ideal For', value: 'Flavour-Focused Growers' },
    ],
    bottomSections: [
      { title: 'The Terpene Chemistry Behind Fruity Cannabis', content: 'Fruit flavours in cannabis originate from specific terpene concentrations. Limonene drives citrus notes — lemon, orange, and grapefruit. Myrcene contributes mango and tropical richness. Linalool layers in floral berry tones. Terpinolene adds piney-fruity complexity. When multiple fruity terpenes combine at high concentrations, the resulting aroma and taste can be remarkably close to actual fresh fruit. Modern breeding has amplified these terpene pathways to levels that make the best fruity strains genuinely indistinguishable from fruit aromatics on the nose.' },
      { title: 'Leading Fruity Strains', content: 'Blueberry — the original berry-flavoured cannabis cultivar. Strawberry Cough — sweet strawberry with an energising sativa backbone. Pineapple Express — tropical citrus hybrid energy. Tangie — tangerine flavour intensity that is hard to overstate. Zkittlez — a candy-fruit explosion in every hit. Forbidden Fruit — cherry and grapefruit depth. Mango Kush — tropical indica relaxation. Grape Ape — bold grape character with heavy sedation. Each delivers authentic fruit flavour alongside quality effects and respectable yields.' },
      { title: 'Maximising Fruit Terpene Expression', content: 'Lower growing temperatures during the final two weeks of flower help preserve volatile terpene compounds that degrade under heat. Organic cultivation methods — living soil, compost teas, mycorrhizal inoculants — tend to produce richer terpene depth than aggressive synthetic feeding. Avoid heat stress throughout the grow, as sustained high temperatures break down terpene precursors. Dry slowly at 16°C and 60% humidity for ten to fourteen days. Cure in sealed glass jars for a minimum of two weeks — four or more weeks is noticeably better. Post-harvest handling is where fruity terpene preservation is won or lost.' },
    ],
    faqs: [
      { q: 'Which fruity strain has the most intense flavour?', a: 'Blueberry, Zkittlez, and Pineapple Express consistently deliver the most pronounced fruit flavour. Blueberry offers deep berry authenticity, Zkittlez tastes like a bag of candy, and Pineapple Express hits with sharp tropical citrus. All three reward proper curing with flavour that improves over weeks.' },
      { q: 'Do fruity strains genuinely taste like real fruit?', a: 'The best ones do. The fruit-like flavours come from the same terpene molecules present in actual fruits — limonene (citrus), myrcene (mango), linalool (berry). When grown and cured correctly, the aroma can be almost indistinguishable from fresh fruit in a blind test.' },
      { q: 'Can fruity strains also be potent?', a: 'Terpene profile and THC content are independent traits. Many fruity cultivars carry serious potency: Zkittlez (20–25% THC), Forbidden Fruit (24–26% THC), and Tangie (19–22% THC) all deliver excellent strength alongside their flavour.' },
    ],
  },
  'purple-genetics-seeds': {
    h1: 'Purple Cannabis Seeds — Anthocyanin-Rich Genetics for Striking Australian Harvests',
    intro: 'Purple seeds produce plants with vivid violet, plum, and near-black colouration in their flowers and foliage. The colour comes from anthocyanin pigments — the same compounds that colour blueberries and red grapes — and is amplified by cool nighttime temperatures during late bloom. Beyond visual drama, purple cultivars often carry unique grape, berry, and floral terpene profiles that set them apart on flavour.',
    quickFacts: [
      { label: 'Colour Expression', value: 'Purple, Violet, Dark' },
      { label: 'Pigment Source', value: 'Anthocyanins' },
      { label: 'Flavour Notes', value: 'Grape, Berry, Floral' },
      { label: 'Ideal For', value: 'Bag Appeal & Terpene Depth' },
    ],
    bottomSections: [
      { title: 'The Science of Purple Cannabis', content: 'Purple colouration in cannabis is produced by anthocyanin pigments — water-soluble flavonoids that shift colour based on pH. The same molecular family colours blueberries, red cabbage, and grape skins. Certain cannabis genotypes carry elevated anthocyanin production as a heritable trait. Cool nighttime temperatures (15–18°C) during the final two to three weeks of flowering trigger and intensify the colour shift. Crucially, the genetic predisposition must be present — lowering temperature alone will not turn a green strain purple. Every cultivar in our purple genetics section is bred for strong anthocyanin expression.' },
      { title: 'Premier Purple Cultivars', content: 'Granddaddy Purple — the benchmark purple strain worldwide, combining heavy indica effects with grape-candy flavour. Purple Punch — sweet grape and baked-cookie terpenes. Purple Haze — Hendrix-inspired sativa with cerebral energy and lavender hues. Purple Kush — pure indica heritage with full violet expression. Tropicana Purple — citrus brightness wrapped in deep purple flowers. Forbidden Fruit — cherry-grapefruit depth with dark, dramatic colouring. Each delivers striking aesthetics alongside effects and flavour that justify the visual appeal.' },
    ],
    faqs: [
      { q: 'Does purple colouration indicate higher potency?', a: 'No — colour and cannabinoid content are independent traits. Some purple strains are very potent (Granddaddy Purple tests at 20–27% THC), but the colour itself comes from anthocyanin pigments, not cannabinoids. Grow purple genetics for their unique flavours and visual appeal, not as a potency indicator.' },
      { q: 'How do I bring out purple colouration?', a: 'Start with genetics that carry anthocyanin genes — this collection contains only such strains. Then drop nighttime temperatures to 15–18°C during the final two to three weeks of bloom. A green strain without the genetic predisposition will not turn purple regardless of temperature manipulation.' },
      { q: 'Do purple strains have a distinctive flavour?', a: 'Yes — many purple cultivars express grape, berry, and floral terpene profiles that differ noticeably from green-flowered genetics. The unique terpene combinations produce flavours reminiscent of grape candy, dark berries, and wine. This terpene character is one of the primary attractions of purple genetics beyond aesthetics.' },
    ],
  },
  'euphoric-seeds': {
    h1: 'Euphoric Cannabis Seeds — Mood-Lifting Genetics for Australian Growers',
    intro: 'Euphoric seeds are selected for their ability to elevate mood, amplify happiness, and create genuinely uplifting experiences. These strains lean into the terpenes and cannabinoid ratios that promote positive mental states — limonene and pinene feature prominently. If you want cannabis that makes social situations brighter and creative work more engaging, this collection is built for you.',
    quickFacts: [
      { label: 'Effect Character', value: 'Happy & Uplifting' },
      { label: 'Best Context', value: 'Social & Creative' },
      { label: 'Key Terpenes', value: 'Limonene & Pinene' },
      { label: 'Strain Lean', value: 'Hybrid & Sativa' },
    ],
    bottomSections: [
      { title: 'The Chemistry of Euphoria', content: 'Cannabis euphoria stems from the interplay between THC, terpenes, and minor cannabinoids acting on the endocannabinoid system. Strains high in limonene (citrus terpene) and pinene (pine terpene) tend to produce the most pronounced mood elevation. Sativa-dominant and balanced hybrid genetics generally deliver stronger euphoria than heavy indicas, which lean toward sedation instead. Interestingly, moderate THC levels (18–24%) often produce cleaner, more enjoyable euphoria than ultra-high-THC strains, which can tip into anxiety or overwhelming sedation before the happy phase fully develops.' },
      { title: 'Top Euphoric Strains', content: 'Wedding Cake — waves of bliss paired with creative clarity. Girl Scout Cookies — joyful and socially engaging. Jack Herer — lucid euphoria with razor focus. Blue Dream — gentle, accessible elation. Green Crack — energising happiness that powers through the day. Super Lemon Haze — citrus-driven mood lift that feels like sunshine. These cultivars consistently deliver the positive, outward-facing mental states that enhance social gatherings, artistic pursuits, and general well-being.' },
    ],
    faqs: [
      { q: 'Which strain produces the strongest euphoria?', a: 'Wedding Cake, Jack Herer, and Girl Scout Cookies are consistently reported as the most euphoric genetics in our catalogue. They deliver powerful mood elevation and mental clarity without crossing into anxiety. Limonene-rich profiles drive the strongest uplift.' },
      { q: 'Are euphoric strains appropriate for social settings?', a: 'Absolutely — social enhancement is their primary strength. They promote talkativeness, laughter, positive mood, and openness. Sativa-dominant and balanced hybrids are the best choices for gatherings where engagement and energy matter.' },
    ],
  },
  'energizing-cannabis-seeds': {
    h1: 'Energising Cannabis Seeds — Stimulating Daytime Genetics for Active Lifestyles',
    intro: 'Energising seeds produce strains that boost mental clarity, motivation, and physical energy without the sedative drag of indica-heavy genetics. Sativa-dominant terpene profiles — high in terpinolene and limonene — underpin the stimulating character. If you want cannabis that complements an active day rather than ending it, this is your section.',
    quickFacts: [
      { label: 'Effect Character', value: 'Energy & Clarity' },
      { label: 'Best Time', value: 'Morning & Afternoon' },
      { label: 'Strain Lean', value: 'Sativa & Sativa-Hybrid' },
      { label: 'Key Terpene', value: 'Terpinolene & Limonene' },
    ],
    bottomSections: [
      { title: 'Where Cannabis Energy Comes From', content: 'The stimulating character of energising strains comes from sativa genetics paired with specific terpene chemistry. Terpinolene and limonene are the primary terpene drivers of mental alertness and motivation. Certain energising cultivars also contain notable THCV concentrations — a minor cannabinoid recognised for its stimulating, appetite-moderating properties. The best energising strains deliver clean, sustained mental focus without jitteriness, caffeine-like crashes, or the anxious edge that some high-THC sativas can produce.' },
      { title: 'Leading Energising Cultivars', content: 'Sour Diesel — fuel-scented intensity with relentless energy. Green Crack — laser-focused motivation in every hit. Jack Herer — dignified mental clarity without haze. Durban Poison — pure African sativa heritage with invigorating power. Super Lemon Haze — citrus brightness that elevates mood and momentum. Tangie — tangerine-flavoured focus that suits creative work. These genetics are popular among professionals, artists, athletes, and anyone who values cannabis that complements productivity rather than replacing it.' },
    ],
    faqs: [
      { q: 'Which strain offers the most energy?', a: 'Sour Diesel, Green Crack, and Durban Poison sit at the top of the energy spectrum. They deliver focused, clean stimulation without anxiety or sedation. Sativa-dominant genetics with elevated terpinolene content produce the strongest energising effects.' },
      { q: 'Can energising strains substitute for coffee?', a: 'Many users incorporate energising sativas into their morning or midday routine alongside or as an alternative to coffee. The stimulation mechanism differs from caffeine, but clean sativa energy provides motivation and focus without jitters or the afternoon crash that caffeine users often experience.' },
    ],
  },
  'bogo-seeds': {
    h1: 'BOGO Cannabis Seeds Australia — Double Your Seeds at No Extra Cost',
    intro: 'Our buy-one-get-one promotions let you double your seed count on selected premium strains. Every BOGO seed is drawn from the same climate-controlled inventory as our full-price stock — identical genetics, identical germination guarantee, twice the value. BOGO selections rotate regularly, so check back often.',
    quickFacts: [
      { label: 'Offer', value: 'Buy 1 Get 1 Free' },
      { label: 'Seed Quality', value: 'Same Premium Stock' },
      { label: 'Germination', value: '95% Guaranteed' },
      { label: 'Duration', value: 'Rotating Promotion' },
    ],
    bottomSections: [
      { title: 'How BOGO Promotions Work', content: 'Select a strain currently featured in our BOGO promotion. Purchase one pack and receive a second pack of equal or lesser value at no charge. These are not clearance seeds, seconds, or aged stock — every BOGO seed ships from current premium inventory with full germination backing. We rotate BOGO offers regularly to spotlight different genetics. This is the highest-value way to build your seed collection or stock up for future growing seasons.' },
      { title: 'Making the Most of BOGO Offers', content: 'If your preferred strain is currently on BOGO, the decision is straightforward. When multiple strains are available, consider diversifying — pair an indica with a sativa, or an autoflower with a feminised photoperiod. BOGO pricing is also an excellent opportunity to build a personal seed vault: properly stored seeds remain viable for three to five years, so buying double now saves money on future grows.' },
    ],
    faqs: [
      { q: 'Are BOGO seeds the same quality as full-price seeds?', a: 'Identical. BOGO seeds come from the same storage, the same inventory batches, and carry the same 95% germination guarantee. The discount is a promotional incentive, not a quality compromise.' },
      { q: 'How long do BOGO deals remain active?', a: 'BOGO promotions rotate on a regular basis and may last days or weeks depending on the campaign. When a deal is live, act on it — there is no guarantee the same strain will return to BOGO. Check our site regularly for current offers.' },
    ],
  },
  'cannabis-seeds-on-sale': {
    h1: 'Cannabis Seeds on Sale — Premium Genetics at Reduced Prices for Australian Growers',
    intro: 'Discounted seeds, unchanged quality. Our sale selection features premium genetics at temporarily reduced pricing — seasonal promotions, overstock specials, and new-strain introductory offers. Every sale seed carries the same germination guarantee and ships from the same climate-controlled storage as full-price inventory. Stock up while the price is right.',
    quickFacts: [
      { label: 'Savings', value: 'Up to 30% Off' },
      { label: 'Seed Quality', value: 'Same Premium Genetics' },
      { label: 'Germination', value: '95% Guaranteed' },
      { label: 'Duration', value: 'While Stock Lasts' },
    ],
    bottomSections: [
      { title: 'Why These Seeds Are Discounted', content: 'Sale pricing reflects promotions, seasonal campaigns, overstock on popular lines, or introductory pricing for newly added genetics. None of these factors affect seed viability or genetic quality. Every discounted seed ships from the same climate-controlled environment with the same germination guarantee as any full-price product. Experienced growers treat sale periods as seed-vault building opportunities — purchasing genetics at reduced cost for future seasons.' },
      { title: 'Shopping Sale Seeds Strategically', content: 'Avoid impulse purchases — a discounted strain that does not match your growing goals is no bargain. Evaluate each sale strain against your environment, experience level, and desired effects just as you would at full price. If a strain you have been watching drops into the sale section, that is the ideal moment to buy. Properly stored seeds remain germinable for three to five years, so stocking up now creates future value.' },
    ],
    faqs: [
      { q: 'Does the discount indicate lower quality?', a: 'Not at all. Discounted seeds are drawn from identical premium inventory. Pricing reductions stem from promotions, overstock management, or new-strain launches — never quality differences. The full 95% germination guarantee applies.' },
      { q: 'How should I store seeds purchased on sale for later use?', a: 'Keep them in a cool, dark, dry environment — an airtight container in the refrigerator works well. Aim for 5–10°C with relative humidity below 10%. Under these conditions, seeds maintain strong viability for three to five years or more.' },
    ],
  },
  'australian-premium-cannabis-seeds': {
    h1: 'Australian Premium Cannabis Seeds — Climate-Tested Genetics for Local Conditions',
    intro: 'Our Australian Premium range is curated specifically for growers dealing with Australian conditions — scorching summers, variable humidity, short temperate-zone seasons, and the unique challenges of Southern Hemisphere cultivation. Every strain in this collection has been evaluated for climate adaptability, pest resistance, yield consistency, and potency reliability across Australia\'s diverse growing environments.',
    quickFacts: [
      { label: 'Curation', value: 'Hand-Selected' },
      { label: 'Validation', value: 'Australian Climate Tested' },
      { label: 'Potency', value: 'Premium THC Levels' },
      { label: 'Ideal For', value: 'Australian Growers' },
    ],
    bottomSections: [
      { title: 'What Earns a Spot in the Premium Collection', content: 'Every strain in this range has been assessed against Australian-specific criteria: tolerance to heat spikes above 35°C, resilience in humid subtropical and tropical conditions, flowering duration compatible with the October-to-April outdoor window, and robust pest and mould resistance. Curation draws on aggregated grower feedback from over 200,000 orders worldwide, filtered for relevance to Australian climates. The result is a shortlist of genetics that we confidently recommend for any growing environment on this continent.' },
    ],
    faqs: [
      { q: 'How do premium seeds differ from standard catalogue entries?', a: 'Premium seeds are hand-curated from our highest-confidence genetics — strains validated for Australian growing conditions through aggregated performance data. They represent our top-tier recommendations for reliable potency, yield, and resilience across the country\'s diverse climate zones.' },
    ],
  },
  'ruderalis': {
    h1: 'Ruderalis Cannabis Seeds — The Wild Ancestor of Autoflowering Genetics',
    intro: 'Cannabis ruderalis is the wild subspecies behind every autoflowering strain on the market. Originating in Central Russia and Central Asia, ruderalis evolved the ability to flower based on age rather than light — an adaptation to short, unpredictable growing seasons at high latitudes. Pure ruderalis is compact, hardy, and low in THC, but its autoflowering trait is the genetic foundation of the entire autoflower category.',
    quickFacts: [
      { label: 'Origin', value: 'Central Russia/Asia' },
      { label: 'Flowering Trigger', value: 'Age-Based (Automatic)' },
      { label: 'Typical Height', value: '30–90 cm' },
      { label: 'Primary Value', value: 'Breeding & Education' },
    ],
    bottomSections: [
      { title: 'Understanding Cannabis Ruderalis', content: 'Cannabis ruderalis is a subspecies that adapted to the extreme latitudes and harsh winters of Central Russia and Central Asia. Short, unreliable summers forced the evolution of age-triggered flowering — the plant blooms after a set number of weeks regardless of daylight hours. Pure ruderalis plants are small (30–90 cm), low in THC, and fast to finish. While not useful on their own for recreational or therapeutic cultivation, ruderalis genetics are indispensable in breeding — every modern autoflower owes its automatic flowering trait to ruderalis crosses.' },
    ],
    faqs: [
      { q: 'What is ruderalis cannabis?', a: 'Ruderalis is a wild cannabis subspecies from Central Russia and Central Asia. It flowers automatically based on maturity rather than photoperiod. While low in THC on its own, ruderalis genetics are the source of the autoflowering trait in every modern autoflower strain when crossed with indica or sativa lines.' },
      { q: 'Can ruderalis be consumed directly?', a: 'Pure ruderalis carries very low THC and minimal recreational or therapeutic value on its own. Its significance is entirely as a breeding tool. When crossed with potent indica or sativa genetics, the offspring inherit both the autoflowering trait and the cannabinoid production of the other parent.' },
    ],
  },
  'feminized-hybrids': {
    h1: 'Feminised Hybrid Seeds Australia — Balanced Effects, Guaranteed Female Plants',
    intro: 'Feminised hybrid seeds deliver the versatility of indica/sativa blends with the certainty of 99.9% female plants. No sex identification, no wasted pots — just balanced, multi-dimensional genetics ready to grow. From Girl Scout Cookies to Gorilla Glue, the most popular cannabis strains on earth live in this category.',
    quickFacts: [
      { label: 'Sex', value: '99.9% Female' },
      { label: 'Genetics', value: 'Indica/Sativa Blend' },
      { label: 'Effects', value: 'Balanced' },
      { label: 'Bloom Duration', value: '8–10 Weeks' },
    ],
    bottomSections: [
      { title: 'The Appeal of Feminised Hybrids', content: 'Feminised hybrid seeds sit at the intersection of versatility and convenience. Hybrid genetics offer the widest range of effects, flavours, and growing characteristics in cannabis. Feminisation ensures every seed produces a harvestable female plant. This combination is the most popular category among seasoned growers who want flexible, multi-use strains without the overhead of identifying and removing males from the garden.' },
    ],
    faqs: [
      { q: 'What exactly are feminised hybrid seeds?', a: 'They are crosses between indica and sativa parent genetics that have been feminised to produce 99.9% female plants. This gives you balanced, versatile effects and the guarantee that every seed develops into a flower-producing plant.' },
    ],
  },
  'feminized-indicas': {
    h1: 'Feminised Indica Seeds — Relaxing, Compact, All-Female Genetics',
    intro: 'Feminised indica seeds bring together deep physical relaxation, fast flowering, and the guarantee of 99.9% female plants. Compact growth, dense resin coverage, and manageable heights make these the natural choice for indoor growers chasing evening-oriented effects without the hassle of sex identification.',
    quickFacts: [
      { label: 'Sex', value: '99.9% Female' },
      { label: 'Effects', value: 'Relaxing & Sedating' },
      { label: 'Height Range', value: '60–120 cm' },
      { label: 'Bloom Duration', value: '7–9 Weeks' },
    ],
    bottomSections: [
      { title: 'Why Feminised Indicas Dominate Indoor Gardens', content: 'Feminised indica genetics are arguably the most straightforward cannabis to cultivate. Their natural compactness keeps them within tent height limits. Dense, resinous flowers develop in seven to nine weeks of bloom. Every seed is guaranteed female — no wasted space, no pollination risk. Heritage feminised indicas such as Northern Lights, Granddaddy Purple, Bubba Kush, and Hindu Kush have proven themselves across millions of indoor grows worldwide.' },
    ],
    faqs: [
      { q: 'Are feminised indica seeds the easiest to grow?', a: 'They rank among the simplest options available. Compact stature, fast bloom, inherent mould resistance in many lines, and guaranteed female plants remove most of the variables that trip up new growers. Northern Lights Feminised is the benchmark starter strain in this category.' },
    ],
  },
  'feminized-sativas': {
    h1: 'Feminised Sativa Seeds — Cerebral Energy in Guaranteed Female Plants',
    intro: 'Feminised sativa seeds deliver the signature sativa experience — cerebral stimulation, creativity, and uplifting energy — in guaranteed all-female genetics. From classic Haze lineages to modern sativa-dominant hybrids, these plants produce the invigorating effects daytime consumers seek with the convenience of feminised growing.',
    quickFacts: [
      { label: 'Sex', value: '99.9% Female' },
      { label: 'Effects', value: 'Energising & Creative' },
      { label: 'Height Range', value: '120–250+ cm' },
      { label: 'Bloom Duration', value: '10–12 Weeks' },
    ],
    bottomSections: [
      { title: 'The Value of Feminised Sativa Seeds', content: 'Sativas take longer to flower than indicas — ten to twelve weeks is standard. Discovering a male plant after months of vegetative growth is a significant waste of time and resources. Feminised sativa seeds eliminate that risk entirely. Every plant you grow will be female, every pot will produce harvestable flowers. Jack Herer, Sour Diesel, Amnesia Haze, and Super Lemon Haze are all available as feminised genetics. Indoor growers should prepare for height management through training techniques.' },
    ],
    faqs: [
      { q: 'Can feminised sativas grow successfully indoors?', a: 'Yes, with appropriate height management. Topping, LST, and ScrOG techniques control the natural stretch of sativa genetics. Flip to 12/12 earlier than you would with indicas — sativa flowering stretch can double or triple pre-flip height.' },
    ],
  },
  'auto-flowering-hybrids': {
    h1: 'Autoflowering Hybrid Seeds — Balanced, Fast, and Effortless for Australian Growers',
    intro: 'Autoflowering hybrid seeds combine balanced indica/sativa effects with automatic flowering — no light-schedule changes, no complexity, just plant and harvest in eight to ten weeks. These genetics suit newcomers who want versatile, enjoyable effects without the learning curve of photoperiod cultivation.',
    quickFacts: [
      { label: 'Flowering Trigger', value: 'Automatic' },
      { label: 'Full Cycle', value: '8–10 Weeks' },
      { label: 'Effects', value: 'Balanced' },
      { label: 'Ideal For', value: 'Simplicity & Speed' },
    ],
    bottomSections: [
      { title: 'What Autoflower Hybrids Bring to the Table', content: 'Autoflowering hybrid seeds merge indica body effects and sativa mental stimulation with the ruderalis autoflowering trait. The result is balanced, versatile strains that bloom on their own clock in eight to ten weeks from seed. No light manipulation, no sex sorting, and compact enough for any growing space. These represent the most beginner-accessible cannabis seeds available — straightforward growing paired with complex, enjoyable effects that neither pure indica nor pure sativa autos can match on their own.' },
    ],
    faqs: [
      { q: 'How long do autoflower hybrids take from seed to harvest?', a: 'Most autoflowering hybrid strains are harvestable in eight to ten weeks from germination. Some faster-finishing varieties wrap up in seven weeks. This is roughly half the total time a photoperiod hybrid requires from seed to chop.' },
    ],
  },
  'auto-flowering-indicas': {
    h1: 'Autoflowering Indica Seeds — Fast Relaxation in a Compact Package',
    intro: 'Autoflowering indica seeds deliver the deep physical relaxation of indica genetics combined with the speed and simplicity of automatic flowering. Harvest body-focused, sedating buds in eight to ten weeks from seed with minimal plant management. These are the genetics we recommend to every first-time grower who wants indica effects.',
    quickFacts: [
      { label: 'Flowering Trigger', value: 'Automatic' },
      { label: 'Full Cycle', value: '8–10 Weeks' },
      { label: 'Effects', value: 'Relaxing & Sedating' },
      { label: 'Typical Height', value: '40–90 cm' },
    ],
    bottomSections: [
      { title: 'The Easiest Cannabis You Can Grow', content: 'Autoflowering indica seeds combine the naturally compact, dense-budding character of indica genetics with the automatic flowering and fast finish times of ruderalis heritage. Most stay under 90 cm tall — small enough for cupboards, micro tents, and stealth setups. Northern Lights Auto, Granddaddy Purple Auto, and Blueberry Auto lead this category. If you have never grown cannabis before and want the most forgiving, straightforward path to a harvest, autoflowering indica seeds are the starting point we recommend above all others.' },
    ],
    faqs: [
      { q: 'Are autoflower indicas genuinely the easiest to grow?', a: 'By virtually every measure, yes. Compact size, automatic bloom, fast cycle times, and tolerance for common beginner errors make them the lowest-maintenance seed type available. Northern Lights Auto is our number-one recommendation for absolute first-timers.' },
    ],
  },
  'auto-flowering-sativas': {
    h1: 'Autoflowering Sativa Seeds — Fast Cerebral Energy in a Manageable Plant',
    intro: 'Autoflowering sativa seeds deliver the cerebral spark and creative energy of sativa genetics without the towering height and extended bloom times of photoperiod sativas. Harvest energising, uplifting buds in nine to eleven weeks from seed in a plant that stays under 120 cm.',
    quickFacts: [
      { label: 'Flowering Trigger', value: 'Automatic' },
      { label: 'Full Cycle', value: '9–11 Weeks' },
      { label: 'Effects', value: 'Energising & Creative' },
      { label: 'Typical Height', value: '60–120 cm' },
    ],
    bottomSections: [
      { title: 'Sativa Effects Without the Sativa Size', content: 'Full-sized photoperiod sativas can grow past three metres and take fourteen weeks or more to flower — impractical for most home cultivators. Autoflowering sativa seeds solve both problems by delivering the cerebral energy, creative stimulation, and euphoria of sativa genetics in a compact, fast-finishing format. Plants stay under 120 cm and complete the full seed-to-harvest cycle in nine to eleven weeks. Amnesia Haze Auto, Jack Herer Auto, and Sour Diesel Auto bring authentic sativa headspace to indoor growers who could never accommodate the photoperiod originals.' },
    ],
    faqs: [
      { q: 'Are autoflower sativas significantly shorter than photoperiod sativas?', a: 'Yes — dramatically so. Photoperiod sativas can exceed three metres. Auto sativa versions stay between 60 and 120 cm thanks to their ruderalis genetics. This makes sativa effects accessible to indoor growers with limited vertical space.' },
    ],
  },
  'growers-choice-seeds-collection': {
    h1: 'Grower\'s Choice Collection \u2014 Expert-Curated Premium Genetics',
    intro: 'Our Grower\'s Choice collection is hand-curated by the Royal King Seeds cultivation team. These are the strains we would grow in our own gardens — genetics that excel across germination reliability, growth vigour, yield consistency, terpene depth, and potency. If you want a shortcut past the paralysis of 1,600+ options, start here.',
    quickFacts: [
      { label: 'Curation', value: 'Expert-Selected' },
      { label: 'Quality Standard', value: 'Top-Tier Genetics' },
      { label: 'Range', value: 'Diverse Selections' },
      { label: 'Ideal For', value: 'Quality-First Growers' },
    ],
    bottomSections: [
      { title: 'How the Grower\'s Choice Selection Is Made', content: 'Our cultivation team evaluates every strain in the catalogue against multiple performance metrics: germination success rate, seedling vigour, vegetative growth consistency, flowering behaviour, yield reliability, terpene quality, and final potency. Strains that score highly across all categories earn a Grower\'s Choice designation. This collection is updated regularly to reflect new strain releases, seasonal performance data, and aggregated customer feedback from growers across Australia and internationally.' },
    ],
    faqs: [
      { q: 'What distinguishes Grower\'s Choice strains from the rest of the catalogue?', a: 'These strains are hand-picked by our cultivation experts based on all-round excellence: germination, vigour, yield, potency, and terpene quality. They represent our highest-confidence recommendations for growers at any skill level.' },
    ],
  },
};

export function getCategoryContent(slug: string): CategoryContent | undefined {
  return categoryContent[slug];
}
