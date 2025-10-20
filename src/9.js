const box = document.getElementById("dragBox");

let dragging = false;
let fontInterval = null;
const fonts = ["Arial", "Verdana", "Courier New", "Georgia", "Tahoma", "Impact", "Comic Sans MS"];

box.ontouchstart = (e) => {
    dragging = true;

    fontInterval = setInterval(() => {
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        box.style.fontFamily = randomFont;
    }, 500);
};

box.ontouchmove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    const x = touch.pageX - box.offsetWidth / 2;
    const y = touch.pageY - box.offsetHeight / 2;
    box.style.left = x + "px";
    box.style.top = y + "px";
};

box.ontouchend = () => {
    dragging = false;
    clearInterval(fontInterval);
};
