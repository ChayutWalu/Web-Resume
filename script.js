// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Highlight
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Skill Bars Animation
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 200);
    });
};

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animate skill bars when skills section is visible
            if (entry.target.id === 'skills') {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        alert(`Thank you for your message, ${data.name}! I'll get back to you soon.`);
        
        // Reset the form
        contactForm.reset();
    });
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    section.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .timeline-item {
        opacity: 0;
        transform: translateX(-30px);
        transition: all 0.6s ease;
    }
    
    .animate .timeline-item {
        opacity: 1;
        transform: translateX(0);
    }
    
    .animate .timeline-item:nth-child(1) { transition-delay: 0.1s; }
    .animate .timeline-item:nth-child(2) { transition-delay: 0.2s; }
    .animate .timeline-item:nth-child(3) { transition-delay: 0.3s; }
    
    .education-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .animate .education-card {
        opacity: 1;
        transform: translateY(0);
    }
    
    .animate .education-card:nth-child(1) { transition-delay: 0.1s; }
    .animate .education-card:nth-child(2) { transition-delay: 0.2s; }
    
    .certificate-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .animate .certificate-card {
        opacity: 1;
        transform: translateY(0);
    }
    
    .animate .certificate-card:nth-child(1) { transition-delay: 0.1s; }
    .animate .certificate-card:nth-child(2) { transition-delay: 0.2s; }
    .animate .certificate-card:nth-child(3) { transition-delay: 0.3s; }
    .animate .certificate-card:nth-child(4) { transition-delay: 0.4s; }
    .animate .certificate-card:nth-child(5) { transition-delay: 0.5s; }
    .animate .certificate-card:nth-child(6) { transition-delay: 0.6s; }
    
    .skill-category {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .animate .skill-category {
        opacity: 1;
        transform: translateY(0);
    }
    
    .animate .skill-category:nth-child(1) { transition-delay: 0.1s; }
    .animate .skill-category:nth-child(2) { transition-delay: 0.2s; }
    .animate .skill-category:nth-child(3) { transition-delay: 0.3s; }
`;
document.head.appendChild(style);

// Typing Effect for Hero Title (Optional)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let index = 0;
    
    const typeWriter = () => {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// Parallax Effect for Hero Section
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
}

// Dynamic Year in Footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer p');
if (footerText) {
    footerText.innerHTML = `&copy; ${currentYear} Chayut Walunchodom. All rights reserved.`;
}

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);

// Update icon based on current theme
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Initialize theme
updateThemeIcon(currentTheme);

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Add smooth transition
    body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
        body.style.transition = '';
    }, 300);
});

// Lazy Loading for Images
const images = document.querySelectorAll('img');
const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
}, imageOptions);

images.forEach(img => {
    imageObserver.observe(img);
});

// Add loading animation for images
const imgStyle = document.createElement('style');
imgStyle.textContent = `
    img {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    img.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(imgStyle);

// Activities Carousel Functionality
class ActivityCarousel {
    constructor() {
        this.slides = document.querySelectorAll('.activity-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.querySelector('.activity-prev');
        this.nextBtn = document.querySelector('.activity-next');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.autoRotateInterval = null;
        this.isAutoRotating = true;
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) return;
        
        this.bindEvents();
        this.startAutoRotate();
        this.updateSlide();
    }
    
    bindEvents() {
        // Previous button
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        // Next button
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Indicator clicks
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Pause auto-rotation on hover
        const carousel = document.querySelector('.activity-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.pauseAutoRotate());
            carousel.addEventListener('mouseleave', () => this.resumeAutoRotate());
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }
    
    updateSlide() {
        // Remove active class from all slides and indicators
        this.slides.forEach(slide => {
            slide.classList.remove('active', 'prev');
        });
        
        this.indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Add active class to current slide
        if (this.slides[this.currentSlide]) {
            this.slides[this.currentSlide].classList.add('active');
        }
        
        // Add active class to current indicator
        if (this.indicators[this.currentSlide]) {
            this.indicators[this.currentSlide].classList.add('active');
        }
        
        // Add prev class to previous slide for smooth transitions
        const prevIndex = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
        if (this.slides[prevIndex]) {
            this.slides[prevIndex].classList.add('prev');
        }
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSlide();
    }
    
    prevSlide() {
        this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
        this.updateSlide();
    }
    
    goToSlide(index) {
        if (index >= 0 && index < this.totalSlides) {
            this.currentSlide = index;
            this.updateSlide();
        }
    }
    
    startAutoRotate() {
        this.autoRotateInterval = setInterval(() => {
            if (this.isAutoRotating) {
                this.nextSlide();
            }
        }, 4000); // Change slide every 4 seconds
    }
    
    pauseAutoRotate() {
        this.isAutoRotating = false;
    }
    
    resumeAutoRotate() {
        this.isAutoRotating = true;
    }
    
    destroy() {
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
        }
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ActivityCarousel();
});

// Add carousel animation styles
const carouselStyle = document.createElement('style');
carouselStyle.textContent = `
    .activity-slide {
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .activity-carousel:hover .activity-prev,
    .activity-carousel:hover .activity-next {
        opacity: 1;
        transform: scale(1);
    }
    
    .activity-prev,
    .activity-next {
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.3s ease;
    }
    
    .activity-overlay {
        transition: transform 0.3s ease;
    }
    
    .indicator {
        transition: all 0.3s ease;
    }
    
    .indicator:hover {
        transform: scale(1.3);
    }
`;
document.head.appendChild(carouselStyle);

// Hero Canvas Particle Effect
(function() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];
    let animationFrameId = null;

    function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        width = canvas.width = rect.width;
        height = canvas.height = rect.height;
        initParticles();
    }

    class Particle {
        constructor() {
            this.reset();
            // Start at a random position initially
            this.x = Math.random() * width;
            this.y = Math.random() * height;
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.6;
            this.vy = (Math.random() - 0.5) * 0.6;
            this.radius = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges with a slight margin
            if (this.x < 0 || this.x > width) this.vx = -this.vx;
            if (this.y < 0 || this.y > height) this.vy = -this.vy;
        }

        draw() {
            const theme = document.body.getAttribute('data-theme') || 'light';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            // In dark mode: red particles. In light mode: red/dark grey particles.
            ctx.fillStyle = theme === 'dark' ? 'rgba(230, 57, 70, 0.5)' : 'rgba(26, 26, 26, 0.3)';
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const count = Math.min(80, Math.floor((width * height) / 18000));
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        // Draw connections
        const theme = document.body.getAttribute('data-theme') || 'light';
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    const alpha = (1 - dist / 120) * 0.25;
                    ctx.strokeStyle = theme === 'dark' 
                        ? `rgba(230, 57, 70, ${alpha})` 
                        : `rgba(26, 26, 26, ${alpha * 0.6})`;
                    ctx.lineWidth = 0.6;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    // Initialize and start animation
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
})();