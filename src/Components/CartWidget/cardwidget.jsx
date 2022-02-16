import {Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

function CartWidget () {

  const { cart } = useCart();

    return(
       
      <li className="licarro"><Link to="cart">{cart.length>0? <h6 className="carronum">{cart.length}</h6>:""}<i className="material-icons carro">shopping_cart</i></Link></li> 
       )

}
export default CartWidget;

