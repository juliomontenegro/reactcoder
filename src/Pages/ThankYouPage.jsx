import * as React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore } from "../Firebase/Firebase";


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
        return <p className="center-align">Cargando...</p>;
      }

     

    return (
        <div className="container fullpage">
            <h1 className="center-align">Gracias por su compra {order.buyer.buyername}</h1>
            <h2 className="center-align"><i>Detalle de su compra</i></h2>
            <h3 className="center-align">gasto un total de <strong className="green-text">$ {order.total }</strong>  en:</h3>
           


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











// import * as React from "react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getFirestore } from "../Firebase/Firebase";

// const ThankYouPage = () => {
//   const {id } = useParams();
//   const [order, setOrder] = useState({});

//   useEffect(() => {
//     const db = getFirestore();
//     db.collection("ORDERS")
//       .doc(id)
//       .get()
//       .then((res) => setOrder({ id: res.id, ...res.data() }));
//   }, [id]);

//   if (!order.id) {
//     return <p>Cargando...</p>;
//   }

//   return (
//     <div>
//       <h1>Gracias por su compra, sr/sra. {order.buyer.buyername}</h1>
//       <h2>Detalle de su compra:</h2>
//       <p>{order.items[0].item.name}</p>
//     </div>
//   );
// };
// export default ThankYouPage;
