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
padre.tel = '55443322';
console.log(padre.tel);

console.log(padre.nombreCompleto());

let madre = new Persona('Laura','Quintero','lquintero@gmail.com');
console.log(madre.nombreCompleto());


padre.nombre = 'Carlos';

console.log(padre);


let miObjeto = new Obeject();
let miObjeto2 = {};


let miCadena1 = new String('Hola');
let miCadena2 = 'hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArray = new Array();
let miArray2 = [];

let miFuncion = new Function();
let miFuncion2 = function() {};