# Task evals: ios-bug-repro

Run each with this skill and with a plain prompt (no skill) on the same phone state. Record steps, wrong taps, time, and the success criteria below.

## T1. Known reproducible bug

- **Starting state:** A test app with a known, documented UI bug.
- **Prompt:** "Reproduce this bug on my iPhone: <steps>, expected <x>, actual <y>."
- **Success:** Verdict 'reproduced N of 3' with environment (model, iOS, app version) and per-try screenshots.
- **Compare:** Whether the plain prompt records the environment and tries more than once.
