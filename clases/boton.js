class Boton {
    constructor(clase, id, text){
        this.boton = document.createElement("button");
        this.boton.classList = clase;
        this.boton.id = id;
        this.boton.textContent = text;

        document.getElementById("mundo").appendChild(this.boton);

    }
}