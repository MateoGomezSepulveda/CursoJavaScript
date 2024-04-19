console.log(campers);


// Selectores

const nombreCamper = document.querySelector('#nombre');
const edadCamper = document.querySelector('#edad');
const minPromedioCamper = document.querySelector('#minimo');
const maxPromedioCamper = document.querySelector('#maximo');
const nivelCampusCamper = document.querySelector('#nivelCampus');
const nivelInglesCamper = document.querySelector('#nivelIngles')
const especialidadCamper = document.querySelector('#especialidad')
const expertoTecnologiaCamper = document.querySelector('#expertoTecnologia')
let search = document.querySelector('#search')

// Inyectamos de forma dinamica los nombres y las edades

campers.forEach((optionCamper)=>{
    const opcion = document.createElement('option');
    opcion.value = optionCamper.nombre;
    opcion.textContent = optionCamper.nombre;
    document.querySelector('#nombre').appendChild(opcion)
})

const max = 45
const min = max - 30

for(let i = min; i < max; i++){
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    document.querySelector('#edad').appendChild(option)
}


// Objeto con parametros o criterios para busqueda

const parametros = {
    nombre: "",
    edad: "",
    minPromedio: "",
    maxPromedio: "",
    nivelCampus: "",
    nivelIngles: "",
    especialidad: "",
    expertoTecnologia: "",
    search: ""
}


// EventListener

document.addEventListener('DOMContentLoaded', ()=>{
    showCampers(campers);
    console.log(parametros);
    selectCamper();
})

function showCampers(campers){
    const contenedorTarjetas = document.querySelector('#tarjetas')
    limpiar()
    campers.forEach((camper) =>{
        // Destructurar
        const {imagen, nombre, promedio,especialidad, expertoTecnologia, detalle, id} = camper
        const camperHTML = document.createElement('p');
        camperHTML.innerHTML = `
        <div class="card" style="width: 20rem;">
            <img src="img/${imagen}" class="card-img-top" alt="..." id="imgcard">
            <div class="card-body">
              <h5 class="card-title">${nombre}</h5>
              <p class="card-text">${detalle}</p>
            </div>
            <ul class="list-group list-group-flush">
              <a href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" imagen="${imagen}" promedio="${promedio}" especialidad="${especialidad}" expertoTec="${expertoTecnologia}"> Details </a>
              <a href="#" class="btn btn-primary boton" id="${id}"> Job Card </a>
          </div>
        `;
        contenedorTarjetas.appendChild(camperHTML);
    })
}


// EventListener de los filtros

nombreCamper.addEventListener('input', (e)=>{
    parametros.nombre = e.target.value
    filtrarCamper();
});

edadCamper.addEventListener('input', e =>{
    parametros.edad = Number(e.target.value)
    filtrarCamper();
});

minPromedioCamper.addEventListener('input', (e)=>{
    parametros.minPromedio = e.target.value
    filtrarCamper();
});

maxPromedioCamper.addEventListener('input', (e)=>{
    parametros.maxPromedio = e.target.value
    filtrarCamper();
});

nivelCampusCamper.addEventListener('input', (e)=>{
    parametros.nivelCampus = e.target.value
    filtrarCamper();
});

nivelInglesCamper.addEventListener('input', (e)=>{
    parametros.nivelIngles = e.target.value
    filtrarCamper();
});

especialidadCamper.addEventListener('input', (e)=>{
    parametros.especialidad = e.target.value
    filtrarCamper();
});

expertoTecnologiaCamper.addEventListener('input', (e)=>{
    parametros.expertoTecnologia = e.target.value
    filtrarCamper();
});

search.addEventListener('input', e =>{
    parametros.search = e.target.value
    filtrarCamper();
})



// Declaracion de funcion
function filtrarCamper (){
    const resultado = campers
    .filter(filtrarNombre)
    .filter(filtrarEdad)
    .filter(filtrarMinPromedio)
    .filter(filtrarMaxPromedio)
    .filter(filtrarNivelCampus)
    .filter(filtrarNivelIngles)
    .filter(filtrarEspecialidad)
    .filter(filtrarExpertoTecnologia)
    .filter(filtrarSearch)
    console.log(resultado);
    if (resultado.length) {
        showCampers(resultado)
    }else{
        notResult();
    }
    
}

function notResult(){
    limpiar();
    const notResult = document.createElement("p");
    notResult.classList.add("alert")
    notResult.appendChild(document.createTextNode("Result Not Found"))
    document.querySelector("#tarjetas").appendChild(notResult)
}

function filtrarNombre (camper){
    if (parametros.nombre){
        return camper.nombre === parametros.nombre
    }
    return camper
}

function filtrarEdad (camper){
    if (parametros.edad){
        return camper.edad === parametros.edad
    }
    return camper
}

function filtrarMinPromedio (camper){
    if (parametros.minPromedio){
        return camper.promedio >= parametros.minPromedio
    }
    return camper
}

function filtrarMaxPromedio (camper){
    if (parametros.maxPromedio){
        return camper.promedio >= parametros.maxPromedio
    }
    return camper
}

function filtrarNivelCampus (camper){
    if (parametros.nivelCampus){
        return camper.nivelCampus === parametros.nivelCampus
    }
    return camper
}

function filtrarNivelIngles (camper){
    if (parametros.nivelIngles){
        return camper.nivelIngles === parametros.nivelIngles
    }
    return camper
}

function filtrarEspecialidad (camper){
    if (parametros.especialidad){
        return camper.especialidad === parametros.especialidad
    }
    return camper
}

function filtrarExpertoTecnologia (camper){
    if (parametros.expertoTecnologia){
        return camper.expertoTecnologia === parametros.expertoTecnologia
    }
    return camper
}

function filtrarSearch(camper){
    if(parametros.search){
        return camper.nombre === parametros.search
    }
    return camper
}


function limpiar(){
    let m=document.querySelectorAll('p')
    for(let a=0; a<m.length; a++){
        m[a].remove()
    }
}   

const tbody = document.querySelector("tbody")
const rowModal = document.createElement("tr")


function selectCamper(){
    const camperDetails = document.querySelector("#tarjetas")
    camperDetails.addEventListener('click', loadDetail);
}

function loadDetail(e){
    const imagen = e.target.getAttribute("imagen");
    const promedio = e.target.getAttribute("promedio")
    const especialidad = e.target.getAttribute("especialidad")
    const expertoTec = e.target.getAttribute("expertoTec")
    if(promedio >= 4.5){
        var color = "gray";
        var reporte = "Si , esta apto para firmar contrato remoto "
    } else {
        var color = "red";
        var reporte = "No ,aun no esta apto para firmar contrato remoto "
    }
    rowModal.innerHTML = `
    <td>
        <img src= "img/${imagen}"  width = "150px">
    </td>
    <td>
        Obtuvo un promedio de : ${promedio}
        ${reporte}
    </td>
    <td>
        ${especialidad}
    </td>
    <td>
        ${expertoTec}
    </td>            
    `;
    tbody.appendChild(rowModal)
}


// ------------------------------job Card  - hiring Campers----------------------------



const cards = document.querySelector("#tarjetas")
let arrayCards = [];
const tbodie = document.querySelector("#tbodie")
const deleteListCards = document.querySelector("#deleteListCards");
const cleanCart = document.querySelector("#cleanCart")
// listeners

cards.addEventListener('click', selectCards)
deleteListCards.addEventListener('click', deleteCards);
cleanCart.addEventListener('click', trashCart)

function selectCards(e){
    e.preventDefault();
    if(e.target.classList.contains("boton")){
        const clickedCamper = e.target.parentElement.parentElement;
        console.log(clickedCamper);
        detail(clickedCamper)
    }   
}

function detail(clickedCamper){
    const camperDetail = {
        imagen: clickedCamper.querySelector("img").src,
        nombre: clickedCamper.querySelector("h5").textContent,
        detalle: clickedCamper.querySelector("p").textContent,
        id: clickedCamper.querySelector(".boton").getAttribute("id")
    }
    arrayCards = [...arrayCards, camperDetail]
    console.log(arrayCards);
    injectingCampersHtml();
}

function deleteCards(e){
    if(e.target.classList.contains("deleteCard")){
        const cardtoDelete = e.target.getAttribute("id");
        console.log(cardtoDelete);
        arrayCards = arrayCards.filter((cd)=> cd.id !== cardtoDelete);
        injectingCampersHtml();
    }
}

function injectingCampersHtml(){
    clearHtml();
    arrayCards.forEach((arrayCard)=>{
        const {imagen, nombre, detalle, id} = arrayCard
        const row = document.createElement("tr")
        row.innerHTML = `
        <td>
            <img src="${imagen}" width="160px">
        </td>
        <td>
            ${nombre}
        </td>
        <td>
            ${detalle}
        </td>
        <td>
            <a href="#" class="deleteCard btn btn-danger" id="${id}">X</a>
        </td>
        `;
        tbodie.appendChild(row)
        // LOCAL STORAGE
        addStorage();
    })
}

function addStorage(){
    localStorage.setItem('jobCart', JSON.stringify(a))
}

function trashCart(){
    arrayCards = [];
    clearHtml();
}

function clearHtml(){
    tbodie.innerHTML = "";
}