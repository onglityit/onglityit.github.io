const becomeButton = document.querySelector('.btnBecome');
const getRidOfButton = document.querySelector('.btnGetRidOf');
const inputContainer = document.querySelector('.input-container');
const inputBecome = document.querySelector('.inputBecome');
const inputGetRidOf = document.querySelector('.inputGetRidOf');
const submitButton = document.querySelector('.btnSubmit');
const progressContainer = document.querySelector('.progress-container');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const overlay = document.getElementById('overlay');
const trophy = document.querySelector('.trophy');
const fasterButton = document.querySelector('.btnFaster');

let progressInterval;
let progress = 0;
let duration = 15000; // 15 seconds in milliseconds  
let speedMultiplier = 1; // Default speed

becomeButton.addEventListener('click', function() {
    inputContainer.style.display = 'block';
    inputBecome.style.display = 'block';
    inputGetRidOf.style.display = 'none';
    inputBecome.focus();
});

getRidOfButton.addEventListener('click', function() {
    inputContainer.style.display = 'block';
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
        }
    }
});

function startProgress() {
    progressContainer.style.display = 'block';
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

function showTrophy() {
    overlay.style.display = 'flex';
}

fasterButton.addEventListener('click', function() {
    speedMultiplier += 2; // Increase speed  
});

overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    progressContainer.style.display = 'none';
    progressBar.style.width = '0%';
    progressText.innerText = '0.0%';
    clearInterval(progressInterval);
    speedMultiplier = 1; // Reset speed  
});
