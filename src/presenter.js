import saludar from"./saludador";
import greet from "./greeting";
const nombreInput = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const form2 = document.querySelector("#saludar-form-ingles");
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
form2.addEventListener("submit", (event) => {
  event.preventDefault();  

  const nombre = nombreInput.value;
  const generoSelect = document.getElementById("genero");
  const genero = generoSelect.value;
  const edad = Number.parseInt(edadInput.value);

  div.innerHTML = `<p>Hello ${nombre}  ${greet(genero, edad)}!</p>`;
});