function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Si no se recibe una función callback entonces se debe retornar el string original.
  // Tu código:
  //OTRA FORMA PERO FALTARIA RETORNAR EL STRING ORIGINAL
  // return cambiarCadena(string);
  // }

  if (typeof callback === "function") {
    return callback(string);
  } else {
    return string;
  }
}

module.exports = cambiarCadena;
