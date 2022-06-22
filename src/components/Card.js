import "../styles/card.css";

function Card() {
  return (
    <div className="card">
      <img className="card-img" src="img/fuji.png" alt="fuji" />
      <div className="card-info">
        <div className="card-header">
          <img className="pin-icon" src="img/pin.png" alt="pin" />
          <span>Japan</span>
          <a href="https://www.google.es/maps/?hl=es">
            <span>View on Google Maps</span>
          </a>
        </div>
        <h1 className="card-title">Mount Fuji</h1>
        <span className="card-date">12 Jan, 2021 - 24 Jan, 2021</span>
        <p className="card-description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}

export default Card;
