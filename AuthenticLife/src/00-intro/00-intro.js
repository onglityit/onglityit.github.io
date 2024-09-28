$(document).ready(function() {
    const introContainer = $('#intro-container');
    introContainer.html('<h1 id="intro-text"></h1>');

    const introText = $('#intro-text');
    introText.text('My Dark Side');

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
        'transform': 'translate(-50%, -50%)'
    });

    // Typewriter effect
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
});