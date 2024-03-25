function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:

  // colocar => es igual que colocar function(usuario)

  // objetoMuchosUsuarios.forEach((usuario) => {
  objetoMuchosUsuarios.forEach(function (usuario) {
    usuario.esPremium = true;
  });
  return objetoMuchosUsuarios;
}

module.exports = pasarUsuarioAPremium;
