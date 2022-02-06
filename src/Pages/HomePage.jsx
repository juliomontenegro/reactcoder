import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <h1 className="center-align">Mi Tienda</h1>

      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <Link to="/Simples">
                  <img src={require("../Imagenes/migasimple_500x500.jpg")} />
                </Link>
                <span className="card-title">SIMPLES</span>
              </div>
              <div className="card-content">
                <p>Sandwichs de miga simples</p>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <Link to="/Triples">
                  <img src={require("../Imagenes/migatriple_500x500.jpg")} />
                </Link>
                <span className="card-title">TRIPLES</span>
              </div>
              <div className="card-content">
                <p>Sandwichs de miga triple</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
