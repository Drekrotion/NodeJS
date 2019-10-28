import {Homo} from './Homo';

export class Deputat extends Homo {
    surname: string;
    name: string;
    age: number;
    grafter: boolean;
    sizeGrafter: number;

    constructor(weight: number, height: number, surname: string, name: string, age: number, grafter: boolean, sizeGrafter: number) {
        super(weight, height);
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.grafter = grafter;
        this.sizeGrafter = sizeGrafter;
    };

    getGraft(cash: number): void {
        if (!this.grafter) {
            console.log('NO! I\'m not like that!');
            return
        }
        (cash > 1000000) ? console.log('Xmmm..maybe Yes') : console.log('Xmmm...maybe No');
    };
}