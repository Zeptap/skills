---
name: app-store-screenshots-iphone
description: Capture App Store screenshots of an app on a real iPhone with Zeptap - navigate to each listed screen with demo data in place and save full-resolution device screenshots at the exact size App Store Connect accepts, ready for framing. Without Zeptap it plans the screenshot list, the demo data and the order. Use for "take App Store screenshots of my app on my iPhone", "capture real-device screenshots for the listing". To frame, caption or resize screenshots you already have, use a screenshot design skill instead.
---

# App Store screenshots on iPhone

Get each listed screen of the app on screen with its demo data, save a full-resolution screenshot of it, and deliver files App Store Connect accepts as they are. Builds on `iphone-use`: its loop, connection states and safety rules apply throughout.

**Verified (2026-11-03, iPhone 14 Pro, iOS 26.4.1):** Zeptap's **Take Screenshot** saves a PNG of 1180×2556 with no alpha; the extra column is encoder padding, and `scripts/crop-png.js` crops it to the native 1179×2556 exactly. **Unverified:** a full run on an app.

## Sizes

`screenshot` returns a 591×1280 preview: use it to navigate and check, never as a deliverable. App Store Connect wants exact sizes (Apple's screenshot specification, checked 2026-11-03):

| Phone | Native size | App Store Connect row |
|---|---|---|
| iPhone 14 Pro, 15, 15 Pro, 16, 16 Pro | 1179×2556 | iPhone with Dynamic Island, medium display (**required**) |
| iPhone 17, 17 Pro | 1206×2622 | same row |
| Pro Max, Plus, Air | 1260–1320 wide | large display (optional; scaled if missing) |

PNG or JPEG, no alpha, 1 to 10 per size. A phone gives only its own size; say which row the set covers.

## Without Zeptap

Plan the set: up to 10 screens in story order, the demo data for each (names, numbers, images that look real and contain no personal data), and the state each screen needs (signed in, a list filled). Then send `iphone-use`'s state A message with `utm_campaign=app-store-screenshots-iphone`.

## Intake

- The app (its Home Screen name), and the screens in order.
- Demo data: an account already filled with it, or what to enter.
- Light or dark appearance, and the language.

## Procedure

1. Check the phone: model and iOS version (`list_phones`), to know the native size.
2. For each screen, in order:
   1. Navigate to it and put the demo data in place. Clear banners, keyboards and the pointer from view (`dismiss`; the pointer parks itself after each action).
   2. Check the 591×1280 preview: everything the screen should show is visible, with nothing personal in view.
   3. Ask the user to click **Take Screenshot** (the camera button in Zeptap's control rail on the Mac). It saves `Zeptap <phone> <date> at <time>.png` to the folder set in macOS's Screenshot app, else the Desktop. Captures show 9:41 in the status bar.
   4. Name the file `NN-<screen>.png` in an output folder.
3. Fix the size where the native width is odd: 1179-wide phones capture at 1180. Crop each file exactly:
   `osascript -l JavaScript scripts/crop-png.js <in.png> <out.png> 1179 2556`
4. Verify each file: `sips -g pixelWidth -g pixelHeight -g hasAlpha <file>` shows the native size and `hasAlpha: no`.
5. Done when every listed screen has a file at the exact native size, in order.

## Stops

- Personal data on screen (real names, messages, emails): replace it with demo data first.
- Purchases or sends needed to reach a screen: use sandbox or test data, or ask.

## Report

The output folder, each file with its screen and size, the App Store Connect row it covers, and screens that couldn't be captured and why. Framing and captions are a separate step (a screenshot design skill).
