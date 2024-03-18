
example = function (a, b, c) {
    return a+b+c
}
    
function operacion() {
    
    a = parseFloat(prompt("Ingresa un valor:"));
    b = parseFloat(prompt("Ingresa un valor:"));
    c = parseFloat(prompt("Ingresa un valor:"));

   var suma = a + b + c;

    resultado = document.getElementById("resultado");
    resultado.textContent = suma;
}