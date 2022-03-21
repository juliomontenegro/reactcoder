import HomeCard from "../Components/HomeCard/HomeCard"

const HomePage = () => {
  return (
    <main className="fullpage">
      <h1 className="center-align">Mi Tienda</h1>

      <div className="container">
        <div className="row">
        <HomeCard pageDir="Simples" imgDir="migasimple_500x500.jpg" altDir="sandwich de miga simple" nameDir="SANDWICH SIMPLES" desDir="Sandwichs de Miga Simples" />

        <HomeCard pageDir="Triples" imgDir="migatriple_500x500.jpg" altDir="sandwich de miga triple" nameDir="SANDWICH TRIPLES" desDir="Sandwichs de Miga Trimples" />

        <HomeCard pageDir="Tortas" imgDir="tortas_500x500.jpg" altDir="variedad de tortas" nameDir="TORTAS" desDir="Gran Variedad de Tortas" />



        </div>
      </div>
    </main>
  );
};
export default HomePage;
