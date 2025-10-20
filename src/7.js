const box = document.querySelector("#bbox");
let dragging = false;

box.ontouchstart = (e) => {
    dragging = true;
};

box.ontouchmove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    const x = touch.pageX - box.offsetWidth / 2;
    const y = touch.pageY - box.offsetHeight / 2;
    box.style.left = x + "px";
    box.style.top = y + "px";
    createTrail();
};

box.ontouchend = () => {
    dragging = false;
};

function createTrail() {
    const rect = box.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const trail = document.createElement("div");
    trail.className = "trail";
    trail.style.left = centerX - 20 + "px";
    trail.style.top = centerY - 20 + "px";
    document.body.appendChild(trail);

    setTimeout(() => trail.remove(), 800);
}
