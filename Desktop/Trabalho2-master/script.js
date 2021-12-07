var binary = document.getElementById("bin");
var octal = document.getElementById("oct")
var decimal = document.getElementById("dec");
var hexadecimal = document.getElementById("hex");
var inputEl = document.getElementsByClassName("output");
var resulte = 0;
var mapper = {
    "bin":2,
    "oct":8,
    "dec":10,
    "hex":16,
};
for (var i = 0; i < inputEl.length; i++) {
    var element = inputEl[i];  
      
    element.addEventListener("keyup", e => {
        var inputId = e.target.id;
        var inputValue = parseInt(document.getElementById(inputId).value, mapper[inputId]);

        /* se o valor do resultado não for valido escreve inválido em vez de aparecer NaN , */
        var result = Number.isNaN(inputValue) ? "Inválido" : inputValue;
        /* se o valor do id selecionado for diferente da variavel InputId vai dar o resultado do valor em varias toStrings (2-binario , 8- octal , 10-decimal , 16- hexadecimal) */
        
        if ("bin" != inputId) { binary.value = result.toString(mapper["bin"]) }
        if ("oct" != inputId) { octal.value = result.toString(mapper["oct"]) }
        if ("dec" != inputId) { decimal.value = result.toString(mapper["dec"]) }
        if ("hex" != inputId) { hexadecimal.value = result.toString(mapper["hex"]) }
    });
};
