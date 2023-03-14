//let autos = new Array('BMW','Mercedes Benz','Volvo');

const autos = ['BMW','Mercedes Benz','Volvo'];
//console.log(autos);

//console.log(autos [0]);

for(let i = 0; i < autos.length; i++){
    console.log(i+ ' : '+autos[i]);
    
}



autos[1] = 'MercedesBenz';
console.log(autos[1]);


autos.push('Audi'); //se agrega al arreglo en su ultima posicion
console.log(autos);


console.log(autos.length);

autos[autos.length] = 'Cadillaq';

console.log(autos);


autos[6]='Porshe';
console.log(autos);


console.log(typeof autos);

console.log(Array.isArray(autos));

console.log(autos instanceof Array);

