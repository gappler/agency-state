---
title: Prework — Welcome Email
date: 2026-04-17
version: 0.4
status: draft
---

# Welcome Email

Sent immediately on booking confirmation. First touch with the participant after they've reserved their seat.

**Tokens to replace at send:** `[Name]`, `[prework guide URL]`, `[Slack invite URL]`.

---

## Subject line

> You're in. Here's your prework.

**Alternates to consider:**
- *Agency State Cohort 1 — prework and next steps*
- *Welcome to Cohort 1 — prework starts here*

---

## Body

---

Hi [Name],

Thanks for booking a seat in Agency State Cohort 1. You're confirmed.

**Your session dates (all live online, 10am ET, 2 hours each):**
- **Session 1** — Monday, June 8 — Build your knowledge base
- **Session 2** — Tuesday, June 9 — Build the outputs your work demands
- **Session 3** — Monday, June 15 — Build content that sounds like you
- **Session 4** — Tuesday, June 16 — Demo day

Office hours: Wednesday of each week. Optional, drop-in.

---

**Before Session 1, you have prework.**

Plan for about 3–5 hours total across the two weeks before we start. Prework has two parts:

1. **Produce your prework files in Claude chat** (2–4 hours). You'll build a brand definition document and a synthetic data CSV that become the starting context for everything you build during the cohort.

2. **Install Claude Code on your machine** (15–30 minutes). This includes subscribing to Claude Pro ($20/month — cancel anytime after the cohort). Arriving at Session 1 with a working install lets us spend the session building instead of troubleshooting. If you're on a company machine and need IT help to install, raise it with your IT team now — not the day before class.

→ **[Start the prework guide]([prework guide URL])**

---

**Join the cohort Slack channel.** You'll meet the group, ask prework questions (DM me directly for anything Claude-Code-specific), and share what you're building. The channel gets most active during the 5-day independent build window between Sessions 2 and 3.

→ **[Join Slack]([Slack invite URL])**

---

**What to expect next:**
- **A week before Session 1:** I'll check in with a reminder, a "What to expect in Session 1" doc, and an offer to use office hours if you're stuck on prework.
- **24 hours before:** Zoom link and a pre-session checklist.
- **Session 1 (June 8):** we install Claude Code together and you build your first output before the session ends.

If you have questions, reply to this email or DM me in Slack.

Welcome in.

Greg

---

## Design notes

- **Length:** ~230 words. Scannable on phone or desktop.
- **Tone:** matches brand book §7 — plainspoken, confident, dry, respectful. Opens with "You're in." rather than "Congratulations!" or similar overclaim. Closes with "Welcome in." — warm without being effusive.
- **Information hierarchy:** dates first (they want to know what they committed to), prework second (the immediate action), Slack third (community tie-in), reminders last (forward-looking).
- **Session themes use the brand-book-aligned names** from `brand/agency-state-brand-book.md` §4 and `docs/agency-state-cohort-curriculum.md`. Keeps messaging coherent from website → booking → welcome email → curriculum.
- **The prework CTA is the primary action.** Everything else is context.
- **Preview text (optional, if the email client supports it):** *"You reserved your seat. Here's your prework and everything else you need."*

---

## Open questions for implementation

- [ ] Does the email system support personalized `[Name]` token, or should we make it generic ("Hi there")? Default recommendation: personalized.
- [ ] Will the Slack invite be a shared channel-link or individual invites? Default: shared channel-invite URL with auto-join.
- [ ] Will prework be a page on agencystate.ai or hosted elsewhere? This affects the link in the email.
- [ ] What's the send trigger — manual after booking, or automated via Calendly webhook? Default: manual for Cohort 1 (10 seats = manageable), automate later.
