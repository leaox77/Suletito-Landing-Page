import auto from '../assets/img/auto.gif';
import camioneta from '../assets/img/camioneta.gif';

export default function Inclusion() {
  return (
    <section
      id="inclusion"
      className="w-full bg-white py-16 px-16 font-causten"
    >
      <div className="max-w-[88rem] mx-auto">
        <h2 className="text-center text-[2.8rem] md:text-[3.5rem] font-bold text-accent mb-10 leading-tight"> 
          La plataforma que conecta pasajeros, conductores y aliados financieros
        </h2>
      </div>
      <div className="max-w-[92rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14"> 

        <div className="flex flex-col justify-center">
          <p className="text-4xl text-black-700 leading-tight mb-24">
            Sueltito digitaliza el pago de pasajes y genera trazabilidad en transporte urbano y rural.
            Permite que los conductores administren automáticamente sus ingresos, eliminen el manejo
            de efectivo y accedan a servicios financieros confiables.
          </p>

          <div className="w-full flex justify-center md:justify-start">
            <img
              src={camioneta}
              alt="Camioneta Sueltito"
              className="w-80 md:w-[950px] drop-shadow-lg rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center text-right md:text-right">
          
          <div className="w-full flex justify-center md:justify-end mb-12">
            <img
              src={auto}
              alt="Auto Sueltito"
              className="w-80 md:w-[950px] drop-shadow-lg rounded-lg"
            />
          </div>

          <h3 className="text-2xl md:text-6xl font-bold text-accent mb-2 mt-4">
            Inclusión Real
          </h3>

          <p className="text-4xl text-black-700 leading-tight max-w-[799px] ml-auto">
            Sueltito va más allá de digitalizar pagos: fomenta inclusión financiera real para
            conductores, tanto propietarios como asalariados, brindándoles acceso a crédito,
            seguridad económica y oportunidades de crecimiento, incluso en rutas rurales y remotas.
          </p>
        </div>
      </div>

    </section>
  );
}