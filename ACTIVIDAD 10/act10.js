var resultados = [];
for (let i = 0; i < 13; i++) {
    resultados[i] = 0;
}

for (let i = 0; i < 36000; i++) {
    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;
    var suma = dado1 + dado2;

    resultados[suma]++;
}

for (let i = 2; i <= 12; i++) {
    document.write(`Suma ${i}: ${resultados[i]} veces`);
}
