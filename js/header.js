// Keep existing renderHeader function structure
function renderHeader() {
    const headerContainer = document.getElementById('main-header');
    if (!headerContainer) {
        console.error('Header container #main-header not found.');
        return;
    }

    headerContainer.innerHTML = `
        <div class="container mx-auto max-w-4xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <a href="/" class="home-link p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100">Inicio</a>
            <button id="theme-toggle-button" aria-label="Toggle theme" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600">Tema</button>
        </div>
    `;
    
    // Call the theme toggle initializer
    initializeThemeToggle(); 
}

function initializeThemeToggle() {
    const themeToggleButton = document.getElementById('theme-toggle-button');
    if (!themeToggleButton) {
        console.error('Theme toggle button #theme-toggle-button not found.');
        return;
    }

    const systemPreferenceDark = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            themeToggleButton.textContent = 'Claro'; 
        } else {
            document.documentElement.classList.remove('dark');
            themeToggleButton.textContent = 'Oscuro';
        }
    };

    // Initial theme setup:
    // 1. Check localStorage
    // 2. Check system preference
    // 3. Default to light
    const userPreference = localStorage.getItem('theme');
    if (userPreference === 'dark') {
        applyTheme('dark');
    } else if (userPreference === 'light') {
        applyTheme('light');
    } else if (systemPreferenceDark.matches) {
        applyTheme('dark');
    } else {
        applyTheme('light'); // Default to light
    }

    // Listener for system preference changes
    systemPreferenceDark.addEventListener('change', (e) => {
        // Only apply system preference if no user preference is set in localStorage
        if (!localStorage.getItem('theme')) { 
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    // Listener for button click
    themeToggleButton.addEventListener('click', () => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        if (isDarkMode) {
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Expose renderHeader to be called from main.js
window.renderHeader = renderHeader;

// Ensure renderHeader is called by main.js on DOMContentLoaded.
// initializeThemeToggle is called within renderHeader.
