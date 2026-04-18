---
title: Prework — Reference Synthetic Data (Yowie)
date: 2026-04-17
version: 0.1
status: draft
---

# Reference: What Strong Synthetic Data Looks Like

This is the monthly performance data for **Yowie**, used in Agency State's live demos. It pairs with the Yowie brand definition. Your CSV won't look identical — different business, different metrics — but this shows the level of detail, structure, and analytical depth your data should have.

**Use this reference to check:**
- Does your data have a *month* column in `YYYY-MM` format?
- Do you have 12 rows, one per month?
- Do your columns include a mix of revenue, volume, cost, and performance ratio?
- Can you see seasonality in the numbers when you scan the columns?
- Is there at least one moment (a month, a row) where the numbers look anomalous compared to the rest?

If your data hits these five marks, you're ready for Session 1.

---

## What makes this example strong

Before you look at the numbers, notice the structure:

1. **Twelve columns, twelve rows.** Rich enough for analysis, not so rich it's unwieldy. Yowie has 12 columns — that's an upper bound. Your CSV could have as few as 6 and still be useful.
2. **Mix of metric types.** Revenue (three different kinds), volume (sessions, orders, units, engagements), cost (meta spend), performance ratio (ROAS, AOV), activity (emails sent). A dashboard can cut multiple ways.
3. **Realistic seasonality.** Summer peak, winter trough — consistent with an outdoor gear brand. The pattern is legible even without knowing the company.
4. **An embedded anomaly.** December's Meta ROAS drops to 3.91 — half the July peak. That's not just seasonal softness; it looks like paid acquisition efficiency broke down during the holiday period. A question worth diagnosing.
5. **A narrative layer.** Email revenue starts at 0 in April and grows through summer. Reads like a brand that launched its email program mid-year.

These are the patterns your data should also show.

---

## Yowie Monthly Performance Data

*A DTC outdoor gear company, 12 months of simulated performance data (April 2025 – March 2026).*

```
month,web_sessions,emails_sent,email_revenue,meta_spend,meta_revenue,meta_roas,social_engagements,orders,units_sold,total_revenue,avg_order_value
2025-04,6617,5374,0,1991,10780,5.41,458,49,51,19173.0,391.29
2025-05,8121,5529,770,2320,12320,5.31,521,57,63,23542.75,413.03
2025-06,9372,8477,1540,3209,19250,6.00,653,67,72,27027.0,403.39
2025-07,11851,8903,1925,3563,26180,7.35,806,83,88,33610.5,404.95
2025-08,10334,9378,2310,3589,21560,6.01,836,72,80,30607.5,425.10
2025-09,9892,6448,1540,3066,19250,6.28,820,67,75,28259.0,421.78
2025-10,8349,6637,770,2564,13090,5.11,691,61,67,25025.0,410.25
2025-11,5996,6948,385,1767,10395,5.88,509,44,46,17325.0,393.75
2025-12,4576,7102,385,1478,5775,3.91,308,31,32,12069.75,389.35
2026-01,4451,7303,0,1464,5775,3.94,304,31,31,11627.0,375.06
2026-02,5223,7392,0,1594,6545,4.11,337,34,35,13186.25,387.83
2026-03,7022,7426,770,2413,13090,5.42,701,47,50,19076.75,405.89
```

---

## What an analyst would notice

When you load this data into a dashboard (Session 1), these are the patterns that surface:

- **July is peak revenue** at $33,610 — summer demand for outdoor gear.
- **December/January is the trough** at ~$12,000 — half of July. Makes sense for a premium pack brand; nobody buys a 45L backpack for Christmas.
- **Meta ROAS varies 2x across the year.** 7.35 in July (easy conversions), 3.91 in December (cold audience, competitive CPCs). A real marketer would want to investigate December specifically — is this a budget issue, creative fatigue, or just seasonal friction?
- **Email revenue starts at 0.** In April the email list generated nothing. By August it's generating $2,310. The program is building.
- **AOV is stable.** Around $400 across the year — Yowie sells a single-SKU product, so AOV doesn't move much.

These patterns are what make Session 2's planning work — scenario modeling, budget allocation, capacity planning — feel real. Without realistic seasonality and an anomaly to diagnose, the planning tools would have nothing to plan around.

---

## Note on column count

Yowie has 12 columns. If yours has 6 or 8, you're fine. What matters is the *mix* of metrics, not the count:

- **At least one revenue metric** (total revenue, MRR, client billings, etc.)
- **At least one volume metric** (orders, units, sessions, signups, projects, hours)
- **At least one cost or spend metric** (ad spend, labor cost, COGS, etc.)
- **At least one performance ratio** (ROAS, margin, utilization, CAC, etc.)
- **Optional: activity metrics** (emails sent, content published, meetings held)

A B2B SaaS company's CSV will have MRR, churn, activations, and CAC. An agency's CSV will have billable hours, client revenue, utilization, and project margin. A wellness brand's CSV will have units, returns, SKU mix, and influencer spend. All valid — as long as the columns reflect how that business actually measures itself.
