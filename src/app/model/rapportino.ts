import { Risorsa } from "./risorsa";

export class Rapportino {
    constructor(
        public id?:number,
       public numeroGiorni?:number,
       public risorsa?:Risorsa
    ){}
}
