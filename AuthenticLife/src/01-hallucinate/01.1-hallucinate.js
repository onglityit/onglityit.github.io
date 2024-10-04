// AuthenticLife/src/01-hallucinate/01.1-hallucinate.js
import { startTimeCounter } from './01.2-time-is-passing.js';

export function initHallucination() {
    const container = document.getElementById('hallucination-container');
    createHallucinationEffect(container);
    startTimeCounter(container); // Start the time counter
}

function createHallucinationEffect(container) {
    const hallucinationText = "I want to hallucinate about time itself...";
    const hallucinationElement = document.createElement('h1');
    hallucinationElement.id = 'hallucination-text';
    container.appendChild(hallucinationElement);

    let i = 0;
    const typeWriter = setInterval(() => {
        if (i < hallucinationText.length) {
            hallucinationElement.textContent += hallucinationText.charAt(i);
            i++;
        } else {
            clearInterval(typeWriter);
        }
    }, 100); // Adjust typing speed if needed
}
   