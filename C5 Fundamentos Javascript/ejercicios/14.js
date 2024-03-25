function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:

  var stringlongitud1 = str1.length;
  var stringlongitud2 = str2.length;

  if (stringlongitud1 === stringlongitud2) {
    return true;
  } else {
    return false;
  }
}

// otra opcion es:
// return str1.length === str2.length;

// ejercicios arreglos
//String.length

module.exports = tienenMismaLongitud;
