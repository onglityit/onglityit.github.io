// AuthenticLife/src/01-hallucinate/01.2-time-is-passnig.js
export function startTimeCounter(container) {
    const timeCounterElement = document.createElement('p');
    timeCounterElement.id = 'time-counter';
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