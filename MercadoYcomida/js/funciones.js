import { selector, contenedor, carritoCompras } from "./selectores.js";

// Llenar dinamicamente en el select de Categoria
export function selectCategoria(){
    const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    fetch(url)
        .then(resultado =>{
            console.log(resultado);
            return resultado.json();
        })
        .then(datos =>{
            listarCategoria(datos.meals)
        })
        .catch(error =>{
            console.log(error);
        })
}

function listarCategoria(datos){
    datos.forEach(dato => {
        const option = document.createElement('option')
        option.value = dato.strCategory
        option.textContent = dato.strCategory
        selector.appendChild(option)
    });
}

// Llenar dinamicamente los prodcutos por categoria

const parametros = {
    categoria: ""
}

export function getCategoria(e){
    parametros.categoria = e.target.value
    verCategoria();
}


function verCategoria(){
    const {categoria} = parametros
    console.log(categoria);
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
    fetch(url)
    .then(result =>{
        console.log(result);
        return result.json();
    })
    .then(datosComida =>{
        showComida(datosComida.meals)
    })
    .catch(error =>{
        console.log(error);
    })
}

function showComida(datosComida){
    limpiar();
    let html = '';
    datosComida.forEach((dato) =>{
        const {strMeal, strMealThumb, idMeal} = dato;
        html +=`
        <div class="card" style="width: 20rem;">
            <img src="${strMealThumb}" class="card-img-top" alt="..." id="imgcard">
            <div class="card-body">
              <h5 class="card-title">${strMeal}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <a href="#" class="btn btn-primary boton" id="${idMeal}" nombre="${strMeal}" imagen="${strMealThumb}"> Añadir al carrito </a>
          </div>
        `;
        contenedor.innerHTML = `${html}`
    }) 
}

function limpiar(){
    let m = document.querySelectorAll('.card');
    for(let n = 0; n < m.length; n++){
        m[n].remove();
    }
}

let arrayComida = [];
export function agregarCarrito(e){
    e.preventDefault();
    if (e.target.classList.contains('boton')) {
        const nombre = e.target.getAttribute('nombre')
        const imagen = e.target.getAttribute('imagen')
        const Id = e.target.getAttribute('id')
        let comida = {
            id: Id,
            nombre: nombre,
            imagen: imagen,
        }
        arrayComida=[...arrayComida, comida];
        console.log(arrayComida);
        injectarComida();
    }
}


function injectarComida(){
    let html =""
    arrayComida.forEach((array) =>{
        const {imagen, nombre, Id} = array
        html+=`
        <tr>
            <td><img src="${imagen}" alt="" style="width: 10rem;"></td>
            <td>${nombre}</td>
            <td>
                <a id="${Id}" class="btn btn-danger eliminar">X</a>            
            </td>
        </tr>
        `;
        carritoCompras.innerHTML =`${html}`
    })

}

