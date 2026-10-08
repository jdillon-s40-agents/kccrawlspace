import type { Metadata } from 'next';
import BidForms from '@/components/BidForms';

export const metadata: Metadata = {
  title: { absolute: 'Bid Sheets (Internal)' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function BidFormsPage() {
  return (
    <div style={{ background: '#0D0D0D', minHeight: '100vh' }}>
      <section style={{ padding: 'clamp(28px,5vw,48px) clamp(14px,4vw,22px) 18px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ color: '#F5A623', font: "700 12px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 10 }}>
            Internal use only
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(34px,7vw,52px)', lineHeight: 1, textTransform: 'uppercase', margin: '0 0 10px', color: '#fff' }}>
            Bid Sheets
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: '#9CA3AF', margin: 0 }}>
            Tap a job type, fill in what you see on site, and submit. The sheet is emailed to the office. Entries save on this device as you type.
          </p>
        </div>
      </section>
      <BidForms />
    </div>
  );
}
