import { useEffect, useState } from "react";

import UserCard from "../UserCard";

function ItemlistContainer (){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {

      const URL="http://localhost:3001/PRODUCTS";

      setIsLoading(true);

      fetch(URL)
      .then((response)=>response.json())
      .then((json)=>setProducts(json))
      .catch((err)=>setError(err))
      .finally(()=>setIsLoading(false));


    }, []);
 
    if(isLoading){

      return <p>Cargando...</p>

    }else if(error){

      return <p>hubo un error {error.message}</p>

    }else
    return(

      <div className="container">
        {products.map((product) => <UserCard key={product.id} product={product} />
      )}</div>

      

    )}






export default ItemlistContainer;