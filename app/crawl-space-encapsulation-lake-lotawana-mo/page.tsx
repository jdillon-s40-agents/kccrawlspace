import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Lake Lotawana, MO | Free Inspection' },
  description:
    'Crawl space encapsulation in Lake Lotawana, MO. Specialists in lake-community homes with higher water tables and older cottage-style foundations. Free inspection, lifetime warranty.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-encapsulation-lake-lotawana-mo/',
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
          name: 'Crawl Space Encapsulation Lake Lotawana MO',
          item: 'https://www.crawlspacekc.com/crawl-space-encapsulation-lake-lotawana-mo/',
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
        addressLocality: 'Lake Lotawana',
        addressRegion: 'MO',
        postalCode: '64086',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'City',
        name: 'Lake Lotawana',
        sameAs: 'https://en.wikipedia.org/wiki/Lake_Lotawana,_Missouri',
      },
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: { '@type': 'City', name: 'Lake Lotawana, MO' },
      description:
        'Complete crawl space encapsulation with 20-mil reinforced liner, sealed vents, and commercial dehumidifier sized for Lake Lotawana, MO lake-community homes.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you serve Lake Lotawana, MO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All of Lake Lotawana, the private lake community in Jackson County just east of Lee\'s Summit. Primary ZIP: 64086.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does living on the lake affect crawl space moisture?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Homes near Lake Lotawana's shoreline typically sit closer to a higher water table than homes further from the water, which adds to the moisture a crawl space vapor barrier and dehumidifier need to manage.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do older Lake Lotawana lake cottages need different treatment than newer homes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Often, yes. Lake Lotawana has a mix of original mid-century lake cottages and larger newer construction, and older cottage foundations sometimes need extra attention to framing and vent conditions before the liner goes in.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a free inspection really no-obligation in Lake Lotawana?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We inspect, document conditions with photos, and provide a written estimate — no pressure, no obligation to move forward.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does crawl space encapsulation take in Lake Lotawana?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most projects complete in one day. Larger lakefront homes may take two.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does crawl space encapsulation cost in Lake Lotawana?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Lake Lotawana homes run $3,000–$6,500 for a complete system depending on size and proximity to the water table. Free inspection and written estimate at no cost.',
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

export default function LakeLotawanaMOPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <section style={{ ...sectionPadding, background: '#0D0D0D', color: '#F9FAFB', textAlign: 'center' }}>
        <p style={{ color: '#F5A623', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 12 }}>
          Lake Lotawana, MO
        </p>
        <h1 style={{ ...headingStyle, fontSize: 'clamp(2.2rem,6vw,3.6rem)', lineHeight: 1.05, marginBottom: 20 }}>
          Crawl Space Encapsulation{' '}
          <span style={{ color: '#F5A623' }}>Lake Lotawana, MO</span>
        </h1>
        <p style={{ maxWidth: 680, margin: '0 auto 32px', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(249,250,251,.82)' }}>
          Lake Lotawana is a private lake community in Jackson County, just east of Lee&apos;s Summit, with a mix of original lake cottages and larger newer homes. We provide complete crawl space moisture control built around the higher water table that comes with living near the lake.
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
            Crawl Space Encapsulation in Lake Lotawana, MO
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: '#374151' }}>
            Crawl space encapsulation in Lake Lotawana seals the crawl space with a 20-mil reinforced liner, sealed vents, and a commercial dehumidifier sized to the home&apos;s actual footprint. Because so many homes here sit close to the shoreline, the ground water table typically runs higher than in inland KC-metro suburbs — we plan drainage and dehumidifier sizing around that reality instead of a one-size-fits-all install.
          </p>
        </div>
      </section>

      {/* 3. Why Lake Lotawana Homes Have Problems */}
      <section style={{ ...sectionPadding, background: '#0D0D0D', color: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 36, textAlign: 'center' }}>
            Why Lake Lotawana Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Higher Water Table Near the Lake
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Homes closer to Lake Lotawana&apos;s shoreline sit near a higher water table, which pushes more ground moisture up into the crawl space than a typical inland lot experiences.
              </p>
            </div>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Mix of Original Cottages &amp; Newer Homes
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Lake Lotawana has both original mid-century lake cottages and larger newer construction — older cottage crawl spaces often need extra framing and vent attention before a liner goes in.
              </p>
            </div>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Jackson County Clay Soil
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Like the rest of Jackson County, Lake Lotawana sits on dense clay soil that holds moisture against the foundation, making active drainage and humidity control especially important this close to the water.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section style={{ ...sectionPadding, background: '#F9FAFB', color: '#0D0D0D' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 36, textAlign: 'center' }}>
            Our Crawl Space Services in Lake Lotawana, MO
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
            Lake Lotawana Areas We Serve
          </h2>
          <p style={{ textAlign: 'center', marginBottom: 28, color: 'rgba(249,250,251,.75)', lineHeight: 1.6 }}>
            All of Lake Lotawana · bordering Lee&apos;s Summit · Jackson County lake community
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            <span style={{ background: 'rgba(245,166,35,.15)', border: '1px solid rgba(245,166,35,.4)', color: '#F5A623', borderRadius: 6, padding: '4px 12px', fontSize: '0.85rem', fontWeight: 600 }}>
              64086
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
              { n: '01', title: 'Free Inspection & Assessment', body: 'We inspect your Lake Lotawana crawl space — liner condition, framing, humidity levels, mold presence — and provide a written estimate at no cost.' },
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
            Frequently Asked Questions — Lake Lotawana, MO
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Do you serve Lake Lotawana, MO?',
                a: 'Yes. All of Lake Lotawana, the private lake community in Jackson County just east of Lee\'s Summit. Primary ZIP: 64086.',
              },
              {
                q: 'Does living on the lake affect crawl space moisture?',
                a: 'Yes. Homes near Lake Lotawana\'s shoreline typically sit closer to a higher water table than homes further from the water, which adds to the moisture a crawl space vapor barrier and dehumidifier need to manage.',
              },
              {
                q: 'Do older Lake Lotawana lake cottages need different treatment than newer homes?',
                a: 'Often, yes. Lake Lotawana has a mix of original mid-century lake cottages and larger newer construction, and older cottage foundations sometimes need extra attention to framing and vent conditions before the liner goes in.',
              },
              {
                q: 'Is a free inspection really no-obligation in Lake Lotawana?',
                a: 'Yes. We inspect, document conditions with photos, and provide a written estimate — no pressure, no obligation to move forward.',
              },
              {
                q: 'How long does crawl space encapsulation take in Lake Lotawana?',
                a: 'Most projects complete in one day. Larger lakefront homes may take two.',
              },
              {
                q: 'What does crawl space encapsulation cost in Lake Lotawana?',
                a: 'Most Lake Lotawana homes run $3,000–$6,500 for a complete system depending on size and proximity to the water table. Free inspection and written estimate at no cost.',
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
            Get a Free Estimate in Lake Lotawana, MO
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
