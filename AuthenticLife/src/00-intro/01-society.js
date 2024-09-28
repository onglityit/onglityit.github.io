export function showSociety() {
    const introContainer = $('#intro-container');
    introContainer.html('<p id="society-text"></p>');

    const societyText = $('#society-text');
    const text = "I see society is fake...\nBut that is just my own reflection, of moral policing";

    societyText.css({
        'font-family': 'Consolas, monospace',
        'font-size': '2em',
        'color': '#ffffff',
        'text-align': 'center',
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'white-space': 'pre-line'
    });

    let i = 0;
    const typeWriter = setInterval(() => {
        if (i < text.length) {
            societyText.text(societyText.text() + text.charAt(i));
            i++;
        } else {
            clearInterval(typeWriter);
        }
    }, 50);
}