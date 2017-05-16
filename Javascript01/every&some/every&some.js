// some & every

let arreglo = [8,9,4,6,7,2,9];
let resultado = arreglo.map((valor,indice)=>{
        return valor/5;
})
.every((valor)=>{
    return valor>0.3;

})


console.log(resultado);

