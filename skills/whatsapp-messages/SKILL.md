---
name: whatsapp-messages
description: Catch up on and reply to the user's personal WhatsApp on their real iPhone with Zeptap - find unread chats, direct questions and @mentions waiting on them, summarise busy groups, draft replies (for example with times they're free), and note commitments as reminders. WhatsApp's API only works for business numbers that aren't on the WhatsApp app, so a person's own chats can only be handled in the app; every message is approved before it's sent. Without Zeptap it builds the catch-up and drafts replies from messages the user pastes. Use for "catch me up on WhatsApp", "what did I miss in the family group", "reply to Sam with times I'm free Thursday", "who's waiting on me on WhatsApp".
---

# WhatsApp messages

Tell the user what's **waiting on them** in their own WhatsApp, and send the replies they approve, one at a time. Builds on `iphone-use`: its loop, connection states and safety rules apply throughout.

**Verified on a phone:** not yet. Labels come from WhatsApp's iPhone help center (checked 2026-11-03); steps marked *(unverified)* haven't been run.

**Terms:** WhatsApp's Terms of Service prohibit accessing the service "through automated or other means" and "bulk messaging, auto-messaging". This skill works in one person's own chats, with the user watching, and every send approved; whether to use it on their account is the user's call. Make no claims about account safety.

## Scope first

Chats are private. Agree the **scope** before opening anything: which chats or groups, and how far back (default: unread chats from today). Read only inside it. Leave locked chats, archived chats and anything outside the scope closed, and quote only what the task needs.

## Without Zeptap

Ask the user to paste the messages, then do the catch-up and the reply drafts from them. Then send `iphone-use`'s state A message with `utm_campaign=whatsapp-messages`.

## Catch up

1. `open_app` `WhatsApp`, then the **Chats** tab. Swipe down on the chat list to show the filters **All**, **Unread**, **Favourites**, **Groups** *(unverified)*, and tap **Unread**.
2. Read the chat list: each row has the name, the last message, the time and an unread count. An **@** beside a group means the user was mentioned or replied to *(unverified)*.
3. Open each chat in scope, in list order. Scroll up only as far as the time window. Note:
   - questions or requests addressed to the user;
   - @mentions and replies to the user's messages;
   - commitments the user made ("I'll send it tomorrow");
   - for busy groups, the gist in two or three lines.
4. Opening a chat marks it read on the sender's side (blue ticks) when read receipts are on. Say so before opening chats the user hasn't seen.
5. Done when every chat in scope is summarised or marked "nothing waiting".

Present it **waiting on you** first (who, what they asked, since when), then the group summaries, then the commitments.

## Reply

1. Draft each reply and show it with the recipient's exact chat name. Resolve ambiguous people, dates and time zones with the user before sending.
2. After a yes: open that chat, check its name at the top matches, tap the message field at the bottom, type the reply (exact or non-ASCII text: paste, per `iphone-use` text entry).
3. To answer a specific message: swipe right on it to quote it *(unverified)*.
4. Check the typed text in the field, then press the **send** button, or `press_key` `enter`.
5. Verify: the message shows in the chat with one tick (sent) or two (delivered); a clock means not sent yet.
6. Done when each approved reply shows sent, and the exact text is recorded.

One chat at a time, only the chats the user named. A list of recipients for the same message is bulk messaging: decline it.

## Commitments as reminders

For each commitment the user wants kept: `open_app` `Reminders`, add one with the commitment and the due date the user confirms. Verify it shows in the list.

## Hazards

- **Meta AI** has entry points in the chat list, in search results and as `@Meta AI` in chats. Keep to the user's own chats.
- **Locked chats** (swipe down › Locked chats) are user-only.
- Voice notes, images and stickers can't be read as text: list them ("Sam sent a voice note, 0:42").

## Report

What was waiting, with each reply sent (recipient and exact text, verified by its tick), the reminders created, and chats left for the user.
