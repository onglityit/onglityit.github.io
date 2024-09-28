import { showSociety } from './01-society.js';

export function initIntro() {
    const introContainer = $('#intro-container');
    introContainer.html('<h1 id="intro-text"></h1>');

    const introText = $('#intro-text');
    introText.text('My Inner Self, in Absence of Light');


    // Set styles
    $('body').css('background-color', 'black');
    introText.css({
        'font-family': 'Consolas, monospace',
        'font-size': '3em',
        'color': 'transparent',
        'background-image': 'linear-gradient(45deg, #ff00ff, #00ffff)',
        '-webkit-background-clip': 'text',
        'background-clip': 'text',
        'text-shadow': '0 0 10px rgba(255,255,255,0.5)',
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'white-space': 'nowrap',
        'text-align': 'center'
    });

    const text = introText.text();
    introText.text('');
    let i = 0;
    const typeWriter = setInterval(() => {
        if (i < text.length) {
            introText.text(introText.text() + text.charAt(i));
            i++;
        } else {
            clearInterval(typeWriter);
            // Start glow animation after typing
            animateGlow();
            // Schedule transition to society.js
            setTimeout(transitionToSociety, 3000);
        }
    }, 100);

    // Glow animation
    function animateGlow() {
        anime({
            targets: '#intro-text',
            textShadow: [
                { value: '0 0 10px rgba(255,255,255,0.5)' },
                { value: '0 0 20px rgba(255,255,255,0.8)' },
                { value: '0 0 10px rgba(255,255,255,0.5)' }
            ],
            duration: 2000,
            easing: 'easeInOutQuad',
            loop: true
        });
    }

    // Transition to society.js
    function transitionToSociety() {
        anime({
            targets: '#intro-text',
            opacity: 0,
            duration: 1000,
            easing: 'easeOutQuad',
            complete: () => {
                introContainer.empty();
                showSociety();
            }
        });
    }
};