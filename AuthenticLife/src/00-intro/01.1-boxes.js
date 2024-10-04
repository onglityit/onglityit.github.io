// AuthenticLife/src/00-intro/01.1-boxes.js
export function createBoxes() {
    const container = document.getElementById('box-container');
    const boxCount = 50;

    container.style.position = 'absolute';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.perspective = '1000px';

    const boxes = [];

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
        boxes.push(box);

        animateBox(box);
    }

    // Schedule powderization after 10 seconds
    setTimeout(() => powderizeBoxes(boxes), 10000);
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

function powderizeBoxes(boxes) {
    boxes.forEach(box => {
        const particles = createParticles(box);
        box.remove();
        animateParticles(particles);
    });

    // Transition to hallucination effect after powderization
    setTimeout(() => {
        document.getElementById('box-container').remove();
        startHallucination();
    }, 12000);
}

function createParticles(box) {
    const particleCount = 20;
    const particles = [];
    const rect = box.getBoundingClientRect();

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.backgroundColor = box.style.backgroundColor;
        particle.style.left = `${rect.left + Math.random() * rect.width}px`;
        particle.style.top = `${rect.top + Math.random() * rect.height}px`;
        document.body.appendChild(particle);
        particles.push(particle);
    }

    return particles;
}

function animateParticles(particles) {
    anime({
        targets: particles,
        translateX: () => anime.random(-100, 100),
        translateY: () => anime.random(-100, 100),
        scale: [1, 0],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        complete: function(anim) {
            particles.forEach(particle => particle.remove());
        }
    });
}

function startHallucination() {
    // Import and start the hallucination effect
    import('../01-hallucinate/01.1-hallucinate.js').then(module => {
        module.initHallucination();
    });
}