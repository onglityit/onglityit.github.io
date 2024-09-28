import { initVersionCheck } from './0-version/0-version.js';
import { initIntro } from './00-intro/00-intro.js';

$(document).ready(function() {
    initIntro();

    // Initialize version checking
    initVersionCheck();
});