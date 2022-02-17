import * as React from "react";
import {Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const CartPage = () => {
 const { cart, removeItem, clearAll } = useCart();

  return (
    
    <div className="container">
      <h1 className="center-align">Mi Carrito de Compras</h1>
      {cart.length===0? <h2 className="center-align">El carrito esta vacio <Link to="/">Volver</Link></h2> :
      <>
      <table className="striped centered" >
            <thead>
              <tr>
                  <th>Tipo de Sandwich</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Borrar</th>
              </tr>
              </thead>
              <tbody>
          

      {cart.map((purchase) => {
         
        return (
            <tr key={purchase.item.id}>
            <td>{purchase.item.name}</td>
            <td>{purchase.item.fullname}</td>
            <td>$ {purchase.item.price}</td>
            <td>{purchase.quantity}</td>
            <td>$ {purchase.quantity*purchase.item.price}</td>
            <td><button onClick={() => removeItem(purchase.item.id)}>borrar</button></td>
            </tr>
 
        );
      })}
        
        </tbody>        
      </table>

       <div className="container "><h3 className="center-align">El total de su compra es de: <span className="green-text"><strong>${(cart.map((purchase)=>purchase.quantity*purchase.item.price)).reduce((a, b) => a + b, 0)}</strong></span> </h3></div>
      <button onClick={clearAll}>Borrar todo</button>
      </>}
    </div>
  );
};

export default CartPage;