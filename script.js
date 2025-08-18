function updateSchedule() {
  const scheduleDiv = document.getElementById('schedule');
  const today = new Date();
  const day = today.getDay();
  let week = [];

  for (let i = 1; i <= 7; i++) {
    week.push(`Día ${i}: Actividad ${i}`);
  }

  if (day === 0) {
    week = week.map((item, index) => `Día ${index+1}: Actividad actualizada`);
  }

  // En lugar de tabla, usamos tarjetas div
  let html = '';
  week.forEach(day => {
    html += `<div>${day}</div>`;
  });
  scheduleDiv.innerHTML = html;
}

updateSchedule();
