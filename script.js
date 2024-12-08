window.addEventListener('load', () => {
    const imagemContainer = document.querySelector('.imagem-container');
    const imagemContainer2 = document.querySelector('.imagem-container2');
    const paragrahContainer = document.querySelector('.paragraph-container');

    setTimeout(() => {
        imagemContainer.classList.add('mostrar');
        paragrahContainer.classList.add('mostrar');
    }, 1000); 

    setTimeout(() => {
        imagemContainer2.classList.add('mostrar');
    }, 3000); 
});

window.addEventListener('scroll', () => {
    const profiles = document.querySelectorAll('.profile');
    const windowHeight = window.innerHeight;
    profiles.forEach((profile, index) => {
        const profileTop = profile.getBoundingClientRect().top;
        if (profileTop < windowHeight - 100) {
            setTimeout(() => {
                profile.classList.add('show');
            }, index * 300);
        }
    });
});
