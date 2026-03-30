import type { Metadata, Viewport } from "next";
import { DM_Sans, Patua_One } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const patuaOne = Patua_One({
  variable: "--font-patua",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Royal King Seeds — Buy Cannabis Seeds Online in Australia",
    template: "%s | Royal King Seeds Australia",
  },
  description:
    "Shop premium cannabis seeds at Royal King Seeds. Australia's trusted source for feminised, autoflower, and CBD seeds. Discreet shipping across Australia with germination guarantee.",
  keywords: [
    "cannabis seeds australia",
    "marijuana seeds australia",
    "buy cannabis seeds online australia",
    "feminised seeds australia",
    "autoflower seeds australia",
    "CBD seeds australia",
    "weed seeds australia",
    "royal king seeds",
    "buy marijuana seeds online australia",
    "cannabis seeds for sale australia",
    "best cannabis seeds australia",
  ],
  openGraph: {
    title: "Royal King Seeds — Australia's Best Cannabis Seeds",
    description:
      "Shop premium cannabis seeds online. Australia's trusted source for feminised, autoflower, and CBD genetics with discreet Australia-wide shipping.",
    type: "website",
    siteName: "Royal King Seeds Australia",
    locale: "en_AU",
    images: [
      {
        url: "https://royalkingseeds.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "Royal King Seeds — Australia's Premier Cannabis Seed Bank",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal King Seeds — Australia's Best Cannabis Seeds",
    description:
      "Shop premium cannabis seeds. Trusted by Australian growers for feminised, autoflower, and CBD genetics.",
    images: ["https://royalkingseeds.au/og-image.png"],
  },
  alternates: {
    canonical: "https://royalkingseeds.au",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as any,
    "max-snippet": -1 as any,
    "max-video-preview": -1 as any,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large" as any,
      "max-snippet": -1 as any,
      "max-video-preview": -1 as any,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${dmSans.variable} ${patuaOne.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#275C53" />
        <meta name="geo.region" content="AU" />
        <meta name="geo.position" content="-33.8688;151.2093" />
        <meta name="ICBM" content="-33.8688, 151.2093" />
        <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFY || ''} />
        <meta name="yandex-verification" content={process.env.NEXT_PUBLIC_YANDEX_VERIFY || ''} />
        <meta name="yahoo-site-verification" content={process.env.NEXT_PUBLIC_YAHOO_VERIFY || ''} />
        <link rel="alternate" type="application/rss+xml" title="Royal King Seeds Blog" href="https://royalkingseeds.au/feed.xml" />
        <link rel="alternate" hrefLang="en-AU" href="https://royalkingseeds.au" />
        <link rel="alternate" hrefLang="en-US" href="https://royalkingseeds.us" />
        <link rel="alternate" hrefLang="en-CA" href="https://royalkingseeds.ca" />
        <link rel="alternate" hrefLang="de-DE" href="https://royalkingseeds.de" />
        <link rel="alternate" hrefLang="x-default" href="https://royalkingseeds.us" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F5F0EA] text-[#192026]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Royal King Seeds Australia",
              url: "https://royalkingseeds.au",
              description: "Australia's premier source for premium cannabis seeds.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://royalkingseeds.au/product-category/shop-all-cannabis-seeds?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Royal King Seeds",
              url: "https://royalkingseeds.au",
              logo: "https://royalkingseeds.au/icons/icon-512x512.png",
              description: "Australia's premier cannabis seed bank with discreet nationwide shipping.",
              areaServed: { "@type": "Country", name: "Australia" },
              contactPoint: { "@type": "ContactPoint", contactType: "customer service", email: "support@royalkingseeds.au", availableLanguage: ["English"] },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: [
                { "@type": "SiteNavigationElement", position: 1, name: "Autoflower Cannabis Seeds", description: "Fast-growing autoflowering cannabis seeds that flower automatically in 8-10 weeks. Beginner-friendly for Australian growers.", url: "https://royalkingseeds.au/product-category/autoflowering-seeds" },
                { "@type": "SiteNavigationElement", position: 2, name: "Feminised Cannabis Seeds", description: "Premium feminised cannabis seeds guaranteed 99.9% female plants for maximum yield and potency in Australian grows.", url: "https://royalkingseeds.au/product-category/feminized-seeds" },
                { "@type": "SiteNavigationElement", position: 3, name: "CBD Cannabis Seeds", description: "High-CBD cannabis seeds for therapeutic use. Low-THC varieties ideal for pain, anxiety, and relaxation.", url: "https://royalkingseeds.au/product-category/cbd-strains" },
                { "@type": "SiteNavigationElement", position: 4, name: "Indica Seeds", description: "Indica cannabis seeds for deep relaxation, sleep support, and pain relief. Premium genetics for nighttime use.", url: "https://royalkingseeds.au/product-category/indica-seeds" },
                { "@type": "SiteNavigationElement", position: 5, name: "Sativa Seeds", description: "Sativa cannabis seeds for energy, creativity, and focus. Uplifting daytime strains for Australian growers.", url: "https://royalkingseeds.au/product-category/sativa-seeds" },
                { "@type": "SiteNavigationElement", position: 6, name: "High THC Seeds", description: "The most potent cannabis seeds with 20%+ THC content. Maximum potency strains for experienced cultivators.", url: "https://royalkingseeds.au/product-category/high-tch-seeds" },
                { "@type": "SiteNavigationElement", position: 7, name: "Cannabis Growing Guides", description: "Free guides for Australian growers covering germination, indoor growing, lighting, nutrients, and harvest techniques.", url: "https://royalkingseeds.au/blog" },
                { "@type": "SiteNavigationElement", position: 8, name: "Shop All Cannabis Seeds", description: "Browse 1000+ premium cannabis seed strains. Feminised, autoflower, CBD, and mix packs with Australia-wide shipping.", url: "https://royalkingseeds.au/product-category/shop-all-cannabis-seeds" },
              ],
            }),
          }}
        />
        <SiteShell>{children}</SiteShell>
        <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=146311b4-6cd1-4f71-9ad2-dfca0c3e571e" async />
      </body>
    </html>
  );
}
