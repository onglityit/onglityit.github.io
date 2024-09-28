import { animateNewMultiverse } from './version-0.js';

let currentVersion = '';

function checkVersion() {
    $.ajax({
        url: 'src/0-version/version.txt',
        dataType: 'text',
        cache: false,
        success: function(data) {
            if (data !== currentVersion) {
                if (currentVersion !== '') {
                    // New version detected, animate
                    animateNewMultiverse();
                }
                currentVersion = data;
            }
        },
        complete: function() {
            // Schedule the next check in 60 seconds
            setTimeout(checkVersion, 60000);
        }
    });
}

export function initVersionCheck() {
    checkVersion();
}