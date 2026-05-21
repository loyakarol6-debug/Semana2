function verificarEdad() {

    let edad = document.getElementById("edad").value;
    let resultado = document.getElementById("resultado");

    if (edad === "") {
        resultado.innerHTML = "⚠️ Ingresa una edad";
        resultado.style.color = "#facc15";
        return;
    }

    edad = Number(edad);

    if (edad >= 18) {
        resultado.innerHTML = "✅ Puede votar";
        resultado.style.color = "#4ade80";
    } else {
        resultado.innerHTML = "❌ No puede votar";
        resultado.style.color = "#f87171";
    }

}