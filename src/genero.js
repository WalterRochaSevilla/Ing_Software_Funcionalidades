function saludar(genero) {
    let resp;
    if (genero === "hombre") {
      resp = 'Bienvenido';
    } else if (genero === "mujer") {
      resp = 'Bienvenida';
    } else {
      resp = 'Bienvenidx';
    }
    return resp;
  }
  
  export default saludar;