# The Settings app

Observed on iOS 26.4.1, 2026-11-03.

## Find a setting

1. `open_app` `Settings`. It reopens on the last page shown; go back to the top level when you need it.
2. **Search (fastest):** the **Search** field sits at the bottom of the top level. Tap it, select all (`a` with `command`, since it can hold an old query), type the setting's name, `wait` about 1 s.
3. Each result shows its **path** under its name (`Bold Text` › `Accessibility → Display & Text Size`). Tap the one whose path matches.
4. From a result, `back` goes to that page's **parent** (Display & Text Size), not to the search results.
5. **By browsing:** `tap_text` the row label. Off screen: `drag` from about 75% to 30% of the height at the center, then `find_text` again. Tap the status bar to return to the top.

A row's value ("26.4.1", "Off", "On") is a separate OCR line at the same height as its label: pair them by `y`.

## Switches

- Tap the **center of the switch track**.
- Read the state from the result: green (accent color) with the thumb on the right is **on**; grey with the thumb on the left is **off**.
- A page with one switch often shows its other options only when it's on (Notifications › an app shows only "Allow Notifications" when it's off).
- If the state didn't change, re-find the switch and tap once more. After two failures, stop and report.

## Changes need approval

Settings changes affect the whole phone. Before changing a setting the user didn't name, say what you'll change and why. Take extra care with:

- Privacy, location and tracking
- Accounts, passwords, Apple Account and iCloud
- Screen Time, Face ID and passcode
- Bluetooth, Airplane Mode and Accessibility (AssistiveTouch included): Zeptap needs these, and turning them off disconnects you mid-task
- Resetting or erasing anything

## Leave it as you found it

Record the original value (a screenshot of the page) before changing a setting for a task, and restore it at the end, verified by a screenshot.
