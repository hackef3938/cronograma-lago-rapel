// ================================
// DATOS DEL CRONOGRAMA
// ================================
const actividades = [
  {
    fecha: "Lunes 18",
    hora: "10:00 a 12:00",
    direccion: "Alto el Manzano",
    territorio: "Diesel Los Lagos",
    numero: 36,
    encargado: "Modesto Abarca"
  },
  {
    fecha: "Lunes 18",
    hora: "19:00 a 21:00",
    direccion: "Zoom",
    territorio: "Predicación: Telefónica y cartas",
    numero: "ID: 614 873 5306 / Clave: mateo2414",
    encargado: "Guillermo Carvajal"
  },
  {
    fecha: "Martes 19",
    hora: "09:00 a 12:00",
    direccion: "Zoom",
    territorio: "Predicación: Telefónica y cartas",
    numero: "ID: 614 873 5306 / Clave: mateo2414",
    encargado: "Guillermo Carvajal"
  },
  {
    fecha: "Martes 19",
    hora: "10:00 a 12:00",
    direccion: "Apr Los Aromos",
    territorio: "Apr Los Aromos",
    numero: 46,
    encargado: "Felipe Jimenez"
  },
  {
    fecha: "Miércoles 20",
    hora: "10:00 a 12:00",
    direccion: "Población Futuro",
    territorio: "Población Futuro",
    numero: 12,
    encargado: "Alex Vivanco"
  },
  {
    fecha: "Jueves 21",
    hora: "10:00 a 12:00",
    direccion: "Negocio 'Las 3 esquinas'",
    territorio: "Pilares Verdes 1",
    numero: 58,
    encargado: "Juan Carlos Farías"
  },
  {
    fecha: "Viernes 22",
    hora: "10:00 a 12:00",
    direccion: "El Durazno",
    territorio: "El Durazno y Calle Molina",
    numero: "47-48",
    encargado: "Alex Vivanco"
  },
  {
    fecha: "Sábado 23 (Grupo 1)",
    hora: "10:00 a 12:00",
    direccion: "Calle Nueva",
    territorio: "Calle Nueva",
    numero: 49,
    encargado: "Guillermo Carvajal"
  },
  {
    fecha: "Sábado 23 (Grupo 2)",
    hora: "10:00 a 12:00",
    direccion: "Las Quiscas",
    territorio: "Las Quiscas",
    numero: 10,
    encargado: "Jaime Sanchez"
  },
  {
    fecha: "Sábado 23 (Grupo 3)",
    hora: "10:00 a 12:00",
    direccion: "Las Cumbres",
    territorio: "Las Cumbres",
    numero: 37,
    encargado: "Ricardo Sepulveda"
  },
  {
    fecha: "Sábado 23 (Grupo 4)",
    hora: "10:00 a 12:00",
    direccion: "La Guañanga 2",
    territorio: "La Guañanga 2",
    numero: 21,
    encargado: "Alex Vivanco"
  },
  {
    fecha: "Domingo 24",
    hora: "10:00 a 12:00",
    direccion: "Los Pinos",
    territorio: "Los Pinos",
    numero: 3,
    encargado: "Carlos Plaza"
  }
];

// ================================
// FUNCIÓN PARA MOSTRAR EL CRONOGRAMA
// ================================
function updateSchedule() {
  const scheduleDiv = document.getElementById('schedule');
  let html = '';

  actividades.forEach((act, idx) => {
    html += `
      <div class="card" style="animation: fadeIn 0.5s ease forwards; animation-delay: ${idx * 0.1}s;">
        <h3>${act.fecha}</h3>
        <p><b>Hora:</b> ${act.hora}</p>
        <p><b>Dirección:</b> ${act.direccion}</p>
        <p><b>Territorio:</b> ${act.territorio}</p>
        <p><b>N°:</b> ${act.numero}</p>
        <p><b>Encargado:</b> ${act.encargado}</p>
      </div>
    `;
  });

  scheduleDiv.innerHTML = html;
}

// Ejecutar al cargar
updateSchedule();
