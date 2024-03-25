function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:

  //VERIFICAR EJERCICIO O EL TEST

  // Agregar la propiedad "calcularPrecioDescuento" al objeto "objetoProducto"
  objetoProducto.calcularPrecioDescuento = function () {
    // Calcular el valor del descuento
    const valorDescuento = this.precio * this.porcentajeDeDescuento;
    // Restar el valor del descuento al precio total del producto
    const precioFinal = this.precio - valorDescuento;
    // Retornar el precio final
    return precioFinal;
  };
}

//   objetoProducto.calcularPrecioDescuento = function () {
//     // Calcular el valor del descuento
//     const valorDescuento =
//       objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
//     // Restar el valor del descuento al precio total del producto
//     const precioFinal = objetoProducto.precio - valorDescuento;
//     // Retornar el precio final
//     return precioFinal;
//   };
// }

module.exports = agregarMetodoCalculoDescuento;
