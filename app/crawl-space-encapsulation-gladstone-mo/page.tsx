import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Crawl Space Encapsulation Gladstone MO | KC Crawl Space Specialists',
  description:
    'Crawl space encapsulation in Gladstone, MO. Serving Barry Road corridor, Vivion Road area, and all of Clay County. Older ranch homes. Free inspection.',
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
          name: 'Gladstone MO Crawl Space Encapsulation',
          item: 'https://crawlspacekc.com/crawl-space-encapsulation-gladstone-mo/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://crawlspacekc.com/#business',
      name: 'KC Crawl Space Specialists',
      telephone: '+18169622111',
      url: 'https://crawlspacekc.com',
      areaServed: { '@type': 'City', name: 'Gladstone', containedInPlace: { '@type': 'State', name: 'Missouri' } },
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation in Gladstone, MO',
      provider: { '@id': 'https://crawlspacekc.com/#business' },
      areaServed: { '@type': 'City', name: 'Gladstone', containedInPlace: { '@type': 'State', name: 'Missouri' } },
      description:
        'Complete crawl space encapsulation for Gladstone MO homes including 20-mil liner, vent sealing, and commercial dehumidifier installation.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you serve Gladstone, MO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All of Gladstone including Barry Road, Vivion Road, and the North Oak Trafficway corridor. ZIP codes 64118 and 64119.',
          },
        },
        {
          '@type': 'Question',
          name: 'My 1960s Gladstone ranch home has a musty smell — is that the crawl space?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Almost certainly. Mid-century Gladstone homes commonly have open vents and deteriorated original liners. Humid summer air moves into the crawl space and up into the home through gaps in the floor. Encapsulation with a dehumidifier eliminates the source.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Clay County soil cause crawl space moisture problems in Gladstone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Clay soil throughout Gladstone maintains damp conditions under the crawl space year-round. A 20-mil liner, vent sealing, and dehumidifier address this ongoing moisture source.',
          },
        },
        {
          '@type': 'Question',
          name: 'My Gladstone crawl space has wet insulation — what does that mean?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wet insulation means crawl space humidity has exceeded 60% long enough to saturate the fiberglass. It cannot be dried in place and should be removed. Encapsulation prevents future insulation failure.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does crawl space encapsulation take in Gladstone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most projects complete in one day. Drainage issues or larger crawl spaces may take two days.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does crawl space encapsulation cost in Gladstone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Gladstone homes run $2,800–$5,500 for a complete system. Free inspection and written estimate at no cost.',
          },
        },
      ],
    },
  ],
};

export default function GladstoneEncapsulationPage() {
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
            Gladstone, MO
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
            <span style={{ color: '#F5A623' }}>Gladstone, MO</span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: 18, lineHeight: 1.7, marginBottom: 36, maxWidth: 680 }}>
            Gladstone&apos;s established Clay County neighborhoods are full of 1950s-1970s ranch homes with original open vents and minimal vapor barriers. We help Gladstone homeowners modernize their crawl space moisture control before humidity, mold, and odors become bigger problems.
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
            Crawl Space Encapsulation in Gladstone, MO
          </h2>
          <p style={{ color: '#4b5563', fontSize: 18, lineHeight: 1.75 }}>
            Crawl space encapsulation in Gladstone seals the crawl space floor, walls, and vents with a 20-mil reinforced liner and commercial dehumidifier. Gladstone&apos;s Clay County clay soil and high concentration of mid-century ranch homes make crawl space humidity, falling insulation, and musty odors among the most common home moisture problems in the area.
          </p>
        </div>
      </section>

      {/* 3. WHY GLADSTONE HOMES HAVE CRAWL SPACE PROBLEMS */}
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
            Why Gladstone Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {[
              {
                title: 'Clay County Ranch Homes',
                body: 'Many Gladstone homes were built between 1950 and 1975 with open foundation vents and thin or no vapor barriers. As these homes age, original materials deteriorate and moisture problems worsen — especially during Kansas City\'s humid summers when outdoor air humidity regularly reaches 85-90%.',
              },
              {
                title: 'Clay Soil Year-Round',
                body: 'Gladstone\'s Clay County soil holds moisture near foundations consistently. Even in dry months, the ground under Gladstone crawl spaces maintains humidity that evaporates into the crawl space air, keeping conditions above the 60% RH mold threshold without active moisture control.',
              },
              {
                title: 'North KC Humidity Patterns',
                body: 'Gladstone\'s position north of the Missouri River puts it fully in the Kansas City humidity zone. Summer air regularly drives crawl space humidity above levels that allow mold to grow on wood framing and insulation within hours of a humid day.',
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
            Areas We Serve in Gladstone
          </h2>
          <p style={{ color: '#d1d5db', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
            We serve all of Gladstone including the Barry Road corridor, Vivion Road area, N. Oak Trafficway corridor, Antioch Road area, 64th Street area, downtown Gladstone, and the North Kansas City border.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {['64118', '64119'].map((zip) => (
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
                body: 'We assess humidity levels, liner condition, vent status, wood health, and drainage. You get a written estimate before any work begins — no pressure, no surprises.',
              },
              {
                step: '02',
                title: 'Same-Week Installation',
                body: 'Our crew installs the 20-mil reinforced liner, seals all foundation vents, and installs a commercial-grade dehumidifier. Most Gladstone homes complete in one day.',
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
            Gladstone FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Do you serve Gladstone, MO?',
                a: 'Yes. All of Gladstone including Barry Road, Vivion Road, and the North Oak Trafficway corridor. ZIP codes 64118 and 64119.',
              },
              {
                q: 'My 1960s Gladstone ranch home has a musty smell — is that the crawl space?',
                a: 'Almost certainly. Mid-century Gladstone homes commonly have open vents and deteriorated original liners. Humid summer air moves into the crawl space and up into the home through gaps in the floor. Encapsulation with a dehumidifier eliminates the source.',
              },
              {
                q: 'Does Clay County soil cause crawl space moisture problems in Gladstone?',
                a: 'Yes. Clay soil throughout Gladstone maintains damp conditions under the crawl space year-round. A 20-mil liner, vent sealing, and dehumidifier address this ongoing moisture source.',
              },
              {
                q: 'My Gladstone crawl space has wet insulation — what does that mean?',
                a: 'Wet insulation means crawl space humidity has exceeded 60% long enough to saturate the fiberglass. It cannot be dried in place and should be removed. Encapsulation prevents future insulation failure.',
              },
              {
                q: 'How long does crawl space encapsulation take in Gladstone?',
                a: 'Most projects complete in one day. Drainage issues or larger crawl spaces may take two days.',
              },
              {
                q: 'What does crawl space encapsulation cost in Gladstone?',
                a: 'Most Gladstone homes run $2,800–$5,500 for a complete system. Free inspection and written estimate at no cost.',
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
            Get a Free Estimate in Gladstone
          </h2>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
