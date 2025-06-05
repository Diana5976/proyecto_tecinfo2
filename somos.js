document.addEventListener('DOMContentLoaded', function() {
    // Puedes añadir interactividad aquí si la necesitas en el futuro.
    // Por ejemplo, animaciones, validaciones de formularios, etc.

    // Ejemplo simple: un mensaje en la consola al cargar la página
    console.log("El archivo somos.html ha sido cargado completamente.");

    // Si tuvieras elementos que quisieras animar o manipular con JavaScript,
    // este es el lugar para hacerlo.
    // Por ejemplo, si quisieras que el botón de Canva tuviera una pequeña animación
    // al pasar el mouse (además de la del CSS):
    const canvaButton = document.querySelector('.canva-button');
    if (canvaButton) {
        canvaButton.addEventListener('mouseover', () => {
            // console.log("Mouse sobre el botón de Canva");
            // Aquí podrías añadir una clase para una animación JS, si quisieras.
        });
        canvaButton.addEventListener('mouseout', () => {
            // console.log("Mouse fuera del botón de Canva");
        });
    }
});
