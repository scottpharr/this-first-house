const WP_API_URL = process.env.WORDPRESS_API_URL || 'https://wordpress-1476370-6234744.cloudwaysapps.com/graphql';

async function fetchAPI(query) {
  const res = await fetch(WP_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 }
  });
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllArticles() {
  const data = await fetchAPI(`
    {
      posts {
        nodes {
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `);
  return data.posts.nodes;
}

export async function getArticleBySlug(slug) {
  const data = await fetchAPI(`
    {
      post(id: "${slug}", idType: SLUG) {
        title
        content
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `);
  return data.post;
}