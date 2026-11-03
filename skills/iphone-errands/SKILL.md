---
name: iphone-errands
description: Prepare everyday orders in the user's signed-in iPhone apps with Zeptap - reorder a previous Amazon item, set up an Uber to the airport with the right terminal and time, or rebuild a usual Uber Eats or grocery order - then stop at the basket or ride summary so the user confirms and pays. It never enters payment details. Without Zeptap it writes the order details and the steps. Use for "reorder my usual coffee pods", "get an Uber to JFK terminal 4 at 6am", "order my usual from Uber Eats".
---

# iPhone errands

Fill the basket or the ride request in the user's own signed-in app, then **hand over** at the summary: the user checks it and taps the final button. Builds on `iphone-use`: its loop, connection states and safety rules apply throughout.

**Verified on a phone:** not yet; app flows change often, so read every screen rather than trusting these notes.

## Terms (checked 2026-11-03)

Services differ on agents driving their apps. Tell the user before starting in an app whose terms restrict it, and make no claims about account safety:

| Service | Terms |
|---|---|
| Swiggy | Allows "AI Assistants" to place orders, deemed authorised by the user, who is responsible for what's ordered |
| Amazon (US, India) | "Agent Terms": an agent must identify itself, which an app-driving agent can't; Amazon may limit agents at its discretion |
| Zomato | Prohibits access "through any automated means" |
| Uber | Prohibits programs that "unduly burden" the service; runs its own agent API |
| Others | Unchecked: tell the user so |

## Without Zeptap

Write the order: items with exact names and quantities (or the ride: pickup, drop-off with terminal, time, vehicle type), the address, and the steps to place it. Then send `iphone-use`'s state A message with `utm_campaign=iphone-errands`.

## Intake

- The app (the user's own, signed in) and what to order, or "my usual" with how to recognise it.
- Delivery address or pickup point, and the time.
- Limits: a budget, substitutions allowed or not.

## Prepare the order

1. `open_app` the app. Sign-in, OTP and location prompts are user-only, or the user's choice.
2. Find the past order or item: an order-history or reorder entry (Amazon: **Buy Again** under **Me**; others: "Order again", "Repeat order", "Your orders" *(unverified labels)*), or search for the exact item.
3. Add the items, checking each name, size and quantity against the intake. Out of stock: list alternatives and ask; never substitute on your own.
4. Open the basket. For a ride: enter **Where to?** with the exact terminal, set the pickup time, and choose the vehicle type.
5. Done when the basket or ride summary shows exactly the agreed items or trip, address, time and total.

## Hand over

1. Screenshot the summary and list it for the user: items, quantities, address, time, total, payment method shown.
2. Stop there. The **commit** button is the user's: **Place order**, **Pay**, **Request**, **Buy Now**, any slide-to-pay, and any UPI PIN or card screen.
3. If the user asks you to tap the commit button, show the final screen and get an explicit yes; payment and PIN screens stay theirs.

## Hazards

- **One-tap buying:** Amazon's **Buy Now** with 1-Click on places the order at once. Add to the cart instead.
- Coupons, tips and add-ons pre-selected by the app: list them in the summary; remove one only if the user asks.
- A countdown that confirms on its own counts as committing: stop before starting it.

## Report

What's in the basket or ride request (verified by the summary screenshot), what the user still has to do (pay, confirm), and anything that couldn't be matched.
