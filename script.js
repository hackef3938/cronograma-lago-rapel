
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

  // Crear tarjetas con animación de entrada
  let html = '';
  week.forEach((day, idx) => {
    html += `<div style="animation: fadeIn 0.5s ease forwards; animation-delay: ${idx * 0.1}s;">${day}</div>`;
  });
  scheduleDiv.innerHTML = html;
}

updateSchedule();

// Animación CSS inyectada desde JS
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
  0% {opacity: 0; transform: translateY(10px);}
  100% {opacity: 1; transform: translateY(0);}
}`;
document.head.appendChild(style);
