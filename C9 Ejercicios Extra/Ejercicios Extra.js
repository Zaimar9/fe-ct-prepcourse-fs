/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  // var arrPadre = [];

  // for (var clave in objeto) {
  //   if (objeto.hasOwnProperty(clave)) {
  //     var subarreglo = [clave, objeto[clave]];
  //     arrPadre.push(subarreglo);
  //   }
  // }
  // return arrPadre;

  // OTRA OPCION DE RESOLVER CON EL METODO Object.entries():
  return Object.entries(objeto);

  //   Object.entries() es un método estático en JavaScript que devuelve un arreglo de
  //arreglos correspondiente a los pares clave-valor enumerables encontrados directamente en un objeto.
  //Cada subarreglo contiene dos elementos: la clave (siempre una cadena) y el valor asociado a esa clave.

  // Sintaxis:
  // Object.entries(objeto)
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var conteoLetras = {};
  // Convertir el string a minúsculas para considerar mayúsculas y minúsculas iguales
  var stringMin = string.toLowerCase();

  for (var letras of stringMin) {
    if (/[a-z]/.test(letras)) {
      // Si es una letra, actualiza el conteo
      conteoLetras[letras] = (conteoLetras[letras] || 0) + 1;
    }
  }

  return conteoLetras;

  // La expresión regular /[a-z]/.test(char) tiene el siguiente significado:

  // [a-z]: Esto es una clase de caracteres que representa cualquier letra minúscula del alfabeto inglés. En otras palabras, coincide con cualquier letra desde “a” hasta “z”.
  // .test(char): El método .test() se aplica a la expresión regular y verifica si el valor proporcionado (en este caso, char) coincide con la expresión regular. Devuelve true si hay una coincidencia y false si no la hay.
  // En resumen, esta expresión verifica si el valor de char es una letra minúscula (desde “a” hasta “z”). Si es así, devuelve true; de lo contrario, devuelve false. Por ejemplo:

  // Si char es “b”, la expresión devuelve true.
  // Si char es “5”, la expresión devuelve false.
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var mayusculas = "";
  var minusculas = "";

  for (var letras of string) {
    if (letras === letras.toUpperCase()) {
      mayusculas += letras;
    } else {
      minusculas += letras;
    }
  }

  return mayusculas + minusculas;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  // Divide la frase en palabras
  var palabras = frase.split(" ");

  // Invierte cada palabra
  var palabrasInvertidas = palabras.map((palabra) => {
    return palabra.split("").reverse().join("");
  });

  // Une las palabras invertidas para formar la frase invertida
  var fraseInvertida = palabrasInvertidas.join(" ");

  return fraseInvertida;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  // Convertir el número a una cadena de texto
  var numComoCadena = numero.toString();

  // Invertir la cadena
  var numInvertido = numComoCadena.split("").reverse().join("");

  // Comparar la cadena invertida con la original
  if (numComoCadena === numInvertido) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

  return string.replace(/[abc]/g, "");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  var nuevoArreglo = arrayOfStrings;

  nuevoArreglo.sort((a, b) => a.length - b.length);

  return nuevoArreglo;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  var elementosEnComun = array1.filter((elemento) => array2.includes(elemento));
  return elementosEnComun;

  //OTRA OPCION
  // const array1 = [2, 5, 9, 7];
  // const array2 = [1, 5, 7, 9, 11];
  // const elementosEnComun = [];

  // for (let i = 0; i < array1.length; i++) {
  //   for (let j = 0; j < array2.length; j++) {
  //     if (array1[i] === array2[j]) {
  //       elementosEnComun.push(array1[i]);
  //       break; // Cuando encuentras una coincidencia, no necesitas seguir buscando.
  //     }
  //   }
  // }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
