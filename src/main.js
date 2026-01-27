const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Subtle parallax effect for hero
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        hero.style.backgroundPositionY = `${scroll * 0.5}px`;
    });
}

// Card intersection observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(card);
});

// Handle "Inicio" link for smooth scrolling avoid reload on home
document.addEventListener('DOMContentLoaded', () => {
    const inicioLinks = document.querySelectorAll('a[href="/"]');

    inicioLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if we are currently on the home page (pathname is / or /index.html)
            if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                // Remove hash from URL if present
                if (window.location.hash) {
                    history.pushState("", document.title, window.location.pathname + window.location.search);
                }
            }
        });
    });
});

console.log('Karen Explora: Protocolo de Belleza Natural Activado.');

// Interview Slider Functionality
const sliderContainer = document.getElementById('interview-slider');
if (sliderContainer) {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            sliderContainer.scrollBy({
                left: sliderContainer.offsetWidth,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            sliderContainer.scrollBy({
                left: -sliderContainer.offsetWidth,
                behavior: 'smooth'
            });
        });

        // Optional: Hide buttons if at start/end - might be complex with scroll snap, 
        // simple version handles navigation fine.
    }
}
