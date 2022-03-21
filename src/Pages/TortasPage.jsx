import ItemlistContainer from "../Components/CardContainer";
const TortasPage= ()=>{
    return(
        <>
        <h1 className="center-align">Tortas</h1>
        <div className="container">
          <div className="row">
            <ItemlistContainer urlServer="PRODUCTS3" />
            <div />
          </div>
        </div>
      </>
    )
}
export default TortasPage;