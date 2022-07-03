
//GIMNASIO
const turno = ["N°001", "N°002", "N°003", "N°004", "N°005", "N°006", "N°007", "N°008", "N°009", "N°010"]
const turnoHorario = ["14HS", "15HS", "16HS", "17HS", "18HS", "19HS", "20HS", "21HS"]
const gimnasio = document.getElementById("btngym");

gimnasio.onclick = () => {
    AsignarTurno = Math.round(Math.random() * 9);
    AsignarHorario = Math.round(Math.random() * 7);

    const texto = document.getElementById("textgym");
    texto.innerHTML = `<h2 id="textgym">Tienes el turno ${turno[AsignarTurno]} a las ${turnoHorario[AsignarHorario]}</h2>`
}
