---
name: ios-scrolling
description: Choose between drag and flick on an iPhone driven by Zeptap - scrolling lists, feeds, sheets and sliders precisely. Use whenever you need to scroll, swipe, page, or reveal content that is off screen.
---

# Scrolling and gestures on iOS

Directions are the **finger's** direction. To see content further down a list, the finger moves up: `flick` with `up`, or `drag` from a lower point to a higher one.

## Pick the gesture

| Need | Use | Notes |
|---|---|---|
| Move a list a precise distance | `drag`, default 800 ms | No momentum; content moves about 0.85x the drag distance |
| Read a list row by row (Settings, forms) | `drag` from about 75% to 30% of the height, at the horizontal center | Then re-find the target |
| Jump far through a long list | `flick` `up` | One flick can cover a whole Settings list |
| Next item in a feed (Reels, TikTok, Shorts) | `flick` `up` from the center-left | Keep away from the right-hand button rail |
| Page between Home Screen pages | `drag` across 60-75% of the width, in empty space | Short drags snap back |
| Slider | `drag` along the track | |
| Picker wheel | See `ios-pickers` | |
| Resize a sheet | `drag` its grab handle | |
| Close a sheet | `drag` down from its top, or `dismiss` | |

A `drag` shorter than about 500 ms keeps coasting after release, like a flick.

## After every scroll

Coordinates from before the scroll are stale. Re-find the target with `find_text` or `tap_text`, or read the new screenshot.

## Hazards

- **Edges:** start gestures well inside the content. Left-edge swipes go back, the bottom edge goes home, and the top edges open Notification Center or Control Center.
- **Text:** dragging inside editable text selects it. Scroll from a margin, or `flick`.
- **Widgets:** a drag that starts on a widget can enter widget editing. Start Home Screen swipes on empty space or an icon gap.
- **Keyboard:** don't swipe over the keyboard; some keyboards type when swiped. `dismiss` it first.
- **Panels that close on swipe:** some in-app panels close when swiped inside. If a panel vanished after a scroll, reopen it and scroll outside it, or use its own controls.
