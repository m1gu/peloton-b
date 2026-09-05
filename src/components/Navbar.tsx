'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, XIcon } from '@/components/SocialIcons';
import { SITE_INFO } from '@/data/sports-data';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Softball', href: '/softball' },
    { label: 'Baseball', href: '/baseball' },
    { label: 'Noticias', href: '/noticias' },
    { label: 'Fotos y Videos', href: '/multimedia' },
    { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="w-full bg-white">
      {/* Top Banner / Utilities */}
      <div className="bg-neutral-900 text-white text-[11px] tracking-wider uppercase py-1.5 px-4 font-mono flex items-center justify-between border-b border-neutral-800">
        <div className="flex items-center space-x-3 overflow-hidden">
          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-neutral-300 truncate">
            {SITE_INFO.location} · Fotoperiodismo y Crónica de Béisbol y Sóftbol · WBSC
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="hidden md:inline text-neutral-400">
            {new Date().toLocaleDateString('es-EC', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <div className="flex items-center space-x-2 border-l border-neutral-700 pl-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1 text-neutral-300 hover:text-white transition-colors"
              aria-label="Buscar"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
            <a
              href={SITE_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-neutral-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={SITE_INFO.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-neutral-300 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={SITE_INFO.social.x}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-neutral-300 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Centered Masthead with 3X Logo */}
      <div className="max-w-7xl mx-auto px-4 py-1 flex flex-col items-center justify-center">
        <Link href="/" className="inline-block group py-1">
          {/* Logo 3x size with tight bounds */}
          <div className="relative h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52">
            <Image
              src="/logo_peloton_b.png"
              alt="Pelotón B"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </Link>
      </div>

      {/* Centered Main Navigation Bar */}
      <div className="w-full border-t border-b border-neutral-200 bg-white sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden lg:flex items-center justify-center space-x-8 sm:space-x-10 py-3">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-bold tracking-widest uppercase text-neutral-800 hover:text-black transition-colors relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu trigger row if screen is small */}
          <div className="lg:hidden flex items-center justify-between py-2.5">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center space-x-2 text-xs font-mono uppercase font-bold text-neutral-800"
            >
              <Menu className="w-4 h-4" />
              <span>Menú de Secciones</span>
            </button>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1.5 text-neutral-700 hover:text-black"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Search Input */}
      {searchOpen && (
        <div className="border-t border-neutral-200 bg-neutral-50 px-4 py-3">
          <div className="max-w-3xl mx-auto flex items-center space-x-2">
            <Search className="w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Buscar crónicas, torneos, prospectos, pitcheo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none text-sm text-neutral-900 focus:outline-none placeholder-neutral-400 font-sans"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-neutral-500 hover:text-black font-semibold"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold uppercase tracking-wider text-neutral-800 hover:text-black py-2 border-b border-neutral-100"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 flex items-center space-x-4 text-neutral-600">
            <a href={SITE_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href={SITE_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <YoutubeIcon className="w-5 h-5" />
            </a>
            <a href={SITE_INFO.social.x} target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <XIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
