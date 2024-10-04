//  AuthenticLife/src/01-hallucinate/01.2-time-is-passing.js
export function startTimeCounter(container) {
    const timeCounterElement = document.createElement('p');
    timeCounterElement.id = 'time-counter';

    // Inline styles for the time counter
    timeCounterElement.style.color = '#ffffff'; // White text
    timeCounterElement.style.backgroundColor = '#000000'; // Black background
    timeCounterElement.style.padding = '10px'; // Optional padding
    timeCounterElement.style.borderRadius = '5px'; // Optional rounded corners
    timeCounterElement.style.fontSize = '1.5em'; // Adjust font size
    timeCounterElement.style.marginTop = '20px'; // Space above the time counter

    container.appendChild(timeCounterElement);

    let startTime = Date.now();
    setInterval(() => {
        let elapsedTime = Date.now() - startTime;
        let date = new Date(elapsedTime);
        let hours = String(date.getUTCHours()).padStart(2, '0');
        let minutes = String(date.getUTCMinutes()).padStart(2, '0');
        let seconds = String(date.getUTCSeconds()).padStart(2, '0');
        let milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');

        timeCounterElement.textContent = `Now it is ${hours}:${minutes}:${seconds}.${milliseconds}`;
    }, 1); // Update every millisecond
}