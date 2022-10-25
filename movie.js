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
        this.director;
        this.writer;
        this.actors = [];
    }
    //SETTERS
    Movie.prototype.setTitle = function (title) {
        this.title = title;
    };
    Movie.prototype.setReleaseYear = function (releaseYear) {
        this.releaseYear = releaseYear;
    };
    Movie.prototype.setActors = function (actors) {
        this.actors = actors;
    };
    Movie.prototype.setNacionality = function (nacionality) {
        this.nacionality = nacionality;
    };
    Movie.prototype.setDirector = function (director) {
        this.director = director;
    };
    Movie.prototype.setWriter = function (writer) {
        this.writer = writer;
    };
    Movie.prototype.setLanguage = function (language) {
        this.language = language;
    };
    Movie.prototype.setPlataforma = function (plataforma) {
        this.plataforma = plataforma;
    };
    Movie.prototype.setIsMCU = function (isMCU) {
        this.isMCU = isMCU;
    };
    Movie.prototype.setMainCharacterName = function (mainCharacterName) {
        this.mainCharacterName = mainCharacterName;
    };
    Movie.prototype.setProducer = function (producer) {
        this.producer = producer;
    };
    Movie.prototype.setDistributor = function (distributor) {
        this.distributor = distributor;
    };
    Movie.prototype.setGenre = function (genre) {
        this.genre = genre;
    };
    //GETTERS
    Movie.prototype.getTitle = function (title) {
        return this.title;
    };
    Movie.prototype.getReleaseYear = function (releaseYear) {
        return this.releaseYear;
    };
    Movie.prototype.getActors = function (actors) {
        return this.actors;
    };
    Movie.prototype.getNacionality = function (nacionality) {
        return this.nacionality;
    };
    Movie.prototype.getDirector = function (director) {
        return this.director;
    };
    Movie.prototype.getWriter = function (writer) {
        return this.writer;
    };
    Movie.prototype.getLanguage = function (language) {
        return this.language;
    };
    Movie.prototype.getPlataforma = function (plataforma) {
        return this.plataforma;
    };
    Movie.prototype.getIsMCU = function (isMCU) {
        return this.isMCU;
    };
    Movie.prototype.getMainCharacterName = function (mainCharacterName) {
        return this.mainCharacterName;
    };
    Movie.prototype.getProducer = function (producer) {
        return this.producer;
    };
    Movie.prototype.getDistributor = function (distributor) {
        return this.distributor;
    };
    Movie.prototype.getGenre = function (genre) {
        return this.genre;
    };
    Movie.prototype.printAll = function () {
        console.log(this.title, this.releaseYear, this.actors, this.nacionality, this.director, this.writer, this.language, this.plataforma, this.isMCU, this.mainCharacterName, this.producer, this.distributor, this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
