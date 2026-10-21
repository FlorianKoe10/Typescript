import { alben } from "./Album/Album.ts";
import type { Song } from "./Song/Song.ts";

function passtZurSuche(
    song: Song,
    suchbegriff: string,
): boolean {
    const suchtext = suchbegriff.trim().toLocaleLowerCase();
    return song.album?.name.toLocaleLowerCase().includes(suchtext) === true ||
        song.titel.toLocaleLowerCase().includes(suchtext) ||
        song.kuenstler.some((person) =>
            person.name.toLocaleLowerCase().includes(suchtext)
        );
}

function suchen(suchbegriff: string): void {
    for (const album of alben) {
        const albumTreffer = album.songs.filter((song) =>
            passtZurSuche(song, suchbegriff)
        );
        if (albumTreffer.length > 0) {
            console.log("Album:");
            album.printdata();
            console.log("Passende Songs:");
            for (const song of albumTreffer) {
                song.printdata();
            }
        }
    }
}


const suchbegriff = "";
suchen(suchbegriff);