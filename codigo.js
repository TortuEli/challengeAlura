var encriptado = "";
var desencriptado = "";

function encriptar(){
    var textoUsuario = document.getElementById("userText").value;

    separar = Array.from(textoUsuario);
    console.log(separar);

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
    console.log(encriptado);

}

function desencriptar(){
    console.log("Este botón sirve para desencriptar el texto");
    var textoADes = document.getElementById("encriText").value;
    console.log(textoADes);
    desencriptado = textoADes.replace(/ai/g, "a");
    desencriptado = desencriptado.replace(/imes/g, "i");
    desencriptado = desencriptado.replace(/ober/g, "o");
    desencriptado = desencriptado.replace(/enter/g, "e");
    desencriptado = desencriptado.replace(/ufat/g, "u");
    console.log(desencriptado);



}

