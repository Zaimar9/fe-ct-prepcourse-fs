function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:

  var elArreglo = 0;

  for (var i = 0; i < array.length; i++) {
    elArreglo = array[i];
    cb(elArreglo);
  }
}

module.exports = forEach;
