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



