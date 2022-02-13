import {Link } from "react-router-dom";

function CartWidget () {

    return(
      <li><Link to="cart"><i className="material-icons">shopping_cart</i></Link></li>  
    )

}
export default CartWidget;

