import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: "Crawl Space Encapsulation vs Vapor Barrier | What's the Difference?" },
  description: "Vapor barrier vs. full crawl space encapsulation — what's the difference? Learn when a vapor barrier alone is enough and when full encapsulation is the right call.",
  alternates: {
    canonical: 'https://www.crawlspacekc.com/encapsulation-vs-vapor-barrier/',
  }};

function Check({ color = '#16A34A', size = 16 }: { color?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: 'none', marginTop: 2 }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XMark({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#DC2626"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: 'none', marginTop: 2 }}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const faqItems = [
  {
    q: 'Is encapsulation the same as a vapor barrier?',
    a: 'No. A vapor barrier is a floor liner that reduces ground moisture evaporation. Encapsulation is a complete system that includes a liner on the floor and walls, sealed vents, air sealing, and a dehumidifier. Encapsulation is a more complete moisture-control approach.',
  },
  {
    q: 'Which is better: vapor barrier or encapsulation?',
    a: 'For most Kansas City homes with any humidity, odor, or moisture concern, full encapsulation provides better long-term results. A vapor barrier alone may help in very mild conditions but does not address humidity from outdoor air or moisture through walls.',
  },
  {
    q: 'Can I start with a vapor barrier and add encapsulation later?',
    a: 'Yes. Some homeowners install a basic barrier first and add vent sealing and a dehumidifier later. However, the cost of doing it in stages is often higher than doing the complete system in one visit.',
  },
  {
    q: 'Does a vapor barrier need to cover the walls?',
    a: 'In a fully encapsulated crawl space, yes — walls are covered in addition to the floor. Wall coverage closes the main pathway for moisture to enter from the foundation and significantly improves the system\'s effectiveness.',
  },
  {
    q: 'How thick should a crawl space vapor barrier be?',
    a: 'We install 20-mil reinforced liner. Six-mil poly is the minimum in some building codes but is not durable enough for long-term crawl space use, especially in spaces that need periodic maintenance access.',
  },
  {
    q: 'Do I need a dehumidifier if I have a vapor barrier?',
    a: 'In most Kansas City crawl spaces, yes. A floor liner reduces ground moisture but does not address humidity from outdoor air entering through vents and walls. A dehumidifier in a sealed space maintains target humidity year-round.',
  },
  {
    q: 'What is the cost difference between a vapor barrier and encapsulation?',
    a: 'A basic vapor barrier typically costs $2,800–$3,500. Full encapsulation with a dehumidifier runs $4,500–$5,500 for most KC homes. The added cost covers wall coverage, vent sealing, and the dehumidifier.',
  },
  {
    q: 'Does encapsulation come with a warranty?',
    a: 'Yes. Our encapsulation work includes a lifetime workmanship warranty. The 20-mil liner carries a 25-year manufacturer warranty.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://crawlspacekc.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Crawl Space Encapsulation vs Vapor Barrier',
          item: 'https://crawlspacekc.com/encapsulation-vs-vapor-barrier/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'KC Crawl Space Specialists LLC',
      url: 'https://crawlspacekc.com',
      telephone: '+18169622111',
      priceRange: '$$-$$$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kansas City',
        addressRegion: 'MO',
        addressCountry: 'US',
      },
      areaServed: [
        'Kansas City MO',
        'Kansas City KS',
        "Lee's Summit MO",
        'Overland Park KS',
        'Olathe KS',
        'Blue Springs MO',
        'Independence MO',
        'Shawnee KS',
        'Lenexa KS',
        'Liberty MO',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function EncapsulationVsVaporBarrierPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. HERO ── */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 14px',
            }}
          >
            Encapsulation vs Vapor Barrier
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
            Crawl Space Encapsulation{' '}
            <span style={{ color: '#F5A623' }}>vs Vapor Barrier</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px,2vw,19px)',
              color: '#9CA3AF',
              margin: '0 0 36px',
              maxWidth: 680,
              lineHeight: 1.6,
            }}
          >
            A vapor barrier and crawl space encapsulation are not the same thing. One covers the
            ground. The other seals the entire crawl space as a system. Here is what each one does
            and how to choose.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' as const }}>
            <Link
              href="/contact"
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
              Get a Free Estimate
            </Link>
            <a
              href={PHONE_HREF}
              style={{
                background: 'transparent',
                color: '#fff',
                font: "700 16px 'Inter',sans-serif",
                padding: '16px 26px',
                borderRadius: 10,
                border: '2px solid rgba(255,255,255,.25)',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. QUICK ANSWER ── */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            Quick Answer
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 20px',
            }}
          >
            Encapsulation vs Vapor Barrier: What&apos;s the Difference?
          </h2>
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 760 }}>
            A vapor barrier usually covers the crawl space ground to reduce moisture from exposed
            soil. Full crawl space encapsulation is more complete and may include sealed walls,
            sealed vents, air sealing, drainage, sump pump, insulation changes, and a dehumidifier.
            Encapsulation is usually better for ongoing humidity, odor, or moisture problems.
          </p>
        </div>
      </section>

      {/* ── 3. WHAT A VAPOR BARRIER IS ── */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            Vapor Barrier Basics
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 20px',
            }}
          >
            What Is a Crawl Space Vapor Barrier?
          </h2>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 32px', maxWidth: 760 }}>
            A vapor barrier (also called a moisture barrier or crawl space liner) is a plastic or
            reinforced polyethylene sheet installed on the crawl space floor. It reduces moisture
            evaporation from exposed soil into the crawl space air. A basic vapor barrier
            installation typically includes the floor only — walls, vents, and air movement are not
            addressed.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: 24,
            }}
          >
            <div
              style={{
                background: '#111827',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: 12,
                padding: 24,
              }}
            >
              <p
                style={{
                  font: "700 13px 'Inter',sans-serif",
                  letterSpacing: '.12em',
                  textTransform: 'uppercase' as const,
                  color: '#16A34A',
                  margin: '0 0 16px',
                }}
              >
                What a vapor barrier does
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
                {[
                  'Reduces ground moisture evaporation',
                  'Keeps soil from direct contact with crawl space air',
                  'Helps reduce humidity from the floor up',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Check />
                    <span style={{ fontSize: 15, color: '#D1D5DB', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                background: '#111827',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: 12,
                padding: 24,
              }}
            >
              <p
                style={{
                  font: "700 13px 'Inter',sans-serif",
                  letterSpacing: '.12em',
                  textTransform: 'uppercase' as const,
                  color: '#DC2626',
                  margin: '0 0 16px',
                }}
              >
                What it does NOT include
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
                {['Wall coverage', 'Vent sealing', 'Active humidity control'].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <XMark />
                    <span style={{ fontSize: 15, color: '#D1D5DB', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHAT ENCAPSULATION IS ── */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            Complete System
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 20px',
            }}
          >
            What Is Crawl Space Encapsulation?
          </h2>
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, margin: '0 0 32px', maxWidth: 760 }}>
            Crawl space encapsulation is a complete moisture-control system. It goes beyond a floor
            liner and seals the entire crawl space environment — floor, walls, vents, and rim
            joists. A properly encapsulated crawl space includes a vapor barrier on floor and walls,
            sealed foundation vents, air sealing at penetrations, and typically a commercial
            dehumidifier to maintain target humidity year-round.
          </p>
          <div
            style={{
              background: '#0D0D0D',
              border: '1px solid rgba(255,255,255,.08)',
              borderRadius: 12,
              padding: 28,
            }}
          >
            <p
              style={{
                font: "700 13px 'Inter',sans-serif",
                letterSpacing: '.12em',
                textTransform: 'uppercase' as const,
                color: '#16A34A',
                margin: '0 0 20px',
              }}
            >
              What encapsulation includes
            </p>
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
                gap: 14,
              }}
            >
              {[
                '20-mil reinforced liner on floor AND walls',
                'Vent sealing to stop outdoor air entry',
                'Rim joist insulation and air sealing',
                'Mold treatment of framing if needed',
                'Commercial dehumidifier sized to the space',
                'Written report and warranty',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <Check size={18} />
                  <span style={{ fontSize: 15, color: '#D1D5DB', lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 5. SIDE-BY-SIDE COMPARISON ── */}
      <section
        style={{
          background: '#1B3A6B',
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
              margin: '0 0 12px',
              textAlign: 'center' as const,
            }}
          >
            Side by Side
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
              textAlign: 'center' as const,
            }}
          >
            Vapor Barrier vs Encapsulation: Side by Side
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: 24,
            }}
          >
            {/* Vapor Barrier Card */}
            <div
              style={{
                background: '#111827',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: 12,
                padding: 28,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: 26,
                  textTransform: 'uppercase' as const,
                  color: '#fff',
                  margin: '0 0 20px',
                }}
              >
                Vapor Barrier Only
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  { icon: 'check', text: 'Addresses ground moisture' },
                  { icon: 'x', text: 'Floor only — walls left exposed' },
                  { icon: 'x', text: 'Vents remain open' },
                  { icon: 'x', text: 'No dehumidifier' },
                  { icon: 'x', text: 'Does not control humidity' },
                  { icon: 'x', text: 'Does not seal outdoor air out' },
                  { icon: 'check', text: 'Lower initial cost' },
                  { icon: 'x', text: 'May not resolve musty odors or ongoing humidity' },
                ].map((item) => (
                  <li key={item.text} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    {item.icon === 'check' ? <Check /> : <XMark />}
                    <span style={{ fontSize: 14, color: '#D1D5DB', lineHeight: 1.5 }}>{item.text}</span>
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: 20,
                  paddingTop: 20,
                  borderTop: '1px solid rgba(255,255,255,.1)',
                }}
              >
                <p
                  style={{
                    font: "600 12px 'Inter',sans-serif",
                    letterSpacing: '.1em',
                    textTransform: 'uppercase' as const,
                    color: '#6B7280',
                    margin: '0 0 6px',
                  }}
                >
                  Best for
                </p>
                <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, lineHeight: 1.5 }}>
                  Very mild moisture with no odor or humidity concerns
                </p>
              </div>
            </div>

            {/* Full Encapsulation Card */}
            <div
              style={{
                background: '#111827',
                border: '2px solid #F5A623',
                borderRadius: 12,
                padding: 28,
                position: 'relative' as const,
              }}
            >
              <div
                style={{
                  position: 'absolute' as const,
                  top: -14,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#F5A623',
                  color: '#0D0D0D',
                  font: "800 11px 'Inter',sans-serif",
                  letterSpacing: '.12em',
                  textTransform: 'uppercase' as const,
                  padding: '4px 14px',
                  borderRadius: 6,
                  whiteSpace: 'nowrap' as const,
                }}
              >
                Complete System
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: 26,
                  textTransform: 'uppercase' as const,
                  color: '#fff',
                  margin: '0 0 20px',
                }}
              >
                Full Encapsulation
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Floor + walls covered',
                  'Vents sealed',
                  'Dehumidifier included',
                  'Air sealed at penetrations',
                  'Controls ground moisture AND air humidity',
                  'Stops outdoor humid air entry',
                  'Resolves musty odors, condensation, mold risk',
                  'Lifetime warranty',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Check />
                    <span style={{ fontSize: 14, color: '#D1D5DB', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: 20,
                  paddingTop: 20,
                  borderTop: '1px solid rgba(255,255,255,.1)',
                }}
              >
                <p
                  style={{
                    font: "600 12px 'Inter',sans-serif",
                    letterSpacing: '.1em',
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 6px',
                  }}
                >
                  Best for
                </p>
                <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, lineHeight: 1.5 }}>
                  Most Kansas City homes with any humidity, odor, or moisture concern
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHEN VAPOR BARRIER IS ENOUGH ── */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            When It May Be Sufficient
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 20px',
            }}
          >
            When a Vapor Barrier Alone May Be Sufficient
          </h2>
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 760 }}>
            A floor-only vapor barrier may be appropriate when the crawl space has no standing
            water, no persistent musty odors, no visible mold, low humidity readings, and the
            homeowner has very limited budget and mild conditions.
          </p>
          <ul style={{ listStyle: 'none', margin: '0 0 24px', padding: 0, display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {[
              'Crawl space humidity consistently below 60%',
              'No musty odor in the home',
              'No water entry after rain',
              'No visible mold on framing',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <Check size={18} color="#1B3A6B" />
                <span style={{ fontSize: 16, color: '#374151', lineHeight: 1.5 }}>{item}</span>
              </li>
            ))}
          </ul>
          <div
            style={{
              background: '#E8F0FB',
              border: '1px solid #1B3A6B',
              borderRadius: 10,
              padding: '18px 22px',
            }}
          >
            <p style={{ fontSize: 15, color: '#1B3A6B', margin: 0, lineHeight: 1.6 }}>
              <strong>Kansas City note:</strong> With high summer humidity and clay soil, these
              conditions are relatively rare. Most homeowners who install a vapor barrier alone find
              they still need a dehumidifier and vent sealing within a few years.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. WHEN FULL ENCAPSULATION IS NEEDED ── */}
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
              margin: '0 0 12px',
            }}
          >
            When You Need More
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 32px',
            }}
          >
            When Full Encapsulation Is the Right Choice
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: 16,
            }}
          >
            {[
              {
                title: 'Musty smell in the home',
                body: 'Odors from the crawl space require sealing the pathway between crawl and living area.',
              },
              {
                title: 'Humidity above 60% in crawl space',
                body: 'Open vents and exposed walls continuously re-introduce humid air that a floor liner cannot address.',
              },
              {
                title: 'Visible mold on joists or subfloor',
                body: 'Mold treatment plus moisture control is needed; a floor liner alone does not stop the conditions allowing regrowth.',
              },
              {
                title: 'Falling or wet insulation',
                body: 'Insulation needs to be removed and moisture corrected before any liner work.',
              },
              {
                title: 'Cold floors in winter',
                body: 'Sealing the crawl space improves floor comfort by reducing the cold air movement below.',
              },
              {
                title: 'Home sale or inspection concern',
                body: 'A professionally encapsulated crawl space with documentation is a positive finding at inspection.',
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
                    fontSize: 18,
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 8px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. COST COMPARISON ── */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            Investment
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 28px',
            }}
          >
            Cost: Vapor Barrier vs Encapsulation in Kansas City
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: 20,
              marginBottom: 24,
            }}
          >
            {[
              {
                label: 'Vapor Barrier Only',
                range: '$2,800–$3,500',
                note: 'for most KC homes. Includes 20-mil liner on floor, seam taping, and vent sealing. Does not include dehumidifier.',
              },
              {
                label: 'Full Encapsulation',
                range: '$4,500–$5,500',
                note: '(most common) to $6,500–$9,000+ with drainage. Includes liner on floor and walls, vent sealing, mold treatment, and commercial dehumidifier.',
              },
            ].map((card) => (
              <div
                key={card.label}
                style={{
                  background: '#0D0D0D',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <p
                  style={{
                    font: "600 12px 'Inter',sans-serif",
                    letterSpacing: '.12em',
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 8px',
                  }}
                >
                  {card.label}
                </p>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 32,
                    color: '#fff',
                    margin: '0 0 10px',
                  }}
                >
                  {card.range}
                </p>
                <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>
                  {card.note}
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.6, margin: '0 0 16px' }}>
            The difference in upfront cost is often less than the cost of addressing mold, humidity
            damage, or repeated moisture problems a floor-only liner doesn&apos;t prevent.
          </p>
          <Link
            href="/crawl-space-encapsulation-cost-kansas-city/"
            style={{
              color: '#1B3A6B',
              font: "600 15px 'Inter',sans-serif",
              textDecoration: 'underline',
            }}
          >
            See full crawl space encapsulation cost breakdown &rarr;
          </Link>
        </div>
      </section>

      {/* ── 9. FINANCING ── */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <FinancingOptions />
        </div>
      </section>

      {/* ── 10. RELATED SERVICES ── */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            Related Pages
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(24px,4vw,36px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 24px',
            }}
          >
            Related Services
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
              gap: 16,
            }}
          >
            {[
              { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
              { label: 'Vapor Barrier KC', href: '/crawl-space-vapor-barrier-kansas-city/' },
              { label: 'Vapor Barrier Thickness', href: '/crawl-space-vapor-barrier-thickness/' },
              { label: 'Encapsulation Cost', href: '/crawl-space-encapsulation-cost-kansas-city/' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  background: '#0D0D0D',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 10,
                  padding: '18px 20px',
                  textDecoration: 'none',
                  color: '#fff',
                  font: "600 14px 'Inter',sans-serif",
                  lineHeight: 1.4,
                  transition: 'border-color .2s',
                }}
              >
                {link.label} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. FAQ ── */}
      <section
        style={{
          background: '#1B3A6B',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
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
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 32px',
            }}
          >
            Encapsulation vs Vapor Barrier FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {faqItems.map((item) => (
              <div
                key={item.q}
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
                    fontSize: 19,
                    textTransform: 'uppercase' as const,
                    color: '#fff',
                    margin: '0 0 10px',
                  }}
                >
                  {item.q}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.7 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. CTA FORM ── */}
      <section style={{ background: '#111827', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ textAlign: 'center' as const, marginBottom: 32 }}>
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
              Get a Free Crawl Space Estimate
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', margin: 0 }}>
              No obligation. Same-week appointments available in Kansas City.
            </p>
          </div>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
