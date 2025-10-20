const ball = document.querySelector('#ball')
if (ball) {
    ball.ontouchstart = (e) => {

    };

    ball.ontouchmove = (e) => {
        const touch = e.touches[0];
        ball.style.left = `${touch.clientX - 40}px`;
        ball.style.top = `${touch.clientY - 40}px`;
    };

    ball.ontouchend = (e) => {

    };
}