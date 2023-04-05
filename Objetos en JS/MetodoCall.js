let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' +  this.nombre + ' ' + this.apellido + ', ' + tel ;
    }

}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Uso de call para usar el metodo persona1.nombreCompleto con los datos de persona2


persona1.nombreCompleto.call(persona2);// Al usar Call reemplaza nombre y apellido ↓
console.log(persona1.nombreCompleto.call(persona2,'Ing','5544332211')); 

