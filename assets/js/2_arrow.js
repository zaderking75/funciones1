
totalidad = function(){
    
    d = parseFloat(prompt("Ingresa un valor:"));
    e = parseFloat(prompt("Ingresa un valor:"));

    total =document.getElementById("resu");
    
    const resta = (d, e) => d-e;
    
    total.innerHTML=  resta(d,e);
}