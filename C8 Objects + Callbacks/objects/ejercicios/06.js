const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  var contador = 0;
  for (var prop in objeto) {
    if (objeto.hasOwnProperty(prop)) {
      contador++;
    }
  }
  return contador;
};

//OTRA OPCION
//   var cantidadPropiedades = Object.keys(objeto).length;
//   return cantidadPropiedades;
// };

module.exports = contarPropiedades;
