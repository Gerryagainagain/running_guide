// Gerrys Personal Trail Coach: Auf zum Drachen! (App Logic)

let selectedKw = 31;

// Phase Master Data mit exakten Reisedaten & sportwissenschaftlicher Tonalität
const phaseData = {
  1: {
    code: 'PHASE 1',
    name: 'Grundlagenerhalt & Reisen',
    dates: 'KW 30–33 (20.07 – 16.08)',
    desc: 'Erhalt der aeroben Basis. Longruns bis 450 Hm in Erkrath, darüber im Siebengebirge. In London (KW 32) max. 1 Std. Fenster. Malto bei Longruns (> 15 km / Siebengebirge): 500ml Softflasks, Marzipan & Feigen. Schutz: Mosquito- & Sonnenspray.',
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
  33: { phase: 1, travel: 'KW 33 · Jurassic Coast (Rückreise Mi) & Siebengebirge (600 Hm)' },
  34: { phase: 2, travel: 'KW 34 · Siebengebirge (650 Hm)' },
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
  // KW 31
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

// Explicitly remove 01.08 run if stored from testing
runsData = runsData.filter(r => r.date !== '01.08.2026' && r.dayDate !== '01.08' && r.date !== '01.08');
try {
  localStorage.setItem('drachenlauf_runs', JSON.stringify(runsData));
} catch (e) {}

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

function getMaltoNutritionPlan(durationMin) {
  if (!durationMin || durationMin <= 45) {
    return '1 Softflask Wasser (ohne Carbs)';
  }
  const hours = durationMin / 60.0;
  let flasks = Math.max(1, Math.round(hours));
  const maltoGrams = flasks * 60;
  const flaskStr = flasks === 1 ? '1 Softflask' : `${flasks} Softflasks`;
  return `${flaskStr} · ${maltoGrams} g Maltodextrin`;
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
  if (tagLower.includes('probedrachen') && distKm >= 20) return 257;
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
  let totalMinutes = Math.round(dist * 6.5 + (hm / 100) * 8);
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
    { day: 'SAM', date: '08.08', tag: 'Ruhetag London', dist: 0, hm: 0, done: false },
    { day: 'SON', date: '09.08', tag: 'Fahrt Jurassic Coast (Max 1h)', dist: 8.0, hm: 50, done: false }
  ],
  33: [
    { day: 'MON', date: '10.08', tag: 'Coastal Trail', dist: 8.0, hm: 400, done: false },
    { day: 'DIE', date: '11.08', tag: 'Cliff Trail Jurassic', dist: 8.0, hm: 200, done: false },
    { day: 'MIT', date: '12.08', tag: 'Rückreise Mittag', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '13.08', tag: 'Locker Rhein', dist: 7.0, hm: 0, done: false },
    { day: 'FRE', date: '14.08', tag: 'Stabi & Kraft', dist: 0, hm: 0, done: false },
    { day: 'SAM', date: '15.08', tag: 'Locker Zuhause', dist: 6.0, hm: 0, done: false },
    { day: 'SON', date: '16.08', tag: 'Longrun Siebengebirge', dist: 16.0, hm: 600, done: false }
  ],
  34: [
    { day: 'MON', date: '17.08', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DIE', date: '18.08', tag: 'Rampen Ddorf', dist: 9.0, hm: 120, done: false },
    { day: 'MIT', date: '19.08', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '20.08', tag: 'Locker Rhein', dist: 8.0, hm: 0, done: false },
    { day: 'FRE', date: '21.08', tag: 'Krafttraining Studio', dist: 0, hm: 0, done: false },
    { day: 'SAM', date: '22.08', tag: 'Amsterdam Trip', dist: 0, hm: 0, done: false },
    { day: 'SON', date: '23.08', tag: 'Longrun Siebengebirge', dist: 16.0, hm: 650, done: false }
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
    { day: 'SON', date: '20.09', tag: 'Klippenpfad Erholung', dist: 12.0, hm: 400, done: false }
  ],
  39: [
    { day: 'MON', date: '21.09', tag: 'Rückfahrt Mo Nachmittag', dist: 0, hm: 0, done: false },
    { day: 'DIE', date: '22.09', tag: 'Rampen Ddorf', dist: 10.0, hm: 120, done: false },
    { day: 'MIT', date: '23.09', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '24.09', tag: 'Locker Rhein', dist: 10.0, hm: 0, done: false },
    { day: 'FRE', date: '25.09', tag: 'Krafttraining Studio', dist: 0, hm: 0, done: false },
    { day: 'SAM', date: '26.09', tag: 'Beine lockern', dist: 7.0, hm: 0, done: false },
    { day: 'SON', date: '27.09', tag: 'PROBEDRACHEN (HF 120-140)', dist: 24.0, hm: 1250, done: false }
  ],
  40: [
    { day: 'MON', date: '28.09', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DIE', date: '29.09', tag: 'Rampen Ddorf', dist: 11.0, hm: 180, done: false },
    { day: 'MIT', date: '30.09', tag: 'Regeneration', dist: 0, hm: 0, done: false },
    { day: 'DON', date: '01.10', tag: 'Locker Rhein', dist: 8.0, hm: 0, done: false },
    { day: 'FRE', date: '02.10', tag: 'Abfahrt Fr Morgen (Zoutelande)', dist: 0, hm: 0, done: false },
    { day: 'SAM', date: '03.10', tag: 'Strand / Kustmarathon', dist: 5.0, hm: 0, done: false },
    { day: 'SON', date: '04.10', tag: 'Zoutelande Dünen (Rückfahrt So Abend)', dist: 15.0, hm: 350, done: false }
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
  renderSpaceXTimeline(selectedKw);
  renderCoachWidget(selectedKw);
  renderScheduleRow(selectedKw);
  renderPhaseInfo(phase, selectedKw);
  renderLastActivity();
}

function renderSpaceXTimeline(kw) {
  const line = document.getElementById('spacexProgressLine');
  const nodes = document.querySelectorAll('.spacex-node');
  if (!line || !nodes || nodes.length === 0) return;

  let pct = 17;
  let activeIdx = 1;

  if (kw <= 30) { pct = 0; activeIdx = 0; }
  else if (kw === 31) { pct = 17; activeIdx = 1; }
  else if (kw === 32) { pct = 34; activeIdx = 2; }
  else if (kw >= 33 && kw <= 36) { pct = 51; activeIdx = 3; }
  else if (kw >= 37 && kw <= 39) { pct = 68; activeIdx = 4; }
  else if (kw >= 40 && kw <= 42) { pct = 84; activeIdx = 5; }
  else if (kw >= 43) { pct = 100; activeIdx = 6; }

  line.style.width = `${pct}%`;

  nodes.forEach((n, idx) => {
    n.classList.remove('done-node', 'active-node');
    if (idx < activeIdx) {
      n.classList.add('done-node');
    } else if (idx === activeIdx) {
      n.classList.add('active-node');
    }
  });
}

function renderCoachWidget(kw) {
  const coachWeekElem = document.getElementById('coachInsightWeek');
  const coachTextElem = document.getElementById('coachInsightText');
  if (!coachTextElem) return;

  if (coachWeekElem) {
    coachWeekElem.textContent = `KW ${kw}`;
  }

  const insights = {
    30: "Alles absolviert.<br>34 km und 350 Hm geschafft.<br>Gute Erholung für die nächste Woche.",
    31: "Alles im Plan.<br>Heute 25–30 Minuten Kraft.<br>Am Sonntag wartet dein Longrun mit 380 Höhenmetern.",
    32: "Reisewoche London.<br>8 km Flachpark im GA1-Modus halten (max. 60 Min. Fenster).",
    33: "Erster Ausflug ins Siebengebirge & Jurassic Coast.<br>Bergan-Pacing kontrolliert halten.",
    34: "Einstieg in Phase 2.<br>16 km mit 650 Hm im Siebengebirge anvisieren.",
    35: "Peak Phase 2.<br>18 km und 800 Hm – Malto & Softflasks unter Realbedingungen testen.",
    36: "Höchste Höhenmeter-Belastung.<br>20 km mit 950 Hm im Siebengebirge.",
    37: "Testwettkampf 1: Côte d’Opal Trail (25 km · 250 Hm).<br>Renntempo & Verpflegung testen.",
    38: "Erholung in der Normandie.<br>Klippenläufe im leichten GA1-Bereich genießen.",
    39: "PROBEDRACHEN TESTRENNEN!<br>24 km · 1.250 Hm auf der Originalstrecke.",
    40: "Zoutelande Dünenwoche.<br>Lockerer Dünenlauf im GA1-Modus.",
    41: "Tapering Phase 4.<br>Umfang reduzieren, Beine frisch halten (12 km · 400 Hm).",
    42: "Finale Tapering-Woche.<br>Nur noch 10 km mit 300 Hm.<br>Beine aufladen.",
    43: "FINALE KW 43 – KÖNIGSWINTER DRACHENLAUF!<br>26 km · 1.250 Hm.<br>Auf zum Drachen!"
  };

  const rawText = insights[kw] || "Alles im Plan.<br>Pacing diszipliniert halten!";
  coachTextElem.innerHTML = rawText;
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

  const targetWkm = phase.targetWkm;
  const targetWhm = phase.targetWhm;

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

  document.getElementById('heroTitle').textContent = `${sundayObj.tag} (${sundayObj.dist.toFixed(1)} km · ${sundayObj.hm} Hm)`;
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
  const isCurrentActiveKw = (kw === 31); // 31.07.2026 is FRE in KW 31

  container.innerHTML = days.map((d, i) => {
    const loggedRun = runsData.find(r => r.dayDate === d.date || r.date === d.date || r.date === `${d.date}.2026`);
    const isDone = d.done || !!loggedRun;
    const tagLower = (d.tag || '').toLowerCase();

    let specialCardClass = '';
    let pillExtraClass = '';
    const isMajorRaceOrTestDay = d.dist >= 15 || d.day === 'SON';
    const isToday = isCurrentActiveKw && d.day === 'FRE';
    const isKtDay = (!d.dist || d.dist === 0) && (tagLower.includes('stabi') || tagLower.includes('kt') || tagLower.includes('kraft'));
    const isRestDay = (!d.dist || d.dist === 0) && !isKtDay;

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
    } else if (isRestDay) {
      displayTagTxt = 'Chill';
      pillExtraClass = 'pill-rest';
    }

    let cardExtraClasses = specialCardClass;
    if (isDone) {
      cardExtraClasses += ' card-completed';
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
        <div class="day-header">
          <span class="day-name">${isToday ? 'HEUTE' : d.day}</span>
          ${headerRightHtml}
        </div>
        <div class="day-hero-box">
          ${heroHtml}
          <div class="hero-sub-micro">
            ${subMicroHtml}
          </div>
        </div>
        <div class="day-footer-row">
          <div class="day-pill-badge ${pillExtraClass}">${displayTagTxt}</div>
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

  const estDur = formatWorkoutDuration(d.dist, d.hm, d.tag);
  const totalMin = getEstimatedDurationMinutes(d.dist, d.hm, d.tag);
  const maltoPlanText = getMaltoNutritionPlan(totalMin);

  const hrTarget = getHrTargetForWorkout(d.tag) || 'HF < 130 bpm';
  const tagLower = (d.tag || '').toLowerCase();
  
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

  if (tagLower.includes('drachenlauf') && !tagLower.includes('probedrachen')) {
    categoryBadge = 'HAUPTWETTKAMPF 🎯';
    categoryColor = '#FF9F0A';
  } else if (tagLower.includes('probedrachen') || tagLower.includes('opal')) {
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

  if (tagLower.includes('rampen')) {
    tipsList = [
      '1,5 km Einlaufen (flach)',
      '6–8× Rampen bergauf (HF 140–165 bpm)',
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
  } else if (d.dist === 0 && (tagLower.includes('ruhetag') || tagLower.includes('erholung'))) {
    tipsList = [
      'Erholung & Regeneration',
      'Leichtes Dehnen & ausreichend Schlaf'
    ];
  } else {
    tipsList = [
      'Entspanntes Traben (HF < 130 bpm)',
      'Kein Tempodruck'
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
    combinedNutritionBlockHtml = `
      <div class="workout-desc-box" style="border-color: rgba(48, 209, 88, 0.35); background: rgba(48, 209, 88, 0.05); margin-bottom: 1.25rem;">
        <h4 style="color: var(--apple-green);">Verpflegung & Packliste</h4>
        <p style="font-size: 1.15rem; font-weight: 900; color: var(--apple-green); font-feature-settings: 'tnum'; margin-bottom: 0.5rem;">
          ${maltoPlanText}
          ${isHeatPossible ? `<span style="font-size: 0.85rem; font-weight: 800; color: #FF9F0A; display: block; margin-top: 0.25rem;">+ 1 Softflask Wasser (500 ml) bei Hitze (> 20°C)</span>` : ''}
        </p>
        <ul>
          <li><strong>Snacks:</strong> Marzipan & Feigen</li>
          <li><strong>Schutz:</strong> Mosquito- & Sonnenspray vorab auftragen</li>
          ${isHeatPossible ? `<li><strong>Hitze-Option:</strong> Bei warmem Wetter 1 zusätzliche Wasser-Flask (500 ml) zum Kühlen & Mundspülen mitnehmen.</li>` : ''}
          <li><strong>Einnahme:</strong> Alle 15–20 Min. schluckweise trinken.</li>
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
    </div>

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

  const newRun = {
    id: Date.now(),
    kw: kw,
    date: formattedDateStr,
    dayDate: dayDateStr,
    dist: distVal,
    hm: parseInt(document.getElementById('mConfHm').value, 10) || 0,
    duration: durVal,
    hr: parseInt(document.getElementById('mConfHr').value, 10) || 0,
    pace: calculatedPaceStr,
    tag: distVal === 0 ? 'Kraft' : d.tag,
    notes: distVal === 0 ? 'Kraft & Rumpftraining' : `Einheit ${d.tag} absolviert`
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
  document.getElementById('phaseCodePill').textContent = phase.code;
  document.getElementById('phaseName').textContent = phase.name;
  document.getElementById('phaseDates').textContent = phase.dates;
  document.getElementById('phaseDesc').textContent = phase.desc;
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
    { kw: 30, date: '26.07', loc: 'Erkrath', wkm: '30.0 km', dist: '12.0 km', hm: '350 Hm', focus: 'Einstieg & Vorphase', type: 'normal' },
    { kw: 31, date: '02.08', loc: 'Erkrath', wkm: '30.0 km', dist: '12.0 km', hm: '380 Hm', focus: 'Grundlage Erkrath', type: 'normal' },
    { kw: 32, date: '09.08', loc: 'London', wkm: '24.8 km', dist: '8.0 km', hm: '50 Hm', focus: 'Flachpark (Max 1h)', type: 'travel' },
    { kw: 33, date: '16.08', loc: 'Siebengebirge', wkm: '35.0 km', dist: '16.0 km', hm: '600 Hm', focus: 'Siebengebirge Einstieg', type: 'normal' },
    { kw: 34, date: '23.08', loc: 'Siebengebirge', wkm: '33.0 km', dist: '16.0 km', hm: '650 Hm', focus: 'Siebengebirge Aufbaudistanz', type: 'normal' },
    { kw: 35, date: '30.08', loc: 'Siebengebirge', wkm: '43.0 km', dist: '18.0 km', hm: '800 Hm', focus: 'Höhenmeter-Aufbau', type: 'normal' },
    { kw: 36, date: '06.09', loc: 'Siebengebirge', wkm: '47.0 km', dist: '20.0 km', hm: '950 Hm', focus: 'Peak Phase 2', type: 'normal' },
    { kw: 37, date: '13.09', loc: 'Côte d’Opal', wkm: '42.0 km', dist: '25.0 km', hm: '250 Hm', focus: 'Testwettkampf 1', type: 'test' },
    { kw: 38, date: '20.09', loc: 'Normandie', wkm: '30.0 km', dist: '12.0 km', hm: '400 Hm', focus: 'Klippenpfad Erholung', type: 'travel' },
    { kw: 39, date: '27.09', loc: 'Siebengebirge', wkm: '51.0 km', dist: '24.0 km', hm: '1.250 Hm', focus: 'HAUPT-PROBEDRACHEN (HF 120–140)', type: 'test' },
    { kw: 40, date: '04.10', loc: 'Zoutelande', wkm: '39.0 km', dist: '15.0 km', hm: '350 Hm', focus: 'Dünen-Wiederholungen', type: 'travel' },
    { kw: 41, date: '11.10', loc: 'Erkrath', wkm: '35.0 km', dist: '12.0 km', hm: '400 Hm', focus: 'Tapering Longrun', type: 'normal' },
    { kw: 42, date: '18.10', loc: 'Erkrath', wkm: '27.0 km', dist: '10.0 km', hm: '300 Hm', focus: 'Tapering Sharpening', type: 'normal' },
    { kw: 43, date: '25.10', loc: 'Königswinter', wkm: '39.0 km', dist: '26.0 km', hm: '1.250 Hm', focus: 'DRACHENLAUF', type: 'race' }
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
      <tr class="${rowClass}">
        <td><strong class="${isActive ? 'text-green' : ''}">KW ${p.kw}</strong></td>
        <td>${p.date} <span class="loc-sub">(${p.loc})</span></td>
        <td class="badge-target-wkm">${p.wkm}</td>
        <td class="badge-target">${p.dist}</td>
        <td style="${hmStyle} font-feature-settings: 'tnum';">${p.hm}</td>
        <td>${focusContent}</td>
      </tr>
    `;
  }).join('');

  document.getElementById('longrunOverviewModal').classList.remove('hidden');
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

function simulateOcrUpload() {
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

  const dateEl = document.getElementById('ocrDate');
  const typeEl = document.getElementById('ocrType');
  const distEl = document.getElementById('ocrDist');
  const hmEl = document.getElementById('ocrHm');
  const timeEl = document.getElementById('ocrTime');
  const hrEl = document.getElementById('ocrHr');

  if (dateEl) dateEl.value = '2026-08-01';
  if (typeEl) typeEl.value = 'schwimmen';
  if (distEl) distEl.value = '1.15';
  if (hmEl) hmEl.value = '0';
  if (timeEl) timeEl.value = '00:25:21';
  if (hrEl) hrEl.value = '108';
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
