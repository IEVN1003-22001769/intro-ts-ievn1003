
import { type Producto, calcularISV2 } from "./05-desestructura-funciones";

const carrito:Producto[]=[
    {  nombre:"Iphone 14", precio:1500 },
    {  nombre:"Ipod 45", precio:1800 },
    {  nombre:"Mackbuck", precio:3500 }
];

const [total, isv] = calcularISV2(carrito);
console.log("Total:", total);
console.log("ISV:", isv);

