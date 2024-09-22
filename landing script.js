let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
        slide.classList.remove('active-slide');
    });

    slides[currentSlide].classList.add('active-slide');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

showSlide(currentSlide);

setInterval(() => changeSlide(1), 5000);

const items = document.querySelectorAll('.content-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
}, {
    threshold: 0.1
});

items.forEach(item => {
    observer.observe(item);
});

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
