function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  // }

  //REVISAR EJEMPLO Y REPRODUCIR

  // Convertir las palabras a minúsculas y eliminar espacios y otros caracteres no alfabéticos
  const palabra1Limpiada = str1.toLowerCase().replace(/[^a-z]/g, "");
  const palabra2Limpiada = str2.toLowerCase().replace(/[^a-z]/g, "");

  // Ordenar las letras de ambas palabras
  const ordenarLetras = (palabra) => palabra.split("").sort().join("");
  const palabra1Ordenada = ordenarLetras(palabra1Limpiada);
  const palabra2Ordenada = ordenarLetras(palabra2Limpiada);

  // Comprobar si las palabras ordenadas son iguales
  return palabra1Ordenada === palabra2Ordenada;
}

module.exports = esAnagrama;
