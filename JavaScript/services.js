// Mobile Menu
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
});
// Year
document.getElementById('year').textContent = new Date().getFullYear();