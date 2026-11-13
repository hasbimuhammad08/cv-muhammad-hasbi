// ===================================
// 1. SMOOTH SCROLL
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ===================================
// 2. ANIMASI SECTION SAAT SCROLL
// ===================================

const animatedElements = document.querySelectorAll(
    ".about, .experience, .skills, .projects, .education, .contact"
);

animatedElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

animatedElements.forEach(element => {
    observer.observe(element);
});


// ===================================
// 3. TOMBOL BACK TO TOP
// ===================================

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";
backToTop.setAttribute("aria-label", "Kembali ke atas");

backToTop.style.cssText = `
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    background: #2563eb;
    color: white;
    font-size: 25px;
    cursor: pointer;
    display: none;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
`;

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    backToTop.style.display =
        window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
