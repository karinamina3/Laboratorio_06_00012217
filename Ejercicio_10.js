var usuario = (nombref, apellidof, nacimientof, telefonof, correof) => {
    var usuario = {
        nombre: nombref,
        apellido: apellidof,
        nacimiento: nacimientof,
        telefono: telefonof,
        correo: correof
    }
    return console.log(`Nombre: ${nombre}, Apellido: ${apellido}, 
    Fecha de Nacimiento ${nacimiento}, Número de teléfono: ${telefono}, Correo electrónico: ${correo}`); 
}