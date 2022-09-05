function sumaImpares(array) {
    /**
     * * La función llamada 'sumaImpares' recibe como argumento un array de números enteros
     * * y debe devolver la suma total entre todos los numero impares.
     * todo: Ejemplo de entrada: [1, 3, 5, 2, 9, 6, 4, 11]
     */
    let sumaImpares = 0; // ? Inicializarían obligatorio para que haga la suma de los impares

    for (let i = 0; i < array.length; i++) {
        const numeroImpar = array[i] % 2;

        if (numeroImpar != 0) {
            sumaImpares += array[i];
        }
    }
    return sumaImpares;
}

const numeros = [1,3,5,2,9,6,4,11];

console.log(`La suma de los números impares es: ${sumaImpares(numeros)}`);