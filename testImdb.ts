import { Imdb } from "./imdb";
import { Movie } from "./movie";

let m : Movie = new Movie("El padrino I",1972,"Estadounidense","Crimen/Drama");
let m2 : Movie = new Movie("El padrino II",1974,"Estadounidense","Crimen/Drama");
let m3 : Movie = new Movie("El padrino III",1990,"Estadounidense","Crimen/Drama");
let m4 : Movie = new Movie("Shutter Island",2010,"Estadounidense","Drama/Suspense/Thriller");
let m5 : Movie = new Movie("Erase una vez en Hollywood",2019,"Estadounidense","Drama/Comedia");


let imdb : Imdb = new Imdb([m, m2, m3, m4, m5])

console.log(imdb);
