var ocurrencias = (array, num) => {
    let aux = 0;
    for (let i of array) {
        if (i === num) {
            aux++;
        }        
    }
    return console.log(`Existen ${aux} ocurencias de ${num}`);
}