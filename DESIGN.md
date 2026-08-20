# DRACHENLAUF 2026 — DESIGN SYSTEM MASTER SPECIFICATION

Das Design-System basiert auf dem Schweizer Minimalismus und den Apple HIG Dark Mode Guidelines. Es definiert die visuelle Sprache, Markenidentität, Typografie-Skalierung, Farb-Palette, Abstände und Komponenten-Regeln für das Drachenlauf 2026 Dashboard.

---

## 1. Design Token Referenz (W3C Standard)

Alle Design-Tokens sind maschinenlesbar in tokens.json hinterlegt.

### 1.1 Farb-Palette (Color Palette)

#### Brand & Status Akzente
- Apple Green (#30D158): Erledigte Läufe, Fortschrittsbalken-Hauptstatus, positive CTA-Buttons.
- Apple Green Hover (#34E05E): Interaktive Schwebezustände für grüne Elemente.
- Apple Cyan (#64D2FF): Primärer Marken-Akzent, Links, Saisonpfad-Fortschritt, aktive Rahmen.
- Apple Orange (#FF9F0A): Hauptlauf-Highlights (Dein Ding diese Woche), Drachenlauf-Wettkampfbadge, Höhenmeter-Laufbalken.
- Apple Orange Hover (#FFB340): Hover-Zustand für Orange-Buttons.
- Apple Red (#FF453A): Warnungen, Abbrechen-Aktionen, Einheit zurücksetzen Links.
- Apple Yellow (#FFD60A): Schlüssel-Einheiten (Key Workouts, Rampen, Tempo).
- Apple Blue (#007AFF): Testlauf-Badges (Côte d’Opal).

#### Hintergründe (Backgrounds)
- App Canvas (#0B0B10): Tiefer dramatischer Schwarzton als Basis-Hintergrund.
- Card Background (rgba(22, 22, 30, 0.85)): Standard Glassmorphism Container mit 85% Deckkraft.
- Card Hover (rgba(32, 32, 44, 0.95)): Subtiler Schwebezustand für Standard-Karten.
- Rest Day Card (rgba(14, 14, 20, 0.70)): Soft abgedunkelte Ruhetags-Karten mit gedämpfter Transparenz (85% Opacity).
- Rest Day Card Hover (rgba(22, 22, 30, 0.85)): Dezenter Hover-Zustand für Ruhetage.
- Modal Surface (#12121A): Solide Dialog-Hintergrundfläche.
- Modal Backdrop (rgba(0, 0, 0, 0.75)): Weicher Unschärfefilter (backdrop-filter: blur(12px)).

#### Typografie-Farben (Text Colors)
- Primary White (#FFFFFF): Höchste Hierarchiestufe (Headlines, Distanz-Zahlen, Titel).
- Secondary Grey (#A1A1A6): Metadaten, Wochentage, Beschriftungen.
- Subtle Light (#D1D1D6): Fliesstexte, Beschreibungen, Notizen.
- Muted Micro (#6E6E73): Ruhetags-Labels, sekundäre Unterzeilen.
- High-Contrast Dark (#000000): Textfarbe auf knalligen Badges (✓ Erledigt, Primary CTA).

---

## 2. Typografie System (Typography Scale)

- Font Family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- Typografie-Harmonisierung:

| Token Key | Rem / Px | Font Weight | Line Height | Letter Spacing | Verwendung im Projekt |
|:---|:---|:---|:---|:---|:---|
| 3xs | 0.60rem (9.6px) | 900 | 1.0 | 0.5px | Tabellen-Pills (tbl-pill) |
| 2xs | 0.65rem (10.4px) | 800–900 | 1.0 | 0.8px | Timeline Top Labels, Micro Badges |
| xs | 0.72rem (11.5px) | 700–800 | 1.2 | 0.2px | Timeline Sub Labels, Modal Subtitles |
| sm | 0.78rem (12.5px) | 800–900 | 1.25 | 0.8px | Badges, Buttons, Metadaten |
| md | 0.85rem (13.6px) | 600–800 | 1.4 | 0.2px | Input-Felder, Subtitles, Dropdowns |
| base | 1.00rem (16px) | 400–600 | 1.4 | 0px | Standard Fliesstext |
| lg | 1.15rem (18.4px) | 800 | 1.45 | -0.2px | Coach-Text, Korridor-Werte |
| xl | 1.25rem (20px) | 900 | 1.25 | -0.3px | Sektionstitel (Wochenplan) |
| 2xl | 1.45rem (23.2px) | 900 | 1.25 | -0.5px | Phasen-Titel (Grundlagenerhalt & Reisen) |
| 3xl | 2.20rem (35.2px) | 900 | 1.05 | -0.8px | Haupt-Header (h1) |
| 4xl | 2.35rem (37.6px) | 900 | 1.0 | -0.8px | Tageskarten Distanz-Zahlen (hero-val) |

---

## 3. Abstands- Grid & Container (Layout Spacing)

- Standard Grid Spacing:
  - 3xl (3.20rem / 51.2px): App Canvas Outer Padding.
  - 2xl (2.50rem / 40px): Hauptzeilen-Abstand zwischen Sektionen.
  - xl (2.00rem / 32px): Sub-Grid Gaps.
  - lg (1.50rem / 24px): Card Inner Padding (Standard).
  - md (1.00rem / 16px): Card Gap & Flex Intervall.
  - sm (0.75rem / 12px): Kleine Button Gaps & Formular-Abstände.
  - xs (0.50rem / 8px): Micro Spacing in Badges & Pills.

---

## 4. Komponenten-Master Rules

### 4.1 Apple Day Card (.apple-day-card)
- Abmessungen: Fixierte Höhe 210px !important, min-height: 210px, max-height: 210px.
- Typen:
  1. Lauf-Karten: Standard Glassmorphism Card, Distanzzahl in 2.35rem Bold White/Green.
  2. Ruhetag (Chill): Hintergrund rgba(14, 14, 20, 0.70), Deckkraft 0.85, Hero-Text CHILL, Badge Chill.
  3. Erledigte Einheit: Solides grünes Badge ✓ Erledigt (#30D158 BG, #000000 Text), grüner Kartenrahmen (card-completed).
  4. Kraft & Rumpf: Hero-Text Kraft & Rumpf, Sub-Micro 25–30 Min., Badge Kraft.

### 4.2 Top Split Grid (.top-split-grid)
- Layout: Exakter 50/50 Split.
- Links: Coach Insight Text Card mit dynamischem Ratschlag.
- Rechts: Hauptlauf Card mit dynamischer Tag-Umschaltung (DEIN DING DIESE WOCHE vs. DAS WAR DAS DING IN DER WOCHE).

### 4.3 Saisonpfad (.season-timeline-card)
- Position: Ganz unten am Ende des Dashboards.
- Zentrierung: Knotenpunkte sind absolut auf der 50% Mittellinie positioniert (top: 50%; transform: translateY(-50%)).

---

## 5. Dokumenten-Status
- Master Version: 2.2
- Standard: W3C Design Tokens Community Group Standard Format.
- Master JSON: tokens.json
