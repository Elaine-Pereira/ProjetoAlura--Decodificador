//Funções dos botões//
var captar="";
function codificador() {
  captar = document.getElementById("teste").value;
  var rep1 = captar.replace(/e/gi, "enter");
  var rep2 = rep1.replace(/i/gi, "imes");
  var rep3 = rep2.replace(/a/gi, "ai");
  var rep4 = rep3.replace(/o/gi, "ober");
  var rep5 = rep3.replace(/u/gi, "ufat");

  document.getElementById("mensagem").innerHTML = rep5;
}

function decodificador() {
captar = document.getElementById("teste").value;
  var rep1 = captar.replace(/enter/gi, "e");
  var rep2 = rep1.replace(/imes/gi, "i");
  var rep3 = rep2.replace(/ai/gi, "a");
  var rep4 = rep3.replace(/ober/gi, "o");
  var rep5 = rep4.replace(/ufat/gi, "u");

  document.getElementById("mensagem").innerHTML = rep5;
}

document.getElementById('copy').addEventListener('click', copy);
async function copy() {
  let texto = document.querySelector('.input-field').value;
  await navigator.clipboard.writeText(texto);
   alert ("O texto foi copiado");
}

//Removendo caracteres especiais, números e letras maiúsculas //
document.getElementById("teste").onkeypress = function (e) {
  var chr = String.fromCharCode(e.which);
  if ("qwertyuioplkjhgfdsazxcvbnm".indexOf(chr) < 0)
  return false;
  };
