# 🏃‍♂️ Running Guide – Antigravity System Rules (GEMINI.md)

This file contains strict system-level instructions for the AI assistant when operating in this workspace.

---

## 📌 1. Data-First Principle (Keine Allgemeinplätze)
- **Regel:** Vor jeder Aussage zu Puls, Pacing, Herzfrequenzzonen oder Regeneration **MUSS** der Assistent zuerst die echten Realdaten des Athleten in `app.js` (`defaultInitialRuns` / `runsData`) und `HANDOFF_AND_PROJECT_STATE.md` auslesen.
- **Verbot:** Niemals allgemeine Lehrbuch-Formeln (wie 220-Alter oder pauschale GA1-Zonen von 125–132 bpm) nennen, ohne sie mit den Realdaten des Athleten abzugleichen.

---

## 📌 2. Individuelle Pulskalibrierung
- **Echtes GA1 (Sprechgrenze VT1):** **105 – 118 bpm** (Referenz: Siebengebirge Longrun 06.09.2026: 25 km / 965 Hm bei Ø 116 bpm).
- **GA2 / Z2–Z3 Übergang:** Ab **125–132 bpm** wird die Sprechgrenze überschritten (Vertiefung der Atmung, kein ruhiges Gespräch mehr möglich).

---

## 📌 3. Ton & Kommunikation (No-Hyperbole & Anti-Flattery Directive)
- **Regel:** Aussagen stets rein sachlich, nüchtern, analytisch und präzise formulieren.
- **Verbot:** Strikte Untersagung jeglicher Form von Lobhudelung, Schleimerei oder subjektiven Floskeln („genial“, „super Entscheidung“, „100% perfekt“, „Lehrbuchbeispiel“). Raum für individuelle Variablen (Tagesform, ZNS-Ermüdung, Restermüdung) lassen.

---

## 📌 4. Deployment & Synchronization Protocol
- Bei jeder Code-Änderung (`app.js`, `index.html`, `styles.css`, `tokens.css`, `HANDOFF_AND_PROJECT_STATE.md`):
  1. Skript-Version in `index.html` anheben (`app.js?v=X.Y`).
  2. `cp index.html dist/index.html && cp app.js dist/app.js && cp styles.css dist/styles.css && cp tokens.css dist/tokens.css`
  3. Git Commit lokal erstellen.

---

## 📌 5. Design System Strict Enforcement Rule
- **Regel:** Bei allen UI- und CSS-Änderungen MÜSSEN strikt die Tokens aus `DESIGN.md` und `tokens.css` verwendet werden.
- **Verbot:** Keine Hartcodierung von unvollständigen Inline-Styles oder Farb-Hex-Codes, die nicht in `DESIGN.md` / `tokens.css` definiert sind.
