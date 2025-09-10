
class Persona{
    nombre:string;
    edad:number;
    
    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }

    imprimir(){
    console.log(`${this.nombre},${this.nombre}`);
}
} 

let persona:Persona;
persona = new Persona("Tomy",45)
persona.imprimir();