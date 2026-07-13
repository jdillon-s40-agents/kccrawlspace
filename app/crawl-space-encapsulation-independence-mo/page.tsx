import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Independence, MO | KC Crawl Space Specialists' },
  description:
    'Crawl space encapsulation in Independence, MO. Serving historic neighborhoods, 23rd Street area, and all of Jackson County. Older homes especially. Free inspection.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-encapsulation-independence-mo/',
  }};

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

export default function IndependencePage() {
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
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.crawlspacekc.com' },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Crawl Space Encapsulation Independence MO',
                    item: 'https://www.crawlspacekc.com/crawl-space-encapsulation-independence-mo/',
                  },
                ],
              },
              {
                '@type': 'LocalBusiness',
                name: 'KC Crawl Space Specialists LLC',
                '@id': 'https://www.crawlspacekc.com/#business',
                url: 'https://www.crawlspacekc.com',
                telephone: '+18169622111',
                priceRange: '$$-$$$$',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Independence',
                  addressRegion: 'MO',
                  addressCountry: 'US',
                },
                areaServed: [
                  {
                    '@type': 'City',
                    name: 'Independence',
                    containedInPlace: { '@type': 'State', name: 'Missouri' },
                  },
                ],
              },
              {
                '@type': 'Service',
                name: 'Crawl Space Encapsulation in Independence',
                provider: { '@id': 'https://www.crawlspacekc.com/#business' },
                areaServed: { '@type': 'City', name: 'Independence' },
                description:
                  'Full crawl space encapsulation with 20-mil reinforced liner, sealed vents, and commercial dehumidifier for Independence, MO homeowners — specializing in older and pier-and-beam homes.',
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Do you serve Independence, MO?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. We serve all of Independence, including Historic Downtown, the 23rd Street area, Noland Road corridor, and all Jackson County neighborhoods in the Independence ZIP codes: 64050, 64052, 64055, 64056, 64057, and 64058.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'My 1940s Independence home has an original crawl space — do I need full encapsulation?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Likely yes. Original crawl spaces in 1940s–1950s Independence homes typically have no liner, open vents, and original wood framing that has been exposed to moisture for decades. A full encapsulation assessment is the right starting point — we can identify what\'s needed and what condition the framing is in.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does pier-and-beam construction in Independence create extra crawl space problems?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Pier-and-beam foundations expose more of the floor system to crawl space conditions. In humid Kansas City summers, moisture can damage floor joists, subfloor material, and insulation faster than in homes with sealed perimeter foundations.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'My Independence crawl space has a musty smell — is that dangerous?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: "Musty smells indicate mold growth, which requires humidity above 60% to thrive. We don't make health claims about mold, but we do recommend addressing the moisture source. A free inspection tells you what's growing and what conditions are allowing it.",
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How long does crawl space work take in Independence?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most Independence projects are completed in one day. Older homes with more complex crawl spaces, drainage issues, or mold treatment needs may take two days.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What does crawl space encapsulation cost in Independence?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most Independence homes run $2,800–$5,500 for a complete system. Older homes with pier-and-beam construction sometimes need additional work, which we assess during the free inspection.',
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
            Independence, MO
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
            <span style={{ color: '#F5A623' }}>Independence</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2vw,18px)', color: '#9CA3AF', maxWidth: 640, margin: '0 0 36px', lineHeight: 1.6 }}>
            Independence has some of the Kansas City area's oldest housing stock — 1920s through 1960s homes with original crawl spaces that were never designed for today's moisture standards. We help Independence homeowners modernize crawl space moisture control and fix humidity, mold, and odor problems at the source.
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
            Crawl Space Encapsulation in Independence, MO
          </h2>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.7, maxWidth: 720, margin: 0 }}>
            Crawl space encapsulation in Independence, MO seals the crawl space with a 20-mil reinforced liner, sealed vents, and a dehumidifier. Independence has a high concentration of older homes — many from the 1920s to 1960s — with original crawl spaces, pier-and-beam construction, minimal vapor barriers, and open vents that allow Jackson County humidity to cause moisture damage year-round.
          </p>
        </div>
      </section>

      {/* 3. WHY INDEPENDENCE HOMES HAVE PROBLEMS */}
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
            Why Independence Homes Have Crawl Space Problems
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {[
              {
                title: 'Older Housing Stock',
                body: 'Independence has one of the highest concentrations of pre-1970 homes in the Kansas City metro. Many of these homes were built with minimal or no vapor barrier, open foundation vents, and pier-and-beam construction that leaves the floor system exposed to crawl space air. These original conditions are not adequate for today\'s humidity standards.',
              },
              {
                title: 'Jackson County Clay Soil',
                body: 'Independence sits on expansive Jackson County clay that holds moisture year-round. Clay soil in this area can maintain humidity conditions under crawl spaces even in dry weather, creating a persistent moisture source that affects wood, insulation, and indoor air quality.',
              },
              {
                title: 'Pier-and-Beam Construction',
                body: 'A significant portion of older Independence homes use pier-and-beam foundations, which expose more of the floor framing to crawl space conditions. This construction style can be particularly susceptible to moisture damage, wood movement, and mold when the crawl space is not properly sealed and controlled.',
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
            Services We Offer in Independence
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
            Areas We Serve in Independence
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
            {[
              'Historic Downtown Independence',
              '23rd Street Area',
              'Truman Road Corridor',
              'Noland Road Area',
              '39th Street Area',
              'Eastland Area',
              'Grain Valley Border Area',
              'Sugar Creek Border',
              'Blue Springs Border',
              'Sterling Area',
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
            <strong style={{ color: '#fff' }}>ZIP Codes Served:</strong> 64050, 64052, 64055, 64056, 64057, 64058
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
                body: 'We inspect your Independence crawl space at no charge — assessing moisture levels, framing condition, pier-and-beam integrity, liner status, and any mold or wood damage present.',
              },
              {
                step: '02',
                title: 'Solution',
                body: 'We provide a written estimate with a clear scope of work tailored to your home\'s age and construction. Older Independence homes sometimes need extra steps — we explain everything upfront.',
              },
              {
                step: '03',
                title: 'Installation',
                body: 'Our crew installs the liner, seals vents, and sets up the dehumidifier — typically in one day. We leave the crawl space clean and the system ready to maintain itself long-term.',
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
                q: 'Do you serve Independence, MO?',
                a: 'Yes. We serve all of Independence, including Historic Downtown, the 23rd Street area, Noland Road corridor, and all Jackson County neighborhoods in the Independence ZIP codes: 64050, 64052, 64055, 64056, 64057, and 64058.',
              },
              {
                q: 'My 1940s Independence home has an original crawl space — do I need full encapsulation?',
                a: "Likely yes. Original crawl spaces in 1940s–1950s Independence homes typically have no liner, open vents, and original wood framing that has been exposed to moisture for decades. A full encapsulation assessment is the right starting point — we can identify what's needed and what condition the framing is in.",
              },
              {
                q: 'Does pier-and-beam construction in Independence create extra crawl space problems?',
                a: 'Yes. Pier-and-beam foundations expose more of the floor system to crawl space conditions. In humid Kansas City summers, moisture can damage floor joists, subfloor material, and insulation faster than in homes with sealed perimeter foundations.',
              },
              {
                q: 'My Independence crawl space has a musty smell — is that dangerous?',
                a: "Musty smells indicate mold growth, which requires humidity above 60% to thrive. We don't make health claims about mold, but we do recommend addressing the moisture source. A free inspection tells you what's growing and what conditions are allowing it.",
              },
              {
                q: 'How long does crawl space work take in Independence?',
                a: 'Most Independence projects are completed in one day. Older homes with more complex crawl spaces, drainage issues, or mold treatment needs may take two days.',
              },
              {
                q: 'What does crawl space encapsulation cost in Independence?',
                a: 'Most Independence homes run $2,800–$5,500 for a complete system. Older homes with pier-and-beam construction sometimes need additional work, which we assess during the free inspection.',
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
              Get a Free Estimate in Independence
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', margin: 0 }}>No obligation. Same-week inspections available.</p>
          </div>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
