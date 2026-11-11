function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Animation เมื่อเลื่อนหน้าจอ
const cards = document.querySelectorAll(".profile-card, .work-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card => observer.observe(card));
