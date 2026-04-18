---
title: Agency State — Cohort 1 Prep Audit
date: 2026-04-17
version: 1.0
status: active
---

# Agency State — Cohort 1 Prep Audit

Audit of existing materials in this repo and the 4 demo repos (`gappler/demo-*`) against the deliverables in `docs/agency-state-cohort-1-prep-plan.md`. Produced 2026-04-17 as Phase 1 of cohort prep.

---

## Executive summary

**Three takeaways that shape Session 1 prep:**

1. **There's more reusable material than expected.** All 4 demo repos have working CLAUDE.md patterns, working prompts, data files, and brand definitions. The prep work is mostly *extraction and framing* — pulling assets out of demos and presenting them as student-ready reference materials — not building from scratch.

2. **Output-type diversity is real but uneven.** The demos collectively cover 9 output categories, but reports and dashboards dominate the visible surface. Workflow outputs (intake, approval, SOWs, proposals) are missing almost entirely. Session 2 and Session 3 reference prompts should deliberately expand the mix.

3. **Data formats are already answered by the demos.** CSV for performance data, Markdown for brand definitions, optional JSON for structured voice rules. The prework should prescribe these formats so the student experience aligns with what the demos model.

**Critical path: prework materials.** Prework has to go out to booked participants by May 25. Nothing in the repo currently exists in student-ready form. This is the single biggest gap.

---

## Section 1 — Materials audit per session

### Prework

**Reusable:** Nothing student-ready exists. The curriculum describes what prework should produce (brand definition + synthetic data) but no prompts, templates, or examples are written.

**Gappy:** Curriculum specifies deliverables; no templates to implement.

**Missing:**
- Prework guide (the doc participants work from)
- Company-picker starter prompt
- Brand definition prompt template
- Synthetic data prompt template
- Welcome / onboarding email
- Pre-Session 1 reminder emails (1-week, 24-hour)
- "What to expect in Session 1" doc

**Reference assets to draw from (in demo repos):**
- `gappler/demo-marketing-operations/brand/brand_definition.md` — Yowie's brand definition; model for markdown structure, depth, length
- `gappler/demo-strategic-planning/brand/brand_definition.md` — Verdana's; shows how embedded tables (products, team, audience) work alongside narrative
- `gappler/demo-marketing-operations/data/generate_historical_data.py` — the script that generates Yowie's synthetic data; model for what data shape looks good

---

### Session 1 — Build your knowledge base

**Reusable (in demo repos):**
- **CLAUDE.md pattern** — all 4 demos use essentially the same structure (process logging, tutorials, guided tour, git discipline). This is a template ready to reuse, lightly edited.
- **Yowie data files** (`gappler/demo-marketing-operations/data/`): `orders.csv`, `meta_ads.csv`, `email_campaigns.csv`, `web_traffic.csv`, `monthly_summary.csv`, `social_media.csv` — reusable structure for a dashboard/report reference prompt.

**Gappy:**
- Project folder structure example lives *implicitly* in demo repos but isn't extracted as a teachable diagram.

**Missing:**
- Claude Code installation walkthroughs (macOS, Windows)
- Node version + terminal troubleshooting guide
- CLAUDE.md template (extracted and annotated for students)
- Reference prompt: performance dashboard
- Reference prompt: written report generator
- Session 1 facilitator notes (timing, watch-for moments, stuck-point recovery)
- Session 1 participant reference card

---

### Session 2 — Build the outputs your work demands

**Reusable:**
- **Verdana's `demo-strategic-planning`** contains 5 planning/decision tools: OKR goal setter, market sizing calculator, scenario modeler, competitive positioning map, executive strategy summary.
- `demo-strategic-planning/tutorials/03_scenario_modeler.md` has an excellent prompt structure with decision rationale — directly adaptable as a reference prompt.
- The tutorial format itself (rationale → steps → output location) is a reusable teaching pattern.

**Gappy:**
- Reference prompts exist embedded in demo tutorials, but not extracted as standalone student-ready files.

**Missing:**
- Budget allocator, capacity planner, roadmap prioritizer reference prompts (scenario modeler exists as a tutorial; others need creation or extraction)
- Chained tool example (planning output → campaign plan) — not present in any demo
- Prompt-writing framework card
- Between-session build worksheet
- Session 2 facilitator notes

---

### Session 3 — Build content that sounds like you

**Reusable:**
- **`gappler/demo-marketing-ecosystem/brand/brand_config.json`** — structured voice rules with `voice.core_attributes`, `voice.channels`, `voice.audience_adaptations`. This is the canonical pattern for what the Session 3 voice-rules template should produce (or a markdown equivalent of it).
- `demo-marketing-ecosystem/tutorials/03_content_engine.md` — shows how brand rules drive content generation decisions. Directly teachable.
- Email sequence tool exists at `demo-marketing-operations/tools/email_sequence/` (prompt not documented but output is working).

**Gappy:**
- Voice rules, persona, and output-rules templates need to be extracted into student-ready markdown templates (the JSON is a model, not a template).

**Missing:**
- Voice rules template (markdown)
- Audience persona depth template
- Output rules template (formats, lengths, banned phrases)
- 5 content reference prompts (email sequence, social post series, newsletter, landing page, editorial brief)
- Before/after examples showing KB-depth payoff (the "compare moment" from Session 3)

---

### Session 4 — Show what you built

**Reusable:**
- Each demo has tutorials modeling "how this was built" — reference model for demo teardown style
- CLAUDE.md process logs pattern (`docs/process_log.md`) — useful as a student artifact participants can point to during demos

**Missing:**
- Demo prep sheet template
- Facilitator teardown framework (code review + strategic + method-moves)
- Advanced cohort preview talking points
- Post-cohort recap doc template

---

## Section 2 — Output-type diversity

Categorized all ~30 tools across the 4 demos:

| Output Type | Count | Demos |
|---|---|---|
| Dashboard | 4 | Yowie, Sidebar (2), Yowie Expanded |
| Report / Summary | 5 | Yowie, Verdana, Sidebar (2), Yowie |
| Planning / Decision | 6 | Yowie, Verdana (3), Sidebar, Sidebar |
| Content Generation | 4 | Yowie (2), Yowie, Ecosystem |
| Market Intelligence | 2 | Yowie, Verdana |
| Strategy / Positioning | 3 | Yowie, Ecosystem, Verdana |
| Visualization / Mapping | 2 | Ecosystem (2) |
| Analysis (diagnostic) | 2 | Yowie, Sidebar |
| Operational | 2 | Sidebar, Yowie |

### Your observation holds up — but only partly

The demos *do* cover meaningful breadth (content, planning, strategy, intel). But two things are true:

1. **Dashboards and reports collectively = 9 of 30 tools** — they're the single biggest category, and they're the most visually prominent in the site's demo cards.
2. **Entire workflow categories are missing**:
   - Client/project intake forms and approval workflows
   - SOW generation
   - Proposal / pitch deck production
   - Content calendars (the output of a content engine doesn't feed a calendar)
   - Data transformation / importable outputs (CSVs for spreadsheet import, project JSON for PM tools)
   - Meeting prep artifacts (agendas, talking points)
   - Performance diagnostics (dashboards *show* decline; no tool *explains* it)

### Specific recommendations for cohort reference prompts

The cohort should explicitly teach outputs the demos underserve. Candidate reference prompts to add:

1. **Session 2 — Client intake + approval workflow.** Build an intake form that produces a filled-form + brief. Adds a workflow output to the planning session.
2. **Session 2 — Performance diagnostic.** Not "what happened" (report) but "why" (analysis). Uses the dashboard data and brand context to diagnose.
3. **Session 2 — Importable data output.** The dashboard shows. The CSV exports. Teaches the idea that outputs feed downstream systems.
4. **Session 3 — Content calendar.** Takes content outputs (email, social, newsletter) and organizes them into a schedule.
5. **Session 3 — Project brief / SOW.** Produces a document a team member could hand to a client.
6. **Session 4 demo examples** — lean toward workflow/intake outputs so participants see examples beyond dashboards.

The underlying shift: **marketing teams produce artifacts that feed systems and workflows, not just visualizations**. The curriculum should reflect that.

---

## Section 3 — Data formats and prework alignment

### What the demos use

| Demo | Performance Data | Brand Definition | Rules / Config |
|---|---|---|---|
| Yowie | CSV (7 files in `/data/`) | Markdown narrative | — |
| Verdana | None in `/data/` — embedded in brand doc | Markdown with tables | — |
| Sidebar | Markdown (SOWs, health framework) | Markdown | — |
| Yowie Expanded | — | Markdown | JSON (`brand_config.json`) |

### Concrete format examples

**Yowie performance CSV** (`monthly_summary.csv`):
```
month,web_sessions,emails_sent,email_revenue,meta_spend,meta_revenue,meta_roas,...
2025-04,6617,5374,0,1991,10780,5.41,...
2025-05,8121,5529,770,2320,12320,5.31,...
```

**Verdana brand markdown** (embedded table):
```
| Product | Key Adaptogens | Price | COGS | Gross Margin | Monthly Units |
|---|---|---|---|---|---|
| Verdana Focus | Lion's Mane, Rhodiola, Bacopa | $65 | $14.30 | 78% | 3,200 |
```

**Yowie Expanded voice rules JSON** (excerpt):
```json
{
  "voice": {
    "core_attributes": {
      "plainspoken": {
        "description": "Short sentences, common words, no jargon…",
        "rules": ["Use short sentences.", "Use common, everyday words."]
      }
    },
    "channels": {
      "product_page": { "register": "Technical, direct", "rules": [...] }
    }
  }
}
```

### Recommendations — format standards for Cohort 1

**Performance / synthetic business data → CSV**
- Simpler to generate and parse than JSON
- Students already mentally model it as spreadsheet-shaped
- Matches Yowie (the broadest demo)
- Spec: column headers in row 1, one record per row, numeric fields for calculations
- Target: at least 12 records (one per month for 12 months); up to 100 records

**Brand / business definition → Markdown**
- Students write prose, not JSON
- Supports narrative + tables
- Matches 3 of 4 demos
- Spec: sections for overview, product, audience, positioning, voice; may embed tables for structured data (product lineup, pricing, personas)
- Target: 800–1500 words

**Voice rules / structured configuration → Markdown (with JSON optional, Session 3+)**
- Start in markdown for accessibility
- Advanced students can upgrade to JSON for structured lookup
- Not required for Cohort 1 — nice-to-have

**Never required of students:**
- Databases
- Complex schemas
- API-formatted inputs

### Prework prompt templates should specify

- File naming: `brand_definition.md`, `yourcompany_data.csv`
- Where to save: locally in a single folder the participant will later drop into Claude Code's project folder
- Volume: "6–12 months of data, 12+ rows minimum, save as CSV with headers"
- Format choice: "If you're not sure, CSV is the right answer for numeric data and Markdown is the right answer for descriptive content"

This answers your question directly: **yes, prework should specify formats**, and the formats should be CSV + Markdown (with JSON reserved for advanced use later). Students who follow the spec will arrive with data shaped exactly like what the demos model.

---

## Priority punch list (in order)

1. **Prework materials** — highest priority, hard deadline May 25
   - Prework guide
   - Brand definition + synthetic data prompt templates (using Yowie and Verdana as reference patterns)
   - Format spec embedded in the guide
   - Welcome email + reminders

2. **Session 1 materials** — extraction-heavy, mostly pulls from demos
   - CLAUDE.md template (extract from any demo, annotate)
   - Folder structure example (diagram from demo layouts)
   - Dashboard + report reference prompts (adapt from Yowie)
   - Install walkthroughs + troubleshooting
   - Facilitator notes

3. **Session 2 materials** — extract planning tools from Verdana; write chained-tool example new
   - Budget allocator, scenario modeler, capacity planner, roadmap prioritizer reference prompts
   - Chained tool example (new — doesn't exist in demos)
   - Prompt-writing framework card
   - Between-session build worksheet

4. **Session 3 materials** — templates need to be written; content prompts need to be extracted/created
   - Voice rules / persona / output rules templates (markdown)
   - 5 content reference prompts
   - Before/after examples showing KB-depth payoff

5. **Session 4 materials** — lightest lift
   - Demo prep sheet
   - Teardown framework
   - Advanced cohort preview talking points
   - Post-cohort recap template

6. **Expand output-type coverage** — add reference prompts for intake/approval, diagnostic, calendar, SOW, importable data outputs (per Section 2)

---

## What I couldn't audit

- **Specific tool prompts inside the demo repos** — visible as working tools but not extracted as prompt text. Extracting them during Session 1 dry run is the efficient path.
- **Live demo site UX** — didn't load the hosted sites (gappler.github.io/demo-*); if visual polish matters for how participants experience them during prep, worth a pass.
