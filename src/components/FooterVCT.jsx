import velocidadIcon from '../assets/img/iconos/velocidad.svg';
import comodidadIcon from '../assets/img/iconos/comodidad.svg';
import trazabilidadIcon from '../assets/img/iconos/trazabilidad.svg';

export default function FooterVCT() {
  return (
    <section className="w-full bg-accent text-white py-12 font-causten">
      <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-40"> 
        
        {/* Velocidad */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left -mt-1">
          <div className="flex items-center gap-4 self-start">
            <img 
              src={velocidadIcon} 
              alt="Velocidad" 
              className="w-8 h-9"
            />
            <h3 className="text-4xl font-bold md:hidden">Velocidad</h3>
          </div>
          <div className="flex-1">
            <h3 className="text-4xl font-bold mb-3 hidden md:block -mt-8">Velocidad</h3>
            <p className="text-xl opacity-100 leading-snug max-w-sm -mt-4">
              Pagos instantáneos, pensados para la dinámica del transporte público.
            </p>
          </div>
        </div>

        {/* Comodidad */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-4 self-start">
            <img 
              src={comodidadIcon} 
              alt="Comodidad" 
              className="w-9 h-9"
            />
            <h3 className="text-4xl font-bold md:hidden">Comodidad</h3>
          </div>
          <div className="flex-1">
            <h3 className="text-4xl font-bold mb-3 hidden md:block -mt-8">Comodidad</h3>
            <p className="text-xl opacity-100 leading-snug max-w-sm -mt-4">
              Olvídate de monedas, redondeos, falta de cambio y QRs lentos.
            </p>
          </div>
        </div>

        {/* Trazabilidad */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left -mt-1">
          <div className="flex items-center gap-4 self-start">
            <img 
              src={trazabilidadIcon} 
              alt="Trazabilidad" 
              className="w-9 h-9"
            />
            <h3 className="text-4xl font-bold md:hidden">Trazabilidad</h3>
          </div>
          <div className="flex-1">
            <h3 className="text-4xl font-bold mb-3 hidden md:block -mt-0">Trazabilidad</h3>
            <p className="text-xl opacity-100 leading-snug max-w-sm -mt-4">
              Registro confiable de ingresos, respaldando a choferes y aliados financieros.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}