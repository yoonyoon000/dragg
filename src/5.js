const dragger = document.querySelector(".dragger");
let dragging = false;

dragger.ontouchstart = () => dragging = true;

dragger.ontouchmove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    dragger.style.left = (touch.pageX - dragger.offsetWidth / 2) + "px";
    dragger.style.top = (touch.pageY - dragger.offsetHeight / 2) + "px";

    createNote(touch.pageX, touch.pageY);
}

dragger.ontouchend = () => dragging = false;

function createNote(x, y) {
    const note = document.createElement("div");
    note.className = "note";
    note.innerText = "♪";
    note.style.left = x + "px";
    note.style.top = y + "px";
    document.body.appendChild(note);

    setTimeout(() => note.remove(), 1000);
}
