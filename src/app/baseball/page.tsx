import React from 'react';
import { getAllArticles } from '@/lib/posts';
import { ArticleCard } from '@/components/ArticleCard';
import { LeadHero } from '@/components/LeadHero';

export const metadata = {
  title: 'Béisbol | Serie Mayor, Prospectos y Sabermetría | Pelotón B',
  description: 'Cobertura de béisbol mayor federado, análisis técnico de pitcheo y seguimiento a prospectos juveniles en Ecuador y la región.',
};

export default function BaseballPage() {
  const articles = getAllArticles();
  const baseballArticles = articles.filter((a) => a.category === 'Baseball');
  const heroArticle = baseballArticles[0];

  return (
    <div className="w-full bg-white">
      {/* Category Header */}
      <div className="bg-neutral-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Rey de los Deportes
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight uppercase mt-2">
            Béisbol
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl font-sans mt-3">
            Serie Mayor nacional, análisis sabermétrico, academias de desarrollo y la evolución de los prospectos que apuntan a contratos internacionales.
          </p>
        </div>
      </div>

      {/* Featured Lead Story */}
      {heroArticle && <LeadHero article={heroArticle} />}

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-b-2 border-black pb-3 mb-8 flex items-center justify-between">
          <h2 className="text-xl font-serif font-black text-neutral-950 uppercase">
            Archivo de Béisbol
          </h2>
          <span className="text-xs font-mono text-neutral-500">
            {baseballArticles.length} Artículos publicados
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {baseballArticles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="standard" />
          ))}
        </div>
      </div>
    </div>
  );
}
