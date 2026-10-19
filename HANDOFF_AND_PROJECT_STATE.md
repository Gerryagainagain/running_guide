# 🏃‍♂️ RUNNING GUIDE – HANDOFF & PROJECT STATE DOCUMENT

**Document Version:** 9.32  
**Last Updated:** October 19, 2026  
**Repository:** `https://github.com/Gerryagainagain/running_guide.git`  
**Live Application URL:** `https://gerryagainagain.github.io/running_guide/`  
**Local Workspace Path:** `/Users/Gerhard/Desktop/running_guide`

---

## 📌 1. Project Overview & Current Trajectory

- **Current Script Version:** `app.js?v=9.32` (in `index.html` and `dist/index.html`).
- **Auth Gate Status:** Active (Apple HIG Modal: *"Was riss Hermännsche am Strand von Charita?"* / Passwort: `achilles`).
- **UI & Modal Design:** Apple HIG flat card architecture (`1.25rem` padding, `16px` border-radius, single merged metric header cards).
- **Data Persistence:** 2-way automatic synchronization between `defaultInitialRuns` (code defaults) and `localStorage` (`drachenlauf_runs`), preventing data loss or missing weekly elevation totals.
- **Tapering Principle Integration (v9.8):** Core rule *„Bewegung erhalten, Beine lockern, Laufgefühl prüfen, keine Ermüdung erzeugen“* active across KW 40–43 phase descriptions, coach headlines, and workout modal popups.
- **Soll- vs. Ist-Architektur (v9.10):** Die ursprünglichen Soll-Planwerte in `appleScheduleData` sowie in der Progressionstabelle bleiben als Planvorgaben unberührt. Die absolvierten Daten sind in `defaultInitialRuns` / `runsData` gespeichert. In den Modals wird dadurch der direkte Soll-Ist-Vergleich korrekt dargestellt.
- **KW 41 Auftakt geloggt (v9.11):** Di 06.10 Rampen Ddorf (8,2 km · 106 Hm · 01:08:00 h · 116 bpm Ø) erfasst und synchronisiert.
- **KW 41 Wochenend-Tausch (v9.12):** Samstag (10.10) auf 12,0 km / 400 Hm Longrun Erkrath und Sonntag (11.10) auf 6,0 km / 0 Hm Locker getauscht. Hero-Bar und Progressionstabelle synchronisiert.
- **KW 41 Zweiter Lauf geloggt (v9.13):** Do 08.10 Locker Rhein (8,0 km · 13 Hm · 01:02:00 h · 105 bpm Ø · 7:45 min/km) erfasst und synchronisiert. Ideal im tiefen GA1-Regenerationsfenster.
- **KW 41 Kern-Longrun geloggt (v9.14):** Sa 10.10 Longrun Erkrath (12,0 km · 400 Hm · 01:52:00 h · 115 bpm Ø · 9:20 min/km) erfasst und synchronisiert. Exakt im GA1-Soll (105–118 bpm), 400 Hm ohne kardiovaskuläre Drift absolviert.
- **KW 41 Abschluss geloggt (v9.15):** So 11.10 Wandern als Ersatz-Einheit (4,5 km · 100 Hm · 100 bpm Ø) erfasst und synchronisiert. Gelenkschonender Ausklang der Tapering-Woche 41 bei regenerativer Herzfrequenz.
- **KW 42 Auftakt geloggt (v9.16):** Di 13.10 Rampen Ddorf (8,0 km · 88 Hm · 01:02:00 h · 117 bpm Ø · 7:45 min/km) erfasst und synchronisiert. Sauber im GA1-Fenster (105–118 bpm) absolviert.
- **KW 42 Zweiter Lauf geloggt (v9.17):** Do 15.10 Locker Rhein (6,0 km · 0 Hm · 00:43:42 h · 113 bpm Ø · 7:17 min/km) erfasst und synchronisiert. Tief im GA1-Bereich (105–118 bpm) absolviert. Tapering-Zustand stabil.
- **Raceday Modal Bekleidungstipp integriert (v9.18):** Im Detail-Modal für den Drachenlauf (KW 43 So 25.10) den Wetter- und Bekleidungshinweis (7–13 °C Prognose: „Vor dem Start nicht zu warm einpacken – leicht frösteln am Start ist die richtige Betriebstemperatur“) sowie Zielzeitkorridor (3:45–4:15 h) und korrekte Distanzangabe (26 km / 1.250 Hm) ergänzt.
- **KW 42 Wochenend-Tausch & KT-Spezifikation (v9.19):** Freitag (16.10) auf „Stabi & Rumpf (Oberkörper)“ ohne Beinbelastung präzisiert. Samstag (17.10) auf 10,0 km / 300 Hm Longrun Erkrath und Sonntag (18.10) auf 4,0 km / 0 Hm Lockertrab getauscht. Hero-Bar und Progressionstabelle synchronisiert.
- **Drachenlauf Modal Fueling-Setup (Lösung A) & Sonnenschutz-Entfernung (v9.20):** Im Detail-Modal für den Drachenlauf (KW 43 So 25.10) das Verpflegungs-Setup auf Lösung A (2× 500 ml Malto-Flasks mit je 40–45 g Malto + Prise Salz am Körper, Wasser an den 6 VPs) festgelegt. Snack-Reserve auf 3–4 Feigen & 30–40 g Marzipan angepasst. Sonnenspray-Hinweis für den Herbstlauf vollständig entfernt.
- **Drachenlauf Zielzeit-Harmonisierung (v9.21):** Im Workout-Modal für den Drachenlauf (KW 43 So 25.10) die Schätzdauer (`estDur`) von veralteten 4:15–4:30 Std. auf die aktuelle Realdaten-Kalkulation (3:45–4:00 Std. bei 7–13 °C und trockenem Geläuf; Puffer bis 4:15 Std.) korrigiert. Soll-Einheiten-Card, Tips-Liste und Rennspielplan synchronisiert.
- **Drachenlauf 4-Phasen-Rennstrategie-Block im Modal integriert (v9.22):** Vollwertigen interaktiven Rennstrategie-Block (`drachenlaufStrategyBlockHtml`) mit Streckenabschnitten, Zeitmarken (3:45–4:00 h Zielkorridor), VP-Stationen, Witterungs-Banner und Siebengebirge-Panorama ins Detail-Modal für Sonntag 25.10. eingebaut.
- **Drachenlauf Wetterprognose auf 7–10 °C sonnig geschärft (v9.23):** Witterungs- und Bekleidungsparameter im Drachenlauf-Modal, Tips-Array und Rennstrategieblock präzisiert (7–10 °C sonnig statt 7–13 °C trocken; Sonnenmaximum ~10 °C am Petersberg-Schlussanstieg). Optimale physiologische Bedingungen ohne kardiovaskuläre Hitzedrift.
- **System-Regel GEMINI.md Sektion 6 implementiert (v9.24):** Anti-Absolutismus & Trade-Off-Direktive fest verankert (Verbot von Scheinsicherheiten wie „identisch“, „völlig ausreichend“, „Königsklasse“, „kein Verlust“; strikte Pflicht zum Ausweisen des physiologischen Preises/Kompromisses bei Vereinfachungen).
- **Strategischer Rahmen 2027–2029 in Sektion 4.D verankert (v9.25):** Verbindlicher 3+1-Wochenrhythmus (3 Läufe / 25–30 km + 1 Studio-Krafttraining), 50/50-Longrun-Modell (Erkrath vs. Rhein ab Haustür), 2+1-Event-Gerüst (Belgenbach, Alpentrail im Familienurlaub, Drachenlauf + lokale 10er) und Trade-Off-/Periodisierungsregeln dokumentiert.
- **KW 42 Kern-Longrun Erkrath geloggt (v9.27):** Sa 17.10 Longrun Erkrath (13,3 km · 333 Hm · 01:35:00 h · 116 bpm Ø · 7:09 min/km) erfasst, synchronisiert und in `defaultInitialRuns` / `runsData` hinterlegt. Wochenstand KW 42: 27,3 km · 421 Hm in 3 Einheiten.
- **KW 42 Garmin-Präzisierung Sa 17.10 Longrun Erkrath (v9.28):** Realdaten anhand von Garmin-Aktivitätsdiagramm nachjustiert: Exakte Nettozeit 01:35:41 h (Pace 7:12 min/km), Ø 115 bpm (GA1), Max 158 bpm (isolierter Peak bei 1:16:33 h), Training Effect: 3,1 Aerob / 0,0 Anaerob.
- **Drachenlauf Modal 2-Phasen-Rennspielplan & Pacing-Freigabe (v9.29):** Detail-Modal für den Drachenlauf (KW 43 So 25.10) auf finalen Rennplan aktualisiert: KM 0–16 kontrolliert bei 120–125 bpm (Glykogensicherung an Ölberg & Löwenburg); Drachenfels-Uphill Freigabe 130–135 bpm; Drachenfels-Downhill als Laktat-Flush (<120 bpm); Petersberg-Schlussanstieg All-in im Power-Hiking (130–135 bpm, Deckel <140 bpm); 2,7 km sanfter Zielabstieg als Easy Rolling mit 5:30–5:45 min/km.
- **Drachenlauf Modal Tape-Cheatsheet mit Durchgangszeiten (v9.30):** Neues, hochkontrastiges Unterarm- / Flask-Tape-Widget mit den 4 Schlüssel-Split-Korridoren (KM 5 @ 0:45 h, KM 11 @ 1:38 h, KM 18,5 @ 2:45 h, KM 23,3 @ 3:30 h, Ziel < 4:00 h) direkt ins Detail-Modal für den Renntag eingebunden. Ergänzt um die goldene Regel: *„Der Puls hat immer Vorrang vor der Uhr!“*
- **Drachenlauf Wetterprognose auf 8–12 °C, bewölkt & ggf. Nieselregen aktualisiert (v9.31):** Witterungs- und Bekleidungsparameter im Drachenlauf-Modal, Tips-Array und Rennstrategieblock präzisiert (8–12 °C, bewölkt, ggf. etwas Nieselregen statt 7–10 °C sonnig). Taktischer Fokus: Optimale Hautkühlung, Kappe gegen Niesel, erhöhte Aufmerksamkeit auf nassen Wurzeln/Steinen.
- **Drachenlauf Wetterprognose auf Herbsttief & Böen 7–8 Bft aktualisiert (v9.32):** Superforecast Königswinter für So 25.10. eingepflegt: 10–11 °C (Windchill gefühlt ~7 °C), Wind 4 Bft mit Böen bis 74 km/h auf exponierten Kuppen (Ölberg/Löwenburg), einsetzender Regen ab 10h (mittags bis 7 mm). Tips-Array, Rennspielplan und Witterungsbanner im Modal aktualisiert: Profilschuhe mit Stollen (Schlamm/Traktionsverlust), winddichte Weste/Jacke, Kappe, leichte Handschuhe. Zielzeitkorridor mit Wind- und Bodenpuffer auf 3:50–4:05 h (max. 4:15 h) angepasst.

---

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
  - 08.10 (Do): 8,0 km · 13 Hm in 01:02:00 h (Pace: 7:45 min/km, Ø 105 bpm) – Locker Rhein
  - 10.10 (Sa): 12,0 km · 400 Hm in 01:52:00 h (Pace: 9:20 min/km, Ø 115 bpm) – Longrun Erkrath
  - 11.10 (So): 4,5 km · 100 Hm in 01:00:00 h (Ø 100 bpm) – Wandern (Ersatz-Einheit)
- **Wochensumme:** **32,7 km · 619 Hm** (alle Einheiten im tiefen bis mittleren GA1 absolviert).
- **Physiologische Analyse:** Exakte Einhaltung des GA1-Fensters (105–118 bpm) bei allen Einheiten. Reiz gesetzt, ohne ZNS- oder Muskelermüdung zu generieren.

### A5. KW 42 Tapering Erkrath (12.10 – 18.10.2026)
- **Einheiten:**
  - 13.10 (Di): 8,0 km · 88 Hm in 01:02:00 h (Pace: 7:45 min/km, Ø 117 bpm) – Rampen Ddorf
  - 15.10 (Do): 6,0 km · 0 Hm in 00:43:42 h (Pace: 7:17 min/km, Ø 113 bpm) – Locker Rhein
  - 17.10 (Sa): 13,3 km · 333 Hm in 01:35:41 h (Pace: 7:12 min/km, Ø 115 bpm, Max 158 bpm, TE 3,1 Aerob / 0,0 Anaerob) – Longrun Erkrath (easy Wald, bisschen nass)
  - 18.10 (So): Lockertrab (4,0 km · 0 Hm) – *steht noch aus*.
- **Zwischenstand KW 42:** **27,3 km · 421 Hm** in 3 Läufen absolviert.
- **Physiologische Analyse (Garmin-Diagramm-Verifikation):**
  - **Kardiovaskuläre Baseline:** **Ø 115 bpm** über 13,3 km und 333 Hm (Pace 7:12 min/km) liegt mitten im kalibrierten GA1-Kernbereich (105–118 bpm VT1).
  - **Spitzen & Belastungsdynamik:** Der Maximalpuls von 158 bpm trat als isolierte Nadelspitze bei 1:16:33 h auf (kurzer steiler Rampenimpuls bzw. Kadenz-Kopplung), gefolgt von sofortiger Rückkehr auf das Grundniveau. Ansonsten blieb das Profil stabil zwischen 110 und 125 bpm gedeckelt.
  - **Vagale Erholung & Drift-Freiheit:** In Bergabpassagen und Geh-/Lockerungsphasen fällt der Puls zügig auf unter 100–105 bpm ab. Keine kardiovaskuläre Drift gegen Ende der Einheit erkennbar.
  - **Training Effect:** Mit **3,1 Aerob** und **0,0 Anaerob** wurde exakt der beabsichtigte Formerhaltungs-Reiz gesetzt, ohne jegliche Laktat-Schuld oder metabolischen Ermüdungsrückstand für die finale Rennwoche (KW 43) zu hinterlassen.

### B. Drachenlauf 2026 (25.10.2026 – KW 43)
- **GPX Track Analysis (`2026-07-10_3098880682_Drachenlauf OG.gpx`):** 24,82 km · 847,6 Hm (GPX) ➔ 1.050 Hm (Offizielles DEM-Höhenmodell).
- **4 Key Climb Blocks:**
  1. KM 3–4: +107.6 Hm auf 1 km
  2. KM 8–13: +211.8 Hm Wellenklettern
  3. KM 17–19: +175.6 Hm Anstieg nach Tiefpunkt (78m)
  4. KM 22–24: +238.2 Hm Drachenfels-Schlussanstieg *(KM 22–23: +147.1 Hm auf 1 km!)*
- **Target Time Plan & Uphill Strategy (2-Phasen-Pacing & Easy Rolling):** **3:45 bis 4:00 Std. (bei 8–12 °C & bewölkt/feucht; Puffer bis 4:15 Std.)** 
  - **Phase 1 (KM 0–16 · Ölberg & Löwenburg):** Uphill Power-Hiking kontrolliert bei **120–125 bpm** (Glykogenspeicher schonen, Laktat-Gleichgewicht wahren).
  - **Drachenfels-Uphill (KM 16–18):** Erste Freigabe auf **130–135 bpm** im Power-Hiking.
  - **Drachenfels-Downhill (KM 18–19):** Moderater, gut laufbarer Abstieg – als **„Laktat-Flush“** nutzen (Puls aktiv auf **<120 bpm** fallen lassen, Beine mit hoher Trittfrequenz rollen lassen, aerob Laktat abbauen). An VP 3 (km 16,5) und VP 4 (Drachenfels) Cola & Salzstangen tanken!
  - **Phase 2 (KM 19–23,3 · Petersberg-Schlussanstieg):** Scharfrichter-Uphill mit **130–135 bpm** im maximalen Power-Hiking (Hand auf Oberschenkel). Energetisch den Tank leerfahren, aber **Pulsdeckel <140 bpm** strikt einhalten, um anaerobe Muskelkrämpfe/Blockaden zu verhindern.
  - **Finish-Phase (KM 23,3–26 · Zielabstieg):** **Easy Rolling** – harmloses Gefälle (4–5 %) ohne Bremskräfte mit **5:30–5:45 min/km** aktiv und schmerzfrei ins Ziel laufen.
  - **6 Verpflegungsstationen (VPs) & Fueling (Lösung A):** VPs bei km 5, 11, 16.5, 18.5, 22.5 & 24. **Taktik:** 2x 500ml Flasks mit Malto (je 40–45g) in der Weste + Wasser & VP-Snacks (Bananen ab km 11, Salzstangen am Drachenfels, Cola ab km 16.5). Minimales Eigengewicht tragen!
  - **Tapering-Philosophie & Nuancierung (KW 41–43):**
    - **Prinzip:** Konservieren statt Aufbauen. Das Risiko am Renntag ist nicht ein Mangel an Höhenmetern, sondern Restermüdung in den Beinen.
    - **KW 41 (Übergangswoche, 35 km / 480 Hm):** Hohe Kontrolle! Die 12 km / 400 Hm Key-Einheit darf KEIN kleiner Probedrachenlauf werden (kein Tempojagen, keine harten Downhills).
    - **KW 42 (Echter Taper, 27 km / 300 Hm):** 10 km / 300 Hm nur als kurzer spezifischer Reiz (mit kurzen zügigen Abschnitten) ohne Muskelermüdung.
    - **KW 43 (Rennwoche):** Frische maximieren, Muskeln locker halten.
- **Individuelle Pulskalibrierung (Athleten-Feedback):**
  - **Echtes GA1 / Sprechgrenze (VT1):** **105–118 bpm** (in diesem Fenster ist flüssige Unterhaltung problemlos möglich, siehe 110 bpm Läufe).
  - **GA2 / Übergangsbereich:** Ab **125–132 bpm** wird die Sprechgrenze überschritten (Vertiefung der Atmung, kein ruhiges Gespräch mehr).
  - **Renntag-Pacing:** Flachpassagen bei **115–125 bpm** halten, Steilanstiege Phase 1 bei **120–125 bpm**, Phase 2 (Drachenfels & Petersberg) bei **130–135 bpm** (Deckel <140 bpm).

### C. Belgenbachtrail 30k (März 2027)
- **GPX Track Analysis (`2026-BBT-StrongTrailDeluxe.gpx`):** 30,39 km · 941 Hm.
- **Timeline Strategy:** 5 Monate nach dem Drachenlauf. Peak-Ausdauer aus dem Drachenlauf überträgt sich direkt; nur moderates Erhaltungstraining (25–35 km/Woche) im Winter erforderlich.
- **Cut-Off & Buffer Table:**
  - Cut-Off 1 (km 18 @ 12:25 Uhr): Target 12:05 Uhr (**+20 Min. Puffer**).
  - Cut-Off 2 (km 26,7 @ 13:35 Uhr): Target 13:22 Uhr (**+13 Min. Puffer**).
  - Zielschluss (km 30,4 @ 14:15 Uhr): Target 13:55 Uhr (**+20 Min. Puffer**).
- **Recommendation:** Bedenkenlos buchen (Grünes Licht).

### D. Strategischer 4-Jahres-Rahmen 2027–2030 (Sustainable Longevity & Familien-Sync)
- **Kern-Fundament (3+1-Formel):** 3 Laufeinheiten (25–30 km/Woche) + 1 festes Studio-Krafttraining (45–60 Min.).
  - *Dienstag (früh):* 7–8 km hügelig/Rampen (Schrittfrequenz, Uphill-Kraft; vor der Familie/Arbeit beendet um 07:15 Uhr).
  - *Mittwoch:* Ruhetag / passive Erholung.
  - *Donnerstag (früh):* 7–8 km flach am Rhein, strikt GA1 (105–115 bpm). Null Impact auf den Tag.
  - *Freitag:* **Krafttraining Studio (45–60 Min.):**
    - Sehnenpanzerung via Heavy Slow Resistance (HSR) an Waden/Beinpresse (Achillessehnenschutz).
    - Exzentrische Quadrizeps-Konditionierung (Bulgarian Split Squats / Slow Leg Press) als Downhill-Ersatz im Flachland.
    - Becken-/Rumpfstabilität (Gluteus medius, Planks, Rücken) gegen Ermüdungseinbrüche ab km 15.
  - *Samstag / Sonntag:* Longrun 12–15 km (GA1 105–118 bpm, Start frühmorgens vor dem Familienfrühstück).
  - *Montag:* Fester Ruhetag nach dem Wochenende. Mindestens 48h Regenerationsfenster zwischen allen Einheiten für Sehnen und ZNS.
- **Wochenend-Logistik (Das 50/50-Modell):**
  - *Woche A (Erkrath / Neandertal):* 12–14 km mit 250–350 Hm (Fahrzeit 2×20 Min.). Erhalt der Trittsicherheit und Steigmuskulatur.
  - *Woche B (Rhein ab Haustür):* 12–14 km flach (0 Min. Fahrzeit). Reiner aerober Zeit-auf-den-Beinen-Reiz. Bei Bedarf 2–3 Brückenquerungen (60–100 Hm).
- **Event-Gerüst („2+1“-Modell):**
  1. *Frühjahrs-Anker (Ende März):* Belgenbachtrail (30 km / 940 Hm).
  2. *Sommerurlaubs-Trail (Juli/August):* Alpiner Genusstrail (15–22 km / 800–1.300 Hm) fest eingebettet in den 2-wöchigen Familienurlaub (Start/Ziel im Talort, Familie an Seilbahn/Alm, null Extra-Reiseaufwand).
  3. *Herbst-Anker (Ende Oktober):* Drachenlauf (26 km / 1.250 Hm) oder adäquater Mittelgebirgstrail.
  4. *Spontane lokale Temporeize:* 1–2 lokale 10-km-Läufe im Raum Düsseldorf (z. B. Martinslauf Unterbacher See, Neanderthal-Lauf) unvorbereitet aus dem Training mitgenommen (2,5 h Gesamtabwesenheit).
- **Periodisierungs- & Trade-Off-Regeln:**
  - *Basis-Modus (Sommer/Winter):* 14-tägiger Erkrath-Rhythmus schont Familienzeit, führt jedoch zu schrittweisem Abbau der exzentrischen Bergab-Härte (>800 Hm).
  - *Peak-Modus (6–8 Wochen vor Belgenbach & Drachenlauf):* Erkrath wird wöchentlich gelaufen und auf 14–18 km mit 350–450 Hm gesteigert, um die nötige muskuläre Bremskraft und Sehnensteifigkeit rechtzeitig aufzubauen.
  - *KT-Timing-Regel:* Wenn der Longrun samstags stattfindet, freitags kein schweres Bein-KT (nur Rumpf/Oberkörper) oder KT auf Mittwoch vorziehen.

---

## 📂 5. Key File Locations

- `HANDOFF_AND_PROJECT_STATE.md` ➔ `/Users/Gerhard/Desktop/running_guide/HANDOFF_AND_PROJECT_STATE.md`
- `Trail_Cote_dOpale_Race_Day_Cheatsheet.docx` ➔ `/Users/Gerhard/Desktop/running_guide/Trail_Cote_dOpale_Race_Day_Cheatsheet.docx`
- `Belgenbachtrail_30k_Decision_Reminder.docx` ➔ `/Users/Gerhard/Desktop/running_guide/Belgenbachtrail_30k_Decision_Reminder.docx`
- `Die_Reise_der_zwei_Neandertaler.pages` ➔ `/Users/Gerhard/Desktop/running_guide/Die_Reise_der_zwei_Neandertaler.pages`
- `Die_Reise_der_zwei_Neandertaler.docx` ➔ `/Users/Gerhard/Desktop/running_guide/Die_Reise_der_zwei_Neandertaler.docx`
- `2026-07-10_3098880682_Drachenlauf OG.gpx` ➔ `/Users/Gerhard/Desktop/running_guide/2026-07-10_3098880682_Drachenlauf OG.gpx`
- `belgenbachtrail.gpx` ➔ `/Users/Gerhard/Desktop/running_guide/scratch/belgenbachtrail.gpx`
- `strategie.html` (Web-Präsentation) ➔ `https://gerryagainagain.github.io/running_guide/strategie.html`



