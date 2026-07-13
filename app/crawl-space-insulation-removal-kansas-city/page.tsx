import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Insulation Removal Kansas City | Wet Insulation Fix' },
  description: 'Wet, falling or moldy crawl space insulation in Kansas City must be removed before encapsulation. Learn why it fails, what it costs & what comes next.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-insulation-removal-kansas-city/',
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
    question: 'Should I remove crawl space insulation before encapsulating?',
    answer:
      'Yes. Installing a vapor barrier over wet or deteriorating insulation traps moisture against the wood framing. We always remove failing insulation before installing the liner.',
  },
  {
    question: 'Why is my crawl space insulation falling down?',
    answer:
      'Fiberglass batts lose their friction grip over time, especially when moisture causes them to sag. Wire supports rust, staples pull out of wet wood, and gravity takes over. It is very common in Kansas City crawl spaces older than 15–20 years.',
  },
  {
    question: 'Can wet crawl space insulation dry out on its own?',
    answer:
      'Fiberglass batts that have been thoroughly saturated rarely fully recover their original R-value or shape. Even if dried, they often remain compressed and continue to hold residual moisture. Replacement is generally recommended.',
  },
  {
    question: 'What type of insulation is best for a crawl space?',
    answer:
      'In an encapsulated crawl space, insulating the rim joists and foundation walls with closed-cell spray foam is often preferred because it is moisture-resistant. Traditional fiberglass batts between floor joists are not ideal for humid crawl space environments.',
  },
  {
    question: 'How much does crawl space insulation removal cost?',
    answer:
      'Removal typically costs $500–$1,500 depending on the crawl space size and condition. When done as part of an encapsulation project, the cost is included in the overall scope.',
  },
  {
    question: 'Can I remove crawl space insulation myself?',
    answer:
      'It is possible, but wet or moldy insulation should be handled carefully. Protective equipment including a respirator, gloves, and eye protection are needed. Proper disposal is also required — moldy insulation should not be placed in standard household trash.',
  },
  {
    question: 'Will removing crawl space insulation make my floors colder?',
    answer:
      'Temporarily, yes. Once the vapor barrier and encapsulation system are in, the crawl space is conditioned, which typically brings floor temperatures back up. In many cases, floor comfort improves over the old wet insulation because there is no longer damp air directly below the floor.',
  },
];

export default function CrawlSpaceInsulationRemovalPage() {
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
                    name: 'Crawl Space Insulation Removal Kansas City',
                    item: 'https://www.crawlspacekc.com/crawl-space-insulation-removal-kansas-city/',
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
                name: 'Crawl Space Insulation Removal',
                serviceType: 'Crawl Space Cleanup',
                provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
                areaServed: { '@type': 'AdministrativeArea', name: 'Kansas City Metro' },
                description:
                  'Professional removal of wet, moldy, or falling crawl space insulation in Kansas City. Prepares the crawl space for vapor barrier installation, encapsulation, and moisture control.',
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
          }),
        }}
      />

      {/* ── 1. Hero ── */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
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
            Crawl Space Insulation Removal
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
            Crawl Space Insulation Removal{' '}
            <span style={{ color: '#F5A623' }}>in Kansas City</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: '#9CA3AF', margin: '0 0 32px', maxWidth: 680, lineHeight: 1.7 }}>
            Wet, sagging, or moldy insulation between floor joists should be removed — not encapsulated over. We remove failing
            crawl space insulation and prepare the space for proper moisture control.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
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

      {/* ── 2. Quick Answer ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 20px',
            }}
          >
            Should Wet or Falling Crawl Space Insulation Be Removed?
          </h2>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.75, margin: '0 0 32px', maxWidth: 760 }}>
            Wet, moldy, or falling crawl space insulation often needs to be removed because it can hold moisture against wood
            framing and reduce energy performance. After removal, the crawl space should be evaluated for moisture control, air
            sealing, vapor barrier installation, and proper insulation strategy.
          </p>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 16px',
            }}
          >
            Signs It Needs to Be Removed
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 12 }}>
            {[
              'Insulation sagging or hanging from joists',
              'Wet or damp batt material',
              'Visible mold on insulation or surrounding wood',
              'Musty smell in home increasing after rain',
              'R-value loss — floors cold even with insulation present',
              'Pest or rodent activity in insulation',
            ].map((sign) => (
              <div
                key={sign}
                style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
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

      {/* ── 3. Why Insulation Fails ── */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
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
            Root Causes
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 32px',
            }}
          >
            Why Crawl Space Insulation Falls and Gets Wet
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
            {[
              {
                title: 'Moisture Absorption',
                body: 'Fiberglass batts are not moisture-resistant. As crawl space humidity rises, batts absorb water, get heavy, and pull away from the staples or friction-fit holding them in place.',
              },
              {
                title: 'Open Foundation Vents',
                body: 'Vents designed to "ventilate" the crawl space actually introduce humid summer air. That humidity condenses on cool surfaces and saturates batts from above.',
              },
              {
                title: 'Water Intrusion',
                body: 'If the crawl space floor gets wet after rain, water wicks up into the insulation from below, saturating it from the ground up.',
              },
              {
                title: 'Age and Gravity',
                body: 'Even dry insulation loses its friction hold over 15–20 years. Wire supports and staples rust and fail, letting the batts sag and eventually fall.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#111827',
                  borderRadius: 12,
                  padding: '24px',
                  border: '1px solid rgba(255,255,255,.08)',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Moisture and Wood Damage ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 20px',
            }}
          >
            What Wet Insulation Does to Your Home
          </h2>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 760 }}>
            Wet insulation is not just an energy efficiency problem — it is a structural one. When wet batts stay in contact with
            wood joists and subfloor, wood moisture content rises. Sustained moisture above 19% creates conditions for
            wood-decay fungi to establish. Wet insulation also provides a damp microenvironment where mold can grow on the wood
            surfaces it touches.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Wet insulation doubles or triples in weight, stressing joist nailing',
              'Mold grows on wet wood faster than on dry wood',
              'Removing wet insulation allows the wood to dry before the vapor barrier is installed',
            ].map((point) => (
              <div key={point} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <Check size={18} />
                <span style={{ fontSize: 16, color: '#374151', lineHeight: 1.6 }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Removal Process ── */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
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
            Our Process
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            How We Remove Crawl Space Insulation in Kansas City
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                num: 1,
                title: 'Inspection and Documentation',
                body: 'We photograph the crawl space before touching anything. Moisture levels, mold locations, and insulation condition are documented.',
              },
              {
                num: 2,
                title: 'Access and Containment',
                body: 'Material is removed through the crawl space access. We protect the living area and entry points during removal.',
              },
              {
                num: 3,
                title: 'Bagging and Disposal',
                body: 'Wet or moldy insulation is bagged in the crawl space and removed from the property. It is not reused.',
              },
              {
                num: 4,
                title: 'Mold Treatment If Needed',
                body: 'If mold is present on joists or subfloor, framing is treated with antimicrobial solution before any new material goes in.',
              },
              {
                num: 5,
                title: 'Encapsulation Prep',
                body: 'Once the space is cleared and dry, we assess for vapor barrier, drainage, and dehumidifier needs.',
              },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  display: 'flex',
                  gap: 20,
                  alignItems: 'flex-start',
                  background: 'rgba(255,255,255,.07)',
                  borderRadius: 12,
                  padding: '20px 24px',
                  border: '1px solid rgba(255,255,255,.12)',
                }}
              >
                <span
                  style={{
                    background: '#F5A623',
                    color: '#0D0D0D',
                    font: "800 15px 'Inter',sans-serif",
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 'none',
                  }}
                >
                  {step.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 700,
                      fontSize: 19,
                      textTransform: 'uppercase' as const,
                      color: '#fff',
                      margin: '0 0 6px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 15, color: '#CBD5E1', lineHeight: 1.65, margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. What Comes Next ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 16px',
            }}
          >
            After Insulation Removal: What the Crawl Space Needs
          </h2>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.75, margin: '0 0 32px', maxWidth: 760 }}>
            Removing insulation exposes the crawl space floor and framing. The right next step depends on what is found during
            inspection — but in most Kansas City homes, the underlying cause is moisture from the ground or outdoor air.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16 }}>
            {[
              {
                title: 'Vapor Barrier',
                body: 'Covers the ground and reduces evaporation. The minimum step after removal for damp crawl spaces.',
              },
              {
                title: 'Full Encapsulation',
                body: 'Vapor barrier + sealed vents + mold treatment + dehumidifier. For crawl spaces with humidity, odors, or recurring moisture.',
              },
              {
                title: 'Drainage First',
                body: 'If water enters after rain, drainage or sump pump work is done before any barrier is installed.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#0D0D0D',
                  borderRadius: 12,
                  padding: '24px',
                  border: '1px solid rgba(255,255,255,.08)',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Floor vs Wall Insulation ── */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
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
            Insulation Strategy
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 32px',
            }}
          >
            Crawl Space Floor Insulation vs Wall Insulation
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 16 }}>
            {[
              {
                title: 'Between-Joist (Floor) Insulation',
                body: 'The traditional approach. Susceptible to moisture from crawl space air. Often needs to be removed when a crawl space is encapsulated because a conditioned crawl space does not need floor insulation the same way a vented one does.',
              },
              {
                title: 'Rim Joist and Wall Insulation',
                body: 'In an encapsulated crawl space, insulating the rim joist and foundation walls — not the floor — is the preferred strategy. Keeps conditioned air in the crawl space where the dehumidifier operates.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#111827',
                  borderRadius: 12,
                  padding: '26px',
                  border: '1px solid rgba(255,255,255,.1)',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 700,
                    fontSize: 21,
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 12px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Cost ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 20px',
            }}
          >
            Crawl Space Insulation Removal Cost in Kansas City
          </h2>
          <div
            style={{
              background: '#fff',
              border: '2px solid #1B3A6B',
              borderRadius: 14,
              padding: '28px 32px',
              marginBottom: 24,
              maxWidth: 640,
            }}
          >
            <p style={{ fontSize: 28, fontWeight: 800, color: '#1B3A6B', margin: '0 0 6px', fontFamily: "'Barlow Condensed',sans-serif" }}>
              $500 – $1,500
            </p>
            <p style={{ fontSize: 15, color: '#4b5563', margin: 0 }}>For removal alone, depending on crawl space size and access.</p>
          </div>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.75, margin: '0 0 20px' }}>
            Insulation removal is often done as part of a full encapsulation project — the cost is included in the total scope.
          </p>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            Cost Factors
          </p>
          <ul style={{ paddingLeft: 0, listStyle: 'none', margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Crawl space size',
              'Insulation depth',
              'Access difficulty',
              'Disposal requirements',
              'Whether mold treatment is needed',
            ].map((factor) => (
              <li key={factor} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Check size={15} />
                <span style={{ fontSize: 15, color: '#374151' }}>{factor}</span>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.7, margin: '0 0 16px' }}>
            We provide written quotes that separate removal cost from encapsulation cost so you can see exactly what you are paying for.
          </p>
          <Link
            href="/crawl-space-encapsulation-cost-kansas-city/"
            style={{ color: '#1B3A6B', fontWeight: 700, fontSize: 15, textDecoration: 'underline' }}
          >
            See full encapsulation cost breakdown →
          </Link>
        </div>
      </section>

      {/* ── 9. Financing ── */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <FinancingOptions />
        </div>
      </section>

      {/* ── 10. Related Services ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            Related Services
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(24px,4vw,36px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 28px',
            }}
          >
            What Comes Next
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 14 }}>
            {[
              { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
              { label: 'Crawl Space Mold KC', href: '/crawl-space-mold-kansas-city/' },
              { label: 'Musty Crawl Space', href: '/crawl-space-smells-musty/' },
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
                  transition: 'box-shadow .15s',
                }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. FAQ ── */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
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
              fontSize: 'clamp(26px,5vw,42px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 32px',
            }}
          >
            Crawl Space Insulation Removal FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqItems.map((item) => (
              <div
                key={item.question}
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
                    fontWeight: 700,
                    fontSize: 18,
                    color: '#fff',
                    margin: '0 0 8px',
                  }}
                >
                  {item.question}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.7, margin: 0 }}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. CTA Form ── */}
      <section style={{ background: '#111827', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
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
    </main>
  );
}
