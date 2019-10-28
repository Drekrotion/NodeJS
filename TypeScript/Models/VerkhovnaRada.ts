import {Deputat} from './Deputat';
import {Fraction} from './Fractions.model';

export class VerkhovnaRada {
    listFraction: Fraction[] = [];

    constructor(listFraction: Fraction[]) {
        this.listFraction = listFraction;
    };

    addFraction(nameFraction: Fraction) {
        this.listFraction.push(nameFraction)
    };

    deleteFraction(nameFraction: Fraction) {
        const delFraction = this.listFraction.findIndex((frac: Fraction) => frac === nameFraction);
        if (delFraction < 0) {
            console.log('Fraction not found');
        }
        this.listFraction.splice(delFraction, 1);

        console.log('Fraction deleted');
    };

    showAllFractions() {
        this.listFraction.forEach((frac: Fraction) => {
            console.log(frac);
        })
    };


    showSpecificFractions(nameFraction: Fraction) {
        const Fraction = this.listFraction.find((frac: Fraction) => frac === nameFraction)

        console.log(Fraction);
    };

    addDeputatToFaraction(factionName: Fraction, dep: Deputat) {
        factionName.addDeputat(dep)
    };

    deleteDeputatToFaraction(surname: string, factionName: Fraction) {
        factionName.deleteDeputat(surname);
    };

    showAllDeputat(dep: Deputat){

    }

}