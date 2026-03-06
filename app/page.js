import Link from 'next/link';
import { getAllArticles } from '@/lib/wordpress';

export default async function Home() {
  const articles = await getAllArticles();
  return (
    <main>
      <h1>This First House</h1>
      {articles.map((article) => (
        <div key={article.slug}>
          <Link href={`/articles/${article.slug}`}>
            <h2>{article.title}</h2>
          </Link>
          <p>{article.excerpt}</p>
        </div>
      ))}
    </main>
  );
}