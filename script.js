const inputRojo = document.getElementById('input-rojo')
const textoRojo = document.getElementById('texto-rojo')

const inputVerde = document.getElementById('input-verde')
const textoVerde = document.getElementById('texto-verde')

const inputAzul = document.getElementById('input-azul')
const textoAzul = document.getElementById('texto-azul')

const colores = [inputRojo, inputVerde, inputAzul]

let rojo = inputRojo.value
let verde = inputVerde.value
let azul = inputAzul.value

colores.forEach(color => {
  color.addEventListener("input", event => {
    if (color.id.includes("rojo")) {
      rojo = event.target.value
      textoRojo.textContent = rojo
    }
    if (color.id.includes("verde")) {
      verde = event.target.value
      textoVerde.textContent = verde
    }
    if (color.id.includes("azul")) {
      azul = event.target.value
      textoAzul.textContent = azul
    }

    document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`

  })
});