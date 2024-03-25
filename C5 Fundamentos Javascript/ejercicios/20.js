function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:

  switch (letra) {
    case "a":
      return "Es vocal";
    case "e":
      return "Es vocal";
    case "i":
      return "Es vocal";
    case "o":
      return "Es vocal";
    case "u":
      return "Es vocal";
  }
  return "Dato incorrecto";
}

//HICE CAPTURE

module.exports = esVocal;
