function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  var mesesEncontrados = []; // Creamos un nuevo array para almacenar los meses encontrados

  // Iteramos sobre cada elemento del array
  for (var i = 0; i < array.length; i++) {
    // Verificamos si el mes actual es "Enero", "Marzo" o "Noviembre"
    if (
      array[i] === "Enero" ||
      array[i] === "Marzo" ||
      array[i] === "Noviembre"
    ) {
      // Si el mes está entre los buscados, lo agregamos al nuevo array
      mesesEncontrados.push(array[i]);
    }
  }

  // Verificamos si encontramos los tres meses pedidos
  if (mesesEncontrados.length === 3) {
    return mesesEncontrados; // Si los encontramos todos, devolvemos el array con los meses
  } else {
    return "No se encontraron los meses pedidos"; // Si falta alguno, devolvemos el mensaje correspondiente
  }

  // switch (array) {
  //   case 1:
  //     return "Enero";
  //   case 2:
  //     return "Febrero";
  //   case 3:
  //     return "Marzo";
  //   case 4:
  //     return "Abril";
  //   case 5:
  //     return "Mayo";
  //   case 6:
  //     return "Junio";
  //   case 7:
  //     return "Julio";
  //   case 8:
  //     return "Agosto";
  //   case 9:
  //     return "Septiembre";
  //   case 10:
  //     return "Octubre";
  //   case 11:
  //     return "Noviembre";
  //   case 12:
  //     return "Diciembre";
  //   default:
  //     "No se encontraron los meses pedidos";
  // }
}

module.exports = mesesDelAño;
