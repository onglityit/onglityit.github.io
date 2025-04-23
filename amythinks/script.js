const becomeButton = document.querySelector('.btnBecome');
const getRidOfButton = document.querySelector('.btnGetRidOf');
const inputContainer = document.querySelector('.input-container');
const inputBecome = document.querySelector('.inputBecome');
const inputGetRidOf = document.querySelector('.inputGetRidOf');
const submitButton = document.querySelector('.btnSubmit');
const progressContainer = document.querySelector('.progress-container');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const histogramContainer = document.querySelector('.histogram-container');
const histogram = document.getElementById('histogram');
const histogramText = document.getElementById('histogramText');
const overlay = document.getElementById('overlay');
const trophy = document.querySelector('.trophy');
const fasterButtons = document.querySelectorAll('.btnFaster');

let progressInterval;
let histogramInterval;
let progress = 0;
let histogramValue = 100;
let duration = 15000; // 15 seconds in milliseconds  
let speedMultiplier = 1; // Default speed

becomeButton.addEventListener('click', function() {
    toggleInputContainer(true); // Show input container for "Become"
    inputBecome.style.display = 'block';
    inputGetRidOf.style.display = 'none';
    inputBecome.focus();
});

getRidOfButton.addEventListener('click', function() {
    toggleInputContainer(true); // Show input container for "Get Rid Of"
    inputGetRidOf.style.display = 'block';
    inputBecome.style.display = 'none';
    inputGetRidOf.focus();
});

submitButton.addEventListener('click', function() {
    if (inputBecome.style.display === 'block') {
        if (inputBecome.value.trim() === '') {
            alert("What you want to Become cannot be empty");
        } else {
            alert(`You want to become: ${inputBecome.value}`);
            startProgress();
        }
    } else if (inputGetRidOf.style.display === 'block') {
        if (inputGetRidOf.value.trim() === '') {
            alert("What you want to Get Rid Of cannot be empty");
        } else {
            alert(`You want to get rid of: ${inputGetRidOf.value}`);
            startHistogram();
        }
    }
});

function startProgress() {
    progressContainer.style.display = 'block';
    histogramContainer.style.display = 'none';
    progress = 0;
    progressBar.style.width = '0%';
    progressText.innerText = '0.0%';

    progressInterval = setInterval(() => {
        progress += (100 / (duration / 1000)) * speedMultiplier;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            showTrophy();
        }
        progressBar.style.width = `${progress}%`;
        progressText.innerText = `${progress.toFixed(1)}%`;
    }, 1000);
}

function startHistogram() {
    histogramContainer.style.display = 'block';
    progressContainer.style.display = 'none';
    histogramValue = 100;
    histogram.style.height = '100%';
    histogramText.innerText = '100.0%';

    histogramInterval = setInterval(() => {
        histogramValue -= (100 / (duration / 1000)) * speedMultiplier;
        if (histogramValue <= 0) {
            histogramValue = 0;
            clearInterval(histogramInterval);
            showTrophy();
        }
        histogram.style.height = `${histogramValue}%`;
        histogramText.innerText = `${Math.abs(histogramValue).toFixed(1)}%`;
    }, 1000);
}

function showTrophy() {
    overlay.style.display = 'flex';
}
function toggleInputContainer(show) {
    if (show) {
        inputContainer.style.display = 'flex'; // Show the input container  
    } else {
        inputContainer.style.display = 'none'; // Hide the input container  
    }
}
function hideInputContainer() {
    toggleInputContainer(false); // Hide input container  
}

function typeWriter(element, text, delay) {
    let index = 0;
    element.innerHTML = ''; // Clear the element before starting  
    const typingInterval = setInterval(() => {
        if (index < text.length) {
            const char = text.charAt(index) === ' ' ? '&nbsp;' : text.charAt(index); // Replace space with &nbsp;
            element.innerHTML += char; // Use innerHTML to allow HTML entities  
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, delay);
}

const questionText = 'Hi, I am Amy. <BR>What do you want to Become / Get Rid Of ?';
const questionElement = document.querySelector('.question');
typeWriter(questionElement, questionText, 100);

fasterButtons.forEach(button => {
    button.addEventListener('click', function() {
        speedMultiplier += 2; // Increase speed  
    });
});

overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    progressContainer.style.display = 'none';
    histogramContainer.style.display = 'none';
    progressBar.style.width = '0%';
    progressText.innerText = '0.0%';
    histogram.style.height = '100%';
    histogramText.innerText = '100.0%';

    // Hide the input container and submit button  
    toggleInputContainer(false); // Hide the input container

    // Clear the input fields  
    inputBecome.value = '';
    inputGetRidOf.value = '';

    clearInterval(progressInterval);
    clearInterval(histogramInterval);
    speedMultiplier = 1; // Reset speed  
});

inputBecome.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitButton.click(); // Trigger the submit button click  
    }
});

inputGetRidOf.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitButton.click(); // Trigger the submit button click  
    }
});
