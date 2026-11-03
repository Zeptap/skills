# Connection: errors and fixes

Zeptap's messages, each mapped to one plain instruction for the user. Messages are quoted from the Zeptap app (0.6.x). When a message isn't listed, quote it to the user word for word and point them to https://zeptap.com/docs/reference/troubleshooting?utm_source=skill&utm_medium=agent&utm_campaign=iphone-use.

Fixes marked **user** need a person at the Mac or the iPhone: say what to do, then wait for them to say it's done. Don't retry in the meantime.

## Zeptap or the agent connection

| You see | Tell the user |
|---|---|
| No `zeptap` tools at all | State A in `SKILL.md`: send the connect message once |
| `Connection refused` / `ECONNREFUSED` on `127.0.0.1:47801` | **User:** open the Zeptap app on your Mac. Turning on **Open Zeptap at login** in Zeptap's settings stops this after restarts |
| `Zeptap isn't running. Open the Zeptap app on this Mac and try again.` | **User:** open Zeptap |
| Tools were added but this session doesn't show them | **User:** start a new session of this agent (or restart its app) so it picks up Zeptap |
| `Zeptap isn't ready.` | `wait` a few seconds and call `list_phones` once. If it repeats, **user:** quit and reopen Zeptap |
| `The free hour of Zeptap is used up. …` | Pass it on as written: the user activates a license in **Zeptap › Settings › License** |
| `Zeptap couldn't check its license for over … days. …` | **User:** connect the Mac to the internet and open **Zeptap › Settings › License** |

## Which phone

| You see | Do |
|---|---|
| `No iPhones are paired with this Mac. Pair one in Zeptap.` | **User:** open Zeptap and follow **Pair a New iPhone** |
| `No iPhone matches "…". Call list_phones; known phones: …` | Call `list_phones` and use an `id` it returns |
| `list_phones` row with `ready=no (not one of the iPhones this Zeptap license covers)` | Use another phone, or **user:** change the license's phones in **Zeptap › Settings › License** |
| `… isn't one of the … this Zeptap license covers. …` | Same as above |
| `list_phones` row with `ready=no (not connected over Bluetooth; …)` | Fine for a phone you aren't using. Naming it in a call makes Zeptap try to connect it |

## Touch and typing

| You see | Tell the user |
|---|---|
| `Not connected to the iPhone over Bluetooth. Open Zeptap on the Mac and connect the phone.` | **User:** open Zeptap and check the iPhone shows as connected. If it doesn't, follow Level 1 of https://zeptap.com/docs/reference/troubleshooting?utm_source=skill&utm_medium=agent&utm_campaign=iphone-use#bluetooth-not-connecting-or-disconnecting. Never suggest forgetting or re-pairing the phone first |
| `<phone> isn't answering over Bluetooth, so Zeptap can't tap or type on it. Check that it's on, nearby and has Bluetooth on.` | **User:** check the iPhone is awake, near the Mac and has Bluetooth on |
| `Couldn't see the pointer. Check AssistiveTouch is on and the iPhone is unlocked.` | **User:** unplug and replug the iPhone's cable, or turn on **Settings › Accessibility › Touch › AssistiveTouch** on the iPhone |
| The screen is visible, but taps and typing do nothing | Same as the Bluetooth row above |

## Seeing the screen

| You see | Do |
|---|---|
| `No screen frame available: the picture is (re)starting, or the iPhone is locked. …` | `wait`, then try again. If it persists, call `unlock` once. If there's still no frame, **user:** check the iPhone's cable |
| `No screenshot: the iPhone's screen is off or locked (call unlock to use it).` | Call `unlock` once. Also returned for about 20 s after you call `lock`; `unlock` then says "already unlocked" if the lock didn't hold |
| `No text to read: the iPhone's screen is off or locked (call unlock to use it).` (find_text) | Call `unlock` once |
| `Nothing sent: the iPhone's screen is off or locked (call unlock to use it).` (any touch or key) | Call `unlock` once, then repeat the action |
| `No screenshot: Zeptap can't see this iPhone's screen (it isn't plugged in over USB). …` | **User:** plug the iPhone into the Mac. Without the screen, stop: actions can't be verified |
| `Zeptap can't see this iPhone's screen (it isn't plugged in over USB), so it can't read text on it. …` | Same as above |
| The image is black while the user says the phone is on | **User:** unplug the cable, wait a few seconds and plug it back in, or choose **Restart Screen** in Zeptap's **More** menu |

## Unlocking

`unlock` makes one attempt per call. Never call it again after a failure, and never type a passcode.

| Message | Do |
|---|---|
| `The iPhone is already unlocked.` | Carry on |
| `Unlocked the iPhone (Face ID got there first).` | Carry on |
| `No passcode is saved for this iPhone…` | **User:** unlock the phone by hand, or save the passcode in **Zeptap › Settings › Phones** |
| `Unlocking by agents is turned off for this iPhone. Ask the user to unlock it.` | **User:** unlock the phone |
| `The iPhone didn't accept the saved passcode…` | **User:** unlock the phone and update the saved passcode in Zeptap |
| `Already locking or unlocking the iPhone.` | `wait` 2000, then `screenshot` |
| `Not connected to the iPhone over Bluetooth…` | Bluetooth row above |

## Tool errors you fix yourself

| Message | Do |
|---|---|
| `text "…" not found on screen (N matches); nothing tapped` | `find_text` with a shorter `query` (OCR may read the label differently), or scroll it into view. `exact` is true by default: pass `exact: false` for part of a line |
| `Nothing typed: unsupported characters '…'. Only US-keyboard ASCII can be typed.` | Rewrite the text in ASCII, or paste it. See `text-entry.md` |
| `typed … chars, but nothing on screen changed: probably no text field is focused…` | Tap the field, check it shows a cursor, then type again |
| `No app named "…" is installed on this iPhone; nothing opened.` | The app isn't on the phone. If the message lists installed apps with similar names, retry with the one the user meant (the name under the icon: "Chrome", not "Google Chrome"). Otherwise tell the user the app isn't installed |
| `"…" is installed (…), but Spotlight didn't show it as an app, so nothing was opened.` | Open it from the Home Screen or the App Library. See `navigation.md` |
| `No app named "…" in Spotlight's app results; nothing opened.` | Use the exact name under the icon; the message may name Spotlight's top app result |
| `Spotlight didn't open, so nothing was opened.` | `home`, then `open_app` once more |
| `Tapped "…" at (x,y) but Spotlight still appears open; verify.` | `screenshot`. If Spotlight is still up, `dismiss` and try once more, or open the app from the Home Screen |
| `screen still moving after … ms (normal while a video plays; otherwise call wait)` | In video feeds, carry on. Elsewhere `wait`, then look again |
| `unknown tool …`, `unknown key`, `… are required` | Fix the call's arguments |
