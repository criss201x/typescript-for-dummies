// Crear interfaces
interface Auto{
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil( auto ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

let batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Guason{
  reir: boolean;
  comer?: boolean;//no obligatorias
  llorar?: boolean;//no obligatorias
}

let guason:Guason = {
  reir: false,
  comer:false, 
  llorar:false
}

function reir( guason:Guason ):void{
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface CiudadGoticaFun{
  (ciudadanos: string[]): number; //funcion retornable
}

let ciudadGotica: CiudadGoticaFun;
ciudadGotica = function (ciudadanos: string[]): number{
  return ciudadanos.length:
}


function ciudadGotica( ciudadanos:string[] ):number{
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Persona{
  nombre: string;
  edad: number;
  sexo: boolean;
  estadoCivil: string;
  imprimirBio(): void;
}


class PersonaClase implements Persona{
  nombre: string;
  edad: number;
  sexo: boolean;
  estadoCivil: string;
  imprimirBio() {
    console.log("descripcion");
  }

}


