export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-black py-12 mt-20 border-t border-primary">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* VELOCIDAD */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-accent mb-3">
            Velocidad
          </h3>
          <p className="text-black/80 leading-relaxed">
            {/* Aquí puedes escribir tu texto */}
            Entregas rápidas y eficientes para maximizar el rendimiento de tu logística.
          </p>
        </div>

        {/* COMODIDAD */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-accent mb-3">
            Comodidad
          </h3>
          <p className="text-black/80 leading-relaxed">
            {/* Aquí puedes escribir tu texto */}
            La plataforma más fácil de usar, pensada para que todo sea intuitivo.
          </p>
        </div>

        {/* TRAZABILIDAD */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-accent mb-3">
            Trazabilidad
          </h3>
          <p className="text-black/80 leading-relaxed">
            {/* Aquí puedes escribir tu texto */}
            Monitorea cada movimiento con total transparencia y en tiempo real.
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-black/60 text-sm mt-10">
        © {new Date().getFullYear()} Sueltito • Todos los derechos reservados
      </div>
    </footer>
  );
}
