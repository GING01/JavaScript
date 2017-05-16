//For each
//Operadores
let arregloNumeros =[1,2,3,4,5,6];
let resultado = arregloNumeros.forEach((numero,indice)=>{
        console.log(indice,numero);
})

console.log('Resultado:', resultado)



function nuevoFE0(arreglo,funcion){
    for(let i=0; i<arreglo.length; i++){
        funcion(arreglo[i],i,arreglo)

    }
}
nuevoFE0(arregloNumeros,(valor,index)=>{
    console.log('Desde'+index, valor);
});
