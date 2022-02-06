import ItemlistContainer from '../Components/CardContainer/index';
const SimplesPage=()=>{
    return(
        <div>
        <h1 className="center-align">Sandwichs Simples</h1>
        <div className="container">
        <div className="row">
        <ItemlistContainer 
        urlServer="http://localhost:3001/PRODUCTS"
        
        />
        <div/>
        </div>
        
    </div>
    </div>
    )
}

export default SimplesPage;