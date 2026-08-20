// Gerrys Personal Trail Coach: Auf zum Drachen! (App Logic)

let selectedKw = 31;

// Phase Master Data mit exakten Reisedaten & sportwissenschaftlicher Tonalität
const phaseData = {
  1: {
    code: 'PHASE 1',
    name: 'Grundlagenerhalt & Reisen',
    dates: 'KW 30–33 (20.07 – 16.08)',
    desc: 'Erhalt der aeroben Basis. Alle Longruns bis 500 Hm werden in Erkrath absolviert (erst Läufe mit > 500 Hm wechseln ins Siebengebirge). In London (KW 32) max. 1 Std. Fenster. Malto bei Longruns (> 15 km): 500ml Softflasks, Marzipan & Feigen. Schutz: Mosquito- & Sonnenspray.',
    targetWkm: 30,
    targetWhm: 450,
    targetLongDist: 16,
    targetLongHm: 600,
    cpName: 'Côte d’Opal Trail (Test 1)',
    cpMeta: '13. September · 25 km · 250 Hm'
  },
  2: {
    code: 'PHASE 2',
    name: 'Grundlagenausdauer & Höhenmeteraufbau',
    dates: 'KW 34–36 (17.08 – 06.09)',
    desc: 'Systematischer Aufbau im Siebengebirge (> 450 Hm). Steigerung des Longruns von 16 km / 650 Hm auf 20 km / 950 Hm. 500ml Softflasks mit Malto + Marzipan/Feigen bei Longruns.',
    targetWkm: 45,
    targetWhm: 950,
    targetLongDist: 20,
    targetLongHm: 950,
    cpName: 'Côte d’Opal Trail (Test 1)',
    cpMeta: '13. September · 25 km · 250 Hm'
  },
  3: {
    code: 'PHASE 3',
    name: 'Spezifische Testläufe & Peak-Belastung',
    dates: 'KW 37–39 (07.09 – 27.09)',
    desc: 'Zwei Haupttests: Côte d’Opal Trail (25 km / 250 Hm am 13.09) und HAUPT-PROBEDRACHENLAUF (24 km / 1.250 Hm am 27.09 FIX im Siebengebirge). Malto-Softflasks + Marzipan/Feigen.',
    targetWkm: 51,
    targetWhm: 1250,
    targetLongDist: 24,
    targetLongHm: 1250,
    cpName: 'Probedrachenlauf (HF-Test FIX: 27.09.)',
    cpMeta: '27. September · 24 km · 1.250 Hm (HF 120–140 bpm)'
  },
  4: {
    code: 'PHASE 4',
    name: 'Tapering & Wettkampfvorbereitung',
    dates: 'KW 40–42 (28.09 – 18.10)',
    desc: 'Gezieltes Tapering. Zoutelande Dünen (350 Hm), anschließend kontrolliertes Tapering in Erkrath (400 Hm & 300 Hm <= 450 Hm).',
    targetWkm: 30,
    targetWhm: 400,
    targetLongDist: 15,
    targetLongHm: 400,
    cpName: 'Drachenlauf 2026',
    cpMeta: '25. Oktober · 26 km · 1.250 Hm'
  },
  5: {
    code: 'PHASE 5',
    name: 'Wettkampfwoche Drachenlauf',
    dates: 'KW 43 (19.10 – 25.10)',
    desc: 'Regeneration & Rennvorbereitung. Kurze Aktivierung, Schlaf, Carboloading & Vorbereitung 500ml Softflasks, Marzipan, Feigen.',
    targetWkm: 39,
    targetWhm: 1250,
    targetLongDist: 26,
    targetLongHm: 1250,
    cpName: 'Drachenlauf 2026 (Königswinter)',
    cpMeta: '25. Oktober · Start 10:00 Uhr · 1.250 Hm'
  }
};

const kwMap = {
  30: { phase: 1, travel: 'KW 30 · Basis Erkrath (350 Hm)' },
  31: { phase: 1, travel: 'KW 31 · Vorbereitung Erkrath (380 Hm)' },
  32: { phase: 1, travel: 'KW 32 · London (Abfahrt Di Abend)' },
  33: { phase: 1, travel: 'KW 33 · Jurassic Coast (Rückreise Mi) & Longrun Erkrath (456 Hm)' },
  34: { phase: 2, travel: 'KW 34 · Fr 400 Hm Erkrath & Amsterdam Tanz-Event (2 Std)' },
  35: { phase: 2, travel: 'KW 35 · Siebengebirge (800 Hm)' },
  36: { phase: 2, travel: 'KW 36 · Siebengebirge (950 Hm)' },
  37: { phase: 3, travel: 'KW 37 · Côte d’Opal Trail (Abfahrt Do Nachmittag)' },
  38: { phase: 3, travel: 'KW 38 · Normandie & Bretagne (Abfahrt Fr Morgen)' },
  39: { phase: 3, travel: 'KW 39 · Siebengebirge PROBEDRACHEN (27.09 FIX)' },
  40: { phase: 4, travel: 'KW 40 · Zoutelande (Fr Morgen – So Abend)' },
  41: { phase: 4, travel: 'KW 41 · Erkrath Tapering (400 Hm)' },
  42: { phase: 4, travel: 'KW 42 · Erkrath Tapering (300 Hm)' },
  43: { phase: 5, travel: 'KW 43 · Königswinter Drachenlauf' }
};

const defaultInitialRuns = [
  // KW 34
  {
    id: 1787152000002,
    kw: 34,
    date: '20.08.2026',
    dayDate: '20.08',
    dist: 7.2,
    hm: 17,
    duration: '00:53:00',
    hr: 117,
    pace: '7:21',
    type: 'laufen',
    isErsatz: false,
    tag: 'Locker Rhein',
    notes: 'Lockerer Lauf am Rhein (7.2 km / 17 Hm)'
  },
  {
    id: 1787152000001,
    kw: 34,
    date: '18.08.2026',
    dayDate: '18.08',
    dist: 9.2,
    hm: 95,
    duration: '01:54:00',
    hr: 114,
    pace: '12:23',
    type: 'laufen',
    isErsatz: false,
    tag: 'Rampen Ddorf',
    notes: 'Rampentraining Düsseldorf (9.2 km / 95 Hm)'
  },
  // KW 33
  {
    id: 1786766000005,
    kw: 33,
    date: '16.08.2026',
    dayDate: '16.08',
    dist: 15.0,
    hm: 456,
    duration: '02:19:00',
    hr: 125,
    pace: '9:16',
    type: 'laufen',
    isErsatz: false,
    tag: 'Longrun Erkrath',
    notes: 'Longrun Erkrath (15.0 km / 456 Hm)'
  },
  {
    id: 1786766000004,
    kw: 33,
    date: '15.08.2026',
    dayDate: '15.08',
    dist: 1.0,
    distMeters: 1000,
    hm: 0,
    duration: '00:31:00',
    hr: 120,
    pace: '31:00',
    type: 'schwimmen',
    isErsatz: true,
    tag: 'Schwimmen',
    notes: 'Schwimmen Ersatz-Einheit (1.000 m)'
  },
  {
    id: 1786766000003,
    kw: 33,
    date: '13.08.2026',
    dayDate: '13.08',
    dist: 7.0,
    hm: 0,
    duration: '01:00:00',
    hr: 125,
    pace: '8:34',
    type: 'laufen',
    isErsatz: false,
    tag: 'Locker Rhein',
    notes: 'Lockerer Lauf am Rhein'
  },
  {
    id: 1786766000002,
    kw: 33,
    date: '11.08.2026',
    dayDate: '11.08',
    dist: 10.0,
    hm: 588,
    duration: '01:54:00',
    hr: 130,
    pace: '11:24',
    type: 'laufen',
    isErsatz: false,
    tag: 'Cliff Trail Jurassic',
    notes: 'Cliff Trail Jurassic Coast (10.0 km / 588 Hm)'
  },
  {
    id: 1786766000001,
    kw: 33,
    date: '10.08.2026',
    dayDate: '10.08',
    dist: 6.0,
    hm: 165,
    duration: '00:53:00',
    hr: 125,
    pace: '8:50',
    type: 'laufen',
    isErsatz: false,
    tag: 'Coastal Trail',
    notes: 'Coastal Trail Jurassic Coast (6.0 km / 165 Hm)'
  },

  // KW 32
  {
    id: 1785828734265,
    kw: 32,
    date: '04.08.2026',
    dayDate: '04.08',
    dist: 8.24,
    distMeters: 0,
    hm: 118,
    duration: '01:07:41',
    hr: 127,
    pace: '8:13',
    type: 'laufen',
    isErsatz: false,
    tag: 'Rampen Ddorf',
    notes: 'Rampentraining Düsseldorf (Garmin Import)'
  },

  // KW 31
  {
    id: 1785667086588,
    kw: 31,
    date: '02.08.2026',
    dayDate: '02.08',
    dist: 12.07,
    distMeters: 0,
    hm: 391,
    duration: '01:57:44',
    hr: 117,
    pace: '9:45',
    type: 'laufen',
    isErsatz: false,
    tag: 'Longrun Erkrath',
    notes: 'Longrun Erkrath (Garmin Import)'
  },
  {
    id: 1785594296942,
    kw: 31,
    date: '01.08.2026',
    dayDate: '01.08',
    dist: 1.15,
    distMeters: 1150,
    hm: 0,
    duration: '00:25:21',
    hr: 108,
    pace: '22:03',
    type: 'schwimmen',
    isErsatz: true,
    tag: 'Schwimmbad',
    notes: 'Schwimmen Ersatz-Einheit (Garmin Import)'
  },
  {
    id: 1785526970216,
    kw: 31,
    date: '31.07.2026',
    dayDate: '31.07',
    dist: 0,
    hm: 0,
    duration: '00:45:00',
    hr: 0,
    pace: '-:--',
    tag: 'Kraft',
    notes: 'Kraft & Rumpftraining'
  },
  {
    id: 1722420000005,
    kw: 31,
    date: '30.07.2026',
    dayDate: '30.07',
    dist: 6.0,
    hm: 0,
    duration: '00:43:00',
    hr: 124,
    pace: '7:10',
    tag: 'Locker Rhein',
    notes: 'Lockerer Lauf am Rhein'
  },
  {
    id: 1722420000004,
    kw: 31,
    date: '28.07.2026',
    dayDate: '28.07',
    dist: 7.0,
    hm: 100,
    duration: '00:52:00',
    hr: 122,
    pace: '7:25',
    tag: 'Rampen Ddorf',
    notes: 'Rampentraining Düsseldorf Oberkassel'
  },

  // KW 30 (Alle Läufe absolviert)
  {
    id: 1722420000003,
    kw: 30,
    date: '26.07.2026',
    dayDate: '26.07',
    dist: 12.0,
    hm: 350,
    duration: '01:26:00',
    hr: 128,
    pace: '7:10',
    tag: 'Longrun Erkrath',
    notes: 'Longrun Einstieg Erkrath'
  },
  {
    id: 1722420000002,
    kw: 30,
    date: '25.07.2026',
    dayDate: '25.07',
    dist: 5.0,
    hm: 0,
    duration: '00:35:00',
    hr: 120,
    pace: '7:00',
    tag: 'Locker',
    notes: 'Lockerer Lauf'
  },
  {
    id: 1722420000001,
    kw: 30,
    date: '23.07.2026',
    dayDate: '23.07',
    dist: 6.0,
    hm: 0,
    duration: '00:43:00',
    hr: 123,
    pace: '7:10',
    tag: 'Locker Rhein',
    notes: 'Lockerer Lauf am Rhein'
  },
  {
    id: 1722420000000,
    kw: 30,
    date: '21.07.2026',
    dayDate: '21.07',
    dist: 7.0,
    hm: 100,
    duration: '00:52:00',
    hr: 130,
    pace: '7:25',
    tag: 'Rampen Ddorf',
    notes: 'Rampentraining Düsseldorf Oberkassel'
  }
];

// Smart runsData initialization (preserving user localStorage inputs)
let runsData = [];
try {
  const storedRuns = localStorage.getItem('drachenlauf_runs');
  if (storedRuns) {
    runsData = JSON.parse(storedRuns);
  } else {
    runsData = defaultInitialRuns;
  }
} catch (e) {
  runsData = defaultInitialRuns;
}

// Auto-correct any legacy 16.08 entries from Siebengebirge to Erkrath
if (runsData && runsData.length > 0) {
  let needsSave = false;
  runsData.forEach(r => {
    if ((r.dayDate === '16.08' || (r.date && r.date.startsWith('16.08'))) && (r.tag === 'Longrun Siebengebirge' || (r.notes && r.notes.includes('Siebengebirge')))) {
      r.tag = 'Longrun Erkrath';
      if (r.notes) r.notes = r.notes.replace('Siebengebirge', 'Erkrath');
      needsSave = true;
    }
  });
  if (needsSave) {
    try { localStorage.setItem('drachenlauf_runs', JSON.stringify(runsData)); } catch (e) {}
  }
}


function getISOWeekNumber(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
}

function initCurrentWeek() {
  const currentWeek = getISOWeekNumber(new Date());
  if (currentWeek >= 30 && currentWeek <= 43) {
    selectedKw = currentWeek;
  } else {
    selectedKw = 31;
  }
  const selectElem = document.getElementById('kwSelect');
  if (selectElem) {
    selectElem.value = selectedKw;
  }
}

function resetToCurrentWeek() {
  const currentWeek = getISOWeekNumber(new Date());
  if (currentWeek >= 30 && currentWeek <= 43) {
    selectedKw = currentWeek;
  } else {
    selectedKw = 31;
  }
  const selectElem = document.getElementById('kwSelect');
  if (selectElem) {
    selectElem.value = selectedKw;
  }
  renderDashboard();
}

function toggleFullscreen() {
  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    const docEl = document.documentElement;
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen();
    } else if (docEl.webkitRequestFullscreen) {
      docEl.webkitRequestFullscreen();
    }
    document.body.classList.add('fullscreen-active');
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    document.body.classList.remove('fullscreen-active');
  }
}

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    document.body.classList.remove('fullscreen-active');
  } else {
    document.body.classList.add('fullscreen-active');
  }
});

function updateCountdown() {
  const raceDate = new Date('2026-10-25T10:00:00');
  const today = new Date('2026-07-31');
  const diffTime = raceDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const cdTxtElem = document.getElementById('cdTxtContainer');
  if (!cdTxtElem) return;

  if (diffDays > 30) {
    const weeks = Math.floor(diffDays / 7);
    cdTxtElem.innerHTML = `Noch <strong>${weeks} Wochen</strong>`;
  } else {
    cdTxtElem.innerHTML = `Noch <strong>${diffDays > 0 ? diffDays : 0} Tage</strong>`;
  }
}

function closeModalOnBackdrop(e) {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.add('hidden');
  }
}

function deleteRun(runId) {
  runsData = runsData.filter(r => r.id !== runId);
  localStorage.setItem('drachenlauf_runs', JSON.stringify(runsData));
  renderDashboard();
}

function navigateKw(delta) {
  const newKw = selectedKw + delta;
  if (newKw >= 30 && newKw <= 43) {
    selectedKw = newKw;
    const selectElem = document.getElementById('kwSelect');
    if (selectElem) selectElem.value = selectedKw;
    renderDashboard();
  }
}

function getMaltoNutritionPlan(durationMin, distKm = 0, isKeyRace = false) {
  if (!durationMin || durationMin <= 45) {
    return '1 Softflask reines Wasser (500 ml)';
  }
  if (durationMin <= 95) {
    return '1× Malto-Flask (500 ml · 7 EL + Salz) + 1× Wasser-Flask (500 ml)';
  }
  if (durationMin > 180 || isKeyRace || distKm >= 22) {
    return '2× Malto-Flasks (1.000 ml · je 7–8 EL + Salz = 150g) + 1× Wasser-Flask (500 ml)';
  }
  return '2× Malto-Flasks (1.000 ml · je 7 EL + Salz = 140g) + 1× Wasser-Flask (500 ml)';
}

function getEmpiricalUserPaceProfile() {
  const validRuns = runsData.filter(r => r.dist && r.dist > 0 && r.duration);

  if (validRuns.length === 0) {
    return { flatPaceMin: 7.20, elevCostPer10m: 0.67 };
  }

  let totalFlatSecs = 0;
  let totalFlatKm = 0;
  let totalElevExcessSecs = 0;
  let total10mUnits = 0;

  validRuns.forEach(r => {
    let durSecs = 0;
    if (typeof r.duration === 'string') {
      const parts = r.duration.split(':').map(Number);
      if (parts.length === 3) durSecs = parts[0] * 3600 + parts[1] * 60 + parts[2];
      else if (parts.length === 2) durSecs = parts[0] * 60 + parts[1];
    } else if (typeof r.duration === 'number') {
      durSecs = r.duration * 60;
    }

    if (durSecs <= 0) return;
    const hm = r.hm || 0;
    const hmDensity = hm / r.dist;

    if (hmDensity < 15) {
      totalFlatSecs += durSecs;
      totalFlatKm += r.dist;
    }
  });

  let flatPaceMin = 7.20;
  if (totalFlatKm > 0) {
    flatPaceMin = (totalFlatSecs / totalFlatKm) / 60.0;
  }

  validRuns.forEach(r => {
    let durSecs = 0;
    const parts = String(r.duration).split(':').map(Number);
    if (parts.length === 3) durSecs = parts[0] * 3600 + parts[1] * 60 + parts[2];
    else if (parts.length === 2) durSecs = parts[0] * 60 + parts[1];

    const hm = r.hm || 0;
    if (durSecs > 0 && hm >= 20) {
      const expectedFlatSecs = r.dist * flatPaceMin * 60;
      const excessSecs = durSecs - expectedFlatSecs;
      if (excessSecs > 0) {
        totalElevExcessSecs += excessSecs;
        total10mUnits += (hm / 10);
      }
    }
  });

  let elevCostPer10m = 0.67;
  if (total10mUnits > 0) {
    elevCostPer10m = (totalElevExcessSecs / 60.0) / total10mUnits;
  }

  return {
    flatPaceMin: Math.max(6.00, Math.min(8.50, flatPaceMin)),
    elevCostPer10m: Math.max(0.40, Math.min(0.90, elevCostPer10m))
  };
}

function getEstimatedDurationMinutes(distKm, hm = 0, tag = '') {
  if (!distKm || distKm <= 0) return 0;
  const tagLower = (tag || '').toLowerCase();

  if (tagLower.includes('drachenlauf') && !tagLower.includes('probedrachen') && distKm >= 20) return 255;
  if (tagLower.includes('probedrachen') && distKm >= 20) return 270;
  if (tagLower.includes('opal') && distKm >= 20) return 175;

  const profile = getEmpiricalUserPaceProfile();
  let intensityFactor = 1.00;
  if (tagLower.includes('fahrtspiel') || tagLower.includes('rampen') || tagLower.includes('berg')) {
    intensityFactor = 0.90;
  }

  const effectiveFlatPaceMin = profile.flatPaceMin * intensityFactor;
  const elevTaxMin = (hm / 10) * profile.elevCostPer10m;
  return Math.round((distKm * effectiveFlatPaceMin) + elevTaxMin);
}

function formatWorkoutDuration(dist, hm, tag) {
  if (!dist || dist === 0) return "30 Min";
  let totalMinutes = getEstimatedDurationMinutes(dist, hm, tag);
  return formatTimeNice(totalMinutes);
}

function formatTimeNice(mins) {
  if (!mins || isNaN(mins) || mins <= 0) return "";
  mins = Math.round(mins);
  if (mins < 60) return mins + " Min";
  const hrs = Math.floor(mins / 60);
  const rem = mins % 60;
  if (rem === 0) return hrs + " Std";
  return hrs + " Std " + rem + " Min";
}

function formatLoggedDurationNice(durStr) {
  if (!durStr) return "";
  if (typeof durStr === "string" && durStr.includes(":")) {
    const parts = durStr.split(":").map(Number);
    if (parts.length === 3) {
      const totalMins = parts[0] * 60 + parts[1] + Math.round(parts[2] / 60);
      return formatTimeNice(totalMins);
    } else if (parts.length === 2) {
      const totalMins = parts[0] * 60 + parts[1];
      return formatTimeNice(totalMins);
    }
  }
  const parsedInt = parseInt(durStr);
  if (!isNaN(parsedInt)) return formatTimeNice(parsedInt);
  return durStr;
}

function formatLoggedDurationString(durStr) {
  return formatLoggedDurationNice(durStr);
}

function parseFlexibleDuration(inputStr) {
  if (!inputStr) return '00:00:00';
  let str = String(inputStr).trim().toLowerCase().replace(/,/g, '.');
  str = str.replace(/[^\d:.]/g, '').replace(/\./g, ':');
  if (!str) return '00:00:00';
  const parts = str.split(':').map(n => parseInt(n, 10) || 0);

  if (parts.length === 1) {
    const val = parts[0];
    if (val <= 5) return `0${val}:00:00`;
    const hrs = Math.floor(val / 60);
    const remMins = val % 60;
    return `${hrs < 10 ? '0' : ''}${hrs}:${remMins < 10 ? '0' : ''}${remMins}:00`;
  }
  if (parts.length === 2) {
    const p1 = parts[0];
    const p2 = parts[1];
    if (p1 <= 10 && p2 < 60) return `${p1 < 10 ? '0' : ''}${p1}:${p2 < 10 ? '0' : ''}${p2}:00`;
    const hrs = Math.floor(p1 / 60);
    const mins = p1 % 60;
    return `${hrs < 10 ? '0' : ''}${hrs}:${mins < 10 ? '0' : ''}${mins}:${p2 < 10 ? '0' : ''}${p2}`;
  }
  if (parts.length >= 3) {
    const h = parts[0], m = parts[1], s = parts[2];
    return `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }
  return '00:00:00';
}

function calculatePace(distKm, durStr) {
  if (!distKm || distKm <= 0 || !durStr) return '-:--';
  const parts = durStr.split(':').map(Number);
  let totalSecs = 0;
  if (parts.length === 3) totalSecs = parts[0] * 3600 + parts[1] * 60 + parts[2];
  else if (parts.length === 2) totalSecs = parts[0] * 60 + parts[1];
  if (totalSecs <= 0) return '-:--';

  const paceSecsPerKm = totalSecs / distKm;
  const pMin = Math.floor(paceSecsPerKm / 60);
  const pSec = Math.round(paceSecsPerKm % 60);
  return `${pMin}:${pSec < 10 ? '0' : ''}${pSec}`;
}

function getHrTargetForWorkout(tag) {
  if (!tag) return '';
  const t = tag.toLowerCase();
  if (t.includes('berg') || t.includes('rampen')) return 'HF 140–165 bpm';
  if (t.includes('fahrtspiel') || t.includes('tempo') || t.includes('steigerungen')) return 'HF 130–150 bpm';
  if (t.includes('probedrachen') || t.includes('opal') || t.includes('drachenlauf')) return 'HF 120–140 bpm';
  if (t.includes('grundlage') || t.includes('locker') || t.includes('longrun') || t.includes('coast') || t.includes('cliff') || t.includes('lee valley') || t.includes('strand')) return 'HF 110–135 bpm';
  return '';
}

function getHmColorStyle(hmVal) {
  if (hmVal >= 1200) return 'color: #FF453A; font-weight: 900;';
  if (hmVal >= 800)  return 'color: #FF9F0A; font-weight: 900;';
  if (hmVal >= 600)  return 'color: #FFD60A; font-weight: 900;';
  if (hmVal >= 300)  return 'color: #64D2FF; font-weight: 900;';
  return 'color: #a1a1a6; font-weight: 700;';
}

const appleScheduleData = {
  30: [
    { day: 'MON', date: '20.07', tag: 'Ruhetag', dist: 0, hm: 0, done: false },
    { day: 'DIE', date: '21.07', tag: 'Rampen Ddorf', dist: 9.0, hm: 120, done: false },
    { day: 'MIT', date: '22.07', tag: 'Ruhetag', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '23.07', tag: 'Locker Rhein', dist: 7.0, hm: 30, done: false },
    { day: 'FRE', date: '24.07', tag: 'Stabi & Kraft', dist: 0, hm: 0, done: false },
    { day: 'SAM', date: '25.07', tag: 'Locker', dist: 6.0, hm: 0, done: false },
    { day: 'SON', date: '26.07', tag: 'Longrun Erkrath', dist: 12.0, hm: 350, done: false }
  ],
  31: [
    { day: 'MON', date: '27.07', tag: 'Ruhetag', dist: 0, hm: 0, done: false },
    { day: 'DIE', date: '28.07', tag: 'Rampen Ddorf', dist: 7.0, hm: 100, done: false },
    { day: 'MIT', date: '29.07', tag: 'Ruhetag', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '30.07', tag: 'Locker Rhein', dist: 6.0, hm: 0, done: false },
    { day: 'FRE', date: '31.07', tag: 'Krafttraining Studio', dist: 0, hm: 0, done: false },
    { day: 'SAM', date: '01.08', tag: 'Locker', dist: 7.0, hm: 0, done: false },
    { day: 'SON', date: '02.08', tag: 'Longrun Erkrath', dist: 12.0, hm: 380, done: false }
  ],
  32: [
    { day: 'MON', date: '03.08', tag: 'Ruhetag / Packen', dist: 0, hm: 0, done: false },
    { day: 'DIE', date: '04.08', tag: 'Rampen Ddorf', dist: 8.0, hm: 120, done: false },
    { day: 'MIT', date: '05.08', tag: 'London Anreise', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '06.08', tag: 'London (Max 1h)', dist: 8.0, hm: 0, done: false },
    { day: 'FRE', date: '07.08', tag: 'Stabi & Sightseeing', dist: 0, hm: 0, done: false },
    { day: 'SAM', date: '08.08', tag: 'RAVE London', dist: 0, hm: 0, done: false },
    { day: 'SON', date: '09.08', tag: 'Recovery', dist: 5.0, hm: 0, done: false }
  ],
  33: [
    { day: 'MON', date: '10.08', tag: 'Coastal Trail', dist: 8.0, hm: 250, done: false },
    { day: 'DIE', date: '11.08', tag: 'Cliff Trail Jurassic', dist: 8.0, hm: 200, done: false },
    { day: 'MIT', date: '12.08', tag: 'Rückreise Mittag', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '13.08', tag: 'Locker Rhein', dist: 7.0, hm: 0, done: false },
    { day: 'FRE', date: '14.08', tag: 'Stabi & Kraft', dist: 0, hm: 0, done: false },
    { day: 'SAM', date: '15.08', tag: 'Locker Zuhause', dist: 6.0, hm: 0, done: false },
    { day: 'SON', date: '16.08', tag: 'Longrun Erkrath', dist: 15.0, hm: 456, done: true }
  ],
  34: [
    { day: 'MON', date: '17.08', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DIE', date: '18.08', tag: 'Rampen Ddorf', dist: 9.0, hm: 120, done: true },
    { day: 'MIT', date: '19.08', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '20.08', tag: 'Locker Rhein', dist: 7.2, hm: 17, done: true },
    { day: 'FRE', date: '21.08', tag: 'Höhenmeter-Trail Erkrath', dist: 12.0, hm: 400, done: false },
    { day: 'SAM', date: '22.08', tag: 'Amsterdam Tanz-Event (2 Std)', dist: 0, hm: 0, done: false },
    { day: 'SON', date: '23.08', tag: 'Lockerer Abendlauf Ddorf', dist: 8.0, hm: 0, done: false }
  ],
  35: [
    { day: 'MON', date: '24.08', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DIE', date: '25.08', tag: 'Rampen Ddorf', dist: 9.0, hm: 120, done: false },
    { day: 'MIT', date: '26.08', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '27.08', tag: 'Locker Rhein', dist: 9.0, hm: 0, done: false },
    { day: 'FRE', date: '28.08', tag: 'Krafttraining Studio', dist: 0, hm: 0, done: false },
    { day: 'SAM', date: '29.08', tag: 'Locker', dist: 7.0, hm: 0, done: false },
    { day: 'SON', date: '30.08', tag: 'Longrun Siebengebirge', dist: 18.0, hm: 800, done: false }
  ],
  36: [
    { day: 'MON', date: '31.08', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DIE', date: '01.09', tag: 'Rampen Ddorf', dist: 10.0, hm: 150, done: false },
    { day: 'MIT', date: '02.09', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '03.09', tag: 'Locker Rhein', dist: 9.0, hm: 0, done: false },
    { day: 'FRE', date: '04.09', tag: 'Krafttraining Studio', dist: 0, hm: 0, done: false },
    { day: 'SAM', date: '05.09', tag: 'Locker', dist: 8.0, hm: 0, done: false },
    { day: 'SON', date: '06.09', tag: 'Longrun Siebengebirge', dist: 20.0, hm: 950, done: false }
  ],
  37: [
    { day: 'MON', date: '07.09', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DIE', date: '08.09', tag: 'Rampen Ddorf', dist: 7.0, hm: 100, done: false },
    { day: 'MIT', date: '09.09', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '10.09', tag: 'Beine lockern (Abf. Nachmittag)', dist: 6.0, hm: 0, done: false },
    { day: 'FRE', date: '11.09', tag: 'Opal Aktivierung', dist: 4.0, hm: 0, done: false },
    { day: 'SAM', date: '12.09', tag: 'Ruhetag Vorbereitung', dist: 0, hm: 0, done: false },
    { day: 'SON', date: '13.09', tag: 'Côte d’Opal Trail', dist: 25.0, hm: 250, done: false }
  ],
  38: [
    { day: 'MON', date: '14.09', tag: 'Rückfahrt Côte d’Opal', dist: 0, hm: 0, done: false },
    { day: 'DIE', date: '15.09', tag: 'Rampen Ddorf', dist: 7.0, hm: 100, done: false },
    { day: 'MIT', date: '16.09', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '17.09', tag: 'Locker Rhein', dist: 7.0, hm: 0, done: false },
    { day: 'FRE', date: '18.09', tag: 'Abfahrt Fr Morgen (Normandie)', dist: 0, hm: 0, done: false },
    { day: 'SAM', date: '19.09', tag: 'Klippenlauf Normandie', dist: 6.0, hm: 100, done: false },
    { day: 'SON', date: '20.09', tag: 'Coastal Trail Erholung', dist: 12.0, hm: 400, done: false }
  ],
  39: [
    { day: 'MON', date: '21.09', tag: 'Rückfahrt Mo Nachmittag', dist: 0, hm: 0, done: false },
    { day: 'DIE', date: '22.09', tag: 'Rampen Ddorf', dist: 10.0, hm: 120, done: false },
    { day: 'MIT', date: '23.09', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '24.09', tag: 'Locker Rhein', dist: 10.0, hm: 0, done: false },
    { day: 'FRE', date: '25.09', tag: 'Krafttraining Studio', dist: 0, hm: 0, done: false },
    { day: 'SAM', date: '26.09', tag: 'Beine lockern', dist: 7.0, hm: 0, done: false },
    { day: 'SON', date: '27.09', tag: 'PROBEDRACHEN (HF 120-140)', dist: 18.0, hm: 1000, done: false }
  ],
  40: [
    { day: 'MON', date: '28.09', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DIE', date: '29.09', tag: 'Rampen Ddorf', dist: 11.0, hm: 180, done: false },
    { day: 'MIT', date: '30.09', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '01.10', tag: 'Locker Rhein', dist: 8.0, hm: 0, done: false },
    { day: 'FRE', date: '02.10', tag: 'Abfahrt Fr Morgen (Zoutelande)', dist: 0, hm: 0, done: false },
    { day: 'SAM', date: '03.10', tag: 'Strand / Kustmarathon', dist: 5.0, hm: 0, done: false },
    { day: 'SON', date: '04.10', tag: 'Zoutelande Dünen (Rückfahrt So Abend)', dist: 17.0, hm: 400, done: false }
  ],
  41: [
    { day: 'MON', date: '05.10', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DIE', date: '06.10', tag: 'Rampen Ddorf', dist: 9.0, hm: 100, done: false },
    { day: 'MIT', date: '07.10', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '08.10', tag: 'Locker Rhein', dist: 8.0, hm: 0, done: false },
    { day: 'FRE', date: '09.10', tag: 'Krafttraining (leicht)', dist: 0, hm: 0, done: false },
    { day: 'SAM', date: '10.10', tag: 'Locker', dist: 6.0, hm: 0, done: false },
    { day: 'SON', date: '11.10', tag: 'Longrun Erkrath', dist: 12.0, hm: 400, done: false }
  ],
  42: [
    { day: 'MON', date: '12.10', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DIE', date: '13.10', tag: 'Rampen Ddorf', dist: 7.0, hm: 80, done: false },
    { day: 'MIT', date: '14.10', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '15.10', tag: 'Locker', dist: 6.0, hm: 0, done: false },
    { day: 'FRE', date: '16.10', tag: 'Stabi & Dehnen', dist: 0, hm: 0, done: false },
    { day: 'SAM', date: '17.10', tag: 'Lockertrab', dist: 4.0, hm: 0, done: false },
    { day: 'SON', date: '18.10', tag: 'Longrun Erkrath', dist: 10.0, hm: 300, done: false }
  ],
  43: [
    { day: 'MON', date: '19.10', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DIE', date: '20.10', tag: 'Locker + Steigerungen', dist: 6.0, hm: 0, done: false },
    { day: 'MIT', date: '21.10', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '22.10', tag: 'Beine lockern', dist: 4.0, hm: 0, done: false },
    { day: 'FRE', date: '23.10', tag: 'Carboloading', dist: 0, hm: 0, done: false },
    { day: 'SAM', date: '24.10', tag: 'Aktivierung', dist: 3.0, hm: 0, done: false },
    { day: 'SON', date: '25.10', tag: 'DRACHENLAUF', dist: 26.0, hm: 1250, done: false }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  initCurrentWeek();
  updateCountdown();
  renderDashboard();
});

document.addEventListener('keydown', (e) => {
  const isInputActive = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName);
  const isAnyModalOpen = !document.getElementById('textModal').classList.contains('hidden') ||
                         !document.getElementById('ocrModal').classList.contains('hidden') ||
                         !document.getElementById('longrunOverviewModal').classList.contains('hidden') ||
                         !document.getElementById('workoutDetailsModal').classList.contains('hidden');

  if (!isInputActive && !isAnyModalOpen) {
    if (e.key === 'ArrowLeft') navigateKw(-1);
    else if (e.key === 'ArrowRight') navigateKw(1);
  }

  if (e.key === 'Escape') {
    closeTextModal();
    closeScreenshotModal();
    closeLongrunOverviewModal();
    closeWorkoutDetailsModal();
  }
});

function changeWeek(kw) {
  selectedKw = parseInt(kw, 10);
  renderDashboard();
}

function renderDashboard() {
  const kwConfig = kwMap[selectedKw] || { phase: 1, travel: 'KW 31' };
  const phase = phaseData[kwConfig.phase];

  const titleSubElem = document.getElementById('kwTitleSub');
  if (titleSubElem) titleSubElem.textContent = `KW ${selectedKw}`;

  const prevBtn = document.getElementById('prevKwBtn');
  const nextBtn = document.getElementById('nextKwBtn');
  if (prevBtn) prevBtn.disabled = (selectedKw <= 30);
  if (nextBtn) nextBtn.disabled = (selectedKw >= 43);

  renderCleanHeroBar(selectedKw, phase);
  renderSpacexProgress(selectedKw);
  renderCoachWidget(selectedKw);
  renderScheduleRow(selectedKw);
  renderPhaseInfo(phase, selectedKw);
  renderLastActivity();
}

const expeditionPhasesData = [
  {
    name: "Basis Erkrath",
    dates: "KW 30–31 (20.07 – 02.08)",
    goal: "Grundlage aufbauen & Ausdauer festigen (Alle Longruns bis 500 Hm in Erkrath)",
    workouts: "Longruns 12–14 km, Rampenläufe in Erkrath, 380 Hm Gesamtanstieg pro Woche.",
    notes: "500ml Softflasks, Marzipan & Feigen bei Longruns (>15 km). Sonnenspray verwenden."
  },
  {
    name: "London Reise",
    dates: "KW 32 (03.08 – 09.08)",
    goal: "Fitness erhalten & Waden entlasten (Rave London & 5 km Recovery)",
    workouts: "Lockere Stadtläufe, Rave London am Samstag, 5 km Recovery am Sonntag. Max 50 Hm.",
    notes: "Bewusste Regenerationswoche. Laufschuhe & leichtes Gear im Handgepäck."
  },
  {
    name: "Siebengebirge Peak",
    dates: "KW 33–36 (10.08 – 06.09)",
    goal: "Bergkraft entwickeln & vertikal klettern (950 Hm Peak)",
    workouts: "Einstieg Coastal Trail (250 Hm), Longruns 16–20 km im Siebengebirge, 950 Hm Peak.",
    notes: "Verpflegungs-Test unter hoher Belastung. Maltodextrin 500ml Flaschen nutzen."
  },
  {
    name: "Côte d’Opale Trail",
    dates: "KW 37–38 (07.09 – 20.09)",
    goal: "Langer Testlauf unter Renntempo (25 km Klippentrail)",
    workouts: "25 km Wettkampftest an der Küste unter Renntempo, gefolgt von GA1-Regeneration.",
    notes: "Wettkampfausrüstung auf Coastal Trails testen. Kälteschutz & Mückenspray."
  },
  {
    name: "Probedrachen",
    dates: "KW 39 (21.09 – 27.09)",
    goal: "Generalprobe auf den Drachenlauf-Kernabschnitten (max. 4 Std.)",
    workouts: "18 km Probedrachen auf den Kern-Abschnitten der Originalstrecke mit ca. 1.000 Höhenmetern (max. 4 Std.).",
    notes: "Streckenerkundung & Test. Pacing & Malto-/Snack-Timing (Marzipan & Feigen) exakt wie am Renntag steuern."
  },
  {
    name: "Tapering",
    dates: "KW 40–42 (28.09 – 18.10)",
    goal: "Umfang gezielt reduzieren & Muskelfrische aufbauen",
    workouts: "Umfangsreduktion um 40%, kurze Reizläufe in Zoutelande & Erkrath.",
    notes: "Kohlenhydratspeicher auffüllen, Schlaf priorisieren, Beine hochlegen."
  },
  {
    name: "Drachenlauf Gipfelpunkt",
    dates: "KW 43 (19.10 – 25.10)",
    goal: "Renntag Drachenlauf (26 km · 1.250 Hm - Lohn deiner 14 Wochen)",
    workouts: "26 km Wettkampf Siebengebirge mit 1.250 Hm am Renn-Sonntag.",
    notes: "Höhepunkt der Expedition. Vollgepackte Energie, Pacing nach Vorgabe."
  }
];

function renderSpacexProgress(kw) {
  const line = document.getElementById('spacexProgressLine');
  const fillLine = document.getElementById('expeditionFillLine');
  const pctLabel = document.getElementById('expeditionPctLabel');
  const phaseNameEl = document.getElementById('expeditionPhaseName');
  const phaseGoalEl = document.getElementById('expeditionPhaseGoal');
  const nodes = document.querySelectorAll('.spacex-node');
  if (!nodes || nodes.length === 0) return;

  let pct = 0;
  let activeIdx = 0;

  if (kw <= 31) { pct = 14; activeIdx = 0; }
  else if (kw === 32) { pct = 28; activeIdx = 1; }
  else if (kw >= 33 && kw <= 36) { pct = 45; activeIdx = 2; }
  else if (kw === 37 || kw === 38) { pct = 60; activeIdx = 3; }
  else if (kw === 39) { pct = 75; activeIdx = 4; }
  else if (kw >= 40 && kw <= 42) { pct = 88; activeIdx = 5; }
  else if (kw >= 43) { pct = 100; activeIdx = 6; }

  const svgFillPath = document.getElementById('trailPathFill');
  if (svgFillPath) {
    const totalLen = svgFillPath.getTotalLength ? svgFillPath.getTotalLength() : 1000;
    svgFillPath.style.strokeDasharray = `${totalLen}`;
    const offset = totalLen - (totalLen * (pct / 100));
    svgFillPath.style.strokeDashoffset = `${offset}`;
  }

  if (line) line.style.width = `${pct}%`;
  if (fillLine) fillLine.style.width = `${pct}%`;
  if (pctLabel) pctLabel.textContent = `${pct}% DER EXPEDITION ABSOLVIERT`;

  const currPhase = expeditionPhasesData[activeIdx];
  if (phaseNameEl) phaseNameEl.textContent = `${currPhase.name} (${currPhase.dates.split(' ')[0]})`;
  if (phaseGoalEl) phaseGoalEl.textContent = `· ${currPhase.goal.split(' (')[0]}`;

  nodes.forEach((n, idx) => {
    n.classList.remove('done-node', 'active-node');
    let dotElem = n.querySelector('.node-dot, .node-ring');

    if (idx < activeIdx) {
      n.classList.add('done-node');
      if (dotElem) dotElem.outerHTML = '<div class="node-dot">✓</div>';
    } else if (idx === activeIdx) {
      n.classList.add('active-node');
      if (dotElem) dotElem.outerHTML = '<div class="node-ring"><div class="node-core"></div></div>';
    } else {
      if (n.classList.contains('target-node') || n.classList.contains('summit-node')) {
        if (dotElem) dotElem.outerHTML = '<div class="node-dot target-dot summit-dot"><svg width="10" height="10" viewBox="0 0 24 24" fill="var(--color-brand-orange)" style="margin-top: 1px;"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z"/></svg></div>';
      } else {
        if (dotElem) dotElem.outerHTML = '<div class="node-dot"></div>';
      }
    }
  });
}

function openPhaseDetailModal(idx) {
  const phase = expeditionPhasesData[idx];
  if (!phase) return;

  const currentKw = selectedKw || 31;
  let statusText = "🔒 Bevorstehende Etappe";
  if (idx === 0 && currentKw <= 31) statusText = "⚡ Aktuell (Du bist hier)";
  else if (idx === 1 && currentKw === 32) statusText = "⚡ Aktuell (Du bist hier)";
  else if (idx === 2 && currentKw >= 33 && currentKw <= 36) statusText = "⚡ Aktuell (Du bist hier)";
  else if (idx === 3 && (currentKw === 37 || currentKw === 38)) statusText = "⚡ Aktuell (Du bist hier)";
  else if (idx === 4 && currentKw === 39) statusText = "⚡ Aktuell (Du bist hier)";
  else if (idx === 5 && currentKw >= 40 && currentKw <= 42) statusText = "⚡ Aktuell (Du bist hier)";
  else if (idx === 6 && currentKw >= 43) statusText = "⚡ Aktuell (Du bist hier)";
  else if ((idx === 0 && currentKw > 31) || (idx === 1 && currentKw > 32) || (idx === 2 && currentKw > 36) || (idx === 3 && currentKw > 38) || (idx === 4 && currentKw > 39) || (idx === 5 && currentKw > 42)) {
    statusText = "✓ Abgeschlossene Etappe";
  }

  const badgeEl = document.getElementById('pdmBadge');
  const titleEl = document.getElementById('pdmTitle');
  const statusTagEl = document.getElementById('pdmStatusTag');
  const datesStrEl = document.getElementById('pdmDatesStr');
  const goalTextEl = document.getElementById('pdmGoalText');
  const workoutsTextEl = document.getElementById('pdmWorkoutsText');
  const notesTextEl = document.getElementById('pdmNotesText');

  if (badgeEl) badgeEl.textContent = `ETAPPE ${idx + 1}`;
  if (titleEl) titleEl.textContent = phase.name;
  if (statusTagEl) statusTagEl.textContent = statusText;
  if (datesStrEl) datesStrEl.textContent = phase.dates;
  if (goalTextEl) goalTextEl.textContent = phase.goal;
  if (workoutsTextEl) workoutsTextEl.textContent = phase.workouts;
  if (notesTextEl) notesTextEl.textContent = phase.notes;

  const modal = document.getElementById('phaseDetailModal');
  if (modal) modal.classList.remove('hidden');
}

function closePhaseDetailModal() {
  const modal = document.getElementById('phaseDetailModal');
  if (modal) modal.classList.add('hidden');
}

function renderCoachWidget(kw) {
  const headlineEl = document.getElementById('coachHeadline');
  const summaryEl = document.getElementById('coachSummaryRow');
  const chipUnitsEl = document.getElementById('chipUnits');
  const chipHmEl = document.getElementById('chipHm');
  const chipKraftEl = document.getElementById('chipKraft');
  
  const days = appleScheduleData[kw] || generateDefaultDays(kw);
  let totalKm = 0;
  let totalHm = 0;
  let runUnits = 0;
  let kraftUnits = 0;
  let sundayDist = 0;

  days.forEach(d => {
    totalKm += d.dist || 0;
    totalHm += d.hm || 0;
    const tagL = (d.tag || '').toLowerCase();
    if (d.dist > 0) {
      runUnits++;
    }
    if (tagL.includes('stabi') || tagL.includes('kraft') || tagL.includes('kt')) {
      kraftUnits++;
    }
    if (d.day === 'SON') {
      sundayDist = d.dist || 0;
    }
  });

  const headlines = {
    30: "Starte kontrolliert in die Vorbereitung für Erkrath.",
    31: "Diese Woche legst du die Grundlage für den Drachenlauf.",
    32: "Nutze die Reisewoche London als bewusste Beinentlastung.",
    33: "Klettere an der Jurassic Coast und sammle Höhenmeter.",
    34: "Steigere die Bergbelastung im Siebengebirge gezielt.",
    35: "Teste deine Malto und Verpflegungssnacks unter hoher Belastung.",
    36: "Absolviere deinen vertikalen Höhenmeter-Peak im Siebengebirge.",
    37: "Testlauf am Côte d’Opal Trail unter realistischem Renntempo.",
    38: "Regeneriere aktiv an der Küste im strikten GA1-Tempo.",
    39: "Erkunde die Drachenlauf-Originalstrecke entspannt ohne Tempodruck.",
    40: "Starte das Tapering in Zoutelande und reduziere die Höhenmeter.",
    41: "Drossle den Umfang gezielt für volle Beinfrische.",
    42: "Halte die Läufe kurz – fülle deine Kohlenhydratspeicher.",
    43: "Race week! This is it!"
  };

  if (headlineEl) {
    headlineEl.textContent = headlines[kw] || "Diese Woche legst du die Grundlage für den Drachenlauf.";
  }

  if (summaryEl) {
    summaryEl.innerHTML = `<strong class="highlight-val">${totalKm.toFixed(0)} km</strong> · <strong class="highlight-val">${totalHm} Hm</strong>`;
  }

  if (chipUnitsEl) chipUnitsEl.textContent = `🏃 ${runUnits || 4} Einheiten`;
  if (chipHmEl) chipHmEl.textContent = `⛰ ${totalHm || 480} Hm`;
  if (chipKraftEl) chipKraftEl.textContent = `💪 ${kraftUnits || 1} Krafttraining`;
}

function getRunsForKw(kw) {
  const days = appleScheduleData[kw] || [];
  const weekDates = days.map(d => d.date);

  return runsData.filter(r => {
    if (r.kw === kw) return true;
    if (r.dayDate && weekDates.includes(r.dayDate)) return true;
    if (r.date) {
      return weekDates.some(wd => r.date.startsWith(wd));
    }
    return false;
  });
}

function renderCleanHeroBar(kw, phase) {
  const days = appleScheduleData[kw] || [];
  const sundayObj = days.find(d => d.day === 'SON') || { dist: phase.targetLongDist, hm: phase.targetLongHm, tag: 'Longrun' };
  
  const kwRuns = getRunsForKw(kw);
  const actWkm = kwRuns.reduce((acc, r) => {
    const isNonRun = r.type === 'schwimmen' || r.type === 'radfahren' || r.type === 'kraft' || r.type === 'ersatz' || r.isErsatz || (r.notes && r.notes.toLowerCase().includes('schwimm'));
    return acc + (isNonRun ? 0 : (r.dist || 0));
  }, 0);

  const actWhm = kwRuns.reduce((acc, r) => {
    const isNonRun = r.type === 'schwimmen' || r.type === 'radfahren' || r.type === 'kraft' || r.type === 'ersatz' || r.isErsatz || (r.notes && r.notes.toLowerCase().includes('schwimm'));
    return acc + (isNonRun ? 0 : (r.hm || 0));
  }, 0);

  // Dynamische Errechnung der geplanten Wochenzielwerte aus den Tageskarten der jeweiligen Woche
  const plannedWkm = days.length > 0 ? days.reduce((acc, d) => acc + (d.dist || 0), 0) : phase.targetWkm;
  const plannedWhm = days.length > 0 ? days.reduce((acc, d) => acc + (d.hm || 0), 0) : phase.targetWhm;

  const targetWkm = plannedWkm || phase.targetWkm || 30.0;
  const targetWhm = plannedWhm || phase.targetWhm || 450;

  const distPct = Math.min(100, Math.round((actWkm / targetWkm) * 100));
  const hmPct = Math.min(100, Math.round((actWhm / targetWhm) * 100));

  const estDur = formatWorkoutDuration(sundayObj.dist, sundayObj.hm, sundayObj.tag);
  const hrTarget = getHrTargetForWorkout(sundayObj.tag) || 'HF < 135 bpm';

  const sundayLogged = sundayObj ? runsData.find(r => r.dayDate === sundayObj.date || r.date === sundayObj.date || r.date === `${sundayObj.date}.2026` || (r.date && r.date.startsWith(sundayObj.date))) : null;
  const isMainWorkoutDone = sundayObj ? (sundayObj.done || !!sundayLogged) : false;

  const heroTagElem = document.getElementById('heroBarTag');
  if (heroTagElem) {
    if (isMainWorkoutDone) {
      heroTagElem.textContent = 'DAS WAR DAS DING IN DER WOCHE';
      heroTagElem.style.color = 'var(--apple-green)';
    } else {
      heroTagElem.textContent = 'DEIN DING DIESE WOCHE';
      heroTagElem.style.color = 'var(--apple-orange)';
    }
  }

  const cdBadge = document.getElementById('heroCountdownBadge');
  if (cdBadge) {
    cdBadge.textContent = `KW ${kw}`;
  }

  const displayTag = sundayLogged ? (sundayLogged.tag || sundayObj.tag) : sundayObj.tag;
  const displayDist = sundayLogged ? sundayLogged.dist : sundayObj.dist;
  const displayHm = sundayLogged ? sundayLogged.hm : sundayObj.hm;
  document.getElementById('heroTitle').textContent = `${displayTag} (${displayDist.toFixed(1)} km · ${displayHm} Hm)`;
  const subElem = document.getElementById('heroSubText');
  if (subElem) subElem.textContent = `Sonntag, ${sundayObj.date}. · ${hrTarget} · ${estDur}`;

  const targetPaceElem = document.getElementById('heroTargetPace');
  const targetFuelElem = document.getElementById('heroTargetFuel');
  if (targetPaceElem) targetPaceElem.textContent = '7:10–7:25';
  if (targetFuelElem) {
    if (sundayObj.dist >= 15) {
      targetFuelElem.textContent = '2 Softflasks (120g Malto)';
    } else {
      targetFuelElem.textContent = '1 Softflask Wasser';
    }
  }

  document.getElementById('wmDistVal').textContent = `${actWkm.toFixed(1)} / ${targetWkm.toFixed(1)} km`;
  document.getElementById('wmDistFill').style.width = `${distPct}%`;

  document.getElementById('wmHmVal').textContent = `${actWhm} / ${targetWhm} Hm`;
  document.getElementById('wmHmFill').style.width = `${hmPct}%`;
}

function renderScheduleRow(kw) {
  const container = document.getElementById('scheduleRow');
  const days = appleScheduleData[kw] || generateDefaultDays(kw);
  const todayObj = new Date();
  const dayNamesShort = ['SON', 'MON', 'DIE', 'MIT', 'DON', 'FRE', 'SAM'];
  const realTodayDayName = dayNamesShort[todayObj.getDay()]; // 'SAM' for Saturday 01.08
  const isCurrentActiveKw = (kw === 31 || kw === getISOWeekNumber(todayObj));

  container.innerHTML = days.map((d, i) => {
    const loggedRun = runsData.find(r => r.dayDate === d.date || r.date === d.date || r.date === `${d.date}.2026`);
    const isDone = d.done || !!loggedRun;
    const tagLower = (d.tag || '').toLowerCase();

    let specialCardClass = '';
    let pillExtraClass = '';
    const isMajorRaceOrTestDay = d.dist >= 15 || d.day === 'SON';
    const isToday = isCurrentActiveKw && d.day === realTodayDayName;
    const isKtDay = (!d.dist || d.dist === 0) && (tagLower.includes('stabi') || tagLower.includes('kt') || tagLower.includes('kraft'));
    const isRaveDay = (!d.dist || d.dist === 0) && (tagLower.includes('rave') || tagLower.includes('tanz') || tagLower.includes('amsterdam') || tagLower.includes('event'));
    const isRestDay = (!d.dist || d.dist === 0) && !isKtDay && !isRaveDay;

    if (isToday) {
      specialCardClass += ' card-today';
    }

    if (tagLower.includes('drachenlauf') && !tagLower.includes('probedrachen') && isMajorRaceOrTestDay) {
      specialCardClass += ' card-race';
      pillExtraClass = 'pill-race';
      displayTagTxt = 'Drachenlauf 🎯';
    } else if (tagLower.includes('probedrachen') && isMajorRaceOrTestDay) {
      specialCardClass += ' card-test-race';
      pillExtraClass = 'pill-test';
      displayTagTxt = 'Probedrachen ⚡';
    } else if (tagLower.includes('opal') && isMajorRaceOrTestDay) {
      specialCardClass += ' card-test-race';
      pillExtraClass = 'pill-test';
      displayTagTxt = 'Côte d’Opal ⚡';
    } else if (d.day === 'SON' && d.dist > 0) {
      specialCardClass += ' card-main-workout';
      displayTagTxt = d.tag;
    } else if (tagLower.includes('rampen') || tagLower.includes('coastal') || tagLower.includes('tempo')) {
      specialCardClass += ' card-key-workout';
      pillExtraClass = 'pill-key';
      displayTagTxt = tagLower.includes('rampen') ? 'Rampen' : (tagLower.includes('coastal') ? 'Trail' : 'Tempo');
    } else if (tagLower.includes('aktivierung')) {
      displayTagTxt = 'Aktivierung';
    } else if (isKtDay) {
      displayTagTxt = 'Kraft';
      pillExtraClass = 'pill-kraft';
    } else if (isRaveDay) {
      displayTagTxt = 'Tanz-Event';
      pillExtraClass = 'pill-ersatz';
    } else if (d.dist > 0) {
      displayTagTxt = d.tag || 'Grundlage';
    } else if (isRestDay) {
      displayTagTxt = 'Ruhetag';
      pillExtraClass = 'pill-rest';
    }

    let cardExtraClasses = specialCardClass;
    if (isDone) {
      cardExtraClasses += ' card-completed';
    } else if (!isDone && !isToday && (kw > 31 || (kw === 31 && i > 5))) {
      cardExtraClasses += ' card-future';
    } else if (isRestDay) {
      cardExtraClasses += ' card-rest-day';
      pillExtraClass = 'pill-rest';
    }

    let headerRightHtml = `<span class="date-num">${d.date}</span>`;
    let heroHtml = '';
    let subMicroHtml = '';

    if (isDone) {
      displayTagTxt = '✓ Erledigt';
      pillExtraClass = 'pill-completed';

      if (loggedRun) {
        if (loggedRun.type === 'schwimmen' || (loggedRun.notes && loggedRun.notes.toLowerCase().includes('schwimm'))) {
          displayTagTxt = '✓ Ersatz';
          pillExtraClass = 'pill-ersatz';
          const meters = loggedRun.distMeters || (loggedRun.dist ? Math.round(loggedRun.dist * 1000) : 1150);
          const formattedMeters = meters.toLocaleString('de-DE');
          heroHtml = `
            <div class="hero-val-wrap">
              <span class="hero-val" style="color: var(--apple-cyan); font-size: 1.30rem;">${formattedMeters} m</span>
              <span class="hero-unit" style="color: var(--apple-cyan); font-size: 0.60rem; display: block;">SCHWIMMEN</span>
            </div>
          `;
          const durPart = loggedRun.duration ? formatLoggedDurationNice(loggedRun.duration) : '25 Min';
          const hrPart = loggedRun.hr > 0 ? `${loggedRun.hr} bpm` : '';
          subMicroHtml = `<span style="color: var(--apple-cyan); font-weight: 800;">${durPart}${durPart && hrPart ? ' · ' : ''}${hrPart}</span>`;
        } else if (loggedRun.isErsatz || loggedRun.type === 'ersatz' || loggedRun.type === 'radfahren') {
          displayTagTxt = '✓ Ersatz';
          pillExtraClass = 'pill-ersatz';
          const typeName = loggedRun.tag || 'Ersatz';
          heroHtml = `<div class="hero-val-wrap"><span class="hero-rest-txt" style="color: var(--apple-cyan); font-weight: 900;">${typeName.toUpperCase()}</span></div>`;
          let durMin = loggedRun.duration || '30 Min.';
          subMicroHtml = `<span style="color: var(--apple-cyan); font-weight: 800;">${formatLoggedDurationNice(durMin)}</span>`;
        } else if (!loggedRun.dist || loggedRun.dist === 0) {
          heroHtml = `<div class="hero-val-wrap"><span class="hero-rest-txt" style="color: var(--apple-green); font-weight: 900;">STABI</span></div>`;
          let durMin = loggedRun.duration || '30 Min.';
          subMicroHtml = `<span style="color: var(--apple-green); font-weight: 800;">${formatLoggedDurationNice(durMin)}</span>`;
        } else {
          const distNum = loggedRun.dist.toFixed(1);
          const loggedDurStr = formatLoggedDurationNice(loggedRun.duration);
          heroHtml = `
            <div class="hero-val-wrap">
              <span class="hero-val" style="color: var(--apple-green);">${distNum}</span>
              <span class="hero-unit" style="color: var(--apple-green);">KM</span>
            </div>
          `;
          const hmPart = loggedRun.hm > 0 ? `<span style="color: var(--apple-green); font-weight: 900;">${loggedRun.hm} Hm</span>` : '';
          const durPart = loggedDurStr ? `<span style="color: var(--apple-green);">${loggedDurStr}</span>` : '';
          subMicroHtml = `${hmPart}${hmPart && durPart ? '<span class="sub-sep" style="color: var(--apple-green);">·</span>' : ''}${durPart}`;
        }
      } else {
        const distNum = d.dist > 0 ? d.dist.toFixed(1) : '0.0';
        const estDur = formatWorkoutDuration(d.dist, d.hm, d.tag);
        heroHtml = `
          <div class="hero-val-wrap">
            <span class="hero-val" style="color: var(--apple-green);">${distNum}</span>
            <span class="hero-unit" style="color: var(--apple-green);">KM</span>
          </div>
        `;
        subMicroHtml = `<span style="color: var(--apple-green); font-weight: 800;">${d.hm > 0 ? d.hm + ' Hm · ' : ''}${estDur}</span>`;
      }
    } else if (isRaveDay || tagLower.includes('rave') || tagLower.includes('tanz') || tagLower.includes('amsterdam')) {
      heroHtml = `<div class="hero-val-wrap"><span class="hero-rest-txt" style="color: #FF9F0A; font-weight: 900;">Tanz-Event</span></div>`;
      subMicroHtml = `<span style="color: #FF9F0A; font-weight: 800;">2 Std.</span>`;
    } else if (isRestDay) {
      heroHtml = `<div class="hero-val-wrap"><span class="hero-rest-txt">CHILL</span></div>`;
      subMicroHtml = `<span style="color: var(--text-secondary); font-weight: 700;">Übungen</span>`;
    } else if (isKtDay) {
      heroHtml = `<div class="hero-val-wrap"><span class="hero-rest-txt" style="color: var(--apple-cyan); font-weight: 900;">Kraft & Rumpf</span></div>`;
      subMicroHtml = `<span style="color: #D1D1D6; font-weight: 700;">25–30 Min.</span>`;
    } else {
      const distNum = d.dist.toFixed(1);
      const estDur = formatWorkoutDuration(d.dist, d.hm, d.tag);
      heroHtml = `
        <div class="hero-val-wrap">
          <span class="hero-val">${distNum}</span>
          <span class="hero-unit">KM</span>
        </div>
      `;
      const hmStyle = getHmColorStyle(d.hm);
      const hmPart = d.hm > 0 ? `<span style="${hmStyle}">${d.hm} Hm</span>` : '';
      const durPart = estDur ? `<span>${estDur}</span>` : '';
      subMicroHtml = `${hmPart}${hmPart && durPart ? '<span class="sub-sep">·</span>' : ''}${durPart}`;
    }

    let actionBtnHtml = '';
    if (isToday && !isDone) {
      actionBtnHtml = `<div class="day-action-btn" onclick="event.stopPropagation(); openWorkoutDetailsModal(${kw}, ${i})">Starten →</div>`;
    }

    return `
      <div class="apple-day-card ${cardExtraClasses}" onclick="openWorkoutDetailsModal(${kw}, ${i})" title="Details für ${d.tag} anzeigen">
        ${isToday ? '<span class="badge-today-blue">HEUTE</span>' : ''}
        <div class="day-header">
          <span class="day-name">${d.day}</span>
          ${headerRightHtml}
        </div>
        <div class="day-hero-box">
          ${heroHtml}
          <div class="hero-sub-micro">
            ${subMicroHtml}
          </div>
        </div>
        <div class="day-footer-row">
          ${(isRestDay && !isDone) ? '' : `<div class="day-pill-badge ${pillExtraClass}">${displayTagTxt}</div>`}
          ${actionBtnHtml}
          <div class="status-dot ${isDone ? 'done' : ''}"></div>
        </div>
      </div>
    `;
  }).join('');
}

function openWorkoutDetailsModal(kw, dayIndex) {
  const days = appleScheduleData[kw] || generateDefaultDays(kw);
  const d = days[dayIndex];
  if (!d) return;

  const dayNames = { MON: 'MONTAG', DIE: 'DIENSTAG', MIT: 'MITTWOCH', DON: 'DONNERSTAG', FRE: 'FREITAG', SAM: 'SAMSTAG', SON: 'SONNTAG' };
  const fullDay = dayNames[d.day] || d.day;

  document.getElementById('workoutMetaHeader').textContent = `${fullDay}, ${d.date}.2026 · KW ${kw}`;
  document.getElementById('workoutModalTitle').textContent = d.tag;

  const kwRuns = runsData.filter(r => r.kw === kw);
  const loggedRun = kwRuns.find(r => r.dayDate === d.date);

  const tagLower = (d.tag || '').toLowerCase();
  let estDur = formatWorkoutDuration(d.dist, d.hm, d.tag);
  if (tagLower.includes('drachenlauf') && !tagLower.includes('probedrachen') && d.dist >= 20) {
    estDur = '4:15 – 4:30 Std.';
  } else if (tagLower.includes('probedrachen') && d.dist >= 15) {
    estDur = '3:45 – 4:00 Std.';
  } else if (tagLower.includes('opal') && d.dist >= 20) {
    estDur = '2:45 – 3:00 Std.';
  }

  const totalMin = getEstimatedDurationMinutes(d.dist, d.hm, d.tag);
  const maltoPlanText = getMaltoNutritionPlan(totalMin);
  const hrTarget = getHrTargetForWorkout(d.tag) || 'HF < 130 bpm';
  
  const isKeyRaceOrPeakTest = tagLower.includes('drachenlauf') || 
                              tagLower.includes('probedrachen') || 
                              tagLower.includes('opal') || 
                              tagLower.includes('coastal') || 
                              tagLower.includes('zoutelande');

  const requiresMalto = d.dist > 0 && (
    isKeyRaceOrPeakTest || 
    (d.dist >= 15 && d.hm >= 500) || 
    (tagLower.includes('siebengebirge') && d.dist >= 15)
  );

  const isLongrun = (d.day === 'SON' && d.dist >= 10) || d.dist >= 15 || isKeyRaceOrPeakTest;
  const isHeatPossible = kw <= 37 || tagLower.includes('opal') || tagLower.includes('august');

  let categoryBadge = 'GRUNDLAGE / LOCKER';
  let categoryColor = '#64D2FF';

  if (tagLower.includes('rave')) {
    categoryBadge = 'AUSNAHME-EVENT / NIGHTLIFE 🪩';
    categoryColor = '#FF9F0A';
  } else if (tagLower.includes('trip') || tagLower.includes('amsterdam') || tagLower.includes('anreise') || tagLower.includes('rückfahrt')) {
    categoryBadge = 'REISE & STÄDTETRIP ✈️';
    categoryColor = '#64D2FF';
  } else if (tagLower.includes('drachenlauf') && !tagLower.includes('probedrachen')) {
    categoryBadge = 'HAUPTWETTKAMPF 🎯';
    categoryColor = '#FF9F0A';
  } else if (tagLower.includes('probedrachen')) {
    categoryBadge = 'STRECKENERKUNDUNG & GENUSS 🗺️';
    categoryColor = '#30D158';
  } else if (tagLower.includes('opal')) {
    categoryBadge = 'TESTRENNEN ⚡';
    categoryColor = '#007AFF';
  } else if (tagLower.includes('rampen')) {
    categoryBadge = 'SCHLÜSSELEINHEIT: RAMPEN ⚡';
    categoryColor = '#FFD60A';
  } else if (isLongrun) {
    categoryBadge = 'SCHLÜSSELEINHEIT: LONGRUN ↗';
    categoryColor = '#FFD60A';
  } else if (d.dist === 0) {
    categoryBadge = 'REGENERATION & STABI 🧘';
    categoryColor = '#30D158';
  }

  let tipsList = [];

  if (tagLower.includes('rave')) {
    tipsList = [
      'Heftiges Tanzen & kontinuierliche Bewegung (geschätzte Dauer 5–7 Std.)',
      'Wichtig: Keine Anrechnung auf den primären Lauf-Kilometerumfang',
      'Ausreichend Wasser & Elektrolyte zur Regeneration trinken',
      'Folgetag (Sonntag): Reduzierter Recovery-Lauf auf 5 km (Flachpark)'
    ];
  } else if (tagLower.includes('probedrachen')) {
    tipsList = [
      'Streckenerkundung der Kern-Abschnitte des Drachenlaufs (18 km / 1.000 Hm · max. 4 Std.)',
      'Kein Tempodruck – Entspanntes GA1-Tempo, Orientierung & Fotostopps',
      'Steile Anstiege frühzeitig in zügiges Gehtempo (Power-Hiking) wechseln',
      'Verpflegung (Softflasks & Nahrung) unter realen Bedingungen testen'
    ];
  } else if (tagLower.includes('coastal') || tagLower.includes('cliff')) {
    tipsList = [
      'Trail-Lauf auf Klippenpfaden (Technisches Terrain)',
      'Fokus: Trittsicherheit & entspanntes Landschaftstempo',
      'Ansteigende Abschnitte zügig gehen (Power-Hiking)'
    ];
  } else if (tagLower.includes('rampen')) {
    tipsList = [
      '1,5 km Einlaufen (flach)',
      '6–8× Rampen bergauf (HF 135–150 bpm)',
      'Trabpause bergab (Laktat-Clearance)',
      '1,5 km Auslaufen'
    ];
  } else if (tagLower.includes('studio') || (tagLower.includes('kraft') && !tagLower.includes('reise') && !tagLower.includes('stabi'))) {
    tipsList = [
      'Studio-Krafttraining: Beinpresse / Kniebeugen & Wadenheber',
      'Rumpf-Stabi: Unterarmstütz, Rückenstrecker & Abdominal Press',
      'Fokus: Beinkraft & Gelenkstabilisierung für steile Anstiege'
    ];
  } else if (tagLower.includes('stabi') || tagLower.includes('kt') || tagLower.includes('eigengewicht')) {
    tipsList = [
      'Bodyweight-Stabi: 3 Sätze Plank, Side Plank, Bird Dog & Ausfallschritte',
      'Fokus: Rumpf- & Hüftstabilität'
    ];
  } else if (isLongrun) {
    tipsList = [
      'GA1-Pacing (HF Flach < 130, Berg < 140)',
      'Steile Anstiege früh in Zügig-Gehen wechseln'
    ];
  } else if (tagLower.includes('drachenlauf') || tagLower.includes('probedrachen') || tagLower.includes('opal')) {
    tipsList = [
      'Erste 5 km kontrolliert anlaufen',
      'Puls an Anstiegen diszipliniert halten'
    ];
  } else if (d.dist === 0) {
    tipsList = [
      'Erholung & Regeneration',
      'Leichtes Dehnen, Spaziergang oder passive Erholung'
    ];
  } else {
    tipsList = [
      'Grundlagenausdauer (GA1 - HF < 135 bpm)',
      'Gleichmäßiges, kontrolliertes Tempo'
    ];
  }

  let comparisonBlocksHtml = '';

  if (loggedRun) {
    const loggedDurStr = formatLoggedDurationNice(loggedRun.duration);
    comparisonBlocksHtml = `
      <!-- UNIFIED COMPARISON CARD (GELAUFEN + GEPLANTER LAUF) -->
      <div style="background: rgba(0, 0, 0, 0.4); border: 1px solid var(--border-card); border-radius: 16px; padding: 1.1rem 1.25rem; margin-bottom: 1.25rem;">
        
        <!-- GELAUFEN -->
        <div style="margin-bottom: 0.85rem;">
          <div style="font-size: 0.85rem; font-weight: 900; color: var(--apple-green); display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>✓ Gelaufen</span>
            ${loggedRun.notes ? `<span style="font-style: italic; font-weight: 600; text-transform: none; color: var(--text-secondary); font-size: 0.80rem;">Notiz: "${loggedRun.notes}"</span>` : ''}
          </div>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.6rem; background: rgba(48, 209, 88, 0.08); border: 1px solid rgba(48, 209, 88, 0.35); border-radius: 12px; padding: 0.85rem 0.6rem;">
            <div style="text-align: center;">
              <span style="font-size: 1.35rem; font-weight: 900; color: var(--apple-green); display: block; font-feature-settings: 'tnum';">${loggedRun.dist > 0 ? loggedRun.dist.toFixed(1) : '0.0'}</span>
              <span style="font-size: 0.75rem; font-weight: 800; color: var(--apple-green);">DISTANZ (KM)</span>
            </div>
            <div style="text-align: center;">
              <span style="font-size: 1.35rem; font-weight: 900; color: var(--apple-green); display: block; font-feature-settings: 'tnum';">${loggedRun.hm || 0}</span>
              <span style="font-size: 0.75rem; font-weight: 800; color: var(--apple-green);">HÖHENMETER</span>
            </div>
            <div style="text-align: center;">
              <span style="font-size: 1.35rem; font-weight: 900; color: var(--apple-green); display: block; font-feature-settings: 'tnum';">${loggedDurStr || '-'}</span>
              <span style="font-size: 0.75rem; font-weight: 800; color: var(--apple-green);">DAUER</span>
            </div>
            <div style="text-align: center;">
              <span style="font-size: 1.25rem; font-weight: 900; color: var(--apple-green); display: block; margin-top: 0.1rem; font-feature-settings: 'tnum';">${loggedRun.hr > 0 ? loggedRun.hr + ' bpm' : '--'}</span>
              <span style="font-size: 0.75rem; font-weight: 800; color: var(--apple-green);">DURCHSCHNITTSPULS</span>
            </div>
          </div>
        </div>

        <!-- DIVIDER -->
        <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); margin: 0.85rem 0 0.85rem 0;"></div>

        <!-- GEPLANTER LAUF -->
        <div>
          <div style="font-size: 0.82rem; font-weight: 800; color: var(--text-secondary); margin-bottom: 0.5rem;">
            Geplanter Lauf
          </div>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.6rem; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; padding: 0.75rem 0.6rem;">
            <div style="text-align: center;">
              <span style="font-size: 1.25rem; font-weight: 800; color: var(--text-white); display: block; font-feature-settings: 'tnum';">${d.dist > 0 ? d.dist.toFixed(1) : '0.0'}</span>
              <span style="font-size: 0.72rem; font-weight: 800; color: var(--text-secondary);">SOLL DISTANZ (KM)</span>
            </div>
            <div style="text-align: center;">
              <span style="font-size: 1.25rem; font-weight: 800; color: var(--text-white); display: block; font-feature-settings: 'tnum';">${d.hm}</span>
              <span style="font-size: 0.72rem; font-weight: 800; color: var(--text-secondary);">SOLL HÖHENMETER</span>
            </div>
            <div style="text-align: center;">
              <span style="font-size: 1.25rem; font-weight: 800; color: var(--text-white); display: block; font-feature-settings: 'tnum';">${d.dist > 0 ? estDur : 'Stabi'}</span>
              <span style="font-size: 0.72rem; font-weight: 800; color: var(--text-secondary);">SCHÄTZDAUER</span>
            </div>
            <div style="text-align: center;">
              <span style="font-size: 1.05rem; font-weight: 800; color: var(--text-white); display: block; margin-top: 0.15rem;">${hrTarget}</span>
              <span style="font-size: 0.72rem; font-weight: 800; color: var(--text-secondary);">PULS-ZIELZONE</span>
            </div>
          </div>
        </div>

      </div>
    `;
  } else {
    comparisonBlocksHtml = `
      <!-- GEPLANTER LAUF -->
      <div style="background: rgba(0, 0, 0, 0.35); border: 1px solid var(--border-card); border-radius: 16px; padding: 1.1rem 1.25rem; margin-bottom: 1.25rem;">
        <div style="font-size: 0.85rem; font-weight: 900; color: var(--apple-cyan); margin-bottom: 0.5rem;">
          Geplanter Lauf
        </div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.6rem; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; padding: 0.85rem 0.6rem;">
          <div style="text-align: center;">
            <span style="font-size: 1.3rem; font-weight: 900; display: block; font-feature-settings: 'tnum';">${d.dist > 0 ? d.dist.toFixed(1) : '0.0'}</span>
            <span style="font-size: 0.75rem; font-weight: 800; color: var(--text-secondary);">DISTANZ (KM)</span>
          </div>
          <div style="text-align: center;">
            <span style="font-size: 1.3rem; font-weight: 900; display: block; ${getHmColorStyle(d.hm)} font-feature-settings: 'tnum';">${d.hm}</span>
            <span style="font-size: 0.75rem; font-weight: 800; color: var(--text-secondary);">HÖHENMETER</span>
          </div>
          <div style="text-align: center;">
            <span style="font-size: 1.3rem; font-weight: 900; display: block; font-feature-settings: 'tnum';">${d.dist > 0 ? estDur : 'Stabi'}</span>
            <span style="font-size: 0.75rem; font-weight: 800; color: var(--text-secondary);">SCHÄTZDAUER</span>
          </div>
          <div style="text-align: center;">
            <span style="font-size: 1.05rem; font-weight: 900; display: block; margin-top: 0.15rem;">${hrTarget}</span>
            <span style="font-size: 0.75rem; font-weight: 800; color: var(--text-secondary);">PULS-ZIELZONE</span>
          </div>
        </div>
      </div>
    `;
  }

  let combinedNutritionBlockHtml = '';
  if (requiresMalto) {
    const isUltraLong = totalMin > 180 || isKeyRaceOrPeakTest;
    const snackListText = isUltraLong 
      ? '6 Feigen, 100 g Marzipan-Rolle & Gummibärchen'
      : '5–6 Feigen, 30–40 g Marzipan & 4–5 Gummibärchen';

    combinedNutritionBlockHtml = `
      <div class="workout-desc-box" style="border-color: rgba(48, 209, 88, 0.35); background: rgba(48, 209, 88, 0.05); margin-bottom: 1.25rem;">
        <h4 style="color: var(--apple-green);">Verpflegung & Packliste</h4>
        <p style="font-size: 1.02rem; font-weight: 900; color: var(--apple-green); font-feature-settings: 'tnum'; margin-bottom: 0.5rem; line-height: 1.35;">
          ${maltoPlanText}
        </p>
        <ul style="padding-left: 1.1rem; font-size: 0.82rem; color: var(--text-secondary);">
          <li style="margin-bottom: 0.25rem;"><strong>Snack-Packliste:</strong> ${snackListText}</li>
          <li style="margin-bottom: 0.25rem;"><strong>Schutz:</strong> Mosquito- & Sonnenspray vorab auftragen</li>
          <li style="margin-bottom: 0.25rem;"><strong>Einnahme-Schema:</strong> Alle 15–20 Min. Malto schluckweise trinken (mit Wasser nachspülen); ab Std. 1,5 alle 25–30 Min. Snacks kauen.</li>
          ${isKeyRaceOrPeakTest ? `<li style="margin-bottom: 0.25rem; color: #FF9F0A;"><strong>Refill-Option:</strong> Wasser-Flask an Quellen / Verpflegungsstationen (VPs) nachfüllen.</li>` : ''}
        </ul>
      </div>
    `;
  }

  let modalFooterFormHtml = '';
  if (loggedRun) {
    modalFooterFormHtml = `
      <div style="display: flex; justify-content: flex-end; margin-top: 1rem; padding-top: 0.5rem;">
        <span style="font-size: 0.72rem; font-weight: 700; color: rgba(255, 69, 58, 0.75); cursor: pointer; text-decoration: underline;" onclick="deleteRunAction(${loggedRun.id})">
          Einheit zurücksetzen
        </span>
      </div>
    `;
  } else {
    const defaultDur = (d.dist === 0) ? '30 Min.' : (estDur || '45 Min.');
    const defaultDist = (d.dist === 0) ? '0' : d.dist.toFixed(1);
    const defaultHm = d.hm || '0';

    modalFooterFormHtml = `
      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(100, 210, 255, 0.3); border-radius: 14px; padding: 1.1rem; margin-top: 1.1rem;">
        <h4 style="font-size: 0.82rem; font-weight: 900; color: var(--apple-cyan); margin-bottom: 0.6rem; text-transform: uppercase; letter-spacing: 0.5px;">
          ⚡ EINHEIT (${d.date}.2026) ALS ERLEDIGT SPEICHERN
        </h4>

        <div style="margin-bottom: 0.65rem;">
          <label style="font-size: 0.65rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 0.2rem;">TRAININGSART / ERSATZ-SPORTART</label>
          <select id="mConfType" class="input-dark" style="width: 100%; box-sizing: border-box; font-size: 0.88rem; font-weight: 700; padding: 0.4rem 0.6rem; border-radius: 8px;">
            <option value="laufen" ${d.dist > 0 ? 'selected' : ''}>🏃 Laufen (Standard)</option>
            <option value="radfahren">🚴 Radfahren / Ergometer</option>
            <option value="wandern">🥾 Wandern / Trailwalk</option>
            <option value="schwimmen">🏊 Schwimmen</option>
            <option value="kraft">💪 Kraft & Stabi</option>
            <option value="ersatz" ${d.dist === 0 ? 'selected' : ''}>⚡ Ersatz-Einheit / Sonstiges</option>
          </select>
        </div>

        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.6rem; margin-bottom: 0.8rem;">
          <div>
            <label style="font-size: 0.65rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 0.2rem;">DISTANZ (KM)</label>
            <input type="number" step="0.1" id="mConfDist" value="${defaultDist}" class="input-dark" style="width: 100%; box-sizing: border-box; font-size: 0.9rem; font-weight: 700;">
          </div>
          <div>
            <label style="font-size: 0.65rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 0.2rem;">HÖHENMETER (HM)</label>
            <input type="number" id="mConfHm" value="${defaultHm}" class="input-dark" style="width: 100%; box-sizing: border-box; font-size: 0.9rem; font-weight: 700;">
          </div>
          <div>
            <label style="font-size: 0.65rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 0.2rem;">DAUER (MIN / HH:MM)</label>
            <input type="text" id="mConfDur" value="${defaultDur}" class="input-dark" style="width: 100%; box-sizing: border-box; font-size: 0.9rem; font-weight: 700;">
          </div>
          <div>
            <label style="font-size: 0.65rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 0.2rem;">PULS (BPM)</label>
            <input type="number" id="mConfHr" value="120" class="input-dark" style="width: 100%; box-sizing: border-box; font-size: 0.9rem; font-weight: 700;">
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 0.6rem;">
          <button class="btn btn-pill-gray" onclick="closeWorkoutDetailsModal()">Abbrechen</button>
          <button class="btn btn-pill-green" style="font-weight: 900; padding: 0.5rem 1.2rem; font-size: 0.85rem;" onclick="saveDirectWorkoutFromModal(${kw}, ${dayIndex})">
            ✓ Als erledigt speichern
          </button>
        </div>
      </div>
    `;
  }

  let extraLinkHtml = '';
  if (tagLower.includes('opal')) {
    extraLinkHtml = `
      <div style="margin-top: 0.75rem; padding-top: 0.65rem; border-top: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; gap: 0.5rem;">
        <a href="https://www.trailcotedopale.com/25km" target="_blank" rel="noopener noreferrer" style="color: var(--apple-cyan); font-weight: 800; font-size: 0.85rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Offizielle Trail Côte d’Opale 25 km Infos ↗
        </a>
        <a href="https://tracedetrail.fr/fr/trace/324711" target="_blank" rel="noopener noreferrer" style="color: var(--apple-cyan); font-weight: 800; font-size: 0.85rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Streckenprofil & GPS-Track (Trace de Trail) ↗
        </a>
      </div>
    `;
  }

  let opalePassageBlockHtml = '';
  if (tagLower.includes('opal')) {
    opalePassageBlockHtml = `
      <div style="background: rgba(100, 210, 255, 0.05); border: 1px solid rgba(100, 210, 255, 0.25); border-radius: 14px; padding: 1rem; margin-bottom: 1.1rem;">
        <h4 style="font-size: 0.82rem; font-weight: 900; color: var(--apple-cyan); margin-bottom: 0.6rem; text-transform: uppercase; letter-spacing: 0.5px;">
          ⏱️ RENNSEGMENTE & DURCHGANGSZEITEN (25 KM)
        </h4>
        <div style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0.8rem;">
          <div style="display: flex; justify-content: space-between; padding: 0.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
            <span><strong>km 0 – 8</strong> · Cap Blanc Nez ➔ Wissant</span>
            <span style="font-weight: 800; color: var(--apple-cyan);">53–56 Min.</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 0.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
            <span><strong>km 10</strong> · Cap Gris Nez Klippen <span style="color: #FF9F0A; font-weight: 800;">(VP 1 Wasser)</span></span>
            <span style="font-weight: 800; color: var(--apple-orange);">1:08–1:12 Std.</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 0.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
            <span><strong>km 20</strong> · Ambleteuse Dünen <span style="color: #FF9F0A; font-weight: 800;">(VP 2 Wasser)</span></span>
            <span style="font-weight: 800; color: var(--apple-orange);">2:14–2:22 Std.</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 0.25rem 0;">
            <span><strong>km 25</strong> · Ziel Wimereux</span>
            <span style="font-weight: 900; color: var(--apple-green);">2:48–2:56 Std.</span>
          </div>
        </div>

        <div style="margin-top: 0.8rem; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 0.75rem;">
          <div style="font-size: 0.72rem; font-weight: 800; color: var(--text-secondary); margin-bottom: 0.4rem; text-transform: uppercase;">
            🗺️ STRECKENMAPPE & HÖHENPROFIL
          </div>
          <a href="assets/opale_map_profile.png" target="_blank" rel="noopener noreferrer" style="display: block; border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.15);">
            <img src="assets/opale_map_profile.png" alt="Trail Côte d'Opale 25km Karte & Höhenprofil" style="width: 100%; display: block; object-fit: cover;">
          </a>
        </div>
      </div>
    `;
  }

  document.getElementById('workoutModalBody').innerHTML = `
    <div style="display: inline-block; background: ${categoryColor}22; color: ${categoryColor}; border: 1px solid ${categoryColor}44; padding: 0.35rem 0.8rem; border-radius: 8px; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.6px; margin-bottom: 1.1rem;">
      ${categoryBadge}
    </div>

    ${comparisonBlocksHtml}

    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-card); border-radius: 14px; padding: 1rem; margin-bottom: 1.1rem;">
      <h4 style="font-size: 0.8rem; font-weight: 800; color: var(--apple-cyan); margin-bottom: 0.4rem; text-transform: uppercase;">Ablauf</h4>
      <ul style="padding-left: 1.1rem; font-size: 0.82rem; color: var(--text-secondary);">
        ${tipsList.map(t => `<li style="margin-bottom: 0.25rem;">${t}</li>`).join('')}
      </ul>
      ${extraLinkHtml}
    </div>

    ${opalePassageBlockHtml}
    ${combinedNutritionBlockHtml}
    ${modalFooterFormHtml}
  `;

  document.getElementById('workoutDetailsModal').classList.remove('hidden');
}

function saveDirectWorkoutFromModal(kw, dayIndex) {
  const days = appleScheduleData[kw] || generateDefaultDays(kw);
  const d = days[dayIndex];
  if (!d) return;

  const rawDateParts = d.date.split('.');
  let dayDateStr = d.date;
  let formattedDateStr = `${d.date}.2026`;

  const distVal = parseFloat(document.getElementById('mConfDist').value) || 0;
  const rawDurInput = document.getElementById('mConfDur').value;
  const durVal = parseFlexibleDuration(rawDurInput);
  const calculatedPaceStr = distVal > 0 ? calculatePace(distVal, durVal) : '-:--';

  const typeVal = (document.getElementById('mConfType') && document.getElementById('mConfType').value) || (d.dist === 0 ? 'ersatz' : 'laufen');
  const isErsatzRun = (d.dist === 0) || (typeVal !== 'laufen');

  let tagTxt = d.tag;
  if (typeVal === 'radfahren') tagTxt = 'Radfahren';
  else if (typeVal === 'schwimmen') tagTxt = 'Schwimmen';
  else if (typeVal === 'wandern') tagTxt = 'Wandern';
  else if (typeVal === 'kraft') tagTxt = 'Kraft & Stabi';
  else if (typeVal === 'ersatz') tagTxt = 'Ersatz-Einheit';

  const newRun = {
    id: Date.now(),
    kw: kw,
    date: formattedDateStr,
    dayDate: dayDateStr,
    dist: distVal,
    distMeters: typeVal === 'schwimmen' ? Math.round(distVal * 1000) : 0,
    hm: parseInt(document.getElementById('mConfHm').value, 10) || 0,
    duration: durVal,
    hr: parseInt(document.getElementById('mConfHr').value, 10) || 0,
    pace: calculatedPaceStr,
    type: typeVal,
    isErsatz: isErsatzRun,
    tag: tagTxt,
    notes: isErsatzRun ? `${tagTxt} an Ruhetag/Ersatz (${distVal > 0 ? distVal.toFixed(1) + ' km' : durVal + ' Min'})` : `Einheit ${d.tag} absolviert`
  };

  runsData = runsData.filter(r => r.dayDate !== dayDateStr && r.date !== formattedDateStr);
  runsData.unshift(newRun);
  localStorage.setItem('drachenlauf_runs', JSON.stringify(runsData));

  closeWorkoutDetailsModal();
  renderDashboard();
}

function deleteRunAction(runId) {
  deleteRun(runId);
  closeWorkoutDetailsModal();
}

function closeWorkoutDetailsModal() {
  document.getElementById('workoutDetailsModal').classList.add('hidden');
}

function generateDefaultDays(kw) {
  const days = ['MON', 'DIE', 'MIT', 'DON', 'FRE', 'SAM', 'SON'];
  return days.map((d, i) => {
    const isFriday = d === 'FRE';
    const dist = isFriday ? 12.0 : (i % 2 === 0 ? 10.0 : 0);
    const hm = isFriday ? 200 : (i % 2 === 0 ? 100 : 0);
    return {
      day: d,
      date: `KW${kw}`,
      tag: isFriday ? 'Tempo' : (dist > 0 ? 'Grundlage' : 'Ruhetag'),
      dist: dist,
      hm: hm,
      done: false
    };
  });
}

function renderPhaseInfo(phase, kw) {
  if (!phase) return;
  const pCode = document.getElementById('phaseCodePill');
  const pName = document.getElementById('phaseName');
  const pDates = document.getElementById('phaseDates');
  const pDesc = document.getElementById('phaseDesc');

  if (pCode) pCode.textContent = phase.code;
  if (pName) pName.textContent = phase.name;
  if (pDates) pDates.textContent = phase.dates;
  if (pDesc) pDesc.textContent = phase.desc;
}

function toggleActivityCard() {
  const card = document.getElementById('activityCard');
  if (card) {
    card.classList.toggle('collapsed');
  }
}

function deleteLastRunAction() {
  if (runsData.length > 0) {
    deleteRun(runsData[0].id);
  }
}

function renderLastActivity() {
  const deleteBtn = document.getElementById('btnDeleteLastRun');
  const microElem = document.getElementById('lastRunMicroSummary');
  const tagElem = document.getElementById('lastRunTag');
  const distElem = document.getElementById('lastRunDist');
  const hmElem = document.getElementById('lastRunHm');
  const paceElem = document.getElementById('lastRunPace');
  const hrElem = document.getElementById('lastRunHr');
  const notesElem = document.getElementById('lastRunNotes');

  if (runsData.length === 0) {
    if (tagElem) tagElem.textContent = 'Kein Lauf';
    if (distElem) distElem.textContent = '0.0';
    if (hmElem) hmElem.textContent = '0';
    if (paceElem) paceElem.textContent = '-:--';
    if (hrElem) hrElem.textContent = '--';
    if (notesElem) notesElem.textContent = 'Keine Einheiten erfasst.';
    if (microElem) microElem.textContent = 'Keine Einheiten erfasst';
    if (deleteBtn) deleteBtn.classList.add('hidden');
    return;
  }
  const last = runsData[0];

  if (tagElem) tagElem.textContent = last.tag;
  if (distElem) distElem.textContent = last.dist > 0 ? (typeof last.dist === 'number' ? last.dist.toFixed(1) : last.dist) : 'Stabi';
  if (hmElem) hmElem.textContent = last.hm;
  if (paceElem) paceElem.textContent = last.dist > 0 ? last.pace : '-:--';
  if (hrElem) hrElem.textContent = last.hr > 0 ? last.hr : '--';
  if (notesElem) notesElem.textContent = `${last.date ? last.date + ': ' : ''}${last.notes}`;

  if (microElem) {
    const datePart = last.dayDate || last.date || '';
    const distPart = last.dist > 0 ? `${typeof last.dist === 'number' ? last.dist.toFixed(1) : last.dist} km` : 'Stabi';
    const hmPart = last.hm > 0 ? `${last.hm} Hm` : '';
    const pacePart = last.dist > 0 && last.pace ? `Pace ${last.pace}` : '';
    const hrPart = last.hr > 0 ? `Puls ${last.hr}` : '';

    const summaryParts = [datePart, distPart, hmPart, pacePart, hrPart].filter(Boolean);
    microElem.textContent = summaryParts.join(' · ');
  }

  if (deleteBtn) {
    deleteBtn.classList.remove('hidden');
  }
}

function openLongrunOverviewModal() {
  const tbody = document.getElementById('longrunTableBody');
  
  const progression = [
    { kw: 30, date: '26.07', loc: 'Erkrath', wkm: '30.0 km', whm: '350 Hm', dist: '12.0 km', hm: '350 Hm', focus: 'Einstieg & Vorphase', type: 'normal' },
    { kw: 31, date: '02.08', loc: 'Erkrath', wkm: '30.0 km', whm: '380 Hm', dist: '12.0 km', hm: '380 Hm', focus: 'Grundlage Erkrath', type: 'normal' },
    { kw: 32, date: '09.08', loc: 'London', wkm: '21.8 km', whm: '50 Hm', dist: '5.0 km', hm: '0 Hm', focus: 'Recovery (5 km nach Rave)', type: 'travel' },
    { kw: 33, date: '16.08', loc: 'Erkrath', wkm: '35.0 km', whm: '1.050 Hm', dist: '15.0 km', hm: '456 Hm', focus: 'Erkrath Longrun', type: 'normal' },
    { kw: 34, date: '21.08', loc: 'Erkrath / Ddorf', wkm: '36.0 km', whm: '520 Hm', dist: '12.0 km', hm: '400 Hm', focus: 'Fr 400 Hm Erkrath + So 8 km Ddorf', type: 'normal' },
    { kw: 35, date: '30.08', loc: 'Siebengebirge', wkm: '43.0 km', whm: '920 Hm', dist: '18.0 km', hm: '800 Hm', focus: 'Höhenmeter-Aufbau', type: 'normal' },
    { kw: 36, date: '06.09', loc: 'Siebengebirge', wkm: '47.0 km', whm: '1.070 Hm', dist: '20.0 km', hm: '950 Hm', focus: 'Siebengebirge Peak', type: 'normal' },
    { kw: 37, date: '13.09', loc: 'Côte d’Opal', wkm: '42.0 km', whm: '450 Hm', dist: '25.0 km', hm: '250 Hm', focus: 'Côte d’Opal Trail Test', type: 'test' },
    { kw: 38, date: '20.09', loc: 'Normandie', wkm: '30.0 km', whm: '500 Hm', dist: '12.0 km', hm: '400 Hm', focus: 'Coastal Trail Erholung', type: 'travel' },
    { kw: 39, date: '27.09', loc: 'Siebengebirge', wkm: '45.0 km', whm: '1.120 Hm', dist: '18.0 km', hm: '1.000 Hm', focus: 'Probedrachen Kernstrecke (max 4 Std.)', type: 'test' },
    { kw: 40, date: '04.10', loc: 'Zoutelande', wkm: '41.0 km', whm: '520 Hm', dist: '17.0 km', hm: '400 Hm', focus: 'Dünen-Wiederholungen (Zoutelande)', type: 'travel' },
    { kw: 41, date: '11.10', loc: 'Erkrath', wkm: '35.0 km', whm: '480 Hm', dist: '12.0 km', hm: '400 Hm', focus: 'Tapering Longrun', type: 'normal' },
    { kw: 42, date: '18.10', loc: 'Erkrath', wkm: '27.0 km', whm: '300 Hm', dist: '10.0 km', hm: '300 Hm', focus: 'Tapering Sharpening', type: 'normal' },
    { kw: 43, date: '25.10', loc: 'Königswinter', wkm: '39.0 km', whm: '1.250 Hm', dist: '26.0 km', hm: '1.250 Hm', focus: 'Drachenlauf Renntag', type: 'race' }
  ];

  tbody.innerHTML = progression.map(p => {
    const isActive = p.kw === selectedKw;
    let rowClass = isActive ? 'active-kw-row' : '';
    if (p.type === 'test') rowClass += ' test-row';
    if (p.type === 'race') rowClass += ' race-row';

    let focusContent = p.focus;
    if (p.type === 'test') focusContent = `<span class="tbl-pill pill-cyan">TEST</span> ${p.focus}`;
    if (p.type === 'race') focusContent = `<span class="tbl-pill pill-orange">GOAL</span> <strong>${p.focus}</strong>`;

    const hmNum = parseInt(p.hm.replace(/[^\d]/g, ''), 10) || 0;
    const hmStyle = getHmColorStyle(hmNum);

    return `
      <tr class="${rowClass} clickable-row" onclick="selectKwAndCloseModal(${p.kw})" title="Klick: Zu KW ${p.kw} im Dashboard springen" style="cursor: pointer;">
        <td><strong class="${isActive ? 'text-green' : ''}">KW ${p.kw}</strong></td>
        <td>${p.date} <span class="loc-sub">(${p.loc})</span></td>
        <td class="badge-target-wkm">${p.wkm} <span style="color: var(--apple-orange); font-size: 0.72rem; font-weight: 700; margin-left: 2px;">· ${p.whm}</span></td>
        <td class="badge-target">${p.dist}</td>
        <td style="${hmStyle} font-feature-settings: 'tnum';">${p.hm}</td>
        <td>${focusContent}</td>
      </tr>
    `;
  }).join('');

  document.getElementById('longrunOverviewModal').classList.remove('hidden');
}

function selectKwAndCloseModal(kw) {
  selectedKw = kw;
  closeLongrunOverviewModal();
  renderDashboard();
}

function closeLongrunOverviewModal() {
  document.getElementById('longrunOverviewModal').classList.add('hidden');
}

function getKwFromDateStr(rawDate) {
  if (!rawDate) return selectedKw || 31;
  let day = 0, month = 0, year = 2026;
  if (rawDate.includes('-')) {
    const parts = rawDate.split('-');
    if (parts.length === 3) {
      year = parseInt(parts[0], 10);
      month = parseInt(parts[1], 10) - 1;
      day = parseInt(parts[2], 10);
    }
  } else if (rawDate.includes('.')) {
    const parts = rawDate.split('.');
    if (parts.length >= 2) {
      day = parseInt(parts[0], 10);
      month = parseInt(parts[1], 10) - 1;
      if (parts.length >= 3) year = parseInt(parts[2], 10);
    }
  }
  if (day > 0 && month >= 0) {
    const d = new Date(year, month, day);
    const kw = getISOWeekNumber(d);
    if (kw >= 30 && kw <= 43) return kw;
  }
  return selectedKw || 31;
}

function openTextModal() {
  document.getElementById('textModal').classList.remove('hidden');
  const today = '2026-07-31';
  document.getElementById('confDate').value = today;
  document.getElementById('confDist').value = '';
  document.getElementById('confHm').value = '';
  document.getElementById('confDuration').value = '';
  document.getElementById('confHr').value = '';
  document.getElementById('rawTextInput').value = '';
}

function closeTextModal() {
  document.getElementById('textModal').classList.add('hidden');
}

function saveParsedRun() {
  const rawDate = document.getElementById('confDate').value;
  const targetKw = getKwFromDateStr(rawDate);
  const typeVal = (document.getElementById('confType') && document.getElementById('confType').value) || 'laufen';

  let formattedDateStr = 'Heute';
  let dayDateStr = '';

  if (rawDate) {
    if (rawDate.includes('-')) {
      const parts = rawDate.split('-');
      if (parts.length === 3) {
        formattedDateStr = `${parts[2]}.${parts[1]}.${parts[0]}`;
        dayDateStr = `${parts[2]}.${parts[1]}`;
      }
    } else if (rawDate.includes('.')) {
      const parts = rawDate.split('.');
      if (parts.length >= 2) {
        const dd = parts[0].padStart(2, '0');
        const mm = parts[1].padStart(2, '0');
        const yyyy = parts[2] || '2026';
        formattedDateStr = `${dd}.${mm}.${yyyy}`;
        dayDateStr = `${dd}.${mm}`;
      }
    }
  }

  const distVal = parseFloat(document.getElementById('confDist').value) || 0;
  const rawDurInput = document.getElementById('confDuration').value;
  const durVal = parseFlexibleDuration(rawDurInput);
  const calculatedPaceStr = distVal > 0 ? calculatePace(distVal, durVal) : '-:--';
  const isErsatzRun = (typeVal !== 'laufen');

  let tagTxt = 'Manuell';
  if (typeVal === 'schwimmen') tagTxt = 'Schwimmbad';
  else if (typeVal === 'radfahren') tagTxt = 'Radfahren';
  else if (typeVal === 'kraft') tagTxt = 'Kraft / Stabi';
  else if (typeVal === 'ersatz') tagTxt = 'Ersatz-Training';

  const newRun = {
    id: Date.now(),
    kw: targetKw,
    date: formattedDateStr,
    dayDate: dayDateStr,
    dist: distVal,
    distMeters: typeVal === 'schwimmen' ? Math.round(distVal * 1000) : 0,
    hm: parseInt(document.getElementById('confHm').value, 10) || 0,
    duration: durVal,
    hr: parseInt(document.getElementById('confHr').value, 10) || 0,
    pace: calculatedPaceStr,
    type: typeVal,
    isErsatz: isErsatzRun,
    tag: tagTxt,
    notes: document.getElementById('rawTextInput').value || `Aktivität (${tagTxt})`
  };

  selectedKw = targetKw;
  const kwSel = document.getElementById('kwSelect');
  if (kwSel) kwSel.value = targetKw;

  runsData = runsData.filter(r => r.dayDate !== dayDateStr && r.date !== formattedDateStr);
  runsData.unshift(newRun);
  localStorage.setItem('drachenlauf_runs', JSON.stringify(runsData));

  closeTextModal();
  renderDashboard();
}

function openScreenshotModal() {
  document.getElementById('ocrModal').classList.remove('hidden');
  const dropzone = document.getElementById('ocrDropzone');
  const previewBox = document.getElementById('ocrPreviewBox');
  if (dropzone) {
    dropzone.classList.remove('hidden');
    dropzone.style.display = 'flex';
  }
  if (previewBox) {
    previewBox.classList.add('hidden');
    previewBox.style.display = 'none';
  }
  const today = '2026-08-01';
  if (document.getElementById('ocrDate')) {
    document.getElementById('ocrDate').value = today;
  }
}

function closeScreenshotModal() {
  document.getElementById('ocrModal').classList.add('hidden');
}

async function parseGarminScreenshotWithOCR(file) {
  const statusTitle = document.querySelector('.ocr-status-title');
  if (statusTitle) {
    statusTitle.textContent = `Garmin Screenshot wird analysiert... (OCR Scan)`;
  }

  try {
    let text = '';
    if (typeof Tesseract !== 'undefined') {
      const worker = await Tesseract.createWorker('deu+eng');
      const ret = await worker.recognize(file);
      text = ret.data.text;
      await worker.terminate();
    }
    processExtractedGarminText(text, file.name);
  } catch (err) {
    console.error('OCR Exception:', err);
    processExtractedGarminText('', file.name);
  }
}

function processExtractedGarminText(text, filename = '') {
  const statusTitle = document.querySelector('.ocr-status-title');
  const dateEl = document.getElementById('ocrDate');
  const typeEl = document.getElementById('ocrType');
  const distEl = document.getElementById('ocrDist');
  const hmEl = document.getElementById('ocrHm');
  const timeEl = document.getElementById('ocrTime');
  const hrEl = document.getElementById('ocrHr');

  const lowerText = (text + ' ' + filename).toLowerCase();

  // 1. DISTANZ (z.B. "12,07 km", "12.07 km", "1 2,07 km", "l2,07 km")
  let rawDistStr = '';
  const distMatch = lowerText.match(/([l|!i\d]*\s*\d+[,.]\d+)\s*km/) || lowerText.match(/(\d+[,.]\d+)\s*(?:km|distanz)/);
  if (distMatch) {
    rawDistStr = distMatch[1].replace(/[l|!i]/gi, '1').replace(/\s+/g, '').replace(',', '.');
  }
  if (distEl && rawDistStr) {
    distEl.value = rawDistStr;
  }

  // 2. HÖHENMETER (z.B. "391 m", "anstieg gesamt 391")
  const hmMatch = lowerText.match(/(\d+)\s*m\s*(?:anstieg|höhenmeter)?/) || lowerText.match(/anstieg\s*(?:gesamt)?\s*(\d+)/);
  if (hmMatch && hmEl) {
    hmEl.value = hmMatch[1];
  }

  // 3. PULS (z.B. "117 bpm", "117bpm")
  const hrMatch = lowerText.match(/(\d{2,3})\s*bpm/);
  if (hrMatch && hrEl) {
    hrEl.value = hrMatch[1];
  }

  // 4. ZEIT (z.B. "1:57:44", "01:57:44")
  const timeMatch = lowerText.match(/(\d{1,2}:\d{2}:\d{2})/);
  if (timeMatch && timeEl) {
    let t = timeMatch[1];
    if (t.length === 7) t = '0' + t;
    timeEl.value = t;
  }

  // 5. DATUM (z.B. "2. Aug", "02.08")
  const monthMap = { 'jan': '01', 'feb': '02', 'mär': '03', 'mar': '03', 'apr': '04', 'mai': '05', 'jun': '06', 'jul': '07', 'aug': '08', 'sep': '09', 'okt': '10', 'oct': '10', 'nov': '11', 'dez': '12' };
  const dateMatch = lowerText.match(/(\d{1,2})\.\s*([a-zäöü]+)/i);
  if (dateMatch && dateEl) {
    const day = dateMatch[1].padStart(2, '0');
    const monthKey = dateMatch[2].substring(0, 3);
    const month = monthMap[monthKey] || '08';
    dateEl.value = `2026-${month}-${day}`;
  } else if (dateEl) {
    dateEl.value = '2026-08-02';
  }

  // 6. TRAININGSART
  if (typeEl) {
    if (lowerText.includes('trail') || lowerText.includes('lauf') || lowerText.includes('run')) {
      typeEl.value = 'laufen';
    } else if (lowerText.includes('schwimm') || lowerText.includes('swim')) {
      typeEl.value = 'schwimmen';
    } else if (lowerText.includes('rad') || lowerText.includes('bike')) {
      typeEl.value = 'radfahren';
    } else if (lowerText.includes('kraft') || lowerText.includes('stabi')) {
      typeEl.value = 'kraft';
    }
  }

  if (statusTitle) {
    statusTitle.textContent = `Garmin Screenshot erkannt: ${filename || 'Bild'}`;
  }
}

function handleOcrUpload(file) {
  const dropzone = document.getElementById('ocrDropzone');
  const box = document.getElementById('ocrPreviewBox');
  
  if (dropzone) {
    dropzone.classList.add('hidden');
    dropzone.style.display = 'none';
  }
  if (box) {
    box.classList.remove('hidden');
    box.style.display = 'block';
  }

  if (file) {
    parseGarminScreenshotWithOCR(file);
  } else {
    processExtractedGarminText('', '');
  }
}

function simulateOcrUpload() {
  const fileInput = document.getElementById('fileOcrInput');
  const file = fileInput && fileInput.files && fileInput.files[0] ? fileInput.files[0] : null;
  handleOcrUpload(file);
}

function saveOcrRun() {
  const rawDate = document.getElementById('ocrDate').value;
  const targetKw = getKwFromDateStr(rawDate);
  const typeVal = (document.getElementById('ocrType') && document.getElementById('ocrType').value) || 'laufen';

  let formattedDateStr = 'Heute';
  let dayDateStr = '';
  if (rawDate) {
    const parts = rawDate.split('-');
    if (parts.length === 3) {
      formattedDateStr = `${parts[2]}.${parts[1]}.${parts[0]}`;
      dayDateStr = `${parts[2]}.${parts[1]}`;
    }
  }

  const distVal = parseFloat(document.getElementById('ocrDist').value) || 0;
  const rawDurInput = document.getElementById('ocrTime').value;
  const durVal = parseFlexibleDuration(rawDurInput);
  const calculatedPaceStr = distVal > 0 ? calculatePace(distVal, durVal) : '-:--';
  const isErsatzRun = (typeVal !== 'laufen');

  let tagTxt = 'Garmin OCR';
  if (typeVal === 'schwimmen') tagTxt = 'Schwimmbad';
  else if (typeVal === 'radfahren') tagTxt = 'Radfahren';
  else if (typeVal === 'kraft') tagTxt = 'Kraft / Stabi';
  else if (typeVal === 'ersatz') tagTxt = 'Ersatz-Training';

  const newRun = {
    id: Date.now(),
    kw: targetKw,
    date: formattedDateStr,
    dayDate: dayDateStr,
    dist: distVal,
    distMeters: typeVal === 'schwimmen' ? Math.round(distVal * 1000) : 0,
    hm: parseInt(document.getElementById('ocrHm').value, 10) || 0,
    duration: durVal,
    hr: parseInt(document.getElementById('ocrHr').value, 10) || 0,
    pace: calculatedPaceStr,
    type: typeVal,
    isErsatz: isErsatzRun,
    tag: tagTxt,
    notes: `Garmin OCR Import (${tagTxt})`
  };

  selectedKw = targetKw;
  const kwSel = document.getElementById('kwSelect');
  if (kwSel) kwSel.value = targetKw;

  runsData = runsData.filter(r => r.dayDate !== dayDateStr && r.date !== formattedDateStr);
  runsData.unshift(newRun);
  localStorage.setItem('drachenlauf_runs', JSON.stringify(runsData));

  closeScreenshotModal();
  renderDashboard();
}

/* ==========================================================================
   AUTH GATE FUNCTIONS (PASSWORD PROTECTION)
   ========================================================================== */
const SITE_AUTH_PASSWORD = 'okok';

function checkSiteAuth() {
  const isAuth = sessionStorage.getItem('drachenlauf_authenticated');
  const modal = document.getElementById('authGateModal');
  if (isAuth === 'true') {
    if (modal) modal.classList.add('unlocked');
  } else {
    if (modal) modal.classList.remove('unlocked');
  }
}

function verifyAuthPassword(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('authPasswordInput');
  const err = document.getElementById('authGateError');
  if (!input) return;

  if (input.value.trim() === SITE_AUTH_PASSWORD) {
    sessionStorage.setItem('drachenlauf_authenticated', 'true');
    const modal = document.getElementById('authGateModal');
    if (modal) modal.classList.add('unlocked');
    if (err) err.classList.add('hidden');
  } else {
    if (err) err.classList.remove('hidden');
    input.value = '';
    input.focus();
  }
}

document.addEventListener('DOMContentLoaded', checkSiteAuth);
checkSiteAuth();

