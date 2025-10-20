const box = document.querySelector("#j");
let dragging = false;

box.ontouchstart = () => {
    dragging = true;
    box.style.opacity = "0.3";
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
    box.style.opacity = "1";
};
