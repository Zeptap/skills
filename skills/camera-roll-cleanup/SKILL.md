---
name: camera-roll-cleanup
description: Tidy the Photos library on the user's real iPhone with Zeptap - sort screenshots into albums (receipts, tickets, recipes), make a trip album by date and place, and shortlist likely duplicates and blurry shots for review. Nothing is deleted unless the user approves the exact photos, and Photos' own Duplicates tool is used where it exists. Without Zeptap it gives the album plan and the steps. Use for "clean up my camera roll", "my iPhone storage is full of photos", "organise my screenshots", "make an album of my Lisbon trip".
---

# Camera roll cleanup

Organise the user's Photos library into albums and hand back a **shortlist** of photos they might remove. Builds on `iphone-use`: its loop, connection states and safety rules apply throughout.

**Verified on a phone:** nothing yet. Photos labels below come from Apple's iOS 26 user guide (checked 2026-11-03); steps marked *(unverified)* haven't been run.

## Use it for

- Screenshots into albums: Receipts, Tickets, Recipes, or names the user gives.
- One trip album, by place and dates.
- A shortlist of duplicates and blurry shots for the user to review.

Hand off: freeing storage from apps or messages is Settings › General › iPhone Storage (`iphone-use`). Editing or sharing photos is outside this skill.

## Without Zeptap

Write the album plan (album names, what goes in each, the date range and place for a trip album) and the manual steps from **Procedure**, then send `iphone-use`'s state A message with `utm_campaign=camera-roll-cleanup`.

## Intake

Ask in one message, with these defaults:

- **Scope:** which photos to look at (default: screenshots from the last 12 months). Stay inside it.
- **Albums:** names and what goes in each (default: Receipts, Tickets, Recipes, Other).
- **Trip:** place and dates, if a trip album is wanted.
- **Removal:** whether removing anything is in scope at all (default: no, shortlist only).

## Procedure

Every branch builds albums the same way:

- **Photos layout:** the bottom bar holds **Library**, **Collections** and **Search** *(unverified)*.
- **New album:** Collections › Albums › **+** › **New Album** › type the name › **Create** *(unverified)*. Check first that an album with that name doesn't already exist.
- **Add photos:** **Select** › tap each photo (or drag across thumbnails to select a run) › **Share** › **Add to Album** › the album *(unverified)*. The selection counter at the top must match the number you meant to add.

### Screenshots into albums

1. Open the screenshots: Collections › **Media Types** › **Screenshots** *(unverified: Apple's guide doesn't confirm the location in iOS 26)*.
2. For each screenshot in scope, open it and read it (`find_text`) to classify it. Collections › **Utilities** › **Receipts** already groups many receipts *(unverified)*. Describe only what the task needs (merchant, date), never the people in a photo.
3. Add each group to its album in batches of up to 20.
4. Done when every screenshot in scope is in one album or listed as "left unsorted", and each album's count matches your tally.

### Trip album

1. Search › type the place, or the place and the month (`Lisbon June 2025`) › **Search** *(unverified)*.
2. Check the results against the dates the user gave; drop anything outside them.
3. Create the album and add the results.
4. Done when the album's count matches the photos found for those dates.

### Duplicates and blurry shots

1. Collections › **Utilities** › **Duplicates** *(unverified)*. When the collection is missing, Photos has found none.
2. Build the **shortlist**: for each duplicate set, the date and how many copies. For blurry shots there's no Photos tool; list candidates you saw while working, with dates.
3. Show the shortlist and stop. Merging or deleting is a final action for the exact items the user approves: **Merge** › **Merge [n] Items** keeps the best copy and moves the rest to Recently Deleted *(unverified)*.
4. Done when the user has the shortlist and either approved specific items or declined.

## Stops

- Any **Merge**, **Delete** or **Remove from Album**: show the exact photos and wait for a yes.
- **Recently Deleted** and **Hidden** open with Face ID or the passcode: user-only. Deleted photos stay in Recently Deleted for 30 days.
- A **Share** sheet: choose **Add to Album** only; every other target sends the photos somewhere.

## Recovery

| Problem | Do |
|---|---|
| "Add to Album" isn't in the share sheet | Scroll the sheet's action list down, or add from inside the album: **+** after the last photo › select › **Done** *(unverified)* |
| Selection mode won't end | **Cancel** at the top, then check nothing was added by mistake |
| Album already exists | Use it, or ask for a new name |
| A huge selection is slow | Batches of 20, verifying the count after each |

## Report

- Each album: its name and photo count, read from the album.
- The shortlist, by date, and what the user decided.
- What was deleted, if anything, and that it's in Recently Deleted for 30 days.
