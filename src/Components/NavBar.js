import CartWidget from "./CartWidget/cardwidget";

function Navbar (){  
    return        <div>
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">Tienda</a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#">producto1</a></li>
          <li><a href="#">producto2</a></li>
          <li><a href="#">producto3</a></li>
          <CartWidget />
        </ul>
      </div>
    </nav>
    <ul className="sidenav" id="mobile-demo">
      <li><a href="#">producto1</a></li>
      <li><a href="#">producto2</a></li>
      <li><a href="#">producto3</a></li>
      <li><a href="#">mi compra</a></li>
    </ul>
  </div>
  

}


export default Navbar;


