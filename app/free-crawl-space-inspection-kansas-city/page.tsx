import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Free Crawl Space Inspection Kansas City | No-Obligation Assessment' },
  description:
    'Free, no-obligation crawl space inspection in Kansas City. We check moisture, structure, mold, pests, and insulation, then give you honest findings. Same-week visits.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/free-crawl-space-inspection-kansas-city/',
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
    q: 'Is the crawl space inspection really free?',
    a: 'Yes. There is no cost and no obligation to book any work. We inspect the crawl space, explain what we find in plain language, and give you a written estimate only if you want one. You are never charged just for having us come look.',
  },
  {
    q: 'How long does a crawl space inspection take?',
    a: 'Most inspections take 30 to 60 minutes, depending on the size and accessibility of the crawl space. We take photos throughout so you can see exactly what the inspector saw, even in areas that are hard to view directly.',
  },
  {
    q: 'Do I need to be present for the inspection?',
    a: 'We recommend being home, especially at the start and end of the visit, so the inspector can walk you through what was found and answer questions in person. If your schedule does not allow it, we can still complete the inspection and go over photos and findings with you by phone.',
  },
  {
    q: 'Will I be pressured to sign a contract on the spot?',
    a: 'No. Our inspectors are not paid on same-day close rates, and we do not use expiring "today only" pricing to force a decision. You will get a written estimate and as much time as you need to review it, compare it, or think it over.',
  },
  {
    q: 'Do you inspect crawl spaces before a home sale or purchase?',
    a: 'Yes. We regularly inspect crawl spaces for buyers and sellers ahead of closing, so you can address moisture, structural, or pest issues before they become a negotiation point or a surprise after the sale.',
  },
  {
    q: 'What if the inspector does not find anything wrong?',
    a: 'That is a good outcome, and we will tell you exactly that. Not every crawl space needs work. If we do not find a problem worth addressing, we will say so directly instead of manufacturing a reason to sell you something.',
  },
  {
    q: 'How far in advance do I need to book an inspection?',
    a: 'We typically offer same-week appointments in the Kansas City metro. If you have a specific deadline, such as a closing date, let us know when you request the inspection and we will do our best to prioritize it.',
  },
  {
    q: 'Do you inspect mobile home underbellies too?',
    a: 'Yes. We inspect mobile and manufactured home underbellies for the same moisture, insulation, and pest issues we look for in a traditional crawl space, and we can access most skirting and belly board configurations.',
  },
];

const relatedLinks = [
  { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
  { label: 'Crawl Space Repair KC', href: '/crawl-space-repair-kansas-city/' },
  { label: 'Crawl Space Waterproofing KC', href: '/crawl-space-waterproofing-kansas-city/' },
  { label: 'Encapsulation Cost KC', href: '/crawl-space-encapsulation-cost-kansas-city/' },
];

const whatWeCheck = [
  {
    title: 'Moisture & Humidity',
    body: 'We measure crawl space humidity and check for standing water, damp soil, and condensation that can point to a bigger moisture problem.',
  },
  {
    title: 'Structural Integrity',
    body: 'We inspect floor joists, support posts, and beams for sagging, rot, or settling that can affect the floor above.',
  },
  {
    title: 'Mold & Wood Rot',
    body: 'We look for visible growth, staining, and soft or crumbling wood, and note the moisture conditions that are feeding it.',
  },
  {
    title: 'Pest & Rodent Signs',
    body: 'We check for entry points, droppings, nesting material, and damage caused by rodents, insects, or other pests.',
  },
  {
    title: 'Insulation Condition',
    body: 'We check whether insulation is wet, sagging, missing, or falling from the joists, all of which reduce its effectiveness.',
  },
  {
    title: 'Vents & Airflow',
    body: 'We evaluate foundation vents and airflow patterns to see whether they are helping or hurting your crawl space conditions.',
  },
];

const afterSteps = [
  {
    title: 'On-Site Walkthrough With Photos',
    body: 'The inspector walks the crawl space and documents what they find with photos, so you can see the actual conditions rather than take our word for it.',
  },
  {
    title: 'Written, Itemized Findings',
    body: 'You receive a written summary of what was found and what it means, usually the same day or the next business day.',
  },
  {
    title: 'No-Pressure Explanation of Options',
    body: 'If work is recommended, we walk through the options and the reasoning behind them. If nothing is needed, we tell you that instead.',
  },
  {
    title: 'A Written Estimate, No Expiration Games',
    body: 'Any recommended work comes with a written estimate. We do not use fake deadlines or "price goes up tomorrow" tactics to rush your decision.',
  },
  {
    title: 'You Decide, On Your Timeline',
    body: 'The decision to move forward, get a second opinion, or wait is entirely yours. There is no follow-up pressure campaign after the visit.',
  },
];

const notList = [
  'Not a bait to get you to sign a contract the same day',
  'Not a scare tactic that invents or inflates problems',
  'Not a phone quote given without ever seeing the crawl space',
  'Not a required purchase just to get your findings in writing',
];

export default function FreeCrawlSpaceInspectionPage() {
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
                    name: 'Free Crawl Space Inspection Kansas City',
                    item: 'https://crawlspacekc.com/free-crawl-space-inspection-kansas-city/',
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
            No Cost. No Obligation.
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
            Free Crawl Space{' '}
            <span style={{ color: '#F5A623' }}>Inspection in Kansas City</span>
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
            A free inspection should mean exactly that: someone comes out, looks honestly at your crawl space, and tells you what they see. No inflated problems, no same-day pressure, no phone quotes. Just a straight answer from a local inspector.
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
              Book Your Free Inspection
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
            What&apos;s Included in a Free Crawl Space Inspection?
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 760 }}>
            A free crawl space inspection covers moisture and humidity levels, signs of mold or wood rot, the structural condition of joists and support posts, the condition of any existing vapor barrier, signs of pest or rodent activity, insulation condition, and vent and airflow condition. You get a full picture of your crawl space, not just a glance.
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
              <strong>Short answer:</strong> A trained inspector checks moisture, structure, mold, pests, insulation, and airflow, then gives you written, photo-documented findings with no obligation to buy anything.
            </p>
          </div>
        </div>
      </section>

      {/* What We Check */}
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
            The Full Checklist
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
            What We Check During Your Inspection
          </h2>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Every crawl space inspection covers the same six areas, whether or not you have a known problem. This gives you a complete, documented baseline of your crawl space condition.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 20,
            }}
          >
            {whatWeCheck.map((card) => (
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

      {/* What Happens After */}
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
            After the Visit
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
            What Happens After the Inspection
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20, maxWidth: 760 }}>
            {afterSteps.map((step, i) => (
              <div key={step.title} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div
                  style={{
                    flex: 'none',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: '#1B3A6B',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    font: "800 16px 'Inter',sans-serif",
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 800,
                      fontSize: 19,
                      textTransform: 'uppercase' as const,
                      color: '#0D0D0D',
                      margin: '0 0 6px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 15, color: '#4b5563', margin: 0, lineHeight: 1.6 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What a Free Inspection Is NOT */}
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
            Let&apos;s Be Direct
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
            What a Free Inspection Is NOT
          </h2>
          <p style={{ fontSize: 16, color: '#D1D5DB', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 700 }}>
            We know the reputation this industry has earned from national franchises that use "free inspection" as an excuse for a high-pressure, in-home sales pitch. Here is what our inspection is not, in plain terms.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, maxWidth: 700, marginBottom: 24 }}>
            {notList.map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <XMark size={18} />
                <span style={{ fontSize: 16, color: '#D1D5DB', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#9CA3AF', fontStyle: 'italic', margin: 0, lineHeight: 1.6, maxWidth: 700 }}>
            If our inspector cannot explain a recommendation in plain language and back it up with photos, we have not done our job. You should never feel rushed into a decision about your own home.
          </p>
        </div>
      </section>

      {/* Why Get an Inspection Even If You Don't See a Problem */}
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
            Why Bother
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
            Why Get an Inspection Even If You Don&apos;t See a Problem
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 20px', maxWidth: 760 }}>
            Many of the conditions that damage a crawl space over time are not something you would ever notice from inside your house. High humidity, early-stage wood rot, and small pest entry points rarely announce themselves with an odor or a stain you can see from the living room floor. By the time a problem is obvious upstairs, it has often been developing under the house for a year or more.
          </p>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 20px', maxWidth: 760 }}>
            Catching these issues early is almost always far cheaper than repairing the damage they eventually cause, whether that is replacing rotted joists, remediating mold, or dealing with a pest infestation that has spread into the home. An inspection gives you a baseline reading and an early warning, even when everything turns out fine.
          </p>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: 0, maxWidth: 760 }}>
            This is also why a free inspection is one of the most useful steps homeowners can take before buying or selling a house. Knowing the true condition of the crawl space before closing can prevent a costly surprise, and can also give buyers and sellers leverage in negotiations.
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
            Free Inspection FAQ
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
              Book Your Free Crawl Space Inspection
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
