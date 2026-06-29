export default function AcornBanner({ style }: { style?: React.CSSProperties }) {
  return (
    <a
      href="https://www.acornfinance.com/pre-qualify/?d=3HQ2O&utm_medium=web_pre_qual_banner"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'block', textAlign: 'center', ...style }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="acornBanner"
        src="https://fs.acornfinance.com/banners/acorn-finance-banner-easy-payment-options-horizontal-medium.png"
        alt="Acorn Finance – apply and get affordable payment options from multiple lenders"
        style={{ maxWidth: '100%', height: 'auto', borderRadius: 5, border: '1px solid rgba(0,0,0,.25)', margin: '0 auto', display: 'block' }}
      />
    </a>
  );
}
