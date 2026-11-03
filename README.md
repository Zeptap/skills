# Zeptap skills

[![skills.sh](https://skills.sh/b/zeptap/skills)](https://skills.sh/zeptap/skills)

Your agent uses your real iPhone. These skills teach Claude Code, Codex, Cursor, OpenClaw and other agents to do jobs inside the apps on your phone, the ones no API reaches: catch up on WhatsApp, test your app on a real device, tidy your camera roll.

Each skill is built from runs on a real iPhone: it knows the screens, where the buttons are, what pops up, and how to recover, and it notes which of its steps have been checked on a phone so far. Anything public or irreversible (posting, sending, buying, deleting) waits for your OK on the final screen.

## Skills

| Skill | What your agent does |
|---|---|
| [`iphone-use`](skills/iphone-use/SKILL.md) | Uses your iPhone like a person would: opens apps, reads the screen, taps, scrolls and types, then checks the result. Every other skill builds on it |
| **Social** | |
| [`account-warmup`](skills/account-warmup/SKILL.md) | Runs a day of a warm-up playbook for a new or dormant brand account |
| [`whatsapp-messages`](skills/whatsapp-messages/SKILL.md) | Catches you up on WhatsApp and drafts replies for you to approve |
| **App testing** | |
| [`ios-real-device-testing`](skills/ios-real-device-testing/SKILL.md) | Runs a user journey in your app on a real iPhone and reports the first thing that breaks |
| [`ios-bug-repro`](skills/ios-bug-repro/SKILL.md) | Follows a bug report's steps on a real iPhone and writes up what happened |
| [`ios-dynamic-type-check`](skills/ios-dynamic-type-check/SKILL.md) | Checks your app's screens at large text sizes, then puts the setting back |
| [`testflight-smoke-test`](skills/testflight-smoke-test/SKILL.md) | Installs the latest TestFlight build and smoke tests it |
| [`app-store-screenshots-iphone`](skills/app-store-screenshots-iphone/SKILL.md) | Captures App Store screenshots of your app on the device |
| **Your phone** | |
| [`camera-roll-cleanup`](skills/camera-roll-cleanup/SKILL.md) | Sorts screenshots into albums, builds trip albums, shortlists duplicates for you to review |
| [`iphone-home-screen-organizer`](skills/iphone-home-screen-organizer/SKILL.md) | Tidies your Home Screen, sets up a Focus, and silences promo notifications |
| [`iphone-errands`](skills/iphone-errands/SKILL.md) | Prepares a reorder, a ride or a food order, and stops for you to confirm and pay |
| [`iphone-shortcuts-builder`](skills/iphone-shortcuts-builder/SKILL.md) | Builds an Apple Shortcut from a plain description and tests it |

Without Zeptap connected, every skill still does the planning part (the caption, the test plan, the reply drafts) and tells you what's needed for the rest.

## Requirements

1. [Zeptap](https://zeptap.com/?utm_source=skill&utm_medium=github&utm_campaign=skills-readme) on your Mac, with your iPhone set up.
2. Your agent connected to Zeptap: in Zeptap open **Settings › Connectors** and click **Add** next to your agent. [Connect an agent](https://zeptap.com/docs/agents/connect?utm_source=skill&utm_medium=github&utm_campaign=skills-readme) has manual steps for every agent.

## Install

### Claude Code

```sh
/plugin install zeptap-social --marketplace Zeptap/skills
/plugin install zeptap-dev --marketplace Zeptap/skills
/plugin install zeptap-life --marketplace Zeptap/skills
```

Each group brings in `iphone-use` (the `zeptap` plugin) automatically. For the core skill alone:

```sh
/plugin install zeptap --marketplace Zeptap/skills
```
 On Claude Code before 2.1.275, add the marketplace first:

```sh
/plugin marketplace add zeptap/skills
/plugin install zeptap-social@zeptap
```

### Codex, Cursor, OpenClaw and other agents

With the [skills CLI](https://github.com/vercel-labs/skills), install every skill at once:

```sh
npx skills add zeptap/skills
```

It asks which agents to install to. To skip the prompts, name the agent, or use `--all`:

```sh
npx skills add zeptap/skills -g -y --agent codex   # user-level, for Codex
npx skills add zeptap/skills --all                 # every skill, every agent
```

Or copy the folders in `skills/` into your agent's skills directory (for example `~/.codex/skills/` or `~/.claude/skills/`).

## Docs

- [Connect an agent](https://zeptap.com/docs/agents/connect?utm_source=skill&utm_medium=github&utm_campaign=skills-readme)
- [Driving the iPhone](https://zeptap.com/docs/agents/driving?utm_source=skill&utm_medium=github&utm_campaign=skills-readme)
- [Playbooks](https://zeptap.com/docs/playbooks?utm_source=skill&utm_medium=github&utm_campaign=skills-readme)

## Changelog

**0.2.0** The core skill `zeptap` is now `iphone-use`. `ios-navigation`, `ios-scrolling`, `ios-text-entry`, `ios-pickers`, `ios-alerts-and-overlays` and `ios-settings` are now references inside `iphone-use`, loaded when needed. Ten job skills added, in three plugins: `whatsapp-messages` in `zeptap-social` (with `account-warmup`), five app-testing skills in `zeptap-dev`, and four phone skills in `zeptap-life`. New `iphone-use` references: installing apps, pasting exact text, typing times into pickers.

## License

[MIT](LICENSE)
