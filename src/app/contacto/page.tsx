'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SITE_INFO } from '@/data/sports-data';

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: 'Acreditaciones y Prensa',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="bg-neutral-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Mesa de Redacción
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight uppercase mt-2">
            Contacto & Acreditaciones
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl font-sans mt-3">
            Canales directos para comités deportivos, federaciones, atletas, medios y solicitudes de acreditación de prensa.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Col: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                Sede Central
              </span>
              <h2 className="text-2xl font-serif font-black text-neutral-950 uppercase">
                Pelotón B
              </h2>
              <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                Plataforma digital especializada en la crónica de campo, análisis táctico y fotoperiodismo de alta velocidad para béisbol y sóftbol.
              </p>
            </div>

            <div className="space-y-4 text-xs font-mono border-t border-neutral-200 pt-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-neutral-900 uppercase">Ubicación</span>
                  <span className="text-neutral-600">{SITE_INFO.location}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-neutral-900 uppercase">Mesa de Redacción</span>
                  <a href={`mailto:${SITE_INFO.pressEmail}`} className="text-neutral-700 hover:underline">
                    {SITE_INFO.pressEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-neutral-900 uppercase">Dirección General</span>
                  <a href={`mailto:${SITE_INFO.directorEmail}`} className="text-neutral-700 hover:underline">
                    {SITE_INFO.directorEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-neutral-900 uppercase">Análisis & Estadísticas</span>
                  <a href={`mailto:${SITE_INFO.editorialEmail}`} className="text-neutral-700 hover:underline">
                    {SITE_INFO.editorialEmail}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-sm text-xs space-y-2">
              <div className="flex items-center space-x-2 font-mono font-bold text-neutral-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Protocolos de Prensa COI & WBSC</span>
              </div>
              <p className="text-neutral-600 leading-relaxed font-sans">
                Para solicitudes de zona mixta, credenciales de campo y derechos fotográficos editoriales, contactar con al menos 48 horas de antelación al inicio del certamen.
              </p>
            </div>
          </div>

          {/* Right Col: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 border border-neutral-200 rounded-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-black mx-auto" />
                <h3 className="text-2xl font-serif font-black text-neutral-950 uppercase">
                  Mensaje Enviado
                </h3>
                <p className="text-sm text-neutral-600 font-sans max-w-md mx-auto">
                  Gracias por comunicarte con Pelotón B. La mesa de redacción responderá a la brevedad posible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-black text-white text-xs font-mono uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-serif font-black text-neutral-950 uppercase border-b border-neutral-200 pb-3">
                  Formulario de Contacto
                </h3>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1">
                    Nombre Completo / Medio
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-sm text-sm focus:outline-none focus:border-black font-sans"
                    placeholder="Ej. Juan Pérez - Federación"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-sm text-sm focus:outline-none focus:border-black font-sans"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1">
                    Motivo de la Comunicación
                  </label>
                  <select
                    value={formData.asunto}
                    onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-sm text-sm focus:outline-none focus:border-black font-sans bg-white"
                  >
                    <option value="Acreditaciones y Prensa">Acreditaciones y Prensa In Situ</option>
                    <option value="Cobertura de Torneo">Cobertura de Torneo o Serie</option>
                    <option value="Archivo Fotográfico">Solicitud de Archivo Fotográfico</option>
                    <option value="Colaboración Editorial">Colaboración / Redacción</option>
                    <option value="Otros">Otros Asuntos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1">
                    Mensaje Detallado
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-sm text-sm focus:outline-none focus:border-black font-sans"
                    placeholder="Describe los detalles de tu consulta..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-black text-white text-xs font-mono uppercase tracking-widest font-bold flex items-center justify-center space-x-2 hover:bg-neutral-800 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar a la Mesa de Redacción</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
