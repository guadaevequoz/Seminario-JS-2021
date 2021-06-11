const express = require('express');
const app = express();
const PORT = 3000;
let fs = require('fs');
const usuarios = JSON.parse(fs.readFileSync('usuarios.json','utf-8'));
const personas = JSON.parse(fs.readFileSync('people.json','utf-8'));


app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('A');
});

app.post('/login', (req, res) => {
    const username = req.body.username;
	const password = req.body.password;
    let encontre = false; 
    let i=0, pos=0;
    while(i<usuarios.length && !encontre){
        if (usuarios[i].username == username && usuarios[i].password == password){
            console.log(usuarios[i].username);
            console.log(username);
            encontre= true;
            pos=i;
        }
        i++;
    }
    if (encontre){
        res.redirect('/login/exito');
    }else{
        res.redirect('/');
    }
});

app.get('/login/exito', (req, res) => {
    res.send('Ha ingresado con exito.');
});

//punto 6
app.get('/names', (req, res) => {
    let username = req.query.username;
    let usuario = usuarios.filter(usuario => usuario.username == username);
    res.json(usuario[0].name);
    /*respuestas del punto 6:
    1) el metodo que se recibe es get. 
    2) con express una respuesta forma json se devuelve con res.json
    3) devuelve undefined
    4) devuelve undefinded
    5) si pongo dos email se rompe. */
});

//punto 7
//funciones 
function IMC(array){
    return (array.weight) / (array.height / 100) ** 2;
}
function edad(array){
    let personaDate = new Date(array.dob);
    const msegAño = 1000 * 60 * 60 * 24 * 365
    let actual = new Date()
    actual = Date.UTC(actual.getFullYear(), actual.getMonth(), actual.getDate())
    let aux1=Date.UTC(personaDate.getFullYear(), personaDate.getMonth(), personaDate.getDate());
    return Math.floor((actual - aux1)/ msegAño);
}
//1
app.get('/overweight_people', (req,res) => {
    //devuelve en formato JSON un arreglo con los nombres de las personas con un IMC mayor a 25.
   
    function calcularIMC25(personas){
        let personas25 = [];
        for(let i=0; i<personas.length;i++){
            if(IMC(personas[i]) > 25) personas25.push(personas[i].name);
        }
        return personas25;
    }
    res.json({overweight: calcularIMC25(personas)});
});

//2
app.get('/people_by_age', (req,res) => {
    function calcularEdades(personas){
        let edades={};
        for(let i=0; i<personas.length;i++){
            edades[personas[i].name]=edad(personas[i]);
        }
        return edades;
    }
    res.json({edades: calcularEdades(personas)}); //Fix this later
});

//3
app.get('/imc_over_40', (req,res) => {
    function mayoresA40(personas){
        let mayores40=[];
        for(let i=0; i<personas.length;i++){
            if(edad(personas[i]) > 40) mayores40.push(IMC(personas[i]));
        }
        return mayores40;
    }
    res.json({avg: mayoresA40(personas)});
});

//4
app.get('/average_imc', (req,res) => {
    function promedioPersonas(personas){
        let prom=0;
        for(let i=0; i<personas.length;i++){
            prom = prom + IMC(personas[i]);
        }
        return prom / personas.length;
    }
    res.json({prom: promedioPersonas(personas)});
});

//5
app.get('/youngest', (req,res) => {
    let menor = {};
    let min = 99999;
    for (let i = 0; i < personas.length; i++) {
        if (edad(personas[i]) < min) {
            min = edad(personas[i])
            menor = personas[i]
        }
    }
    res.json({youngest: menor});
});

//6
app.get('/people_by_height', (req,res) => {
    function ordenarEstatura(personas){
        let estaturas=[];
        estaturas=personas;
        estaturas.sort((a,b) => a.height - b.height);
        return estaturas;
    }
    res.json({estaturas: ordenarEstatura(personas)})
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));