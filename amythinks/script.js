const becomeButton = document.querySelector('.btnBecome');
const getRidOfButton = document.querySelector('.btnGetRidOf');
const inputContainer = document.querySelector('.input-container');
const inputBecome = document.querySelector('.inputBecome');
const inputGetRidOf = document.querySelector('.inputGetRidOf');
const submitButton = document.querySelector('.btnSubmit');

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
        }
    } else if (inputGetRidOf.style.display === 'block') {
        if (inputGetRidOf.value.trim() === '') {
            alert("What you want to Get Rid Of cannot be empty");
        } else {
            alert(`You want to get rid of: ${inputGetRidOf.value}`);
        }
    }
});
