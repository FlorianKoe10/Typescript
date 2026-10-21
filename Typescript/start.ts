class Auto {                           //großbuchstabe wenn es um class
    private _marke: string = "";
    private _ps: number = 0;
    private _farbe: string = "";
 
    constructor(make: string = "", ps: number, farbe: string = "") {   //konstruktor
        this._marke = make;
        this._ps = ps;
        this._farbe = farbe;
    }
 
    get farbe(): string {
        return this._farbe;
    }
 
    set farbe(value: string) {
        this._farbe = value;
    }
 
    get marke(): string {
        return this._marke;
    }
 
    set marke(value: string) {
        this._marke = value;
    }  
 
    get ps(): number {
        return this._ps;
    }
 
    set ps(value: number) {
        this._ps = value;
    }
 
    printdata() {
        console.log("Auto data " + "Marke: " + this._marke + ", Ps: " + this._ps, "Farbe: " + this._farbe);
    }
}
 
const farben = ["rot", "blau", "grün", "gelb"];
const automarken = ["BMW", "Mercedes", "Audi", "VW", "Opel"];
 
const auto = new Auto(automarken[Math.floor(Math.random() * automarken.length)], 890, farben[Math.floor(Math.random() * farben.length)]);     //um die Klasse Auto zu instanziieren, muss man das Schlüsselwort new verwenden.
//auto.marke = "BMW";             //set marke
//auto.ps = 890;                  //set ps
//auto.farbe = "rot";              //set farbe
auto.printdata();            //ausgabe
 
//Erstelle anzahlAutos an Autos!!
let anzahlAutos =  1000;
const autos: Auto[] = [];
for (let i = 0; i < anzahlAutos; i++) {
    autos.push(new Auto(automarken[Math.floor(Math.random() * automarken.length)], 
    Math.floor(Math.random() * 350) +1,
    farben[Math.floor(Math.random() * farben.length)]));
}

autos.forEach((auto) => {
    auto.printdata();
});
 