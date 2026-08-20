
with open('/Users/Gerhard/Desktop/running_guide/app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
skip = False
for line in lines:
    if 'function formatWorkoutDuration' in line:
        skip = True
        new_lines.append('function formatWorkoutDuration(dist, hm, tag) {
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

')
        continue
    if skip:
        if 'function parseFlexibleDuration' in line:
            skip = False
            new_lines.append(line)
        continue
    new_lines.append(line)

with open('/Users/Gerhard/Desktop/running_guide/app.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print('app.js syntax successfully repaired!')
