export class Genero {
    private id:number
    private genero:string[]

    constructor(id:number,genero:string[]) {
        this.id=id
        this.genero=genero
    }

public getid(){
    return this.id
}
public getgenero(){
    return this.genero
}

public setid(id:number){
    this.id=id
}
public setgenero(genero:string[]){
    this.genero=genero
}
}