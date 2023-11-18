import './style.css';
export const Room = ({ image, name, price, onSelect, roomId }) => {
  return (
    <div className="card" onClick={() => onSelect(roomId)}>
      <img className="card__image" src={`http://localhost:4000${image}`} />
      <div className="card__title">{name}</div>
      <div className="card__body">{price} Kč za osobu</div>
    </div>
  );
};
