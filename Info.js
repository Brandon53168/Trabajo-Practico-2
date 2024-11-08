fetch("Database.json")
    .then(res => res.json())
    .then(Digimons => {
        crearInfo(Digimons);
    })
    .catch(error => console.error("Error al cargar los datos:", error));

function crearInfo(Digimons) {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    
    const DigimonBuscado = Digimons.find(digimon => digimon.id == id);
    const contenedor = document.getElementById("digimon_info");

    if (DigimonBuscado) {
        contenedor.innerHTML = `
            <div class="column">
                <h2>${DigimonBuscado.name}</h2>
                <img src="${DigimonBuscado.image}" alt="${DigimonBuscado.name}">
            </div>
            <div class="column">
                <h3>Tipo: ${DigimonBuscado.Type} años</h3>
                <h3>Atributo: ${DigimonBuscado.Attribute}</h3>
                <h3>Mas info: ${DigimonBuscado.descrip}</h3>
                <p>${DigimonBuscado.Descrip}</p>
            </div>`;
    } else {
        contenedor.innerHTML = `<p>Digimon no encontrado</p>`;
    }
}