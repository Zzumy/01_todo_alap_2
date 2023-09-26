import { Urlap } from "../View/Urlap.js";

export class Controller {
    #urlap;
    #autoLista;
    #rendszamInput;
    #markaInput;
    #submitGomb;

    constructor(autoLista) {
        this.#urlap = new Urlap($("#ujadat"));
        
        this.#autoLista = [];
        this.#rendszamInput = $("#rendszam");
        this.#markaInput = $("#marka");
        this.#submitGomb = $("#submit");
        this.#submitGomb.on("click", (event) => {
            event.preventDefault();
            this.#autoLista.push({
                rendszam: this.#rendszamInput.val(),
                marka: this.#markaInput.val(),
            });
            console.log(this.#autoLista[this.#autoLista.length - 1]);
            console.log(autoLista);
        });
    }

    
    
}
