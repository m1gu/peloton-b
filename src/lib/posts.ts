import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Article, AUTHORS, ARTICLES as FALLBACK_ARTICLES } from '@/data/sports-data';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getAllArticles(): Article[] {
  if (!fs.existsSync(postsDirectory)) {
    return FALLBACK_ARTICLES;
  }

  const fileNames = fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md'));
  if (fileNames.length === 0) {
    return FALLBACK_ARTICLES;
  }

  const articles: Article[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Map author string to Author object
    let authorObj = AUTHORS.evelyn;
    if (data.author === 'Abel Saldarreaga') authorObj = AUTHORS.abel;
    else if (data.author === 'Miguel Rodríguez') authorObj = AUTHORS.miguel;

    // Split paragraphs
    const paragraphs = content
      .split('\n\n')
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

    return {
      id: slug,
      slug: slug,
      title: data.title || '',
      subtitle: data.subtitle || '',
      excerpt: data.excerpt || '',
      content: paragraphs.length > 0 ? paragraphs : [content],
      quote: data.quote,
      category: data.category || 'Noticias',
      subCategory: data.subCategory || 'General',
      author: authorObj,
      publishedAt: data.publishedAt
        ? new Date(data.publishedAt).toISOString().split('T')[0]
        : '2026-09-04',
      readTime: data.readTime || '5 min de lectura',
      heroImage:
        data.heroImage ||
        'https://images.unsplash.com/photo-1599586120429-487e974e1d5e?auto=format&fit=crop&w=1600&q=85',
      heroCaption: data.heroCaption || '',
      isLeadHero: slug === 'era-dorada-softball-femenino-sudamericano',
      videoEmbed: data.videoEmbed,
      tags: [data.category, data.subCategory].filter(Boolean),
    };
  });

  // Sort descending by date
  return articles.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | undefined {
  const articles = getAllArticles();
  return articles.find((a) => a.slug === slug);
}
