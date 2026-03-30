export interface ProductBadge {
  text: string;
  icon: string;
  bg: string;
  textColor: string;
}

// Deterministic number from slug hash — consistent per product
function slugHash(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = ((h << 5) - h + slug.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const TOP_SELLERS = new Set([
  'gorilla-glue-feminized', 'gorilla-glue-autoflower', 'girl-scout-cookies-feminized',
  'blue-dream-feminized', 'blue-dream-autoflower', 'northern-lights-feminized',
  'northern-lights-autoflower', 'white-widow-feminized', 'white-widow-autoflower',
  'og-kush-feminized', 'gelato-feminized', 'gelato-autoflower',
  'wedding-cake-feminized', 'granddaddy-purple-feminized', 'jack-herer-feminized',
  'ak-47-feminized', 'bruce-banner-feminized', 'bruce-banner-autoflower',
  'amnesia-haze-feminized', 'amnesia-haze-autoflower', 'zkittlez-feminized',
  'purple-punch-feminized', 'runtz-feminized', 'mimosa-feminized',
  'do-si-dos-feminized', 'critical-mass-feminized', 'super-skunk-feminized',
  'bubba-kush-feminized', 'sour-diesel-feminized', 'green-crack-feminized',
]);

const TOP_RATED = new Set([
  'og-kush-feminized', 'northern-lights-feminized', 'gelato-feminized',
  'wedding-cake-feminized', 'jack-herer-feminized', 'white-widow-feminized',
  'granddaddy-purple-feminized', 'amnesia-haze-feminized',
  'purple-punch-feminized', 'zkittlez-feminized', 'do-si-dos-feminized',
  'gsc-feminized', 'lemon-haze-feminized', 'pineapple-express-feminized',
  'strawberry-cough-feminized', 'trainwreck-feminized', 'cheese-feminized',
]);

interface ProductForBadge {
  slug: string;
  name: string;
  strainType: string;
  thcContent?: string;
  effects: string[];
  autoflower: boolean;
  difficulty?: string;
  price: number;
}

export function getProductBadges(product: ProductForBadge): ProductBadge[] {
  const badges: ProductBadge[] = [];
  const slug = product.slug;
  const thc = parseInt(product.thcContent || '0');
  const effects = (product.effects || []).map(e => e.toLowerCase());
  const hash = slugHash(slug);

  // Only 1 badge per product — priority order:

  // 1. Top Seller
  if (TOP_SELLERS.has(slug)) {
    const sold = 15 + (hash % 35);
    badges.push({ text: `${sold} sold this week`, icon: '🔥', bg: 'bg-[#b85c5c]', textColor: 'text-white' });
    return badges;
  }

  // 2. Top Rated
  if (TOP_RATED.has(slug)) {
    badges.push({ text: 'Top Rated', icon: '🏅', bg: 'bg-[#C4A94D]', textColor: 'text-white' });
    return badges;
  }

  // 3. High Potency — THC 25%+
  if (thc >= 25) {
    badges.push({ text: 'High Potency', icon: '⚡', bg: 'bg-[#7c5bbf]', textColor: 'text-white' });
    return badges;
  }

  // 4. Beginner Pick — affordable autoflowers
  if (product.autoflower && product.price <= 15) {
    badges.push({ text: 'Beginner Pick', icon: '😊', bg: 'bg-[#4a8c5c]', textColor: 'text-white' });
    return badges;
  }

  // 5. Fast Grow — all remaining autoflowers
  if (product.autoflower) {
    badges.push({ text: 'Fast Grow', icon: '⏱', bg: 'bg-[#d4956b]', textColor: 'text-white' });
    return badges;
  }

  // For photoperiod strains, assign based on effects:

  // 6. Sleep Aid — sleepy/calm strains
  if (effects.includes('sleepy') || (effects.includes('calm') && effects.includes('relaxed'))) {
    badges.push({ text: 'Sleep Aid', icon: '🌙', bg: 'bg-[#5b6abf]', textColor: 'text-white' });
    return badges;
  }

  // 7. Creative — creative/uplifted/energetic
  if (effects.includes('creative') || effects.includes('uplifted') || effects.includes('energetic')) {
    badges.push({ text: 'Creative', icon: '🎨', bg: 'bg-[#bf8c5b]', textColor: 'text-white' });
    return badges;
  }

  // 8. High Yield — indica/hybrid photoperiods with decent THC
  if ((product.strainType === 'indica' || product.strainType === 'hybrid') && thc >= 18) {
    badges.push({ text: 'High Yield', icon: '📈', bg: 'bg-[#6b5bbf]', textColor: 'text-white' });
    return badges;
  }

  // 9. Great Value — budget strains
  if (product.price <= 10.99) {
    badges.push({ text: 'Great Value', icon: '💰', bg: 'bg-[#5b9abf]', textColor: 'text-white' });
    return badges;
  }

  // 10. Mood Boost — happy/euphoric strains (catch-all for remaining)
  if (effects.includes('happy') || effects.includes('euphoric')) {
    badges.push({ text: 'Mood Boost', icon: '😄', bg: 'bg-[#d4956b]', textColor: 'text-white' });
    return badges;
  }

  // 11. Relaxing — relaxed effect (broad catch-all)
  if (effects.includes('relaxed') || effects.includes('calm')) {
    badges.push({ text: 'Relaxing', icon: '🧘', bg: 'bg-[#5b8c7c]', textColor: 'text-white' });
    return badges;
  }

  return badges;
}
