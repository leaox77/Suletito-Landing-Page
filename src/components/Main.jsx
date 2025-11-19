import inferior from "../assets/img/parte_delantera.svg";
import medio from "../assets/img/parte_media.svg";
import superior from "../assets/img/parte_final.svg";
import "../components/main.css";

export default function Main({ id}) {
  return (
    <main id={id} className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-primary to-secondary animate-gradient pt-20">

      <div className="relative w-full h-full">
        
        <div className="absolute bottom-0 left-0 w-full animate-rise-slow-1 z-30">
          <img
            src={inferior}
            alt="inferior"
            className="w-full h-auto"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full animate-rise-slow-2 z-20">
          <img
            src={medio}
            alt="medio"
            className="w-full h-auto transform translate-y-[-33%]"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full animate-rise-slow-3 z-10">
          <img
            src={superior}
            alt="superior"
            className="w-full h-auto transform translate-y-[-27%]"
          />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center animate-rise-slow-4 z-40 mb-56">
        <div className="text-center px-4">

            <h1 className="text-6xl md:text-[17rem] font-bold font-causten text-accent animate-bounce-rise">
            Sueltito
          </h1>

          <p className="text-3xl md:text-6xl font-causten font-regular text-accent mb-6 tracking-wide animate-bounce-rise">
            Rápido, cómodo y seguro.
          </p>

            <p className="text-l md:text-2xl font-causten font-light text-accent max-w-xl md:max-w-2lg mx-auto leading-relaxed">
                Digitalizamos pagos para generar inclusión financiera real en el transporte de LATAM
            </p>

        </div>
      </div>

    </main>
  );
}