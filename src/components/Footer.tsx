import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, ShieldCheck } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, XIcon } from '@/components/SocialIcons';
import { SITE_INFO } from '@/data/sports-data';

export const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 text-neutral-300 border-t border-neutral-800">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 bg-white rounded-md p-1">
                <Image
                  src="/logo_peloton_b.png"
                  alt="Pelotón B"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="font-serif font-black text-2xl text-white tracking-tight uppercase">
                  PELOTÓN B
                </span>
                <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest">
                  Periodismo de Diamante
                </p>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              {SITE_INFO.description}
            </p>
            <div className="flex items-center space-x-2 text-xs text-neutral-300 font-mono">
              <MapPin className="w-4 h-4 text-neutral-400" />
              <span>Sede Central: {SITE_INFO.location}</span>
            </div>
          </div>

          {/* Col 2: Secciones */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase border-b border-neutral-800 pb-2 mb-4">
              Coberturas
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link href="/softball" className="hover:text-white transition-colors">
                  Sóftbol Femenino & Masculino
                </Link>
              </li>
              <li>
                <Link href="/baseball" className="hover:text-white transition-colors">
                  Béisbol Mayor & Ligas Federadas
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-white transition-colors">
                  Análisis Táctico & Sabermetría
                </Link>
              </li>
              <li>
                <Link href="/multimedia" className="hover:text-white transition-colors">
                  Galerías de Alta Velocidad (1/4000s)
                </Link>
              </li>
              <li>
                <Link href="/multimedia" className="hover:text-white transition-colors">
                  Producción Audiovisual & YouTube
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Editorial & Normativas */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase border-b border-neutral-800 pb-2 mb-4">
              Compromiso Editorial
            </h4>
            <div className="space-y-3 text-xs text-neutral-400 font-sans">
              <div className="flex items-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Adherencia estricta a manuales de prensa del COI y la WBSC.</span>
              </div>
              <p>
                Crónica de campo y fotoperiodismo in situ en diamantes de Sudamérica y certámenes internacionales.
              </p>
              <Link
                href="/sobre-nosotros"
                className="inline-block text-white font-semibold underline underline-offset-4 hover:text-neutral-300 transition-colors"
              >
                Conocer la Redacción →
              </Link>
            </div>
          </div>

          {/* Col 4: Contacto Institucional */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase border-b border-neutral-800 pb-2 mb-4">
              Mesa de Redacción
            </h4>
            <div className="space-y-2 text-xs text-neutral-400 font-mono">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <a href={`mailto:${SITE_INFO.pressEmail}`} className="hover:text-white">
                  {SITE_INFO.pressEmail}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <a href={`mailto:${SITE_INFO.directorEmail}`} className="hover:text-white">
                  {SITE_INFO.directorEmail}
                </a>
              </div>
            </div>

            <div className="mt-5">
              <span className="text-[11px] font-mono text-neutral-400 block mb-2 uppercase">
                Síguenos en Terreno
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href={SITE_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:border-neutral-600 transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={SITE_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:border-neutral-600 transition-all"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={SITE_INFO.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:border-neutral-600 transition-all"
                >
                  <XIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-900 bg-black py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 font-mono gap-3">
          <p>© {new Date().getFullYear()} Pelotón B. Todos los derechos reservados. Guayaquil, Ecuador.</p>
          <div className="flex items-center space-x-4">
            <Link href="/sobre-nosotros" className="hover:text-neutral-300">
              Directorio
            </Link>
            <span>·</span>
            <Link href="/contacto" className="hover:text-neutral-300">
              Acreditaciones
            </Link>
            <span>·</span>
            <Link href="/contacto" className="hover:text-neutral-300">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
