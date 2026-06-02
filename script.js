// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        if (window.pageYOffset >= top - 50 && window.pageYOffset < top + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(
                `.nav-links a[href="#${section.id}"]"
            );
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Welcome message on page load
window.addEventListener('load', () => {
    console.log('Selamat datang di website Mohamad Yusuf!');
});

// Simple animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
});