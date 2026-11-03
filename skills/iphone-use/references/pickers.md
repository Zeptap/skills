# iOS pickers

The bright center row of each wheel is its current value. Changing a wheel saves nothing until you tap Save, Done or the checkmark.

## Time wheels: type the time

Fastest and exact, because Zeptap is a hardware keyboard (seen in Clock › Add Alarm, iOS 26.4.1):

1. Tap the **center** hour or minute. The picker enters typing mode: the digits turn the accent color (orange in Clock).
2. `type_text` the digits, hour then minutes: `645` sets 6:45, `1130` sets 11:30.
3. AM/PM: tap **AM** or **PM** on its wheel. The first tap leaves typing mode; tap again to select it. Letter keys do nothing.
4. Verify the center row shows the time you want.

## Other wheels: tap and drag

1. **Value visible:** tap it, even a faded row near the edge of the wheel. One tap scrolls it to the center.
2. **Farther away:** tap the farthest visible value in the right direction, then read the new screenshot and repeat.
3. **Many steps away:** `drag` slowly on that column (default 800 ms); one step is about 50 px. Finish with taps.
4. Verify the center row after every move.

Circular columns (hours, minutes) wrap around: go the shorter way. Bounded columns (years) stop at their ends. Set dependent columns last: AM/PM after the hour, and year and month before the day.

## Other picker styles

- **Inline calendar:** use the month arrows or the month/year header, then tap the day.
- **Menu picker:** tap the value, then tap the option in the menu.

## Saving

When the change edits something that already exists (an alarm, an event, a setting), show the user the final values before saving.
