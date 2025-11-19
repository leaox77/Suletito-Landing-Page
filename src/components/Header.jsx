import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/img/logo_sueltito.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full h-20 bg-gradient-to-b from-primary to-secondary text-black shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 h-full">

        {/* LOGO + TEXTO */}
        <div className="flex items-center gap-2">
            <img src={logo} alt="Sueltito Logo" className="w-40 md:w-40 object-contain" />
        </div>

        {/* MENU (DESKTOP) */}
        <nav className="hidden md:flex items-center gap-20 text-lg font-causten font-bold">
          <a className="hover:text-accent transition tracking-wide" href="#sobre">Sobre nosotros</a>
          <a className="hover:text-accent transition tracking-wide" href="#rural">Sueltito Rural</a>
          <a className="hover:text-accent transition tracking-wide" href="#aliado">Aliado</a>

          <a
            href="#contacto"
            className="bg-accent text-white px-6 py-3 rounded-xl font-causten font-bold hover:opacity-90 transition tracking-wide"
          >
            Contacto
          </a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-gradient-to-b from-primary to-secondary px-6 pb-4 animate-fadeIn shadow-lg">
          <nav className="flex flex-col gap-6 text-lg font-causten font-normal py-4">
            <a className="hover:text-accent transition tracking-wide" href="#sobre">Sobre nosotros</a>
            <a className="hover:text-accent transition tracking-wide" href="#rural">Sueltito Rural</a>
            <a className="hover:text-accent transition tracking-wide" href="#aliado">Aliado</a>

            <a
              href="#contacto"
              className="bg-accent text-white px-6 py-3 w-fit rounded-xl font-causten font-normal hover:opacity-90 transition tracking-wide"
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
