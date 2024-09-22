let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // Ensure the slide index loops correctly
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
        slide.classList.remove('active-slide');
    });

    slides[currentSlide].classList.add('active-slide');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initially show the first slide
showSlide(currentSlide);

// Optional: Automatically change slides every 5 seconds
setInterval(() => changeSlide(1), 5000);


/* content section animation------------------------------------------------------------------------------------------*/
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


/* scrolling header reappear functionality------------------------------------------------------------------------------*/
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)'; // Hide header
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)'; // Show header
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
