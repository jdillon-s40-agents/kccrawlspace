import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import MobileBottomBar from '@/components/MobileBottomBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'KC Crawl Space Specialists | Kansas City Crawlspace Encapsulation',
    template: '%s | KC Crawl Space Specialists',
  },
  description:
    "Kansas City's only dedicated crawlspace specialist. Encapsulation, vapor barriers, and mobile home underbelly repair. Free inspection. Lifetime warranty.",
  metadataBase: new URL('https://www.crawlspacekc.com'),
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'KC Crawl Space Specialists LLC',
  telephone: '+18169622111',
  email: 'info@crawlspacekc.com',
  url: 'https://crawlspacekc.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kansas City',
    addressRegion: 'MO',
    addressCountry: 'US',
  },
  areaServed: 'Kansas City Metro',
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '50',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <head>
<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </head>
      <body>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1018450764440615');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1018450764440615&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomBar />
        <SpeedInsights />
      </body>
    </html>
  );
}
