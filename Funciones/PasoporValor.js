let x = 10;

function cambiarValor(a) {
    a = 20;
}


//paso por valor
cambiarValor(x);//Asignando el valor de 10
console.log(x);

console.log(a); //Arriba al terminar la funcion de cambiar valor la variable a muere
