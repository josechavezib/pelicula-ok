export class Pelicula{
private nombre:string
private director:string
private genero:string[]
private duracion:number
private año:number
private calificacion:number

constructor (nombre:string, director:string, genero:string[], duracion:number, año:number, calificacion:number) {
    this.nombre=nombre
    this.director=director
    this.genero=genero
    this.duracion=duracion
    this.año=año
    this.calificacion=calificacion
}

public getNombre(){
    return this.nombre
}
public getDirector(){
    return this.director
}
public getGenero(){
    return this.genero
}
public getDuracion(){
    return this.duracion
}
public getAño(){
    return this.año
}
public getCalifiacion(){
    return this.calificacion
}

public setnombre(nombre:string){
    this.nombre=nombre
}
public setdirector(director:string){
    this.director=director
}
public setgenero(genero:string[]){
    this.genero=genero
}
public setduracion(duracion:number){
    this.duracion=duracion
}
public setaño(año:number){
    this.año=año
}
public setcalificacion(calificacion:number){
    this.calificacion=calificacion
}


imprimirDatos(): void {
    console.log(`nombre: ${this.nombre}`);
    console.log(`director: ${this.director}`);
    console.log(`genero: ${this.genero}`);
    console.log(`duracion: ${this.duracion}`);
    console.log(`año: ${this.año}`);
    console.log(`calificacion: ${this.calificacion}`);
}


peliculaepica():boolean{
    if (this.duracion >= 180) {
        return true 
    } else {
        return false
    }   
}

calcularvaloracion():string {
    if (this.calificacion >=0 && this.calificacion <= 2){
        return "la calificacion es: " + this.calificacion + " muy mala";
    }
    else if (this.calificacion >=2 && this.calificacion <= 5){
            return "la calificacion es: " + this.calificacion + " mala";
    }
    else if (this.calificacion >=5 && this.calificacion <= 7){
            return "la calificacion es: " + this.calificacion + " regular";
    }
    else if (this.calificacion >=7 && this.calificacion <= 8){
        return "la calificacion es: " + this.calificacion + " buena";
    }
    else if (this.calificacion >=8 && this.calificacion <= 10){
        return "la calificacion es: " + this.calificacion + " exelente";
    }else{
        return "no es una valoracion"
    }  
}

// esSimilar(otraPelicula: Pelicula): boolean {
//     const generosIguales = (this.genero, otraPelicula.getGenero());
//     const mismaValoracion = this.calificacion === otraPelicula.getCalifiacion();
//     return generosIguales && mismaValoracion;
// }

esSimilar(otraPelicula: Pelicula): boolean {
    const generosIguales = this.compararArrays(this.genero, otraPelicula.getGenero());
     const mismaValoracion = this.calificacion === otraPelicula.getCalifiacion();
     return generosIguales || mismaValoracion;
}

private compararArrays(arr1: string[], arr2: string[]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

// essimilar():boolean{
//     if () {
        
//     } else {
//         return "no es valido"
//     }
// }



}















