import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'DIY vs. Professional Crawl Space Encapsulation | Kansas City Comparison' },
  description:
    'DIY crawl space encapsulation runs $1,200-$3,000 in materials vs. $5,000-$20,000 professionally installed in Kansas City. See the real cost, time, and risk comparison.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/diy-vs-professional-crawl-space-encapsulation/',
  },
};

const faqItems = [
  {
    q: 'Is DIY crawl space encapsulation actually cheaper?',
    a: 'On materials alone, yes — often by thousands of dollars. But you\'re trading that savings for your own time (40+ hours is typical for a full encapsulation), physical effort in a tight, uncomfortable space, and the risk of missing something a trained eye would catch.',
  },
  {
    q: 'What can go wrong with a DIY encapsulation?',
    a: 'The most common mistakes are sealing vents before addressing moisture (trapping humidity instead of removing it), under-sizing or skipping a dehumidifier, missing hidden mold or a moisture source, and unsealed seams that let vapor barriers fail early. None of these are visible until months later.',
  },
  {
    q: 'Can I do part of the job myself and hire out the rest?',
    a: 'Yes, and it\'s common. Many homeowners DIY the vapor barrier and vent sealing themselves and hire out anything requiring a licensed trade — like electrical work near a dehumidifier circuit, or structural repairs for sagging joists.',
  },
  {
    q: 'How do I know which option is right for my crawlspace?',
    a: 'It depends on your crawlspace\'s size, access, current moisture level, and whether there\'s already damage. A quick evaluation is the fastest way to find out — either from a paid DIY assessment or a free professional inspection, depending on which direction you\'re leaning.',
  },
];

const otherGuides = [
  { title: 'DIY Encapsulation Cost Breakdown', href: '/diy-crawl-space-encapsulation-cost/' },
  { title: 'DIY Vapor Barrier Cost', href: '/diy-crawl-space-vapor-barrier-kansas-city/' },
  { title: 'Tools & Materials You Need', href: '/diy-crawl-space-encapsulation-tools-and-materials/' },
  { title: 'DIY Mold Treatment', href: '/diy-crawl-space-mold-treatment-kansas-city/' },
  { title: 'DIY Vent Sealing', href: '/diy-crawl-space-vent-sealing-kansas-city/' },
  { title: 'DIY Dehumidifier Installation', href: '/diy-crawl-space-dehumidifier-installation-kansas-city/' },
];

function XMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function DiyVsProfessionalPage() {
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
                  { '@type': 'ListItem', position: 2, name: 'DIY vs. Professional Encapsulation', item: 'https://www.crawlspacekc.com/diy-vs-professional-crawl-space-encapsulation/' },
                ],
              },
              {
                '@type': 'LocalBusiness',
                name: 'KC Crawl Space Specialists LLC',
                url: 'https://www.crawlspacekc.com',
                telephone: '+18169622111',
                priceRange: '$$-$$$$',
                address: { '@type': 'PostalAddress', addressLocality: 'Kansas City', addressRegion: 'MO', addressCountry: 'US' },
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 16px' }}>
            The Real Decision
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(34px,6.5vw,58px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
            DIY vs. Professional <span style={{ color: '#F5A623' }}>Crawl Space Encapsulation</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '62ch', margin: 0 }}>
            Neither option is automatically right. Here&apos;s an honest, side-by-side look at cost, time, and risk —
            from a company that offers both.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ overflowX: 'auto' as const }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 14.5, minWidth: 560 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left' as const, padding: '12px 14px', color: '#6b7280', fontWeight: 700, fontSize: 12, textTransform: 'uppercase' as const, letterSpacing: '.04em' }} />
                  <th style={{ textAlign: 'left' as const, padding: '12px 14px', background: '#0D0D0D', color: '#4ADE80', fontWeight: 800, borderRadius: '10px 10px 0 0' }}>DIY</th>
                  <th style={{ textAlign: 'left' as const, padding: '12px 14px', background: '#1B3A6B', color: '#F5A623', fontWeight: 800, borderRadius: '10px 10px 0 0' }}>Professional</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Materials cost', '$1,200–$3,000', '$5,000–$20,000 total'],
                  ['Your time required', '40+ hours', '1–3 days (crew handles it)'],
                  ['Warranty', 'None, unless purchased separately', 'Lifetime transferable warranty'],
                  ['Physical demand', 'High — tight, low crawlspace work', 'None on you'],
                  ['Risk of mistakes', 'Real — improper sealing traps moisture', 'Low — done by trained crew'],
                  ['Best for', 'Handy homeowners, decent access, budget-conscious', 'Severe moisture, mold, tight timelines, resale prep'],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td style={{ padding: '12px 14px', fontWeight: 700, color: '#111827', background: '#fff', borderBottom: '1px solid #E5E7EB' }}>{row[0]}</td>
                    <td style={{ padding: '12px 14px', color: '#374151', background: '#fff', borderBottom: '1px solid #E5E7EB' }}>{row[1]}</td>
                    <td style={{ padding: '12px 14px', color: '#374151', background: '#fff', borderBottom: '1px solid #E5E7EB' }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When each makes sense */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
          <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 24, textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 16px' }}>DIY Makes Sense When...</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
              {[
                'Your crawlspace has decent clearance to work in',
                'Moisture is moderate, not severe standing water',
                'You\'re comfortable with basic DIY projects',
                'Budget matters more than your weekend',
              ].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: '#e5e7eb' }}><Check />{t}</li>
              ))}
            </ul>
          </div>
          <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 24, textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 16px' }}>Hire a Pro When...</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
              {[
                'There\'s standing water or active structural damage',
                'Mold covers a large area (10+ sq ft per EPA guidance)',
                'You\'re preparing to sell and need a documented warranty',
                'Access is very tight or physically difficult for you',
              ].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: '#e5e7eb' }}><XMark />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F5A623', padding: 'clamp(48px,7vw,72px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,40px)', textTransform: 'uppercase' as const, color: '#1B3A6B', margin: '0 0 14px' }}>
            Not Sure Which Fits Your Crawlspace?
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#1B3A6B', margin: '0 0 24px' }}>
            Get an honest evaluation first — Jason will tell you straight whether DIY is realistic for your specific space,
            or whether hiring out makes more sense.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link
              href="/diy-crawl-space-kansas-city/#assessment-form"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#1B3A6B', color: '#fff', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '15px 26px', borderRadius: 10, minHeight: 52 }}
            >
              Get My DIY Game Plan ↓
            </Link>
            <Link
              href="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: 'transparent', border: '1.5px solid #1B3A6B', color: '#1B3A6B', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '15px 26px', borderRadius: 10, minHeight: 52 }}
            >
              Book a Free Inspection Instead
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,44px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 28px', textAlign: 'center' as const }}>
            Common Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {faqItems.map((item) => (
              <div key={item.q} style={{ background: '#111827', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: '22px 24px' }}>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 19, textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 10px' }}>{item.q}</h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', margin: 0, lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More guides */}
      <section style={{ background: '#111827', padding: 'clamp(52px,8vw,72px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(24px,4.5vw,36px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', textAlign: 'center' as const }}>
            More DIY Crawl Space Guides
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12 }}>
            {otherGuides.map((g) => (
              <Link key={g.href} href={g.href} style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, padding: '16px 18px', color: '#e5e7eb', textDecoration: 'none', fontSize: 14.5, fontWeight: 700 }}>
                {g.title} →
              </Link>
            ))}
          </div>
          <p style={{ textAlign: 'center' as const, marginTop: 20, fontSize: 14, color: '#9CA3AF' }}>
            Questions? Text Jason: <a href={PHONE_HREF} style={{ color: '#F5A623', fontWeight: 700, textDecoration: 'none' }}>{PHONE}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
