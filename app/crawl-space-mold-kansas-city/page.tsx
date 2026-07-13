import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Mold Kansas City | Treatment & Root Cause Fix' },
  description: 'Crawl space mold in Kansas City signals excess moisture — not just a surface issue. Learn the warning signs and how encapsulation + treatment fixes the root cause.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-mold-kansas-city/',
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
    question: 'Is mold in a crawl space dangerous?',
    answer:
      'We do not make medical claims. Mold in a crawl space indicates a moisture problem that may contribute to indoor air quality concerns and musty odors. We recommend addressing the moisture source through inspection and encapsulation.',
  },
  {
    question: 'Can crawl space mold affect the air in my home?',
    answer:
      'Crawl space air can enter the living area through gaps in the subfloor. Mold in the crawl space may contribute to odors and air quality concerns in the home above. Sealing the crawl space reduces this air exchange.',
  },
  {
    question: 'What does white mold in a crawl space mean?',
    answer:
      'White mold commonly indicates high humidity and organic material (wood) with enough moisture to support growth. It is very common in Kansas City crawl spaces with open vents. It should be treated and the moisture source corrected.',
  },
  {
    question: 'Can I clean crawl space mold myself?',
    answer:
      'Spot cleaning is possible for minor surface mold, but without correcting the moisture source, mold returns. For significant growth on structural framing, professional treatment combined with a moisture-control system is the appropriate response.',
  },
  {
    question: 'Will encapsulation stop crawl space mold?',
    answer:
      'Encapsulation removes the moisture conditions that allow mold to grow. Existing mold is treated before the vapor barrier is installed. The dehumidifier then maintains humidity below the threshold where mold can reactivate.',
  },
  {
    question: 'How much does crawl space mold treatment cost in Kansas City?',
    answer:
      'Mold treatment is typically included in our encapsulation work. A full system with mold treatment and dehumidifier runs $4,500–$5,500 for most KC homes. Exact pricing requires inspection.',
  },
  {
    question: 'How do I know if there is mold in my crawl space?',
    answer:
      'Signs include musty odors, high crawl space humidity, visible white or dark growth on joists or wood, and wet or deteriorated insulation. A crawl space inspection with photos is the best way to document what is present.',
  },
  {
    question: 'Does crawl space mold cause wood rot?',
    answer:
      'Mold and wood rot are both symptoms of high moisture. Some mold species contribute to wood decay over time. The underlying issue — excess moisture — causes both, and correcting it addresses both risks.',
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
          name: 'Crawl Space Mold Kansas City',
          item: 'https://www.crawlspacekc.com/crawl-space-mold-kansas-city/',
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
      '@type': 'Service',
      name: 'Crawl Space Mold Treatment',
      serviceType: 'Crawl Space Encapsulation',
      provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Kansas City Metro' },
      description:
        'Crawl space mold treatment and encapsulation for Kansas City homes. We address the moisture conditions that allow mold to grow through vapor barrier installation, dehumidification, and vent sealing.',
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

export default function CrawlSpaceMoldKansasCityPage() {
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
            Crawl Space Mold
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
            Crawl Space Mold{' '}
            <span style={{ color: '#F5A623' }}>in Kansas City</span>
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
            Mold in a crawl space is a moisture problem, not just a cleaning problem. Surface
            treatment without moisture control results in mold returning. We fix the conditions that
            allow mold to grow.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
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
            Is Mold in a Crawl Space a Problem?
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
            Mold in a crawl space can be a sign of excess moisture, poor ventilation, or water
            intrusion. It may contribute to musty odors, indoor air quality concerns, wood decay,
            and recurring moisture problems. The long-term fix usually requires moisture control,
            not just surface cleaning.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
              gap: 14,
            }}
          >
            {[
              'Visible white or dark growth on joists or subfloor',
              'Musty smell in the home or crawl space',
              'High crawl space humidity readings',
              'Wet or deteriorated insulation',
              'Water stains or efflorescence on walls',
              'Soft or discolored wood framing',
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

      {/* White vs Dark Mold */}
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
            Mold Types
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
            White Mold vs Dark Mold in Crawl Spaces
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))',
              gap: 20,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                background: '#111827',
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
                  color: '#E2E8F0',
                  margin: '0 0 14px',
                  borderBottom: '2px solid rgba(245,166,35,.4)',
                  paddingBottom: 10,
                }}
              >
                White Mold
              </h3>
              <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, lineHeight: 1.7 }}>
                Often Aspergillus, Penicillium, or Cladosporium species. Appears powdery or fuzzy.
                Commonly grows on joists, wood blocking, and subfloor. Often mistaken for
                efflorescence (mineral deposits). White mold is very common in Kansas City crawl
                spaces with high humidity.
              </p>
            </div>
            <div
              style={{
                background: '#111827',
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
                  color: '#E2E8F0',
                  margin: '0 0 14px',
                  borderBottom: '2px solid rgba(255,255,255,.15)',
                  paddingBottom: 10,
                }}
              >
                Dark Mold
              </h3>
              <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, lineHeight: 1.7 }}>
                Commonly referred to as &ldquo;black mold&rdquo;. May include Stachybotrys
                chartarum or other dark species. Tends to grow in areas with sustained high moisture.
                Appearance alone is not diagnostic — lab testing is needed to identify species.
              </p>
            </div>
          </div>
          <div
            style={{
              border: '1px solid rgba(255,255,255,.12)',
              background: 'rgba(255,255,255,.04)',
              borderRadius: 10,
              padding: '14px 18px',
              maxWidth: 720,
            }}
          >
            <p
              style={{
                margin: 0,
                color: '#9CA3AF',
                font: "500 14px 'Inter',sans-serif",
                lineHeight: 1.6,
              }}
            >
              We do not provide mold testing or remediation certifications. For detailed mold
              identification, a licensed industrial hygienist should be consulted. We address the
              moisture conditions that allow mold growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Mold Grows */}
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
            Root Cause
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
            Why Kansas City Crawl Spaces Get Mold
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
            Mold needs three things: moisture, organic material (like wood), and oxygen. Crawl
            spaces provide all three. In Kansas City, high summer humidity, clay soil that holds
            water, and open foundation vents that allow humid outdoor air in create ideal conditions
            for mold growth — especially from May through September.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
              gap: 14,
            }}
          >
            {[
              'High outdoor humidity entering through open vents',
              'Damp or wet soil evaporating moisture upward',
              'Roof runoff or groundwater entering after rain',
              'Wet insulation against wood framing',
            ].map((factor) => (
              <div
                key={factor}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 10,
                  padding: '16px 18px',
                }}
              >
                <p style={{ fontSize: 14, color: '#D1D5DB', margin: 0, lineHeight: 1.6 }}>
                  {factor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cleaning Alone Isn't Enough */}
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
            The Right Fix
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 24px',
            }}
          >
            Why Surface Cleaning Doesn&rsquo;t Fix Crawl Space Mold
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#CBD5E1',
              margin: '0 0 32px',
              lineHeight: 1.7,
              maxWidth: 760,
            }}
          >
            Surface treatment kills visible mold but does not address the moisture conditions that
            caused it. If humidity, ground moisture, or water entry are not corrected, mold
            returns — often within one to two seasons. The permanent fix addresses moisture at the
            source: sealed ground, sealed vents, and active humidity control.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14 }}>
            {[
              'Treat existing mold on framing before installing the vapor barrier',
              'Seal the crawl space to stop moisture from continuing to enter',
              'Control ongoing humidity with a commercial dehumidifier',
            ].map((point) => (
              <div
                key={point}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  background: 'rgba(0,0,0,.3)',
                  borderRadius: 10,
                  padding: '16px 20px',
                }}
              >
                <Check color="#F5A623" size={18} />
                <span style={{ fontSize: 16, color: '#E2E8F0', lineHeight: 1.55 }}>{point}</span>
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
            Our Process
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
            How We Address Crawl Space Mold in Kansas City
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
              gap: 16,
            }}
          >
            {[
              {
                num: '01',
                title: 'Inspection',
                body: 'Document mold locations, moisture sources, humidity levels, and any water entry with photos.',
              },
              {
                num: '02',
                title: 'Water control if needed',
                body: 'Drainage corrections or sump pump before sealing.',
              },
              {
                num: '03',
                title: 'Mold treatment',
                body: 'Joists, subfloor, and framing treated with antimicrobial solution before liner installation.',
              },
              {
                num: '04',
                title: 'Encapsulation + dehumidifier',
                body: '20-mil vapor barrier seals ground moisture; dehumidifier keeps humidity below 60%; vents sealed to stop outdoor air entry.',
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

      {/* Compliance Note */}
      <section
        style={{
          background: '#F9FAFB',
          padding: '0 clamp(16px,5vw,24px) clamp(40px,6vw,64px)',
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            borderTop: '1px solid #E5E7EB',
            paddingTop: 28,
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: '#6B7280',
              lineHeight: 1.65,
              margin: 0,
              maxWidth: 740,
            }}
          >
            <strong style={{ color: '#374151' }}>Note:</strong> We address moisture control as the
            long-term solution to crawl space mold. We do not perform certified mold remediation or
            provide mold testing services. If you have specific concerns about mold identification
            or occupant health, consult a licensed indoor air quality professional.
          </p>
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
              gap: 14,
            }}
          >
            {[
              { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
              { label: 'Musty Crawl Space', href: '/crawl-space-smells-musty/' },
              { label: 'Dehumidifier KC', href: '/crawl-space-dehumidifier-kansas-city/' },
              { label: 'Crawl Space Repair KC', href: '/crawl-space-repair-kansas-city/' },
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
            Crawl Space Mold FAQ
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
