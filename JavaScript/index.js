
const myWhatsAppNumber = "2347032331829";

// 1. Mobile Menu Toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
});

// 2. Slider Logic (Auto-play + Manual)
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 5000); // 5 seconds auto-switch
}

document.getElementById('nextBtn').addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
    startSlider();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    clearInterval(slideInterval);
    currentSlide--;
    showSlide(currentSlide);
    startSlider();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        currentSlide = index;
        showSlide(currentSlide);
        startSlider();
    });
});

startSlider(); // Initialize

// 3. WhatsApp Functions
function orderProduct(productName, price) {
    const msg = `Hello Tech Sheikh Hub, I want to buy the *${productName}* for ₦${price}. Is it available?`;
    window.open(`https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

function enrollCourse(courseName) {
    const msg = `Hello Tech Sheikh Academy, I want to enroll in the *${courseName}* course. Please send me details.`;
    window.open(`https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

// 4. Contact Form to WhatsApp
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const service = document.getElementById('contactService').value;
    const message = document.getElementById('contactMessage').value;

    const waMsg = `*New Website Inquiry*\n\n*Name:* ${name}\n*Interested In:* ${service}\n*Message:* ${message}`;
    window.open(`https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(waMsg)}`, '_blank');
    this.reset();
});

// 5. Dynamic Year & Scroll Animation
document.getElementById('year').textContent = new Date().getFullYear();