import { Pelicula } from "./PELICULA";
import { Genero } from "./GENERO";

let genero1: Genero = new Genero(1,["ACCION"]);
let genero2: Genero = new Genero(2,["TERRO"]);
let genero3: Genero = new Genero(3,["aventura"]);
let genero4: Genero = new Genero(4,["drama"]);


let pelicula1: Pelicula = new Pelicula("deadpool","Tim Miller",[genero1.getgenero()[0],genero4.getgenero()[0]],108,2016,7,);
let pelicula2: Pelicula = new Pelicula("avatar","James Cameron",[genero1.getgenero()[0],genero2.getgenero()[0]],162,2009,10);


pelicula1.imprimirDatos();
console.log(pelicula1.peliculaepica());
console.log(pelicula1.calcularvaloracion());
console.log("-----------------------");
pelicula2.imprimirDatos();
console.log(pelicula2.peliculaepica());
console.log(pelicula2.calcularvaloracion());

console.log("-----------------------");

if (pelicula1.esSimilar(pelicula2)) {
    console.log("Las películas son similares.");
} else {
    console.log("Las películas no son similares.");
}

