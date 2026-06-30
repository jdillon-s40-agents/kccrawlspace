import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Crawl Space Encapsulation Mission KS | KC Crawl Space Specialists',
  description:
    'Crawl space encapsulation in Mission, KS. Serving older urban Johnson County neighborhoods, Foxridge area, and all of Mission. Free inspection.',
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
          name: 'Mission KS Crawl Space Encapsulation',
          item: 'https://crawlspacekc.com/crawl-space-encapsulation-mission-ks/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://crawlspacekc.com/#business',
      name: 'KC Crawl Space Specialists',
      telephone: '+18169622111',
      url: 'https://crawlspacekc.com',
      areaServed: { '@type': 'City', name: 'Mission', containedInPlace: { '@type': 'State', name: 'Kansas' } },
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation in Mission, KS',
      provider: { '@id': 'https://crawlspacekc.com/#business' },
      areaServed: { '@type': 'City', name: 'Mission', containedInPlace: { '@type': 'State', name: 'Kansas' } },
      description:
        'Complete crawl space encapsulation for Mission KS homes including 20-mil liner, vent sealing, and commercial dehumidifier installation.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you serve Mission, KS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We serve all of Mission including downtown Mission, Johnson Drive corridor, Foxridge area, and neighborhoods bordering Roeland Park, Prairie Village, Merriam, and the Shawnee Mission Pkwy area. ZIP code 66202.',
          },
        },
        {
          '@type': 'Question',
          name: 'My Mission home is from the 1940s or 1950s — are there specific crawl space concerns?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Mission's oldest homes date to the 1940s and have been exposed to 70-80 years of Kansas City humidity without adequate crawl space moisture control. These homes have often never had a proper liner, have open vents, and have original or absent fiberglass insulation — all of which typically require complete replacement.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does Johnson County clay soil affect crawl spaces in Mission?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Mission's Johnson County clay soil provides a persistent moisture source under crawl spaces year-round. Combined with the open vents and inadequate liners common to older Mission homes, this makes humidity control a constant challenge without encapsulation.",
          },
        },
        {
          '@type': 'Question',
          name: 'How long does crawl space encapsulation take in Mission?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Mission homes complete in one day. Older homes requiring insulation removal or with drainage complications may take two days.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does crawl space encapsulation cost in Mission?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Mission homes run $2,800–$5,500 for a complete system. Homes requiring old insulation removal may be at the higher end. Free inspection and written estimate at no cost.',
          },
        },
        {
          '@type': 'Question',
          name: "What's the difference between a vapor barrier and full encapsulation?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "A vapor barrier is just a liner placed on the crawl space floor. Full encapsulation seals the floor, the walls, and all foundation vents — then adds a commercial dehumidifier to actively control humidity. For older Mission homes with decades of moisture exposure, full encapsulation is typically the right solution, not just a floor liner.",
          },
        },
      ],
    },
  ],
};

export default function MissionEncapsulationPage() {
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
            Mission, KS
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
            <span style={{ color: '#F5A623' }}>Mission, KS</span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: 18, lineHeight: 1.7, marginBottom: 36, maxWidth: 680 }}>
            Mission is one of the smallest but oldest cities in Johnson County — dense, established, and full of older homes with original crawl spaces. We help Mission homeowners address crawl space humidity, musty odors, and moisture problems at the source.
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
            Crawl Space Encapsulation in Mission, KS
          </h2>
          <p style={{ color: '#4b5563', fontSize: 18, lineHeight: 1.75 }}>
            Crawl space encapsulation in Mission seals the crawl space against Johnson County clay soil moisture and Kansas City summer humidity. Mission&apos;s concentration of 1940s-1960s homes with original crawl spaces and open vents makes it one of the higher-need areas in Johnson County for moisture control, insulation replacement, and complete encapsulation.
          </p>
        </div>
      </section>

      {/* 3. WHY MISSION HOMES HAVE CRAWL SPACE PROBLEMS */}
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
            Why Mission Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {[
              {
                title: 'Dense Urban Johnson County Suburb',
                body: "Mission is one of the most densely developed cities in Johnson County, with homes built from the 1940s through the 1970s. This concentrated older housing stock means a high proportion of homes have original crawl space conditions — no liner, open vents, and aged fiberglass insulation — that require modernization.",
              },
              {
                title: 'Older Homes, Original Conditions',
                body: "The oldest Mission homes date to the 1940s. Like Prairie Village and Merriam neighbors, these homes were built before vapor barriers were standard. Crawl spaces in 70-80 year old Mission homes have been exposed to decades of Missouri and Kansas humidity without adequate moisture control.",
              },
              {
                title: 'Johnson County Clay',
                body: "Mission's Johnson County clay soil provides a persistent moisture source under crawl spaces year-round. Combined with open vents and inadequate liners, this makes humidity control a constant challenge for older Mission homes.",
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
            Areas We Serve in Mission
          </h2>
          <p style={{ color: '#d1d5db', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
            We serve all of Mission including downtown Mission, Johnson Drive corridor, Foxridge area, Roeland Park border, Prairie Village border, Merriam border, and Shawnee Mission Pkwy area.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {['66202'].map((zip) => (
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
                body: 'We assess humidity levels, liner condition, vent status, wood health, and drainage in your Mission home. You get a written estimate before any work begins — no pressure, no surprises.',
              },
              {
                step: '02',
                title: 'Same-Week Installation',
                body: "Our crew removes deteriorated original materials, installs the 20-mil reinforced liner, seals all foundation vents, and installs a commercial-grade dehumidifier. Most Mission homes complete in one day.",
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
            Mission FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Do you serve Mission, KS?',
                a: 'Yes. We serve all of Mission including downtown Mission, Johnson Drive corridor, Foxridge area, and neighborhoods bordering Roeland Park, Prairie Village, Merriam, and the Shawnee Mission Pkwy area. ZIP code 66202.',
              },
              {
                q: 'My Mission home is from the 1940s or 1950s — are there specific crawl space concerns?',
                a: "Yes. Mission's oldest homes date to the 1940s and have been exposed to 70-80 years of Kansas City humidity without adequate crawl space moisture control. These homes have often never had a proper liner, have open vents, and have original or absent fiberglass insulation — all of which typically require complete replacement.",
              },
              {
                q: 'Does Johnson County clay soil affect crawl spaces in Mission?',
                a: "Yes. Mission's Johnson County clay soil provides a persistent moisture source under crawl spaces year-round. Combined with the open vents and inadequate liners common to older Mission homes, this makes humidity control a constant challenge without encapsulation.",
              },
              {
                q: 'How long does crawl space encapsulation take in Mission?',
                a: 'Most Mission homes complete in one day. Older homes requiring insulation removal or with drainage complications may take two days.',
              },
              {
                q: 'What does crawl space encapsulation cost in Mission?',
                a: 'Most Mission homes run $2,800–$5,500 for a complete system. Homes requiring old insulation removal may be at the higher end. Free inspection and written estimate at no cost.',
              },
              {
                q: "What's the difference between a vapor barrier and full encapsulation?",
                a: "A vapor barrier is just a liner placed on the crawl space floor. Full encapsulation seals the floor, the walls, and all foundation vents — then adds a commercial dehumidifier to actively control humidity. For older Mission homes with decades of moisture exposure, full encapsulation is typically the right solution, not just a floor liner.",
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
            Get a Free Estimate in Mission
          </h2>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
