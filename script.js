function cifrar () {

    var text = document.getElementById("textoCifrado").value.toLowerCase();

    var texto1 = text.replace(/e/img, "enter");
    var texto1 = texto1.replace(/i/img, "imes");
    var texto1 = texto1.replace(/a/img, "ai");
    var texto1 = texto1.replace(/o/img, "ober");
    var texto1 = texto1.replace(/u/img, "ufat");
    
    document.getElementById("textoDescifrado").innerHTML = texto1;
}

function descifrar () {

    var text = document.getElementById("textoCifrado").value.toLowerCase();

    var texto2 = text.replace(/enter/img, "e");
    var texto2 = texto2.replace(/imes/img, "i");
    var texto2 = texto2.replace(/ai/img, "a");
    var texto2 = texto2.replace(/ober/img, "o");
    var texto2 = texto2.replace(/ufat/img, "u");
    
    document.getElementById("textoDescifrado").innerHTML = texto2;
}

function copiar () {

    var text = document.querySelector("#textoDescifrado");
    text.select();
    document.execCommand("copy");
}