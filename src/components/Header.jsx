import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/img/logo_sueltito.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false); 
  };

  return (
    <header className="w-full h-20 bg-gradient-to-b from-primary to-secondary text-black shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 h-full">

        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Sueltito Logo" className="w-40 md:w-40 object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-20 text-lg font-causten font-bold">
          <a 
            className="hover:text-accent transition tracking-wide" 
            href="#inicio"
            onClick={handleNavClick}
          >
            Inicio
          </a>
          <a 
            className="hover:text-accent transition tracking-wide" 
            href="#rural"
            onClick={handleNavClick}
          >
            Sueltito Rural
          </a>
          <a 
            className="hover:text-accent transition tracking-wide" 
            href="#impulsados"
            onClick={handleNavClick}
          >
            Aliado
          </a>
          <a 
            className="hover:text-accent transition tracking-wide" 
            href="#testimonios"
            onClick={handleNavClick}
          >
            Testimonios
          </a>
          <a
            href="#contacto"
            className="bg-accent text-white px-6 py-3 rounded-xl font-causten font-bold hover:opacity-90 transition tracking-wide"
            onClick={handleNavClick}
          >
            Contacto
          </a>
        </nav>

        <button
          className="md:hidden text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-gradient-to-b from-primary to-secondary px-6 pb-4 animate-fadeIn shadow-lg">
          <nav className="flex flex-col gap-6 text-lg font-causten font-normal py-4">
            <a 
              className="hover:text-accent transition tracking-wide" 
              href="#inicio"
              onClick={handleNavClick}
            >
              Inicio
            </a>
            <a 
              className="hover:text-accent transition tracking-wide" 
              href="#rural"
              onClick={handleNavClick}
            >
              Sueltito Rural
            </a>
            <a 
              className="hover:text-accent transition tracking-wide" 
              href="#impulsados"
              onClick={handleNavClick}
            >
              Aliado
            </a>
            <a 
              className="hover:text-accent transition tracking-wide" 
              href="#testimonios"
              onClick={handleNavClick}
            >
              Testimonios
            </a>
            <a
              href="#contacto"
              className="bg-accent text-white px-6 py-3 w-fit rounded-xl font-causten font-normal hover:opacity-90 transition tracking-wide"
              onClick={handleNavClick}
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}