import { personas } from './db/db.js';

let intentosFallidos = 0;

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un email válido.");
        return;
    }

    const persona = personas.find(persona => persona.email === email && persona.password === password);
    
    if (persona) {
        intentosFallidos = 0; // Reiniciar contador
        alert("Inicio de sesión exitoso");
        window.location.href = "http://127.0.0.1:5501/consumirApiJvaScript/index.html"; // Redirigir a otra página
    } else {
        intentosFallidos++;
        if (intentosFallidos >= 3) {
            alert("Demasiados intentos fallidos. Por favor, inténtalo de nuevo más tarde.");
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    }
});
