---
name: ios-text-entry
description: Focus fields, type, and correct text on an iPhone driven by Zeptap, including the ASCII-only limit and iOS autocorrect. Use whenever you need to type into a field, search box, caption, message or form.
---

# Text entry on iOS

## Type

1. **Focus first.** Tap the center of the editable area, not its label or edge. Confirm focus from the keyboard or a blinking cursor before typing. If focus doesn't appear, re-locate the field; don't keep tapping its edges.
2. **Type** with `type_text`. Long text types at about 80 ms per character, so split very long text into a few calls and check each.
3. **Verify** the returned screenshot: the right field, the full text, nothing cut off.

## ASCII only

`type_text` sends US-keyboard characters: printable ASCII, newline and tab. Any other character (emoji, accents, curly quotes, currency symbols like `₹` or `€`) rejects the whole call and types nothing. Rewrite the text in plain ASCII: straight quotes, `-` for dashes, `EUR` or `Rs` for currency. When the user needs emoji or accented text, tell them which parts they must add themselves.

## iOS changes what you type

Autocorrect, auto-capitalization and smart punctuation can alter text after it's typed. Watch for handles, URLs, codes, brand names and lowercase words.

| Fix | Do |
|---|---|
| A few wrong characters at the end | `press_key` `backspace` with `repeat` N, then type again |
| Replace the whole field | `press_key` `a` with `command` to select all, then `type_text` the new value |
| Clear the field | Select all, then `press_key` `backspace` |
| Undo | `press_key` `z` with `command` |
| Copy, cut, paste | `c`, `x`, `v` with `command` |

Don't tap on-screen keyboard keys one by one, and don't long-press backspace; its repeat rate is unpredictable.

## Submitting

`press_key` `enter`, and on-screen Return, Search, Go, Send or Done keys, can submit. In a chat or comment field, `enter` usually **sends**. Treat it as a submission: only press it when the user has approved the exact text.

## Dismiss the keyboard

Use `dismiss`, or tap neutral space above it. Tap a keyboard "Done" key only when it doesn't submit.
