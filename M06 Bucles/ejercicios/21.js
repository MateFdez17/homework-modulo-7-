function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  if(numero <= 0) {
    return false;
  }
  while (numero % 2 === 0) {
    numero /= 2;
  }
  return numero === 1;
}
console.log(esPotenciaDeDos(8))
//Utilice un "if" con un bucle while para que me retorne "true" si "numero" es potencia de 2.

module.exports = esPotenciaDeDos;
