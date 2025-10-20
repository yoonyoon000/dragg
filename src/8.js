const canvas = document.querySelector("#canvas");

function createInk(x, y) {
    const ink = document.createElement("div");
    ink.className = "ink";
    ink.style.left = x - 4 + "px";
    ink.style.top = y - 4 + "px";
    canvas.appendChild(ink);

    setTimeout(() => ink.remove(), 1000);
}

canvas.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    createInk(touch.clientX, touch.clientY);
});
