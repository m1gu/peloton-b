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
    <header className="w-full bg-white border-b border-neutral-200 sticky top-0 z-50">
      {/* Top Banner / Ticker */}
      <div className="bg-neutral-900 text-white text-[11px] tracking-wider uppercase py-1.5 px-4 font-mono flex items-center justify-between border-b border-neutral-800">
        <div className="flex items-center space-x-3 overflow-hidden">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-neutral-200">En Terreno:</span>
          <span className="text-neutral-300 truncate">
            {SITE_INFO.location} · Fotoperiodismo y Crónica de Béisbol y Sóftbol · Cobertura WBSC
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-4 text-neutral-400">
          <span>{new Date().toLocaleDateString('es-EC', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-800 hover:text-black focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Brand / Logo */}
        <Link href="/" className="flex items-center group py-1">
          <div className="relative h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0">
            <Image
              src="/logo_peloton_b.png"
              alt="Pelotón B"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-200"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold tracking-wider uppercase text-neutral-700 hover:text-black transition-colors relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action icons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-neutral-700 hover:text-black rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Buscar"
          >
            <Search className="w-5 h-5" />
          </button>
          <div className="hidden sm:flex items-center space-x-2 border-l border-neutral-200 pl-3">
            <a
              href={SITE_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-neutral-600 hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_INFO.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-neutral-600 hover:text-black transition-colors"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_INFO.social.x}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-neutral-600 hover:text-black transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon className="w-4 h-4" />
            </a>
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
