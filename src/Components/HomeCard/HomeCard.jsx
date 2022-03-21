import { Link } from "react-router-dom";
const HomeCard= ({pageDir,imgDir,altDir,nameDir,desDir})=>{
    return(
        <div className="col s12 m4">
        <div className="card z-depth-3">
          <div className="card-image">
            <Link to={`/${pageDir}`}>
              <img
                src={require(`../../Imagenes/${imgDir}`)} 
                alt={`${altDir}`}
              />
            </Link>
            <span className="card-title blue-text text-lighten-2 textStroke">
              <strong>{nameDir}</strong>
            </span>
          </div>
          <div className="card-content">
            <p>{desDir}</p>
          </div>
        </div>
      </div>
    )
}
export default HomeCard;