# Crawl Space Assessment Page — Design Spec

## Purpose

Add a new paid service line: a self-service ("DIY with oversight") crawlspace assessment product, sold in two tiers:

- **Virtual Assessment — $97**: customer submits their own photos/measurements/moisture readings; Jason reviews and delivers a written condition assessment + game plan within 48 hours.
- **In-Person Assessment — $197**: Jason visits the property, inspects in person, documents conditions, and delivers a game plan same-day or within 24 hours. The $197 is credited toward a full installation job booked within 90 days.

This is a distinct funnel from the existing free-inspection lead-gen path: the free inspection is for homeowners who want an install quote; this paid assessment targets DIYers and people wanting an independent, unbiased opinion before hiring anyone (including possibly a competitor).

Source spec: `KC_Assessment_Simple_Form_Spec.md` (provided by user), adapted to integrate into the existing Next.js site rather than build a standalone Vite/Netlify app.

## Decisions From Brainstorming

| Question | Decision |
|---|---|
| Where does this live? | New page inside the existing Next.js app — not a separate app/repo/hosting. |
| Payment | No payment integration. Formspree emails the submission; Jason manually sends a Square/PayPal invoice, same as the spec's MVP workflow. |
| Pricing | $97 Virtual / $197 In-Person, as specced. |
| URL slug | `/crawl-space-assessment-kansas-city/` — matches the site's established `crawl-space-<keyword>-kansas-city` pattern for topical/SEO consistency, and avoids "diy"/"inspection" naming collisions with the existing free-inspection CTA. |
| Nav visibility | Added to the main site nav (`NAV_LINKS`), label "Assessments" — treated as a real product, not a hidden page. |
| Funnel overlap | Treated as complementary, not competing: copy on both this page and the homepage should make clear which offer fits which situation, with contextual cross-links. |

## Architecture

One new route + one new client component, following existing site conventions exactly (no new patterns introduced):

- **`app/crawl-space-assessment-kansas-city/page.tsx`** — server component (no `'use client'`). Contains: `metadata` export (title as `{ absolute: ... }`, description, `alternates.canonical`), JSON-LD (`BreadcrumbList` + `LocalBusiness`, matching the pattern in other pages), hero, two service cards, "how it works" 3-step section, FAQ (static accordion — see Interactivity note below), bottom CTA, and the form section wrapping the new form component. Content structure follows the spec's section order (hero → service cards → how it works → form → FAQ → bottom CTA).
- **`components/AssessmentForm.tsx`** — new client component (`'use client'`), modeled directly on `components/InspectionForm.tsx`: same visual language (dark inputs, gold chip-selectors, loading/error/success states), but with conditional field groups driven by a `serviceType` state value (`'virtual' | 'in-person'`).
- **`lib/constants.ts`** — add one entry to the existing `NAV_LINKS` array: `{ key: 'assessment', label: 'Assessments', href: '/crawl-space-assessment-kansas-city/' }`.
- **Footer** — add a link alongside existing service links (footer already lists real service links per prior work).

No new dependencies, no new API routes, no database, no auth — same constraints as the source spec.

## Form Fields & Conditional Logic

**Step 1 — Service type** (radio/chip cards, required, drives everything below):
- Virtual Assessment — $97
- In-Person Assessment — $197

**Shared fields** (always shown once a service type is picked):
- First name *, Last name *, Email *, Phone *, Street address *, City *, Zip *
- Property type: Site-Built / Mobile Home / Other (chip selector)
- Crawlspace size estimate: Under 500 / 500–1,000 / 1,000–1,500 / 1,500–2,000 / Over 2,000 / Not sure (chip selector)
- Symptoms checklist (multi-select chips): musty smell, cold floors, high energy bills, mold concern, inspector flagged it, high humidity/moisture readings, pest/animal evidence, standing water/wet soil, preparing to sell, just want to know what's there
- Free-text description (optional textarea, with placeholder example text from the spec)
- "How did you hear about us?" dropdown: Nextdoor, Facebook, Google, Referral from neighbor/friend, Home inspector referral, Realtor referral, Other

**Virtual-only fields** (shown only when `serviceType === 'virtual'`):
- Do you have a moisture meter? Yes / No / I can get one
- Can you access your crawlspace yourself? Yes-no problem / Yes-tight but doable / Not sure / No-very limited access

**In-person-only fields** (shown only when `serviceType === 'in-person'`):
- Best days for appointment (multi-select checkboxes): Mon–Fri daytime, Saturday morning, Saturday afternoon, Flexible/just call
- Preferred contact method: Phone call / Text message / Either
- Gate codes or access notes (optional text field)

## Submission Behavior

- Client-side validation on required fields (native `required` attributes, same as `InspectionForm`).
- On submit: loading spinner on button → `fetch POST` to a **new, dedicated Formspree endpoint** (separate from the existing `mykaelwa` inspection-form endpoint, so paid-assessment leads don't mix with free-inspection leads in the inbox) → on success, swap form for a thank-you panel in place (same UX pattern as `InspectionForm`); on failure, show inline error directing the customer to call/text/email Jason directly.
- Thank-you message content (from spec, adapted to match site voice): confirms Jason will review and send an invoice within a few hours, explains next steps differ by service type (virtual → photo/measurement guide; in-person → scheduling call/text), and repeats the direct-contact fallback (phone/text/email).
- **Open item requiring user action before launch**: a Formspree endpoint ID for this new form. I'll wire the component to read this from one obvious constant so it's a one-line swap once the user creates the form at formspree.io. Until then it will point at a placeholder value and the page will otherwise be fully functional/deployable.

## Content

Hero, service cards, "how it works," FAQ, and bottom-CTA copy will be written fresh in the site's existing voice (same approach as the CTR rewrite already done across the other 57 pages) — not copied verbatim from the spec's placeholder text. FAQ content follows the spec's question list but answers will be tightened/reworded to match tone already established on pages like `crawl-space-mold-warning-signs`.

## SEO

- `title: { absolute: 'Crawl Space Assessment Kansas City | KC Crawl Space Specialists' }` (exact final wording refined at build time within 55–65 char target).
- Meta description 145–160 chars, trust signals (4.9★, same-week service where relevant), following the pattern used across the other 57 pages.
- `alternates.canonical: 'https://www.crawlspacekc.com/crawl-space-assessment-kansas-city/'`.
- Added to `app/sitemap.ts` (already enumerates all page routes — confirm the new route is picked up, since sitemap generation may be manual or automatic depending on how it currently reads routes).
- JSON-LD: `BreadcrumbList` + `LocalBusiness`, matching existing pages. Consider adding an `Offer`/`Product`-style schema entry for the two price points — deferred as a nice-to-have, not required for MVP.

## Out of Scope (matches source spec)

- Stripe/payment processing
- Photo upload in the form (Jason shares a Google Drive link after payment, per spec workflow)
- Admin dashboard, customer portal, automated emails, PDF generation, scheduling/calendar integration
- Separate hosting/subdomain

## Testing / Verification

- `npx tsc --noEmit` and `next build` must pass (existing project convention).
- Manual verification in dev server: submit form with virtual path selected, verify conditional fields show/hide correctly; repeat for in-person path; verify thank-you state renders; verify a deliberately-failed submission (e.g. bad endpoint) shows the error state.
- Confirm the new nav link appears on both desktop nav and mobile fullscreen menu (both are driven by the same `NAV_LINKS` array, so this should require no separate work, but verify visually).
- Confirm canonical tag and title render correctly in built HTML (same check performed for the CTR/canonical fix work).
