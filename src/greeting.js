function greet(genero, edad) {
    let resp="Welcome";
    let complemento = ''; // Almacena 'Señor', 'Señora', etc.
    if (genero === "hombre") {
        complemento = (edad >= 30) ? 'Mr.' : 'Young';
    } else if (genero === "mujer") {
        complemento = (edad >= 30) ? 'Mrs.' : 'Miss';
    } else {
        complemento = 'Comrade';
    }
  
    return`${resp} ${complemento}`;
  }
  
  export default greet;
    