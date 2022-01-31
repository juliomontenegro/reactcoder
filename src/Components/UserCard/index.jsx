import React from 'react';
import"./UserCard.css"
function UserCard ({product}){ 
    const [stock, setStock]= React.useState(10);
    const[counter, setCounter]= React.useState(0);
    const sumarClick = () =>{
      
 
     stock!==0&& setCounter(counter+1);
     stock!==0&&setStock(stock-1);
      
        
       
       
   };
   const restarClick = () =>{
    counter!==0&& setCounter(counter-1);
    counter!==0&&setStock(stock+1);}
    return (
        <div className="row valign-wrapper">
        <div className="col">
        <div className="card small">
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{product.numerocard}<i className="material-icons right">more_vert</i></span>
          <div>
              <h3>{counter}</h3>
              <h4>En stock: {stock} unidades</h4>
              <a className="btn-floating btn-small waves-effect waves-light red" onClick={sumarClick}><i className="material-icons">add</i></a>
              <a className="btn-floating btn-small waves-effect waves-light red" onClick={restarClick}><i className="material-icons">remove</i></a>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>Caracteristica1: {product.datoproducto1}</p>
          <p>Caracteristica2: {product.datoproducto2}</p>
          <p>Caracteristica3:{product.datoproducto3}</p>
          <p>Caracteristica4: {product.datoproducto4}</p>
        </div>
      </div>


        </div>
      </div>
        
      );
    }
  
  

export default UserCard;
