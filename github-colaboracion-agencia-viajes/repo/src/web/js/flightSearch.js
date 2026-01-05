// Búsqueda simple contra datos mock
async function loadFlights(){
  const resp = await fetch('../../api/mock/flights.json');
  return resp.json();
}

function render(rows){
  const tbody = document.getElementById('resultsBody');
  tbody.innerHTML = rows.map(r => `<tr><td>${r.airline}</td><td>${r.origin}</td><td>${r.destination}</td><td>${r.date}</td><td>$${r.price}</td></tr>`).join('');
}

document.getElementById('searchForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const origin = document.getElementById('origin').value.trim().toUpperCase();
  const destination = document.getElementById('destination').value.trim().toUpperCase();
  const date = document.getElementById('date').value; // YYYY-MM-DD
  const flights = await loadFlights();
  const filtered = flights.filter(f => (!origin || f.origin === origin) && (!destination || f.destination === destination) && (!date || f.date === date));
  render(filtered);
});
