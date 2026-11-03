# Text entry on iOS

Zeptap types through a Bluetooth keyboard, so iOS treats it as a **hardware keyboard**: no on-screen keyboard appears, and focus shows only as a blinking cursor. Observed on iOS 26.4.1, 2026-11-03.

## Type

1. **Focus:** tap the center of the field. Check the screenshot for the cursor, or a placeholder that changed. In search fields that keep old text, also press `a` with `command` (select all) so the new text replaces it.
2. **Type** with `type_text` (about 16 characters a second). `\n` makes a new line where the field allows one.
3. **Verify** the returned screenshot: the right field, the full text, as typed. If the result says `nothing on screen changed`, the text went nowhere: focus the field and type again.

## What iOS changes

Auto-Capitalisation, Auto-Correction and the "." shortcut are on by default for hardware keyboards (Settings › General › Keyboard › Hardware Keyboard), and Smart Punctuation applies too:

| Typed | Shows |
|---|---|
| `i dont` | `I don't` |
| `teh`, `recieve` | `The`, `receive` |
| `"quoted"`, `it's` | curly quotes and apostrophe |
| `--` | `—` |
| two spaces after a word | `. ` |
| email addresses, `its` | unchanged |

Prose survives this. **Exact strings** (handles, codes, URLs, deliberate spellings, lowercase brand names) need checking after typing, or pasting instead.

## Exact or non-ASCII text: paste

`type_text` takes US-keyboard ASCII only; any other character rejects the whole call. For emoji, accents, other scripts, or text autocorrect must not touch:

1. If you have a shell on the Mac running Zeptap: save the user's clipboard (`pbpaste > <file>`), then `pbcopy` the exact text.
2. Wait about 2.5 s (Universal Clipboard needs the same Apple Account on both devices).
3. Focus the field on the phone and `press_key` `v` with `command`.
4. Verify the pasted text, then restore the user's clipboard (`pbcopy < <file>`).

Seen working: `café ✅ नमस्ते` arrived exactly. Without a shell, write ASCII (straight quotes, `-`, `Rs`/`EUR`) and tell the user which characters they'll add themselves.

## Emoji without paste

1. `press_key` `space` with `control`: the emoji keyboard opens with a **Search Emoji** field.
2. Tap **Search Emoji**, then type the emoji's name (typing before that goes into the text field).
3. Tap the result. It's inserted at the cursor.
4. Tap the text body to leave emoji search. `control`+`space` doesn't close it; it types a space.

## Fix typed text

| Fix | Do |
|---|---|
| A few wrong characters at the end | `press_key` `backspace` with `repeat` N, then type again |
| Replace the whole field | `a` with `command`, then `type_text` |
| Clear the field | `a` with `command`, then `backspace` |
| Undo | `z` with `command` |
| Copy, cut, paste | `c`, `x`, `v` with `command` |

## Submitting

`press_key` `enter` submits most fields; in a chat or comment field it **sends**. Press it only after the user approved the exact text.
