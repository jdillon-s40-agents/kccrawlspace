import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Sagging Floor Repair Kansas City | Crawl Space Support Jacks' },
  description:
    'Bouncy or sagging floors above your crawl space? We install steel support jacks, sister joists, and fix the moisture causing rot. Free Kansas City inspection.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-sagging-floor-repair-kansas-city/',
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
    q: 'How many support jacks does my house need?',
    a: 'The number of jacks depends on the span and condition of the beam, the joist spacing, and how much deflection has already occurred. Most homes need anywhere from a handful of jacks under a single weak span to a full row spaced every few feet along a badly sagging beam. An inspection will measure the floor and recommend an exact count.',
  },
  {
    q: 'Can I fix a sagging floor myself?',
    a: 'Temporary shoring with a jack post from a hardware store can sometimes stop a floor from getting worse, but it is easy to lift unevenly, crack drywall or tile, or push a beam that is already rotted. Properly diagnosing the cause and lifting a structure back into place safely is a job best handled by someone experienced with crawl space framing.',
  },
  {
    q: 'Is a sagging floor an emergency?',
    a: "It depends on the severity. A slight bounce is usually not urgent, but a floor that has visibly dropped, cracked joists, or a beam that is separating from its support should be looked at quickly. Structural problems tend to get worse, not better, and repair costs generally increase the longer they're left unaddressed.",
  },
  {
    q: 'Does homeowners insurance cover structural crawl space repair?',
    a: 'Coverage varies by policy and by cause. Damage from a sudden covered event, such as a burst pipe, is more likely to be covered than gradual deterioration from long-term humidity or wear. We recommend checking with your insurance provider directly, and we can provide documentation and photos from our inspection to support a claim if needed.',
  },
  {
    q: 'How long does a sagging floor repair take?',
    a: 'Installing support jacks or sistering a few joists is often completed in a single day. Larger jobs involving beam replacement, multiple support points, or moisture control work alongside the structural repair can take one to three days depending on access and scope.',
  },
  {
    q: 'Will fixing the floor stop the squeaking too?',
    a: 'Often, yes. Squeaks are frequently caused by the same loose, weak, or shifting framing that causes sagging, so restoring solid support under the joists and beam commonly reduces or eliminates squeaks. Some squeaks come from subfloor fasteners rather than the framing below, so we cannot guarantee every squeak is eliminated, but structural repair resolves the majority of cases.',
  },
  {
    q: 'Do support jacks cause problems when selling my house?',
    a: 'Professionally installed, permanent steel support jacks are a recognized structural repair and are generally viewed as a positive by inspectors and buyers, especially with documentation of the work. Undocumented DIY shoring or visibly failing supports are far more likely to raise concerns during a home sale.',
  },
  {
    q: 'Is structural crawl space repair covered by a warranty?',
    a: 'We stand behind our structural repair work and can walk you through the specific coverage for your project at the time of your estimate. Warranty terms can vary depending on the scope of work performed, so ask your technician for written details before work begins.',
  },
];

const relatedLinks = [
  { label: 'Crawl Space Repair KC', href: '/crawl-space-repair-kansas-city/' },
  { label: 'Crawl Space Waterproofing KC', href: '/crawl-space-waterproofing-kansas-city/' },
  { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
  { label: 'Standing Water in Crawl Space', href: '/standing-water-in-crawl-space/' },
];

export default function CrawlSpaceSaggingFloorRepairKansasCityPage() {
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
                    name: 'Sagging Floor Repair Kansas City',
                    item: 'https://www.crawlspacekc.com/crawl-space-sagging-floor-repair-kansas-city/',
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
            Structural Crawl Space Repair
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
            Sagging Floor Repair{' '}
            <span style={{ color: '#F5A623' }}>in Kansas City</span>
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
            Bouncy, sloping, or sagging floors are usually a structural problem in the crawl space below, not the flooring itself. We install adjustable steel support jacks, repair weak joists, and fix the underlying cause so the floor stays solid.
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
            What Causes a Sagging Floor Above a Crawl Space?
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 760 }}>
            A sagging or bouncy floor almost always traces back to the framing underneath it. Common causes include floor joists that were undersized for the span or have weakened from rot, support columns and posts spaced too far apart to properly carry the load, posts settling into soft or shifting soil, water damage that has softened and decayed wood over time, and support jacks that were never installed, have failed, or were installed with insufficient capacity. Identifying which of these is happening in your crawl space determines the right repair.
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
              <strong>Short answer:</strong> Weak or rotted joists, undersized support, and settling posts are the most common causes. A crawl space inspection identifies the exact point of failure before any repair begins.
            </p>
          </div>
        </div>
      </section>

      {/* Signs of a Sagging Floor */}
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
            Signs You Have a Sagging Floor Problem
          </h2>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Structural issues below the home often show up as small annoyances upstairs before they become obvious. These are the most common signs homeowners notice, either in the living space or during a crawl space inspection.
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
                title: 'Bouncy or Spongy Floors',
                body: 'Floors that flex, bounce, or feel soft underfoot when you walk across them indicate the joists or support below are no longer rigid.',
              },
              {
                title: 'Doors and Windows Sticking',
                body: 'When a floor sags, the framing around it shifts, which can throw door and window frames out of square so they bind or stick.',
              },
              {
                title: 'Gaps Between Floor and Baseboard',
                body: 'A visible gap opening up between the floor and the baseboard is a sign the floor has dropped away from the wall framing.',
              },
              {
                title: 'Cracks in Drywall or Ceilings',
                body: 'Diagonal cracks in drywall above the affected area, especially near corners, often follow structural movement in the floor below.',
              },
              {
                title: 'Sloping or Uneven Floors',
                body: 'A floor that visibly slopes toward the center of the house or feels uneven when you set a ball or level on it points to a beam or post settling.',
              },
              {
                title: 'Visible Damage in the Crawl Space',
                body: 'Cracked, split, or sagging joists, and beams pulling away from their supports are visible confirmation of the problem when viewed from below.',
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

      {/* Why It Happens in KC */}
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
            Local Conditions
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
            Why Sagging Floors Are Common in Kansas City Homes
          </h2>
          <p style={{ fontSize: 17, color: '#D1D5DB', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 760 }}>
            Kansas City sits on expansive clay soil that swells when wet and shrinks when dry, which causes support posts and footings to shift and settle unevenly over time. Combined with the region's humid summers, that soil movement puts crawl space framing under constant stress.
          </p>
          <p style={{ fontSize: 17, color: '#D1D5DB', lineHeight: 1.7, margin: 0, maxWidth: 760 }}>
            Moisture is usually the other half of the story. A damp or wet crawl space accelerates wood rot in joists and beams, which is one of the leading causes of a sagging floor. That means the structural problem and the moisture problem are frequently the same root cause, and a lasting repair often needs to address both, not just the sag itself.
          </p>
        </div>
      </section>

      {/* Repair Solutions */}
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
              margin: '0 0 24px',
            }}
          >
            Sagging Floor Repair Solutions
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            The right repair depends on what is actually causing the sag. In most crawl spaces, one or more of the following solutions restores the floor and stops further movement.
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
                title: 'Adjustable Steel Support Jacks',
                body: 'Galvanized steel jacks and piers are installed on solid footings beneath sagging beams to gradually lift the floor and provide permanent, adjustable support.',
              },
              {
                title: 'Sistering Damaged Joists',
                body: 'A new joist is cut to fit and bolted alongside a split, cracked, or weakened joist, restoring the load-carrying capacity of the original framing member.',
              },
              {
                title: 'Beam and Post Replacement',
                body: 'When a beam or post has rotted or failed beyond repair, it is replaced outright with properly sized lumber or steel and set on a stable footing.',
              },
              {
                title: 'Encapsulation and Moisture Control',
                body: 'Sealing the crawl space with a vapor barrier and controlling humidity stops the moisture that causes rot, protecting the new structural repair from recurring.',
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

      {/* Process */}
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
            How It Works
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
            Our Sagging Floor Repair Process
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20, maxWidth: 760 }}>
            {[
              {
                title: 'Free Inspection and Structural Assessment',
                body: 'A technician crawls the space, measures the floor, and identifies exactly which joists, beams, or posts are causing the sag.',
              },
              {
                title: 'Written Estimate',
                body: 'You receive a detailed, itemized quote covering the repair scope, materials, and cost before any work is scheduled.',
              },
              {
                title: 'Install Support Jacks and Repair Joists',
                body: 'Support jacks are set on proper footings and adjusted to lift the floor, while any sistered or replaced joists and beams are installed.',
              },
              {
                title: 'Address the Moisture Source',
                body: 'Since rot-driven sag tends to return without it, we identify and correct the humidity or water issue feeding the damage.',
              },
              {
                title: 'Final Walkthrough',
                body: 'We review the completed repair with you, confirm the floor is level and stable, and answer any remaining questions.',
              },
            ].map((step, i) => (
              <div key={step.title} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div
                  style={{
                    flex: 'none',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: '#F5A623',
                    color: '#0D0D0D',
                    font: "800 18px 'Barlow Condensed',sans-serif",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 800,
                      fontSize: 20,
                      textTransform: 'uppercase' as const,
                      color: '#fff',
                      margin: '0 0 6px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.6 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost */}
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
            Cost
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
            How Much Does Sagging Floor Repair Cost?
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 760 }}>
            Pricing depends on how many support points are needed, how much of the framing is damaged, and how easy the crawl space is to access. As a general guide:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14, maxWidth: 700, marginBottom: 28 }}>
            {[
              { label: 'Support jack installation', range: '$150 – $500 per jack' },
              { label: 'Joist sistering', range: '$100 – $300 per joist' },
              { label: 'Full beam replacement', range: '$1,000 – $3,000+' },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 16,
                  flexWrap: 'wrap' as const,
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 10,
                  padding: '16px 20px',
                }}
              >
                <span style={{ fontSize: 16, color: '#0D0D0D', fontWeight: 600 }}>{row.label}</span>
                <span style={{ fontSize: 16, color: '#1B3A6B', fontWeight: 700 }}>{row.range}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#6B7280', fontStyle: 'italic', margin: 0, lineHeight: 1.6, maxWidth: 700 }}>
            Exact pricing requires an on-site inspection to determine the number of support points and extent of any damage. We provide a written quote before any work begins, and no work starts until you approve it.
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
            Sagging Floor Repair FAQ
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
