import type { Metadata } from 'next';
import Link from 'next/link';
import InspectionForm from '@/components/InspectionForm';
import FinancingOptions from '@/components/FinancingOptions';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Crawl Space Encapsulation Olathe, KS | KC Crawl Space Specialists' },
  description:
    'Crawl space encapsulation in Olathe, KS. Serving Historic Downtown Olathe, Cedar Creek, and all of Johnson County. Free inspection. Same-week appointments available.',
};

function Check({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#16A34A"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: 'none', marginTop: 2 }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const services = [
  { label: 'Crawl Space Encapsulation', href: '/crawl-space-encapsulation-kansas-city/' },
  { label: 'Vapor Barrier Installation', href: '/crawl-space-vapor-barrier-kansas-city/' },
  { label: 'Crawl Space Waterproofing', href: '/crawl-space-waterproofing-kansas-city/' },
  { label: 'Dehumidifier Installation', href: '/crawl-space-dehumidifier-kansas-city/' },
  { label: 'Drainage & Sump Pump', href: '/crawl-space-drainage-sump-pump-kansas-city/' },
  { label: 'Insulation Removal', href: '/crawl-space-insulation-removal-kansas-city/' },
];

const faqs = [
  {
    q: 'Do you serve Olathe, KS?',
    a: 'Yes. We serve all of Olathe, including Historic Downtown Olathe, Cedar Creek, and the newer subdivisions off K-7 and Santa Fe Trail Drive. We serve all Olathe ZIP codes.',
  },
  {
    q: 'My older Olathe home near Downtown has a musty crawl space — what should I do?',
    a: 'Older Olathe homes near Downtown are some of the most likely to have inadequate vapor barriers and open vents. We recommend a free inspection to assess the liner condition, vent status, and humidity levels before recommending a solution.',
  },
  {
    q: 'Does Olathe clay soil cause crawl space moisture problems?',
    a: 'Yes. Johnson County clay soil throughout Olathe holds moisture against the foundation consistently. The clay never fully dries out, which means the crawl space environment is humid even between rain events.',
  },
  {
    q: 'Do you serve the newer Olathe subdivisions off K-7?',
    a: 'Yes. We serve all of Olathe, including newer developments in the western and southern areas of the city. Newer construction can still develop crawl space humidity issues, especially in areas where surrounding development has changed local drainage.',
  },
  {
    q: 'How soon can you inspect my Olathe crawl space?',
    a: 'We typically offer same-week inspections in Olathe. Call (816) 962-2111 or fill out the form below to schedule.',
  },
  {
    q: 'What does crawl space encapsulation cost in Olathe?',
    a: 'Most Olathe homes run $2,800–$5,500 for a complete encapsulation with 20-mil liner and dehumidifier. Drainage or standing water situations add cost. Written estimates provided free after inspection.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://crawlspacekc.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Crawl Space Encapsulation Olathe KS',
          item: 'https://crawlspacekc.com/crawl-space-encapsulation-olathe-ks/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'KC Crawl Space Specialists LLC',
      '@id': 'https://crawlspacekc.com/#business',
      url: 'https://crawlspacekc.com',
      telephone: '+18169622111',
      priceRange: '$$-$$$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Olathe',
        addressRegion: 'KS',
        addressCountry: 'US',
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Olathe',
          containedInPlace: { '@type': 'State', name: 'Kansas' },
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Crawl Space Encapsulation in Olathe',
      provider: { '@id': 'https://crawlspacekc.com/#business' },
      areaServed: { '@type': 'City', name: 'Olathe' },
      description:
        'Complete crawl space encapsulation with 20-mil reinforced liner, vent sealing, and commercial dehumidifier for Olathe, KS homeowners.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function OlathePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. HERO ── */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 14px',
            }}
          >
            Olathe, KS
          </p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(36px,7vw,64px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 20px',
              lineHeight: 1.05,
            }}
          >
            Crawl Space Encapsulation in{' '}
            <span style={{ color: '#F5A623' }}>Olathe</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px,2vw,18px)',
              color: '#9CA3AF',
              maxWidth: 680,
              margin: '0 0 36px',
              lineHeight: 1.65,
            }}
          >
            From the older homes near Historic Downtown Olathe to the newer subdivisions off K-7
            and Santa Fe Trail Drive, Olathe crawl spaces face Johnson County clay soil and Kansas
            City humidity. We provide complete moisture control for Olathe homeowners.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="#inspection-form"
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
            </a>
            <a
              href={PHONE_HREF}
              style={{
                background: 'transparent',
                color: '#fff',
                font: "700 16px 'Inter',sans-serif",
                padding: '16px 26px',
                borderRadius: 10,
                border: '2px solid rgba(255,255,255,.25)',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. QUICK ANSWER ── */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            Quick Answer
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,4vw,38px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 20px',
            }}
          >
            Crawl Space Encapsulation in Olathe, KS
          </h2>
          <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7, maxWidth: 760, margin: 0 }}>
            Crawl space encapsulation in Olathe seals the crawl space with a 20-mil reinforced
            liner, sealed vents, and a commercial dehumidifier. Olathe&apos;s mix of older
            downtown-area homes and newer subdivisions on Johnson County clay soil creates consistent
            crawl space humidity, musty odors, and insulation problems that encapsulation resolves.
          </p>
        </div>
      </section>

      {/* ── 3. WHY OLATHE HOMES HAVE PROBLEMS ── */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            Local Context
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,4vw,38px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            Why Olathe Crawl Spaces Need Moisture Control
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: 20,
            }}
          >
            {[
              {
                title: 'Johnson County Clay Soil',
                body: "Olathe's clay soil holds moisture near the foundation year-round. Even during dry months, the ground under the crawl space maintains high humidity that transfers to the air above, affecting wood, insulation, and air quality.",
              },
              {
                title: 'Diverse Housing Stock',
                body: 'Olathe has homes ranging from 1940s–1950s construction near Historic Downtown to 2000s–2010s subdivisions in the outer areas. Older homes often have inadequate vapor barriers and open vents; newer homes can have grading and drainage issues in developing areas.',
              },
              {
                title: 'Fast Growth and Drainage Changes',
                body: 'Olathe is one of the fastest-growing cities in Kansas, with significant new construction affecting local drainage patterns. Homeowners in established neighborhoods sometimes see new moisture issues as surrounding development changes how water moves through their area.',
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
                    fontSize: 20,
                    textTransform: 'uppercase' as const,
                    color: '#fff',
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES ── */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
            }}
          >
            What We Do
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,4vw,38px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 32px',
            }}
          >
            Services We Offer in Olathe
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 16,
            }}
          >
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                style={{
                  display: 'block',
                  background: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: 12,
                  padding: '20px 22px',
                  textDecoration: 'none',
                  borderLeft: '4px solid #e5e7eb',
                  transition: 'border-left-color .2s',
                }}
              >
                <span
                  style={{
                    font: "700 15px 'Inter',sans-serif",
                    color: '#0D0D0D',
                    display: 'block',
                    marginBottom: 6,
                  }}
                >
                  {svc.label}
                </span>
                <span
                  style={{
                    font: "500 13px 'Inter',sans-serif",
                    color: '#1B3A6B',
                  }}
                >
                  View service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. AREAS WE SERVE ── */}
      <section
        style={{
          background: '#1B3A6B',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            Coverage Area
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,4vw,38px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 16px',
            }}
          >
            Areas We Serve in Olathe
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.75)', margin: '0 0 28px', lineHeight: 1.65 }}>
            We serve homeowners throughout all of Olathe — from the historic core near Downtown to
            the newest subdivisions on the city&apos;s outer edges.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
            {[
              'Historic Downtown Olathe',
              'Cedar Creek',
              'Santa Fe Trail Drive Corridor',
              'K-7 Corridor',
              'Black Bob Road Area',
              'Stagecoach Area',
              'Ridgeview Road Area',
              '151st Street Corridor',
              '167th Street Area',
            ].map((area) => (
              <span
                key={area}
                style={{
                  background: 'rgba(255,255,255,.1)',
                  border: '1px solid rgba(255,255,255,.2)',
                  borderRadius: 8,
                  padding: '8px 14px',
                  font: "500 14px 'Inter',sans-serif",
                  color: '#fff',
                }}
              >
                {area}
              </span>
            ))}
          </div>
          <p style={{ font: "600 14px 'Inter',sans-serif", color: 'rgba(255,255,255,.6)', margin: 0 }}>
            ZIP Codes Served:{' '}
            <span style={{ color: '#F5A623' }}>66061 &bull; 66062</span>
          </p>
        </div>
      </section>

      {/* ── 6. OUR PROCESS ── */}
      <section
        style={{
          background: '#0D0D0D',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#F5A623',
              margin: '0 0 12px',
            }}
          >
            How It Works
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,4vw,38px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            Our Process
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 20,
            }}
          >
            {[
              {
                step: '01',
                title: 'Free Inspection',
                body: 'We visit your Olathe home, inspect the crawl space liner, vents, humidity, and wood framing — and provide a written estimate before any work begins.',
              },
              {
                step: '02',
                title: 'Custom Solution',
                body: 'We design a moisture control plan specific to your Olathe home — whether a basic encapsulation or a full system with drainage, sump pump, and dehumidifier.',
              },
              {
                step: '03',
                title: 'Expert Installation',
                body: 'Most Olathe encapsulation jobs are completed in one day. We clean up fully and walk you through the installed system before leaving.',
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    font: "800 36px 'Barlow Condensed',sans-serif",
                    color: '#F5A623',
                    marginBottom: 10,
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 20,
                    textTransform: 'uppercase' as const,
                    color: '#fff',
                    margin: '0 0 10px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FINANCING ── */}
      <section
        style={{
          background: '#F9FAFB',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p
            style={{
              font: "600 13px 'Inter',sans-serif",
              letterSpacing: '.16em',
              textTransform: 'uppercase' as const,
              color: '#1B3A6B',
              margin: '0 0 12px',
              textAlign: 'center',
            }}
          >
            Flexible Payment
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,4vw,38px)',
              textTransform: 'uppercase' as const,
              color: '#0D0D0D',
              margin: '0 0 28px',
              textAlign: 'center',
            }}
          >
            Financing Options Available
          </h2>
          <FinancingOptions />
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <section
        style={{
          background: '#1B3A6B',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
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
              fontSize: 'clamp(26px,4vw,38px)',
              textTransform: 'uppercase' as const,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            Common Questions from Olathe Homeowners
          </h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {faqs.map((faq) => (
              <div
                key={faq.q}
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
                    fontSize: 18,
                    textTransform: 'uppercase' as const,
                    color: '#fff',
                    margin: '0 0 10px',
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.65, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CTA FORM ── */}
      <section
        id="inspection-form"
        style={{
          background: '#111827',
          padding: 'clamp(52px,8vw,88px) clamp(16px,5vw,24px)',
        }}
      >
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
              Get a Free Crawl Space Estimate in Olathe
            </h2>
            <p style={{ fontSize: 16, color: '#9CA3AF', margin: 0 }}>
              No obligation. Same-week inspections available.
            </p>
          </div>
          <InspectionForm />
        </div>
      </section>
    </main>
  );
}
