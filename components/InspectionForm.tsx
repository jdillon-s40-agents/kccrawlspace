'use client';
import { useState, useRef, FormEvent } from 'react';
import { trackFbEvent } from '@/lib/fbPixel';

const SYMPTOMS = [
  'Musty smell', 'High humidity', 'Mold concern', 'Cold floors',
  'High energy bills', 'Inspector flagged it', 'Pest / animal damage', 'Just want a checkup',
];
const PROP_TYPES = ['Site-Built Home', 'Mobile Home', 'Both'];
const DAYS = ['Weekday', 'Saturday', 'Either'];
const HEAR_OPTIONS = [
  'Google Search', 'Google Maps', 'Facebook',
  'Referral from friend / family', 'Saw your truck or yard sign', 'Other',
];

function chipStyle(selected: boolean): React.CSSProperties {
  return {
    padding: '13px 12px',
    borderRadius: 9,
    border: '1.5px solid',
    font: "700 14px 'Inter',sans-serif",
    cursor: 'pointer',
    minHeight: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    textAlign: 'center' as const,
    transition: 'all .15s ease',
    userSelect: 'none' as const,
    lineHeight: 1.25,
    background: selected ? '#F5A623' : 'rgba(255,255,255,.05)',
    borderColor: selected ? '#F5A623' : 'rgba(255,255,255,.18)',
    color: selected ? '#0D0D0D' : '#e5e7eb',
  };
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,.05)',
  border: '1.5px solid rgba(255,255,255,.18)',
  borderRadius: 9,
  padding: '13px 14px',
  color: '#fff',
  font: "500 16px 'Inter',sans-serif",
  outline: 'none',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  font: "600 13px 'Inter',sans-serif",
  color: '#cbd5e1',
  marginBottom: 7,
  letterSpacing: '.02em',
};

export default function InspectionForm() {
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [propType, setPropType] = useState('');
  const [day, setDay] = useState('Either');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  function toggleSymptom(label: string) {
    setSymptoms((s) => (s.includes(label) ? s.filter((x) => x !== label) : [...s, label]));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const fd = new FormData(formRef.current!);
    const fn = ((fd.get('firstName') as string) || '').trim() || 'there';
    setFirstName(fn);

    const body = {
      firstName: fn,
      lastName: fd.get('lastName'),
      phone: fd.get('phone'),
      email: fd.get('email'),
      address: fd.get('address'),
      city: fd.get('city'),
      'Property Type': propType || 'Not selected',
      'Symptoms': symptoms.length ? symptoms.join(', ') : 'None selected',
      'Preferred Day': day,
      'How did you hear about us': fd.get('hearAbout'),
      message: fd.get('notes'),
    };

    try {
      const res = await fetch('https://formspree.io/f/mykaelwa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        trackFbEvent('Contact');
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError((data as { error?: string }).error || 'Something went wrong. Please call us directly.');
      }
    } catch (_) {
      setError('Network error — please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        style={{
          background: 'rgba(22,163,74,.12)',
          border: '1.5px solid #16A34A',
          borderRadius: 16,
          padding: 34,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: '#16A34A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 18px',
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 style={{ font: "800 24px 'Inter',sans-serif", color: '#fff', margin: '0 0 10px' }}>
          Thanks, {firstName}! Your request is in.
        </h3>
        <p style={{ fontSize: 15.5, lineHeight: 1.6, color: '#c3d0e6', margin: 0 }}>
          We&apos;ll call to confirm your free inspection within 2 hours during business hours.
          Keep an eye on your phone — we move fast.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
          gap: 14,
          marginBottom: 16,
        }}
      >
        <div>
          <label style={labelStyle}>First Name *</label>
          <input name="firstName" required type="text" autoComplete="given-name" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Last Name *</label>
          <input name="lastName" required type="text" autoComplete="family-name" style={inputStyle} />
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
          gap: 14,
          marginBottom: 16,
        }}
      >
        <div>
          <label style={labelStyle}>Phone *</label>
          <input name="phone" required type="tel" autoComplete="tel" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input name="email" required type="email" autoComplete="email" style={inputStyle} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14, marginBottom: 18 }}>
        <div>
          <label style={labelStyle}>Street Address *</label>
          <input name="address" required type="text" autoComplete="street-address" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>City *</label>
          <input name="city" required type="text" style={inputStyle} />
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Property Type</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(100px,1fr))', gap: 9 }}>
          {PROP_TYPES.map((l) => (
            <button key={l} type="button" onClick={() => setPropType(l)} style={chipStyle(propType === l)}>
              {l}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>What are you experiencing?</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 9 }}>
          {SYMPTOMS.map((l) => {
            const on = symptoms.includes(l);
            return (
              <button key={l} type="button" onClick={() => toggleSymptom(l)} style={chipStyle(on)}>
                {on && (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
                {l}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Preferred inspection day</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 9 }}>
          {DAYS.map((l) => (
            <button key={l} type="button" onClick={() => setDay(l)} style={chipStyle(day === l)}>
              {l}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>How did you hear about us?</label>
        <select
          name="hearAbout"
          style={{ ...inputStyle, appearance: 'none' as const }}
        >
          {HEAR_OPTIONS.map((o) => (
            <option key={o} style={{ color: '#000', background: '#fff' }}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: 22 }}>
        <label style={labelStyle}>
          Anything else we should know?{' '}
          <span style={{ color: '#6b7280', fontWeight: 500 }}>(optional)</span>
        </label>
        <textarea name="notes" rows={3} style={{ ...inputStyle, resize: 'vertical' as const }} />
      </div>

      {error && (
        <div style={{ background: 'rgba(220,38,38,.12)', border: '1.5px solid #DC2626', borderRadius: 10, padding: '12px 16px', marginBottom: 16, fontSize: 14, color: '#fca5a5' }}>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 9,
          background: loading ? 'rgba(245,166,35,.6)' : '#F5A623',
          color: '#0D0D0D',
          font: "800 17px 'Inter',sans-serif",
          border: 'none',
          cursor: loading ? 'default' : 'pointer',
          padding: 17,
          borderRadius: 11,
          minHeight: 56,
          boxShadow: loading ? 'none' : '0 12px 32px -10px rgba(245,166,35,.65)',
          transition: 'all .15s ease',
        }}
      >
        {loading ? 'Submitting…' : 'Book My Free Inspection'}
        {!loading && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        )}
      </button>

      <p style={{ fontSize: 12.5, color: '#6b7280', margin: '14px 0 0', textAlign: 'center' }}>
        No obligation. No sales pressure. We inspect, document, and give you honest options — you decide.
      </p>
    </form>
  );
}
