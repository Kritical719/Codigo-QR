let persona = {

    nombre: 'Juan', 
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
     }

}

persona.tel = '55443322';

console.log(persona);

delete persona.tel; //Borrar Propiedades 

console.log(persona);
