const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara'
}


//Paso Por Referencia
cambiarValorObjeto (persona);
console.log(persona);
