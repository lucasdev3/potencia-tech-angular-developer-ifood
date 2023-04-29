// Define a classe PokemonList e os métodos para lidar com a API
class PokemonList {
  constructor(url) {
    this.url = url;
    this.pokemons = [];
    this.next = null;
    this.previous = null;
  }

  async fetch(url) {
    const response = await fetch(url);
    const data = await response.json();
    this.next = data.next == null ? '' : data.next;
    this.previous = data.previous == null ? '' : data.previous;
    this.pokemons = await Promise.all(data.results.map((pokemon) => this.fetchDetails(pokemon.url)));
  }

  async fetchDetails(url) {
    const response = await fetch(url);
    const data = await response.json();
    return new Pokemon(data.id, data.name, data.types);
  }

  render() {
    // Define as constantes que são utilizadas no código
    const pokemonsContent = document.getElementById('pokemonsContent');
    pokemonsContent.innerHTML = this.pokemons.length > 0 ? '' : 'Nenhum resultado encontrado.';
    this.pokemons.forEach((pokemon) => pokemonsContent.innerHTML += pokemon.render());
  }
}