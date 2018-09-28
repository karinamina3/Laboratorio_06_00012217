var arrayTipos = (array, tipo) => {
    let tipoAux = typeof(tipo);
    let arrayAux = [];
    for (let i of array) {
        if (typeof(i) == tipoAux){
            arrayAux.push(i);
        }
    }
    return arrayAux;
}