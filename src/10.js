const box = document.querySelector("#dragbox");

let dragging = false;
let cornerInterval = null;

box.ontouchstart = (e) => {
    dragging = true;

    cornerInterval = setInterval(() => {
        const currentRadius = parseInt(getComputedStyle(box).borderRadius);
        box.style.borderRadius = currentRadius < 60 ? "60px" : "10px";
    }, 300);
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
    clearInterval(cornerInterval);
    box.style.borderRadius = "10px";
};
