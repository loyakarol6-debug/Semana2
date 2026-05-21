function verificarMenor() {

    let nombre1 = document.getElementById("nombre1").value;
    let edad1 = Number(document.getElementById("edad1").value);

    let nombre2 = document.getElementById("nombre2").value;
    let edad2 = Number(document.getElementById("edad2").value);

    let nombre3 = document.getElementById("nombre3").value;
    let edad3 = Number(document.getElementById("edad3").value);

    let resultado = document.getElementById("resultado");

    let menorNombre = nombre1;
    let menorEdad = edad1;

    if (edad2 < menorEdad) {
        menorEdad = edad2;
        menorNombre = nombre2;
    }

    if (edad3 < menorEdad) {
        menorEdad = edad3;
        menorNombre = nombre3;
    }

    resultado.innerHTML =
        "👤 Persona menor: " +
        menorNombre +
        " (" + menorEdad + " años)";
}