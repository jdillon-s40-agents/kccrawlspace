'use client';
import { useState } from 'react';
import Link from 'next/link';

const AMOUNTS = [2800, 3500, 4500, 5500, 6500];

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
  const [amt, setAmt] = useState(4500);

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
      <div style={{ fontSize: 15, color: '#9CA3AF', marginBottom: 16 }}>
        At <span style={{ color: '#F5A623', fontWeight: 800 }}>{fmt(amt)}</span>, your estimated monthly payment is:
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 12, marginBottom: 26 }}>
        <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 12, padding: 18, textAlign: 'center' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 6 }}>12 Months</div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 38, color: '#fff', lineHeight: 1 }}>
            {fmt(amt / 12)}<span style={{ fontSize: 15, color: '#9CA3AF', fontFamily: "'Inter',sans-serif", fontWeight: 600 }}>/mo</span>
          </div>
        </div>
        <div style={{ background: 'rgba(245,166,35,.12)', border: '1.5px solid #F5A623', borderRadius: 12, padding: 18, textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)', background: '#F5A623', color: '#0D0D0D', font: "800 10px 'Inter',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 20, whiteSpace: 'nowrap' }}>Most Popular</div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#F5A623', marginBottom: 6 }}>18 Months · 0% APR</div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 38, color: '#F5A623', lineHeight: 1 }}>
            {fmt(amt / 18)}<span style={{ fontSize: 15, color: '#c3a05a', fontFamily: "'Inter',sans-serif", fontWeight: 600 }}>/mo</span>
          </div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 12, padding: 18, textAlign: 'center' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 6 }}>24 Months</div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 38, color: '#fff', lineHeight: 1 }}>
            {fmt(amt / 24)}<span style={{ fontSize: 15, color: '#9CA3AF', fontFamily: "'Inter',sans-serif", fontWeight: 600 }}>/mo</span>
          </div>
        </div>
      </div>
      <Link href="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: 16, borderRadius: 10, minHeight: 54 }}>
        Apply for Financing — 60-Second Approval
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
      </Link>
    </div>
  );
}
