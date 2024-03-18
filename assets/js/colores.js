

document.addEventListener('keydown', function(event) {
    if (event.key === 'q' || event.key === 'Q') {
        document.body.classList.add('color1');
    } else if (event.key === 'w' || event.key === 'W') {
        document.body.classList.remove('color1');
    }
});


document.addEventListener('keydown', function(event) {
    if (event.key === 'f' || event.key === 'F') {
        document.body.classList.add('color2');
    } else if (event.key === 'v' || event.key === 'V') {
        document.body.classList.remove('color2');
    }
});


function cambiarcolor() {
    var texto = document.getElementById('texto');
    texto.style.color = (texto.style.color === 'blue') ? 'yellow' : 'blue';
}

function cuadrado1() {
    var cua= document.getElementById('cuadrada');
    cua.style.backgroundColor = (cua.style.backgroundColor === 'blue') ? 'yellow' : 'blue';
}

