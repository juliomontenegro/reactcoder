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

  

  if((!isNaN(buyername))||(buyername.length<3||buyername.length>30)||(isNaN(phone))||(phone.length<6||phone.length>16)  ){
    console.log("Por favor llene los campos correctamente")
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
                  <th></th>
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
            <td><button className="btn red"  onClick={() => removeItem(purchase.item.id)}>borrar</button></td>
            </tr>
 
        );
      })}
        
        </tbody>        
      </table>

       <div className="container "><h3 className="center-align">El total de su compra es de: <span className="green-text"><strong>${totalCompra(cart)}</strong></span> </h3></div>
       

       <h2 className="center-align">Introduzca sus datos:</h2>
      <form onSubmit={handleSubmit} className="formwide">
        <label htmlFor="buyername">Nombre</label>
        <input className="input-field col s6"
          type="text"
          id="buyername"
          name="buyername"
          placeholder="Escriba su nombre"
          value={buyername}
          onChange={(e) => setBuyername(e.target.value)}
        />
        <label htmlFor="phone">Teléfono</label>
        <input className="input-field col s12"
          type="number"
          id="phone"
          name="phone"
          placeholder="Escriba su teléfono, solo numeros"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input className="btn" style={{marginRight:'20px'}} type="submit" value="Finalizar compra" />
        <button className="btn red"  onClick={clearAll}>Eliminar Compra</button>
      </form>
      






      </>}




    </div>
  );

  
};

export default CartPage;

