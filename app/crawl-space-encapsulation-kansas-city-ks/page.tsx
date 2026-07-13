import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Kansas City, KS | KC Crawl Space Specialists' },
  description:
    'Crawl space encapsulation in Kansas City, KS. Serving Argentine, Armourdale, Turner, Piper, and all of Wyandotte County. Older homes. Free inspection.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-encapsulation-kansas-city-ks/',
  }};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.crawlspacekc.com/' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Crawl Space Encapsulation Kansas City KS',
          item: 'https://www.crawlspacekc.com/crawl-space-encapsulation-kansas-city-ks/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'KC Crawl Space Specialists LLC',
      url: 'https://www.crawlspacekc.com',
      telephone: '+18169622111',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kansas City',
        addressRegion: 'KS',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'City',
        name: 'Kansas City',
        sameAs: 'https://en.wikipedia.org/wiki/Kansas_City,_Kansas',
      },
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: { '@type': 'City', name: 'Kansas City, KS' },
      description:
        'Complete crawl space encapsulation with 20-mil reinforced liner, sealed vents, and commercial dehumidifier for Kansas City, KS homes.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you serve Kansas City, KS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We serve all of Kansas City, KS (Wyandotte County), including Argentine, Armourdale, Rosedale, Turner, Piper, and all KCKK neighborhoods.',
          },
        },
        {
          '@type': 'Question',
          name: 'My older Argentine/Rosedale home has a crawl space — what are the common problems?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Older KCKK homes in neighborhoods like Argentine and Rosedale frequently have original crawl spaces with no liner, open vents, and original wood framing exposed to decades of moisture. Musty odors, mold on framing, and wet or fallen insulation are the most common issues we find.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is KCKK crawl space encapsulation different from the MO side?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The services are the same. Both sides of the state line use similar liner, dehumidifier, and vent-sealing systems. The difference is Wyandotte County soil vs. Jackson/Clay County soil, but the solution is the same: seal, dehumidify, and maintain.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you serve the Turner and Piper areas of KCKK?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We serve all of Wyandotte County, including Turner, Piper, and the western parts of Kansas City, KS.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does crawl space encapsulation take in Kansas City, KS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most KCKK projects complete in one day. Older homes with more deterioration or drainage issues may take two.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does crawl space encapsulation cost in Kansas City, KS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most KCKK homes run $2,800–$5,500 for a complete system. Older homes occasionally need additional mold treatment. Free inspection and written estimate provided.',
          },
        },
      ],
    },
  ],
};

const services = [
  { href: '/crawl-space-encapsulation-kansas-city/', label: 'Crawl Space Encapsulation' },
  { href: '/crawl-space-vapor-barrier-kansas-city/', label: 'Vapor Barrier Installation' },
  { href: '/crawl-space-waterproofing-kansas-city/', label: 'Crawl Space Waterproofing' },
  { href: '/crawl-space-dehumidifier-kansas-city/', label: 'Dehumidifier Installation' },
  { href: '/crawl-space-drainage-sump-pump-kansas-city/', label: 'Drainage & Sump Pump' },
  { href: '/crawl-space-insulation-removal-kansas-city/', label: 'Insulation Removal' },
];

const headingStyle: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', sans-serif",
  fontWeight: 800,
  textTransform: 'uppercase' as const,
};

const sectionPadding: React.CSSProperties = {
  padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
};

const contentCard: React.CSSProperties = {
  background: '#111827',
  border: '1px solid rgba(255,255,255,.08)',
  borderRadius: 12,
  padding: 20,
};

const faqCard: React.CSSProperties = {
  background: '#0D0D0D',
  border: '1px solid rgba(255,255,255,.1)',
  borderRadius: 12,
  padding: '22px 24px',
};

export default function KansasCityKSPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <section style={{ ...sectionPadding, background: '#0D0D0D', color: '#F9FAFB', textAlign: 'center' }}>
        <p style={{ color: '#F5A623', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 12 }}>
          Kansas City, KS
        </p>
        <h1 style={{ ...headingStyle, fontSize: 'clamp(2.2rem,6vw,3.6rem)', lineHeight: 1.05, marginBottom: 20 }}>
          Crawl Space Encapsulation{' '}
          <span style={{ color: '#F5A623' }}>Kansas City, KS</span>
        </h1>
        <p style={{ maxWidth: 680, margin: '0 auto 32px', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(249,250,251,.82)' }}>
          Kansas City, KS has some of the oldest housing stock in the metro — older urban neighborhoods, post-war subdivisions, and working-class communities built on Wyandotte County soil. We help Kansas City KS homeowners modernize their crawl space moisture control and address humidity, mold, and odor problems.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="#estimate"
            style={{ background: '#F5A623', color: '#0D0D0D', fontWeight: 700, padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: '1rem' }}
          >
            Get a Free Inspection
          </Link>
          <a
            href={PHONE_HREF}
            style={{ background: 'transparent', color: '#F9FAFB', fontWeight: 700, padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: '1rem', border: '2px solid rgba(249,250,251,.3)' }}
          >
            {PHONE}
          </a>
        </div>
      </section>

      {/* 2. Quick Answer */}
      <section style={{ ...sectionPadding, background: '#F9FAFB', color: '#0D0D0D' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 18 }}>
            Crawl Space Encapsulation in Kansas City, KS
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: '#374151' }}>
            Crawl space encapsulation in Kansas City, KS seals the crawl space with a 20-mil reinforced liner, vent sealing, and a commercial dehumidifier. KCKK has some of the oldest housing in the metro — many homes from the 1920s through 1960s with original crawl spaces, minimal vapor barriers, and open vents that cannot manage Wyandotte County soil moisture and Kansas City summer humidity.
          </p>
        </div>
      </section>

      {/* 3. Why KCKK Homes Have Problems */}
      <section style={{ ...sectionPadding, background: '#0D0D0D', color: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 36, textAlign: 'center' }}>
            Why Kansas City, KS Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Older Urban Housing Stock
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Kansas City, KS has a high concentration of homes built between 1920 and 1965. These homes were constructed when vapor barriers were not required and foundation vents were standard. Original crawl spaces in these homes have been exposed to moisture for 60–100 years, and many have never had a proper liner or vent sealing.
              </p>
            </div>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Wyandotte County Soil
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                KCKK sits in Wyandotte County, which has clay and silt loam soils that hold moisture near foundations. Like the clay soils across the entire KC metro, Wyandotte County ground keeps crawl space conditions damp and promotes humidity buildup in unsealed spaces.
              </p>
            </div>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Kansas Side Humidity
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Kansas City, KS experiences the same humid Kansas City summers as the Missouri side — 85–90% relative humidity outdoors during summer months. Open foundation vents in older KCKK homes allow this humid air in, causing mold growth, insulation failure, and musty odors common to homes across the metro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section style={{ ...sectionPadding, background: '#F9FAFB', color: '#0D0D0D' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 36, textAlign: 'center' }}>
            Our Crawl Space Services in Kansas City, KS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                style={{
                  display: 'block',
                  background: '#111827',
                  color: '#F9FAFB',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: '20px 24px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                }}
              >
                {svc.label}
                <span style={{ display: 'block', color: '#F5A623', fontSize: '0.85rem', marginTop: 6, fontWeight: 400 }}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Areas We Serve */}
      <section style={{ ...sectionPadding, background: '#1B3A6B', color: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 12, textAlign: 'center' }}>
            Kansas City, KS Neighborhoods We Serve
          </h2>
          <p style={{ textAlign: 'center', marginBottom: 28, color: 'rgba(249,250,251,.75)', lineHeight: 1.6 }}>
            Argentine · Armourdale · Rosedale · Turner · Piper · Riverview · Quindaro · Central Ave corridor · 18th Street area · Minnesota Ave corridor · 7th Street area · Parallel Pkwy corridor
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {['66101','66102','66103','66104','66105','66106','66109','66111','66112'].map((zip) => (
              <span
                key={zip}
                style={{ background: 'rgba(245,166,35,.15)', border: '1px solid rgba(245,166,35,.4)', color: '#F5A623', borderRadius: 6, padding: '4px 12px', fontSize: '0.85rem', fontWeight: 600 }}
              >
                {zip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Process */}
      <section style={{ ...sectionPadding, background: '#0D0D0D', color: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 36, textAlign: 'center' }}>
            Our Crawl Space Encapsulation Process
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {[
              { n: '01', title: 'Free Inspection & Assessment', body: 'We inspect your KCKK crawl space — liner condition, framing, humidity levels, mold presence — and provide a written estimate at no cost.' },
              { n: '02', title: 'Complete Moisture System Install', body: 'We install a 20-mil reinforced liner, seal all foundation vents, and install a commercial-grade dehumidifier sized for your crawl space.' },
              { n: '03', title: 'Final Walk-Through & Warranty', body: 'We walk you through the completed system, confirm target humidity levels are achievable, and provide a written warranty on our work.' },
            ].map((step) => (
              <div key={step.n} style={contentCard}>
                <div style={{ color: '#F5A623', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '2.5rem', lineHeight: 1, marginBottom: 12 }}>
                  {step.n}
                </div>
                <h3 style={{ ...headingStyle, fontSize: '1.1rem', marginBottom: 10 }}>{step.title}</h3>
                <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.95rem' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Financing */}
      <section style={{ ...sectionPadding, background: '#F9FAFB', color: '#0D0D0D' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 28, textAlign: 'center' }}>
            Financing Options
          </h2>
          <FinancingOptions />
        </div>
      </section>

      {/* 8. FAQ */}
      <section style={{ ...sectionPadding, background: '#1B3A6B', color: '#F9FAFB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 32, textAlign: 'center' }}>
            Frequently Asked Questions — Kansas City, KS
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Do you serve Kansas City, KS?',
                a: 'Yes. We serve all of Kansas City, KS (Wyandotte County), including Argentine, Armourdale, Rosedale, Turner, Piper, and all KCKK neighborhoods.',
              },
              {
                q: 'My older Argentine/Rosedale home has a crawl space — what are the common problems?',
                a: 'Older KCKK homes in neighborhoods like Argentine and Rosedale frequently have original crawl spaces with no liner, open vents, and original wood framing exposed to decades of moisture. Musty odors, mold on framing, and wet or fallen insulation are the most common issues we find.',
              },
              {
                q: 'Is KCKK crawl space encapsulation different from the MO side?',
                a: 'The services are the same. Both sides of the state line use similar liner, dehumidifier, and vent-sealing systems. The difference is Wyandotte County soil vs. Jackson/Clay County soil, but the solution is the same: seal, dehumidify, and maintain.',
              },
              {
                q: 'Do you serve the Turner and Piper areas of KCKK?',
                a: 'Yes. We serve all of Wyandotte County, including Turner, Piper, and the western parts of Kansas City, KS.',
              },
              {
                q: 'How long does crawl space encapsulation take in Kansas City, KS?',
                a: 'Most KCKK projects complete in one day. Older homes with more deterioration or drainage issues may take two.',
              },
              {
                q: 'What does crawl space encapsulation cost in Kansas City, KS?',
                a: 'Most KCKK homes run $2,800–$5,500 for a complete system. Older homes occasionally need additional mold treatment. Free inspection and written estimate provided.',
              },
            ].map((faq) => (
              <div key={faq.q} style={faqCard}>
                <h3 style={{ ...headingStyle, fontSize: '1.05rem', marginBottom: 10 }}>{faq.q}</h3>
                <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.95rem', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section id="estimate" style={{ ...sectionPadding, background: '#111827', color: '#F9FAFB' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 12 }}>
            Get a Free Estimate in Kansas City, KS
          </h2>
          <p style={{ color: 'rgba(249,250,251,.7)', marginBottom: 32, lineHeight: 1.6 }}>
            Schedule your free crawl space inspection. No obligation. Written estimate provided.
          </p>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
