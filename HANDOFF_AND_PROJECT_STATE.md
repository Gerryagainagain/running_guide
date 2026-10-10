# 🏃‍♂️ RUNNING GUIDE – HANDOFF & PROJECT STATE DOCUMENT

**Document Version:** 9.14  
**Last Updated:** October 10, 2026  
**Repository:** `https://github.com/Gerryagainagain/running_guide.git`  
**Live Application URL:** `https://gerryagainagain.github.io/running_guide/`  
**Local Workspace Path:** `/Users/Gerhard/Desktop/running_guide`

---

## 📌 1. Project Overview & Current Trajectory

- **Current Script Version:** `app.js?v=9.14` (in `index.html` and `dist/index.html`).
- **Auth Gate Status:** Active (Apple HIG Modal: *"Was riss Hermännsche am Strand von Charita?"* / Passwort: `achilles`).
- **UI & Modal Design:** Apple HIG flat card architecture (`1.25rem` padding, `16px` border-radius, single merged metric header cards).
- **Data Persistence:** 2-way automatic synchronization between `defaultInitialRuns` (code defaults) and `localStorage` (`drachenlauf_runs`), preventing data loss or missing weekly elevation totals.
- **Tapering Principle Integration (v9.8):** Core rule *„Bewegung erhalten, Beine lockern, Laufgefühl prüfen, keine Ermüdung erzeugen“* active across KW 40–43 phase descriptions, coach headlines, and workout modal popups.
- **Soll- vs. Ist-Architektur (v9.10):** Die ursprünglichen Soll-Planwerte in `appleScheduleData` sowie in der Progressionstabelle bleiben als Planvorgaben unberührt. Die absolvierten Daten sind in `defaultInitialRuns` / `runsData` gespeichert. In den Modals wird dadurch der direkte Soll-Ist-Vergleich korrekt dargestellt.
- **KW 41 Auftakt geloggt (v9.11):** Di 06.10 Rampen Ddorf (8,2 km · 106 Hm · 01:08:00 h · 116 bpm Ø) erfasst und synchronisiert.
- **KW 41 Wochenend-Tausch (v9.12):** Samstag (10.10) auf 12,0 km / 400 Hm Longrun Erkrath und Sonntag (11.10) auf 6,0 km / 0 Hm Locker getauscht. Hero-Bar und Progressionstabelle synchronisiert.
- **KW 41 Zweiter Lauf geloggt (v9.13):** Do 08.10 Locker Rhein (8,0 km · 13 Hm · 01:02:00 h · 105 bpm Ø · 7:45 min/km) erfasst und synchronisiert. Ideal im tiefen GA1-Regenerationsfenster.
- **KW 41 Kern-Longrun geloggt (v9.14):** Sa 10.10 Longrun Erkrath (12,0 km · 400 Hm · 01:52:00 h · 115 bpm Ø · 9:20 min/km) erfasst und synchronisiert. Exakt im GA1-Soll (105–118 bpm), 400 Hm ohne kardiovaskuläre Drift absolviert.

---

## 🛠️ 2. Operational Modus & Deployment Workflows

### Standard Code Modification & Push Cycle
Whenever modifying code (`app.js`, `index.html`, `styles.css`, or `tokens.css`), ALWAYS execute the following sequence:

1. **Apply Changes** in root workspace files.
2. **Bump Script Version Tag** in `index.html` (e.g. `app.js?v=8.8`).
3. **Synchronize Distribution Directory:**
   ```bash
   cp index.html dist/index.html && cp app.js dist/app.js && cp styles.css dist/styles.css && cp tokens.css dist/tokens.css
   ```
4. **Commit & Push to GitHub:**
   ```bash
   git commit -am "Detailed descriptive commit message (vX.Y)" && git push
   ```
   *(Note: SSH over port 443 with `MacBook Pro` key is fully configured; `git push` runs seamlessly without password prompts).*

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

### A2. Probedrachenlauf Siebengebirge (27.09.2026 – KW 39)
- **Ergebnis:** **18,0 km · 710 Hm in 03:02:59 h** (Ø Pace: 10:10 min/km, Laufzeit: 1:45:12 h [57.5%], Gehzeit: 1:17:47 h [42.5%]).
- **Herzfrequenz & Belastung:** **Ø 126 bpm** (Max 156 bpm). 75 % der Zeit in Z3 (120–137 bpm), 4 % in Z4 (138–154 bpm), 0 % in Z5. Punktgenaue Einhaltung der Power-Hiking-Vorgabe (120–125 bpm) an den Anstiegen.
- **Leistung & Kadenz:** **209 W Ø Leistung** (Max 518 W), **123 spm Ø Cadence**.
- **Physiologischer Training Effect:** Aerob 4,0 (Starker aerober Ausdauerreiz), Anaerob 0,0. Stabile Homöostase ohne späten Leistungseinbruch.

### A3. KW 40 Zoutelande & Tapering (28.09 – 04.10.2026)
- **Einheiten:**
  - 29.09 (Di): 7,0 km · 116 Hm in 00:57:08 h (Pace: 8:10 min/km, Ø 120 bpm) – Rampen Ddorf
  - 01.10 (Do): 8,0 km · 40 Hm in 01:07:00 h (Pace: 8:23 min/km, Ø 111 bpm) – Locker Rhein
  - 03.10 (Sa): 17,0 km · 409 Hm in 02:45:00 h (Pace: 9:42 min/km, Ø 115 bpm) – Trail Zoutelande Dünen Longrun
  - 04.10 (So): 5,0 km · 79 Hm in 00:44:18 h (Pace: 8:52 min/km, Ø 105 bpm) – Strand & Dünen Auslaufen Zoutelande
- **Wochensumme:** **37,0 km · 644 Hm** (alle 4 Läufe absolviert).
- **Physiologische Analyse:** Strikte Einhaltung des GA1-Fensters (105–115 bpm) beim Dünen-Longrun und Auslaufen. Keine ZNS- oder periphere Überlastung; vollständige Umsetzung des Tapering-Prinzips.

### A4. KW 41 Tapering Erkrath (05.10 – 11.10.2026)
- **Einheiten:**
  - 06.10 (Di): 8,2 km · 106 Hm in 01:08:00 h (Pace: 8:18 min/km, Ø 116 bpm) – Rampen Ddorf
- **Physiologische Analyse:** Exakte Einhaltung des oberen GA1-Fensters (105–118 bpm) trotz Höhenmetern. Reiz gesetzt, ohne ZNS- oder Muskelermüdung zu generieren.

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
- **Individuelle Pulskalibrierung (Athleten-Feedback):**
  - **Echtes GA1 / Sprechgrenze (VT1):** **105–118 bpm** (in diesem Fenster ist flüssige Unterhaltung problemlos möglich, siehe 110 bpm Läufe).
  - **GA2 / Übergangsbereich:** Ab **125–132 bpm** wird die Sprechgrenze überschritten (Vertiefung der Atmung, kein ruhiges Gespräch mehr).
  - **Probedrachen-Ziel:** Flachpassagen bei **110–120 bpm** halten, Steilanstiege im Power-Hiking bei **120–125 bpm** deckeln.

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
