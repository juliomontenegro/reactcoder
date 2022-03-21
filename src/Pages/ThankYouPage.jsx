import * as React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore } from "../Firebase/Firebase";
import PreLoader from "../Components/PreLoaders/PreLoaders";


export const ThankYouPage = ()=> {
    
    const {id}=useParams();
    const [order, setOrder]=useState({})

    useEffect(()=>{
        const db=getFirestore();
        db.collection('ORDERS')
        .doc(id)
        .get()
        .then((res)=>setOrder({id:res.id, ...res.data()}));
        

    },[id]);

    if (!order.id) {
      return <PreLoader/>
      }

     

    return (
        <div className="container fullpage">
            <h1 className="center-align">Gracias por su compra {order.buyer.buyername}</h1>
            <h2 className="center-align"><i>Detalle de su compra</i></h2>
            <h3 className="center-align">Su codigo de compra es: <span className="green z-depth-2">{id}</span> y gasto un total de <strong className="green-text">$ {order.total }</strong>  en:</h3>
           


            <table className="striped" >
            <thead>
              <tr>
                  
                  <th>Nombre</th>                  
                  <th>Cantidad</th>
            
              </tr>
              </thead>
              <tbody>
            {(order.items).map((compra)=>{
              return(<tr key={compra.item}>
                <td>{compra.item.fullname}</td>
                <td>{compra.quantity}</td>
                
                </tr>);
             })}

            </tbody>        
            </table>
            

            
        </div>
    )
}

