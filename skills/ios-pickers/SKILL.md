---
name: ios-pickers
description: Set iOS wheel pickers (time, date, timer, value wheels) and inline date pickers exactly on an iPhone driven by Zeptap. Use when setting an alarm, timer, date, time, or any spinning wheel control.
---

# iOS pickers

Wheels carry momentum, so a fast swipe overshoots. Move them with taps or slow drags, one column at a time.

## Read the current value

The bright center row of each column is its current value. **Never tap the center row:** it does nothing, or opens a numeric keypad.

## Set a column

1. **Target visible:** if the wanted value is on an off-center row, tap it. The wheel scrolls it to the center.
2. **Target further away:** tap the farthest visible value in the right direction, then read the new screenshot and repeat.
3. **Many steps away:** `drag` slowly on the column (default 800 ms). One step is about 50 px. Then finish with taps.
4. Verify the center row after every move.

## Columns differ

- **Circular** columns (minutes, hours) wrap around. Go the shorter way.
- **Bounded** columns (years, some dates) stop at the ends. Tapping a blank row does nothing.
- Don't assume one column behaves like the next.

## Order

Set dependent columns last: AM/PM after the hour and minute, because crossing 11 and 12 can flip AM/PM. In dates, set the year and month before the day, since the number of days changes.

## Other picker styles

- **Inline calendar (date pickers):** use the month arrows or the month/year header, then tap the day.
- **Menu pickers:** tap the value, then tap the option in the menu that opens.
- **A numeric keypad opened by accident:** tap a neutral spot, such as the sheet title, to close it. Avoid X or the checkmark, which cancel or save.

## Saving

Changing a wheel usually saves nothing until you tap Save, Done or a checkmark. When the change edits an existing alarm, event or setting, show the user the final values before saving.
