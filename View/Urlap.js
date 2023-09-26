export class Urlap {
    #szuloElem;

    constructor(szuloElem) {
        this.#szuloElem = szuloElem;
        this.#szuloElem.append(`
            <form>
                <label for="rendszam">Rendszám:</label>
                <input type="text" id="rendszam" name="rendszam" placeholder="Rendszám">

                <label for="marka">Marka:</label>
                <input type="text" id="marka" name="marka" placeholder="Marka">

                <button type="submit" id="submit" class="btn btn-primary">Küld</button>
            </form>
        `);
    }
}
