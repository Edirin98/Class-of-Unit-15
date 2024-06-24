document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('nav-list');

    // Toggle navigation menu on small screens
    navToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Close navigation menu when a link is clicked (for better user experience on small screens)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navList.classList.remove('show');
        });
    });
});