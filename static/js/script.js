document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu functionality
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            console.log('Burger menu clicked. Active state:', navLinks.classList.contains('active'));
        });
    } else {
        console.error('Burger or navLinks element not found.');
    }

    // Fade-in effect for the form on page load
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = 0;
        container.style.transition = 'opacity 1s';
        container.style.opacity = 1;
    } else {
        console.error('Container element not found.');
    }

    // Optionally, you can add a function to handle form submission
    const predictionForm = document.getElementById('predictionForm');
    if (predictionForm) {
        predictionForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Add your prediction logic here
            alert('Form submitted!'); // Placeholder for actual submission logic
        });
    } else {
        console.error('Prediction form element not found.');
    }
});
