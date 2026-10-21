import { Auto } from "../Auto/auto.ts";

export class Garage {
    private _name: string;
    private _anzahlPlaetze: BigInt;
    private _autos: Auto[];

    constructor(name: string, anzahlPlaetze: BigInt) {
        this._name = name;
        this._anzahlPlaetze = anzahlPlaetze;
        this._autos = [];
    }
}

get name() {
    return this._name;
}

set name(value: string) {
    this._name = value;
}

get anzahlPlaetze() {
    return this._anzahlPlaetze;
}

set anzahlPlaetze(value: BigInt) {
    this._anzahlPlaetze = value;
}

get autos() {
    return this._autos;
}

set autos(value: Auto[]) {
    this._autos = value;
}

printGarageData() {
    console.log("Garage data " + "Name: " + this._name + ", Anzahl Plaetze: " + this._anzahlPlaetze);
    console.log("Autos in der Garage:");