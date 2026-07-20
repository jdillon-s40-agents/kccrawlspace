import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Mobile Home Ductwork Repair Kansas City | Flex Duct Replacement' },
  description: 'Mobile home underbelly ductwork repair and replacement in Kansas City. Fix crushed, disconnected, or soaked flex duct while the belly is open. Free estimate.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/mobile-home-ductwork-repair-kansas-city/',
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
    question: 'Why does mobile home ductwork fail more than site-built homes?',
    answer:
      'Underbelly ductwork sits fully exposed under the home, held up against the subfloor. When the belly board sags or tears and insulation falls, the flex duct beneath it takes the weight, gets crushed, pulls apart at the joints, or sits in standing moisture. In a site-built home the ducts are usually protected inside a basement or attic — a mobile home has none of that protection.',
  },
  {
    question: 'How do I know if my ductwork needs repair?',
    answer:
      'Common signs: rooms that never get warm or cool no matter the thermostat setting, a noticeable temperature difference room to room, higher-than-normal energy bills, or a musty smell coming from vents (often means moisture is sitting in torn duct sections).',
  },
  {
    question: 'Can you repair just a section, or does it all need replacing?',
    answer:
      'It depends on the damage. A single crushed or disconnected section can often be cut out and repaired. If the duct has been sitting wet, crushed in multiple spots, or is original to an older home, full replacement is usually more cost-effective than patching section by section.',
  },
  {
    question: 'How much does mobile home ductwork replacement cost in Kansas City?',
    answer:
      'Full underbelly ductwork replacement typically runs $2,000–$6,000 depending on home length and duct configuration, or roughly $35–$55 per linear foot. Section repairs are priced individually and are usually far less. Since the underbelly needs to be open either way, we quote ductwork work alongside belly board and insulation repair whenever possible — it avoids paying for access twice.',
  },
  {
    question: 'Do you replace ductwork on its own, without belly repair?',
    answer:
      'Yes, if the belly board itself is still in good shape and only the duct underneath has failed. Most of the time, though, duct damage and belly damage happen together, so we assess both during the free inspection.',
  },
  {
    question: 'Will new ductwork actually lower my energy bills?',
    answer:
      'Yes — a crushed, disconnected, or wet duct run is one of the most direct causes of high heating and cooling bills in a manufactured home, since conditioned air is leaking out before it ever reaches the vent. Sealed, properly supported duct fixes that directly.',
  },
];

export default function MobileHomeDuctworkRepairPage() {
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
                  { '@type': 'ListItem', position: 3, name: 'Mobile Home Ductwork Repair Kansas City', item: 'https://www.crawlspacekc.com/mobile-home-ductwork-repair-kansas-city/' },
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
                name: 'Mobile Home Ductwork Repair & Replacement',
                serviceType: 'Manufactured Home Underbelly Ductwork',
                provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
                areaServed: { '@type': 'AdministrativeArea', name: 'Kansas City Metro' },
                description:
                  'Underbelly flex duct repair and full replacement for manufactured homes in Kansas City. Fixes crushed, disconnected, or moisture-damaged ductwork causing high energy bills and uneven heating.',
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
            Mobile Home Ductwork
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(36px,7vw,64px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
            Mobile Home Ductwork Repair <span style={{ color: '#F5A623' }}>&amp; Replacement</span> in Kansas City
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: '#9CA3AF', margin: '0 0 32px', maxWidth: 680, lineHeight: 1.7 }}>
            Crushed, disconnected, or waterlogged underbelly ductwork is one of the biggest hidden causes of high energy bills and rooms that never feel right. We repair or fully replace flex duct while your underbelly is already open.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
            <Link href="/contact" style={{ background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif", padding: '16px 26px', borderRadius: 10, boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)', textDecoration: 'none', display: 'inline-block' }}>
              Get a Free Estimate
            </Link>
            <a href={PHONE_HREF} style={{ background: 'transparent', color: '#fff', font: "700 16px 'Inter',sans-serif", padding: '16px 26px', borderRadius: 10, border: '2px solid rgba(255,255,255,.25)', textDecoration: 'none', display: 'inline-block' }}>
              {PHONE}
            </a>
          </div>
          <div style={{ border: '2px solid #F5A623', borderRadius: 10, padding: '14px 20px', maxWidth: 560, display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ fontSize: 20 }}>⚠</span>
            <p style={{ fontSize: 15, color: '#F5A623', fontWeight: 700, margin: 0 }}>
              Ductwork and belly damage almost always happen together — we assess both during the free inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 20px' }}>
            Signs Your Underbelly Ductwork Needs Repair
          </h2>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.75, margin: '0 0 32px', maxWidth: 760 }}>
            Underbelly ductwork sits fully exposed under the home, so it fails differently than ducts in a basement or attic. When the belly board above it sags or tears, the flex duct takes the weight — it gets crushed, pulled apart at the joints, or sits in standing moisture.
          </p>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#1B3A6B', margin: '0 0 16px' }}>
            Warning Signs
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 12 }}>
            {[
              'Rooms that never reach set temperature',
              'Big temperature difference room to room',
              'Rising energy bills with no other cause',
              'Musty smell coming from vents',
              'Weak or no airflow at certain vents',
              'Known belly board or insulation damage',
            ].map((sign) => (
              <div key={sign} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10, padding: '14px 16px' }}>
                <XMark size={16} />
                <span style={{ fontSize: 15, color: '#374151', lineHeight: 1.5 }}>{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair vs Replace */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 12px' }}>
            What We Assess
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 32px' }}>
            Section Repair vs. Full Replacement
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
            {[
              { title: 'Section Repair', body: 'One crushed joint, one disconnected run, one wet section — cut out and reconnected. The right call when damage is isolated and the rest of the duct run is sound.' },
              { title: 'Full Replacement', body: 'Duct crushed in multiple spots, original to an older home, or been sitting wet for a while. Patching section by section usually costs more in the long run than replacing the whole run at once.' },
            ].map((card) => (
              <div key={card.title} style={{ background: '#111827', borderRadius: 12, padding: 24, border: '1px solid rgba(255,255,255,.08)' }}>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 20, textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 10px' }}>{card.title}</h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why bundle with belly repair */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 12px' }}>
            One Visit, Not Two
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px' }}>
            Why We Quote Ductwork With Belly Repair
          </h2>
          <p style={{ fontSize: 16, color: '#CBD5E1', lineHeight: 1.75, margin: '0 0 24px', maxWidth: 760 }}>
            Getting access to underbelly ductwork means opening the same belly board and insulation we&apos;d already be replacing on a full underbelly job. Handling both in one visit means you&apos;re not paying for access twice — and everything goes back together sealed, insulated, and supported correctly the first time.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Duct inspected and repaired or replaced while the belly is already open',
              'New insulation and belly wrap installed around properly supported duct runs',
              'One inspection, one quote, one scheduled visit',
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
            Mobile Home Ductwork Repair Cost in Kansas City
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 14, marginBottom: 28 }}>
            {[
              { label: 'Full duct replacement, single-wide', range: '$2,000–$3,300', note: 'Full underbelly duct run' },
              { label: 'Full duct replacement, double-wide', range: '$3,900–$6,000', note: 'Full underbelly duct run' },
              { label: 'Per linear foot', range: '$35–$55', note: 'Material and labor' },
              { label: 'Section repair', range: 'Quoted per job', note: 'Isolated crushed/disconnected runs' },
            ].map((item) => (
              <div key={item.label} style={{ background: '#0D0D0D', borderRadius: 12, padding: 20, border: '1px solid rgba(255,255,255,.07)' }}>
                <p style={{ fontSize: 13, color: '#6B7280', margin: '0 0 6px', textTransform: 'uppercase' as const, letterSpacing: '.08em', fontWeight: 600 }}>{item.label}</p>
                <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 22, color: '#F5A623', margin: '0 0 4px' }}>{item.range}</p>
                <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>{item.note}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.7, margin: '0 0 16px' }}>
            Final cost depends on home length, duct configuration, and how much of the run needs replacing. Written quotes provided at inspection.
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
              { label: 'Skirting & Insulated Skirting', href: '/mobile-home-skirting-kansas-city/' },
              { label: 'Crawl Space Dehumidifier Installation', href: '/crawl-space-dehumidifier-kansas-city/' },
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
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 32px' }}>Mobile Home Ductwork FAQ</h2>
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
              Get a Free Ductwork Estimate
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', margin: 0 }}>No obligation. Same-week appointments available in Kansas City.</p>
          </div>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
