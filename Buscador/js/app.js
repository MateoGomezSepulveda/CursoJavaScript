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
    expertoTecnologia: ""
}


// EventListener

document.addEventListener('DOMContentLoaded', ()=>{
    showCampers(campers);
    console.log(parametros);
})

function showCampers(campers){
    const contenedorTarjetas = document.querySelector('#tarjetas')
    limpiar()
    campers.forEach((camper) =>{
        const camperHTML = document.createElement('p');
        camperHTML.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="img/${camper.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${camper.nombre}</h5>
              <p class="card-text">${camper.detalle}</p>
            </div>
            <ul class="list-group list-group-flush">
              <a href="#" class="btn btn-danger"> Details </a>
            </ul>
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
    console.log(resultado);
    showCampers(resultado)
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

function limpiar(){
    let m=document.querySelectorAll('.card')
    for(let a=0; a<m.length; a++){
        m[a].remove()
    }
}



