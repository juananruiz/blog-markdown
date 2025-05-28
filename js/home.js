document.addEventListener('DOMContentLoaded', () => {
    const postListContainer = document.getElementById('post-list');

    if (!postListContainer) {
        console.error('Post list container #post-list not found.');
        return;
    }

    fetch('_site/posts.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(posts => {
            if (!posts || posts.length === 0) {
                postListContainer.innerHTML = '<p>No posts found.</p>';
                return;
            }

            // Clear any placeholder content
            postListContainer.innerHTML = ''; 

            posts.forEach(post => {
                const article = document.createElement('article');
                // Apply Tailwind classes: group block border-l-4 border-blue-600 dark:border-blue-500 pl-4 transition-all hover:border-l-8
                article.className = 'group block border-l-4 border-blue-600 dark:border-blue-500 pl-4 mb-6 transition-all hover:border-l-8';

                const postLinkHref = `post.html?slug=${post.slug}`;
                const postDate = new Date(post.date).toLocaleDateString('es-ES', {
                    year: 'numeric', month: 'long', day: 'numeric'
                });

                // Removed post-item-inner div, apply styles directly
                article.innerHTML = `
                    <a href="${postLinkHref}" class="block">
                        <h2 class="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">${post.title}</h2>
                        <div class="text-sm text-gray-500 dark:text-gray-400 mb-3">${postDate}</div>
                        <p class="text-gray-700 dark:text-gray-300">${post.excerpt}</p>
                    </a>
                `;
                postListContainer.appendChild(article);
            });
        })
        .catch(error => {
            console.error('Error fetching or processing posts:', error);
            postListContainer.innerHTML = '<p>Error loading posts. Please try again later.</p>';
        });
});
