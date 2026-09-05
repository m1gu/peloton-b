import React from 'react';
import Link from 'next/link';
import { ArrowRight, Flame, ShieldAlert, Award } from 'lucide-react';
import { ARTICLES, SITE_INFO } from '@/data/sports-data';
import { LeadHero } from '@/components/LeadHero';
import { ArticleCard } from '@/components/ArticleCard';
import { PhotoCarousel } from '@/components/PhotoCarousel';
import { VideoShowcase } from '@/components/VideoShowcase';

export default function HomePage() {
  const leadArticle = ARTICLES.find((a) => a.isLeadHero) || ARTICLES[0];
  const featuredArticles = ARTICLES.filter((a) => a.id !== leadArticle.id).slice(0, 3);
  const secondaryArticles = ARTICLES.filter((a) => a.id !== leadArticle.id).slice(1, 4);

  return (
    <div className="w-full bg-white">
      {/* 1. Lead Hero Story (The Players' Tribune Style) */}
      <LeadHero article={leadArticle} />

      {/* 2. Secondary Featured Stories (Baseball America style grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-8">
          <div className="flex items-center space-x-2">
            <Flame className="w-5 h-5 text-black" />
            <h2 className="text-xl sm:text-2xl font-serif font-black tracking-tight text-neutral-950 uppercase">
              Historias Destacadas del Diamante
            </h2>
          </div>
          <Link
            href="/noticias"
            className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 hover:text-black flex items-center space-x-1"
          >
            <span>Ver Todo el Archivo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="standard" />
          ))}
        </div>
      </section>

      {/* 3. High-Speed Photography Carousel */}
      <PhotoCarousel />

      {/* 4. Split Section: Latest Wire + Video Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Latest Wire (Defector Style Clean Feed) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="border-b-2 border-black pb-2 flex items-center justify-between">
              <h3 className="font-serif font-black text-xl text-neutral-950 uppercase tracking-tight">
                Última Hora & Crónicas
              </h3>
              <span className="text-[11px] font-mono text-neutral-500 uppercase">
                Edición de Campo
              </span>
            </div>

            <div className="space-y-6">
              {secondaryArticles.map((article) => (
                <ArticleCard key={`wire-${article.id}`} article={article} variant="horizontal" />
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/noticias"
                className="w-full py-3 block text-center border border-neutral-900 text-xs font-mono font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors"
              >
                Cargar Más Crónicas
              </Link>
            </div>
          </div>

          {/* Right: Disciplines & Editorial Manifesto Callout */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            {/* Disciplines Fast Access Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/softball"
                className="p-6 bg-neutral-50 border border-neutral-200 hover:border-black transition-colors rounded-sm group"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                  Disciplina Olímpica
                </span>
                <h4 className="text-2xl font-serif font-black text-neutral-950 group-hover:text-neutral-700 uppercase">
                  Sóftbol
                </h4>
                <p className="text-xs text-neutral-600 font-sans mt-2 leading-relaxed">
                  Cobertura completa de bola rápida, torneos femeninos, certámenes de clubes y ciclo olímpico internacional.
                </p>
                <span className="inline-flex items-center space-x-1 text-xs font-mono font-bold text-black mt-4 uppercase">
                  <span>Explorar Sección</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/baseball"
                className="p-6 bg-neutral-50 border border-neutral-200 hover:border-black transition-colors rounded-sm group"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                  Rey de los Deportes
                </span>
                <h4 className="text-2xl font-serif font-black text-neutral-950 group-hover:text-neutral-700 uppercase">
                  Béisbol
                </h4>
                <p className="text-xs text-neutral-600 font-sans mt-2 leading-relaxed">
                  Serie Nacional Mayor, estadísticas sabermétricas de bullpen, prospectos juveniles y torneos regionales.
                </p>
                <span className="inline-flex items-center space-x-1 text-xs font-mono font-bold text-black mt-4 uppercase">
                  <span>Explorar Sección</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Editorial Mission Callout Box */}
            <div className="bg-neutral-950 text-white p-6 sm:p-8 rounded-sm border border-neutral-800 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-neutral-400 uppercase tracking-wider">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Manifiesto Editorial Pelotón B</span>
              </div>
              <blockquote className="text-base sm:text-lg font-serif italic text-neutral-100 leading-snug">
                “Nacimos con el propósito de cubrir el vacío informativo en los deportes de diamante, transformando la cobertura tradicional en una experiencia visual inmersiva que documenta el esfuerzo de los atletas desde el terreno.”
              </blockquote>
              <div className="pt-2 flex items-center justify-between border-t border-neutral-800 text-xs font-mono text-neutral-400">
                <span>Redacción Central · Guayaquil, Ecuador</span>
                <Link href="/sobre-nosotros" className="text-white hover:underline underline-offset-2">
                  Directorio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Video Showcase Section */}
      <VideoShowcase />
    </div>
  );
}
