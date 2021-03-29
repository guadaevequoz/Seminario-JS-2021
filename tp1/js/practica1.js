//EJERCICIO 5
function log(message) {
    console.log(message);
    }


//EJERCICIO 6
var text = 'Lorem ipsum dolor sit amet.';
function practica6(texto){
    log(texto.length);
    var pos = texto.indexOf("ipsum");
    if (pos != -1) {
        log(pos);
    }else{
        log("No existe la palabra.");
    }
    var sub = texto.substring(1, 4);
    log(sub.toUpperCase());
    }


//EJERCICIO 7
var A = 1;
var B = 3;
var C = 2;
function practica7(){
    log(Math.pow((A + B), C));
    A = Math.floor(Math.random() * 10);
    B = Math.floor(Math.random() * 10);
    C = Math.floor(Math.random() * 10);
    log(Math.max(A,B,C));
}


//EJERCICIO 8
var dia1 = new Date();
var dia2 = new Date(1575978300000);
function imprimirFecha(dia){
    log(dia.toLocaleDateString() +" "+  dia.toLocaleTimeString());
}
function cambios(dia1,dia2){
    dia2.setFullYear(dia1.getFullYear());
    dia1.setMonth(dia2.getMonth());
    imprimirFecha(dia1);
    imprimirFecha(dia2);
}

function restarFechas(fecha1,fecha2){
    var resta = new Date(fecha1-fecha2);
    log(resta.toLocaleDateString() +" "+  resta.toLocaleTimeString());
}
