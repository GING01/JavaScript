/**
 * Created by and_a on 03/05/2017.
 */

var andres={
    nombre:"Andres",
    apellido:"Paredes",
    fechaNacimiento: new Date(),
    imprimir:function(){
        console.log(this.nombre,this.apellido)
    },
    año:function () {
        return this.fechaNacimiento.getFullYear();

    },
    diferenciaEdad: function (edadAcomprar) {
        return Math.abs( this.fechaNacimiento.getFullYear()-edadAcomprar);
    }
}
andres.imprimir();
console.log(andres.año());
console.log(andres.diferenciaEdad(1992));


