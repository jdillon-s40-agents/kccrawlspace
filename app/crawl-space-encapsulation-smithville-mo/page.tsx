import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Crawl Space Encapsulation Smithville MO | KC Crawl Space Specialists',
  description:
    'Crawl space encapsulation in Smithville, MO. Serving Smithville Lake area, downtown neighborhoods, and all of Clay County north of Liberty. Free inspection.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://crawlspacekc.com/' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Crawl Space Encapsulation Smithville MO',
          item: 'https://crawlspacekc.com/crawl-space-encapsulation-smithville-mo/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'KC Crawl Space Specialists LLC',
      url: 'https://crawlspacekc.com',
      telephone: '+18169622111',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Smithville',
        addressRegion: 'MO',
        postalCode: '64089',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'City',
        name: 'Smithville',
        sameAs: 'https://en.wikipedia.org/wiki/Smithville,_Missouri',
      },
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: { '@type': 'City', name: 'Smithville, MO' },
      description:
        'Complete crawl space encapsulation with 20-mil reinforced liner, sealed vents, and commercial dehumidifier for Smithville, MO homes.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you serve Smithville, MO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All of Smithville and northern Clay County, including the Smithville Lake area, downtown neighborhoods, and the 169 Highway corridor. Primary ZIP: 64089.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does being near Smithville Lake affect crawl space moisture?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Lake-adjacent areas experience higher regional ambient humidity, which makes crawl space moisture control more important than in drier inland locations. Sealed crawl spaces with properly sized dehumidifiers are particularly important for homes near the lake.',
          },
        },
        {
          '@type': 'Question',
          name: 'My Smithville home has mold under the floor — what should I do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Call for a free inspection. Mold on joists or subfloor means humidity has been above 60% consistently. We treat the affected framing and address the moisture source through encapsulation and dehumidification.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do newer Smithville subdivisions need encapsulation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Even newer homes on Clay County clay soil develop crawl space moisture. Newer doesn't mean immune, especially in areas where surrounding development affects local drainage.",
          },
        },
        {
          '@type': 'Question',
          name: 'How long does crawl space encapsulation take in Smithville?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most projects complete in one day. Drainage issues or larger crawl spaces may take two days.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does crawl space encapsulation cost in Smithville?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Smithville homes run $2,800–$5,500 for a complete system. Free inspection and written estimate at no cost.',
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

export default function SmithvilleMOPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <section style={{ ...sectionPadding, background: '#0D0D0D', color: '#F9FAFB', textAlign: 'center' }}>
        <p style={{ color: '#F5A623', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 12 }}>
          Smithville, MO
        </p>
        <h1 style={{ ...headingStyle, fontSize: 'clamp(2.2rem,6vw,3.6rem)', lineHeight: 1.05, marginBottom: 20 }}>
          Crawl Space Encapsulation{' '}
          <span style={{ color: '#F5A623' }}>Smithville, MO</span>
        </h1>
        <p style={{ maxWidth: 680, margin: '0 auto 32px', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(249,250,251,.82)' }}>
          Smithville sits north of Liberty in Clay County, where lake-adjacent land and clay soil create year-round crawl space moisture challenges. Whether your home is near Smithville Lake or in the older downtown neighborhoods, we provide complete crawl space moisture control for Smithville homeowners.
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
            Crawl Space Encapsulation in Smithville, MO
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: '#374151' }}>
            Crawl space encapsulation in Smithville seals the crawl space with a 20-mil reinforced liner, sealed vents, and a commercial dehumidifier. Smithville sits in northern Clay County near Smithville Lake, where elevated regional moisture and clay soil combine with Kansas City summers to create persistent crawl space humidity in older and newer homes alike.
          </p>
        </div>
      </section>

      {/* 3. Why Smithville Homes Have Problems */}
      <section style={{ ...sectionPadding, background: '#0D0D0D', color: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 36, textAlign: 'center' }}>
            Why Smithville Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Smithville Lake Proximity
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Smithville Lake creates elevated regional moisture conditions year-round. Homes near the lake or in surrounding areas experience higher ambient humidity than purely inland locations, and crawl spaces in these properties can see more persistent moisture than comparable homes farther from water.
              </p>
            </div>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Clay County Soil
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Smithville sits on Clay County clay soil that holds moisture against foundations regardless of rainfall. Even in dry months, ground moisture evaporates into the crawl space air, requiring active humidity control to maintain conditions below the 60% mold threshold.
              </p>
            </div>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Growing Suburb with Mixed Housing Ages
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Smithville has both older homes in the historic downtown area and newer subdivisions built as the city has grown. Both housing types can develop crawl space moisture problems — older homes through original inadequate systems, newer homes through grading and drainage changes in developing areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section style={{ ...sectionPadding, background: '#F9FAFB', color: '#0D0D0D' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 36, textAlign: 'center' }}>
            Our Crawl Space Services in Smithville, MO
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
            Smithville Areas We Serve
          </h2>
          <p style={{ textAlign: 'center', marginBottom: 28, color: 'rgba(249,250,251,.75)', lineHeight: 1.6 }}>
            Downtown Smithville · Smithville Lake area · 169 Highway corridor · 92 Highway corridor · Plattsburg Road area · Clay County rural areas north of Liberty
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            <span style={{ background: 'rgba(245,166,35,.15)', border: '1px solid rgba(245,166,35,.4)', color: '#F5A623', borderRadius: 6, padding: '4px 12px', fontSize: '0.85rem', fontWeight: 600 }}>
              64089
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
              { n: '01', title: 'Free Inspection & Assessment', body: 'We inspect your Smithville crawl space — liner condition, framing, humidity levels, mold presence — and provide a written estimate at no cost.' },
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
            Frequently Asked Questions — Smithville, MO
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Do you serve Smithville, MO?',
                a: 'Yes. All of Smithville and northern Clay County, including the Smithville Lake area, downtown neighborhoods, and the 169 Highway corridor. Primary ZIP: 64089.',
              },
              {
                q: 'Does being near Smithville Lake affect crawl space moisture?',
                a: 'Yes. Lake-adjacent areas experience higher regional ambient humidity, which makes crawl space moisture control more important than in drier inland locations. Sealed crawl spaces with properly sized dehumidifiers are particularly important for homes near the lake.',
              },
              {
                q: 'My Smithville home has mold under the floor — what should I do?',
                a: 'Call for a free inspection. Mold on joists or subfloor means humidity has been above 60% consistently. We treat the affected framing and address the moisture source through encapsulation and dehumidification.',
              },
              {
                q: 'Do newer Smithville subdivisions need encapsulation?',
                a: "Yes. Even newer homes on Clay County clay soil develop crawl space moisture. Newer doesn't mean immune, especially in areas where surrounding development affects local drainage.",
              },
              {
                q: 'How long does crawl space encapsulation take in Smithville?',
                a: 'Most projects complete in one day. Drainage issues or larger crawl spaces may take two days.',
              },
              {
                q: 'What does crawl space encapsulation cost in Smithville?',
                a: 'Most Smithville homes run $2,800–$5,500 for a complete system. Free inspection and written estimate at no cost.',
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
            Get a Free Estimate in Smithville, MO
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
