import logoSueltito from '../assets/img/logos/logo_sueltito_footer.svg';
import linkedinIcon from '../assets/img/iconos/linkind.svg';
import facebookIcon from '../assets/img/iconos/facebook.svg';
import tiktokIcon from '../assets/img/iconos/tiktok.svg';

export default function Footer({id}) {
  return (
    <footer id={id} className="w-full bg-accent text-white py-10 md:py-14 font-causten">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">

        <div className="flex justify-center md:justify-start">
          <div className="flex items-center gap-3">
            <img 
              src={logoSueltito}  
              alt="Sueltito Logo" 
              className="w-56 md:w-72  lg:w-64 h-auto" 
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-5">Contacto</h3>
          <p className="mb-4 text-base md:text-lg lg:text-xl">Email: info@sueltito.com</p>
          <p className="mb-4 text-base md:text-lg lg:text-xl">Whatsapp: +591 60567076</p>
          <p className="mb-4 text-base md:text-lg lg:text-xl">Telefono: +591 60567076</p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-5">Enlaces rapidos</h3>
          <ul className="flex flex-col gap-4 text-base md:text-lg lg:text-xl">
            <li><a href="#inicio" className="hover:underline">Sueltito</a></li>
            <li><a href="#rural" className="hover:underline">Sueltito Rural</a></li>
            <li><a href="#impulsados" className="hover:underline">Alianzas</a></li>
            <li><a href="#contacto" className="hover:underline">Contactanos</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-5">Síguenos</h3>
          <div className="flex justify-center md:justify-start items-center gap-6 md:gap-8 lg:gap-20"> 
            <a href="#" className="hover:opacity-80">
              <img 
                src={linkedinIcon}
                alt="LinkedIn" 
                className="w-8 md:w-10 h-8 md:h-10"
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <img 
                src={facebookIcon}
                alt="Facebook" 
                className="w-8 md:w-10 h-8 md:h-10"
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <img 
                src={tiktokIcon}
                alt="TikTok" 
                className="w-8 md:w-10 h-8 md:h-10"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-12 max-w-4xl mx-auto px-4 border-t-2 border-white"></div>

      <div className="mt-4 md:mt-6 px-4">
        <p className="text-center text-base md:text-lg lg:text-xl opacity-100">
          © 2025 Sueltito. Digitalizando el transporte, creando inclusión.
        </p>
      </div>
    </footer>
  );
}