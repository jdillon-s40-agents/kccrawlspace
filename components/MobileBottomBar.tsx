import { PHONE, PHONE_HREF } from '@/lib/constants';

const SMS_HREF = 'sms:+18169622111?&body=' + encodeURIComponent('Jason, I have a question about my crawl space');

export default function MobileBottomBar() {
  return (
    <>
      <style>{`
        .kc-mobile-bottom { display: none; }
        @media (max-width: 767px) {
          .kc-mobile-bottom { display: flex; }
          /* Push page content up so the bar doesn't cover CTAs */
          body { padding-bottom: 68px; }
        }
      `}</style>
      <div
        className="kc-mobile-bottom"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 48,
          background: 'rgba(10,10,10,.97)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(245,166,35,.3)',
          padding: '10px 14px',
          gap: 10,
          alignItems: 'center',
          paddingBottom: 'max(10px, env(safe-area-inset-bottom))',
        }}
      >
        <a
          href={PHONE_HREF}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            background: 'rgba(255,255,255,.08)',
            border: '1.5px solid rgba(255,255,255,.18)',
            color: '#fff',
            font: "800 16px 'Inter',sans-serif",
            textDecoration: 'none',
            borderRadius: 10,
            minHeight: 48,
            padding: '0 12px',
            whiteSpace: 'nowrap',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {PHONE}
        </a>

        <a
          href={SMS_HREF}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            background: '#F5A623',
            color: '#0D0D0D',
            font: "800 16px 'Inter',sans-serif",
            textDecoration: 'none',
            borderRadius: 10,
            minHeight: 48,
            padding: '0 12px',
            whiteSpace: 'nowrap',
            boxShadow: '0 8px 24px -8px rgba(245,166,35,.7)',
          }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Text Jason
        </a>
      </div>
    </>
  );
}
