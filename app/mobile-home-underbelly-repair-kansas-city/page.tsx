import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Mobile Home Underbelly Repair Kansas City | Belly Board & Insulation' },
  description: 'Torn belly board, cold floors, wet or missing insulation? We repair mobile home underbellies across the KC metro — most jobs done in a day. Free estimate.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/mobile-home-underbelly-repair-kansas-city/',
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
    question: 'What does mobile home underbelly repair actually involve?',
    answer:
      'We open the damaged section of belly board, remove any old, wet, or missing insulation, install fresh insulation, and reseal the underbelly wrap so the whole system is airtight again. If access panels make sense for future maintenance, we can add those at the same time.',
  },
  {
    question: 'Do you repair just the damaged area, or the whole underbelly?',
    answer:
      "Depends on the damage. Many jobs are a targeted repair — a specific section, often 300 to 600 square feet — where the rest of the underbelly is still sound. If damage is widespread or the home hasn't had underbelly work done in years, a full replacement is usually the better value than patching section by section.",
  },
  {
    question: 'How do I know if I need underbelly repair?',
    answer:
      'Cold floors in winter, frozen or burst pipes, a visibly sagging or torn belly board, animal or pest damage, rising energy bills, or a damp/musty smell inside the home are all signs. A free inspection will tell you the real extent.',
  },
  {
    question: 'How much does mobile home underbelly repair cost in Kansas City?',
    answer:
      'Targeted repairs on a few hundred square feet typically run $1,750–$4,500 depending on scope and whether ductwork or skirting is bundled in. Full underbelly replacement runs higher. Every job gets a written estimate after a free inspection — we never quote sight unseen.',
  },
  {
    question: 'Can you fix ductwork and skirting at the same time?',
    answer:
      "Yes, and we usually recommend it. Getting access to the underbelly means the belly board is already open — repairing ductwork or replacing skirting sections in the same visit saves you a second trip and a second labor charge.",
  },
  {
    question: 'How long does underbelly repair take?',
    answer: 'Most targeted repairs are completed in a single day. Larger jobs or full replacements can take one to two days depending on access and scope.',
  },
];

export default function MobileHomeUnderbellyRepairPage() {
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
                  { '@type': 'ListItem', position: 3, name: 'Mobile Home Underbelly Repair Kansas City', item: 'https://www.crawlspacekc.com/mobile-home-underbelly-repair-kansas-city/' },
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
                name: 'Mobile Home Underbelly Repair',
                serviceType: 'Manufactured Home Underbelly System',
                provider: { '@type': 'LocalBusiness', name: 'KC Crawl Space Specialists LLC' },
                areaServed: { '@type': 'AdministrativeArea', name: 'Kansas City Metro' },
                description:
                  'Belly board, insulation, and underbelly wrap repair for manufactured homes in Kansas City. Targeted repairs or full replacement, most jobs completed in a day.',
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
            Mobile Home Underbelly Repair
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(36px,7vw,64px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
            Mobile Home Underbelly Repair <span style={{ color: '#F5A623' }}>in Kansas City</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: '#9CA3AF', margin: '0 0 32px', maxWidth: 680, lineHeight: 1.7 }}>
            Torn belly board, cold floors, wet or missing insulation? We repair mobile home underbellies across the KC metro — targeted repairs or full replacement, most jobs completed in a single day.
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

      {/* Quick Answer */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', textTransform: 'uppercase' as const, color: '#0D0D0D', margin: '0 0 20px' }}>
            Signs Your Underbelly Needs Repair
          </h2>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.75, margin: '0 0 32px', maxWidth: 760 }}>
            The underbelly is the protective barrier — a belly board plus insulation — stretched beneath your manufactured home. It keeps the floor warm, protects your pipes and ductwork, and blocks moisture and pests from getting underneath. Once it fails in one spot, the damage tends to spread.
          </p>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#1B3A6B', margin: '0 0 16px' }}>
            Warning Signs
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 12 }}>
            {[
              'Cold floors in winter',
              'Frozen or burst pipes',
              'Sagging or visibly torn belly board',
              'Animal or pest damage underneath',
              'Rising energy bills with no other cause',
              'Damp or musty smell inside the home',
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
            Targeted Repair vs. Full Replacement
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
            {[
              { title: 'Targeted Repair', body: 'One damaged section — often 300 to 600 square feet — cut out, re-insulated, and resealed. The right call when the rest of the underbelly is still sound.' },
              { title: 'Full Replacement', body: "Widespread damage, an underbelly that's never been serviced, or a home where patching section by section would cost more than starting fresh." },
            ].map((card) => (
              <div key={card.title} style={{ background: '#111827', borderRadius: 12, padding: 24, border: '1px solid rgba(255,255,255,.08)' }}>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 20, textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 10px' }}>{card.title}</h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ background: '#1B3A6B', padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 12px' }}>
            What's Included
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px' }}>
            A Complete Repair, Not a Patch Job
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Old, wet, or damaged insulation removed and disposed of',
              'Fresh insulation installed across the full repair area',
              'Belly board patched and resealed, tied back into the surrounding material',
              'Access panels added where they make future maintenance easier',
              'Mold/mildew treatment applied to exposed surfaces when needed',
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
            Mobile Home Underbelly Repair Cost in Kansas City
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 14, marginBottom: 28 }}>
            {[
              { label: 'Targeted repair', range: '$1,750–$4,500', note: '300–600 sq ft, may include ductwork' },
              { label: 'Full underbelly replacement', range: 'Quoted per job', note: 'Depends on home length & condition' },
              { label: 'Bundled with skirting', range: 'Add ~$300–$1,300', note: 'Saves a second site visit' },
            ].map((item) => (
              <div key={item.label} style={{ background: '#0D0D0D', borderRadius: 12, padding: 20, border: '1px solid rgba(255,255,255,.07)' }}>
                <p style={{ fontSize: 13, color: '#6B7280', margin: '0 0 6px', textTransform: 'uppercase' as const, letterSpacing: '.08em', fontWeight: 600 }}>{item.label}</p>
                <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 22, color: '#F5A623', margin: '0 0 4px' }}>{item.range}</p>
                <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>{item.note}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.7, margin: 0 }}>
            Final cost depends on the extent of damage, home size, and whether ductwork or skirting is bundled in. Written quotes provided at inspection — we never quote sight unseen.
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
              { label: 'Ductwork Repair & Replacement', href: '/mobile-home-ductwork-repair-kansas-city/' },
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
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 32px' }}>Mobile Home Underbelly Repair FAQ</h2>
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
              Get a Free Underbelly Estimate
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', margin: 0 }}>No obligation. Same-week appointments available in Kansas City.</p>
          </div>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
