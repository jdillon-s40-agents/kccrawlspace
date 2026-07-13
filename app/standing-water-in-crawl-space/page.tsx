import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Standing Water in Crawl Space | Kansas City Emergency Repair' },
  description:
    'Standing water in your crawl space after rain? Learn why it happens, why it is urgent, and how Kansas City pros remove water and stop it from coming back.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/standing-water-in-crawl-space/',
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
    q: 'Why is there standing water in my crawl space after it rains?',
    a: 'Standing water after rain is usually caused by a combination of poor exterior grading, clogged or disconnected gutters and downspouts directing water toward the foundation, foundation wall seepage through cracks or porous block, and a naturally high water table in parts of the Kansas City area. Clay soil common in this region also drains slowly, so water that pools near the foundation has nowhere to go but in.',
  },
  {
    q: 'Is standing water in a crawl space an emergency?',
    a: 'It should be treated as urgent. Standing water supports mold growth within 24 to 48 hours, can rot wood framing and subfloor, attracts termites and other pests, and may indicate an active foundation or plumbing issue. While it may not require an after-hours emergency call in every case, it should not be left untreated for more than a few days.',
  },
  {
    q: 'Can I just pump the water out myself?',
    a: 'You can remove standing water with a wet/dry shop vac or a rented pump for a small, one-time amount of water. However, pumping the water out does not address why it accumulated in the first place. Without fixing the drainage or grading issue, the water will return after the next rain, and repeated wet/dry cycles cause ongoing damage to framing and insulation.',
  },
  {
    q: 'Will a vapor barrier fix standing water?',
    a: 'No. A vapor barrier or liner is designed to block moisture vapor rising from the soil — it is not designed to hold back or manage standing water. Installing a vapor barrier over a crawl space that still floods will trap water beneath or on top of the liner, leading to worse mold and rot problems than having no barrier at all. Water control always comes first.',
  },
  {
    q: 'Do I need a sump pump or just better drainage?',
    a: 'It depends on the source. If water is mainly entering from gutters, grading, or surface runoff, exterior drainage corrections and a French drain system may be enough. If water is seeping through the foundation walls or rising from a high water table, an interior drainage system paired with a sump pump is typically needed to collect and remove the water on an ongoing basis. An inspection determines which combination applies to your home.',
  },
  {
    q: 'How fast does standing water cause mold?',
    a: 'Mold can begin growing on wood, insulation, and other organic materials within 24 to 48 hours of sustained moisture exposure. In a humid Kansas City crawl space, standing water combined with summer humidity accelerates this timeline. The longer water sits, the more extensive and costly the resulting mold and wood-rot remediation tends to be.',
  },
  {
    q: 'Does homeowners insurance cover crawl space water damage?',
    a: 'Coverage varies by policy and cause. Sudden, accidental water damage, such as a burst pipe, is more commonly covered, while damage from gradual seepage, poor grading, or flooding is often excluded or requires separate flood coverage. Review your specific policy or talk to your insurance agent, since coverage decisions are made by the insurer, not the contractor.',
  },
  {
    q: 'How is standing water removed and prevented long-term?',
    a: 'The process typically starts with extracting existing water and assessing the source. Long-term prevention usually involves correcting exterior grading and downspout discharge, installing an interior French drain system along the footing, and adding a sump pump to collect and discharge water away from the home. Once the crawl space is reliably dry, a vapor barrier or full encapsulation can be installed to control humidity and protect the space going forward.',
  },
];

const relatedLinks = [
  { label: 'Crawl Space Waterproofing KC', href: '/crawl-space-waterproofing-kansas-city/' },
  { label: 'Drainage & Sump Pump KC', href: '/crawl-space-drainage-sump-pump-kansas-city/' },
  { label: 'Wet Crawl Space After Rain', href: '/wet-crawl-space-after-rain/' },
  { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
];

export default function StandingWaterInCrawlSpacePage() {
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
                    name: 'Standing Water in Crawl Space',
                    item: 'https://www.crawlspacekc.com/standing-water-in-crawl-space/',
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
            Urgent Crawl Space Issue
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
            Standing Water in Your{' '}
            <span style={{ color: '#F5A623' }}>Crawl Space?</span>
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
            Pooling or standing water under a Kansas City home after a rainstorm is a sign of an active drainage or foundation problem. Here is why it happens, why it cannot wait, and how it gets fixed correctly.
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
            Why Is There Standing Water in My Crawl Space?
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 760 }}>
            Standing water in a crawl space after rain is usually caused by poor exterior drainage, foundation seepage, a high water table, or clogged gutters and downspouts directing water toward the foundation. It should be treated as urgent — the water needs to be removed and the source addressed with drainage and/or a sump pump before a vapor barrier or encapsulation is installed, since sealing over standing water traps it and causes worse mold and wood-rot problems.
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
              <strong>Short answer:</strong> Remove the water and fix the drainage source first. Never install a vapor barrier or encapsulation over a crawl space that is still actively taking on water.
            </p>
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
              margin: '0 0 24px',
            }}
          >
            What Causes Standing Water in a Crawl Space
          </h2>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Kansas City's clay-heavy soil drains slowly and expands when saturated, which means water that should soak away near the foundation often has nowhere to go but inward. Standing water is rarely random — it almost always traces back to one or more of these sources.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: 20,
            }}
          >
            {[
              {
                title: 'Poor Exterior Grading',
                body: 'When the soil around the foundation slopes toward the house instead of away from it, every rain sends water straight to the crawl space walls.',
              },
              {
                title: 'Clogged or Misdirected Downspouts',
                body: 'Gutters that dump water within a few feet of the foundation, or downspouts that are clogged and overflow, concentrate large volumes of water right where it can seep in.',
              },
              {
                title: 'Foundation Wall Seepage',
                body: 'Cracks, porous block, or failed mortar joints in the foundation allow groundwater to pass directly through the wall during and after heavy rain.',
              },
              {
                title: 'High Water Table',
                body: 'In low-lying parts of the KC metro, the natural water table can rise close to or above the crawl space floor level after extended rain, pushing water up from below.',
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

      {/* Why It's Urgent */}
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
            Why It Can't Wait
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
            Why Standing Water Should Be Treated as Urgent
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, maxWidth: 700 }}>
            {[
              'Mold can begin growing on wood and insulation within 24 to 48 hours of standing water',
              'Wood-framed floor joists and subfloor absorb moisture and begin to rot',
              'Standing water softens and undermines soil around footings, risking foundation movement',
              'Pooled water attracts termites, carpenter ants, and other moisture-seeking pests',
              'Humidity from standing water rises into the living space and affects indoor air quality',
              'The longer water sits, the more expensive and extensive the eventual repair becomes',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <XMark size={18} />
                <span style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / Process */}
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
            Our Process
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
            How We Remove Standing Water and Stop It Returning
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 20,
              marginBottom: 32,
            }}
          >
            {[
              {
                title: 'Water Extraction',
                body: 'Existing standing water is pumped or vacuumed out and the crawl space is assessed for the extent of saturation and any wood damage.',
              },
              {
                title: 'Exterior Drainage Correction',
                body: 'Grading, downspout extensions, and surface drainage are corrected so rainwater is directed away from the foundation instead of toward it.',
              },
              {
                title: 'Interior French Drain System',
                body: 'A perimeter drain is installed along the interior footing to intercept water entering through walls and carry it to a collection point.',
              },
              {
                title: 'Sump Pump Installation',
                body: 'A sump pump and basin collect water from the drainage system and discharge it well away from the home, automatically, going forward.',
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
          <p style={{ fontSize: 15, color: '#9CA3AF', fontStyle: 'italic', margin: 0, lineHeight: 1.6, maxWidth: 700 }}>
            Once the crawl space stays dry through a full rain cycle, a vapor barrier or full encapsulation can be added to control humidity and protect the space long-term. Encapsulation is a follow-up step, never a substitute, for active water control.
          </p>
        </div>
      </section>

      {/* What to Do Next */}
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
            Next Steps
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
            What to Do If You Find Standing Water Today
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            What you should do next depends on how much water is present and how it is entering. A small amount after a single heavy storm may simply need monitoring and a drainage fix. Several inches of water, water that returns after every rain, or water near electrical or HVAC components warrants a prompt inspection.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: 20,
            }}
          >
            {[
              {
                title: 'Minor, One-Time Pooling',
                body: 'A small amount of water after an unusually heavy rain may be addressed with gutter and grading corrections alone — monitor after the next rain.',
              },
              {
                title: 'Recurring Water Every Rain',
                body: 'If water returns after normal rainfall, this points to an ongoing drainage or seepage source that needs a permanent interior or exterior drainage system.',
              },
              {
                title: 'Deep or Persistent Standing Water',
                body: 'Several inches of standing water, or water that does not drain between storms, typically requires a sump pump and should be inspected promptly to limit damage.',
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
                    fontSize: 19,
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
            Standing Water FAQ
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
