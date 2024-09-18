const imagemContainer = document.querySelector('.imagem-container');

window.addEventListener('load', () => {
    setTimeout(() => {
        imagemContainer.classList.add('mostrar');
    }, 1000); // Atraso de 1 segundo (ajuste conforme desejado)
});