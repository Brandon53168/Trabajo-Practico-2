
const contenedor_cards = document.getElementById("contenedor_cards");

const inputBusqueda = document.getElementById('buscar');

let DigimonFiltrados = [];


fetch("Database.json")
    .then(res => res.json())
    .then(Digimons => {
        console.log(Digimons);
        mostrarDigimon(Digimons);

        // Guardamos las ciudades en una variable
        DigimonFiltrados = Digimons;
    });


let cardsHTML = "";


function mostrarDigimon(Digimons) {
    let cardsHTML = "";
    for (const digimon of Digimons) {
        cardsHTML += `
            
            <div class="card" style="width: 15rem; margin: 10px; background-color: green; padding: 5px">
            <img src="${digimon.image}" style="background-color:white" class="card-img-top" alt="${digimon.name}" >
            <div class="card-body" style="background-color: lightgreen"; >
            <p class="card-text nova-square-bold"style="background-color: lightgreen";>${digimon.name}</p>
                    <p class="card-title nova-square-boldnormal" style="font-size: 15px ;background-color: lightgreen";">${digimon.Type}</p>
                    <p class="card-text nova-square-normal" style="margin-top: 10px ;background-color: lightgreen">${digimon.Attribute}</p>
                    <p class="card-text nova-square-normal" style="background-color: lightgreen";>Más información en: </p>
                    <a href="#" class="card-link"style="background-color: lightgreen">${digimon.descrip}</a>
                     <a class="btn btn-danger" href="./Info.html?id=${digimon.id}">Ver más</a>
            </div>
            </div>
        `;
    };
    contenedor_cards.innerHTML = cardsHTML;
}
// Mostrar todo


//busqueda
inputBusqueda.addEventListener('input', () => {
    const textoBusqueda = inputBusqueda.value.toLowerCase();
    const resultadosFiltrados = DigimonFiltrados.filter(digimon =>
        digimon.name.toLowerCase().includes(textoBusqueda)
    );

    if (resultadosFiltrados.length === 0) {
        contenedor_cards.innerHTML = "<h2>Sin Resultados</h2>";
    } else {
        mostrarDigimon(resultadosFiltrados);
    }
});