//object literal
/*function definirObjetoUsuario(nombre){
 return {
 nombre:nombre,
 saludar:function(){
 return "Hola"+this.nombre;
 },
 twitteo:function(tweet){
 return this.nombre+" twitteo sobre: "+tweet;
 },
 }
 }
 */

let nuevaFuncion = (nombre,apellido)=>{
    let usuario1={
        nombre:nombre,
        apellido


    };
    console.log("hola" +usuario1.nombre+ usuario1.apellido);
    // alert(usuario1.nombre);
    let usuario2={
        nombre
    };
    console.log(usuario2.nombre);
}

nuevaFuncion("Ging","Freacks")