var promedioIncerteza = (array) =>{
    let suma = 0;
    for (let i of array) {
        suma += i;
    }
    let promedio = suma / array.length;
    let suma2 = 0;
    for (let j of array) {
        suma2 += Math.pow((j-promedio), 2);
    }
    let incerteza = Math.sqrt(suma2 / (array.length - 1));
    return console.log(`El promedio es ${promedio.toFixed(1)} y la incerteza ${incerteza.toFixed(1)}`);
}