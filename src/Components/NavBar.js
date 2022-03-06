import CartWidget from "./CartWidget/cardwidget";
import {Link } from "react-router-dom";
function Navbar (){  
    return        <div className="marginBottom" >
      <div className="navbar-fixed">
    <nav className="blue lighten-2">
      <div className="nav-wrapper">
      <Link to="/" className="brand-logo">Tienda</Link>
        <a  data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Simples">Simples</Link> </li>
          <li><Link to="/Triples">Triples</Link></li>
          <CartWidget />
        </ul>
      </div>  
    </nav>
    </div>
    <ul className="sidenav" id="mobile-demo">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Simples">Simples</Link></li>
      <li><Link to="/Triples">Triples</Link></li>
      <CartWidget />
    </ul>
  </div>
  

}


export default Navbar;


