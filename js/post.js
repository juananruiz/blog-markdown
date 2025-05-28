document.addEventListener('DOMContentLoaded', () => {
    const postContentArea = document.getElementById('post-content-area');
    if (!postContentArea) {
        console.error('Post content area #post-content-area not found.');
        return;
    }

    // Get slug from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');

    if (!slug) {
        postContentArea.innerHTML = '<p>Error: No post slug provided in the URL.</p>';
        // Optionally, redirect to a 404 page or homepage
        // window.location.href = '404.html'; 
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
            const post = posts.find(p => p.slug === slug);

            if (post) {
                document.title = `${post.title} | Mi Blog Vanilla JS`; // Update page title

                // Format date (basic version, can be improved)
                const postDate = new Date(post.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });

                // The original Next.js version uses a 'prose' class for styling the article content
                // and dangerouslySetInnerHTML for the HTML content.
                // We will replicate this by setting innerHTML and wrapping content in an article with 'prose' class.
                // Updated to use Tailwind's dark mode variant for typography.
                postContentArea.innerHTML = `
                    <article class="prose dark:prose-invert max-w-none">
                        <h1>${post.title}</h1>
                        <div class="post-meta-detail">${postDate}</div>
                        <div>${post.contentHtml}</div>
                    </article>
                `;
            } else {
                postContentArea.innerHTML = '<p>Post not found.</p>';
                // Optionally, set a 404 title
                document.title = "Post no encontrado | Mi Blog Vanilla JS";
            }
        })
        .catch(error => {
            console.error('Error fetching or processing post:', error);
            postContentArea.innerHTML = '<p>Error loading post. Please try again later.</p>';
        });
});
