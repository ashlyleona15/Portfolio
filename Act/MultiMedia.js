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

function playPause(videoId) { 
    let video = document.getElementById(videoId);

    document.querySelectorAll("video").forEach(v => {
        if (v.id !== videoId) v.pause();
    });

    video.paused ? video.play() : video.pause();
} 

function makeBig(videoId) { 
    document.getElementById(videoId).width = 560; 
} 

function makeSmall(videoId) { 
    document.getElementById(videoId).width = 320; 
} 

function makeNormal(videoId) { 
    document.getElementById(videoId).width = 420; 
} 