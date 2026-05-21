function calcularPago() {

    let horas = Number(document.getElementById("horas").value);

    let resultado = document.getElementById("resultado");

    let total = 0;

    if (horas <= 0) {

        resultado.innerHTML = "⚠️ Ingresa horas válidas";
        return;

    }

    if (horas <= 2) {

        total = horas * 5;

    } else if (horas <= 5) {

        total = (2 * 5) + ((horas - 2) * 4);

    } else if (horas <= 10) {

        total = (2 * 5) + (3 * 4) + ((horas - 5) * 3);

    } else {

        total = (2 * 5) + (3 * 4) + (5 * 3) + ((horas - 10) * 2);

    }

    resultado.innerHTML = "💵 Total a pagar: $" + total;

}