function calcularBono() {

    let anios = Number(document.getElementById("anios").value);

    let resultado = document.getElementById("resultado");

    if (anios <= 0) {

        resultado.innerHTML = "⚠️ Ingresa años válidos";
        return;

    }

    let bono = 0;

    if (anios >= 1 && anios <= 5) {

        bono = anios * 100;

    } else if (anios > 5) {

        bono = 1000;

    }

    resultado.innerHTML =
        "💰 Bono asignado: $" + bono;

}