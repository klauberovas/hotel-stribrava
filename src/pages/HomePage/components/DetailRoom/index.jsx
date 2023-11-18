export const DetailRoom = ({ room }) => {
  return (
    <div className="column">
      <img src={`http://localhost:4000${room.img}`} />
      <p>{room.description}</p>
    </div>
  );
};
