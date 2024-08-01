// script.js

document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll("#banner .slide img");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);

    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const interest = document.getElementById('interest').value;

        if (!name || !email || !interest) {
            alert("All fields are required!");
            e.preventDefault();
        } else {
            alert("Form submitted successfully!");
        }
    });
});
