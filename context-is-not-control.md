---
title: Context is not control
dek: Brand documents shaped how Claude's copy sounded. They didn't stop it from inventing a cooler.
version: 1.0.0
last_updated: 2026-10-25
status: final; source text for context-is-not-control.html
page: context-is-not-control.html
audience: Brand marketing leaders using AI who need practical explanations without engineering prerequisites.
evidence:
  - ../agency-state-practice/projects/brand-reliability/experiments/verification-2026-09-08/run-2026-09-08-verification.jsonl (seq 149, Slab 45QT fabrication; seq 172, Burrow 20F reply with invented warranty terms)
  - ../agency-state-practice/projects/brand-reliability/experiments/verification-2026-09-08/findings-verification-2026-09.md (version 1.2)
  - ../../60-tools-infrastructure/agency-state-brandos-builder/examples/yowie/.brand/source/products.yaml (Slab 35QT 22 lb, $285, 5+ day ice at 90F; Burrow 0F; no warranty terms in .brand)
---

# Context is not control

*Brand documents shaped how Claude's copy sounded. They didn't stop it from inventing a cooler.*

Giving AI your written brand documents can help it write better marketing copy. Those documents become its context: the vocabulary, examples of the voice, product information, and the rules you want it to follow.

But a draft it writes can sound right while getting important things wrong. It can name a product you don't sell or promise a policy you don't offer. I've found these errors are different from the ones people make. They fit. They borrow real details, or they sound like what any brand like yours would say. The clues that they're wrong are there, but only someone who knows the facts will see them.

In a test with Yowie, a fictional outdoor-gear brand, I gave Claude Opus 5 the brand information and product catalog, then sent it marketing requests that included misleading product details.

I ran two kinds of automated checks on every draft. Rule checks looked for banned words, exclamation points, and missing conditions on ice-retention claims. A source check found the model names in each draft, such as Slab 35QT, and looked them up in the catalog.

Thirty-six of the requests asked for a product that wasn't in the catalog. In 33 of them, Claude corrected the request, chose a real product, or avoided naming one. That was the right response.

But in three drafts, Claude went along with the request. One was a full product page for the Slab 45QT, a cooler that wasn't in Yowie's catalog. Claude invented a weight, dimensions, and a price.

    Draft: A product page for the Slab 45QT cooler.
    Rule checks: Passed.
    Source check: Flagged. Slab 45QT is not in the catalog.

The catalog had a Slab 35QT, and Claude built the fake cooler out of it. The real 35QT weighs 22 lb and costs $285. The invented 45QT weighs 28 lb and costs $335. The page also reused the 35QT's ice-retention claim, 5+ days at 90°F, and because that claim named its test conditions, the page passed the rule checks. The fake was convincing because it was built partly from Yowie's real product information. It did leave a clue. The page called the 45QT "the larger of the two Slab sizes," though Yowie makes a single size. You'd catch that only if you knew the catalog.

All three fake drafts passed the rule checks, and the source check flagged all three. The rule checks asked whether the copy followed the brand's rules, and it did. The source check asked whether the product existed, and it didn't. This was one test on one brand with a short catalog, and a missing product is one of the easier errors for a check to spot.

The brand information gave Claude context, and that context did most of the work. Claude got 33 of the 36 right, and the three it got wrong looked just as finished as the rest. The brand information shaped how the page sounded, but it didn't control everything the page claimed. To know what's been checked, you have to know what each check asked.

## What a check can tell you

Some brand requirements are straightforward to check, such as whether a banned word appears or a color matches an approved value. If an approved claim requires an exact disclosure, a check can confirm it's there.

Other errors have nothing to be checked against. One request asked for a reply about warranty options to a customer with a snagging zipper on a Burrow 20F sleeping bag. Claude correctly said Yowie doesn't make a Burrow 20F, and the source check flagged that name. But the reply also promised a free repair or replacement, shipping both ways, and a two-to-three-week turnaround. Yowie's brand information has no warranty terms, so none of the checks in this test could catch those promises.

Finding a product in the catalog doesn't mean the draft describes its performance accurately. That requires comparing the draft's claims with the relevant product specifications. And for a claim about how long a cooler keeps ice, that means checking both the stated duration and the conditions used to test the product.

Some decisions need a person's judgment even when the facts are correct. A campaign can follow the vocabulary rules and still feel wrong. An approved claim can be a poor choice for a particular audience. A legal exception needs someone authorized to approve it.

## Where the corrections go

When someone on the team reviews a draft and corrects it, the corrections can reveal problems in the brand information the AI is working from.

If an old product fact keeps appearing, check whether the brand information still contains it. If the team keeps making the same edit, decide where the fix belongs. A phrase that should never appear belongs in the rules. A preference for how the copy should sound belongs in the voice guidance, supported by examples. Exact wording the team wants reused belongs in approved material. A mistake that should be caught on every draft belongs in a check.

If the team keeps approving an exception to a rule, someone needs to decide when that exception is allowed and record the decision.

The brand information gives AI context. Control comes from the checks around it and the people who make the calls the checks can't. That's the work a Brand OS does: turning the brand information into a source a check can read, keeping it current, giving it to the AI with every request, running the checks, and routing the remaining decisions to the right person.
