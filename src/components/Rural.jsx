import { useEffect, useRef } from "react";
import montanas from "../assets/img/montanas.svg";
import nubes from "../assets/img/nubes.svg";
import "../components/rural.css";

export default function Rural() {
  const montanasContainerRef = useRef(null);
  const nubesContainerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (montanasContainerRef.current) {
        montanasContainerRef.current.classList.add('animate-scroll');
      }
      if (nubesContainerRef.current) {
        nubesContainerRef.current.classList.add('animate-scroll');
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen bg-white flex flex-col">

      {/* ===== NUBES - Fondo (z-0) - EN LA PARTE SUPERIOR ===== */}
      <div 
        ref={nubesContainerRef}
        className="absolute top-0 left-0 w-full h-1/4 z-0 nubes-container" /* top-0 y altura definida */
      >
        <div className="flex h-full">
          {[...Array(60)].map((_, index) => (
            <img
              key={index}
              src={nubes}
              alt="nubes"
              className="w-screen h-full object-contain" /* h-full para ocupar la altura del contenedor */
            />
          ))}
        </div>
      </div>

      {/* ===== CONTENIDO PRINCIPAL - Ocupa el espacio disponible ===== */}
      <div className="flex-1 relative overflow-hidden">
        
        {/* ===== MONTANAS - Medio (z-10) - ALTURA REDUCIDA ===== */}
        <div 
          ref={montanasContainerRef}
          className="absolute bottom-0 left-0 w-full z-10 montanas-container"
        >
          <div className="flex">
            {[...Array(60)].map((_, index) => (
              <img
                key={index}
                src={montanas}
                alt="montañas"
                className="w-screen h-32 object-cover"
              />
            ))}
          </div>
        </div>

        {/* ===== TEXTO - Frente (z-20) - ARRIBA ===== */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pb-40">
          <div className="text-center px-6">
            <h1 className="text-8xl md:text-8xl font-bold font-causten text-accent mb-6">
              Sueltito Rural
            </h1>
            <p className="text-2xl md:text-4xl font-causten font-light text-black max-w-2xl leading-relaxed">
              Inclusión para quienes conectan personas, comunidades y oportunidades
            </p>
          </div>
        </div>

      </div>

      {/* ===== FOOTER - Integrado en el mismo viewport ===== */}
      <div className="w-full bg-accent py-8 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-lg md:text-xl font-causten font-light text-white text-center leading-relaxed">
            Llevamos nuestra tecnología a rutas rurales, interprovinciales y fronterizas, 
            donde la infraestructura digital es limitada. Con pagos instantáneos y registro 
            automático de ingresos desde el primer día, los choferes rurales pueden acceder 
            a servicios financieros formales, generar historial confiable de ingresos y 
            aprovechar nuevas oportunidades de crecimiento.
          </p>
        </div>
      </div>

    </section>
  );
}