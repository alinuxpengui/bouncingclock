function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    updateDigit(document.querySelectorAll('.hour .digit'), Math.floor(hours / 10), hours % 10);
    updateDigit(document.querySelectorAll('.minute .digit'), Math.floor(minutes / 10), minutes % 10);
    updateDigit(document.querySelectorAll('.second .digit'), Math.floor(seconds / 10), seconds % 10);
}

function updateDigit(digits, tens, ones) {
    const currentTens = digits[0].textContent;
    if (currentTens != tens) {
        flipDigit(digits[0], tens);
    }

    const currentOnes = digits[1].textContent;
    if (currentOnes != ones) {
        flipDigit(digits[1], ones);
    }
}

function flipDigit(digit, newValue) {
    const currentValue = digit.textContent;

    if (currentValue !== newValue) {
        digit.textContent = newValue;  // Update the text content immediately
        digit.classList.add('flipping');  // Start the flipping effect

        setTimeout(() => {
            digit.classList.remove('flipping');
        }, 500); // Match the duration of the transition
    }
}

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';

    if (currentTheme === 'dark') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        document.getElementById('toggle-theme').textContent = '🌙';  // Change button to moon
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        document.getElementById('toggle-theme').textContent = '🌞';  // Change button to sun
    }
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

setInterval(updateClock, 1000);
