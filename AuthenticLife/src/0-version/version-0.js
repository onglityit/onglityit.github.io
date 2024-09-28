export function animateNewMultiverse() {
    const container = $('#intro-container');
    container.empty();

    const text = "New Multiverse Passing Through...";
    const textElement = $('<div>').text(text).appendTo(container);

    textElement.css({
        'font-family': 'Arial, sans-serif',
        'color': 'white',
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'white-space': 'nowrap',
        'font-size': '1px',  // Start very small
        'opacity': 0
    });

    // Animate from big N to full text
    anime({
        targets: textElement[0],
        fontSize: ['1000px', '24px'],  // From very large to normal size
        opacity: [0, 1],
        duration: 5000,
        easing: 'easeOutQuad',
        update: function(anim) {
            const progress = anim.progress / 100;
            const visibleLength = Math.floor(text.length * progress);
            textElement.text(text.slice(0, visibleLength));
        },
        complete: function() {
            // Fade out after animation
            setTimeout(() => {
                anime({
                    targets: textElement[0],
                    opacity: 0,
                    duration: 1000,
                    easing: 'easeOutQuad',
                    complete: function() {
                        container.empty();
                        // Here you can reinitialize your main content
                    }
                });
            }, 2000);  // Wait 2 seconds before fading out
        }
    });
}