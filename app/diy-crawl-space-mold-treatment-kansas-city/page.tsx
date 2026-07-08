import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'DIY Crawl Space Mold Treatment Kansas City | What Works' },
  description:
    'Can you treat crawl space mold yourself? For small areas, yes — with the right products. Here\'s what actually works, and when it\'s time to call a professional.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/diy-crawl-space-mold-treatment-kansas-city/',
  },
};

const faqItems = [
  {
    q: 'Can I remove crawl space mold myself?',
    a: 'For surface mold covering less than about 10 square feet, yes — a borate-based wood treatment like Boracare, or a vinegar/detergent solution for light staining, can handle it. Bleach is generally not recommended on wood; it doesn\'t penetrate and can make the surface look clean while mold survives underneath.',
  },
  {
    q: 'Why does mold keep coming back after I clean it?',
    a: 'Because cleaning treats the symptom, not the cause. Mold needs moisture to grow — if your crawlspace still has high humidity, standing water, or no vapor barrier, the conditions that grew the mold are still there and it will return.',
  },
  {
    q: 'When should I call a professional instead of treating it myself?',
    a: 'If mold covers more than roughly 10 square feet (the general EPA guideline), if you can\'t identify or fix the moisture source yourself, or if there\'s a musty smell with no visible mold (which can mean it\'s spread somewhere you can\'t see), it\'s worth getting a professional evaluation.',
  },
  {
    q: 'Is crawl space mold dangerous to my health?',
    a: 'Reactions vary by person, and we can\'t make medical claims. If household members have ongoing respiratory or allergy symptoms, it\'s worth talking to a doctor and having the crawlspace evaluated for the underlying moisture issue.',
  },
];

const otherGuides = [
  { title: 'DIY Vapor Barrier Cost', href: '/diy-crawl-space-vapor-barrier-kansas-city/' },
  { title: 'DIY vs. Professional Encapsulation', href: '/diy-vs-professional-crawl-space-encapsulation/' },
  { title: 'Tools & Materials You Need', href: '/diy-crawl-space-encapsulation-tools-and-materials/' },
  { title: 'DIY Vent Sealing', href: '/diy-crawl-space-vent-sealing-kansas-city/' },
  { title: 'DIY Dehumidifier Installation', href: '/diy-crawl-space-dehumidifier-installation-kansas-city/' },
];

export default function DiyMoldTreatmentPage() {
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
                  { '@type': 'ListItem', position: 2, name: 'DIY Crawl Space Mold Treatment', item: 'https://www.crawlspacekc.com/diy-crawl-space-mold-treatment-kansas-city/' },
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
            DIY Crawl Space Mold
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(34px,6.5vw,58px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
            DIY Crawl Space Mold Treatment <span style={{ color: '#F5A623' }}>— What Actually Works</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '62ch', margin: 0 }}>
            Small areas of surface mold can be treated yourself with the right products. Here&apos;s what works,
            what doesn&apos;t, and how to know when the moisture problem behind it needs more than a spray bottle.
          </p>
        </div>
      </section>

      {/* What works / what doesn't */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
          <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 22, textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 14px' }}>What Works — Under 10 Sq Ft</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 10, fontSize: 14.5, color: '#374151', lineHeight: 1.6 }}>
              <li>• Boracare or Tim-Bor (borate wood treatments) — penetrate wood and prevent regrowth</li>
              <li>• Diluted vinegar solution for light surface staining</li>
              <li>• HEPA-filter vacuum for loose spore removal before treatment</li>
              <li>• N95+ respirator, gloves, and goggles — always</li>
            </ul>
          </div>
          <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 22, textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 14px' }}>What Doesn&apos;t Work</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 10, fontSize: 14.5, color: '#374151', lineHeight: 1.6 }}>
              <li>• Bleach on wood — doesn&apos;t penetrate, often just bleaches the surface</li>
              <li>• Cleaning without fixing the moisture source — mold returns</li>
              <li>• Painting over mold — traps it, doesn&apos;t kill it</li>
              <li>• Treating anything over ~10 sq ft yourself (EPA guidance)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Root cause callout */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(48px,7vw,72px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(24px,4.5vw,36px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 14px' }}>
            Cleaning Isn&apos;t Fixing
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: '#9CA3AF', margin: 0 }}>
            Mold needs moisture to grow. If your crawlspace still has high humidity, damp soil, or no vapor barrier,
            treated mold will come back — usually within months. Vapor barrier, sealed vents, and dehumidification
            address the actual cause.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F5A623', padding: 'clamp(48px,7vw,72px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,40px)', textTransform: 'uppercase' as const, color: '#1B3A6B', margin: '0 0 14px' }}>
            Not Sure How Bad It Is?
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#1B3A6B', margin: '0 0 24px' }}>
            Get an honest evaluation of your crawlspace and a plan that addresses the moisture source, not just the mold on top of it.
          </p>
          <Link
            href="/diy-crawl-space-kansas-city/#assessment-form"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#1B3A6B', color: '#fff', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '15px 26px', borderRadius: 10, minHeight: 52 }}
          >
            Get My DIY Game Plan ↓
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,44px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 28px', textAlign: 'center' as const }}>
            Mold Treatment FAQ
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
