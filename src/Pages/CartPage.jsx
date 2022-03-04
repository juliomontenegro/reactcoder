import * as React from "react";
import {Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import {getFirestore} from "../Firebase/Firebase"

const CartPage = () => {
 const { cart, removeItem, clearAll } = useCart();
 const [buyername, setBuyername] = React.useState("");
 const [phone, setPhone] = React.useState("");
 let navigate= useNavigate();

 const totalCompra = (cart) => {
  let total = 0;
  cart.forEach((element) => {
    total += element.item.price * element.quantity;
  });
  return total;
};


 const handleSubmit = async (evt) => {
  evt.preventDefault();

  if (!buyername || !phone) {
    console.log("Por favor llene los campos");
    return false;
  }

 const newOrder = {
  buyer: { buyername, phone, },
  items: cart,
  total: totalCompra(cart),
  
}
console.log(newOrder);
const db = getFirestore();
    db.collection("ORDERS")
    .add(newOrder)
    .then((res)=>{console.log("compra realizada exitosamente, su id de orden es: ", res.id)
  
    navigate(`/Thanks/${res.id}`)
    }, clearAll())
    
    .catch((err)=>console.log("Hubo un error",err));


};

  
  return (
    
    <div className="container fullpage">
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

       <div className="container "><h3 className="center-align">El total de su compra es de: <span className="green-text"><strong>${totalCompra(cart)}</strong></span> </h3></div>
       

       <h2>Introduzca sus datos:</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid red",
        }}
      >
        <label htmlFor="buyername">Nombre</label>
        <input
          type="text"
          id="buyername"
          name="buyername"
          placeholder="Escriba su nombre"
          value={buyername}
          onChange={(e) => setBuyername(e.target.value)}
        />
        <label htmlFor="phone">Teléfono</label>
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="Escriba su teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input type="submit" value="Finalizar compra" />
      </form>
      <button onClick={clearAll}>Eliminar Compra</button>






      </>}




    </div>
  );

  
};

export default CartPage;

