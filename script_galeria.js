document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.contenedor-imagenes img');
    const visorImagen = document.getElementById('visor-imagen');
    const imagenAmpliada = document.getElementById('imagen-ampliada');
    const cerrarVisor = document.getElementById('cerrar-visor');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            const rutaImagen = this.getAttribute('src');
            imagenAmpliada.setAttribute('src', rutaImagen);
            visorImagen.classList.remove('visor-oculto');
        });
    });

    cerrarVisor.addEventListener('click', function() {
        visorImagen.classList.add('visor-oculto');
    });

    visorImagen.addEventListener('click', function(event) {
        // Cierra el visor si se hace clic fuera de la imagen ampliada
        if (event.target === this) {
            visorImagen.classList.add('visor-oculto');
        }
    });
});