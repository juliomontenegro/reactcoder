import ItemlistContainer from '../Components/CardContainer/index';
const TriplesPage=()=>{
    return(
        <div>
            <h1 className="center-align">Sandwichs Triples</h1>
            <div className="container">
            <div className="row">
            <ItemlistContainer urlServer="PRODUCTS2"/>
            <div/>
            </div>
            
        </div>
        </div>
    )
}
export default TriplesPage;