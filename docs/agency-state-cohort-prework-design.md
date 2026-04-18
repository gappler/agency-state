---
title: Agency State — Cohort Prework Design
date: 2026-04-17
version: 1.0
status: active
---

# Agency State — Cohort Prework Design

Design doc for the prework phase: what it's for, what the participant does, what artifacts they receive and produce, and how the whole thing supports the method and the live cohort.

Written ahead of building the prework materials so decisions stay coherent.

---

## What prework is for

Three jobs. All load-bearing.

**1. Filter.** The prework requires conversational fluency with a frontier model in plain Claude chat. No install, no terminal. If a participant can't produce a coherent brand definition and believable synthetic data by talking to Claude, they aren't ready for Claude Code or the cohort. The filter protects cohort quality — everyone in the room can operate at the bar the curriculum assumes.

**2. Seed the knowledge base.** Every prework artifact becomes *context* the participant uses in Session 1 and onward. The brand definition drops into their project folder as `knowledge_base/brand_definition.md`. The CSV drops into `data/`. Claude Code reads both on every build. The pedagogical arc begins in prework, not in Session 1.

**3. Establish method vocabulary.** Participants hear *context*, *conversation*, *outputs* in the prework guide before they hear them in a live session. The method is introduced on the page; the curriculum just practices it.

---

## The participant journey

From booking to Session 1 arrival.

| Moment | What happens | Artifact delivered |
|---|---|---|
| **Booking day** | Welcome email arrives. Expectations, timeline, prework kickoff link. | Welcome + onboarding email |
| **Days 1–3** | Participant opens the prework guide. Reads the method one-pager. Starts Step 1. | Prework guide |
| **Days 3–10** | Works through the three prompts in Claude chat. Saves outputs locally. | Company selection → brand definition → synthetic data |
| **Day ~10** | 1-week reminder email lands. Offers office hours. Links "What to expect." | Reminder email + What to expect doc |
| **Day before** | 24-hour reminder with session link and pre-session checklist. | Final reminder |
| **Session 1** | Arrives with `brand_definition.md` and a CSV saved locally. Claude Code not yet installed. | — (installation happens live in Session 1) |

Total participant time commitment: **2–4 hours of focused work over 1–2 weeks**, depending on how much iteration they do in Claude chat.

---

## Artifacts inventory

### Provided to participants (what Agency State creates)

1. **Welcome + onboarding email** (booking day)
   - Confirmation of enrollment, dates, logistics
   - Prework guide link
   - What to expect next (reminder cadence)
   - Slack invite

2. **Prework guide** (the core asset)
   - One-page method intro: Context. Conversation. Outputs.
   - Why prework exists (filter + seed)
   - Step 1: Pick your company (starter prompt + decision guide)
   - Step 2: Build your brand definition (prompt template + example)
   - Step 3: Generate your synthetic data (prompt template + example)
   - Step 4: Save and stage (file naming, local location)
   - Deliverable checklist
   - Stuck? Office hours + Slack

3. **Starter prompt: company selection**
   - Copy-paste prompt for Claude chat
   - Helps the participant decide: use my actual company, or a simulated one
   - If simulated, offers 2–3 interesting archetypes

4. **Prompt template: brand definition**
   - Structured prompt with section scaffold (overview, product, audience, positioning, voice, objectives)
   - Specifies markdown output, 800–1500 words
   - Requires concrete specifics (not placeholders), at least 2–3 audience personas, 2–3 voice examples

5. **Prompt template: synthetic data generation**
   - Structured prompt with 12-month window, CSV output, column guidance
   - Requires seasonality and at least one month of meaningful variance (so Session 2's diagnostic work has something to analyze)
   - Includes explanation back from Claude: why these metrics, what the variance represents

6. **Example brand definition (reference)**
   - A complete brand definition document modeled on Yowie or Verdana
   - Not a template to copy — a benchmark to compare against
   - Shows what "good" looks like without prescribing content

7. **Example synthetic data (reference)**
   - A trimmed excerpt of Yowie's `monthly_summary.csv` or similar
   - Shows column shape, row count, realistic number ranges

8. **"What to expect in Session 1" doc**
   - Arrival prep: files ready, ready to install Claude Code
   - Session 1 flow in broad strokes
   - What participants will leave with
   - What could go wrong (install issues → office hours)
   - Tech prerequisites (working terminal, text editor, stable internet)

9. **1-week reminder email**
   - Prework check-in: done? not done? here's your path
   - Office hours availability
   - Link to "What to expect"

10. **24-hour reminder email**
    - Session link (Zoom)
    - Pre-session checklist (files present, Claude Code install walkthrough ready to open, terminal working)
    - Backup contact if tech fails

11. **FAQ / troubleshooting doc**
    - Can I use my actual company?
    - How much detail does my brand definition need?
    - What if my business is services / B2B / agency / nonprofit?
    - How do I know my data is realistic enough?
    - Do I need to install anything before Session 1?

12. **Slack channel**
    - Created ahead of cohort; invite goes in welcome email
    - Welcome message pinned
    - Prework check-in channel (optional)
    - Sets the tone: community of practice, not a classroom

### Produced by participants (what they build)

1. **`brand_definition.md`**
   - Markdown, 800–1500 words
   - Sections: overview, product, audience, positioning, voice, objectives
   - Embedded tables allowed for product lineup, pricing, audience personas
   - Saved locally in a single prework folder

2. **`[companyname]_data.csv`**
   - CSV, 12+ rows (one per month)
   - Columns: `month` (YYYY-MM format) plus 5–10 business metrics relevant to the company
   - Numeric fields for anything they'd want to dashboard or analyze
   - Seasonality and variance baked in

Both files saved to a single local folder the participant will drop into Claude Code's project folder during Session 1 setup.

---

## How the artifacts work together

### Teaching

- **The prework guide introduces the method before the curriculum does.** The method one-pager at the top of the guide ("Context. Conversation. Outputs.") is the first exposure. By Session 1, the vocabulary is already familiar.
- **The prompt templates model prompt-writing.** Participants see structured prompts with clear intent, explicit format specs, and expected outputs. That structure is what Session 1's "Understand" phase formalizes as the prompt-writing framework.
- **Examples anchor quality.** A complete brand definition (Yowie-style) shows what the bar looks like without dictating content. Participants self-calibrate.

### Learning

- **Participants practice thinking in outputs.** The brand definition is an output. The synthetic data is an output. Students produce their first outputs in prework — in plain Claude chat — before they ever touch Claude Code.
- **Participants experience context-building firsthand.** Writing the brand definition IS building context. When Session 1 reveals the payoff (Claude Code reads that context and customizes every build), the participant has the felt experience of having built it themselves.
- **Early wins build confidence.** Structured prompt templates make the first interactions with Claude feel successful. For someone new to AI tools, "I directed Claude and it produced something useful" is a mindset shift that makes Session 1 feel like the next step, not a cliff.
- **Surface clarity about their business.** Many marketing professionals find the brand definition exercise clarifying on its own — even if they never took the cohort. That's a bonus and a subtle form of value-delivery before Day 1.

### Success

- **The knowledge base exists on Day 1.** Session 1 doesn't start from zero; it starts from the brand definition and CSV the participant already produced. Setup time in Session 1 is 30 minutes because the content is already there.
- **Everyone arrives aligned on format.** CSV for data, markdown for brand definition. The cohort can move at a single pace because the raw materials are standardized.
- **The filter did its job.** Participants who show up Session 1 have already proven they can direct Claude to produce structured outputs. The 2-hour session can move at the pace the curriculum assumes.
- **Session 4 demo day lands harder.** When a participant presents their tool on Day 8 and says "it reads from the brand definition I wrote in prework," the method payoff is visceral — they built every layer themselves, from definition to working output.

---

## Format specifications (locked)

| Artifact | Format | Size/Volume | Why |
|---|---|---|---|
| Brand definition | Markdown | 800–1500 words | Students write prose; supports narrative + tables; matches 3 of 4 demos |
| Synthetic data | CSV | 12+ rows, 5–10 columns | Spreadsheet-shaped; easy to visualize; matches Yowie |
| Voice rules (Session 3) | Markdown | Deepened later | Accessible; upgrade to JSON optional |

Students never need to know JSON, schemas, databases, or API formats to complete prework.

---

## Filters and quality bar

**Acceptable prework:**
- Brand definition is concrete — specific product, specific audience, specific voice examples
- Data has realistic numbers, seasonality, and at least one variance moment
- Participant can describe their company in one sentence

**Below bar (we'd want to redirect before Session 1):**
- Placeholder text ("Your Company Here", "example product")
- Only 1–2 months of data
- Audience description that's just demographics with no behavior or preference detail
- Voice described with adjectives only, no examples

**How we check:**
- **Cohort 1 starting point:** honor system. Participants self-attest. No review cycle.
- **If this proves insufficient after Cohort 1:** introduce a lightweight review — participants post a 1-paragraph summary of their company in Slack before Session 1. Facilitator spot-checks.

---

## Open decisions

- [ ] **Prework delivery mechanism.** Options: email attachment, Notion page, Google Doc, repo-hosted markdown. Whatever is chosen, the prework guide needs to render cleanly with copy-pasteable prompts and linked examples.
- [ ] **Review model.** Honor system (default) vs. lightweight check-in vs. full review. Current recommendation: honor system for Cohort 1.
- [ ] **Example brand/data: which demo do we show?** Yowie (marketing-focused, most relatable for beachhead audience) vs. a custom example specifically for prework. Current recommendation: use Yowie excerpts; they're already built.
- [ ] **What if a participant can't pick a company by Day 3?** Do we escalate to a 15-minute call? Default to honor-system drift? Current recommendation: offer one Slack DM check-in, then leave it to them.
- [ ] **Slack usage during prework.** Required, encouraged, or optional? Current recommendation: participants are added to the channel on booking, use is encouraged but not required. The "done ✓" check-in pattern is optional.
- [ ] **FAQ scope.** How comprehensive for Cohort 1 vs. build out over time from actual questions? Current recommendation: ship a minimal FAQ for Cohort 1 (5–7 questions), expand based on what actually gets asked.

---

## What this doc enables

Once this design is settled, the prework build work becomes concrete:

- Draft the welcome email (1 artifact)
- Write the prework guide (1 artifact, longest effort)
- Write three prompt templates (3 artifacts)
- Produce two reference examples (pull from demos)
- Write "What to expect in Session 1" (1 artifact)
- Draft two reminder emails (2 artifacts)
- Write the FAQ (1 artifact)
- Set up Slack workspace + welcome channel (1 setup task)

Total: ~10 deliverables. Each is small (under 1000 words in most cases). The design is the hard part; the drafting follows.

---

*Update this doc if decisions shift. Prework design choices propagate into materials and into Session 1 — changing one changes the others.*
