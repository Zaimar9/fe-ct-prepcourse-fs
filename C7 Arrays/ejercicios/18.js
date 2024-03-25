function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var sumaNotas = 0; // inicializamos en 0 para llevar el acumulado de las notas

  for (var i = 0; i < resultadosTest.length; i++) {
    sumaNotas += resultadosTest[i];
  }

  return sumaNotas / resultadosTest.length;
}

//   var promedioNotas = 0;

//   for (var i = 0; i < resultadosTest.length; i++) {
//     var promedioNotas = resultadosTest.reduce(
//       (previous, current) => (current += previous)
//     );
//     var promedio = promedioNotas / resultadosTest.length;
//   }

//   return promedio;
// }

// => significa return
module.exports = promedioResultadosTest;
