import './style.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Rooms } from './components/Rooms';
import { Footer } from './components/Footer';
import { Reservation } from './components/Reservation';

export const HomePage = () => {
  const [roomId, setRoomId] = useState(0);
  return (
    <>
      <Header />
      <Rooms onSelect={setRoomId} />
      <Reservation roomId={roomId} />
      <Footer />
    </>
  );
};
