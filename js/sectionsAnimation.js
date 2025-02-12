"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const fadeInOnScroll = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.85) {
                section.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run on page load in case some sections are already in view
});