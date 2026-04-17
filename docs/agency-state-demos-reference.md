---
title: Agency State — Demos Reference
version: 1
status: Reference
date: 2026-04-17
---

# Demos Reference

Operational reference for the four demo suites — URLs, repos, and what each contains. Use when writing about specific demos or briefing prospects on what they'll see.

For positioning language about the demos, see `brand/agency-state-brand-book.md` Section 6.

---

## Demo 1 — Marketing Operations (Yowie)

Fictional DTC outdoor gear brand.

- **Live:** gappler.github.io/demo-marketing-operations/
- **Repo:** gappler/demo-marketing-operations
- **Tools (12):** brand definition, historical data, marketing dashboard, monthly report generator, budget allocator, email sequence, landing page, competitive intelligence, ad copy generator, campaign simulator, content repurposer, customer segment analyzer

## Demo 2 — Strategic Planning (Verdana)

Fictional DTC wellness brand at a growth crossroads.

- **Live:** gappler.github.io/demo-strategic-planning/
- **Repo:** gappler/demo-strategic-planning
- **Tools (5):** OKR goal setter, market sizing calculator, scenario modeler, competitive positioning map, executive strategy summary

## Demo 3 — Agency Operations (Sidebar Creative)

Fictional 40-person digital agency.

- **Live:** gappler.github.io/demo-agency-operations/
- **Repo:** gappler/demo-agency-operations
- **Tools (7):** split across PM (timeline dashboard, resource allocator, capacity planner, status report generator) and client reporting (multi-client performance dashboard, client health scorer, automated client report generator)

## Demo 4 — Marketing Ecosystem (Yowie Expanded)

Seven-component marketing ecosystem architecture.

- **Live:** gappler.github.io/demo-marketing-ecosystem/
- **Repo:** gappler/demo-marketing-ecosystem
- **Tools (4 built):** architecture map, brand configuration viewer, research & brief builder, content engine. Demonstrates an interconnected pipeline with human decision gates. Specs exist for all seven components.

**Each demo includes:** a guided tour page (`index.html`) with prompts, embedded tool previews, "how this was built" methodology section, and Agency State CTA. Process logs and tutorials are generated automatically via `CLAUDE.md` project rules.

---

## Build insights (from producing the demos)

Captured observations that inform the method and curriculum.

- **The build is fast, the understanding is slow.** A motivated person can build a brand definition, generate 12 months of data, and create a working dashboard in under an hour. Speed is the hook. Knowing what to build, verifying what Claude decided, and adapting the approach is the real value.
- **"Build" not "design."** When Claude Code asks about mockups or specs, it shifts into design mode. If you want working outputs, say "build." Specs are useful for complex UI decisions but they're not the deliverable.
- **Git discipline is non-negotiable.** Set up git before building anything. Commit after every output. Learned the hard way.
- **Prework filters and accelerates.** Students who arrive with Claude Code installed and a demo company created can start building immediately. The prework also filters — anyone who can't get through it isn't ready for the intensive.
- **Demos are marketing. The cohort is the product.** The demos make someone want it. The cohort teaches them to do it. The gap between "impressive demo" and "I can do this myself" is exactly where Agency State lives.
- **Practical outputs over pretty dashboards.** Real client work produces intake forms, CSVs, importable project plans, content matrices, and structured briefs — not just interactive visualizations. The dashboards demo well. The practical outputs get used.
