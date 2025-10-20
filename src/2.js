const cup = document.querySelector('#cup');
const water = document.querySelector('#water');
const percent = document.querySelector('#percent');

cup.ontouchmove = (e) => {
    const touch = e.touches[0].clientY;

    const cupTop = cup.offsetTop;
    const cupHeight = cup.offsetHeight;

    let fill = 1 - (touch - cupTop) / cupHeight;
    if (fill < 0) fill = 0;
    if (fill > 1) fill = 1;

    water.style.height = (fill * 100) + "%";

    percent.textContent = Math.round(fill * 100) + "%";
};