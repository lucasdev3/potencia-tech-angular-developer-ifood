/* 


1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;


*/

class Carro {
    marca = '';
    cor = '';
    kmPorLitro = 0;

    constructor(marca, cor, kmPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro
    }

    getGastoTotal(distancia = 0,  precoCombustivel = 0) {
        return (distancia / this.kmPorLitro) * precoCombustivel;
    }

    descrever() {
        console.log(`Marca: ${this.marca} | Cor: ${this.cor} | KM/L: ${this.kmPorLitro}`);
    }

}

class Pessoa {
    nome = '';
    peso = 0;
    altura = 0;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }

    getImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    descrever() {
        console.log(`Nome: ${this.nome} | Peso: ${this.peso} | Altura: ${this.altura} | IMC: ${this.getImc().toFixed(2)}`);  
    }

}

const pessoa = new Pessoa('Lucas', 85, 1.87);
const carro = new Carro('Camaro', 'Amarelo', 10);

console.

pessoa.descrever();

console.log(`Gasto total: R$${carro.getGastoTotal(100, 5.89).toFixed(2)}`)  
