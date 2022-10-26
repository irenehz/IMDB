import { Movie } from "./movie";
const fs = require("fs")


export class Imdb


{
    public peliculas : Movie[]

    constructor(peliculas : Movie[])
    {
        this.peliculas = peliculas
    }

    escribirEnFicheroJSON(nombreFichero: string)
    {
        fs.writeFileSync(nombreFichero, JSON.stringify(this))
        
    }

    obtenerInstanciaIMDB(nombreFichero:string):Imdb
    {
        let datos = fs.readFileSync(nombreFichero)
        let imdb : Imdb = new Imdb(JSON.parse(datos))
            return imdb
    }

    
}
