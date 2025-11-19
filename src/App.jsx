import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterVCT from "./components/FooterVCT";
import Inclusion from "./components/Inclusion";
import Impulsados from "./components/Impulsados";
import Main from "./components/Main";
import Rural from "./components/Rural";

function App() {
  return (
    <div className="relative">
      <Header />

      <main className="max-w-6xl mx-auto mt-10 px-6">
        <h1 className="text-4xl font-bold text-primary">
          Bienvenido a Sueltito 🎉
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Tu landing page ya está funcionando con Tailwind y React.
        </p>
      </main>
      <FooterVCT/>
      <Inclusion/>
      <Impulsados/>
      <Footer/>
    </>
      <Main />
      <Rural />
    </div>
  );
}

export default App;
