# 🏃‍♂️ RUNNING GUIDE – HANDOFF & PROJECT STATE DOCUMENT

**Document Version:** 8.4  
**Last Updated:** September 23, 2026  
**Repository:** `https://github.com/Gerryagainagain/running_guide.git`  
**Live Application URL:** `https://gerryagainagain.github.io/running_guide/`  
**Local Workspace Path:** `/Users/Gerhard/Desktop/running_guide`

---

## 📌 1. Project Overview & Current Trajectory

- **Current Script Version:** `app.js?v=8.4` (in `index.html` and `dist/index.html`).
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
- **Coach Communication & Tone Directive:** Niemals übertreiben, keine absoluten Schein-Garantien oder Hyperbeln („100% perfekt“, „Lehrbuch-Beispiel“, „exakt 14 Tage“). Analysen stets sachlich, realistisch, nuanciert und mit Blick auf individuelle Variablen (Restermüdung, Belastungssteuerung, Tagesform) formulieren.

---

## 🏔️ 4. Coach Findings & Race Analysis Summary

### A. Trail Côte d’Opale 25k (13.09.2026 – KW 37)
- **Ergebnis:** **24,9 km · 290 Hm in 03:26:38 h** (Laufzeit: 3:01:07 h, Gehzeit: 22:04 min).
- **Herzfrequenz & Pacing:** **Ø 129 bpm** (100% Ziel-GA1-Punktlandung!), Max 165 bpm. 143 spm Ø Cadence, 258 W Ø Leistung.
- **Rennbedingungen & Verlauf:** Stunde 1 mit Gegenwind von vorne rechts & Nieselregen auf den Klippen (HF perfekt diszipliniert bei ~129 bpm gehalten!). Stunden 2 & 3: Wind flachte ab, kein Niesel, flüssiges Laufen über die Sandabschnitte.
- **Regeneration & Rückmeldung:** **Kein Muskelkater (zero DOMS)** nach dem Wettkampf. Nur leichte zentrale Erschöpfung an Tag 1 & 2. Belegt exzellente exzentrische Muskelanpassung & schonende Downhill-Technik. Grünes Licht für den Haupt-Probedrachenlauf (18 km / 900 Hm) in KW 39 (27.09.2026).
- **Fueling:** 2x 500ml Softflasks (Malto + Wasser) + VP-Refill. Magen- & Energiestatus während des gesamten Rennens stabil.

### B. Drachenlauf 2026 (25.10.2026 – KW 43)
- **GPX Track Analysis (`2026-07-10_3098880682_Drachenlauf OG.gpx`):** 24,82 km · 847,6 Hm (GPX) ➔ 1.050 Hm (Offizielles DEM-Höhenmodell).
- **4 Key Climb Blocks:**
  1. KM 3–4: +107.6 Hm auf 1 km
  2. KM 8–13: +211.8 Hm Wellenklettern
  3. KM 17–19: +175.6 Hm Anstieg nach Tiefpunkt (78m)
  4. KM 22–24: +238.2 Hm Drachenfels-Schlussanstieg *(KM 22–23: +147.1 Hm auf 1 km!)*
- **Target Time Plan & Uphill Strategy:** **4:00 bis 4:15 Std.** 
  - **Uphill Power-Hiking Sweetspot:** **120–125 bpm**. Lokale Kraftausdauer erzeugt periphere Atemnot an Steilanstiegen; Puls nicht forcieren, sondern bei 120–125 bpm sauber hiken.
  - **6 Verpflegungsstationen (VPs) & Fueling-Mischung:** VPs bei km 5, 11, 16.5, 18.5, 22.5 & 24. **Taktik:** 1x 500ml Flask mit Malto (30–40g) als magenschonende Basis (alle 15–20 Min. ein Schluck) + VP-Snacks (Bananen ab km 11, Salzstangen am Drachenfels gegen Krämpfe). Minimales Eigengewicht tragen!
- **Tapering-Philosophie & Nuancierung (KW 41–43):**
  - **Prinzip:** Konservieren statt Aufbauen. Das Risiko am Renntag ist nicht ein Mangel an Höhenmetern, sondern Restermüdung in den Beinen.
  - **KW 41 (Übergangswoche, 35 km / 480 Hm):** Hohe Kontrolle! Die 12 km / 400 Hm Key-Einheit darf KEIN kleiner Probedrachenlauf werden (kein Tempojagen, keine harten Downhills).
  - **KW 42 (Echter Taper, 27 km / 300 Hm):** 10 km / 300 Hm nur als kurzer spezifischer Reiz (mit kurzen zügigen Abschnitten) ohne Muskelermüdung.
  - **KW 43 (Rennwoche):** Frische maximieren, Muskeln locker halten.

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
