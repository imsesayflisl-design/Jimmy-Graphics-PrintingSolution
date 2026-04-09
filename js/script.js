document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if(hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when a link is clicked
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Service Navigation Items Click Handler
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Scroll Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.hero-content, .service-card, .stats-item, .testimonial-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Staggered Scroll Reveal for Portfolio Cards
    const revealObserverOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Apply a delay based on the order of appearance in the viewport
                entry.target.style.setProperty('--delay', index % 3); 
                entry.target.classList.add('reveal-active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Contact Form Handling (if it exists on contact page)
    const contactForm = document.querySelector('form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = contactForm.querySelectorAll('input, textarea, select');
            let isValid = true;

            inputs.forEach(input => {
                if(input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff1493';
                } else {
                    input.style.borderColor = '';
                }
            });

            if(isValid) {
                alert('Thank you! Your message has been sent. We will contact you shortly.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // ── High-Conversion Testimonial Carousel ──
    const track = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('carouselPrevBtn');
    const nextBtn = document.getElementById('carouselNextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    const carouselSection = document.getElementById('testimonials');

    if (track && carouselSection) {
        const cards = Array.from(track.children);
        let currentIndex = 0;
        let autoSlideTimer;

        // Configuration
        const getCardsPerView = () => {
            if (window.innerWidth > 1024) return 3;
            if (window.innerWidth > 768) return 2;
            return 1;
        };

        const updateCarousel = () => {
            const cardsPerView = getCardsPerView();
            const maxIndex = cards.length - cardsPerView;
            
            // Validate index
            if (currentIndex > maxIndex) currentIndex = maxIndex;
            if (currentIndex < 0) currentIndex = 0;

            const offset = (100 / cardsPerView) * currentIndex;
            track.style.transform = `translateX(-${offset}%)`;

            // Update dots
            updateDots();
        };

        const updateDots = () => {
            const cardsPerView = getCardsPerView();
            const dotCount = cards.length - cardsPerView + 1;
            
            dotsContainer.innerHTML = '';
            for (let i = 0; i < dotCount; i++) {
                const dot = document.createElement('div');
                dot.className = `carousel-dot ${i === currentIndex ? 'active' : ''}`;
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    updateCarousel();
                    resetAutoSlide();
                });
                dotsContainer.appendChild(dot);
            }
        };

        const startAutoSlide = () => {
            autoSlideTimer = setInterval(() => {
                const cardsPerView = getCardsPerView();
                if (currentIndex >= cards.length - cardsPerView) {
                    currentIndex = 0;
                } else {
                    currentIndex++;
                }
                updateCarousel();
            }, 4000);
        };

        const resetAutoSlide = () => {
            clearInterval(autoSlideTimer);
            startAutoSlide();
        };

        // Event Listeners
        nextBtn.addEventListener('click', () => {
            const cardsPerView = getCardsPerView();
            if (currentIndex < cards.length - cardsPerView) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
            resetAutoSlide();
        });

        prevBtn.addEventListener('click', () => {
            const cardsPerView = getCardsPerView();
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = cards.length - cardsPerView;
            }
            updateCarousel();
            resetAutoSlide();
        });

        // Pause on Hover
        track.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
        track.addEventListener('mouseleave', startAutoSlide);

        // Responsive handling
        window.addEventListener('resize', updateCarousel);

        // Initial setup
        updateCarousel();
        startAutoSlide();

        // ── Scroll Reveal Animation ──
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        scrollObserver.observe(carouselSection);
    }
});


