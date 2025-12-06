// Toggle Side Panel
function togglePanel() {
    const panel = document.querySelector(".nav-panel");
    panel.classList.toggle("active");
}
// Close Side Panel
function closePanel() {
    const panel = document.querySelector(".nav-panel");
    panel.classList.remove("active");
}