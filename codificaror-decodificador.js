function codificador(){
    var inputValue = document.getElementById("teste").value; 
     var rep1 = inputValue.replace(/a/g, "ai")
      var rep2 = rep1.replace(/e/g, "enter");
      var rep3 = rep2.replace(/i/g, "imes");
      var rep4 = rep3.replace(/o/g, "ober");
      var rep5 = rep3.replace(/u/g, "ufat");

    document.getElementById("valueInput").innerHTML = rep5; 
  }
  function decodificador(){
    var inputValue = document.getElementById("teste").value; 
      var rep1 = inputValue.replace(/ai/g, "a");
      var rep2 = rep1.replace(/enter/g, "e");
      var rep3 = rep2.replace(/imes/g, "i");
      var rep4 = rep3.replace(/ober/g, "o");
      var rep5 = rep4.replace(/ufat/g, "u");

    document.getElementById("valueInput").innerHTML = rep5; 
  }