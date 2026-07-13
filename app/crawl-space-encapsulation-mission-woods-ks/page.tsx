import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Mission Woods, KS | KC Crawl Space Specialists' },
  description:
    'Crawl space encapsulation in Mission Woods, KS. Serving this wooded Johnson County community near Mission Hills. Free inspection, lifetime warranty.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-encapsulation-mission-woods-ks/',
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
          name: 'Crawl Space Encapsulation Mission Woods KS',
          item: 'https://www.crawlspacekc.com/crawl-space-encapsulation-mission-woods-ks/',
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
        addressLocality: 'Mission Woods',
        addressRegion: 'KS',
        postalCode: '66208',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'City',
        name: 'Mission Woods',
        sameAs: 'https://en.wikipedia.org/wiki/Mission_Woods,_Kansas',
      },
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: { '@type': 'City', name: 'Mission Woods, KS' },
      description:
        'Complete crawl space encapsulation with 20-mil reinforced liner, sealed vents, and commercial dehumidifier for Mission Woods, KS homes.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you serve Mission Woods, KS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All of Mission Woods, one of the smallest cities in Kansas, tucked between Mission Hills and Westwood. Primary ZIP: 66208.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do Mission Woods\' wooded lots affect crawl space moisture?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Mission Woods is known for its heavily wooded, private lots, and mature tree canopy keeps ground and crawl space areas shadier and slower to dry out after rain compared to more open suburban lots.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do larger Mission Woods homes need bigger dehumidifiers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Often, yes. Mission Woods homes tend to sit on larger, more custom lots, so we size the dehumidifier to the actual crawl space square footage rather than a one-size-fits-all unit.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is a free inspection really no-obligation in Mission Woods?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We inspect, document conditions with photos, and provide a written estimate — no pressure, no obligation to move forward.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does crawl space encapsulation take in Mission Woods?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most projects complete in one day. Larger custom homes may take two.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does crawl space encapsulation cost in Mission Woods?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Mission Woods homes run $3,000–$6,500 for a complete system depending on size. Free inspection and written estimate at no cost.',
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

export default function MissionWoodsKSPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <section style={{ ...sectionPadding, background: '#0D0D0D', color: '#F9FAFB', textAlign: 'center' }}>
        <p style={{ color: '#F5A623', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 12 }}>
          Mission Woods, KS
        </p>
        <h1 style={{ ...headingStyle, fontSize: 'clamp(2.2rem,6vw,3.6rem)', lineHeight: 1.05, marginBottom: 20 }}>
          Crawl Space Encapsulation{' '}
          <span style={{ color: '#F5A623' }}>Mission Woods, KS</span>
        </h1>
        <p style={{ maxWidth: 680, margin: '0 auto 32px', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(249,250,251,.82)' }}>
          Mission Woods is one of Johnson County&apos;s smallest and most private communities, with heavily wooded, custom-built lots tucked between Mission Hills and Westwood. We provide complete crawl space moisture control sized for Mission Woods&apos; larger, more custom homes.
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
            Crawl Space Encapsulation in Mission Woods, KS
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: '#374151' }}>
            Crawl space encapsulation in Mission Woods seals the crawl space with a 20-mil reinforced liner, sealed vents, and a commercial dehumidifier sized to the home&apos;s actual footprint. Mission Woods&apos; heavily wooded, private lots keep ground areas shadier and slower to dry after rain, adding to the moisture load a crawl space has to manage.
          </p>
        </div>
      </section>

      {/* 3. Why Mission Woods Homes Have Problems */}
      <section style={{ ...sectionPadding, background: '#0D0D0D', color: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 36, textAlign: 'center' }}>
            Why Mission Woods Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Heavily Wooded, Shaded Lots
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Mission Woods&apos; mature tree canopy is part of what makes it distinctive, but the shade keeps ground moisture around foundations from evaporating as quickly as it would on a more open lot.
              </p>
            </div>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Larger, Custom-Built Homes
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                With larger footprints than typical suburban tract homes, Mission Woods properties often need a properly sized commercial dehumidifier rather than an off-the-shelf unit to keep humidity under control.
              </p>
            </div>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Johnson County Clay Soil
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Like the rest of Johnson County, Mission Woods sits on dense clay soil that holds moisture against the foundation, making active humidity control essential year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section style={{ ...sectionPadding, background: '#F9FAFB', color: '#0D0D0D' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 36, textAlign: 'center' }}>
            Our Crawl Space Services in Mission Woods, KS
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
            Mission Woods Areas We Serve
          </h2>
          <p style={{ textAlign: 'center', marginBottom: 28, color: 'rgba(249,250,251,.75)', lineHeight: 1.6 }}>
            All of Mission Woods · bordering Mission Hills · bordering Westwood · Belinder Road area
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            <span style={{ background: 'rgba(245,166,35,.15)', border: '1px solid rgba(245,166,35,.4)', color: '#F5A623', borderRadius: 6, padding: '4px 12px', fontSize: '0.85rem', fontWeight: 600 }}>
              66208
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
              { n: '01', title: 'Free Inspection & Assessment', body: 'We inspect your Mission Woods crawl space — liner condition, framing, humidity levels, mold presence — and provide a written estimate at no cost.' },
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
            Frequently Asked Questions — Mission Woods, KS
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Do you serve Mission Woods, KS?',
                a: 'Yes. All of Mission Woods, one of the smallest cities in Kansas, tucked between Mission Hills and Westwood. Primary ZIP: 66208.',
              },
              {
                q: "Do Mission Woods' wooded lots affect crawl space moisture?",
                a: 'Yes. Mission Woods is known for its heavily wooded, private lots, and mature tree canopy keeps ground and crawl space areas shadier and slower to dry out after rain compared to more open suburban lots.',
              },
              {
                q: 'Do larger Mission Woods homes need bigger dehumidifiers?',
                a: 'Often, yes. Mission Woods homes tend to sit on larger, more custom lots, so we size the dehumidifier to the actual crawl space square footage rather than a one-size-fits-all unit.',
              },
              {
                q: 'Is a free inspection really no-obligation in Mission Woods?',
                a: 'Yes. We inspect, document conditions with photos, and provide a written estimate — no pressure, no obligation to move forward.',
              },
              {
                q: 'How long does crawl space encapsulation take in Mission Woods?',
                a: 'Most projects complete in one day. Larger custom homes may take two.',
              },
              {
                q: 'What does crawl space encapsulation cost in Mission Woods?',
                a: 'Most Mission Woods homes run $3,000–$6,500 for a complete system depending on size. Free inspection and written estimate at no cost.',
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
            Get a Free Estimate in Mission Woods, KS
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
