import saludar from"./saludador";

const nombreInput = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#saludo-div");
const edadInput = document.querySelector("#edad");

form.addEventListener("submit", (event) => {
  event.preventDefault();  

  const nombre = nombreInput.value;
  const generoSelect = document.getElementById("genero");
  const genero = generoSelect.value;
  const edad = Number.parseInt(edadInput.value);

  div.innerHTML = `<p>Hola ${nombre}  ${saludar(genero, edad)}!</p>`;
});