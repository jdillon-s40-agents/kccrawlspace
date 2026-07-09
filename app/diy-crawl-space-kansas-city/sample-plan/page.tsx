import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'Sample DIY Crawl Space Game Plan | KC Crawl Space Specialists' },
  description:
    'See a real example of the written game plan you get with a $97 DIY crawlspace assessment — findings, materials list with costs, and step-by-step install instructions.',
  alternates: {
    canonical: 'https://www.crawlspacekc.com/diy-crawl-space-kansas-city/sample-plan/',
  },
};

export default function SampleGamePlanPage() {
  return (
    <main>
      {/* Intro */}
      <section style={{ background: '#0D0D0D', padding: 'clamp(52px,8vw,80px) clamp(16px,5vw,24px) clamp(32px,5vw,48px)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, color: '#F5A623', margin: '0 0 16px' }}>
            Sample Deliverable
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(32px,6vw,54px)', textTransform: 'uppercase' as const, color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
            This Is Exactly What You Get
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '58ch', margin: '0 auto' }}>
            A real game plan Jason wrote for a KC homeowner (name and address redacted for privacy). Every plan is built for the
            specific crawlspace it covers — findings, a written take from Jason, a complete materials list with real prices and buy
            links, and step-by-step install instructions.
          </p>
        </div>
      </section>

      {/* Sample document */}
      <section style={{ background: '#0D0D0D', padding: '0 clamp(16px,5vw,24px) clamp(52px,8vw,80px)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <SampleGamePlanDoc />
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#F5A623', padding: 'clamp(52px,8vw,80px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5vw,44px)', textTransform: 'uppercase' as const, color: '#1B3A6B', margin: '0 0 16px' }}>
            Get Your Own Game Plan
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: '#1B3A6B', margin: '0 0 28px' }}>
            Built for your specific crawlspace — starting at $97.
          </p>
          <Link
            href="/diy-crawl-space-kansas-city/#assessment-form"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#1B3A6B', color: '#fff', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 28px', borderRadius: 10, minHeight: 54, marginBottom: 18 }}
          >
            Get My DIY Game Plan ↓
          </Link>
          <p style={{ fontSize: 15, color: '#1B3A6B', margin: 0 }}>
            Or text Jason directly: <a href={PHONE_HREF} style={{ color: '#1B3A6B', fontWeight: 800 }}>{PHONE}</a>
          </p>
        </div>
      </section>
    </main>
  );
}

function SampleGamePlanDoc() {
  return (
    <>
      <style>{`
        .gp-doc{max-width:100%;background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;overflow:hidden;box-shadow:0 24px 60px -20px rgba(0,0,0,.6)}
        .gp-header{background:#1B3A6B;padding:20px 24px;display:flex;align-items:center;gap:16px}
        .gp-logo-badge{background:#F5A623;color:#1B3A6B;font-size:11px;font-weight:700;padding:3px 8px;border-radius:4px;white-space:nowrap}
        .gp-header-text h1{color:#fff;font-size:16px;font-weight:700;margin:0}
        .gp-header-text p{color:#93A8C4;font-size:12px;margin-top:2px}
        .gp-gold-bar{height:3px;background:#F5A623}
        .gp-meta{display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;border-bottom:1px solid rgba(0,0,0,.08)}
        .gp-meta-item{padding:12px 16px;border-right:1px solid rgba(0,0,0,.08)}
        .gp-meta-item:last-child{border-right:none}
        .gp-meta-label{font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em}
        .gp-meta-val{font-size:13px;font-weight:600;color:#111827;margin-top:2px}
        .gp-meta-val.gp-redacted{filter:blur(4px);user-select:none;color:#374151}
        .gp-redacted-note{font-size:9.5px;color:#9CA3AF;margin-top:3px;font-style:italic}
        .gp-section{padding:16px 20px;border-bottom:1px solid rgba(0,0,0,.08)}
        .gp-section-title{font-size:13px;font-weight:700;color:#1B3A6B;display:flex;align-items:center;gap:6px;margin-bottom:10px;padding-bottom:6px;border-bottom:2px solid #F5A623}
        .gp-section-title span{background:#F5A623;color:#1B3A6B;font-size:10px;font-weight:700;padding:1px 6px;border-radius:3px}
        .gp-findings{display:grid;grid-template-columns:1fr 1fr;gap:6px}
        .gp-finding{background:#F4F6FA;border-radius:6px;padding:8px 10px;display:flex;justify-content:space-between;align-items:center;border-left:3px solid transparent}
        .gp-finding.gp-red{border-left-color:#E24B4A}
        .gp-finding.gp-amber{border-left-color:#EF9F27}
        .gp-finding.gp-green{border-left-color:#639922}
        .gp-finding-label{font-size:12px;color:#6b7280}
        .gp-finding-val{font-size:12px;font-weight:600}
        .gp-finding-val.gp-red{color:#E24B4A}
        .gp-finding-val.gp-amber{color:#EF9F27}
        .gp-finding-val.gp-green{color:#639922}
        .gp-jason-note{background:#EFF6FF;border-left:3px solid #2563A8;border-radius:0 6px 6px 0;padding:10px 12px;font-size:12px;color:#111827;line-height:1.6}
        .gp-products-table{width:100%;font-size:12px;border-collapse:collapse}
        .gp-products-table th{background:#1B3A6B;color:#fff;padding:6px 10px;text-align:left;font-weight:600;font-size:11px}
        .gp-products-table td{padding:6px 10px;border-bottom:1px solid rgba(0,0,0,.08);color:#111827}
        .gp-products-table tr:nth-child(even) td{background:#F4F6FA}
        .gp-buy-link{color:#2563A8;font-size:11px;text-decoration:none;display:flex;align-items:center;gap:3px}
        .gp-cost{font-weight:600;color:#166534;text-align:right}
        .gp-total-row td{background:#FEF3D7!important;font-weight:700;color:#1B3A6B}
        .gp-cart-box{background:#EFF6FF;border:1px solid #B5D4F4;border-radius:6px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;margin-top:10px;flex-wrap:wrap;gap:8px}
        .gp-cart-box-text{font-size:12px;color:#185FA5}
        .gp-cart-btn{background:#1B3A6B;color:#F5A623;font-size:11px;font-weight:700;padding:5px 12px;border-radius:4px;border:none}
        .gp-steps{display:flex;flex-direction:column;gap:6px}
        .gp-step{background:#1B3A6B;border-radius:6px;overflow:hidden}
        .gp-step-header{display:flex;align-items:center;gap:10px;padding:8px 12px}
        .gp-step-num{background:#F5A623;color:#1B3A6B;font-size:11px;font-weight:700;padding:1px 7px;border-radius:3px;white-space:nowrap}
        .gp-step-title{color:#fff;font-size:12px;font-weight:600}
        .gp-step-body{background:#152d52;padding:6px 12px 8px;display:grid;grid-template-columns:1fr 1fr;gap:2px}
        .gp-step-item{color:#93A8C4;font-size:11px;line-height:1.6;padding-left:10px;position:relative}
        .gp-step-item::before{content:"•";position:absolute;left:2px;color:#F5A623}
        .gp-cost-compare{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}
        .gp-compare-card{border-radius:6px;padding:10px 12px;border:1px solid rgba(0,0,0,.08)}
        .gp-compare-card.gp-diy{background:#DCFCE7;border-color:#97C459}
        .gp-compare-card.gp-pro{background:#FEE2E2;border-color:#F09595}
        .gp-compare-label{font-size:11px;font-weight:700}
        .gp-compare-label.gp-diy{color:#27500A}
        .gp-compare-label.gp-pro{color:#A32D2D}
        .gp-compare-amount{font-size:20px;font-weight:700;margin-top:3px}
        .gp-compare-amount.gp-diy{color:#166534}
        .gp-compare-amount.gp-pro{color:#991B1B}
        .gp-compare-sub{font-size:11px;color:#6b7280;margin-top:1px}
        .gp-savings-bar{background:#FEF3D7;border:1px solid #FAC775;border-radius:6px;padding:8px 14px;display:flex;justify-content:space-between;align-items:center;margin-top:6px;flex-wrap:wrap;gap:6px}
        .gp-savings-label{font-size:12px;color:#854F0B;font-weight:600}
        .gp-savings-amount{font-size:14px;font-weight:700;color:#633806}
        .gp-outcomes{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:6px}
        .gp-outcome{background:#F4F6FA;border-radius:6px;padding:8px;text-align:center}
        .gp-outcome-time{font-size:12px;font-weight:700;color:#1B3A6B}
        .gp-outcome-desc{font-size:11px;color:#6b7280;margin-top:2px}
        .gp-footer-box{background:#1B3A6B;padding:14px 20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px}
        .gp-footer-left p{color:#93A8C4;font-size:11px;margin:0}
        .gp-footer-left h3{color:#F5A623;font-size:14px;font-weight:700;margin-top:1px}
        .gp-footer-right{text-align:right}
        .gp-footer-right p{color:#93A8C4;font-size:11px;margin:0}
        .gp-footer-note{font-size:10px;color:#93A8C4;padding:8px 20px;background:#152d52;text-align:center}
        @media (max-width: 560px) {
          .gp-meta{grid-template-columns:1fr}
          .gp-meta-item{border-right:none;border-bottom:1px solid rgba(0,0,0,.08)}
          .gp-meta-item:last-child{border-bottom:none}
          .gp-findings{grid-template-columns:1fr}
          .gp-step-body{grid-template-columns:1fr}
          .gp-cost-compare{grid-template-columns:1fr}
          .gp-outcomes{grid-template-columns:1fr 1fr}
          .gp-products-table{font-size:11px}
          .gp-products-table th:nth-child(1), .gp-products-table td:nth-child(1){display:none}
        }
      `}</style>

      <div className="gp-doc">
        <div className="gp-header">
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' as const }}>
              <div className="gp-logo-badge">KC CRAWL SPACE SPECIALISTS</div>
              <span style={{ color: '#F5A623', fontSize: 11 }}>★ Kansas City&apos;s Only Crawlspace Specialist</span>
            </div>
            <div className="gp-header-text">
              <h1>Crawlspace Assessment &amp; Game Plan</h1>
              <p>Prepared by Jason Dillon · 816-962-2111 · CrawlspaceKC.com</p>
            </div>
          </div>
        </div>
        <div className="gp-gold-bar" />

        <div className="gp-meta">
          <div className="gp-meta-item">
            <div className="gp-meta-label">Prepared for</div>
            <div className="gp-meta-val gp-redacted">Mike &amp; Sarah Thompson</div>
            <div className="gp-redacted-note">Name blurred for customer privacy</div>
          </div>
          <div className="gp-meta-item">
            <div className="gp-meta-label">Property</div>
            <div className="gp-meta-val">Raytown, MO</div>
          </div>
          <div className="gp-meta-item">
            <div className="gp-meta-label">Assessment type</div>
            <div className="gp-meta-val">Virtual · Order #KCS-0047</div>
          </div>
        </div>

        <div className="gp-section">
          <div className="gp-section-title"><span>01</span> What we found</div>
          <div className="gp-findings">
            <div className="gp-finding gp-red"><span className="gp-finding-label">NW corner moisture</span><span className="gp-finding-val gp-red">84% RH ⚠</span></div>
            <div className="gp-finding gp-red"><span className="gp-finding-label">NE corner moisture</span><span className="gp-finding-val gp-red">79% RH ⚠</span></div>
            <div className="gp-finding gp-amber"><span className="gp-finding-label">Center moisture</span><span className="gp-finding-val gp-amber">76% RH</span></div>
            <div className="gp-finding gp-amber"><span className="gp-finding-label">SE corner moisture</span><span className="gp-finding-val gp-amber">71% RH</span></div>
            <div className="gp-finding gp-red"><span className="gp-finding-label">Existing vapor barrier</span><span className="gp-finding-val gp-red">None present</span></div>
            <div className="gp-finding gp-amber"><span className="gp-finding-label">Mold on joists</span><span className="gp-finding-val gp-amber">Minor — south side</span></div>
            <div className="gp-finding gp-green"><span className="gp-finding-label">Standing water</span><span className="gp-finding-val gp-green">None</span></div>
            <div className="gp-finding gp-amber"><span className="gp-finding-label">Foundation vents</span><span className="gp-finding-val gp-amber">8 open — must seal</span></div>
          </div>
          <div className="gp-jason-note" style={{ marginTop: 10 }}>
            <strong style={{ color: '#185FA5' }}>Jason&apos;s take:</strong> Your crawlspace has no vapor barrier and 8 open vents — every summer KC&apos;s 80%+ outdoor humidity pours right in. The minor mold on south joists is surface-level and treatable with borate spray before install. Fix the small pipe drip first, then this is a very manageable weekend DIY project. The dehumidifier is strongly recommended given your readings.
          </div>
        </div>

        <div className="gp-section">
          <div className="gp-section-title"><span>02</span> Prep work first</div>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            <div className="gp-finding gp-amber" style={{ flexDirection: 'column' as const, alignItems: 'flex-start', gap: 2 }}>
              <span className="gp-finding-label" style={{ fontWeight: 600, color: '#111827' }}>① Fix plumbing drip (south pipe) — before anything else</span>
              <span className="gp-finding-label">Small repair ~$150–$300 by plumber. Allow 48 hrs to dry.</span>
            </div>
            <div className="gp-finding gp-red" style={{ flexDirection: 'column' as const, alignItems: 'flex-start', gap: 2 }}>
              <span className="gp-finding-label" style={{ fontWeight: 600, color: '#111827' }}>② Treat mold on south joists with Boracare spray</span>
              <span className="gp-finding-label">Full coverage spray, 2 hr dry time, photograph before &amp; after.</span>
            </div>
            <div className="gp-finding gp-green" style={{ flexDirection: 'column' as const, alignItems: 'flex-start', gap: 2 }}>
              <span className="gp-finding-label" style={{ fontWeight: 600, color: '#111827' }}>③ Clear all debris and remove damaged insulation</span>
              <span className="gp-finding-label">Bag everything, remove from crawlspace before installing barrier.</span>
            </div>
          </div>
        </div>

        <div className="gp-section">
          <div className="gp-section-title"><span>03</span> Complete materials list — 1,200 sq ft</div>
          <div style={{ overflowX: 'auto' as const }}>
            <table className="gp-products-table">
              <thead>
                <tr><th>#</th><th>Product</th><th>Qty</th><th>Est. cost</th><th>Link</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>20-mil white vapor barrier (10×100 ft rolls)</td><td>2 rolls</td><td className="gp-cost">$378</td><td><span className="gp-buy-link">Buy →</span></td></tr>
                <tr><td>2</td><td>Crawlspace seam tape — 3-inch waterproof</td><td>4 rolls</td><td className="gp-cost">$56</td><td><span className="gp-buy-link">Buy →</span></td></tr>
                <tr><td>3</td><td>Aluminum termination bar — 8 ft sections</td><td>15 pcs</td><td className="gp-cost">$67</td><td><span className="gp-buy-link">Buy →</span></td></tr>
                <tr><td>4</td><td>Tapcon masonry screws 3/16&quot; × 1-3/4&quot; (100ct)</td><td>1 box</td><td className="gp-cost">$18</td><td><span className="gp-buy-link">Buy →</span></td></tr>
                <tr><td>5</td><td>Foam vent block-off plates (assorted)</td><td>10 pack</td><td className="gp-cost">$28</td><td><span className="gp-buy-link">Buy →</span></td></tr>
                <tr><td>6</td><td>Great Stuff Pro Gaps &amp; Cracks spray foam</td><td>2 cans</td><td className="gp-cost">$18</td><td><span className="gp-buy-link">Buy →</span></td></tr>
                <tr><td>7</td><td>Evoseal MS polymer sealant</td><td>4 tubes</td><td className="gp-cost">$48</td><td><span className="gp-buy-link">Buy →</span></td></tr>
                <tr><td>8</td><td>Boracare mold treatment — 1 gallon</td><td>1 unit</td><td className="gp-cost">$89</td><td><span className="gp-buy-link">Buy →</span></td></tr>
                <tr><td>9</td><td style={{ color: '#185FA5', fontWeight: 600 }}>AlorAir Sentinel HDi90 commercial dehumidifier ★ Recommended</td><td>1 unit</td><td className="gp-cost" style={{ color: '#185FA5' }}>$1,500</td><td><span className="gp-buy-link">Buy →</span></td></tr>
                <tr><td>10</td><td>N95 respirators (box of 10)</td><td>1 box</td><td className="gp-cost">$18</td><td><span className="gp-buy-link">Buy →</span></td></tr>
                <tr><td>11</td><td>Tyvek disposable coveralls</td><td>2 suits</td><td className="gp-cost">$16</td><td><span className="gp-buy-link">Buy →</span></td></tr>
                <tr className="gp-total-row"><td colSpan={3}><strong>Total estimated materials (with dehumidifier)</strong></td><td className="gp-cost"><strong>$2,236</strong></td><td /></tr>
              </tbody>
            </table>
          </div>
          <div className="gp-cart-box">
            <div className="gp-cart-box-text"><strong>One-click shopping cart</strong> — all items pre-loaded at correct quantities for your crawlspace</div>
            <span className="gp-cart-btn">Open cart →</span>
          </div>
          <div className="gp-cost-compare">
            <div className="gp-compare-card gp-diy">
              <div className="gp-compare-label gp-diy">DIY — your cost</div>
              <div className="gp-compare-amount gp-diy">$2,236</div>
              <div className="gp-compare-sub">Materials + your weekend</div>
            </div>
            <div className="gp-compare-card gp-pro">
              <div className="gp-compare-label gp-pro">Hiring a contractor</div>
              <div className="gp-compare-amount gp-pro">$4,500–$6,500</div>
              <div className="gp-compare-sub">Typical KC quote range</div>
            </div>
          </div>
          <div className="gp-savings-bar">
            <span className="gp-savings-label">Your estimated savings doing this yourself</span>
            <span className="gp-savings-amount">$2,264 – $4,264</span>
          </div>
        </div>

        <div className="gp-section">
          <div className="gp-section-title"><span>04</span> Step-by-step installation guide</div>
          <div className="gp-steps">
            <div className="gp-step">
              <div className="gp-step-header"><span className="gp-step-num">Step 1</span><span className="gp-step-title">Seal all penetrations first — before any barrier</span></div>
              <div className="gp-step-body">
                <span className="gp-step-item">Apply Evoseal around every pier base</span>
                <span className="gp-step-item">Wrap all pipes with barrier collar + tape</span>
                <span className="gp-step-item">No gap larger than ¼ inch anywhere</span>
                <span className="gp-step-item">Mark each sealed penetration with marker</span>
              </div>
            </div>
            <div className="gp-step">
              <div className="gp-step-header"><span className="gp-step-num">Step 2</span><span className="gp-step-title">Install wall barrier on all four walls</span></div>
              <div className="gp-step-body">
                <span className="gp-step-item">Double-sided tape to masonry wall top</span>
                <span className="gp-step-item">Leave 3 inches concrete above tape</span>
                <span className="gp-step-item">Barrier runs down + 6 inches onto soil</span>
                <span className="gp-step-item">Fold at corners — no cuts at corners</span>
              </div>
            </div>
            <div className="gp-step">
              <div className="gp-step-header"><span className="gp-step-num">Step 3</span><span className="gp-step-title">Install floor barrier — start at far end, work to exit</span></div>
              <div className="gp-step-body">
                <span className="gp-step-item">Overlap wall barrier minimum 12 inches</span>
                <span className="gp-step-item">Sheet-to-sheet overlap minimum 12 inches</span>
                <span className="gp-step-item">Kneel on plywood scrap — not on barrier</span>
                <span className="gp-step-item">X-cut around all piers, tape all 4 flaps</span>
              </div>
            </div>
            <div className="gp-step">
              <div className="gp-step-header"><span className="gp-step-num">Step 4</span><span className="gp-step-title">Tape every seam — zero exceptions</span></div>
              <div className="gp-step-body">
                <span className="gp-step-item">Crawlspace-grade 3&quot; seam tape only</span>
                <span className="gp-step-item">Dust surface before applying tape</span>
                <span className="gp-step-item">Press firmly — full wall/floor transition</span>
                <span className="gp-step-item">Visual check: no unsealed seam visible</span>
              </div>
            </div>
            <div className="gp-step">
              <div className="gp-step-header"><span className="gp-step-num">Step 5</span><span className="gp-step-title">Install termination bar full perimeter</span></div>
              <div className="gp-step-body">
                <span className="gp-step-item">Pre-drill masonry with hammer drill</span>
                <span className="gp-step-item">Tapcon screws every 12–16 inches</span>
                <span className="gp-step-item">Evoseal bead along full top edge</span>
                <span className="gp-step-item">Overlap bar joints by 2 inches</span>
              </div>
            </div>
            <div className="gp-step">
              <div className="gp-step-header"><span className="gp-step-num">Step 6</span><span className="gp-step-title">Seal all 8 foundation vents — from inside</span></div>
              <div className="gp-step-body">
                <span className="gp-step-item">Cut foam block tight friction-fit per vent</span>
                <span className="gp-step-item">Construction adhesive + press 30 sec</span>
                <span className="gp-step-item">Great Stuff Pro all 4 edges each vent</span>
                <span className="gp-step-item">Photograph each sealed vent</span>
              </div>
            </div>
            <div className="gp-step">
              <div className="gp-step-header"><span className="gp-step-num">Step 7</span><span className="gp-step-title">Install AlorAir Sentinel HDi90 dehumidifier</span></div>
              <div className="gp-step-body">
                <span className="gp-step-item">On cinder blocks — 4+ inches off barrier</span>
                <span className="gp-step-item">Connect drain hose — test water flows</span>
                <span className="gp-step-item">Set to 50% RH, fan Auto, auto-restart on</span>
                <span className="gp-step-item">Label with settings for future reference</span>
              </div>
            </div>
          </div>
        </div>

        <div className="gp-section" style={{ borderBottom: 'none' }}>
          <div className="gp-section-title"><span>05</span> What to expect after installation</div>
          <div className="gp-outcomes">
            <div className="gp-outcome">
              <div className="gp-outcome-time">24–72 hrs</div>
              <div className="gp-outcome-desc">Humidity starts dropping</div>
            </div>
            <div className="gp-outcome">
              <div className="gp-outcome-time">1–2 weeks</div>
              <div className="gp-outcome-desc">Musty smell reduces</div>
            </div>
            <div className="gp-outcome">
              <div className="gp-outcome-time">30 days</div>
              <div className="gp-outcome-desc">Below 50% RH consistently</div>
            </div>
            <div className="gp-outcome">
              <div className="gp-outcome-time">60–90 days</div>
              <div className="gp-outcome-desc">Full stabilization</div>
            </div>
          </div>
          <div style={{ marginTop: 8, fontSize: 12, color: '#6b7280', padding: '8px 10px', background: '#F4F6FA', borderRadius: 6 }}>
            Text Jason your before and after moisture readings — he&apos;ll confirm everything is performing correctly.
          </div>
        </div>

        <div className="gp-footer-box">
          <div className="gp-footer-left">
            <p>Questions? Run into something unexpected?</p>
            <h3>Text Jason: 816-962-2111</h3>
          </div>
          <div className="gp-footer-right">
            <p style={{ color: '#F5A623', fontSize: 11, fontWeight: 600 }}>KC Crawl Space Specialists LLC</p>
            <p>jason@crawlspacekc.com</p>
            <p>CrawlspaceKC.com</p>
          </div>
        </div>
        <div className="gp-footer-note">Order #KCS-0047</div>
      </div>
    </>
  );
}
