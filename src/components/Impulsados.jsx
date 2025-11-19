import { useState } from "react";

import acelearetc from "../assets/img/logoscolor/aceleratec_logo.svg";
import viva from "../assets/img/logoscolor/viva_logo.svg";
import mc4 from "../assets/img/logoscolor/mc4_logo.svg";
import sensedia from "../assets/img/logoscolor/sensedia_logo.svg";
import codecats from "../assets/img/logoscolor/code_cats_logo.svg";

import iconoInnovacion from "../assets/img/iconos/programa_innovacion.svg";
import iconoPilotos from "../assets/img/iconos/pilotos_ejecucion.svg";
import iconoExpansion from "../assets/img/iconos/expansion.svg";
import iconoReconocimientos from "../assets/img/iconos/reconocimientos.svg";

export default function Inclusion({id}) {
  const logos = [acelearetc, viva, mc4, sensedia, codecats];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section id={id} className="w-full bg-[#edf9e5] py-12 md:py-20 px-4 md:px-6 font-causten">
      <h2 className="text-center text-2xl md:text-4xl lg:text-6xl font-bold text-accent mb-8 md:mb-16">
        Impulsados por aliados que creen en la inclusión
      </h2>

      <div className="relative overflow-hidden w-full py-4 md:py-6">
        <div className="flex gap-8 md:gap-16 whitespace-nowrap animate-scroll-fast hover:[animation-play-state:paused]">
          {duplicatedLogos.map((logo, idx) => (
            <div 
              key={idx}
              className="relative flex-shrink-0 group/logo"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={logo}
                className={`h-8 md:h-12 lg:h-14 w-auto transition-all duration-300 ${
                  hoveredIndex === idx 
                    ? 'scale-110 brightness-110 drop-shadow-lg' 
                    : 'opacity-90 hover:opacity-100' 
                }`}
                alt={`Logo ${idx}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto mt-12 md:mt-20">

        <div className="flex gap-4 md:gap-6 items-start">
          <div className="flex-shrink-0">
            <img 
              src={iconoInnovacion} 
              alt="Innovación" 
              className="w-16 md:w-20 lg:w-25 h-16 md:h-20 lg:h-25" 
            />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-accent mb-2 md:mb-3">
              Programas de Innovación
            </h3>
            <p className="text-base md:text-lg lg:text-2xl text-accent max-w-full">
              Participación activa en programas de innovación y aceleración de alto impacto.
            </p>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 items-start">
          <div className="flex-shrink-0">
            <img 
              src={iconoPilotos} 
              alt="Pilotos" 
              className="w-16 md:w-20 lg:w-25 h-16 md:h-20 lg:h-25"  
            />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-accent mb-2 md:mb-3">
              Pilotos en Ejecución
            </h3>
            <p className="text-base md:text-lg lg:text-2xl text-accent">
              Pilotos urbanos y rurales con resultados probados en el sector real.
            </p>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 items-start">
          <div className="flex-shrink-0">
            <img 
              src={iconoExpansion} 
              alt="Expansión" 
              className="w-16 md:w-20 lg:w-25 h-16 md:h-20 lg:h-25" 
            />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-accent mb-2 md:mb-3">
              Expansión Estratégica
            </h3>
            <p className="text-base md:text-lg lg:text-2xl text-accent">
              Creciendo hacia rutas rurales y fronterizas, cerrando la brecha digital.
            </p>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 items-start">
          <div className="flex-shrink-0">
            <img 
              src={iconoReconocimientos} 
              alt="Reconocimientos" 
              className="w-16 md:w-20 lg:w-25 h-16 md:h-20 lg:h-25"  
            />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-accent mb-2 md:mb-3">
              Reconocimientos
            </h3>
            <p className="text-base md:text-lg lg:text-2xl text-accent">
              Finalistas del Laboratorio de Inclusión Financiera 2025 de CAF y Seedstars.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}