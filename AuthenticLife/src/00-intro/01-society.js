import { createBoxes } from './01.1-boxes.js';

export function showSociety() {
    const introContainer = $('#intro-container');
    introContainer.html('<div id="box-container"></div><p id="society-text"></p>');

    createBoxes();

    const societyText = $('#society-text');
    const text = "Society is fake...\nBut that is just my own reflection, of moral policing.. I am the fake one.";

    societyText.css({
        'font-family': 'Consolas, monospace',
        'font-size': '2em',
        'color': '#ffffff',
        'text-align': 'center',
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'white-space': 'pre-line',
        'z-index': '10'
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