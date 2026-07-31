// Gerrys Trailcoach: Auf zum Drachen! (App Logic)

let selectedKw = 31;

// Phase Master Data mit exakten Reisedaten & sportwissenschaftlicher Tonalität
const phaseData = {
  1: {
    code: 'PHASE 1',
    name: 'Grundlagenerhalt & Reisen',
    dates: 'KW 30–33 (20.07 – 16.08)',
    desc: 'Erhalt der aeroben Basis. Longruns bis 450 Hm in Erkrath, darüber im Siebengebirge. In London (KW 32) max. 1 Std. Fenster. Malto bei Longruns (> 15 km / Siebengebirge): 500ml Softflasks, Marzipan & Feigen. Schutz: Mosquito- & Sonnenspray.',
    motto: '„Fundament gießen. Jeder Flachkilometer baut die aerobe Reserve für die Anstiege.“',
    emotionTag: 'PHASE 1 // BASISAUSDAUER & FUNDAMENT',
    targetWkm: 30,
    targetWhm: 450,
    targetLongDist: 16,
    targetLongHm: 600,
    cpName: 'Côte d’Opal Trail (Test 1)',
    cpMeta: '13. September // 25 km // 250 Hm'
  },
  2: {
    code: 'PHASE 2',
    name: 'Grundlagenausdauer & Höhenmeteraufbau',
    dates: 'KW 34–36 (17.08 – 06.09)',
    desc: 'Systematischer Aufbau im Siebengebirge (> 450 Hm). Steigerung des Longruns von 16 km / 650 Hm auf 20 km / 950 Hm. 500ml Softflasks mit Malto + Marzipan/Feigen bei Longruns.',
    motto: '„Höhenmeter fressen. Das Siebengebirge schärft die Beine und den Geist.“',
    emotionTag: 'PHASE 2 // HÖHENMETERAUFBAU & MOUNTAIN LEGS',
    targetWkm: 45,
    targetWhm: 950,
    targetLongDist: 20,
    targetLongHm: 950,
    cpName: 'Côte d’Opal Trail (Test 1)',
    cpMeta: '13. September // 25 km // 250 Hm'
  },
  3: {
    code: 'PHASE 3',
    name: 'Spezifische Testläufe & Peak-Belastung',
    dates: 'KW 37–39 (07.09 – 27.09)',
    desc: 'Zwei Haupttests: Côte d’Opal Trail (25 km / 250 Hm am 13.09) und HAUPT-PROBEDRACHENLAUF (24 km / 1.250 Hm am 27.09 FIX im Siebengebirge). Malto-Softflasks + Marzipan/Feigen.',
    motto: '„Grenzgang & Wettkampfhärte. Côte d’Opal & Probedrachen rufen.“',
    emotionTag: 'PHASE 3 // RENN-SIMULATION & PEAK HARDNESS',
    targetWkm: 51,
    targetWhm: 1250,
    targetLongDist: 24,
    targetLongHm: 1250,
    cpName: 'Probedrachenlauf (HF-Test FIX: 27.09.)',
    cpMeta: '27. September // 24 km // 1.250 Hm (HF 120–140 bpm)'
  },
  4: {
    code: 'PHASE 4',
    name: 'Tapering & Wettkampfvorbereitung',
    dates: 'KW 40–42 (28.09 – 18.10)',
    desc: 'Gezieltes Tapering. Zoutelande Dünen (350 Hm), anschließend kontrolliertes Tapering in Erkrath (400 Hm & 300 Hm <= 450 Hm).',
    motto: '„Ruhe & Schärfung. Muskelglykogen aufladen und die Beine frisch halten.“',
    emotionTag: 'PHASE 4 // TAPERING & MENTAL SHARPENING',
    targetWkm: 30,
    targetWhm: 400,
    targetLongDist: 15,
    targetLongHm: 400,
    cpName: 'Drachenlauf 2026',
    cpMeta: '25. Oktober // 26 km // 1.250 Hm'
  },
  5: {
    code: 'PHASE 5',
    name: 'Wettkampfwoche Drachenlauf',
    dates: 'KW 43 (19.10 – 25.10)',
    desc: 'Regeneration & Rennvorbereitung. Kurze Aktivierung, Schlaf, Carboloading & Vorbereitung 500ml Softflasks, Marzipan, Feigen.',
    motto: '„Der Tag des Drachen. 26 km, 1.250 Hm – Voller Einsatz im Siebengebirge!“',
    emotionTag: 'PHASE 5 // KING OF THE MOUNTAIN // RACE DAY',
    targetWkm: 39,
    targetWhm: 1250,
    targetLongDist: 26,
    targetLongHm: 1250,
    cpName: 'Drachenlauf 2026 (Königswinter)',
    cpMeta: '25. Oktober // Start 10:00 Uhr // 1.250 Hm'
  }
};

const kwMap = {
  30: { phase: 1, travel: 'KW 30 // Basis Erkrath (350 Hm)' },
  31: { phase: 1, travel: 'KW 31 // Vorbereitung Erkrath (380 Hm)' },
  32: { phase: 1, travel: 'KW 32 // London (Abfahrt Di Abend)' },
  33: { phase: 1, travel: 'KW 33 // Jurassic Coast (Rückreise Mi) & Siebengebirge (600 Hm)' },
  34: { phase: 2, travel: 'KW 34 // Siebengebirge (650 Hm)' },
  35: { phase: 2, travel: 'KW 35 // Siebengebirge (800 Hm)' },
  36: { phase: 2, travel: 'KW 36 // Siebengebirge (950 Hm)' },
  37: { phase: 3, travel: 'KW 37 // Côte d’Opal Trail (Abfahrt Do Nachmittag)' },
  38: { phase: 3, travel: 'KW 38 // Normandie & Bretagne (Abfahrt Fr Morgen)' },
  39: { phase: 3, travel: 'KW 39 // Siebengebirge PROBEDRACHEN (27.09 FIX)' },
  40: { phase: 4, travel: 'KW 40 // Zoutelande (Fr Morgen – So Abend)' },
  41: { phase: 4, travel: 'KW 41 // Erkrath Tapering (400 Hm)' },
  42: { phase: 4, travel: 'KW 42 // Erkrath Tapering (300 Hm)' },
  43: { phase: 5, travel: 'KW 43 // Königswinter Drachenlauf' }
};

let runsData = JSON.parse(localStorage.getItem('drachenlauf_runs') || '[]');

runsData.forEach(r => {
  if (r.dayDate === '26.07' || r.date === '26.07.2026' || r.date === '26.07') {
    if (r.duration === '00:01:00' || r.duration === '1' || r.duration === '1 Min.') {
      r.duration = '01:00:00';
      if (r.dist > 0) {
        r.pace = calculatePace(r.dist, '01:00:00');
      }
    }
  }
});
localStorage.setItem('drachenlauf_runs', JSON.stringify(runsData));

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

// MALTODEXTRIN RECHNER: STRIKT GANZZAHLIGE SOFTFLASKS (1, 2, 3, 4 FLASKS) @ 60G PRO 500ML FLASK
function getMaltoNutritionPlan(durationMin) {
  if (!durationMin || durationMin <= 45) {
    return '1 Softflask Wasser (ohne Carbs)';
  }
  const hours = durationMin / 60.0;
  let flasks = Math.max(1, Math.round(hours)); // Strikt ganzzahlig: 1, 2, 3, 4 Softflasks

  const maltoGrams = flasks * 60;
  const flaskStr = flasks === 1 ? '1 Softflask' : `${flasks} Softflasks`;
  
  return `${flaskStr} // ${maltoGrams} g Maltodextrin`;
}

// EXAKTE PACING-KALIBRIERUNG AUF BASIS DER ATHLETEN-HISTORIE (SUMMARY 1. HALBJAHR 2026 & TRAINIG VORPLANGROB)
// Baseline: GA1 Low-HR (HF 113-125 bpm, Chouffe 18,2k 549Hm @ 2:47:37 h, Erkrath 15k 551Hm @ 2:37:51 h)
function getEmpiricalUserPaceProfile() {
  const validRuns = runsData.filter(r => r.dist && r.dist > 0 && r.duration);

  if (validRuns.length === 0) {
    return {
      flatPaceMin: 7.20, // GA1 Flach-Pace Athlet
      elevCostPer10m: 0.67 // Hm-Zuschlag exakt abgestimmt auf Chouffe & Vorplan
    };
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

function getRollingAvgPaceMin() {
  const profile = getEmpiricalUserPaceProfile();
  return profile.flatPaceMin;
}

function getEstimatedDurationMinutes(distKm, hm = 0, tag = '') {
  if (!distKm || distKm <= 0) return 0;
  const tagLower = (tag || '').toLowerCase();

  // Exakte Zeitvorgaben aus trainig vorplangrob.numbers (Nur für die eigentlichen Haupt-Testrennen / Wettkämpfe)
  if (tagLower.includes('drachenlauf') && !tagLower.includes('probedrachen') && distKm >= 20) {
    return 255; // 4:15 h Wettkampfziel
  }
  if (tagLower.includes('probedrachen') && distKm >= 20) {
    return 257; // 4:17 h Peak Test
  }
  if (tagLower.includes('opal') && distKm >= 20) {
    return 175; // 2:55 h Opal Trail Test 1
  }

  const profile = getEmpiricalUserPaceProfile();

  let intensityFactor = 1.00;
  if (tagLower.includes('fahrtspiel') || tagLower.includes('rampen') || tagLower.includes('berg')) {
    intensityFactor = 0.90;
  }

  const effectiveFlatPaceMin = profile.flatPaceMin * intensityFactor;
  const elevTaxMin = (hm / 10) * profile.elevCostPer10m;

  return Math.round((distKm * effectiveFlatPaceMin) + elevTaxMin);
}

function formatWorkoutDuration(distKm, hm = 0, tag = '') {
  if (!distKm || distKm <= 0) return 'Ruhetag';
  const totalMin = getEstimatedDurationMinutes(distKm, hm, tag);
  const hrs = Math.floor(totalMin / 60);
  const mins = totalMin % 60;

  if (hrs > 0) {
    return `${hrs}:${mins < 10 ? '0' : ''}${mins} Std.`;
  }
  return `${mins} Min.`;
}

function formatLoggedDurationString(durStr) {
  if (!durStr) return '';
  const str = String(durStr).trim();
  if (str.toLowerCase().includes('min') || str.toLowerCase().includes('std')) {
    return str;
  }
  const parts = str.split(':').map(Number);
  if (parts.length === 3) {
    const hrs = parts[0];
    const mins = parts[1];
    if (hrs > 0) {
      return mins > 0 ? `${hrs}:${mins < 10 ? '0' : ''}${mins} Std.` : `${hrs} Std.`;
    }
    return `${mins} Min.`;
  } else if (parts.length === 2) {
    const p1 = parts[0];
    const p2 = parts[1];
    if (p1 <= 10 && p2 < 60) {
      return p2 > 0 ? `${p1}:${p2 < 10 ? '0' : ''}${p2} Std.` : `${p1} Std.`;
    }
    return `${p1} Min.`;
  }
  const num = parseInt(str, 10);
  if (!isNaN(num)) {
    if (num <= 5) return `${num} Std.`;
    return `${num} Min.`;
  }
  return str;
}

function parseFlexibleDuration(inputStr) {
  if (!inputStr) return '00:00:00';
  let str = String(inputStr).trim().toLowerCase().replace(/,/g, '.');
  str = str.replace(/[^\d:.]/g, '');
  str = str.replace(/\./g, ':');

  if (!str) return '00:00:00';

  const parts = str.split(':').map(n => parseInt(n, 10) || 0);

  if (parts.length === 1) {
    const val = parts[0];
    if (val <= 5) {
      return `0${val}:00:00`;
    } else {
      const hrs = Math.floor(val / 60);
      const remMins = val % 60;
      return `${hrs < 10 ? '0' : ''}${hrs}:${remMins < 10 ? '0' : ''}${remMins}:00`;
    }
  }

  if (parts.length === 2) {
    const p1 = parts[0];
    const p2 = parts[1];
    if (p1 <= 10 && p2 < 60) {
      return `${p1 < 10 ? '0' : ''}${p1}:${p2 < 10 ? '0' : ''}${p2}:00`;
    } else {
      const hrs = Math.floor(p1 / 60);
      const mins = p1 % 60;
      return `${hrs < 10 ? '0' : ''}${hrs}:${mins < 10 ? '0' : ''}${mins}:${p2 < 10 ? '0' : ''}${p2}`;
    }
  }

  if (parts.length >= 3) {
    const h = parts[0];
    const m = parts[1];
    const s = parts[2];
    return `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  return '00:00:00';
}

function calculatePace(distKm, durStr) {
  if (!distKm || distKm <= 0 || !durStr) return '-:--';
  const parts = durStr.split(':').map(Number);
  let totalSecs = 0;
  if (parts.length === 3) {
    totalSecs = parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    totalSecs = parts[0] * 60 + parts[1];
  }
  if (totalSecs <= 0) return '-:--';

  const paceSecsPerKm = totalSecs / distKm;
  const pMin = Math.floor(paceSecsPerKm / 60);
  const pSec = Math.round(paceSecsPerKm % 60);
  return `${pMin}:${pSec < 10 ? '0' : ''}${pSec}`;
}

function getStatusBadgeText(actVal, targetVal) {
  if (actVal === 0) return 'Mach es!';
  if (actVal >= targetVal) return 'Done!';
  return 'On it!';
}

function getKwFromDateStr(dateStr) {
  if (!dateStr) return selectedKw;
  const parts = dateStr.split('-');
  if (parts.length !== 3) return selectedKw;

  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);

  const d = new Date(Date.UTC(year, month, day));
  if (isNaN(d.getTime())) return selectedKw;

  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);

  return (weekNo >= 30 && weekNo <= 43) ? weekNo : selectedKw;
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
    { day: 'FRE', date: '31.07', tag: 'Stabi / KT', dist: 0, hm: 0, done: false },
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
    if (e.key === 'ArrowLeft') {
      navigateKw(-1);
    } else if (e.key === 'ArrowRight') {
      navigateKw(1);
    }
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
  if (titleSubElem) {
    titleSubElem.textContent = `KW ${selectedKw}`;
  }

  const prevBtn = document.getElementById('prevKwBtn');
  const nextBtn = document.getElementById('nextKwBtn');
  if (prevBtn) prevBtn.disabled = (selectedKw <= 30);
  if (nextBtn) nextBtn.disabled = (selectedKw >= 43);

  renderSummaryRings(selectedKw, phase);
  renderScheduleRow(selectedKw);
  renderPhaseInfo(phase, selectedKw);
  renderLastActivity();
}

function renderSummaryRings(kw, phase) {
  const kwRuns = runsData.filter(r => r.kw === kw);
  const actWkm = kwRuns.reduce((acc, r) => acc + (r.dist || 0), 0);
  const actWhm = kwRuns.reduce((acc, r) => acc + (r.hm || 0), 0);

  const userPaceMin = getRollingAvgPaceMin();
  const paceFactor = Math.min(1.15, Math.max(0.85, 7.00 / userPaceMin));

  const targetWkm = Math.round(phase.targetWkm * paceFactor * 10) / 10;
  const targetWhm = Math.round(phase.targetWhm * paceFactor);

  const days = appleScheduleData[kw] || [];
  const sundayObj = days.find(d => d.day === 'SON') || { dist: phase.targetLongDist, hm: phase.targetLongHm };
  const saturdayObj = days.find(d => d.day === 'SAM');

  const targetLongDist = sundayObj.dist || phase.targetLongDist;
  const targetLongHm = sundayObj.hm || phase.targetLongHm;

  const satDateStr = saturdayObj ? saturdayObj.date : '';
  const sunDateStr = sundayObj ? sundayObj.date : '';

  const longRun = kwRuns.find(r => {
    if (!r.dist || r.dist <= 0) return false;
    const isExplicitNote = r.notes && r.notes.toLowerCase().includes('longrun');
    const isWeekendRun = (r.dayDate === sunDateStr || r.dayDate === satDateStr) && r.dist >= (targetLongDist * 0.6);
    const isLongestRun = r.dist >= (targetLongDist * 0.75);

    return isExplicitNote || isWeekendRun || isLongestRun;
  });

  const actLongDist = longRun ? longRun.dist : 0;
  const actLongHm = longRun ? longRun.hm : 0;

  document.getElementById('statWkm').textContent = actWkm.toFixed(1);
  document.getElementById('statWhm').textContent = actWhm;
  document.getElementById('statLongDist').textContent = actLongDist > 0 ? actLongDist.toFixed(1) : '0.0';
  document.getElementById('statLongDistTarget').textContent = `/ ${targetLongDist.toFixed(1)} km`;
  document.getElementById('statLongHmTxt').textContent = `${actLongHm} / ${targetLongHm} Hm`;

  document.getElementById('statusDistTxt').textContent = getStatusBadgeText(actWkm, targetWkm);
  document.getElementById('statusHmTxt').textContent = getStatusBadgeText(actWhm, targetWhm);

  const distPct = Math.min(100, Math.round((actWkm / targetWkm) * 100));
  const hmPct = Math.min(100, Math.round((actWhm / targetWhm) * 100));
  const longPct = Math.min(100, Math.round((actLongDist / targetLongDist) * 100));

  document.getElementById('ringDistFill').setAttribute('stroke-dasharray', `${distPct}, 100`);
  document.getElementById('ringHmFill').setAttribute('stroke-dasharray', `${hmPct}, 100`);
  document.getElementById('ringLongFill').setAttribute('stroke-dasharray', `${longPct}, 100`);

  const distCardUnit = document.querySelector('#statWkm + .unit');
  if (distCardUnit) distCardUnit.textContent = `/ ${targetWkm.toFixed(1)} km`;

  const hmCardUnit = document.querySelector('#statWhm + .unit');
  if (hmCardUnit) hmCardUnit.textContent = `/ ${targetWhm} Hm`;
}

function renderScheduleRow(kw) {
  const container = document.getElementById('scheduleRow');
  const days = appleScheduleData[kw] || generateDefaultDays(kw);
  const kwRuns = runsData.filter(r => r.kw === kw);

  container.innerHTML = days.map((d, i) => {
    const loggedRun = kwRuns.find(r => r.dayDate === d.date);
    const isDone = d.done || !!loggedRun;
    const tagLower = (d.tag || '').toLowerCase();

    let specialCardClass = '';
    let pillExtraClass = '';
    let displayTagTxt = d.tag || 'Lauf';

    const isMajorRaceOrTestDay = d.dist >= 15 || d.day === 'SON';

    if (tagLower.includes('drachenlauf') && !tagLower.includes('probedrachen') && isMajorRaceOrTestDay) {
      specialCardClass = 'card-race';
      pillExtraClass = 'pill-race';
      displayTagTxt = 'Drachenlauf 🎯';
    } else if (tagLower.includes('probedrachen') && isMajorRaceOrTestDay) {
      specialCardClass = 'card-test-race';
      pillExtraClass = 'pill-test';
      displayTagTxt = 'Probedrachen ⚡';
    } else if (tagLower.includes('opal') && isMajorRaceOrTestDay) {
      specialCardClass = 'card-test-race';
      pillExtraClass = 'pill-test';
      displayTagTxt = 'Côte d’Opal ⚡';
    } else if (tagLower.includes('rampen') || tagLower.includes('coastal') || (d.day === 'SON' && d.hm >= 800)) {
      specialCardClass = 'card-key-workout';
      pillExtraClass = 'pill-key';
      displayTagTxt = tagLower.includes('rampen') ? 'Rampen' : (tagLower.includes('coastal') ? 'Trail' : 'Longrun');
    } else if (tagLower.includes('aktivierung')) {
      displayTagTxt = 'Aktivierung';
    } else if (tagLower.includes('ruhetag') || tagLower.includes('erholung')) {
      displayTagTxt = 'Pause';
    } else if (tagLower.includes('stabi') || tagLower.includes('kraft')) {
      displayTagTxt = 'Kraft';
      pillExtraClass = 'pill-completed';
    }

    const isRestDay = (!d.dist || d.dist === 0) && (tagLower.includes('ruhetag') || tagLower.includes('erholung') || tagLower.includes('reisetag') || tagLower.includes('sightseeing') || tagLower.includes('carboloading') || tagLower.includes('packen') || tagLower.includes('klippen') || tagLower.includes('rückreise') || tagLower.includes('abfahrt') || tagLower.includes('anreise'));
    const isKtDay = (!d.dist || d.dist === 0) && (tagLower.includes('stabi') || tagLower.includes('kt') || tagLower.includes('kraft'));

    let heroHtml = '';
    let subMicroHtml = '';

    if (isDone && loggedRun) {
      displayTagTxt = 'Done!';
      pillExtraClass = 'pill-completed';

      if (!loggedRun.dist || loggedRun.dist === 0) {
        heroHtml = `<div class="hero-val-wrap"><span class="hero-rest-txt text-green">STABI</span></div>`;
        let durMin = loggedRun.duration || '30 Min.';
        subMicroHtml = `<span>${formatLoggedDurationString(durMin)}</span>`;
      } else {
        const distNum = loggedRun.dist.toFixed(1);
        const loggedDurStr = formatLoggedDurationString(loggedRun.duration);
        heroHtml = `
          <div class="hero-val-wrap">
            <span class="hero-val text-green">${distNum}</span>
            <span class="hero-unit text-green">KM</span>
          </div>
        `;
        const hmPart = loggedRun.hm > 0 ? `<span class="text-green" style="font-weight: 900;">${loggedRun.hm} Hm</span>` : '';
        const durPart = loggedDurStr ? `<span>${loggedDurStr}</span>` : '';
        subMicroHtml = `${hmPart}${hmPart && durPart ? '<span class="sub-sep">//</span>' : ''}${durPart}`;
      }
    } else if (isRestDay) {
      heroHtml = `<div class="hero-val-wrap"><span class="hero-rest-txt">RUHETAG</span></div>`;
      subMicroHtml = `<span>Erholung</span>`;
    } else if (isKtDay) {
      heroHtml = `<div class="hero-val-wrap"><span class="hero-rest-txt" style="color: var(--apple-cyan);">STABI</span></div>`;
      subMicroHtml = `<span>Kraft & Rumpf</span>`;
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
      subMicroHtml = `${hmPart}${hmPart && durPart ? '<span class="sub-sep">//</span>' : ''}${durPart}`;
    }

    return `
      <div class="apple-day-card ${specialCardClass} ${isDone ? 'card-completed' : ''}" onclick="openWorkoutDetailsModal(${kw}, ${i})" title="Details für ${d.tag} anzeigen">
        <div class="day-header">
          <span class="day-name">${d.day}</span>
          <span class="date-num">${d.date}</span>
        </div>
        <div class="day-hero-box">
          ${heroHtml}
          <div class="hero-sub-micro">
            ${subMicroHtml}
          </div>
        </div>
        <div class="day-footer-row">
          <div class="day-pill-badge ${pillExtraClass}">${displayTagTxt}</div>
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

  document.getElementById('workoutMetaHeader').textContent = `${fullDay}, ${d.date}.2026 // KW ${kw}`;
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

  let loggedHtml = '';
  if (loggedRun) {
    const loggedDurStr = formatLoggedDurationString(loggedRun.duration);
    loggedHtml = `
      <div class="logged-run-box">
        <h4>Erfasste Aktivität</h4>
        <p><strong>Distanz:</strong> ${loggedRun.dist > 0 ? loggedRun.dist.toFixed(1) + ' km' : 'Stabi/Kraft'} | <strong>Dauer:</strong> ${loggedDurStr || '-'} | <strong>Puls:</strong> ${loggedRun.hr > 0 ? loggedRun.hr + ' bpm' : '--'}</p>
        ${loggedRun.notes ? `<p style="font-style: italic; opacity: 0.85; margin-top: 0.2rem;">Notiz: "${loggedRun.notes}"</p>` : ''}
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

  document.getElementById('workoutModalBody').innerHTML = `
    <div style="display: inline-block; background: ${categoryColor}22; color: ${categoryColor}; border: 1px solid ${categoryColor}44; padding: 0.35rem 0.8rem; border-radius: 8px; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.6px; margin-bottom: 1.1rem;">
      ${categoryBadge}
    </div>

    <div class="workout-detail-grid">
      <div class="workout-metric-card">
        <span class="val">${d.dist > 0 ? d.dist.toFixed(1) : '0'}</span>
        <span class="lbl">DISTANZ (KM)</span>
      </div>
      <div class="workout-metric-card">
        <span class="val" style="${getHmColorStyle(d.hm)}">${d.hm}</span>
        <span class="lbl">HÖHENMETER</span>
      </div>
      <div class="workout-metric-card">
        <span class="val">${d.dist > 0 ? estDur : 'Stabi'}</span>
        <span class="lbl">SCHÄTZDAUER</span>
      </div>
      <div class="workout-metric-card">
        <span class="val" style="font-size: 1.05rem;">${hrTarget}</span>
        <span class="lbl">PULS-ZIELZONE</span>
      </div>
    </div>

    <div class="workout-desc-box">
      <h4>Ablauf</h4>
      <ul>
        ${tipsList.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>

    ${combinedNutritionBlockHtml}

    ${loggedHtml}
  `;

  document.getElementById('workoutDetailsModal').classList.remove('hidden');
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

  const emoBadge = document.getElementById('emoPhaseBadge');
  const emoMotto = document.getElementById('emotionMotto');
  if (emoBadge) emoBadge.textContent = phase.emotionTag || `${phase.code} // ${phase.name}`;
  if (emoMotto) emoMotto.textContent = phase.motto || `„Dem Drachen entgegen.“`;

  const cpBanner = document.getElementById('checkpointBanner');

  let activeCp = null;

  if (kw === 36 || kw === 37) {
    activeCp = {
      name: 'Côte d’Opal Trail (Test 1)',
      meta: '13. September // 25 km // 250 Hm'
    };
  } else if (kw === 38 || kw === 39) {
    activeCp = {
      name: 'Probedrachenlauf (HF-Test FIX)',
      meta: '27. September // 24 km // 1.250 Hm (HF 120–140 bpm)'
    };
  } else if (kw === 42 || kw === 43) {
    activeCp = {
      name: 'Drachenlauf 2026 (Königswinter)',
      meta: '25. Oktober // Start um 10:00 Uhr // 1.250 Hm'
    };
  }

  if (activeCp) {
    document.getElementById('cpName').textContent = activeCp.name;
    document.getElementById('cpMeta').textContent = activeCp.meta;
    if (cpBanner) cpBanner.classList.remove('hidden');
  } else {
    if (cpBanner) cpBanner.classList.add('hidden');
  }
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
  
  if (runsData.length === 0) {
    document.getElementById('lastRunTag').textContent = 'Kein Lauf';
    document.getElementById('lastRunDist').textContent = '0.0';
    document.getElementById('lastRunHm').textContent = '0';
    document.getElementById('lastRunPace').textContent = '-:--';
    document.getElementById('lastRunHr').textContent = '--';
    document.getElementById('lastRunNotes').textContent = 'Keine Einheiten erfasst.';
    if (microElem) microElem.textContent = 'Keine Einheiten erfasst';
    if (deleteBtn) deleteBtn.classList.add('hidden');
    return;
  }
  const last = runsData[0];

  document.getElementById('lastRunTag').textContent = last.tag;
  document.getElementById('lastRunDist').textContent = last.dist > 0 ? (typeof last.dist === 'number' ? last.dist.toFixed(1) : last.dist) : 'Stabi';
  document.getElementById('lastRunHm').textContent = last.hm;
  document.getElementById('lastRunPace').textContent = last.dist > 0 ? last.pace : '-:--';
  document.getElementById('lastRunHr').textContent = last.hr > 0 ? last.hr : '--';
  document.getElementById('lastRunNotes').textContent = `${last.date ? last.date + ': ' : ''}${last.notes}`;

  if (microElem) {
    const datePart = last.dayDate || last.date || '';
    const distPart = last.dist > 0 ? `${typeof last.dist === 'number' ? last.dist.toFixed(1) : last.dist} km` : 'Stabi';
    const hmPart = last.hm > 0 ? `${last.hm} Hm` : '';
    const pacePart = last.dist > 0 && last.pace ? `Pace ${last.pace}` : '';
    const hrPart = last.hr > 0 ? `Puls ${last.hr}` : '';

    const summaryParts = [datePart, distPart, hmPart, pacePart, hrPart].filter(Boolean);
    microElem.textContent = summaryParts.join(' // ');
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

function openTextModal() {
  document.getElementById('textModal').classList.remove('hidden');
  
  const today = '2026-07-30';
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
  
  let formattedDateStr = 'Heute';
  let dayDateStr = '';
  if (rawDate) {
    const parts = rawDate.split('-');
    if (parts.length === 3) {
      formattedDateStr = `${parts[2]}.${parts[1]}.${parts[0]}`;
      dayDateStr = `${parts[2]}.${parts[1]}`;
    }
  }

  const distVal = parseFloat(document.getElementById('confDist').value) || 0;
  const rawDurInput = document.getElementById('confDuration').value;
  const durVal = parseFlexibleDuration(rawDurInput);
  const calculatedPaceStr = distVal > 0 ? calculatePace(distVal, durVal) : '-:--';

  const newRun = {
    id: Date.now(),
    kw: targetKw,
    date: formattedDateStr,
    dayDate: dayDateStr,
    dist: distVal,
    hm: parseInt(document.getElementById('confHm').value, 10) || 0,
    duration: durVal,
    hr: parseInt(document.getElementById('confHr').value, 10) || 0,
    pace: calculatedPaceStr,
    tag: distVal === 0 ? 'Stabi & Kraft' : 'Manuell',
    notes: document.getElementById('rawTextInput').value || (distVal === 0 ? 'Stabi/Kraft-Einheit' : 'Aktivität manuell')
  };

  selectedKw = targetKw;
  document.getElementById('kwSelect').value = targetKw;

  runsData.unshift(newRun);
  localStorage.setItem('drachenlauf_runs', JSON.stringify(runsData));

  closeTextModal();
  renderDashboard();
}

function openScreenshotModal() {
  document.getElementById('ocrModal').classList.remove('hidden');
  document.getElementById('ocrPreviewBox').classList.add('hidden');
  
  const today = '2026-07-30';
  if (document.getElementById('ocrDate')) {
    document.getElementById('ocrDate').value = today;
  }
}

function closeScreenshotModal() {
  document.getElementById('ocrModal').classList.add('hidden');
}

function simulateOcrUpload() {
  document.getElementById('ocrPreviewBox').classList.remove('hidden');
}

function saveOcrRun() {
  const rawDate = document.getElementById('ocrDate').value;
  const targetKw = getKwFromDateStr(rawDate);

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

  const newRun = {
    id: Date.now(),
    kw: targetKw,
    date: formattedDateStr,
    dayDate: dayDateStr,
    dist: distVal,
    hm: parseInt(document.getElementById('ocrHm').value, 10) || 0,
    duration: durVal,
    hr: parseInt(document.getElementById('ocrHr').value, 10) || 0,
    pace: calculatedPaceStr,
    tag: distVal === 0 ? 'Stabi & Kraft' : 'Garmin OCR',
    notes: 'Aktivität per Screenshot-OCR importiert.'
  };

  selectedKw = targetKw;
  document.getElementById('kwSelect').value = targetKw;

  runsData.unshift(newRun);
  localStorage.setItem('drachenlauf_runs', JSON.stringify(runsData));

  closeScreenshotModal();
  renderDashboard();
}
