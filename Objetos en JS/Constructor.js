//Function constructor de objetos de tipo Persona
function Persona(nombre ,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}


let padre = new Persona('Juan','Perez','jperez@gmaill.com');
console.log(padre.nombreCompleto());

let madre = new Persona('Laura','Quintero','lquintero@gmail.com');
console.log(madre.nombreCompleto());


padre.nombre = 'Carlos';

console.log(padre);


//QUEDAMOS CLASE 72 CONSTRUCCION DE OBJETOS