---
name: ios-navigation
description: Open apps, go back, and recover when lost on an iPhone driven by Zeptap. Use when launching an app, moving between screens, leaving menus or sheets, or when you're unsure what screen the phone is on.
---

# iOS navigation

## Open an app

Use `open_app` with the exact name shown under the app's icon (ASCII only). It goes home, searches Spotlight, and taps the result. If it errors, the app isn't installed under that name: check the spelling with the user rather than guessing variants.

Many apps (Settings, Safari, Mail, social apps) reopen on the last screen they showed. Read the screenshot after `open_app` before assuming you're on the app's first screen.

## Move within an app

| Need | Do |
|---|---|
| One screen back | Tap the app's back chevron or X first. `back` (a left-edge swipe) is the fallback; some screens ignore it |
| Switch sections | Tap the tab bar item by its label (`tap_text`) |
| Tab bar missing | Many apps hide it while scrolled into content. Scroll up a little, or go back |
| Close a menu, sheet, Spotlight or the keyboard | `dismiss` |
| Leave the app | `home` |

## Recover when lost

1. Call `screenshot` and name the surface you're on: an app screen, Home Screen, App Library, Spotlight, a folder, icon-editing mode (icons jiggle), the app switcher, Control Center, Notification Center, or the lock screen.
2. Leave it deliberately:
   - Menu, sheet, Spotlight or keyboard: `dismiss`
   - Control Center, Notification Center, app switcher or a folder: `home`
   - Icon-editing mode: tap Done, or `home`
   - Lock screen or passcode pad: `unlock` once
3. If still unsure, call `home` **once** and start again from the Home Screen. Pressing `home` repeatedly doesn't help: extra presses open other surfaces.

## Hazards

- Dismiss menus, folders and the keyboard before swiping between pages, or the swipe gets intercepted.
- Swipes that start at the screen edges trigger system gestures: left edge goes back, bottom edge goes home, top edges open Notification Center or Control Center. Start in-app gestures well inside the content.
- A long press on a Home Screen icon opens a menu, and holding longer enters icon-editing mode. Use a tap to open an app.
