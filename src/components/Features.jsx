import bajaSenal from "../assets/img/iconos/naja_senal.svg";
import implementacionRapida from "../assets/img/iconos/implementacion_rapida.svg";
import inclusion from "../assets/img/iconos/impulso.svg";
import historialConfiable from "../assets/img/iconos/historial.svg";

export default function Features() {
  const features = [
    {
      icon: <img src={bajaSenal} className="w-12 h-12" alt="baja señal" />,
      title: "Baja señal",
      description: "Funciona incluso con conectividad limitada."
    },
    {
      icon: <img src={implementacionRapida} className="w-12 h-12" alt="implementacion rapida" />,
      title: "Implementacion rapida",
      description: "Herramientas accesibles para transportistas rurales."
    },
    {
      icon: <img src={inclusion} className="w-12 h-12" alt="inclusion" />,
      title: "Impulso a la Inclusión",
      description: "Facilita el acceso a servicios financieros formales."
    },
    {
      icon: <img src={historialConfiable} className="w-12 h-12" alt="historial confiable" />,
      title: "Historial Confiable",
      description: "Datos reales para mototaxis, minibuses y transportistas."
    }
  ];

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative min-h-[150px] p-2 flex items-start"
            >
              <div className="mr-4 flex items-center flex-shrink-0">
                {feature.icon}
              </div>

              <div className="flex-1 relative">
                <div className="h-[60px] flex items-center">
                  <h3 className="text-2xl font-causten font-bold text-accent leading-tight">
                    {feature.title}
                  </h3>
                </div>
                <p className="absolute top-[66px] left-0 text-xl font-causten font-light text-accent leading-relaxed max-w-[240px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
