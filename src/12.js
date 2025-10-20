const box = document.querySelector("#e");
let dragging = false;
let currentRotation = 0;

box.ontouchstart = () => dragging = true;

box.ontouchmove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    const x = touch.pageX - box.offsetWidth / 2;
    const y = touch.pageY - box.offsetHeight / 2;
    box.style.left = x + "px";
    box.style.top = y + "px";

    currentRotation += 10;
    box.style.transform = `translate(-50%, -50%) rotate(${currentRotation}deg)`;
};

box.ontouchend = () => {
    dragging = false;
};
