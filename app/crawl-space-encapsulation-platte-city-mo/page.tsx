import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Platte City, MO | KC Crawl Space Specialists' },
  description:
    'Crawl space encapsulation in Platte City, MO. Platte County seat near KCI Airport. Serving downtown and surrounding communities. Free inspection · same-week service.',
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
          name: 'Platte City MO Crawl Space Encapsulation',
          item: 'https://crawlspacekc.com/crawl-space-encapsulation-platte-city-mo/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://crawlspacekc.com/#business',
      name: 'KC Crawl Space Specialists',
      telephone: '+18169622111',
      url: 'https://crawlspacekc.com',
      areaServed: { '@type': 'City', name: 'Platte City', containedInPlace: { '@type': 'State', name: 'Missouri' } },
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation in Platte City, MO',
      provider: { '@id': 'https://crawlspacekc.com/#business' },
      areaServed: { '@type': 'City', name: 'Platte City', containedInPlace: { '@type': 'State', name: 'Missouri' } },
      description:
        'Complete crawl space encapsulation for Platte City MO homes including 20-mil liner, vent sealing, and commercial dehumidifier installation.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you serve Platte City, MO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We serve all of Platte City including downtown, the I-29 corridor, Hwy 92 area, Platte City Road area, and surrounding rural Platte County. ZIP code 64079.',
          },
        },
        {
          '@type': 'Question',
          name: 'My older downtown Platte City home has crawl space issues — is that common?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Very common. Platte City\'s historic downtown area includes homes from the early-to-mid 20th century with original crawl spaces, no liner or minimal vapor barriers, and open vents. These conditions create chronic moisture problems in Missouri\'s humid summers that encapsulation resolves.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do rural Platte County properties have different crawl space moisture considerations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Homes on larger rural lots surrounding Platte City may experience additional moisture from surface water drainage, agricultural land runoff, and water table conditions that differ from typical suburban properties. A full assessment addresses site-specific conditions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you serve homes near KCI Airport in the Platte City area?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We serve Platte City and the surrounding Platte County area including communities near KCI Airport. Call us or submit the form to schedule a free inspection.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does crawl space encapsulation take in Platte City?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Platte City homes complete in one day. Rural properties with larger crawl spaces or drainage work may take two days.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does crawl space encapsulation cost in Platte City?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Platte City homes run $2,800–$5,500 for a complete system. Rural properties with larger crawl spaces may be higher. Free inspection and written estimate at no cost.',
          },
        },
      ],
    },
  ],
};

export default function PlatteCityEncapsulationPage() {
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
            Platte City, MO
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
            <span style={{ color: '#F5A623' }}>Platte City, MO</span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: 18, lineHeight: 1.7, marginBottom: 36, maxWidth: 680 }}>
            Platte City is the county seat of Platte County — northwest of Kansas City near KCI Airport. Its mix of older downtown homes and rural residential properties sit on Platte County soil that creates year-round crawl space moisture challenges we help homeowners solve.
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
            Crawl Space Encapsulation in Platte City, MO
          </h2>
          <p style={{ color: '#4b5563', fontSize: 18, lineHeight: 1.75 }}>
            Crawl space encapsulation in Platte City seals the crawl space against Platte County soil moisture and Kansas City summer humidity. Platte City&apos;s downtown area includes older homes with original crawl spaces, while surrounding rural properties can face additional moisture from agricultural water table and surface drainage conditions.
          </p>
        </div>
      </section>

      {/* 3. WHY PLATTE CITY HOMES HAVE CRAWL SPACE PROBLEMS */}
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
            Why Platte City Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {[
              {
                title: 'Platte County Soil',
                body: "Platte City and surrounding Platte County sit on soil with significant clay and silt content that holds moisture year-round. Foundation moisture conditions in Platte City homes remain elevated between rain events, making active crawl space humidity control necessary.",
              },
              {
                title: 'Older Downtown Homes',
                body: "Platte City's historic downtown area includes homes from the early-to-mid 20th century with original crawl spaces. These homes frequently have no liner or minimal vapor barriers and open vents — conditions that create chronic moisture problems in Missouri's humid summers.",
              },
              {
                title: 'Rural and Semi-Rural Properties',
                body: "Platte City is surrounded by rural Platte County. Homes on larger lots may experience additional moisture from surface water drainage, agricultural land runoff, and water table conditions that affect crawl space conditions differently than typical suburban properties.",
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
            Areas We Serve in Platte City
          </h2>
          <p style={{ color: '#d1d5db', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
            We serve all of Platte City including downtown Platte City, the I-29 corridor, Hwy 92 area, Platte City Road area, and rural Platte County surrounding areas.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {['64079'].map((zip) => (
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
                body: 'We assess humidity levels, liner condition, vent status, wood health, and drainage in your Platte City home. You get a written estimate before any work begins — no pressure, no surprises.',
              },
              {
                step: '02',
                title: 'Same-Week Installation',
                body: "Our crew installs the 20-mil reinforced liner, seals all foundation vents, and installs a commercial-grade dehumidifier. Most Platte City homes complete in one day.",
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
            Platte City FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Do you serve Platte City, MO?',
                a: 'Yes. We serve all of Platte City including downtown, the I-29 corridor, Hwy 92 area, Platte City Road area, and surrounding rural Platte County. ZIP code 64079.',
              },
              {
                q: 'My older downtown Platte City home has crawl space issues — is that common?',
                a: "Very common. Platte City's historic downtown area includes homes from the early-to-mid 20th century with original crawl spaces, no liner or minimal vapor barriers, and open vents. These conditions create chronic moisture problems in Missouri's humid summers that encapsulation resolves.",
              },
              {
                q: 'Do rural Platte County properties have different crawl space moisture considerations?',
                a: 'Yes. Homes on larger rural lots surrounding Platte City may experience additional moisture from surface water drainage, agricultural land runoff, and water table conditions that differ from typical suburban properties. A full assessment addresses site-specific conditions.',
              },
              {
                q: 'Do you serve homes near KCI Airport in the Platte City area?',
                a: 'Yes. We serve Platte City and the surrounding Platte County area including communities near KCI Airport. Call us or submit the form to schedule a free inspection.',
              },
              {
                q: 'How long does crawl space encapsulation take in Platte City?',
                a: 'Most Platte City homes complete in one day. Rural properties with larger crawl spaces or drainage work may take two days.',
              },
              {
                q: 'What does crawl space encapsulation cost in Platte City?',
                a: 'Most Platte City homes run $2,800–$5,500 for a complete system. Rural properties with larger crawl spaces may be higher. Free inspection and written estimate at no cost.',
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
            Get a Free Estimate in Platte City
          </h2>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
