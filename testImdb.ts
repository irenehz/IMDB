import { Imdb } from "./imdb";
import { Movie } from "./movie";
import {Professional} from "./profesional";
const fs = require("fs");

let m : Movie = new Movie("El padrino I",1972,"Estadounidense","Crimen/Drama");
let m2 : Movie = new Movie("El padrino II",1974,"Estadounidense","Crimen/Drama");
let m3 : Movie = new Movie("El padrino III",1990,"Estadounidense","Crimen/Drama");
let m4 : Movie = new Movie("Shutter Island",2010,"Estadounidense","Drama/Suspense/Thriller");
let m5 : Movie = new Movie("Erase una vez en Hollywood",2019,"Estadounidense","Drama/Comedia");

let actor1: Professional = new Professional("Robert de Niro", 79, 80, 178, false, "italoamericano", 2, "actor")
let actor2: Professional = new Professional("Al Pacino", 82, 72, 170, false, "estadounidense", 1, "actor")
let actor3: Professional = new Professional("Brad Pitt", 58, 78, 180, false, "estadounidense", 2, "actor")
let actor4: Professional = new Professional("Leonardo DiCaprio", 47, 85, 183, false, "estadounidense", 1, "actor")
let actor5: Professional = new Professional("Margot Robbie", 32, 57, 165, false, "australiana", 0, "actriz")
let director1: Professional = new Professional("Francis Ford Coppola", 83, 78, 182, true, "estadounidense", 5, "director")
let director2: Professional = new Professional("Quentin Tarantino", 59, 96, 188, false, "estadounidense", 2, "director")

m.setActors([actor1,actor2]);
m.setDirector(director1);
m.setDistributor("Paramount Pictures");
m.setIsMCU(false);
m.setLanguage("Ingles");
m.setMainCharacterName("El padrino");
m.setPlataforma("HBO");
m.setProducer("Paramount Pictures");
m.setWriter(director1);

m2.setActors([actor1,actor2]);
m2.setDirector(director1);
m2.setDistributor("Paramount Pictures");
m2.setIsMCU(false);
m2.setLanguage("Ingles");
m2.setMainCharacterName("El padrino");
m2.setPlataforma("HBO");
m2.setProducer("Paramount Pictures");
m2.setWriter(director1);

m3.setActors([actor1,actor2]);
m3.setDirector(director1);
m3.setDistributor("Paramount Pictures");
m3.setIsMCU(false);
m3.setLanguage("Ingles");
m3.setMainCharacterName("El padrino");
m3.setPlataforma("HBO");
m3.setProducer("Paramount Pictures");
m3.setWriter(director1);

m4.setActors([actor3,actor4]);
m4.setDirector(director1);
m4.setDistributor("Paramount Pictures");
m4.setIsMCU(false);
m4.setLanguage("Ingles");
m4.setMainCharacterName("El padrino");
m4.setPlataforma("HBO");
m4.setProducer("Paramount Pictures");
m4.setWriter(director2);

m5.setActors([actor3,actor4,actor5]);
m5.setDirector(director1);
m5.setDistributor("Paramount Pictures");
m5.setIsMCU(false);
m5.setLanguage("Ingles");
m5.setMainCharacterName("El padrino");
m5.setPlataforma("HBO");
m5.setProducer("Paramount Pictures");
m5.setWriter(director2);

let imdb : Imdb = new Imdb([m, m2, m3, m4, m5])

//console.log(JSON.stringify(imdb));

fs.writeFileSync("imdbBBDD.json", JSON.stringify(imdb));
