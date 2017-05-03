function holamundo() {
    console.log('holamundo');
};
holamundo();

function doble(numero) {
    return numero*2;
}
console.log(doble(3));
function multiplicar(a,b) {
    return a*b;

}
console.log(multiplicar(4,3));
var dos = multiplicar(1,2);
var mult=multiplicar;
console.log(mult(4,6));

var hola = function () {
    console.log('hola')
};
hola();
console.log(hola());

console.log('hola', hola);

function hazalgo(algo) {
    algo()

};
hazalgo(function () {console.log('hola00')});
hazalgo(function () {return 2});
function transformarNumero(numero,transformacion) {
    transformacion(numero);
}

transformarNumero(5,function (numero) {
    return numero*2;

})

transformarNumero(8,function (numero) {
    return numero/2;

})