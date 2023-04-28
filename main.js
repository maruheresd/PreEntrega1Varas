const Rojo = document.getElementById("rojo");
const Verde = document.getElementById("verde");
const Azul = document.getElementById("azul");
const Cajacolor = document.getElementById("color-box");
const Resultado = document.getElementById("resultado");

function updateColor() {
  const valorRojo = parseInt(Rojo.value);
  const valorVerde = parseInt(Verde.value);
  const valorAzul = parseInt(Azul.value);
  const color = `rgb(${valorRojo},${valorVerde},${valorAzul})`;
  Cajacolor.style.backgroundColor = color;
  Resultado.innerText = color;
}

Rojo.addEventListener("input", updateColor);
Verde.addEventListener("input", updateColor);
Azul.addEventListener("input", updateColor);
