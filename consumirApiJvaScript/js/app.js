fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
.then(response => response.json())
.then(pokemon => {
    console.log(pokemon);
    console.log(pokemon.results);

    pokemon.results.forEach(poke => {
        fetch(poke.url)
        .then(response => response.json())  
        .then(details => {
            createPokemonCard(details);
        })
        .catch(error => {
            console.error('Error al obtener los detalles del Pokémon:', error);
          });
    })

})
.catch(error => {
    console.error('Error al obtener los Pokémon:', error);
});

function createPokemonCard(pokemon) {
    const pokemonResult = document.querySelector('#pokemon-list');
  
    // Crear el div contenedor de la card
    const card = document.createElement('div');
    card.classList.add('pokemon-card');
  
    // Nombre del Pokémon
    const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemon.name;
  
    // Imagen del Pokémon
    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.sprites.front_default;
  
    // Añadir el nombre y la imagen a la card
    card.appendChild(pokemonName);
    card.appendChild(pokemonImage);
  
    // Añadir la card al contenedor principal
    pokemonResult.appendChild(card);
}




