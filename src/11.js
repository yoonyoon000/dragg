const box = document.querySelector("#c");
let dragging = false;

box.ontouchstart = () => dragging = true;

box.ontouchmove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    const x = touch.pageX - box.offsetWidth / 2;
    const y = touch.pageY - box.offsetHeight / 2;
    box.style.left = x + "px";
    box.style.top = y + "px";

    const angle = (Math.random() - 0.5) * 20;
    box.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
};

box.ontouchend = () => {
    dragging = false;
    box.style.transform = "translate(-50%, -50%) rotate(0deg)";
};
