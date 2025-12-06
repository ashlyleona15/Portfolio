const contactPanel = document.getElementById("contactPanel");
const dimOverlay = document.getElementById("dimOverlay");

document.getElementById("openContact").addEventListener("click", () => {
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