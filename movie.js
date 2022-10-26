"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.language = "";
        this.plataforma = "";
        this.isMCU = false;
        this.mainCharacterName = "";
        this.producer = "";
        this.distributor = "";
        this.genre = "";
        this.actors;
        this.director;
        this.writer;
    }
    Movie.prototype.printAll = function () {
        console.log(this.title, this.releaseYear, this.actors, this.nacionality, this.director, this.writer, this.language, this.plataforma, this.isMCU, this.mainCharacterName, this.producer, this.distributor, this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
