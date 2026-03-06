import { getArticleBySlug, getAllArticles } from '@/lib/wordpress';

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  
  if (!article) {
    return <main><h1>Article not found</h1><p>Slug: {slug}</p></main>;
  }

  return (
    <main>
      <h1>{article.title}</h1>
      {article.featuredImage && (
        <img src={article.featuredImage.node.sourceUrl} alt={article.title} />
      )}
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </main>
  );
}