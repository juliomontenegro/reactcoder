import './App.css';
import NavBar from './Components/NavBar'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SimplesPage from './Pages/SimplesPage';
import TriplesPage from './Pages/TriplesPage';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import NotFoundPage from './Pages/NotFoundPage';


function App() {
   
   const urldetail2=`http://localhost:3001/PRODUCTS2/`;


  return (
    
          <div className="App">
           
            <BrowserRouter>
            <NavBar />
              

                  <Routes>
                  
                        <Route path="/" index element={<HomePage />}/> 
                        <Route path="Simples" element={<SimplesPage />}/>
                        
                        <Route path="/Simples/producto/:id" element={<ItemDetail UrlServerDetail="http://localhost:3001/PRODUCTS/"/>}/>
                     
                     
                        <Route path="Triples"element={<TriplesPage/>}/>
                        <Route path="/Triples/producto/:id" element={<ItemDetail UrlServerDetail="http://localhost:3001/PRODUCTS2/"/>}/>
                        
                      
                        <Route path="*" element={<NotFoundPage/>}/>
                  </Routes>
            </BrowserRouter>
            
          </div>
    

  );
}

export default App;
