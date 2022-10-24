import { Professional } from "./profesional"

let actor1: Professional = new Professional("Robert de Niro", 79, 80, 178, false, "italoamericano", 2, "actor")
let actor2: Professional = new Professional("Al Pacino", 82, 72, 170, false, "estadounidense", 1, "actor")
let actor3: Professional = new Professional("Brad Pitt", 58, 78, 180, false, "estadounidense", 2, "actor")
let actor4: Professional = new Professional("Leonardo DiCaprio", 47, 85, 183, false, "estadounidense", 1, "actor")
let actor5: Professional = new Professional("Margot Robbie", 32, 57, 165, false, "australiana", 0, "actriz")
let director1: Professional = new Professional("Francis Ford Coppola", 83, 78, 182, true, "estadounidense", 5, "director")
let director2: Professional = new Professional("Quentin Tarantino", 59, 96, 188, false, "estadounidense", 2, "director")


actor1.printAll()
actor2.printAll()
actor3.printAll()
actor4.printAll()
actor5.printAll()
director1.printAll()
director2.printAll()