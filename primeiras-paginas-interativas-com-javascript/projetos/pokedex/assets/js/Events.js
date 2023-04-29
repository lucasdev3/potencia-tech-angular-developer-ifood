// Cria uma instância de PokemonList e renderiza a primeira página de resultados
const pokemonList = new PokemonList('https://pokeapi.co/api/v2/pokemon');

// Define as funções para lidar com a paginação
async function nextPage() {
  if (pokemonList.next) {
    await pokemonList.fetch(pokemonList.next);
    pokemonList.render();
  } else {
    alert('Fim dos pokemons!');
  }
}

async function previousPage() {
  if (pokemonList.previous) {
    await pokemonList.fetch(pokemonList.previous);
    pokemonList.render();
  } else {
    alert('Você já está na primeira página!');
  }
}


