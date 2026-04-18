---
title: Prework Guide — Agency State Cohort 1
date: 2026-04-17
version: 0.3
status: draft
---

# Prework Guide

Welcome to Agency State. You've reserved a seat in Cohort 1, starting **Monday, June 8**. This guide walks you through everything you'll do before Session 1 begins.

**Time commitment:** 2–4 hours total, spread across the two weeks before the cohort. Do it at your own pace.
**What you'll produce:** two files — a brand definition document and a synthetic data CSV. Both become the starting context for everything you build during the cohort.

---

## The method you'll practice

Agency State teaches one method, applied to the outputs business and marketing professionals produce every day. The method has three parts:

**Context.** What Claude needs to do meaningful work for you — your brand, your audience, your rules, your workflows. You build it as a knowledge base.

**Conversation.** How you direct Claude's work. Writing prompts that set scope, reviewing what comes back, iterating until the output fits.

**Outputs.** What you produce. Strategies, plans, briefs, campaigns, dashboards, reports, content — each one shaped by your context, built through conversation.

**Context. Conversation. Outputs.** You'll hear this phrase often across the two weeks. It's not a slogan. It's the shape of every build.

---

## Why prework exists

Two jobs:

1. **Prework seeds your knowledge base.** Everything you produce during prework becomes the starting context for Session 1 and beyond. Your brand definition is what Claude Code reads when it builds your dashboard. Your synthetic data is what the dashboard reads. You're not practicing — you're building the foundation you'll use.

2. **Prework filters for readiness.** The prework requires conversational fluency with Claude — no terminal, no install, just directed conversations in the chat interface. If you can produce a strong brand definition in Claude chat, you're ready for Claude Code in Session 1. If you can't, the cohort isn't the right starting point yet.

Prework happens in **[claude.ai](https://claude.ai)**, not Claude Code. You don't install anything yet. Terminal setup is Session 1, and we'll guide you through it live.

---

## Before you start

**You'll need:**
- A Claude account at [claude.ai](https://claude.ai). Free tier is fine for prework.
- A plain-text editor you can save files with (TextEdit on Mac set to "Plain Text," or Notepad on Windows).
- A dedicated folder on your computer to save your prework files — for example, `~/Documents/agency-state/`. You'll drop this folder into your Claude Code project in Session 1.

**For the three steps below, you don't need:**
- Claude Code installed — you'll install it later as the final prework step.
- A terminal or command line — same, later.
- Any programming background — the cohort doesn't require one.

---

## The three steps

Work through these in order. Each step has its own page with a copy-paste prompt, a usage walkthrough, and a "what to save" section.

### Step 1: Pick your company

**Time:** 10–15 minutes.
**What you'll decide:** whether to use your real company or invent a simulated one. If you invent, you'll pick an archetype.

→ **[Go to Step 1: Company Selection](company-selection-prompt.md)**

---

### Step 2: Build your brand definition

**Time:** 30–60 minutes.
**What you'll produce:** a markdown document describing your company's overview, product, audience, positioning, voice, and objectives. Saved as `brand_definition.md`.

**Reference:** See an example of a strong brand definition at **[Yowie Brand Definition Reference](reference-brand-definition.md)** before you start. Use it as a benchmark, not a template.

→ **[Go to Step 2: Brand Definition](brand-definition-prompt.md)**

---

### Step 3: Generate your synthetic data

**Time:** 15–30 minutes.
**What you'll produce:** a CSV file with 12 months of monthly performance data for your company. Saved as `[yourcompany]-data.csv`.

**Reference:** See an example of strong synthetic data at **[Yowie Data Reference](reference-synthetic-data.md)** before you start.

→ **[Go to Step 3: Synthetic Data](synthetic-data-prompt.md)**

---

## Before Session 1 — Install Claude Pro and Claude Code

Once the three steps above are done, complete one more prerequisite: subscribe to Claude Pro and install Claude Code on your machine. This is prework — we want you arriving at Session 1 with a working install, not troubleshooting during the first 30 minutes.

**Time:** 15–30 minutes typically; up to an hour if you need to install Node.js or hit permission issues.
**Cost:** Claude Pro is $20/month. You can cancel anytime after the cohort.
**Deadline:** at least one week before Session 1.

→ **[Open the install guide](install-guide.md)**

**A note on work machines:** if you're installing on a company-issued computer, your IT department may need to authorize Node.js or npm. Raise this with IT now — not the day before Session 1. Your IT team owns install-level issues on work machines; for Claude-Code-specific questions, DM Greg in Slack.

**Data and security:** the install guide has a short section on what *not* to include in your project folder (sensitive data, credentials, regulated information). Read it before you install.

---

## Deliverable checklist

When you've completed prework, you should have:

- [ ] A decision on which company you're using (real or simulated, with name and one-sentence description)
- [ ] A file called `brand_definition.md` saved in your prework folder — 800–1500 words, covering the six sections
- [ ] A file called `[yourcompany]-data.csv` saved in the same folder — 12 rows, 5–10 columns, with realistic seasonality and at least one anomaly worth investigating
- [ ] Claude Pro subscription active at claude.ai
- [ ] Claude Code installed and authenticated (`claude --version` returns a version number in your terminal)

If you can check all five, you're ready for Session 1.

---

## If you get stuck

- **Office hours:** Wednesday of each week, 30–60 minute open drop-in on Zoom. Link in your welcome email. Come if you're stuck, confused, or want to talk through a choice.
- **Slack channel:** You were invited when you booked. Ask questions any time. Facilitator and fellow cohort members respond.
- **FAQ:** Common questions are answered in the [prework FAQ](faq.md) — scan there first before asking.
- **Something urgent:** DM Greg in Slack, or email the address in your welcome message.

You don't have to get prework perfect. "Good enough and moving" beats "polished but stalled." The cohort will iterate your work further.

---

## What happens next

- **1 week before Session 1:** you'll get a reminder email. It includes a "What to expect" doc and an offer to use office hours if you're stuck on prework.
- **24 hours before Session 1:** you'll get the Zoom link and a pre-session checklist.
- **Session 1 (Monday, June 8, 10am ET):** you arrive with your two files ready. We install Claude Code together, seed your knowledge base, and you build your first output before the session ends.

That's the plan. Welcome in.

— Greg
