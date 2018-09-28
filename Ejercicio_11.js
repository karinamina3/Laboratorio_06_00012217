var usuarios = [];

var usuario = (nombref, apellidof, nacimientof, telefonof, correof) => {
    var usuarioObj = {
        nombre: nombref,
        apellido: apellidof,
        nacimiento: nacimientof,
        telefono: telefonof,
        correo: correof
    }
    usuarios.push(usuarioObj);
    return usuarios;
}