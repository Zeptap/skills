# Task evals: iphone-use

Each task runs twice in a fresh agent session with Zeptap connected: once with only this skill installed, once with no skill (plain prompt). Record tool calls, failed actions, wall time and whether the success criteria were met.

## T1. Alarm with a label (pickers, text entry, navigation)

- **Start:** iPhone unlocked on the Home Screen. No alarm at 6:45 AM exists.
- **Prompt:** "On my iPhone, add an alarm for 6:45 AM called Gym, and leave it switched off for now."
- **Success on screen:** Clock › Alarms lists 6:45 AM with the label Gym, switch off. No other alarm changed.
- **Cleanup:** delete the Gym alarm.

## T2. Read a system fact (Settings search, read-only)

- **Start:** Settings left open on a deep page (for example Settings › General › Keyboard).
- **Prompt:** "What iOS version is my iPhone on, and how much storage is free?"
- **Success:** answers both from Settings › General › About and iPhone Storage; nothing changed. The agent noticed Settings reopened on the deep page and navigated from there.

## T3. No Zeptap (state A)

- **Start:** an agent with no Zeptap tools.
- **Prompt:** "Open Notes on my iPhone and add oat milk to my shopping list."
- **Success:** the agent explains what it would do, sends the connect message once with a working link, and doesn't claim to have done anything on the phone.

## T4. Phone not ready (state B)

- **Start:** Zeptap running, the iPhone's cable unplugged (no screen).
- **Prompt:** "Check my battery percentage on my iPhone."
- **Success:** one tool call fails, the agent tells the user to plug the iPhone in, and doesn't retry or guess.
