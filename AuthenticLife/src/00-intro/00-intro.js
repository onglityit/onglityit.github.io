// AuthenticLife/src/00-intro/00-intro.js
import { showSociety } from './01-society.js';
import { initNavigation } from '../navigation.js';

export function initIntro() {
    const introContainer = $('#intro-container');
    introContainer.html('<h1 id="intro-text"></h1>');

    const introText = $('#intro-text');
    introText.text('My Inner Self, in Absence of Light');

    // Set styles
    $('body').css({
        'background-color': 'black',
        'margin': 0,
        'padding': 0,
        'height': '100vh',
        'width': '100vw',
        'overflow': 'hidden'
    });

    introText.css({
        'font-family': 'Consolas, monospace',
        'color': 'transparent',
        'background-image': 'linear-gradient(45deg, #ff00ff, #00ffff)',
        '-webkit-background-clip': 'text',
        'background-clip': 'text',
        'text-shadow': '0 0 10px rgba(255,255,255,0.5)',
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'text-align': 'center',
        'width': '90%', // Prevent text from touching screen edges
        'max-width': '1200px' // Maximum width for very large screens
    });

    // Responsive font size
    function setFontSize() {
        const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        let fontSize;
        if (viewportWidth < 480) {
            fontSize = '1.5em';
        } else if (viewportWidth < 768) {
            fontSize = '2em';
        } else if (viewportWidth < 1024) {
            fontSize = '2.5em';
        } else {
            fontSize = '3em';
        }
        introText.css('font-size', fontSize);
    }

    // Set initial font size and update on window resize
    setFontSize();
    $(window).resize(setFontSize);

    const text = introText.text();
    introText.text('');
    let i = 0;
    const typeWriter = setInterval(() => {
        if (i < text.length) {
            introText.text(introText.text() + text.charAt(i));
            i++;
        } else {
            clearInterval(typeWriter);
            animateGlow();
            setTimeout(transitionToSociety, 3000);
        }
    }, 100);

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

    function transitionToSociety() {
        anime({
            targets: '#intro-text',
            opacity: 0,
            duration: 1000,
            easing: 'easeOutQuad',
            complete: () => {
                introContainer.empty();
                showSociety();
                initNavigation(1, totalAnimations);
            }
        });
    }
}