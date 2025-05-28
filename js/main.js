// Ensure the DOM is fully loaded before trying to manipulate it
document.addEventListener('DOMContentLoaded', () => {
    if (typeof window.renderHeader === 'function') {
        window.renderHeader();
    } else {
        console.error('renderHeader function not found. Make sure header.js is loaded before main.js or included.');
    }

    // Other global initializations can go here
    console.log('Main script loaded and header rendered (attempted).');
});
