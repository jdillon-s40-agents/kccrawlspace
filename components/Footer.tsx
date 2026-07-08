import Link from 'next/link';
import Image from 'next/image';
import { PHONE, PHONE_HREF, DOMAIN } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#0a0a0a',
        borderTop: '1px solid rgba(255,255,255,.08)',
        padding: 'clamp(40px,6vw,60px) clamp(16px,5vw,24px) 28px',
        fontFamily: "'Inter',sans-serif",
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
            gap: 32,
            marginBottom: 36,
          }}
        >
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="KC Crawl Space Specialists logo"
              height={84}
              width={160}
              style={{ height: 84, width: 'auto', display: 'block', marginBottom: 14 }}
            />
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                color: '#9CA3AF',
                margin: '0 0 16px',
                maxWidth: '30ch',
              }}
            >
              Kansas City's only dedicated crawlspace specialist. We only do one thing. We do it better.
            </p>
            <a
              href={PHONE_HREF}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: '#F5A623',
                font: "800 18px 'Inter',sans-serif",
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {PHONE}
            </a>
          </div>

          {/* Services */}
          <div>
            <div style={{ font: "800 13px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>
              Services
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                { label: 'Crawlspace Assessment ($97+)', href: '/crawl-space-assessment-kansas-city/' },
                { label: 'Crawlspace Encapsulation', href: '/encapsulation' },
                { label: 'Crawl Space Repair', href: '/crawl-space-repair-kansas-city/' },
                { label: 'Vapor Barrier Installation', href: '/crawl-space-vapor-barrier-kansas-city/' },
                { label: 'Crawl Space Waterproofing', href: '/crawl-space-waterproofing-kansas-city/' },
                { label: 'Crawl Space Dehumidifiers', href: '/crawl-space-dehumidifier-kansas-city/' },
                { label: 'Pest & Rodent Sealing', href: '/crawl-space-pest-control-kansas-city/' },
                { label: 'Mobile Home Underbelly', href: '/mobile-homes' },
                { label: 'Pricing & Financing', href: '/pricing' },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: '#9CA3AF', fontSize: 14.5, textDecoration: 'none' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <div style={{ font: "800 13px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>
              Service Areas
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                { label: 'Kansas City, MO', href: '/crawl-space-encapsulation-kansas-city-mo/' },
                { label: 'Overland Park, KS', href: '/crawl-space-encapsulation-overland-park-ks/' },
                { label: "Lee's Summit, MO", href: '/crawl-space-encapsulation-lees-summit-mo/' },
                { label: 'Olathe, KS', href: '/crawl-space-encapsulation-olathe-ks/' },
                { label: 'View All 29 Cities', href: '/service-areas/' },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: '#9CA3AF', fontSize: 14.5, textDecoration: 'none' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Guides */}
          <div>
            <div style={{ font: "800 13px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>
              Guides
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                { label: 'Encapsulation Cost', href: '/crawl-space-encapsulation-cost-kansas-city/' },
                { label: 'Mold in Crawl Space', href: '/crawl-space-mold-kansas-city/' },
                { label: 'Standing Water', href: '/standing-water-in-crawl-space/' },
                { label: 'Sagging Floor Repair', href: '/crawl-space-sagging-floor-repair-kansas-city/' },
                { label: 'Free Inspection Explained', href: '/free-crawl-space-inspection-kansas-city/' },
                { label: 'Choosing a Contractor', href: '/how-to-choose-a-crawl-space-contractor-kansas-city/' },
                { label: 'All Guides & FAQ', href: '/guides/' },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: '#9CA3AF', fontSize: 14.5, textDecoration: 'none' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={{ font: "800 13px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>
              Company
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                { label: 'About Us', href: '/about' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Reviews', href: '/#proof' },
                { label: 'Free Inspection', href: '/contact' },
              ].map((l) => (
                <Link key={l.label} href={l.href} style={{ color: '#9CA3AF', fontSize: 14.5, textDecoration: 'none' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Trust */}
          <div>
            <div style={{ font: "800 13px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>
              Trust
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14, color: '#9CA3AF' }}>
              {['Licensed & Insured', 'Lifetime Warranty', '4.9★ Google Verified', 'KC Owned & Operated'].map((t) => (
                <span key={t} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,.08)',
            paddingTop: 22,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: 13, color: '#6b7280' }}>
            © {year} KC Crawl Space Specialists LLC. All rights reserved.
          </span>
          <span style={{ fontSize: 12, color: '#4b5563' }}>
            {DOMAIN} · Missouri LLC
          </span>
        </div>
      </div>
    </footer>
  );
}
