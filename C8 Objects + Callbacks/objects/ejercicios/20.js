function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:

  //   // Inicializamos una variable para almacenar la suma total de likes
  //   let totalLikes = 0;

  //   // Recorremos cada post en el arreglo "posts"
  //   objetoUsuario.posts.forEach(function (post) {
  //     // Sumamos los likes de cada post al total
  //     totalLikes += post.likes;
  //   });

  //   // Retornamos el resultado total de likes
  //   return totalLikes;
  // }

  var totalLikes = 0;

  objetoUsuario.posts.forEach(function (post) {
    totalLikes += post.likes;
  });
  return totalLikes;
}

module.exports = sumarLikesDeUsuario;
