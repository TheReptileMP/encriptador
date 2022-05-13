function encriptar(){

    var texto = document.getElementById("input-text").value;

    var formato = new RegExp('[a-z ]+');

    var condicion = true;

    var vocales = ['e', 'i', 'a', 'o', 'u'];
    var encriptado = ["enter", "imes", "ai", "ober", "ufat"];

    for(var i=0; i < texto.length; i++){

      var c = texto.split('');
      if(!formato.test(c[i])){
        condicion = false;
        break;
      }
    }
    if(!condicion){
      mostrarError();
    } else {

      var textoEncriptado = "";

      for(var i=0; i < 5; i++){

        if(i==0){
        
          textoEncriptado = texto.replaceAll(vocales[i], encriptado[i]);

        } else {

          textoEncriptado = textoEncriptado.replaceAll(vocales[i], encriptado[i]);

        }

      }

      mostrarMensaje(textoEncriptado);

    }

}

function desencriptar(){

  var texto = document.getElementById("input-text").value;

  var formato = new RegExp('[a-z ]+');

  var condicion = true;

  var vocales = ['e', 'i', 'a', 'o', 'u'];
  var encriptado = ["enter", "imes", "ai", "ober", "ufat"];

  for(var i=0; i < texto.length; i++){

    var c = texto.split('');
    if(!formato.test(c[i])){
      condicion = false;
      break;
    }
  }
  if(!condicion){
    mostrarError();
  } else {

    var textoDesencriptado = "";

    for(var i=0; i < 5; i++){

      if(i==0){
      
        textoDesencriptado = texto.replaceAll(encriptado[i], vocales[i]);

      } else {

        textoDesencriptado = textoDesencriptado.replaceAll(encriptado[i], vocales[i]);

      }

    }

    mostrarMensaje(textoDesencriptado);

  }

}

function copiar(){

  var textoEncriptado = document.querySelector("#output-text");
  textoEncriptado.select();
  document.execCommand("copy");
  document.getElementById("output-text").innerHTML = "";
  document.getElementById("input-text").focus();
  document.getElementById("input-text").select();
  
}

function mostrarMensaje(texto){
  
  document.getElementById("error-desencriptado").style.display = "none";
  document.getElementById("caja-mensaje").style.display = "block";
  document.getElementById("output-text").innerHTML = texto;
  document.getElementById("mensaje-error").style.visibility = "hidden";
}

function mostrarError(){
  document.getElementById("error-desencriptado").style.display = "block";
  document.getElementById("caja-mensaje").style.display = "none";
  document.getElementById("output-text").innerHTML = "";
  document.getElementById("mensaje-error").style.visibility = "visible";
  document.getElementById("input-text").focus();
  document.getElementById("input-text").select();
}