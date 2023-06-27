import { Commessa } from "./commessa";

export class Azienda {
    constructor(
        public id?:number,
        public ragioneSociale?:string,
        public partitaIva?:string,
        public indirizzo?:string,
        public commesse?: Commessa

    ){}
}
