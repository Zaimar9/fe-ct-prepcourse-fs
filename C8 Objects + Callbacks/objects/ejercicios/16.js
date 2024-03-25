function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  if (objetoUsuario.hasOwnProperty(password)) {
    return true;
  } else return false;
}

module.exports = verificarPassword;
