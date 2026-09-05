'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Video } from 'lucide-react';
import { VIDEO_ITEMS } from '@/data/sports-data';

export const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(VIDEO_ITEMS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-white py-12 lg:py-16 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">
          <Video className="w-4 h-4 text-black" />
          <span>Producción Audiovisual</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-neutral-950 uppercase mb-8">
          Crónica en Video & Entrevistas
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Video Player (8 cols) */}
          <div className="lg:col-span-8">
            <div className="relative aspect-video w-full bg-black rounded-sm overflow-hidden border border-neutral-300">
              {isPlaying ? (
                <iframe
                  src={`${activeVideo.embedUrl}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-none"
                />
              ) : (
                <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
                  <Image
                    src={activeVideo.thumbnail}
                    alt={activeVideo.title}
                    fill
                    className="object-cover opacity-85 group-hover:opacity-95 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                      aria-label="Reproducir video"
                    >
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                    <span className="bg-black/80 px-2 py-1 rounded">
                      {activeVideo.category}
                    </span>
                    <span className="bg-black/80 px-2 py-1 rounded">
                      {activeVideo.duration}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                Cobertura Audiovisual Pelotón B
              </span>
              <h3 className="text-xl font-serif font-bold text-neutral-950 mt-1">
                {activeVideo.title}
              </h3>
              <p className="text-sm text-neutral-600 font-sans mt-1">
                {activeVideo.description}
              </p>
            </div>
          </div>

          {/* Video Playlist (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-2">
              Más Reportajes
            </h4>
            {VIDEO_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveVideo(item);
                  setIsPlaying(false);
                }}
                className={`flex text-left gap-3 p-2 rounded-sm border transition-all ${
                  item.id === activeVideo.id
                    ? 'border-black bg-neutral-100'
                    : 'border-transparent hover:bg-neutral-50'
                }`}
              >
                <div className="relative w-28 aspect-video flex-shrink-0 bg-neutral-200 rounded-sm overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[9px] font-mono px-1 rounded">
                    {item.duration}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] font-mono uppercase text-neutral-500">
                    {item.category}
                  </span>
                  <h5 className="text-xs font-serif font-bold text-neutral-900 line-clamp-2 leading-snug">
                    {item.title}
                  </h5>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
