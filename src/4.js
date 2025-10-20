const box = document.querySelector(".box");
let dragging = false;
let hue = 0;

box.ontouchstart = (e) => {
    dragging = true;
}

box.ontouchmove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    box.style.left = (touch.pageX - box.offsetWidth / 2) + "px";
    box.style.top = (touch.pageY - box.offsetHeight / 2) + "px";

    hue = (hue + 5) % 360;
    box.style.background = `hsl(${hue}, 100%, 50%)`;
}

box.ontouchend = () => {
    dragging = false;
}
