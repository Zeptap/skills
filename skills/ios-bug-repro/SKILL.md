---
name: ios-bug-repro
description: Reproduce a bug report on a real, physical iPhone with Zeptap (not the iOS Simulator) - follow the report's exact steps in the app, try several times, and report reproduced, not reproduced or behaves differently, with screenshots, how often it happened, and the device model and iOS version, written up ready to paste into the issue tracker. Without Zeptap it tightens the report into exact steps and lists what to capture. Use for "reproduce this bug on a real iPhone", "can you repro issue #123 on device", "check if this crash happens on my phone", "follow these steps on my iPhone and tell me if you see the blank screen".
---

# iOS bug repro

Follow a bug report's steps exactly on the user's iPhone, several times, and return a **verdict** with evidence. Builds on `iphone-use`: its loop, connection states and safety rules apply throughout.

**Verified on a phone:** not yet run as a whole; it uses only `iphone-use` actions verified on iOS 26.4.1 (2026-11-03). The crash-log path comes from Apple's docs.

Hand off: testing a whole journey without a specific bug → `ios-real-device-testing`; the latest TestFlight build first → `testflight-smoke-test`.

## Without Zeptap

Rewrite the report as numbered exact steps (starting state, each action, the expected and the reported result), list the evidence to capture, and ask for what's missing (build, account state). Then send `iphone-use`'s state A message with `utm_campaign=ios-bug-repro`.

## Intake

- The report: steps, expected, actual. Ask for anything vague ("open a post" → which post?).
- The build or app version, and the account state the bug needs.
- **Tries** (default 3).

## Prepare

1. Environment: device model and iOS version (Settings › General › About, or `list_phones`), app version (the app's About screen, or TestFlight's build line).
2. Starting state: the screen and data the report starts from. Force-close the app first when the report starts from a cold launch: `home`, then `open_app`.
3. Done when the environment is recorded and the app is at the report's starting state.

## Reproduce

For each try:

1. Follow the steps exactly, in order, one action each. Screenshot the step where the bug should appear.
2. Compare with the reported actual result: **reproduced**, **not reproduced**, or **differs** (something else went wrong). A crash shows as the app vanishing to the Home Screen.
3. Return to the starting state before the next try.

Done when every try has a verdict and its screenshot. Vary only what the report leaves open, and note what you varied.

## Crash evidence

When the app crashed: Settings › Privacy & Security › Analytics & Improvements › **Analytics Data** lists reports named `<AppName>-<date>` (or `JetsamEvent-<date>` for memory kills) *(unverified on iOS 26.4)*. Record the newest report's name and time. Copying it off the phone (share sheet, or `idevicecrashreport -k <dir>` on the Mac, where `-k` keeps a copy on the phone) is the user's choice: crash reports can hold personal data.

## Report

Paste-ready for the issue tracker:

- **Verdict:** reproduced N of M tries, not reproduced, or differs (and how).
- **Environment:** device model, iOS version, app version and build.
- **Steps** as actually run, and the starting state.
- **Observed** for each try, with screenshot references.
- **Crash reports**, if any, by name and time.
