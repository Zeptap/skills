---
name: ios-dynamic-type-check
description: Check how an iOS app copes with larger text on a real iPhone with Zeptap - raise the system text size (and Bold Text if asked), walk the app's key screens, and report clipped, overlapping or truncated text and controls pushed off screen, with a screenshot per screen, then restore the original text size. It's a layout check of a native app, not an accessibility certification or a website check. Without Zeptap it lists the screens, sizes and failure patterns to check. Use for "check my app with large text", "dynamic type audit", "does my app break with bigger fonts".
---

# iOS Dynamic Type check

Walk an app's key screens at larger text sizes and report every layout break, then put the phone's text size back exactly as it was. Builds on `iphone-use`: its loop, connection states and safety rules apply throughout.

**Verified on a phone (iOS 26.4.1, 2026-11-03):** the Settings paths and the Larger Text page, read-only. **Unverified:** moving the slider, the app picking up the change, restoring.

## Without Zeptap

List the screens to check, the sizes (default, largest standard, AX3, AX5), and the failure patterns under **Look for**, as a checklist. Then send `iphone-use`'s state A message with `utm_campaign=ios-dynamic-type-check`.

## Intake

- The app (its Home Screen name) and its **key screens**, as a path from launch to each (default: first screen, the main list, a detail screen, a form, settings).
- **Sizes** (default: largest standard, then AX3 and AX5).
- **Bold Text** too? (default: no).
- A test account if screens are behind sign-in; the user signs in.

## Baseline (before changing anything)

Settings › Accessibility › Per-App Settings can set a text size for this app alone, which leaves the rest of the phone untouched *(unverified)*. Otherwise change the system setting, as below, and restore it.

1. Settings search › `Larger Text` › the result under `Accessibility → Display & Text Size`.
2. The page has a **Larger Accessibility Sizes** switch and, at the bottom, a slider of 7 steps (dots under the track). Record the switch state and the thumb's step, counted 1 to 7 from the left (step 4 is the default), with a screenshot.
3. If Bold Text is in scope: Settings search › `Bold Text` (Accessibility → Display & Text Size), and record its state.
4. Done when both values are written down and screenshotted.

## Set a size

| Size | Do |
|---|---|
| Largest standard | Switch off; drag the thumb to step 7 (far right) |
| AX1 to AX5 | Switch on: the slider gains 5 steps (12 in all; AX3 is step 10, AX5 step 12) *(unverified count and spacing)* |

`drag` the thumb slowly along the track; on the 591 px-wide screenshot the steps are about 59 px apart. Verify the thumb's position after each drag *(unverified)*.

## Walk the screens

1. Leave the app running or relaunch it. Most apps pick up the new size at once; if a screen still shows the old size, force-close and reopen it (`home`, then `open_app`) *(unverified)*.
2. For each key screen at each size: reach it by its path, take a screenshot, and check it against **Look for**. Scroll long screens and screenshot each part.
3. Done when every key screen has a screenshot at every size and a finding (or "no issues") per screen.

## Look for

Apple's Larger Text evaluation criteria (App Store Connect, checked 2026-11-03), and what they look like on screen:

- Content overlapping other content.
- Single-line text cut to its first few characters, or truncated with "…" and no other way to see it all.
- Side-by-side items that don't wrap or stack at large sizes.
- Ascenders, descenders or accents clipped by their container.
- Controls pushed off screen with no way to scroll to them.
- Text that didn't grow at all: that part of the app ignores Dynamic Type.

Apple's bar is text that reaches at least 200% of the default size, which iOS passes at AX3.

## Restore

1. Set the Larger Accessibility Sizes switch and the slider step back to the baseline; Bold Text too if you changed it.
2. Done when a screenshot of the Larger Text page matches the baseline screenshot. Restoring is part of the job, including when the check stops early.

## Report

Per screen and size: a screenshot reference, pass, or the issue in one line (what, where, which size). Finish with the restored setting, verified. This is a layout check, not an accessibility certification: say so if the user asks for one.
