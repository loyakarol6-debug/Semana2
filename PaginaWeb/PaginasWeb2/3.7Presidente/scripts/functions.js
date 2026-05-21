function calcularBeca() {

    let edad = Number(document.getElementById("edad").value);

    let promedio = Number(document.getElementById("promedio").value);

    let resultado = document.getElementById("resultado");

    if (edad <= 0 || promedio <= 0) {

        resultado.innerHTML = "⚠️ Ingresa datos válidos";
        return;

    }

    let beca = 0;

    if (edad > 18) {

        if (promedio >= 9) {

            beca = 2000;

        } else if (promedio >= 7.5) {

            beca = 1000;

        } else if (promedio >= 6) {

            beca = 500;

        } else {

            resultado.innerHTML =
                "📩 Carta de invitación para estudiar más";
            return;

        }

    } else {

        if (promedio >= 9) {

            beca = 3000;

        } else if (promedio >= 8) {

            beca = 2000;

        } else if (promedio >= 6) {

            beca = 100;

        } else {

            resultado.innerHTML =
                "📩 Carta de invitación para estudiar más";
            return;

        }

    }

    resultado.innerHTML =
        "🎉 Beca asignada: $" + beca;

}