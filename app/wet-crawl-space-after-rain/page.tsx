import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Wet Crawl Space After Rain Kansas City | What to Do & How to Fix It',
  description:
    'A crawl space that gets wet after rain may have drainage, grading, or foundation seepage problems. Learn why it happens and how to fix a wet crawl space in Kansas City.',
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
    question: 'Is it normal for a crawl space to get wet after rain?',
    answer:
      'No. Some moisture increase is expected after heavy rain, but standing water, pooling mud, or water on walls is a sign of a drainage or grading problem that should be corrected.',
  },
  {
    question: 'How long should I wait before calling someone about a wet crawl space?',
    answer:
      'If you see standing water, call promptly. Water sitting against wood framing begins contributing to moisture damage within days. Waiting until the next dry season often means more damage.',
  },
  {
    question: 'Can I just put a vapor barrier over wet soil?',
    answer:
      'No. A vapor barrier is installed after water is controlled. Installing it over wet soil traps moisture against the liner and does not fix the underlying water entry problem.',
  },
  {
    question: 'Why does my crawl space smell musty only after it rains?',
    answer:
      'Rain events introduce water that evaporates and raises humidity rapidly. That surge in humidity activates mold and damp soil odors that may not be as noticeable in dry conditions.',
  },
  {
    question: 'Will extending my downspouts fix the problem?',
    answer:
      'It depends on the source. For homes where roof runoff is the primary cause, downspout extensions and gutter maintenance can make a significant difference. Foundation seepage from hydrostatic pressure requires interior drainage solutions.',
  },
  {
    question: 'Do I need a sump pump if the water drains on its own?',
    answer:
      'If water enters but drains away within 24 hours and causes no visible damage, a sump pump may not be necessary. However, each wet event stresses the structure. We assess during inspection whether passive drainage or active removal is the right call.',
  },
  {
    question: 'How do I know if water damage has already occurred?',
    answer:
      'Signs include soft or discolored wood, rust on metal hardware, sagging insulation, mold growth, and musty odors that persist even in dry weather. A crawl space inspection documents current conditions with photos.',
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
          name: 'Wet Crawl Space After Rain',
          item: 'https://crawlspacekc.com/wet-crawl-space-after-rain/',
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
      name: 'Crawl Space Waterproofing',
      serviceType: 'Wet Crawl Space Repair',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Kansas City Metro' },
      description:
        'Crawl space waterproofing and wet crawl space repair for Kansas City homes, including interior drainage, sump pump installation, grading corrections, and encapsulation.',
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

export default function WetCrawlSpaceAfterRainPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
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
              margin: '0 0 16px',
            }}
          >
            Wet Crawl Space
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
            Wet Crawl Space{' '}
            <span style={{ color: '#F5A623' }}>After Rain</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px,2vw,19px)',
              color: '#9CA3AF',
              margin: '0 0 32px',
              maxWidth: 620,
              lineHeight: 1.65,
            }}
          >
            A crawl space that floods or stays wet after rain is a warning sign — not a normal
            condition. We diagnose why water gets in and fix it the right way for Kansas City homes.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
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
                border: '2px solid rgba(255,255,255,.2)',
                color: '#fff',
                font: "700 16px 'Inter',sans-serif",
                padding: '14px 26px',
                borderRadius: 10,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {PHONE}
            </a>
          </div>
          <div
            style={{
              border: '1px solid rgba(245,166,35,.5)',
              background: 'rgba(245,166,35,.15)',
              borderRadius: 10,
              padding: '14px 18px',
              maxWidth: 560,
            }}
          >
            <p
              style={{
                margin: 0,
                color: '#F5A623',
                font: "600 14px 'Inter',sans-serif",
                lineHeight: 1.5,
              }}
            >
              Encapsulation alone cannot fix standing water. Water control comes first.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
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
            Why Does My Crawl Space Get Wet After Rain?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#4b5563',
              margin: '0 0 32px',
              lineHeight: 1.7,
              maxWidth: 760,
            }}
          >
            A crawl space that gets wet after rain may have poor exterior drainage, foundation
            seepage, low spots under the home, clogged gutters, grading problems, or hydrostatic
            pressure. The fix may include grading improvements, downspout extensions, interior
            drainage, a sump pump, vapor barrier, and encapsulation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14 }}>
            {[
              'Standing water or mud after heavy rain',
              'White chalky deposits on foundation walls',
              'Wet or falling insulation',
              'Musty smell after rain events',
              'Rust on metal piers or straps',
              'Mold on joists or subfloor',
            ].map((sign) => (
              <div
                key={sign}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 10,
                  padding: '14px 16px',
                }}
              >
                <XMark size={16} />
                <span style={{ fontSize: 15, color: '#374151', lineHeight: 1.5 }}>{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Happens */}
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
            Root Causes
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            Why Kansas City Crawl Spaces Get Wet After Rain
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
            {[
              {
                title: 'Clogged or overflowing gutters',
                body: 'Water dumps near the foundation instead of being routed away. The most common and easiest-to-fix cause.',
              },
              {
                title: 'Downspouts discharging too close',
                body: 'Downspouts that end within 3–4 feet of the foundation push concentrated water against the footing.',
              },
              {
                title: 'Negative grading',
                body: 'Soil that slopes toward the home directs surface runoff into the crawl space instead of away from it.',
              },
              {
                title: 'Hydrostatic pressure',
                body: "Kansas City's dense clay soil holds water and builds pressure against foundation walls, forcing moisture through cracks and mortar joints.",
              },
              {
                title: 'Foundation seepage',
                body: 'Water seeps through concrete block walls or floor-to-wall joints during or after heavy rain, especially in older KC homes.',
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
                    fontSize: 20,
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, lineHeight: 1.65 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When It's Urgent */}
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
            Act Now
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
            When a Wet Crawl Space Needs Immediate Attention
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
            {[
              'Standing water that does not drain within 24–48 hours after rain',
              'Water touching wood framing, joists, or posts',
              'Visible mold or strong musty odor appearing quickly after rain',
              'Sagging or soft spots in the floor above the crawl space',
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: '#0D0D0D',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 12,
                  padding: '22px 24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                }}
              >
                <XMark size={18} />
                <p style={{ fontSize: 15, color: '#D1D5DB', margin: 0, lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
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
            The Fix
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 36px',
            }}
          >
            How to Fix a Wet Crawl Space After Rain
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
            {[
              {
                num: '01',
                title: 'Exterior drainage first',
                body: 'Extend downspouts, clear gutters, and correct grading around the foundation. These fixes are often low-cost and can significantly reduce water entry.',
              },
              {
                num: '02',
                title: 'Interior drainage if needed',
                body: 'When exterior fixes are not enough or the lot does not allow grading correction, an interior perimeter drain channel captures seeping water at the footing level.',
              },
              {
                num: '03',
                title: 'Sump pump',
                body: 'A sump basin and submersible pump removes collected water automatically. Required when water pools at any point in the crawl space.',
              },
              {
                num: '04',
                title: 'Encapsulation after water control',
                body: 'A 20-mil vapor barrier with sealed vents and a dehumidifier is installed after water intrusion is addressed. Encapsulation controls ground moisture and ongoing humidity — not active water entry.',
              },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <p
                  style={{
                    font: "800 36px 'Barlow Condensed',sans-serif",
                    color: 'rgba(245,166,35,.3)',
                    margin: '0 0 8px',
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </p>
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
                <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, lineHeight: 1.65 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost */}
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
            Pricing
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
            What Does It Cost to Fix a Wet Crawl Space in Kansas City?
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12, marginBottom: 24 }}>
            {[
              { label: 'Exterior drainage corrections', range: '$200–$800 for downspouts and grading' },
              { label: 'Interior drainage system', range: '$1,500–$3,500 depending on perimeter footage' },
              { label: 'Sump pump installation', range: '$500–$1,200' },
              { label: 'Vapor barrier and encapsulation', range: '$2,800–$5,500+' },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 10,
                  padding: '18px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap' as const,
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 15, color: '#D1D5DB', fontWeight: 600 }}>{row.label}</span>
                <span style={{ fontSize: 15, color: '#F5A623', fontWeight: 700 }}>{row.range}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', margin: '0 0 20px', lineHeight: 1.6 }}>
            Costs vary by crawl space size, water volume, and soil conditions. A free inspection
            gives you an exact written quote.
          </p>
          <Link
            href="/crawl-space-encapsulation-cost-kansas-city/"
            style={{ color: '#F5A623', fontSize: 15, fontWeight: 600, textDecoration: 'underline' }}
          >
            See full encapsulation cost breakdown →
          </Link>
        </div>
      </section>

      {/* Financing */}
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

      {/* Related Services */}
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
            More Services
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
            Related Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 14 }}>
            {[
              { label: 'Crawl Space Waterproofing', href: '/crawl-space-waterproofing-kansas-city/' },
              { label: 'Crawl Space Drainage & Sump Pump', href: '/crawl-space-drainage-sump-pump-kansas-city/' },
              { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
              { label: 'Encapsulation Cost', href: '/crawl-space-encapsulation-cost-kansas-city/' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 10,
                  padding: '18px 20px',
                  color: '#1B3A6B',
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: 'none',
                  transition: 'border-color .2s',
                }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
            FAQ
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
            Wet Crawl Space FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14 }}>
            {faqItems.map((faq) => (
              <div
                key={faq.question}
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
                  {faq.question}
                </h3>
                <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, lineHeight: 1.65 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section
        style={{
          background: '#111827',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
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
