const a = document.querySelector(".a");
let dragging = false;
let scale = 1;
let scaleInterval = null;

a.ontouchstart = (e) => {
    dragging = true;

    scaleInterval = setInterval(() => {
        scale += 0.04;
        a.style.transform = `scale(${scale})`;
    }, 16);
};

a.ontouchmove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    a.style.left = (touch.pageX - a.offsetWidth / 2) + "px";
    a.style.top = (touch.pageY - a.offsetHeight / 2) + "px";
};

a.ontouchend = () => {
    dragging = false;
    clearInterval(scaleInterval);

    scale = 1;
    a.style.transform = `scale(${scale})`;
};
