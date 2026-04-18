---
title: Prework — Synthetic Data Prompt Template
date: 2026-04-17
version: 0.1
status: draft
---

# Synthetic Data

This is Step 3 of prework. You'll generate 12 months of synthetic business data for your company. This data becomes the raw material for the dashboards, reports, and planning outputs you'll build during Session 1 and beyond.

**Time:** 15–30 minutes in Claude chat.
**Output:** A CSV file with 12 rows and 5–10 columns, saved as `[yourcompany]-data.csv`.

---

## Before you start

You should have already produced your brand definition in Step 2. You'll use that same company context here. Have it open in another tab — you'll paste part of it into this prompt.

---

## How to use this prompt

1. Open [claude.ai](https://claude.ai) and start a **fresh conversation**.
2. Copy the prompt below.
3. Fill in the bracketed sections with context from your brand definition.
4. Paste into Claude.
5. Review the metrics Claude proposes. Adjust if needed.
6. Claude generates the CSV. Save it.

---

## The prompt

```
I'm generating 12 months of synthetic performance data for my company.
This data will become the raw material for an AI tool I'll use to build
dashboards, reports, and planning outputs over the next two weeks. The
data should be plausible, useful for analysis, and include meaningful
patterns worth diagnosing.

About my company:
- Name: [your company name]
- What the company does: [2–3 sentence summary from your brand definition]
- Business model: [subscription / DTC / services / agency retainer / other]
- Approximate size: [revenue range, customer count, or employee count
  if relevant]
- Relevant context for data: [what you'd want to track if this were real —
  e.g., DTC: revenue, orders, channel spend, email performance; agency:
  billable hours, client retention, project margins; SaaS: MRR, churn,
  activations]

Please do this in three steps:

**Step 1: Propose metrics.** Based on my business, suggest 5–8 metrics
that would realistically appear on a monthly performance dashboard for
a company like this. Briefly explain why each matters.

**Step 2: Wait for my confirmation.** I'll either accept the metrics
or ask you to adjust.

**Step 3: Generate the data.** Once I confirm, generate a CSV with:
- A header row
- 12 monthly rows in YYYY-MM format, covering the most recent 12
  complete months (calculate from today's date)
- Numbers plausible for a business of this size
- Realistic seasonality appropriate for this business type (e.g., DTC
  retail has holiday spikes; SaaS might have sign-up dips in December)
- At least one month with a meaningful anomaly — a spike or dip I could
  diagnose later

Format the CSV inside a code block so I can copy it cleanly. After the
table, briefly describe: (a) the seasonality pattern you built in,
(b) which month has the anomaly and what caused it (according to your
invented story), and (c) the 1–2 most interesting things an analyst
would notice in this data.
```

---

## Review the metrics first

Claude will propose metrics before generating data. Before you say "go":

- **Are the metrics specific to your business?** A DTC brand's metrics look different from an agency's. If Claude gave you generic metrics, ask for ones more tailored to your business type.
- **Is the mix useful?** Aim for at least one revenue metric, one volume metric (units, orders, sessions), one cost or investment metric, and one performance ratio.
- **Too many or too few?** 5–8 is the sweet spot. Fewer than 5 is thin. More than 8 gets unwieldy.

If anything's off, tell Claude what to adjust. Example: *"Swap 'brand sentiment score' for 'customer acquisition cost' — sentiment isn't something I'd track monthly."*

---

## Save the output

Once the data is strong:

1. Copy the CSV from Claude's code block — **just the CSV content**, not Claude's surrounding explanation.
2. Open a plain-text editor (TextEdit on Mac in "Plain Text" mode, or Notepad on Windows).
3. Paste the CSV content.
4. Save as `[yourcompany]-data.csv` in the same folder as your `brand_definition.md` (e.g., `~/Documents/agency-state/`).

**CSV format nuances to watch:**
- The file extension must be `.csv`, not `.txt`.
- On Mac, TextEdit defaults to rich text — switch to plain text first (Format → Make Plain Text).
- On Windows, when saving in Notepad, change "Save as type" to "All Files" and manually add `.csv` to the filename.

If you open the saved file in Excel or Numbers, it should render as a spreadsheet. That's how you know it saved correctly.

---

## If you get stuck

- **Claude skipped the metrics-proposal step and generated data immediately:** Say *"wait — first propose the metrics and let me confirm before generating the data."*
- **The numbers feel unrealistic:** Tell Claude *"the numbers are off for a business this size. [Describe what's off — e.g., revenue is too high for a 5-person team]. Recalibrate."*
- **The data doesn't have a clear anomaly:** Ask *"add a clear anomaly in one month — a spike or dip that would prompt investigation if I saw it in a dashboard."*
- **The CSV won't open correctly:** Check that you copied only the CSV content (no markdown backticks, no explanation text). If it still fails, ask Claude to *"regenerate the CSV with no extra text — just a clean code block with the data."*
- **You want more or fewer columns:** Just ask. Example: *"add a 'new customers' column and remove 'avg order value' — I'd rather track acquisition than AOV."*
