import {Deputat} from './Deputat';

export class Fraction {
    listDeputat: Deputat[] = [];

    constructor(listDeputat: Deputat[]) {
        this.listDeputat = listDeputat;
    };

    addDeputat(dep: Deputat) {
        this.listDeputat.push(dep);
        console.log('Deputat added');
    };

    deleteDeputat(surname: string) {
        const delDeputat = this.listDeputat.findIndex((deputat: Deputat) => deputat.surname === surname);
        if (delDeputat < 0) {
            console.log('Deputat is not found');
        }
        this.listDeputat.splice(delDeputat, 1);

        console.log(`Deputat ${surname} deleted`);
    };

    deleteAllGraftersDeputat() {
        const cleanDeputats = this.listDeputat.filter((dep: Deputat) => !dep.grafter);

        this.listDeputat.splice(0, this.listDeputat.length);

        this.listDeputat = [...cleanDeputats];

        console.log('Perfect');
    };

    showTheBiggestGraftersDeputat() {
        const [theBiggestGraftersDeputat] = this.listDeputat.sort((dep1: Deputat, dep2: Deputat) => {

            return dep2.sizeGrafter - dep1.sizeGrafter
        });

        console.log(theBiggestGraftersDeputat);
    };

    showAllDeputats() {
        this.listDeputat.forEach((dep: Deputat) => {
            console.log(dep);
        })
    };

    deleteAllDeputats() {
        this.listDeputat.splice(0, this.listDeputat.length);
    }

    showSumGradters() {
        const sum = this.listDeputat.reduce((previousValue: number, currentValue: Deputat) => {
            return previousValue + currentValue.sizeGrafter;
        }, 0)
    }
}




