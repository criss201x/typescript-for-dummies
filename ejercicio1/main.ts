// Tipos
let batman = "Bruce";
let superman = "Clark";

let existe = false;

// Tuplas
let parejaHeroes:[string,string] = [batman,superman];
let villano:[string,number,boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Fuerza { 
  acuaman = 0,
  batman = 1,
  Flash = 5,
  superman = 100,  
};
let fuerzaFlash = Fuerza.Flash;
let fuerzaSuperman = Fuerza.superman;
let fuerzaBatman = Fuerza.batman;
let fuerzaAcuaman = Fuerza.acuaman;

// Retorno de funciones
function activar_batiseñal():string{//esta funcion retorna un string 
  return "activada";
}

function pedir_ayuda():void{//no retorna nada
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder:string = "100";
let largoDelPoder:number = poder.length;
console.log( largoDelPoder );


let poder2:string = "100";
let largo2DelPoder:number = poder.toString.length;
console.log( largoDelPoder );
