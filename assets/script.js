document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("navbar");
    const menu = document.querySelector(".menu-toggle");
    const links = document.querySelector(".nav-links");

    window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", window.scrollY > 30);
    });

    menu?.addEventListener("click", () => {
        menu.classList.toggle("active");
        links.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach(a => {
        a.addEventListener("click", () => {
            menu?.classList.remove("active");
            links?.classList.remove("open");
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    document.querySelectorAll(".meter i").forEach(bar => {
        const level = getComputedStyle(bar).getPropertyValue("--level");
        bar.style.width = "0";
        setTimeout(() => bar.style.width = level, 300);
    });

    const photo = document.getElementById("profilePhoto");
    photo?.addEventListener("error", () => {
        photo.src = "./images/profile-placeholder.svg";
    });

    document.getElementById("contactForm")?.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thanks! Your message form is ready. Connect it to PHP/email when you want to make it functional.");
    });
});
