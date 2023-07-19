// Crear un array para almacenar el número de apariciones de cada suma.
const resultados = new Array(11).fill(0);

// Función para simular el lanzamiento de un dado.
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Función para simular el lanzamiento de dos dados y sumar los resultados.
function lanzarDosDados() {
  const dado1 = lanzarDado();
  const dado2 = lanzarDado();
  return dado1 + dado2;
}

// Realizar 50 lanzamientos de dos dados.
for (let i = 0; i < 50; i++) {
  const sumaDados = lanzarDosDados();
  // Incrementar el contador de apariciones para la suma obtenida.
  resultados[sumaDados - 2]++;
}

// Imprimir los resultados.
console.log('Resultados:');
for (let i = 0; i < resultados.length; i++) {
  console.log(`Suma ${i + 2}: ${resultados[i]} apariciones`);
}
