import React from 'react';
import { PhotoCarousel } from '@/components/PhotoCarousel';
import { VideoShowcase } from '@/components/VideoShowcase';
import { PHOTO_GALLERY, VIDEO_ITEMS } from '@/data/sports-data';
import Image from 'next/image';
import { Camera, Video } from 'lucide-react';

export const metadata = {
  title: 'Fotos y Videos | Fotoperiodismo y Cobertura Audiovisual | Pelotón B',
  description: 'Galerías de fotografía de alta velocidad (1/4000s) y reportajes audiovisuales en video de diamante.',
};

export default function MultimediaPage() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="bg-neutral-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Archivo Visual
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight uppercase mt-2">
            Fotos y Videos
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl font-sans mt-3">
            Fotoperiodismo in situ de alta velocidad en el diamante y producciones audiovisuales con entrevistas de campo.
          </p>
        </div>
      </div>

      {/* 1. Photo Carousel */}
      <PhotoCarousel />

      {/* 2. Photo Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-neutral-200">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">
          <Camera className="w-4 h-4 text-black" />
          <span>Fototecas del Diamante</span>
        </div>
        <h2 className="text-2xl font-serif font-black text-neutral-950 uppercase mb-8">
          Galería Fotográfica Editorial
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHOTO_GALLERY.map((photo) => (
            <div key={photo.id} className="group border border-neutral-200 rounded-sm overflow-hidden bg-white">
              <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden">
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-black text-white text-[9px] font-mono uppercase px-2 py-0.5">
                  {photo.category}
                </span>
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-mono text-neutral-500 block">
                  {photo.shutter}
                </span>
                <h3 className="font-serif font-bold text-sm text-neutral-950">
                  {photo.title}
                </h3>
                <p className="text-xs text-neutral-600 line-clamp-2">
                  {photo.caption}
                </p>
                <p className="text-[10px] text-neutral-400 font-mono pt-1">
                  Foto: {photo.photographer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Video Showcase */}
      <VideoShowcase />
    </div>
  );
}
