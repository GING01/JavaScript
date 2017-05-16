var lets = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//
var str = "color";
var str2 = 'color';
var notas = [1, 2, 3, 4];
var jal = [1, 2, 3];
var nombre = "asd";
nombre = 12;
var usuario = {
    nombre: "Ging",
    apellido: "Freacks"
};
var persona = (function () {
    function persona(nombre, apellido, fechanac) {
    }
    persona.prototype.imprimirPersona = function () {
        console.log(this.nombre, this.apellido, this.fechanac);
        return {
            nombre: this.nombre,
            apellido: this.apellido
        };
    };
    persona.prototype.imprimirNombre = function (nombre, apellido) {
        if (apellido) {
            console.log(nombre, apellido);
        }
        else {
            console.log(nombre);
        }
    };
    return persona;
}());
function Sumar(numero1, numero2) {
    return numero1 + numero2;
}
var objeto = {
    nombre: "andres",
    imprimirNombre: function () {
        return this.nombre;
    }
};
var andres = new persona();
andres.nombre = "andres";
andres.apellido = "paredes";
andres.fechanac = new Date("1992-07-29");
andres.imprimirPersona();
