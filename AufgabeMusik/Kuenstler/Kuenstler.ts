import type { Song } from "../Song/Song.ts";

export class Kuenstler {
    private _Name: string = "";
    private _Herkunft: string = "";
    private _Songs: Song[] = [];
 
    constructor(name: string = "", herkunft: string) {   //konstruktor
        this._Name = name;
        this._Herkunft = herkunft;
    }
 
    get name(): string {
        return this._Name;
    }
 
    set name(value: string) {
        this._Name = value;
    }
 
    get herkunft(): string {
        return this._Herkunft;
    }
 
    set herkunft(value: string) {
        this._Herkunft = value;
    }

    get songs(): readonly Song[] {
        return this._Songs;
    }

    addSong(song: Song): void {
        if (!this._Songs.includes(song)) {
            this._Songs.push(song);
        }
    }

    removeSong(song: Song): void {
        const index = this._Songs.indexOf(song);
        if (index !== -1) {
            this._Songs.splice(index, 1);
        }
    }

    printdata() {
       console.log("Name: " + this._Name + ", Herkunft: " + this._Herkunft);
    }
}

export const kuenstler = [
    new Kuenstler("Leon Löwenherz", "Deutschland"),
    new Kuenstler("Luis Collini", "Rhodesien"),
    new Kuenstler("Marcel Grgic", "Kroatien"),
];