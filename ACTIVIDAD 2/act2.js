var valores = [true, 5, false, "hola", "adios", 2];

function MayorTexto() {
    if (valores[3].length > valores[4].length) {
        console.log("hola es mayor que adios");
    } else {
        console.log("adios es mayor que hola");
    }
}
function MayorBoolean() {
    if (valores[3].length > valores[2].length) {
        console.log("true es mayor que false");
    } else {
        console.log("false es mayor que true");
    }
}
function OperacionesNumerales() {
    let valor1 = valores[1];
    let valor2 = valores[5];

    let Resultado1 = valor1 + valor2;
    let Resultado2 = valor1 - valor2;
    let Resultado3 = valor1 * valor2;
    let Resultado4 = valor1 / valor2;
    let Resultado5 = valor1 % valor2;

    console.log(Resultado1);
    console.log(Resultado2);
    console.log(Resultado3);
    console.log(Resultado4);
    console.log(Resultado5);
}