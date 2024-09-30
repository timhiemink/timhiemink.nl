/* Make hamburger menu for phone users */

var MenuClosed = true;

function toggleMenu() {
    var element = document.getElementById("nav-menu-id");
    var header = document.getElementById("header-id");
    if (MenuClosed === true) { 
        element.style.display = "flex";
        element.style.height = "100vh";

        MenuClosed = false;
    }
}





/* play music and rotate background*/ 
const images = [
    'url(../Images/1arrows.jpg)',
    'url(../Images/2arrows.jpg)',
    'url(../Images/3arrows.jpg)',
    'url(../Images/4arrows.jpg)'
];
let currentIndex = 0;
let interval;

const main = document.getElementById("main")
function changeBackground() {
    main.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

const button = document.getElementById('play-button');
const audio = document.getElementById('button-audio');
function PlayStop() {
    button.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            button.textContent = '| |';
            button.classList.add('playing')
            interval = setInterval(changeBackground, 1000);
            /* button.classList.add('pressed'); */
        } else {
            audio.pause();
            button.textContent = '▶';
            clearInterval(interval);
            button.classList.remove('playing')
            /* button.classList.remove('pressed'); */
        }
    });
}
PlayStop();