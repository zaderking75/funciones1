
function a() {
    var cuadrado = document.getElementById('cuadrado1');
    if (cuadrado.style.backgroundColor === 'red') {
        cuadrado.style.backgroundColor = 'black';
    } else {
        cuadrado.style.backgroundColor = 'red';
    }
}

function b() {
    var cuadrado = document.getElementById('cuadrado2');
    if (cuadrado.style.backgroundColor === 'blue') {
        cuadrado.style.backgroundColor = 'black';
    } else {
        cuadrado.style.backgroundColor = 'blue';
    }
}

function c() {
    var cuadrado = document.getElementById('cuadrado3');
    if (cuadrado.style.backgroundColor === 'green') {
        cuadrado.style.backgroundColor = 'black';
    } else {
        cuadrado.style.backgroundColor = 'green';
    }
}

function d() {
    var cuadrado = document.getElementById('cuadrado4');
    if (cuadrado.style.backgroundColor === 'yellow') {
        cuadrado.style.backgroundColor = 'black';
    } else {
        cuadrado.style.backgroundColor = 'yellow';
    }
}



document.addEventListener('keydown', function(event) {
    var cuadrados = document.querySelectorAll('.cuadrado');
    if (event.key === 'a') {
        cuadrados.forEach(function(cuadrado) {
            cuadrado.style.backgroundColor = 'pink';
        });
    } else if (event.key === 's') {
        cuadrados.forEach(function(cuadrado) {
            cuadrado.style.backgroundColor = 'orange';
        });
    }
    else if (event.key === 'd') {
        cuadrados.forEach(function(cuadrado) {
            cuadrado.style.backgroundColor = 'lightblue';
        });
    }
});

q="purple";
w="gray";
e="brown";

const as = document.getElementById("colors")
const as1 = document.getElementById("colors1")
const as2 = document.getElementById("colors2");

document.addEventListener('keydown', function(event) {
    if(event.key === 'q'){
        as.style.backgroundColor = q;
    }else if(event.key === 'w'){
        as1.style.backgroundColor = w;
    }else if(event.key === 'e'){
        as2.style.backgroundColor = e;
    }
});
