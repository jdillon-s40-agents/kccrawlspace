import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Lake Quivira, KS | KC Crawl Space Specialists' },
  description:
    'Crawl space encapsulation in Lake Quivira, KS. Serving this private lake community on the Johnson/Wyandotte County line. Free inspection, lifetime warranty.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-encapsulation-lake-quivira-ks/',
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
          name: 'Crawl Space Encapsulation Lake Quivira KS',
          item: 'https://www.crawlspacekc.com/crawl-space-encapsulation-lake-quivira-ks/',
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
        addressLocality: 'Lake Quivira',
        addressRegion: 'KS',
        postalCode: '66217',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'City',
        name: 'Lake Quivira',
        sameAs: 'https://en.wikipedia.org/wiki/Lake_Quivira,_Kansas',
      },
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: { '@type': 'City', name: 'Lake Quivira, KS' },
      description:
        'Complete crawl space encapsulation with 20-mil reinforced liner, sealed vents, and commercial dehumidifier for Lake Quivira, KS homes.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you serve Lake Quivira, KS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All of Lake Quivira, the private lake community spanning the Johnson and Wyandotte County line. Primary ZIP: 66217.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does living on Lake Quivira affect crawl space moisture?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Homes on or near the lake experience higher ambient humidity than inland properties, which raises the moisture load a crawl space has to manage year-round.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do gated-community access requirements slow down the inspection?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "No. We coordinate directly with homeowners on gate access and scheduling ahead of time so your free inspection happens without any extra hassle.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do larger lakefront homes need a bigger dehumidifier?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Often, yes. We size the commercial dehumidifier to your actual crawl space square footage and moisture load rather than using a generic one-size-fits-all unit.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does crawl space encapsulation take in Lake Quivira?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most projects complete in one day. Larger lakefront homes may take two.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does crawl space encapsulation cost in Lake Quivira?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Lake Quivira homes run $3,000–$7,000 for a complete system depending on size and lake proximity. Free inspection and written estimate at no cost.',
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

export default function LakeQuiviraKSPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <section style={{ ...sectionPadding, background: '#0D0D0D', color: '#F9FAFB', textAlign: 'center' }}>
        <p style={{ color: '#F5A623', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 12 }}>
          Lake Quivira, KS
        </p>
        <h1 style={{ ...headingStyle, fontSize: 'clamp(2.2rem,6vw,3.6rem)', lineHeight: 1.05, marginBottom: 20 }}>
          Crawl Space Encapsulation{' '}
          <span style={{ color: '#F5A623' }}>Lake Quivira, KS</span>
        </h1>
        <p style={{ maxWidth: 680, margin: '0 auto 32px', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(249,250,251,.82)' }}>
          Lake Quivira is a private gated lake community spanning the Johnson and Wyandotte County line, where lake-adjacent ground and elevated regional humidity create year-round crawl space moisture challenges. We coordinate directly with homeowners on gate access, so scheduling your free inspection is simple.
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
            Crawl Space Encapsulation in Lake Quivira, KS
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: '#374151' }}>
            Crawl space encapsulation in Lake Quivira seals the crawl space with a 20-mil reinforced liner, sealed vents, and a commercial dehumidifier sized to the home. Homes on or near the lake experience higher ambient humidity than inland properties, which adds to the moisture load a crawl space has to manage on top of typical Kansas City clay-soil conditions.
          </p>
        </div>
      </section>

      {/* 3. Why Lake Quivira Homes Have Problems */}
      <section style={{ ...sectionPadding, background: '#0D0D0D', color: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 36, textAlign: 'center' }}>
            Why Lake Quivira Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Lakefront &amp; Lake-Adjacent Moisture
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Homes on or near Lake Quivira experience elevated regional humidity year-round, which raises the baseline moisture level a crawl space has to handle compared to homes farther from water.
              </p>
            </div>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Wooded, Custom Lakeside Lots
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Lake Quivira&apos;s wooded, custom-built lots often have larger crawl spaces than typical suburban homes, which need a dehumidifier properly sized to the actual square footage to keep humidity in check.
              </p>
            </div>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Clay Soil on the County Line
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Spanning the Johnson and Wyandotte County line, Lake Quivira sits on the same dense regional clay soil that holds moisture against foundations across the metro, regardless of a home&apos;s age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section style={{ ...sectionPadding, background: '#F9FAFB', color: '#0D0D0D' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 36, textAlign: 'center' }}>
            Our Crawl Space Services in Lake Quivira, KS
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
            Lake Quivira Areas We Serve
          </h2>
          <p style={{ textAlign: 'center', marginBottom: 28, color: 'rgba(249,250,251,.75)', lineHeight: 1.6 }}>
            All of Lake Quivira · lakefront properties · golf course community · Johnson/Wyandotte County line
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            <span style={{ background: 'rgba(245,166,35,.15)', border: '1px solid rgba(245,166,35,.4)', color: '#F5A623', borderRadius: 6, padding: '4px 12px', fontSize: '0.85rem', fontWeight: 600 }}>
              66217
            </span>
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
              { n: '01', title: 'Free Inspection & Assessment', body: 'We coordinate gate access ahead of time, inspect your Lake Quivira crawl space — liner condition, framing, humidity levels — and provide a written estimate at no cost.' },
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
            Frequently Asked Questions — Lake Quivira, KS
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Do you serve Lake Quivira, KS?',
                a: 'Yes. All of Lake Quivira, the private lake community spanning the Johnson and Wyandotte County line. Primary ZIP: 66217.',
              },
              {
                q: 'Does living on Lake Quivira affect crawl space moisture?',
                a: 'Yes. Homes on or near the lake experience higher ambient humidity than inland properties, which raises the moisture load a crawl space has to manage year-round.',
              },
              {
                q: 'Do gated-community access requirements slow down the inspection?',
                a: 'No. We coordinate directly with homeowners on gate access and scheduling ahead of time so your free inspection happens without any extra hassle.',
              },
              {
                q: 'Do larger lakefront homes need a bigger dehumidifier?',
                a: 'Often, yes. We size the commercial dehumidifier to your actual crawl space square footage and moisture load rather than using a generic one-size-fits-all unit.',
              },
              {
                q: 'How long does crawl space encapsulation take in Lake Quivira?',
                a: 'Most projects complete in one day. Larger lakefront homes may take two.',
              },
              {
                q: 'What does crawl space encapsulation cost in Lake Quivira?',
                a: 'Most Lake Quivira homes run $3,000–$7,000 for a complete system depending on size and lake proximity. Free inspection and written estimate at no cost.',
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
            Get a Free Estimate in Lake Quivira, KS
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
