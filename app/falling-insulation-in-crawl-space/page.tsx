import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Falling Insulation in Crawl Space | Moisture Causes & KC Fix' },
  description:
    'Why is insulation falling in your crawl space? Learn the moisture causes behind sagging or fallen insulation and how Kansas City homeowners fix it for good.',
};

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
    q: 'Why is my crawl space insulation falling down?',
    a: 'Insulation falls when it absorbs moisture from high humidity, ground moisture, or water intrusion. The added weight breaks down the paper backing and pulls staples or support wires loose from the joists, causing batts to sag and eventually drop.',
  },
  {
    q: 'Is falling insulation a sign of a bigger problem?',
    a: 'Usually, yes. Insulation rarely falls just because it was installed poorly. In most Kansas City crawl spaces, fallen insulation is a symptom of ongoing moisture — high humidity, ground moisture, or a leak — that needs to be addressed at the source.',
  },
  {
    q: 'Can I just restaple the insulation back up?',
    a: 'Restapling does not fix the underlying moisture problem, and insulation that has absorbed water has often lost much of its insulating value. In most cases the wet sections need to be removed and the moisture source addressed before new insulation goes back in.',
  },
  {
    q: 'Should wet insulation be removed or dried out?',
    a: 'Wet fiberglass insulation generally should be removed rather than dried in place. Once it has absorbed moisture, it tends to hold that moisture against the framing and lose R-value, so replacement after the crawl space is dried out is typically recommended.',
  },
  {
    q: 'What should replace fallen fiberglass insulation?',
    a: 'Many Kansas City crawl spaces are moving away from joist insulation entirely in favor of full encapsulation, where the foundation walls are insulated instead and the crawl space is conditioned. This avoids the moisture-and-gravity cycle that causes batts to fail again.',
  },
  {
    q: 'Does falling insulation mean I have mold?',
    a: 'Not necessarily, but the same moisture that causes insulation to fail also creates conditions where mold can grow on wood framing. An inspection can confirm whether mold is present and how widespread it is.',
  },
  {
    q: 'Will encapsulation stop insulation from falling again?',
    a: 'Encapsulation addresses the moisture source — ground vapor, humidity, and air leakage — that causes insulation failure in the first place. Combined with a vapor barrier and dehumidification, it is designed to keep humidity low enough that new insulation stays dry and intact.',
  },
  {
    q: 'How much does crawl space insulation removal cost?',
    a: 'Cost depends on the size of the crawl space, how much insulation needs to come out, and whether mold remediation or moisture repairs are also needed. An on-site inspection is the only way to get an accurate quote for your home.',
  },
];

const relatedLinks = [
  { label: 'Insulation Removal KC', href: '/crawl-space-insulation-removal-kansas-city/' },
  { label: 'Crawl Space Encapsulation KC', href: '/crawl-space-encapsulation-kansas-city/' },
  { label: 'Dehumidifier KC', href: '/crawl-space-dehumidifier-kansas-city/' },
  { label: 'Cold Floors Above Crawl Space', href: '/cold-floors-above-crawl-space/' },
];

export default function FallingInsulationPage() {
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
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://crawlspacekc.com' },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Falling Insulation in Crawl Space',
                    item: 'https://crawlspacekc.com/falling-insulation-in-crawl-space/',
                  },
                ],
              },
              {
                '@type': 'LocalBusiness',
                name: 'KC Crawl Space Specialists LLC',
                url: 'https://crawlspacekc.com',
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
            Crawl Space Insulation
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
            Falling Insulation in Your{' '}
            <span style={{ color: '#F5A623' }}>Crawl Space?</span>
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
            Sagging or fallen insulation under your floor is rarely just a workmanship issue. In most Kansas City crawl spaces, it is a moisture problem — here is what causes it and how it gets fixed correctly.
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
            Why Does Crawl Space Insulation Fall Down?
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 760 }}>
            Crawl space insulation falls down when it absorbs moisture from high humidity, ground moisture, or water intrusion, which adds weight and breaks down the paper backing and staples holding it to the joists. Falling insulation is a moisture symptom, not just an installation problem, and usually means the crawl space needs a vapor barrier, air sealing, or full encapsulation in addition to insulation replacement.
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
              <strong>Short answer:</strong> Wet, sagging, or fallen insulation almost always points to a moisture problem under the house. Replacing the insulation without fixing the moisture source usually means it fails again.
            </p>
          </div>
        </div>
      </section>

      {/* Why Insulation Falls */}
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
            Root Causes
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
            What Causes Insulation to Sag or Fall
          </h2>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Fiberglass batt insulation is held in place between floor joists by staples, support wires, or friction fit. Under normal dry conditions it stays put for years. In a humid or wet crawl space, several things can happen at once to bring it down.
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
                title: 'Moisture Absorption',
                body: 'Fiberglass batts soak up humidity from the crawl space air or ground, sometimes doubling or tripling their dry weight and stretching staples and supports.',
              },
              {
                title: 'Broken or Missing Supports',
                body: 'Staples corrode, paper facing tears, and support wire or "tiger teeth" fasteners loosen over time, especially once the insulation gets heavier from moisture.',
              },
              {
                title: 'Pest and Rodent Damage',
                body: 'Mice, insects, and other pests nest in crawl space insulation, tearing the facing and pulling material loose from the joists.',
              },
              {
                title: 'Age and Material Breakdown',
                body: 'Older insulation and paper vapor barriers naturally weaken with age, and decades of humidity cycling accelerates the breakdown.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 19,
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: '#D1D5DB', margin: 0, lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs / What Wet Insulation Does */}
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
            Warning Signs
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,44px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 32px',
            }}
          >
            What Wet, Fallen Insulation Means for Your Home
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, maxWidth: 700, marginBottom: 28 }}>
            {[
              'Insulation batts hanging down or lying on the ground',
              'Visible staining, sagging, or discoloration on the insulation facing',
              'Cold or uneven floors above the affected area',
              'Musty odor coming from the crawl space or floor vents',
              'Wet insulation holding moisture directly against the floor joists',
              'Reduced energy efficiency as R-value drops in wet sections',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <XMark size={18} />
                <span style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#6B7280', fontStyle: 'italic', margin: 0, lineHeight: 1.6, maxWidth: 700 }}>
            Wet insulation against wood framing can create conditions that may contribute to indoor air quality concerns over time, which is why addressing the moisture source matters as much as replacing the material.
          </p>
        </div>
      </section>

      {/* Solution / Process */}
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
            Our Process
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
            How We Fix Falling Insulation the Right Way
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 20,
              marginBottom: 32,
            }}
          >
            {[
              {
                title: 'Remove Wet Insulation',
                body: 'Sagging and saturated batts are removed and hauled away. Restapling wet insulation back in place does not solve the underlying issue.',
              },
              {
                title: 'Address the Moisture Source',
                body: 'We identify whether the cause is ground moisture, humidity, a plumbing leak, or grading, and correct it before any new material goes in.',
              },
              {
                title: 'Install Vapor Barrier or Encapsulation',
                body: 'A sealed vapor barrier on the ground, and in many cases full wall encapsulation, stops moisture from reaching the crawl space air in the first place.',
              },
              {
                title: 'Replace or Relocate Insulation',
                body: 'Depending on the system, we either install new floor insulation or move insulation to the foundation walls as part of a conditioned crawl space.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 19,
                    textTransform: 'uppercase' as const,
                    color: '#F5A623',
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: '#D1D5DB', margin: 0, lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#9CA3AF', fontStyle: 'italic', margin: 0, lineHeight: 1.6, maxWidth: 760 }}>
            Simply re-stapling old insulation back up addresses the symptom, not the cause — it typically falls again once it absorbs moisture a second time.
          </p>
        </div>
      </section>

      {/* What to Do Next */}
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
            Next Steps
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
            What Affects the Cost of Fixing Falling Insulation
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 760 }}>
            Every crawl space is different, so an accurate price requires an on-site inspection. In general, the main cost factors are how much insulation needs to be removed, whether mold remediation is needed, the extent of the moisture source repair, and whether you choose insulation replacement alone or a full encapsulation system.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 20,
            }}
          >
            {[
              'Square footage and accessibility of the crawl space',
              'Amount of insulation requiring removal and disposal',
              'Whether mold or wood damage needs to be addressed',
              'Vapor barrier only vs. full wall-to-wall encapsulation',
            ].map((point) => (
              <div
                key={point}
                style={{
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <p style={{ fontSize: 15, color: '#4b5563', margin: 0, lineHeight: 1.6 }}>{point}</p>
              </div>
            ))}
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
            Falling Insulation FAQ
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
              Get a Free Crawl Space Estimate
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
