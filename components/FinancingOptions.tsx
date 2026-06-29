'use client';
import { useRef } from 'react';
import Script from 'next/script';
import AcornBanner from './AcornBanner';

export default function FinancingOptions({ style }: { style?: React.CSSProperties }) {
  const btnRef = useRef<HTMLButtonElement>(null);

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

        {/* Hidden button the Denefits script attaches its click handler to */}
        <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', opacity: 0, pointerEvents: 'none' }}>
          <button
            ref={btnRef}
            data-denefits-button-code="prod_iXLJNnH7wJ"
            data-denefits-auth_token="7ef713991f3c186402690a4e37c4af49"
          />
        </div>

        {/* Visible banner image — clicking triggers the hidden Denefits button */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/denefits-banner.png"
          alt="Get Pre-Approved with Denefits – No credit check, 99% approval rate, flexible payment options"
          onClick={() => btnRef.current?.click()}
          style={{ maxWidth: '100%', height: 'auto', borderRadius: 8, display: 'block', margin: '0 auto', cursor: 'pointer' }}
        />
      </div>
    </>
  );
}
