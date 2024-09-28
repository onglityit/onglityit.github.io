export function createBoxes() {
    const container = document.getElementById('box-container');
    const boxCount = 50;

    container.style.position = 'absolute';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.perspective = '1000px';

    for (let i = 0; i < boxCount; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.position = 'absolute';
        box.style.width = '50px';
        box.style.height = '50px';
        box.style.backgroundColor = `rgba(0, 100, 255, ${Math.random() * 0.5 + 0.25})`;
        box.style.borderRadius = '10px';
        box.style.left = `${Math.random() * 100}%`;
        box.style.top = `${Math.random() * 100}%`;
        box.style.transform = `translateZ(${Math.random() * 500 - 250}px)`;

        container.appendChild(box);

        animateBox(box);
    }
}

function animateBox(box) {
    const duration = Math.random() * 10000 + 5000;
    const delay = Math.random() * 5000;

    anime({
        targets: box,
        translateX: anime.random(-200, 200),
        translateY: anime.random(-200, 200),
        translateZ: anime.random(-250, 250),
        rotateX: anime.random(-360, 360),
        rotateY: anime.random(-360, 360),
        rotateZ: anime.random(-360, 360),
        duration: duration,
        delay: delay,
        easing: 'easeInOutQuad',
        complete: function(anim) {
            animateBox(box);
        }
    });
}