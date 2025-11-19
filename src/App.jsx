import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterVCT from "./components/FooterVCT";
import Inclusion from "./components/Inclusion";
import Impulsados from "./components/Impulsados";
import Main from "./components/Main";
import Rural from "./components/Rural";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Collaboration from "./components/Collaboration";

function App() {
  return (
    <div className="relative">
      <Header />
      <Main id="inicio" /> 
      <FooterVCT id="footer-vct" />
      <Inclusion id="inclusion" />
      <Rural id="rural" />
      <Features id="features" />
      <Impulsados id="impulsados" />
      <Testimonials id="testimonios" />
      <Collaboration id="aliado" /> 
      <Footer id="contacto" /> 
    </div>
  );
}

export default App;