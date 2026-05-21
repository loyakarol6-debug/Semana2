function calcularDescuento() {

    let precio = Number(document.getElementById("precio").value);

    let resultado = document.getElementById("resultado");

    if (precio <= 0) {

        resultado.innerHTML = "⚠️ Ingresa un precio válido";
        return;

    }

    let descuento = 0;

    if (precio >= 200) {

        descuento = precio * 0.15;

    } else if (precio > 100) {

        descuento = precio * 0.12;

    } else {

        descuento = precio * 0.10;

    }

    let total = precio - descuento;

    resultado.innerHTML =
        "💸 Descuento: $" + descuento.toFixed(2) +
        "<br><br>🛒 Total: $" + total.toFixed(2);

}