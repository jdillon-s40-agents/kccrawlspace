import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'How to Choose a Crawl Space Contractor in Kansas City' },
  description:
    'A homeowner\'s guide to vetting crawl space contractors in Kansas City — licensing, warranties, red flags, and the right questions to ask before you sign.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/how-to-choose-a-crawl-space-contractor-kansas-city/',
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

const checklistSteps = [
  {
    name: 'Verify licensing and insurance',
    text: 'Confirm the company carries the applicable Missouri or Kansas licensing for the work being performed, plus general liability insurance and workers\' compensation coverage. Ask for proof, not just a verbal assurance.',
  },
  {
    name: 'Insist on an in-person inspection before any quote',
    text: 'A trustworthy contractor will physically get into the crawl space and look at the ground, framing, insulation, and any water staining before proposing a fix. Be wary of anyone willing to quote a price over the phone or from a photo alone.',
  },
  {
    name: 'Get a written, itemized estimate',
    text: 'The estimate should break down materials, labor, and scope of work line by line rather than a single bundled "package" price. Itemization makes it possible to compare quotes and know exactly what you are paying for.',
  },
  {
    name: 'Ask exactly what the warranty covers and who honors it',
    text: 'Find out whether the warranty is backed by the installing company, a materials manufacturer, or a franchisor, and get clarity on what specifically is covered — the vapor barrier, the dehumidifier, labor, or all three.',
  },
  {
    name: 'Ask whether moisture sources are diagnosed before encapsulation is proposed',
    text: 'Encapsulation should follow a diagnosis of where water or humidity is coming from. If a company proposes a full encapsulation without ever discussing grading, drainage, plumbing, or ventilation, that is a gap worth questioning.',
  },
  {
    name: 'Ask how long the company has worked in the Kansas City area',
    text: 'Local experience matters because Kansas City soil, grading, and seasonal humidity patterns differ from other regions. A contractor familiar with local conditions is more likely to diagnose the actual cause correctly.',
  },
  {
    name: 'Get the estimate in writing with no same-day signing pressure',
    text: 'A reputable contractor will leave you with a written estimate and give you time to review it, compare it, and ask follow-up questions without pressuring you to sign the same day to "lock in" a discount.',
  },
];

const faqItems = [
  {
    q: 'Should I get multiple quotes before hiring a crawl space contractor?',
    a: 'Yes. Getting two or three written, itemized estimates lets you compare scope of work and pricing side by side, and it also helps you spot outliers — either a company skipping steps to come in low, or one padding the price for a straightforward job.',
  },
  {
    q: 'How do I verify a contractor is actually licensed and insured?',
    a: 'Ask for their license number and insurance certificate directly, and don\'t hesitate to ask for a certificate of insurance naming you or your address. You can also check with your city or county licensing office, and confirm the company has a verifiable local address rather than a P.O. box or out-of-state office.',
  },
  {
    q: 'Is a lifetime warranty always trustworthy?',
    a: 'Not automatically. A lifetime warranty is only as good as the company standing behind it. Ask who specifically honors the warranty, whether it transfers to a new homeowner if you sell, and whether it is backed by the installer, a manufacturer, or a franchise network rather than a local branch that could close.',
  },
  {
    q: 'What is a fair price range to expect for crawl space encapsulation in Kansas City?',
    a: 'Pricing varies widely based on square footage, existing moisture conditions, and whether drainage or a dehumidifier is needed, which is exactly why an in-person inspection matters more than a phone quote. Comparing itemized estimates from a few local contractors is the most reliable way to gauge a fair price for your specific crawl space.',
  },
  {
    q: 'Should I be suspicious of unusually low quotes?',
    a: 'A quote that is significantly lower than others is worth a closer look at what is actually included. It may reflect thinner vapor barrier material, no drainage component, no dehumidifier, or a shorter warranty, rather than simply a better deal.',
  },
  {
    q: 'Can I ask to see photos or references from past jobs in my area?',
    a: 'Yes, and you should. A contractor with real local experience should be able to show before-and-after photos of completed crawl spaces and, in many cases, provide references from homeowners in your area who had similar work done.',
  },
  {
    q: 'What is the biggest mistake homeowners make when hiring a crawl space contractor?',
    a: 'Signing based on a phone quote or a same-day discount without an in-person inspection is the most common mistake. Since the work is hidden under the house once it is finished, that upfront diagnosis is the homeowner\'s best chance to confirm the right fix is actually being proposed.',
  },
  {
    q: 'Do I need a mold or moisture inspection before getting an encapsulation quote?',
    a: 'It helps to have any existing moisture or mold concerns identified before a contractor proposes a fix, since encapsulation should address the specific conditions in your crawl space rather than being a one-size-fits-all product pitch.',
  },
];

const relatedLinks = [
  { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
  { label: 'Encapsulation Cost KC', href: '/crawl-space-encapsulation-cost-kansas-city/' },
  { label: 'About Us', href: '/about' },
  { label: 'Frequently Asked Questions', href: '/faq' },
];

export default function HowToChooseCrawlSpaceContractorPage() {
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
                    name: 'How to Choose a Crawl Space Contractor in Kansas City',
                    item: 'https://www.crawlspacekc.com/how-to-choose-a-crawl-space-contractor-kansas-city/',
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
                '@type': 'HowTo',
                name: 'How to Choose a Crawl Space Contractor',
                step: checklistSteps.map((item) => ({
                  '@type': 'HowToStep',
                  name: item.name,
                  text: item.text,
                })),
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
            A Homeowner&apos;s Vetting Guide
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
            How to Choose a{' '}
            <span style={{ color: '#F5A623' }}>Crawl Space Contractor</span> in Kansas City
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
            Crawl space work is hard to inspect once it&apos;s finished — it&apos;s hidden under your house behind a sealed vapor barrier. Unlike a repair you can walk by and look at anytime, you're largely trusting the contractor's diagnosis and workmanship going in. That makes choosing the right contractor upfront more important than with almost any other home improvement project.
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
            What Should I Look for in a Crawl Space Contractor?
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 760 }}>
            Verify the contractor's licensing and insurance, and insist on a written, itemized estimate rather than a vague bundled package price. Confirm exactly what the warranty covers and who is responsible for honoring it. Make sure the contractor physically inspects your crawl space before quoting, and ask whether they are diagnosing and addressing the actual moisture or water source rather than simply selling encapsulation over an existing, unresolved problem.
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
              <strong>Short answer:</strong> Licensing, an in-person inspection, a written itemized estimate, and clear warranty terms are the four things worth confirming before you sign anything.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist */}
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
            The Checklist
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
            A 7-Step Contractor Vetting Checklist
          </h2>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Work through these steps before you sign anything. They take an extra day or two up front, but they are the difference between hiring someone who solves the actual problem and someone who sells you a product.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20, maxWidth: 760 }}>
            {checklistSteps.map((item, i) => (
              <div
                key={item.name}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: '20px 22px',
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    flex: 'none',
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    background: 'rgba(245,166,35,.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    font: "800 14px 'Barlow Condensed',sans-serif",
                    color: '#F5A623',
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
                      color: '#fff',
                      margin: '0 0 8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <Check size={16} />
                    {item.name}
                  </h3>
                  <p style={{ fontSize: 15, color: '#D1D5DB', margin: 0, lineHeight: 1.6 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags */}
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
            Watch For This
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
            Red Flags to Watch For
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            These are common warning signs that a contractor may be more focused on closing a sale than diagnosing and fixing the actual problem under your home.
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
                title: 'High-Pressure, Same-Day-Only Discounts',
                body: 'Legitimate pricing does not usually expire at the end of the visit. Pressure to sign the same day to "lock in" a discount is a common closing tactic, not a real deadline.',
              },
              {
                title: 'Verbal-Only Warranty Promises',
                body: 'If warranty terms are described only out loud and are not spelled out in the written estimate or contract, they are difficult to enforce later.',
              },
              {
                title: 'Encapsulation Quoted Without Inspecting for Water',
                body: 'If a company proposes full encapsulation without checking for standing water, grading issues, or a moisture source, they may be selling a product rather than solving your specific problem.',
              },
              {
                title: 'Refusal to Provide a Written, Itemized Estimate',
                body: 'A company unwilling to put a detailed estimate in writing makes it difficult to compare quotes or hold them accountable to what was promised.',
              },
              {
                title: 'No Verifiable Local Address or Licensing Info',
                body: 'A company that cannot provide a real local address or licensing details is harder to hold accountable if something goes wrong after the job is done.',
              },
              {
                title: 'Quotes Given Entirely Over the Phone',
                body: 'Crawl space conditions vary too much to price accurately without seeing them. A phone-only quote skips the step that matters most.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: 20,
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                }}
              >
                <XMark size={18} />
                <div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 800,
                      fontSize: 18,
                      textTransform: 'uppercase' as const,
                      color: '#1B3A6B',
                      margin: '0 0 8px',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 15, color: '#4b5563', margin: 0, lineHeight: 1.6 }}>{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions to Ask */}
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
            During the Inspection
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
            Questions to Ask During the Inspection
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, maxWidth: 700, marginBottom: 24 }}>
            {[
              'What is actually causing the moisture or problem, not just what fix are you proposing to sell me?',
              'What specific materials will be used — vapor barrier mil thickness, drainage components, dehumidifier brand and capacity?',
              'What does the warranty cover if something fails in 5 years, and does it cover materials, labor, or both?',
              'Who do I call if there is an issue after the work is done, and is that the same company that did the install?',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <Check size={18} color="#F5A623" />
                <span style={{ fontSize: 16, color: '#D1D5DB', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#9CA3AF', fontStyle: 'italic', margin: 0, lineHeight: 1.6, maxWidth: 700 }}>
            A contractor who answers these questions clearly and specifically, without hesitation, is a good sign. Vague or evasive answers are worth taking seriously before you sign anything.
          </p>
        </div>
      </section>

      {/* Why It Matters More */}
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
            Why It Matters
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
            Why This Matters More for Crawl Spaces Than Other Home Repairs
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 20px', maxWidth: 760 }}>
            If a contractor does a poor job painting a room or installing a fence, you can see it right away and call them back. Crawl space work is different. Once a vapor barrier is installed and the crawl space is sealed up, you cannot easily look underneath it to verify the drainage was installed correctly, the vapor barrier is properly seamed, or the moisture source was actually addressed — not without cutting it open.
          </p>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: 0, maxWidth: 760 }}>
            That means the diagnosis and workmanship have to be right the first time, and that you are largely trusting the contractor's judgment and integrity going in. It's exactly why the vetting steps above — licensing, a real inspection, a written estimate, and clear warranty terms — matter more here than they would for a repair you could simply look at again later.
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
            Contractor Vetting FAQ
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
              Get a Free, No-Pressure Crawl Space Estimate
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
