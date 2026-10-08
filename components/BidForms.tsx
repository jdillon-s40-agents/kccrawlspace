'use client';
import { useEffect, useRef, useState, FormEvent } from 'react';

// One Formspree form per bid sheet.
const MOBILE_HOME_ENDPOINT = 'https://formspree.io/f/mzedrkzn';
const ENCAPSULATION_ENDPOINT = 'https://formspree.io/f/mgaokpov';

type FieldType = 'text' | 'number' | 'tel' | 'email' | 'date' | 'select' | 'textarea' | 'multi';
type Field = { label: string; type: FieldType; options?: string[]; required?: boolean; placeholder?: string; wide?: boolean };
type Section = { title: string; note?: string; fields: Field[] };
type Values = Record<string, string | string[]>;
type Calc = { label: string; value: string };

const num = (v: string | string[] | undefined) => {
  const n = parseFloat(typeof v === 'string' ? v : '');
  return Number.isFinite(n) ? n : 0;
};
const fmt = (n: number) => String(Math.round(n * 10) / 10);

const YES_NO_UNSURE = ['Yes', 'No', 'Unsure'];
const DEBRIS = ['None / light', 'Medium', 'Heavy', 'Very heavy'];
const ACCESS = ['Easy', 'Moderate', 'Tight', 'Very tough'];
const DIFFICULTY = ['Easy', 'Average', 'Hard'];

const CUSTOMER: Section = {
  title: 'Customer & Inspection',
  fields: [
    { label: 'Inspector', type: 'select', options: ['Jake', 'Jason', 'Other'], required: true },
    { label: 'Inspection date', type: 'date', required: true },
    { label: 'Customer name', type: 'text', required: true },
    { label: 'Customer phone', type: 'tel', required: true },
    { label: 'Customer email', type: 'email' },
    { label: 'Property address', type: 'text', required: true },
    { label: 'City / State', type: 'text', required: true },
    { label: 'Customer concerns / special requests', type: 'textarea', wide: true, placeholder: 'Health sensitivities, pets, timing, who supplies materials, anything they asked for' },
  ],
};

const CREW: Section = {
  title: 'Crew & Estimate Notes',
  fields: [
    { label: 'Recommended crew size', type: 'number' },
    { label: 'Estimated days', type: 'number' },
    { label: 'Job difficulty', type: 'select', options: DIFFICULTY },
    { label: 'Disposal needed', type: 'select', options: ['No', 'Trailer load', 'Dumpster', 'Not sure'] },
    { label: 'Photo location (album or link)', type: 'text', wide: true },
    { label: 'Other notes / measurements', type: 'textarea', wide: true },
  ],
};

const MOBILE_HOME: Section[] = [
  CUSTOMER,
  {
    title: 'Home',
    fields: [
      { label: 'Home width (ft)', type: 'number' },
      { label: 'Home length (ft)', type: 'number' },
      { label: 'Single or double wide', type: 'select', options: ['Single wide', 'Double wide', 'Other'] },
      { label: 'Approx. home age / year', type: 'text' },
    ],
  },
  {
    title: 'Underbelly & Insulation',
    fields: [
      { label: 'Belly wrap condition', type: 'select', options: ['Good', 'Minor tears', 'Moderate damage', 'Mostly missing / failed'] },
      { label: 'Share of underbelly needing work', type: 'select', options: ['Under 10%', '10-25%', '25-50%', '50-75%', '75-100%'] },
      { label: 'Approx. repair area (sq ft)', type: 'number' },
      { label: 'Number of separate repair spots', type: 'number' },
      { label: 'Existing insulation condition', type: 'select', options: ['Good', 'Compressed / sagging', 'Wet / moldy', 'Missing in areas', 'Mostly missing'] },
      { label: 'Existing insulation type', type: 'select', options: ['Fiberglass batt', 'Blown', 'Foam board', 'Unknown / other'] },
      { label: 'Who supplies insulation & belly wrap', type: 'select', options: ['KC Crawl Space supplies', 'Customer supplies', 'Split - see notes'] },
      { label: 'Straps', type: 'select', options: ['Existing straps OK', 'Need new straps - full length', 'Need some straps', 'Not needed'] },
      { label: 'Number of straps needed', type: 'number' },
    ],
  },
  {
    title: 'Plumbing & Ducts',
    fields: [
      { label: 'Water line needing insulation (ft)', type: 'number' },
      { label: 'Main water line needing heat wrap (ft)', type: 'number' },
      { label: 'Heat tape', type: 'select', options: ['None', 'Present - working', 'Present - not working / unknown'] },
      { label: 'Power outlet within reach for heat tape', type: 'select', options: YES_NO_UNSURE },
      { label: 'Visible plumbing leaks', type: 'select', options: ['No', 'Yes - minor', 'Yes - active / major'] },
      { label: 'Ductwork condition', type: 'select', options: ['Good', 'Leaking / disconnected', 'Damaged - needs replacement', 'Missing', 'Not visible'] },
      { label: 'Duct type', type: 'select', options: ['Flex', 'Metal', 'Mixed', 'Not visible'] },
      { label: 'Duct to repair / replace (ft)', type: 'number' },
    ],
  },
  {
    title: 'Skirting',
    fields: [
      { label: 'Skirting type', type: 'select', options: ['Vinyl', 'Metal', 'Wood', 'House siding / other', 'None'] },
      { label: 'Skirting condition', type: 'select', options: ['Good', 'Some damaged panels', 'Mostly damaged', 'Missing'] },
      { label: 'Skirting work wanted', type: 'select', options: ['No skirting work', 'Repair damaged panels', 'Replace all - vinyl', 'Replace all - metal', 'Replace all - wood'] },
      { label: 'Damaged panels to replace (count)', type: 'number' },
      { label: 'Skirting height range (in)', type: 'text', placeholder: 'e.g. 24-48' },
      { label: 'Bottom channel / track', type: 'select', options: ['OK', 'Loose / damaged', 'Missing'] },
    ],
  },
  {
    title: 'Site Conditions',
    fields: [
      { label: 'Clearance - low end (in)', type: 'number' },
      { label: 'Clearance - high end (in)', type: 'number' },
      { label: 'Access difficulty', type: 'select', options: ACCESS },
      { label: 'Debris level', type: 'select', options: DEBRIS },
      { label: 'Animal activity', type: 'select', options: ['None', 'Old signs', 'Active signs / live animals'] },
      { label: 'Moisture / mold', type: 'multi', options: ['Visible mold', 'Standing water', 'Damp soil', 'Musty odor', 'None'], wide: true },
      { label: 'Structural concerns', type: 'multi', options: ['Sagging floor', 'Rotted framing / joists', 'Broken or missing supports', 'Frame / outrigger damage', 'None observed'], wide: true },
    ],
  },
  CREW,
];

const ENCAPSULATION: Section[] = [
  CUSTOMER,
  {
    title: 'Crawl Space Areas',
    note: 'Measure each separate area. Leave unused areas blank.',
    fields: [
      { label: 'Area 1 length (ft)', type: 'number' },
      { label: 'Area 1 width (ft)', type: 'number' },
      { label: 'Area 2 length (ft)', type: 'number' },
      { label: 'Area 2 width (ft)', type: 'number' },
      { label: 'Area 3 length (ft)', type: 'number' },
      { label: 'Area 3 width (ft)', type: 'number' },
      { label: 'Wall height (in)', type: 'number' },
      { label: 'Foundation wall type', type: 'select', options: ['Block', 'Poured concrete', 'Stone / brick', 'Wood', 'Other'] },
    ],
  },
  {
    title: 'Access & Support',
    fields: [
      { label: 'Clearance - low end (in)', type: 'number' },
      { label: 'Clearance - high end (in)', type: 'number' },
      { label: 'Access difficulty', type: 'select', options: ACCESS },
      { label: 'Access point(s)', type: 'multi', options: ['Interior hatch', 'Exterior door', 'Vent opening', 'Other'], wide: true },
      { label: 'Number of access panels to add', type: 'number' },
      { label: 'Number of piers / posts', type: 'number' },
      { label: 'House jacks needed (count)', type: 'number' },
      { label: 'Sagging floors above', type: 'select', options: ['No', 'Slight', 'Noticeable'] },
      { label: 'Number of foundation vents', type: 'number' },
    ],
  },
  {
    title: 'Moisture, Drainage & Mold',
    fields: [
      { label: 'Ground surface', type: 'select', options: ['Dirt', 'Gravel', 'Existing plastic', 'Concrete', 'Mixed'] },
      { label: 'Ground level', type: 'select', options: ['Level', 'Uneven - needs leveling'] },
      { label: 'Water / moisture', type: 'select', options: ['Dry', 'Damp', 'Wet', 'Standing water'] },
      { label: 'Water stains / efflorescence on walls', type: 'select', options: ['No', 'Yes'] },
      { label: 'Drainage', type: 'select', options: ['None', 'Existing sump pump', 'Existing drain line', 'Needs drainage'] },
      { label: 'Drain line extension needed (ft)', type: 'number' },
      { label: 'Animal burrows / digging', type: 'select', options: ['No', 'Yes'] },
      { label: 'Mold', type: 'select', options: ['None', 'Light', 'Moderate', 'Heavy'] },
      { label: 'Odor', type: 'select', options: ['None', 'Musty', 'Strong'] },
      { label: 'Relative humidity reading (%)', type: 'number' },
      { label: 'Joist moisture reading (%)', type: 'number' },
    ],
  },
  {
    title: 'Insulation, Sealing & Mechanicals',
    fields: [
      { label: 'Existing vapor barrier', type: 'select', options: ['None', 'Thin plastic - remove', 'Existing 6-mil+ - leave', 'Other'] },
      { label: 'Floor joist insulation', type: 'select', options: ['None', 'Fiberglass - good', 'Fiberglass - wet / falling', 'Foam', 'Other'] },
      { label: 'Insulation removal needed (sq ft)', type: 'number' },
      { label: 'Rim joist insulation', type: 'select', options: ['None', 'Fiberglass', 'Foam', 'Other'] },
      { label: 'Rim joist perimeter (ft)', type: 'number' },
      { label: 'Rim joist spray foam wanted', type: 'select', options: ['Yes', 'No', 'Discuss'] },
      { label: 'Openings in floor above to seal (count)', type: 'number' },
      { label: 'Ductwork in crawl space', type: 'select', options: ['No duct', 'Good', 'Leaking'] },
      { label: 'Plumbing leaks', type: 'select', options: ['No', 'Yes - minor', 'Yes - active'] },
    ],
  },
  {
    title: 'Equipment & Customer Needs',
    fields: [
      { label: 'Dehumidifier recommended', type: 'select', options: ['None', '70 PPD compact', '120 PPD medium', '180 PPD large'] },
      { label: 'Power outlet in / near crawl space', type: 'select', options: ['Yes', 'No - electrician needed', 'Unsure'] },
      { label: 'Condensate drain route', type: 'select', options: ['Gravity to exterior', 'Pump to drain', 'Pump to sump', 'To be determined'] },
      { label: 'Sump pump', type: 'select', options: ['Not needed', 'Existing OK', 'New needed'] },
      { label: 'Chemical sensitivities in household', type: 'select', options: ['No', 'Yes - discuss foam / products'] },
      { label: 'Debris level', type: 'select', options: DEBRIS },
    ],
  },
  CREW,
];

type FormDef = { id: string; title: string; endpoint: string; blurb: string; sections: Section[]; calc: (v: Values) => Calc[] };

const FORMS: FormDef[] = [
  {
    id: 'mobile-home-underbelly',
    title: 'Mobile Home Underbelly Repair',
    endpoint: MOBILE_HOME_ENDPOINT,
    blurb: 'Underbelly, insulation, ducts, plumbing and skirting.',
    sections: MOBILE_HOME,
    calc: (v) => {
      const w = num(v['Home width (ft)']);
      const l = num(v['Home length (ft)']);
      if (!w || !l) return [];
      return [
        { label: 'Calculated home size (sq ft)', value: fmt(w * l) },
        { label: 'Calculated perimeter (ft)', value: fmt(2 * (w + l)) },
      ];
    },
  },
  {
    id: 'crawl-space-encapsulation',
    title: 'Crawl Space Encapsulation',
    endpoint: ENCAPSULATION_ENDPOINT,
    blurb: 'Crawl space areas, moisture, insulation, equipment.',
    sections: ENCAPSULATION,
    calc: (v) => {
      const h = num(v['Wall height (in)']);
      let floor = 0;
      let perim = 0;
      for (const n of [1, 2, 3]) {
        const l = num(v[`Area ${n} length (ft)`]);
        const w = num(v[`Area ${n} width (ft)`]);
        if (l && w) {
          floor += l * w;
          perim += 2 * (l + w);
        }
      }
      if (!floor) return [];
      const out: Calc[] = [{ label: 'Calculated floor area (sq ft)', value: fmt(floor) }];
      if (h) out.push({ label: 'Approx. vapor barrier needed incl. walls (sq ft)', value: fmt(floor + (perim * h) / 12) });
      return out;
    },
  },
];

const STYLE = `
.bid-wrap{max-width:860px;margin:0 auto;padding:0 clamp(14px,4vw,22px) 60px;font-family:'Inter',sans-serif;color:#e5e7eb}
.bid-acc{border:1.5px solid rgba(255,255,255,.14);border-radius:14px;margin-bottom:14px;background:rgba(255,255,255,.03);overflow:hidden}
.bid-acc.open{border-color:#F5A623}
.bid-acc-btn{width:100%;display:flex;align-items:center;justify-content:space-between;gap:12px;background:none;border:0;color:#fff;cursor:pointer;text-align:left;padding:18px 18px;min-height:64px;font:inherit}
.bid-acc-title{font:800 clamp(20px,5vw,26px) 'Barlow Condensed',sans-serif;text-transform:uppercase;letter-spacing:.02em}
.bid-acc-blurb{font-size:13px;color:#9CA3AF;margin-top:2px}
.bid-chev{flex:none;transition:transform .2s;color:#F5A623}
.bid-acc.open .bid-chev{transform:rotate(180deg)}
.bid-panel{padding:4px 16px 20px}
.bid-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:14px 14px 4px;margin-bottom:14px}
.bid-card h3{font:700 12px 'Inter',sans-serif;color:#F5A623;text-transform:uppercase;letter-spacing:.1em;margin:0 0 12px}
.bid-note{font-size:12.5px;color:#9CA3AF;margin:-4px 0 12px}
.bid-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px 14px}
.bid-field{margin-bottom:12px}
.bid-field.wide{grid-column:1/-1}
.bid-field label,.bid-field .bid-lbl{display:block;font:600 13px 'Inter',sans-serif;color:#cbd5e1;margin-bottom:6px}
.bid-field input,.bid-field select,.bid-field textarea{width:100%;background:rgba(255,255,255,.06);border:1.5px solid rgba(255,255,255,.18);border-radius:9px;padding:12px 12px;color:#fff;font:500 16px 'Inter',sans-serif;outline:none;min-height:46px}
.bid-field select option{color:#111}
.bid-field textarea{min-height:92px;resize:vertical}
.bid-field input:focus,.bid-field select:focus,.bid-field textarea:focus{border-color:#F5A623}
.bid-multi{display:flex;flex-wrap:wrap;gap:8px}
.bid-chip{display:inline-flex;align-items:center;gap:8px;padding:10px 12px;border-radius:9px;border:1.5px solid rgba(255,255,255,.18);background:rgba(255,255,255,.05);font:600 14px 'Inter',sans-serif;cursor:pointer;min-height:44px;user-select:none}
.bid-chip.on{background:#F5A623;border-color:#F5A623;color:#0D0D0D}
.bid-chip input{position:absolute;opacity:0;pointer-events:none;width:0;height:0}
.bid-calc{background:rgba(245,166,35,.1);border:1.5px solid #F5A623;border-radius:10px;padding:12px 14px;margin-bottom:14px;font-size:14px}
.bid-calc div{display:flex;justify-content:space-between;gap:10px;padding:2px 0}
.bid-calc b{color:#F5A623}
.bid-actions{display:flex;flex-wrap:wrap;gap:10px;align-items:center}
.bid-submit{background:#F5A623;color:#0D0D0D;border:0;border-radius:10px;padding:15px 26px;font:800 16px 'Inter',sans-serif;cursor:pointer;min-height:52px}
.bid-submit[disabled]{opacity:.6;cursor:wait}
.bid-clear{background:none;border:1.5px solid rgba(255,255,255,.25);color:#cbd5e1;border-radius:10px;padding:14px 18px;font:600 14px 'Inter',sans-serif;cursor:pointer;min-height:52px}
.bid-err{background:rgba(220,38,38,.15);border:1.5px solid #DC2626;border-radius:10px;padding:12px 14px;margin-bottom:12px;font-size:14px;color:#fecaca}
.bid-ok{background:rgba(22,163,74,.12);border:1.5px solid #16A34A;border-radius:14px;padding:26px;text-align:center}
.bid-ok h3{font:800 22px 'Inter',sans-serif;color:#fff;margin:0 0 8px}
.bid-ok p{margin:0 0 16px;color:#c3d0e6;font-size:15px}
.bid-hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
`;

function todayLocal() {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function BidForm({ def }: { def: FormDef }) {
  const storeKey = `kc-bid-v1-${def.id}`;
  const [values, setValues] = useState<Values>({});
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    let saved: Values = {};
    try {
      saved = JSON.parse(localStorage.getItem(storeKey) || '{}');
    } catch {}
    setValues({ 'Inspection date': todayLocal(), ...saved });
    setLoaded(true);
  }, [storeKey]);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(storeKey, JSON.stringify(values));
    } catch {}
  }, [values, loaded, storeKey]);

  const set = (label: string, v: string | string[]) => setValues((s) => ({ ...s, [label]: v }));
  const toggle = (label: string, opt: string) => {
    const cur = Array.isArray(values[label]) ? (values[label] as string[]) : [];
    set(label, cur.includes(opt) ? cur.filter((x) => x !== opt) : [...cur, opt]);
  };

  const calcs = def.calc(values);

  function reset() {
    try {
      localStorage.removeItem(storeKey);
    } catch {}
    setValues({ 'Inspection date': todayLocal() });
    setStatus('idle');
    setError('');
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError('');
    if (new FormData(formRef.current!).get('_gotcha')) return;
    if (def.endpoint.includes('REPLACE')) {
      setError('The email endpoint is not set up yet. Your entries are saved on this device.');
      return;
    }
    const body: Record<string, string> = {};
    for (const [k, v] of Object.entries(values)) {
      const out = Array.isArray(v) ? v.join(', ') : v;
      if (out && out.trim()) body[k] = out.trim();
    }
    for (const c of calcs) body[c.label] = c.value;
    body['Form'] = def.title;
    body['_subject'] = `Bid sheet: ${def.title} - ${values['Customer name'] || 'Unknown'} - ${values['Property address'] || ''}`;
    setStatus('sending');
    try {
      const res = await fetch(def.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        try {
          localStorage.removeItem(storeKey);
        } catch {}
        setStatus('sent');
      } else {
        const data = await res.json().catch(() => ({}));
        setError((data as { error?: string }).error || 'Could not send. Entries are saved on this device, try again.');
        setStatus('idle');
      }
    } catch {
      setError('No connection. Entries are saved on this device, try again when you have signal.');
      setStatus('idle');
    }
  }

  if (status === 'sent') {
    return (
      <div className="bid-ok">
        <h3>Bid sheet sent</h3>
        <p>{def.title} for {String(values['Customer name'] || 'the customer')} was submitted.</p>
        <button type="button" className="bid-submit" onClick={reset}>Start a new sheet</button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={submit}>
      <div className="bid-hp" aria-hidden="true">
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>
      {def.sections.map((sec) => (
        <div className="bid-card" key={sec.title}>
          <h3>{sec.title}</h3>
          {sec.note && <p className="bid-note">{sec.note}</p>}
          <div className="bid-grid">
            {sec.fields.map((f) => {
              const id = `${def.id}-${f.label}`.replace(/\W+/g, '-');
              const cur = values[f.label];
              return (
                <div className={`bid-field${f.wide ? ' wide' : ''}`} key={f.label}>
                  {f.type === 'multi' ? (
                    <>
                      <span className="bid-lbl">{f.label}</span>
                      <div className="bid-multi">
                        {f.options!.map((o) => {
                          const on = Array.isArray(cur) && cur.includes(o);
                          return (
                            <label key={o} className={`bid-chip${on ? ' on' : ''}`}>
                              <input type="checkbox" checked={on} onChange={() => toggle(f.label, o)} />
                              {o}
                            </label>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <>
                      <label htmlFor={id}>{f.label}{f.required ? ' *' : ''}</label>
                      {f.type === 'select' ? (
                        <select id={id} required={f.required} value={(cur as string) || ''} onChange={(e) => set(f.label, e.target.value)}>
                          <option value="">Select...</option>
                          {f.options!.map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      ) : f.type === 'textarea' ? (
                        <textarea id={id} required={f.required} placeholder={f.placeholder} value={(cur as string) || ''} onChange={(e) => set(f.label, e.target.value)} />
                      ) : (
                        <input
                          id={id}
                          type={f.type}
                          inputMode={f.type === 'number' ? 'decimal' : undefined}
                          step={f.type === 'number' ? 'any' : undefined}
                          min={f.type === 'number' ? 0 : undefined}
                          required={f.required}
                          placeholder={f.placeholder}
                          value={(cur as string) || ''}
                          onChange={(e) => set(f.label, e.target.value)}
                        />
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {calcs.length > 0 && (
        <div className="bid-calc">
          {calcs.map((c) => (
            <div key={c.label}><span>{c.label}</span><b>{c.value}</b></div>
          ))}
        </div>
      )}

      {error && <div className="bid-err" role="alert">{error}</div>}
      <div className="bid-actions">
        <button type="submit" className="bid-submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Submit bid sheet'}
        </button>
        <button type="button" className="bid-clear" onClick={() => { if (confirm('Clear everything on this sheet?')) reset(); }}>
          Clear sheet
        </button>
      </div>
    </form>
  );
}

export default function BidForms() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="bid-wrap">
      <style>{STYLE}</style>
      {FORMS.map((def) => {
        const isOpen = open === def.id;
        return (
          <div className={`bid-acc${isOpen ? ' open' : ''}`} key={def.id}>
            <button
              type="button"
              className="bid-acc-btn"
              aria-expanded={isOpen}
              aria-controls={`panel-${def.id}`}
              onClick={() => setOpen(isOpen ? null : def.id)}
            >
              <span>
                <span className="bid-acc-title">{def.title}</span>
                <div className="bid-acc-blurb">{def.blurb}</div>
              </span>
              <svg className="bid-chev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
            </button>
            <div className="bid-panel" id={`panel-${def.id}`} hidden={!isOpen}>
              <BidForm def={def} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
