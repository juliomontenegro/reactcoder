import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetail = ({ UrlServerDetail }) => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [stock, setStock] = React.useState(10);
  const [counter, setCounter] = React.useState(0);


  
 const sumarClick=()=> {
     
    stock !== 0 && setCounter((contador) => contador + 1);
    stock !== 0 && setStock((estock) => estock - 1);
  }
  const restarClick= ()=> {
      
  counter !== 0 && setCounter((contador)=>contador - 1);
  counter !== 0 && setStock((estock)=>estock + 1);
  }

 

  useEffect(() => {
    const URL = `${UrlServerDetail}/${id}`;
  

    setIsLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .finally(() => setIsLoading(false));


     
    


  }, [id]);

  if (isLoading || !product) return <p>Cargando...</p>;

  return (

    <div>
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
              <h3>{counter}</h3>
              <h5>En stock: {stock} unidades</h5>
              <a
                className="btn-floating btn-medium waves-effect waves-light red" onClick={sumarClick}
               
              >
                <i className="material-icons">add</i>
              </a>
              <a
                className="btn-floating btn-medium waves-effect waves-light red" onClick={restarClick}
                
              >
                <i className="material-icons">remove</i>
              </a>
              <br></br>
              <br></br>
              <button className="btn">Comprar ahora</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ItemDetail;

