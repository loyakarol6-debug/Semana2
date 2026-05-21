function calcularSeguro() {

    let poliza = document.getElementById("poliza").value;
    let edad = Number(document.getElementById("edad").value);

    let alcohol = document.getElementById("alcohol").checked;
    let lentes = document.getElementById("lentes").checked;
    let enfermedad = document.getElementById("enfermedad").checked;

    let resultado = document.getElementById("resultado");

    let base = 0;

    if (poliza === "A") {

        base = 1200;

    } else if (poliza === "B") {

        base = 950;

    } else {

        resultado.innerHTML = "⚠️ Selecciona una póliza";
        return;

    }

    let total = base;

    if (alcohol) {
        total += base * 0.10;
    }

    if (lentes) {
        total += base * 0.05;
    }

    if (enfermedad) {
        total += base * 0.05;
    }

    if (edad > 40) {
        total += base * 0.20;
    } else {
        total += base * 0.10;
    }

    resultado.innerHTML =
        "💰 Costo total: $" + total.toFixed(2);

}