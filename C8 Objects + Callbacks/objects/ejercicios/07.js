function sort(sortBy, list) {
  // La función sort recibe dos parámetros:
  // sortBy: una letra (string).
  // list: un arreglo de objetos.
  // La función deberá devolver la lista de objetos ordenada de forma DESCENDENTE
  // a partir de la letra recibida. Por ejemplo:
  // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
  // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
  // Tu código:

  var listaDeObjetos = list;

  listaDeObjetos.sort((sortByA, sortByB) => sortByB.a - sortByA.a);
  return listaDeObjetos;
}

module.exports = sort;
