import { ImageWithFallback } from './components/figma/ImageWithFallback';
import qrCodeImage from 'figma:asset/9fd622c78fe57d0e0a191e2b81394b2599637ffc.png';
import { useState, useEffect } from 'react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-03-14T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 animate-gradient"></div>
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-2xl mx-auto p-4 md:p-8 w-full">
        <div className="bg-white/95 backdrop-blur-sm p-6 md:p-12 rounded-3xl shadow-2xl">
          <h1 className="text-center mb-6 md:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Este viaje incluye
          </h1>
          
          <div className="space-y-4 md:space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h2 className="text-slate-800 mb-1">Alojamiento Premium</h2>
                <p className="text-slate-600">2 días y 1 noche en el Hotel Montanyà Hotel & Lodge 4* situado en Seva (Montseny)</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h2 className="text-slate-800 mb-1">Media Pensión</h2>
                <p className="text-slate-600">Desayuno y cena incluido</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <div>
                <h2 className="text-slate-800 mb-1">Piscina Interior</h2>
                <p className="text-slate-600">Acceso a la piscina interior</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-slate-800 mb-1">Spa & Bienestar</h2>
                <p className="text-slate-600">Acceso al spa</p>
              </div>
            </div>
          </div>

          {/* Contador Regresivo */}
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-slate-200">
            <h2 className="text-center text-slate-700 mb-4 md:mb-6 text-sm md:text-base">Cuenta atrás para tu viaje</h2>
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl md:rounded-2xl p-2 md:p-4 text-center">
                <div className="text-2xl md:text-4xl text-white mb-1">{timeLeft.days}</div>
                <div className="text-[10px] md:text-sm text-white/80">Días</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl md:rounded-2xl p-2 md:p-4 text-center">
                <div className="text-2xl md:text-4xl text-white mb-1">{timeLeft.hours}</div>
                <div className="text-[10px] md:text-sm text-white/80">Horas</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl md:rounded-2xl p-2 md:p-4 text-center">
                <div className="text-2xl md:text-4xl text-white mb-1">{timeLeft.minutes}</div>
                <div className="text-[10px] md:text-sm text-white/80">Minutos</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl md:rounded-2xl p-2 md:p-4 text-center">
                <div className="text-2xl md:text-4xl text-white mb-1">{timeLeft.seconds}</div>
                <div className="text-[10px] md:text-sm text-white/80">Segundos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}