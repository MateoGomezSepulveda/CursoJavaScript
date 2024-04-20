import { contenedor, selector } from "../selectores.js";
import { agregarCarrito, getCategoria, selectCategoria,  } from "../funciones.js";

class App{
    constructor(){
        this.initApp();
    }
    initApp(){
        selectCategoria();
        selector.addEventListener('input', getCategoria)
        contenedor.addEventListener('click', agregarCarrito)
    }
}

export default App;