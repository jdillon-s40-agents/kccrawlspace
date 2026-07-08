'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { PHONE, PHONE_HREF, NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const activeKey =
    NAV_LINKS.find((l) =>
      l.href === '/' ? pathname === '/' : pathname.startsWith(l.href)
    )?.key ?? 'home';

  // Close menu on navigation or resize to desktop
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    const close = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        .kc-desktop-nav { display: flex; }
        .kc-hamburger { display: none; }
        .kc-trust { display: flex; }
        .kc-phone-text { display: inline; }
        @media (max-width: 767px) {
          .kc-desktop-nav { display: none !important; }
          .kc-hamburger { display: flex !important; }
          .kc-trust { display: none !important; }
          .kc-phone-text { display: none !important; }
        }
      `}</style>

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
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            padding: '0 clamp(14px,4vw,24px)',
            height: 'clamp(88px,12vw,100px)',
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flex: 'none' }}>
            <Image
              src="/logo.png"
              alt="KC Crawl Space Specialists logo"
              height={150}
              width={220}
              style={{
                height: 'clamp(78px,14vw,150px)',
                width: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 6px 16px rgba(0,0,0,.55))',
              }}
              priority
            />
          </Link>

          {/* Desktop right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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
              <span className="kc-phone-text">{PHONE}</span>
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

            {/* Hamburger — mobile only */}
            <button
              className="kc-hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              style={{
                display: 'none', // overridden by CSS class on mobile
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: '1.5px solid rgba(255,255,255,.25)',
                borderRadius: 8,
                color: '#fff',
                cursor: 'pointer',
                width: 44,
                height: 44,
                flex: 'none',
                padding: 0,
              }}
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Desktop nav bar */}
        <nav className="kc-desktop-nav" style={{ background: '#111827', borderTop: '1px solid rgba(255,255,255,.06)' }}>
          <div
            style={{
              maxWidth: 1180,
              margin: '0 auto',
              display: 'flex',
              gap: 2,
              padding: '0 clamp(8px,3vw,16px) 0 clamp(170px,37vw,350px)',
              overflowX: 'auto',
              scrollbarWidth: 'none' as const,
              width: '100%',
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

        {/* Trust strip — desktop only */}
        <div className="kc-trust" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,.06)' }}>
          <div
            style={{
              maxWidth: 1180,
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '7px clamp(14px,4vw,30px)',
              padding: '8px 14px',
              width: '100%',
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

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 49,
            background: '#0D0D0D',
            display: 'flex',
            flexDirection: 'column',
            padding: '24px 28px 40px',
            overflowY: 'auto',
          }}
        >
          {/* Trust badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 16px', marginBottom: 32, marginTop: 8 }}>
            {['Lifetime Warranty', 'Licensed & Insured', 'Same-Week Service'].map((item) => (
              <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#9CA3AF', fontSize: 12, fontWeight: 600, fontFamily: "'Inter',sans-serif" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                {item}
              </span>
            ))}
          </div>

          {/* Nav links */}
          <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV_LINKS.map((link) => {
              const isActive = link.key === activeKey;
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 36,
                    textTransform: 'uppercase',
                    letterSpacing: '.02em',
                    textDecoration: 'none',
                    color: isActive ? '#F5A623' : '#fff',
                    borderBottom: '1px solid rgba(255,255,255,.07)',
                    padding: '16px 0',
                    lineHeight: 1,
                  }}
                >
                  {link.label}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isActive ? '#F5A623' : 'rgba(255,255,255,.3)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              );
            })}
          </nav>

          {/* Bottom CTAs */}
          <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#F5A623',
                color: '#0D0D0D',
                font: "800 18px 'Inter',sans-serif",
                textDecoration: 'none',
                padding: '17px 24px',
                borderRadius: 11,
                minHeight: 58,
                boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)',
              }}
            >
              Book Free Inspection
            </Link>
            <a
              href={PHONE_HREF}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 9,
                background: 'rgba(255,255,255,.06)',
                border: '1.5px solid rgba(255,255,255,.15)',
                color: '#fff',
                font: "800 18px 'Inter',sans-serif",
                textDecoration: 'none',
                padding: '17px 24px',
                borderRadius: 11,
                minHeight: 58,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {PHONE}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
