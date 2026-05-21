function verificarViaje() {

    let dinero = Number(document.getElementById("dinero").value);

    let costoKm = Number(document.getElementById("costoKm").value);

    let resultado = document.getElementById("resultado");

    if (dinero <= 0 || costoKm <= 0) {

        resultado.innerHTML = "⚠️ Ingresa datos válidos";
        return;

    }

    let mexico = 750 * 2 * costoKm;
    let pv = 800 * 2 * costoKm;
    let acapulco = 1200 * 2 * costoKm;
    let cancun = 1800 * 2 * costoKm;

    if (dinero >= cancun) {

        resultado.innerHTML =
            "🏖️ Puedes ir a Cancún";

    } else if (dinero >= acapulco) {

        resultado.innerHTML =
            "🌊 Puedes ir a Acapulco";

    } else if (dinero >= pv) {

        resultado.innerHTML =
            "🌴 Puedes ir a Puerto Vallarta";

    } else if (dinero >= mexico) {

        resultado.innerHTML =
            "🏙️ Puedes ir a México";

    } else {

        resultado.innerHTML =
            "🏠 Tendrás que quedarte en casa";

    }

}