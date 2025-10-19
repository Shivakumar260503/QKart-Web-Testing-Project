
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Function to apply the saved theme on page load
    const applyTheme = () => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            body.classList.add('dark-mode');
        }
    };

    // Event listener for the dark mode toggle button
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Save the user's preference to localStorage
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });

    // Apply theme on initial load
    applyTheme();

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add a simple fade-in animation on scroll
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});
