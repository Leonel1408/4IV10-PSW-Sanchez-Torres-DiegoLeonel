function problema3(){
    var alfabeto = [A-Z]
    var p3_input = document.querySelector.querySelector
    ('#p3-input').valeu;
    var p3_palabras = p3_input.split(',');
    p3_palabras = p3_palabras.map(function(palabras){
        return palabras.replace(/\s/g, '').
        toUppercase();
    });
    var p3_res = '';
    p3_palabras.forEach(function(palabra, i) {
        var letras_unicas = [];
        var palabra_array = palabra.split('');
        alfabeto.forEach(letras, j){
            palabra_array.forEach(function(letras_palabras, k)
            if(letras_palabras == lectura){
                if(letras_unicas.indexOf(letra)<0){
                    letras_unicas.push(letras);
                }
            }
        }
        p3_res += 'Palabra ' + palabra + ' = ' + letras_unicas.length
         + '\m';
    });
    ducument 
}