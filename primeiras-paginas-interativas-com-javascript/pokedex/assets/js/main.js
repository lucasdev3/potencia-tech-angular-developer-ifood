const offset = 0;
const limit = 50;

const url2 = `https://pokeapi.co/api/v2/pokemon/1`;


const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


async function fetchPokemonApiModel(url) {
    try {
        const response = await fetch(url);
        const pokemonList = await response.json();
        const pokemonApiModel = new PokemonApiModel(pokemonList.count, pokemonList.next, pokemonList.previous, pokemonList.results);
        return pokemonApiModel;
    } catch (error) {
        console.log(error);
    }
}

async function fetchPokemonApiDetailsModel(url) {
    try {
        const response = await fetch(url);
        const pokemonDetailsList = await response.json();
        // const pokemonApiModel = new PokemonApiModel(pokemonList.count, pokemonList.next, pokemonList.previous, pokemonList.results);
        return pokemonDetailsList;
    } catch (error) {
        console.log(error);
    }
}


(async () => {
    // Espera pela resolução da promise e recebe o objeto JSON resultante
    const pokemonList = await fetchPokemonApiModel(url);
    console.log(pokemonList);
    let vetor = [];
    const pokemonsContent = document.getElementById('pokemonsContent');
    if (pokemonList.results.length > 0) {
        pokemonsContent.innerHTML = '';
    }
    for (pokemon of pokemonList.results) {
        let data = await fetchPokemonApiDetailsModel(pokemon.url);
        vetor.push(data);
        pokemonsContent.innerHTML += generatePokemon(data.id, data.name, data.types);
    }
    console.log("vetor data:")
    console.log(vetor);

})();



// console.log(getListPokemons);





