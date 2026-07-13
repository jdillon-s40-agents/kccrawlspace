import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Riverside, MO | KC Crawl Space Specialists' },
  description:
    'Crawl space encapsulation in Riverside, MO. Serving neighborhoods near the Missouri River, KCI Airport corridor, and all of Platte County. Free inspection.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-encapsulation-riverside-mo/',
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
          name: 'Crawl Space Encapsulation Riverside MO',
          item: 'https://www.crawlspacekc.com/crawl-space-encapsulation-riverside-mo/',
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
        addressLocality: 'Riverside',
        addressRegion: 'MO',
        postalCode: '64150',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'City',
        name: 'Riverside',
        sameAs: 'https://en.wikipedia.org/wiki/Riverside,_Missouri',
      },
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: { '@type': 'City', name: 'Riverside, MO' },
      description:
        'Complete crawl space encapsulation with 20-mil reinforced liner, sealed vents, and commercial dehumidifier for Riverside, MO homes.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you serve Riverside, MO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All of Riverside, including neighborhoods near the Missouri River bottoms, the KCI Airport corridor, and Vivion Road. Primary ZIP: 64150.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does being near the Missouri River affect crawl space moisture in Riverside?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Riverside sits low in the Missouri River bottoms, which means a higher water table and more ambient moisture than homes on higher ground elsewhere in the metro — crawl spaces here tend to run wetter year-round.',
          },
        },
        {
          '@type': 'Question',
          name: 'My Riverside home has standing water under the house — what should I do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Call for a free inspection right away. Standing water needs to be addressed with drainage before a vapor barrier goes in, otherwise the barrier just traps the water underneath it.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do newer homes near KCI in Riverside need encapsulation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Even newer construction near the airport corridor sits on the same river-bottom ground, so age alone doesn't protect a crawl space from humidity and moisture intrusion.",
          },
        },
        {
          '@type': 'Question',
          name: 'How long does crawl space encapsulation take in Riverside?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most projects complete in one day. Homes with standing water or drainage issues first may take two to three days.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does crawl space encapsulation cost in Riverside?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Riverside homes run $2,800–$6,000 for a complete system, depending on whether drainage work is needed. Free inspection and written estimate at no cost.',
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

export default function RiversideMOPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <section style={{ ...sectionPadding, background: '#0D0D0D', color: '#F9FAFB', textAlign: 'center' }}>
        <p style={{ color: '#F5A623', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 12 }}>
          Riverside, MO
        </p>
        <h1 style={{ ...headingStyle, fontSize: 'clamp(2.2rem,6vw,3.6rem)', lineHeight: 1.05, marginBottom: 20 }}>
          Crawl Space Encapsulation{' '}
          <span style={{ color: '#F5A623' }}>Riverside, MO</span>
        </h1>
        <p style={{ maxWidth: 680, margin: '0 auto 32px', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(249,250,251,.82)' }}>
          Riverside sits low in the Missouri River bottoms in Platte County, where a high water table and river-adjacent ground create some of the wettest crawl space conditions in the metro. Whether your home is near the river, the KCI corridor, or Vivion Road, we provide complete crawl space moisture control for Riverside homeowners.
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
            Crawl Space Encapsulation in Riverside, MO
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: '#374151' }}>
            Crawl space encapsulation in Riverside seals the crawl space with a 20-mil reinforced liner, sealed vents, and a commercial dehumidifier. Riverside sits directly in the Missouri River bottoms in Platte County, which means a higher water table and more ambient ground moisture than homes on higher ground elsewhere in the metro.
          </p>
        </div>
      </section>

      {/* 3. Why Riverside Homes Have Problems */}
      <section style={{ ...sectionPadding, background: '#0D0D0D', color: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 36, textAlign: 'center' }}>
            Why Riverside Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Missouri River Bottom Ground
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Riverside sits in the low-lying river bottoms along the Missouri River, where a shallow water table keeps ground moisture elevated year-round — a much wetter starting point than homes on higher ground.
              </p>
            </div>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Drainage-Dependent Lots
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Because the water table sits close to the surface, proper drainage around the foundation matters more here than almost anywhere else in the metro — without it, water has nowhere to go but under the house.
              </p>
            </div>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Mixed Residential &amp; Industrial Growth
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Riverside has grown alongside industrial and commercial development near KCI, and residential lots in the flatter bottomland areas often need active drainage and dehumidification to keep crawl spaces dry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section style={{ ...sectionPadding, background: '#F9FAFB', color: '#0D0D0D' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 36, textAlign: 'center' }}>
            Our Crawl Space Services in Riverside, MO
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
            Riverside Areas We Serve
          </h2>
          <p style={{ textAlign: 'center', marginBottom: 28, color: 'rgba(249,250,251,.75)', lineHeight: 1.6 }}>
            Missouri River bottoms · Vivion Road corridor · KCI Airport area · Horseshoe Bend area · Northland Platte County
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            <span style={{ background: 'rgba(245,166,35,.15)', border: '1px solid rgba(245,166,35,.4)', color: '#F5A623', borderRadius: 6, padding: '4px 12px', fontSize: '0.85rem', fontWeight: 600 }}>
              64150
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
              { n: '01', title: 'Free Inspection & Assessment', body: 'We inspect your Riverside crawl space — liner condition, framing, humidity levels, standing water — and provide a written estimate at no cost.' },
              { n: '02', title: 'Drainage & Moisture System Install', body: 'We address any standing water with proper drainage, install a 20-mil reinforced liner, seal all foundation vents, and add a commercial-grade dehumidifier.' },
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
            Frequently Asked Questions — Riverside, MO
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Do you serve Riverside, MO?',
                a: 'Yes. All of Riverside, including neighborhoods near the Missouri River bottoms, the KCI Airport corridor, and Vivion Road. Primary ZIP: 64150.',
              },
              {
                q: 'Does being near the Missouri River affect crawl space moisture in Riverside?',
                a: 'Yes. Riverside sits low in the Missouri River bottoms, which means a higher water table and more ambient moisture than homes on higher ground elsewhere in the metro — crawl spaces here tend to run wetter year-round.',
              },
              {
                q: 'My Riverside home has standing water under the house — what should I do?',
                a: 'Call for a free inspection right away. Standing water needs to be addressed with drainage before a vapor barrier goes in, otherwise the barrier just traps the water underneath it.',
              },
              {
                q: 'Do newer homes near KCI in Riverside need encapsulation?',
                a: "Yes. Even newer construction near the airport corridor sits on the same river-bottom ground, so age alone doesn't protect a crawl space from humidity and moisture intrusion.",
              },
              {
                q: 'How long does crawl space encapsulation take in Riverside?',
                a: 'Most projects complete in one day. Homes with standing water or drainage issues first may take two to three days.',
              },
              {
                q: 'What does crawl space encapsulation cost in Riverside?',
                a: 'Most Riverside homes run $2,800–$6,000 for a complete system, depending on whether drainage work is needed. Free inspection and written estimate at no cost.',
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
            Get a Free Estimate in Riverside, MO
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
