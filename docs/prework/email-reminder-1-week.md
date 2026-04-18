---
title: Prework — 1-Week Reminder Email
date: 2026-04-17
version: 0.3
status: draft
---

# 1-Week Reminder Email

Sent one week before Session 1 (target: Monday, June 1, morning). Check-in moment. Two jobs: remind them the cohort is coming, and surface a path for anyone behind on prework.

**Tokens to replace at send:** `[Name]`, `[prework guide URL]`, `[office hours Zoom link]`, `[What to Expect URL]`.

---

## Subject line

> One week to go. Prework check-in.

**Alternates to consider:**
- *7 days to Cohort 1*
- *Your prework, 1 week out*
- *One week to Session 1 — where are you?*

---

## Body

---

Hi [Name],

Session 1 is one week from today — **Monday, June 8, 10am ET**.

**Where you should be:** prework complete. That means:
- Company picked (real or simulated)
- `brand_definition.md` saved to your prework folder
- `[yourcompany]-data.csv` saved to the same folder
- Claude Pro subscription active
- Claude Code installed and working — `claude --version` returns a version number in your terminal

**If you're done:** you're ready. Nothing more to do until the 24-hour reminder lands.

**If you're not done:**
- **Finish this weekend if you can.** The templates are in the [prework guide]([prework guide URL]). Budget 1–2 hours for anything you haven't started.
- **Install blocked by IT?** Your IT team is the fastest path. They own install authorization on work machines.
- **Claude-Code-specific question?** DM Greg in Slack. I'm around and can jump on a quick call if you're stuck.
- **Slack channel** is the general path — ask any time. Most questions get answered same-day.

---

**New: a "What to expect in Session 1" doc.** Quick read (~5 minutes) that covers the flow, tech checks, and what to have ready.

→ **[Open "What to Expect"]([What to Expect URL])**

---

**If your Claude Code install isn't working yet,** don't come to Session 1 with a broken install if you can avoid it. IT team first for machine/permission issues; DM Greg in Slack for Claude-Code-specific questions and we'll jump on a quick call. Much easier to resolve now than live in a class of 10.

See you Monday.

Greg

---

## Design notes

- **Length:** ~240 words. Matches the welcome email's rhythm.
- **Information hierarchy:** date → status expectation → two paths (done / not done) → new resource → small practical check → close.
- **"Where you should be" framing.** Direct without shaming. Someone who hasn't started yet has a clear, actionable path ("finish this weekend, use office hours, use Slack").
- **The terminal check is intentional.** It surfaces the most common Session 1 setup failure ("I've never opened Terminal") at a moment when there's time to handle it. Shifts one avoidable headache out of the live session.
- **"What to Expect" doc positioned as new/additive.** Participants feel like they're getting something, not being reminded about something they missed.
- **No opt-out language.** Deliberately doesn't invite participants to drop. If someone's genuinely unable to continue, they'll reach out on their own.

---

## Open questions for implementation

- [ ] **Office hours Zoom link:** persistent personal room, or a dedicated office hours meeting? Default: persistent personal room, simpler.
- [ ] **Office hours time:** 11am–12pm ET is a guess. Confirm and lock into all comms.
- [ ] **"What to Expect" delivery:** linked from email, or attached PDF? Default: linked — web page or markdown on site.
- [ ] **Send timing:** Monday morning, or Friday afternoon for weekend work? Default: Monday morning — feels like a new-week check-in; less ominous than a Friday-night "deadline pressure" vibe.
