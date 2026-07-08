import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Kansas City | KC Crawl Space Specialists' },
  description: 'Fix musty odors, moisture & wet insulation under your Kansas City home. 20-mil vapor barrier, full encapsulation, mold treatment. Free inspection.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-encapsulation-kansas-city/',
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

const faqItems = [
  {
    question: 'What is crawl space encapsulation?',
    answer:
      'Crawl space encapsulation is the process of sealing the crawl space floor, walls, vents, and outside air leaks with a durable vapor barrier and moisture-control system. It is used when a crawl space has musty smells, high humidity, falling insulation, mold concerns, cold floors, or moisture after rain.',
  },
  {
    question: 'How long does encapsulation take?',
    answer:
      'Most KC homes are done in 1–2 days. Larger spaces or jobs requiring mold remediation may take up to 3 days.',
  },
  {
    question: 'How long does crawl space encapsulation last?',
    answer:
      'A properly installed system typically lasts 20–30 years. The vapor barrier carries a manufacturer warranty, and our workmanship is backed by a lifetime guarantee.',
  },
  {
    question: 'Do you need a dehumidifier after encapsulating?',
    answer:
      'In most Kansas City crawl spaces, yes. A dehumidifier helps maintain humidity below 60% in a sealed space, especially during humid KC summers.',
  },
  {
    question: 'Can you encapsulate a crawl space with standing water?',
    answer:
      'No. Standing water must be addressed first with drainage and a sump pump. Encapsulation alone cannot fix active water intrusion.',
  },
  {
    question: 'Does encapsulation stop mold?',
    answer:
      'Encapsulation controls the moisture that mold needs to grow. Existing mold is treated before installation, and ongoing humidity control helps prevent recurrence.',
  },
  {
    question: 'Will encapsulation lower my energy bills?',
    answer:
      'Yes — sealed crawl spaces improve energy efficiency in most KC homes by reducing uncontrolled air and moisture movement under the floor.',
  },
  {
    question: 'Should crawl space vents be open or closed?',
    answer:
      'In an encapsulated crawl space, vents are sealed. Open vents allow humid outdoor air in during summer, which causes condensation and moisture problems.',
  },
];

const relatedServices = [
  { label: 'Crawl Space Repair KC', href: '/crawl-space-repair-kansas-city/' },
  { label: 'Vapor Barrier KC', href: '/crawl-space-vapor-barrier-kansas-city/' },
  { label: 'Waterproofing KC', href: '/crawl-space-waterproofing-kansas-city/' },
  { label: 'Dehumidifier KC', href: '/crawl-space-dehumidifier-kansas-city/' },
  { label: 'Cost Calculator', href: '/crawl-space-encapsulation-cost-kansas-city/' },
  { label: 'Pest & Rodent Sealing', href: '/crawl-space-pest-control-kansas-city/' },
  { label: 'Free Inspection Explained', href: '/free-crawl-space-inspection-kansas-city/' },
];

const includedItems = [
  {
    title: '20-mil reinforced vapor barrier',
    desc: 'Floor and walls fully lined and seam-taped for complete moisture isolation.',
  },
  {
    title: 'Vent sealing & air sealing',
    desc: 'Every foundation vent blocked to keep humid outdoor air out year-round.',
  },
  {
    title: 'Mold treatment',
    desc: 'Joists and framing treated to kill existing mold growth before sealing.',
  },
  {
    title: 'Commercial dehumidifier',
    desc: 'Keeps humidity below 60% year-round in the sealed environment.',
  },
  {
    title: 'Insulation removal option',
    desc: 'Wet or falling insulation removed before barrier installation when needed.',
  },
  {
    title: 'Written report & lifetime warranty',
    desc: 'Documented for your records and any future home sale or refinance.',
  },
];

const costFactors = [
  'Crawl space size (square footage)',
  'Standing water or active drainage needs',
  'Sump pump installation',
  'Vapor barrier thickness and grade',
  'Insulation removal',
  'Mold or wood damage treatment',
  'Dehumidifier sizing',
  'Access difficulty and condition of the space',
];

const signsOfProblems = [
  'Musty smell in the home',
  'Visible mold or white growth on wood',
  'Wet or falling insulation',
  'High humidity or condensation',
  'Cold floors in winter',
  'Moisture after heavy rain',
];

const statCards = [
  { stat: '40"', label: 'Annual rainfall in Kansas City' },
  { stat: '90%', label: 'Avg. summer relative humidity' },
  { stat: 'Clay soil', label: 'Traps water near foundations' },
  { stat: '40%', label: 'Of home air starts in the crawl space' },
];

export default function CrawlSpaceEncapsulationKansasCity() {
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
            name: 'Crawl Space Encapsulation Kansas City',
            item: 'https://crawlspacekc.com/crawl-space-encapsulation-kansas-city/',
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
        name: 'Crawl Space Encapsulation',
        serviceType: 'Crawl Space Moisture Control',
        provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
        areaServed: { '@type': 'AdministrativeArea', name: 'Kansas City Metro' },
        description:
          'Complete crawl space encapsulation including 20-mil vapor barrier, vent sealing, mold treatment, and dehumidifier installation for Kansas City area homes.',
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
            Crawl Space Encapsulation
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
            Crawl Space Encapsulation{' '}
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
            Protect your home from moisture, mold, musty odors, and high humidity with a complete
            crawl space encapsulation system. Serving Kansas City and surrounding communities.
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
              href="/pricing"
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
              See Pricing
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
            What Is Crawl Space Encapsulation?
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
            Crawl space encapsulation is the process of sealing the crawl space floor, walls, vents,
            and outside air leaks with a durable vapor barrier and moisture-control system. In Kansas
            City, encapsulation is commonly used when a crawl space has musty smells, high humidity,
            falling insulation, mold concerns, cold floors, or moisture after rain.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
            {signsOfProblems.map((sign) => (
              <li
                key={sign}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 16, color: '#0D0D0D' }}
              >
                <Check />
                {sign}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
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
            Full System
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
            What Crawl Space Encapsulation Includes
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: 20,
            }}
          >
            {includedItems.map((item) => (
              <div
                key={item.title}
                style={{
                  background: '#161616',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: '24px 22px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                  <Check color="#F5A623" size={18} />
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 800,
                      fontSize: 19,
                      textTransform: 'uppercase' as const,
                      color: '#fff',
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KC CONTEXT ── */}
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
            Local Conditions
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
            Why Kansas City Crawl Spaces Need Moisture Control
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
              gap: 20,
            }}
          >
            {statCards.map((card) => (
              <div
                key={card.stat}
                style={{
                  background: 'rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: '28px 22px',
                  textAlign: 'center' as const,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 'clamp(32px,5vw,52px)',
                    color: '#F5A623',
                    lineHeight: 1,
                    marginBottom: 10,
                  }}
                >
                  {card.stat}
                </div>
                <div style={{ fontSize: 15, color: '#cbd5e1', lineHeight: 1.5 }}>{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COST FACTORS ── */}
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
            Pricing
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
            Crawl Space Encapsulation Cost in Kansas City
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 28px' }}>
            Encapsulation cost varies based on the size of the crawl space, current conditions, and
            which components are needed. Common factors that affect the final price include:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'grid', gap: 12 }}>
            {costFactors.map((factor) => (
              <li
                key={factor}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 16, color: '#0D0D0D' }}
              >
                <Check color="#1B3A6B" />
                {factor}
              </li>
            ))}
          </ul>
          <div
            style={{
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: 10,
              padding: '20px 22px',
              marginBottom: 20,
              fontSize: 15,
              color: '#4b5563',
              lineHeight: 1.65,
            }}
          >
            <strong style={{ color: '#0D0D0D' }}>Note:</strong> Exact pricing requires an
            inspection. We provide written quotes before any work begins.
          </div>
          <Link
            href="/crawl-space-encapsulation-cost-kansas-city/"
            style={{
              color: '#1B3A6B',
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'underline',
            }}
          >
            See the full cost guide for Kansas City encapsulation →
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

      {/* ── BEFORE / AFTER ── */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
          borderTop: '1px solid rgba(255,255,255,.06)',
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
              textAlign: 'center' as const,
            }}
          >
            Real Results
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,48px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 40px',
              textAlign: 'center' as const,
            }}
          >
            Before &amp; After
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: 20,
            }}
          >
            {[
              { src: '/images/before.jpg', label: 'Before Encapsulation' },
              { src: '/images/after.jpg', label: 'After Encapsulation' },
            ].map((img) => (
              <div key={img.label} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ position: 'relative', aspectRatio: '3/2' }}>
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    style={{ objectFit: 'cover' as const }}
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
                <div
                  style={{
                    background: '#161616',
                    padding: '12px 16px',
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#9CA3AF',
                    textTransform: 'uppercase' as const,
                    letterSpacing: '.08em',
                  }}
                >
                  {img.label}
                </div>
              </div>
            ))}
          </div>
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
            Related Crawl Space Services
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
                  transition: 'border-color .2s',
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
            Crawl Space Encapsulation FAQ
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
