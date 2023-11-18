import { DetailRoom } from '../DetailRoom';
import { Form } from '../Form';
import './style.css';
import { useEffect, useState } from 'react';

export const Reservation = ({ roomId }) => {
  const [detailRoom, setDetailRoom] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/api/rooms/${roomId}`);
      const data = await response.json();
      setDetailRoom(data.result);
    };
    fetchData();
  }, [roomId]);
  console.log('data pro pokoj', detailRoom);

  return (
    <section className="light">
      <div className="container">
        <h2>
          {detailRoom.name}, {detailRoom.price}kč na osobu za noc
        </h2>
        <div className="columns-2">
          <DetailRoom room={detailRoom} />
          <Form price={detailRoom.price} />
        </div>
      </div>
    </section>
  );
};
