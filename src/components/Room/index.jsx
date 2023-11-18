import './style.css';
export const Room = ({image, name, price }) => {

  return (
    <div className="card">
      <img className="card__image" src={`http://localhost:4001${image}`} />
      <div className="card__title">{name}</div>
      <div className="card__body">{price} Kč za osobu</div>
    </div>
  );
};
