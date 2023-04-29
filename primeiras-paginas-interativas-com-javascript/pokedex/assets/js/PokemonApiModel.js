class PokemonApiModel {
    count = 0;
    next = '';
    previous = '';
    results = [];

    constructor (count, next, previous, results) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }

}
