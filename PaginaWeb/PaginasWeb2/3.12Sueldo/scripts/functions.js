function calcularSueldo() {

    let horas = Number(document.getElementById("horas").value);

    let pago = Number(document.getElementById("pago").value);

    let resultado = document.getElementById("resultado");

    if (horas <= 0 || pago <= 0) {

        resultado.innerHTML = "⚠️ Ingresa datos válidos";
        return;

    }

    if (horas > 50) {

        resultado.innerHTML =
            "🚫 No está permitido trabajar más de 50 horas";
        return;

    }

    let sueldo = 0;

    if (horas <= 40) {

        sueldo = horas * pago;

    } else if (horas <= 45) {

        sueldo =
            (40 * pago) +
            ((horas - 40) * pago * 2);

    } else {

        sueldo =
            (40 * pago) +
            (5 * pago * 2) +
            ((horas - 45) * pago * 3);

    }

    resultado.innerHTML =
        "💰 Sueldo semanal: $" + sueldo.toFixed(2);

}