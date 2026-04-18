---
title: Agency State — Cohort 1 Prep Plan
date: 2026-04-17
version: 1.0
status: active
---

# Agency State — Cohort 1 Prep Plan

Working plan for solo-facilitating Cohort 1 starting **June 8, 2026**. Covers sequencing, deliverables, facilitator fluency, and open decisions. Update the doc as decisions land and deliverables complete.

The method under delivery: **Context. Conversation. Outputs.** (See `brand/agency-state-brand-book.md` §4 and `docs/agency-state-cohort-curriculum.md`.)

---

## Goal

Be ready to deliver Cohort 1 end-to-end without meandering. Every participant gets through setup, produces working outputs, completes the between-session build, and leaves with a portfolio asset and the method internalized.

---

## Timeline

Today: **2026-04-17** (Friday). Cohort 1 Session 1: **2026-06-08** (Monday). Seven weeks.

| Week | Dates | Focus |
|---|---|---|
| 1 | Apr 17 – 23 | Phase 1 (Audit) + Phase 2 kickoff (Session 1 dry run) |
| 2 | Apr 24 – 30 | Phase 2 complete (Session 1 materials) + Phase 3 kickoff |
| 3 | May 1 – 7 | Phase 3 complete (Session 2 materials) + Phase 4 kickoff |
| 4 | May 8 – 14 | Phase 4 complete (Session 3 materials) + Phase 5 kickoff |
| 5 | May 15 – 21 | Phase 5 complete (Session 4 materials) + Phase 6 (prework materials) |
| 6 | May 22 – 28 | Prework goes out May 25 · Phase 8 full end-to-end dry run |
| 7 | May 29 – Jun 7 | Polish, marketing push, buffer |
| — | **Jun 8** | **Cohort 1 Session 1** |

Phases 6 (prework) and 7 (facilitator fluency) run in parallel throughout.

---

## Phase 1 — Audit existing materials

Before building anything new, catalog what's already in the repo. The 4 demo suites (Sidebar Creative, Yowie, Yowie Expanded, Verdana) and existing docs likely contain reusable CLAUDE.md examples, working prompts, and folder structures.

- [ ] Scan `docs/` for existing setup notes, prompts, templates
- [ ] Scan each demo suite for CLAUDE.md patterns, file/folder structures, working prompts
- [ ] Produce a short punch list: reusable / gappy / missing per session
- [ ] Decide what gets pulled into curriculum materials vs. what stays as internal reference

**Output:** `docs/agency-state-cohort-1-prep-audit.md` — short doc mapping existing assets to session needs.

---

## Phase 2 — Session 1 dry run + materials

Dry run on a fresh Claude Code install. Pretend you're a student. Take notes on every friction point. The notes drive the materials.

### Dry run checklist
- [ ] Fresh Claude Code install from zero (secondary machine or fresh user profile)
- [ ] Create project folder, CLAUDE.md from scratch
- [ ] Drop in prework data (brand definition + synthetic data)
- [ ] Build the performance dashboard from a reference prompt
- [ ] Build the written report generator
- [ ] Time each phase — setup, understand, build, reflect, second build, wrap
- [ ] Note friction: terminal permissions, Node version, path issues, first-run behavior

### Session 1 deliverables
- [ ] Claude Code installation walkthrough — macOS (terminal commands, common errors)
- [ ] Claude Code installation walkthrough — Windows
- [ ] Node version + terminal setup troubleshooting guide
- [ ] CLAUDE.md template (project rules: process logging, commit conventions, file naming)
- [ ] Project folder structure example
- [ ] Reference prompt: performance dashboard
- [ ] Reference prompt: written report generator
- [ ] Session 1 facilitator notes (script outline, timing, watch-for moments, common stuck-points)
- [ ] Session 1 participant reference card (one-page: commands, steps, next actions)

---

## Phase 3 — Session 2 dry run + materials

### Dry run
- [ ] Build a planning tool from reference prompt (pick one: budget allocator, scenario modeler, capacity planner, roadmap prioritizer)
- [ ] Build the chained second tool (planning output → campaign plan generator)
- [ ] Note timing and friction

### Session 2 deliverables
- [ ] Reference prompt: budget allocator
- [ ] Reference prompt: scenario modeler
- [ ] Reference prompt: capacity planner
- [ ] Reference prompt: roadmap prioritizer
- [ ] Reference prompt: chained tool example (planning → campaign)
- [ ] Prompt-writing framework card (what are you building, what data does it read, what should the user see, what format)
- [ ] Between-session build worksheet (scope a recurring task → define the output → list knowledge base additions)
- [ ] Session 2 facilitator notes

---

## Phase 4 — Session 3 dry run + materials

### Dry run
- [ ] Build out voice rules for a test business
- [ ] Add audience persona depth
- [ ] Add output rules (formats, lengths, banned phrases)
- [ ] Build an on-brand piece of content using the deepened knowledge base
- [ ] Compare before/after — note how much sharper the output is

### Session 3 deliverables
- [ ] Voice rules template (how to phrase, how NOT to phrase, terminology, banned phrases, tone examples)
- [ ] Audience persona depth template (what they care about, ignore, find condescending)
- [ ] Output rules template (formats, lengths, required disclaimers)
- [ ] Reference prompt: email sequence
- [ ] Reference prompt: social post series
- [ ] Reference prompt: newsletter
- [ ] Reference prompt: landing page copy
- [ ] Reference prompt: editorial brief
- [ ] Session 3 facilitator notes

---

## Phase 5 — Session 4 dry run + materials

### Dry run
- [ ] Walk through a mock demo as if presenting
- [ ] Practice the teardown — what does "naming the method moves" actually sound like live?
- [ ] Time the 6-min demo cadence (3 min demo + 3 min feedback) × 10 participants = 60 min; confirm the math works in practice

### Session 4 deliverables
- [ ] Demo prep sheet (one-page: what to cover in your 3-min demo, what role the knowledge base played, what surprised you)
- [ ] Facilitator teardown framework (code review + strategic + method-moves)
- [ ] Advanced cohort preview talking points (skills, agents, MCP, API — at awareness level)
- [ ] Post-cohort recap doc template (what each participant built, teardown notes, next-step recommendations)
- [ ] Session 4 facilitator notes

---

## Phase 6 — Prework materials (parallel)

Prework goes to participants once they book and needs to land ~2 weeks before Session 1 (target send date: **May 25**).

### Prework deliverables
- [ ] Prework guide (no terminal, no install — done in Claude chat)
- [ ] Starter prompt: picking a fictional or real company
- [ ] Prompt template: brand/business definition
- [ ] Prompt template: synthetic data generation
- [ ] Welcome / onboarding email (sent on booking)
- [ ] Pre-Session 1 reminder emails (1 week out, 24 hours out)
- [ ] "What to expect in Session 1" doc

---

## Phase 7 — Facilitator personal fluency (parallel, ongoing)

Topics you need to be fluent in to facilitate confidently and handle off-script questions. Some show up in Session 4's advanced-cohort preview at awareness level; others are safety-net depth for you.

- [ ] **Claude Code core:** slash commands (/help, /clear, /fast, /init, /loop), permission modes, context behavior, compaction
- [ ] **CLAUDE.md hierarchy:** global (`~/.claude/CLAUDE.md`), project-level, subdirectory — how they merge, when each matters
- [ ] **Settings:** `settings.json`, `settings.local.json`, permissions (allow/deny/ask), env vars
- [ ] **Hooks:** SessionStart, UserPromptSubmit, PostToolUse — when to use them, simple examples
- [ ] **Skills:** what they are, how to install, where to find (Anthropic docs, community repos)
- [ ] **Agents / sub-agents:** Task tool, subagent_type, when to dispatch parallel work vs. single agent
- [ ] **MCP servers:** what they connect to, install flow, popular servers (filesystem, GitHub, Slack, Linear)
- [ ] **Troubleshooting:** common install errors by OS, Node version issues, path problems, permission prompts
- [ ] **Recovery patterns:** bad Claude output — edit, re-prompt, compact, restart context

---

## Phase 8 — Full end-to-end dry run

Once all session materials exist, run a complete simulation.

- [ ] Schedule Session 1 + Session 2 back-to-back (matches real cadence)
- [ ] Run a 5-day simulated between-session build on a test business
- [ ] Session 3 + Session 4 as a second block
- [ ] Note gaps, timing misses, missing materials, unclear prompts
- [ ] Revise materials based on dry-run findings

---

## Consolidated materials checklist

Quick-reference punch list compiled from phases 2–6.

### Pre-cohort
- [ ] Welcome / onboarding email sequence
- [ ] Prework guide
- [ ] Brand definition + synthetic data prompt templates
- [ ] Pre-Session 1 reminder emails

### Session 1
- [ ] Install walkthroughs (macOS, Windows)
- [ ] Terminal + Node troubleshooting guide
- [ ] CLAUDE.md template
- [ ] Project folder structure example
- [ ] Reference prompts (dashboard, report)
- [ ] Facilitator notes
- [ ] Participant reference card

### Session 2
- [ ] Reference prompts (budget, scenario, capacity, roadmap, chained tool)
- [ ] Prompt-writing framework card
- [ ] Between-session build worksheet
- [ ] Facilitator notes

### Session 3
- [ ] Voice rules / persona depth / output rules templates
- [ ] Reference prompts (email, social, newsletter, landing page, brief)
- [ ] Facilitator notes

### Session 4
- [ ] Demo prep sheet
- [ ] Teardown framework
- [ ] Advanced cohort preview talking points
- [ ] Post-cohort recap template
- [ ] Facilitator notes

### Cross-cutting infrastructure
- [ ] Slack channel created, invite flow tested
- [ ] Office hours calendar / booking configured
- [ ] Zoom session recording workflow (settings, upload destination, post-session routine)
- [ ] Troubleshooting FAQ doc

---

## Knowledge resources

### Official
- **Claude Code docs:** https://docs.claude.com/claude-code — installation, CLI reference, settings, hooks, MCP, skills
- **Anthropic API docs:** https://docs.anthropic.com — Claude models, API reference, prompt engineering
- **Claude Code GitHub:** https://github.com/anthropics/claude-code — issues, releases, community

### Claude Agent SDK (advanced territory)
- For building custom agents beyond slash commands and Task tool — useful for Session 4 advanced-cohort preview and for your personal pool.

### Internal to this repo
- `brand/agency-state-brand-book.md` — method, voice, vocabulary (tiebreaker for copy)
- `brand/agency-state-brand-guidelines.md` — visual identity
- `docs/agency-state-cohort-curriculum.md` — session structure, objectives, flows
- `docs/agency-state-pricing-strategy.md` — pricing model
- Demo suites — reference implementations (4 businesses)

### Community (TBD — identify during Phase 1 audit)
- Skills repositories worth trusting
- Community-maintained MCP servers
- Notable Claude Code practitioners / blogs

---

## Open decisions

- [ ] **IDE for Session 1:** current stance is *skip it* (terminal-only, reduces install failure surface). Revisit for advanced cohort. Confirm.
- [ ] **Slack plan:** free, paid, or reuse existing workspace?
- [ ] **Video platform:** Zoom vs. Google Meet vs. other? (recording + breakout rooms matter)
- [ ] **Session recording host:** YouTube unlisted, Vimeo, Loom, Google Drive?
- [ ] **Graduate cadence:** monthly check-in format — live Zoom or async Slack thread?
- [ ] **Advanced-cohort preview format for Session 4:** slide deck, one-pager, or talking points only?
- [ ] **Prework delivery mechanism:** email attachment, Google Doc, Notion page, or repo-hosted markdown?

---

## Facilitator fluency self-check (before Session 1)

Confirm you can:

- [ ] Install Claude Code on a fresh machine in under 15 minutes
- [ ] Create a CLAUDE.md and explain each rule in plain language
- [ ] Write and iterate a prompt for a dashboard, a planning tool, and an email sequence from scratch
- [ ] Recover from a bad Claude output (edit, re-prompt, compact, restart)
- [ ] Explain skills, agents, MCP each in 30 seconds at awareness level
- [ ] Troubleshoot the three most common install issues by OS (Node version, terminal path, permissions)
- [ ] Run the full Session 1 flow (setup + understand + build + reflect + second build + wrap) within 2 hours

---

*Update this plan as decisions land and deliverables complete. Treat it as a working document, not a static one.*
