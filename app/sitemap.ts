import type { MetadataRoute } from 'next';

const BASE_URL = 'https://crawlspacekc.com';

const coreServicePages = [
  'crawl-space-encapsulation-kansas-city',
  'crawl-space-repair-kansas-city',
  'crawl-space-encapsulation-cost-kansas-city',
  'crawl-space-vapor-barrier-kansas-city',
  'crawl-space-waterproofing-kansas-city',
  'crawl-space-dehumidifier-kansas-city',
  'crawl-space-mold-kansas-city',
  'crawl-space-insulation-removal-kansas-city',
  'crawl-space-drainage-sump-pump-kansas-city',
];

const cityPages = [
  'crawl-space-encapsulation-kansas-city-mo',
  'crawl-space-encapsulation-lees-summit-mo',
  'crawl-space-encapsulation-blue-springs-mo',
  'crawl-space-encapsulation-independence-mo',
  'crawl-space-encapsulation-liberty-mo',
  'crawl-space-encapsulation-gladstone-mo',
  'crawl-space-encapsulation-parkville-mo',
  'crawl-space-encapsulation-raytown-mo',
  'crawl-space-encapsulation-grandview-mo',
  'crawl-space-encapsulation-belton-mo',
  'crawl-space-encapsulation-raymore-mo',
  'crawl-space-encapsulation-harrisonville-mo',
  'crawl-space-encapsulation-smithville-mo',
  'crawl-space-encapsulation-kearney-mo',
  'crawl-space-encapsulation-platte-city-mo',
  'crawl-space-encapsulation-kansas-city-ks',
  'crawl-space-encapsulation-overland-park-ks',
  'crawl-space-encapsulation-olathe-ks',
  'crawl-space-encapsulation-shawnee-ks',
  'crawl-space-encapsulation-lenexa-ks',
  'crawl-space-encapsulation-leawood-ks',
  'crawl-space-encapsulation-prairie-village-ks',
  'crawl-space-encapsulation-mission-ks',
  'crawl-space-encapsulation-merriam-ks',
  'crawl-space-encapsulation-gardner-ks',
  'crawl-space-encapsulation-spring-hill-ks',
  'crawl-space-encapsulation-bonner-springs-ks',
  'crawl-space-encapsulation-basehor-ks',
  'crawl-space-encapsulation-de-soto-ks',
];

const guidePages = [
  'wet-crawl-space-after-rain',
  'standing-water-in-crawl-space',
  'crawl-space-smells-musty',
  'crawl-space-mold-warning-signs',
  'falling-insulation-in-crawl-space',
  'cold-floors-above-crawl-space',
  'crawl-space-vents-open-or-closed',
  'crawl-space-vapor-barrier-thickness',
  'encapsulation-vs-vapor-barrier',
  'do-i-need-crawl-space-dehumidifier',
];

const sitePages = ['about', 'contact', 'faq', 'pricing', 'encapsulation', 'mobile-homes', 'service-areas', 'guides'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  ): MetadataRoute.Sitemap[number] => ({
    url: path === '' ? BASE_URL : `${BASE_URL}/${path}/`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    entry('', 1.0, 'weekly'),
    ...coreServicePages.map((p) => entry(p, 0.9, 'monthly')),
    ...sitePages.map((p) => entry(p, 0.7, 'monthly')),
    ...guidePages.map((p) => entry(p, 0.7, 'monthly')),
    ...cityPages.map((p) => entry(p, 0.8, 'monthly')),
  ];
}
