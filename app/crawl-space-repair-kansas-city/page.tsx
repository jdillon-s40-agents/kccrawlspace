import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Repair Kansas City | KC Crawl Space Specialists' },
  description: 'Crawl space repair in Kansas City: moisture damage, wet insulation, standing water, mold, wood rot & drainage problems. 4.9★ rated. Free inspection.',
  alternates: {
    canonical: 'https://crawlspacekc.com/crawl-space-repair-kansas-city/',
  },
};

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
      strokeWidth="3"
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
    question: 'What is crawl space repair?',
    answer:
      'Crawl space repair refers to fixing moisture, water, mold, insulation, drainage, or structural problems under the home. It may include installing a vapor barrier, drainage system, sump pump, dehumidifier, or encapsulation system depending on what is found.',
  },
  {
    question: 'How do I know if my crawl space needs repair?',
    answer:
      "Warning signs include musty smells, cold floors, visible mold, wet insulation, high humidity, standing water after rain, and condensation on pipes or ductwork.",
  },
  {
    question: 'Can crawl space moisture cause wood rot?',
    answer:
      'Yes. Persistent moisture above 19% wood moisture content allows wood-rotting fungi to grow. Caught early, the wood can be treated; in advanced cases, structural repairs may be needed.',
  },
  {
    question: 'How much does crawl space repair cost in Kansas City?',
    answer:
      'Basic moisture control starts around $2,800–$3,500. A complete system with mold treatment and dehumidifier typically runs $4,500–$5,500. Drainage and sump pump work adds to the cost. An inspection is needed for accurate pricing.',
  },
  {
    question: "Does homeowner's insurance cover crawl space repair?",
    answer:
      "Standard policies typically do not cover preventive work. If water damage from a sudden event caused the problem, some coverage may apply. We document everything for your insurer.",
  },
  {
    question: 'Do you remove old insulation before encapsulating?',
    answer:
      'Yes, when insulation is wet, falling, or moldy it is removed before the vapor barrier is installed. Wet insulation holds moisture against wood framing and should not be left in place.',
  },
  {
    question: 'How long does crawl space repair take?',
    answer:
      'Most jobs are completed in 1–2 days. Jobs requiring drainage installation or significant mold remediation may take 2–3 days.',
  },
  {
    question: 'Can you repair a crawl space in winter?',
    answer:
      'Yes. Most crawl space work can be done year-round. In Kansas City, winter is often a good time to schedule because moisture problems do not wait and appointment availability is better.',
  },
];

const problemCards = [
  {
    title: 'Moisture & Water Damage',
    desc: 'Wet soil, standing water, and seepage through foundation walls cause long-term wood and insulation damage.',
  },
  {
    title: 'Falling or Wet Insulation',
    desc: 'Moisture causes insulation to sag, lose R-value, and hold water against wood framing.',
  },
  {
    title: 'Mold & Musty Odors',
    desc: 'High humidity and damp surfaces allow mold growth on joists and subfloor.',
  },
  {
    title: 'Wood Rot & Structural Concerns',
    desc: 'Ongoing moisture breaks down wood framing; caught early, rot can be treated before it spreads.',
  },
  {
    title: 'Drainage Problems',
    desc: 'Water that collects under the home needs a drainage system or sump pump before encapsulation.',
  },
  {
    title: 'High Humidity Year-Round',
    desc: 'Even without visible water, crawl space humidity above 60% creates ongoing mold and decay risk.',
  },
];

const repairSteps = [
  {
    num: '01',
    title: 'Free inspection',
    desc: 'We document moisture levels, water entry, insulation condition, and any visible mold or damage.',
  },
  {
    num: '02',
    title: 'Written estimate',
    desc: 'You receive a written quote before any work begins. No pressure, no surprises.',
  },
  {
    num: '03',
    title: 'Water control first',
    desc: 'If drainage or a sump pump is needed, we address water before installing a barrier.',
  },
  {
    num: '04',
    title: 'Moisture barrier & sealing',
    desc: 'Vapor barrier, vent sealing, air sealing, and mold treatment as needed.',
  },
  {
    num: '05',
    title: 'Dehumidifier installation',
    desc: 'Sized to your crawl space to maintain healthy humidity year-round.',
  },
];

const costTiers = [
  {
    range: '$2,800–$3,500',
    label: 'Basic Vapor Barrier',
    desc: 'For crawl spaces with damp soil but no standing water or major mold.',
  },
  {
    range: '$4,500–$5,500',
    label: 'Complete Encapsulation',
    desc: 'Includes mold treatment, insulation removal if needed, and dehumidifier.',
    featured: true,
  },
  {
    range: '$6,500–$9,000+',
    label: 'Full System with Drainage',
    desc: 'Adds interior drainage and sump pump for active water issues.',
  },
];

const commonProblems = [
  'Wet or damp soil',
  'Standing water after rain',
  'Musty odors in home',
  'Falling or wet insulation',
  'Mold or white growth on joists',
  'Cold floors and high energy bills',
];

const relatedServices = [
  { label: 'Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
  { label: 'Waterproofing KC', href: '/crawl-space-waterproofing-kansas-city/' },
  { label: 'Vapor Barrier KC', href: '/crawl-space-vapor-barrier-kansas-city/' },
  { label: 'Dehumidifier KC', href: '/crawl-space-dehumidifier-kansas-city/' },
  { label: 'Insulation Removal', href: '/encapsulation' },
];

export default function CrawlSpaceRepairKansasCity() {
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
            name: 'Crawl Space Repair Kansas City',
            item: 'https://crawlspacekc.com/crawl-space-repair-kansas-city/',
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
        '@type': 'Service',
        name: 'Crawl Space Repair',
        serviceType: 'Crawl Space Moisture Repair',
        provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
        areaServed: { '@type': 'AdministrativeArea', name: 'Kansas City Metro' },
        description:
          'Crawl space repair in Kansas City for moisture damage, wet insulation, standing water, mold, wood rot, and drainage problems.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  };

  return (
    <div style={{ fontFamily: "'Inter',sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 18px',
            }}
          >
            Crawl Space Repair
          </p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(36px,7vw,72px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              lineHeight: 1.05,
              margin: '0 0 24px',
            }}
          >
            Crawl Space Repair{' '}
            <span style={{ color: '#F5A623' }}>in Kansas City</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px,2.5vw,20px)',
              color: '#9CA3AF',
              maxWidth: 680,
              margin: '0 auto 36px',
              lineHeight: 1.65,
            }}
          >
            From wet soil and standing water to mold, wood rot, and falling insulation — we
            diagnose and fix crawl space problems under Kansas City homes.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap' as const,
              gap: 14,
              justifyContent: 'center',
              marginBottom: 24,
            }}
          >
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
            <Link
              href="/crawl-space-encapsulation-kansas-city/"
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
              See What We Fix
            </Link>
          </div>
          <a
            href={PHONE_HREF}
            style={{
              color: '#F5A623',
              fontSize: 18,
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '.02em',
            }}
          >
            {PHONE}
          </a>
        </div>
      </section>

      {/* ── QUICK ANSWER ── */}
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
              fontSize: 'clamp(28px,5vw,48px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 20px',
            }}
          >
            What Problems Are Fixed by Crawl Space Repair?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: '#4b5563',
              lineHeight: 1.7,
              margin: '0 0 32px',
              maxWidth: 780,
            }}
          >
            Crawl space repair fixes moisture, water, insulation, mold, wood rot, drainage, and
            structural issues under the home. In Kansas City, common crawl space repair problems
            include wet soil, standing water, musty odors, sagging insulation, high humidity, wood
            damage, and cold floors above the crawl space.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
            {commonProblems.map((problem) => (
              <li
                key={problem}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  fontSize: 16,
                  color: '#0D0D0D',
                }}
              >
                <XMark />
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── COMMON PROBLEMS GRID ── */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            What We Fix
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,48px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 40px',
            }}
          >
            Crawl Space Problems We Repair in Kansas City
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: 20,
            }}
          >
            {problemCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#161616',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: '24px 22px',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 20,
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.65 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPAIR PROCESS ── */}
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
            Our Process
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,48px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 40px',
            }}
          >
            How Crawl Space Repair Works
          </h2>
          <div style={{ display: 'grid', gap: 20 }}>
            {repairSteps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex',
                  gap: 24,
                  alignItems: 'flex-start',
                  background: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: 12,
                  padding: '22px 24px',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 36,
                    color: '#1B3A6B',
                    lineHeight: 1,
                    flex: 'none',
                    minWidth: 48,
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 800,
                      fontSize: 20,
                      textTransform: 'uppercase' as const,
                      color: '#0D0D0D',
                      margin: '0 0 8px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 15, color: '#4b5563', margin: 0, lineHeight: 1.65 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COST ── */}
      <section
        style={{
          background: '#1B3A6B',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            Pricing
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,48px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 40px',
            }}
          >
            Crawl Space Repair Cost in Kansas City
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
              gap: 20,
              marginBottom: 28,
            }}
          >
            {costTiers.map((tier) => (
              <div
                key={tier.label}
                style={{
                  background: tier.featured ? '#F5A623' : 'rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: '28px 24px',
                  border: tier.featured ? 'none' : '1px solid rgba(255,255,255,.12)',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 'clamp(24px,4vw,34px)',
                    color: tier.featured ? '#0D0D0D' : '#F5A623',
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {tier.range}
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 18,
                    textTransform: 'uppercase' as const,
                    color: tier.featured ? '#0D0D0D' : '#fff',
                    marginBottom: 10,
                  }}
                >
                  {tier.label}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: tier.featured ? 'rgba(0,0,0,.75)' : '#cbd5e1',
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>
          <div
            style={{
              background: 'rgba(0,0,0,.25)',
              border: '1px solid rgba(255,255,255,.1)',
              borderRadius: 10,
              padding: '18px 22px',
              fontSize: 15,
              color: '#cbd5e1',
              lineHeight: 1.65,
              marginBottom: 18,
            }}
          >
            <strong style={{ color: '#fff' }}>Note:</strong> Exact pricing requires an on-site
            inspection. We provide written quotes before any work begins.
          </div>
          <Link
            href="/crawl-space-encapsulation-cost-kansas-city/"
            style={{
              color: '#F5A623',
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'underline',
            }}
          >
            See the full cost guide for Kansas City →
          </Link>
        </div>
      </section>

      {/* ── FINANCING ── */}
      <section
        style={{
          background: '#0D0D0D',
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
              margin: '0 0 12px',
              textAlign: 'center' as const,
            }}
          >
            Payment Options
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 32px',
              textAlign: 'center' as const,
            }}
          >
            Financing Available
          </h2>
          <FinancingOptions />
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            More Services
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,48px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 32px',
            }}
          >
            Related Services
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
              gap: 14,
            }}
          >
            {relatedServices.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: '#0D0D0D',
                  border: '1px solid rgba(255,255,255,.12)',
                  borderRadius: 10,
                  padding: '18px 20px',
                  textDecoration: 'none',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                {svc.label}
                <span style={{ color: '#F5A623', marginLeft: 8, fontSize: 18 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
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
              fontSize: 'clamp(28px,5vw,48px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 40px',
            }}
          >
            Crawl Space Repair FAQ
          </h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {faqItems.map((faq) => (
              <div
                key={faq.question}
                style={{
                  background: 'rgba(0,0,0,.35)',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 12,
                  padding: '24px 24px',
                }}
              >
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
                  {faq.question}
                </h3>
                <p style={{ fontSize: 15, color: '#cbd5e1', margin: 0, lineHeight: 1.65 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FORM ── */}
      <section
        style={{
          background: '#111827',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
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
    </div>
  );
}
