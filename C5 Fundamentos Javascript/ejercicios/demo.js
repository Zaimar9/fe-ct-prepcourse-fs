// function numberOfCharacters(string) {
//   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
//   // letras del string, y su valor es la cantidad de veces que se repite en el string.
//   // Las letras deben estar en orden alfabético.
//   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
//   // Tu código:
//   var conteoLetras = {};

//   var stringMin = string.toLowerCase();

//   for (var letras of stringMin) {
//     if (/[a-z]/.test(letras)) {
//       // Si es una letra, actualiza el conteo
//       conteoLetras[letras] = (conteoLetras[letras] || 0) + 1;
//     }
//   }

//   return conteoLetras;
// }

// var miString = "adsjfdsfsfjsdjfhacabcsbajda";
// var resultado = numberOfCharacters(miString);

// console.log(resultado);

// function moverMayusculasAlComienzo(s) {
//   let mayusculas = "";
//   let minusculas = "";

//   for (const char of s) {
//     if (char === char.toUpperCase()) {
//       mayusculas += char;
//     } else {
//       minusculas += char;
//     }
//   }

//   return mayusculas + minusculas;
//   // return minusculas + mayusculas;
// }

// const miString = "adsjFdsfSfjsDjfhAcaBcsbajda";
// const resultado = moverMayusculasAlComienzo(miString);
// console.log(resultado); // Resultado: "FSDABadsjfsfjsdjfhacabcsbajda"

// function invertirCadena(string) {
//   return string.split("").reverse().join("");
// }

// const miString2 = "hola";
// const resultado2 = invertirCadena(miString2);
// console.log(resultado2); // Resultado: "aloh"

function invertirFrase(frase) {
  // Divide la frase en palabras
  const palabras = frase.split(" ");

  // Invierte cada palabra
  const palabrasInvertidas = palabras.map((palabra) => {
    return palabra.split("").reverse().join("");
  });

  // Une las palabras invertidas para formar la frase invertida
  const fraseInvertida = palabrasInvertidas.join(" ");

  return fraseInvertida;
}

const miFrase = "The Henry Challenge is close!";
const fraseInvertidaResultado = invertirFrase(miFrase);
console.log(fraseInvertidaResultado); // Resultado: "ehT yrneH egnellahC si !esolc"
