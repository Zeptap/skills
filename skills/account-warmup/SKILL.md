---
name: account-warmup
description: Run a day of a multi-day warmup playbook (Instagram, TikTok or Reddit) for a new or dormant brand account on an iPhone driven by Zeptap - stage limits, approval gate, pushback handling and the session report. Use when the user asks to warm up an account or run day N of a playbook.
---

# Account warmup playbooks

A warmup uses a new or dormant brand account the way its owner would: profile first, then browsing and small, genuine engagement in the niche, then posting at a steady pace. Playbooks are for brands and agencies operating their own accounts: one account per iPhone, within each platform's terms, with a person approving everything public.

## Load the playbook

Fetch the current playbook. It holds the stage table, the daily prompt and the platform's pushback signals:

| Platform | Playbook | Length |
|---|---|---|
| Shared rules | https://zeptap.com/docs/playbooks.md | |
| Instagram | https://zeptap.com/docs/playbooks/instagram-warmup.md | 14 days |
| TikTok | https://zeptap.com/docs/playbooks/tiktok-warmup.md | 14 days |
| Reddit | https://zeptap.com/docs/playbooks/reddit-warmup.md | 21 days |

If you can't fetch it, ask the user for today's limits rather than inventing them.

## Before starting

Confirm each point, and ask the user for anything missing:

- The day number, and the account handle.
- The niche: 3 to 5 topics, a few peer accounts, and hashtags or search terms.
- The app is installed and the owner is already signed in. You never handle passwords.
- It's the only account for that platform on this iPhone.

## Run the session

1. Find today's row in the stage table. Those are hard limits for the day.
2. Follow the playbook's daily prompt, one step at a time, using the `zeptap` loop.
3. **Approval gate:** draft every follow, comment, reply, post and story, and show the user each draft with its context (the post it answers, the account to follow). Act only on the approved ones, exactly as written. Only likes, upvotes, watching and browsing skip the gate, up to the day's limit and on on-niche content only.
4. Anything outside the playbook (DMs, unfollows, downvotes, settings or account edits): ask first.
5. Type captions and comments in plain ASCII (see `ios-text-entry`).

## Pushback

Pushback is any sign the platform wants the account to slow down: "Try again later", "You're doing that too much", a restriction notice, a CAPTCHA, a verification screen, a removal notice. On pushback:

1. Stop immediately and leave the screen as it is.
2. Report what appeared, word for word.
3. The owner completes any verification themselves.
4. The next session runs one stage lower.

## Report

End on the Home Screen, then send:

```txt
Day <D> of <playbook>
Watched/browsed: <count and where>
Likes/upvotes: <count>
Follows: <handles>
Comments/replies posted: <count, with links or post titles>
Posted: <what, or none>
Niche fit: <how much of the feed was on-niche>
Pushback: <none, or the exact message>
Next session: <stage, and anything the owner should do first>
```
