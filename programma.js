

let foglio = document.getElementById("foglio")

let disegno = foglio.getContext("2d")

disegno.fillStyle = "blue"

disegno.fillRect(0,0, 200, 100)

disegno.fillStyle = "orange"

disegno.fillRect(30, 80, 200, 100)

disegno.fillStyle = "black"

disegno.fillRect(250, 0, 10, 500)

disegno.fillStyle = "pink"

disegno.fillRect(50,150, 200, 100)

disegno.fillStyle = "purple"

disegno.fillRect(200, 200, 200, 500)

let foglio2 = document.getElementById("foglio2")

let disegno2 = foglio2.getContext("2d")

foglio2.addEventListener("click", (evento) => {
    disegno2.strokeRect(evento.offsetX,evento.offsetY,500*Math.random(),500*Math.random())

})
