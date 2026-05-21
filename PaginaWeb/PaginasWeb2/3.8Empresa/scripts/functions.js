function calcularBono() {

    let sueldo = Number(document.getElementById("sueldo").value);

    let antiguedad = Number(document.getElementById("antiguedad").value);

    let resultado = document.getElementById("resultado");

    if (sueldo <= 0 || antiguedad < 0) {

        resultado.innerHTML = "⚠️ Ingresa datos válidos";
        return;

    }

    let bonoAntiguedad = 0;
    let bonoSueldo = 0;

    // Bono por antigüedad
    if (antiguedad > 2 && antiguedad < 5) {

        bonoAntiguedad = sueldo * 0.20;

    } else if (antiguedad >= 5) {

        bonoAntiguedad = sueldo * 0.30;

    }

    // Bono por sueldo
    if (sueldo < 1000) {

        bonoSueldo = sueldo * 0.25;

    } else if (sueldo <= 3500) {

        bonoSueldo = sueldo * 0.15;

    } else {

        bonoSueldo = sueldo * 0.10;

    }

    let bonoFinal;

    if (bonoAntiguedad > bonoSueldo) {

        bonoFinal = bonoAntiguedad;

    } else {

        bonoFinal = bonoSueldo;

    }

    resultado.innerHTML =
        "💰 Bono asignado: $" + bonoFinal.toFixed(2);

}