document.addEventListener('DOMContentLoaded', () => {

    let btn = document.querySelector('.btn');
    let image = document.getElementById('bulb_img');
    let audio = document.getElementById('audio');
    let lighthum = document.getElementById('lighthum');
    let body = document.body;

    btn.addEventListener('click', () => {
        body.classList.toggle("on");
        lightChange();

        if (audio.paused) {
            audio.currentTime = 0;
            audio.play();
        }
    });

    function lightChange() {
        if (image.src.includes("bulb-off")) {
            image.src = "bulb-on-removebg-preview.png";
            lighthum.play();
            setTimeout(() => {
                image.src = "coco.jfif";

            }, 1200);
        } else {
            image.src = "bulb-off.png";
        }
    }
});
