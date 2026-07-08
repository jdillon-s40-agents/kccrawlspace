import type { Metadata } from 'next';
import Link from 'next/link';
import AssessmentForm from '@/components/AssessmentForm';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'DIY Crawl Space Game Plan Kansas City | KC Crawl Space Specialists' },
  description:
    'Get a step-by-step DIY crawlspace plan from $97 — exact products, quantities, and install instructions for your specific space. Virtual or in-person. Fix it yourself, done right.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/diy-crawl-space-kansas-city/',
  },
};

const faqItems = [
  {
    q: 'What’s the difference between virtual and in-person?',
    a: 'Virtual means you submit your own photos and measurements, and Jason reviews everything remotely. In-person means Jason comes to your property and does the inspection himself. In-person costs $197 but is credited toward any installation job booked within 90 days.',
  },
  {
    q: 'What if I don’t have a moisture meter?',
    a: 'No problem — Jason will point you to an inexpensive one ($15–25 on Amazon) when he reaches out to go over your details. You’ll want one on hand before submitting your photos.',
  },
  {
    q: 'How long does the virtual photo submission take?',
    a: 'About 30 minutes. Jason will walk you through exactly what shots and measurements to send when he calls to go over your details.',
  },
  {
    q: 'What’s actually in the game plan?',
    a: 'A written condition assessment, a step-by-step install sequence for your specific crawlspace (vapor barrier, sealing, insulation, drainage — whatever applies), an exact materials list with quantities, and links to where to buy everything. It’s written so a reasonably handy homeowner can follow it start to finish.',
  },
  {
    q: 'Do I need construction experience to follow the plan?',
    a: 'No special license or trade experience is required — this is written for homeowners. If you’re comfortable with basic DIY projects (and can get in and out of a crawlspace), you can follow the plan. If a section of your job calls for a licensed trade — like electrical near a sump pump — the plan will flag that clearly.',
  },
  {
    q: 'What if the game plan says I need a professional?',
    a: 'Jason will tell you honestly, and explain exactly why and what scope is needed — so you can evaluate any quotes you get, or decide which parts to DIY and which to hire out. KC Crawl Space Specialists is available for the job if you’d like, with no pressure either way.',
  },
  {
    q: 'Do you serve the whole KC metro?',
    a: 'Virtual assessments cover the full metro and honestly anywhere in the US. In-person assessments cover both the Missouri and Kansas sides within about 40 miles of Kansas City.',
  },
  {
    q: 'How do I pay?',
    a: 'No need to worry about that up front. Once Jason’s talked with you and your assessment is on the schedule, he’ll send a simple invoice you can pay online in a couple minutes.',
  },
  {
    q: 'What if I’m not satisfied with my game plan?',
    a: 'Text Jason at 816-962-2111. He stands behind his work and will make it right.',
  },
];

const steps = [
  {
    n: '1', title: 'Fill Out The Form',
    body: 'Takes 5 minutes. Tell us about your crawlspace and what you’re experiencing.',
  },
  {
    n: '2', title: 'Jason Reaches Out',
    body: 'He calls or texts to go over the details and get your assessment scheduled — virtual or in-person, whatever works for you.',
  },
  {
    n: '3', title: 'Receive Your DIY Game Plan',
    body: 'Once everything’s set, you get a written plan telling you exactly what to buy and how to install it — built for your specific crawlspace.',
  },
];

export default function CrawlSpaceAssessmentPage() {
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
                    name: 'DIY Crawl Space Game Plan',
                    item: 'https://www.crawlspacekc.com/diy-crawl-space-kansas-city/',
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
                  'Kansas City MO', 'Kansas City KS', "Lee's Summit MO", 'Overland Park KS',
                  'Olathe KS', 'Blue Springs MO', 'Independence MO', 'Shawnee KS', 'Lenexa KS', 'Liberty MO',
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
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 16px' }}>
            DIY Crawlspace Game Plans
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(36px,7vw,64px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
            We&apos;ll Show You <span style={{ color: '#F5A623' }}>Exactly How To Fix It Yourself</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.3vw,19px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '52ch', margin: '0 auto 32px' }}>
            Skip the guesswork and the contractor markup. Jason evaluates your specific crawlspace and hands you a step-by-step plan —
            what to buy, how much, and exactly how to install it — whether you go virtual or in person.
          </p>
          <Link
            href="#assessment-form"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9,
              background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif",
              textDecoration: 'none', padding: '16px 28px', borderRadius: 10, minHeight: 54,
              boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)',
            }}
          >
            Get My DIY Game Plan ↓
          </Link>
          <div style={{ marginTop: 18 }}>
            <Link
              href="/diy-crawl-space-kansas-city/sample-plan/"
              style={{ color: '#9CA3AF', font: "700 14px 'Inter',sans-serif", textDecoration: 'underline', textUnderlineOffset: 4 }}
            >
              See a real sample game plan first →
            </Link>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section style={{ background: '#111827', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 28 }}>
          <div style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 32 }}>
            <div style={{ font: "800 13px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase' as const, color: '#F5A623', marginBottom: 10 }}>
              Virtual DIY Game Plan
            </div>
            <div style={{ font: "800 40px 'Barlow Condensed',sans-serif", color: '#fff', marginBottom: 18 }}>$97</div>
            <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.6, marginBottom: 18 }}>
              You submit photos, measurements, and moisture readings. Jason evaluates your crawlspace and builds you a plan to do it yourself:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
              {[
                'Written evaluation of your crawlspace conditions',
                'Step-by-step DIY install instructions for your specific space',
                'Exact materials list with quantities and where to buy them',
                'Honest call on what you can DIY vs. when to hire it out',
              ].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 9, fontSize: 14.5, color: '#e5e7eb' }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 20 }}>
              Delivered within 48 hours of photo submission. Built for homeowners who want to do the work themselves — or at least know exactly what needs to happen.
            </p>
            <Link
              href="#assessment-form"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5A623', color: '#0D0D0D', font: "800 15px 'Inter',sans-serif", textDecoration: 'none', padding: '14px 20px', borderRadius: 10, minHeight: 50 }}
            >
              Get My Virtual DIY Plan — $97
            </Link>
          </div>

          <div style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 32 }}>
            <div style={{ font: "800 13px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase' as const, color: '#F5A623', marginBottom: 10 }}>
              In-Person DIY Game Plan
            </div>
            <div style={{ font: "800 40px 'Barlow Condensed',sans-serif", color: '#fff', marginBottom: 18 }}>$197</div>
            <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.6, marginBottom: 18 }}>
              Jason comes to your KC property, goes under your home, documents everything, and builds you a plan based on what he actually finds:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
              {[
                'Professional in-person inspection with moisture readings at 6+ locations',
                'Photo documentation of all conditions',
                'Step-by-step DIY install plan built on what he finds under your home',
                'Exact materials list with quantities and sourcing links',
                '$197 credited toward full installation if you’d rather we do it*',
              ].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 9, fontSize: 14.5, color: '#e5e7eb' }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 20 }}>
              Most appointments scheduled within 3 days of booking. For homeowners who want eyes-on accuracy before committing to a DIY project.
              <br />
              *Credit applies to KC Crawl Space Specialists installation jobs booked within 90 days.
            </p>
            <Link
              href="#assessment-form"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5A623', color: '#0D0D0D', font: "800 15px 'Inter',sans-serif", textDecoration: 'none', padding: '14px 20px', borderRadius: 10, minHeight: 50 }}
            >
              Get My In-Person DIY Plan — $197
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,44px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 40px' }}>
            Simple Process — No Runaround
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 28, textAlign: 'left' as const }}>
            {steps.map((s) => (
              <div key={s.n}>
                <div style={{ font: "800 34px 'Barlow Condensed',sans-serif", color: '#F5A623', marginBottom: 8 }}>{s.n}</div>
                <div style={{ font: "800 15px 'Inter',sans-serif", letterSpacing: '.04em', textTransform: 'uppercase' as const, color: '#fff', marginBottom: 8 }}>{s.title}</div>
                <p style={{ fontSize: 14.5, color: '#9CA3AF', lineHeight: 1.6, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="assessment-form" style={{ background: '#111827', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,44px)', textTransform: 'uppercase' as const, color: '#fff', textAlign: 'center' as const, margin: '0 0 32px' }}>
            Get Your DIY Crawlspace Game Plan
          </h2>
          <AssessmentForm />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 16px', textAlign: 'center' as const }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,44px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 36px', textAlign: 'center' as const }}>
            DIY Game Plan FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {faqItems.map((item) => (
              <div key={item.q} style={{ background: '#111827', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: '22px 24px' }}>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 19, textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 10px' }}>
                  {item.q}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#F5A623', padding: 'clamp(52px,8vw,80px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,44px)', textTransform: 'uppercase' as const, color: '#1B3A6B', margin: '0 0 16px' }}>
            Stop Wondering. Start Fixing It Yourself.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: '#1B3A6B', margin: '0 0 28px' }}>
            For less than most contractor inspection fees, you&apos;ll have a step-by-step plan telling you exactly what to buy and exactly how to install it.
          </p>
          <Link
            href="#assessment-form"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#1B3A6B', color: '#fff', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 28px', borderRadius: 10, minHeight: 54, marginBottom: 18 }}
          >
            Get My DIY Game Plan ↓
          </Link>
          <p style={{ fontSize: 15, color: '#1B3A6B', margin: 0 }}>
            Or text Jason directly: <a href={PHONE_HREF} style={{ color: '#1B3A6B', fontWeight: 800 }}>{PHONE}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
