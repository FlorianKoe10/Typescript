import { Kuenstler, kuenstler } from "../Kuenstler/Kuenstler.ts";
import type { Album } from "../Album/Album.ts";

export class Song {
    private _Titel: string = "";
    private _Länge: number = 0;
    private _Tracknummer: number = 0;
    private _Album?: Album;

    constructor(
        titel: string,
        länge: number,
        künstler: Kuenstler[],
        tracknummer: number = 0,
    ) {
        if (künstler.length === 0) {
            throw new Error("Ein Song muss mindestens einen Künstler haben.");
        }

        this._Titel = titel;
        this._Länge = länge;
        this._Tracknummer = tracknummer;
        this._Kuenstler = [...künstler];
        for (const person of this._Kuenstler) {
            person.addSong(this);
        }
    }

    private _Kuenstler: Kuenstler[] = [];
 
    get titel(): string {
        return this._Titel;
    }
 
    set titel(value: string) {
        this._Titel = value;
    }
 
    get länge(): number {
        return this._Länge;
    }
 
    set länge(value: number) {
        this._Länge = value;
    }
 
    get tracknummer(): number {
        return this._Tracknummer;
    }
 
    set tracknummer(value: number) {
        this._Tracknummer = value;
    }

    get kuenstler(): readonly Kuenstler[] {
        return this._Kuenstler;
    }

    get album(): Album | undefined {
        return this._Album;
    }

    set album(value: Album) {
        if (this._Album && this._Album !== value) {
            throw new Error("Ein Song kann nur einem Album zugeordnet sein.");
        }
        this._Album = value;
    }

    clearAlbum(album: Album): void {
        if (this._Album === album) {
            this._Album = undefined;
        }
    }

    printdata() {
        const Kuenstlernamen = this._Kuenstler.map((person) => person.name).join(", ");
        console.log(
            "Name: " + this._Titel +
                ", Länge: " + this._Länge +
                ", Tracknummer: " + this._Tracknummer +
                ", Album: " + (this._Album?.name ?? "Kein Album") +
                ", Künstler: " + Kuenstlernamen,
        );
    }
}

export const songs = [
    new Song("Song 1", 180, [kuenstler[0]], 1),
    new Song("Song 2", 200, [kuenstler[0]], 2),
    new Song("Song 3", 220, [kuenstler[0], kuenstler[1]], 3),
    new Song("Song 4", 240, [kuenstler[1]], 4),
    new Song("Song 5", 260, [kuenstler[1]], 5),
    new Song("Song 6", 280, [kuenstler[1], kuenstler[2]], 6),
    new Song("Song 7", 300, [kuenstler[2]], 7),
    new Song("Song 8", 320, [kuenstler[2]], 8),
    new Song("Song 9", 340, [kuenstler[2]], 9),
];
