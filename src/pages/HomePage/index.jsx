import './style.css';
import { Header } from '../../components/Header';
import { Rooms } from '../../components/Rooms';
import { Footer } from '../../components/Footer';
import { Reservation } from '../../components/Reservation';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Rooms />
      <Reservation />
      <Footer />
    </>
  );
};
