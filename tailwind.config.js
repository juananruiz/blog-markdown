/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Scan root HTML files
    './js/**/*.js', // Scan JavaScript files in the js directory
  ],
  darkMode: 'class', // Enable dark mode using a class (e.g., <html class="dark">)
  theme: {
    extend: {
      container: { // Optional: to replicate previous .container style with Tailwind
        center: true,
        padding: '1rem', // Adjust padding as needed
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': 'calc(1280px - 4rem)', // max-w-4xl (64rem) equivalent with padding
        },
      },
      typography: (theme) => ({ // For @tailwindcss/typography if we decide to use it for prose
        DEFAULT: {
          css: {
            // Basic prose styling, can be expanded
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            // Dark mode prose styling
            '&.dark': { // This is a custom way, better to use Tailwind's dark variant in HTML/JS
                color: theme('colors.gray.300'),
                a: {
                    color: theme('colors.blue.400'),
                    '&:hover': {
                        color: theme('colors.blue.600'),
                    },
                },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Uncomment if you want to use the typography plugin for .prose styling
  ],
}
