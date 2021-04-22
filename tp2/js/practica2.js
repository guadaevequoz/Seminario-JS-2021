//PUNTO 1
function ejercicio1(){
    let a = 1;
    let b = true;
    let c = "Hola";
    let d = null;
    let e;
    let f = 2n ** 60n;
    let g = new Date();
    let h = [1,2,3,4];
    let i = 'Hola';
    let j = { x: 2.0, y: -3.6 };
    let k = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);
    console.log(typeof e);
    console.log(typeof f);
    console.log(typeof g);
    console.log(typeof h);
    console.log(typeof i);
    console.log(typeof j);
    console.log(typeof k);
}

//PUNTO 2
function ejercicio2(){
    let a = 25;
    console.log(++a);
    console.log(a++);
    console.log(a == '27');
    console.log(a === '27');
}

//PUNTO 3
function ejercicio3(){

    function max(values) {
        let maxi=-100;
        for(let i=0;i<values.length;i++){
            if(values[i] > maxi){
                maxi=values[i];
            }
        }
        return maxi;
   }
   function min(values) {
       let mini=9999;
        for(let i=0;i<values.length;i++){
            if(values[i] < mini){
                mini=values[i];
            }
        }
        return mini;
   }
   function avg(values) {
       let aveg=0;
        for(let i=0;i<values.length;i++){
            aveg=aveg + values[i];
        }
        return aveg / values.length;
   }
   function sum(values) {
       let suma="";
        for(let i=0;i<values.length;i++){
            suma=suma+values[i];
        }
        return suma;
   }

    var prices = [1.2, 2, 22, -33, 12, 0.0, "13", Math.PI];
    var names = ["John", "Paul", "George", "Ringo"]; 
    console.log(max(prices));
    console.log(min(prices));
    console.log(avg(prices));
    console.log(sum(prices));
    console.log(max(names));
    console.log(min(names));
    console.log(avg(names));
    console.log(sum(names));
    console.log(max([]));
    console.log(min([]));
    console.log(avg([]));
    console.log(sum([]));
}

function ejercicio4(){
    function concat(left, right) {
        return left.concat(right);
    }
    var names = ["John", "Paul", "George", "Ringo"];
    console.log(names.reduce(concat));

    function max(values) {
        return Math.max.apply(null,values);
    }
    function min(values) {
        return Math.min.apply(null,values);
    }
    function avg(values) {
        return sum(values) / values.length;
    }
    function sum(values) {
        return values.reduce(function(a,b){ return a + b },0);
    }
    var prices = [1.2, 2, 22, -33, 12, 0.0, "13", Math.PI];
    console.log(max(prices));
    console.log(min(prices));
    console.log(avg(prices));
    console.log(sum(prices));
}

function ejercicio5(){
    function arrayEquals(a, b) {
        if ((a!=null && b!=null)&&(a.length == b.length)){
            let iguales = true;
            let i=0;
            while(iguales && (i<a.length)){
                if(a[i]===b[i]) i++;
                else{
                    iguales=false;
                }
            }
            return iguales;
        }else{
            if(a==null & b==null) return true;
            else return false;
        }
    }
    var a = [1,2,3,4];
    var b = [1,2,3,4];
    var c = [1,2,3,4,5];
    var d = "Hola";
    var e = null;
    console.log(arrayEquals(a, a)); //true
    console.log(arrayEquals(a, b)); //true
    console.log(arrayEquals(b, c)); //false
    console.log(arrayEquals(e, c)); //false
    console.log(arrayEquals(c, d)); //false
    console.log(arrayEquals(e, e)); //true
}

function ejercicio6(){
    function isInteger(a){
        let b = 0;
        if (typeof(a) == typeof(b)) {
            let aux = a % 1;
            if (aux == 0) return true;
            else return false; 
        }
        else return false; 
    }
    console.log(isInteger(2)); // retorna true
    console.log(isInteger(2.0)); // retorna true
    console.log(isInteger(2.1)); // retorna false
    console.log(isInteger(-10)); // retorna true
    console.log(isInteger([1])); // retorna false
    console.log(isInteger("2")); // retorna false
    console.log(isInteger(true)); // retorna false
    console.log(isInteger(null)); // retorna false
    var num;
    console.log(isInteger(num)); // retorna false
}

function ejercicio7(){
    function isNumeric(aux){
        let b = " ";
        if(typeof(aux)==typeof(b)) return !isNaN(aux);
        else return false;
    }
    console.log(isNumeric("2")); // retorna true
    console.log(isNumeric("2a")); // retorna false
    console.log(isNumeric(2)); // retorna false
}

function ejercicio8(){
    //funciones
    function total(){
        return prices.MILK*amounts.MILK + prices.BREAD*amounts.BREAD + prices.BUTTER*amounts.BUTTER;
    }
    function total2(){
        return prices.BREAD*amounts2.BREAD;
    }
    //registros
    var prices = {
        MILK: 48.90,
        BREAD: 90.50,
        BUTTER: 130.12
    };
    var amounts = {
        MILK: 1,
        BREAD: 0.5,
        BUTTER: 0.2
    }

    var amounts2 = {
        BREAD: 1.5
    };
       
    //impresiones
    console.log(typeof prices); 
    console.log(prices.BREAD); 
    console.log(amounts["MILK"]); 

    console.log(total(prices, amounts)); // imprime 120.17
    console.log(total2(prices, amounts2));
}

function ejercicio9(){
    let words = ['perro', 'gato', 'casa', 'árbol', 'nube', 'día', 'noche','zanahoria', 'babuino'];
    words.sort((b, c) => b.localeCompare(c));
    console.log(words);
    words.reverse((b, c) => b.localeCompare(c));
    console.log(words);
}

function ejercicio10(){
    words = ['perro', 'gato', 'casa', 'árbol', 'nube', 'día', 'noche','zanahoria', 'babuino'];
    words.sort(function(b,c){  return b.length - c.length} );
    console.log(words);
}

function ejercicio11(){
    function identity(x){
        return x;
    }
    var id = function(x){
        return x;
    }
    var iden = x => x;
    var identidad = identity;
    console.log(typeof identity);
    console.log(typeof id);
    console.log(typeof iden);
    console.log(typeof identidad);
    console.log(identity('Hola'));
    console.log(id('Hello'));
    console.log(iden('Buen día'));
    console.log(identidad('Buen día'));
}

function ejercicio12(){
    function reduce(array, binaryOperation, initialValue){
        for(let i=0; i<array.length; i++){
            initialValue=binaryOperation(array[i],initialValue);
        }
        return initialValue;
    }
    var numbers = [ 1, 3, 4, 6, 23, 56, 56, 67, 3,567, 98, 45, 480, 324, 546, 56 ];
    var sum = (x, y) => x + y;
    console.log(numbers.reduce(sum, 0));
    console.log(reduce(numbers, sum, 0)); 
}

function ejercicio13(){
    var alice = {
        name : "Alice",
        dob : new Date(2001, 3, 4),
        height : 165,
        weight : 68
    };
    var bob = {
        name : "Robert",
        dob : new Date(1997, 0, 31),
        height : 170,
        weight : 88
    };
    var charly = {
        name : "Charles",
        dob : new Date(1978, 9, 15),
        height : 188,
        weight : 102
    };
    var lucy = {
        name : "Lucía",
        dob : new Date(1955, 7, 7),
        height : 155,
        weight : 61
    };
    var peter = {
        name : "Peter",
        dob : new Date(1988, 2, 9),
        height : 165,
        weight : 99
    };
    var luke = {
        name : "Lucas",
        dob : new Date(1910, 11, 4),
        height : 172,
        weight : 75
    };
    let personas = [alice,bob,charly,lucy,peter,luke];
    //punto 1
    function IMC(array){
        return (array.weight) / (array.height / 100) ** 2;
    }
    function calcularIMC25(personas){
        let personas25 = [];
        for(let i=0; i<personas.length;i++){
            if(IMC(personas[i]) > 25) personas25.push(personas[i].name);
        }
        return personas25;
    }
    //punto 2
    let edades=[];
    function edad(array){
        // MI MANERA return 2021 - array.dob.getFullYear();
        const msegAño = 1000 * 60 * 60 * 24 * 365
        let actual = new Date()
        actual = Date.UTC(actual.getFullYear(), actual.getMonth(), actual.getDate())
        let aux1=Date.UTC(array.dob.getFullYear(), array.dob.getMonth(), array.dob.getDate());
        return Math.floor((actual - aux1)/ msegAño);
    }
    function calcularEdades(personas){
        let edades=[];
        for(let i=0; i<personas.length;i++){
            edades[personas[i].name]=edad(personas[i]);
        }
        return edades;
    }
    //punto 3
    function mayoresA40(personas){
        let mayores40=[];
        for(let i=0; i<personas.length;i++){
            if(edad(personas[i]) > 40) mayores40.push(IMC(personas[i]));
        }
        return mayores40;
    }
    
    //punto 4
    function promedioEdades(personas){
        let prom=0;
        for(let i=0; i<personas.length;i++){
            prom = prom + IMC(personas[i]);
        }
        return prom / personas.length;
    }

    //punto 5
    function masJoven(personas) {
        let edades = [];
        let menor = {};
        let min = 99999;
        for (let i = 0; i < personas.length; i++) {
            if (edad(personas[i]) < min) {
                min = edad(personas[i])
                menor = personas[i]
            }
        }
        return menor;
    }

    //punto 6
    function ordenarEstatura(personas){
        let estaturas=[];
        estaturas=personas;
        estaturas.sort((a,b) => a.height - b.height);
        return estaturas;
    }

    console.log(calcularIMC25(personas)); //punto 1
    console.log(calcularEdades(personas)); //punto 2
    console.log(mayoresA40(personas)); //punyo 3
    console.log(promedioEdades(personas)); //punto 4
    console.log(masJoven(personas)); //punto 5
    console.log(ordenarEstatura(personas));
}

function showMessage(message){
        alert(message);
}

//ejercicio 15
function enviar(){
    console.log(document.getElementById('texto').value);
}
function enviar2(){
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    input2.value = input1.value;
}

//ejercicio 16
function sumar(){
    let aux1 = parseInt(document.getElementById('num1').value)
    let aux2 = parseInt(document.getElementById('num2').value)
    let aux3 = aux1 + aux2

    document.getElementById('resul').value = aux3
}

//ejercicio 17
function restar(){
    let aux1 = parseInt(document.getElementById('num1').value)
    let aux2 = parseInt(document.getElementById('num2').value)
    let aux3 = aux1 - aux2

    document.getElementById('resul').value = aux3
}
function multiplicar(){
    let aux1 = parseInt(document.getElementById('num1').value)
    let aux2 = parseInt(document.getElementById('num2').value)
    let aux3 = aux1 * aux2

    document.getElementById('resul').value = aux3
}
function dividir(){
    let aux1 = parseInt(document.getElementById('num1').value)
    let aux2 = parseInt(document.getElementById('num2').value)
    let aux3 = aux1 / aux2;

    document.getElementById('resul').value = aux3
}

//ejercicio 18
function cambiarColor(id,color){
    id.style.backgroundColor=color;
    }
