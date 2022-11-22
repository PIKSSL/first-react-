import './Konyv.css';



function Konyv(props) {
    return (
      <div className="Konyv">
        <div className="Cim">
          <h4>{props.BookObject.title}</h4>
        </div>
        <div className="Szerzo">
          <p>{props.BookObject.author}</p>
        </div>
        <div className="Ar">
          <p>{props.BookObject.price}Ft</p>
        </div>
      </div>
    );
  }
  
  export default Konyv;
  