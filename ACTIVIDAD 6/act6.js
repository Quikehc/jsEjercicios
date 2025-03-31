function paroimpar(numero) {
    if (numero % 2 === 0) {
        document.write(`El numero ${numero} es par`);
    } else {
        document.write(`El numero ${numero} es impar`);
    }
}
let numero = parseInt(prompt("Introduce un numero entero: "));
paroimpar(numero);