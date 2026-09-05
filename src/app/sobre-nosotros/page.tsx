import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, ShieldCheck, Camera, BarChart3, Globe, Award } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, XIcon } from '@/components/SocialIcons';
import { SITE_INFO, AUTHORS } from '@/data/sports-data';

export const metadata = {
  title: 'Sobre Nosotros & Directorio Editorial | Pelotón B',
  description: 'Conoce al equipo editorial, misión y pilares de Pelotón B, medio digital especializado en béisbol y sóftbol con sede en Guayaquil, Ecuador.',
};

export default function SobreNosotrosPage() {
  const team = Object.values(AUTHORS);

  return (
    <div className="w-full bg-white">
      {/* Header Banner */}
      <section className="bg-neutral-950 text-white py-14 sm:py-20 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-neutral-400 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
            <span>Identidad Institucional</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight uppercase">
            Sobre Pelotón B
          </h1>
          <p className="text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto font-serif leading-relaxed">
            Crónica de campo, análisis táctico y fotoperiodismo de alta velocidad para disciplinas de diamante.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {/* Intro Story */}
        <section className="space-y-6 text-neutral-800 font-sans text-base sm:text-lg leading-relaxed border-b border-neutral-200 pb-12">
          <p className="text-xl sm:text-2xl font-serif font-semibold text-black leading-snug">
            {SITE_INFO.description}
          </p>
          <p>
            Nacimos con el propósito de cubrir el vacío informativo en los deportes de diamante, transformando la cobertura tradicional en una experiencia visual inmersiva que documenta el esfuerzo de los atletas, el crecimiento de los clubes locales y el desempeño de las delegaciones en certámenes de ciclo olímpico y mundiales oficiales.
          </p>
          <p>
            A lo largo de nuestra trayectoria, el equipo de <strong>Pelotón B</strong> ha desplegado cobertura presencial en torneos federados, series nacionales y eventos oficiales internacionales, consolidando una redacción con experiencia en zonas mixtas, conferencias de prensa y centros de medios.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-neutral-200 pb-12">
          <div className="p-8 bg-neutral-50 rounded-sm border border-neutral-200 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">
              Nuestro Propósito
            </span>
            <h2 className="text-2xl font-serif font-black text-neutral-950 uppercase">
              Misión
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed font-sans">
              {SITE_INFO.mission}
            </p>
          </div>

          <div className="p-8 bg-neutral-50 rounded-sm border border-neutral-200 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">
              Hacia Dónde Vamos
            </span>
            <h2 className="text-2xl font-serif font-black text-neutral-950 uppercase">
              Visión
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed font-sans">
              {SITE_INFO.vision}
            </p>
          </div>
        </section>

        {/* 4 Pillars */}
        <section className="space-y-8 border-b border-neutral-200 pb-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Metodología Periodística
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-neutral-950 uppercase">
              Pilares Editoriales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-neutral-200 rounded-sm space-y-3">
              <div className="flex items-center space-x-3 text-black">
                <Camera className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-neutral-950">
                  Fotoperiodismo de Acción e In situ
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Capturamos la intensidad del juego desde el terreno con equipos de alta velocidad (obturación hasta 1/8000s), entregando narrativa gráfica de estándar editorial internacional.
              </p>
            </div>

            <div className="p-6 border border-neutral-200 rounded-sm space-y-3">
              <div className="flex items-center space-x-3 text-black">
                <BarChart3 className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-neutral-950">
                  Rigor y Análisis Técnico
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Más allá del marcador, profundizamos en la estrategia de bullpen, estadísticas avanzadas (sabermetría), biomecánica y el contexto táctico de cada jugada en el diamante.
              </p>
            </div>

            <div className="p-6 border border-neutral-200 rounded-sm space-y-3">
              <div className="flex items-center space-x-3 text-black">
                <Globe className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-neutral-950">
                  Cobertura Multilingüe e Internacional
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Capacidad operativa para cubrir certámenes dentro y fuera del país, realizando coberturas y entrevistas directas con delegaciones internacionales de Sudamérica y WBSC.
              </p>
            </div>

            <div className="p-6 border border-neutral-200 rounded-sm space-y-3">
              <div className="flex items-center space-x-3 text-black">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-neutral-950">
                  Compromiso Institucional
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Adherencia estricta a las normativas de prensa, derechos de transmisión y manuales de conducta del Comité Olímpico Internacional (COI), la Confederación Mundial de Béisbol y Sóftbol (WBSC) y comités nacionales.
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Team / Directory */}
        <section className="space-y-8 border-b border-neutral-200 pb-12">
          <div className="border-b-2 border-black pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                Equipo de Prensa & Fotoperiodismo
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-neutral-950 uppercase">
                Directorio Editorial / Redacción
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-500">
              Acreditación y Prensa
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-neutral-50 border border-neutral-200 rounded-sm overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square w-full bg-neutral-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                        {member.department}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-neutral-950 mt-1">
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono font-semibold text-neutral-700">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-neutral-200 mt-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center space-x-2 text-xs font-mono text-black hover:underline mt-3"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{member.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Headquarters & Contact Box */}
        <section className="bg-neutral-100 border border-neutral-300 p-8 sm:p-10 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                Sede Operativa
              </span>
              <h3 className="text-2xl font-serif font-black text-neutral-950 uppercase">
                Guayaquil, Ecuador
              </h3>
              <p className="text-sm text-neutral-600 font-sans">
                Nuestra redacción y operaciones audiovisuales se coordinan desde el puerto principal de Ecuador, con despliegue a diamantes y estadios a nivel sudamericano.
              </p>
              <div className="pt-2 flex flex-col space-y-2 text-xs font-mono text-neutral-700">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-black" />
                  <span>Mesa Central: {SITE_INFO.pressEmail}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-black" />
                  <span>{SITE_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:border-l md:border-neutral-300 md:pl-8">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-700 font-bold">
                Canales Oficiales
              </h4>
              <p className="text-xs text-neutral-600">
                Sigue nuestras transmisiones, fotos in situ y alertas de resultados en tiempo real:
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href={SITE_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 bg-white border border-neutral-300 rounded text-xs font-mono text-black hover:border-black transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={SITE_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 bg-white border border-neutral-300 rounded text-xs font-mono text-black hover:border-black transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4" />
                  <span>YouTube</span>
                </a>
                <a
                  href={SITE_INFO.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 bg-white border border-neutral-300 rounded text-xs font-mono text-black hover:border-black transition-colors"
                >
                  <XIcon className="w-4 h-4" />
                  <span>X</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
