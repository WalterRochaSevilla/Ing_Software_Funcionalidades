function saludar(genero, edad) {
  let resp;
  let complemento = ''; // Almacena 'Señor', 'Señora', etc.
  if (genero === "hombre") {
      resp = 'Bienvenido';
      complemento = (edad >= 30) ? 'Señor' : 'joven';
  } else if (genero === "mujer") {
      resp = 'Bienvenida';
      if (edad >= 30) {
          complemento = 'Señora';
      } else {
          complemento = 'Señorita';
      }
  } else {
      resp = 'Bienvenidx';
      complemento = 'Camarada';
  }

  return`${resp} ${complemento}`;
}

export default saludar;
  