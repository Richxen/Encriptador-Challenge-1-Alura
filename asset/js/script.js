const textoIngresado = document.querySelector(".text-area");
const textoProcesado = document.querySelector(".mensaje");

//Funcion boton Encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(textoIngresado.value);
    textoProcesado.value = textoEncriptado;
    textoIngresado.value = "";
    textoProcesado.style.backgroundImage = "none";
    document.getElementsByClassName("btn-copia")[0].style.visibility = 'visible';
}
//funcion boton desencriptar
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textoIngresado.value);
    textoProcesado.value = textoEncriptado;
    textoIngresado.value = "";
    textoProcesado.style.backgroundImage = "none";
    document.getElementsByClassName("btn-copia")[0].style.visibility = 'visible';
}

/*
Llaves de encriptacion:
letra "e" = "enter"
letra "i" = "imes"
letra "a" = "ai"
letra "o" = "ober"
letra "u" = "ufat"
*/
//Funcion encriptar
function encriptar(stringEncriptada){
    
    let llaveEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    stringEncriptada = stringEncriptada.normalize("NFD").replace(/[\u0300-\u0301]/g, ""); //Sólo elimina tilde izquierda y derecha.
    
    alert("Ahora se removerá las tildes de las vocales");

    stringEncriptada = stringEncriptada.toString().toLowerCase();

    for (let i = 0; i < llaveEncriptacion.length; i++) {
        if(stringEncriptada.includes(llaveEncriptacion[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(llaveEncriptacion[i][0], llaveEncriptacion[i][1]);
        }        
    }
    return stringEncriptada;
}

 //funcion desencriptar
function desencriptar(stringDesencriptada){
    let llaveEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toString().toLowerCase();

    for (let i = 0; i < llaveEncriptacion.length; i++) {
        if(stringDesencriptada.includes(llaveEncriptacion[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(llaveEncriptacion[i][1], llaveEncriptacion[i][0]);
        }        
    }
    return stringDesencriptada;
}

//Funcion copiar texto   
function btnCopiar() {
    
    let copiarTexto = document.getElementById("textoCopiar");
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copiarTexto.value);
    alert("Texto copiado al portapapeles");
    textoProcesado.value = "";
    document.getElementsByClassName("btn-copia")[0].style.visibility = 'hidden';     
}   