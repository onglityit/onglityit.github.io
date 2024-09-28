import { initVersionCheck } from './0-version/0-version.js';
import { initIntro } from './00-intro/00-intro.js';
import { initNavigation } from './navigation.js';

const totalAnimations = 3;
$(document).ready(function() {
    initIntro();

    // Initialize version checking
    initVersionCheck();
    initNavigation(0, totalAnimations);
});