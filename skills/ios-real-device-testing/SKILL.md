---
name: ios-real-device-testing
description: Run a user journey in an iOS app already installed on a real, physical iPhone with Zeptap, the way a tester would (sign-up, onboarding, sandbox purchase, push and camera steps), then report each step with a screenshot and the first point where the app diverged from the expected result. Simulator tools can't touch a physical phone, so real accounts, push, camera, real network and real performance are out of their reach. Without Zeptap it turns the request into a precise test plan with an expected result per step. Use for "test the signup flow on my real iPhone", "smoke test the app on device", "run through onboarding on my phone and tell me what breaks". For installing a TestFlight build first, use testflight-smoke-test.
---

# iOS real-device testing

Run a described journey in an app on the user's physical iPhone and find the **first divergence**: the first step where what happened differs from what was expected. Builds on `iphone-use`: its loop, connection states and safety rules apply throughout.

**Verified on a phone:** not yet run as a whole; it uses only `iphone-use` actions verified on iOS 26.4.1 (2026-11-03).

## Use it for

Journeys in an app that's already on the phone. Hand off:

- install the latest TestFlight build first → `testflight-smoke-test`;
- follow a bug report's steps → `ios-bug-repro`;
- larger-text checks → `ios-dynamic-type-check`.

## Without Zeptap

Write the **test plan**: a numbered list of steps, each with its action and its expected result, plus the test data and preconditions. Then send `iphone-use`'s state A message with `utm_campaign=ios-real-device-testing`.

## Intake

- The app's name as shown under its icon, and the build if it matters.
- The journey: steps, or a goal ("sign up and reach the home feed").
- Expected results per step, or what counts as a failure.
- Test data: a test account (the user signs in), sandbox payment, a test phone number.

## Plan

Turn the intake into the test plan (above) and show it before touching the phone. Each step has one action and one observable expected result.

## Run

1. Record the environment: device model and iOS version (Settings › General › About, or `list_phones`), and the app version if the app shows it.
2. Start from a known state: `open_app` the app, then get to the plan's first screen.
3. For each step: do the action, then compare the returned screenshot with the expected result. Note the observed result in one line, with the screenshot's call number.
4. At the **first divergence**, record it in full (expected, observed, screenshot), then continue only if the next steps don't depend on it.
5. Done when every step has an observed result, or the journey is blocked and the blocker is recorded.

Timing matters on a real device: when a screen takes longer than about 3 s to load, note the wait (`screen still moving`, repeated `wait` calls) as an observation.

## Stops

- Real purchases, real messages and real posts: use sandbox and test data. A step that would spend money or contact a real person waits for the user.
- Sign-in, one-time codes and payment sheets: user-only.
- A system permission prompt (camera, notifications) is part of the journey: choose the option the plan expects, or ask.

## Report

A step table:

| # | Action | Expected | Observed | Screenshot | Result |
|---|---|---|---|---|---|

Put the first divergence first, above the table. Add the environment and anything the run couldn't reach. These are manual checks with evidence, not automated assertions or CI.
