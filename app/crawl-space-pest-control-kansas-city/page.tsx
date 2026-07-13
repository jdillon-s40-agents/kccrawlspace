import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Pest & Rodent Control Kansas City | Sealing & Exclusion' },
  description:
    'Mice, rodents, and pests get into crawl spaces through open vents and gaps. We seal and encapsulate Kansas City crawl spaces to keep them out. Free inspection.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-pest-control-kansas-city/',
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
    q: 'Do you exterminate pests or remove animals from my crawl space?',
    a: 'No. We are a crawl space encapsulation and moisture control contractor, not a licensed pest control or wildlife removal company. Our role is exclusion and sealing — closing the vents, gaps, and penetrations pests use to get in, and removing the damp conditions that make a crawl space attractive to them. If you have an active infestation or an animal currently living in the crawl space, we recommend a licensed pest control or wildlife removal specialist handle that first, and we are happy to coordinate our sealing work around theirs.',
  },
  {
    q: 'Does crawl space encapsulation stop mice from getting in?',
    a: 'A properly sealed crawl space removes the easiest entry points mice use — open foundation vents, gaps around plumbing and wiring penetrations, and damaged vent screens. Combined with a sealed vapor barrier that eliminates the food and water sources rodents look for, encapsulation makes a crawl space far less hospitable and far harder to access. No sealing method can guarantee against every possible entry point on an older home, but exclusion is the most effective long-term approach.',
  },
  {
    q: 'What attracts snakes to a crawl space?',
    a: 'Snakes are typically drawn to crawl spaces for two reasons: rodent prey and a cool, damp, dark environment. A crawl space with an active mouse or rat population, standing moisture, and open vent access checks every box a snake is looking for. Sealing entry points and eliminating the rodent food source through exclusion and moisture control addresses both attractions at once.',
  },
  {
    q: 'Can pest droppings in a crawl space affect indoor air quality?',
    a: 'Crawl space air can move into the living space above through gaps, ductwork, and the natural stack effect of a home. Rodent droppings, nesting material, and pest debris in the crawl space may contribute to what circulates upstairs. A sealed vapor barrier and encapsulated crawl space reduce that pathway between the crawl space and your living areas.',
  },
  {
    q: 'How do I know if I have a rodent problem in my crawl space?',
    a: 'Common signs include droppings on the vapor barrier or insulation, gnaw marks on floor joists, wiring, or ductwork, shredded insulation or debris used as nesting material, scratching or scurrying sounds from below the floor, and a distinct musky or ammonia-like odor. If you notice any of these, a crawl space inspection can confirm the extent of activity and identify the entry points involved.',
  },
  {
    q: 'Will sealing my crawl space vents cause moisture problems?',
    a: 'Closing vents without addressing moisture can raise humidity if nothing replaces the ventilation. That is why we do not simply close vents and walk away — proper vent sealing is paired with a sealed ground vapor barrier and, where needed, a dedicated crawl space dehumidifier to actively manage humidity year-round. Done correctly, a sealed crawl space runs drier than a vented one, not wetter.',
  },
  {
    q: 'How much does crawl space sealing and exclusion work cost?',
    a: 'Cost depends on the size of the crawl space, the number and condition of vents and penetrations that need sealing, whether damaged insulation needs to be removed, and whether full encapsulation is included. We provide a free, no-obligation inspection and a written estimate so you know the scope and cost before any work begins.',
  },
  {
    q: 'Is pest damage to insulation or wiring a safety concern?',
    a: 'It can be. Rodents commonly gnaw on wiring insulation and can expose or damage electrical wiring running through a crawl space, which is a potential fire and safety hazard. Damaged batt insulation also loses its effectiveness and can fall or sag onto the vapor barrier. If we find chewed wiring during an inspection, we recommend having it evaluated by a licensed electrician in addition to addressing the crawl space sealing.',
  },
];

const relatedLinks = [
  { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
  { label: 'Crawl Space Vents: Open or Closed?', href: '/crawl-space-vents-open-or-closed/' },
  { label: 'Falling Insulation in Crawl Space', href: '/falling-insulation-in-crawl-space/' },
  { label: 'Crawl Space Repair KC', href: '/crawl-space-repair-kansas-city/' },
];

export default function CrawlSpacePestControlPage() {
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
                    name: 'Crawl Space Pest & Rodent Control Kansas City',
                    item: 'https://www.crawlspacekc.com/crawl-space-pest-control-kansas-city/',
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
            Seal It. Keep Them Out.
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
            Crawl Space Pest &amp; Rodent{' '}
            <span style={{ color: '#F5A623' }}>Exclusion in Kansas City</span>
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
            Open foundation vents and unsealed gaps around pipes and wiring turn a crawl space into an open door for mice, rats, snakes, and insects. Sealing and encapsulation close those entry points and remove the damp, sheltered conditions pests are drawn to — the long-term fix, not a temporary trap.
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
            How Do You Keep Pests Out of a Crawl Space?
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 760 }}>
            Keeping pests out of a crawl space starts with closing the entry points they use to get in: sealing foundation vents, closing gaps around plumbing and wiring penetrations, and repairing damaged or torn vent screens. A full encapsulation with a sealed vapor barrier goes a step further by removing the damp, dark conditions that make a crawl space attractive to rodents, snakes, and insects in the first place. Exclusion and moisture control together address both the access and the appeal.
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
              <strong>Short answer:</strong> Seal the openings, then encapsulate to remove the moisture. Pests need shelter, warmth, and moisture — take those away and a crawl space stops being worth getting into.
            </p>
          </div>
        </div>
      </section>

      {/* Common Pests */}
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
            What We See
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
            Common Crawl Space Pests in Kansas City
          </h2>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            These are the pests we most often find evidence of during crawl space inspections around the KC metro, and why each one ends up down there.
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
                title: 'Mice & Rats',
                body: 'Rodents gnaw on insulation and wiring and build nests from shredded debris. They can squeeze through gaps smaller than a quarter, making unsealed vents and penetrations an easy way in.',
              },
              {
                title: 'Snakes',
                body: 'Snakes are drawn into crawl spaces by rodent prey and by the cool, damp, dark environment itself. Where mice are present, snakes are often not far behind.',
              },
              {
                title: 'Termites & Wood-Destroying Insects',
                body: 'Moisture-damaged wood is far more attractive to termites and other wood-destroying insects than dry framing. Chronic crawl space dampness raises that risk over time.',
              },
              {
                title: 'Spiders & Insects',
                body: 'Humid, cluttered crawl spaces with standing debris are ideal habitat for spiders, roaches, and other insects that thrive in dark, moist conditions.',
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

      {/* Signs of Activity */}
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
            What to Look For
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
            Signs of Pest Activity in a Crawl Space
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, maxWidth: 700 }}>
            {[
              'Droppings on the vapor barrier, insulation, or ductwork',
              'Gnaw marks on floor joists, wiring, or duct insulation',
              'Nesting material such as shredded insulation, leaves, or debris',
              'Scratching, scurrying, or rustling sounds from below the floor',
              'A musky, ammonia-like, or pheromone odor in the crawl space or living space',
              'Insulation batts pulled down, sagging, or displaced from the joists',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <Check size={18} />
                <span style={{ fontSize: 16, color: '#374151', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Crawl Spaces Attract Pests */}
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
            Root Cause
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
            Why Crawl Spaces Attract Pests
          </h2>
          <p style={{ fontSize: 17, color: '#D1D5DB', lineHeight: 1.7, margin: '0 0 32px', maxWidth: 760 }}>
            Every pest that ends up in a crawl space is looking for the same three things: shelter, warmth, and moisture. An open-vent crawl space with high humidity, standing debris, and easy access through gaps and damaged screens checks all three boxes. A sealed and dehumidified crawl space removes them — no easy entry, no standing dampness, and no debris to nest in.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
              gap: 20,
            }}
          >
            {[
              {
                title: 'Shelter',
                body: 'Open vents, torn screens, and gaps around penetrations give pests a protected, low-traffic space to hide and nest.',
              },
              {
                title: 'Warmth',
                body: 'The ground beneath a home holds heat more evenly than the outdoors, making a crawl space a comfortable refuge in cold and hot weather alike.',
              },
              {
                title: 'Moisture',
                body: 'Ground moisture and humid outdoor air entering through open vents give pests the water source they need to survive.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#0D0D0D',
                  border: '1px solid rgba(255,255,255,.1)',
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

      {/* Our Process */}
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
              margin: '0 0 32px',
            }}
          >
            Our Crawl Space Exclusion Process
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20, maxWidth: 760 }}>
            {[
              {
                title: '1. Free Inspection',
                body: 'We inspect the crawl space for existing entry points, damaged vents, and signs of pest activity such as droppings, gnaw marks, or nesting material.',
              },
              {
                title: '2. Seal Entry Points',
                body: 'We seal foundation vents and repair gaps and penetrations around pipes, wiring, and framing that pests use to get in.',
              },
              {
                title: '3. Remove Damaged Insulation',
                body: 'Where insulation has been chewed, soiled, or displaced, we remove and dispose of it so it does not continue to shelter pests or feed moisture problems.',
              },
              {
                title: '4. Install Vapor Barrier & Encapsulation',
                body: 'A sealed ground and wall vapor barrier removes the moisture pests depend on, and full encapsulation locks the crawl space down as a controlled, unwelcoming environment.',
              },
              {
                title: '5. Coordinate on Active Infestations',
                body: 'If there is an active infestation or an animal currently living in the crawl space, that should be handled by a licensed pest control or wildlife removal specialist before or alongside our sealing work. We are glad to coordinate timing with a specialist you choose.',
              },
            ].map((step) => (
              <div
                key={step.title}
                style={{
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: '20px 24px',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 19,
                    textTransform: 'uppercase' as const,
                    color: '#1B3A6B',
                    margin: '0 0 8px',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 15, color: '#4b5563', margin: 0, lineHeight: 1.6 }}>{step.body}</p>
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
            Crawl Space Pest Control FAQ
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
