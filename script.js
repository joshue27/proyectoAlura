function encriptar() {
    var frase = document.getElementById("textoa").value.toLowerCase();
    textoEncriptado = frase.replace(/e/gim, "enter");
    textoEncriptado = textoEncriptado.replace(/o/gim, "ober");
    textoEncriptado = textoEncriptado.replace(/i/gim, "imes");
    textoEncriptado = textoEncriptado.replace(/a/gim, "ai");
    textoEncriptado = textoEncriptado.replace(/u/gim, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("textoDesencriptado").style.display = "initial";
    document.getElementById("copiar").style.display = "initial";
    document.getElementById("munieco").style.display = "none";
    document.getElementById("h1").style.display = "none";
    document.getElementById("otrotxt").style.display = "none";

}

function desencriptar() {
    var frase = document.getElementById("textoa").value.toLowerCase();
    textoEncriptado = frase.replace(/enter/gim, "e");
    textoEncriptado = textoEncriptado.replace(/ober/gim, "o");
    textoEncriptado = textoEncriptado.replace(/imes/gim, "i");
    textoEncriptado = textoEncriptado.replace(/ai/gim, "a");
    textoEncriptado = textoEncriptado.replace(/ufat/gim, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("textoDesencriptado").style.display = "initial";
    document.getElementById("copiar").style.display = "initial";
    document.getElementById("munieco").style.display = "none";
    document.getElementById("h1").style.display = "none";
    document.getElementById("otrotxt").style.display = "none";

}

function copiar() {
    var contenido = document.querySelector("#textoDesencriptado");
    textoDesencriptado.disabled = false;
    contenido.select();
    document.execCommand("copy");
    textoDesencriptado.disabled = true;
    alert("Tu Mensaje ha sido copiado!!!")
}

var boton1 = document.querySelector("#encriptar");
boton1.addEventListener("click", encriptar)
var boton2 = document.querySelector("#desencriptar");
boton2.onclick = desencriptar;
var boton3 = document.querySelector("#copiar");
boton3.onclick = copiar;
