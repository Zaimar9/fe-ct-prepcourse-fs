function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // // Tu código:

  // const nuevaContraseña = nuevaPassword; // se crea una variable con la nueva contraseña
  objetoUsuario.password = nuevaPassword;
  return objetoUsuario; // se retorna el objeto
}

module.exports = actualizarPassword;
