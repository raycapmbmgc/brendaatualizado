let slideIndex = 0;
        
function showSlides() {
    const slides = document.querySelectorAll('.carousel-images img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1000); // Muda de imagem a cada 3 segundos
}

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex > document.querySelectorAll('.carousel-images img').length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = document.querySelectorAll('.carousel-images img').length; }
    showSlidesManual();
}

function showSlidesManual() {
    const slides = document.querySelectorAll('.carousel-images img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

showSlides(); 