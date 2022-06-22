import "../styles/card.css";

function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={`img/${props.item.image}`} alt="fuji" />
      <div className="card-info">
        <div className="card-header">
          <img className="pin-icon" src="img/pin.png" alt="pin" />
          <span>{props.item.location}</span>
          <a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer">
            <span>View on Google Maps</span>
          </a>
        </div>
        <h1 className="card-title">{props.item.title}</h1>
        <span className="card-date">{props.item.startDate} - {props.item.endDate}</span>
        <p className="card-description">{props.item.description}</p>
      </div>
    </div>
  );
}

export default Card;
