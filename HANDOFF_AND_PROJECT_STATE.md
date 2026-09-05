# 🏃‍♂️ RUNNING GUIDE – HANDOFF & PROJECT STATE DOCUMENT

**Document Version:** 6.0  
**Last Updated:** September 5, 2026  
**Repository:** `https://github.com/Gerryagainagain/running_guide.git`  
**Live Application URL:** `https://gerryagainagain.github.io/running_guide/`  
**Local Workspace Path:** `/Users/Gerhard/Desktop/running_guide`

---

## 📌 1. Project Overview & Current Trajectory

- **Current Script Version:** `app.js?v=6.0` (in `index.html` and `dist/index.html`).
- **Auth Gate Status:** Completely removed (site is 100% open without password prompt).
- **UI & Modal Design:** Apple HIG flat card architecture (`1.25rem` padding, `16px` border-radius, single merged metric header cards).
- **Data Persistence:** 2-way automatic synchronization between `defaultInitialRuns` (code defaults) and `localStorage` (`drachenlauf_runs`), preventing data loss or missing weekly elevation totals.

---

## 🛠️ 2. Operational Modus & Deployment Workflows

### Standard Code Modification & Push Cycle
Whenever modifying code (`app.js`, `index.html`, `styles.css`, or `tokens.css`), ALWAYS execute the following sequence:

1. **Apply Changes** in root workspace files.
2. **Bump Script Version Tag** in `index.html` (e.g. `app.js?v=6.1`).
3. **Synchronize Distribution Directory:**
   ```bash
   cp index.html dist/index.html && cp app.js dist/app.js && cp styles.css dist/styles.css && cp tokens.css dist/tokens.css
   ```
4. **Commit & Push to GitHub:**
   ```bash
   git commit -am "Detailed descriptive commit message (vX.Y)" && git push
   ```
   *(Note: Use `BypassSandbox: true` for the `git push` command).*

### Local Storage & LevelDB Data Extraction Protocol
If the user logs a run or workout via Chrome browser that needs to be permanently baked into `defaultInitialRuns`:
- Inspect `/Users/Gerhard/Library/Application Support/Google/Chrome/Default/Local Storage/leveldb`.
- Parse log files (`.log` / `.ldb`) for `drachenlauf_runs` JSON objects.
- Add extracted objects to `defaultInitialRuns` in `app.js` and mark `appleScheduleData[KW]` entries as `done: true`.

---

## 🎨 3. Best Practices & Design Directives

- **Modal Links:** Always format external links (Komoot, Google Maps, Trace de Trail) using cyan brand styling (`var(--color-brand-cyan)`), SVG icons, `target="_blank"`, and `rel="noopener noreferrer"`.
- **Cumulative Elevation Aggregation:** Ensure `renderCleanHeroBar` and `renderCoachWidget` sum up both `actWkm` and `actWhm` from the merged `runsData` array across all run types.
- **1-Page Document Generation:** For Race Day Cheatsheets or Decision Reminders, use `python-docx` with 0.5-inch margins, 8.5–10pt typography, and styled table borders to guarantee output fits on exactly **1 single printed page**.

---

## 🏔️ 4. Coach Findings & Race Analysis Summary

### A. Trail Côte d’Opale 25k (13.09.2026 – KW 37)
- **Specs:** 25,0 km · 250 Hm (Klippentrail, Tiefsand, Dünen).
- **Target Heart Rate:** **HF ~130 bpm (GA1)**.
- **Venlo HM Benchmark (21 km / 108 Hm @ 143 bpm in 2:31:22):** Demonstrates strong 21+ km endurance baseline. Drosselungs-Puls von 143 auf 130 bpm gleicht den höheren Bodenwiderstand im Sand perfekt aus.
- **Estimated Race Time:** **3:05:00 – 3:15:00**.
- **Fueling:** 2x 500ml Softflasks mit Maltodextrin (alle 15–20 Min.) + Marzipan/Feigen ab Std. 1.5.

### B. Drachenlauf 2026 (25.10.2026 – KW 43)
- **GPX Track Analysis (`2026-07-10_3098880682_Drachenlauf OG.gpx`):** 24,82 km · 847,6 Hm (GPX) ➔ 1.050 Hm (Offizielles DEM-Höhenmodell).
- **4 Key Climb Blocks:**
  1. KM 3–4: +107.6 Hm auf 1 km
  2. KM 8–13: +211.8 Hm Wellenklettern
  3. KM 17–19: +175.6 Hm Anstieg nach Tiefpunkt (78m)
  4. KM 22–24: +238.2 Hm Drachenfels-Schlussanstieg *(KM 22–23: +147.1 Hm auf 1 km!)*
- **Target Time Plan:** **4:00 bis 4:30 Std.** (Power Hiking an allen Steilabschnitten).

### C. Belgenbachtrail 30k (März 2027)
- **GPX Track Analysis (`2026-BBT-StrongTrailDeluxe.gpx`):** 30,39 km · 941 Hm.
- **Timeline Strategy:** 5 Monate nach dem Drachenlauf. Peak-Ausdauer aus dem Drachenlauf überträgt sich direkt; nur moderates Erhaltungstraining (25–35 km/Woche) im Winter erforderlich.
- **Cut-Off & Buffer Table:**
  - Cut-Off 1 (km 18 @ 12:25 Uhr): Target 12:05 Uhr (**+20 Min. Puffer**).
  - Cut-Off 2 (km 26,7 @ 13:35 Uhr): Target 13:22 Uhr (**+13 Min. Puffer**).
  - Zielschluss (km 30,4 @ 14:15 Uhr): Target 13:55 Uhr (**+20 Min. Puffer**).
- **Recommendation:** Bedenkenlos buchen (Grünes Licht).

---

## 📂 5. Key File Locations

- `HANDOFF_AND_PROJECT_STATE.md` ➔ `/Users/Gerhard/Desktop/running_guide/HANDOFF_AND_PROJECT_STATE.md`
- `Trail_Cote_dOpale_Race_Day_Cheatsheet.docx` ➔ `/Users/Gerhard/Desktop/running_guide/Trail_Cote_dOpale_Race_Day_Cheatsheet.docx`
- `Belgenbachtrail_30k_Decision_Reminder.docx` ➔ `/Users/Gerhard/Desktop/running_guide/Belgenbachtrail_30k_Decision_Reminder.docx`
- `2026-07-10_3098880682_Drachenlauf OG.gpx` ➔ `/Users/Gerhard/Desktop/running_guide/2026-07-10_3098880682_Drachenlauf OG.gpx`
- `belgenbachtrail.gpx` ➔ `/Users/Gerhard/Desktop/running_guide/scratch/belgenbachtrail.gpx`
