---
name: ios-settings
description: Find and change settings in the iOS Settings app, and read and flip switches reliably, on an iPhone driven by Zeptap. Use when a task involves the Settings app or any on/off switch.
---

# The Settings app

## Find a setting

1. `open_app` `Settings`. It reopens on the last page shown: go back to the top level if needed.
2. **Fastest:** tap the search field at the top (drag down a little if it's hidden), type the setting's name, and tap the result.
3. **By browsing:** `tap_text` the row label. If it's off screen, `drag` from about 75% to 30% of the height at the horizontal center, then `find_text` again. `flick` `up` jumps far down a list when you know the row is near the end.

## Switches

- Tap the **center of the switch track**, not the row label or the thumb's edge.
- Read the state from the result: green (or the accent color) with the thumb on the right is **on**. Grey with the thumb on the left is **off**.
- If the state didn't change, re-find the switch and tap once more. After two failures, stop and report.

## Changes need approval

Settings changes affect the whole phone. Before changing a setting the user didn't name, say what you'll change and why. Be especially careful with:

- Privacy, location and tracking settings
- Accounts, passwords, Apple ID and iCloud
- Screen Time, Face ID and passcode
- Wireless toggles (Airplane Mode included) and Accessibility, AssistiveTouch included. Zeptap controls the phone through these; turning them off disconnects you
- Resetting or erasing anything

## Leave it as you found it

Note the original value before changing a setting for a test, and restore it at the end.
