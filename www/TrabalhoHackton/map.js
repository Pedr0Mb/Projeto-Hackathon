let map;
function initMap() {
    // https://leafletjs.com/examples/quick-start/
    const posicao = { x: -24.121779134302265, y: -46.67788803577424 };
    const zoom = 19;

    map = L.map('map').setView([posicao.x, posicao.y], zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
}

function getMockData() {
    return [];
}

function load() {
    initMap();
}

load();
