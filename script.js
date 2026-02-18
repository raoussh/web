// Animation on scroll
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Initial style
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
});

// Form validation message
document.getElementById("contactForm")
.addEventListener("submit", function(e){
    e.preventDefault();
    alert("تم إرسال البيانات بنجاح ✨");
});