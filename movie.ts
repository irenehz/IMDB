import {Professional} from "./profesional";

export class Movie{

    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    constructor(title : string, releaseYear : number, nacionality : string, genre : string){
        
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
        this.actors=[];
    }

    //SETTERS
    public setTitle(title : string){
        this.title = title;
    }
    public setReleaseYear(releaseYear : number){
        this.releaseYear = releaseYear;
    }
    public setActors(actors : Professional[]){
        this.actors = actors;
    }
    public setNacionality(nacionality : string){
        this.nacionality = nacionality;
    }
    public setDirector(director : Professional){
        this.director = director;
    }
    public setWriter(writer : Professional){
        this.writer = writer;
    }
    public setLanguage(language : string){
        this.language = language;
    }
    public setPlataforma(plataforma : string){
        this.plataforma = plataforma;
    }
    public setIsMCU(isMCU : boolean){
        this.isMCU = isMCU;
    }
    public setMainCharacterName(mainCharacterName : string){
        this.mainCharacterName = mainCharacterName;
    }
    public setProducer(producer : string){
        this.producer = producer;
    }
    public setDistributor(distributor : string){
        this.distributor = distributor;
    }
    public setGenre(genre : string){
        this.genre = genre;
    }

    //GETTERS
    public getTitle(title : string) : string{
        return this.title;
    }
    public getReleaseYear(releaseYear : number) : number{
        return this.releaseYear;
    }
    public getActors(actors : Professional[]) : Professional[]{
        return this.actors;
    }
    public getNacionality(nacionality : string) : string{
        return this.nacionality;
    }
    public getDirector(director : Professional) : Professional{
        return this.director;
    }
    public getWriter(writer : Professional) : Professional{
        return this.writer;
    }
    public getLanguage(language : string) : string{
        return this.language;
    }
    public getPlataforma(plataforma : string) : string{
        return this.plataforma;
    }
    public getIsMCU(isMCU : boolean) : boolean{
        return this.isMCU;
    }
    public getMainCharacterName(mainCharacterName : string) : string{
        return this.mainCharacterName;
    }
    public getProducer(producer : string) : string{
        return this.producer;
    }
    public getDistributor(distributor : string) : string{
        return this.distributor;
    }
    public getGenre(genre : string) : string{
        return this.genre;
    }


    public printAll(){

        console.log(this.title , this.releaseYear , this.actors , this.nacionality , this.director , this.writer , this.language , this.plataforma ,
                    this.isMCU , this.mainCharacterName , this.producer , this.distributor , this.genre);
        
    }

    
}