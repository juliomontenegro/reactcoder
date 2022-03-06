
import { useNavigate } from "react-router-dom";
import"./UserCard.css"
function UserCard ({product}){ 

    const navigate= useNavigate();


    return (

     

              
      <div className="col s12 m6 valign-wrapper">
        <div className="card z-depth-2">
          <div className="card-image">
            <img className="wide" src={`${process.env.PUBLIC_URL}/assets/img/${product.img}`} alt={product.fullname} />
            <span className="card-title blue-text text-lighten-2 textStroke"><strong>{product.fullname}</strong></span>
            <button className="btn-floating btn-larg halfway-fab waves-effect waves-light green" onClick={()=>navigate(`producto/${product.id}`)}><i className="material-icons">add</i></button>
            
          </div>
          <div className="card-content">
              <p>{product.description}</p>
            </div>
      </div>
      </div>
      
      
      

       

        
      );
    }
  
  

export default UserCard;
