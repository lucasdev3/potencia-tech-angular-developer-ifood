class PaginacaoModel {
    offSet;
    limit;
    count;
    next;
    previous;
    results;

    constructor (offSet = 0, limit = 10, count = 0, next = '', previous = '', results = []) {
        this.offSet = offSet;
        this.limit = limit;
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }

}
