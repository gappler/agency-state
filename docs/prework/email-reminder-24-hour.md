---
title: Prework — 24-Hour Reminder Email
date: 2026-04-17
version: 0.2
status: draft
---

# 24-Hour Reminder Email

Sent ~24 hours before Session 1 (target: Sunday, June 7, 10am ET). Final touchpoint before the live session. Critical content is the Zoom link and pre-session checklist.

**Tokens to replace at send:** `[Name]`, `[Zoom link]`, `[dial-in info]`.

---

## Subject line

> See you tomorrow — here's your Zoom link.

**Alternates to consider:**
- *24 hours. Here's what you need.*
- *Tomorrow, 10am ET — Session 1*
- *Cohort 1 starts tomorrow*

---

## Body

---

Hi [Name],

Session 1 starts in 24 hours.

**When:** Monday, June 8, 10am–12pm ET
**Where:** [Zoom link]
**Dial-in (backup):** [dial-in info]

---

**Pre-session checklist (30 seconds):**

- [ ] `brand_definition.md` saved in your prework folder
- [ ] `[yourcompany]-data.csv` saved in the same folder
- [ ] Claude Code works: run `claude --version` in your terminal and you get a version number back
- [ ] Stable internet + quiet environment for 2 hours
- [ ] Zoom installed and updated

---

**If prework isn't fully done,** come anyway. We'll make it work. Don't skip or reschedule — that creates more friction than arriving with partial materials.

**Questions right now:** reply to this email or DM me in Slack. I'm around today.

**Tomorrow morning:** just join the Zoom a minute or two before 10am. No need to DM or check in first.

See you there.

Greg

---

## Design notes

- **Length:** ~200 words. Shortest of the three emails. At 24 hours out, attention is the scarcest resource.
- **Zoom link placement:** second sentence, before anything else. This is THE piece of information the email exists to deliver.
- **Checklist is short, scannable, and concrete.** Six items, each takes seconds to verify.
- **"Admin password" phrasing:** emphasizes it's *their* password for *their* machine. Original phrasing ("admin password handy") could sound like we need it — fixed.
- **Prework fallback handled.** "Come anyway, we'll make it work." No shaming, no loophole for dropping.
- **"Just join the Zoom a minute or two before 10am"** — removes any ambiguity about whether they need to DM first, warm up, etc. Lowers arrival friction.

---

## Open questions for implementation

- [ ] **Dial-in info:** keep, or drop? Default: keep as fallback in case video fails.
- [ ] **Send timing:** 24 hours exactly (Sunday 10am ET) or Sunday evening? Default: Sunday 10am — gives them the full day to react if something's broken.
- [ ] **Preview text (if supported):** *"Zoom link, pre-session checklist, and everything you need for Session 1."*
