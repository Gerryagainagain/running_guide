# 🏃‍♂️ RUNNING GUIDE – HANDOFF & PROJECT STATE DOCUMENT

**Document Version:** 11.05 (FINAL RELEASE FREEZE – 2% VERTIKALE FEINJUSTIERUNG & DEFINITIVER GOLDEN MASTER)  
**Last Updated:** November 06, 2026  
**Repository:** `https://github.com/Gerryagainagain/trailrunning.git`  
**Live Application URL:** `https://gerryagainagain.github.io/trailrunning/`  
**Local Workspace Path:** `/Users/Gerhard/Desktop/running_guide`

---

## 📌 1. Project Overview & Release Freeze State (v11.05)

- **Mobile Vertikales Spacing final um 2% gestrafft (v11.05 / State 11.05):**
  - **Tageskarten (`.m-row`):** Min-Height präzise von 60px auf **58px** reduziert, Innenabstand auf `0.52rem 0.85rem` austariert, Spaltenbreite links 54px, Eckenradius 14px.
  - **Typografie feinkalibriert:** Distanzwerte (`.m-num`) 1.48rem, Aktivitäten (`.m-word`) 1.08rem, Sub-Copy (`.m-tag`) 0.94rem, Tagesdatum 0.96rem, Chevrons 1.18rem.
  - **Listenrhythmus (`.m-list`):** Kartenabstand auf **7px** gestrafft (vorher 8px).
  - **Header & Progress:** Stepper-Buttons 42px, Titel 1.18rem; Progress-Box mit `0.60rem 0.95rem` Innenabstand und 4px Balkenhöhe.
  - **Sync-Pille (`.m-sync-wrap`):** Gestraffter vertikaler Abstand (`margin: 1.5rem 0 1.0rem`), Button-Höhe 42px mit `0.52rem 1.35rem` Padding.
  - **Body Padding Mobile:** `padding: max(10px, env(safe-area-inset-top)) 12px max(20px, env(safe-area-inset-bottom))`.
  - Vollständig synchronisiert in `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Mobile Vertikales Spacing feinkalibriert (v11.04 / State 11.04):**
  - Vorherige Zwischenstufe: Min-Height 60px, Gap 8px.

- **Wochenkalender-Header bereinigt (v11.01 / State 11.01):**
  - Die redundante Benchmark-Pille (`.week-benchmark-pill` / `#currentWeekBenchmark`, z. B. `SUB 58:00 · 5:48 min/km · Start 11:45 Uhr`) wurde aus dem Desktop-Wochenkalender-Header (`.calendar-header`) entfernt.
  - Sämtliche Renn- und Benchmark-Informationen sind bereits in den Sonntag-Tageskarten (`mainDaysGrid`) sowie im Wochenfokus-Text enthalten; die Kopfzeile zeigt nun sauber und ruhig nur noch die `.week-headline`.
  - Synchronisiert in `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

**Der Code- und Architekturstand ist hiermit offiziell eingefroren (Release Freeze / Golden Master).**  
Sämtliche Komponenten, Datenmodelle, Ansichten (Desktop, Mobile, Drawer, Sync) und Dokumente sind 100% konsistent, synchronisiert und im Workspace sowie im GitHub-Repository gesichert.

### 🎯 Kern-Features & SSOT-Architektur im Überblick

1. **Saison-Dashboard 2027 (`index.html` & `dist/index.html`):**
   - **3-Monats-Quartalskalender:** Zeigt synchronisierte Trainingsphasen, Hauptwettkämpfe (Orange), Trainingsläufe (Lila gestrichelt mit direkten Anmeldelinks) und Urlaube/Reisen (Gelbe Schraffur).
   - **Meta-Dock mit integriertem Reise-Toggle:** Der Button `[ • Reisen ]` (`#travelMasterBtn`) sitzt rechtsbündig direkt im Meta-Dock (`#quarterMetaStrip`).
     - **Keine Icons:** Reines Apple-Glass-Pill-Design mit Status-Dot und Typografie.
     - **Farbsynchronität:** Nutzt strikt **Apple Yellow (`#FFD60A`)**, exakt synchron zur gelben Schraffur im Kalender.
     - **Ausrichtung:** Textzeile (`#quarterKeyEvent`) bleibt über symmetrisches Innenpadding (`0.65rem 100px`) zentriert.
   - **Dynamische Initialisierung:** Öffnet beim Laden immer direkt im aktuellen Quartal (`getCurrentQuarterNum`).

2. **Apple HIG Slide-Over Drawer (Wettkampf-Briefings):**
   - **Header:** Schlank ohne redundante Tag-Pillen; Schließen-Button (`✕`) rechtsbündig.
   - **Wettkampf-Action-Buttons:**
     - **Drachenlauf:** Ausschreibung & Komoot-Route; 2026er kalibrierte Zielzeit (3:50–4:05 h, Sub 4:00 h) & Split-Korridor; bereinigte Sektion `Verpflegung & Versorgung`.
     - **TS16:** Offizielle Ausschreibung & verlinktes Strecken- und Höhenprofil PDF (`de-tschirgantskyrun-ts16.pdf`).
     - **Belgenbachtrail:** Offizielle Anmeldung & integrierter [Peak Flow Rennrechner](https://www.peak-flow.app/?rennen=79ad147d-c935-4c51-a356-6efd4af7edff).
     - **Martinslauf & 7G-HM:** Spezifische Pacing-Tabellen, Profile und Logistik.

3. **Mobile Wochenansicht (≤ 600px):**
   - Direkte, ergonomische Anzeige der aktuellen Woche (`getCurrentTrainingKw`).
   - Gestraffte einzeilige Fokus-Texte (`.week-summary-text`).
   - Am Ende der Wochenliste sitzt die elegante Apple-Pille mit AirDrop-Symbol und Beschriftung `Sync`.

4. **Cloudless Peer-to-Peer Sync (AirDrop & LocalStorage):**
   - Export/Import via nativem Web Share API (AirDrop JSON-Datei an MacBook) oder manuellem Drag & Drop.
   - Gemeinsamer Speicher-Key `drachenlauf_runs` identisch zwischen Dashboard und Detailansichten.

- **Reisen-Toggle im Meta-Dock korrigiert & bereinigt (v10.15 / State 10.15):**
  - **Keine Icons:** Das unpassende Flugzeug-Icon wurde vollständig entfernt; die App verwendet im Kalender keine Icons, der Button besteht rein aus Status-Punkt und Typografie (`[ • Reisen ]`).
  - **Farbliche Synchronität mit Kalender:** Das deplatzierte Cyan wurde komplett entfernt. Der Button nutzt strikt **Apple Yellow (`#FFD60A` / `#FFF3C4`)**, exakt synchron zur gelben Schraffur und Umrandung der Reisezeiträume im Kalender.
  - **Design & Material:** Ruhiges Apple Glass (`background: rgba(255, 255, 255, 0.06)`, `border: 1px solid rgba(255, 255, 255, 0.14)`), bei Aktivierung sanftes Gelbgold (`rgba(255, 214, 10, 0.15)` / `border: 1px solid rgba(255, 214, 10, 0.50)`).
  - Synchronisiert in `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Belgenbach Race Drawer: Peak Flow Rennrechner verlinkt (v10.13 / State 10.13):**
  - Tool-Link `https://www.peak-flow.app/?rennen=79ad147d-c935-4c51-a356-6efd4af7edff` eingebunden:
    - Als zweiter Hero-Action-Button: `[ Peak Flow Rennstrategie ↗ ]` (`routeUrl` & `routeLabel`).
    - Als direkter Textlink in der Sektion „Pacing- & Rennstrategie“.
  - Synchronisiert in `index.html`, `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, gespiegelt nach `dist/`.

- **TS16 Race Drawer: Offizielles Strecken- und Höhenprofil PDF integriert (v10.12 / State 10.12):**
  - PDF-Link `https://tschirgant-sky.run/wp-content/uploads/2025/06/de-tschirgantskyrun-ts16.pdf` eingebunden:
    - Als primärer Strecken-Action-Button im Drawer-Hero: `[ Streckenplan & Profil (PDF) ↗ ]` (`routeUrl` & `routeLabel`).
    - Als direkter Textlink in der Sektion „Rennstrategie & Streckenprofil“.
  - Synchronisiert in `index.html`, `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, gespiegelt nach `dist/`.

- **Reisen-Toggle im Meta-Dock integriert (Variante A, v10.11 / State 10.11):**
  - Die separate, isolierte Leiste `#seasonTravelBar` unter dem Kalender wurde vollständig entfernt.
  - Der `[ • Reisen ]`-Button (`#travelMasterBtn`) sitzt nun rechtsbündig direkt innerhalb der Dock-Leiste (`#quarterMetaStrip`).
  - Der Event-Text (`#quarterKeyEvent`) bleibt über symmetrisches Innenpadding (`0.65rem 95px`) exakt mittig im Kalender zentriert; kein Überlappen bei langen Texten.
  - Responsive Fallback: Unter 860px bricht der Dock flexibel um.
  - Synchronisiert in `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Drachenlauf Race Drawer: Redundante Ausrüstungs-Zeile entfernt (v10.10 / State 10.10):**
  - Die Zeile `Ausrüstung: Tiefes Stollenprofil Pflicht` wurde entfernt; die Sektion ist nun auf `Verpflegung & Versorgung` (`2 × 500 ml Malto · 6 Strecken-VPs (Bananen ab KM 11, Cola)`) fokussiert.
  - Synchronisiert in allen HTML-Views und `dist/`.

- **Mobile Sync Button gestrafft (AirDrop-Symbol + „Sync“, v10.09 / State 10.09):**
  - Der mobile Sync-Button am Ende der Wochenansicht wurde von der langen Bezeichnung `An MacBook senden (AirDrop)` auf eine zentrierte, elegante Apple-HIG-Pille mit AirDrop-Symbol und Beschriftung `Sync` verkürzt.
  - Button-Styling: `display: inline-flex`, zentriert in `.m-sync-wrap`, `border-radius: 999px`, kompaktes Padding.
  - Anleitung im Desktop-Sync-Modal entsprechend angepasst.
  - Synchronisiert in `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Race Drawer: Redundante Kopf-Pille entfernt (v10.08 / State 10.08):**
  - Die überflüssige obere Tag-Pille (`WETTKAMPF-BRIEFING · XX KM` / `.race-drawer-tag`) wurde aus dem Race Drawer Header vollständig entfernt.
  - Der Header schließt nun bündig mit dem Close-Button (`✕`) rechts ab (`justify-content: flex-end`).
  - Bereinigt in `index.html`, `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, gespiegelt nach `dist/`.

- **Drachenlauf Race Drawer: Kalibrierte 2026er Zielzeit & Rennkorridor integriert (v10.07 / State 10.07):**
  - **Target-Pill:** Auf `Zielzeit 3:50–4:05 h (Sub 4:00 h) · 1.250 Hm` kalibriert (einheitlich mit Belgenbach und Martinslauf).
  - **Sektion „Zielzeit & Rennkorridor (2026er Kalibrierung)“:** Als oberste Sektion im Drawer platziert:
    - Zielkorridor: `3:50:00 – 4:05:00 Std. (Zielkorridor Sub 4:00 h)`
    - Kalibrierte Durchgangszeiten: `KM 5 @ 0:45 h · KM 11 @ 1:38 h · KM 18,5 @ 2:45 h · KM 23,3 @ 3:30 h (Referenz Probedrachen 18k / 710 Hm in 03:02:59 h)`.
  - Synchronisiert in `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Drachenlauf Race Drawer gestrafft (Eckdaten & 7-Gipfel entfernt, v10.06 / State 10.06):**
  - Die redundanten Sektionen „Eckdaten“ (Startort, Distanz, Höhenmeter, Terrain) und „Streckenverlauf (7 Gipfel)“ wurden aus dem Drachenlauf-Modal-Drawer entfernt.
  - Der Drawer fokussiert nun direkt auf die sportlich entscheidenden Blöcke:
    - **Pacing & Herzfrequenz** (KM 0–16, KM 16–19 Drachenfels, KM 19–23,3 Petersberg, KM 23,3–26 Zielabstieg)
    - **Versorgung & Ausrüstung** (Malto, VPs, Stollenprofil).
  - Synchronisiert in `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Wochenfokus Sub-Copy streng einzeilig gestrafft (v10.05 / State 10.05):**
  - **Typografie & CSS:** `.week-summary-text` mit `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` ausgestattet, um Mehrzeilenumbrüche im Desktop-Wochenkalender technisch auszuschließen.
  - **Textverdichtung in `weeksData`:**
    - **KW 45:** `Frische für Martinslauf sichern. 10 km am Unterbacher See, Start 11:45 Uhr · Pacing: 5:50 ➔ 5:45 ➔ 5:35 min/km · Samstag: Ruhetag & Pre-Race-Carboload.`
    - **KW 46:** `Laktat abbauen nach dem 10er · 12.–13.11. Bei Maja zum bday · 14.11. Wandern Geseke (aerobe Basis, kein Longrun).`
    - **KW 47:** `Umfangserweiterung auf 34 km · Di 8k Hügel, Do 10k Rhein flach · Sa 16k Longrun Erkrath (+350 Hm).`
    - **KW 48:** `Schlüsselwoche vor Siebengebirgs-HM · Di 8k mit 3k HM-Renntempo · Sa 18k Key-Longrun Siebengebirge (+500 Hm).`
    - **KW 49:** `Tapering & Wettkampf · Di 6k locker, Do 4,5k Aktivierung · So 21,4 km / 360 Hm Siebengebirgs-HM (Sub 2:20 h).`
    - **KW 50:** `Vollständige Erholung nach Halbmarathon · Lockere Bewegung nach Lust und Laune vor Belgenbach-Start im Januar.`
  - Synchronisiert in `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Statusdock-Texte gestrafft („Ziel:“ entfernt, v10.04 / State 10.04):**
  - Präfix „Ziel:“ aus allen Quartals-KeyEvents im Meta-Dock entfernt:
    - **Q1 (Jan–März):** `07. März · Belgenbachtrail (30,7 km · 941 Hm)`
    - **Q2 (Apr–Juni):** `12. Juni · Tschirgant Sky Run TS16 & Option: Rureifel Trail RET22`
    - **Q3 (Juli–Sept):** `Drachenlauf-Aufbau & Option: Trail Müllerthal`
    - **Q4 (Okt–Dez):** `24. Oktober · Drachenlauf (26,0 km · 1.250 Hm)`
  - Synchronisiert in `index.html`, `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, gespiegelt nach `dist/`.

- **Master-Button Beschriftung auf „Reisen“ gestrafft (v10.03 / State 10.03):**
  - Der Master-Toggle-Button unter dem Saisonkalender wurde von `[ • Reisen & Termine ]` auf `[ • Reisen ]` verkürzt (maximale typografische Klarheit, Apple HIG).
  - Synchronisiert in `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Dynamische Default-Initialisierung für Trainingswoche & Quartal (v10.02 / State 10.02):**
  - **Automatischer Wochen-Fokus (`getCurrentTrainingKw`):**
    - Ermittelt beim Start der Anwendung (`Trailrunning 2027`) tagesaktuell anhand des Datums (`todayPattern = DD.MM`) die aktive Trainingswoche aus `weeksData` (mit DIN/ISO 8601-Fallback).
    - Hardcodierte Initialisierung auf KW 45 entfernt: Die App öffnet im Reiter „Training“ sowie in der mobilen Wochenansicht (`.mobile-week`) immer direkt auf der aktuellen Trainingswoche.
    - Bereinigung der „Heute“-Kennzeichnung: Das statische `isToday: true` auf Dienstag 03.11. wurde entfernt; `isDayToday` hebt nun strikt den echten heutigen Wochentag hervor.
  - **Automatisches Saison-Quartal (`getCurrentQuarterNum`):**
    - Der 3-Monats-Kalender (Reiter „Saison 2027“) öffnet als Default nicht mehr starr in Q0, sondern dynamisch im Quartal des aktuellen Kalendermonats (`Math.floor(now.getMonth() / 3)`).
  - **URL-Steuerung bleibt vorrangig:** Manuelle Direktlinks via `?kw=X` oder `?tab=season&q=Y` überschreiben die automatische Erkennung gezielt für Archiv- und Analysezwecke.
  - **Synchronisiert:** In `index.html`, `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, gespiegelt nach `dist/`.

- **Master Reise-Schalter (Variante B) & Apple-Kalender ICS-Synchronisation (v10.01 / State 10.01):**
  - **Single Master Toggle:** Die mehrspaltigen Einzel-Chips unter dem Saisonkalender wurden durch einen zentrierten, eleganten Master-Schalter `[ • Reisen & Termine ]` (`.layer-chip-btn` mit Apple Yellow Glow) ersetzt.
  - **Globale 1-Klick-Steuerung:** Ein Klick schaltet alle privaten Termine und Reisen gleichzeitig ein oder aus. Beim Navigieren durch die Quartale (Q1–Q4) bleibt der Layer-Zustand wie in Apple Kalender konsistent erhalten. Quarters ohne Reisen blenden den Schalter automatisch aus.
  - **Vollständige Realdaten-Synchronisation aus `Training_und_Reisen.ics`:**
    - *31.12.2026 – 04.01.2027:* Holland Gangelt Zoutelande (Ende in Q1 Jan 01.–04.)
    - *10.–11. April 2027:* Sing Barbershop Festival Apeldoorn (Sa–So, exakte iCal-Tage)
    - *10.–12. Mai 2027:* re:publica Berlin (Mo–Mi)
    - *05.–25. Juni 2027:* Urlaub Bergfrühsommer Imst (Standlager Camping FiNK + Sa 12.06 TS16)
    - *25.–27. Juni 2027:* Geschwistertreff Kaub am Rhein
    - *KW 46 (09.–15. Nov 2026):* 12.–13.11. Bei Maja zum bday & 14.11. Exzentersteine Geseke in die Desktop- und Mobile-Wochenübersicht (`weeksData[46]`) integriert.
  - **Interaktives Statusdock:** Klick auf einen beliebigen schraffierten Tag im Kalenderblatt zeigt sofort die genauen Reisedetails.
  - **Synchronisiert:** In `index.html`, `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, gespiegelt nach `dist/`.

- **Sing Barbershop Festival (09.–11. April 2027) im Saisonkalender Q2 verankert (v10.00 / State 10.00):**
  - **Reise-Eintrag:** Fr 09. – So 11. April 2027 als aktiver Trip `{ id: 'barbershop', label: 'Barbershop Festival (09.–11.04.)', startDay: 9, endDay: 11, details: '09.–11. April 2027: Sing Barbershop Festival' }` in `quartersData[1].months[0]` (April).
  - **3-Spalten-Reise-Leiste & Interaktion:**
    - Erzeugt in der linken April-Spalte der Reise-Leiste den Toggle-Button `[• Barbershop Festival (09.–11.04.)]`.
    - Beim Aktivieren überlagert die gestrichelte Diagonalschraffur (`.vacation-layer`) exakt die Tage 9, 10 und 11 im April-Kalenderblatt.
    - Klick auf die Tage 9–11 oder den Button schaltet das Statusdock auf: `09.–11. April 2027: Sing Barbershop Festival`.
  - **Terminliche Einbettung:** Liegt eine Woche vor der Rennoption *Rureifel Trail RET22* (17. April 2027) und kollidiert weder mit Trainingsphasen noch mit den Juni-Trips (*Bergurlaub* 05.–25.06. / *Geschwister Kaub* 25.–27.06.).
  - **Synchronisiert:** In `index.html`, `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, gespiegelt nach `dist/`.

- **Rureifel Trail RET22 (17. April 2027) im Saisonkalender Q2 verankert (v9.99 / State 9.99):**
  - **Laufoption:** Samstag, 17. April 2027 als violett gestrichelte `.phase-option`-Zelle integriert.
  - **Meta-Dock & Klick-Handler:**
    - `Option: 17. April 2027 · Rureifel Trail RET22 (22 km · ~800 Hm · Nideggen) · <a href="https://www.rureifel-trail.com/" target="_blank" rel="noopener noreferrer" class="option-reg-link">Zur Anmeldung / Infos ↗</a>`
    - Status-Leiste für Q2 aktualisiert: `Ziel: 12. Juni · Tschirgant Sky Run TS16 & Option: 17. April · Rureifel Trail RET22`.
  - **Physiologischer Brückenschlag:** Schließt die frühere April-Lücke exakt 6 Wochen nach Belgenbach und 8 Wochen vor TS16 (36–45 Hm/km Steigungsdichte, Buntsandsteintrails Nideggen).
  - **Synchronisiert:** In `index.html`, `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, gespiegelt nach `dist/`.

- **Drachenlauf-Aufbau 2027 exakt ab KW 34 kalibriert (v9.98 / State 9.98):**
  - **Realdaten-Treue:** Der Drachenlauf-Block startet nun exakt wie in den 2026er Realdaten erst ab **Montag, 23. August 2027 (KW 34)**:
    - *01.–22. August (KW 31–33):* Vollständig neutral (Reiner Grundlagenerhalt & Sommerreisen in Erkrath bis 450 Hm ohne Drachenlauf-Drill).
    - *23. Aug – 05. Sep (KW 34–35):* `build-light` (8% Cyan) – Phase 2: Einstieg Höhenmeteraufbau Drachenlauf (GA1 VT1 105–118 bpm).
    - *06. Sep – 03. Okt (KW 36–39):* `build` (18% Cyan) – Phase 2/3: Spezifischer Siebengebirgsaufbau (Treppen, 7 Gipfel, Steilhänge, inkl. 11.09. UTML 21k).
    - *04.–10. Okt (KW 40):* `build-peak` (32% Cyan) – Drachenlauf Peak-Woche (Schlüssel-Longrun Siebengebirge 22–24 km · 900–1.100 Hm).
    - *11.–23. Okt (KW 41–42):* `taper` (12% Cyan) – Finales 2-Wochen-Tapering vor dem Drachenlauf (Umfang -40%, Frische sichern).
    - *24. Oktober:* `race` (Apple Orange) – 26. Drachenlauf Siebengebirge.
  - **Synchronisiert:** In `index.html`, `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, gespiegelt nach `dist/`.

- **Entfernung des Siebengebirgs-Halbmarathons (05.12.2027) & Realdaten-Klarstellung (v9.97 / State 9.97):**
  - **Saisonkalender Q4 bereinigt:**
    - Die Option für den 05. Dezember 2027 (*25. Siebengebirgs-HM*) wurde aus `getPhase` und `onPhaseClick` vollständig entfernt. Der 5. Dezember 2027 wird als regulärer, neutraler Sonntag geführt.
  - **Realdaten-Abgleich Herbstblock 2026 (`app.js` Master-Daten):**
    - Die Periodisierung entstammt nicht allgemeinen Lehrbüchern, sondern exakt Gerhards 2026er Realdaten:
      - *Phase 1 (KW 30–33 / 20.07.–16.08.2026):* Grundlagenerhalt & Reisen (Target 30 km / 450 Hm, alle Läufe bis 500 Hm in Erkrath; London & Jurassic Coast).
      - *Phase 2 (KW 34–36 / 17.08.–06.09.2026):* Spezifischer Höhenmeteraufbau im Siebengebirge (Steigerung auf 20 km / 950 Hm bzw. 25 km / 965 Hm bei 116 bpm).
      - *Phase 3 (KW 37–39 / 07.09.–27.09.2026):* Peak & Probedrachenlauf (19 km / 710 Hm).
      - *Phase 4 (KW 40–42 / 28.09.–18.10.2026):* Tapering (Target 30 km / 400 Hm).
      - *Phase 5 (KW 43):* Drachenlauf.
  - **Synchronisiert:** In `index.html`, `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, gespiegelt nach `dist/`.

- **Mobile Race Drawer Ergonomie & iOS Safe-Area-Integration (v9.96 / State 9.96):**
  - **Shared Architecture:** Die gestraffte Informationshierarchie (horizontale `.race-phase-card` Pacing-Karten, 7-Gipfel-Sequenz, 2×2 Eckdaten-Grid, getrennte Versorgung) wird dynamisch aus `raceBriefings` befüllt und ist auf Desktop und Mobile identisch aktiv.
  - **Mobile-spezifische Perfektion (≤ 600px):**
    - *Full-Width Layout:* `.race-drawer` öffnet vollflächig (`width: 100% !important; max-width: 100vw; left: 0; right: 0`).
    - *iOS Safe Areas:* Oben `max(1.25rem, calc(env(safe-area-inset-top) + 0.6rem))` (Freiraum unter Dynamic Island / Notch) und unten `max(2.5rem, calc(env(safe-area-inset-bottom) + 1.8rem))` (Schutz vor Home-Indicator-Kollisionen).
    - *Touch Target Schließen:* Schließen-Button `.race-drawer-close` auf 38×38px vergrößert für komfortable Daumenbedienung.
    - *Touch-optimierte Action-Buttons:* `.race-drawer-org-btn` und `.race-drawer-route-btn` mit `min-height: 42px` und zentrierter Ausrichtung.
    - *Adaptive Typografie:* Titel-Skalierung via `clamp(1.35rem, 6vw, 1.65rem)` gegen unschöne Wortumbrüche auf 375px-Bildschirmen.
    - *Momentum Scrolling:* `-webkit-overflow-scrolling: touch` für butterweiches Scrollen.
  - **Synchronisiert:** In `index.html`, `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, gespiegelt nach `dist/`.

- **Vollständige Ganzjahres-Periodisierung 2027 mit abgestufter Intensitäts-Welle (v9.95 / State 9.95):**
  - **Konsistente monochrome Intensitäts- und Erholungs-Dramaturgie über alle 4 Quartale:**
    - **Q1 (Januar – März 2027 · Ziel Belgenbachtrail 30,7 km · 941 Hm):**
      - *06.–17. Jan (KW 1–2):* `build-light` (8% Cyan) – Re-Aktivierung & sanfte Basis (GA1 VT1 105–118 bpm).
      - *18. Jan – 14. Feb (KW 3–6):* `build` (18% Cyan) – Spezifischer Aufbau (Erkrath 350–450 Hm).
      - *15.–21. Feb (KW 7):* `build-peak` (32% Cyan) – Peak-Woche Schlüsseltraining (20–22 km Trail).
      - *22. Feb – 06. März (KW 8–9):* `taper` (12% Cyan) – Tapering vor Belgenbach (Umfang -40%, Frische sichern).
      - *07. März:* `race` (Apple Orange) – Belgenbachtrail.
      - *08.–14. März (Post-Race W1):* `rekom-acute` (28% Green) – Akute Reparatur & ZNS-Ruhe.
      - *15.–21. März (Post-Race W2):* `rekom-light` (8% Green) – Aktive Erholung & Übergangstrabs.
      - *22.–31. März:* Neutraler Basiszustand.
    - **Q2 (April – Juni 2027 · Ziel Tschirgant Sky Run TS16 · 16,9 km · ~850 Hm):**
      - *01.–18. Apr:* Neutral (Frühjahrs-Basis & passive Erholung).
      - *19. Apr – 02. Mai (KW 16–17):* `build-light` (8% Cyan) – Frühjahrs-Reaktivierung & GA1-Umfangseinstieg.
      - *03.–23. Mai (KW 18–20):* `build` (18% Cyan) – Spezifischer Bergaufbau TS16 (Höhenmeter-Gewöhnung 400–600 Hm, Kraftausdauer).
      - *24.–30. Mai (KW 21):* `build-peak` (32% Cyan) – Peak-Woche TS16 (spezifische Hangsimulation & exzentrische Bergab-Bremskraft).
      - *31. Mai – 11. Juni (KW 22–23):* `taper` (12% Cyan) – Tapering & Frische vor TS16 (inkl. Standlager Camping FiNK Imst ab 05.06.).
      - *12. Juni:* `race` (Apple Orange) – Tschirgant Sky Run TS16.
      - *13.–20. Juni (Post-Race W1):* `rekom-acute` (28% Green) – Akute alpine Erholung im Standlager Camping FiNK Imst (Null Laufbelastung, Familienwandern).
      - *21.–27. Juni (Post-Race W2):* `rekom-light` (8% Green) – Aktive Erholung Kaub am Rhein (lockere GA1-Flachtrabs).
      - *28.–30. Juni:* Neutraler Quartalsausklang.
    - **Q3 (Juli – September 2027 · Drachenlauf-Fundament & Vorbereitung):**
      - *01. Juli – 08. Aug:* Neutral (Sommerpause & freie Grundlagenerhaltung VT1).
      - *09.–29. Aug (KW 32–34):* `build-light` (8% Cyan) – Sommer-Basis & sanfter Wiedereinstieg vor dem Drachenlauf-Zyklus.
      - *30. Aug – 30. Sep (KW 35–39):* `build` (18% Cyan) – Spezifischer Siebengebirgs-Aufbau (Treppen, Steilhänge, 7-Gipfel-Simulation).
      - *11. September:* `option` (gestrichelt) – Vorbereitungslauf Ultra Trail Müllerthal (21 km · ~600 Hm).
    - **Q4 (Oktober – Dezember 2027 · Saison-Hauptziel Drachenlauf 26,0 km · 1.250 Hm · 7 Gipfel):**
      - *01.–03. Okt:* `build` (18% Cyan) – Abschluss spezifischer Aufbau.
      - *04.–10. Okt (KW 40):* `build-peak` (32% Cyan) – Drachenlauf Peak-Woche (Schlüssel-Longrun Siebengebirge 22–24 km · 900–1.100 Hm).
      - *11.–23. Okt (KW 41–42):* `taper` (12% Cyan) – Finales 2-Wochen-Tapering vor dem Drachenlauf (Umfang -40%, Beine lockern, ZNS entlasten).
      - *24. Oktober:* `race` (Apple Orange) – 26. Drachenlauf Siebengebirge.
      - *25.–31. Okt (Post-Race W1):* `rekom-acute` (28% Green) – Akute Quadrizeps-Reparatur nach 1.250 Hm, ZNS-Ruhe.
      - *01.–06. Nov (Post-Race W2):* `rekom-light` (8% Green) – Aktiver Übergang & sanfte GA1-Lockertrabs.
      - *07. November:* `option` (gestrichelt) – Option 49. SFD Martinslauf 5,8k Seerunde Unterbacher See.
      - *08.–30. Nov:* Neutral (Saisonpause & regenerative Basis).
      - *05. Dezember:* `option` (gestrichelt) – Option 25. Siebengebirgs-HM 21,4k.
      - *06.–31. Dez:* Neutral (Winterruhe & Jahresausklang).
  - **Kontextsensitive Statusdock-Führung (`onPhaseClick`):** Klick auf jeden einzelnen Tag des Jahres liefert exakte physiologische Kontextinformationen (Spezifik, Pulskorridor GA1 VT1 105–118 bpm, Belastungssteuerung) ohne Phrasen.
  - **Synchronisiert:** In `tokens.css`, `index.html`, `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, gespiegelt nach `dist/`.

- **Gestufte Periodisierungs-Welle für den Q1-Aufbau & Post-Race-Regeneration (v9.94 / State 9.94):**
  - **Monochrome Intensitäts-Gradienten statt statischer Monoblöcke:**
    - *Phase 1 · Re-Aktivierung (KW 1–2 / 06.–17. Jan):* `.phase-build-light` (8% Cyan-Deckkraft, sanfter Einstieg nach Jahreswechsel, Fokus GA1 VT1 105–118 bpm).
    - *Phase 2 · Spezifischer Aufbau (KW 3–6 / 18. Jan – 14. Feb):* `.phase-build` (18% Cyan-Deckkraft, Erkrath-Longruns 350–450 Hm, neuromuskuläre Bergauf-Spezifik).
    - *Phase 3 · Peak-Woche (KW 7 / 15.–21. Feb):* `.phase-build-peak` (32% Cyan-Deckkraft mit markanterem Rand, Schlüsseltraining 20–22 km Trail, maximale Spezifik).
    - *Phase 4 · Tapering (KW 8–9 / 22. Feb – 06. März):* `.phase-taper` (12% Cyan-Deckkraft, geplante Entlastung: Umfang -40%, kurze Reize zur Erhaltung des Muskeltonus).
    - *Hauptwettkampf (07. März):* `.phase-race` (Belgenbachtrail 30,7 km · 941 Hm, Apple Orange mit Signal-Glow).
    - *Post-Race Woche 1 (08.–14. März):* `.phase-rekom-acute` (28% Apple Green, akute muskuläre Reparatur, ZNS-Ruhe, Null Trainingsbelastung).
    - *Post-Race Woche 2 (15.–21. März):* `.phase-rekom-light` (8% Apple Green, sanftes Ausklingen, erste kurze GA1-Lockertrabs im Flachen).
    - *Ab 22. März:* Neutraler Zustand vor Beginn des Frühjahrszyklus.
  - **Perfekte Balkengeometrie (`bar-start` / `bar-end`):**
    - Nahtlose Verbindung bei identischer Phase; automatische Kantenabrundung bei Phasenübergängen und Wochenenden.
  - **Synchronisiert:** In `tokens.css`, `index.html`, `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, gespiegelt nach `dist/`.

- **Rennphasen-Layout & ergonomische Drawer-Hierarchie (v9.93 / State 9.93):**
  - **Perfekte Passung für die 600px Drawer-Breite:**
    - *01 · Header:* Titel, Datum, Ziel-Pill `SAISON-HAUPTZIEL · 26 KM · 1.250 HM · 7 GIPFEL`, `Ausschreibung ↗` & `Komoot-Route ↗` kompakt als Hero-Buttons ohne Dopplung im Text.
    - *02 · Eckdaten (2 Spalten × 2 Zeilen):* `Startort` (Thomasberg), `Distanz` (26,0 km), `Höhenmeter` (1.250 Hm), `Terrain` (Trails, Stufen, Schotter).
    - *03 · Strecke:* Kompakte Gipfel-Sequenz mit dezenten Apple-Cyan-Wegweisern (`Großer Ölberg › Löwenburg › Schallenberg › Geisberg › Jungfernhardt › Drachenfels › Petersberg`).
    - *04 · Pacing & Herzfrequenz (Rennphasen-Ansicht statt Tabelle):* 4 horizontale `.race-phase-card`-Elemente. Herzfrequenz als prominenter visueller Anker rechts (`120–125 bpm`, `130–135 bpm`, `Deckel 140`, `< 130 bpm`), Taktik darunter ohne Zeilenkollision. Redundante Strategie-Zusammenfassung eliminiert.
    - *05 · Versorgung & Ausrüstung (2 kompakte Zeilen):* Versorgung (Malto & 6 VPs) und Ausrüstung (Stollenprofil-Pflicht) sauber getrennt ohne Fließtext.
  - **Synchronisiert:** In `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Drachenlauf Briefing-Card radikal gestrafft (v9.92 / State 9.92):**
  - **Fokussierung auf echten Briefing-Standard ohne Redundanzen:**
    - *Header:* Tag `WETTKAMPF-BRIEFING · 26 KM`, Ziel-Pill `SAISON-HAUPTZIEL · 26 KM · 1.250 HM · 7 GIPFEL`.
    - *Aktions-Buttons:* Ausschreibung (`Ausschreibung ↗`) und Komoot-Route (`Komoot-Route ↗`) exklusiv oben im Hero-Bereich (keine doppelte Verlinkung im Textkörper).
    - *Eckdaten:* 3-zeilig linksbündig (Start: Thomasberg / Strecke: 26,0 km · 1.250 Hm · 7 Gipfel / Terrain: Trails, Stufen, Schotter).
    - *Streckenverlauf:* Rein auf die 7 Gipfel begrenzt (`Großer Ölberg · Löwenburg · Schallenberg · Geisberg · Jungfernhardt · Drachenfels · Petersberg`).
    - *Pacing & HF:* 3 Spalten (Abschnitt, Taktik, HF). Kein starres Pace-Korsett im Zielabstieg (`Zielabstieg · kontrolliert rollen` bei `< 130 bpm`); Verzicht auf Fachjargon (`bergab entlasten` statt `Downhill Flush`).
    - *Strategie:* 3-Phasen-Kernsatz (Glykogen sichern, Petersberg investieren, kontrolliert ins Ziel).
    - *Verpflegung & Ausrüstung:* Auf 4 Kernzeilen (Flüssigkeit, Verpflegung, VPs, Schuhe) formatiert.
  - **Synchronisiert:** In `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Option Dolomiti Trail (03.07.2027) aus Saisonkalender entfernt (v9.91 / State 9.91):**
  - **Saisonkalender Q3 (Juli – Sept 2027):**
    - Die gestrichelte Laufoption für den 03. Juli 2027 (*Primiero Dolomiti Marathon*) wurde aus der Phasen-Logik (`getPhase`) und dem Klick-Handler (`onPhaseClick`) entfernt.
    - Der 3. Juli wird als regulärer Samstag/Sommertag ohne Wettkampfoption geführt.
    - Die einzige verbleibende September-Option in Q3 ist der **11. September 2027** (*Ultra Trail Müllerthal 21 km*).
  - **Synchronisiert:** In `index.html`, `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, gespiegelt nach `dist/`.

- **Belgenbachtrail Direkt-Anmeldelink via race result (v9.90 / State 9.90):**
  - **Offizielle Registrierungs-URL aktualisiert:**
    - Ersetzt bisherige Homepage-URL durch den direkten Anmeldelink: `https://my.raceresult.com/417090/registration`.
    - Im Wettkampf-Briefing Drawer (`raceBriefings.belgenbach.organizerUrl`) als **`Offizielle Anmeldung · my.raceresult.com ↗`** hinterlegt.
    - In der interaktiven Monatsziel-Zeile des Saisonkalenders Q1 (Klick auf 07. März 2027) ebenfalls mit klickbarem Direktlink (`Zur Anmeldung ↗`) versehen.
  - **Synchronisiert:** Gespiegelt nach `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html` und `dist/`.

- **Drachenlauf Komoot-Route im Detail-Drawer verlinkt (v9.89 / State 9.89):**
  - **Direkte Verknüpfung der offiziellen Komoot-Tour (26 km · 1.250 Hm · Königswinter):**
    - Komoot-Tour-URL: `https://www.komoot.com/de-de/tour/1882550924?share_token=aKlmkGGP9QBKIGBYNofjmXhqYJ5YwPvvoWl2QgWkmoCSU36YTz&ref=wtd&t_s=referral&t_cid=route_share&t_ref_username=5238953605179`.
    - Im Header des Detail-Drawers (`#raceDrawer`) neben der Ausschreibung ein cyanfarbener Aktions-Button **`Komoot Strecken-Route ↗`** (`.race-drawer-route-btn`) integriert.
    - Im Drawer-Inhalt eine eigene Sektion *Streckenverlauf & Komoot-Tour* mit Inline-Link ergänzt.
    - Vollständiges Briefing für den Drachenlauf geschärft: 4 Eckdaten, Streckenabschnitt-Übersicht (7 Gipfel), 4-stufige Pacing-Matrix (KM 0–16 @ 120–125 bpm, Drachenfels & Petersberg Freigabe 130–135 bpm, Zielabstieg Easy Rolling) und Verpflegung/Ausrüstung.
    - In `app.js` (Workout Details Modal) den Komoot-Link parallel hinterlegt.
  - **Synchronisiert:** Gespiegelt nach `dist/`.

- **Minimalistisches Apple-Orange App-Icon & Manifest (v9.88 / State 9.88):**
  - **Neues PWA- & iOS-Home-Screen-Icon:**
    - `apple-touch-icon.png` (512 × 512 px) vollständig neu generiert.
    - Tiefschwarzer Obsidian-Canvas (`#0B0B10`) mit zentriertem, randscharf antialiastem Punkt im Apple-Orange-Ton (`#FF9F0A`).
    - Auf dem iPhone-Display bildet die native Squircle-Maske einen edlen, minimalistischen App-Auftritt (entsprechend Swiss Design & Apple HIG).
  - **Manifest & Titel:** `manifest.json` auf `Trailrunning 2027` (Short Name: `Coach`) und 512px Icon-Größe angepasst. Titel in `index.html` und `preview_jahres_dashboard.html` synchronisiert.
  - **Synchronisiert:** Gespiegelt nach `dist/`.

- **Repository- & URL-Umstellung auf `trailrunning` (v9.87 / State 9.87):**
  - **Erfolgreiche Umbenennung auf GitHub:**
    - GitHub Repository umbenannt in `trailrunning`.
    - Neue Live Web Application URL: **`https://gerryagainagain.github.io/trailrunning/`**.
    - Durch `index.html` als Einstiegspunkt öffnet der Aufruf ohne Unterpfad direkt das Master Dashboard.
    - Lokale Git Remote Origin URL erfolgreich umgestellt auf `git@github.com:Gerryagainagain/trailrunning.git`.
    - SSH-Authentifizierung via Port 443 mit `IdentityFile ~/.ssh/id_ed25519` fest in SSH-Konfiguration verankert und Verbindung verifiziert.

- **Crawler- & Suchmaschinen-Schutz (v9.86 / State 9.86):**
  - **Umfassender Schutz vor Web-Crawlern, Suchmaschinen & KI-Scrapern verifiziert und gehärtet:**
    1. *`robots.txt` (Root & `dist/`):* Sperrt universal alle Crawler (`User-agent: * / Disallow: /`) und blockt namentlich alle bekannten KI- & LLM-Scraper (GPTBot, ChatGPT-User, Google-Extended, GoogleOther, ClaudeBot, Claude-Web, Meta, Applebot-Extended, PerplexityBot, Bytespider, Cohere etc.).
    2. *HTML-Meta-Tags:* In `index.html`, `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html` und `preview_2wochen.html` wurden `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">` und `<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet">` nachgerüstet (wie bereits in `archive_drachenlauf_index.html` und `strategie.html`). Verhindert URL-Indexierung, Snippet-Generierung und Cache-Archivierung in Suchmaschinen.
    3. *Auth Gate:* Zusätzliche Barriere im DOM durch das Passwort-Modal (`#authGateModal`).
  - **Synchronisiert:** Gespiegelt nach `dist/`.

- **Martinslauf Wetter-, Windchill- & Renntaktik-Synchronisation (v9.85 / State 9.85):**
  - **Reale Wetterprognose für Sonntag, 08. November 2026 (Start 11:45 Uhr) eingepflegt:**
    - *Temperatur:* 10 °C (physiologisches Thermoregulations-Optimum, minimale kardiovaskuläre Drift).
    - *Wind & Böen:* 10 km/h Grundwind, Böen bis 19 km/h (~5,3 m/s) am Unterbacher See.
    - *Windchill:* An offenen Seeufer-Passagen gefühlt wie ca. 7–8 °C.
  - **Physiologische & taktische Konsequenz:**
    - Bei 19 km/h Gegenwind kein stures Forcieren der 5:48 min/km GPS-Pace (vermeidet anaerobe Laktatanreicherung vor KM 7). Striktes Einordnen im Läuferfeld zur Windschattennutzung (4–8 % Kraftersparnis).
    - Pulsdeckel (< 118 bpm KM 0–3, 120–125 bpm KM 3–7) hat strikten Vorrang vor der momentanen Geschwindigkeit.
  - **Bekleidungsempfehlung im Race Briefing:**
    - Kurz/Kurz oder Shirt/dünnes Longsleeve. Leichtes Frösteln am Start (11:35–11:45 Uhr) ist das physiologische Soll. Optionale dünne Handschuhe für die ersten 2–3 km.
  - **Synchronisiert:** Eingepflegt in `raceBriefings.martinslauf` in `index.html` und `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **System & Design Freeze (v9.84 / State 9.84):**
  - **Vollständiger System-Audit & Produktions-Freeze erfolgreich abgeschlossen:**
    1. *Design- & UI-Integrität:* Strikte Einhaltung des Swiss Design Standards (keinerlei Schmuck-Icons oder Emojis in Schaltern, Statusdocks oder Buttons; ausschließlich funktionale Typografie und dezente Status-Dots).
    2. *Saison- & Quartalskalender:* 
       - Pager führt direkt Kalenderspannen (`Jan – März 2027`, `Apr – Juni 2027`, `Juli – Sept 2027`, `Okt – Dez 2027`).
       - Zielzeile ist zentrierter horizontaler Anker direkt unter der 3-Monats-Matrix.
       - Reiseliste (`.season-month-cols-grid`) fluchtet im 3-Spalten-Raster linksbündig exakt unter dem jeweiligen Kalendermonat (Q1: Januar Zoutelande; Q2: Juni Bergurlaub & Geschwister Kaub; Q3/Q4 ohne Reisen automatisch geschlossen).
       - Option Trail Côte d’Opale (05.09.2027) vollständig entfernt; 11.09.2027 (UTML Müllerthal) bleibt als gesetzte September-Option erhalten.
    3. *Race Drawer (Wettkampf-Briefing):*
       - Desktop-Dimensionierung auf `clamp(460px, 35vw, 540px)` mit `1.75rem` Innenpadding entzerrt.
       - 3-spaltige Pacing- und Herzfrequenzmatrix sowie geschärfte Briefing-Texte für den Martinslauf (10k) fehlerfrei gerendert.
    4. *Deployment & Synchronisation:* 
       - `index.html` und `dist/index.html` zu 100 % identisch.
       - `preview_jahres_dashboard.html` und `dist/preview_jahres_dashboard.html` zu 100 % identisch.
       - `app.js`, `styles.css`, `tokens.css` synchron in Quellverzeichnis und `dist/`.
       - Arbeitsbaum sauber, lokaler Stand vollständig mit GitHub Remote (`origin/main`) synchronisiert.
    5. *Aktueller physiologischer Athletenstatus (Stand 04.11.2026):*
       - Gestern (03.11.): 5,5 km GA1 @ Ø 117 bpm (40 min / 10 Hm) sauber an der VT1-Sprechgrenze absolviert.
       - Heute Morgen (04.11.): Parasympathischer Erholungs-Rebound bestätigt (nächtliche HFV springt von 41 ms Wochentiefstwert auf 51 ms Wochenhöchstwert; Sleep Score 86).
       - Nächste Schritte KW 45: Mi 04.11. Passiv schonen, Do 05.11. 4,0 km Aktivierung (< 115 bpm), Fr/Sa Chill & Carboload, So 08.11. Martinslauf 10k (Sub 58:00, 5:48 min/km).

- **Dolomiten-Standortoptionen für Sommerurlaub 2027 hinterlegt (v9.83):**
  - Für den zweiten Teil des 21-Tage-Bogens (nach dem TS16 in Imst) wurden zwei passende Dolomiten-Kandidaten für Naturcamping, moderate Höhe und Seilbahn-Höhenwandern (T2, schwindelfrei) evaluiert und in Sektion 4.C2 hinterlegt:
    1. *Hochpustertal (Camping Toblacher See, 1.200 m):* Natursee, ebener Talradweg auf alter Bahntrasse für GA1-Lockerungsläufe (105–115 bpm), Gondelbahnen auf Helm (2.050 m) und Haunold (1.500 m).
    2. *Seiser Alm / Schlern (Camping Seiser Alm, Völs, 880 m):* Ruhig nahe Völser Weiher, Europas größte Hochalm (1.680–2.000 m, Seilbahn ab Seis) mit sanften Almwegen ohne Steilabbrüche.

- **Laufoption Trail Côte d’Opale (05.09.2027) entfernt (v9.74 / State 9.82):**
  - **Saisonkalender Q3 (Juli – Sept 2027):**
    - Die Option für den 05. September 2027 (*Trail Côte d’Opale 24 km*) wurde aus der Phasenlogik (`getPhase`) und den Klick-Details (`onPhaseClick`) entfernt.
    - Der 5. September wird wieder als regulärer Ruhetag/Sonntag geführt.
    - Als einzige gesetzte Option im September 2027 verbleibt der **11. September 2027** (*Ultra Trail Müllerthal 21 km*).
  - **Synchronisiert:** In `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Wettkampf-Briefing Martinslauf: Text- & Datenstruktur aktualisiert (v9.73 / State 9.81):**
  - **Inhalte im Race Drawer für den 48. SFD Martinslauf synchronisiert:**
    - Button-Label gestrafft: `Ausschreibung & Infos ↗`.
    - Logistik-Eckdaten: Label auf `Distanz / Höhenmeter` angepasst (`10,0 km · flach · ca. 10 Hm`).
    - Pacing-Tabelle KM 7–10: Tempovorgabe von „nach Gefühl steigern“ auf `progressiv steigern` geschärft.
    - Rennstrategie: `Strategie: Kontrolliert starten, Rhythmus halten, ab KM 7 steigern.`.
    - Strecken- & Verpflegungsnotiz: `Flache Natur- und Parkwege. An offenen Wasserpassagen kann Wind bremsen. Keine Eigenverpflegung erforderlich. Im Ziel: Traditioneller Weckmann.`.
  - **Synchronisiert:** In `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Race Drawer Dimensionierung & Horizontale Entspannung (v9.72 / State 9.80):**
  - **Breite auf Desktop & Tablet optimiert (`.race-drawer`):**
    - Die bisherige panel-Breite `clamp(380px, 32vw, 480px)` mit `2.25rem` (36px) Randabstand wirkte bei dreispaltigen Tabellen und längeren Badge-Texten komprimiert.
    - Neue Dimensionierung: `width: clamp(460px, 35vw, 540px);` mit `padding: 2rem 1.75rem;`.
    - **Ergebnis:** Rund 90–110px mehr Netto-Inhaltsbreite. Die Pacing-Matrix (`ABSCHNITT` | `PACE` | `HERZFREQUENZ`), lange Ziel-Pills (`SUB 58:00 · 5:48 min/km · Start 11:45 Uhr`) und Ausschreibungs-Links haben spürbar Raum; mehrzeilige Umbrüche bei Tempovorgaben entfallen.
    - Auf MacBook-Screens bleiben weiterhin > 60 % der Hauptansicht orientierbar hinter dem dezenten Backdrop-Blur sichtbar.
  - **Synchronisiert:** In `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Monatsspalten-Reiseliste & Multi-Trip Integration (v9.71 / State 9.79):**
  - **Ergonomisches 3-Spalten-Raster unter der Zielzeile (`.season-month-cols-grid`):**
    - Die Zielzeile (`quarter-meta-strip`: `Ziel: 12. Juni · Tschirgant Sky Run TS16...`) sitzt als ruhiger horizontaler Anker zentriert unter der 3-Monats-Matrix.
    - Unmittelbar darunter erstreckt sich ein 3-spaltiges Raster (`repeat(3, 1fr)` mit 1.25rem Gaps), das exakt mit den 3 Monatsspalten fluchtet.
    - Reise- und Ferientermine füllen sich **linksbündig pro Monatsspalte** auf:
      - *Q1 (Jan – März 2027):* Spalte 1 (Januar) führt `[• Zoutelande (02.–05.01.)]`; Spalten 2 & 3 bleiben leer.
      - *Q2 (Apr – Juni 2027):* Spalte 1 (April) und 2 (Mai) bleiben ruhig; Spalte 3 (Juni) führt `[• Bergurlaub (05.–25.06.)]` und `[• Geschwister Kaub (25.–27.06.)]`.
      - *Q3 & Q4:* Ohne Termine schließt die Leiste automatisch (`display: none`).
    - Das Wort „Ebene“ entfällt vollständig. Strikte Icon- und Emoji-Freiheit gewahrt.
  - **Dynamische Multi-Trip Steuerung:**
    - Reisetage können unabhängig voneinander aktiviert werden (`activeTripIds = new Set()`).
    - Kalendertage (z. B. 02.–05. Januar in Zeeland oder 25.–27. Juni in Kaub) erhalten bei Aktivierung die goldene Schraffur (`.vacation-layer`); Klick auf den Tag blendet die Reisedetails im Meta-Dock ein.
  - **Synchronisiert:** In `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Design-Bereinigung Saison-Kalender: Pager-Spannen, Layer-Dock unter Kalender & Icon-Freiheit (v9.70 / State 9.78):**
  - **Quartals-Pager direkt auf Kalenderspannen umgestellt:**
    - Die früheren saisonalen Überschriften („Winter“, „Frühling“, „Sommer“, „Herbst“) und die redundante Unterzeile wurden abgelöst.
    - Der zentrierte Pager zeigt nun direkt die exakten Zeitspannen: `Jan – März 2027`, `Apr – Juni 2027`, `Juli – Sept 2027`, `Okt – Dez 2027`.
  - **Unaufdringliche Layer-Leiste unter dem 3-Monats-Kalender (`.season-layer-bar`):**
    - Der Layer-Toggle wurde aus der Kopfzeile entfernt, um die Pager-Navigation vollkommen ruhig und zentriert zu halten.
    - Die Leiste sitzt dezent unterhalb des Kalenderblocks vor dem Statusdock und wird dynamisch gesteuert (`q.layers`).
    - *Q1, Q3, Q4:* Völlig unsichtbar (`display: none`), da keine Reisen hinterlegt sind.
    - *Q2 (Apr – Juni 2027):* Zeigt dezent `EBENE` mit taktilem Chip-Button `• Bergurlaub (05.–25.06.)`. Bei Aktivierung leuchtet der Punkt warm bernsteinfarben und der 21-Tage-Balken überlagert die Tage 05.–25. Juni.
  - **Strikte Icon-Freiheit (Swiss Design Standard):**
    - Sämtliche Emojis und Schmuck-Icons (`⛺`, `🏁`, `📋`) wurden aus Buttons, Statuszeilen, Zwischenablage-Schaltflächen und Etappentexten entfernt.
    - Typografische Klarheit mit Akzentfarben (Orange für Rennen, Cyan für Navigation, Gelb/Bernstein für Ebenen).
  - **Synchronisiert:** In `index.html`, `preview_jahres_dashboard.html`, `dist/index.html` und `dist/preview_jahres_dashboard.html`.

- **Interaktiver Bergurlaub-Layer (05.–25. Juni 2027) zuschaltbar (v9.69 / State 9.77):**
  - **An-/Ausschaltbarer Reise- & Urlaubs-Layer:**
    - Im Saisonkalender 2027 (`tab-season`) wurde oben rechts im Header ein taktiler Apple HIG Toggle-Button **`[ • ⛺ Bergurlaub ]`** integriert.
    - **Modus AUS (Standard):** Der Kalender zeigt die reine Sportphysiologie (Aufbau 01.–11.06., 🏁 TS16 Rennen 12.06., Rekom 13.–26.06.).
    - **Modus AN (Layer aktiviert):**
      - Der 21-Tage Bergurlaub (05.–25. Juni 2027: Imst Standlager Camping FiNK & Kaub am Mittelrhein) legt sich als warmer, goldener Overlay-Layer (`.vacation-layer` mit goldenem Top-Rail und dezentem Diagonalschliff `repeating-linear-gradient`) über die Kalendertage.
      - **Trainingsphysiologie bleibt sichtbar:** Die darunterliegenden Phasenbalken (Blau für Aufbau, Grün für Rekom) scheinen durch; das Rennen am 12. Juni (TS16) leuchtet im Zentrum des Urlaubs strahlend orange hervor.
      - **Interaktive Reise-Stationen:** Klick auf einen Urlaubstag zeigt die genaue Etappe im Meta-Dock (05.06. Anreise Bodensee, 06.–11.06. Tapering Camping FiNK, 12.06. 🏁 TS16, 13.–20.06. Erholung & Hüttenwandern, 21.–25.06. Kaub am Rhein / Mittelrhein-Ausklang).
    - URL-Steuerung für Direktaufruf: `?tab=season&q=1&layer=urlaub`.
  - Synchronisiert: In `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Veranstalter-Link Tschirgant Sky Run TS16 aktualisiert (v9.68 / State 9.76):**
  - Korrektur der Ziel-URL im Wettkampf-Briefing (`raceBriefings.ts16`):
    - Alt: `https://www.tschirgant-skyrun.at/`
    - Neu: `https://tschirgant-sky.run/trailrun-tirol-ts16-adventure/`
    - Label angepasst: `Offizielle Ausschreibung · tschirgant-sky.run ↗`
  - Synchronisiert: In `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Bugfix: Desktop Modal Zentrierung & Wochenfokus-Leiste repariert (v9.67 / State 9.75):**
  - **Desktop Modaldialog (`.m-sheet`) wieder präzise zentriert:**
    - Ursache identifiziert: Ein doppeltes Style-Fragment außerhalb des Media-Queries überschrieb die Desktop-Positionierung mit `transform: translateY(0) !important;`, blendete den Schließen-Button `✕` aus und zeigte fälschlich den mobilen Swipe-Griff (`.m-grab`).
    - Korrektur: Stray-Block entfernt. Das Dialogfenster auf macOS MacBook Pro sitzt wieder perfekt zentriert im Viewport (`translate(-50%, -50%) scale(1)`), Schließen-Button `✕` oben rechts ist voll aktiv und der mobile Swipe-Pill ausgeblendet.
  - **Wochenfokus-Zeile auf Landing Page stabilisiert:**
    - Bisheriges Layout litt unter unstrukturiertem Zeilenumbruch und fehlendem Container-Rahmen.
    - Neu formatiert als zusammenhängende, geschlossene Apple HIG Fokus-Pille (`background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px;`).
    - Der cyanfarbene `FOKUS`-Badge sitzt sauber links; der zweigeteilte Inhalt fließt harmonisch durch einen dezenten Trennpunkt (`·`) getrennt ohne störende Leerzeilen.
  - **Synchronisiert:** Umgesetzt in `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Design-Reduktion & Beseitigung von „Flächen in Flächen“ (v9.66 / State 9.74):**
  - **Beseitigung von Nested Card-itis (Box-in-Box-Muster):**
    - *Desktop-Wochenrahmen:* Die schwere äußere `.calendar-week-card`-Hülle (dunkler Kasten mit Rand) wurde entfernt (`background: transparent; border: none; box-shadow: none; padding: 0;`). Die 7 Tageskarten schweben nun direkt auf dem Canvas.
    - *Ruhetage (`card-rest` & `.m-row.rest`):* Alle Ruhetage (MON, MIT, FRE, SAM) wurden visuell zurückgenommen (`rgba(255, 255, 255, 0.015)` Hintergrund, hauchdünne `0.04`-Kontur). Dadurch stechen die aktiven Trainingstage (DIE 5.5k GA1, DON 4.0k Aktivierung, SON 10.0k Martinslauf) mit klarem Kontrast hervor.
    - *Wochenfokus Strip:* Der graue Kasten und das blaue Badge-Kästchen wurden durch ein elegantes, rahmenloses Editorial-Layout mit oberer Haarlinie (`border-top: 1px solid rgba(255, 255, 255, 0.08)`) und cyanfarbener Typografie ersetzt.
    - *Sonntag Race-Karte:* Die gedrängten Doppel-Buttons wurden durch einen einzigen, aufgeräumten `Briefing ↗`-Button ersetzt.
  - **Wettkampf-Briefing Drawer (Race Briefing):**
    - Die separaten Kasten-Container (`.race-section` mit Hintergrund und Rahmen) wurden aufgelöst. Die Sektionen (*Strecke & Logistik*, *Pacing & Herzfrequenz*, *Strecke & Verpflegung*) sind nun durch feine Haarlinien gegliedert. Ein sauberes, redaktionelles Apple-Briefing-Dokument ohne Box-in-Box-Effekt.
  - **Logging Drawer & Modal Abhebung vom Hintergrund:**
    - Das Logging-Feld (`.m-sheet`) hebt sich nun mit einer eleganten, angehobenen Oberfläche (`#202334`), oberer Lichtkante (`border-top: 1.5px solid rgba(255, 255, 255, 0.28)`) und tiefem Weichzeichner-Schatten deutlich vom schwarzen Hintergrund ab.
    - Eingabefelder (`.s-field`) sind als dezente Vertiefungen (`#151722`) mit feiner Kontur gestaltet, die beim Fokussieren cyanfarben aufleuchten.
  - **Keine BPM-Vollanzeige in der Wochenübersicht:**
    - Raw BPM-Werte wurden aus den Übersichtskarten entfernt. Die Wochenansicht bleibt ruhig.
    - Erst beim Antippen eines Tages zeigt der Drawer die vollständigen physiologischen Spezifikationen (Pulsdeckel, Sprechgrenze VT1 105–118 bpm, Kilometer und Fokus).
  - **7-Tage-Passung auf iPhone 13 mini Screen:**
    - Zeilenhöhe (`.m-row`) auf 48 px und Abstände auf 5 px optimiert, Fortschrittsbalken gestrafft.
    - Alle 7 Wochentage plus der AirDrop-Sync-Button passen vollständig ohne vertikales Scrollen auf das iPhone 13 mini Display.
  - **Synchronisiert:** Umgesetzt in `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Automatisierte AirDrop & Peer-to-Peer 1-Click Synchronisation (v9.65 / State 9.73):**
  - **Reines Mobile-Logging-Paradigma:** Der Athlet nutzt das iPhone als einziges Eingabemedium für Trainingseinheiten; das MacBook Pro dient ausschließlich der passiven Wochen- und Saisonanalyse.
  - **AirDrop 1-Click Export auf dem iPhone:**
    - Unter der Wochenliste (`#mList`) wurde der Button **`📡 An MacBook senden (AirDrop)`** integriert.
    - Tippt der Athlet darauf, öffnet sich das native iOS-Share-Sheet (`navigator.share`). Ein Fingertipp auf das MacBook Pro in der AirDrop-Reihe überträgt den komprimierten Datensatz direkt.
  - **Vollautomatischer Empfang auf dem MacBook Pro:**
    - macOS empfängt den Link per AirDrop und öffnet die Web-App.
    - Die Funktion `checkUrlImport()` erkennt den `?import=`-Parameter, decodiert die Läufe, merged sie verlustfrei in den Mac-`localStorage` (`drachenlauf_runs`), bereinigt die URL und rendert die Wochenansicht neu.
    - Ein nativer Apple HIG Toast-Banner (`#appToast`, grün leuchtend mit Weichzeichner) bestätigt den Import: `✓ X Läufe vom iPhone erfolgreich synchronisiert!`.
  - **Zusätzlicher Desktop Sync-Hub:**
    - In der Desktop-Kopfzeile wurde ein dezenter Button `[ 📡 Sync ]` ergänzt.
    - Öffnet bei Bedarf ein macOS-Modalfenster mit Einblick in die Anzahl gespeicherter Läufe und der Option, Datensätze direkt aus der Apple *Universellen Zwischenablage* (`navigator.clipboard`) einzufügen.
  - **PWA & Web-App-Vollbild:** Apple Touch Icon (`apple-touch-icon.png`) und `manifest.json` für saubere Home-Screen-Integration hinterlegt.
  - **Synchronisiert:** Umgesetzt in `index.html`, `preview_jahres_dashboard.html`, gespiegelt nach `dist/`.

- **Single Master Coach Deployment, Desktop Modal & Mobile Feinschliff (v9.64 / State 9.72):**
  - **Single Master Coach als `index.html` auf GitHub Pages:**
    - Das bisherige Jahres-Dashboard (`preview_jahres_dashboard.html`) wurde zum alleinigen Hauptsystem (`index.html`) befördert.
    - Der alte Drachenlauf-Coach wurde sicher als `archive_drachenlauf_index.html` archiviert.
    - **Apple HIG Auth Gate integriert:** Passwortschutz (`#authGateModal`, Frage: *„Was riss Hermännsche am Strand von Charita?“*, Passwörter: `achilles` / `achillessehne`) fest im neuen Coach verankert. Sowohl `coach_authenticated` als auch die bestehende `drachenlauf_authenticated` Session werden akzeptiert, sodass aktive Browser-Sessions ohne erneute Passworteingabe entsperrt bleiben.
  - **Desktop vs. Mobile Modal-Differenzierung:**
    - *Desktop MacBook Pro (> 600 px):* Klick auf einen Wochentag oder Loggen öffnet ein zentriertes macOS Apple HIG Modaldialog-Fenster (`.m-sheet`) mit runden Ecken (`border-radius: 20px`), Schließen-Button `✕` (`.s-modal-close`) oben rechts und abgedunkeltem Glas-Backdrop (`backdrop-filter: blur(14px)`). Die mobile Swipe-Pille (`.m-grab`) wird auf dem Desktop vollständig ausgeblendet.
    - *Mobile iPhone 13 mini (≤ 600 px):* Bleibt als nativer iOS Bottom Sheet erhalten, der vom unteren Bildschirmrand einfährt (`bottom: 0`, `border-radius: 20px 20px 0 0`), mit Swipe-Pille (`.m-grab`), Schließen per Tap auf das Backdrop oder Swipe.
  - **Dynamische Tages- & Datumskalibrierung (Dienstag 03.11):**
    - `isToday` ist nicht mehr statisch an Montag gebunden.
    - Neue Hilfsfunktion `isDayToday(day)` gleicht das reale Systemdatum (`new Date()`, z. B. `03.11`) dynamisch ab.
    - Dienstag, 03.11.2026 ist nun auf Desktop (`card-today`, `HEUTE`-Badge) und Mobile (`m-row today`, cyanfarbene Umrandung) aktiv als aktueller Tag hervorgehoben. Montag 02.11 ist als normaler Ruhetag/Regeneration dargestellt.
  - **Mobile Typografie & Navigations-Pfeile deutlich verstärkt:**
    - *Navigations-Pfeile (`.m-step`):* Auf 42 × 42 px vergrößert, Hintergrund `#222534`, Kontur `1.5px solid rgba(255, 255, 255, 0.28)`, weiße Chevrons `‹` / `›` mit Drop-Shadow (`0 4px 12px rgba(0,0,0,0.45)`). Im Außenbereich sofort erkennbar und haptisch sicher bedienbar.
    - *Subcopy Typografie (`.m-tag`):* Auf **`0.96rem` (~15.4px)** vergrößert, Schriftgewicht auf `700` angehoben und Farbe auf `#E5E5EA` (Hochkontrast-Hellgrau) gesetzt. Einheitenbezeichnungen wie `✓ Locker GA1 · 40 min`, `Regeneration`, `Aktivierung` sind gestochen scharf lesbar.
    - *Vertikaler Platz & Zeilenhöhe:* Zeilen-Min-Height auf **56 px** erweitert (`padding: 0.45rem 0.85rem`, Abstand 6 px). Alle 7 Tage passen weiterhin perfekt auf das iPhone 13 mini Display (812 px Gesamthöhe), nutzen aber die vertikale Achse großzügig aus.
  - **Synchronisiert:** Umgesetzt in `preview_jahres_dashboard.html`, `index.html`, `archive_drachenlauf_index.html`, gespiegelt nach `dist/`.

- **Briefing Drawer Verdichtung & Neuer Fokus-Text (v9.63 / State 9.71):**
  - **Verdichtung der Martinslauf Briefing Card:**
    - Hero oben: `SUB 58:00 · 5:48 min/km · Start 11:45 Uhr` mit Direktlink-Button `Offizielle Ausschreibung & Infos ↗`.
    - Sektion *Strecke & Logistik*: 10,0 km · flach · ca. 10 Hm / Start: Strandbad Süd, Unterbacher See / Adresse: Am Kleinforst 275, Düsseldorf.
    - Sektion *Pacing & Herzfrequenz*: Saubere 3-spaltige Matrix (`Abschnitt` | `Pace` | `Herzfrequenz`):
      - KM 0–3: 5:50–5:55 min/km | < 118 bpm (bewusst auf individuelle VT1 kalibriert)
      - KM 3–7: ca. 5:45 min/km | 120–125 bpm
      - KM 7–10: nach Gefühl steigern | Endbeschleunigung
      - Klare Rennanweisung: *Rennstrategie: Kontrolliert anlaufen, Rhythmus finden, ab KM 7 beschleunigen.*
    - Sektion *Strecke & Verpflegung*: Flache Natur- und Parkwege, Windfaktor an offenen Wasserpassagen, keine Eigenverpflegung nötig, Zielverpflegung: Weckmann.
  - **Neuer Fokus-Text auf der Startseite (KW 45):**
    - Zweizeiliger Text:
      *Frische für den 48. Martinslauf am Sonntag sichern. 10 km am Unterbacher See, Start 11:45 Uhr. Pacing: 5:50 → 5:45 → 5:35 min/km.*
      *Samstag, 07. November: Ruhetag & Pre-Race-Carboload.*
    - Integriert in Desktop-Strip (`weekSummaryStrip`), Mobile-Header (`mFocus`) und `weeksData[45]`.
  - **Synchronisiert:** Umgesetzt in `preview_jahres_dashboard.html`, `index.html` (Script-Version `v=9.63`), gespiegelt nach `dist/`.

- **Mobile View Optimierung (iPhone 13 mini), Kontrast & Veranstalter-Link (v9.62 / State 9.70):**
  - **7 Tage Screen-Fit & BPM-Entschlackung in der Wochenübersicht:**
    - BPM-Vorgaben wurden aus den mobilen Zeilen (`.m-row`) entfernt, um visuelle Überladung zu verhindern. Zeilen zeigen sauber Tag/Datum, Distanz/CHILL (`5.5 KM`, `CHILL`) und Subcopy (`Locker GA1`, `Regeneration`, `Aktivierung`).
    - Rechts wird bei geloggten Läufen ein dezenter grüner Haken `✓` angezeigt, bei anstehenden Läufen ein dezenter Chevron `›` bzw. heute `Loggen`.
    - Durch Ausblenden der mehrzeiligen Textzusammenfassung (`.m-focus`) mobil und Justierung der Zeilenhöhe auf 48 px passen alle 7 Wochentage (MON bis SON) vollständig auf das iPhone 13 mini Display (375 × 812 px) ohne vertikales Scrollen unter die Safari-Adressleiste.
  - **Typografie Subcopy angehoben:**
    - `.m-tag` wurde von 0.72rem auf **`0.85rem` (~13.6px, Apple HIG `sm` Token)** angehoben, um die Lesbarkeit im Freien zu garantieren.
  - **Veranstalter-Link zum Martinslauf (SFD '75 Unterbacher See):**
    - Prominenter Button `Offizielle Ausschreibung · sfd.de/martinslauf ↗` ([https://www.sfd.de/martinslauf/](https://www.sfd.de/martinslauf/)) direkt im Hero-Bereich des Race Drawers und als Aktion im Tages-Detail-Sheet am Renntag integriert.
  - **Erhöhter Drawer- & Sheet-Kontrast:**
    - Bottom Sheet (`.m-sheet`) und Race Drawer (`.race-drawer`) auf `#1E202C` angehoben mit hellem Kontur-Rand (`1.5px solid rgba(255, 255, 255, 0.22)`) und 60px Drop-Shadow.
    - Eingabefelder (`.s-field`) und Infokarten (`.s-cell`) heben sich mit `#26293A`, weißer Eingabetypografie (`#FFFFFF`, `1.30rem`) und Cyan-Fokus-Glow deutlich vom schwarzen Hintergrund ab.
  - **Tages-Detail-Sheet mit BPM & VT1-Spezifikation:**
    - Beim Antippen eines Tages öffnet sich das Sheet und zeigt die vollständigen Vorgaben: Distanz, Puls-Vorgabe (BPM), Fokus sowie physiologische Referenz (`VT1 Sprechgrenze: 105–118 bpm`).
  - **Lauf vom 03.11 fest hinterlegt:**
    - Die heute morgen auf dem Smartphone geloggte Einheit (5,5 km, 40 min, 10 Hm, 117 bpm, Locker GA1) wurde in `app.js` (`defaultInitialRuns`) und `preview_jahres_dashboard.html` (`loadRuns()`) dauerhaft eingespeist und erscheint somit auch auf dem Desktop sofort als erledigt.
  - **Synchronisiert:** Umgesetzt in `preview_jahres_dashboard.html`, `app.js`, `index.html` (Script-Version `v=9.62`), gespiegelt nach `dist/`.

- **Korrektur Martinslauf: 48. SFD '75 Martinslauf am Unterbacher See in Düsseldorf (v9.61 / State 9.69):**
  - **Präzisierung Veranstaltungsort & Logistik:**
    - Zuvor war fälschlicherweise der Bonner Martinslauf hinterlegt. Korrigiert auf den realen Lauf: **48. SFD '75 Martinslauf am Unterbacher See in Düsseldorf** ([sfd.de/martinslauf](https://www.sfd.de/martinslauf/)).
    - **Eckdaten & Logistik im Race Briefing:**
      - Startzeit: Sonntag, 08. November 2026 um **11:45 Uhr** (10 km Hauptlauf / Volkslauf).
      - Startort: Strandbad Süd, Unterbacher See (Am Kleinforst 275, 40627 Düsseldorf).
      - Strecke: 10,0 km flach (~10 Hm), schnelle Natur- und Parkwege rund um den See, offene Passagen windanfällig.
      - Verpflegung & Besonderheit: Traditioneller Weckmann im Ziel.
    - Direkte Link-Verknüpfung zur offiziellen SFD '75 Ausschreibung im Slide-Over Drawer und in der Saison-Meta-Zeile.
    - Wochenkarte KW 45 und Tageskarte (SON 08.11) auf `Martinslauf (U-See D'dorf)` aktualisiert.
  - **Synchronisiert:** Umgesetzt in `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, `index.html` (Script-Version `v=9.61`), gespiegelt nach `dist/`.
- **Responsive Mobile View (≤ 500px, iPhone 13 mini) & Quick-Log Bottom Sheet (v9.60 / State 9.68):**
  - **Ergonomische Mobile-Wochenbühne (≤ 500 px Viewport):**
    - Bei Viewport-Breiten bis 500 px (z. B. iPhone 13 mini, 375 × 812 px) schaltet das Dashboard automatisch vom 7-Spalten-Desktop-Grid auf die vertikale Apple-Fitness-Kompaktliste um.
    - Alle 7 Tage der Woche liegen als 64 px schlanke Zeilen komplett ohne vertikales Scrollen im Sichtbereich.
    - Kompakter Header mit KW-Stepper (`‹ KW 47 ›`), Titel und Datumsbereich. Saison-/Quartalsansicht wird mobil ausgeblendet.
    - Fortschrittsbalken mit dynamischer Ist/Soll-Berechnung (`8.2 / 34.0 km`) direkt aus den realen Logs.
  - **Apple HIG Quick-Log Bottom Sheet & Datensynchronisation:**
    - Ein Tap auf eine beliebige Tageskarte (Desktop oder Mobile) öffnet das von unten einschiebbare Bottom Sheet mit Vorgaben (Puls, Hm, VT1 105–118 bpm) und 4 nummerischen Schnellfeldern (`Distanz`, `Dauer in Min`, `Ø HF`, `Hm`).
    - Gespeicherte Läufe werden direkt in den gemeinsamen Speicher `drachenlauf_runs` (identisch zu `app.js`) geschrieben und schlagen sofort auf Desktop und Mobile durch (`✓ Erledigt`, `✓ 116 bpm`, Kilometerfortschritt).
    - Schließen per Swipe-Down, Backdrop-Tap oder Escape.
  - **Synchronisiert:** Umgesetzt in `preview_jahres_dashboard.html`, `index.html` (Script-Version `v=9.60`), gespiegelt nach `dist/`.
- **Longrun-Auszeichnung in Apple Blue (#0A84FF) & Card-Akzentuierung (v9.59 / State 9.67):**
  - **Behebung des CSS-Fallbacks:**
    - Zuvor war `--apple-blue` in `:root` nicht deklariert, weshalb `var(--apple-blue)` bei Einheiten mit `isLongrun: true` auf den Standardwert `inherit` zurückfiel und die Distanzziffern (`16.0`, `18.0`) in Weiß erschienen.
    - `--apple-blue: #0A84FF;` (Apple HIG Dark Mode System Blue) wurde in `:root` von `tokens.css`, `styles.css` und `preview_jahres_dashboard.html` integriert.
  - **Farbliche Hierarchie der Longrun-Karten:**
    - Longrun-Distanzziffern (`hero-val`) und Einheit (`hero-unit`) leuchten nun in Apple Blue (`#0A84FF`), kongruent zur Benchmark-Pille oben rechts (`34,0 km · 16k Erkrath (+350 Hm)`).
    - Longrun-Tags (`Longrun Erkrath`, `Key Longrun`) tragen die gleiche blaue Typografie.
    - Neue Klasse `.apple-day-card.card-longrun`: Subtiler blauer Rahmen (`border: 1.5px solid rgba(10, 132, 255, 0.35)`) und dezenter Blauschimmer im Gradienten heben die Schlüsseleinheiten optisch klar über die grünen GA1-Werktagsläufe (8k/10k) heraus, ohne mit dem orangen Alarm/Fokus eines Renntags zu konkurrieren.
  - **Synchronisiert:** Umgesetzt in `tokens.css`, `styles.css`, `preview_jahres_dashboard.html`, `index.html` (Script-Version `v=9.59`), gespiegelt nach `dist/`.
- **Harmonisierung der Wort-Labels (CHILL, STUDIO, WANDERN) & Vertikale Fluchtung (v9.58 / State 9.66):**
  - **Typografische Vereinheitlichung auf 1.15rem:**
    - Zuvor wiesen die verbalen Kartenlabels unterschiedliche Schriftgrößen auf: `STUDIO` (1.85rem), `WANDERN` (1.65rem) und `CHILL` (1.45rem), was zu einer optischen Überbetonung von Ruhetagen und Alternativtrainings gegenüber den eigentlichen Lauftagen führte.
    - Alle drei Wörter wurden über die neue Klasse `.hero-word-val` (sowie harmonisiertes `.hero-rest-txt`) strikt auf **`1.15rem` (~18.4px, `font-weight: 800`, `letter-spacing: 0.05em`, Apple HIG Token `lg` aus `DESIGN.md`)** vereinheitlicht.
  - **Baseline-Fixierung (.hero-val-wrap):**
    - Durch `min-height: 38px; display: flex; align-items: baseline; gap: 0.25rem;` sitzen alle Text- und Distanzlabels (`CHILL`, `STUDIO`, `WANDERN`, `6.0 KM`, `10.0 KM`) auf der identischen horizontalen Grundlinie.
    - Die darunterliegenden Badges/Tags (`Ruhe`, `Locker GA1`, `Rumpf & Stabi`, `Wandertour`) fluchten tagübergreifend perfekt ohne vertikales Springen.
  - **Synchronisiert:** Umgesetzt in `preview_jahres_dashboard.html`, `styles.css`, `index.html` (Script-Version `v=9.58`), gespiegelt nach `dist/`.
- **Option A (Apple HIG Slide-Over Drawer) & Sanftere Sonntags-Ziffern (v9.57 / State 9.65):**
  - **Option A (Slide-Over Drawer) implementiert:**
    - Klick auf eine Race-Card in der 7-Tage-Bühne (`SON 08.11 Martinslauf`, `SON 06.12 7G-HM`) oder auf einen gesetzten Renntag im Saisonkalender (z. B. 07. März Belgenbach, 12. Juni TS16, 24. Okt Drachenlauf) öffnet ein dezent von rechts einschwebendes Apple Inspector-Panel (`race-drawer`, 420 px breit, Glassmorphism `rgba(20, 20, 28, 0.95)`, `backdrop-filter: blur(32px)`).
    - Enthält das vollständige operative Briefing ohne Layout-Bruch: Eckdaten & Logistik (Startzeit, Startort, Distanz, Wetter), Pacing- & HF-Zonenvorgabe (negativer Split, Anstiege strikter Gehschritt), Verpflegungs- & Carboload-Plan sowie Ausrüstung.
    - Schließt flüssig per Klick auf `✕`, Klick auf den Backdrop oder `Escape`-Taste.
  - **Sanftere Sonntags-Auszeichnungsfarbe im Kalender:**
    - Der aggressive rote System-Alarmton (`#FF453A`) für Sonntagsziffern wurde durch eine weiche, gedämpfte Terracotta-Rose-Nuance (`rgba(255, 140, 130, 0.70)`) ersetzt.
    - Bewahrt die kalendarische Wochenend-Unterscheidung gegenüber den Werktagen (`#A1A1A6`), eliminiert jeglichen optischen Alarm-Charakter und lässt die echten Renntage in Orange (`#FF9F0A`) ungestört hervortreten.
  - **Synchronisiert:** Umgesetzt in `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, `index.html` (Script-Version `v=9.57`) und nach `dist/` gespiegelt.
- **Klickbare linierte Race-Optionen mit Anmeldelinks & KW 46 Wander-Anpassung (v9.56 / State 9.64):**
  - **Interaktive Race-Optionen:**
    - Die gestrichelten Tageszellen im Saisonkalender (3. Juli Primiero, 5. Sept Opale, 11. Sept Müllerthal, 7. Nov U-See, 5. Dez 7G-HM) sind voll interaktiv klickbar.
    - Im Initialzustand des Sommers bleibt die Fokus-Leiste neutral (`Vielleicht gibt es noch Laufoptionen hier`).
    - Bei Klick auf das jeweilige gestrichelte Datum erscheint in der zentrierten Zeile darunter sofort die konkrete Beschreibung inklusive Direktlink zur Anmeldung (z. B. `Option: 03. Juli 2027 · Primiero Dolomiti Marathon (26 km · 1.200 Hm Downhill) · Zur Anmeldung / Infos ↗`).
  - **KW 46 Anpassung (14./15. Nov Wochenende):**
    - Kein 14k Longrun in Erkrath am Samstag 14.11., da der Athlet am Wochenende verreist beim Wandern ist.
    - Samstag 14.11.: `WANDERN` (Tag: `Wandertour`, Sub: `Verreist · Aerobe Basis`, grün).
    - Sonntag 15.11.: `WANDERN` (Tag: `Wandertour`, Sub: `Verreist · Aktive Erholung`, grün).
    - Wochen-Benchmark: Angepasst auf `14,0 km Lauf + Wandern` (Di 6k Rekom, Do 8k Locker).
    - Wochenfokus: Auf die schonende aerobe Basiskomponente des Wanderns nach dem Martinslauf ausgerichtet.
  - **Synchronisiert:** Umgesetzt in `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, `index.html` (Script-Version `v=9.56`) und nach `dist/` gespiegelt.
- **Restlose Icon-Eliminierung & Race-Color Harmonisierung (Orange) (v9.55 / State 9.63):**
  - **Typografische Ruhe (Alle Icons/Emojis entfernt):** Sämtliche Icons (`⏱️`, `🧭`, `🏁`, `💡`, `🔵`, `🟢`) wurden aus dem gesamten Interface entfernt:
    - Master-Header: `Training` | `Saison 2027` (ohne Uhr/Kompass).
    - Week-Pills: `KW 45 Martinslauf` und `KW 49 7G-HM` (ohne Zielflaggen).
    - Meta-Fokusleiste & Tooltips: `Ziel: 07. März · Belgenbachtrail`, `Vielleicht gibt es noch Laufoptionen hier`, `Zuspitzung & Tapering...`, `Post-Race Erholung...` rein als präziser Apple SF Text.
    - Day-Cards: `SON 08.11` Tag `Martinslauf`, Badge `Martinslauf`.
  - **Farbsemantik Renntag (Rot ➔ Orange):**
    - Rot (`#FF453A`) signalisiert in Sport-Dashboards Gefahr, Überlastung oder Warnung. Renntage wurden daher einheitlich auf **Apple Orange** (`var(--apple-orange, #FF9F0A)`) umgestellt.
    - Vollständige Harmonisierung zwischen Wochen- und Saisonansicht:
      - Wochenkarte: Orange Rahmen, dezenter Orange-Gradient, orangefarbene `10.0 KM` Typografie, orangefarbene Benchmark-Pille `Zielzeit Sub 58 min` und oranger Status-Dot.
      - Saisonkalender: Die Ziffern der gesetzten Renntage (z. B. 7. März Belgenbach, 12. Juni TS16, 24. Okt Drachenlauf) leuchten in Orange (`var(--phase-race-bg: #FF9F0A)` mit Orange Glow `rgba(255, 159, 10, 0.40)`), 100% kongruent zur orangefarbenen Zielzeile darunter.
  - **Synchronisiert:** Umgesetzt in `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html`, `index.html` (Script-Version `v=9.55`) und nach `dist/` gespiegelt.
- **Campingurlaub entfernt & Optionen neutralisiert (v9.54):**
  - **Juni rein sportlich (Weg 1):** Der gelbe Urlaubsstreifen (`phase-vacation`) wurde ersatzlos gestrichen. Der Juni bildet rein die Sportphysiologie ab: 01.–11. Juni (🔵 Tapering / Feinschliff), 12. Juni (🔴 🏁 TS16 Sky Run 16,9 km / 850 Hm) und 13.–26. Juni (🟢 2 Wochen Rekom & Regeneration).
  - **Optionen ohne Namensnennung:** In der unteren Fokus-Leiste werden keine potenziellen Wettkämpfe mehr namentlich vorweggenommen. Im Sommer steht neutral: `💡 Vielleicht gibt es noch Laufoptionen hier`. Auch bei Klick auf optionale Tage wird rein dieser Hinweis eingeblendet.
  - **Herbst:** Zeigt in der Leiste ausschließlich das gesetzte Hauptziel `🏁 Ziel: 24. Oktober · Drachenlauf (26,0 km · 1.250 Hm)`.
  - **Synchronisiert:** Umgesetzt in `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html` und `dist/`.
- **Saison 2027: Reine 4-Jahreszeiten-Architektur (Lösung A) umgesetzt (v9.53):**
  - **Beseitigung der Januar-Dopplung:** Der logische Fehler (Januar 2027 als Verlegenheits-Platzhalter im „Finale '26“ und parallel im „Winter“) wurde vollständig behoben.
  - **4 reine Jahreszeiten für 2027:** `Finale '26` wurde aus dem Saison-2027-Tab gestrichen. Das operative Restjahr 2026 ist bereits zu 100% im *Training-Tab* (KW 45–49) verankert.
  - **Der Saison-Pager umfasst nun exakt 4 Quartale:**
    1. **Winter:** Januar – März 2027 *(🏁 Ziel: 07. März · Belgenbachtrail 30,7 km / 941 Hm)*
    2. **Frühling:** April – Juni 2027 *(🏁 Ziel: 12. Juni · Tschirgant Sky Run TS16 16,9 km / 850 Hm)*
    3. **Sommer:** Juli – September 2027 *(💡 Vielleicht gibt es noch Laufoptionen hier)*
    4. **Herbst:** Oktober – Dezember 2027 *(🏁 Ziel: 24. Okt · Drachenlauf 26,0 km / 1.250 Hm)*
  - **Synchronisiert:** Umgesetzt in `preview_jahres_dashboard.html`, `preview_klassischer_3monats_kalender.html` und `dist/`.
- **Pixel-perfekte Harmonisierung & Zero-Layout-Shift (v9.52):**
  - **Typografie angeglichen:** Sowohl `.week-headline` (Training) als auch `.month-title` (Saison) besitzen exakt dieselben typografischen Parameter: `1.35rem` (SF Pro Display, 800er Schnitt, `-0.015em` Letter-Spacing, `#FFFFFF`).
  - **Container-Geometrie 1:1 deckungsgleich:** `body` Padding (`1.75rem 2rem`), `.app-container` Gap (`1.25rem`), `header` Padding-Bottom (`1.25rem`) und `.view-panel` Gap (`1.25rem`) sind tab-übergreifend absolut identisch.
  - **Sub-Navigations-Höhe harmonisiert:** Beide Steuerleisten (`.week-selector-bar` und `.season-header`) haben exakt `44px` Containerhöhe und `margin-bottom: 0`. Die Kapseln und Pager-Buttons (`44px` Höhe / Durchmesser) sitzen auf derselben vertikalen Y-Koordinate.
  - **Karten-Container angeglichen:** `.calendar-week-card` und die 3 `.month-block` Kacheln teilen denselben `border-radius: 24px`, dieselbe Rahmenfarbe, Schattenwurf und Hintergrund-Blur.
  - **Beseitigung aller Tab-Jumps (Zero-Shift):** Sämtliche sprunghaften `body.season-active` Overrides wurden restlos entfernt. Die `translateY(3px)` Animation wurde durch einen reinen Opacity-Crossfade ersetzt und `overflow-y: scroll` fixiert, sodass beim Umschalten zwischen *Training* und *Saison 2027* kein Element mehr vertikal oder horizontal verspringt.
- **Training-Tab Header-Symmetrie (Lösung 1) & Zentrierung (v9.51):**
  - **Symmetrie über der 7-Tage-Bühne:** Die 5 Wochen-Pills (`[KW 45 🏁 Martinslauf]` bis `[KW 49 🏁 7G-HM]`) wurden auf `justify-content: center` umgestellt.
  - **Beseitigung des „Schwarzen Lochs“:** Das 800 px breite Leerraum-Phänomen links sowie das visuelle „Stacked Segmented Controls“-Anti-Pattern (zwei Pillenleisten rechts übereinander) wurden vollständig aufgelöst.
  - **Einheitliche UX-Architektur über beide Tabs:** Sowohl der *Training-Tab* (Wochen-Pills) als auch der *Saison-Tab* (Apple Kalender Pager) besitzen nun exakt dieselbe visuelle Balance: Oben rechts der Master-Switcher, auf der Sub-Ebene die Navigation mittig im Schwerpunkt über dem Content-Grid.
- **Apple Kalender Pager (Lösung B) & 5-Wochen-Fokus (v9.50):**
  - **Saison-Tab Pager (Lösung B):** Die 5 gestapelten Quartals-Pills in der rechten Ecke wurden durch einen zentrierten Apple-Kalender Pager (`‹` `Frühling · Apr – Juni 2027` `›`) ersetzt. Behebt das „Stacked Controls“-Anti-Pattern nach Apple HIG und stellt die optische Symmetrie über den 3 Monatsblöcken her. Pfeiltastennavigation (Links/Rechts) aktiv.
  - **5-Wochen-Trainingsbogen:** KW 50 (Saisonpause) aus der Trainingsleiste entfernt. Der Plan fokussiert sich exakt auf den 5-Wochen-Bogen von KW 45 (Martinslauf) bis KW 49 (Siebengebirgs-HM).
- **Vorwochen-Rückblick entfernt & Periodisierungs-Logik 2027 geklärt (v9.49):**
  - **Bereinigung:** Das untere Dropdown für die Vorwoche (`.retro-details` KW 44) wurde ersatzlos gestrichen. Die Trainingsansicht endet nun bündig mit der Wochenfokus-Leiste der Hauptbühne.
  - **Periodisierungs-Architektur für Januar 2027:** Die Pill-Leiste der Hauptbühne ist kampagnenbezogen. Aktuell umfasst sie den Block *Finale '26* (KW 45 bis KW 50). Ab dem 04. Januar 2027 schaltet sie nahtlos auf die 9 spezifischen Aufbauwochen des *Belgenbachtrails* (KW 1 bis KW 9 · 30,7 km / 941 Hm am 07.03.2027) um.
  - **Architektur-Entscheid (Weg A bestätigt):** Strikt getrennte Abstraktionsebenen. Der Saisonkalender bleibt reine Makro-Planung (Klicks auf Tage/Phasen aktualisieren die zentrierte Meta-Leiste mit Event-Details und Anmeldelink, kein automatisches Teleportieren zwischen Tabs). Der Ebenenwechsel erfolgt ausschließlich bewusst über den Master-Header (`Training` vs. `Saison 2027`).
- **Radikale Bereinigung: „Single Stage“-Architektur im Training-Tab (v9.48):**
  - **Eliminierung aller Sub-Tabs & Schachtelungen:** Der bisherige Umschalter `[14-Tage Fokus]` vs. `[6-Wochen-Plan]`, alle verschachtelten Accordions und 42 Mini-Tageskarten wurden komplett entfernt.
  - **Feste Hauptbühne:** Es gibt auf dem gesamten Screen nur noch **EINE** 7-Tage-Ansicht in voller Apple-Größe (210 px hohe Karten, große Ziffern, keine geschachtelten Kacheln).
  - **Schlanke Wochenauswahl (Pill-Leiste):** Direkt über der 7-Tage-Woche liegt die Wochen-Pill-Leiste (`KW 45 · Martinslauf`, `KW 46 · Post-Race`, `KW 47 · Aufbau I`, `KW 48 · Peak 38k`, `KW 49 · 7G-HM`, `KW 50 · Pause`). 1 Klick wechselt sofort die 7 Tage, den Header und das Wochenziel.
  - **Visuelle Symmetrie:** Training-Tab und Saison-Tab besitzen nun exakt denselben Aufbau: Oben rechts eine elegante Segmented Control, darunter die ruhige Hauptbühne ohne überladenes UI-Rauschen.
- **Inline-Accordion (Option A) & Saison-Header Bereinigung (v9.47):**
  - **6-Wochen-Plan als Inline-Accordion:** Das bisherige Overlay-Modal (`#weekModalBackdrop`) wurde vollständig entfernt. Klick auf eine Woche (KW 45–50) klappt die 7 Tage und den Wochenfokus direkt unter der Zeile als schlankes Inline-Accordion auf. KW 45 (Martinslauf-Rennwoche) ist standardmäßig aufgeklappt.
  - **Saison-Headline eliminiert (Lösung 1):** Die redundante linke Überschrift (`Winter`, `Frühling` etc.) im 3-Monats-Kalender wurde ersatzlos gestrichen. Die Segmented Control (`Finale '26`, `Winter`, `Frühling`, `Sommer`, `Herbst`) ist rechtsbündig ausgerichtet und bildet dieselbe saubere vertikale Achse wie der Trainingsmodus-Umschalter im Nachbartab.
  - **Synchronisiert:** Umgesetzt in `preview_jahres_dashboard.html` und `preview_klassischer_3monats_kalender.html`.
- **Bereinigung UI & Saison-Namen harmonisiert (v9.46):**
  - **Hero-Strip entfernt:** Die redundante Banner-Box im Training-Tab wurde komplett entfernt. Die Benchmark (`Zielzeit Sub 58 min`) sitzt jetzt dezent und bündig direkt rechts in der Wochen-Header-Zeile (`Diese Woche KW 45 • Martinslauf`).
  - **Quartals-Button-Namen:** Buttons im 3-Monats-Kalender auf die 5 klaren Bezeichnungen harmonisiert: `Finale '26`, `Winter`, `Frühling`, `Sommer`, `Herbst` (technische Q-Codes und Eventnamen entfernt).
- **Hero-Strip Typografie angepasst (v9.45):**
  - Datum prominent und groß: `So. 8.11.` (1.75rem / 800)
  - Event als Akzent-Subline: `10k Martinslauf` (1.05rem / Cyan)
- **Anmelde-URLs für optionale Wettkämpfe aktualisiert (v9.44):**
  - Primiero Dolomiti Marathon: `https://primierodolomitimarathon.it/en/entry/`
  - Ultra Trail Müllerthal (UTML): `https://www.utml.lu/`
  - Siebengebirgs-Halbmarathon: `https://siebengebirgsmarathon.net/`
- **Korrektur Martinslauf U-See 2027 & Klickbare Anmeldelinks (v9.43):**
  - **Datumskorrektur:** Die Option „Martinslauf Unterbacher See (5,8 km Seerunde)“ ist exakt auf das Jahr 2027 (Sonntag, 07. November 2027) in Q4 verortet. Samstag 07.11.2026 bleibt reiner Pre-Race Ruhetag für den 10k Hauptlauf am 08.11.2026.
  - **Klickbare Anmeldelinks bei optionalen Läufen:** Bei Klick auf einen optionalen Lauf im 3-Monats-Kalender (Dolomiti, Opal, UTML, Martinslauf U-See 2027, 7G-HM 2027) wird der offizielle Anmeldelink/Info-Link direkt klickbar in der zentrierten Zielzeile gerendert.
  - **UI-Reduktion:** Überflüssige „Ruhe“-Pills und Dots wurden entfernt, die Tag-Zeilen harmonisiert und der Haupt-Header auf „Diese Woche KW 45 • Martinslauf“ reduziert.
- **Viewport-adaptive Saison-Ansicht (v9.42):** Die Zeilenhöhe der 3-Monats-Kalender skaliert per CSS-Variable (--cal-row-h = clamp(32px, (100vh - 435px) / 6, 56px)) mit der Fensterhöhe. Alle Monatskarten reservieren 6 Wochenzeilen (einheitliche Kartenhöhe), sodass auch Monate mit 6 Zeilen (z. B. Mai 2027) die Ereigniszeile ohne Scrollen zeigen. Getestet bei 1440x720 und 1280x600.
- **Design System & Martinslauf U-See Synchronisation (v9.41):**
  - **Option 07. Nov (Martinslauf Unterbacher See):** Als Option (5.8 KM · Seerunde / Vorbereitung) in KW 45 und im Finale '26 3-Monats-Kalender (lila gestrichelt, interaktive Bubble) harmonisiert.
  - **Typografie & Farbpalette (Coach-Konsistenz):** Alle Day-Cards im Jahres-Dashboard und Detail-Modal wurden exakt auf die Coach-Designsprache (.apple-day-card, .hero-val-wrap mit .hero-val 2.35rem und .hero-unit 0.65rem KM, CHILL für Ruhetage, #30D158 Apple Green für absolvierte Läufe, #64D2FF Apple Cyan für Heute-Badges und #FF453A für Renntage) umgestellt.
  - **3-Monats-Kalender Layout:** Großzügiges Desktop-Layout (2rem Gap, 26px Border-Radius, 56px Zeilenhöhe, 1.25rem Schriftgröße) konsistent und ohne Clipping layoutet.


- **Kampagnenabschluss Drachenlauf 2026 (v9.35):** Am 24.10.2026 offiziell mit **DNS (Did Not Start)** abgeschlossen. Rationale Entscheidung nach überstandenem respiratorischen Infekt: Der Schutz von Herz-Kreislauf-System und Bronchien steht über dem Rennstart.
- **Gesamtertrag der Kampagne 2026:** **50 Einheiten · 422,4 km · 8.179 Hm** geloggt (Soll-Hm über 12.000). Die aerobe Grundausdauer (VT1 105–118 bpm), das Power-Hiking-Fundament und die intakte Sehnenstruktur wurden zu 100 % erhalten und unbeschadet für die Saison 2027 konserviert.
- **Nächste Saisonziele (Spätherbst 2026 & Saison 2027):**
  1. **Herbst-Abschluss 1 (10k Martinslauf Düsseldorf · 08.11.2026):** **Status: Fest angemeldet am 27.10.2026.** Ziel: **Sub 58:00 min** (Pace: 5:47 min/km, Ø 145–147 bpm, Max 166 bpm) auf Basis der Realdaten von 2025 (59:27 / 5:55 min/km).
  2. **Herbst-Abschluss 2 (Siebengebirgs-Halbmarathon Aegidienberg · 06.12.2026):** **Status: Fest angemeldet am 27.10.2026.** 21,4 km / 360 Hm (Komoot-Streckenprofil). Ziel: **Sub 2:20:00 h** (Erwartungswert: 02:18:30 h, Pace ~6:28–6:32 min/km, Ø 128–132 bpm) auf Basis der Realdaten (RheinCity HM 2025: 7:19 min/km @ 132 bpm flach; Erkrath 2026: 13,3 km / 333 Hm mit 7:12 min/km @ 115 bpm).
  3. **Frühjahrs-Anker (07.03.2027 · TV Konzen):** **Belgenbachtrail 30,7 km Strong-Trail de Luxe** (941 Hm · Limit 300 Starter) als primäres sportliches Ziel zur Abrufung der erarbeiteten Langstrecken-Form. Buchungsfenster: Mitte Dezember 2026 nach 7G HM. Nach 7G HM folgt eine 4-wöchige Reset-Phase (Dezember bis 04.01.2027), gezielter 9-Wochen-Aufbauplan startet am 05./06.01.2027.
  4. **Sommerurlaubs-Trail (05.06. – 25.06.2027 · Imst & Kaub):** 21-Tage-Rundreise mit Camping-Kraftwagen. Hinfahrt Sa 05.06. via Bodensee ➔ 14 Tage Standlager Campingpark FiNK (06.–20.06.) mit Tschirgant Sky Run **TS16 Adventure** (16,9 km · ~850 Hm) am Sa 12.06.2027 ➔ Rückreise-Etappe via Holzmaden bis **Kaub am Rhein** am Fr 25.06.2027 (Mittelrhein-Ausklang). Buchungsfenster: Dez 2026 / Jan 2027.
  5. **Herbst-Anker (Oktober 2027):** Drachenlauf 2027 (26 km / 1.250 Hm · Revanche auf bekannter Strecke).
  6. **Spätsommer-Kandidat (Mitte September 2027 · Heringer Millen / Luxemburg):** **Ultra-Trail du Mullerthal (UTML · Shorty-Trail: 21 km · ~700 Hm)** (`https://www.utml.lu/`). Reine Felsen-, Sandstein- und Wurzelschluchten der Kleinen Luxemburger Schweiz. 100 % im Sweet Spot (2:15–2:45 h). Fahrtzeit ab Ddorf nur ~2:15 h. Ideale natürliche Klimaanlage in schattigen Moosschluchten.
- **Plan KW 44 (26.10. – 01.11.2026):** Sanfte Wiedereinstiegswoche nach Infekt. Strikt tiefes GA1 (105–115 bpm), 3 kurze Läufe (5–7 km, max. 18–20 km gesamt), Beine lockern, volle Schleimhautregeneration.
- **Archivierung & Reuse-Status (v9.35):** Vollständiger JSON-Export unter `archive/drachenlauf_2026_campaign_data.json` hinterlegt; In-App-Backup-Button (`exportCampaignData()`) im Header aktiv.
- **Athletenprofil & Verletzungshistorie:** Der Athlet hatte **nie** einen Achillessehnen-Vorfall oder Sehnenschäden (die Sicherheitsfrage *„Was riss Hermännsche am Strand von Charita?“* bezog sich historisch auf Hermännsche, nicht auf den Athleten Gerhard!). Sehnen- und Wadenkomplex sind vollständig intakt, beschwerdefrei und voll belastbar. Krafttraining dient der reinen allgemeinen Prävention/Sarkopenie-Prophylaxe, keinerlei Reha.
- **Current Script Version:** `app.js?v=9.46` (in `index.html` and `dist/index.html`).
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
- **Drachenlauf Wetter- & Bodenkorrektur auf tiefen Schlamm nach 15–20 l Vorregen (v9.34):** Differenzierung zwischen Himmels- und Bodenlage eingepflegt: Am Lauftag trocken von oben (12–13 °C, 50 % Sonne, Böen 50–70 km/h), aber der Untergrund ist durch 15–20 l/m² Vorregen in der Nacht seifig, tief und stark aufgeweicht! Zwingend Schuhe mit tiefem Stollenprofil erforderlich (erhöhter Schlupf bergauf, Bremskräfte bergab). Zielzeitkorridor realistisch auf 3:50:00 – 4:05:00 Std. (Puffer bis 4:15:00 Std.) korrigiert.

---

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

### C2. Sommerurlaubs-Trail Imst & Mittelrhein 2027 (05.06. – 25.06.2027)
- **Reiseroute & 21-Tage-Bogen:**
  - *Etappe 1 (Sa 05.06. – So 06.06.):* Düsseldorf ➔ Lindau am Bodensee (5,5 Std. Fahrt, Einkehr/Rast) ➔ Imst (1,5 Std.).
  - *Etappe 2 (So 06.06. – So 20.06.):* 14 Tage Standlager Campingpark FiNK zu Imst (Tiroler Oberland). Vor den Sommerferien (NRW startet erst am 19.07.2027), milde Temperaturen 18–22 °C im Tal, kühle Nächte um 10 °C.
  - *Renntermin TS16:* **Samstag, 12. Juni 2027** (Start Sportzentrum Imst). Nach dem Lauf volle Folgewoche zur alpinen Regeneration und für gemeinsame Wandertouren ohne Rennfokus.
  - *Etappe 3 (Mo 21.06. – Fr 25.06.):* Rückreise gen Norden mit Wohnmobil. Kulturstopp Urwelt-Museum Hauff zu Holzmaden (Schwäbische Alb), Weiterreise via Neckar/Odenwald bis **Kaub am Rhein** (Eintreffen Fr 25.06.2027).
  - *Etappe 4 (Fr 25.06. – So 27.06.):* Ausklang am Mittelrhein (Loreley/Pfalzgrafenstein, bekanntes Trainingsrevier: 15 km / 223 Hm Realdaten-Basis). Finale Heimreise nach Düsseldorf nur noch 160 km (~1:45 h, stressfrei ohne Urlauberstau).
- **Buchungs- & Anmeldefahrplan:**
  - *TS16 Startplatz (`time2win.at` / `my.raceresult.com`):* Frühbuchertarif aktiv bis 31.12.2026. Buchung Mitte Dezember 2026 nach 7G HM.
  - *Campingpark FiNK (`campingfink.tirol`):* 14 Nächte (06.–20.06.2027) reservieren. Anfrage im Zeitfenster Dezember 2026 bis Januar 2027 (4–6 Monate Vorlauf).
  - *Kaub am Rhein (25.–27.06.2027):* Camping-Stellplatz am Mittelrhein für 2 Nächte zum Ausklang.
- **Event-Steckbrief TS16:** 16,9 km · ca. 850 Hm (Start/Ziel: Sportzentrum Imst fußläufig vom Campingpark).
- **Streckenverlauf:** Gurgltal-Flachpassage (km 0–3) ➔ sanfter Anstieg Richtung Karrösten ➔ Waldsteig hinauf zur Karrösteralm (Apex ~1.450 m) ➔ Geolehrpfad & Forstwegpassage ➔ Singletrail-Abstieg zurück ins Sportzentrum Imst. Moderate alpine Trails (T2-Niveau), keine ausgesetzten Grate (im Gegensatz zu TS26/TS42 über den Tschirgant-Kamm).
- **Pacing & Pulskorridore (Realdaten-Kalibrierung):**
  - *Anlauf flach (km 0–3):* Strikt GA1 **105–118 bpm** (kein Überzocken im Starterfeld).
  - *Uphill Karrösteralm (km 3–8):* Kontrolliertes Power-Hiking im aeroben Übergangsbereich **120–125 bpm** (maximal 130 bpm).
  - *Downhill (km 8–16,9):* Kontrolliertes Rollen mit hoher Schrittfrequenz, **Pulsdeckel <125 bpm**. Bewusste Tempobremse auf steilen Schotterstücken zum Schutz des Quadrizeps.
  - *Zielzeitkorridor:* **01:45:00 bis 02:05:00 h**. Vormittags beendet; Mittagsjause mit der Familie.
- **Familien- & Wandersynchronisation:** 2-wöchiges Standlager mit täglichen Wanderungen (4–5 Std., 500–700 Hm, T2: Rosengartenschlucht / Muttekopfhütte, Piburger See, Hochzeiger Zirbenweg) und Kultur (Piller Sattel, Ötzi-Dorf, Innsbruck). Null Transfer- oder Trennungsaufwand.
- **Kulturhistorische Anker & Naturpark-Routen:**
  - *Naturpark Kaunergrat (`https://www.kaunergrat.at/`):* Naturparkhaus am Piller Sattel (1.600 m), architektonische Aussichtsplattform „Gacher Blick“ (Tiefblick ins Inntal), 3.500 Jahre alter prähistorischer Brandopferplatz an der Via Claudia Augusta & barrierefreies Piller Moor (Moor-Rundweg mit Holzturm, null Steigung).
  - *Naturpark Ötztal – Archäologische Wege Nord-/Südtirol (`https://www.naturpark-oetztal.at/besuchen/wandern/themenwandern/archaeologische-wege/archaeologische-wege-zwischen-nord-und-suedtirol/`):* Historische Pfade der Gletschermumie Ötzi (Fundstelle Tisenjoch 1991, 5.300 Jahre alte Übergänge nach Südtirol). Gekennzeichnet durch Kupferstelen; u. a. der Archäologische Rundwanderweg Obergurgl (Zirbenwald / Beilsteinalm) und die Steinzeitjäger-Station „Hohler Stein“ bei Vent (Mesolithikum ~8.000 v. Chr.).
- **Dolomiten-Optionen für 2. Standlager / Naturcamping (Woche 2):**
  - *Favorit 1: Hochpustertal / Sextner Dolomiten (Camping Toblacher See):* 205 km / ~2:40 h Fahrt ab Imst via Brenner/Brixen. Camping direkt am Ufer des geschützten Natursees (1.200 m). Direkter Zugang zu Gondelbahnen (Helm auf 2.050 m, Haunold auf 1.500 m) mit sanften, aussichtsreichen Höhenwegen (T2, schwindelfrei). Optimales, flaches GA1-Terrain für Gerhard (ehemalige Bahntrasse im Talboden entlang von Rienz/Drau).
  - *Favorit 2: Seiser Alm / Schlerngebiet (Camping Seiser Alm, Völs):* 175 km / ~2:20 h Fahrt ab Imst. Terrassiert am Fuß des Schlern nahe Völser Weiher (880 m). Seiser Alm als größte Hochalm Europas (1.680–2.000 m, Seilbahn ab Seis) mit weitläufigen, trittsicheren Wirtschaftswegen ohne Absturzrisiko.
- **Physiologischer Trade-Off:** Im Düsseldorfer Flachland können im Vorfeld keine 800-Hm-Abstiege am Stück trainiert werden. Das Studio-Krafttraining (exzentrische Beinpresse/Split Squats) federt den Stoß ab, ersetzt jedoch nicht die periphere Sehnenschlaghärte auf Schotter. Daher ist nach dem TS16 mit moderater exzentrischer Quadrizeps-Ermüdung (DOMS für 48–72 h) zu rechnen; die Downhill-Pace im Wettkampf muss strikt defensiv gewählt werden. Durch die 21-Tage-Architektur steht für die muskuläre Erholung in den Bergen volle Zeit zur Verfügung.

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
  1. *Frühjahrs-Anker (Anfang März):* Belgenbachtrail (18,7 km / 600 Hm oder 30 km / 940 Hm).
  2. *Sommerurlaubs-Trail (Juni):* 21 Tage Rundreise Düsseldorf ➔ Imst (TS16 am 12.06.) ➔ Kaub am Rhein (25.06.).
  3. *Herbst-Anker (Ende Oktober):* Drachenlauf (26 km / 1.250 Hm) oder adäquater Mittelgebirgstrail.
  4. *Spontane lokale Temporeize:* 1–2 lokale 10-km-Läufe im Raum Düsseldorf (z. B. Martinslauf Unterbacher See, Neanderthal-Lauf) unvorbereitet aus dem Training mitgenommen (2,5 h Gesamtabwesenheit).
- **Periodisierungs- & Trade-Off-Regeln:**
  - *Basis-Modus (Sommer/Winter):* 14-tägiger Erkrath-Rhythmus schont Familienzeit, führt jedoch zu schrittweisem Abbau der exzentrischen Bergab-Härte (>800 Hm).
  - *Peak-Modus (6–8 Wochen vor Belgenbach & Drachenlauf):* Erkrath wird wöchentlich gelaufen und auf 14–18 km mit 350–450 Hm gesteigert, um die nötige muskuläre Bremskraft und Sehnensteifigkeit rechtzeitig aufzubauen.
  - *KT-Timing-Regel:* Wenn der Longrun samstags stattfindet, freitags kein schweres Bein-KT (nur Rumpf/Oberkörper) oder KT auf Mittwoch vorziehen.

---

## 📂 5. Key File Locations

- `HANDOFF_AND_PROJECT_STATE.md` ➔ `/Users/Gerhard/Desktop/running_guide/HANDOFF_AND_PROJECT_STATE.md`
- `archive/drachenlauf_2026_campaign_data.json` ➔ `/Users/Gerhard/Desktop/running_guide/archive/drachenlauf_2026_campaign_data.json` (Vollständiges Kampagnen-Backup)
- `preview_2wochen.html` ➔ `/Users/Gerhard/Desktop/running_guide/preview_2wochen.html` (Akzeptierter 14-Tage Apple-Minimal Blueprint für Nov/Dez)
- `Trail_Cote_dOpale_Race_Day_Cheatsheet.docx` ➔ `/Users/Gerhard/Desktop/running_guide/Trail_Cote_dOpale_Race_Day_Cheatsheet.docx`
- `Belgenbachtrail_30k_Decision_Reminder.docx` ➔ `/Users/Gerhard/Desktop/running_guide/Belgenbachtrail_30k_Decision_Reminder.docx`
- `Die_Reise_der_zwei_Neandertaler.pages` ➔ `/Users/Gerhard/Desktop/running_guide/Die_Reise_der_zwei_Neandertaler.pages`
- `Die_Reise_der_zwei_Neandertaler.docx` ➔ `/Users/Gerhard/Desktop/running_guide/Die_Reise_der_zwei_Neandertaler.docx`
- `2026-07-10_3098880682_Drachenlauf OG.gpx` ➔ `/Users/Gerhard/Desktop/running_guide/2026-07-10_3098880682_Drachenlauf OG.gpx`
- `belgenbachtrail.gpx` ➔ `/Users/Gerhard/Desktop/running_guide/scratch/belgenbachtrail.gpx`
- `strategie.html` (Web-Präsentation) ➔ `https://gerryagainagain.github.io/trailrunning/strategie.html`

---

## 🔄 6. Multi-Race Reuse & Archiving Blueprint (Saison 2027+)

Die Codebase ist vollständig modularisiert und dafür vorbereitet, für neue Zielwettkämpfe (z. B. Belgenbachtrail 30k Ende März 2027 oder Drachenlauf Oktober 2027) adaptiert oder geklont zu werden:

### A. Gesicherte Datenbasis 2026
1. **JSON-Archivdatei:** Unter `archive/drachenlauf_2026_campaign_data.json` liegt der unveränderliche Export aller 50 Einheiten, Zonen, Metriken und Phasen.
2. **In-App Backup:** Der Header-Button `Backup 💾` triggert die Funktion `exportCampaignData()` und generiert jederzeit einen frischen JSON-Download.
3. **Persistenz in `app.js`:** Alle 50 Läufe verbleiben fest in `defaultInitialRuns`, sodass auch bei geleertem Browser-Cache kein Datenverlust auftritt.

### B. Leitfaden zur Umschaltung auf einen neuen Wettkampf (z. B. Belgenbach 2027)
Wenn ein neuer Trainingszyklus gestartet wird, sind in `app.js` nur 4 zentrale Konfigurationsobjekte anzupassen:
1. **`phaseData` (Zeilen 6–67):** Definition der Trainingsphasen (z. B. Phase 1: Winter-Grundlage, Phase 2: Hügel & Kraft, Phase 3: Spezifischer Belgenbach-Aufbau, Phase 4: Tapering).
2. **`kwMap` (Zeilen 69–84):** Zuordnung der Kalenderwochen zum Zieltermin (z. B. KW 02 bis KW 12 für Ende März).
3. **`appleScheduleData` (Zeilen 1350ff.):** Soll-Wochenpläne mit Distanz-, Höhenmeter- und Ruhetagsvorgaben.
4. **`defaultInitialRuns` (Zeilen 86ff.):** Entweder die 2026er Läufe als historische Baseline behalten oder neue Einheiten für 2027 chronologisch oben anfügen.
5. **Rennstrategie-Block (`workoutDetailsModal`):** Tausch der Durchgangszeiten und Streckenabschnitte gegen das Belgenbachtrail-Profil (bereits voranalysiert: 30,4 km / 941 Hm / Cut-Offs bei km 18 und km 26,7).

### C. Akzeptierter v10.5 Layout-Blueprint (Der finale Master-Standard)
Vom Athleten am 31.10.2026 final abgenommener und freigegebener UI-Standard:
1. **Master-Referenzdateien:** 
   - [`preview_klassischer_3monats_kalender.html`](file:///Users/Gerhard/Desktop/running_guide/preview_klassischer_3monats_kalender.html) (Der finale 3-Monats-Kalender im 1.440px-Maximalformat mit 2.2rem Monats-Headlines, roten Sonntagsziffern, durchgehenden Farb-Balken und zentrierter Ziel-Bubble)
   - [`preview_jahres_dashboard.html`](file:///Users/Gerhard/Desktop/running_guide/preview_jahres_dashboard.html) (Master-Dashboard mit Segmented Control & luftigem Wochenkalender)
2. **Apple HIG Segmented Control Header:**
   - Schlanker, satinierter Umschalter im Kopf: `[ 📅 Diese Woche ]` vs. `[ 🧭 Saison 2027 ]`.
   - *State Persistence:* Standardmäßig landet der Athlet immer auf der aktuellen Woche.
3. **Reiter 1 (`Diese Woche` · Luftiger Wochenkalender / Reiner Alltag):**
   - **Großzügige Kalenderspalten:** 160 px Mindesthöhe pro Tag (`Mo 26` bis `So 01`) mit spürbarem Weißraum.
   - **Klare visuelle Hierarchie:**
     - Tag & Datum oben links, Status-Check (`✓ Absolviert`) bei geloggten Läufen.
     - Große Hero-Ziffern (`4,0 km`, `Studio`, `6,0 km · +3 Steigerungen` / Ruhetag: feiner Strich `—`).
     - Aktueller Tag subtil mit Cyan-Glow akzentuiert.
     - Unten: Art der Einheit (`Locker GA1`, `Rumpf & Stabi`).
   - **Vorschau-Woche:** Liegt als ruhiges, kompaktes Grid darunter (`opacity: 0.65`), dient als Orientierung für den anstehenden Wettkampf (Martinslauf).
4. **Reiter 2 (`Saison 2027` · Der klassische 3-Monats-Kalender):**
   - **Maximales Desktop-Format (1.440 px):** Monumentale Monats-Headlines (`April`, `Mai`, `Juni`) in 2.2rem zentriert.
   - **Radikale Reduktion (Null Subcopies):** Keine Fußnoten, keine Wochentags-Header (`MO...SO` entfernt), keine Tagesanzahl (`30 Tage` entfernt).
   - **Rote Sonntagsziffern:** Nur die Ziffern der Sonntagsspalte sind in markantem Rot (`#FF453A`) gefärbt für sofortige intuitive Wochenorientierung.
   - **Echte durchgehende Periodisierungs-Balken:**
     - *Blau durchgehend:* Spezifischer Aufbau (ab 06. Jan in Q1 bis Anfang März).
     - *Rot leuchtend (🏁):* Gesetzte Renntage (07.03. Belgenbach 30k, 12.06. TS16 Imst, 24.10. Drachenlauf).
     - *Grün durchgehend:* 2-wöchige Regenerationsbalken nach den Hauptläufen.
     - *Gelb durchgehend (in Q2):* Der 21-Tage Campingurlaub (05.–25.06.) in Tirol & Kaub.
     - *Lila gestrichelt:* Unverbindliche Optionen (03.07. Primiero Dolomiti Marathon 26k, 05.09. Opal, 11.09. UTML Müllerthal, 05.12. 7G HM).
   - **Minimaler Header & Ziel-Bubble:**
     - Oben links nur das einzelne Wort der Jahreszeit: `Winter`, `Frühling`, `Sommer`, `Herbst`.
     - In der Bubble unter den Kalendern zentriert nur das Ziel: z. B. `🏁 Ziel: 07. März · Belgenbachtrail (30,7 km · 941 Hm)`.
5. **Vollständig entfallene Altlasten:** Keine Landkarte, kein iCal-Export, kein SVG-Expeditionspfad, kein OCR-Screenshot-Import, keine Footer-Legende.











