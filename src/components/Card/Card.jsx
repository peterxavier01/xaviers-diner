import "./Card.css";

const Card = ({ src, title, subtitle, amount }) => {
  return (
    <div className="card card-container">
      <div className="card-img-container">
        <img src={src} alt="meal" />
        <span>{amount}</span>
      </div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <button>Make an order</button>
    </div>
  );
};

export default Card;
