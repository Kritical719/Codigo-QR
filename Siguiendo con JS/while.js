
let contador = 0;


while (contador < 3) {
    console.log(contador);
    contador++;
}
console.log("Fin Ciclo While");  //Fin de ciclo



do {
    console.log(contador);
    contador++;
} while (contador < 3);
console.log("Fin de Ciclo While");


for (let contador = 0; contador < 3; contador++) {
    console.log(contador);
}
console.log("Fin de Ciclo For");



for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 == 0) {  //imprime los pares si esque el total residual es igual a 0
        console.log(contador);
        break;
    }
}
console.log("fin del ciclo for ");


for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 !== 0) {
        continue; //Ir a la siguiente iteracion
    }
    console.log(contador);
}

