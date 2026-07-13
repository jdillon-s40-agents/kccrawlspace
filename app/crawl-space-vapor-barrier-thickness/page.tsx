import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Vapor Barrier Thickness | 6, 10 & 20-Mil Guide' },
  description: 'Which crawl space vapor barrier thickness do you need? Understand the difference between 6, 10, 12 & 20-mil liners and why thicker reinforced barriers last longer.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-vapor-barrier-thickness/',
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
    q: 'Is 6-mil vapor barrier enough for a crawl space?',
    a: 'Six-mil plastic is the bare minimum allowed by some codes but is not recommended for long-term crawl space encapsulation. It tears easily, especially in crawl spaces with rough ground or periodic service access. A 20-mil reinforced liner is significantly more durable.',
  },
  {
    q: 'What is the best mil thickness for a crawl space vapor barrier?',
    a: 'Twenty-mil reinforced liner is the industry standard for quality crawl space encapsulation. It handles foot traffic, resists puncture from rough ground, and carries 25-year manufacturer warranties. We only install 20-mil reinforced material.',
  },
  {
    q: 'Is 20-mil vapor barrier worth the extra cost?',
    a: 'Yes. The material cost difference between 6-mil and 20-mil liner on a typical crawl space is modest compared to the total project cost. A 20-mil liner that lasts 25 years outperforms 6-mil material that may need replacement within 5–10 years.',
  },
  {
    q: "What does 'reinforced' mean on a vapor barrier?",
    a: 'Reinforced means the liner has a woven scrim layer embedded between plastic layers. The scrim arrests tears instead of allowing them to propagate, and adds puncture resistance. A reinforced 12-mil liner can outperform an unreinforced 20-mil in tear resistance.',
  },
  {
    q: 'How long does a 20-mil crawl space vapor barrier last?',
    a: 'A properly installed 20-mil reinforced liner is designed to last 20–25 years. Most manufacturers back these products with 25-year warranties. Thin, unreinforced liners typically degrade in 5–10 years under normal crawl space conditions.',
  },
  {
    q: 'Does a thicker vapor barrier reduce humidity?',
    a: 'Thickness improves durability, not moisture vapor transmission rate (MVTR). What reduces crawl space humidity most effectively is sealing vents, covering walls, and adding a dehumidifier — not just installing a thicker floor liner.',
  },
  {
    q: 'Can I install a thicker vapor barrier over an old one?',
    a: 'It is generally better to remove old, deteriorated material first. Old liner can trap moisture underneath the new one and may have tears or gaps that allow moisture bypass. We remove old liner before installing new material.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.crawlspacekc.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Crawl Space Vapor Barrier Thickness',
          item: 'https://www.crawlspacekc.com/crawl-space-vapor-barrier-thickness/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'KC Crawl Space Specialists LLC',
      url: 'https://www.crawlspacekc.com',
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

export default function VaporBarrierThicknessPage() {
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
            Vapor Barrier Thickness
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
            Crawl Space Vapor Barrier{' '}
            <span style={{ color: '#F5A623' }}>Thickness Guide</span>
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
            Not all crawl space vapor barriers are the same. Thickness, reinforcement, and
            installation quality determine how long a liner lasts and how well it performs in Kansas
            City&apos;s humid summers.
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
            What Vapor Barrier Thickness Is Best for a Crawl Space?
          </h2>
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 760 }}>
            Crawl space vapor barriers come in different thicknesses, commonly including 6 mil, 10
            mil, 12 mil, and 20 mil materials. Thicker reinforced barriers are generally more
            durable for service access, rough ground, and long-term encapsulation, while thin
            plastic is more likely to tear or shift.
          </p>
        </div>
      </section>

      {/* ── 3. WHAT MIL MEANS ── */}
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
            Understanding the Measurement
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
            What Does &ldquo;Mil&rdquo; Mean for Vapor Barriers?
          </h2>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 20px', maxWidth: 760 }}>
            &ldquo;Mil&rdquo; refers to thousandths of an inch — not millimeters. A 6-mil barrier
            is 0.006 inches thick. A 20-mil barrier is 0.020 inches thick — more than three times
            thicker. Thickness affects puncture resistance, tear strength, and how well the barrier
            holds up over years of crawl space access by HVAC technicians, plumbers, and
            inspectors.
          </p>
          <div
            style={{
              background: '#111827',
              border: '1px solid rgba(255,255,255,.08)',
              borderRadius: 12,
              padding: '18px 22px',
            }}
          >
            <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>
              <strong style={{ color: '#F5A623' }}>Important:</strong> Reinforcement vs
              non-reinforcement matters as much as thickness — a reinforced 12-mil liner can
              outperform an unreinforced 20-mil in puncture resistance.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. THICKNESS COMPARISON ── */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 1050, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            Comparison
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 32px',
            }}
          >
            6 Mil vs 10 Mil vs 20 Mil Vapor Barrier
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: 20,
            }}
          >
            {/* 6 Mil */}
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
                  font: "600 12px 'Inter',sans-serif",
                  letterSpacing: '.12em',
                  textTransform: 'uppercase' as const,
                  color: '#6B7280',
                  margin: '0 0 8px',
                }}
              >
                Entry Level
              </p>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: 32,
                  textTransform: 'uppercase' as const,
                  color: '#fff',
                  margin: '0 0 16px',
                }}
              >
                6 Mil
              </h3>
              <p style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.6, margin: '0 0 16px' }}>
                Thin polyethylene sheeting. Minimum material allowed by some building codes. Tears
                easily when walked on. Shifts with ground movement. Not recommended for crawl spaces
                requiring periodic service access. Seams tend to separate over time.
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 16, marginTop: 16 }}>
                <p
                  style={{
                    font: "600 11px 'Inter',sans-serif",
                    letterSpacing: '.1em',
                    textTransform: 'uppercase' as const,
                    color: '#16A34A',
                    margin: '0 0 6px',
                  }}
                >
                  Best for
                </p>
                <p style={{ fontSize: 13, color: '#9CA3AF', margin: '0 0 12px', lineHeight: 1.5 }}>
                  Temporary moisture reduction in a crawl space that won&apos;t be entered and will
                  be redone soon.
                </p>
                <p
                  style={{
                    font: "600 11px 'Inter',sans-serif",
                    letterSpacing: '.1em',
                    textTransform: 'uppercase' as const,
                    color: '#DC2626',
                    margin: '0 0 6px',
                  }}
                >
                  Not recommended for
                </p>
                <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0, lineHeight: 1.5 }}>
                  Long-term encapsulation.
                </p>
              </div>
            </div>

            {/* 10 Mil */}
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
                  font: "600 12px 'Inter',sans-serif",
                  letterSpacing: '.12em',
                  textTransform: 'uppercase' as const,
                  color: '#6B7280',
                  margin: '0 0 8px',
                }}
              >
                Mid Grade
              </p>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: 32,
                  textTransform: 'uppercase' as const,
                  color: '#fff',
                  margin: '0 0 16px',
                }}
              >
                10 Mil
              </h3>
              <p style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.6, margin: '0 0 16px' }}>
                Mid-grade liner. More puncture-resistant than 6 mil. Holds up better to occasional
                foot traffic. Still not reinforced — can stretch and tear under load. Better than 6
                mil for basic encapsulation but not the preferred choice for spaces with rough ground
                or regular service access.
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 16, marginTop: 16 }}>
                <p
                  style={{
                    font: "600 11px 'Inter',sans-serif",
                    letterSpacing: '.1em',
                    textTransform: 'uppercase' as const,
                    color: '#16A34A',
                    margin: '0 0 6px',
                  }}
                >
                  Best for
                </p>
                <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0, lineHeight: 1.5 }}>
                  Moderate-use crawl spaces with smooth ground and rare access needs.
                </p>
              </div>
            </div>

            {/* 20 Mil */}
            <div
              style={{
                background: '#0D0D0D',
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
                What We Install
              </div>
              <p
                style={{
                  font: "600 12px 'Inter',sans-serif",
                  letterSpacing: '.12em',
                  textTransform: 'uppercase' as const,
                  color: '#F5A623',
                  margin: '0 0 8px',
                }}
              >
                Heavy Duty Reinforced
              </p>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: 32,
                  textTransform: 'uppercase' as const,
                  color: '#fff',
                  margin: '0 0 16px',
                }}
              >
                20 Mil
              </h3>
              <p style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.6, margin: '0 0 16px' }}>
                Heavy-duty reinforced liner with a woven scrim core for tear and puncture resistance.
                Designed for long-term encapsulation use. Holds up to service technician foot
                traffic, HVAC service calls, and plumbing access. Most manufacturers back 20-mil
                reinforced liners with 25-year warranties.
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: 16, marginTop: 16 }}>
                <p
                  style={{
                    font: "600 11px 'Inter',sans-serif",
                    letterSpacing: '.1em',
                    textTransform: 'uppercase' as const,
                    color: '#16A34A',
                    margin: '0 0 6px',
                  }}
                >
                  Best for
                </p>
                <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0, lineHeight: 1.5 }}>
                  Complete encapsulation systems, high-access crawl spaces, rough or rocky ground,
                  and any installation expected to last 20+ years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. REINFORCED VS NON-REINFORCED ── */}
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
            Material Construction
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
            Reinforced vs Non-Reinforced Vapor Barriers
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,.75)', lineHeight: 1.7, margin: '0 0 32px', maxWidth: 760 }}>
            Reinforcement refers to a woven scrim layer laminated into the liner. Without
            reinforcement, stretching or puncturing the film causes tears that propagate. With
            reinforcement, the woven layer arrests tears and distributes load. Two liners of the
            same thickness will behave very differently depending on whether they are reinforced.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: 20,
            }}
          >
            <div
              style={{
                background: '#0D0D0D',
                border: '1px solid rgba(255,255,255,.1)',
                borderRadius: 12,
                padding: 24,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: 22,
                  textTransform: 'uppercase' as const,
                  color: '#fff',
                  margin: '0 0 16px',
                }}
              >
                Non-Reinforced
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Tears propagate once started',
                  'Less puncture-resistant',
                  'Less expensive',
                  'Appropriate for low-access, smooth-ground installations only',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <XMark />
                    <span style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                background: '#0D0D0D',
                border: '2px solid #F5A623',
                borderRadius: 12,
                padding: 24,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: 22,
                  textTransform: 'uppercase' as const,
                  color: '#F5A623',
                  margin: '0 0 16px',
                }}
              >
                Reinforced (What We Use)
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Tear-resistant woven core',
                  'Handles foot traffic',
                  '25-year manufacturer warranty',
                  'Required for quality encapsulation systems',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Check />
                    <span style={{ fontSize: 14, color: '#D1D5DB', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHEN 20-MIL IS WORTH IT ── */}
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
            When It Matters Most
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
            When a 20-Mil Reinforced Liner Is Worth the Extra Cost
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 18 }}>
            {[
              {
                title: 'Crawl space with rough or rocky soil',
                body: 'Thin liners tear on sharp debris; reinforced 20 mil resists puncture.',
              },
              {
                title: 'Crawl space with HVAC equipment or utilities',
                body: 'Service technicians will walk on the liner repeatedly over its life.',
              },
              {
                title: 'Homes being sold or with new ownership',
                body: 'A documented 20-mil installation with warranty is a selling point.',
              },
              {
                title: 'Full encapsulation projects',
                body: 'Liner is part of a sealed system that should last 20+ years without replacement.',
              },
              {
                title: 'Mold or moisture history',
                body: 'If the crawl space has had prior moisture problems, a durable liner is the right foundation for long-term control.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}
              >
                <div style={{ flexShrink: 0, marginTop: 3 }}>
                  <Check size={20} color="#1B3A6B" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 800,
                      fontSize: 18,
                      textTransform: 'uppercase' as const,
                      color: '#0D0D0D',
                      margin: '0 0 4px',
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ fontSize: 15, color: '#4b5563', margin: 0, lineHeight: 1.6 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. INSTALLATION DETAILS ── */}
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
            The Process
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
            How a Vapor Barrier Is Installed
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {[
              {
                step: '01',
                title: 'Ground Prep',
                body: 'Debris, rocks, and sharp objects are removed from the crawl space floor before the liner goes in.',
              },
              {
                step: '02',
                title: 'Liner Placement',
                body: '20-mil reinforced panels are laid across the floor with seams overlapped a minimum of 12 inches.',
              },
              {
                step: '03',
                title: 'Seam Taping',
                body: 'Overlaps are sealed with butyl or acrylic tape rated for crawl space conditions to prevent moisture bypass at seams.',
              },
              {
                step: '04',
                title: 'Wall Coverage',
                body: 'Liner is run up foundation walls and secured with a termination bar and masonry fasteners; this closes the path for wall moisture.',
              },
              {
                step: '05',
                title: 'Vent Sealing',
                body: 'Foundation vents are blocked with rigid foam or custom vent covers, then the liner is lapped over them for a continuous seal.',
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: '20px 24px',
                  display: 'flex',
                  gap: 20,
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 28,
                    color: '#F5A623',
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth: 36,
                  }}
                >
                  {item.step}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 800,
                      fontSize: 18,
                      textTransform: 'uppercase' as const,
                      color: '#fff',
                      margin: '0 0 6px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. COST ── */}
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
              margin: '0 0 20px',
            }}
          >
            Vapor Barrier Cost by Thickness
          </h2>
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 760 }}>
            Material cost increases with thickness and reinforcement, but labor is the same
            regardless. The upgrade from 6-mil to 20-mil reinforced liner on a typical Kansas City
            crawl space adds relatively little to the total project cost while significantly
            extending the liner&apos;s service life.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: 18,
              marginBottom: 24,
            }}
          >
            {[
              {
                label: 'Basic Vapor Barrier',
                sublabel: 'Floor only + vent sealing',
                range: '$2,800–$3,500',
                note: '20-mil reinforced liner on floor, seam taping, and vent sealing. No dehumidifier.',
              },
              {
                label: 'Complete Encapsulation',
                sublabel: 'Floor + walls + dehumidifier',
                range: '$4,500–$5,500',
                note: 'Liner on floor and walls, vent sealing, mold treatment, and commercial dehumidifier.',
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
                    font: "600 11px 'Inter',sans-serif",
                    letterSpacing: '.12em',
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 4px',
                  }}
                >
                  {card.label}
                </p>
                <p
                  style={{
                    font: "400 13px 'Inter',sans-serif",
                    color: '#6B7280',
                    margin: '0 0 10px',
                  }}
                >
                  {card.sublabel}
                </p>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 30,
                    color: '#fff',
                    margin: '0 0 10px',
                  }}
                >
                  {card.range}
                </p>
                <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>
                  {card.note}
                </p>
              </div>
            ))}
          </div>
          <div
            style={{
              background: '#E8F0FB',
              border: '1px solid #1B3A6B',
              borderRadius: 10,
              padding: '16px 20px',
              marginBottom: 20,
            }}
          >
            <p style={{ fontSize: 15, color: '#1B3A6B', margin: 0, lineHeight: 1.6 }}>
              <strong>Our standard:</strong> We do not install 6-mil or 10-mil liners as permanent
              encapsulation solutions. We only use 20-mil reinforced material.
            </p>
          </div>
          <Link
            href="/crawl-space-encapsulation-cost-kansas-city/"
            style={{
              color: '#1B3A6B',
              font: "600 15px 'Inter',sans-serif",
              textDecoration: 'underline',
            }}
          >
            See full encapsulation cost breakdown &rarr;
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
              { label: 'Crawl Space Vapor Barrier KC', href: '/crawl-space-vapor-barrier-kansas-city/' },
              { label: 'Encapsulation vs Vapor Barrier', href: '/encapsulation-vs-vapor-barrier/' },
              { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
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
            Vapor Barrier Thickness FAQ
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
