/*
 en javascript se define una variable con la palabra reservada <var>
 */

//enteros
var dos = 2;
var tres = 3;
console.log(dos);
console.log(tres);
//float
var dosPuntoCinco = 2.5;
console.log(dosPuntoCinco);
var vf = true;
var falso = false;
var nombre = 'Ging';
var negativo = -4;
var fecha = new Date();
var cuatroString = '4';
cuatroString = 4;
cuatroString = false;

var variable;
console.log(variable);

var numero2= 2;
console.log(typeof variable);

var ging = {
    id:1,
    nombre:'Ging',
    createdAt: new Date(),
    updatedAt: new Date(),
    casado: true,
    prestamos: false,
    hijos: null,
    altura: 1.78,
    negativo: -1,
    mascota:{nombre:'perro',
    fechanac:new Date()
    }

};
console.log("hola",ging);
console.log(ging.altura);
ging.altura=1.48;
console.log(ging.altura);
delete ging.altura;
console.log(ging);
console.log(ging.mascota.fechanac);
ging.juegos='varios'
console.log('hola',ging);

var arreglo = [
    1,
    'adr',
    2.4,
    false,
    null,
    {
        a:'b'
    }
]
console.log(arreglo);

var nuevoObjeto ={
    papas:['chola','chaucha'],
    cebollas:['perla','blanca']
}
var matriz = [[0,1],[2,3]];
console.log(matriz[0][0]);


var ArregloDeObjetos =[
    {
        id:1,
        nombre: 'Adrian'

    },
    {
        id:2,
        nombre:'felipe'
    }
] ;

ArregloDeObjetos.splice(0,1);
console.log(ArregloDeObjetos);
ArregloDeObjetos.splice(0,0,{id:3,nombre:'Ging'});
console.log(ArregloDeObjetos);
