function UserCard ({
datoproducto1,
datoproducto2,
datoproducto3,
datoproducto4,
numerocard

}){
    return (

        <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="images/office.jpg" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{numerocard}<i className="material-icons right">more_vert</i></span>
          <p><a href="#">This is a link</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>Caracteristica1: {datoproducto1}</p>
          <p>Caracteristica2: {datoproducto2}</p>
          <p>Caracteristica3:{datoproducto3}</p>
          <p>Caracteristica4: {datoproducto4}</p>
        </div>
      </div>
      );
    }

export default UserCard;
