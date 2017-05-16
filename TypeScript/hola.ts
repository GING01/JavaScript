let lets: boolean =false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
//
let str: string="color";

let str2: string='color';

let notas:number[]=[1,2,3,4]
let jal:Array<number>=[1,2,3]

let nombre:any="asd";
nombre=12;
let usuario: Usuariologin={
    nombre:"Ging",
    apellido:"Freacks"


}

interface Usuariologin {
    nombre:string,
    apellido:string,
    direccion?:string
}

class persona{
    nombre:string;
    apellido: string
    fechanac:Date;
    constructor(nombre?:string,
                apellido?:string,
                fechanac?:Date){


    }

   public imprimirPersona():Usuariologin{

        console.log(this.nombre,this.apellido,this.fechanac);
        return {
            nombre:this.nombre,
            apellido:this.apellido
        }

}
private  imprimirNombre (nombre:string, apellido?:string):void{
        if(apellido){
            console.log(nombre,apellido);
        }
        else{
            console.log(nombre);
        }
}

}
function  Sumar(numero1:number, numero2:number):number{
    return numero1+numero2;
}

var objeto={

    nombre:"andres",
    imprimirNombre:function(){
        return this.nombre;
    }
};

let andres:persona=new persona();
andres.nombre="andres";
andres.apellido="paredes";
andres.fechanac=new Date ("1992-07-29")
andres.imprimirPersona();