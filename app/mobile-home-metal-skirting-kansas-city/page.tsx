import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Metal Skirting Replacement Kansas City | Vinyl-to-Metal Upgrade' },
  description: 'Cracked or warped vinyl skirting? Replace it with durable steel or aluminum skirting backed by a lifetime warranty. Free estimate in Kansas City.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/mobile-home-metal-skirting-kansas-city/',
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
    question: 'Why replace vinyl skirting with metal?',
    answer:
      "Vinyl cracks, warps, and fades over time — especially through KC's hot summers and cold winters. Steel and aluminum skirting hold their shape in extreme temperatures, resist pests, and don't become brittle with age the way vinyl does. It costs more upfront, but it's a one-time replacement rather than a recurring one.",
  },
  {
    question: 'Will metal skirting rust?',
    answer:
      'Quality galvanized steel and aluminum panels are built to resist rust and corrosion, and most come with a manufacturer finish warranty of 20-40 years against fading and corrosion. We install products backed by strong manufacturer warranties, and back our own installation with a lifetime workmanship warranty on top of that.',
  },
  {
    question: 'What does a lifetime warranty actually cover?',
    answer:
      "Our lifetime transferable warranty covers our workmanship — if the installation fails, we come back and fix it at no charge, for as long as you or a future owner owns the home. That's on top of whatever finish/material warranty the panel manufacturer provides. Most competitors only mention the manufacturer's limited-year warranty; we back the install itself for life.",
  },
  {
    question: 'How much does metal skirting cost compared to vinyl?',
    answer:
      'Metal panels run more than vinyl upfront — expect $1-4 per square foot in material versus vinyl\'s lower cost per panel — but metal typically lasts decades longer without cracking, warping, or needing replacement. For many homeowners replacing failed vinyl for the second or third time, metal ends up being the better long-term value.',
  },
  {
    question: 'Do I need to remove all the old vinyl first?',
    answer:
      'Yes — we remove the damaged or failing vinyl skirting completely before installing new steel or aluminum panels, so the new skirting sits flush and properly secured rather than being installed over old, uneven material.',
  },
  {
    question: 'How long does a metal skirting replacement take?',
    answer: 'Most single-wide and double-wide homes are completed in a single day, depending on perimeter length and site access.',
  },
];

export default function MobileHomeMetalSkirtingPage() {
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
                  { '@type': 'ListItem', position: 3, name: 'Metal Skirting Replacement Kansas City', item: 'https://www.crawlspacekc.com/mobile-home-metal-skirting-kansas-city/' },
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
                name: 'Vinyl-to-Metal Skirting Replacement',
                serviceType: 'Manufactured Home Metal Skirting Installation',
                provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
                areaServed: { '@type': 'AdministrativeArea', name: 'Kansas City Metro' },
                description:
                  'Removal of cracked or failing vinyl skirting and replacement with durable steel or aluminum skirting, backed by a lifetime workmanship warranty.',
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
            Vinyl-to-Metal Upgrade
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(36px,7vw,64px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
            Metal Skirting Replacement <span style={{ color: '#F5A623' }}>in Kansas City</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: '#9CA3AF', margin: '0 0 32px', maxWidth: 680, lineHeight: 1.7 }}>
            Cracked, warped, or faded vinyl skirting? We remove it and replace it with durable steel or aluminum skirting built for KC winters — backed by a lifetime workmanship warranty, not just a limited-year manufacturer warranty.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
            <Link href="/contact" style={{ background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif", padding: '16px 26px', borderRadius: 10, boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)', textDecoration: 'none', display: 'inline-block' }}>
              Get a Free Estimate
            </Link>
            <a href={PHONE_HREF} style={{ background: 'transparent', color: '#fff', font: "700 16px 'Inter',sans-serif", padding: '16px 26px', borderRadius: 10, border: '2px solid rgba(255,255,255,.25)', textDecoration: 'none', display: 'inline-block' }}>
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Quick Answer / Warning Signs */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 20px' }}>
            Signs It's Time to Replace Vinyl With Metal
          </h2>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.75, margin: '0 0 32px', maxWidth: 760 }}>
            Vinyl skirting is affordable up front, but it doesn't hold up forever — especially through KC's hot summers and cold winters. Once it starts cracking or warping, it usually needs to be replaced again within a few years. Metal is a one-time upgrade.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 12 }}>
            {[
              'Cracked, brittle, or warped panels',
              'Faded or discolored vinyl',
              'Panels popping out of track in high wind',
              'Storm or impact damage',
              'Pests getting in through gaps or cracks',
              'Already replaced vinyl once or twice before',
            ].map((sign) => (
              <div key={sign} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10, padding: '14px 16px' }}>
                <XMark size={16} />
                <span style={{ fontSize: 15, color: '#374151', lineHeight: 1.5 }}>{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vinyl vs Metal */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 12px' }}>
            The Comparison
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 32px' }}>
            Vinyl vs. Metal Skirting
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
            <div style={{ background: '#111827', borderRadius: 12, padding: 24, border: '1px solid rgba(255,255,255,.08)' }}>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 20, textTransform: 'uppercase' as const, color: '#9CA3AF', margin: '0 0 10px' }}>Vinyl</h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.7, margin: 0 }}>Lower upfront cost, wide color selection. Cracks, warps, and fades with age and temperature swings — often needs replacing every several years.</p>
            </div>
            <div style={{ background: '#111827', borderRadius: 12, padding: 24, border: '1.5px solid #F5A623' }}>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 20, textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 10px' }}>Metal (Steel/Aluminum)</h3>
              <p style={{ fontSize: 15, color: '#E2E8F0', lineHeight: 1.7, margin: 0 }}>Higher upfront cost, but resists cracking, warping, and pests. Holds up through KC winters and summers without losing shape. A one-time investment instead of a recurring one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 12px' }}>
            Backed for Life
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px' }}>
            Lifetime Warranty on the Install
          </h2>
          <p style={{ fontSize: 16, color: '#CBD5E1', lineHeight: 1.75, margin: '0 0 24px', maxWidth: 760 }}>
            Most companies only point you to the panel manufacturer's limited-year finish warranty. We go further — our own installation is backed by a lifetime transferable warranty. If it fails because of how we installed it, we come back and fix it at no charge, for as long as you or a future owner owns the home.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Old, damaged vinyl fully removed before install',
              'Steel or aluminum panels installed flush and properly secured',
              'Lifetime transferable warranty on our workmanship',
            ].map((spec) => (
              <div key={spec} style={{ background: 'rgba(255,255,255,.07)', borderRadius: 10, padding: '16px 20px', display: 'flex', gap: 12, alignItems: 'center', border: '1px solid rgba(255,255,255,.12)' }}>
                <Check size={16} color="#F5A623" />
                <span style={{ fontSize: 15, color: '#E2E8F0', lineHeight: 1.5 }}>{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 28px' }}>
            Metal Skirting Replacement Cost in Kansas City
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 14, marginBottom: 28 }}>
            {[
              { label: 'Metal panel material', range: '$1–$4 / sq ft', note: 'Galvanized steel to premium aluminum' },
              { label: 'Professional installation', range: '$200–$800+', note: 'Depends on home size & perimeter' },
              { label: 'Old vinyl removal', range: 'Included', note: 'Full removal before new install' },
            ].map((item) => (
              <div key={item.label} style={{ background: '#0D0D0D', borderRadius: 12, padding: 20, border: '1px solid rgba(255,255,255,.07)' }}>
                <p style={{ fontSize: 13, color: '#6B7280', margin: '0 0 6px', textTransform: 'uppercase' as const, letterSpacing: '.08em', fontWeight: 600 }}>{item.label}</p>
                <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 22, color: '#F5A623', margin: '0 0 4px' }}>{item.range}</p>
                <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>{item.note}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.7, margin: 0 }}>
            Final cost depends on home perimeter, panel grade, and site access. Written quotes provided at inspection — we never quote sight unseen.
          </p>
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
              { label: 'Standard & Insulated Vinyl Skirting', href: '/mobile-home-skirting-kansas-city/' },
              { label: 'Underbelly Repair', href: '/mobile-home-underbelly-repair-kansas-city/' },
              { label: 'Ductwork Repair & Replacement', href: '/mobile-home-ductwork-repair-kansas-city/' },
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
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 32px' }}>Metal Skirting FAQ</h2>
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
              Get a Free Metal Skirting Estimate
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', margin: 0 }}>No obligation. Same-week appointments available in Kansas City.</p>
          </div>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
