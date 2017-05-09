//fat arrow functions
var holaMundo = function(){
    console.log("holamundo")
}
holaMundo()

var holaMundo2= ()=>{return "hola mundo 2"}
holaMundo2()

var holaMundo3= ()=>"hola mundo 3"
holaMundo3()

var holaMundo4 =(nombre)=> `hola: ${nombre}`
holaMundo4('Ging')

var holaMundo5 = (apellido)=> `hola: ${apellido}`
holaMundo5('Freacks')

var holaMundo6 =
    (nombre,apellido)=>`Sr. ${apellido} ${nombre}`
holaMundo6('Gon', 'Freacks')