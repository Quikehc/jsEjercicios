function detectar(texto) {
    if (texto === texto.toLowerCase()) {
        document.write("El texto es miniscula")
    }
    else if (texto === texto.toUpperCase()) {
        document.write("El texto es mayuscula")
    }
    else {
        document.write("El texto esta combinado con mayusculas y minusculas")
    }
}

var texto = prompt("Ingresa un texto")
detectar(texto)