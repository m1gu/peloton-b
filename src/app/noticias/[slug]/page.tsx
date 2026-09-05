import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Calendar, ArrowLeft, Share2, Camera, Quote, Mail } from 'lucide-react';
import { ARTICLES, Article } from '@/data/sports-data';
import { ArticleCard } from '@/components/ArticleCard';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleSlugPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <article className="w-full bg-white">
      {/* Top Breadcrumb */}
      <div className="border-b border-neutral-200 bg-neutral-50 py-3 px-4 sm:px-6 lg:px-8 text-xs font-mono">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/noticias"
            className="inline-flex items-center space-x-1 text-neutral-600 hover:text-black uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a Noticias</span>
          </Link>
          <div className="flex items-center space-x-2 text-neutral-400">
            <span>{article.category}</span>
            <span>/</span>
            <span className="text-neutral-700">{article.subCategory}</span>
          </div>
        </div>
      </div>

      {/* Article Header Container */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6 space-y-4">
        <div className="flex items-center space-x-3">
          <span className="bg-black text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 font-bold">
            {article.category}
          </span>
          <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
            {article.subCategory}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-neutral-950 leading-[1.1]">
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl font-serif text-neutral-600 leading-relaxed italic">
          {article.subtitle}
        </p>

        {/* Byline */}
        <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-neutral-300">
              <Image
                src={article.author.image}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="block text-sm font-bold text-neutral-900 font-sans uppercase">
                {article.author.name}
              </span>
              <span className="block text-xs text-neutral-500 font-mono">
                {article.author.role}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs font-mono text-neutral-500">
            <div className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.publishedAt}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
        <div className="relative aspect-[16/9] w-full bg-neutral-100 rounded-sm overflow-hidden border border-neutral-200">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-xs text-neutral-500 font-mono mt-2 flex items-center justify-between border-b border-neutral-200 pb-2">
          <span>{article.heroCaption}</span>
          <span className="hidden sm:inline">Pelotón B Fotoperiodismo In Situ</span>
        </p>
      </div>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 text-neutral-800 font-serif text-lg leading-relaxed">
        {article.content.map((paragraph, idx) => (
          <p
            key={idx}
            className={idx === 0 ? 'first-letter:text-5xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:leading-none' : ''}
          >
            {paragraph}
          </p>
        ))}

        {/* Pull Quote (The Players' Tribune Style) */}
        {article.quote && (
          <figure className="my-10 p-6 sm:p-8 bg-neutral-50 border-l-4 border-black rounded-r-sm space-y-3">
            <Quote className="w-8 h-8 text-neutral-400 rotate-180" />
            <blockquote className="text-xl sm:text-2xl font-serif italic text-neutral-950 font-bold leading-snug">
              “{article.quote.text}”
            </blockquote>
            <figcaption className="text-xs font-mono uppercase tracking-wider text-neutral-600">
              — {article.quote.author}
            </figcaption>
          </figure>
        )}

        {/* Interactive Gallery if available */}
        {article.gallery && article.gallery.length > 0 && (
          <div className="my-10 space-y-4 not-prose">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-neutral-600 border-b border-neutral-200 pb-2">
              <Camera className="w-4 h-4" />
              <span>Galería de Terreno</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {article.gallery.map((img, i) => (
                <div key={i} className="space-y-1">
                  <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-neutral-100 border border-neutral-200">
                    <Image
                      src={img.url}
                      alt={img.caption}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[11px] font-sans text-neutral-600">{img.caption}</p>
                  {img.shutterInfo && (
                    <span className="text-[10px] font-mono text-neutral-400 block">
                      {img.shutterInfo}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video Embed if available */}
        {article.videoEmbed && (
          <div className="my-10 space-y-2 not-prose">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
              Registro en Video
            </span>
            <div className="relative aspect-video w-full bg-black rounded-sm overflow-hidden border border-neutral-300">
              <iframe
                src={article.videoEmbed.embedUrl}
                title={article.videoEmbed.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-none"
              />
            </div>
            <p className="text-xs text-neutral-600 font-mono">
              {article.videoEmbed.title}
            </p>
          </div>
        )}

        {/* Tags */}
        <div className="pt-6 border-t border-neutral-200 flex flex-wrap gap-2 not-prose">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="my-10 p-6 bg-neutral-50 border border-neutral-200 rounded-sm flex flex-col sm:flex-row items-center sm:items-start gap-5 not-prose">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border border-neutral-300 flex-shrink-0">
            <Image
              src={article.author.image}
              alt={article.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                Acerca del Autor
              </span>
              <h4 className="font-serif font-bold text-base text-neutral-950 uppercase">
                {article.author.name}
              </h4>
              <p className="text-xs font-mono text-neutral-600">
                {article.author.role}
              </p>
            </div>
            <p className="text-xs text-neutral-600 font-sans leading-relaxed">
              {article.author.bio}
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${article.author.email}`}
                className="inline-flex items-center space-x-1.5 text-xs font-mono text-black hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{article.author.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Related Stories */}
      <section className="bg-neutral-50 border-t border-neutral-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="border-b-2 border-black pb-2 flex items-center justify-between">
            <h3 className="font-serif font-black text-xl text-neutral-950 uppercase tracking-tight">
              Otras Crónicas del Diamante
            </h3>
            <Link
              href="/noticias"
              className="text-xs font-mono font-bold uppercase text-neutral-600 hover:text-black"
            >
              Ver Todo →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.id} article={rel} variant="standard" />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
