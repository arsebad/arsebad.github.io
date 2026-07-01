class Entidad {
    constructor(x, y) { //que informacion necesita para exisitir
        this.x = x;
        this.y = y;

        this.entidad = document.createElement("div");
        this.entidad.classList.add("entidad");

        document.getElementById("mundo").appendChild(this.entidad);

        this.ActualizarUbicacion();

        
    };

    // que puede hacer una vez existe


    ActualizarUbicacion(x, y) {


    this.entidad.style.left = this.x + "px";
    this.entidad.style.top = this.y + "px";

    };


 



    


};

