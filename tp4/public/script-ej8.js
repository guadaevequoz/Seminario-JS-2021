const url = `http://localhost:3000`
let newUrl = "";
let xhttp = new XMLHttpRequest();
xhttp.open("GET", url, true);
xhttp.send();

//cdconst botonSobrepeso = document.getElementById("botonSobrepeso");
const botonEdades = document.getElementById("botonEdades");
const botonIMCs = document.getElementById("botonIMCs");
const botonIMCPromedio = document.getElementById("botonIMCPromedio");
const botonMasJoven = document.getElementById("botonMasJoven");
const botonEstaturas = document.getElementById("botonEstaturas");

const mostrar = document.getElementById("mostrar");

xhttp.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
        if (!xhttp.responseURL.endsWith("/")) {
            let datos = JSON.parse(xhttp.responseText);
            mostrar.textContent = xhttp.responseText;
        }

        $("botonSobrepeso").addEventListener("click", function () {
            newUrl = url + "/overweight_people";
            xhttp.open("GET", newUrl, true);
            xhttp.send();
        })

        botonEdades.addEventListener("click", function () {
            newUrl = url + "/people_by_age";
            xhttp.open("GET", newUrl, true);
            xhttp.send();
        })

        botonIMCs.addEventListener("click", function () {
            newUrl = url + "/imc_over_40";
            xhttp.open("GET", newUrl, true);
            xhttp.send();
        })

        botonIMCPromedio.addEventListener("click", function () {
            newUrl = url + "/average_imc";
            xhttp.open("GET", newUrl, true);
            xhttp.send();
        })

        botonMasJoven.addEventListener("click", function () {
            newUrl = url + "/youngest";
            xhttp.open("GET", newUrl, true);
            xhttp.send();
        })

        botonEstaturas.addEventListener("click", function () {
            newUrl = url + "/people_by_height";
            xhttp.open("GET", newUrl, true);
            xhttp.send();
        })

    }
}

