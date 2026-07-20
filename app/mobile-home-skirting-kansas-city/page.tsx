import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Mobile Home Skirting Kansas City | Insulated Skirting Installation' },
  description: 'Mobile home skirting installation and repair in Kansas City — standard and insulated options. Stop cold floors, frozen pipes, and pest entry. Free estimate.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/mobile-home-skirting-kansas-city/',
  }};

function Check({ color = '#16A34A', size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XMark({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const faqItems = [
  {
    question: 'What is the difference between standard and insulated mobile home skirting?',
    answer:
      'Standard skirting is a solid panel — usually vinyl — that closes off the space under the home from the outside. Insulated skirting adds a foam core inside that panel, which slows heat loss through the underbelly, protects plumbing from freezing, and reduces drafts coming up through the floor. It costs more upfront but pays back in lower winter heating bills.',
  },
  {
    question: 'How much does mobile home skirting cost in Kansas City?',
    answer:
      'Standard vinyl skirting typically runs $1,000–$2,500 for a single-wide and $2,000–$4,000 for a double-wide, installed. Insulated skirting adds roughly 20–40% on top of that. Exact cost depends on linear footage around the home, ground slope, and whether access doors or vents are added. Written quotes provided at inspection.',
  },
  {
    question: 'Can skirting be repaired instead of fully replaced?',
    answer:
      'Yes, if the damage is limited to a few panels — storm damage, a vehicle backing into it, or a section pests tore through. We assess during the free inspection whether a repair or full replacement makes more sense for your budget.',
  },
  {
    question: 'Does skirting need vents?',
    answer:
      'Yes, in most cases. Skirting needs some ventilation to prevent moisture buildup underneath the home, even when insulated. We size and place vents correctly so you get the energy benefit without trapping humidity.',
  },
  {
    question: 'Will new skirting stop my pipes from freezing?',
    answer:
      'Skirting alone helps by blocking wind, but insulated skirting paired with a repaired underbelly (belly board and insulation) is what actually protects plumbing through a Kansas City winter. If your pipes have frozen before, we recommend addressing both together.',
  },
  {
    question: 'How long does skirting installation take?',
    answer:
      'Most single-wide homes are done in a single day. Double-wides or homes needing belly repair alongside skirting may take 1–2 days.',
  },
];

export default function MobileHomeSkirtingPage() {
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
                  { '@type': 'ListItem', position: 2, name: 'Mobile Homes', item: 'https://www.crawlspacekc.com/mobile-homes/' },
                  { '@type': 'ListItem', position: 3, name: 'Mobile Home Skirting Kansas City', item: 'https://www.crawlspacekc.com/mobile-home-skirting-kansas-city/' },
                ],
              },
              {
                '@type': 'LocalBusiness',
                name: 'KC Crawl Space Specialists LLC',
                url: 'https://www.crawlspacekc.com',
                telephone: '+18169622111',
                priceRange: '$$-$$$$',
                address: { '@type': 'PostalAddress', addressLocality: 'Kansas City', addressRegion: 'MO', addressCountry: 'US' },
                areaServed: [
                  'Kansas City MO', 'Kansas City KS', "Lee's Summit MO", 'Overland Park KS', 'Olathe KS',
                  'Blue Springs MO', 'Independence MO', 'Shawnee KS', 'Lenexa KS', 'Liberty MO',
                ],
              },
              {
                '@type': 'Service',
                name: 'Mobile Home Skirting Installation',
                serviceType: 'Mobile Home Skirting & Insulated Skirting',
                provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
                areaServed: { '@type': 'AdministrativeArea', name: 'Kansas City Metro' },
                description:
                  'Standard and insulated mobile home skirting installation and repair in Kansas City. Stops cold floors, protects plumbing from freezing, and blocks pest entry.',
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 16px' }}>
            Mobile Home Skirting
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(36px,7vw,64px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
            Mobile Home Skirting <span style={{ color: '#F5A623' }}>&amp; Insulated Skirting</span> in Kansas City
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: '#9CA3AF', margin: '0 0 32px', maxWidth: 680, lineHeight: 1.7 }}>
            Damaged, missing, or non-insulated skirting is one of the fastest ways to lose heat, freeze pipes, and invite pests underneath your home. We install and repair both standard and insulated skirting across the KC metro.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/contact" style={{ background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif", padding: '16px 26px', borderRadius: 10, boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)', textDecoration: 'none', display: 'inline-block' }}>
              Get a Free Estimate
            </Link>
            <a href={PHONE_HREF} style={{ background: 'transparent', color: '#fff', font: "700 16px 'Inter',sans-serif", padding: '16px 26px', borderRadius: 10, border: '2px solid rgba(255,255,255,.25)', textDecoration: 'none', display: 'inline-block' }}>
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 20px' }}>
            When Does a Mobile Home Need New Skirting?
          </h2>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.75, margin: '0 0 32px', maxWidth: 760 }}>
            Skirting needs attention when panels are cracked, missing, or bowed out, when cold air is noticeably coming up through the floor, or when the current skirting has no insulation at all. Skirting is also the first thing worth upgrading if you&apos;re already having belly board or insulation repaired — doing both at once saves a second site visit.
          </p>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#1B3A6B', margin: '0 0 16px' }}>
            Warning Signs
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 12 }}>
            {[
              'Cracked, bowed, or missing panels',
              'Cold drafts along the floor near exterior walls',
              'Visible gaps at the ground line',
              'No insulation in the current skirting',
              'Pests getting in through damaged sections',
              'Frozen pipes in past winters',
            ].map((sign) => (
              <div key={sign} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10, padding: '14px 16px' }}>
                <XMark size={16} />
                <span style={{ fontSize: 15, color: '#374151', lineHeight: 1.5 }}>{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard vs Insulated */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 12px' }}>
            Choosing the Right Skirting
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 32px' }}>
            Standard vs. Insulated Skirting
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
            <div style={{ background: '#111827', borderRadius: 12, padding: 24, border: '1px solid rgba(255,255,255,.08)' }}>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 20, textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 10px' }}>Standard Skirting</h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 14px' }}>
                Solid vinyl or metal panels that close off the space beneath the home from view, wind, and pests. Lower upfront cost, no meaningful thermal benefit on its own.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Blocks pests and debris', 'Improves curb appeal', 'Lower material cost'].map((i) => (
                  <li key={i} style={{ display: 'flex', gap: 9, fontSize: 14, color: '#e5e7eb' }}><Check size={16} />{i}</li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#111827', borderRadius: 12, padding: 24, border: '2px solid #F5A623' }}>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 20, textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 10px' }}>Insulated Skirting</h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 14px' }}>
                Same solid panel, with a foam core that slows heat loss through the underbelly. Pairs with a repaired belly board and insulation for the biggest impact on winter heating bills.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Everything in Standard', 'Reduces floor drafts and heat loss', 'Protects plumbing from freezing', 'Lowers heating & cooling costs'].map((i) => (
                  <li key={i} style={{ display: 'flex', gap: 9, fontSize: 14, color: '#e5e7eb' }}><Check size={16} color="#F5A623" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 28px' }}>
            Mobile Home Skirting Cost in Kansas City
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 14, marginBottom: 28 }}>
            {[
              { label: 'Standard skirting, single-wide', range: '$1,000–$2,500', note: 'Installed, vinyl panels' },
              { label: 'Standard skirting, double-wide', range: '$2,000–$4,000', note: 'Installed, vinyl panels' },
              { label: 'Insulated skirting upgrade', range: '+20–40%', note: 'On top of standard pricing' },
              { label: 'Access door / vents', range: '$50–$85 / $7–$25 ea', note: 'Added as needed' },
            ].map((item) => (
              <div key={item.label} style={{ background: '#0D0D0D', borderRadius: 12, padding: 20, border: '1px solid rgba(255,255,255,.07)' }}>
                <p style={{ fontSize: 13, color: '#6B7280', margin: '0 0 6px', textTransform: 'uppercase' as const, letterSpacing: '.08em', fontWeight: 600 }}>{item.label}</p>
                <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 22, color: '#F5A623', margin: '0 0 4px' }}>{item.range}</p>
                <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>{item.note}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.7, margin: '0 0 16px' }}>
            Final cost depends on linear footage around the home, ground slope, and whether belly repair is needed alongside skirting. Written quotes provided at inspection.
          </p>
          <Link href="/mobile-homes/" style={{ color: '#1B3A6B', fontWeight: 700, fontSize: 15, textDecoration: 'underline' }}>
            See full underbelly repair pricing →
          </Link>
        </div>
      </section>

      {/* Financing */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <FinancingOptions />
        </div>
      </section>

      {/* Related Services */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#1B3A6B', margin: '0 0 12px' }}>Related Services</p>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(24px,4vw,36px)', textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 28px' }}>More Mobile Home Solutions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 14 }}>
            {[
              { label: 'Mobile Home Underbelly Repair', href: '/mobile-homes/' },
              { label: 'Ductwork Repair & Replacement', href: '/mobile-home-ductwork-repair-kansas-city/' },
              { label: 'Crawl Space Encapsulation', href: '/crawl-space-encapsulation-kansas-city/' },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ display: 'block', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10, padding: '18px 20px', color: '#1B3A6B', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 12px' }}>FAQ</p>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 32px' }}>Mobile Home Skirting FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqItems.map((item) => (
              <div key={item.question} style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: '22px 24px' }}>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 18, color: '#fff', margin: '0 0 8px' }}>{item.question}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: '#9CA3AF', margin: 0 }}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section style={{ background: '#111827', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(30px,6vw,50px)', textTransform: 'uppercase' as const, margin: '0 0 12px', color: '#fff' }}>
              Get a Free Skirting Estimate
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', margin: 0 }}>No obligation. Same-week appointments available in Kansas City.</p>
          </div>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
