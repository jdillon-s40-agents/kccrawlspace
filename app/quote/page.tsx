import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quote Generator',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const STYLE = `
*{box-sizing:border-box;margin:0;padding:0}
#quote-app{font-family:'Segoe UI',Arial,sans-serif;background:#0f172a;color:#f1f5f9;min-height:100vh;padding:16px;margin:0 -1000px;padding-left:1000px;padding-right:1000px}
#quote-app .app{max-width:920px;margin:0 auto}
#quote-app .hdr{background:linear-gradient(135deg,#1B3A6B,#0f172a);border:1px solid #F5A623;border-radius:12px;padding:16px 20px;margin-bottom:14px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
#quote-app .logo{font-size:19px;font-weight:700;color:#fff}
#quote-app .logo-sub{font-size:11px;color:#F5A623;margin-top:1px}
#quote-app .badge{background:#F5A623;color:#1B3A6B;font-size:10px;font-weight:700;padding:3px 10px;border-radius:20px}
#quote-app .card{background:#1e293b;border:1px solid #334155;border-radius:10px;padding:16px;margin-bottom:12px}
#quote-app .ct{font-size:11px;font-weight:600;color:#F5A623;text-transform:uppercase;letter-spacing:.08em;margin-bottom:11px;display:flex;align-items:center;gap:7px}
#quote-app .sn{background:#F5A623;color:#1B3A6B;width:19px;height:19px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0}
#quote-app .g2{display:grid;grid-template-columns:1fr 1fr;gap:9px}
#quote-app .g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:9px}
#quote-app .row{margin-bottom:9px}
#quote-app label{display:block;font-size:11px;color:#94a3b8;margin-bottom:3px;font-weight:500}
#quote-app .sku{font-size:10px;color:#475569;margin-left:3px}
#quote-app input,#quote-app textarea,#quote-app select{width:100%;background:#0f172a;border:1px solid #334155;border-radius:6px;color:#f1f5f9;padding:8px 10px;font-size:13px;font-family:inherit}
#quote-app input:focus,#quote-app textarea:focus,#quote-app select:focus{outline:none;border-color:#F5A623}
#quote-app textarea{resize:vertical;min-height:110px;line-height:1.6}
#quote-app .btn{width:100%;padding:12px;background:linear-gradient(135deg,#F5A623,#d97706);color:#1B3A6B;font-weight:700;font-size:14px;border:none;border-radius:8px;cursor:pointer}
#quote-app .btn:hover{opacity:.9}
#quote-app .btn2{background:#1e293b;color:#f1f5f9;border:1px solid #334155;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:12px;margin-top:10px;display:inline-block}
#quote-app .spin-w{text-align:center;padding:40px}
#quote-app .spin{width:34px;height:34px;border:3px solid #334155;border-top-color:#F5A623;border-radius:50%;animation:qsp .8s linear infinite;margin:0 auto 12px}
@keyframes qsp{to{transform:rotate(360deg)}}
#quote-app .rt{font-size:13px;font-weight:600;color:#F5A623;margin-bottom:9px;padding-bottom:6px;border-bottom:1px solid #334155}
#quote-app .ain{background:#0f172a;border:1px solid #334155;border-radius:6px;padding:12px;font-size:13px;line-height:1.7;color:#cbd5e1;white-space:pre-wrap}
#quote-app .fg{display:grid;grid-template-columns:1fr 1fr;gap:6px}
#quote-app .fi{background:#0f172a;border-radius:5px;padding:8px 10px;display:flex;justify-content:space-between;align-items:center;font-size:12px;gap:6px}
#quote-app .fl{color:#94a3b8;flex:1}
#quote-app .tag{font-size:10px;font-weight:600;padding:2px 7px;border-radius:3px;white-space:nowrap}
#quote-app .tr{background:#3f0a0a;color:#f87171;border:1px solid #7f1d1d}
#quote-app .ta{background:#2a1a00;color:#fbbf24;border:1px solid #78350f}
#quote-app .tg{background:#0a2a0a;color:#4ade80;border:1px solid #166534}
#quote-app .dual{display:grid;grid-template-columns:1fr 1fr;gap:10px}
#quote-app .cost-panel{border-radius:8px;overflow:hidden}
#quote-app .cost-panel-hdr{padding:9px 12px;font-size:12px;font-weight:700;display:flex;align-items:center;gap:6px}
#quote-app .cp-csd .cost-panel-hdr{background:#1B3A6B;color:#F5A623}
#quote-app .cp-amz .cost-panel-hdr{background:#F59E0B;color:#1B3A6B}
#quote-app .csd-ico{width:14px;height:14px;background:#F5A623;border-radius:2px;display:inline-block;flex-shrink:0}
#quote-app .amz-ico{width:14px;height:14px;background:#1B3A6B;border-radius:2px;display:inline-block;flex-shrink:0}
#quote-app .mt{width:100%;border-collapse:collapse;font-size:11px}
#quote-app .mt th{background:#0f172a;color:#64748b;padding:5px 8px;text-align:left;font-size:10px;text-transform:uppercase}
#quote-app .mt td{padding:6px 8px;border-bottom:1px solid #1e293b;color:#e2e8f0}
#quote-app .mt tr:nth-child(even) td{background:rgba(15,23,42,.4)}
#quote-app .cc{text-align:right;font-weight:500;color:#4ade80}
#quote-app .cc.amz{color:#F59E0B}
#quote-app .tft td{background:#0f172a!important;font-weight:700;font-size:13px;padding:8px 8px!important}
#quote-app .savings-bar{background:linear-gradient(135deg,#166534,#14532d);border-radius:7px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:6px;margin-top:6px}
#quote-app .sav-l{font-size:12px;color:#4ade80}
#quote-app .sav-r{font-size:18px;font-weight:700;color:#4ade80}
#quote-app .tiers{display:grid;grid-template-columns:1fr 1fr 1fr;gap:9px;margin-top:6px}
#quote-app .tier{border-radius:8px;padding:14px;border:2px solid transparent;position:relative;padding-top:22px}
#quote-app .t1{background:#0a1f0a;border-color:#166534}
#quote-app .t2{background:#1a150a;border-color:#F5A623}
#quote-app .t3{background:#0a1020;border-color:#2563A8}
#quote-app .tbadge{position:absolute;top:-10px;left:50%;transform:translateX(-50%);font-size:9px;font-weight:700;padding:2px 9px;border-radius:20px;white-space:nowrap}
#quote-app .t1 .tbadge{background:#166534;color:#fff}
#quote-app .t2 .tbadge{background:#F5A623;color:#1B3A6B}
#quote-app .t3 .tbadge{background:#2563A8;color:#fff}
#quote-app .tname{font-size:13px;font-weight:700;color:#fff;margin-bottom:4px}
#quote-app .tprice{font-size:24px;font-weight:700;margin-bottom:2px}
#quote-app .t1 .tprice{color:#4ade80}
#quote-app .t2 .tprice{color:#F5A623}
#quote-app .t3 .tprice{color:#60a5fa}
#quote-app .tprice-row{display:flex;align-items:baseline;gap:1px;margin-bottom:2px}
#quote-app .tprice-sign{font-size:20px;font-weight:700}
#quote-app .tprice-input{width:auto;flex:1;font-size:22px;font-weight:700;background:transparent;border:none;border-bottom:1px dashed currentColor;padding:0 0 2px;color:inherit}
#quote-app .tprice-input:focus{outline:none;border-bottom-style:solid}
#quote-app .tprice-input::-webkit-outer-spin-button,#quote-app .tprice-input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
#quote-app .tprice-input{-moz-appearance:textfield}
#quote-app .t1 .tprice-sign,#quote-app .t1 .tprice-input{color:#4ade80}
#quote-app .t2 .tprice-sign,#quote-app .t2 .tprice-input{color:#F5A623}
#quote-app .t3 .tprice-sign,#quote-app .t3 .tprice-input{color:#60a5fa}
#quote-app .tprofit{display:flex;justify-content:space-between;font-size:9px;color:#64748b;margin-bottom:6px;gap:6px}
#quote-app .tprofit b{color:#94a3b8;font-weight:700}
#quote-app .tsub{font-size:10px;color:#64748b;margin-bottom:8px}
#quote-app .tinc{font-size:11px;color:#94a3b8;line-height:1.8;list-style:none}
#quote-app .t1 .tinc li::before{content:"+ ";color:#4ade80;font-weight:700}
#quote-app .t2 .tinc li::before{content:"+ ";color:#F5A623;font-weight:700}
#quote-app .t3 .tinc li::before{content:"+ ";color:#60a5fa;font-weight:700}
#quote-app .prof-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:8px}
#quote-app .prof-panel{background:#0f172a;border-radius:7px;padding:12px}
#quote-app .prof-title{font-size:11px;font-weight:600;margin-bottom:8px;display:flex;align-items:center;gap:5px}
#quote-app .prof-title.csd{color:#60a5fa}
#quote-app .prof-title.amz{color:#F59E0B}
#quote-app .prof-row{display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;align-items:center}
#quote-app .prof-label{color:#64748b}
#quote-app .prof-val{font-weight:600}
#quote-app .pv-g{color:#4ade80}
#quote-app .pv-o{color:#F5A623}
#quote-app .pv-b{color:#60a5fa}
#quote-app .pnote{background:#1a1200;border:1px solid #78350f;border-radius:6px;padding:10px 12px;font-size:12px;color:#fbbf24;margin-top:9px}
#quote-app .ibox{background:#0f172a;border-left:3px solid #2563A8;border-radius:0 6px 6px 0;padding:10px 12px;font-size:12px;color:#94a3b8;line-height:1.7;white-space:pre-wrap}
#quote-app .cq{background:#fff;color:#111;border-radius:10px;padding:20px;margin-top:6px;font-family:Arial,sans-serif}
#quote-app .cq-hdr{background:#1B3A6B;color:#fff;border-radius:7px;padding:14px 16px;margin-bottom:14px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
#quote-app .cq-logo{font-size:16px;font-weight:700}
#quote-app .cq-sub{font-size:11px;color:#F5A623;margin-top:2px}
#quote-app .cq-contact{text-align:right;font-size:12px;color:#D6E4F7}
#quote-app .cq-gold{height:3px;background:#F5A623;border-radius:2px;margin-bottom:14px}
#quote-app .cq-meta{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px}
#quote-app .cq-meta-item{background:#f8fafc;border-radius:5px;padding:8px 10px}
#quote-app .cq-meta-label{font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.05em}
#quote-app .cq-meta-val{font-size:13px;font-weight:600;color:#1B3A6B;margin-top:2px}
#quote-app .cq-finding-box{background:#fef3c7;border:1px solid #fbbf24;border-radius:6px;padding:10px 12px;margin-bottom:12px;font-size:12px;color:#92400e}
#quote-app .cq-finding-title{font-weight:700;margin-bottom:4px;color:#78350f}
#quote-app .cq-scope{background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 12px;margin-bottom:12px;font-size:12px;color:#334155}
#quote-app .cq-scope-title{font-weight:700;margin-bottom:6px;color:#1B3A6B}
#quote-app .cq-scope-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px}
#quote-app .cq-scope-grid div{background:#fff;border-radius:4px;padding:6px 8px}
#quote-app .cq-scope-grid b{color:#1B3A6B}
#quote-app .cq-tiers{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px}
#quote-app .cq-tier{border-radius:7px;padding:12px;border:2px solid #e2e8f0;text-align:center}
#quote-app .cq-tier.rec{border-color:#1B3A6B;background:#eff6ff}
#quote-app .cq-tier-badge{font-size:9px;font-weight:700;text-transform:uppercase;color:#64748b;margin-bottom:4px}
#quote-app .cq-tier.rec .cq-tier-badge{color:#1B3A6B}
#quote-app .cq-tier-name{font-size:13px;font-weight:700;color:#1B3A6B;margin-bottom:2px}
#quote-app .cq-tier-price{font-size:22px;font-weight:700;color:#166534;margin-bottom:4px}
#quote-app .cq-tier.rec .cq-tier-price{color:#1B3A6B}
#quote-app .cq-tier-items{font-size:11px;color:#475569;text-align:left;line-height:1.7}
#quote-app .cq-tier-items li{list-style:none}
#quote-app .cq-tier-items li::before{content:"\\2713 ";color:#166534;font-weight:700}
#quote-app .cq-tier.rec .cq-tier-items li::before{color:#1B3A6B}
#quote-app .cq-finance{background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:10px 12px;text-align:center;margin-bottom:12px;font-size:12px;color:#166534}
#quote-app .cq-warranty{background:#1B3A6B;color:#fff;border-radius:6px;padding:10px 12px;font-size:12px;text-align:center;margin-bottom:12px}
#quote-app .cq-next{font-size:12px;color:#475569;margin-bottom:8px}
#quote-app .cq-next li{margin-left:16px;margin-bottom:3px}
#quote-app .cq-footer{border-top:2px solid #F5A623;padding-top:10px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;font-size:11px;color:#64748b}
#quote-app .cq-footer-brand{font-size:13px;font-weight:700;color:#1B3A6B}
#quote-app .err{background:#3f0a0a;border:1px solid #7f1d1d;border-radius:7px;padding:12px;color:#f87171;font-size:12px;margin-top:10px}
#quote-app .slbl{font-size:10px;font-weight:600;color:#475569;text-transform:uppercase;letter-spacing:.08em;margin:12px 0 7px;padding-top:12px;border-top:1px solid #334155}
#quote-app .pnot{background:#0f172a;border:1px solid #334155;border-radius:5px;padding:7px 10px;font-size:10px;color:#64748b;margin-top:7px}
#quote-app .eq-list{list-style:none}
#quote-app .eq-list li{background:#0f172a;border-radius:5px;padding:8px 10px;margin-bottom:6px;font-size:12px;color:#e2e8f0;display:flex;justify-content:space-between;gap:8px}
#quote-app .eq-list li b{color:#F5A623}
#quote-app .editable{outline:1px dashed #475569;outline-offset:3px;border-radius:6px}
#quote-app .editable:focus{outline:1px dashed #F5A623;background:rgba(245,166,35,.05)}
#quote-app .edit-hint{font-size:10px;color:#64748b;margin-bottom:8px}
#quote-app .toolbar{display:flex;gap:8px;margin-top:10px}
#quote-app .toolbar .btn2{margin-top:0;flex:1;text-align:center}
@media(max-width:600px){#quote-app .g2,#quote-app .g3,#quote-app .tiers,#quote-app .fg,#quote-app .dual,#quote-app .prof-grid,#quote-app .cq-meta,#quote-app .cq-tiers{grid-template-columns:1fr}}
@media print{
  body *{visibility:hidden}
  #quote-app,#quote-app *{visibility:visible}
  #quote-app{position:absolute;left:0;top:0;padding:0;margin:0}
  #quote-app .hdr,#quote-app .card:not(.print-card),#quote-app .toolbar,#quote-app .btn2{display:none!important}
  #quote-app .print-card{border:none;padding:0;margin:0;background:#fff}
  #quote-app .cq{box-shadow:none}
}
`;

const BODY_HTML = `
<div class="app">
  <div class="hdr">
    <div>
      <div class="logo">KC Crawl Space Specialists LLC</div>
      <div class="logo-sub">AI Quote Generator — Crawlspace Depot vs Amazon Price Comparison</div>
    </div>
    <div class="badge">Jason Dillon 816-962-2111</div>
  </div>

  <div id="FV">
    <div class="card">
      <div class="ct"><span class="sn">1</span>Job Measurements</div>
      <div class="g3">
        <div class="row"><label>Floor Sq Ft</label><input type="number" id="sqft" placeholder="750"></div>
        <div class="row"><label>Wall Height (inches)</label><input type="number" id="wh" placeholder="24"></div>
        <div class="row"><label>Foundation Vents</label><input type="number" id="vents" placeholder="8"></div>
      </div>
    </div>

    <div class="card">
      <div class="ct"><span class="sn">2</span>Inspection Notes — paste anything</div>
      <textarea id="notes" placeholder="Voice transcript or bullets — as messy as you want:
- moisture NW 84% NE 79% center 76%
- minor mold south joists
- no existing barrier bare soil
- 8 open vents
- pipe drip south side plumber first
- damaged insulation falling
- 2ft clearance tight
- no standing water no pests
- debris on ground
- homeowner budget 5k"></textarea>
    </div>

    <div class="card">
      <div class="ct"><span class="sn">3</span>Product Selections</div>

      <div class="slbl">Liner — Crawlspace Depot Contractor Price</div>
      <div class="g2">
        <div class="row">
          <label>CSD liner product</label>
          <select id="linerSel" onchange="syncLiner()">
            <option value="481.94|1200|20mil WW 12x100 (1200sqft)">20mil WW 12x100ft 1200sqft — $481.94 STANDARD — LIFETIME WARRANTY</option>
            <option value="279.99|1200|12mil WB 12x100 (1200sqft)">12mil WB 12x100ft 1200sqft — $279.99</option>
            <option value="559.99|2400|12mil WB 24x100 (2400sqft)">12mil WB 24x100ft 2400sqft — $559.99</option>
            <option value="209.99|1200|8mil WB 12x100 (1200sqft)">8mil WB 12x100ft 1200sqft — $209.99 BUDGET</option>
          </select>
        </div>
        <div class="row"><label>CSD price per roll (auto)</label><input type="number" id="pCsdLiner" value="481.94" step="0.01"></div>
      </div>
      <div class="row"><label>CSD sqft per roll (auto)</label><input type="number" id="pCsdLinerSqft" value="1200"></div>
      <div class="pnot">20mil is the floor standard on every job — it's what backs the lifetime transferable warranty. Only drop to 12mil/8mil for a homeowner who explicitly declines the warranty tier.</div>

      <div class="slbl">Liner — Amazon Best Price Found (as of July 2026)</div>
      <div class="g2">
        <div class="row">
          <label>Amazon liner product</label>
          <select id="amzLinerSel" onchange="syncAmzLiner()">
            <option value="54.99|1000|Spirecover 12mil Panda Film 10x100 (1000sqft) Amazon">Spirecover 12mil Panda Film 10x100 1000sqft — $54.99</option>
            <option value="48.99|1000|Purteria 12mil White 10x100 (1000sqft) Amazon">Purteria 12mil White 10x100 1000sqft — $48.99</option>
            <option value="62.99|1000|Generic 12mil White 10x100 (1000sqft) Amazon">Generic 12mil White 10x100 1000sqft — $62.99</option>
            <option value="44.99|1000|Budget 12mil 10x100 (1000sqft) Amazon">Budget 12mil 10x100 1000sqft — $44.99</option>
          </select>
        </div>
        <div class="row"><label>Amazon liner price per roll (auto)</label><input type="number" id="pAmzLiner" value="54.99" step="0.01"></div>
      </div>
      <div class="row"><label>Amazon sqft per roll (note: 1000sqft vs CSD 1200sqft)</label><input type="number" id="pAmzLinerSqft" value="1000"></div>

      <div class="slbl">Seam Tape — Both Sources</div>
      <div class="g2">
        <div class="row"><label>CSD tape price per roll <span class="sku">Ad-SealTapeSM 7.5mil 4x180</span></label><input type="number" id="pCsdTape" value="17.25" step="0.01"></div>
        <div class="row"><label>Amazon tape price per roll <span class="sku">CRMCC/ELK 9mil 4x180 ~$9-16</span></label><input type="number" id="pAmzTape" value="11.99" step="0.01"></div>
      </div>

      <div class="slbl">Vent Covers — Both Sources</div>
      <div class="g2">
        <div class="row"><label>CSD vent cover each <span class="sku">In-VentBlock $3.39 or VentBlock+ $5.79</span></label><input type="number" id="pCsdVent" value="3.39" step="0.01"></div>
        <div class="row"><label>Amazon vent cover each <span class="sku">Foam block sheet ~$8-10 each</span></label><input type="number" id="pAmzVent" value="8.99" step="0.01"></div>
      </div>

      <div class="slbl">Wall Insulation — Both Sources (Every Tier)</div>
      <div class="g2">
        <div class="row"><label>CSD wall insulation per sq ft <span class="sku">rigid foam board</span></label><input type="number" id="pCsdWallIns" value="1.85" step="0.01"></div>
        <div class="row"><label>Amazon wall insulation per sq ft</label><input type="number" id="pAmzWallIns" value="1.45" step="0.01"></div>
      </div>

      <div class="slbl">Joist Insulation — Both Sources (Every Tier)</div>
      <div class="g2">
        <div class="row"><label>CSD joist insulation per sq ft <span class="sku">batts between floor joists</span></label><input type="number" id="pCsdJoistIns" value="1.25" step="0.01"></div>
        <div class="row"><label>Amazon joist insulation per sq ft</label><input type="number" id="pAmzJoistIns" value="0.95" step="0.01"></div>
      </div>

      <div class="slbl">Foundation Crack Sealing — Both Sources (Every Tier)</div>
      <div class="g3">
        <div class="row"><label>Foundation cracks to seal</label><input type="number" id="crackCount" value="4"></div>
        <div class="row"><label>CSD sealer caulk per crack <span class="sku">foundation sealer caulk</span></label><input type="number" id="pCsdCrack" value="14.99" step="0.01"></div>
        <div class="row"><label>Amazon sealer caulk per crack</label><input type="number" id="pAmzCrack" value="11.99" step="0.01"></div>
      </div>

      <div class="slbl">Dehumidifier — Basic Unit (Essential &amp; Complete Tiers)</div>
      <div class="g2">
        <div class="row"><label>CSD price <span class="sku">AlorAir 70 Pint</span></label><input type="number" id="pCsdDehumBasic" value="649.99" step="0.01"></div>
        <div class="row"><label>Amazon price <span class="sku">AlorAir 70 Pint</span></label><input type="number" id="pAmzDehumBasic" value="699.99" step="0.01"></div>
      </div>

      <div class="slbl">Dehumidifier — Premium Upgrade Unit (Premium Tier Only)</div>
      <div class="g2">
        <div class="row">
          <label>CSD dehumidifier</label>
          <select id="dehumSel" onchange="syncDehum()">
            <option value="1023.99|Santa Fe Compact70">Santa Fe Compact70 — $1,023.99 RECOMMENDED</option>
            <option value="932.99|AprilAire E050 50pint">AprilAire E050 50pint — $932.99</option>
            <option value="1033.99|AprilAire E070 70pint">AprilAire E070 70pint — $1,033.99</option>
            <option value="1221.99|AprilAire E070W WiFi">AprilAire E070W WiFi — $1,221.99</option>
            <option value="1189.99|AprilAire E080 80pint">AprilAire E080 80pint — $1,189.99</option>
            <option value="1279.99|AprilAire E100D 100pint">AprilAire E100D 100pint — $1,279.99</option>
          </select>
        </div>
        <div class="row"><label>CSD dehumidifier price (auto)</label><input type="number" id="pCsdDehum" value="1023.99" step="0.01"></div>
      </div>
      <div class="row"><label>Amazon dehumidifier same model (often $50-150 more — update if you find better)</label><input type="number" id="pAmzDehum" value="1099.99" step="0.01"></div>

      <div class="slbl">Mold Treatment</div>
      <div class="g2">
        <div class="row"><label>CSD mold treatment <span class="sku">Pc-PSWP Penashield $42.99</span></label><input type="number" id="pCsdMold" value="42.99" step="0.01"></div>
        <div class="row"><label>Amazon mold treatment <span class="sku">Borate-based ~$25-35</span></label><input type="number" id="pAmzMold" value="28.99" step="0.01"></div>
      </div>

      <div class="slbl">Fixed Items (same or similar on both — CSD prices used)</div>
      <div class="g3">
        <div class="row"><label>Double-sided butyl tape <span class="sku">Ad-SealBT15100</span></label><input type="number" id="pButyl" value="31.99" step="0.01"></div>
        <div class="row"><label>Todol IPF foam per can <span class="sku">Ad-TIPF01</span></label><input type="number" id="pFoam" value="17.49" step="0.01"></div>
        <div class="row"><label>PPE (suits/respirators/gloves)</label><input type="number" id="pPpe" value="65.00" step="0.01"></div>
      </div>

      <div class="slbl">Your Labor</div>
      <div class="g2">
        <div class="row"><label>Your labor rate per hour</label><input type="number" id="pLabor" value="75"></div>
        <div class="row"><label>Helper rate per hour (0 if solo)</label><input type="number" id="pHelper" value="0"></div>
      </div>
      <div class="pnot">CSD prices: contractor pricing March 19 2026. Amazon prices: researched July 2026 — update as prices change. Note Amazon liners are 10x100 (1000sqft) vs CSD 12x100 (1200sqft) — more rolls needed.</div>
    </div>

    <button class="btn" onclick="go()">Generate Quote — Dual Price Comparison</button>
    <div class="err" id="errMsg" style="display:none"></div>
  </div>

  <div id="LV" style="display:none">
    <div class="card">
      <div class="spin-w">
        <div class="spin"></div>
        <div style="font-size:14px;margin-bottom:5px">Analyzing notes and calculating both price scenarios...</div>
        <div style="font-size:11px;color:#64748b">Reading findings, comparing Crawlspace Depot vs Amazon pricing, building three-tier quote</div>
      </div>
    </div>
  </div>

  <div id="RV" style="display:none">
    <div class="card"><div class="rt">AI Analysis</div><div class="ain" id="r_analysis"></div></div>
    <div class="card"><div class="rt">Key Findings</div><div class="fg" id="r_findings"></div></div>

    <div class="card print-card">
      <div class="rt">Equipment List — What To Bring / Order</div>
      <div class="edit-hint">Click any line to edit before printing or saving</div>
      <ul class="eq-list editable" id="equipment_list" contenteditable="true"></ul>
    </div>

    <div class="card">
      <div class="rt">Materials Cost Comparison — Crawlspace Depot vs Amazon</div>
      <div class="dual">
        <div class="cost-panel cp-csd">
          <div class="cost-panel-hdr"><span class="csd-ico"></span>Crawlspace Depot Contractor</div>
          <table class="mt" id="csd_mat_table"></table>
        </div>
        <div class="cost-panel cp-amz">
          <div class="cost-panel-hdr"><span class="amz-ico"></span>Amazon Best Price</div>
          <table class="mt" id="amz_mat_table"></table>
        </div>
      </div>
      <div class="savings-bar" id="savings_bar"></div>
    </div>

    <div class="card">
      <div class="rt">Your Profit — Both Scenarios (same customer quote)</div>
      <div class="prof-grid">
        <div class="prof-panel">
          <div class="prof-title csd">Crawlspace Depot Costs</div>
          <div id="csd_profits"></div>
        </div>
        <div class="prof-panel">
          <div class="prof-title amz">Amazon Costs</div>
          <div id="amz_profits"></div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="rt">Three-Tier Customer Quote (same price regardless of where you source)</div>
      <div class="tiers" id="r_tiers"></div>
      <div class="pnote" id="r_note"></div>
    </div>

    <div class="card print-card">
      <div class="rt">Customer-Facing Quote — Ready to Email or Print</div>
      <div class="edit-hint">Click into the quote below to edit any text before printing or saving</div>
      <div class="cq editable" id="customer_quote" contenteditable="true"></div>
      <div class="toolbar">
        <button class="btn2" onclick="printQuote()">Print / Save as PDF</button>
        <button class="btn2" onclick="downloadQuote()">Save as HTML File</button>
      </div>
    </div>

    <div class="card"><div class="rt">Talking Points for This Homeowner</div><div class="ibox" id="r_tp"></div></div>
    <button class="btn2" onclick="reset()">Back — New Quote</button>
  </div>
</div>
`;

const SCRIPT = `
(function(){
const $=id=>document.getElementById(id);
const show=id=>$(id).style.display='block';
const hide=id=>$(id).style.display='none';
const fmt=n=>('$'+(+n).toFixed(2));
const fmtK=n=>'$'+(+n).toLocaleString();

window.syncLiner=function(){const p=$('linerSel').value.split('|');$('pCsdLiner').value=p[0];$('pCsdLinerSqft').value=p[1];};
window.syncAmzLiner=function(){const p=$('amzLinerSel').value.split('|');$('pAmzLiner').value=p[0];$('pAmzLinerSqft').value=p[1];};
window.syncDehum=function(){$('pCsdDehum').value=$('dehumSel').value.split('|')[0]; $('pAmzDehum').value=(+$('dehumSel').value.split('|')[0]+75.00).toFixed(2);};

window.go=async function(){
  const sqft=$('sqft').value, notes=$('notes').value.trim();
  if(!sqft||!notes){alert('Enter square footage and inspection notes');return;}
  const wh=+$('wh').value||24, vents=+$('vents').value||0;

  const csd={
    liner:+$('pCsdLiner').value, linerSqft:+$('pCsdLinerSqft').value,
    tape:+$('pCsdTape').value, vent:+$('pCsdVent').value,
    dehum:+$('pCsdDehum').value, mold:+$('pCsdMold').value,
    wallIns:+$('pCsdWallIns').value, joistIns:+$('pCsdJoistIns').value,
    crack:+$('pCsdCrack').value, dehumBasic:+$('pCsdDehumBasic').value
  };
  const amz={
    liner:+$('pAmzLiner').value, linerSqft:+$('pAmzLinerSqft').value,
    tape:+$('pAmzTape').value, vent:+$('pAmzVent').value,
    dehum:+$('pAmzDehum').value, mold:+$('pAmzMold').value,
    wallIns:+$('pAmzWallIns').value, joistIns:+$('pAmzJoistIns').value,
    crack:+$('pAmzCrack').value, dehumBasic:+$('pAmzDehumBasic').value
  };
  const fixed={butyl:+$('pButyl').value, foam:+$('pFoam').value, ppe:+$('pPpe').value};
  const labor={rate:+$('pLabor').value, helper:+$('pHelper').value};
  const crackCount=+$('crackCount').value||4;

  const linerName=$('linerSel').value.split('|')[2];
  const dehumName=$('dehumSel').value.split('|')[1];
  const dehumBasicName='AlorAir 70 Pint';
  const amzLinerName=$('amzLinerSel').value.split('|')[2];

  hide('errMsg'); hide('FV'); show('LV');

  const sysMsg="You are a crawlspace quoting assistant for KC Crawl Space Specialists LLC. Respond with valid JSON only. No markdown code fences. No text outside the JSON. Escape apostrophes in strings using backslash. Do not use percent signs in strings - write pct instead. Do not use special unicode characters.";

  const userMsg='JOB: sqft='+sqft+' wallHeight='+wh+'in vents='+vents+'\\n\\nNOTES:\\n'+notes.replace(/"/g,"'").replace(/\\\\/g,'').replace(/\\n+/g,' ')+'\\n\\nCALCULATE:\\n'+
'perim=round(4*sqrt('+sqft+')*1.1)\\n'+
'wallSqft=round(perim*('+wh+'/12))\\n'+
'totalBarrier=round(('+sqft+'+wallSqft)*1.20)\\n'+
'csdLinerRolls=ceil(totalBarrier/'+csd.linerSqft+')\\n'+
'amzLinerRolls=ceil(totalBarrier/'+amz.linerSqft+')\\n'+
'tapeRolls=ceil(totalBarrier/360)\\n'+
'ventCount='+(vents>0?vents:'estimate from notes or use 8')+'\\n'+
'baseHrs='+(sqft<800?6:sqft<1200?8:sqft<1800?10:14)+'\\n'+
'laborHrs='+(wh<24?'round(baseHrs*1.4)':'baseHrs')+'\\n'+
'laborCost=laborHrs*('+labor.rate+'+'+labor.helper+')\\n'+
'fixedCost='+fixed.butyl+'*2+'+fixed.foam+'*3+'+fixed.ppe+'\\n'+
'moldFound=detect true or false from notes\\n'+
'crackCount='+crackCount+'\\n'+
'wallInsCsdCost=wallSqft*'+csd.wallIns+'\\n'+
'wallInsAmzCost=wallSqft*'+amz.wallIns+'\\n'+
'joistInsCsdCost='+sqft+'*'+csd.joistIns+'\\n'+
'joistInsAmzCost='+sqft+'*'+amz.joistIns+'\\n'+
'crackCsdCost=crackCount*'+csd.crack+'\\n'+
'crackAmzCost=crackCount*'+amz.crack+'\\n'+
'-- NOTE: 20mil vapor barrier, wall insulation, joist insulation, and foundation crack sealing are baseline scope on EVERY tier (Essential, Complete, Premium) — not upsells.\\n'+
'-- NOTE: a dehumidifier is included on EVERY tier. Essential and Complete use the Basic unit ('+csd.dehumBasic+' CSD / '+amz.dehumBasic+' Amazon). Premium upgrades to the contractor unit ('+csd.dehum+' CSD / '+amz.dehum+' Amazon).\\n'+
'csdBaseMats=csdLinerRolls*'+csd.liner+'+tapeRolls*'+csd.tape+'+ventCount*'+csd.vent+'+fixedCost+wallInsCsdCost+joistInsCsdCost+crackCsdCost\\n'+
'amzBaseMats=amzLinerRolls*'+amz.liner+'+tapeRolls*'+amz.tape+'+ventCount*'+amz.vent+'+fixedCost+wallInsAmzCost+joistInsAmzCost+crackAmzCost\\n'+
'csdTotalMats=csdBaseMats+'+csd.dehumBasic+'+(moldFound?'+csd.mold+':0)\\n'+
'amzTotalMats=amzBaseMats+'+amz.dehumBasic+'+(moldFound?'+amz.mold+':0)\\n'+
'goodPrice=round((csdBaseMats+'+csd.dehumBasic+'+laborCost)*3.2/50)*50\\n'+
'betterPrice=round((csdBaseMats+'+csd.dehumBasic+'+laborCost+(moldFound?'+csd.mold+':0)+300)*3.5/50)*50\\n'+
'bestPrice=round((betterPrice+('+csd.dehum+'-'+csd.dehumBasic+')*2.3)/50)*50\\n'+
'csdProfG=goodPrice-csdBaseMats-'+csd.dehumBasic+'-laborCost\\n'+
'csdProfB=betterPrice-csdBaseMats-'+csd.dehumBasic+'-laborCost-(moldFound?'+csd.mold+':0)\\n'+
'csdProfP=bestPrice-csdBaseMats-'+csd.dehum+'-laborCost-(moldFound?'+csd.mold+':0)\\n'+
'amzProfG=goodPrice-amzBaseMats-'+amz.dehumBasic+'-laborCost\\n'+
'amzProfB=betterPrice-amzBaseMats-'+amz.dehumBasic+'-laborCost-(moldFound?'+amz.mold+':0)\\n'+
'amzProfP=bestPrice-amzBaseMats-'+amz.dehum+'-laborCost-(moldFound?'+amz.mold+':0)\\n'+
'matSavings=csdTotalMats-amzTotalMats\\n\\n'+
'OUTPUT JSON:\\n'+
'{\\n'+
'"analysis":"2-3 sentence job summary plain English no special chars",\\n'+
'"findings":[\\n'+
'{"label":"Avg Moisture","value":"XX pct RH","sev":"r"},\\n'+
'{"label":"Mold Found","value":"Yes minor or No","sev":"r"},\\n'+
'{"label":"Existing Liner","value":"None or Partial","sev":"r"},\\n'+
'{"label":"Vents","value":"X vents","sev":"a"},\\n'+
'{"label":"Clearance","value":"'+wh+' inches","sev":"'+(wh<24?'r':wh<30?'a':'g')+'"},\\n'+
'{"label":"Prep Needed","value":"describe briefly","sev":"a"},\\n'+
'{"label":"Barrier Area","value":"XXXX sqft","sev":"g"},\\n'+
'{"label":"Est Labor","value":"X hrs","sev":"g"}\\n'+
'],\\n'+
'"moldFound":false,\\n'+
'"linerRollsCsd":0,\\n'+
'"linerRollsAmz":0,\\n'+
'"tapeRolls":0,\\n'+
'"ventCount":0,\\n'+
'"laborHrs":0,\\n'+
'"laborCost":0,\\n'+
'"csdMats":0,\\n'+
'"amzMats":0,\\n'+
'"csdTotalWithLabor":0,\\n'+
'"amzTotalWithLabor":0,\\n'+
'"matSavings":0,\\n'+
'"goodPrice":0,\\n'+
'"betterPrice":0,\\n'+
'"bestPrice":0,\\n'+
'"csdProfG":0,"csdProfB":0,"csdProfP":0,\\n'+
'"amzProfG":0,"amzProfB":0,"amzProfP":0,\\n'+
'"goodItems":["Liner full floor and walls","Wall and joist insulation","Foundation cracks sealed","Basic dehumidifier installed","All vents sealed","Penetrations sealed","Written moisture report","Lifetime transferable warranty"],\\n'+
'"betterItems":["Everything in Essential","Mold treatment all joists","Debris removal","Photo documentation","Lifetime transferable warranty"],\\n'+
'"bestItems":["Everything in Complete","Upgraded contractor grade dehumidifier","Drain line connected","Annual service included","Priority customer status","Lifetime transferable warranty"],\\n'+
'"findings_summary":"1-2 sentence plain language what you found for homeowner",\\n'+
'"note":"Special job considerations no special chars",\\n'+
'"tp":"Bullet point talking points for Jason. Reference specific findings. No special chars or symbols."\\n'+
'}';

  try {
    const res=await fetch("/api/quote",{
      method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({system:sysMsg,messages:[{role:"user",content:userMsg}]})
    });
    if(!res.ok){
      const errBody=await res.json().catch(()=>({}));
      throw new Error(errBody.error||("API "+res.status));
    }
    const data=await res.json();
    if(!data.content||!data.content[0])throw new Error("No response");
    let txt=data.content[0].text.trim().replace(/^\`\`\`[a-z]*\\n?/,'').replace(/\\n?\`\`\`$/,'').trim();
    let r;
    try{r=JSON.parse(txt);}
    catch(e){const m=txt.match(/\\{[\\s\\S]*\\}/);if(m){try{r=JSON.parse(m[0]);}catch(e2){throw new Error("Parse failed: "+e2.message+" | Raw: "+txt.substring(0,400));}}else throw new Error("No JSON found: "+txt.substring(0,400));}

    hide('LV'); show('RV');

    $('r_analysis').textContent=r.analysis||'';

    $('r_findings').innerHTML=(r.findings||[]).map(f=>{
      const c=f.sev==='r'?'tr':f.sev==='a'?'ta':'tg';
      return '<div class="fi"><span class="fl">'+f.label+'</span><span class="tag '+c+'">'+f.value+'</span></div>';
    }).join('');

    const lc=+(r.laborCost||0);
    const lh=+(r.laborHrs||0);
    const moldFound=r.moldFound||false;
    const wallSqft=Math.round(4*Math.sqrt(+sqft)*1.1*(wh/12));

    // Build concrete, data-driven scope items for each tier instead of relying on the AI's generic bullets
    const filterDup=arr=>(arr||[]).filter(i=>!/liner|vent|penetrat|moisture report|dehumidifier|mold|debris|photo|insulation|crack/i.test(i));
    const scopeGood=[
      linerName+' vapor barrier — '+(+(r.linerRollsCsd||0))+' rolls, full floor + walls',
      'Wall insulation — rigid foam board on all foundation walls ('+wallSqft+' sq ft)',
      'Joist insulation — batts installed between all floor joists ('+sqft+' sq ft)',
      crackCount+' foundation cracks sealed with foundation sealer caulk',
      (+(r.ventCount||0))+' foundation vents sealed and blocked',
      (+(r.tapeRolls||0))+' rolls seam tape — all seams and penetrations sealed',
      dehumBasicName+' dehumidifier installed with drain line',
      'Written moisture inspection report'
    ];
    const scopeBetter=(moldFound?['Mold treatment — Penashield antimicrobial applied to all affected joists and framing']:[]).concat([
      'Crawlspace debris removal',
      'Before/after photo documentation'
    ]);
    const scopePremium=[
      'Upgraded to '+dehumName+' dehumidifier (contractor grade unit)',
      'Digital humidity monitoring station',
      'Annual service visit included (year 1)'
    ];
    r.goodItems=scopeGood.concat(filterDup(r.goodItems));
    r.betterItems=scopeGood.concat(scopeBetter).concat(filterDup(r.betterItems));
    r.bestItems=scopeGood.filter(i=>!i.startsWith(dehumBasicName)).concat(scopeBetter).concat(scopePremium).concat(filterDup(r.bestItems));

    function matTable(isAmz){
      const pr=isAmz?amz:csd;
      const rolls=isAmz?(+(r.linerRollsAmz||0)):(+(r.linerRollsCsd||0));
      const tp=+(r.tapeRolls||0);
      const vc=+(r.ventCount||0);
      const linerName_=isAmz?amzLinerName:linerName;
      const rows=[
        {n:'Liner ('+linerName_+')',q:rolls+' rolls',uc:pr.liner,t:rolls*pr.liner},
        {n:'Seam tape 4x180',q:tp+' rolls',uc:pr.tape,t:tp*pr.tape},
        {n:'Vent covers',q:vc+' covers',uc:pr.vent,t:vc*pr.vent},
        {n:'Wall insulation',q:wallSqft+' sq ft',uc:pr.wallIns,t:wallSqft*pr.wallIns},
        {n:'Joist insulation',q:sqft+' sq ft',uc:pr.joistIns,t:(+sqft)*pr.joistIns},
        {n:'Foundation crack sealant',q:crackCount+' cracks',uc:pr.crack,t:crackCount*pr.crack},
        {n:'Butyl tape + foam + PPE',q:'fixed',uc:0,t:fixed.butyl*2+fixed.foam*3+fixed.ppe},
        {n:'Dehumidifier ('+dehumBasicName+')',q:'1 unit',uc:pr.dehumBasic,t:pr.dehumBasic},
      ];
      if(moldFound) rows.push({n:'Mold treatment',q:'1 gal',uc:pr.mold,t:pr.mold});
      const matTotal=rows.reduce((s,row)=>s+row.t,0);
      const fullTotal=matTotal+lc;
      const cc=isAmz?'cc amz':'cc';
      let html='<thead><tr><th>Item</th><th>Qty</th><th style="text-align:right">Total</th></tr></thead><tbody>';
      html+=rows.map(row=>'<tr><td>'+row.n+'</td><td>'+row.q+'</td><td class="'+cc+'">'+fmt(row.t)+'</td></tr>').join('');
      html+='<tr><td>Labor '+lh+' hrs</td><td>'+lh+' hrs</td><td class="'+cc+'">'+fmt(lc)+'</td></tr>';
      html+='</tbody><tfoot><tr class="tft"><td colspan="2" style="padding:7px 8px;color:#f1f5f9">Total</td><td style="padding:7px 8px;text-align:right;color:'+(isAmz?'#F59E0B':'#4ade80')+';font-size:14px">'+fmt(fullTotal)+'</td></tr></tfoot>';
      return html;
    }
    $('csd_mat_table').innerHTML=matTable(false);
    $('amz_mat_table').innerHTML=matTable(true);

    const sav=+(r.matSavings||0);
    $('savings_bar').innerHTML='<span class="sav-l">Buying from Amazon saves you approximately</span><span class="sav-r">'+fmt(sav)+' per job in materials</span>';

    function profHtml(g,b,p){
      return ['Essential','Complete','Premium'].map((n,i)=>{
        const vals=[g,b,p];
        const clz=i===0?'pv-g':i===1?'pv-o':'pv-b';
        return '<div class="prof-row"><span class="prof-label">'+n+'</span><span class="prof-val '+clz+'">'+fmtK(vals[i])+'</span></div>';
      }).join('');
    }
    $('csd_profits').innerHTML=profHtml(r.csdProfG,r.csdProfB,r.csdProfP);
    $('amz_profits').innerHTML=profHtml(r.amzProfG,r.amzProfB,r.amzProfP);

    const costGoodCsd=r.goodPrice-(+r.csdProfG||0), costGoodAmz=r.goodPrice-(+r.amzProfG||0);
    const costBetterCsd=r.betterPrice-(+r.csdProfB||0), costBetterAmz=r.betterPrice-(+r.amzProfB||0);
    const costBestCsd=r.bestPrice-(+r.csdProfP||0), costBestAmz=r.bestPrice-(+r.amzProfP||0);

    const mkT=(cls,badge,name,price,items,desc,tierKey,costCsd,costAmz)=>
      '<div class="tier '+cls+'">'+
        '<div class="tbadge">'+badge+'</div>'+
        '<div class="tname">'+name+'</div>'+
        '<div class="tprice-row"><span class="tprice-sign">$</span><input type="number" class="tprice-input" id="tprice_'+tierKey+'" data-tier="'+tierKey+'" data-cost-csd="'+costCsd+'" data-cost-amz="'+costAmz+'" value="'+Math.round(price)+'" step="50" oninput="updateTierPrice(this)"></div>'+
        '<div class="tprofit"><span>CSD profit: <b id="tprof_csd_'+tierKey+'">'+fmtK(Math.round(price-costCsd))+'</b></span><span>Amazon profit: <b id="tprof_amz_'+tierKey+'">'+fmtK(Math.round(price-costAmz))+'</b></span></div>'+
        '<div class="tsub">'+desc+'</div>'+
        '<ul class="tinc">'+(items||[]).map(i=>'<li>'+i+'</li>').join('')+'</ul>'+
      '</div>';
    $('r_tiers').innerHTML=
      mkT('t1','GOOD','Essential',r.goodPrice,r.goodItems,'Full encapsulation, insulation, and dehumidifier — solid protection','g',costGoodCsd,costGoodAmz)+
      mkT('t2','RECOMMENDED','Complete',r.betterPrice,r.betterItems,'Everything in Essential plus mold treatment','b',costBetterCsd,costBetterAmz)+
      mkT('t3','BEST VALUE','Premium',r.bestPrice,r.bestItems,'Everything in Complete with a contractor-grade dehumidifier upgrade','p',costBestCsd,costBestAmz);

    $('r_note').textContent=r.note||'';

    // Equipment list — what to bring/order for this job
    const eqRows=[
      {n:'Vapor barrier liner',v:linerName+' — '+(+(r.linerRollsCsd||0))+' rolls'},
      {n:'Wall insulation',v:'Rigid foam board — '+wallSqft+' sq ft'},
      {n:'Joist insulation',v:'Batts — '+sqft+' sq ft'},
      {n:'Foundation crack sealant',v:crackCount+' tubes (foundation sealer caulk)'},
      {n:'Seam tape',v:(+(r.tapeRolls||0))+' rolls (4x180 7.5mil)'},
      {n:'Vent covers',v:(+(r.ventCount||0))+' covers'},
      {n:'Dehumidifier — Essential/Complete',v:dehumBasicName},
      {n:'Dehumidifier — Premium upgrade',v:dehumName},
      {n:'Butyl tape',v:'2 rolls'},
      {n:'Todol IPF foam',v:'3 cans'},
      {n:'PPE',v:'1 kit (suits, respirators, gloves)'},
    ];
    if(moldFound) eqRows.push({n:'Mold treatment',v:'1 gal Penashield'});
    $('equipment_list').innerHTML=eqRows.map(e=>'<li><span>'+e.n+'</span><b>'+e.v+'</b></li>').join('');

    const today=new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
    $('customer_quote').innerHTML=
      '<div class="cq-hdr">'+
        '<div>'+
          '<div class="cq-logo">KC Crawl Space Specialists LLC</div>'+
          '<div class="cq-sub">Kansas City\\'s Only Dedicated Crawlspace Specialist</div>'+
        '</div>'+
        '<div class="cq-contact">'+
          '<div>Jason Dillon</div>'+
          '<div>816-962-2111</div>'+
          '<div>jason@crawlspacekc.com</div>'+
          '<div>CrawlspaceKC.com</div>'+
        '</div>'+
      '</div>'+
      '<div class="cq-gold"></div>'+
      '<div class="cq-meta">'+
        '<div class="cq-meta-item"><div class="cq-meta-label">Quote Date</div><div class="cq-meta-val">'+today+'</div></div>'+
        '<div class="cq-meta-item"><div class="cq-meta-label">Property</div><div class="cq-meta-val">As inspected</div></div>'+
        '<div class="cq-meta-item"><div class="cq-meta-label">Crawlspace Area</div><div class="cq-meta-val">'+sqft+' sq ft</div></div>'+
        '<div class="cq-meta-item"><div class="cq-meta-label">Valid For</div><div class="cq-meta-val">30 Days</div></div>'+
      '</div>'+
      '<div class="cq-finding-box">'+
        '<div class="cq-finding-title">What We Found Under Your Home</div>'+
        (r.findings_summary||r.analysis||'See attached inspection report for full findings.')+
      '</div>'+
      '<div class="cq-scope">'+
        '<div class="cq-scope-title">Job Specifications</div>'+
        '<div class="cq-scope-grid">'+
          '<div><b>Crawlspace Area:</b> '+sqft+' sq ft</div>'+
          '<div><b>Wall Height:</b> '+wh+' in</div>'+
          '<div><b>Foundation Vents:</b> '+(+(r.ventCount||0))+'</div>'+
          '<div><b>Estimated Labor:</b> '+lh+' hrs</div>'+
          '<div><b>Mold Present:</b> '+(moldFound?'Yes — treatment included':'No')+'</div>'+
          '<div><b>Vapor Barrier:</b> '+linerName+'</div>'+
        '</div>'+
      '</div>'+
      '<div class="cq-tiers">'+
        '<div class="cq-tier">'+
          '<div class="cq-tier-badge">Good</div>'+
          '<div class="cq-tier-name">Essential</div>'+
          '<div class="cq-tier-price" id="cq_price_g">'+fmtK(r.goodPrice)+'</div>'+
          '<ul class="cq-tier-items">'+(r.goodItems||[]).map(i=>'<li>'+i+'</li>').join('')+'</ul>'+
        '</div>'+
        '<div class="cq-tier rec">'+
          '<div class="cq-tier-badge">Recommended</div>'+
          '<div class="cq-tier-name">Complete</div>'+
          '<div class="cq-tier-price" id="cq_price_b">'+fmtK(r.betterPrice)+'</div>'+
          '<ul class="cq-tier-items">'+(r.betterItems||[]).map(i=>'<li>'+i+'</li>').join('')+'</ul>'+
        '</div>'+
        '<div class="cq-tier">'+
          '<div class="cq-tier-badge">Best Value</div>'+
          '<div class="cq-tier-name">Premium</div>'+
          '<div class="cq-tier-price" id="cq_price_p">'+fmtK(r.bestPrice)+'</div>'+
          '<ul class="cq-tier-items">'+(r.bestItems||[]).map(i=>'<li>'+i+'</li>').join('')+'</ul>'+
        '</div>'+
      '</div>'+
      '<div class="cq-finance">Financing available — as low as $<span id="cq_finance_amt">'+Math.round(r.betterPrice/18)+'</span>/month with approved credit. 60-second approval. No impact to credit score to check.</div>'+
      '<div class="cq-warranty">KC Dry Home Guarantee — Lifetime Transferable Warranty on all encapsulation work. If moisture ever exceeds 60% RH after our installation, we return and fix it at no charge. No expiration. Transfers to next owner at no cost.</div>'+
      '<div class="cq-next">'+
        '<strong style="font-size:12px;color:#1B3A6B;display:block;margin-bottom:4px">Next Steps:</strong>'+
        '<ol class="cq-next">'+
          '<li>Choose your package above</li>'+
          '<li>50% deposit to schedule your installation</li>'+
          '<li>Most jobs completed within one week of booking</li>'+
          '<li>Remaining 50% due upon completion</li>'+
        '</ol>'+
      '</div>'+
      '<div class="cq-footer">'+
        '<div>'+
          '<div class="cq-footer-brand">KC Crawl Space Specialists LLC</div>'+
          '<div>Kansas City\\'s Only Dedicated Crawlspace Specialist</div>'+
        '</div>'+
        '<div style="text-align:right">'+
          '<div>816-962-2111</div>'+
          '<div>CrawlspaceKC.com</div>'+
          '<div>Licensed and Insured</div>'+
        '</div>'+
      '</div>';

    $('r_tp').textContent=r.tp||'';

  }catch(err){
    hide('LV'); show('FV');
    $('errMsg').style.display='block';
    $('errMsg').textContent='Error: '+err.message;
  }
};

window.updateTierPrice=function(el){
  const price=+el.value||0;
  const costCsd=+el.dataset.costCsd||0;
  const costAmz=+el.dataset.costAmz||0;
  const tier=el.dataset.tier;
  const profCsdEl=$('tprof_csd_'+tier);
  const profAmzEl=$('tprof_amz_'+tier);
  if(profCsdEl) profCsdEl.textContent=fmtK(Math.round(price-costCsd));
  if(profAmzEl) profAmzEl.textContent=fmtK(Math.round(price-costAmz));
  const cqPriceEl=$('cq_price_'+tier);
  if(cqPriceEl) cqPriceEl.textContent=fmtK(Math.round(price));
  if(tier==='b'){
    const financeEl=$('cq_finance_amt');
    if(financeEl) financeEl.textContent=Math.round(price/18);
  }
};

window.printQuote=function(){window.print();};

window.downloadQuote=function(){
  const eq=$('equipment_list').outerHTML;
  const cq=$('customer_quote').outerHTML;
  const html='<!DOCTYPE html><html><head><meta charset="UTF-8"><title>KC Crawl Space Quote</title><style>'+
    'body{font-family:Arial,sans-serif;background:#f1f5f9;padding:24px}'+
    '.eq-list{list-style:none;padding:0;max-width:640px;margin:0 auto 24px;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.1)}'+
    '.eq-list li{display:flex;justify-content:space-between;gap:8px;padding:10px 14px;border-bottom:1px solid #e2e8f0;font-size:13px;color:#1e293b}'+
    '.eq-list li b{color:#166534}'+
    '.cq{background:#fff;color:#111;border-radius:10px;padding:20px;max-width:640px;margin:0 auto;font-family:Arial,sans-serif;box-shadow:0 1px 3px rgba(0,0,0,.1)}'+
    '</style></head><body>'+eq+cq+'</body></html>';
  const blob=new Blob([html],{type:'text/html'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download='KC-Crawlspace-Quote-'+(new Date().toISOString().slice(0,10))+'.html';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};

window.reset=function(){hide('RV');show('FV');$('notes').value='';$('sqft').value='';$('wh').value='';$('vents').value='';$('equipment_list').innerHTML='';$('customer_quote').innerHTML='';};
})();
`;

export default function QuoteGeneratorPage() {
  return (
    <div id="quote-app">
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />
    </div>
  );
}
