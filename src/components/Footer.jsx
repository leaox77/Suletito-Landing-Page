// Importa las imágenes al inicio del archivo
import logoSueltito from '../assets/img/logos/logo_sueltito_footer.svg';
import linkedinIcon from '../assets/img/iconos/linkind.svg';
import facebookIcon from '../assets/img/iconos/facebook.svg';
import tiktokIcon from '../assets/img/iconos/tiktok.svg';

export default function Footer() {
  return (
    <footer className="w-full bg-accent text-white py-14 font-causten">
      <div className="max-w-[1600px] mx-auto  grid grid-cols-1 md:grid-cols-4 gap-16">

        {/* LOGO + SLOGAN */}
        <div>
          <div className="flex items-center gap-3">
            <img 
              src={logoSueltito}  // Usando la imagen importada
              alt="Sueltito Logo" 
              className="w-120 h-120"  // Aumentado de w-200 h-200 a w-40 h-40 (160px)
            />
          </div>
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="text-[37px] font-bold mb-5">Contacto</h3>
          <p className="mb-6 text-[23px]">Email: info@sueltito.com</p>
          <p className="mb-6 text-[23px]">Whatsapp: +591 60567076</p>
          <p className="mb-6 text-[23px]">Telefono: +591 60567076</p>
        </div>

        {/* ENLACES RÁPIDOS */}
        <div>
          <h3 className="text-[37px]  font-bold mb-5">Enlaces rapidos</h3>
          <ul className="flex flex-col gap-6 text-[23px]">
            <li><a href="#" className="hover:underline">Sueltito</a></li>
            <li><a href="#" className="hover:underline">Sueltito Rural</a></li>
            <li><a href="#" className="hover:underline">Alianzas</a></li>
            <li><a href="#" className="hover:underline">Contactanos</a></li>
          </ul>
        </div>

        {/* SÍGUENOS */}
        <div>
          <h3 className="text-[37px] font-bold mb-5">Síguenos</h3>
          <div className="flex items-center gap-20 text-light"> {/* Aumentado gap-8 a gap-12 */}

            {/* LinkedIn */}
            <a href="#" className="hover:opacity-80">
              <img 
                src={linkedinIcon}
                alt="LinkedIn" 
                className="w-10 h-12"
              />
            </a>

            {/* Facebook */}
            <a href="#" className="hover:opacity-80">
              <img 
                src={facebookIcon}
                alt="Facebook" 
                className="w-10 h-12"
              />
            </a>

            {/* TikTok */}
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

      {/* LÍNEA INFERIOR (NO COMPLETA) */}
      <div className="mt-12 w-1/2 md:w-4/5 mx-auto border-t-2 border-white"></div>

      {/* COPYRIGHT */}
        <p className="text-center mt-6 text-[23px] opacity-100">
          © 2025 Sueltito. Digitalizando el transporte, creando inclusión.
        </p>
    </footer>
  );
}