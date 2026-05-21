function calcularViaje() {

    let alumnos = Number(document.getElementById("alumnos").value);

    let resultado = document.getElementById("resultado");

    if (alumnos <= 0) {

        resultado.innerHTML = "⚠️ Ingresa una cantidad válida";
        return;

    }

    let costoPorAlumno = 0;

    if (alumnos > 100) {

        costoPorAlumno = 20;

    } else if (alumnos >= 50) {

        costoPorAlumno = 35;

    } else if (alumnos >= 20) {

        costoPorAlumno = 40;

    } else {

        costoPorAlumno = 70;

    }

    let total = alumnos * costoPorAlumno;

    resultado.innerHTML =
        "🎟️ Costo por alumno: $" + costoPorAlumno +
        "<br><br>🚌 Total del viaje: $" + total;

}