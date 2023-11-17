function toggleDiv(divId) {
    var div = document.getElementById(divId);

    // Toggle de la clase 'mostrando' para aplicar o quitar la animación
    div.classList.toggle("mostrando", !div.classList.contains("mostrando"));
}