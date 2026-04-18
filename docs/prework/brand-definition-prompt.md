---
title: Prework — Brand Definition Prompt Template
date: 2026-04-17
version: 0.1
status: draft
---

# Brand Definition

This is Step 2 of prework. You'll produce a brand definition document that describes your company, its products, audience, positioning, voice, and objectives. This document becomes the foundation of your knowledge base — Claude Code will read from it on every build during the cohort.

**Time:** 30–60 minutes in Claude chat (including iteration).
**Output:** A markdown document, 800–1500 words, saved as `brand_definition.md`.

---

## Before you start

You should have already picked a company in Step 1. You'll need:

- **Company name** and **one-sentence description**
- **Basic context:** industry, approximate size, business model

If you chose a real company, draw on what you know. If you chose a simulated one, lean on the archetype Claude suggested — Claude can help you fill in gaps as you go.

---

## How to use this prompt

1. Open [claude.ai](https://claude.ai) and start a **fresh conversation** (don't continue your Step 1 chat — we want a clean slate).
2. Copy the prompt below.
3. Fill in the bracketed sections.
4. Paste into Claude.
5. Review the output using the checklist below.
6. If the output is strong, save it as `brand_definition.md`. If not, iterate with Claude until it is.

---

## The prompt

```
I'm building a brand definition document for my company. This document will
become context for an AI tool I'll use to produce strategic and operational
outputs over the next two weeks. It should be detailed, concrete, and
opinionated — not generic marketing fluff.

About my company:
- Name: [your company name]
- One-sentence description: [what you do, who you serve]
- Industry/context: [more detail — e.g., DTC skincare, B2B fintech,
  full-service creative agency]
- Approximate size: [employees or revenue range if relevant]
- Business model: [how you make money — e.g., subscription, retainer,
  one-time products, services]

Please produce a complete brand definition document in markdown format. It
should be 800–1500 words and cover these six sections:

1. **Overview** — what the company does, who it serves, its size and
   business model. A paragraph or two.

2. **Product / Service** — what you sell, at what price points, and
   how it works. Include specific product names, pricing examples, and
   any distinguishing features. Use a table if you have multiple products
   or service tiers.

3. **Audience** — 2–3 distinct audience personas. For each, describe:
   who they are, what they care about, what they ignore, what they'd
   find condescending. Be specific — not "people who love wellness"
   but "busy professionals in their 30s who read Mark Manson but avoid
   typical self-help."

4. **Positioning** — what makes this company different from competitors,
   and what tension or problem it addresses that others don't.

5. **Voice** — 2–3 core voice attributes (e.g., "plainspoken, confident,
   dry"). For each attribute, include:
   - A short description
   - 1–2 examples of how to phrase things
   - 1–2 examples of how NOT to phrase things

6. **Objectives** — what the company is trying to achieve in the next
   6–12 months. 3–5 specific objectives.

Keep the tone grounded and business-practical. Use concrete details. If
you need to invent specifics (product names, personas, etc.), do so
confidently — I can iterate with you afterward.

When you're done, list 3 questions I should consider to strengthen or
correct anything you invented.
```

---

## Check your output

Before saving, scan the document. Good output has:

- [ ] **Specific product or service details** — named products, real prices or price ranges, clear descriptions (not "our suite of offerings")
- [ ] **Distinct audience personas** — each persona is a character, not just demographics (age + income + "loves fitness")
- [ ] **Voice with examples** — "how to say" AND "how not to say" phrases, not just adjectives
- [ ] **Concrete positioning** — names the specific tension, not "better than competitors"
- [ ] **Measurable objectives** — not "grow the business" but "reach $X revenue by Q4" or "launch 3 new product categories"

If any of these are weak, ask Claude to strengthen that section specifically. Example: *"The product section is vague. Give me 3 named products with prices and a 1-sentence description for each."*

---

## Save the output

Once the document is strong:

1. Copy the entire markdown output.
2. Create a new text file on your computer called `brand_definition.md`.
3. Paste the content and save.
4. Save it to a folder you'll remember — for example, `~/Documents/agency-state/` on Mac or `Documents\agency-state\` on Windows. You'll drop this into your Claude Code project folder in Session 1.

---

## If you get stuck

- **The output feels generic:** Tell Claude *"this is too generic — make the audience, product, and voice sections much more specific. Invent details if you need to."*
- **A section is weak:** Ask Claude to rewrite just that section with more specificity and examples.
- **You hit a length limit:** Ask Claude to continue where it left off, or to produce the document section by section.
- **Something feels wrong:** Trust your instinct. Ask Claude to revise the part that's off.
- **You're not sure if it's good enough:** Compare to the reference example in the prework guide. If yours has similar specificity and structure, you're good.
