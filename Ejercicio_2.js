var sumaPromedio = (array) => {
    let suma = 0;
    for (let i of array) {
        suma += i;
    }
    let promedio = suma / array.length;
    return console.log(`La suma es ${suma} y el promedio ${promedio}`);
}