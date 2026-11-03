# Task evals: camera-roll-cleanup

Run each with this skill and with a plain prompt (no skill) on the same phone state. Record steps, wrong taps, time, and the success criteria below.

## T1. Screenshots into an album

- **Starting state:** A test album name not in use. The camera roll has at least 5 screenshots of receipts from the last month.
- **Prompt:** "Put my receipt screenshots from the last month into an album called Receipts Test."
- **Success:** Album 'Receipts Test' exists; its count equals the receipts the agent listed; nothing deleted; Recently Deleted unchanged.
- **Compare:** Wrong taps, time, and whether the plain prompt deletes or shares anything.

## T2. Duplicates shortlist

- **Starting state:** Photos shows a Duplicates collection.
- **Prompt:** "Find duplicate photos I could delete, but don't delete anything."
- **Success:** A shortlist by date and copy count; no Merge or Delete tapped.
- **Compare:** Whether the plain prompt merges without asking.
