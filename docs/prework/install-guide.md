---
title: Prework — Claude Pro + Claude Code Install Guide
date: 2026-04-17
version: 0.2
status: draft
---

# Installing Claude Pro and Claude Code

Before Session 1 you'll install Claude Code on your machine and subscribe to Claude Pro. This is prework — not session work. Coming to Session 1 with Claude Code already running lets us spend the session building instead of troubleshooting.

**Time needed:** 15–30 minutes typically. Up to an hour if you need to install Node.js or hit permission issues.
**Cost:** Claude Pro is $20/month. Cancel anytime after the cohort.
**Deadline:** complete this at least one week before Session 1.

---

## Before you install — data and security

Claude Code reads files in your project folder and sends them to Anthropic's servers for processing. By installing and using Claude Code, you agree to Anthropic's terms. Read the policies at [anthropic.com/legal](https://www.anthropic.com/legal).

**Your responsibilities:**

- **Check your company's AI tool policy.** If your organization has rules about AI tools, data handling, or approved vendors, those rules apply to you. Ask your security or compliance team before installing on a work machine or using any work data.
- **Don't put sensitive data in your project folder.** Customer PII, production credentials, regulated data (HIPAA, PCI, etc.), or trade secrets should never be included. Even if you're modeling your real company, sanitize anything truly sensitive.
- **Your `CLAUDE.md` and knowledge base become context Claude reads.** Don't put API keys, passwords, or restricted information in them.

**Agency State's scope:** We teach the method. We don't manage your install, your data, or your company's IT environment. For installation and machine-level issues, contact your IT team. For questions about Claude Code itself (authentication, CLI errors, using the tool), DM Greg in Slack.

---

## A note about work machines

If you're installing on a company-issued computer, your IT department may need to authorize Node.js or npm installs. Raise this with IT **today** — not the day before Session 1. Some IT turnarounds are slow, and the cohort assumes you can install dev tools on your primary machine.

**IT owns the install path for work machines.** If you hit install issues on a work laptop, your first stop is your IT team — they're the ones with authority to unblock software, grant permissions, or suggest a workaround. Agency State can answer Claude-Code-specific questions, but we can't solve IT-level blockers for your organization.

If your work machine is locked down and IT won't budge, use a personal machine for the cohort.

---

## What you're setting up

Three things that work together:

1. **Claude Pro subscription** — a paid plan at claude.ai that enables Claude Code access. Signing up also upgrades your regular Claude chat (claude.ai) to Pro features.
2. **Node.js** — a runtime environment. Claude Code is distributed as an npm package, which needs Node.js to install.
3. **Claude Code** — the command-line tool you'll use during the cohort.

---

## Step 1 — Subscribe to Claude Pro

1. Go to [claude.ai](https://claude.ai) and sign in.
2. Click your account menu (usually top-right), then **Settings** or **Billing**.
3. Select **Upgrade to Pro** — $20/month.
4. Complete the payment flow.
5. Confirm your account shows **Pro** status.

**Why Pro and not the free tier:** the free Claude.ai tier can't authenticate Claude Code. API keys via the Anthropic Console are an alternative path (pay-per-token), but Pro is simpler for most participants.

---

## Step 2 — Install Node.js (if you don't have it)

First, check whether it's already installed.

**On Mac:**
1. Open **Terminal**. Spotlight search: press `Cmd + Space`, type "Terminal", hit Enter.
2. Type: `node --version` and press Enter.
3. If you see a version number like `v20.11.0` (anything v18 or higher), you're set — skip to Step 3.
4. If you see `command not found`, install Node.js (below).

**On Windows:**
1. Open **Windows Terminal** or **PowerShell**. Press the Windows key, type "terminal" or "powershell", hit Enter.
2. Type: `node --version` and press Enter.
3. Same rule: version number = you're set. `command not found` or a similar error = install Node.js (below).

### Installing Node.js

1. Go to [nodejs.org](https://nodejs.org).
2. Download the **LTS** version (the recommended one, not "Current").
3. Run the installer with default settings.
4. **Close and reopen your terminal** after install completes.
5. Verify: `node --version` should now return a version.

---

## Step 3 — Install Claude Code

In your terminal, run:

```
npm install -g @anthropic-ai/claude-code
```

Press Enter and wait. This downloads and installs the Claude Code CLI globally on your machine.

**You may see permission errors on Mac.** If you get a message about `EACCES` or "permission denied," try:

```
sudo npm install -g @anthropic-ai/claude-code
```

Enter your computer password when prompted. (It won't show anything as you type — just type it and press Enter.)

**Verify the install:** type `claude --version`. You should see a version number. If you do — Claude Code is installed.

---

## Step 4 — Authenticate Claude Code with Claude Pro

In your terminal, type:

```
claude
```

Press Enter. On first run, Claude Code will open a browser window asking you to log in. Log in with the **same email address** you used for your Claude Pro subscription.

After authorizing, you can close the browser. Your terminal should now be in a Claude Code session. Type `/exit` and press Enter to leave.

**Verify again:** open a fresh terminal, run `claude --version`. It should still return a version. That means the install persisted.

---

## Step 5 — Final check

You're done when you can:

- [ ] Sign into claude.ai and see "Pro" on your account
- [ ] Run `claude --version` in your terminal and get a version number
- [ ] Run `claude` and see the interactive prompt (type `/exit` to leave)

If all three work, you're ready for Session 1.

---

## Troubleshooting

**`command not found: npm` or `node`**
Node.js isn't installed, or the installer didn't update your PATH. Close and reopen your terminal. If that doesn't work, reinstall Node.js from nodejs.org.

**`EACCES: permission denied` on Mac**
Either use `sudo npm install -g @anthropic-ai/claude-code`, or fix npm's global permissions. The sudo approach works; it's fine for a personal machine.

**`404 Not Found` during install**
Your npm registry may be misconfigured or offline. Try `npm config set registry https://registry.npmjs.org/` and retry the install.

**Browser doesn't open when you run `claude`**
Copy the URL the terminal prints and paste it into a browser manually. That completes the login.

**You logged in but Claude Code says "not authenticated"**
Make sure you used the same email for Claude Pro and for the `claude` login. If they differ, log out (`claude /logout` or similar), and log in again with the Pro account.

**Your company blocks npm installs entirely**
Work with IT. If IT won't unblock, use a personal machine.

**Something else**
For IT-level issues (install blocked, permissions denied by company policy, npm globally unavailable): your IT team first. For Claude-Code-specific issues (authentication flow, CLI errors, "I installed but can't get it to run"): DM Greg in Slack and we'll find a time for a quick call. Don't wait until Session 1.

---

## What to do after you've installed

Nothing — until the next prework step. Don't create a project folder or start building yet. That's guided in Session 1.

Your install just needs to be sitting ready on your machine when Session 1 starts.
