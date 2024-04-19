// ordenar array de datos
campers.sort((a , b)=>{
    if (a.nombre < b.nombre){
        return  -1
    }
    if (a.nombre > b.nombre){
        return 1
    }
})

// 1. llenar dinammicamente el select con los nombres de los campers 

campers.forEach((camper) => {
    const option = document.createElement('option')
    option.value = camper.nombre
    option.textContent = camper.nombre
    document.querySelector('#camper').appendChild(option)
});

// selectores , selecionamos todos los elementos
const CamperInput = document.querySelector('#camper');
const PsicologaInput = document.querySelector('#psicologa');
const fechaInput = document.querySelector('fecha');
const horaInput = document.querySelector('#hora');
const resultadosInput = document.querySelector('#resultados');

// selectores para formulario y contenedor de entevistas
// 3.1 formulario 
const formulario = document.querySelector('#nueva-entrevista');

// Contenedor
const contenedorEntrevistas = document.querySelector('#entrevistas');

// 4 eventListeners
eventListener();

function eventListener(){
    CamperInput.addEventListener('change', datosEntevista)

}
// 6. Objeto  con propiedades que almacenaran los valores de los input del formulario
const entrevistaObjeto = {
    
}

// 5. colocar nuestras funciones

function datosEntevista(e){
    console.log(e.target.value);
}