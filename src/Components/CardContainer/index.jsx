import { useEffect, useState } from "react";
import {getProductos} from "../Item/Item"
import UserCard from "../UserCard";

function ItemlistContainer (){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      setIsLoading(true);
      getProductos()
        .then((data) => setProducts(data))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }, []);




return (
    
    <div className="container">{isLoading ? (
        <p>Cargando...</p>
      ) : (
        products.map((product) => <UserCard key={product.id} product={product} />)
      )}</div>
      
   
)

}


export default ItemlistContainer;