// =========================
// PORTFOLIO JAVASCRIPT
// =========================

// Scroll reveal animation
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// Navbar effect when scrolling
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

});
// =========================
// TYPING EFFECT
// =========================

const typingText = document.getElementById("typing-text");

const roles = [
    "Software Developer",
    "Data Scientist",
    "AI Enthusiast",
    "Python Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// =========================
// SCROLL REVEAL
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {

    section.classList.add("hidden");
    observer.observe(section);

});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

});
