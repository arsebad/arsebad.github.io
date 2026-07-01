function reproducirMusica(){


    const musica = new Audio("assets/audio/sound_0.mp3");

    musica.loop = true;
    musica.volume = 0.5;

    const reproducir = document.createElement("button");
        boton.textContent = "reproducir";
        boton.id = "multimedia";
        boton.classList = "btn";

    const pausa = document.createElement("button");
        boton.textContent = "pausa";
        boton.id = "multimedia";
        boton.classList = "btn";

        document.getElementById("mundo").appendChild(this.pausa);
        document.getElementById("mundo").appendChild(this.reproducir);

        //this.entidad.setAttribute("id", "jugador");

    reproducir.addEventListener("click", () => {
        musica.play();
    });

    pausa.addEventListener("click", () => {
        musica.pause();
    })

}

    