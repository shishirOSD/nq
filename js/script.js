/* ==================== Toggle Navbar Icon ==================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle navbar visibility and change the icon when clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle the 'close' icon (bx-x)
    navbar.classList.toggle('active'); // Toggle the navbar visibility
};

/* ==================== Scroll Sections Active Link ==================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Handle scroll events to activate the correct navbar link and make navbar sticky
window.onscroll = () => {
    let top = window.scrollY; // Get the current scroll position

    // Loop through all sections to check which one is currently in view
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Adjust offset for better link activation
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Check if the section is in view
        if (top >= offset && top < offset + height) {
            // Remove the 'active' class from all nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add the 'active' class to the corresponding nav link
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        }
    });

    /* ==================== Sticky Navbar ==================== */
    let header = document.querySelector('header');
    // Add 'sticky' class to the header when scroll position exceeds 100px
    header.classList.toggle('sticky', top > 100);

    /* ==================== Close Navbar when Clicking a Link ==================== */
    // Close the navbar when a link is clicked
    menuIcon.classList.remove('bx-x'); // Remove the close icon class
    navbar.classList.remove('active'); // Close the navbar
};

/* ==================== Scroll Reveal ==================== */
// Initialize ScrollReveal for element animations on scroll
ScrollReveal({
    // reset: true,          // Enable reset (elements reappear when scrolling back)
    distance: '80px',     // Distance the element moves during the animation
    duration: 2000,       // Duration of the animation in milliseconds
    delay: 200           // Delay before the animation starts
});

// Reveal elements when they come into view with different origins
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); // Home content and headings from top
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' }); // From the bottom
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' }); // Specific elements from the left
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' }); // Specific elements from the right

/* ==================== Typed JS ==================== */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'YouTuber', 'Businessman'],
    typeSpeed: 100,      
    backSpeed: 100,      
    backDelay: 1000,     
    loop: true           
});