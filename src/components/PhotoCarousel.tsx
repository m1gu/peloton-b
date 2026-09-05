'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { PHOTO_GALLERY } from '@/data/sports-data';

export const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? PHOTO_GALLERY.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === PHOTO_GALLERY.length - 1 ? 0 : prev + 1));
  };

  const activePhoto = PHOTO_GALLERY[currentIndex];

  return (
    <section className="w-full bg-neutral-950 text-white py-12 lg:py-16 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-neutral-800 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
              <Camera className="w-4 h-4 text-emerald-400" />
              <span>Fotoperiodismo de Alta Velocidad (1/4000s)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-white uppercase">
              La Mirada In Situ
            </h2>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-neutral-400">
              {currentIndex + 1} de {PHOTO_GALLERY.length}
            </span>
            <div className="flex items-center space-x-1">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-neutral-700 hover:border-white hover:bg-neutral-800 transition-colors"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-neutral-700 hover:border-white hover:bg-neutral-800 transition-colors"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Big Display Area */}
        <div className="relative aspect-[16/9] w-full bg-neutral-900 rounded-sm overflow-hidden border border-neutral-800">
          <Image
            src={activePhoto.url}
            alt={activePhoto.title}
            fill
            className="object-cover transition-opacity duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
            <div className="max-w-3xl space-y-2">
              <div className="flex items-center space-x-3">
                <span className="bg-white text-black text-[10px] font-mono uppercase font-bold px-2 py-0.5">
                  {activePhoto.category}
                </span>
                <span className="text-xs font-mono text-neutral-300">
                  {activePhoto.shutter}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {activePhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                {activePhoto.caption}
              </p>
              <p className="text-[11px] text-neutral-400 font-mono pt-1">
                Foto: {activePhoto.photographer} · Archivo Pelotón B
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnails Row */}
        <div className="grid grid-cols-4 gap-3 mt-4">
          {PHOTO_GALLERY.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative aspect-[16/10] rounded-sm overflow-hidden border transition-all ${
                idx === currentIndex
                  ? 'border-white ring-2 ring-white/50 opacity-100'
                  : 'border-neutral-800 opacity-50 hover:opacity-80'
              }`}
            >
              <Image
                src={item.url}
                alt={item.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
