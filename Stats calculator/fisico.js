/* =========================
   UTILIDADES
========================= */

function clamp(valor, min, max) {
    return Math.max(min, Math.min(valor, max));
}


/* =========================
   COMPOSICION CORPORAL
========================= */

function calculaFFMI(PDE) {
    return Math.round((18 + (PDE * 0.1)) * 100) / 100;
}

function calculaMasaMagra(PDE, altura) {
    let FFMI = calculaFFMI(PDE);
    return Math.round((FFMI * Math.pow(altura, 2)) * 100) / 100;
}

function calculaIMC(peso, altura) {
    return Math.round((peso / Math.pow(altura, 2)) * 100) / 100;
}

function calculaGCminima(PDE, edad) {
    let factorEdad30 = (Math.max((edad - 30), 0) * 0.002);
    let GrasaBase = Math.min(14 + (edad - 20) * (0.3 - factorEdad30), 25);
    return Math.max((GrasaBase - (PDE * 0.05)), 11);
}


/* =========================
   LIMITES DE PESO
========================= */

function calculaPesoMinimo(altura, PDE, edad) {
    let grasa = calculaGCminima(PDE, edad);
    let Masa = calculaMasaMagra(PDE, altura);
    return Math.round((Masa * (1 / (1 - (grasa / 100)))) * 100) / 100;
}

function calculaPesoMaximo(altura, PDE) {
    let Masa = calculaMasaMagra(PDE, altura);
    return Math.round((Masa * 1.3333) * 100) / 100;
}

function calculaIndiceDGC(peso, altura, PDE) {
    let PesoMaximo = calculaPesoMaximo(altura, PDE);
    return peso - PesoMaximo;
}


/* =========================
   FACTORES FISICOS
========================= */

function calculaFactorEdad(edad) {
    let factoredad;

    if (edad < 12) {
        factoredad = 0.75;
    } 
    else if (edad < 20) {
        factoredad = 1 - (Math.abs(edad - 20) * 0.005);
    } 
    else if (edad <= 30) {
        factoredad = 1 - (Math.abs(edad - 25) * 0.001);
    } 
    else if (edad <= 45) {
        factoredad = 1 - ((edad - 30) * 0.003);
    } 
    else if (edad <= 55) {
        factoredad = 1 - ((edad - 30) * 0.005);
    } 
    else {
        factoredad = 1 - ((edad - 30) * 0.011);
    }

    return factoredad;
}

function calculaFactorEntrenamiento(PDE) {
    return 0.8 + (PDE * 0.024);
}


/* =========================
   ATRIBUTOS FISICOS
========================= */

function calculaFuerza(edad, peso, altura, PDE) {
    let FactorEdad = calculaFactorEdad(edad);
    let MMTotal = calculaMasaMagra(PDE, altura);
    let FactorEntrenamiento = calculaFactorEntrenamiento(PDE);

    return Math.round((MMTotal * FactorEdad) * (FactorEntrenamiento));
}

function calculaSancada(altura, PDE) {
    let factorEntrenamiento = PDE * 0.2;
    return altura * (1.1 + factorEntrenamiento);
}

function calculaRelacionFP(peso, altura, edad, PDE) {
    let fuerza = calculaFuerza(edad, peso, altura, PDE);
    return (fuerza / peso) * 2;
}

function calculaVelocidad(peso, altura, edad, PDE) {
    let sancada = calculaSancada(altura, PDE);
    let RfuerzaPeso = calculaRelacionFP(peso, altura, edad, PDE);

    return Math.round((sancada * RfuerzaPeso) * 10) / 10;
}

function calculaReflejos(PDE, altura, peso) {
    let IMC = calculaIMC(peso, altura);
    let factorIMC = Math.abs(IMC - 22) * 15;

    return Math.round((300 + factorIMC) - (3 * PDE));
}

function calculaVitalidad(edad, peso, altura, PDE) {
    let masaMagra = calculaMasaMagra(PDE, altura);
    let PenalizacionEdad;

    if (edad < 20) {
        PenalizacionEdad = Math.abs(edad - 20) * 0.5;
    } 
    else if (edad <= 30) {
        PenalizacionEdad = Math.abs(edad - 25) * 0.2;
    } 
    else if (edad <= 40) {
        PenalizacionEdad = (edad - 20) * 0.5;
    } 
    else if (edad <= 50) {
        PenalizacionEdad = (edad - 20);
    } 
    else {
        PenalizacionEdad = (edad - 20) * 1.5;
    }

    return Math.round((masaMagra * Math.max((70 - PenalizacionEdad), 35) / 2));
}

function calculaEstamina(PDE, altura, peso, edad) {
    let IMC = calculaIMC(peso, altura);
    let FactorEdad;

    if (edad < 20) {
        FactorEdad = 1 - (Math.abs(edad - 20) * 0.05);
    }
    else if ( edad < 35) {
        FactorEdad = 1 - ((edad - 27) * 0.001);
    }
    else {
        FactorEdad = 1 - ((edad - 35) * 0.011);        
    }

    let FactorIMC = (6 * FactorEdad) - Math.max((Math.abs(IMC - 21.7) * 0.1), 0.5);

    return Math.round((Math.min((PDE * FactorIMC), 300)) * 20);
}
