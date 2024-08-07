
var encriptado = "";
var desencriptado = "";


var encriptar = function(){
    window.location.href = "./resultado.html";
    var textoUsuario = document.getElementById('userText').value;

    separar = Array.from(textoUsuario);

    separar.forEach(element => {
        if (element == "a"){
            element = "ai";
        }
        else if (element == "e"){
            element = "enter";
        }
        else if (element == "i"){
            element = "imes";
        }
        else if (element == "o"){
            element = "ober";
        }
        else if (element == "u"){
            element = "ufat";
        }
        encriptado += element;
    });
    localStorage.setItem('datoCompartido', encriptado);
}

function desencriptar(){
    window.location.href = "./resultado.html";
    var textoUsuario = document.getElementById('userText').value;
    desencriptado = textoUsuario.replace(/ai/g, "a");
    desencriptado = desencriptado.replace(/imes/g, "i");
    desencriptado = desencriptado.replace(/ober/g, "o");
    desencriptado = desencriptado.replace(/enter/g, "e");
    desencriptado = desencriptado.replace(/ufat/g, "u");
    localStorage.setItem('datoCompartido', desencriptado);

}

function despues() {
    var dato = localStorage.getItem('datoCompartido');
    document.getElementById('resultado').innerText = dato;
    
}




