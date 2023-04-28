const numero = 10;

const numeroPar = (numero % 2) === 0;
const numeroDivisivelPor5 = (numero % 5) === 0;

if(numero !== 0) {
    if (numeroPar) {
        console.log('Numero par');
    } else {
        console.log('Numero impar');
    }
    
    if (numeroDivisivelPor5) {
        console.log('Numero divisivel por 5');
    } else {
        console.log('Numero não é divisivel por 5');
    }
}else {
    console.log('Numero invalido')
}


