import {Deputat, Fraction, VerkhovnaRada} from "./Models";


const Roman = new Deputat(70, 180, 'Bosyi', 'Roman', 24, false, 0);
const Karina = new Deputat(47, 169, 'Neba', 'Karina', 21, false, 0);
const Taras = new Deputat(74, 178, 'Bango', 'Taras', 22, true, 50000);
const Dima = new Deputat(90, 170, 'Bery', 'Dima', 29, true, 1000000);


const Vzatka = new Fraction([]);
Vzatka.addDeputat(Taras);
Vzatka.addDeputat(Dima);

const Liva = new Fraction([]);
Liva.addDeputat(Roman);
Liva.addDeputat(Karina);


Liva.showAllDeputats();
Vzatka.showAllDeputats();
