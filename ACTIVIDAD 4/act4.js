var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let dni = parseInt(prompt("Numero del DNI"));

if (dni <= 0 || dni > 99999999) {
    document.write("El numero proporcionado no es valido")
}
else {
    let resto = dni % 23
    let letra = letras[resto]
    document.write(letra)
}