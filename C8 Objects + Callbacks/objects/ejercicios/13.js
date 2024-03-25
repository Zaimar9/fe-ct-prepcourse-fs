function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:

  if (objeto.hasOwnProperty(propiedad)) {
    delete objeto[propiedad];
  }
  return objeto;
}
//   var miObject = {};
//   // prop = propiedad, tambien se puede poner key, ya que En general, en objetos,
//   //las “keys” se refieren a las propiedades o claves que identifican los valores almacenados.
//   for (var prop in objeto) {
//     if (prop !== propiedad) {
//       miObject[prop] = objeto[prop];
//     }
//   }

//   // Retornar el objeto modificado
//   return miObject;
// }

//En objetos, el operador de propagación permite copiar las propiedades de un objeto a otro.
//Es útil para crear nuevos objetos basados en uno existente.
//OTRA FORMA DE RESOLVER
// var miObject = { ...objeto };

//   delete miObject[propiedad];
//   return miObject;
// }
module.exports = eliminarPropiedad;
