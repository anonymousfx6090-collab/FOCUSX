const menuBtn = document.getElementById("menuBtn");
const backdrop = document.getElementById("backdrop");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
    backdrop.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click",() => {
        backdrop.classList.remove("active");
    });
})


const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = getComputedStyle(entry.target).animation;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(
        ".feature-box, .how-it-works-card, .free-card, .pro-card, .premium-card"
    );
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});


document.querySelectorAll(".feature-box .icon svg").forEach(icon => {
    icon.addEventListener("mouseenter", function () {
        this.style.transition = "transform 0.6s ease-in-out";
    });
});

document.querySelectorAll(".stars-container svg").forEach((star, index) => {
    star.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.3) rotate(20deg)";
        this.style.filter = "drop-shadow(0 0 10px rgba(212, 175, 55, 1))";
    });

    star.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
        this.style.filter = "drop-shadow(0 0 2px rgba(212, 175, 55, 0.3))";
    });
});

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href !== "#") {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});
