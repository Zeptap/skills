---
name: ios-alerts-and-overlays
description: Handle iOS permission prompts, system alerts, upsells, onboarding sheets and other overlays on an iPhone driven by Zeptap. Use when an alert, popup, sheet, banner or prompt appears over the screen you were working on.
---

# Alerts and overlays on iOS

Read the whole overlay before touching it. The buttons decide something, and the default one is not always the safe one.

| Overlay | Do |
|---|---|
| Permission prompt (photos, contacts, location, notifications, camera, microphone, tracking) | Ask the user. Prefer the most limited option that still works: "Allow Once", "Limited Access", "Don't Allow", "Ask App Not to Track" |
| "Allow Paste" | Allow only when you started the paste yourself |
| Upsell, premium or subscription offer | Choose the dismissive option: "Not now", "No thanks", "Maybe later", or X |
| Onboarding or "What's new" sheet | Continue or close with the option that grants nothing |
| Notification opt-in inside an app | "Not now" unless the user wants notifications |
| Rate this app | "Not now" |
| Sign-in, one-time code, Face ID, password, CAPTCHA, identity check | Stop. Tell the user exactly what appeared. They complete it |
| Rate limit or warning ("Try again later", "action blocked") | Stop the task. Report the exact wording |
| Countdown that confirms on its own (rides, orders) | Treat reaching it as submitting. Only get there with the user's go-ahead |
| Notification banner at the top | Ignore it, or wait a few seconds for it to leave. Don't tap it by accident |
| The AssistiveTouch menu opened | Tap outside it |
| Control Center or Notification Center opened | `home` |

## Closing

- Prefer the overlay's own button. `dismiss` closes most sheets and menus; `home` closes system surfaces.
- Tapping outside an alert usually does nothing. Tapping outside a sheet may close it.
- After closing, confirm with the screenshot that the screen underneath is the one you expected.
