import { Imdb } from "./imdb";
import { Movie } from "./movie";
const fs = require("fs")
import { Professional } from "./profesional";

let actor1: Professional = new Professional("Robert de Niro", 79, 80, 178, false, "italoamericano", 2, "actor")
let actor2: Professional = new Professional("Al Pacino", 82, 72, 170, false, "estadounidense", 1, "actor")
let actor3: Professional = new Professional("Brad Pitt", 58, 78, 180, false, "estadounidense", 2, "actor")
let actor4: Professional = new Professional("Leonardo DiCaprio", 47, 85, 183, false, "estadounidense", 1, "actor")
let actor5: Professional = new Professional("Margot Robbie", 32, 57, 165, false, "australiana", 0, "actriz")
let director1: Professional = new Professional("Francis Ford Coppola", 83, 78, 182, true, "estadounidense", 5, "director")
let director2: Professional = new Professional("Quentin Tarantino", 59, 96, 188, false, "estadounidense", 2, "director")




let m : Movie = new Movie("El padrino I",1972,"Estadounidense","Crimen/Drama");
let m2 : Movie = new Movie("El padrino II",1974,"Estadounidense","Crimen/Drama");
let m3 : Movie = new Movie("El padrino III",1990,"Estadounidense","Crimen/Drama");
let m4 : Movie = new Movie("Shutter Island",2010,"Estadounidense","Drama/Suspense/Thriller");
let m5 : Movie = new Movie("Erase una vez en Hollywood",2019,"Estadounidense","Drama/Comedia");

m.actors = [actor1, actor2]
m.director = director1;
m.distributor = "Paramount Pictures";
m.isMCU = false;
m.language = "Ingles";
m.mainCharacterName = "El padrino";
m.plataforma = "HBO";
m.producer = "Paramount Pictures";
m.writer = director1;


let imdb : Imdb = new Imdb([m, m2, m3, m4, m5])



// console.log(imdb);


// console.log(JSON.stringify(imdb));

// fs.writeFileSync("imdbBBDD.json", JSON.stringify(imdb))


let datos = fs.readFileSync("imdbBBDD.json")

console.log(JSON.parse(datos)); //el parse nos ayuda a ver cómo se muestran los datos de ese objeto, le da formato de objeto
console.log(datos);


imdb.escribirEnFicheroJSON("nuevoFichero.json")
console.log(imdb.obtenerInstanciaIMDB("imdbBBDD.json"))

