import './App.css';
import NavBar from './Components/NavBar'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SimplesPage from './Pages/SimplesPage';
import TriplesPage from './Pages/TriplesPage';
import TortasPage from './Pages/TortasPage'
import ItemDetail from './Components/ItemDetail/ItemDetail';
import CartPage from './Pages/CartPage';
import NotFoundPage from './Pages/NotFoundPage';
import { UserProvider } from "./Context/UserContext";
import { CartProvider } from "./Context/CartContext";
import {ThankYouPage} from './Pages/ThankYouPage'
import Footer from './Components/Footer';


function App() {
   


  return (
    
          <div className="App">
                   <UserProvider>
      <CartProvider>
     
            <BrowserRouter>
            <NavBar />
              

                  <Routes>
                  
                        <Route path="/" index element={<HomePage />}/> 
                        <Route path="Simples" element={<SimplesPage />}/>
                        
                        <Route path="/Simples/producto/:id" element={<ItemDetail UrlServerDetail="PRODUCTS"/>}/>
                     
                     
                        <Route path="Triples"element={<TriplesPage/>}/>
                        <Route path="/Triples/producto/:id" element={<ItemDetail UrlServerDetail="PRODUCTS2"/>}/>

                        <Route path="Tortas" element={<TortasPage/>}/>
                        <Route path="/Tortas/producto/:id" element={<ItemDetail UrlServerDetail="PRODUCTS3"/>}/>
                        
                        <Route path="Cart" element={<CartPage />}/>
                        <Route path="Thanks/:id" element={<ThankYouPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                  </Routes>
                  <Footer/>
            </BrowserRouter>
            
            </CartProvider>
    </UserProvider>
          </div>
    

  );
}

export default App;
