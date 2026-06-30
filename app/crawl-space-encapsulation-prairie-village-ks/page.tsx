import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Crawl Space Encapsulation Prairie Village KS | KC Crawl Space Specialists',
  description:
    "Crawl space encapsulation in Prairie Village, KS. One of Johnson County's oldest suburbs — 1950s and 1960s ranch homes. Free inspection. Same-week service.",
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
          name: 'Prairie Village KS Crawl Space Encapsulation',
          item: 'https://crawlspacekc.com/crawl-space-encapsulation-prairie-village-ks/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://crawlspacekc.com/#business',
      name: 'KC Crawl Space Specialists',
      telephone: '+18169622111',
      url: 'https://crawlspacekc.com',
      areaServed: { '@type': 'City', name: 'Prairie Village', containedInPlace: { '@type': 'State', name: 'Kansas' } },
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation in Prairie Village, KS',
      provider: { '@id': 'https://crawlspacekc.com/#business' },
      areaServed: { '@type': 'City', name: 'Prairie Village', containedInPlace: { '@type': 'State', name: 'Kansas' } },
      description:
        'Complete crawl space encapsulation for Prairie Village KS homes including 20-mil liner, vent sealing, and commercial dehumidifier installation.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you serve Prairie Village, KS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We serve all of Prairie Village including the shopping area, Corinth Hills, Meadowbrook Park area, Roe Ave corridor, 75th-95th Street range, Mission Road corridor, and Leawood/OP/Mission border neighborhoods. ZIP codes 66207 and 66208.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are 1950s and 1960s ranch homes in Prairie Village prone to crawl space problems?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes — Prairie Village's mid-century ranch homes are among the most crawl-space-moisture-prone homes in the KC metro. They were built with open vents and no vapor barrier, which was standard then but inadequate today. Decades of Kansas City humidity have taken a significant toll on original crawl space materials.",
          },
        },
        {
          '@type': 'Question',
          name: 'What condition is the original liner in a Prairie Village ranch home likely in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most original 6-mil liners in Prairie Village homes from the 1950s-1960s are degraded, torn, or completely missing. The original liners were not designed for longevity and have had 60-70 years of moisture exposure. A 20-mil reinforced replacement liner is the standard modern approach.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Johnson County clay soil in Prairie Village different from other Johnson County suburbs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The soil type is similar throughout Johnson County. However, Prairie Village stands out because its older construction era means homes have had far less adequate moisture protection for far longer — making the need for modern encapsulation especially pressing.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does crawl space encapsulation take in Prairie Village?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Prairie Village ranch homes complete in one day. Some older homes with deteriorated conditions requiring insulation removal and drainage work may take two days.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does crawl space encapsulation cost in Prairie Village?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Prairie Village homes run $2,800–$5,500 for a complete system. Older homes needing full insulation removal may be at the higher end. Free inspection and written estimate at no cost.',
          },
        },
      ],
    },
  ],
};

export default function PrairieVillageEncapsulationPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              marginBottom: 16,
            }}
          >
            Prairie Village, KS
          </p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(36px,6vw,64px)',
              color: '#F9FAFB',
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          >
            Crawl Space Encapsulation in{' '}
            <span style={{ color: '#F5A623' }}>Prairie Village, KS</span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: 18, lineHeight: 1.7, marginBottom: 36, maxWidth: 680 }}>
            Prairie Village was Johnson County&apos;s first planned suburb, and its 1950s and 1960s ranch homes are among the most crawl-space-moisture-prone homes in the metro. Original open vents, 6-mil liners, and decades of Kansas City humidity have created a generation of moisture problems we help Prairie Village homeowners solve.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <Link
              href="/contact"
              style={{
                background: '#F5A623',
                color: '#0D0D0D',
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                textTransform: 'uppercase' as const,
                fontSize: 17,
                letterSpacing: '.06em',
                padding: '14px 32px',
                borderRadius: 6,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Get a Free Inspection
            </Link>
            <a
              href={PHONE_HREF}
              style={{
                color: '#F9FAFB',
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 700,
                fontSize: 20,
                textDecoration: 'none',
                letterSpacing: '.02em',
              }}
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* 2. QUICK ANSWER */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#0D0D0D',
              marginBottom: 20,
            }}
          >
            Crawl Space Encapsulation in Prairie Village, KS
          </h2>
          <p style={{ color: '#4b5563', fontSize: 18, lineHeight: 1.75 }}>
            Crawl space encapsulation in Prairie Village addresses the moisture problems common to one of the KC metro&apos;s oldest planned suburbs. Prairie Village&apos;s concentration of 1950s-1960s ranch homes with original open vents and minimal vapor barriers, on Johnson County clay soil, makes it one of the highest-need areas in Johnson County for crawl space moisture control.
          </p>
        </div>
      </section>

      {/* 3. WHY PRAIRIE VILLAGE HOMES HAVE CRAWL SPACE PROBLEMS */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              marginBottom: 12,
            }}
          >
            Local Conditions
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#F9FAFB',
              marginBottom: 40,
            }}
          >
            Why Prairie Village Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {[
              {
                title: "Johnson County's First Suburb",
                body: "Prairie Village was developed in the late 1940s and 1950s and remains one of the most intact mid-century neighborhoods in the KC metro. The original homes were built with open foundation vents and no vapor barriers — the standard of the era, but far from adequate for today's understanding of crawl space moisture management.",
              },
              {
                title: '1950s-1960s Ranch Construction',
                body: "Prairie Village's characteristic ranch homes are some of the most moisture-susceptible crawl spaces in the region. Original 6-mil or no liner, original open vents, and original fiberglass insulation (where it was added) have all aged significantly and often require complete system replacement.",
              },
              {
                title: 'Johnson County Clay Soil',
                body: "Prairie Village sits on the same Johnson County clay soil as Overland Park, Leawood, and Shawnee. This clay maintains consistent moisture near foundations regardless of rainfall, and the aging construction in Prairie Village makes it particularly important to have a robust encapsulation system.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    textTransform: 'uppercase' as const,
                    fontSize: 20,
                    color: '#F5A623',
                    marginBottom: 12,
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: 15, lineHeight: 1.7 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              marginBottom: 12,
            }}
          >
            What We Do
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#0D0D0D',
              marginBottom: 40,
            }}
          >
            Our Crawl Space Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
            {[
              { label: 'Crawl Space Encapsulation', href: '/crawl-space-encapsulation-kansas-city/' },
              { label: 'Vapor Barrier Installation', href: '/crawl-space-vapor-barrier-kansas-city/' },
              { label: 'Crawl Space Waterproofing', href: '/crawl-space-waterproofing-kansas-city/' },
              { label: 'Crawl Space Dehumidifier', href: '/crawl-space-dehumidifier-kansas-city/' },
              { label: 'Drainage & Sump Pump', href: '/crawl-space-drainage-sump-pump-kansas-city/' },
              { label: 'Insulation Removal', href: '/crawl-space-insulation-removal-kansas-city/' },
            ].map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                style={{
                  display: 'block',
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: 20,
                  textDecoration: 'none',
                  color: '#F9FAFB',
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '.03em',
                }}
              >
                {svc.label}
                <span style={{ display: 'block', color: '#F5A623', fontSize: 14, marginTop: 6 }}>Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AREAS WE SERVE */}
      <section
        style={{
          background: '#1B3A6B',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              marginBottom: 12,
            }}
          >
            Service Area
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#F9FAFB',
              marginBottom: 20,
            }}
          >
            Areas We Serve in Prairie Village
          </h2>
          <p style={{ color: '#d1d5db', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
            We serve all of Prairie Village including the Prairie Village shopping area, Corinth Hills, Meadowbrook Park area, Roe Ave corridor, 75th-95th Street range, Mission Road corridor, and Leawood/OP/Mission border neighborhoods.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {['66207', '66208'].map((zip) => (
              <span
                key={zip}
                style={{
                  background: 'rgba(255,255,255,.1)',
                  border: '1px solid rgba(255,255,255,.2)',
                  borderRadius: 6,
                  padding: '6px 16px',
                  color: '#F9FAFB',
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: '.04em',
                }}
              >
                {zip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR PROCESS */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              marginBottom: 12,
            }}
          >
            How It Works
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#F9FAFB',
              marginBottom: 40,
            }}
          >
            Our Process
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {[
              {
                step: '01',
                title: 'Free Inspection',
                body: 'We assess humidity levels, liner condition, vent status, wood health, and drainage in your Prairie Village home. You get a written estimate before any work begins — no pressure, no surprises.',
              },
              {
                step: '02',
                title: 'Same-Week Installation',
                body: "Our crew removes deteriorated original materials, installs the 20-mil reinforced liner, seals all foundation vents, and installs a commercial-grade dehumidifier. Most Prairie Village ranch homes complete in one day.",
              },
              {
                step: '03',
                title: 'Dry Crawl Space, Guaranteed',
                body: 'Once sealed and dehumidified, your crawl space stays below 50% RH year-round. Musty odors, falling insulation, and mold conditions are eliminated at the source.',
              },
            ].map((step) => (
              <div
                key={step.step}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 48,
                    color: '#F5A623',
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  {step.step}
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    textTransform: 'uppercase' as const,
                    fontSize: 20,
                    color: '#F9FAFB',
                    marginBottom: 10,
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: 15, lineHeight: 1.7 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINANCING */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              marginBottom: 12,
            }}
          >
            Payment Options
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#0D0D0D',
              marginBottom: 32,
            }}
          >
            Financing Available
          </h2>
          <FinancingOptions />
        </div>
      </section>

      {/* 8. FAQ */}
      <section
        style={{
          background: '#1B3A6B',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              marginBottom: 12,
            }}
          >
            Common Questions
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#F9FAFB',
              marginBottom: 36,
            }}
          >
            Prairie Village FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Do you serve Prairie Village, KS?',
                a: 'Yes. We serve all of Prairie Village including the shopping area, Corinth Hills, Meadowbrook Park area, Roe Ave corridor, 75th-95th Street range, Mission Road corridor, and Leawood/OP/Mission border neighborhoods. ZIP codes 66207 and 66208.',
              },
              {
                q: 'Are 1950s and 1960s ranch homes in Prairie Village prone to crawl space problems?',
                a: "Yes — Prairie Village's mid-century ranch homes are among the most crawl-space-moisture-prone homes in the KC metro. They were built with open vents and no vapor barrier, which was standard then but inadequate today. Decades of Kansas City humidity have taken a significant toll on original crawl space materials.",
              },
              {
                q: 'What condition is the original liner in a Prairie Village ranch home likely in?',
                a: 'Most original 6-mil liners in Prairie Village homes from the 1950s-1960s are degraded, torn, or completely missing. The original liners were not designed for longevity and have had 60-70 years of moisture exposure. A 20-mil reinforced replacement liner is the standard modern approach.',
              },
              {
                q: 'Is Johnson County clay soil in Prairie Village different from other Johnson County suburbs?',
                a: 'The soil type is similar throughout Johnson County. However, Prairie Village stands out because its older construction era means homes have had far less adequate moisture protection for far longer — making the need for modern encapsulation especially pressing.',
              },
              {
                q: 'How long does crawl space encapsulation take in Prairie Village?',
                a: 'Most Prairie Village ranch homes complete in one day. Some older homes with deteriorated conditions requiring insulation removal and drainage work may take two days.',
              },
              {
                q: 'What does crawl space encapsulation cost in Prairie Village?',
                a: 'Most Prairie Village homes run $2,800–$5,500 for a complete system. Older homes needing full insulation removal may be at the higher end. Free inspection and written estimate at no cost.',
              },
            ].map((faq) => (
              <div
                key={faq.q}
                style={{
                  background: '#0D0D0D',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 12,
                  padding: '22px 24px',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    textTransform: 'uppercase' as const,
                    fontSize: 17,
                    color: '#F9FAFB',
                    marginBottom: 10,
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: 15, lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section
        style={{
          background: '#111827',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              marginBottom: 12,
            }}
          >
            Get Started
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(28px,4vw,42px)',
              color: '#F9FAFB',
              marginBottom: 32,
            }}
          >
            Get a Free Estimate in Prairie Village
          </h2>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
