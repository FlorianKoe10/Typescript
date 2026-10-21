import { Song, songs } from "../Song/Song.ts";
import { Kuenstler } from "../Kuenstler/Kuenstler.ts";

export class Album {
    private _NameAlbum: string = "";
    private _Erscheinungsjahr: number = 0;
    private _Genre: string = "";
    private _Songs: Song[];

    constructor(name: string, jahr: number, genre: string, songs: Song[]) {
        this._NameAlbum = name;
        this._Erscheinungsjahr = jahr;
        this._Genre = genre;
        this._Songs = [...songs];
        for (const song of this._Songs) {
            song.album = this;
        }
    }

    get name(): string {
        return this._NameAlbum;
    }

    set name(value: string) {
        this._NameAlbum = value;
    }

    get erscheinungsjahr(): number {
        return this._Erscheinungsjahr;
    }

    set erscheinungsjahr(value: number) {
        this._Erscheinungsjahr = value;
    }

    get genre(): string {
        return this._Genre;
    }

    set genre(value: string) {
        this._Genre = value;
    }

    get songs(): readonly Song[] {
        return this._Songs;
    }

    removeSong(song: Song): void {
        const index = this._Songs.indexOf(song);
        if (index !== -1) {
            this._Songs.splice(index, 1);
            song.clearAlbum(this);
        }
    }

    get kuenstler(): Kuenstler[] {
        const personen: Kuenstler[] = [];
        for (const song of this._Songs) {
            for (const person of song.kuenstler) {
                if (!personen.includes(person)) {
                    personen.push(person);
                }
            }
        }
        return personen;
    }

    printdata() {
        console.log("Name: " + this._NameAlbum + ", Erscheinungsjahr: " + this._Erscheinungsjahr + ", Genre: " + this._Genre);
    }
}

export const alben = [
    new Album("Album1", 2010, "Pop", songs),
];
