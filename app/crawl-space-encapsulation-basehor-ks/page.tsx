import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Basehor, KS | KC Crawl Space Specialists' },
  description:
    'Crawl space encapsulation in Basehor, KS. Leavenworth County suburb growing along K-7. Free inspection. Same-week service.',
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

export default function BasehorPage() {
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
                    name: 'Crawl Space Encapsulation Basehor KS',
                    item: 'https://crawlspacekc.com/crawl-space-encapsulation-basehor-ks/',
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
                  addressLocality: 'Basehor',
                  addressRegion: 'KS',
                  addressCountry: 'US',
                },
                areaServed: [
                  {
                    '@type': 'City',
                    name: 'Basehor',
                    containedInPlace: { '@type': 'State', name: 'Kansas' },
                  },
                ],
              },
              {
                '@type': 'Service',
                name: 'Crawl Space Encapsulation in Basehor',
                provider: { '@id': 'https://crawlspacekc.com/#business' },
                areaServed: { '@type': 'City', name: 'Basehor' },
                description:
                  'Full crawl space encapsulation with 20-mil reinforced liner, sealed vents, and commercial dehumidifier for Basehor, KS homeowners — serving growing Leavenworth County residential developments along K-7.',
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Do you serve Basehor, KS?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. We serve all of Basehor, including the K-7 corridor, downtown Basehor, Leavenworth Road area, and the Bonner Springs border. ZIP code: 66007.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'I have a new home in Basehor — do I still need crawl space encapsulation?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Newer Basehor homes can develop crawl space moisture quickly as surrounding development alters local drainage patterns. Clay-influenced soil and Kansas City summer humidity affect new construction the same way they affect older homes. A free inspection tells you exactly what your crawl space conditions are right now.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How does Leavenworth County soil compare to Johnson County for crawl space moisture?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Leavenworth County soil near the Johnson County line shares similar moisture-retaining characteristics with Johnson County clay. The core crawl space moisture challenges — ground evaporation, summer humidity, open vents — are consistent across both counties.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does new K-7 corridor development affect drainage for existing homes in Basehor?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Rapid development along K-7 continues to alter how surface water moves through Basehor. Established homes can see new moisture conditions in their crawl spaces as neighboring properties are graded and paved, redirecting water toward older foundations.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How long does crawl space encapsulation take in Basehor?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most Basehor homes are completed in one day. Larger crawl spaces or those requiring insulation removal may take two days. We provide a clear timeline in the written estimate.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What does crawl space encapsulation cost in Basehor?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most Basehor homes run $2,800–$5,500 for a complete encapsulation with liner and dehumidifier. Free inspection and written estimate before any work.',
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
            Basehor, KS
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
            <span style={{ color: '#F5A623' }}>Basehor</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2vw,18px)', color: '#9CA3AF', maxWidth: 640, margin: '0 0 36px', lineHeight: 1.6 }}>
            Basehor is a growing Leavenworth County community along K-7, attracting new residential development on soil that creates crawl space moisture challenges. We help Basehor homeowners get ahead of humidity and moisture problems before they become bigger issues.
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
            Crawl Space Encapsulation in Basehor, KS
          </h2>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.7, maxWidth: 720, margin: 0 }}>
            Crawl space encapsulation in Basehor seals the crawl space against Leavenworth County soil moisture and Kansas City summer humidity. Basehor's growing residential developments on K-7 — and older homes in the original community — all benefit from a properly sealed and dehumidified crawl space as the area continues to expand.
          </p>
        </div>
      </section>

      {/* 3. WHY BASEHOR HOMES HAVE PROBLEMS */}
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
            Why Basehor Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {[
              {
                title: 'Leavenworth County Growing Suburb',
                body: 'Basehor sits in Leavenworth County and has grown significantly along K-7 as KC metro development pushes northwest. New subdivisions here are built on soil with moisture-holding characteristics similar to the clay-heavy soil found throughout the KC metro.',
              },
              {
                title: 'New Construction Is Not Immune',
                body: 'Newer homes in Basehor can develop crawl space moisture quickly as surrounding development changes local drainage patterns. Clay-influenced soil and Kansas City summer humidity affect new construction the same way they affect older homes.',
              },
              {
                title: 'K-7 Corridor Development Dynamics',
                body: 'Rapid development along K-7 continues to alter how surface water moves through Basehor. Established homes can see new moisture conditions as neighboring properties are graded and paved, redirecting water toward older foundations.',
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

      {/* 4. SERVICES */}
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
            Services We Offer in Basehor
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
            Areas We Serve in Basehor
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
            {[
              'K-7 Corridor',
              'Downtown Basehor',
              'Leavenworth Road Area',
              'Bonner Springs Border',
              'Linwood Area',
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
            <strong style={{ color: '#fff' }}>ZIP Codes Served:</strong> 66007
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
                body: 'We inspect your Basehor crawl space at no charge — assessing moisture levels, liner condition, insulation, drainage patterns, and how surrounding development may be affecting water movement near your foundation.',
              },
              {
                step: '02',
                title: 'Solution',
                body: 'We provide a written estimate with a clear scope. Basehor homes in rapidly developing areas may need drainage attention in addition to encapsulation — we explain every recommendation and why it is right for your specific crawl space.',
              },
              {
                step: '03',
                title: 'Installation',
                body: 'Our crew installs the 20-mil liner, seals vents and walls, removes wet insulation if needed, and sets up the commercial dehumidifier — typically completed in one day.',
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
                q: 'Do you serve Basehor, KS?',
                a: 'Yes. We serve all of Basehor, including the K-7 corridor, downtown Basehor, Leavenworth Road area, and the Bonner Springs border. ZIP code: 66007.',
              },
              {
                q: 'I have a new home in Basehor — do I still need crawl space encapsulation?',
                a: 'Newer Basehor homes can develop crawl space moisture quickly as surrounding development alters local drainage patterns. Clay-influenced soil and Kansas City summer humidity affect new construction the same way they affect older homes. A free inspection tells you exactly what your crawl space conditions are right now.',
              },
              {
                q: 'How does Leavenworth County soil compare to Johnson County for crawl space moisture?',
                a: 'Leavenworth County soil near the Johnson County line shares similar moisture-retaining characteristics with Johnson County clay. The core crawl space moisture challenges — ground evaporation, summer humidity, open vents — are consistent across both counties.',
              },
              {
                q: 'Does new K-7 corridor development affect drainage for existing homes in Basehor?',
                a: 'Yes. Rapid development along K-7 continues to alter how surface water moves through Basehor. Established homes can see new moisture conditions in their crawl spaces as neighboring properties are graded and paved, redirecting water toward older foundations.',
              },
              {
                q: 'How long does crawl space encapsulation take in Basehor?',
                a: 'Most Basehor homes are completed in one day. Larger crawl spaces or those requiring insulation removal may take two days. We provide a clear timeline in the written estimate.',
              },
              {
                q: 'What does crawl space encapsulation cost in Basehor?',
                a: 'Most Basehor homes run $2,800–$5,500 for a complete encapsulation with liner and dehumidifier. Free inspection and written estimate before any work.',
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
              Get a Free Estimate in Basehor
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', margin: 0 }}>No obligation. Same-week inspections available.</p>
          </div>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
