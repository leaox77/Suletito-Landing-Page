export default function Collaboration() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-5xl font-causten font-bold text-accent mb-8 max-w-6xl mx-auto leading-tight">
          Si eres una entidad financiera, trabajemos juntos para transformar el transporte e impulsar inclusión real
        </h2>

        <p className="text-3xl md:text-3xl font-causten font-light text-black mb-16 leading-relaxed max-w-5xl mx-auto">
          Hablemos y llevemos Sueltito a tu ciudad, tu comunidad o tu entidad.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          
          <button className="px-20 py-4 text-2xl border-2 border-primary text-primary font-causten font-bold rounded-lg hover:bg-primary hover:text-white transition duration-300 min-w-[320px]"> 
            Conocer Sueltito Rural
          </button>

          <button className="px-20 py-4 text-2xl bg-accent text-white font-causten font-bold rounded-lg hover:bg-accent/90 transition duration-300 min-w-[360px]"> 
            Solicitar Demo
          </button>

          <button className="px-20 py-4 text-2xl border-2 border-primary text-primary font-causten font-bold rounded-lg hover:bg-primary hover:text-white transition duration-300 min-w-[320px]">
            Contactar con el equipo
          </button>

        </div>

      </div>
    </section>
  );
}