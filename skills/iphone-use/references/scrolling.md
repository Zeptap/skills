# Scrolling and gestures on iOS

Directions are the **finger's** direction. To see content further down a list, the finger moves up: `flick` with `up`, or `drag` from a lower point to a higher one.

## Pick the gesture

| Need | Use | Notes |
|---|---|---|
| Move a list a precise distance | `drag`, default 800 ms | No momentum; content moves about 0.85x the drag distance |
| Read a list row by row (Settings, forms) | `drag` from about 75% to 30% of the height, at the horizontal center | Then re-find the target |
| Jump far through a long list | `flick` `up` | One flick covered the whole Settings list, top to bottom |
| Back to the top of a list | Tap the status bar, top center | |
| Next item in a feed (Reels, TikTok, Shorts) | `flick` `up` from the center-left | Keep away from the right-hand button rail |
| Page between Home Screen pages | See [navigation.md](navigation.md) › Home Screen | Start on empty wallpaper, never on an icon |
| Slider | `drag` along the track | |
| Picker wheel | See [pickers.md](pickers.md) | |
| Resize a sheet | `drag` its grab handle | |
| Close a sheet | `drag` down from its top, or `dismiss` | |

A `drag` shorter than about 500 ms keeps coasting after release, like a flick.

## After every scroll

Coordinates from before the scroll are stale. Re-find the target with `find_text` or `tap_text`, or read the new screenshot.

## Hazards

- **Edges:** start gestures well inside the content. Left-edge swipes go back, the bottom edge goes home, and the top edges open Notification Center or Control Center.
- **Text:** dragging inside editable text selects it. Scroll from a margin, or `flick`.
- **Widgets and icons:** a drag that starts on a widget can enter widget editing, and one that starts on an icon can press it. Start Home Screen swipes on empty wallpaper.
- **Keyboard:** don't swipe over the keyboard; some keyboards type when swiped. `dismiss` it first.
- **Panels that close on swipe:** some in-app panels close when swiped inside. If a panel vanished after a scroll, reopen it and scroll outside it, or use its own controls.
