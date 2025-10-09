// Enhanced scroll spy for Hugo Blox
document.addEventListener('DOMContentLoaded', function () {
    // Get all sections with IDs
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');

    if (sections.length === 0 || navLinks.length === 0) return;

    // Function to update active nav link
    function updateActiveNavLink() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset for navbar height
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop &&
                window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        // Update nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', updateActiveNavLink);

    // Initial check
    updateActiveNavLink();
});
