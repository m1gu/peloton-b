import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { Article } from '@/data/sports-data';

interface ArticleCardProps {
  article: Article;
  variant?: 'compact' | 'standard' | 'horizontal';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant = 'standard' }) => {
  if (variant === 'horizontal') {
    return (
      <article className="group flex flex-col sm:flex-row gap-4 border-b border-neutral-200 pb-5 last:border-none">
        <Link
          href={`/noticias/${article.slug}`}
          className="relative w-full sm:w-48 aspect-[16/10] flex-shrink-0 bg-neutral-100 rounded-sm overflow-hidden border border-neutral-200"
        >
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        <div className="flex flex-col justify-between flex-grow space-y-2">
          <div>
            <div className="flex items-center space-x-2 text-[10px] font-mono uppercase text-neutral-500 mb-1">
              <span className="font-bold text-black">{article.category}</span>
              <span>·</span>
              <span>{article.subCategory}</span>
            </div>
            <Link href={`/noticias/${article.slug}`}>
              <h3 className="font-serif font-bold text-lg text-neutral-950 group-hover:text-neutral-700 leading-snug">
                {article.title}
              </h3>
            </Link>
            <p className="text-xs text-neutral-600 font-sans line-clamp-2 mt-1">
              {article.excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between text-[11px] text-neutral-500 font-mono pt-1">
            <span>Por {article.author.name}</span>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col h-full bg-white border border-neutral-200 rounded-sm overflow-hidden hover:border-neutral-400 transition-colors">
      <Link
        href={`/noticias/${article.slug}`}
        className="relative aspect-[16/10] w-full bg-neutral-100 overflow-hidden"
      >
        <Image
          src={article.heroImage}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-black text-white text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 font-bold">
            {article.category}
          </span>
        </div>
      </Link>

      <div className="p-4 flex flex-col justify-between flex-grow space-y-3">
        <div>
          <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider block mb-1">
            {article.subCategory}
          </span>
          <Link href={`/noticias/${article.slug}`}>
            <h3 className="font-serif font-bold text-lg text-neutral-950 group-hover:text-neutral-700 leading-snug">
              {article.title}
            </h3>
          </Link>
          <p className="text-xs text-neutral-600 font-sans line-clamp-2 mt-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span className="truncate pr-2 font-medium text-neutral-700">
            {article.author.name}
          </span>
          <span className="flex-shrink-0">{article.readTime}</span>
        </div>
      </div>
    </article>
  );
};
