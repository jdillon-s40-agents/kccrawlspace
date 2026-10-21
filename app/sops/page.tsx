import type { Metadata } from 'next';
import SopGuide from '@/components/SopGuide';

export const metadata: Metadata = {
  title: { absolute: 'Crew SOPs (Internal)' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function SopsPage() {
  return (
    <div style={{ background: '#0D0D0D', minHeight: '100vh' }}>
      <section style={{ padding: 'clamp(28px,5vw,48px) clamp(14px,4vw,22px) 18px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ color: '#F5A623', font: "700 12px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 10 }}>
            Internal use only
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(34px,7vw,52px)', lineHeight: 1, textTransform: 'uppercase', margin: '0 0 10px', color: '#fff' }}>
            Crew SOPs
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: '#9CA3AF', margin: 0 }}>
            Tap any layer in a diagram to see how it goes in. Drag the slider to build the job up in work order, then use the checklist on site.
          </p>
        </div>
      </section>
      <SopGuide />
    </div>
  );
}
