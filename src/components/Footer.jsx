import logoSueltito from '../assets/img/logos/logo_sueltito_footer.svg';
import linkedinIcon from '../assets/img/iconos/linkind.svg';
import facebookIcon from '../assets/img/iconos/facebook.svg';
import tiktokIcon from '../assets/img/iconos/tiktok.svg';

export default function Footer({id}) {
  return (
    <footer id={id} className="w-full bg-accent text-white py-14 font-causten">
      <div className="max-w-[1600px] mx-auto  grid grid-cols-1 md:grid-cols-4 gap-16">

        <div>
          <div className="flex items-center gap-3">
            <img 
              src={logoSueltito}  
              alt="Sueltito Logo" 
              className="w-120 h-120" 
            />
          </div>
        </div>

        <div>
          <h3 className="text-[37px] font-bold mb-5">Contacto</h3>
          <p className="mb-6 text-[23px]">Email: info@sueltito.com</p>
          <p className="mb-6 text-[23px]">Whatsapp: +591 60567076</p>
          <p className="mb-6 text-[23px]">Telefono: +591 60567076</p>
        </div>

        <div>
          <h3 className="text-[37px]  font-bold mb-5">Enlaces rapidos</h3>
          <ul className="flex flex-col gap-6 text-[23px]">
            <li><a href="#inicio" className="hover:underline">Sueltito</a></li>
            <li><a href="#rural" className="hover:underline">Sueltito Rural</a></li>
            <li><a href="#impulsados" className="hover:underline">Alianzas</a></li>
            <li><a href="#contacto" className="hover:underline">Contactanos</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[37px] font-bold mb-5">Síguenos</h3>
          <div className="flex items-center gap-20 text-light"> 

            <a href="#" className="hover:opacity-80">
              <img 
                src={linkedinIcon}
                alt="LinkedIn" 
                className="w-10 h-12"
              />
            </a>

            <a href="#" className="hover:opacity-80">
              <img 
                src={facebookIcon}
                alt="Facebook" 
                className="w-10 h-12"
              />
            </a>

            <a href="#" className="hover:opacity-80">
              <img 
                src={tiktokIcon}
                alt="TikTok" 
                className="w-10 h-12"
              />
            </a>

          </div>
        </div>
      </div>

      <div className="mt-12 w-1/2 md:w-4/5 mx-auto border-t-2 border-white"></div>

        <p className="text-center mt-6 text-[23px] opacity-100">
          © 2025 Sueltito. Digitalizando el transporte, creando inclusión.
        </p>
    </footer>
  );
}