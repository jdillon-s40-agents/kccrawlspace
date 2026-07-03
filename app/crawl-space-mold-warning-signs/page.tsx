import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Mold Warning Signs | Kansas City Mold Guide' },
  description:
    'Learn the warning signs of crawl space mold — musty odors, white or dark growth, condensation — and why fixing the moisture source matters in Kansas City homes.',
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
    q: 'What does mold look like in a crawl space?',
    a: 'Crawl space mold commonly appears as fuzzy white patches, dark gray or black staining, or a powdery coating on wood framing, subfloor, and insulation. It is often paired with a musty, earthy smell even before it is visible.',
  },
  {
    q: 'Is white mold or black mold worse?',
    a: 'Color alone does not tell you how serious a mold problem is. White mold tends to grow faster on damp wood and can spread quickly across framing, while dark mold often signals more prolonged moisture exposure. Both indicate a moisture problem that needs to be corrected.',
  },
  {
    q: 'Can I just clean the mold myself?',
    a: 'Surface cleaning can remove visible growth temporarily, but if the moisture source is not corrected, mold typically returns. For larger or recurring growth, a professional evaluation is recommended to assess the extent of the problem and the right remediation approach.',
  },
  {
    q: 'Why does crawl space mold keep coming back after cleaning?',
    a: 'Mold needs moisture to grow, so cleaning the surface without addressing humidity, ground moisture, or water intrusion leaves the underlying condition in place. Recurring mold is usually a sign that the crawl space needs a vapor barrier, sealing, or dehumidification, not just another cleaning.',
  },
  {
    q: 'Does crawl space mold affect air quality in my house?',
    a: 'Crawl space air can move into the living space through gaps, ductwork, and the stack effect, so conditions below the home may contribute to indoor air quality concerns. An inspection can help determine whether your crawl space is a factor in your home\'s air quality.',
  },
  {
    q: 'How do I know if I need a professional mold inspection?',
    a: 'If you notice a persistent musty odor, visible staining or growth on wood, recurring high humidity, or mold that returns after cleaning, a professional inspection can identify the extent of the issue and the moisture source causing it.',
  },
  {
    q: 'Does encapsulation stop mold from growing?',
    a: 'Encapsulation is designed to control the humidity and ground moisture that mold needs to grow. Combined with a sealed vapor barrier and dehumidification, it addresses the conditions that allow mold to return after cleaning or remediation.',
  },
  {
    q: 'Is crawl space mold dangerous to my health?',
    a: 'Reactions to mold vary by individual, and we are not able to make medical claims. If you or household members have ongoing respiratory or allergy concerns, it is best to consult a physician and have the crawl space professionally evaluated for moisture and mold.',
  },
];

const relatedLinks = [
  { label: 'Crawl Space Mold KC', href: '/crawl-space-mold-kansas-city/' },
  { label: 'Musty Crawl Space', href: '/crawl-space-smells-musty/' },
  { label: 'Dehumidifier KC', href: '/crawl-space-dehumidifier-kansas-city/' },
  { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
];

export default function CrawlSpaceMoldWarningSignsPage() {
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
                    name: 'Crawl Space Mold Warning Signs',
                    item: 'https://crawlspacekc.com/crawl-space-mold-warning-signs/',
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
          }),
        }}
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
              fontSize: 'clamp(36px,7vw,68px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 20px',
              lineHeight: 1.05,
            }}
          >
            Crawl Space Mold{' '}
            <span style={{ color: '#F5A623' }}>Warning Signs</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px,2.5vw,19px)',
              color: '#9CA3AF',
              margin: '0 0 36px',
              maxWidth: 680,
              lineHeight: 1.6,
            }}
          >
            Mold under your home rarely shows up out of nowhere. Here are the warning signs Kansas City homeowners should watch for, and why fixing the moisture behind it matters more than cleaning the surface.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const, alignItems: 'center' }}>
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
                color: '#fff',
                font: "600 16px 'Inter',sans-serif",
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.44 2 2 0 0 1 3.57 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
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
            The Answer
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 24px',
            }}
          >
            What Are the Warning Signs of Crawl Space Mold?
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 760 }}>
            Common crawl space mold warning signs include musty odors, visible white or dark growth on wood, high humidity, damp insulation, condensation, wood staining, and recurring moisture. Mold should be treated as a moisture problem first because it can return if humidity, water intrusion, or ventilation issues are not corrected.
          </p>
          <div
            style={{
              background: 'rgba(245,166,35,.1)',
              border: '2px solid #F5A623',
              borderRadius: 12,
              padding: '22px 28px',
              maxWidth: 700,
            }}
          >
            <p style={{ fontSize: 16, color: '#0D0D0D', margin: 0, lineHeight: 1.6 }}>
              <strong>Short answer:</strong> Musty smells, visible growth, and recurring humidity are the clearest signs. Cleaning mold without fixing the moisture source usually means it comes back.
            </p>
          </div>
        </div>
      </section>

      {/* Common Warning Signs */}
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
            What to Look For
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
            Common Warning Signs of Mold in a Crawl Space
          </h2>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Mold growth is often noticed in the living space before it is ever seen in the crawl space. These are the most common indicators homeowners report, either upstairs or during a crawl space inspection.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 20,
            }}
          >
            {[
              {
                title: 'Musty Odor',
                body: 'A persistent earthy or musty smell in the home, especially near floor vents or in rooms above the crawl space, is one of the earliest signs.',
              },
              {
                title: 'Visible Growth on Wood',
                body: 'Fuzzy white patches or dark staining on floor joists, subfloor, and beams indicate active or past mold growth.',
              },
              {
                title: 'Condensation and Damp Insulation',
                body: 'Sweating pipes, ductwork, or insulation that feels damp to the touch points to humidity levels high enough to support mold.',
              },
              {
                title: 'High Humidity Readings',
                body: 'Crawl space humidity consistently above 60% creates the conditions mold needs to establish and spread.',
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
                    fontSize: 19,
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: '#D1D5DB', margin: 0, lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Mold vs Dark Mold */}
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
            Comparison
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
            White Mold vs Dark Mold in a Crawl Space
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: 20,
            }}
          >
            <div
              style={{
                background: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: 12,
                padding: 24,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: 20,
                  textTransform: 'uppercase' as const,
                  color: '#1B3A6B',
                  margin: '0 0 12px',
                }}
              >
                White Mold
              </h3>
              <p style={{ fontSize: 15, color: '#4b5563', margin: 0, lineHeight: 1.6 }}>
                Often appears powdery or fuzzy on wood surfaces and can spread quickly across framing in humid conditions. It can be easy to overlook because it sometimes blends in with raw wood or efflorescence.
              </p>
            </div>
            <div
              style={{
                background: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: 12,
                padding: 24,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: 20,
                  textTransform: 'uppercase' as const,
                  color: '#1B3A6B',
                  margin: '0 0 12px',
                }}
              >
                Dark / Black Mold
              </h3>
              <p style={{ fontSize: 15, color: '#4b5563', margin: 0, lineHeight: 1.6 }}>
                Tends to appear as dark gray, green-black, or black staining and is more visible against wood. It often signals more prolonged or repeated moisture exposure in that area.
              </p>
            </div>
          </div>
          <p style={{ fontSize: 15, color: '#6B7280', fontStyle: 'italic', margin: '24px 0 0', lineHeight: 1.6, maxWidth: 760 }}>
            Color is not a reliable way to judge severity or species on its own. Both white and dark growth indicate active moisture and should be evaluated rather than compared by appearance alone.
          </p>
        </div>
      </section>

      {/* Why Mold Keeps Coming Back */}
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
            Recurring Mold
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
            Why Mold Keeps Coming Back After Cleaning
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, maxWidth: 700, marginBottom: 24 }}>
            {[
              'Surface cleaning removes visible growth but not the moisture feeding it',
              'Ground moisture continues to evaporate into the crawl space air',
              'No vapor barrier means humidity keeps cycling above the mold threshold',
              'Open or leaking vents let humid outdoor air in during warm months',
              'Plumbing leaks or poor drainage are never identified or repaired',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <XMark size={18} />
                <span style={{ fontSize: 16, color: '#D1D5DB', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#9CA3AF', fontStyle: 'italic', margin: 0, lineHeight: 1.6, maxWidth: 700 }}>
            Mold remediation that does not address moisture is typically a temporary fix. Lasting results come from controlling the conditions mold needs to grow.
          </p>
        </div>
      </section>

      {/* Moisture Control: The Real Fix */}
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
            The Real Fix
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 24px',
            }}
          >
            Moisture Control: Encapsulation and Dehumidification
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Long-term mold control starts with controlling moisture, not just cleaning what is already there. A full encapsulation system combines a sealed ground and wall vapor barrier with vent sealing and active dehumidification to keep crawl space humidity below the level mold needs to grow.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 20,
            }}
          >
            {[
              {
                title: 'Sealed Vapor Barrier',
                body: 'A heavy-duty liner on the ground and walls blocks ground moisture from evaporating into the crawl space air.',
              },
              {
                title: 'Vent and Air Sealing',
                body: 'Sealing foundation vents and gaps keeps humid outdoor air from entering and re-raising crawl space humidity.',
              },
              {
                title: 'Dehumidification',
                body: 'A crawl space dehumidifier actively maintains target humidity year-round, which standard ventilation cannot reliably do.',
              },
              {
                title: 'Drainage Where Needed',
                body: 'In crawl spaces with standing water or seasonal flooding, drainage matting and a sump pump remove bulk water before it becomes a moisture source.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#fff',
                  border: '1px solid #E5E7EB',
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
                    color: '#1B3A6B',
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: '#4b5563', margin: 0, lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
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
            Related Services
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,4vw,38px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 28px',
            }}
          >
            Learn More
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
              gap: 16,
            }}
          >
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 10,
                  padding: '18px 20px',
                  textDecoration: 'none',
                  display: 'block',
                  color: '#1B3A6B',
                  font: "600 15px 'Inter',sans-serif",
                  lineHeight: 1.4,
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
              margin: '0 0 36px',
            }}
          >
            Crawl Space Mold FAQ
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
                <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
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
