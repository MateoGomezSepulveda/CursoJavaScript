console.log(campers);




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


