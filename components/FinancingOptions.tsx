'use client';
import Script from 'next/script';
import AcornBanner from './AcornBanner';

export default function FinancingOptions({ style }: { style?: React.CSSProperties }) {
  return (
    <>
      <Script src="https://assets.denefits.com/denefits-lead-gen.min.js" strategy="afterInteractive" />
      <div style={style}>
        <AcornBanner />
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '14px 0' }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.1)' }} />
          <span style={{ font: "600 12px 'Inter',sans-serif", color: '#6b7280', letterSpacing: '.06em', textTransform: 'uppercase' }}>or</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.1)' }} />
        </div>
        <button
          data-denefits-button-code="prod_iXLJNnH7wJ"
          data-denefits-auth_token="7ef713991f3c186402690a4e37c4af49"
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 9,
            background: '#1B3A6B',
            color: '#fff',
            font: "800 16px 'Inter',sans-serif",
            border: '1.5px solid rgba(255,255,255,.2)',
            cursor: 'pointer',
            padding: '15px 24px',
            borderRadius: 10,
            minHeight: 52,
            boxShadow: '0 6px 20px -8px rgba(27,58,107,.6)',
          }}
        >
          Get Pre-Approved with Denefits
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </>
  );
}
