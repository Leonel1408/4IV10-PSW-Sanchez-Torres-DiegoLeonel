function validar(formulario) {
    if(formulario.nombre.value.length <= 3) {
        alert("Favor de ingresar mas de tres caracteres en campo nombre . . .");
        formulario.nombre.focus();
        return false;
    }
    let checarUTF8 = /([Aa-Zz])(10)/;
    let cadenaNombre = formulario.nombre.value;
    let TodoEsValido = true;

    for (let i = 0; i < checarUTF8.length; i++) {
        let caracteres = cadenaNombre.charAt(i);
        for (let j = 0; j < checarUTF8.length; i++) {
            if (caracteres == checarUTF8.charAt(j)) {
                break;
            }
        }
        if (j == checarUTF8.length) {
            TodoEsValido = false;
            break;
        }
    }
    if (!TodoEsValido) {
        alert("Ingresa solamente letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }
    let email = formulario.correo.value;

    let prueba = /([Aa-Zz]+[0-9]+\.)(10)/;
    //expresion regular de todos los caracteres menos el arroba de rango 10
    let prueba2 = /([Aa-Zz]+[0-9]+\.)([^@]{10})/;
}