import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Blue Springs, MO | KC Crawl Space Specialists' },
  description:
    'Crawl space encapsulation in Blue Springs, MO. Serving Adams Dairy, Adams Pointe, and all Jackson County neighborhoods. Free inspection. Same-week service.',
};

function Check({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#16A34A"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: 'none', marginTop: 2 }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function BlueSpringsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://crawlspacekc.com' },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Crawl Space Encapsulation Blue Springs MO',
                    item: 'https://crawlspacekc.com/crawl-space-encapsulation-blue-springs-mo/',
                  },
                ],
              },
              {
                '@type': 'LocalBusiness',
                name: 'KC Crawl Space Specialists LLC',
                '@id': 'https://crawlspacekc.com/#business',
                url: 'https://crawlspacekc.com',
                telephone: '+18169622111',
                priceRange: '$$-$$$$',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Blue Springs',
                  addressRegion: 'MO',
                  addressCountry: 'US',
                },
                areaServed: [
                  {
                    '@type': 'City',
                    name: 'Blue Springs',
                    containedInPlace: { '@type': 'State', name: 'Missouri' },
                  },
                ],
              },
              {
                '@type': 'Service',
                name: 'Crawl Space Encapsulation in Blue Springs',
                provider: { '@id': 'https://crawlspacekc.com/#business' },
                areaServed: { '@type': 'City', name: 'Blue Springs' },
                description:
                  'Full crawl space encapsulation with 20-mil reinforced liner, sealed vents, and commercial dehumidifier for Blue Springs, MO homeowners.',
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Do you serve Blue Springs, MO?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. We serve all of Blue Springs and the surrounding Jackson County area, including Adams Dairy, Adams Pointe, and neighborhoods along the 40 Highway and I-70 corridors. ZIP codes 64014 and 64015.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Why does my Blue Springs crawl space smell musty in summer?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Jackson County clay soil and high summer humidity are the main causes. Open vents allow humid outdoor air into the crawl space, raising humidity above the 60% mold threshold and producing musty odors that rise into the living area through the stack effect.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'My Blue Springs home near Adams Dairy has water in the crawl space after rain — what should I do?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Water after rain indicates a drainage issue — grading, downspouts, or low spots around the foundation are directing water under the home. We assess whether interior drainage or a sump pump is needed before any liner work.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How long does crawl space encapsulation take in Blue Springs?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most Blue Springs encapsulation projects are completed in one day. Larger crawl spaces or drainage work may take two days.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does encapsulation fix musty smells in Blue Springs homes?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Musty smells are caused by mold and bacteria that grow when crawl space humidity exceeds 60%. Sealing the crawl space and maintaining humidity below 60% with a dehumidifier eliminates the conditions that produce the odor.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What does crawl space encapsulation cost in Blue Springs?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most Blue Springs homes run $2,800–$5,500 for a complete encapsulation with liner and dehumidifier. Free inspection and written estimate provided before any work begins.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* 1. HERO */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 16px',
            }}
          >
            Blue Springs, MO
          </p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(36px,7vw,64px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 20px',
              lineHeight: 1.05,
            }}
          >
            Crawl Space Encapsulation in{' '}
            <span style={{ color: '#F5A623' }}>Blue Springs</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2vw,18px)', color: '#9CA3AF', maxWidth: 640, margin: '0 0 36px', lineHeight: 1.6 }}>
            Blue Springs sits in the heart of Jackson County on clay and loam soil that holds moisture year-round. From Adams Dairy to Adams Pointe, we help Blue Springs homeowners solve crawl space humidity, mold, and odor problems for good.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <a
              href="#inspection-form"
              style={{
                background: '#F5A623',
                color: '#0D0D0D',
                font: "800 16px 'Inter',sans-serif",
                padding: '16px 26px',
                borderRadius: 10,
                boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Get a Free Inspection
            </a>
            <a
              href={PHONE_HREF}
              style={{
                color: '#fff',
                font: "600 16px 'Inter',sans-serif",
                textDecoration: 'none',
              }}
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* 2. QUICK ANSWER */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            The Short Answer
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 20px',
            }}
          >
            Crawl Space Encapsulation in Blue Springs, MO
          </h2>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.7, maxWidth: 720, margin: 0 }}>
            Crawl space encapsulation in Blue Springs seals the crawl space floor, walls, and vents with a 20-mil reinforced liner and commercial dehumidifier. Blue Springs sits on Jackson County clay soil along the I-70 corridor, and homes from the 1960s through the 1990s frequently develop musty odors, falling insulation, and high humidity without proper moisture control.
          </p>
        </div>
      </section>

      {/* 3. WHY BLUE SPRINGS HOMES HAVE PROBLEMS */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            Root Causes
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            Why Blue Springs Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {[
              {
                title: 'Jackson County Clay and Loam Soil',
                body: 'Blue Springs soil is a mix of clay and loam that holds moisture near foundations. Unlike sandy soil that drains quickly, Blue Springs soil maintains damp conditions under the crawl space even between rain events, creating persistent humidity problems.',
              },
              {
                title: 'I-70 Corridor Housing Stock',
                body: 'Many Blue Springs neighborhoods were developed between the 1960s and 1990s. Homes from this era frequently have 6-mil or no vapor barrier, open foundation vents, and fiberglass batt insulation that absorbs moisture and eventually falls. These conditions worsen over time without intervention.',
              },
              {
                title: 'Adams Dairy and Newer Development Areas',
                body: 'Areas like Adams Dairy saw significant development in the 2000s–2010s. While newer, these homes are not immune to crawl space moisture — nearby development can alter local drainage, and new construction in clay soil areas still develops humidity issues over time.',
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
                <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                  <Check size={18} />
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 800,
                      fontSize: 18,
                      textTransform: 'uppercase' as const,
                      color: '#fff',
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES WE OFFER */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            What We Do
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 36px',
            }}
          >
            Services We Offer in Blue Springs
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
            {[
              { label: 'Crawl Space Encapsulation', href: '/crawl-space-encapsulation-kansas-city/' },
              { label: 'Vapor Barrier', href: '/crawl-space-vapor-barrier-kansas-city/' },
              { label: 'Waterproofing', href: '/crawl-space-waterproofing-kansas-city/' },
              { label: 'Dehumidifier', href: '/crawl-space-dehumidifier-kansas-city/' },
              { label: 'Drainage & Sump Pump', href: '/crawl-space-drainage-sump-pump-kansas-city/' },
              { label: 'Insulation Removal', href: '/crawl-space-insulation-removal-kansas-city/' },
            ].map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                style={{
                  display: 'block',
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: '20px 22px',
                  textDecoration: 'none',
                  boxShadow: '0 1px 4px rgba(0,0,0,.06)',
                  transition: 'box-shadow .2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Check size={16} />
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 800,
                      fontSize: 17,
                      textTransform: 'uppercase' as const,
                      color: '#1B3A6B',
                    }}
                  >
                    {svc.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AREAS WE SERVE */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            Coverage Area
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 28px',
            }}
          >
            Areas We Serve in Blue Springs
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
            {[
              'Adams Dairy',
              'Adams Pointe',
              'Downtown Blue Springs',
              'Seven Bridges Area',
              '40 Highway Corridor',
              'Vesper Road Area',
              'Woods Chapel Road Corridor',
              'Missouri 7 Corridor',
            ].map((n) => (
              <span
                key={n}
                style={{
                  background: 'rgba(255,255,255,.1)',
                  border: '1px solid rgba(255,255,255,.2)',
                  borderRadius: 100,
                  padding: '6px 16px',
                  fontSize: 14,
                  color: '#fff',
                  fontFamily: "'Inter',sans-serif",
                }}
              >
                {n}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', margin: 0 }}>
            <strong style={{ color: '#fff' }}>ZIP Codes Served:</strong> 64014, 64015
          </p>
        </div>
      </section>

      {/* 6. OUR PROCESS */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            How It Works
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            Our Process
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
            {[
              {
                step: '01',
                title: 'Inspection',
                body: 'We inspect your Blue Springs crawl space at no charge — assessing moisture levels, soil conditions, liner condition, drainage needs, and any mold or wood damage.',
              },
              {
                step: '02',
                title: 'Solution',
                body: 'We provide a written estimate with a clear scope of work. No pressure — you decide if and when to move forward. We explain exactly what we recommend and why.',
              },
              {
                step: '03',
                title: 'Installation',
                body: 'Our crew installs the liner, seals vents, and sets up the dehumidifier — typically in one day. We leave the crawl space clean and the system ready to maintain itself.',
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
                    fontSize: 36,
                    color: '#F5A623',
                    lineHeight: 1,
                    marginBottom: 10,
                  }}
                >
                  {step.step}
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 20,
                    textTransform: 'uppercase' as const,
                    color: '#fff',
                    margin: '0 0 10px',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINANCING */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            Payment Options
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 28px',
            }}
          >
            Financing Available
          </h2>
          <FinancingOptions />
        </div>
      </section>

      {/* 8. FAQ */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            Common Questions
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {[
              {
                q: 'Do you serve Blue Springs, MO?',
                a: 'Yes. We serve all of Blue Springs and the surrounding Jackson County area, including Adams Dairy, Adams Pointe, and neighborhoods along the 40 Highway and I-70 corridors. ZIP codes 64014 and 64015.',
              },
              {
                q: 'Why does my Blue Springs crawl space smell musty in summer?',
                a: 'Jackson County clay soil and high summer humidity are the main causes. Open vents allow humid outdoor air into the crawl space, raising humidity above the 60% mold threshold and producing musty odors that rise into the living area through the stack effect.',
              },
              {
                q: 'My Blue Springs home near Adams Dairy has water in the crawl space after rain — what should I do?',
                a: 'Water after rain indicates a drainage issue — grading, downspouts, or low spots around the foundation are directing water under the home. We assess whether interior drainage or a sump pump is needed before any liner work.',
              },
              {
                q: 'How long does crawl space encapsulation take in Blue Springs?',
                a: 'Most Blue Springs encapsulation projects are completed in one day. Larger crawl spaces or drainage work may take two days.',
              },
              {
                q: 'Does encapsulation fix musty smells in Blue Springs homes?',
                a: 'Yes. Musty smells are caused by mold and bacteria that grow when crawl space humidity exceeds 60%. Sealing the crawl space and maintaining humidity below 60% with a dehumidifier eliminates the conditions that produce the odor.',
              },
              {
                q: 'What does crawl space encapsulation cost in Blue Springs?',
                a: 'Most Blue Springs homes run $2,800–$5,500 for a complete encapsulation with liner and dehumidifier. Free inspection and written estimate provided before any work begins.',
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
                    fontSize: 18,
                    textTransform: 'uppercase' as const,
                    color: '#fff',
                    margin: '0 0 10px',
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA FORM */}
      <section id="inspection-form" style={{ background: '#111827', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(30px,6vw,50px)',
                textTransform: 'uppercase' as const,
                margin: '0 0 12px',
                color: '#fff',
              }}
            >
              Get a Free Estimate in Blue Springs
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', margin: 0 }}>No obligation. Same-week inspections available.</p>
          </div>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
