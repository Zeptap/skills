# Zeptap skills

Agent skills for driving real iPhones with [Zeptap](https://zeptap.com). Zeptap is a Mac app that puts your iPhone on your Mac screen and exposes it to AI agents through a local MCP server, so they can see, tap, swipe and type on it.

These skills teach an agent how to operate iOS reliably: the look-act-verify loop, targeting, scrolling, typing, pickers, alerts and safety rules. They're calibrated on real iPhones.

## Skills

| Skill | Use it for |
|---|---|
| [`zeptap`](skills/zeptap/SKILL.md) | The core contract: the loop, targeting, several phones, retry limits, safety |
| [`ios-navigation`](skills/ios-navigation/SKILL.md) | Opening apps, going back, recovering when lost |
| [`ios-scrolling`](skills/ios-scrolling/SKILL.md) | Drag vs. flick, lists, feeds, sheets, sliders |
| [`ios-text-entry`](skills/ios-text-entry/SKILL.md) | Focusing fields, the ASCII limit, fixing autocorrect, submitting |
| [`ios-pickers`](skills/ios-pickers/SKILL.md) | Time, date and value wheels |
| [`ios-alerts-and-overlays`](skills/ios-alerts-and-overlays/SKILL.md) | Permission prompts, upsells, sheets, system surfaces |
| [`ios-settings`](skills/ios-settings/SKILL.md) | The Settings app and switches |
| [`account-warmup`](skills/account-warmup/SKILL.md) | Running a day of an Instagram, TikTok or Reddit warmup playbook for a brand account |

## Requirements

1. [Zeptap](https://zeptap.com) running on your Mac with an iPhone set up.
2. Your agent connected to Zeptap's MCP server at `http://127.0.0.1:47801/mcp`. The quickest way: **Settings › Connectors** in Zeptap, then **Add**. See [Connect an agent](https://zeptap.com/docs/agents/connect).

## Install

### Claude Code

```sh
/plugin marketplace add zeptap/skills
/plugin install zeptap@zeptap
```

### Codex, Cursor, OpenCode and other agents

With the [skills CLI](https://github.com/vercel-labs/skills), install every skill at once:

```sh
npx skills add zeptap/skills
```

It asks which agents to install to. To skip the prompts, name the agent, or use `--all` for every agent:

```sh
npx skills add zeptap/skills -g -y --agent codex   # user-level, for Codex
npx skills add zeptap/skills --all                 # every skill, every agent, no prompts
```

Or copy the folders in `skills/` into your agent's skills directory (for example `~/.codex/skills/` or `~/.claude/skills/`).

## Docs

- [Driving the iPhone](https://zeptap.com/docs/agents/driving)
- [Tool reference](https://zeptap.com/docs/agents/tools)
- [Playbooks](https://zeptap.com/docs/playbooks)

## License

[MIT](LICENSE)
