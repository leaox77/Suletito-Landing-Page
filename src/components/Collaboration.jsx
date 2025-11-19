export default function Collaboration() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-causten font-bold text-accent mb-6 md:mb-8 max-w-4xl md:max-w-6xl mx-auto leading-tight">
          Si eres una entidad financiera, trabajemos juntos para transformar el transporte e impulsar inclusión real
        </h2>

        <p className="text-lg md:text-2xl lg:text-3xl font-causten font-light text-black mb-8 md:mb-16 leading-relaxed max-w-3xl md:max-w-5xl mx-auto">
          Hablemos y llevemos Sueltito a tu ciudad, tu comunidad o tu entidad.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8">
          
          <button className="w-full sm:w-auto px-8 md:px-20 py-3 md:py-4 text-lg md:text-2xl border-2 border-primary text-primary font-causten font-bold rounded-lg hover:bg-primary hover:text-white transition duration-300 min-w-[280px] md:min-w-[320px]"> 
            Conocer Sueltito Rural
          </button>

          <button className="w-full sm:w-auto px-8 md:px-20 py-3 md:py-4 text-lg md:text-2xl bg-accent text-white font-causten font-bold rounded-lg hover:bg-accent/90 transition duration-300 min-w-[280px] md:min-w-[360px]"> 
            Solicitar Demo
          </button>

          <button className="w-full sm:w-auto px-8 md:px-20 py-3 md:py-4 text-lg md:text-2xl border-2 border-primary text-primary font-causten font-bold rounded-lg hover:bg-primary hover:text-white transition duration-300 min-w-[280px] md:min-w-[320px]">
            Contactar con el equipo
          </button>

        </div>

      </div>
    </section>
  );
}