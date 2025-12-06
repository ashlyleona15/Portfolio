window.addEventListener("scroll", function () {
    document.querySelector("header")
        .classList.toggle("scrolled", window.scrollY > 50);
});

const cards = document.querySelectorAll(".card");

function revealCards() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            card.classList.add("visible");
        }
    });
}

const contactPanel = document.getElementById("contactPanel");
const dimOverlay = document.getElementById("dimOverlay");

document.getElementById("OpenContact").addEventListener("click", () => {
    contactPanel.classList.add("open");
    dimOverlay.classList.add("show");
});

document.getElementById("closePanel").addEventListener("click", () => {
    contactPanel.classList.remove("open");
    dimOverlay.classList.remove("show");
});

dimOverlay.addEventListener("click", () => {
    contactPanel.classList.remove("open");
    dimOverlay.classList.remove("show");
});