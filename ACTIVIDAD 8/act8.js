function esPalindromo(cadena) {
    var palindromo = cadena.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");

    var invertida = palindromo.split('').reverse().join('');
    return palindromo === invertida;
}
var frase = "Somos o no somos";
if (esPalindromo(frase)) {
    document.write(`La frase es un palindromo :)`)
} else {
    document.write(`La frase no es un palindromo :(`)
}