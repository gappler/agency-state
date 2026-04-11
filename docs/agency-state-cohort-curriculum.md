# Agency State — Cohort Curriculum

## Format

**Live online cohort.** 8–12 participants. Four 2-hour sessions, once a week, over four weeks. Office hours between sessions. Prework required before session one.

**Price:** $1,500–$2,000 per seat (founding cohorts at $500)
**Revenue per cohort:** $12,000–$24,000 at standard pricing

**Scheduling:** Same day, same time, four consecutive weeks. Cohorts can overlap on the calendar with staggered start dates.
- Example: Cohort A on Tuesdays 10am, Cohort B on Thursdays 2pm, starting two weeks apart
- Office hours on a neutral day (e.g., Wednesday) serve both cohorts

---

## Prework (completed before Session 1)

Participants complete this independently. Office hours are available for anyone who gets stuck.

**Setup:**
- Install Claude Code
- Confirm terminal access and basic comfort
- Create a project folder
- Create a CLAUDE.md file with project rules (process logging, commit after each tool)

**Foundation building:**
- Choose a fictional company to use throughout the intensive (Agency State provides a template prompt)
- Build a brand/business definition using Claude Code — company overview, product or service definition, audience profiles, brand voice, objectives
- Generate 6–12 months of synthetic historical data relevant to their business context

**Deliverable at Session 1:** Every participant arrives with a working Claude Code environment, a business definition, and data. Session 1 starts with building, not setup.

**Prework also filters:** Anyone who can't complete the prework isn't ready for the intensive. This is intentional — the target is martech-aware professionals ready to get to work.

---

## Session 1: From Data to Insight (2 hours)

*Week 1*

### Objectives
- Understand why foundation first matters
- Build the first tools from existing data
- Learn the understand → build → reflect cycle

### Flow

**Review prework (20 min)**
- Quick round-robin: each participant shares their company and data set in 1–2 minutes
- Facilitator spots any foundation gaps and addresses them
- Group sees the range of business contexts — reinforces that the methodology is industry-agnostic

**Understand (15 min)**
- What are we about to build and why? What inputs does it need? What should the output look like?
- Framework for writing prompts: what are you building, what data does it read, what should the user see, what format should it take?
- Participants write their own prompt before seeing the reference

**Build (30 min)**
- Participants paste their prompt (or the reference prompt) into Claude Code
- Build a performance dashboard from their data
- Facilitator monitors progress, helps anyone stuck

**Reflect (15 min)**
- What did Claude Code produce? Was it right?
- Compare outputs across participants — different data, same methodology, different results
- What would you change about your prompt?

**Second build (30 min)**
- Build an automated report generator that reads the same data and produces a written narrative
- This demonstrates sequential building — the report interprets the dashboard's data
- Participants modify the prompt to match their business context

**Wrap and preview (10 min)**
- What we built: two tools, one feeding the other
- Homework: modify the dashboard to add a metric, and build a third tool from the same data. Required, not optional. Bring it to Session 2.

---

## Session 2: Planning and Strategy Tools (2 hours)

*Week 2*

### Objectives
- Build tools that help make decisions, not just display data
- Understand how tools feed each other sequentially
- Start writing prompts independently

### Flow

**Homework review (15 min)**
- Who built what? What worked? What broke?
- Surface debugging experiences — these are teaching moments for the group
- Participants who struggled get help from peers, not just the facilitator

**Understand (15 min)**
- What makes a planning tool different from a reporting tool? It takes inputs and models outcomes, not just displays history
- Framework: what decisions does your team make that could be modeled?
- Participants write their own prompt for a planning tool relevant to their business

**Build (35 min)**
- Build a budget allocator, scenario modeler, or capacity planner — participant chooses based on their business context
- Less hand-holding than Session 1 — participants are expected to modify the reference prompt
- Facilitator circulates, helps with specific issues

**Group review (15 min)**
- 2–3 participants share their screen and walk through what they built
- Group feedback: what's working, what's missing, what would you change
- Peer learning starts here — the facilitator isn't the only voice

**Second build (30 min)**
- Build a tool that feeds from the first one — the planning tool's output becomes input for the next tool
- Demonstrates the compounding effect: each tool makes the next one smarter

**Wrap and preview (10 min)**
- Homework: build a tool that doesn't exist in the reference curriculum — something specific to their team's needs. Required. Come to Session 3 ready to show it.

---

## Session 3: Content, Outputs, and Live Data (2 hours)

*Week 3*

### Objectives
- Build tools that produce content and practical deliverables
- Learn to choose the right output format for the problem — dashboard, file, report, brief, or a combination
- See what happens when AI connects to live external data

### Flow

**Show and tell (20 min)**
- Participants share the tool they built for homework
- Group learns from each other's approaches — different problems, same methodology
- Facilitator highlights patterns: what makes a good prompt, what makes a good tool

**Understand (15 min)**
- Output format matters: when does your team need a dashboard? A CSV? A brief? A report? A project plan? Sometimes the answer is a combination.
- Introduction to brand configuration: how to encode voice, terminology, and rules so outputs are consistent
- Framework: what does your team actually open on Monday morning?

**Build (30 min)**
- Build a content engine, email sequence generator, or brief builder
- Focus on choosing the right output format — the tool should produce something the participant's existing systems can ingest
- Participants are writing their own prompts with less reference to templates

**Group review (10 min)**
- Focus on outputs: what did the tool produce? Is it usable? Would your team actually use this?

**API teaser (25 min)**
- Live demo: connect to a public API (FEC contribution data) and pull real data into a tool
- Build something simple in 15 minutes — the group sees the leap from static files to live data
- Brief discussion: connecting to your own systems — CRMs, analytics platforms, project management tools — is what the advanced cohort covers
- Frame as a taste, not a lesson. Show the result, spark the curiosity.

**Wrap and preview (10 min)**
- Session 4 is the final session: bring your own real data and build your own tool
- Homework: identify the single most time-consuming recurring task on your team. Bring a real data set from your work — a spreadsheet, a CSV export, a CRM dump, whatever is relevant. Come ready to build a tool that addresses the problem using your actual data.

---

## Session 4: Real Data, Independent Build, and Graduation (2 hours)

*Week 4*

### Objectives
- Bridge from simulated data to actual business data
- Build a tool independently for a real problem
- Demonstrate the full methodology without hand-holding

### Flow

**Data check-in (15 min)**
- What did everyone bring? Quick round of data descriptions
- Facilitator helps frame each person's data: what's usable, what needs cleaning, what's missing
- Normalize the mess: "This is what real data looks like. The skill is knowing how to describe it to Claude Code."

**Guided data work (20 min)**
- Each participant works with their own real data
- Clean, structure, and prepare the data for tool building
- Facilitator helps with common issues: inconsistent formats, missing fields, messy column names
- Framework: how to describe your data to Claude Code so it can work with it

**Independent build (40 min)**
- Each participant builds a tool that solves their identified problem using their real data
- Facilitator is available for questions but doesn't guide — the participant owns the build
- Breakout rooms available for anyone who hits a wall and needs focused help without slowing the group

**Presentations and feedback (35 min)**
- Each participant demos their tool (3–4 minutes each for a cohort of 10)
- Group feedback: what works, what's missing, what would make it better
- Facilitator adds suggestions: "you could connect this to your CRM" or "this would be stronger with a brand configuration layer"

**Wrap and next steps (10 min)**
- What you built over four weeks: 6–8 working tools plus the methodology to keep building
- How to keep going: project notes, process logs, and tutorials from the sessions as reference
- Community: shared Slack channel stays active, monthly check-in
- What's next: team implementation support and ongoing advisory for organizations that want to go deeper
- Advanced cohort: custom skills, agents, MCP server connections, API integrations — for graduates who want to go further

---

## Homework Policy

Homework is required, not optional. Each session builds on what was done between sessions. Participants who skip homework fall behind and slow the group.

| After | Assignment | Purpose |
|-------|-----------|---------|
| Session 1 | Modify the dashboard and build a third tool from the same data | Reinforces sequential building and independent prompting |
| Session 2 | Build a tool not in the curriculum — something specific to their team | Forces independent problem-solving and prompt writing |
| Session 3 | Identify a real problem, bring real data, prepare to build | Bridges from simulation to real-world application |

---

## Between-Session Support

### Office hours
- 30-minute optional session each week between main sessions
- Open to anyone stuck, confused, or wanting to go deeper
- Drop in, ask questions, get 1:1 help
- Scheduled at a consistent time on a neutral day (e.g., Wednesday noon if sessions are Tuesday evenings)

### Breakout rooms (during sessions)
- If a participant hits a technical wall during a build phase, drop them into a breakout room
- Facilitator or co-facilitator helps them catch up while the main group continues
- In a cohort of 8–12, this should happen rarely — prework eliminates most setup issues

### Shared channel (Slack or similar)
- Created at Session 1, persists after the cohort ends
- Participants share wins, ask questions, post screenshots of tools they're building
- Facilitator checks in periodically but doesn't need to be always-on
- Peer support becomes the primary value over time

---

## Materials Provided

### Before prework
- Setup guide: installing Claude Code, creating a project folder, basic terminal orientation
- CLAUDE.md template with project rules
- Brand/business definition prompt template (participants customize for their company)
- Data generation prompt template

### At each session
- Reference prompts for each build exercise
- Prompt-writing framework: what are you building, what data does it need, what should the output look like, what format
- Session recording (for review between sessions)

### After the cohort
- All reference prompts and frameworks
- Session recordings
- Process logs and tutorials from the facilitator's builds
- Access to the shared Slack channel
- Links to the four Agency State demo suites as reference implementations

---

## On-Demand Adaptation

The same curriculum works as an on-demand course with modifications:

**Each module has three parts:**
1. **Watch** — short video showing the build with narration explaining the thinking behind the prompt
2. **Build** — the student gets the prompt and data files, uses as-is or modifies
3. **Explore** — challenges that push beyond copying: modify the tool, change the inputs, build a variation for their own use case

**What's lost without live interaction:**
- Peer learning from seeing other participants' builds
- Real-time troubleshooting
- Accountability to show up prepared
- The real-data guidance in Session 4 — hardest to replicate on-demand

**What compensates:**
- Monthly live Q&A session for all on-demand buyers (no additional cost, creates community)
- Discussion forum or Slack channel for peer support
- Built-in pause points: "Before watching the next section, write your own prompt. Then compare it to mine."
- "What went wrong" troubleshooting sections for common issues

**Price:** $297–$497 for on-demand access
**Upsell:** On-demand buyers can apply their purchase price toward a live cohort seat

---

## Future: Advanced Cohort

Not built yet. Offered when demand from foundational cohort graduates supports it.

**Topics:**
- Custom Claude Code skills — building reusable skill files
- Sub-agents — dispatching parallel work
- MCP server connections — connecting to CRMs, analytics platforms, project management tools
- API integrations — pulling live data from external sources
- Automated workflows — scheduled runs, triggered actions
- Security and governance — what to review before deploying AI-built tools

**Prerequisite:** Completion of the foundational cohort or demonstrated equivalent experience.

**Price:** $2,000–$2,500 per seat.

---

## Facilitator Notes

### What to watch for
- Participants who copy prompts without reading them — pause and ask "what does this prompt tell Claude Code to do?"
- Participants who get a working tool and want to move on without understanding why it works — the reflect phase matters
- One participant dominating show-and-tell — rotate deliberately
- Technical issues consuming group time — move to breakout immediately, don't debug in front of everyone
- Session 4 (real data) will surface the most frustration — messy data is humbling. Normalize it: "This is what real data looks like. The skill is knowing how to describe the mess to Claude Code."

### What makes a great session
- Participants modifying prompts on their own and getting different (sometimes better) results
- Participants helping each other debug
- The "wait, I could build that for my team" moment — usually happens in Session 2 or 3
- Participants asking questions about problems the curriculum doesn't cover — means they're thinking beyond the exercises
- Session 4 presentations that solve real problems the participant actually has — that's the graduation moment

### What to avoid
- Reading prompts aloud instead of building
- Over-explaining Claude Code internals (skills, agents, sub-agents) — participants learn these organically through use, and the advanced cohort covers them deliberately
- Trying to cover too much in one session — depth beats breadth
- Promising that Claude Code will always produce perfect output — it won't, and the ability to evaluate and iterate is the real skill
- Teaching the API/MCP layer in depth during the teaser — show the result, spark the curiosity, save the how for the advanced cohort
