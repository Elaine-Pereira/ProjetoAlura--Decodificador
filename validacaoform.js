document.getElementById("teste").onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
      return false;
  };


var botao = document.querySelector('#botao');
botao.addEventListener('click', codificador());
event.preventDefault();
console.log("Oi, cliquei no botão.");

