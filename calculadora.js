document.getElementById("formFisico").addEventListener("submit", function(e){

    e.preventDefault();

    let edad = parseFloat(document.getElementById("edad").value);
    let estatura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let PDE = parseFloat(document.getElementById("PDE").value);

    if (!peso || !estatura) {
        alert("Error: Debes ingresar un peso y una altura válidos.");
        return;
    }

    // cm → metros
    let altura = estatura * 0.01;

    let penalizacion = 0;

    let IMC = calculaIMC(peso, altura);
    let pesoMinimo = calculaPesoMinimo(altura, PDE, edad);
    let pesoMaximo = calculaPesoMaximo(altura, PDE);
    let indiceDGC = calculaIndiceDGC(peso, altura, PDE);


    // ---------- advertencias de peso ----------

    if (peso < pesoMinimo) {

        penalizacion = Math.round(2 * (pesoMinimo - peso));

        let continuar = confirm(
            "ADVERTENCIA: " + peso + " kg no es un peso adecuado.\n" +
            "Peso mínimo recomendado: " + pesoMinimo + " kg\n" +
            "Penalización: " + penalizacion + "% por desnutrición.\n\n" +
            "¿Continuar a pesar de todo?"
        );

        if (!continuar) {
            return;
        }

    } 
    else if (peso > pesoMaximo) {

        penalizacion = Math.round(2 * (peso - pesoMaximo));

        let continuar = confirm(
            "ADVERTENCIA: " + peso + " kg no es un peso adecuado.\n" +
            "Peso máximo recomendado: " + pesoMaximo + " kg\n" +
            "Penalización: " + penalizacion + "% por sobrepeso.\n\n" +
            "¿Continuar a pesar de todo?"
        );

        if (!continuar) {
            return;
        }

    }


    // ---------- factor penalización ----------

    let factor;

    if (penalizacion > 0) {
        factor = (100 - penalizacion) / 100;
    } else {
        factor = 1;
    }


    // ---------- estadísticas ----------

    let estamina = Math.round(factor * calculaEstamina(PDE, altura, peso, edad));

    let velocidad = Math.round(
        (factor * calculaVelocidad(peso, altura, edad, PDE)) * 100
    ) / 100;

    // BUG CORREGIDO (peso añadido)
    let vitalidad = Math.round(
        factor * calculaVitalidad(edad, peso, altura, PDE)
    );

    let reflejos = Math.round(
        factor * calculaReflejos(PDE, altura, peso)
    );

    let fuerza = Math.round(
        factor * calculaFuerza(edad, peso, altura, PDE)
    );

    let energia = Math.round(
        factor * Math.max((edad - 15), 0)
    );


    // ---------- mostrar resultados ----------

    document.getElementById("resVitalidad").textContent = vitalidad + " ml de sangre";
    document.getElementById("resEnergia").textContent = energia + " unidades mágicas";
    document.getElementById("resFuerza").textContent = fuerza + " kg de fuerza";
    document.getElementById("resReflejos").textContent = reflejos + " ms";
    document.getElementById("resEstamina").textContent = estamina + " s";
    document.getElementById("resVelocidad").textContent = velocidad + " m/s";

});