function saludar(genero, edad) {
  let resp;
  let complemento = ''; // Almacena 'Señor', 'Señora', etc.
  if (genero === "hombre") {
      resp = 'Bienvenido';
      complemento = (edad >= 30) ? 'Señor' : 'Joven';
  } else if (genero === "mujer") {
      resp = 'Bienvenida';
      complemento = (edad >= 30) ? 'Señora' : 'Señorita';
  } else {
      resp = 'Bienvenidx';
      complemento = 'Camarada';
  }

  return`${resp} ${complemento}`;
}

export default saludar;
  