function verificarRegalo() {

    let dinero = Number(document.getElementById("dinero").value);

    let resultado = document.getElementById("resultado");

    if (dinero <= 0) {

        resultado.innerHTML = "⚠️ Ingresa un presupuesto";
        return;

    }

    if (dinero <= 10) {

        resultado.innerHTML = "💌 Regalo: Tarjeta";

    } else if (dinero <= 100) {

        resultado.innerHTML = "🍫 Regalo: Chocolates";

    } else if (dinero <= 250) {

        resultado.innerHTML = "🌹 Regalo: Flores";

    } else {

        resultado.innerHTML = "💍 Regalo: Anillo";

    }

}