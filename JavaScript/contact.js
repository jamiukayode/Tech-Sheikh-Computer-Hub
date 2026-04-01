const myWhatsAppNumber = "2347032331829";

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Contact Form to WhatsApp
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');

    const waMessage = `
*New Website Inquiry*
👤 Name: ${name}
📞 Phone: ${phone}
🔖 Service: ${service}

💬 Message:
${message}
            `.trim();

    window.open(`https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(waMessage)}`, '_blank');

    // Show success toast
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 4000);

    contactForm.reset();
});