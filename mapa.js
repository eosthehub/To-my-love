// Criando o mapa
const map = L.map('map').setView([-15.7801, -47.9292], 3);

// Camada do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Lista de pins com todos os estados do Brasil
const locations = [
    {
        name: "Acre 💙",
        coords: [-8.77, -70.55],
        image: "https://placehold.co/600x400?text=Acre"
    },
    {
        name: "Alagoas 💙",
        coords: [-9.71, -35.73],
        image: "images/Alagoas.png"
    },
    {
        name: "Amapá 💙",
        coords: [1.41, -51.77],
        image: "images/Amapá.png"
    },
    {
        name: "Amazonas 💙",
        coords: [-3.47, -65.10],
        image: "images/Amazonas.png"
    },
    {
        name: "Bahia 💙",
        coords: [-12.96, -38.51],
        image: "images/Bahia.png"
    },
    {
        name: "Ceará 💙",
        coords: [-3.71, -38.54],
        image: "images/Ceará.png"
    },
    {
        name: "Distrito Federal 💙",
        coords: [-15.83, -47.86],
        image: "images/Brasília.png"
    },
    {
        name: "Espírito Santo 💙",
        coords: [-19.19, -40.34],
        image: "images/Espírito santo.png"
    },
    {
        name: "Goiás 💙",
        coords: [-16.64, -49.31],
        image: "images/Goiás.png"
    },
    {
        name: "Maranhão 💙",
        coords: [-2.55, -44.30],
        image: "images/Maranhão.png"
    },
    {
        name: "Mato Grosso 💙",
        coords: [-12.64, -55.42],
        image: "https://placehold.co/600x400?text=Mato+Grosso"
    },
    {
        name: "Mato Grosso do Sul 💙",
        coords: [-20.51, -54.54],
        image: "https://placehold.co/600x400?text=Mato+Grosso+do+Sul"
    },
    {
        name: "Minas Gerais 💙",
        coords: [-18.10, -44.38],
        image: "https://placehold.co/600x400?text=Minas+Gerais"
    },
    {
        name: "Pará 💙",
        coords: [-5.53, -52.29],
        image: "https://placehold.co/600x400?text=Para"
    },
    {
        name: "Paraíba 💙",
        coords: [-7.06, -35.55],
        image: "https://placehold.co/600x400?text=Paraiba"
    },
    {
        name: "Paraná 💙",
        coords: [-24.89, -51.55],
        image: "https://placehold.co/600x400?text=Parana"
    },
    {
        name: "Pernambuco 💙",
        coords: [-8.28, -35.07],
        image: "https://placehold.co/600x400?text=Pernambuco"
    },
    {
        name: "Piauí 💙",
        coords: [-8.28, -43.68],
        image: "https://placehold.co/600x400?text=Piaui"
    },
    {
        name: "Rio de Janeiro 💙",
        coords: [-22.84, -43.15],
        image: "https://placehold.co/600x400?text=Rio+de+Janeiro"
    },
    {
        name: "Rio Grande do Norte 💙",
        coords: [-5.22, -36.52],
        image: "https://placehold.co/600x400?text=Rio+Grande+do+Norte"
    },
    {
        name: "Rio Grande do Sul 💙",
        coords: [-30.17, -53.50],
        image: "https://placehold.co/600x400?text=Rio+Grande+do+Sul"
    },
    {
        name: "Rondônia 💙",
        coords: [-11.22, -62.80],
        image: "https://placehold.co/600x400?text=Rondonia"
    },
    {
        name: "Roraima 💙",
        coords: [1.89, -61.22],
        image: "https://placehold.co/600x400?text=Roraima"
    },
    {
        name: "Santa Catarina 💙",
        coords: [-27.33, -49.44],
        image: "images/Santa catarina.png"
    },
    {
        name: "São Paulo 💙",
        coords: [-23.55, -46.64],
        image: "images/São paulo.png"
    },
    {
        name: "Sergipe 💙",
        coords: [-10.57, -37.45],
        image: "images/Sergipe.png"
    },
    {
        name: "Tocantins 💙",
        coords: [-10.25, -48.25],
        image: "images/Tocantins.png"
    }
];

// Modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

// Criar pins
locations.forEach(location => {

    const marker = L.marker(location.coords).addTo(map);

    marker.bindPopup(`
        <div style="text-align:center;">
            <h3>${location.name}</h3>
            <button onclick="openImage('${location.image}')">
                Abrir imagem
            </button>
        </div>
    `);
});

// Abrir imagem
function openImage(src) {
    modal.style.display = "block";
    modalImg.src = src;
}

// Fechar modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}