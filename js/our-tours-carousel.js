(function() {
    const slides = [
        '<div><img src="img/img-header-tours/big.tree.jpg" alt="Big Tree"></div>',
        '<div><img src="img/img-header-tours/elefant.two.jpg" alt="Elefant Two"></div>',
        '<div><img src="img/img-header-tours/gorilla.jpg" alt="Gorilla"></div>',
        '<div><img src="img/img-header-tours/roe.deer.jpg" alt="Roe Deer"></div>',
        '<div><img src="img/img-header-tours/wisent.jpg" alt="Wisent"></div>',
    ];

    let currentSlideIdx = 0;

    function renderSlides() {
        const slidesContainer = document.querySelector('.our-tours-carousel .slides-container');
        slidesContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 500) {
            const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slidesContainer.innerHTML += slides[slide2Idx];
            if (window.innerWidth > 900) {
                const slide3Idx = slide2Idx + 1 >= slides.length ? 0 : slide2Idx + 1;
                slidesContainer.innerHTML += slides[slide3Idx];    
            }
        }
    }

    function nextSlide() {
        currentSlideIdx++;
        if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
        renderSlides();
    }

    function prevSlide() {
        currentSlideIdx--;
        if (currentSlideIdx < 0) currentSlideIdx = slides.length - 1;
        renderSlides();
    }

    setInterval(nextSlide, 3000);
    document.querySelector('.our-tours-carousel .prev').addEventListener('click', prevSlide);
    document.querySelector('.our-tours-carousel .next').addEventListener('click', nextSlide);

    renderSlides();

    window.addEventListener('resize', renderSlides);
})();