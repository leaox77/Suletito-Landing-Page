import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../assets/react.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-b from-primary to-secondary text-black shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO + TEXTO */}
        <div className="flex items-center gap-2">
          {/* Logo SVG */}
          <svg
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>

          <span className="text-4xl font-causten font-bold text-accent tracking-wide">
            Sueltito
          </span>
        </div>

        {/* MENU (DESKTOP) */}
        <nav className="hidden md:flex items-center gap-12 text-lg font-causten font-bold">
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
        <div className="md:hidden px-6 pb-4 animate-fadeIn">
          <nav className="flex flex-col gap-6 text-lg font-causten font-normal">
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
