function calcularSueldo() {

    let horas = Number(document.getElementById("horas").value);
    let pago = Number(document.getElementById("pago").value);

    let resultado = document.getElementById("resultado");

    if (horas === 0 || pago === 0) {
        resultado.innerHTML = "⚠️ Completa los datos";
        return;
    }

    let sueldo;

    if (horas > 40) {

        let extras = horas - 40;

        sueldo = (40 * pago) + (extras * pago * 2);

    } else {

        sueldo = horas * pago;

    }

    resultado.innerHTML = "💵 Sueldo: $" + sueldo;

}