class Persona{
    static contadorObjetosPersona = 0;

    constructor(nombre , apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona;

        
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase padre (Object)
    toString(){
        //se aplica poliformismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('saludos desde metodo static');
        
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
        
    }
}






class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super (nombre, apellido); //llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    
    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}


let persona1 = new Persona('Juan','Perez');
let persona2 = new Persona ('Karla Juarez' )

persona1.nombre = 'Juan Carlos'; // set nombre('Juan Carlos')
console.log(persona1.toString()); // get nombre 


let empleado1 = new Empleado('Maria','Jimenez','Sistemas');

console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

// persona1.saludar(); no es posible llamar un metodo static desde un objeto

Persona.saludar();

Persona.saludar2(persona1); // se llaman desde la clase


Empleado.saludar();
Empleado.saludar2(empleado1); 

persona1.contadorObjetosPersona;

console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);


console.log(Empleado.contadorObjetosPersona);//clases hijas tambien heredan atributos static


//CLase 86 atributos static vs no static in js

