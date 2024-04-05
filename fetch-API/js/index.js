//Fetch API para consumir datos desde un txt...
// Fetch API Para consumir un JSON (OBJETO)

const loadJSONBtn = document.querySelector("#loadJSON");
loadJSONBtn.addEventListener('click', usarDatos);

function usarDatos(){
    const url = "data/camper.json";
    fetch(url)
        .then(respuesta =>{
            // console.log(respuesta);
            return respuesta.json();
        })
        .then(datos =>{
            showHTML(datos)
            console.log(datos);
        })
} 

function showHTML({id,Nombre,Edad,Ingles}){
    const contenido =  document.querySelector("#contenido");
    contenido.innerHTML = `
    <p>ID: ${id}</p>
    <p>NOMBRE: ${Nombre}</p>
    <p>EDAD: ${Edad}</p>
    <p>INGLES: ${Ingles}</p>
    `
}

// Consumir un Array
const loadJsonArray = document.querySelector("#loadJSONArray");
loadJsonArray.addEventListener('click', manejarDatos);

function manejarDatos(){
    fetch('data/tribus.json')
        .then(respuesta =>{
            // console.log(respuesta);
            return respuesta.json();
        })
        .then(resultado =>{
            mostrarHTML(resultado);
            console.log(resultado);
        })
}

function mostrarHTML(tribus){
    const container = document.querySelector("#contenido");
    let html = '';
    tribus.forEach(tribu => {
        const {IdTribu,NombreTribu,Lider,Puntos} = tribu;
        html += `
        <p>IdTribu: ${IdTribu}</p>
        <p>NombreTribu: ${NombreTribu}</p>
        <p>Lider: ${Lider}</p>
        <p>Puntos: ${Puntos}</p>
        `
    });

    container.innerHTML = html;
    
}

// Consumir una API Publica de INTERNET

const botonApi = document.querySelector('#loadAPI');
botonApi.addEventListener('click', apiFunction);

function apiFunction(){
    const url = "https://picsum.photos/v2/list";
    fetch(url)
        .then(respuesta =>{
            // console.log(respuesta);
            return respuesta.json();
        })
        .then(datos =>{
            mostrarAPI(datos)
            console.log(datos);
        })
}

function mostrarAPI(resultado){
    const container = document.querySelector("#contenido");
    let html = '';
    resultado.forEach(resultados => {
        const {download_url} = resultados;
        html += `
        <img src=${download_url}>
        `
    });

    container.innerHTML = html;
}
