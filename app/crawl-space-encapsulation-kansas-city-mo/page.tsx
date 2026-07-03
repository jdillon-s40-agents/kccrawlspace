import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Kansas City, MO | KC Crawl Space Specialists' },
  description:
    'Crawl space encapsulation in Kansas City, MO. Serving Waldo, Brookside, Westport, Hyde Park, Northland, South KC, and all KCMO neighborhoods. Free inspection.',
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
          name: 'Crawl Space Encapsulation Kansas City MO',
          item: 'https://crawlspacekc.com/crawl-space-encapsulation-kansas-city-mo/',
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
        addressLocality: 'Kansas City',
        addressRegion: 'MO',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'City',
        name: 'Kansas City',
        sameAs: 'https://en.wikipedia.org/wiki/Kansas_City,_Missouri',
      },
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: { '@type': 'City', name: 'Kansas City, MO' },
      description:
        'Complete crawl space encapsulation with 20-mil reinforced liner, sealed vents, and commercial dehumidifier for Kansas City, MO homes.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you serve Kansas City, MO neighborhoods?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We serve all of Kansas City, MO — including Waldo, Brookside, Hyde Park, South KC, the Eastside, and Northland neighborhoods. Call (816) 962-2111 or schedule online.',
          },
        },
        {
          '@type': 'Question',
          name: 'My 1930s Waldo home has an original crawl space — what should I expect?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Older Waldo and Hyde Park homes frequently have original crawl spaces with no liner, open vents, and wood framing that has been exposed to moisture for decades. A free inspection tells you what\'s there and what condition the framing is in — we recommend mold treatment and full encapsulation in most cases for homes this age.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does KCMO clay soil cause crawl space problems throughout the city?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Jackson County clay underlies most of KCMO and holds moisture near foundations regardless of neighborhood or rainfall. This makes active humidity control — not just a liner — the right long-term solution for most Kansas City, MO homes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you serve the KCMO Northland (north of the river)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We serve all of KCMO, including Northland neighborhoods north of the Missouri River. The Northland sits in Clay County but shares the same Kansas City summer humidity profile as the rest of the metro.',
          },
        },
        {
          '@type': 'Question',
          name: "What's the cost for crawl space encapsulation in Kansas City, MO?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most KCMO homes run $2,800–$5,500 for a complete system. Older homes or those with drainage needs may differ. Free inspection and written estimate at no cost.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if my KCMO crawl space needs encapsulation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common signs: musty smell in the home, wet or fallen insulation, mold on joists, condensation on pipes or ductwork, or crawl space humidity above 60%. A free inspection gives you a definitive assessment.',
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

export default function KansasCityMOPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <section style={{ ...sectionPadding, background: '#0D0D0D', color: '#F9FAFB', textAlign: 'center' }}>
        <p style={{ color: '#F5A623', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 12 }}>
          Kansas City, MO
        </p>
        <h1 style={{ ...headingStyle, fontSize: 'clamp(2.2rem,6vw,3.6rem)', lineHeight: 1.05, marginBottom: 20 }}>
          Crawl Space Encapsulation{' '}
          <span style={{ color: '#F5A623' }}>Kansas City, MO</span>
        </h1>
        <p style={{ maxWidth: 680, margin: '0 auto 32px', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(249,250,251,.82)' }}>
          Kansas City, MO is home to some of the metro's most diverse housing stock — from 1910s bungalows in Waldo and Hyde Park to mid-century ranches in South KC and newer Northland construction. Across all of Kansas City MO, Jackson County clay soil and Missouri summers create crawl space moisture challenges we solve every day.
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
            Crawl Space Encapsulation in Kansas City, MO
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: '#374151' }}>
            Crawl space encapsulation in Kansas City, MO seals the crawl space with a 20-mil reinforced liner, sealed vents, and a commercial dehumidifier. KCMO's housing spans more than a century of construction, and crawl space conditions range from original 1920s foundations to mid-century open-vent systems — all of which can develop humidity, mold, and moisture problems on Jackson County's clay-heavy soil.
          </p>
        </div>
      </section>

      {/* 3. Why KCMO Homes Have Problems */}
      <section style={{ ...sectionPadding, background: '#0D0D0D', color: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 36, textAlign: 'center' }}>
            Why Kansas City, MO Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Diverse and Aging Housing Stock
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Kansas City, MO has housing from the early 1900s through the 2010s. Older neighborhoods like Waldo, Brookside, Hyde Park, and Westport have homes approaching 100 years old with original crawl spaces. Mid-century areas like South KC and the Eastside have 1950s–1970s construction. All of these eras share common crawl space challenges: open vents, inadequate liners, and aged framing exposed to decades of moisture.
              </p>
            </div>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Jackson County Clay Throughout KCMO
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Most of Kansas City, MO sits on Jackson County clay soil that holds moisture year-round. Whether your home is in Waldo, Raytown border, the Northland, or near 63rd Street, the ground under your crawl space maintains damp conditions that push humidity into the crawl space air constantly.
              </p>
            </div>
            <div style={contentCard}>
              <h3 style={{ ...headingStyle, fontSize: '1.15rem', color: '#F5A623', marginBottom: 12 }}>
                Year-Round Humidity in Missouri
              </h3>
              <p style={{ lineHeight: 1.7, color: 'rgba(249,250,251,.8)', fontSize: '0.97rem' }}>
                Missouri summers regularly reach 85–90% relative humidity. Open foundation vents in older KCMO homes allow this summer air directly into the crawl space, causing mold growth, wet insulation, and musty odors that rise into the home. Even the Northland (Clay County) shares the same humidity profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section style={{ ...sectionPadding, background: '#F9FAFB', color: '#0D0D0D' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: 36, textAlign: 'center' }}>
            Our Crawl Space Services in Kansas City, MO
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
            Kansas City, MO Neighborhoods We Serve
          </h2>
          <p style={{ textAlign: 'center', marginBottom: 28, color: 'rgba(249,250,251,.75)', lineHeight: 1.6 }}>
            Waldo · Brookside · Westport · Hyde Park · Midtown · Crossroads · Northeast KCMO · Eastside · South KC (Red Bridge area) · Ruskin Heights · Northland (Gladstone/Riverside/Weatherby Lake borders) · University District · Hospital Hill · Volker
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {['64108','64109','64110','64111','64112','64113','64114','64118','64119','64123','64124','64125','64126','64127','64128','64129','64130','64131','64132','64133','64134','64138','64145','64146','64147'].map((zip) => (
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
              { n: '01', title: 'Free Inspection & Assessment', body: 'We inspect your KCMO crawl space — liner condition, framing, humidity levels, mold presence — and provide a written estimate at no cost.' },
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
            Frequently Asked Questions — Kansas City, MO
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Do you serve Kansas City, MO neighborhoods?',
                a: 'Yes. We serve all of Kansas City, MO — including Waldo, Brookside, Hyde Park, South KC, the Eastside, and Northland neighborhoods. Call (816) 962-2111 or schedule online.',
              },
              {
                q: 'My 1930s Waldo home has an original crawl space — what should I expect?',
                a: "Older Waldo and Hyde Park homes frequently have original crawl spaces with no liner, open vents, and wood framing that has been exposed to moisture for decades. A free inspection tells you what's there and what condition the framing is in — we recommend mold treatment and full encapsulation in most cases for homes this age.",
              },
              {
                q: 'Does KCMO clay soil cause crawl space problems throughout the city?',
                a: 'Yes. Jackson County clay underlies most of KCMO and holds moisture near foundations regardless of neighborhood or rainfall. This makes active humidity control — not just a liner — the right long-term solution for most Kansas City, MO homes.',
              },
              {
                q: 'Do you serve the KCMO Northland (north of the river)?',
                a: 'Yes. We serve all of KCMO, including Northland neighborhoods north of the Missouri River. The Northland sits in Clay County but shares the same Kansas City summer humidity profile as the rest of the metro.',
              },
              {
                q: "What's the cost for crawl space encapsulation in Kansas City, MO?",
                a: 'Most KCMO homes run $2,800–$5,500 for a complete system. Older homes or those with drainage needs may differ. Free inspection and written estimate at no cost.',
              },
              {
                q: 'How do I know if my KCMO crawl space needs encapsulation?',
                a: 'Common signs: musty smell in the home, wet or fallen insulation, mold on joists, condensation on pipes or ductwork, or crawl space humidity above 60%. A free inspection gives you a definitive assessment.',
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
            Get a Free Estimate in Kansas City, MO
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
