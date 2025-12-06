document.addEventListener("DOMContentLoaded", () => {

    // CLOCK FUNCTION
    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");

    function updateClock() {
        const now = new Date();

        const hours = now.getHours() % 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        hourHand.style.transform = `translateX(-50%) rotate(${hours * 30 + minutes * 0.5}deg)`;
        minuteHand.style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`;
        secondHand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock();

    // CONTACT PANEL
    const openBtn = document.getElementById("openContact");
    const closeBtn = document.getElementById("closePanel");
    const panel = document.getElementById("contactPanel");

    openBtn.addEventListener("click", () => {
        panel.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
        panel.classList.remove("open");
    });
});