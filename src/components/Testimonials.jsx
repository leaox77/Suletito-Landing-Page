import testimonialIcon from "../assets/img/iconos/comentarios.svg";

export default function Testimonials({id}) {
  const testimonials = [
    {
      icon: testimonialIcon,
      text: "“Ya no dudo de los pagos digitales, es sencillo de entender y me ahorra mucho tiempo.”",
      profile: {
        initials: "CT",
        name: "Chofer Trufi",
        location: "La Paz - Bolivia",
        color: "bg-orange-500"
      }
    },
    {
      icon: testimonialIcon,
      text: "“Mi trabajo se dignifica, puedo decir alegremente que soy mototaxista y acceder a créditos.”",
      profile: {
        initials: "MR",
        name: "Mototaxi Rural", 
        location: "Desaguadero - Bolivia",
        color: "bg-secondary"
      }
    },
    {
      icon: testimonialIcon,
      text: "“Podemos reducir el riesgo crediticio con este sector históricamente desatendido gracias a la trazabilidad de Sueltito.”",
      profile: {
        initials: "AI",
        name: "Aliado Institucional",
        location: "Banca de Desarrollo",
        color: "bg-primary"
      }
    }
  ];

  return (
    <section id={id} className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-causten font-bold text-accent text-left mb-16">
          Impacto real en transporte real
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col">
              
              <div className="flex mb-6">
                <div className="mr-4 flex-shrink-0">
                  <img 
                    src={testimonial.icon} 
                    alt="Testimonio" 
                    className="w-10 h-10" 
                  />
                </div>

                <div className="flex-1">
                  <p className="text-lg font-causten font-light italic text-accent leading-relaxed whitespace-pre-line text-left">
                    {testimonial.text}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className={`w-16 h-16 ${testimonial.profile.color} rounded-full flex items-center justify-center flex-shrink-0 mr-4`}>
                  <span className="text-[#715c3f] text-lg font-causten font-bold">
                    {testimonial.profile.initials}
                  </span>
                </div>

                <div className="text-left">
                  <h4 className="text-xl font-causten font-bold text-accent">
                    {testimonial.profile.name}
                  </h4>
                  <p className="text-lg font-causten font-light text-primary">
                    {testimonial.profile.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}