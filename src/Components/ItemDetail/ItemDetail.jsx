import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../Context/CartContext";
import {getFirestore} from "../../Firebase/Firebase"

const ItemDetail = ({ UrlServerDetail }) => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  
  
  const [stock, setStock] = React.useState(1);
  const [counter, setCounter] = React.useState(1);
  const { addItem } = useCart();
  
  
  const sumarClick=()=> {
     
    product.stock !== 0 && setCounter((contador) => contador + 1);
    product.stock !== 0 && setStock((estock) => estock + 1);
  }
  const restarClick= ()=> {
      
  counter !== 1 && setCounter((contador)=>contador - 1);
  counter !== 1 && setStock((estock)=>estock - 1);
  }
 
  const handleClick = () => {
    addItem(product, counter);
  };
 
  console.log(stock);
  useEffect(() => {

    const db = getFirestore();

    const productsCollection = db.collection(UrlServerDetail);
    const selectedProduct = productsCollection.doc(id);

    setIsLoading(true);
    selectedProduct
      .get()
      .then((response) => {
        if (!response.exists) console.log("El producto no existe");
        setProduct({ ...response.data(), id: response.id });
       
      })
      .finally(() => setIsLoading(false));



  }, [id,UrlServerDetail]);

  if (isLoading || !product) return <p className="center-align">Cargando...</p>;

  

  return (

    <div className="fullpage">
      <h1 className="center-align">{product.name}</h1>

      <div className="container ">
        <div className="row ">
          <div className="col s12 m6 valign-wrapper">
            <img
              className="responsive-img"
              src={`${process.env.PUBLIC_URL}/assets/img/${product.img}`}
              alt={product.fullname}
            />
          </div>
          <div className="col s12 m6 flow-text">
            <h2 className="card-title grey-text text-darken-4">
              <blockquote>{product.fullname}</blockquote>
            </h2>
            <h5>
              <i>{product.description}</i>
            </h5>

            <div>
              <h3>
                Precio :
                <strong className="green-text"> $ {product.price}</strong>
              </h3>
               {counter>1? <h4 className="green-text">Total:${counter*product.price}</h4>:""}
              
              <h5>En stock: {(product.stock - stock)} unidades</h5>
              <div className="valign-wrapper containerCounter">
              <button
                className="btn-floating btn-medium waves-effect waves-light red" onClick={sumarClick}
               
              >
                <i className="material-icons">add</i>
              </button><h3 className="spaceMargin">{counter}</h3>
              <button
                className="btn-floating btn-medium waves-effect waves-light red" onClick={restarClick}
                
              >
                <i className="material-icons">remove</i>
              </button>
              </div>

              <br/>
              <br/>
              <button className="btn" onClick={handleClick}>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ItemDetail;

