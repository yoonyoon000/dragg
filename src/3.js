const body = document.body;
let dragging = null;
const sizeOrder = ["small", "medium", "large", "xlarge"];

document.querySelectorAll(".circle.small").forEach(circle => {
    setRandomPosition(circle);
    addTouchEvents(circle);
});

setInterval(() => createSmallCircle(), 4000);

function createSmallCircle() {
    const circle = document.createElement("div");
    circle.className = "circle small";
    setRandomPosition(circle);
    addTouchEvents(circle);
    body.appendChild(circle);
}

function addTouchEvents(circle) {
    circle.ontouchstart = () => dragging = circle;

    circle.ontouchmove = (e) => {
        if (!dragging) return;
        e.preventDefault();
        const touch = e.touches[0];
        dragging.style.left = (touch.pageX - dragging.offsetWidth / 2) + "px";
        dragging.style.top = (touch.pageY - dragging.offsetHeight / 2) + "px";
    }

    circle.ontouchend = () => {
        if (!dragging) return;

        const allCircles = document.querySelectorAll(".circle");
        allCircles.forEach(other => {
            if (other === dragging) return;

            if (overlap(dragging, other) && getSizeIndex(dragging) === getSizeIndex(other)) {
                const nextSize = sizeOrder[getSizeIndex(dragging) + 1];
                if (nextSize) {
                    dragging.className = "circle " + nextSize;
                }
                other.remove();
                createSmallCircle();
            }
        });

        dragging = null;
    }
}

function setRandomPosition(circle) {
    const x = Math.random() * (window.innerWidth - circle.offsetWidth);
    const y = Math.random() * (window.innerHeight - circle.offsetHeight);
    circle.style.left = x + "px";
    circle.style.top = y + "px";
}

function overlap(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();
    return !(aRect.right < bRect.left ||
        aRect.left > bRect.right ||
        aRect.bottom < bRect.top ||
        aRect.top > bRect.bottom);
}

function getSizeIndex(circle) {
    return sizeOrder.findIndex(size => circle.classList.contains(size));
}
