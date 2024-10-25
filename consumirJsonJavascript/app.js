// Selecciona el contenedor donde vas a insertar los nombres
const container = document.querySelector(".main");
const addPersonButton = document.getElementById("addPersonButton");
const newPersonNameInput = document.getElementById("newPersonName");

// Ordena las personas por nombre
personas.sort((a, b) => a.nombre.localeCompare(b.nombre));

// Función para mostrar la lista de personas
function displayPersons() {
    // Limpiar el contenedor antes de agregar
    container.innerHTML = '';

    // Crea un elemento para cada persona y un botón para eliminar y editar
    personas.forEach(persona => {
        const nombreElement = document.createElement("div");
        nombreElement.classList.add("persona");

        const nombreTexto = document.createElement("h2");
        nombreTexto.textContent = persona.nombre;

        // Crear un botón de eliminar
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-button");

        // Agregar evento para eliminar la persona al hacer clic
        deleteButton.addEventListener("click", () => {
            const index = personas.indexOf(persona);
            if (index > -1) {
                personas.splice(index, 1); // Elimina la persona del array
            }
            displayPersons(); // Muestra la lista actualizada
        });

        // Crear un botón de editar
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.classList.add("edit-button");

        // Agregar evento para editar el nombre al hacer clic
        editButton.addEventListener("click", () => {
            const inputEdit = document.createElement("input");
            inputEdit.type = "text";
            inputEdit.value = persona.nombre;
            nombreElement.replaceChild(inputEdit, nombreTexto); // Reemplaza el nombre por el input

            const saveButton = document.createElement("button");
            saveButton.textContent = "Guardar";
            saveButton.classList.add("save-button");

            // Agregar evento para guardar el nuevo nombre
            saveButton.addEventListener("click", () => {
                const newName = inputEdit.value.trim(); // Obtener el nuevo nombre
                if (newName) {
                    persona.nombre = newName; // Actualiza el nombre en el objeto
                    displayPersons(); // Muestra la lista actualizada
                } else {
                    alert("Por favor, ingresa un nombre válido."); // Mensaje de advertencia
                }
            });

            // Reemplaza el botón de editar con el botón de guardar
            nombreElement.replaceChild(saveButton, editButton);
        });

        // Añadir el nombre, el botón de eliminar y el de editar al contenedor
        nombreElement.appendChild(nombreTexto);
        nombreElement.appendChild(deleteButton);
        nombreElement.appendChild(editButton);
        container.appendChild(nombreElement);
    });
}

// Función para agregar una nueva persona
function addPerson() {
    const newName = newPersonNameInput.value.trim(); // Obtiene el valor del input y lo limpia

    if (newName) {
        personas.push({ nombre: newName }); // Agrega la nueva persona al array
        newPersonNameInput.value = ''; // Limpia el input
        displayPersons(); // Muestra la lista actualizada
    } else {
        alert("Por favor, ingresa un nombre."); // Mensaje de advertencia si el input está vacío
    }
}

// Mostrar la lista inicial de personas
displayPersons();

// Evento para agregar una nueva persona al hacer clic en el botón
addPersonButton.addEventListener("click", addPerson);
