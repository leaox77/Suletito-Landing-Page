import auto from '../assets/img/auto.gif';
import camioneta from '../assets/img/camioneta.gif';

export default function Inclusion() {
  return (
    <section
      id="inclusion"
      className="w-full bg-white py-8 md:py-16 px-4 md:px-16 font-causten" 
    >
      <div className="max-w-6xl mx-auto"> 
        <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold text-accent mb-6 md:mb-10 leading-tight"> 
          La plataforma que conecta pasajeros, conductores y aliados financieros
        </h2>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14"> 

        <div className="flex flex-col justify-center order-2 lg:order-1"> 

          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 md:mb-24"> 
            Sueltito digitaliza el pago de pasajes y genera trazabilidad en transporte urbano y rural.
            Permite que los conductores administren automáticamente sus ingresos, eliminen el manejo
            de efectivo y accedan a servicios financieros confiables.
          </p>

          <div className="w-full flex justify-center">
            <img
              src={camioneta}
              alt="Camioneta Sueltito"
              className="w-full max-w-xs md:max-w-md lg:max-w-lg drop-shadow-lg rounded-lg" /* Tamaños responsivos */
            />
          </div>
        </div>

        <div className="flex flex-col justify-center order-1 lg:order-2 text-center lg:text-right"> 

          <div className="w-full flex justify-center lg:justify-end mb-6 md:mb-12">
            <img
              src={auto}
              alt="Auto Sueltito"
              className="w-full max-w-xs md:max-w-md lg:max-w-lg drop-shadow-lg rounded-lg" 
            />
          </div>

          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-accent mb-2 mt-4">
            Inclusión Real
          </h3>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-full lg:max-w-2xl lg:ml-auto">
            Sueltito va más allá de digitalizar pagos: fomenta inclusión financiera real para
            conductores, tanto propietarios como asalariados, brindándoles acceso a crédito,
            seguridad económica y oportunidades de crecimiento, incluso en rutas rurales y remotas.
          </p>
        </div>
      </div>
    </section>
  );
}