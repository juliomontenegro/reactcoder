import React from 'react';
function UserCard ({
datoproducto1,
datoproducto2,
datoproducto3,
datoproducto4,
numerocard



}){ 
    
    const[counter, setCounter]= React.useState(0);
    const sumarClick = () =>{
       setCounter(counter+1);
   };
   const restarClick = () =>{
       if (counter!==0){
           setCounter(counter-1)
       }}
    return (
        <div className="row">
        <div className="col s12 m6">
        <div className="card small">
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{numerocard}<i className="material-icons right">more_vert</i></span>
          <div>
              <h3>{counter}</h3>
              <a class="btn-floating btn-small waves-effect waves-light red" onClick={sumarClick}><i class="material-icons">add</i></a>
              <a class="btn-floating btn-small waves-effect waves-light red" onClick={restarClick}><i class="material-icons">remove</i></a>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>Caracteristica1: {datoproducto1}</p>
          <p>Caracteristica2: {datoproducto2}</p>
          <p>Caracteristica3:{datoproducto3}</p>
          <p>Caracteristica4: {datoproducto4}</p>
        </div>
      </div>


        </div>
      </div>
        
      );
    }
  
  

export default UserCard;
