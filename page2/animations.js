// JavaScript for the carousel
const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;
const numImages = carousel.children.length;

function updateCarousel(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % numImages;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + numImages) % numImages;
    }

    for (let i = 0; i < numImages; i++) {
        if (i === currentIndex) {
            carousel.children[i].style.opacity = 1;
        } else {
            carousel.children[i].style.opacity = 0;
        }
    }
}

leftArrow.addEventListener('click', () => {
    updateCarousel('prev');
});

rightArrow.addEventListener('click', () => {
    updateCarousel('next');
});

// Initialize by showing the first image
updateCarousel('next');

// Disable arrows when at the beginning or end
function updateArrowState() {
    leftArrow.classList.toggle('disabled', currentIndex === 0);
    rightArrow.classList.toggle('disabled', currentIndex === numImages - 1);
}

updateArrowState();
