'use client';
import { useState } from 'react';
import FinancingOptions from '@/components/FinancingOptions';

const AMOUNTS = [2800, 4000, 5500, 6000];

const MONTHLY: Record<number, number> = {
  2800: 48,
  4000: 68,
  5500: 68,
  6000: 74,
};

function fmt(n: number) {
  return '$' + Math.round(n).toLocaleString('en-US');
}

function chipStyle(selected: boolean): React.CSSProperties {
  const base: React.CSSProperties = {
    padding: '13px 12px', borderRadius: 9, border: '1.5px solid',
    font: "700 14px 'Inter',sans-serif", cursor: 'pointer', minHeight: 48,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    userSelect: 'none', transition: 'all .15s ease', background: 'none',
  };
  return selected
    ? { ...base, background: '#F5A623', borderColor: '#F5A623', color: '#0D0D0D' }
    : { ...base, background: 'rgba(255,255,255,.05)', borderColor: 'rgba(255,255,255,.18)', color: '#e5e7eb' };
}

export default function FinancingCalculator() {
  const [amt, setAmt] = useState(4000);

  return (
    <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,.1)', borderRadius: 18, padding: 'clamp(22px,4vw,38px)' }}>
      <div style={{ font: "700 13px 'Inter',sans-serif", letterSpacing: '.04em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 14 }}>Choose your investment level</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(88px,1fr))', gap: 9, marginBottom: 28 }}>
        {AMOUNTS.map((v) => (
          <button key={v} type="button" onClick={() => setAmt(v)} style={chipStyle(v === amt)}>
            {fmt(v)}
          </button>
        ))}
      </div>
      <div style={{ background: 'rgba(245,166,35,.08)', border: '1.5px solid rgba(245,166,35,.35)', borderRadius: 14, padding: '22px 24px', marginBottom: 26, textAlign: 'center' }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 8 }}>
          {fmt(amt)} investment — as low as
        </div>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 56, color: '#F5A623', lineHeight: 1 }}>
          {fmt(MONTHLY[amt])}<span style={{ fontSize: 20, color: '#c3a05a', fontFamily: "'Inter',sans-serif", fontWeight: 600 }}>/mo</span>
        </div>
        <div style={{ fontSize: 12, color: '#6b7280', marginTop: 8 }}>For qualified borrowers through Acorn Finance</div>
      </div>

      <FinancingOptions />
    </div>
  );
}
