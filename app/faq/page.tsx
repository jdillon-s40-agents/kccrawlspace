import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Crawlspace FAQ — Answers for Kansas City Homeowners',
  description:
    'Common questions about crawlspace encapsulation cost, mold, moisture, and what encapsulation really does — answered straight.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does crawl space encapsulation cost in Kansas City?', acceptedAnswer: { '@type': 'Answer', text: 'Every crawl space is different, so the price depends on your specific situation — your home\'s size, the current condition, and which system fits. Most KC homeowners invest $4,500–$6,500 for a complete system. Financing is available with payments as low as $165 per month.' } },
    { '@type': 'Question', name: 'Is crawl space encapsulation worth it?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. In Kansas City\'s humid climate, encapsulation typically pays back through 15–20% lower heating and cooling bills, healthier indoor air, protection from mold and wood rot, and higher resale value. Fixing moisture damage later costs far more than preventing it.' } },
    { '@type': 'Question', name: 'Does crawl space encapsulation increase home value?', acceptedAnswer: { '@type': 'Answer', text: 'It does. A sealed, dry, documented crawl space removes a common home-inspection red flag and reads as a permanent upgrade to buyers and inspectors. Our written report and transferable lifetime warranty travel with the home.' } },
    { '@type': 'Question', name: 'Do you offer financing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work with multiple financing partners, with payments as low as $165 per month and 0% APR plans available. Approval takes about 60 seconds with no impact to your credit score to check your options.' } },
    { '@type': 'Question', name: 'Is the inspection really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — the inspection and the written estimate are completely free, with no pressure and no obligation. It takes about 30 minutes and ends with an exact quote built around your home.' } },
    { '@type': 'Question', name: 'What is crawl space encapsulation?', acceptedAnswer: { '@type': 'Answer', text: 'Encapsulation seals your crawl space from the ground up. We line the floor and walls with a heavy 20-mil vapor barrier, close and insulate the vents, treat any existing mold, and add a commercial dehumidifier that keeps humidity locked below 60%. The result is a clean, dry, conditioned space instead of a damp dirt cellar feeding moisture into your home.' } },
    { '@type': 'Question', name: 'How long does encapsulation take?', acceptedAnswer: { '@type': 'Answer', text: 'Most Kansas City homes are completed in 1–2 days. Larger spaces or jobs that need mold remediation first may take up to 3 days. You don\'t need to leave your home while we work.' } },
    { '@type': 'Question', name: 'Why do Kansas City crawl spaces have moisture problems?', acceptedAnswer: { '@type': 'Answer', text: 'Kansas City sits on dense clay soil that traps water against foundations, gets around 40 inches of rain a year, and reaches 90% summer humidity. Hot, humid air pours through open vents, hits the cooler ground, and condenses — feeding mold and rotting wood.' } },
    { '@type': 'Question', name: 'Does encapsulation get rid of mold?', acceptedAnswer: { '@type': 'Answer', text: 'Encapsulation removes the conditions mold needs by sealing out moisture and holding humidity below 60%. We treat any existing mold on the joists and framing during installation, and the sealed, dehumidified environment keeps it from returning.' } },
    { '@type': 'Question', name: 'Will encapsulation lower my energy bills?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — sealed crawl spaces improve efficiency by about 15–20% in most KC homes by eliminating the biggest source of uncontrolled air and moisture.' } },
    { '@type': 'Question', name: 'How long does crawl space encapsulation last?', acceptedAnswer: { '@type': 'Answer', text: 'A properly installed system lasts 20–30 years. The 20-mil vapor barrier carries a 25-year manufacturer warranty, and our labor is backed by a transferable lifetime Dry Crawlspace Promise.' } },
  ],
};

const costFaqs = [
  { q: 'How much does crawl space encapsulation cost in Kansas City?', a: "Every crawl space is different, so the price depends on your specific situation — your home's size, the current condition, and which system fits. That's why we give you a firm written quote after a free inspection instead of a phone guess. Financing is available with payments as low as $165 per month." },
  { q: 'Is crawl space encapsulation worth it?', a: "Yes. In Kansas City's humid climate, encapsulation typically pays back through 15–20% lower heating and cooling bills, healthier indoor air, protection from mold and wood rot, and higher resale value. Fixing moisture damage later — remediation, rotted joists, failed inspections — costs far more than preventing it." },
  { q: 'Does crawl space encapsulation increase home value?', a: 'It does. A sealed, dry, documented crawl space removes a common home-inspection red flag and reads as a permanent upgrade to buyers and inspectors. Our written report and transferable lifetime warranty travel with the home.' },
  { q: 'Do you offer financing?', a: 'Yes. We work with multiple financing partners, with payments as low as $165 per month and 0% APR plans available. Approval takes about 60 seconds with no impact to your credit score to check your options. Your exact payment depends on your home and scope of work.' },
  { q: 'Is the inspection really free?', a: 'Yes — the inspection and the written estimate are completely free, with no pressure and no obligation. It takes about 30 minutes and ends with an exact quote built around your home, not a guess.' },
];

const processFaqs = [
  { q: 'What is crawl space encapsulation?', a: "Encapsulation seals your crawl space from the ground up. We line the floor and walls with a heavy 20-mil vapor barrier, close and insulate the vents, treat any existing mold, and add a commercial dehumidifier that keeps humidity locked below 60%. The result is a clean, dry, conditioned space instead of a damp dirt cellar feeding moisture into your home." },
  { q: "What's the difference between a vapor barrier and full encapsulation?", a: 'A vapor barrier is just plastic laid on the floor — vents stay open, walls stay exposed, and humidity is untouched. Full encapsulation seals the floor, walls, vents, and rim joists and adds active dehumidification. It\'s the difference between a band-aid and a cure.' },
  { q: 'How long does encapsulation take?', a: "Most Kansas City homes are completed in 1–2 days. Larger spaces or jobs that need mold remediation first may take up to 3 days. You don't need to leave your home while we work." },
  { q: 'Do I need to leave my home during installation?', a: "No. Our crew works under the house, so you can go about your normal day. We'll let you know when we need access to entry points." },
  { q: 'Can I do crawl space encapsulation myself?', a: 'DIY vapor barriers almost always fail at the seams, walls, and vents — the places that matter most. Proper encapsulation needs commercial-grade 20-mil liner, correct seam-taping and termination, vent sealing, and a properly sized dehumidifier. A partial job traps moisture instead of stopping it, and professional installation is what makes the lifetime warranty possible.' },
  { q: 'How do I know if my crawl space needs encapsulation?', a: 'Common signs: a musty smell in the home, cold or bouncy floors, high indoor humidity, visible mold or condensation, standing water or damp soil under the house, higher-than-normal energy bills, or a home inspector flagging moisture. A free inspection tells you for certain.' },
];

const moldFaqs = [
  { q: 'Why do Kansas City crawl spaces have moisture problems?', a: "Kansas City sits on dense clay soil that traps water against foundations, gets around 40 inches of rain a year, and reaches 90% summer humidity. Hot, humid air pours through open vents, hits the cooler ground, and condenses — feeding mold and rotting wood. It's a local condition, not a fluke." },
  { q: 'Does encapsulation get rid of mold?', a: 'Encapsulation removes the conditions mold needs by sealing out moisture and holding humidity below 60%. We treat any existing mold on the joists and framing during installation, and the sealed, dehumidified environment keeps it from returning.' },
  { q: 'Can mold come back after encapsulation?', a: "Not in a properly sealed and dehumidified crawl space. Mold needs moisture and humidity above roughly 60% to grow. Our system keeps humidity below that line permanently, which is why it's backed by our lifetime Dry Crawlspace Promise." },
  { q: 'Does encapsulation get rid of musty smells?', a: "Yes. Musty odors in your home are usually crawl space air rising through the stack effect. Sealing and dehumidifying the space eliminates the source, and most homeowners notice the smell is gone within days." },
  { q: 'Will encapsulation lower my energy bills?', a: 'Yes — sealed crawl spaces improve efficiency by about 15–20% in most KC homes by eliminating the biggest source of uncontrolled air and moisture. Your floors are warmer in winter and your HVAC works less in summer.' },
  { q: 'What humidity level should a crawl space be?', a: 'Below 60% relative humidity. Above that, mold and wood rot can take hold. Our commercial dehumidifiers are sized to keep your crawl space under 60% year-round — and our warranty guarantees it.' },
  { q: 'Does encapsulation help with pests and rodents?', a: "Yes. Sealing the vents, walls, and floor removes the damp, dark, open environment pests are drawn to and closes off their entry points. A dry, sealed crawl space is far less attractive to rodents and insects." },
];

const resultFaqs = [
  { q: 'How long does crawl space encapsulation last?', a: "A properly installed system lasts 20–30 years. The 20-mil vapor barrier carries a 25-year manufacturer warranty, and our labor is backed by a transferable lifetime Dry Crawlspace Promise." },
  { q: 'What is the Dry Crawlspace Promise?', a: "It's our lifetime guarantee: if moisture in your crawl space ever exceeds 60% relative humidity for more than 48 hours after our installation, we come back and fix it at zero cost. No questions, forever — and it transfers to the next owner." },
  { q: 'Does homeowners insurance cover encapsulation?', a: "Usually not, because encapsulation is preventive. But if moisture has already caused structural damage, some policies may cover the remediation. We document everything with photos and a written report for your insurer." },
  { q: 'What areas do you serve?', a: "We serve the greater Kansas City region — anywhere within about an hour of Kansas City, on both the Missouri and Kansas sides of the metro. Not sure if we cover you? Just call and ask." },
  { q: 'How is your work different from a foundation company\'s?', a: "Crawl spaces are all we do. Our field team works exclusively on crawl space and underbelly installations — trained specifically for KC's clay soil, humidity, and housing stock — so you're not getting an upsell from a general contractor." },
];

interface FaqGroupProps {
  title: string;
  faqs: { q: string; a: string }[];
  bg: string;
  textColor: string;
  dividerColor: string;
  detailBg: string;
  detailBorder: string;
  qColor: string;
  aColor: string;
  plusColor: string;
}

function FaqGroup({ title, faqs, bg, textColor, dividerColor, detailBg, detailBorder, qColor, aColor, plusColor }: FaqGroupProps) {
  return (
    <section style={{ background: bg, padding: 'clamp(48px,7vw,80px) clamp(16px,5vw,24px)' }}>
      <div style={{ maxWidth: 840, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(22px,3.4vw,30px)', color: textColor, textTransform: 'uppercase' as const, letterSpacing: '.01em' }}>
            {title}
          </span>
          <span style={{ flex: 1, height: 1, background: dividerColor }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((f) => (
            <details key={f.q} style={{ background: detailBg, border: detailBorder, borderRadius: 12, padding: '0 22px' }}>
              <summary style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 0', minHeight: 44 }}>
                <span className="faq-q" style={{ flex: 1, font: "800 17px 'Inter',sans-serif", color: qColor, lineHeight: 1.4 }}>{f.q}</span>
                <span className="faq-plus" style={{ flex: 'none', color: plusColor, fontSize: 26, fontWeight: 300, lineHeight: 1, width: 22, textAlign: 'center' as const }}>+</span>
              </summary>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: aColor, margin: '0 0 22px', paddingRight: 38 }}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FaqPage() {
  return (
    <div style={{ background: '#0D0D0D', overflowX: 'hidden' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section style={{ position: 'relative', background: 'radial-gradient(120% 90% at 80% 0%, rgba(37,99,235,.18) 0%, rgba(37,99,235,0) 45%), radial-gradient(90% 80% at 0% 100%, rgba(245,166,35,.12) 0%, rgba(245,166,35,0) 50%), #0D0D0D', padding: 'clamp(40px,7vw,80px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F5A623', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 18 }}>
            <span style={{ width: 24, height: 2, background: '#F5A623', display: 'inline-block' }} />Answers, Straight Up
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(38px,7.5vw,68px)', lineHeight: 1, letterSpacing: '.005em', textTransform: 'uppercase' as const, margin: '0 0 18px', color: '#fff' }}>
            Crawl Space <span style={{ color: '#F5A623' }}>Questions</span>, Answered
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.3vw,19px)', lineHeight: 1.6, color: '#9CA3AF', maxWidth: '62ch', margin: '0 auto 30px' }}>
            The questions Kansas City homeowners actually search for — about cost, mold, moisture, and what encapsulation really does. Clear answers, no jargon, no pressure.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 26px', borderRadius: 10, minHeight: 54, boxShadow: '0 12px 32px -10px rgba(245,166,35,.65)' }}>
              Book Your Free Inspection
            </Link>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: 'transparent', color: '#fff', font: "700 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 24px', borderRadius: 10, minHeight: 54, border: '1.5px solid rgba(255,255,255,.35)' }}>
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      <FaqGroup title="Cost & Value" faqs={costFaqs} bg="#0D0D0D" textColor="#fff" dividerColor="rgba(245,166,35,.3)" detailBg="#111827" detailBorder="1px solid rgba(255,255,255,.1)" qColor="#fff" aColor="#9CA3AF" plusColor="#F5A623" />
      <FaqGroup title="How It Works" faqs={processFaqs} bg="#F9FAFB" textColor="#0D0D0D" dividerColor="rgba(27,58,107,.2)" detailBg="#fff" detailBorder="1px solid #e5e7eb" qColor="#0D0D0D" aColor="#4b5563" plusColor="#1B3A6B" />
      <FaqGroup title="Moisture, Mold & Air" faqs={moldFaqs} bg="#1B3A6B" textColor="#fff" dividerColor="rgba(245,166,35,.35)" detailBg="#0D0D0D" detailBorder="1px solid rgba(255,255,255,.1)" qColor="#fff" aColor="#c3d0e6" plusColor="#F5A623" />
      <FaqGroup title="Results, Warranty & Service" faqs={resultFaqs} bg="#0D0D0D" textColor="#fff" dividerColor="rgba(245,166,35,.3)" detailBg="#111827" detailBorder="1px solid rgba(255,255,255,.1)" qColor="#fff" aColor="#9CA3AF" plusColor="#F5A623" />

      {/* STILL HAVE QUESTIONS */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(48px,7vw,80px) clamp(16px,5vw,24px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1B3A6B', font: "600 13px 'Inter',sans-serif", letterSpacing: '.16em', textTransform: 'uppercase' as const, marginBottom: 14 }}>
            <span style={{ width: 24, height: 2, background: '#1B3A6B', display: 'inline-block' }} />Didn&apos;t Find It?
          </div>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,5.5vw,46px)', lineHeight: 1.04, textTransform: 'uppercase' as const, margin: '0 0 14px', color: '#0D0D0D' }}>
            Still Have a Question?
          </h2>
          <p style={{ fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.6, color: '#4b5563', margin: '0 0 26px' }}>
            Ask a real person — no call center, no pressure. We&apos;ll tell you straight whether you even need us.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#0D0D0D', color: '#fff', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 26px', borderRadius: 10, minHeight: 54 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              {PHONE}
            </a>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#F5A623', color: '#0D0D0D', font: "800 16px 'Inter',sans-serif", textDecoration: 'none', padding: '16px 26px', borderRadius: 10, minHeight: 54 }}>
              Book a Free Inspection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
