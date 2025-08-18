// --- Cronograma que se actualiza cada domingo ---
function updateSchedule() {
  const scheduleDiv = document.getElementById('schedule');
  const today = new Date();
  const day = today.getDay(); // 0 = domingo, 1 = lunes...
  let week = [];

  for (let i = 1; i <= 7; i++) {
    week.push(`Día ${i}: Actividad ${i}`);
  }

  if (day === 0) {
    week = week.map((item, index) => `Día ${index+1}: Actividad actualizada`);
  }

  let table = '<table><tr>';
  week.forEach(day => { table += `<td>${day}</td>` });
  table += '</tr></table>';
  scheduleDiv.innerHTML = table;
}
updateSchedule();

// --- Mapa con KML ---
const map = L.map('map').setView([-33.75, -71.6], 9); // ejemplo: Santiago, Chile
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Cargar archivo KML
omnivore.kml('territorios.kml').addTo(map);

// --- Formulario para actualizar avances (simulado) ---
document.getElementById('avanceForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const territorio = document.getElementById('territorio').value;
  const avance = document.getElementById('avance').value;

  alert(`Avance registrado: ${territorio} -> ${avance}`);
  // Aquí se podría enviar a un backend para actualizar la base de datos y KML
  this.reset();
});
