import React from 'react';
import { getAllArticles } from '@/lib/posts';
import { ArticleCard } from '@/components/ArticleCard';
import { LeadHero } from '@/components/LeadHero';

export const metadata = {
  title: 'Sóftbol | Cobertura Femenina, Masculina y Torneos Sudamericanos | Pelotón B',
  description: 'Noticias, crónicas in situ y fotoperiodismo de sóftbol rápido femenino y masculino en Ecuador y Sudamérica.',
};

export default function SoftballPage() {
  const articles = getAllArticles();
  const softballArticles = articles.filter((a) => a.category === 'Softball');
  const heroArticle = softballArticles[0];
  const otherArticles = softballArticles.slice(1);

  return (
    <div className="w-full bg-white">
      {/* Category Header */}
      <div className="bg-neutral-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Disciplina de Diamante
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight uppercase mt-2">
            Sóftbol
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl font-sans mt-3">
            Crónicas in situ de bola rápida, campeonatos sudamericanos, circuito de clubes y seguimiento a selecciones nacionales hacia el ciclo olímpico.
          </p>
        </div>
      </div>

      {/* Featured Lead Story if exists */}
      {heroArticle && <LeadHero article={heroArticle} />}

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-b-2 border-black pb-3 mb-8 flex items-center justify-between">
          <h2 className="text-xl font-serif font-black text-neutral-950 uppercase">
            Archivo de Sóftbol
          </h2>
          <span className="text-xs font-mono text-neutral-500">
            {softballArticles.length} Artículos publicados
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softballArticles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="standard" />
          ))}
        </div>
      </div>
    </div>
  );
}
