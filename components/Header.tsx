'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { PHONE, PHONE_HREF, NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const pathname = usePathname();

  const activeKey =
    NAV_LINKS.find((l) =>
      l.href === '/' ? pathname === '/' : pathname.startsWith(l.href)
    )?.key ?? 'home';

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(13,13,13,.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(245,166,35,.28)',
      }}
    >
      {/* Top bar */}
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 12,
          height: 100,
          padding: '0 clamp(14px,4vw,24px)',
          position: 'relative',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            flex: 'none',
            alignSelf: 'flex-start',
            position: 'relative',
            zIndex: 3,
            marginTop: 6,
          }}
        >
          <Image
            src="/logo.png"
            alt="KC Crawl Space Specialists logo"
            height={150}
            width={220}
            style={{
              height: 'clamp(120px,17vw,150px)',
              width: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 6px 16px rgba(0,0,0,.55))',
            }}
            priority
          />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 'none', alignSelf: 'center' }}>
          <a
            href={PHONE_HREF}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              color: '#F5A623',
              textDecoration: 'none',
              fontWeight: 800,
              fontSize: 15,
              padding: '9px 8px',
              minHeight: 44,
              whiteSpace: 'nowrap',
              fontFamily: "'Inter',sans-serif",
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{PHONE}</span>
          </a>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#F5A623',
              color: '#0D0D0D',
              font: "800 14px 'Inter',sans-serif",
              textDecoration: 'none',
              padding: '11px 16px',
              borderRadius: 8,
              minHeight: 44,
              whiteSpace: 'nowrap',
              boxShadow: '0 6px 18px -6px rgba(245,166,35,.6)',
            }}
          >
            Free Inspection
          </Link>
        </div>
      </div>

      {/* Nav bar */}
      <nav style={{ background: '#111827', borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            display: 'flex',
            gap: 2,
            padding: '0 clamp(8px,3vw,16px) 0 clamp(170px,37vw,350px)',
            overflowX: 'auto',
            scrollbarWidth: 'none' as const,
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = link.key === activeKey;
            return (
              <Link
                key={link.key}
                href={link.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  whiteSpace: 'nowrap',
                  padding: '13px 14px',
                  font: "700 14px 'Inter',sans-serif",
                  letterSpacing: '.03em',
                  textDecoration: 'none',
                  borderBottom: isActive ? '2px solid #F5A623' : '2px solid transparent',
                  color: isActive ? '#F5A623' : '#cbd5e1',
                  flex: 'none',
                  transition: 'color .15s ease',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Trust strip */}
      <div style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '7px clamp(14px,4vw,30px)',
            padding: '8px 14px',
          }}
        >
          {['Lifetime Warranty', 'Licensed & Insured', 'Same-Week Service', 'KC Owned & Operated'].map((item) => (
            <span
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                color: '#d1d5db',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '.03em',
                fontFamily: "'Inter',sans-serif",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
