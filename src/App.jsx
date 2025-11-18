import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto mt-10 px-6">
        <h1 className="text-4xl font-bold text-primary">
          Bienvenido a Sueltito 🎉
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Tu landing page ya está funcionando con Tailwind y React.
        </p>
      </main>
    </>
  );
}

export default App;
