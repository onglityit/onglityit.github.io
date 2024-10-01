// AuthenticLife/src/01-hallucinate/01.1-hallucinate.js
export function initHallucination() {
    const container = document.createElement('div');
    container.id = 'hallucinate-container';
    document.body.appendChild(container);

    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.overflow = 'hidden';

    createHallucinationEffect(container);
}

function createHallucinationEffect(container) {
    const shapeCount = 50;
    const shapes = [];

    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        shape.className = 'hallucination-shape';
        shape.style.position = 'absolute';
        shape.style.borderRadius = '50%';
        shape.style.opacity = '0.7';
        shape.style.mixBlendMode = 'screen';

        const size = Math.random() * 100 + 50;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;

        const hue = Math.random() * 360;
        shape.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;

        container.appendChild(shape);
        shapes.push(shape);

        animateShape(shape);
    }
}

function animateShape(shape) {
    const duration = Math.random() * 10000 + 5000;

    anime({
        targets: shape,
        translateX: () => anime.random(0, window.innerWidth),
        translateY: () => anime.random(0, window.innerHeight),
        scale: () => anime.random(0.5, 2),
        duration: duration,
        easing: 'easeInOutQuad',
        complete: function() {
            animateShape(shape);
        }
    });
}