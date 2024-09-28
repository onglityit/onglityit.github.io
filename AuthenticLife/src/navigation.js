export function initNavigation(currentIndex, totalAnimations) {
    const container = $('#intro-container');
    
    // Remove existing navigation if any
    $('.nav-button').remove();

    // Add right chevron (always present)
    const rightButton = $('<div class="nav-button nav-right"><i class="fas fa-chevron-right"></i></div>');
    container.append(rightButton);

    // Add left chevron (except for the first animation)
    if (currentIndex > 0) {
        const leftButton = $('<div class="nav-button nav-left"><i class="fas fa-chevron-left"></i></div>');
        container.append(leftButton);
    }

    // Style the buttons
    $('.nav-button').css({
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
    });

    $('.nav-left').css('left', '20px');
    $('.nav-right').css('right', '20px');

    $('.nav-button i').css({
        color: 'white',
        fontSize: '20px'
    });

    // Hover effect
    $('.nav-button').hover(
        function() { $(this).css('backgroundColor', 'rgba(255, 255, 255, 0.5)'); },
        function() { $(this).css('backgroundColor', 'rgba(255, 255, 255, 0.3)'); }
    );

    // Click handlers
    $('.nav-left').on('click', () => {
        if (currentIndex > 0) {
            navigateToAnimation(currentIndex - 1);
        }
    });

    $('.nav-right').on('click', () => {
        if (currentIndex < totalAnimations - 1) {
            navigateToAnimation(currentIndex + 1);
        }
    });
}

function navigateToAnimation(index) {
    // Implement navigation logic here
    console.log(`Navigating to animation ${index}`);
    // You'll need to implement this function to switch between your animations
}