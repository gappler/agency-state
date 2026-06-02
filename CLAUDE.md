# Project Rules — agency-state

This is the **public** repo for the Agency State marketing site (agencystate.ai). It is served by GitHub Pages and anything committed here is publicly visible.

Internal content lives in private companion repos:
- Brand platform, brand guidelines, and visual identity: [`agency-state-brand`](https://github.com/gappler/agency-state-brand) (paths below)
- Strategic working notes (offers, pricing, positioning): [`agency-state-practice`](https://github.com/gappler/agency-state-practice)
- Outbound comms drafts: [`agency-state-publishing`](https://github.com/gappler/agency-state-publishing)
- Practice-level working docs and engagement playbooks: [`agency-state-practice`](https://github.com/gappler/agency-state-practice)
- The agent system: [`agency-state-agents`](https://github.com/gappler/agency-state-agents)

If you need to read or edit brand rules, strategic decisions, or internal research, work in the appropriate location — not this public repo.

## Repo Layout

- `index.html` — single-page marketing site
- `assets/` — only the files the site actually serves: `wordmark-black-on-white.svg` (logo), `agency-state-mark-black.svg` (favicon), `og-image.png` (OG/Twitter card). Keep this folder limited to served files. Canonical brand marks live in `agency-state-brand/assets/`; OG-image source templates and demo-card renders live in `agency-state-practice/website/`.
- `CNAME` — GitHub Pages custom domain

## Brand — read before writing copy

The canonical brand platform and guidelines live in the `agency-state-brand` repo. The repos are siblings, so these paths resolve from this repo's root:

- Brand platform: `../agency-state-brand/brand-platform.md`
- Brand guidelines: `../agency-state-brand/brand-guidelines.md`

**Read these directly before writing or editing any site copy or styles** — homepage, engagement pages, OG metadata, anything publicly visible. The brand platform is the voice and copy tiebreaker; the brand guidelines settle visual identity questions.

Do not restate brand rules in this repo.

## Git Discipline

- **This repo is public.** Never commit internal content here. Brand lives in `agency-state-brand`; practice docs in `agency-state-practice`; outbound drafts in `agency-state-publishing`; agents in `agency-state-agents`.
- Commit in focused, descriptive units. Don't let unrelated changes pile up in one commit.
- Write commit messages that explain the *why*, not just the *what*.
- Don't commit `.DS_Store` or other macOS cruft (already in `.gitignore`).

## Website Changes

- `index.html` is hand-authored — no build step. Edit directly.
- Before claiming a visual change is done, open the page in a browser and verify it renders as intended. Type-checking doesn't exist here; your eyes are the test suite.
- Keep the footer domain, nav CTA, and hero CTA in sync if any of them change.

## Deploy Workflow

The site deploys via GitHub Pages directly from `main`. The workflow is:

> **Local preview → commit → push to main → verify on the live URL.**

No staging branch. No staging environment. No preview deploy URL. No deploy gate. Local preview (`python3 -m http.server` from the repo root, or any static server) covers the iteration phase. Production-first deploys are appropriate here because the site is small, traffic is low, and `git log` covers rollback (`git revert <sha>` and push for fast rollback; the previous version is back live within a few minutes of the next Pages build).

**Do not introduce a staging branch, a staging environment, or a long-lived preview branch.** If a future change ever needs review-before-live, use a short-lived feature branch that merges straight back to `main` and deploys; do not maintain it as a separate environment.

**GitHub Pages publish latency.** Pushes take 30 seconds to a few minutes to go live. Verify on the live URL (`https://agencystate.ai/...`) — not just on local preview — before considering a deploy complete. Pages build failures are silent; if the live URL doesn't update, check the Pages settings tab in GitHub for the build status.

**OG-card cache.** Social platforms (LinkedIn, Twitter, Facebook) cache OG metadata aggressively per URL. If an OG image or metadata change ships and a stale cache is in place, force-refresh via LinkedIn Post Inspector / Twitter Card Validator.

**Plausible analytics.** Production-first means verification pageviews after a deploy go into Plausible. Local preview at `127.0.0.1` doesn't fire Plausible because the script is configured for the `agencystate.ai` domain — so the exposure is small (just whatever pageviews you generate when verifying live).