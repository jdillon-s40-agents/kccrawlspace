'use client';
import { useEffect, useMemo, useState, KeyboardEvent, MouseEvent } from 'react';
import { SOP_DEFS, SOP_DIAGRAMS } from '@/lib/sopDiagrams';
import { SOP_CONTENT } from '@/lib/sopContent';
import { ENC_DIAGRAMS, BELLY_DIAGRAMS, DiagramDef } from '@/lib/sopLayers';

type SopKey = 'enc' | 'belly';

const GOLD = '#F5A623';
const PANEL = '#161616';
const LINE = '#2a2a2a';
const MUTED = '#9CA3AF';

const TAGS: Record<string, string> = {
  'Current practice': '#4ade80',
  Recommended: '#60a5fa',
  Confirm: '#fbbf24',
  Why: '#9ca3af',
  Tip: '#22d3ee',
  Mistake: '#f87171',
  Safety: '#f87171',
};

function Tagged({ text }: { text: string }) {
  const m = text.match(/^(Current practice|Recommended|Confirm|Why|Tip|Mistake|Safety):\s*([\s\S]*)$/);
  if (!m) return <>{text}</>;
  return (
    <>
      <b style={{ color: TAGS[m[1]] }}>{m[1]}:</b> {m[2]}
    </>
  );
}

function Diagram({ def, pid }: { def: DiagramDef; pid: string }) {
  const [sel, setSel] = useState(def.layers[0].id);
  const [hover, setHover] = useState<string | null>(null);
  const [step, setStep] = useState(def.layers.length);

  const shown = hover ?? sel;
  const info = def.layers.find((l) => l.id === shown) ?? def.layers[0];
  const hidden = def.layers.filter((l) => l.num > step).map((l) => l.id);

  const css = useMemo(
    () =>
      `#${pid} svg{display:block;min-width:720px;width:100%;height:auto}` +
      `#${pid} .ly{cursor:pointer;transition:opacity .25s,filter .15s;outline:none}` +
      `#${pid} .ly:focus-visible{filter:drop-shadow(0 0 5px #fff)}` +
      `#${pid} [data-layer="${shown}"]{filter:drop-shadow(0 0 7px ${GOLD}) drop-shadow(0 0 2px ${GOLD})}` +
      hidden.map((h) => `#${pid} [data-layer="${h}"]{opacity:.08;pointer-events:none}`).join(''),
    [pid, shown, hidden.join(',')]
  );

  const layerFrom = (t: EventTarget | null) => (t instanceof Element ? t.closest('[data-layer]')?.getAttribute('data-layer') ?? null : null);
  const onClick = (e: MouseEvent) => {
    const id = layerFrom(e.target);
    if (id) setSel(id);
  };
  const onKey = (e: KeyboardEvent) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const id = layerFrom(e.target);
    if (id) {
      e.preventDefault();
      setSel(id);
    }
  };

  return (
    <div style={{ background: PANEL, border: `1px solid ${LINE}`, borderRadius: 14, padding: 'clamp(12px,3vw,20px)', marginBottom: 18 }}>
      <h3 style={{ margin: '0 0 4px', fontSize: 20, color: '#fff' }}>{def.title}</h3>
      <p style={{ margin: '0 0 12px', fontSize: 14, color: MUTED, lineHeight: 1.5 }}>{def.blurb}</p>
      <style>{css}</style>
      <div
        id={pid}
        onClick={onClick}
        onKeyDown={onKey}
        onMouseOver={(e) => setHover(layerFrom(e.target))}
        onMouseLeave={() => setHover(null)}
        style={{ background: '#f7f5ef', borderRadius: 10, padding: 6, overflowX: 'auto' }}
        dangerouslySetInnerHTML={{ __html: SOP_DIAGRAMS[def.id] }}
      />
      {def.build && (
        <div style={{ margin: '14px 0 4px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#d1d5db' }}>
            <span style={{ minWidth: 150 }}>
              Build it up: <b style={{ color: GOLD }}>{step === def.layers.length ? 'all layers' : `step ${step}`}</b>
            </span>
            <input
              type="range"
              min={0}
              max={def.layers.length}
              value={step}
              onChange={(e) => {
                const n = Number(e.target.value);
                setStep(n);
                if (n > 0) setSel(def.layers[n - 1].id);
              }}
              style={{ flex: 1, accentColor: GOLD }}
              aria-label="Build the layers up in work order"
            />
          </label>
        </div>
      )}
      <div style={{ marginTop: 12, border: `1px solid ${GOLD}55`, background: '#1d1a12', borderRadius: 12, padding: '14px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <span style={{ background: GOLD, color: '#17325c', borderRadius: '50%', width: 28, height: 28, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flex: 'none' }}>{info.num}</span>
          <b style={{ color: '#fff', fontSize: 17 }}>{info.title}</b>
        </div>
        <p style={{ margin: '0 0 6px', color: '#e5e7eb', fontSize: 15, lineHeight: 1.5 }}>{info.what}</p>
        <ul style={{ margin: 0, paddingLeft: 18, listStyle: 'disc', color: '#d1d5db', fontSize: 14, lineHeight: 1.55 }}>
          {info.points.map((p) => (
            <li key={p} style={{ marginBottom: 2 }}>
              <Tagged text={p} />
            </li>
          ))}
        </ul>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
        {def.layers.map((l) => (
          <button
            key={l.id}
            type="button"
            onClick={() => setSel(l.id)}
            style={{ background: sel === l.id ? GOLD : '#222', color: sel === l.id ? '#17325c' : '#d1d5db', border: 'none', borderRadius: 999, padding: '6px 12px', fontSize: 13, fontWeight: 600, cursor: 'pointer', opacity: l.num > step ? 0.4 : 1 }}
          >
            {l.num}. {l.title}
          </button>
        ))}
      </div>
    </div>
  );
}

function Checklist({ sop }: { sop: SopKey }) {
  const crew = SOP_CONTENT[sop].crew;
  const key = `kc-sop-v1-${sop}`;
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) setDone(JSON.parse(raw));
    } catch {}
  }, [key]);
  const toggle = (id: string) => {
    setDone((d) => {
      const n = { ...d, [id]: !d[id] };
      try {
        localStorage.setItem(key, JSON.stringify(n));
      } catch {}
      return n;
    });
  };
  const reset = () => {
    setDone({});
    try {
      localStorage.removeItem(key);
    } catch {}
  };
  const total = crew.sections.reduce((n, s) => n + s.items.length, 0);
  const count = Object.values(done).filter(Boolean).length;

  return (
    <div style={{ background: PANEL, border: `1px solid ${LINE}`, borderRadius: 14, padding: 'clamp(12px,3vw,20px)', marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
        <h3 style={{ margin: 0, fontSize: 20, color: '#fff' }}>Crew checklist</h3>
        <div style={{ fontSize: 13, color: MUTED }}>
          {count} of {total} done{' '}
          <button type="button" onClick={reset} style={{ marginLeft: 8, background: 'none', border: `1px solid ${LINE}`, color: '#d1d5db', borderRadius: 8, padding: '4px 10px', cursor: 'pointer' }}>
            Clear
          </button>
        </div>
      </div>
      <div style={{ border: '1.5px solid #b3261e', background: '#2a1210', borderRadius: 10, padding: '10px 12px', marginBottom: 14, fontSize: 14, color: '#fecaca', lineHeight: 1.5 }}>
        <b style={{ color: '#f87171' }}>STOP and call Jason (816-962-2111) if:</b> {crew.stop}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 14 }}>
        {crew.sections.map((s, si) => (
          <div key={s.title}>
            <div style={{ background: '#17325c', color: '#fff', fontWeight: 700, fontSize: 13, letterSpacing: '.03em', padding: '4px 10px', borderRadius: 6, marginBottom: 4 }}>{s.title}</div>
            {s.items.map((it, ii) => {
              const id = `${si}-${ii}`;
              return (
                <label key={id} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '7px 2px', borderBottom: `1px solid ${LINE}`, cursor: 'pointer', fontSize: 14.5, lineHeight: 1.4, color: done[id] ? '#6b7280' : '#e5e7eb', textDecoration: done[id] ? 'line-through' : 'none' }}>
                  <input type="checkbox" checked={!!done[id]} onChange={() => toggle(id)} style={{ width: 20, height: 20, marginTop: 1, accentColor: GOLD, flex: 'none' }} />
                  <span dangerouslySetInnerHTML={{ __html: it }} />
                </label>
              );
            })}
          </div>
        ))}
      </div>
      <p style={{ margin: '12px 0 0', fontSize: 12, color: MUTED }}>Checks save on this device only.</p>
    </div>
  );
}

function Procedure({ sop }: { sop: SopKey }) {
  const c = SOP_CONTENT[sop];
  return (
    <div style={{ background: PANEL, border: `1px solid ${LINE}`, borderRadius: 14, padding: 'clamp(12px,3vw,20px)', marginBottom: 18 }}>
      <h3 style={{ margin: '0 0 4px', fontSize: 20, color: '#fff' }}>Procedure, step by step</h3>
      <p style={{ margin: '0 0 12px', fontSize: 13, color: MUTED }}>
        <b style={{ color: TAGS['Current practice'] }}>Current practice</b> is what you do today. <b style={{ color: TAGS.Recommended }}>Recommended</b> is a suggested standard. <b style={{ color: TAGS.Confirm }}>Confirm</b> is a decision still open.
      </p>
      {c.steps.map((st, i) => (
        <details key={st.title} style={{ borderTop: `1px solid ${LINE}`, padding: '10px 0' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 700, color: '#fff', fontSize: 16, listStyle: 'none', display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ background: '#17325c', color: '#fff', borderRadius: '50%', width: 26, height: 26, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flex: 'none' }}>{i + 1}</span>
            {st.title}
          </summary>
          <ul style={{ margin: '10px 0 0', paddingLeft: 44, listStyle: 'disc', color: '#d1d5db', fontSize: 14.5, lineHeight: 1.55 }}>
            {st.items.map((it) => (
              <li key={it} style={{ marginBottom: 5 }}>
                <Tagged text={it} />
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}

function Extras({ sop }: { sop: SopKey }) {
  const c = SOP_CONTENT[sop];
  const box = { background: PANEL, border: `1px solid ${LINE}`, borderRadius: 14, padding: '14px 18px', marginBottom: 12 } as const;
  return (
    <>
      <details style={box}>
        <summary style={{ cursor: 'pointer', fontWeight: 700, color: '#fff', fontSize: 16 }}>Before the job: go or no-go inspection</summary>
        <ul style={{ margin: '10px 0 0', paddingLeft: 20, listStyle: 'disc', color: '#d1d5db', fontSize: 14.5, lineHeight: 1.55 }}>
          {c.prep.map((p) => (
            <li key={p} style={{ marginBottom: 4 }}>
              <Tagged text={p} />
            </li>
          ))}
        </ul>
      </details>
      <details style={box}>
        <summary style={{ cursor: 'pointer', fontWeight: 700, color: '#fff', fontSize: 16 }}>Materials, tools, and PPE</summary>
        <ul style={{ margin: '10px 0 0', paddingLeft: 20, listStyle: 'disc', color: '#d1d5db', fontSize: 14.5, lineHeight: 1.55 }}>
          {c.materials.map((p) => (
            <li key={p} style={{ marginBottom: 4 }}>
              <Tagged text={p} />
            </li>
          ))}
        </ul>
      </details>
      <details style={box}>
        <summary style={{ cursor: 'pointer', fontWeight: 700, color: '#fff', fontSize: 16 }}>Decisions still open (Jason)</summary>
        <div style={{ overflowX: 'auto', marginTop: 10 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, color: '#d1d5db' }}>
            <thead>
              <tr>
                {c.decisions.head.map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '6px 8px', background: '#17325c', color: '#fff', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.05em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.decisions.rows.map((r) => (
                <tr key={r[0]}>
                  {r.map((cell, i) => (
                    <td key={i} style={{ padding: '6px 8px', borderBottom: `1px solid ${LINE}`, verticalAlign: 'top' }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </>
  );
}

export default function SopGuide() {
  const [sop, setSop] = useState<SopKey>('enc');
  const diagrams = sop === 'enc' ? ENC_DIAGRAMS : BELLY_DIAGRAMS;

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 clamp(12px,3vw,20px) 60px', color: '#e5e7eb' }}>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" dangerouslySetInnerHTML={{ __html: SOP_DEFS }} />
      <div role="tablist" style={{ display: 'flex', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
        {(['enc', 'belly'] as SopKey[]).map((k) => (
          <button
            key={k}
            role="tab"
            aria-selected={sop === k}
            onClick={() => setSop(k)}
            style={{ flex: '1 1 240px', padding: '14px 16px', borderRadius: 12, border: `1px solid ${sop === k ? GOLD : LINE}`, background: sop === k ? GOLD : PANEL, color: sop === k ? '#17325c' : '#e5e7eb', fontWeight: 800, fontSize: 16, cursor: 'pointer' }}
          >
            {SOP_CONTENT[k].title}
          </button>
        ))}
      </div>
      <p style={{ fontSize: 12.5, color: MUTED, margin: '0 0 18px', lineHeight: 1.5 }}>
        {SOP_CONTENT.version}. Draft for review: compare against product labels and manufacturer instructions, and update the version when it changes.
      </p>
      {diagrams.map((d) => (
        <Diagram key={sop + d.id} def={d} pid={`dg-${sop}-${d.id}`} />
      ))}
      <Checklist key={sop} sop={sop} />
      <Procedure key={'p' + sop} sop={sop} />
      <Extras key={'x' + sop} sop={sop} />
    </div>
  );
}
