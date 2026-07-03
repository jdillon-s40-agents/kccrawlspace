import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Cold Floors Above Crawl Space | Causes & Kansas City Fix' },
  description:
    'Cold floors above your crawl space in winter? Learn what causes it and how air sealing, encapsulation, and insulation fix cold floors in Kansas City homes.',
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
    q: 'Why are my floors cold above the crawl space?',
    a: 'Cold floors are usually the result of missing, wet, fallen, or compressed insulation under the subfloor, air leaks around the rim joist and floor penetrations such as plumbing and ductwork, and an open or vented crawl space that allows cold outdoor air to contact the underside of the home. Any one of these can chill the floor; most cold-floor homes have a combination of all three.',
  },
  {
    q: 'Will adding insulation fix cold floors?',
    a: 'Sometimes, but not always. If air is freely leaking into the crawl space through open vents and rim joist gaps, new insulation will get cold and lose effectiveness quickly, similar to the insulation it replaced. Insulation works best after the air leaks are sealed and the crawl space is no longer exposed to outdoor air, which is why air sealing is usually addressed first or alongside insulation.',
  },
  {
    q: 'Is it better to insulate the floor or the crawl space walls?',
    a: 'It depends on whether the crawl space will be vented or sealed. In a vented crawl space, insulation typically goes between the floor joists. In a sealed or fully encapsulated crawl space, insulation is usually moved to the foundation walls instead, since the crawl space becomes part of the conditioned building envelope. Wall insulation in an encapsulated space is generally more effective for stopping cold floors than floor insulation alone.',
  },
  {
    q: 'Can sealing the crawl space lower my energy bills?',
    a: 'In many cases, yes. A vented crawl space allows outdoor air, hot in summer and cold in winter, to affect the subfloor, ductwork, and any insulation. Sealing the crawl space and conditioning it reduces this exchange, which can lower the load on your HVAC system. The exact savings depend on the home, ductwork location, and existing insulation condition.',
  },
  {
    q: 'Do I need to seal vents to fix cold floors?',
    a: 'Sealing vents is usually part of the fix, but it should be done as part of a complete encapsulation system that includes a vapor barrier and humidity control, not as a standalone step. Closing vents without addressing ground moisture can trap humidity in the crawl space and create new problems.',
  },
  {
    q: 'How do I know if my crawl space insulation has failed?',
    a: 'Common signs include insulation that has fallen from between the joists, batts that look dark, wet, or compressed, visible gaps where insulation has pulled away from the subfloor, and floors that feel noticeably colder than the rest of the home in winter. A visual inspection of the crawl space confirms the condition of the existing insulation.',
  },
  {
    q: 'Does encapsulation help with cold floors in winter?',
    a: 'Yes, in most cases. Full encapsulation seals the crawl space from outdoor air, covers the ground with a vapor barrier, and is typically paired with wall insulation. Together, these reduce the temperature difference between the crawl space and the living space above, which directly addresses cold floors in winter.',
  },
  {
    q: 'What temperature should a crawl space be in winter?',
    a: 'In a properly sealed and insulated crawl space, the temperature should stay reasonably close to the conditioned space above rather than tracking outdoor temperatures. There is no single required number, but a crawl space that feels nearly as cold as the outdoor air in winter is a sign that air sealing and insulation are not performing as they should.',
  },
];

const relatedLinks = [
  { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
  { label: 'Insulation Removal KC', href: '/crawl-space-insulation-removal-kansas-city/' },
  { label: 'Vents Open or Closed', href: '/crawl-space-vents-open-or-closed/' },
  { label: 'Crawl Space Dehumidifier KC', href: '/crawl-space-dehumidifier-kansas-city/' },
];

export default function ColdFloorsAboveCrawlSpacePage() {
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
                    name: 'Cold Floors Above Crawl Space',
                    item: 'https://crawlspacekc.com/cold-floors-above-crawl-space/',
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
            Cold Floors in Winter
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
            Cold Floors Above Your{' '}
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
            If your floors feel cold even with the heat running, the problem usually starts below — in a crawl space that is leaking air, missing insulation, or both. Here is why it happens and how Kansas City homeowners fix it.
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
            Why Are My Floors Cold Above the Crawl Space?
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 760 }}>
            Cold floors above a crawl space are usually caused by missing, wet, fallen, or compressed insulation, air leaks around the rim joist and floor penetrations, and an unsealed or vented crawl space that lets cold outside air contact the subfloor. The fix typically combines air sealing, vapor barrier or full encapsulation, and properly installed insulation rather than insulation alone.
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
              <strong>Short answer:</strong> Seal the air leaks first, then insulate. Adding insulation alone over an open, drafty crawl space rarely solves cold floors for good.
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
            What Causes Cold Floors in a Kansas City Home
          </h2>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Floors directly above a crawl space are only as warm as the air and surfaces beneath them. When that space is exposed to winter outdoor air, the subfloor loses heat fast, and that chill transfers straight up into the room above.
          </p>
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
                title: 'Vented Crawl Space',
                body: 'Open foundation vents let freezing winter air flow directly under the home, chilling the subfloor regardless of how much insulation is installed.',
              },
              {
                title: 'Missing or Damaged Insulation',
                body: 'Fiberglass batts sag, fall, get wet, or were never installed correctly, leaving sections of subfloor with little to no insulating value.',
              },
              {
                title: 'Air Leaks at the Rim Joist',
                body: 'Gaps where the foundation meets the floor framing, and around plumbing and wiring penetrations, let cold air infiltrate directly under the floor.',
              },
              {
                title: 'Ductwork in an Unconditioned Crawl Space',
                body: 'HVAC ducts running through a cold, vented crawl space lose heat before it ever reaches the room, making floors near vents feel even colder.',
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
          <p style={{ fontSize: 15, color: '#6B7280', fontStyle: 'italic', margin: 0, lineHeight: 1.6, maxWidth: 760 }}>
            Cold floors are also an energy signal — a crawl space losing heat to the outdoors year-round typically means your HVAC system is working harder than it should.
          </p>
        </div>
      </section>

      {/* Signs */}
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
            Warning Signs
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
            Signs Your Crawl Space Is Causing Cold Floors
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, maxWidth: 700 }}>
            {[
              'Floors feel noticeably colder than the rest of the room, especially near exterior walls',
              'Insulation visible from the crawl space access is sagging, fallen, or missing in sections',
              'A draft is noticeable at floor level even with windows and doors closed',
              'Higher-than-expected heating bills in winter months',
              'HVAC system runs longer or more often to maintain the same indoor temperature',
              'Pipes or ductwork in the crawl space feel cold to the touch',
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
            How We Fix Cold Floors From the Crawl Space Up
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
                title: 'Air Sealing',
                body: 'Gaps at the rim joist, foundation penetrations, and vent openings are sealed to stop cold outdoor air from infiltrating the crawl space.',
              },
              {
                title: 'Vapor Barrier or Full Encapsulation',
                body: 'A heavy-duty liner covers the ground and, in a full encapsulation, the foundation walls, removing the crawl space from direct outdoor exposure.',
              },
              {
                title: 'Removal of Failed Insulation',
                body: 'Wet, sagging, or moldy batts are removed so new insulation is not installed over damaged or contaminated material.',
              },
              {
                title: 'Insulation Reinstalled in the Right Place',
                body: 'In a sealed crawl space, insulation typically moves to the foundation walls; in a vented space, new floor insulation is installed correctly and supported.',
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
            Insulation performs best as the last step in this sequence — sealing air leaks and controlling moisture first protects the investment in new insulation.
          </p>
        </div>
      </section>

      {/* Insulation Strategy / What to Do Next */}
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
            Floor vs Wall Insulation
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
            Should You Insulate the Floor or the Crawl Space Walls?
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Where insulation belongs depends on whether the crawl space stays vented or gets sealed. The two approaches are not interchangeable, and mixing them without a plan can leave moisture trapped against wood framing.
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
                title: 'Vented Crawl Space',
                body: 'Insulation stays between the floor joists, facing the warm side up toward the subfloor, with the crawl space left exposed to outdoor air.',
              },
              {
                title: 'Sealed / Encapsulated Crawl Space',
                body: 'Insulation typically moves to the foundation walls, since the crawl space becomes part of the conditioned envelope and the floor no longer needs separate insulation.',
              },
              {
                title: 'Mixed or Partial Crawl Spaces',
                body: 'Homes with additions or partial vents sometimes need a combination approach — an inspection determines the right configuration for each section.',
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
            Cold Floors FAQ
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
