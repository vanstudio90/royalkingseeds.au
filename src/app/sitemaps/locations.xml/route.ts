import { NextResponse } from 'next/server';
import { getAllStateSlugs, getCitySlugsForState } from '@/lib/au-locations';

const BASE = 'https://royalkingseeds.au';

export async function GET() {
  const states = getAllStateSlugs();

  // Australia hub
  const hubUrl = `  <url>
    <loc>${BASE}/seeds/australia</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;

  // State pages
  const stateUrls = states.map(s => `  <url>
    <loc>${BASE}/seeds/australia/${s.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);

  // City pages
  const cityUrls = states.flatMap(s =>
    getCitySlugsForState(s.slug).map(c => `  <url>
    <loc>${BASE}/seeds/australia/${s.slug}/${c.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`)
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${hubUrl}
${stateUrls.join('\n')}
${cityUrls.join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
