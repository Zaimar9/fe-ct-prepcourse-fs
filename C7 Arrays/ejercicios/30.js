function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  //otra solucion
  return numeros.find((numero, posicion) =>
    numeros.slice(posicion + 1).some((elemento) => elemento === numero)
  );
}
//-----------------------------------------------------------------------------------------
//   const elementosVistos = new Set(); // Creamos un conjunto para almacenar los elementos únicos vistos

//   for (const numero of numeros) {
//     if (elementosVistos.has(numero)) {
//       return numero; // Si ya hemos visto este número, lo retornamos como el elemento repetido
//     }
//     elementosVistos.add(numero); // Agregamos el número al conjunto
//   }

//   return undefined; // Si no hay elementos repetidos, retornamos undefined
// }
//--------------------------------------------------------------------------------------------
// Un Set en JavaScript es una estructura de datos que representa un conjunto de valores.
// Un Set es una colección de elementos donde no se permiten duplicados.
// Si intentas agregar un valor que ya existe en el Set, no se insertará nuevamente.

// Propiedades y métodos útiles de los Sets:
// .size: Devuelve el número de elementos en el conjunto.
// .add(elemento): Añade un elemento al conjunto (si no está repetido) y devuelve el conjunto.
// .has(elemento): Comprueba si un elemento ya existe en el conjunto.
// .delete(elemento): Elimina un elemento del conjunto.
// .clear(): Vacía todo el conjunto.

module.exports = encontrarElementoRepetido;
