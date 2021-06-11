document.body.onload = cargarDatos("http://localhost:3000");

async function cargarDatos(link) {
    datos = await fetch(link)
    .then(function(data){
        return data.json()})
    .catch(function(err){
        console.log(err)
    })  
    let mostrar = document.getElementById("mostrar");
    let botonSobrepeso = document.getElementById("botonSobrepeso");
    let botonEdades = document.getElementById("botonEdades");
    let botonIMCs = document.getElementById("botonIMCs");
    let botonIMCPromedio = document.getElementById("botonIMCPromedio");
    let botonMasJoven = document.getElementById("botonMasJoven");
    let botonEstaturas = document.getElementById("botonEstaturas");
    
    for (const pokemones of datos.results) { //itera sobre cada pokemon 
        listUL.innerHTML +=  `<li onclick="obtenerDescripcion('${pokemones.url}')">${pokemones.name}</li>`
    }
    //Botón hacia atras 
    links.innerHTML = (datos.previous) ? `<button id="boton" onclick="cargarPokemones2('${datos.previous}')">Atrás</button>` : "";
    //Botón hacia adelante
    links.innerHTML += (datos.next) ? `<button id="boton" onclick="cargarPokemones2('${datos.next}')">Siguiente</button>` : "";
}