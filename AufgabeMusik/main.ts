import { alben } from "./Album/Album.ts";
import { songs } from "./Song/Song.ts";

function passtZurSuche(
    song: (typeof songs)[number],
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
    if (suchbegriff.trim() === "") {
        console.log("Bitte einen Suchbegriff eingeben.");
        return;
    }

    const treffer = songs.filter((song) => passtZurSuche(song, suchbegriff));

    for (const album of alben) {
        const albumTreffer = treffer.filter((song) => song.album === album);
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

function loeschen(suchbegriff: string): void {
    if (suchbegriff.trim() === "") {
        console.log("Bitte einen Suchbegriff eingeben.");
        return;
    }

    const zuLoeschen = songs.filter((song) =>
        passtZurSuche(song, suchbegriff)
    );
    for (const song of zuLoeschen) {
        song.album?.removeSong(song);
        for (const person of song.kuenstler) {
            person.removeSong(song);
        }
    }

    const uebrigeSongs = songs.filter((song) => !zuLoeschen.includes(song));
    songs.splice(0, songs.length, ...uebrigeSongs);
}

const suchbegriff = "1";
suchen(suchbegriff);

// Zum Löschen statt der Suche aufrufen:
// loeschen("Song 1");