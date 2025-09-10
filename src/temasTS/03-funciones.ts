
function sumar(a: number, b: number):number{
    return a + b
}
console.log(sumar(23,45))

//tipo flecha,una funcion es un fragmento que regresa una parte espcifica

const sumarFlecha = (a: number, b: number): number => a +b
console.log(sumarFlecha(34,56))

//otro

function multiplicar(n1: number, n2?:number, base:number=2):number{
    return n1*base
}
console.log(multiplicar(5,10))
console.log(multiplicar(5,undefined,10))
console.log(multiplicar(5))

//
interface Mascotas{
    nombre:string,
    edad:number,
    tipo:string,
    mostrarEdad:()=>void
}

function crearMascotas(mascotas:Mascotas,x:number):void{
    mascotas.edad=x;
    console.log(mascotas)
    console.log(mascotas.mostrarEdad())
}

const mascota1:Mascotas={
    nombre:"luna",
    edad:3,
    tipo:"perro",
    mostrarEdad() {
        return  `La edad de ${this.nombre} es ${this.edad} años`
    }
}
crearMascotas(mascota1,2)


