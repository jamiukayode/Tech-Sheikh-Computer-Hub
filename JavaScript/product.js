
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

// Product Filtering Logic
const brandFilter = document.getElementById('brand-filter');
const ramFilter = document.getElementById('ram-filter');
const storageFilter = document.getElementById('storage-filter');
const resetFiltersBtn = document.getElementById('reset-filters');
const noProductsMessage = document.getElementById('no-products-found');
const productCards = document.querySelectorAll('.product-card');

function applyFilters() {
    const selectedBrand = brandFilter.value;
    const selectedRam = ramFilter.value;
    const selectedStorage = storageFilter.value;
    let productsVisible = 0;

    productCards.forEach(card => {
        const productBrand = card.getAttribute('data-brand');
        const productRam = card.getAttribute('data-ram');
        const productStorage = card.getAttribute('data-storage');

        const brandMatch = selectedBrand === 'all' || productBrand === selectedBrand;
        const ramMatch = selectedRam === 'all' || productRam === selectedRam;
        const storageMatch = selectedStorage === 'all' || productStorage === selectedStorage;

        if (brandMatch && ramMatch && storageMatch) {
            card.style.display = 'block';
            productsVisible++;
        } else {
            card.style.display = 'none';
        }
    });

    if (productsVisible === 0) {
        noProductsMessage.style.display = 'block';
    } else {
        noProductsMessage.style.display = 'none';
    }
}

function resetAllFilters() {
    brandFilter.value = 'all';
    ramFilter.value = 'all';
    storageFilter.value = 'all';
    applyFilters();
}

brandFilter.addEventListener('change', applyFilters);
ramFilter.addEventListener('change', applyFilters);
storageFilter.addEventListener('change', applyFilters);
resetFiltersBtn.addEventListener('click', resetAllFilters);

// WhatsApp Order Function
function orderProduct(productName, price) {
    const message = `Hello Tech Sheikh Hub, I'm interested in buying the *${productName}* for *₦${price}*. Is it still available? Can I get more pictures and specs?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${myWhatsAppNumber}?text=${encodedMessage}`, '_blank');
}