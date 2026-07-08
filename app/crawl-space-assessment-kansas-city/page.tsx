import type { Metadata } from 'next';
import Link from 'next/link';
import AssessmentForm from '@/components/AssessmentForm';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Assessment Kansas City | KC Crawl Space Specialists' },
  description:
    'Get an honest professional crawlspace assessment from $97 — virtual or in-person. Written game plan, moisture readings, no sales pressure. KC’s only crawlspace-only specialist.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/crawl-space-assessment-kansas-city/',
  },
};

const faqItems = [
  {
    q: 'What’s the difference between virtual and in-person?',
    a: 'Virtual means you submit your own photos and measurements, and Jason reviews everything remotely. In-person means Jason comes to your property and does the inspection himself. In-person costs $197 but is credited toward any installation job booked within 90 days.',
  },
  {
    q: 'What if I don’t have a moisture meter?',
    a: 'No problem — Jason will include a link to an inexpensive one ($15–25 on Amazon) with your invoice. You’ll want one on hand before submitting your photos.',
  },
  {
    q: 'How long does the virtual photo submission take?',
    a: 'About 30 minutes. Jason sends a photo guide with your invoice showing exactly what shots to capture.',
  },
  {
    q: 'What if the game plan says I need a professional?',
    a: 'Jason will tell you honestly, and explain exactly why and what scope is needed — so you can evaluate any quotes you get. KC Crawl Space Specialists is available for the job if you’d like, with no pressure either way.',
  },
  {
    q: 'Do you serve the whole KC metro?',
    a: 'Virtual assessments cover the full metro and honestly anywhere in the US. In-person assessments cover both the Missouri and Kansas sides within about 40 miles of Kansas City.',
  },
  {
    q: 'How do I pay?',
    a: 'After you submit the form below, Jason sends you a secure invoice link by email. You pay online — it takes about 2 minutes.',
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
    n: '2', title: 'Jason Sends An Invoice',
    body: 'Pay securely via the invoice link sent to your email. Virtual: then submit your photos. In-person: Jason schedules your visit.',
  },
  {
    n: '3', title: 'Receive Your Game Plan',
    body: 'Get your written assessment and game plan within 48 hours (virtual) or 24 hours (in-person).',
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
                    name: 'Crawl Space Assessment',
                    item: 'https://www.crawlspacekc.com/crawl-space-assessment-kansas-city/',
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
            Crawl Space Assessments
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(36px,7vw,64px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
            Know What&apos;s Under Your Home <span style={{ color: '#F5A623' }}>Before You Spend A Dime</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.3vw,19px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '52ch', margin: '0 auto 32px' }}>
            Get Jason’s professional eyes on your crawlspace — virtually or in person — for a fraction of what a full contractor visit costs.
            Honest assessment. Clear game plan. Zero sales pressure.
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
            See Assessment Options ↓
          </Link>
        </div>
      </section>

      {/* Service Cards */}
      <section style={{ background: '#111827', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 28 }}>
          <div style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 32 }}>
            <div style={{ font: "800 13px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase' as const, color: '#F5A623', marginBottom: 10 }}>
              Virtual Assessment
            </div>
            <div style={{ font: "800 40px 'Barlow Condensed',sans-serif", color: '#fff', marginBottom: 18 }}>$97</div>
            <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.6, marginBottom: 18 }}>
              You submit photos, measurements, and moisture readings. Jason reviews everything and sends back:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
              {[
                'Written condition assessment',
                'Step-by-step game plan for your specific space',
                'Complete materials list with quantities',
                'Honest opinion — do you need a contractor or not?',
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
              Delivered within 48 hours of photo submission. Perfect for DIYers and homeowners who want a second opinion before hiring anyone.
            </p>
            <Link
              href="#assessment-form"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5A623', color: '#0D0D0D', font: "800 15px 'Inter',sans-serif", textDecoration: 'none', padding: '14px 20px', borderRadius: 10, minHeight: 50 }}
            >
              Book Virtual Assessment — $97
            </Link>
          </div>

          <div style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 32 }}>
            <div style={{ font: "800 13px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase' as const, color: '#F5A623', marginBottom: 10 }}>
              In-Person Assessment
            </div>
            <div style={{ font: "800 40px 'Barlow Condensed',sans-serif", color: '#fff', marginBottom: 18 }}>$197</div>
            <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.6, marginBottom: 18 }}>
              Jason comes to your KC property, goes under your home, documents everything, and delivers:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
              {[
                'Professional in-person inspection',
                'Moisture readings at 6+ locations',
                'Photo documentation of all conditions',
                'Written game plan same day or within 24 hours',
                '$197 credited toward full installation*',
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
              Most appointments scheduled within 3 days of booking.
              <br />
              *Credit applies to KC Crawl Space Specialists installation jobs booked within 90 days.
            </p>
            <Link
              href="#assessment-form"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5A623', color: '#0D0D0D', font: "800 15px 'Inter',sans-serif", textDecoration: 'none', padding: '14px 20px', borderRadius: 10, minHeight: 50 }}
            >
              Book In-Person Assessment — $197
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
            Book Your Crawlspace Assessment
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
            Assessment FAQ
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
            Stop Guessing. Start Knowing.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: '#1B3A6B', margin: '0 0 28px' }}>
            For less than most contractor inspection fees, you&apos;ll know exactly what&apos;s under your home — and exactly what to do about it.
          </p>
          <Link
            href="#assessment-form"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#1B3A6B', color: '#fff', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 28px', borderRadius: 10, minHeight: 54, marginBottom: 18 }}
          >
            Book Your Assessment ↓
          </Link>
          <p style={{ fontSize: 15, color: '#1B3A6B', margin: 0 }}>
            Or text Jason directly: <a href={PHONE_HREF} style={{ color: '#1B3A6B', fontWeight: 800 }}>{PHONE}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
