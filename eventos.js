document.getElementById('mi-div').addEventListener('click', function() {
    alert('Hola! Soy el div');
});

document.getElementById('mi-boton').addEventListener('click', function(event) {
    alert('Hola!');
    event.stopPropagation(); // Detiene la propagación del evento al div
});
