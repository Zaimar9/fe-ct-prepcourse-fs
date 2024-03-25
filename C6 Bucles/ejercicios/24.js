function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  //OTRA OPCION

  // var separarCadena = texto.split("");
  // var invertirArreglo = separarCadena.reverse();
  // var unirArreglo = invertirArreglo.join("");
  // return unirArreglo;

  return texto.split("").reverse().join("");
}

module.exports = invertirTexto;
