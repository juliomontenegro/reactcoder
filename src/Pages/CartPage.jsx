import * as React from "react";
import { useCart } from "../Context/CartContext";

const CartPage = () => {
  const { cart, removeItem, clearAll } = useCart();

  return (
    <div className="container">
      <h1 className="center-align">Mi Carrito de Compras</h1>
       
      <table className="striped centered" >
            <thead>
              <tr>
                  <th>Tipo de Sandwich</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Borrar</th>
              </tr>
              </thead>
              <tbody>
          

      {cart.map((purchase) => {
        return (
            <tr>
            <td>{purchase.item.name}</td>
            <td>{purchase.item.fullname}</td>
            <td>{purchase.item.price}</td>
            <td>{purchase.quantity}</td>
            <td><button onClick={() => removeItem(purchase.item.id)}>borrar</button></td>
            </tr>
 
        );
      })}
      
        </tbody>        
      </table>


      <button onClick={clearAll}>Borrar todo</button>
    </div>
  );
};

export default CartPage;