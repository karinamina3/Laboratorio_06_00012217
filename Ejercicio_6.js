var murcielago = (cadena) => {
    let murci = ["m", "u", "r", "c", "i", "e", "l", "a", "g", "o"];
    let cadNueva = [];
    cadena = cadena.split("");
    cadena.forEach(element => {
       let auxi = murci.indexOf(element)        
            if (auxi != -1) {
                cadNueva.push(murci.indexOf(element));
            }
            else {
                cadNueva.push(element);
            }
    });
    console.log(cadNueva);
};