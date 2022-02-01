import './App.css';
import NavBar from './Components/NavBar'
import ItemlistContainer from './Components/CardContainer';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    
          <div className="App">
            <NavBar />
            <ItemlistContainer />

          </div>
    

  );
}

export default App;
