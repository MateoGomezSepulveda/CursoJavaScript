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


