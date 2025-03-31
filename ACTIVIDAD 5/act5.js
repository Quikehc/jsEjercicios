var numero = parseInt(prompt("Introduzco un numero entero para calcular su factorial"))
var factorial = 1;

if(numero < 0){
    document.write("No se puede calcular el factorial de un numero negativo")
} else {
    for(var i = 1; i <= numero; i++){
        factorial *= i;
    }
    document.writeln(`El factoria del (${numero}) es (${factorial})`)
    
}