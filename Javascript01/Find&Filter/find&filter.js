// find y filter

let arreglo = [8,9,4,6,7,2,9];
let resultado = arreglo.map((valor,indice)=>{
        return valor/5;
})
.filter((valor)=>{
    return valor<=1;
})
.find((valor)=>{
    return valor ==1.2;
});

console.log(resultado);

