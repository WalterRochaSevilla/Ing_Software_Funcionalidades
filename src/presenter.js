const nombreInput = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#saludo-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const nombre = nombreInput.value;
  div.innerHTML = "<p>Hola " + nombre + ", ¡bienvenido!</p>";
});