document.addEventListener("DOMContentLoaded", () => {
    // Initialize ScrollReveal animations
    ScrollReveal().reveal(".section", { delay: 200, distance: "50px", origin: "bottom" });

    // Newsletter form submission alert
    const form = document.getElementById("newsletter-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for subscribing to our newsletter!");
        form.reset();
    });
});
