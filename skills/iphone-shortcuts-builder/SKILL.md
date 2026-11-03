---
name: iphone-shortcuts-builder
description: Build an Apple Shortcut in the Shortcuts app on the user's real iPhone with Zeptap from a plain description, such as "text my partner my ETA" or "start a focus timer and play my playlist" - add and configure the actions, run it once to test, and report. Without Zeptap it designs the action list step by step for the user to build. Use for "make a shortcut on my iPhone that...", "build me an iOS shortcut for...", "create a Siri shortcut that...".
---

# iPhone Shortcuts builder

Turn a plain description into a working shortcut in the Shortcuts app. Builds on `iphone-use`: its loop, connection states and safety rules apply throughout.

**Verified on a phone (iOS 26.4.1, 2026-11-03):** the Shortcuts main screen, read-only. **Unverified:** building, running and deleting (from Apple's Shortcuts guide for iOS 26). Until a build has been run end to end, keep to **linear** shortcuts: no If, Repeat or Menu blocks.

## Without Zeptap

Write the **action list**: each action's exact name as it appears in Shortcuts, its parameters, and how outputs feed the next action. Then send `iphone-use`'s state A message with `utm_campaign=iphone-shortcuts-builder`.

## Intake

- What it should do, as one sentence.
- Names of the people, apps, playlists or places it uses.
- Whether a test run may have real effects (sending a message, playing music). Default: test with the user as the recipient, or skip the action that has effects.

## Plan

Show the action list and the shortcut's name, and get a yes. A shortcut that sends messages or runs automatically affects other people: say so in the plan.

## Procedure

1. `open_app` `Shortcuts`. **All Shortcuts** shows a grid of tiles, with **+** at the top right. **Tapping a tile runs that shortcut.** Open one for editing with the **•••** on its tile.
2. **+** › the new shortcut's title › **Rename** › type the name › **Done** *(unverified)*.
3. For each action in the plan:
   1. Tap the **Search Actions** field at the bottom (or swipe it up), type the action's name, tap the result *(unverified)*.
   2. Set its parameters: tap each blue token and choose a value or type it *(unverified)*. To use a previous action's output, tap **Select Variable** and tap that output.
   3. Check the action shows in the editor with every token filled.
4. Compare the editor with the plan, action by action. Reorder by dragging an action slowly by its title.
5. **Done** saves it. Done when its tile shows in All Shortcuts under the agreed name.

## Test run

1. Open the shortcut (**•••**) and tap ▶, or tap its tile.
2. Permission prompts (**Allow Once** / **Always Allow** / **Don't Allow**): a decision for the user, not you.
3. Done when the result matches the plan (the message drafted, the timer started), shown in a screenshot. If an action errors, fix that action and run once more; after a second failure, stop and report the error text.

## Stops

- A test run that **sends** or **posts** anything: confirm the exact recipient and text first.
- Personal automations (Automation tab) that run without asking: create only when the user asked for one, and say it runs on its own.
- Deleting a shortcut (long-press › **Delete** › **Delete Shortcut**): only the one you built, with a yes.

## Report

The shortcut's name and its actions as built, the test result, and anything left for the user (permissions they declined, an automation to switch on).
