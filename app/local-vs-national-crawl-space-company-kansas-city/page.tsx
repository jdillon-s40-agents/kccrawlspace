import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Local Specialist vs. National Franchise | Kansas City Crawl Space Companies' },
  description:
    'Comparing quotes for crawl space work in Kansas City? Learn the real differences between independently owned local specialists and national home-services franchises.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/local-vs-national-crawl-space-company-kansas-city/',
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
    q: 'Are national franchises always more expensive than local companies?',
    a: 'Not necessarily, and pricing varies by company on both sides. What is generally true across the home-services industry is that large franchises often carry higher overhead — national marketing, corporate staff, and commissioned sales roles — which can be reflected in bundled package pricing. Local specialists typically have lower overhead, but the only way to know for a specific job is to compare itemized, written estimates.',
  },
  {
    q: 'Are local crawl space companies less reliable than big national brands?',
    a: 'Company size does not determine reliability. Reliability comes down to licensing, insurance, workmanship, and how a company stands behind its work, not whether it operates in one metro area or dozens. A well-established local specialist with a track record in Kansas City can be just as reliable as a national brand, and homeowners should evaluate any company on its own merits.',
  },
  {
    q: 'Do local companies offer the same warranties as national franchises?',
    a: 'Many local companies offer strong warranties on their materials and workmanship. The key difference is who stands behind it. With a local specialist, the same business that installed the system is the one honoring the warranty. With a franchise, warranty terms are often set at the corporate level, which can mean more standardized paperwork but a longer chain between the homeowner and the people who actually did the work. Always ask for the warranty in writing and confirm exactly what it covers before signing anything.',
  },
  {
    q: 'How do I verify a company is licensed and insured in Missouri or Kansas?',
    a: 'Ask any company for proof of general liability insurance and, where applicable, any local business licensing before work begins. You can also ask for references from recent local jobs. A legitimate company, local or national, should provide this documentation without hesitation.',
  },
  {
    q: 'Should I get multiple quotes before choosing a crawl space company?',
    a: 'Yes. Getting two or three written, itemized estimates is one of the best ways to understand the scope of work being recommended, compare pricing structures, and see how each company communicates. It also gives you a chance to compare a local specialist and a national franchise side by side using the same crawl space conditions.',
  },
  {
    q: 'Is it normal for an estimate to include financing options?',
    a: 'Yes, financing is common in the crawl space and foundation repair industry given the scope of many projects. Both local companies and national franchises may offer financing. What matters is understanding the terms clearly and making sure financing is offered as an option, not a pressure tactic to close the sale on the spot.',
  },
  {
    q: 'Why do some companies use commissioned sales reps instead of technicians for estimates?',
    a: 'Commission-based sales structures are common across the home-services franchise industry broadly, where a sales representative handles the quote and a separate crew performs the installation. This is simply a business model choice, not a reflection of quality. Some homeowners prefer speaking directly with the person who will do the work, which is more common with smaller, owner-operated companies.',
  },
  {
    q: 'What is the biggest tradeoff between a local specialist and a national franchise?',
    a: 'In general terms, national franchises can offer the scale, standardized systems, and brand recognition of a larger organization, while local specialists tend to offer more direct communication, scheduling flexibility, and personal accountability since the owner is often involved in the work itself. Neither model is automatically better — the right choice depends on what matters most to you for this specific project.',
  },
];

const relatedLinks = [
  { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
  { label: 'Encapsulation Cost KC', href: '/crawl-space-encapsulation-cost-kansas-city/' },
  { label: 'About Us', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
];

const comparisonRows = [
  {
    factor: 'Who Gives the Quote',
    local: 'The owner or an experienced technician, often the same person who may do or oversee the work',
    national: 'Frequently a commissioned sales representative rather than the installing crew',
  },
  {
    factor: 'Pricing Structure',
    local: 'Transparent, itemized line pricing for the specific work being recommended',
    national: 'Often bundled into standardized "packages" set at the corporate level',
  },
  {
    factor: 'Scheduling Flexibility',
    local: 'Direct scheduling with the business, often same-week appointments',
    national: 'Routed through a corporate scheduling queue across a larger service area',
  },
  {
    factor: 'Warranty Backing',
    local: 'The local business that did the work honors the warranty directly',
    national: 'Warranty terms and honoring are typically set by corporate policy',
  },
  {
    factor: 'Focus',
    local: 'Specializes solely in crawl space work',
    national: 'Often one of several service lines (basements, foundations, gutters, pest control) under one brand',
  },
];

const questionsToAsk = [
  'Is the person quoting me the person doing the work?',
  'Is the estimate written and itemized, or a bundled package price?',
  'What exactly does the warranty cover, and who honors it?',
  'Can I get a same-week or fixed appointment window?',
  'Do you specialize in crawl spaces, or is this one of several services you offer?',
];

export default function LocalVsNationalCrawlSpaceCompanyPage() {
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
                    name: 'Local Specialist vs. National Franchise',
                    item: 'https://www.crawlspacekc.com/local-vs-national-crawl-space-company-kansas-city/',
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
            What Homeowners Should Know
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
            Local Specialist or National Franchise?{' '}
            <span style={{ color: '#F5A623' }}>Choosing a Kansas City Crawl Space Company</span>
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
            Kansas City homeowners often end up with quotes from both large national home-services franchises and small, independently owned local specialists. The differences between the two go well beyond the number at the bottom of the estimate.
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
              Get a Free Local Estimate
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
            What&apos;s the Difference Between a Local Specialist and a National Franchise?
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 760 }}>
            National franchises generally operate a standardized sales process across many locations, and it is common in that model for a commissioned sales representative — rather than the technician who ultimately performs the work — to run the in-home estimate. Independently owned local specialists are typically structured differently: the owner or a senior technician often handles the quote directly, and the same business stays the single point of contact from the initial estimate through the completed installation and any warranty follow-up.
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
              <strong>Short answer:</strong> Neither business model is inherently better. The tradeoffs are about who quotes the job, how pricing is structured, how flexible scheduling is, and how directly a company is accountable to you once the work is done.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
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
            Business Models Compared
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
            Local Specialist vs. National Franchise, Factor by Factor
          </h2>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            These are general, well-known differences between the two business models common in the crawl space and foundation repair industry, not a claim about any specific company.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: 20,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                background: '#111827',
                border: '2px solid #F5A623',
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
                  color: '#F5A623',
                  margin: '0 0 16px',
                }}
              >
                Independently Owned Local Specialist
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14 }}>
                {comparisonRows.map((row) => (
                  <div key={row.factor} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <Check size={16} />
                    <span style={{ fontSize: 14.5, color: '#D1D5DB', lineHeight: 1.55 }}>
                      <strong style={{ color: '#fff' }}>{row.factor}:</strong> {row.local}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                background: '#111827',
                border: '1px solid rgba(255,255,255,.08)',
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
                  color: '#9CA3AF',
                  margin: '0 0 16px',
                }}
              >
                National Franchise
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14 }}>
                {comparisonRows.map((row) => (
                  <div key={row.factor} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ fontSize: 14.5, color: '#9CA3AF', lineHeight: 1.55 }}>
                      <strong style={{ color: '#D1D5DB' }}>{row.factor}:</strong> {row.national}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p style={{ fontSize: 15, color: '#6B7280', fontStyle: 'italic', margin: 0, lineHeight: 1.6, maxWidth: 760 }}>
            These are general industry patterns, not a statement about any specific competitor. Individual companies on both sides can vary.
          </p>
        </div>
      </section>

      {/* When a National Franchise Might Make Sense */}
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
            To Be Fair
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
            When a National Franchise Might Make Sense
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, maxWidth: 760 }}>
            {[
              'You own property in multiple states and want a single brand relationship across locations.',
              'Your job requires a specialized, proprietary system that is only installed by a particular franchise network.',
              'You place a high priority on the scale, bonding capacity, or corporate infrastructure of a larger organization.',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <Check size={18} />
                <span style={{ fontSize: 16, color: '#374151', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When a Local Specialist Might Make Sense */}
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
            Also Worth Considering
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
            When a Local Specialist Might Make Sense
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, maxWidth: 760 }}>
            {[
              'You want to speak directly with the person doing the actual work, from the first quote through completion.',
              'You want faster scheduling without routing through a corporate call center or regional queue.',
              'You want a company that focuses solely on crawl spaces rather than splitting attention across basements, foundations, gutters, pest control, and other service lines.',
              'You value personal accountability from an owner-operator who has a direct stake in the reputation of the work.',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <Check size={18} />
                <span style={{ fontSize: 16, color: '#D1D5DB', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions to Ask */}
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
            Before You Sign Anything
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
            Questions to Ask Any Company Before Hiring
          </h2>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 32px', maxWidth: 760 }}>
            Whether you are talking to a local specialist or a national franchise, these five questions will tell you a lot about how the company operates and what to expect after you sign.
          </p>
          <div
            style={{
              background: '#111827',
              border: '1px solid rgba(255,255,255,.08)',
              borderRadius: 12,
              padding: 28,
              maxWidth: 760,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 18 }}>
              {questionsToAsk.map((question) => (
                <div key={question} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <Check size={18} />
                  <span style={{ fontSize: 16, color: '#D1D5DB', lineHeight: 1.6 }}>{question}</span>
                </div>
              ))}
            </div>
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
            Local vs. National Crawl Space Companies: FAQ
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
              Get a Free Local Crawl Space Estimate
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
