import { useEffect, useState } from "react";
import UserCard from "../UserCard";
import {getFirestore} from "../../Firebase/Firebase";

function ItemlistContainer ({urlServer}){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {

      const db = getFirestore();


       const productsCollection=db.collection(urlServer);
       

      const getDataFromFirestore = async () => {
        setIsLoading(true);
        try {
          const response = await productsCollection.get();
          if (response.empty) console.log("No hay productos");
          setProducts(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };
      getDataFromFirestore();

    }, [setIsLoading, urlServer]);
 
    if(isLoading){

      return <div className="center-align">  <div class="preloader-wrapper active">
      <div class="spinner-layer spinner-red-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div></div>

    }else if(error){

      return <p>hubo un error {error.message}</p>

    }else
    return(

      <div className="container">
        {products.map((product) => <UserCard key={product.id} product={product} />
      )}</div>

      

    )}






export default ItemlistContainer;