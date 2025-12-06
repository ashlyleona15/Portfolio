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

function appendNumber(num) {
    document.getElementById("display").value += num;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display").value;

    try {
        let result = eval(display);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
