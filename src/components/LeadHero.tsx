import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';
import { Article } from '@/data/sports-data';

interface LeadHeroProps {
  article: Article;
}

export const LeadHero: React.FC<LeadHeroProps> = ({ article }) => {
  return (
    <section className="w-full border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image col (7 cols on desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Link href={`/noticias/${article.slug}`} className="block group overflow-hidden rounded-sm relative aspect-[16/10] bg-neutral-100 shadow-sm border border-neutral-200">
              <Image
                src={article.heroImage}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-xs font-sans">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-300">
                  {article.heroCaption}
                </span>
              </div>
            </Link>
          </div>

          {/* Text col (5 cols on desktop) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center space-y-4">
            <div className="flex items-center space-x-2">
              <span className="inline-block bg-black text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 font-bold">
                {article.category}
              </span>
              <span className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider">
                {article.subCategory}
              </span>
            </div>

            <Link href={`/noticias/${article.slug}`} className="group">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-neutral-950 leading-[1.1] group-hover:text-neutral-700 transition-colors">
                {article.title}
              </h1>
            </Link>

            <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed">
              {article.excerpt}
            </p>

            {/* Author Byline */}
            <div className="pt-2 flex items-center justify-between border-t border-neutral-200">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-300">
                  <Image
                    src={article.author.image}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="block text-xs font-bold text-neutral-900 uppercase font-sans">
                    {article.author.name}
                  </span>
                  <span className="block text-[11px] text-neutral-500 font-mono">
                    {article.author.role}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-1 text-[11px] text-neutral-500 font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={`/noticias/${article.slug}`}
                className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-black hover:text-neutral-600 transition-colors"
              >
                <span>Leer Crónica Completa</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
