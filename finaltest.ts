let readlineSync = require("readline-sync");
import { Professional } from "./profesional";
import { Movie } from "./movie";
import { Imdb } from "./imdb";

let name : string = readlineSync.question("Cual es nombre del profesional?")
let age : number = parseInt(readlineSync.question("Cual es la edad del profesional?"))
let weight : number = parseInt(readlineSync.question("Cual es el peso del profesional?"))
let height : number = parseInt(readlineSync.question("Cual es la altura del profesional?"))
let isRetired : boolean = (readlineSync.question("Esta retirado el profesional?") === "true")
let nationality : string = readlineSync.question("Cual es la nacionalidad del profesional?")
let oscarsNumber : number = parseInt(readlineSync.question("Cuantos Oscars tiene el profesional?"))
let profesion : string = readlineSync.question("Cual es la profesion?") 

let nuevoProfesional : Professional = new Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profesion)

nuevoProfesional.printAll()


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

imdb.peliculas[3].actors.push(nuevoProfesional)

imdb.escribirEnFicheroJSON("ImdbBBDDactualizado.json")