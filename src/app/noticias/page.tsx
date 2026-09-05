import React from 'react';
import { ARTICLES } from '@/data/sports-data';
import { ArticleCard } from '@/components/ArticleCard';

export const metadata = {
  title: 'Noticias & Crónicas del Diamante | Pelotón B',
  description: 'Archivo completo de noticias, reportajes, sabermetría y crónicas de campo de Pelotón B.',
};

export default function NoticiasPage() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="bg-neutral-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Sala de Prensa
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight uppercase mt-2">
            Noticias & Crónicas
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl font-sans mt-3">
            Todo el archivo informativo de béisbol y sóftbol: coberturas in situ, análisis estadísticos y reportajes especiales.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <ArticleCard key={article.id} article={article} variant="standard" />
          ))}
        </div>
      </div>
    </div>
  );
}
