---
name: iphone-home-screen-organizer
description: Tidy the user's real iPhone with Zeptap - turn off promotional notifications from named apps, set up a Focus (work, study, sleep), and reorganise the Home Screen with essentials on the first page, folders by purpose and distracting apps moved off the first page. Settings and the layout plan are approved before anything changes, and no app is deleted. Without Zeptap it designs the layout and the Focus and gives the manual steps. Use for "stop promo notifications from these apps", "set up a work focus on my iPhone", "organise my home screen".
---

# iPhone Home Screen organizer

Three jobs on the user's own phone: silence notifications, set up a Focus, rearrange the Home Screen. Builds on `iphone-use`: its loop, connection states and safety rules apply throughout. Settings work follows `iphone-use`'s Settings reference.

**Verified on a phone (iOS 26.4.1, 2026-11-03):** Settings search, the Notifications and Focus pages, and their labels, read-only. **Unverified:** every change (switches, Focus setup, moving icons).

## Without Zeptap

Design what the user asked for (the notification list, the Focus with its allowed people and apps, the page-by-page layout) and the manual steps below, then send `iphone-use`'s state A message with `utm_campaign=iphone-home-screen-organizer`.

## Intake

One message, with defaults:

- **Notifications:** which apps to silence fully, and which only to pull into the Scheduled Summary.
- **Focus:** its purpose and name, the people and apps allowed through, a schedule.
- **Layout:** apps that must be on page 1, folders wanted, apps to move off page 1. Default: dock untouched; page 1 holds the user's daily apps; everything else in folders by purpose.

Before changing anything, take a **baseline**: a screenshot of each Home Screen page, and of each Settings page you'll change.

## Notifications

1. Settings search › `Notifications` › the **Notifications** result. The page shows Display As, **Scheduled Summary**, Show Previews, then **Notification Style**: every app in A to Z order with its current state ("Off", or how it alerts).
2. For each named app: `tap_text` its name (scroll the list as needed) › tap the **Allow Notifications** switch *(unverified for the change; verified that the page leads with this switch)*. With it off, the page shows nothing else.
3. Verify each change on the app's page, then back on the list, where the app's row reads **Off**.
4. Done when every named app reads **Off** in the list (or sits in the Scheduled Summary, if that was the choice).

Scheduled Summary instead of off: **Scheduled Summary** › turn it on › set the times › switch the app on in its A to Z list *(unverified)*.

## Focus

1. Settings search › `Focus` › the **Focus** result. Existing Focuses are listed (Do Not Disturb, Personal, Sleep, Work…); **+** sits at the top right.
2. If a Focus with that purpose exists (Work), edit it rather than creating a duplicate. Otherwise **+** › the type (Work, or **Custom** with a name) *(unverified)*.
3. **People** and **Apps** › **Allow Notifications From** › add the approved people and apps *(unverified)*.
4. Optional: **Add Schedule** (a time or a place) *(unverified)*.
5. Done when the Focus page shows the approved people, apps and schedule. Turning it on now is the user's choice (Control Center › Focus).

## Home Screen layout

1. Show the **layout plan** (page 1, the folders, what moves off page 1) and get a yes. Moving icons is slow and changes a layout the user knows by heart.
2. Enter **jiggle mode:** `long_press` empty wallpaper (about 1000 ms) until icons jiggle; **Edit** and **Done** appear at the top *(unverified on this build)*. A long press on an icon opens its menu instead.
3. **Move an icon:** `drag` it slowly (1500 ms) to the new spot; to another page, drag it to the screen's left or right edge and hold until the page turns *(unverified; a fast swipe that starts on an icon can stick mid-way, so use slow drags only)*.
4. **Make a folder:** drag one icon onto another and hold until a folder opens; rename it from the folder's title *(unverified)*.
5. Tap **Done**, then screenshot each page and compare against the plan.
6. Done when every page matches the approved plan.

Never use **Remove App** › **Delete App**. To take an app off the Home Screen, **Remove from Home Screen** keeps it in the App Library, and only with approval.

## Recovery

| Problem | Do |
|---|---|
| An icon landed in the wrong place | Still in jiggle mode: drag it again. Out of it: re-enter and fix |
| A folder formed by accident | Drag the icon back out; a folder with one app left keeps it, so move that out too |
| Jiggle mode won't end | **Done**, or `home` |
| A Settings change didn't stick | Re-open the page and re-read the switch |

## Report

What changed (notifications off per app, the Focus as set up, each Home Screen page), with screenshots, against the baseline. Anything the user still has to do, such as turning the Focus on.
