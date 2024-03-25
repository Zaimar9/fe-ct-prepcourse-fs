function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:

  if (booleano1 === booleano2) return true;
  else return false;

  // ternario
  //return booleano1 === true && booleano2 === true ? true : false
  // if (booleano1 && booleano2) return true
}

module.exports = esVerdaderoYFalso;
