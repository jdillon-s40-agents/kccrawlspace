import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Crawl Space Encapsulation Shawnee KS | KC Crawl Space Specialists',
  description:
    'Crawl space encapsulation in Shawnee, KS. Serving Shawnee Mission area, Clear Creek, and western Johnson County. Older ranch homes especially. Free inspection.',
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

export default function ShawneePage() {
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
                    name: 'Crawl Space Encapsulation Shawnee KS',
                    item: 'https://crawlspacekc.com/crawl-space-encapsulation-shawnee-ks/',
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
                  addressLocality: 'Shawnee',
                  addressRegion: 'KS',
                  addressCountry: 'US',
                },
                areaServed: [
                  {
                    '@type': 'City',
                    name: 'Shawnee',
                    containedInPlace: { '@type': 'State', name: 'Kansas' },
                  },
                ],
              },
              {
                '@type': 'Service',
                name: 'Crawl Space Encapsulation in Shawnee',
                provider: { '@id': 'https://crawlspacekc.com/#business' },
                areaServed: { '@type': 'City', name: 'Shawnee' },
                description:
                  'Full crawl space encapsulation with 20-mil reinforced liner, sealed vents, and commercial dehumidifier for Shawnee, KS homeowners — specializing in 1950s–1970s ranch homes on Johnson County clay soil.',
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Do you serve Shawnee, KS?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. We serve all of Shawnee, including the Shawnee Mission area, Clear Creek, and neighborhoods along Shawnee Mission Parkway and K-7. ZIP codes: 66203, 66216, 66217, 66218, 66226, and 66227.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'My 1960s Shawnee ranch home has a musty crawl space — what do I do?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: "Older ranch homes in Shawnee frequently have original open vents, deteriorated 6-mil liners, and fiberglass batt insulation that has absorbed moisture over decades. A free inspection tells you exactly what's going on and what the right solution is.",
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does Johnson County clay soil cause crawl space problems in Shawnee?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: "Yes. Shawnee's clay soil holds moisture near the foundation year-round. Even in dry summers, the soil under the crawl space maintains humidity that evaporates into the crawl space air. This is why a floor liner alone often isn't enough — wall sealing and a dehumidifier are needed to address the ongoing moisture source.",
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'My Shawnee crawl space has wet insulation — what should I do?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Wet insulation means humidity in the crawl space has been consistently above 60% long enough to saturate the fiberglass. We typically remove the wet insulation as part of encapsulation — it cannot be dried in place effectively. The encapsulation system then prevents future insulation failure.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do you serve the newer Shawnee areas near K-7 and 66226?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. We serve all Shawnee ZIP codes, including the newer development areas on the western side of the city.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What does crawl space encapsulation cost in Shawnee?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most Shawnee homes run $2,800–$5,500 for a complete encapsulation with liner and dehumidifier. Free inspection and written estimate before any work.',
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
            Shawnee, KS
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
            <span style={{ color: '#F5A623' }}>Shawnee</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2vw,18px)', color: '#9CA3AF', maxWidth: 640, margin: '0 0 36px', lineHeight: 1.6 }}>
            Shawnee's established neighborhoods have some of the most moisture-susceptible crawl spaces in Johnson County — 1950s and 1960s ranch homes with original open vents and thin liners on expansive clay soil. We help Shawnee homeowners seal, protect, and maintain their crawl spaces year-round.
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
            Crawl Space Encapsulation in Shawnee, KS
          </h2>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.7, maxWidth: 720, margin: 0 }}>
            Crawl space encapsulation in Shawnee, KS seals the crawl space against Johnson County clay soil moisture and summer humidity. Shawnee has a high concentration of 1950s–1970s ranch homes with open vents, inadequate vapor barriers, and fiberglass insulation that absorbs moisture and fails — making encapsulation one of the most common crawl space services in western Johnson County.
          </p>
        </div>
      </section>

      {/* 3. WHY SHAWNEE HOMES HAVE PROBLEMS */}
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
            Why Shawnee Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {[
              {
                title: 'Established Ranch Home Neighborhoods',
                body: "Many of Shawnee's most desirable neighborhoods were built between 1950 and 1975. Ranch-style homes from this era were constructed with open foundation vents and minimal or no vapor barriers — the standard of the time, but inadequate for today's moisture management expectations.",
              },
              {
                title: 'Johnson County Clay Soil',
                body: "Shawnee's clay soil is expansive and moisture-retaining. It maintains consistently damp conditions under crawl spaces, which means the moisture source is always present regardless of rainfall. Sealing the crawl space and adding a dehumidifier addresses the ongoing nature of this moisture source.",
              },
              {
                title: 'Western Kansas City Humidity',
                body: 'Shawnee sits on the western edge of the KC metro and experiences the same 85–90% summer relative humidity as the rest of the region. Open vents in older Shawnee homes allow this air directly into the crawl space, often causing humidity to spike above 60% RH quickly in June, July, and August.',
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
            Services We Offer in Shawnee
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
            Areas We Serve in Shawnee
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
            {[
              'Shawnee Mission Area',
              'Clear Creek Area',
              'Shawnee Mission Pkwy Corridor',
              'Midland Drive Area',
              'K-7 Corridor',
              'Quivira Road Area',
              'Nieman Road Area',
              'Woodland Area',
              'Monticello Area',
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
            <strong style={{ color: '#fff' }}>ZIP Codes Served:</strong> 66203, 66216, 66217, 66218, 66226, 66227
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
                body: 'We inspect your Shawnee crawl space at no charge — assessing moisture levels, liner condition, insulation condition, drainage needs, and the soil type under the home.',
              },
              {
                step: '02',
                title: 'Solution',
                body: 'We provide a written estimate with a clear scope of work. Ranch homes in Shawnee often need full wall sealing in addition to floor liner — we explain every recommendation and why it matters.',
              },
              {
                step: '03',
                title: 'Installation',
                body: 'Our crew installs the liner, seals vents and walls, removes wet insulation if needed, and sets up the dehumidifier — typically in one day. The crawl space is left clean and protected.',
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
                q: 'Do you serve Shawnee, KS?',
                a: 'Yes. We serve all of Shawnee, including the Shawnee Mission area, Clear Creek, and neighborhoods along Shawnee Mission Parkway and K-7. ZIP codes: 66203, 66216, 66217, 66218, 66226, and 66227.',
              },
              {
                q: 'My 1960s Shawnee ranch home has a musty crawl space — what do I do?',
                a: "Older ranch homes in Shawnee frequently have original open vents, deteriorated 6-mil liners, and fiberglass batt insulation that has absorbed moisture over decades. A free inspection tells you exactly what's going on and what the right solution is.",
              },
              {
                q: 'Does Johnson County clay soil cause crawl space problems in Shawnee?',
                a: "Yes. Shawnee's clay soil holds moisture near the foundation year-round. Even in dry summers, the soil under the crawl space maintains humidity that evaporates into the crawl space air. This is why a floor liner alone often isn't enough — wall sealing and a dehumidifier are needed to address the ongoing moisture source.",
              },
              {
                q: 'My Shawnee crawl space has wet insulation — what should I do?',
                a: 'Wet insulation means humidity in the crawl space has been consistently above 60% long enough to saturate the fiberglass. We typically remove the wet insulation as part of encapsulation — it cannot be dried in place effectively. The encapsulation system then prevents future insulation failure.',
              },
              {
                q: 'Do you serve the newer Shawnee areas near K-7 and 66226?',
                a: 'Yes. We serve all Shawnee ZIP codes, including the newer development areas on the western side of the city.',
              },
              {
                q: 'What does crawl space encapsulation cost in Shawnee?',
                a: 'Most Shawnee homes run $2,800–$5,500 for a complete encapsulation with liner and dehumidifier. Free inspection and written estimate before any work.',
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
              Get a Free Estimate in Shawnee
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', margin: 0 }}>No obligation. Same-week inspections available.</p>
          </div>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
