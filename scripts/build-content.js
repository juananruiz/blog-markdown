const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const postsDir = path.join(__dirname, '..', 'content', 'posts');
const outputDir = path.join(__dirname, '..', '_site');
const outputFile = path.join(outputDir, 'posts.json');

function buildContent() {
  try {
    // Check if content/posts directory exists
    if (!fs.existsSync(postsDir)) {
      console.error(`Error: Directory ${postsDir} not found.`);
      process.exit(1);
    }

    // Ensure _site directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Read all .md file names
    const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'));

    const posts = files.map(file => {
      const slug = file.replace(/\.md$/, '');
      const filePath = path.join(postsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data: frontmatter, content: markdownContent } = matter(fileContent);
      const contentHtml = marked(markdownContent);

      return {
        slug,
        title: frontmatter.title || slug,
        date: frontmatter.date ? new Date(frontmatter.date) : new Date(),
        excerpt: frontmatter.excerpt || '',
        contentHtml,
      };
    });

    // Sort posts by date in descending order
    posts.sort((a, b) => b.date - a.date);

    // Write posts to JSON file
    fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));

    console.log(`Successfully processed ${posts.length} posts. Output written to ${outputFile}`);

  } catch (error) {
    console.error('Error building content:', error);
    process.exit(1);
  }
}

buildContent();
