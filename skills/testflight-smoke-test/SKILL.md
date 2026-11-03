---
name: testflight-smoke-test
description: Install or update the latest TestFlight build of an app on a real iPhone with Zeptap, then smoke test it - launch, sign in with a test account, run the core action - and report pass or fail per step with screenshots and the build number. Without Zeptap it writes the smoke-test checklist for the build. Use for "install the latest TestFlight build and smoke test it", "check today's TestFlight build works", "does build 42 launch on my phone". For testing a journey in an app that's already installed, use ios-real-device-testing.
---

# TestFlight smoke test

Get the newest TestFlight build of an app onto the phone and run a short **smoke test**: launch, sign in, core action. Builds on `iphone-use`: its loop, connection states and safety rules apply throughout.

**Verified (iOS 26.4.1, TestFlight 4.4.1, 2026-11-03):** the TestFlight app's screens, read-only, with a build already installed. **Unverified:** Accept, Install and Update, and whether installing asks for a password.

## Without Zeptap

Write the checklist: launch, sign in, the core action, two or three regressions to watch for this build, each with an expected result. Then send `iphone-use`'s state A message with `utm_campaign=testflight-smoke-test`.

## Intake

- The app's name, and the build expected (version and build number), if known.
- A test account (the user signs in if a code or password is needed).
- The core action, and anything specific to this build.

## Install or update

1. `open_app` `TestFlight` and `wait` about 2 s: **Apps** lists **Currently Testing** apps. Each row shows the button (**Open**, **Update** or **Install**) and a line such as `0.1.1 (16) • 42 days`: version, (build), days until the build expires.
2. `tap_text` the app's name to open its page: **Send Feedback**, the button, then Version, Developer, Category and **Build**. Below are What to Test, Release Date, Expires, Compatibility, **Automatic Updates**, **Previous Builds**, and at the bottom **Stop Testing**, which removes the tester from the beta: never tap it.
3. If the expected build isn't the newest one shown, stop and tell the user rather than installing an older one.
4. **Install** or **Update**: a final action that changes the app on the phone, so get a yes first, then tap it *(unverified)*. A new tester taps **Accept** first. Sign-in or password prompts are user-only.
5. Wait for **Open**, then check the build number on the app's page matches the expected one.
6. Done when the page shows **Open** and the expected build.

A build that needs a newer iOS, or an expired one, can't be installed: report the message.

## Smoke test

1. Launch with the app page's **Open** (or `open_app` with the icon label; a beta's label carries an orange dot, which `open_app` handles).
2. **Launch:** it reaches its first screen without a crash. A crash returns you to the Home Screen, sometimes with a TestFlight crash-feedback alert: report it, and send feedback only if the user wants.
3. **Sign in** with the test account (user-only for codes and passwords).
4. **Core action**, then the build-specific checks, each compared with its expected result.
5. Done when each step has pass or fail and a screenshot reference.

## Report

The build (version and build number, from TestFlight), the device and iOS version, then each step with pass or fail and a screenshot reference. Put any failure first. Mention days until the build expires if it's under a week.
