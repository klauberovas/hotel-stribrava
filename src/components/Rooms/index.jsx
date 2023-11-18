import { Room } from '../Room';
import { useState, useEffect} from 'react'

export const Rooms = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4001/api/rooms');
      const data = await response.json();
      setRooms(data.result);
      console.log(data)
    }
    
    fetchRooms()
  }, []);

  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý</p>
        <div className="cards-row">
        {rooms.map((room) => (
        <Room
          key={room.id}
          name={room.name}
          image={room.img}
          price={room.price}
        />
      ))}
        </div>
      </div>
    </section>
  );
};
