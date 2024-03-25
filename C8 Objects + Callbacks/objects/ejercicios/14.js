function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  // .trim() se utiliza para eliminar los espacios en blanco al principio y al final del valor.

  if (objetoUsuario.email && objetoUsuario.email !== "") {
    return true;
  } else return false;
}
module.exports = tieneEmail;
