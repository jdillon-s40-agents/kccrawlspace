'use client';
import { useState, useRef, FormEvent } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdvvlkp';

const PROP_TYPES = ['Site-Built Home', 'Mobile Home', 'Other'];
const SIZE_OPTIONS = [
  'Under 500 sq ft', '500–1,000 sq ft', '1,000–1,500 sq ft',
  '1,500–2,000 sq ft', 'Over 2,000 sq ft', 'Not sure',
];
const SYMPTOMS = [
  'Musty smell in the home', 'Cold floors in winter', 'High energy bills',
  'Mold concern', 'Home inspector flagged it', 'High humidity / moisture readings',
  'Pest or animal evidence', 'Standing water or wet soil',
  'Preparing to sell the home', 'Just want to know what’s there',
];
const MOISTURE_METER_OPTIONS = ['Yes', 'No', 'I can get one'];
const ACCESS_OPTIONS = [
  'Yes — no problem', 'Yes — tight but doable', 'Not sure', 'No — very limited access',
];
const PREFERRED_DAYS = ['Monday–Friday daytime', 'Saturday morning', 'Saturday afternoon', 'Flexible — just call me'];
const PREFERRED_CONTACT = ['Phone call', 'Text message', 'Either'];
const HEAR_OPTIONS = [
  'Nextdoor', 'Facebook', 'Google', 'Referral from neighbor or friend',
  'Home inspector referral', 'Realtor referral', 'Other',
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

const sectionLabelStyle: React.CSSProperties = {
  ...labelStyle,
  fontSize: 15,
  color: '#fff',
  marginBottom: 12,
};

function ServiceCard({
  selected, onClick, title, price, blurb,
}: { selected: boolean; onClick: () => void; title: string; price: string; blurb: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        textAlign: 'left' as const,
        border: '2px solid',
        borderColor: selected ? '#F5A623' : 'rgba(255,255,255,.18)',
        background: selected ? 'rgba(245,166,35,.1)' : 'rgba(255,255,255,.03)',
        borderRadius: 14,
        padding: '20px 22px',
        cursor: 'pointer',
        transition: 'all .15s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
        <span style={{ font: "800 18px 'Inter',sans-serif", color: '#fff' }}>{title}</span>
        <span style={{ font: "800 22px 'Inter',sans-serif", color: '#F5A623' }}>{price}</span>
      </div>
      <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, lineHeight: 1.5 }}>{blurb}</p>
    </button>
  );
}

export default function AssessmentForm() {
  const [serviceType, setServiceType] = useState<'virtual' | 'in-person' | ''>('');
  const [propType, setPropType] = useState('');
  const [size, setSize] = useState('');
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [moistureMeter, setMoistureMeter] = useState('');
  const [access, setAccess] = useState('');
  const [preferredDays, setPreferredDays] = useState<string[]>([]);
  const [preferredContact, setPreferredContact] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  function toggleSymptom(label: string) {
    setSymptoms((s) => (s.includes(label) ? s.filter((x) => x !== label) : [...s, label]));
  }
  function toggleDay(label: string) {
    setPreferredDays((s) => (s.includes(label) ? s.filter((x) => x !== label) : [...s, label]));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!serviceType) {
      setError('Please choose Virtual or In-Person assessment above.');
      return;
    }
    setLoading(true);
    setError('');

    const fd = new FormData(formRef.current!);
    const fn = ((fd.get('firstName') as string) || '').trim() || 'there';
    setFirstName(fn);

    const body: Record<string, string> = {
      _subject: `New Crawlspace Assessment Request — ${serviceType === 'virtual' ? 'Virtual $97' : 'In-Person $197'}`,
      service_type: serviceType === 'virtual' ? 'Virtual Assessment ($97)' : 'In-Person Assessment ($197)',
      firstName: fn,
      lastName: (fd.get('lastName') as string) || '',
      email: (fd.get('email') as string) || '',
      phone: (fd.get('phone') as string) || '',
      property_address: (fd.get('address') as string) || '',
      city: (fd.get('city') as string) || '',
      zip_code: (fd.get('zip') as string) || '',
      property_type: propType || 'Not selected',
      crawlspace_size: size || 'Not selected',
      symptoms: symptoms.length ? symptoms.join(', ') : 'None selected',
      description: (fd.get('description') as string) || '',
      referral_source: (fd.get('hearAbout') as string) || '',
    };

    if (serviceType === 'virtual') {
      body.has_moisture_meter = moistureMeter || 'Not answered';
      body.can_access_crawlspace = access || 'Not answered';
    } else {
      body.preferred_days = preferredDays.length ? preferredDays.join(', ') : 'Not selected';
      body.preferred_contact = preferredContact || 'Not selected';
      body.access_notes = (fd.get('accessNotes') as string) || '';
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError((data as { error?: string }).error || 'Something went wrong. Please call or text Jason directly.');
      }
    } catch (_) {
      setError('Network error — please try again or call/text Jason directly.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    const isVirtual = serviceType === 'virtual';
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
            width: 60, height: 60, borderRadius: '50%', background: '#16A34A',
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px',
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 style={{ font: "800 24px 'Inter',sans-serif", color: '#fff', margin: '0 0 10px' }}>
          Got it, {firstName}!
        </h3>
        <p style={{ fontSize: 15.5, lineHeight: 1.6, color: '#c3d0e6', margin: '0 0 14px' }}>
          Jason will review your submission and send an invoice to your email within a few hours.
          {isVirtual
            ? ' Once you pay, he’ll send your photo submission guide and moisture meter info to get started.'
            : ' Once you pay, he’ll text or call to schedule your visit.'}
        </p>
        <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0 }}>
          Questions in the meantime? Text Jason directly: <strong style={{ color: '#F5A623' }}>816-962-2111</strong>
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div style={{ marginBottom: 24 }}>
        <label style={sectionLabelStyle}>Choose your service *</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14 }}>
          <ServiceCard
            selected={serviceType === 'virtual'}
            onClick={() => setServiceType('virtual')}
            title="Virtual Assessment"
            price="$97"
            blurb="Submit photos & measurements. Receive your written game plan within 48 hours."
          />
          <ServiceCard
            selected={serviceType === 'in-person'}
            onClick={() => setServiceType('in-person')}
            title="In-Person Assessment"
            price="$197"
            blurb="Jason visits your property. Credited toward installation if you book within 90 days."
          />
        </div>
        {error && !serviceType && (
          <div style={{ background: 'rgba(220,38,38,.12)', border: '1.5px solid #DC2626', borderRadius: 10, padding: '12px 16px', marginTop: 14, fontSize: 14, color: '#fca5a5' }}>
            {error}
          </div>
        )}
      </div>

      {serviceType && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 14, marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>First Name *</label>
              <input name="firstName" required type="text" autoComplete="given-name" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Last Name *</label>
              <input name="lastName" required type="text" autoComplete="family-name" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 14, marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>Email * <span style={{ color: '#6b7280', fontWeight: 500 }}>(your invoice goes here)</span></label>
              <input name="email" required type="email" autoComplete="email" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Phone *</label>
              <input name="phone" required type="tel" autoComplete="tel" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 14, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>Property Address *</label>
              <input name="address" required type="text" autoComplete="street-address" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>City *</label>
              <input name="city" required type="text" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Zip Code *</label>
              <input name="zip" required type="text" inputMode="numeric" style={inputStyle} />
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Property Type</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: 9 }}>
              {PROP_TYPES.map((l) => (
                <button key={l} type="button" onClick={() => setPropType(l)} style={chipStyle(propType === l)}>
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Crawlspace size estimate</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 9 }}>
              {SIZE_OPTIONS.map((l) => (
                <button key={l} type="button" onClick={() => setSize(l)} style={chipStyle(size === l)}>
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>What are you experiencing? (check all that apply)</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 9 }}>
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

          {serviceType === 'virtual' && (
            <>
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Do you have a moisture meter?</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 9 }}>
                  {MOISTURE_METER_OPTIONS.map((l) => (
                    <button key={l} type="button" onClick={() => setMoistureMeter(l)} style={chipStyle(moistureMeter === l)}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Can you access your crawlspace yourself?</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 9 }}>
                  {ACCESS_OPTIONS.map((l) => (
                    <button key={l} type="button" onClick={() => setAccess(l)} style={chipStyle(access === l)}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {serviceType === 'in-person' && (
            <>
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Best days for your appointment (check all that apply)</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 9 }}>
                  {PREFERRED_DAYS.map((l) => {
                    const on = preferredDays.includes(l);
                    return (
                      <button key={l} type="button" onClick={() => toggleDay(l)} style={chipStyle(on)}>
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
                <label style={labelStyle}>Preferred contact method for scheduling</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 9 }}>
                  {PREFERRED_CONTACT.map((l) => (
                    <button key={l} type="button" onClick={() => setPreferredContact(l)} style={chipStyle(preferredContact === l)}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Any gate codes or access notes <span style={{ color: '#6b7280', fontWeight: 500 }}>(optional)</span></label>
                <input name="accessNotes" type="text" style={inputStyle} />
              </div>
            </>
          )}

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>
              Describe your crawlspace situation in your own words <span style={{ color: '#6b7280', fontWeight: 500 }}>(optional)</span>
            </label>
            <textarea
              name="description"
              rows={3}
              placeholder="e.g., We noticed a musty smell about 6 months ago. An inspector mentioned moisture but didn't give details. We got a $6,000 quote from a foundation company and wanted a second opinion before committing."
              style={{ ...inputStyle, resize: 'vertical' as const }}
            />
          </div>

          <div style={{ marginBottom: 22 }}>
            <label style={labelStyle}>How did you hear about us?</label>
            <select name="hearAbout" style={{ ...inputStyle, appearance: 'none' as const }}>
              {HEAR_OPTIONS.map((o) => (
                <option key={o} style={{ color: '#000', background: '#fff' }}>{o}</option>
              ))}
            </select>
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
            {loading ? 'Submitting…' : `Book My Assessment — ${serviceType === 'virtual' ? '$97' : '$197'}`}
            {!loading && (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            )}
          </button>

          <p style={{ fontSize: 12.5, color: '#6b7280', margin: '14px 0 0', textAlign: 'center' }}>
            After submitting, Jason will email you an invoice within a few hours. Once paid, he&apos;ll send everything you need to get started.
            Questions? Text Jason: 816-962-2111
          </p>
        </>
      )}
    </form>
  );
}
